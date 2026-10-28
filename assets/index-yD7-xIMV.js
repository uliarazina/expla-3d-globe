(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function uM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vh={exports:{}},ue={};var nS;function cM(){if(nS)return ue;nS=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),M=Symbol.iterator;function x(H){return H===null||typeof H!="object"?null:(H=M&&H[M]||H["@@iterator"],typeof H=="function"?H:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,E={};function U(H,ct,tt){this.props=H,this.context=ct,this.refs=E,this.updater=tt||b}U.prototype.isReactComponent={},U.prototype.setState=function(H,ct){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ct,"setState")},U.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function N(){}N.prototype=U.prototype;function w(H,ct,tt){this.props=H,this.context=ct,this.refs=E,this.updater=tt||b}var F=w.prototype=new N;F.constructor=w,y(F,U.prototype),F.isPureReactComponent=!0;var O=Array.isArray;function P(){}var k={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function C(H,ct,tt){var nt=tt.ref;return{$$typeof:s,type:H,key:ct,ref:nt!==void 0?nt:null,props:tt}}function z(H,ct){return C(H.type,ct,H.props)}function $(H){return typeof H=="object"&&H!==null&&H.$$typeof===s}function it(H){var ct={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(tt){return ct[tt]})}var ot=/\/+/g;function I(H,ct){return typeof H=="object"&&H!==null&&H.key!=null?it(""+H.key):ct.toString(36)}function G(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(P,P):(H.status="pending",H.then(function(ct){H.status==="pending"&&(H.status="fulfilled",H.value=ct)},function(ct){H.status==="pending"&&(H.status="rejected",H.reason=ct)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function st(H,ct,tt,nt,bt){var Mt=typeof H;(Mt==="undefined"||Mt==="boolean")&&(H=null);var Rt=!1;if(H===null)Rt=!0;else switch(Mt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(H.$$typeof){case s:case e:Rt=!0;break;case m:return Rt=H._init,st(Rt(H._payload),ct,tt,nt,bt)}}if(Rt)return bt=bt(H),Rt=nt===""?"."+I(H,0):nt,O(bt)?(tt="",Rt!=null&&(tt=Rt.replace(ot,"$&/")+"/"),st(bt,ct,tt,"",function(V){return V})):bt!=null&&($(bt)&&(bt=z(bt,tt+(bt.key==null||H&&H.key===bt.key?"":(""+bt.key).replace(ot,"$&/")+"/")+Rt)),ct.push(bt)),1;Rt=0;var xt=nt===""?".":nt+":";if(O(H))for(var Xt=0;Xt<H.length;Xt++)nt=H[Xt],Mt=xt+I(nt,Xt),Rt+=st(nt,ct,tt,Mt,bt);else if(Xt=x(H),typeof Xt=="function")for(H=Xt.call(H),Xt=0;!(nt=H.next()).done;)nt=nt.value,Mt=xt+I(nt,Xt++),Rt+=st(nt,ct,tt,Mt,bt);else if(Mt==="object"){if(typeof H.then=="function")return st(G(H),ct,tt,nt,bt);throw ct=String(H),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function Y(H,ct,tt){if(H==null)return H;var nt=[],bt=0;return st(H,nt,"","",function(Mt){return ct.call(tt,Mt,bt++)}),nt}function vt(H){if(H._status===-1){var ct=H._result,tt=ct();tt.then(function(nt){(H._status===0||H._status===-1)&&(H._status=1,H._result=nt,tt.status===void 0&&(tt.status="fulfilled",tt.value=nt))},function(nt){(H._status===0||H._status===-1)&&(H._status=2,H._result=nt,tt.status===void 0&&(tt.status="rejected",tt.reason=nt))}),H._status===-1&&(H._status=0,H._result=tt)}if(H._status===1)return H._result.default;throw H._result}var _t=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Bt(H){var ct=k.T,tt={};tt.types=ct!==null?ct.types:null,k.T=tt;try{var nt=H(),bt=k.S;bt!==null&&bt(tt,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(P,_t)}catch(Mt){_t(Mt)}finally{ct!==null&&tt.types!==null&&(ct.types=tt.types),k.T=ct}}function $t(H){var ct=k.T;if(ct!==null){var tt=ct.types;tt===null?ct.types=[H]:tt.indexOf(H)===-1&&tt.push(H)}else Bt($t.bind(null,H))}var ae={map:Y,forEach:function(H,ct,tt){Y(H,function(){ct.apply(this,arguments)},tt)},count:function(H){var ct=0;return Y(H,function(){ct++}),ct},toArray:function(H){return Y(H,function(ct){return ct})||[]},only:function(H){if(!$(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return ue.Activity=p,ue.Children=ae,ue.Component=U,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=w,ue.StrictMode=r,ue.Suspense=v,ue.ViewTransition=_,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ue.__COMPILER_RUNTIME={__proto__:null,c:function(H){return k.H.useMemoCache(H)}},ue.addTransitionType=$t,ue.cache=function(H){return function(){return H.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(H,ct,tt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var nt=y({},H.props),bt=H.key;if(ct!=null)for(Mt in ct.key!==void 0&&(bt=""+ct.key),ct)!R.call(ct,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&ct.ref===void 0||(nt[Mt]=ct[Mt]);var Mt=arguments.length-2;if(Mt===1)nt.children=tt;else if(1<Mt){for(var Rt=Array(Mt),xt=0;xt<Mt;xt++)Rt[xt]=arguments[xt+2];nt.children=Rt}return C(H.type,bt,nt)},ue.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:c,_context:H},H},ue.createElement=function(H,ct,tt){var nt,bt={},Mt=null;if(ct!=null)for(nt in ct.key!==void 0&&(Mt=""+ct.key),ct)R.call(ct,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(bt[nt]=ct[nt]);var Rt=arguments.length-2;if(Rt===1)bt.children=tt;else if(1<Rt){for(var xt=Array(Rt),Xt=0;Xt<Rt;Xt++)xt[Xt]=arguments[Xt+2];bt.children=xt}if(H&&H.defaultProps)for(nt in Rt=H.defaultProps,Rt)bt[nt]===void 0&&(bt[nt]=Rt[nt]);return C(H,Mt,bt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(H){return{$$typeof:h,render:H}},ue.isValidElement=$,ue.lazy=function(H){return{$$typeof:m,_payload:{_status:-1,_result:H},_init:vt}},ue.memo=function(H,ct){return{$$typeof:g,type:H,compare:ct===void 0?null:ct}},ue.startTransition=Bt,ue.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ue.use=function(H){return k.H.use(H)},ue.useActionState=function(H,ct,tt){return k.H.useActionState(H,ct,tt)},ue.useCallback=function(H,ct){return k.H.useCallback(H,ct)},ue.useContext=function(H){return k.H.useContext(H)},ue.useDebugValue=function(){},ue.useDeferredValue=function(H,ct){return k.H.useDeferredValue(H,ct)},ue.useEffect=function(H,ct){return k.H.useEffect(H,ct)},ue.useEffectEvent=function(H){return k.H.useEffectEvent(H)},ue.useId=function(){return k.H.useId()},ue.useImperativeHandle=function(H,ct,tt){return k.H.useImperativeHandle(H,ct,tt)},ue.useInsertionEffect=function(H,ct){return k.H.useInsertionEffect(H,ct)},ue.useLayoutEffect=function(H,ct){return k.H.useLayoutEffect(H,ct)},ue.useMemo=function(H,ct){return k.H.useMemo(H,ct)},ue.useOptimistic=function(H,ct){return k.H.useOptimistic(H,ct)},ue.useReducer=function(H,ct,tt){return k.H.useReducer(H,ct,tt)},ue.useRef=function(H){return k.H.useRef(H)},ue.useState=function(H){return k.H.useState(H)},ue.useSyncExternalStore=function(H,ct,tt){return k.H.useSyncExternalStore(H,ct,tt)},ue.useTransition=function(){return k.H.useTransition()},ue.version="19.3.1",ue}var iS;function Pm(){return iS||(iS=1,Vh.exports=cM()),Vh.exports}var Fe=Pm();const K=uM(Fe);var kh={exports:{}},_l={},Xh={exports:{}},qh={};var aS;function fM(){return aS||(aS=1,(function(s){function e(G,st){var Y=G.length;G.push(st);t:for(;0<Y;){var vt=Y-1>>>1,_t=G[vt];if(0<l(_t,st))G[vt]=st,G[Y]=_t,Y=vt;else break t}}function i(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var st=G[0],Y=G.pop();if(Y!==st){G[0]=Y;t:for(var vt=0,_t=G.length,Bt=_t>>>1;vt<Bt;){var $t=2*(vt+1)-1,ae=G[$t],H=$t+1,ct=G[H];if(0>l(ae,Y))H<_t&&0>l(ct,ae)?(G[vt]=ct,G[H]=Y,vt=H):(G[vt]=ae,G[$t]=Y,vt=$t);else if(H<_t&&0>l(ct,Y))G[vt]=ct,G[H]=Y,vt=H;else break t}}return st}function l(G,st){var Y=G.sortIndex-st.sortIndex;return Y!==0?Y:G.id-st.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var v=[],g=[],m=1,p=null,_=3,M=!1,x=!1,b=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(G){for(var st=i(g);st!==null;){if(st.callback===null)r(g);else if(st.startTime<=G)r(g),st.sortIndex=st.expirationTime,e(v,st);else break;st=i(g)}}function F(G){if(b=!1,w(G),!x)if(i(v)!==null)x=!0,O||(O=!0,$());else{var st=i(g);st!==null&&I(F,st.startTime-G)}}var O=!1,P=-1,k=5,R=-1;function C(){return y?!0:!(s.unstable_now()-R<k)}function z(){if(y=!1,O){var G=s.unstable_now();R=G;var st=!0;try{t:{x=!1,b&&(b=!1,U(P),P=-1),M=!0;var Y=_;try{e:{for(w(G),p=i(v);p!==null&&!(p.expirationTime>G&&C());){var vt=p.callback;if(typeof vt=="function"){p.callback=null,_=p.priorityLevel;var _t=vt(p.expirationTime<=G);if(G=s.unstable_now(),typeof _t=="function"){p.callback=_t,w(G),st=!0;break e}p===i(v)&&r(v),w(G)}else r(v);p=i(v)}if(p!==null)st=!0;else{var Bt=i(g);Bt!==null&&I(F,Bt.startTime-G),st=!1}}break t}finally{p=null,_=Y,M=!1}st=void 0}}finally{st?$():O=!1}}}var $;if(typeof N=="function")$=function(){N(z)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ot=it.port2;it.port1.onmessage=z,$=function(){ot.postMessage(null)}}else $=function(){E(z,0)};function I(G,st){P=E(function(){G(s.unstable_now())},st)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(G){switch(_){case 1:case 2:case 3:var st=3;break;default:st=_}var Y=_;_=st;try{return G()}finally{_=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(G,st){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Y=_;_=G;try{return st()}finally{_=Y}},s.unstable_scheduleCallback=function(G,st,Y){var vt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?vt+Y:vt):Y=vt,G){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Y+_t,G={id:m++,callback:st,priorityLevel:G,startTime:Y,expirationTime:_t,sortIndex:-1},Y>vt?(G.sortIndex=Y,e(g,G),i(v)===null&&G===i(g)&&(b?(U(P),P=-1):b=!0,I(F,Y-vt))):(G.sortIndex=_t,e(v,G),x||M||(x=!0,O||(O=!0,$()))),G},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(G){var st=_;return function(){var Y=_;_=st;try{return G.apply(this,arguments)}finally{_=Y}}}})(qh)),qh}var rS;function dM(){return rS||(rS=1,Xh.exports=fM()),Xh.exports}var Yh={exports:{}},Ln={};var sS;function hM(){if(sS)return Ln;sS=1;var s=Pm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(m,p,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===d?d:""+M,children:m,containerInfo:p,implementation:_}}var v=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(m){return{$$typeof:c,_reason:m}},Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return h(m,p,null,_)},Ln.flushSync=function(m){var p=v.T,_=r.p;try{if(v.T=null,r.p=2,m)return m()}finally{v.T=p,r.p=_,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,M=g(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:x,fetchPriority:b}):_==="script"&&r.d.X(m,{crossOrigin:M,integrity:x,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=g(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,M=g(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=g(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return v.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var oS;function pM(){if(oS)return Yh.exports;oS=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yh.exports=hM(),Yh.exports}var lS;function mM(){if(lS)return _l;lS=1;var s=dM(),e=Pm(),i=pM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(c(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return v(u),t;if(f===o)return v(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,o=f;break}if(T===o){S=!0,o=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=u;break}if(T===o){S=!0,o=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,o,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,o,u,f))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function x(t){var n=[null,null],a=_(t);return a===null||b(n,t,a.child,{foundSelf:!1}),n}function b(t,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&b(t,n,a.child,o))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var E=null,U=null;function N(t,n,a){return t===a?!0:t===n?(E=t,!0):!1}function w(t,n,a){return t===a?(U=t,!1):t===n?(U!==null&&(E=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var o=0,u=t;u;u=a(u))o++;u=0;for(var f=n;f;f=a(f))u++;for(;0<o-u;)t=a(t),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,k=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),ot=Symbol.for("react.consumer"),I=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),$t=Symbol.for("react.legacy_hidden"),ae=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),tt=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=tt&&t[tt]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case it:return"Profiler";case $:return"StrictMode";case st:return"Suspense";case Y:return"SuspenseList";case Bt:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case I:return t.displayName||"Context";case ot:return(t._context.displayName||"Context")+".Consumer";case G:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Mt(t.type)||"Memo";case _t:n=t._payload,t=t._init;try{return Mt(t(n))}catch{}}return null}var Rt=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},Re=[],Qt=-1;function Jt(t){return{current:t}}function Ut(t){0>Qt||(t.current=Re[Qt],Re[Qt]=null,Qt--)}function se(t,n){Qt++,Re[Qt]=t.current,t.current=n}var Ft=Jt(null),oe=Jt(null),be=Jt(null),Ge=Jt(null);function L(t,n){switch(se(be,n),se(oe,t),se(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?f_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=f_(n),t=d_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ut(Ft),se(Ft,t)}function A(){Ut(Ft),Ut(oe),Ut(be)}function at(t){var n=t.memoizedState;n!==null&&(Ws._currentValue=n.memoizedState,se(Ge,t)),n=Ft.current;var a=d_(n,t.type);n!==a&&(se(oe,t),se(Ft,a))}function pt(t){oe.current===t&&(Ut(Ft),Ut(oe)),Ge.current===t&&(Ut(Ge),Ws._currentValue=V)}var Et,ht;function Tt(t){if(Et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+ht}var yt=!1;function Vt(t,n){if(!t||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Pt){var W=Pt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Pt){W=Pt}gt=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){W=Pt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Pt){if(Pt&&W&&typeof Pt.stack=="string")return[Pt.stack,W.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var B=S.split(`
`),j=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===j.length)for(o=B.length-1,u=j.length-1;1<=o&&0<=u&&B[o]!==j[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==j[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==j[u]){var lt=`
`+B[o].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=o&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Tt(a):""}function Wt(t,n){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return t.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return Vt(t.type,!1);case 11:return Vt(t.type.render,!1);case 1:return Vt(t.type,!0);case 31:return Tt("Activity");case 30:return Tt("ViewTransition");default:return""}}function At(t){try{var n="",a=null;do n+=Wt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var zt=Object.prototype.hasOwnProperty,ie=s.unstable_scheduleCallback,Lt=s.unstable_cancelCallback,It=s.unstable_shouldYield,fe=s.unstable_requestPaint,q=s.unstable_now,Dt=s.unstable_getCurrentPriorityLevel,Ot=s.unstable_ImmediatePriority,Yt=s.unstable_UserBlockingPriority,Ct=s.unstable_NormalPriority,St=s.unstable_LowPriority,Kt=s.unstable_IdlePriority,ce=s.log,qe=s.unstable_setDisableYieldValue,ye=null,an=null;function Sn(t){if(typeof ce=="function"&&qe(t),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(ye,t)}catch{}}var zn=Math.clz32?Math.clz32:Kl,ca=Math.log,Co=Math.LN2;function Kl(t){return t>>>=0,t===0?32:31-(ca(t)/Co|0)|0}var Tr=256,fa=262144,br=4194304;function gi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ar(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=gi(o):(S&=T,S!==0?u=gi(S):a||(a=T&~t,a!==0&&(u=gi(a))))):(T=o&~f,T!==0?u=gi(T):S!==0?u=gi(S):a||(a=o&~t,a!==0&&(u=gi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Fa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ql(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var o=31-zn(a),u=1<<o;n|=t[o],a&=~u}return n}function gf(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jl(){var t=br;return br<<=1,(br&62914560)===0&&(br=4194304),t}function wo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vf(t,n,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,j=t.hiddenUpdates;for(a=S&~a;0<a;){var lt=31-zn(a),gt=1<<lt;T[lt]=0,B[lt]=-1;var W=j[lt];if(W!==null)for(j[lt]=null,lt=0;lt<W.length;lt++){var rt=W[lt];rt!==null&&(rt.lane&=-536870913)}a&=~gt}o!==0&&D(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function D(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-zn(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Q(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-zn(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ft(t,n){var a=n&-n;return a=(a&42)!==0?1:dt(a),(a&(t.suspendedLanes|n))!==0?0:a}function dt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function J(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=Xt.p;return t!==0?t:(t=window.event,t===void 0?32:j_(t.type))}function Ht(t,n){var a=Xt.p;try{return Xt.p=t,n()}finally{Xt.p=a}}var kt=Math.random().toString(36).slice(2),Nt="__reactFiber$"+kt,Zt="__reactProps$"+kt,re="__reactContainer$"+kt,ee="__reactEvents$"+kt,_e="__reactListeners$"+kt,Ie="__reactHandles$"+kt,$e="__reactResources$"+kt,Le="__reactMarker$"+kt,we="__reactLoad$"+kt;function ne(t){delete t[Nt],delete t[Zt],delete t[_e],delete t[Ie]}function Oe(t){var n;if(n=t[Nt])return n;for(var a=t.parentNode;a;){if(n=a[re]||a[Nt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=w_(t);t!==null;){if(a=t[Nt])return a;t=w_(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Nt]||t[re]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function En(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ai(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(t){t[Le]=!0}function Ha(t){t[we]=void 0}var je=new Set,Vn={};function hn(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(Vn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var In=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cs={},Yi={};function CE(t){return zt.call(Yi,t)?!0:zt.call(cs,t)?!1:In.test(t)?Yi[t]=!0:(cs[t]=!0,!1)}var Ue=!1;function Qm(){var t=Ue;return Ue=!1,t}function $l(t,n,a){if(CE(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function tu(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function da(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,o)}}function ri(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wE(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _f(t){if(!t._valueTracker){var n=Jm(t)?"checked":"value";t._valueTracker=wE(t,n,""+t[n])}}function $m(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Jm(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}var DE=/[\n"\\]/g;function vi(t){return t.replace(DE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sf(t,n,a,o,u,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ri(n)):t.value!==""+ri(n)&&(t.value=""+ri(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?S==="number"&&t.value==n?Ef(t,ri(t.value)):Ef(t,ri(n)):a!=null?Ef(t,ri(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ri(T):t.removeAttribute("name")}function t0(t,n,a,o,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){_f(t);return}a=a!=null?""+ri(a):"",n=n!=null?""+ri(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),_f(t)}function Ef(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function fs(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ri(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function e0(t,n,a){if(n!=null&&(n=""+ri(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ri(a):""}function n0(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Rt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ri(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),_f(t)}function ds(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var UE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function i0(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||UE.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function a0(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",Ue=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(i0(t,u,o),Ue=!0)}else for(var f in n)n.hasOwnProperty(f)&&i0(t,f,n[f])}function yf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var NE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),LE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eu(t){return LE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var Mf=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hs=null,ps=null;function r0(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Sf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Zt]||null;if(!u)throw Error(r(90));Sf(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&$m(o)}break t;case"textarea":e0(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fs(t,!!a.multiple,n,!1)}}}var Tf=!1;function s0(t,n,a){if(Tf)return t(n,a);Tf=!0;try{var o=t(n);return o}finally{if(Tf=!1,(hs!==null||ps!==null)&&(ec(),hs&&(n=hs,t=ps,ps=hs=null,r0(n),t)))for(n=0;n<t.length;n++)r0(t[n])}}function Do(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Zt]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=!1;if(ha)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{bf=!1}var Ga=null,Af=null,nu=null;function o0(){if(nu)return nu;var t,n=Af,a=n.length,o,u="value"in Ga?Ga.value:Ga.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return nu=u.slice(t,1<o?1-o:void 0)}function iu(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function au(){return!0}function l0(){return!1}function kn(t){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?au:l0,this.isPropagationStopped=l0,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=au)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=au)},persist:function(){},isPersistent:au}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=kn(Va),No=P({},Va,{view:0,detail:0}),OE=kn(No),Rf,Cf,Lo,su=P({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(Rf=t.screenX-Lo.screenX,Cf=t.screenY-Lo.screenY):Cf=Rf=0,Lo=t),Rf)},movementY:function(t){return"movementY"in t?t.movementY:Cf}}),u0=kn(su),PE=P({},su,{dataTransfer:0}),zE=kn(PE),IE=P({},No,{relatedTarget:0}),wf=kn(IE),BE=P({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=kn(BE),HE=P({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GE=kn(HE),VE=P({},Va,{data:0}),c0=kn(VE),kE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YE(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=qE[t])?!!n[t]:!1}function Df(){return YE}var WE=P({},No,{key:function(t){if(t.key){var n=kE[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=iu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?iu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?iu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZE=kn(WE),jE=P({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=kn(jE),KE=P({},Va,{submitter:0}),QE=kn(KE),JE=P({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),$E=kn(JE),t1=P({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),e1=kn(t1),n1=P({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=kn(n1),a1=P({},Va,{newState:0,oldState:0,source:0}),r1=kn(a1),s1=[9,13,27,32],Uf=ha&&"CompositionEvent"in window,Oo=null;ha&&"documentMode"in document&&(Oo=document.documentMode);var o1=ha&&"TextEvent"in window&&!Oo,d0=ha&&(!Uf||Oo&&8<Oo&&11>=Oo),h0=" ",p0=!1;function m0(t,n){switch(t){case"keyup":return s1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function l1(t,n){switch(t){case"compositionend":return g0(n);case"keypress":return n.which!==32?null:(p0=!0,h0);case"textInput":return t=n.data,t===h0&&p0?null:t;default:return null}}function u1(t,n){if(ms)return t==="compositionend"||!Uf&&m0(t,n)?(t=o0(),nu=Af=Ga=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return d0&&n.locale!=="ko"?null:n.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!c1[t.type]:n==="textarea"}function _0(t,n,a,o){hs?ps?ps.push(o):ps=[o]:hs=o,n=oc(n,"onChange"),0<n.length&&(a=new ru("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Po=null,zo=null;function f1(t){r_(t,0)}function ou(t){var n=En(t);if($m(n))return t}function S0(t,n){if(t==="change")return n}var E0=!1;if(ha){var Nf;if(ha){var Lf="oninput"in document;if(!Lf){var y0=document.createElement("div");y0.setAttribute("oninput","return;"),Lf=typeof y0.oninput=="function"}Nf=Lf}else Nf=!1;E0=Nf&&(!document.documentMode||9<document.documentMode)}function M0(){Po&&(Po.detachEvent("onpropertychange",x0),zo=Po=null)}function x0(t){if(t.propertyName==="value"&&ou(zo)){var n=[];_0(n,zo,t,xf(t)),s0(f1,n)}}function d1(t,n,a){t==="focusin"?(M0(),Po=n,zo=a,Po.attachEvent("onpropertychange",x0)):t==="focusout"&&M0()}function h1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(zo)}function p1(t,n){if(t==="click")return ou(n)}function m1(t,n){if(t==="input"||t==="change")return ou(n)}function g1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:g1;function Io(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!zt.call(n,u)||!si(t[u],n[u]))return!1}return!0}function Of(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function T0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function b0(t,n){var a=T0(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=T0(a)}}function A0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?A0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function R0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Of(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Of(t.document)}return n}function Pf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var v1=ha&&"documentMode"in document&&11>=document.documentMode,gs=null,zf=null,Bo=null,If=!1;function C0(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;If||gs==null||gs!==Of(o)||(o=gs,"selectionStart"in o&&Pf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Bo&&Io(Bo,o)||(Bo=o,o=oc(zf,"onSelect"),0<o.length&&(n=new ru("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=gs)))}function Cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var vs={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},Bf={},w0={};ha&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function wr(t){if(Bf[t])return Bf[t];if(!vs[t])return t;var n=vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in w0)return Bf[t]=n[a];return t}var D0=wr("animationend"),U0=wr("animationiteration"),N0=wr("animationstart"),_1=wr("transitionrun"),S1=wr("transitionstart"),E1=wr("transitioncancel"),L0=wr("transitionend"),O0=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function Ni(t,n){O0.set(t,n),hn(n,[t])}var y1=0;function pa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=zi.identifierPrefix;var a=y1++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function P0(t){if(t==null||typeof t=="string")return t;var n=null,a=Is;if(a!==null)for(var o=0;o<a.length;o++){var u=t[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ma(t,n){return t=P0(t),n=P0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var lu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],_s=0,Hf=0;function uu(){for(var t=_s,n=Hf=_s=0;n<t;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&z0(a,u,f)}}function cu(t,n,a,o){_i[_s++]=t,_i[_s++]=n,_i[_s++]=a,_i[_s++]=o,Hf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Gf(t,n,a,o){return cu(t,n,a,o),fu(t)}function Dr(t,n){return cu(t,null,null,n),fu(t)}function z0(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-zn(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function fu(t){if(50<sl)throw sl=0,tc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ss={};function M1(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,o){return new M1(t,n,a,o)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function I0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function du(t,n,a,o,u,f){var S=0;if(o=t,typeof o=="function")Vf(o)&&(S=1);else if(typeof o=="string")S=Ky(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(o){case Bt:return t=jn(31,a,n,u),t.elementType=Bt,t.lanes=f,t;case z:return Ur(a.children,u,f,n);case $:S=8,u|=24;break;case it:return t=jn(12,a,n,u|2),t.elementType=it,t.lanes=f,t;case st:return t=jn(13,a,n,u),t.elementType=st,t.lanes=f,t;case Y:return t=jn(19,a,n,u),t.elementType=Y,t.lanes=f,t;case $t:case H:return t=u|32,t=jn(30,a,n,t),t.elementType=H,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case I:S=10;break t;case ot:S=9;break t;case G:S=11;break t;case vt:S=14;break t;case _t:S=16,o=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=jn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ur(t,n,a,o){return t=jn(7,t,o,n),t.lanes=a,t}function kf(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function B0(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Xf(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var F0=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=F0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:At(n)},F0.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var Es=[],ys=0,hu=null,Fo=0,Ei=[],yi=0,ka=null,Zi=1,ji="";function va(t,n){Es[ys++]=Fo,Es[ys++]=hu,hu=t,Fo=n}function H0(t,n,a){Ei[yi++]=Zi,Ei[yi++]=ji,Ei[yi++]=ka,ka=t;var o=Zi;t=ji;var u=32-zn(o)-1;o&=~(1<<u),a+=1;var f=32-zn(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Zi=1<<32-zn(n)+u|a<<u|o,ji=f+t}else Zi=1<<f|a<<u|o,ji=t}function pu(t){t.return!==null&&(va(t,1),H0(t,1,0))}function qf(t){for(;t===hu;)hu=Es[--ys],Es[ys]=null,Fo=Es[--ys],Es[ys]=null;for(;t===ka;)ka=Ei[--yi],Ei[yi]=null,ji=Ei[--yi],Ei[yi]=null,Zi=Ei[--yi],Ei[yi]=null}function G0(t,n){Ei[yi++]=Zi,Ei[yi++]=ji,Ei[yi++]=ka,Zi=n.id,ji=n.overflow,ka=t}var Tn=null,Ke=null,ve=!1,Xa=null,Mi=!1,Yf=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ho(Si(n,t)),Yf}function V0(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Nt]=t,n[Zt]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<ll.length;a++)Ee(ll[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),t0(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),n0(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||u_(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||qa(t,!0)}function mu(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Tn=Tn.return}}function Ms(t){if(t!==Tn)return!1;if(!ve)return mu(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mh(t.type,t.memoizedProps)),a=!a),a&&Ke&&qa(t),mu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=C_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=C_(t)}else n===27?(n=Ke,or(t.type)?(t=Uh,Uh=null,Ke=t):Ke=n):Ke=Tn?Ti(t.stateNode.nextSibling):null;return!0}function Nr(){Ke=Tn=null,ve=!1}function Wf(){var t=Xa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Xa=null),t}function Ho(t){Xa===null?Xa=[t]:Xa.push(t)}var Zf=Jt(null),Lr=null,_a=null;function Ya(t,n,a){se(Zf,n._currentValue),n._currentValue=a}function Sa(t){t._currentValue=Zf.current,Ut(Zf)}function gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function jf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),gu(f.return,a,t),o||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),gu(S,a,t),S=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,S=u.alternate,S!==null&&(S.lanes|=a),gu(u.return,a,t),S=u.child,S=S!==null?S.sibling:null):S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Or(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;si(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ge.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ws):t=[Ws])}u=u.return}return t!==null&&jf(n,t,a,o),n.flags|=262144,t!==null}function vu(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Lr=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return k0(Lr,t)}function _u(t,n){return Lr===null&&Pr(t),k0(t,n)}function k0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(t===null)throw Error(r(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return a}var x1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},T1=s.unstable_scheduleCallback,b1=s.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kf(){return{controller:new x1,data:new Map,refCount:0}}function Go(t){t.refCount--,t.refCount===0&&T1(b1,function(){t.controller.abort()})}function X0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var o=n[t];a.indexOf(o)===-1&&a.push(o)}}}var Vo=null;function A1(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var ko=null,Qf=0,zr=0,xs=null;function R1(t,n){if(ko===null){var a=ko=[];Qf=0,zr=hh(),xs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qf++,n.then(q0,q0),n}function q0(){if(--Qf===0&&(Vo=null,ko!==null)){xs!==null&&(xs.status="fulfilled");var t=ko;ko=null,zr=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function C1(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Y0=xt.S;xt.S=function(t,n){if(Bv=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&R1(t,n),Vo!==null)for(var a=Gs;a!==null;)X0(a,Vo),a=a.next;if(a=t.types,a!==null){for(var o=Gs;o!==null;)X0(o,a),o=o.next;if(zr!==0){o=Vo,o===null&&(o=Vo=[]);for(var u=0;u<a.length;u++){var f=a[u];o.indexOf(f)===-1&&o.push(f)}}}Y0!==null&&Y0(t,n)};var Ir=Jt(null);function Jf(){var t=Ir.current;return t!==null?t:Ze.pooledCache}function Su(t,n){n===null?se(Ir,Ir.current):se(Ir,n.pool)}function W0(){var t=Jf();return t===null?null:{parent:pn._currentValue,pool:t}}var Ts=Error(r(460)),$f=Error(r(474)),Eu=Error(r(542)),yu={then:function(){}};function Z0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function j0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Q0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Q0(t),t}throw Fr=n,Ts}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fr=a,Ts):a}}var Fr=null;function K0(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function Q0(t){if(t===Ts||t===Eu)throw Error(r(483))}var bs=null,Xo=0;function Mu(t){var n=Xo;return Xo+=1,bs===null&&(bs=[]),j0(bs,t,n)}function Wa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xu(t,n){throw n.$$typeof===k?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function J0(t){function n(Z,X){if(t){var et=Z.deletions;et===null?(Z.deletions=[X],Z.flags|=16):et.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key===null?X.set(Z.index,Z):X.set(Z.key,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ga(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,et){return Z.index=et,t?(et=Z.alternate,et!==null?(et=et.index,et<X?(Z.flags|=2,X):et):(Z.flags|=134217730,X)):(Z.flags|=1048576,X)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function T(Z,X,et,mt){return X===null||X.tag!==6?(X=kf(et,Z.mode,mt),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function B(Z,X,et,mt){var qt=et.type;return qt===z?(Z=lt(Z,X,et.props.children,mt,et.key),Wa(Z,et),Z):X!==null&&(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===_t&&Br(qt)===X.type)?(X=u(X,et.props),Wa(X,et),X.return=Z,X):(X=du(et.type,et.key,et.props,null,Z.mode,mt),Wa(X,et),X.return=Z,X)}function j(Z,X,et,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Xf(et,Z.mode,mt),X.return=Z,X):(X=u(X,et.children||[]),X.return=Z,X)}function lt(Z,X,et,mt,qt){return X===null||X.tag!==7?(X=Ur(et,Z.mode,mt,qt),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function gt(Z,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=kf(""+X,Z.mode,et),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case R:return et=du(X.type,X.key,X.props,null,Z.mode,et),Wa(et,X),et.return=Z,et;case C:return X=Xf(X,Z.mode,et),X.return=Z,X;case _t:return X=Br(X),gt(Z,X,et)}if(Rt(X)||nt(X))return X=Ur(X,Z.mode,et,null),X.return=Z,X;if(typeof X.then=="function")return gt(Z,Mu(X),et);if(X.$$typeof===I)return gt(Z,_u(Z,X),et);xu(Z,X)}return null}function W(Z,X,et,mt){var qt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return qt!==null?null:T(Z,X,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case R:return et.key===qt?B(Z,X,et,mt):null;case C:return et.key===qt?j(Z,X,et,mt):null;case _t:return et=Br(et),W(Z,X,et,mt)}if(Rt(et)||nt(et))return qt!==null?null:lt(Z,X,et,mt,null);if(typeof et.then=="function")return W(Z,X,Mu(et),mt);if(et.$$typeof===I)return W(Z,X,_u(Z,et),mt);xu(Z,et)}return null}function rt(Z,X,et,mt,qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(et)||null,T(X,Z,""+mt,qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case R:return Z=Z.get(mt.key===null?et:mt.key)||null,B(X,Z,mt,qt);case C:return Z=Z.get(mt.key===null?et:mt.key)||null,j(X,Z,mt,qt);case _t:return mt=Br(mt),rt(Z,X,et,mt,qt)}if(Rt(mt)||nt(mt))return Z=Z.get(et)||null,lt(X,Z,mt,qt,null);if(typeof mt.then=="function")return rt(Z,X,et,Mu(mt),qt);if(mt.$$typeof===I)return rt(Z,X,et,_u(X,mt),qt);xu(X,mt)}return null}function Pt(Z,X,et,mt){for(var qt=null,xe=null,te=X,le=X=0,vn=null;te!==null&&le<et.length;le++){te.index>le?(vn=te,te=null):vn=te.sibling;var Ae=W(Z,te,et[le],mt);if(Ae===null){te===null&&(te=vn);break}t&&te&&Ae.alternate===null&&n(Z,te),X=f(Ae,X,le),xe===null?qt=Ae:xe.sibling=Ae,xe=Ae,te=vn}if(le===et.length)return a(Z,te),ve&&va(Z,le),qt;if(te===null){for(;le<et.length;le++)te=gt(Z,et[le],mt),te!==null&&(X=f(te,X,le),xe===null?qt=te:xe.sibling=te,xe=te);return ve&&va(Z,le),qt}for(te=o(te);le<et.length;le++)vn=rt(te,Z,le,et[le],mt),vn!==null&&(t&&(Ae=vn.alternate,Ae!==null&&te.delete(Ae.key===null?le:Ae.key)),X=f(vn,X,le),xe===null?qt=vn:xe.sibling=vn,xe=vn);return t&&te.forEach(function(dr){return n(Z,dr)}),ve&&va(Z,le),qt}function jt(Z,X,et,mt){if(et==null)throw Error(r(151));for(var qt=null,xe=null,te=X,le=X=0,vn=null,Ae=et.next();te!==null&&!Ae.done;le++,Ae=et.next()){te.index>le?(vn=te,te=null):vn=te.sibling;var dr=W(Z,te,Ae.value,mt);if(dr===null){te===null&&(te=vn);break}t&&te&&dr.alternate===null&&n(Z,te),X=f(dr,X,le),xe===null?qt=dr:xe.sibling=dr,xe=dr,te=vn}if(Ae.done)return a(Z,te),ve&&va(Z,le),qt;if(te===null){for(;!Ae.done;le++,Ae=et.next())Ae=gt(Z,Ae.value,mt),Ae!==null&&(X=f(Ae,X,le),xe===null?qt=Ae:xe.sibling=Ae,xe=Ae);return ve&&va(Z,le),qt}for(te=o(te);!Ae.done;le++,Ae=et.next())Ae=rt(te,Z,le,Ae.value,mt),Ae!==null&&(t&&(vn=Ae.alternate,vn!==null&&te.delete(vn.key===null?le:vn.key)),X=f(Ae,X,le),xe===null?qt=Ae:xe.sibling=Ae,xe=Ae);return t&&te.forEach(function(lM){return n(Z,lM)}),ve&&va(Z,le),qt}function he(Z,X,et,mt){if(typeof et=="object"&&et!==null&&et.type===z&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case R:t:{for(var qt=et.key;X!==null;){if(X.key===qt){if(qt=et.type,qt===z){if(X.tag===7){a(Z,X.sibling),mt=u(X,et.props.children),Wa(mt,et),mt.return=Z,Z=mt;break t}}else if(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===_t&&Br(qt)===X.type){a(Z,X.sibling),mt=u(X,et.props),Wa(mt,et),mt.return=Z,Z=mt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}et.type===z?(mt=Ur(et.props.children,Z.mode,mt,et.key),Wa(mt,et),mt.return=Z,Z=mt):(mt=du(et.type,et.key,et.props,null,Z.mode,mt),Wa(mt,et),mt.return=Z,Z=mt)}return S(Z);case C:t:{for(qt=et.key;X!==null;){if(X.key===qt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Z,X.sibling),mt=u(X,et.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}mt=Xf(et,Z.mode,mt),mt.return=Z,Z=mt}return S(Z);case _t:return et=Br(et),he(Z,X,et,mt)}if(Rt(et))return Pt(Z,X,et,mt);if(nt(et)){if(qt=nt(et),typeof qt!="function")throw Error(r(150));return et=qt.call(et),jt(Z,X,et,mt)}if(typeof et.then=="function")return he(Z,X,Mu(et),mt);if(et.$$typeof===I)return he(Z,X,_u(Z,et),mt);xu(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Z,X.sibling),mt=u(X,et),mt.return=Z,Z=mt):(a(Z,X),mt=kf(et,Z.mode,mt),mt.return=Z,Z=mt),S(Z)):a(Z,X)}return function(Z,X,et,mt){try{Xo=0;var qt=he(Z,X,et,mt);return bs=null,qt}catch(te){if(te===Ts||te===Eu)throw te;var xe=jn(29,te,null,Z.mode);return xe.lanes=mt,xe.return=Z,xe}}}var Hr=J0(!0),$0=J0(!1),Za=!1;function td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ed(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=fu(t),z0(t,null,a),n}return cu(t,o,n,a),fu(t)}function qo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Q(t,a)}}function nd(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var id=!1;function Yo(){if(id){var t=xs;if(t!==null)throw t}}function Wo(t,n,a,o){id=!1;var u=t.updateQueue;Za=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,j=B.next;B.next=null,S===null?f=j:S.next=j,S=B;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==S&&(T===null?lt.firstBaseUpdate=j:T.next=j,lt.lastBaseUpdate=B))}if(f!==null){var gt=u.baseState;S=0,lt=j=B=null,T=f;do{var W=T.lane&-536870913,rt=W!==T.lane;if(rt?(Me&W)===W:(o&W)===W){W!==0&&W===zr&&(id=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Pt=t,jt=T;W=n;var he=a;switch(jt.tag){case 1:if(Pt=jt.payload,typeof Pt=="function"){gt=Pt.call(he,gt,W);break t}gt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=jt.payload,W=typeof Pt=="function"?Pt.call(he,gt,W):Pt,W==null)break t;gt=P({},gt,W);break t;case 2:Za=!0}}W=T.callback,W!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[W]:rt.push(W))}else rt={lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(j=lt=rt,B=gt):lt=lt.next=rt,S|=W;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);lt===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=j,u.lastBaseUpdate=lt,f===null&&(u.shared.lanes=0),ir|=S,t.lanes=S,t.memoizedState=gt}}function tg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function eg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)tg(a[t],n)}var Qa=Jt(null),Tu=Jt(0);function ng(t,n){t=Ta,se(Tu,t),se(Qa,n),Ta=t|n.baseLanes}function ad(){se(Tu,Ta),se(Qa,Qa.current)}function rd(){Ta=Tu.current,Ut(Qa),Ut(Tu)}var wn=Jt(null),Bn=null;function Ja(t){var n=t.alternate;se(Dn,Dn.current&1),se(wn,t),Bn===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(Bn=t)}function sd(t){se(Dn,Dn.current),se(wn,t),Bn===null&&(Bn=t)}function ig(t){t.tag===22?(se(Dn,Dn.current),se(wn,t),Bn===null&&(Bn=t)):$a()}function $a(){se(Dn,Dn.current),se(wn,wn.current)}function oi(t){Ut(wn),Bn===t&&(Bn=null),Ut(Dn)}var Dn=Jt(0);function Zo(t,n){se(wn,wn.current),se(Dn,n)}function od(t){Ut(Dn),Ut(wn),Bn===t&&(Bn=null)}function bu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wh(a)||Dh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,de=null,Ye=null,mn=null,Au=!1,As=!1,Gr=!1,Ru=0,jo=0,Rs=null,w1=0;function ln(){throw Error(r(321))}function ld(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function ud(t,n,a,o,u,f){return Ea=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?Hg:Gg,Gr=!1,f=a(o,u),Gr=!1,As&&(f=rg(n,a,o,u)),ag(t),f}function ag(t){xt.H=Ou;var n=Ye!==null&&Ye.next!==null;if(Ea=0,mn=Ye=de=null,Au=!1,jo=0,Rs=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&vu(t)&&(gn=!0))}function rg(t,n,a,o){de=t;var u=0;do{if(As&&(Rs=null),jo=0,As=!1,25<=u)throw Error(r(301));if(u+=1,mn=Ye=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}xt.H=I1,f=n(a,o)}while(As);return f}function D1(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?Ko(n):n,t=t.useState()[0],(Ye!==null?Ye.memoizedState:null)!==t&&(de.flags|=1024),n}function cd(){var t=Ru!==0;return Ru=0,t}function fd(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function dd(t){if(Au){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Au=!1}Ea=0,mn=Ye=de=null,As=!1,jo=Ru=0,Rs=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?de.memoizedState=mn=t:mn=mn.next=t,mn}function cn(){if(Ye===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var n=mn===null?de.memoizedState:mn.next;if(n!==null)mn=n,Ye=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},mn===null?de.memoizedState=mn=t:mn=mn.next=t}return mn}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var n=jo;return jo+=1,Rs===null&&(Rs=[]),t=j0(Rs,t,n),n=de,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?Hg:Gg),t}function wu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===ct)return;if(t.$$typeof===I)return Cn(t)}throw Error(r(438,String(t)))}function hd(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=ae;return n.index++,a}function ya(t,n){return typeof n=="function"?n(t):n}function Du(t){var n=cn();return pd(n,Ye,t)}function pd(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=S=null,B=null,j=n,lt=!1;do{var gt=j.lane&-536870913;if(gt!==j.lane?(Me&gt)===gt:(Ea&gt)===gt){var W=j.revertLane;if(W===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),gt===zr&&(lt=!0);else if((Ea&W)===W){j=j.next,W===zr&&(lt=!0);continue}else gt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(T=B=gt,S=f):B=B.next=gt,de.lanes|=W,ir|=W;gt=j.action,Gr&&a(f,gt),f=j.hasEagerState?j.eagerState:a(f,gt)}else W={lane:gt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(T=B=W,S=f):B=B.next=W,de.lanes|=gt,ir|=gt;j=j.next}while(j!==null&&j!==n);if(B===null?S=f:B.next=T,!si(f,t.memoizedState)&&(gn=!0,lt&&(a=xs,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function md(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);si(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function sg(t,n,a){var o=de,u=cn(),f=ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!si((Ye||u).memoizedState,a);if(S&&(u.memoizedState=a,gn=!0),u=u.queue,_d(ug.bind(null,o,u,t),[t]),t=u.getSnapshot!==n||S||mn!==null&&(mn.memoizedState.tag&1)!==0,Cs(t?9:8,{destroy:void 0},lg.bind(null,o,u,a,n),null),t){if(o.flags|=2048,Ze===null)throw Error(r(349));f||(Ea&127)!==0||og(o,n,a)}return a}function og(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Cu(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lg(t,n,a,o){n.value=a,n.getSnapshot=o,cg(n)&&fg(t)}function ug(t,n,a){return a(function(){cg(n)&&fg(t)})}function cg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function fg(t){var n=Dr(t,2);n!==null&&$n(n,t,2)}function gd(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Gr){Sn(!0);try{a()}finally{Sn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function dg(t,n,a,o){return t.baseState=a,pd(t,Ye,typeof o=="function"?o:ya)}function U1(t,n,a,o,u){if(Lu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};xt.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,hg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hg(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=xt.T,S={};S.types=f!==null?f.types:null,xt.T=S;try{var T=a(u,o),B=xt.S;B!==null&&B(S,T),pg(t,n,T)}catch(j){vd(t,n,j)}finally{f!==null&&S.types!==null&&(f.types=S.types),xt.T=f}}else try{f=a(u,o),pg(t,n,f)}catch(j){vd(t,n,j)}}function pg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mg(t,n,o)},function(o){return vd(t,n,o)}):mg(t,n,a)}function mg(t,n,a){n.status="fulfilled",n.value=a,gg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hg(t,a)))}function vd(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gg(n),n=n.next;while(n!==o)}t.action=null}function gg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function vg(t,n){return n}function _g(t,n){if(ve){var a=Ze.formState;if(a!==null){t:{var o=de;if(ve){if(Ke){e:{for(var u=Ke,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=Ti(u.nextSibling),o=u.data==="F!";break t}}qa(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vg,lastRenderedState:n},a.queue=o,a=Ig.bind(null,de,o),o.dispatch=a,o=gd(!1),f=xd.bind(null,de,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=U1.bind(null,de,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Sg(t){var n=cn();return Eg(n,Ye,t)}function Eg(t,n,a){if(n=pd(t,n,vg)[0],t=Du(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ko(n)}catch(S){throw S===Ts?Eu:S}else o=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Cs(9,{destroy:void 0},N1.bind(null,u,a),null)),[o,f,t]}function N1(t,n){t.action=n}function yg(t){var n=cn(),a=Ye;if(a!==null)return Eg(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Cs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Cu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Mg(){return cn().memoizedState}function Uu(t,n,a,o){var u=Xn();de.flags|=t,u.memoizedState=Cs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nu(t,n,a,o){var u=cn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ye!==null&&o!==null&&ld(o,Ye.memoizedState.deps)?u.memoizedState=Cs(n,f,a,o):(de.flags|=t,u.memoizedState=Cs(1|n,f,a,o))}function xg(t,n){Uu(8390656,8,t,n)}function _d(t,n){Nu(2048,8,t,n)}function L1(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Cu(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Tg(t){var n=cn().memoizedState;return L1({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function bg(t,n){return Nu(4,2,t,n)}function Ag(t,n){return Nu(4,4,t,n)}function Rg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cg(t,n,a){a=a!=null?a.concat([t]):null,Nu(4,4,Rg.bind(null,n,t),a)}function Sd(){}function wg(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ld(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Dg(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ld(n,o[1]))return o[0];if(o=t(),Gr){Sn(!0);try{t()}finally{Sn(!1)}}return a.memoizedState=[o,n],o}function Ed(t,n,a){return a===void 0||(Ea&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Hv(),de.lanes|=t,ir|=t,a)}function Ug(t,n,a,o){return si(a,n)?a:Qa.current!==null?(t=Ed(t,a,o),si(t,n)||(gn=!0),t):(Ea&106)===0||(Ea&1073741824)!==0&&(Me&261930)===0?(gn=!0,t.memoizedState=a):(t=Hv(),de.lanes|=t,ir|=t,n)}function Ng(t,n,a,o,u){var f=Xt.p;Xt.p=f!==0&&8>f?f:8;var S=xt.T,T={};T.types=S!==null?S.types:null,xt.T=T,xd(t,!1,n,a);try{var B=u(),j=xt.S;if(j!==null&&j(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var lt=C1(B,o);Qo(t,n,lt,fi(t))}else Qo(t,n,o,fi(t))}catch(gt){Qo(t,n,{then:function(){},status:"rejected",reason:gt},fi())}finally{Xt.p=f,S!==null&&T.types!==null&&(S.types=T.types),xt.T=S}}function O1(){}function yd(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Lg(t).queue;Ng(t,u,n,V,a===null?O1:function(){return Og(t),a(o)})}function Lg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Og(t){var n=Lg(t);n.next===null&&(n=t.alternate.memoizedState),Qo(t,n.next.queue,{},fi())}function Md(){return Cn(Ws)}function Pg(){return cn().memoizedState}function zg(){return cn().memoizedState}function P1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=ja(a);var o=Ka(n,t,a);o!==null&&($n(o,n,a),qo(o,n,a)),n={cache:Kf()},t.payload=n;return}n=n.return}}function z1(t,n,a){var o=fi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lu(t)?Bg(n,a):(a=Gf(t,n,a,o),a!==null&&($n(a,t,o),Fg(a,n,o)))}function Ig(t,n,a){var o=fi();Qo(t,n,a,o)}function Qo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lu(t))Bg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,si(T,S))return cu(t,n,u,0),Ze===null&&uu(),!1}catch{}if(a=Gf(t,n,u,o),a!==null)return $n(a,t,o),Fg(a,n,o),!0}return!1}function xd(t,n,a,o){if(o={lane:2,revertLane:hh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Lu(t)){if(n)throw Error(r(479))}else n=Gf(t,a,o,2),n!==null&&$n(n,t,2)}function Lu(t){var n=t.alternate;return t===de||n!==null&&n===de}function Bg(t,n){As=Au=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Fg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Q(t,a)}}var Ou={readContext:Cn,use:wu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Hg={readContext:Cn,use:wu,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:xg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Uu(4194308,4,Rg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Uu(4194308,4,t,n)},useInsertionEffect:function(t,n){Uu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var o=t();if(Gr){Sn(!0);try{t()}finally{Sn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(Gr){Sn(!0);try{a(n)}finally{Sn(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=z1.bind(null,de,t),[o.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=gd(t);var n=t.queue,a=Ig.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Sd,useDeferredValue:function(t,n){var a=Xn();return Ed(a,t,n)},useTransition:function(){var t=gd(!1);return t=Ng.bind(null,de,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=de,u=Xn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Me&127)!==0||og(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,xg(ug.bind(null,o,f,t),[t]),o.flags|=2048,Cs(9,{destroy:void 0},lg.bind(null,o,f,a,n),null),a},useId:function(){var t=Xn(),n=Ze.identifierPrefix;if(ve){var a=ji,o=Zi;a=(o&~(1<<32-zn(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ru++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=w1++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Md,useFormState:_g,useActionState:_g,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xd.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:hd,useCacheRefresh:function(){return Xn().memoizedState=P1.bind(null,de)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gg={readContext:Cn,use:wu,useCallback:wg,useContext:Cn,useEffect:_d,useImperativeHandle:Cg,useInsertionEffect:bg,useLayoutEffect:Ag,useMemo:Dg,useReducer:Du,useRef:Mg,useState:function(){return Du(ya)},useDebugValue:Sd,useDeferredValue:function(t,n){var a=cn();return Ug(a,Ye.memoizedState,t,n)},useTransition:function(){var t=Du(ya)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:sg,useId:Pg,useHostTransitionStatus:Md,useFormState:Sg,useActionState:Sg,useOptimistic:function(t,n){var a=cn();return dg(a,Ye,t,n)},useMemoCache:hd,useCacheRefresh:zg,useEffectEvent:Tg},I1={readContext:Cn,use:wu,useCallback:wg,useContext:Cn,useEffect:_d,useImperativeHandle:Cg,useInsertionEffect:bg,useLayoutEffect:Ag,useMemo:Dg,useReducer:md,useRef:Mg,useState:function(){return md(ya)},useDebugValue:Sd,useDeferredValue:function(t,n){var a=cn();return Ye===null?Ed(a,t,n):Ug(a,Ye.memoizedState,t,n)},useTransition:function(){var t=md(ya)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:sg,useId:Pg,useHostTransitionStatus:Md,useFormState:yg,useActionState:yg,useOptimistic:function(t,n){var a=cn();return Ye!==null?dg(a,Ye,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hd,useCacheRefresh:zg,useEffectEvent:Tg};function Td(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var bd={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=fi(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,o),n!==null&&($n(n,t,o),qo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=fi(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,o),n!==null&&($n(n,t,o),qo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Ka(t,o,a),n!==null&&($n(n,t,a),qo(n,t,a))}};function Vg(t,n,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Io(a,o)||!Io(u,f):!0}function kg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&bd.enqueueReplaceState(n,n.state,null)}function Vr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Xg(t){lu(t)}function qg(t){console.error(t)}function Yg(t){lu(t)}function Pu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ad(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Pu(t,n)},a}function Zg(t){return t=ja(t),t.tag=3,t}function jg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Wg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Wg(n,a,o),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function B1(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?nc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ch(t,o,u)),!1;case 22:return a.flags|=65536,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ch(t,o,u)),!1}throw Error(r(435,a.tag))}return ch(t,o,u),nc(),!1}if(ve)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yf&&(t=Error(r(422),{cause:o}),Ho(Si(t,a)))):(o!==Yf&&(n=Error(r(423),{cause:o}),Ho(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Si(o,a),u=Ad(t.stateNode,o,u),nd(t,u),un!==4&&(un=2)),!1;var f=Error(r(520),{cause:o});if(f=Si(f,a),rl===null?rl=[f]:rl.push(f),un!==4&&(un=2),n===null)return!0;o=Si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ad(a.stateNode,o,t),nd(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ar===null||!ar.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zg(u),jg(u,t,a,o),nd(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Rd=Error(r(461)),gn=!1;function yn(t,n,a,o){n.child=t===null?$0(n,null,a,o):Hr(n,t.child,a,o)}function Kg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return Pr(n),o=ud(t,n,a,S,f,u),T=cd(),t!==null&&!gn?(fd(t,n,u),Ma(t,n,u)):(ve&&T&&pu(n),n.flags|=1,yn(t,n,o,u),n.child)}function Qg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Vf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jg(t,n,f,o,u)):(t=du(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Pd(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(S,o)&&t.ref===n.ref)return Ma(t,n,u)}return n.flags|=1,t=ga(f,o),t.ref=n.ref,t.return=n,n.child=t}function Jg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Io(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,Pd(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Ma(t,n,u)}return Cd(t,n,a,o,u)}function $g(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return tv(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Su(n,f!==null?f.cachePool:null),f!==null?ng(n,f):ad(),ig(n);else return o=n.lanes=536870912,tv(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Su(n,f.cachePool),ng(n,f),$a(),n.memoizedState=null):(t!==null&&Su(n,null),ad(),$a());return yn(t,n,u,a),n.child}function Jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tv(t,n,a,o,u){var f=Jf();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Su(n,null),ad(),ig(n),t!==null&&Or(t,n,o,!0),n.childLanes=u,null}function zu(t,n){return n=Iu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ev(t,n,a){return Hr(n,t.child,null,a),t=zu(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function F1(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(o.mode==="hidden")return t=zu(n,o),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Jo(null,t);if(sd(n),(t=Ke)?(t=R_(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=B0(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return zu(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(sd(n),u)if(n.flags&256)n.flags&=-257,n=ev(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||Or(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(Qa.current===null){if(o=Ze,o!==null&&(S=ft(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,Dr(t,S),$n(o,t,S),Rd;nc()}n=ev(t,n,a)}else t=f.treeContext,Ke=Ti(S.nextSibling),Tn=n,ve=!0,Xa=null,Mi=!1,t!==null&&G0(n,t),n=zu(n,o),n.flags|=134221824;return n}return t=ga(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ws(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Cd(t,n,a,o,u){return Pr(n),a=ud(t,n,a,o,void 0,u),o=cd(),t!==null&&!gn?(fd(t,n,u),Ma(t,n,u)):(ve&&o&&pu(n),n.flags|=1,yn(t,n,a,u),n.child)}function nv(t,n,a,o,u,f){return Pr(n),n.updateQueue=null,a=rg(n,o,a,u),ag(t),o=cd(),t!==null&&!gn?(fd(t,n,f),Ma(t,n,f)):(ve&&o&&pu(n),n.flags|=1,yn(t,n,a,f),n.child)}function iv(t,n,a,o,u){if(Pr(n),n.stateNode===null){var f=Ss,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},td(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Ss,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Td(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&bd.enqueueReplaceState(f,f.state,null),Wo(n,o,f,u),Yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Vr(a,T);f.props=B;var j=f.context,lt=a.contextType;S=Ss,typeof lt=="object"&&lt!==null&&(S=Cn(lt));var gt=a.getDerivedStateFromProps;lt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||j!==S)&&kg(n,f,o,S),Za=!1;var W=n.memoizedState;f.state=W,Wo(n,o,f,u),Yo(),j=n.memoizedState,T||W!==j||Za?(typeof gt=="function"&&(Td(n,a,gt,o),j=n.memoizedState),(B=Za||Vg(n,a,B,o,W,j,S))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=j),f.props=o,f.state=j,f.context=S,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ed(t,n),S=n.memoizedProps,lt=Vr(a,S),f.props=lt,gt=n.pendingProps,W=f.context,j=a.contextType,B=Ss,typeof j=="object"&&j!==null&&(B=Cn(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||W!==B)&&kg(n,f,o,B),Za=!1,W=n.memoizedState,f.state=W,Wo(n,o,f,u),Yo();var rt=n.memoizedState;S!==gt||W!==rt||Za||t!==null&&t.dependencies!==null&&vu(t.dependencies)?(typeof T=="function"&&(Td(n,a,T,o),rt=n.memoizedState),(lt=Za||Vg(n,a,lt,o,W,rt,B)||t!==null&&t.dependencies!==null&&vu(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=B,o=lt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,ws(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Hr(n,t.child,null,u),n.child=Hr(n,null,a,u)):yn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ma(t,n,u),t}function av(t,n,a,o){return Nr(),n.flags|=256,yn(t,n,a,o),n.child}var wd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dd(t){return{baseLanes:t,cachePool:W0()}}function Ud(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function rv(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?Ja(n):$a(),(t=Ke)?(t=R_(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=B0(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw qa(n);return Dh(t)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?($a(),u=n.mode,f=Iu({mode:"hidden",children:f},u),o=Ur(o,u,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=Dd(a),o.childLanes=Ud(t,S,a),n.memoizedState=wd,Jo(null,o)):(Ja(n),Nd(n,f))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return H1(t,n,f,S,o,B,T,a)}return u?($a(),u=o.fallback,f=n.mode,T=t.child,B=T.sibling,o=ga(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&1206910976,B!==null?u=ga(B,u):(u=Ur(u,f,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,Jo(null,o),o=n.child,u=t.child.memoizedState,u===null?u=Dd(a):(f=u.cachePool,f!==null?(T=pn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=W0(),u={baseLanes:u.baseLanes|a,cachePool:f}),o.memoizedState=u,o.childLanes=Ud(t,S,a),n.memoizedState=wd,Jo(t.child,o)):(Ja(n),a=t.child,t=a.sibling,a=ga(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Nd(t,n){return n=Iu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Iu(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function Bu(t,n,a){return Hr(n,t.child,null,a),t=Nd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function H1(t,n,a,o,u,f,S,T){if(a)return n.flags&256?(Ja(n),n.flags&=-257,Bu(t,n,T)):n.memoizedState!==null?($a(),n.child=t.child,n.flags|=128,null):($a(),f=u.fallback,S=n.mode,u=Iu({mode:"visible",children:u.children},S),f=Ur(f,S,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Hr(n,t.child,null,T),u=n.child,u.memoizedState=Dd(T),u.childLanes=Ud(t,o,T),n.memoizedState=wd,Jo(null,u));if(Ja(n),Dh(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var B=o.dgst;return o=B,o!==""&&(u=Error(r(419)),u.stack="",u.digest=o,Ho({value:u,source:null,stack:null})),Bu(t,n,T)}if(gn||Or(t,n,T,!1),o=(T&t.childLanes)!==0,gn||o){if(Qa.current!==null)return Bu(t,n,T);if(o=Ze,o!==null&&(u=ft(o,T),u!==0&&u!==S.retryLane))throw S.retryLane=u,Dr(t,u),$n(o,t,u),Rd;return wh(f)||nc(),Bu(t,n,T)}return wh(f)?(n.flags|=192,n.child=t.child,null):(t=S.treeContext,Ke=Ti(f.nextSibling),Tn=n,ve=!0,Xa=null,Mi=!1,t!==null&&G0(n,t),n=Nd(n,u.children),n.flags|=134221824,n)}function sv(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),gu(t.return,n,a)}function ov(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&bu(a)===null&&(n=t),t=t.sibling}return n}function Fu(t,n,a,o,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function Ld(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Od(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=Dn.current;if(n.flags&128)return Zo(n,S),null;var T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,Zo(n,S),u==="backwards"&&t!==null?(Ld(t),yn(t,n,o,a),Ld(t)):yn(t,n,o,a),o=ve?Fo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sv(t,a,n);else if(t.tag===19)sv(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=ov(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Ld(n)),Fu(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&bu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Fu(n,!0,a,null,f,o);break;case"together":Fu(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=ov(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Fu(n,!1,u,a,f,o)}return n.child}function lv(t,n,a){var o=n.pendingProps;return Ya(n,n.type,o.value),yn(t,n,o.children,a),n.child}function Ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ga(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ga(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Pd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vu(t)))}function G1(t,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),Ya(n,pn,t.memoizedState.cache),Nr();break;case 27:case 5:at(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sd(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Ja(n),n.flags|=128,null;o=Or(t,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?rv(t,n,a):(Ja(n),t=Ma(t,n,a),t!==null?t.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return Od(t,n,a);if(u=(t.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Or(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Od(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Zo(n,Dn.current),o)break;return null;case 22:return n.lanes=0,$g(t,n,a,n.pendingProps);case 24:Ya(n,pn,t.memoizedState.cache)}return Ma(t,n,a)}function uv(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!Pd(t,a)&&(n.flags&128)===0)return gn=!1,G1(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,ve&&(n.flags&1048576)!==0&&H0(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")Vf(t)?(o=Vr(t,o),n.tag=1,n=iv(null,n,t,o,a)):(n.tag=0,n=Cd(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===G){n.tag=11,n=Kg(null,n,t,o,a);break t}else if(u===vt){n.tag=14,n=Qg(null,n,t,o,a);break t}else if(u===I){n.tag=10,n.type=t,n=lv(null,n,a);break t}}throw n=Mt(t)||t,Error(r(306,n,""))}}return n;case 0:return Cd(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Vr(o,n.pendingProps),iv(t,n,o,u,a);case 3:t:{if(L(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ed(t,n),Wo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ya(n,pn,o),o!==f.cache&&jf(n,[pn],a,!0),Yo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=av(t,n,o,a);break t}else if(o!==u){u=Si(Error(r(424)),n),Ho(u),n=av(t,n,o,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=Ti(t.firstChild),Tn=n,ve=!0,Xa=null,Mi=!0,a=$0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Nr(),o===u){n=Ma(t,n,a);break t}yn(t,n,o,a)}n=n.child}return n;case 26:return ws(t,n),t===null?(a=O_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=h_(n.type,n.pendingProps,be.current,n)):n.memoizedState=O_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&ve&&(o=n.stateNode=D_(n.type,n.pendingProps,be.current),Tn=n,Mi=!0,u=Ke,or(n.type)?(Uh=u,Ke=Ti(o.firstChild)):Ke=u),yn(t,n,n.pendingProps.children,a),ws(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=o=Ke)&&(o=Py(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Tn=n,Ke=Ti(o.firstChild),Mi=!1,u=!0):u=!1),u||qa(n)),at(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,Mh(u,f)?o=null:S!==null&&Mh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ud(t,n,D1,null,null,a),Ws._currentValue=u),ws(t,n),yn(t,n,o,a),n.child;case 6:return t===null&&ve&&((t=a=Ke)&&(a=zy(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Tn=n,Ke=null,t=!0):t=!1),t||qa(n)),null;case 13:return rv(t,n,a);case 4:return L(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Hr(n,null,o,a):yn(t,n,o,a),n.child;case 11:return Kg(t,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,ws(t,n),yn(t,n,o,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return lv(t,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,Pr(n),u=Cn(u),o=o(u),n.flags|=1,yn(t,n,o,a),n.child;case 14:return Qg(t,n,n.type,n.pendingProps,a);case 15:return Jg(t,n,n.type,n.pendingProps,a);case 19:return Od(t,n,a);case 31:return F1(t,n,a);case 22:return $g(t,n,a,n.pendingProps);case 24:return Pr(n),o=Cn(pn),t===null?(u=Jf(),u===null&&(u=Ze,f=Kf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},td(n),Ya(n,pn,u)):((t.lanes&a)!==0&&(ed(t,n),Wo(n,null,null,a),Yo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,pn,o)):(o=f.cache,Ya(n,pn,o),o!==u.cache&&jf(n,[pn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&pu(n),t!==null&&t.memoizedProps.name!==o.name?n.flags|=4194816:ws(t,n),yn(t,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function xa(t){t.flags|=4}function zd(t,n,a,o,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?B_(n,o):B_(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Xv())t.flags|=8192;else throw Fr=yu,$f}else t.flags&=-16777217}function cv(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!F_(n))if(Xv())t.flags|=8192;else throw Fr=yu,$f}function Hu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Jl():536870912,t.lanes|=n,Os|=n)}function $o(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function V1(t,n,a){var o=n.pendingProps;switch(qf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Sa(pn),A(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ms(n)?xa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wf())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(xa(n),f!==null?(Qe(n),cv(n,f)):(Qe(n),zd(n,u,null,o,a))):f?f!==t.memoizedState?(xa(n),Qe(n),cv(n,f)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&xa(n),Qe(n),zd(n,u,t,o,a)),null;case 27:if(pt(n),a=be.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=Ft.current,Ms(n)?V0(n):(t=D_(u,o,a),n.stateNode=t,xa(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(f=Ft.current,Ms(n))V0(n);else{var S=cl(be.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[Nt]=n,f[Zt]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&xa(n)}}return Qe(n),n.subtreeFlags&=-33554433,zd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&xa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=be.current,Ms(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Nt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||u_(t.nodeValue,a)),t||qa(n,!0)}else t=cl(t).createTextNode(o),t[Nt]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ms(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Nt]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=Wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ms(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Nt]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hu(n,n.updateQueue),Qe(n),null);case 4:return A(),t===null&&vh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return Sa(n.type),Qe(n),null;case 19:if(od(n),o=n.memoizedState,o===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)$o(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=bu(t),f!==null){for(n.flags|=128,$o(o,!1),t=f.updateQueue,n.updateQueue=t,Hu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)I0(a,t),a=a.sibling;return Zo(n,Dn.current&1|2),ve&&va(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&q()>Ju&&(n.flags|=128,u=!0,$o(o,!1),n.lanes=4194304)}else{if(!u)if(t=bu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Hu(n,t),$o(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!ve)return Qe(n),null}else 2*q()-o.renderingStartTime>Ju&&a!==536870912&&(n.flags|=128,u=!0,$o(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){t=o.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,f=Dn.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||ve?Zo(n,f):(a=f,se(wn,n),se(Dn,a),Bn===null&&(Bn=n)),ve&&va(n,o.treeForkCount),t}return Qe(n),null;case 22:case 23:return oi(n),rd(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Hu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Ut(Ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(pn),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(r(156,n.tag))}function k1(t,n){switch(qf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Sa(pn),A(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return od(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return A(),null;case 10:return Sa(n.type),null;case 22:case 23:return oi(n),rd(),t!==null&&Ut(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Sa(pn),null;case 25:return null;default:return null}}function fv(t,n){switch(qf(n),n.tag){case 3:Sa(pn),A();break;case 26:case 27:case 5:pt(n);break;case 4:A();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:od(n);break;case 10:Sa(n.type);break;case 22:case 23:oi(n),rd(),t!==null&&Ut(Ir);break;case 24:Sa(pn)}}function tl(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(T){ke(n,n.return,T)}}function tr(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var B=a,j=T;try{j()}catch(lt){ke(u,B,lt)}}}o=o.next}while(o!==f)}}catch(lt){ke(n,n.return,lt)}}function dv(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{eg(n,a)}catch(o){ke(t,t.return,o)}}}function hv(t,n,a){a.props=Vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){ke(t,n,o)}}function Ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var u=t.stateNode,f=pa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=E_(f)),o=u.ref;break;case 7:if(t.stateNode===null){var S=new di(t);p(t.child,!1,Ly,S,void 0,void 0),t.stateNode=S}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(T){ke(t,n,T)}}function Un(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(t,n,u)}else a.current=null}function Gu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)A_(t.stateNode,n[a])}function pv(t){for(var n=t.return;n!==null&&(Bd(n)&&A_(t.stateNode,n.stateNode),!Id(n));)n=n.return}function el(t){for(var n=t.return;n!==null&&(Bd(n)&&Oy(t.stateNode,n.stateNode),!Id(n));)n=n.return}function Id(t){return t.tag===5||t.tag===3||t.tag===27}function Bd(t){return t&&t.tag===7&&t.stateNode!==null}function Fd(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ke(t,t.return,u)}}function Hd(t,n,a){try{var o=t.stateNode;my(o,t.type,a,n),o[Zt]=n}catch(u){ke(t,t.return,u)}}function mv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function Gd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,n,a,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Gu(t,o),Ue=!0;else if(u!==4&&(u===27&&(Gu(t,o),o=null,or(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Vd(t,n,a,o),t=t.sibling;t!==null;)Vd(t,n,a,o),t=t.sibling}function Vu(t,n,a,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Gu(t,o),Ue=!0;else if(u!==4&&(u===27&&(Gu(t,o),o=null,or(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Vu(t,n,a,o),t=t.sibling;t!==null;)Vu(t,n,a,o),t=t.sibling}function gv(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[Nt]=t,n[Zt]=a}catch(f){ke(t,t.return,f)}}var ku=!1,li=null;function vv(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(ku=!0)}var Qi=null;function _v(){var t=Qi;return Qi=null,t}var Kn=0;function Ds(t,n,a,o,u){return Kn=0,Sv(t.child,n,a,o,u)}function Sv(t,n,a,o,u){for(var f=!1;t!==null;){if(t.tag===5){var S=t.stateNode;if(o!==null){var T=bh(S);o.push(T),T.view&&(f=!0)}else f||bh(S).view&&(f=!0);ku=!0,__(S,Kn===0?n:n+"_"+Kn,a),Kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||Sv(t.child,n,a,o,u)&&(f=!0));t=t.sibling}return f}function Ji(t,n){for(;t!==null;)t.tag===5?S_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ji(t.child,n)),t=t.sibling}function Xu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Xu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ma(n.default,n.share),n!=="none"&&(Ds(t,a,n,null,!1)||Ji(t.child,!1))}t=t.sibling}}function kd(t,n){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,u=pa(o,a),f=ma(o.default,a.paired?o.share:o.enter);f!=="none"?Ds(t,u,f,null,!1)?(Xu(t),a.paired||n||Bs(t,o.onEnter)):Ji(t.child,!1):Xu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)kd(t,n),t=t.sibling;else Xu(t)}function Xd(t){if(li!==null&&li.size!==0){var n=li;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=ma(a.default,a.share);if(f!=="none"&&(Ds(t,o,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Bs(t,a.onShare)):Ji(t.child,!1)),n.delete(o),n.size===0)break}}}Xd(t)}t=t.sibling}}}function qd(t){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode),o=li!==null?li.get(a):void 0,u=ma(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(Ds(t,a,u,null,!1)?o!==void 0?(u=t.stateNode,o.paired=u,u.paired=o,li.delete(a),Bs(t,n.onShare)):Bs(t,n.onExit):Ji(t.child,!1)),li!==null&&Xd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)qd(t),t=t.sibling;else li!==null&&Xd(t)}function Ev(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode);n=ma(n.default,n.update),t.flags&=-5,n!=="none"&&Ds(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Ev(t);t=t.sibling}}function Yd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ji(t.child,!1))}Yd(t)}t=t.sibling}}function qu(t){if(t.tag===30)t.stateNode.paired=null,Ji(t.child,!1),Yd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)qu(t),t=t.sibling;else Yd(t)}function yv(t){for(t=t.child;t!==null;)t.tag===30?Ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&yv(t),t=t.sibling}function Wd(t,n,a,o,u,f,S){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&Kn<f.length){var j=f[Kn],lt=bh(B);(j.view||lt.view)&&(T=!0);var gt;if(gt=(t.flags&4)===0)if(lt.clip)gt=!0;else{gt=j.rect;var W=lt.rect;gt=gt.y!==W.y||gt.x!==W.x||gt.height!==W.height||gt.width!==W.width}gt&&(t.flags|=4),lt.abs?lt=!j.abs:(j=j.rect,lt=lt.rect,lt=j.height!==lt.height||j.width!==lt.width),lt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&__(B,Kn===0?a:a+"_"+Kn,u),T&&(t.flags&4)!==0||(Qi===null&&(Qi=[]),Qi.push(B,Kn===0?o:o+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?t.flags|=n.flags&32:Wd(t,n.child,a,o,u,f,S)&&(T=!0));n=n.sibling}return T}function Mv(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,u=pa(a,o),f=ma(a.default,a.update),S;S=t.memoizedState,t.memoizedState=null,o=t;var T=t.child;Kn=0,u=Wd(o,T,u,u,f,S,!1),(t.flags&4)!==0&&u&&Bs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Mv(t);t=t.sibling}}var bn=!1,Be=!1,$i=!1,Zd=!1,xv=typeof WeakSet=="function"?WeakSet:Set,An=null,ta=!1,nl=!1,Yu=!1,jd=!1;function X1(t,n,a){if(t=t.containerInfo,Eh=Zs,t=R0(t),Pf(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else t:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,S=u.focusNode;u=u.focusOffset;try{o.nodeType,S.nodeType}catch{o=null;break t}var T=0,B=-1,j=-1,lt=0,gt=0,W=t,rt=null;e:for(;;){for(var Pt;W!==o||f!==0&&W.nodeType!==3||(B=T+f),W!==S||u!==0&&W.nodeType!==3||(j=T+u),W.nodeType===3&&(T+=W.nodeValue.length),(Pt=W.firstChild)!==null;)rt=W,W=Pt;for(;;){if(W===t)break e;if(rt===o&&++lt===f&&(B=T),rt===S&&++gt===u&&(j=T),(Pt=W.nextSibling)!==null)break;W=rt,rt=W.parentNode}W=Pt}o=B===-1||j===-1?null:{start:B,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(yh={focusedElem:t,selectionRange:o},Zs=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(o=t.deletions,o!==null))for(f=0;f<o.length;f++)a&&qd(o[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&vv(t),Wu(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&qd(o),Wu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&vv(t),Wu(a);continue}}o=t.child,(t.subtreeFlags&n)!==0&&o!==null?(o.return=t,An=o):(a&&Ev(t),Wu(a))}}li=null}function Wu(t){for(;An!==null;){var n=An,a=t,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var S=Vr(n.type,u);a=f.getSnapshotBeforeUpdate(S,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){ke(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)Ch(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Ch(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=pa(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=ma(u.default,u.update),u!=="none"&&Ds(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(o=n.sibling,o!==null){o.return=n.return,An=o;break}An=n.return}}function Tv(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),o&4&&tl(5,a);break;case 1:if(ea(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){ke(a,a.return,S)}else{var u=Vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){ke(a,a.return,S)}}o&64&&dv(a),o&512&&Ki(a,a.return);break;case 3:if(ea(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{eg(t,n)}catch(S){ke(a,a.return,S)}}break;case 27:n===null&&o&4&&gv(a);case 26:case 5:ea(t,a),n===null&&o&4&&Fd(a),o&512&&Ki(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),o&4&&Cv(t,a);break;case 13:ea(t,a),o&4&&wv(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),Iy(t,a))));break;case 22:if(o=a.memoizedState!==null||bn,!o){var f=n!==null&&n.memoizedState!==null||Be;n=bn,u=Be,bn=o,(Be=f)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Pi(t,a,o)):ea(t,a),bn=n,Be=u}break;case 30:ea(t,a),o&512&&Ki(a,a.return);break;case 7:o&512&&Ki(a,a.return);default:ea(t,a)}}function Kd(t,n){for(t=t.child;t!==null;)bv(t,n),t=t.sibling}function bv(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,S=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(B){ke(t,t.return,B)}Qd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(B){ke(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?v_(T,!0):v_(t.stateNode,!1)}catch(B){ke(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Kd(t,n);break;default:Kd(t,n)}}function Qd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,o=n;switch(a.tag){case 4:bv(a,o);break t;case 22:a.memoizedState===null&&Qd(a,o);break t;default:Qd(a,o)}}t=t.sibling}}function Av(t){var n=t.alternate;n!==null&&(t.alternate=null,Av(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ne(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Qn=!1;function Li(t,n,a){for(a=a.child;a!==null;)Rv(t,n,a),a=a.sibling}function Rv(t,n,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:Be||Un(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Un(a,n),el(a);var o=tn,u=Qn;or(a.type)&&(tn=a.stateNode,Qn=!1),Li(t,n,a),U_(a.stateNode,a.type,a.memoizedProps),tn=o,Qn=u;break;case 5:Be||Un(a,n),el(a);case 6:if(a.tag===6&&el(a),o=tn,u=Qn,tn=null,Li(t,n,a),tn=o,Qn=u,tn!==null)if(Qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Ue=!0}catch(f){ke(a,n,f)}else try{tn.removeChild(a.stateNode),Ue=!0}catch(f){ke(a,n,f)}break;case 18:tn!==null&&(Qn?(t=tn,g_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),js(t)):g_(tn,a.stateNode));break;case 4:o=tn,u=Qn,tn=a.stateNode.containerInfo,Qn=!0,Li(t,n,a),tn=o,Qn=u;break;case 0:case 11:case 14:case 15:tr(2,a,n),Be||tr(4,a,n),Li(t,n,a);break;case 1:Be||(Un(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hv(a,n,o)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:Be=(o=Be)||a.memoizedState!==null,Li(t,n,a),Be=o;break;case 30:Un(a,n),Li(t,n,a);break;case 7:Be||Un(a,n),Li(t,n,a);break;default:Li(t,n,a)}}function Cv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{js(t)}catch(a){ke(n,n.return,a)}}}function wv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{js(t)}catch(a){ke(n,n.return,a)}}function q1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new xv),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new xv),n;default:throw Error(r(435,t.tag))}}function Zu(t,n){var a=q1(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=iy.bind(null,t,o);o.then(u,u)}})}function qn(t,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],S=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(or(B.type)){tn=B.stateNode,Qn=!1;break t}break;case 5:tn=B.stateNode,Qn=!1;break t;case 3:case 4:tn=B.stateNode.containerInfo,Qn=!0;break t}B=B.return}if(tn===null)throw Error(r(160));Rv(S,T,f),tn=null,Qn=!1,S=f.alternate,S!==null&&(S.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Dv(n,t,a),n=n.sibling}var Oi=null;function Dv(t,n,a){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var S=o[f];S.ref.impl=S.nextImpl}qn(n,t,a),Yn(t),u&4&&(tr(3,t,t.return),tl(3,t),tr(5,t,t.return));break;case 1:qn(n,t,a),Yn(t),u&512&&(Be||o===null||Un(o,o.return)),u&64&&bn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Oi,qn(n,t,a),Yn(t),u&512&&(Be||o===null||Un(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(bn)t.stateNode=h_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Le]||o[Nt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),Nn(o,n,a),o[Nt]=t,De(o),n=o;break t;case"link":if(f=I_("link","href",u).get(n+(a.href||""))){for(S=0;S<f.length;S++)if(o=f[S],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(S,1);break e}}o=u.createElement(n),Nn(o,n,a),u.head.appendChild(o);break;case"meta":if(f=I_("meta","content",u).get(n+(a.content||""))){for(S=0;S<f.length;S++)if(o=f[S],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(S,1);break e}}o=u.createElement(n),Nn(o,n,a),u.head.appendChild(o);break;default:throw Error(r(468,n))}o[Nt]=t,De(o),n=o}t.stateNode=n}else bn||Ph(f,t.type,t.stateNode);else t.stateNode=z_(f,a,t.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||Be||n.parentNode.removeChild(n)):u.count--,a===null?bn||Ph(f,t.type,t.stateNode):z_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Hd(t,t.memoizedProps,o.memoizedProps);break;case 27:qn(n,t,a),Yn(t),u&512&&(Be||o===null||Un(o,o.return)),o!==null&&u&4&&Hd(t,t.memoizedProps,o.memoizedProps);break;case 5:if(f=$i,$i=!1,qn(n,t,a),$i=f,Yn(t),u&512&&(Be||o===null||Un(o,o.return)),t.flags&32){n=t.stateNode;try{ds(n,""),Ue=!0}catch(lt){ke(t,t.return,lt)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Hd(t,n,o!==null?o.memoizedProps:n)),u&1024&&(Zd=!0);break;case 6:if(qn(n,t,a),Yn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(lt){ke(t,t.return,lt)}}break;case 3:if(Ue=!1,uc=null,f=Oi,Oi=fl(n.containerInfo),qn(n,t,a),Oi=f,Yn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{js(n.containerInfo)}catch(lt){ke(t,t.return,lt)}Zd&&(Zd=!1,Uv(t)),Ue=!1;break;case 4:u=$i,$i=bn,o=Qm(),f=Oi,Oi=fl(t.stateNode.containerInfo),qn(n,t,a),Yn(t),Oi=f,Ue&&nl&&(Yu=!0),Ue=o,$i=u;break;case 12:qn(n,t,a),Yn(t);break;case 31:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Zu(t,n)));break;case 13:qn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Qu=q()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Zu(t,n)));break;case 22:f=t.memoizedState!==null,S=o!==null&&o.memoizedState!==null;var T=bn,B=Be,j=$i;bn=T||f,$i=j||f,Be=B||S,qn(n,t,a),Be=B,$i=j,bn=T,Yn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||S||bn||Be||(n=S||Be,a=bn,o=Be,bn=f||bn,Be=n,er(t,2),bn=a,Be=o),!f&&$i||Kd(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Zu(t,a))));break;case 19:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Zu(t,n)));break;case 30:u&512&&(Be||o===null||Un(o,o.return)),u=Qm(),f=nl,S=(a&335544064)===a,T=t.memoizedProps,nl=S&&ma(T.default,T.update)!=="none",qn(n,t,a),Yn(t),S&&o!==null&&Ue&&(t.flags|=4),nl=f,Ue=u;break;case 21:break;case 7:u&512&&(Be||o===null||Un(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:qn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(mv(o)){a=o;break}o=o.return}o=null;for(var u=t.return;u!==null;){if(Bd(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(Id(u))break;u=u.return}var S=o;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,B=Gd(t);Vu(t,B,T,S);break;case 5:var j=a.stateNode;a.flags&32&&(ds(j,""),a.flags&=-33);var lt=Gd(t);Vu(t,lt,j,S);break;case 3:case 4:var gt=a.stateNode.containerInfo,W=Gd(t);Vd(t,W,gt,S);break;default:throw Error(r(161))}}catch(rt){ke(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Uv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Uv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zs=!0,n.reset(),Zs=!1),t=t.sibling}}function Us(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Nv(n,t),n=n.sibling;else Mv(n)}function Nv(t,n){var a=t.alternate;if(a===null)kd(t,!1);else switch(t.tag){case 3:if(jd=ta=!1,_v(),Us(n,t),!ta&&!Yu){if(t=Qi,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var u=t[o+1];S_(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),jd=!0}Qi=null;break;case 5:Us(n,t);break;case 4:o=ta,ta=!1,Us(n,t),ta&&(Yu=!0),ta=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?kd(t,!1):Us(n,t));break;case 30:o=ta,u=_v(),ta=!1,Us(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,S=t.stateNode;n=pa(f,S),S=pa(a.memoizedProps,S);var T=ma(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Kn=0,n=Wd(t,a,n,S,T,f,!0),Kn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Bs(t,t.memoizedProps.onUpdate),Qi=u):u!==null&&(u.push.apply(u,Qi),Qi=u),ta=(t.flags&32)!==0?!0:o;break;default:Us(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tv(t,n.alternate,n),n=n.sibling}function er(t,n){for(t=t.child;t!==null;){var a=t,o=n;switch(a.tag){case 0:case 11:case 14:case 15:tr(4,a,a.return),er(a,o);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&hv(a,a.return,u),er(a,o);break;case 27:(o&2)!==0&&U_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||el(a),er(a,o);break;case 6:el(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Be||u.parentNode.removeChild(u),er(a,o);break;case 22:a.memoizedState===null&&er(a,o);break;case 30:Un(a,a.return),er(a,o);break;case 7:Un(a,a.return);default:er(a,o)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,S=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Pi(u,f,a),tl(4,f);break;case 1:if(Pi(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){ke(o,o.return,lt)}if(o=f,u=o.updateQueue,u!==null){var B=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)tg(j[u],B)}catch(lt){ke(o,o.return,lt)}}T&&S&64&&dv(f),Ki(f,f.return);break;case 27:(a&2)!==0&&gv(f);case 5:f.tag!==5&&f.tag!==27||pv(f),Pi(u,f,a),T&&o===null&&S&4&&Fd(f),Ki(f,f.return);break;case 6:pv(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||bn||Ph(fl(B.ownerDocument),f.type,B),Pi(u,f,a),T&&o===null&&S&4&&Fd(f),Ki(f,f.return);break;case 12:Pi(u,f,a);break;case 31:Pi(u,f,a),T&&S&4&&Cv(u,f);break;case 13:Pi(u,f,a),T&&S&4&&wv(u,f);break;case 22:f.memoizedState===null&&Pi(u,f,a),Ki(f,f.return);break;case 30:Pi(u,f,a),Ki(f,f.return);break;case 7:Ki(f,f.return);default:Pi(u,f,a)}n=n.sibling}}function Jd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Go(a))}function $d(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Go(t))}function xi(t,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Lv(t,n,a,o),n=n.sibling;else u&&yv(n)}function Lv(t,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&qu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,o),f&2048&&tl(9,n);break;case 1:xi(t,n,a,o);break;case 3:xi(t,n,a,o),u&&jd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Go(f)));break;case 12:if(f&2048){xi(t,n,a,o),f=n.stateNode;try{var S=n.memoizedProps,T=S.id,B=S.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(j){ke(n,n.return,j)}}else xi(t,n,a,o);break;case 31:xi(t,n,a,o);break;case 13:xi(t,n,a,o);break;case 23:break;case 22:S=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&qu(T),S._visibility&2?xi(t,n,a,o):il(t,n)):(u&&T!==null&&T.memoizedState!==null&&qu(n),S._visibility&2?xi(t,n,a,o):(S._visibility|=2,Ns(t,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Jd(T,n);break;case 24:xi(t,n,a,o),f&2048&&$d(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Ji(f.child,!0),Ji(n.child,!0))),xi(t,n,a,o);break;default:xi(t,n,a,o)}}function Ns(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,T=a,B=o,j=S.flags;switch(S.tag){case 0:case 11:case 15:Ns(f,S,T,B,u),tl(8,S);break;case 23:break;case 22:var lt=S.stateNode;S.memoizedState!==null?lt._visibility&2?Ns(f,S,T,B,u):il(f,S):(lt._visibility|=2,Ns(f,S,T,B,u)),u&&j&2048&&Jd(S.alternate,S);break;case 24:Ns(f,S,T,B,u),u&&j&2048&&$d(S.alternate,S);break;default:Ns(f,S,T,B,u)}n=n.sibling}}function il(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:il(a,o),u&2048&&Jd(o.alternate,o);break;case 24:il(a,o),u&2048&&$d(o.alternate,o);break;default:il(a,o)}n=n.sibling}}var kr=8192;function Xr(t,n,a){if(t.subtreeFlags&kr)for(t=t.child;t!==null;)Ov(t,n,a),t=t.sibling}function Ov(t,n,a){switch(t.tag){case 26:Xr(t,n,a),t.flags&kr&&(t.memoizedState!==null?Qy(a,Oi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&G_(a,t)));break;case 5:Xr(t,n,a),t.flags&kr&&(t=t.stateNode,(n&335544128)===n&&G_(a,t));break;case 3:case 4:var o=Oi;Oi=fl(t.stateNode.containerInfo),Xr(t,n,a),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=kr,kr=16777216,Xr(t,n,a),kr=o):Xr(t,n,a));break;case 30:if((t.flags&kr)!==0&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var u=t.stateNode;u.paired=null,li===null&&(li=new Map),li.set(o,u)}Xr(t,n,a);break;default:Xr(t,n,a)}}function Pv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,Iv(o,t)}Pv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zv(t),t=t.sibling}function zv(t){switch(t.tag){case 0:case 11:case 15:al(t),t.flags&2048&&tr(9,t,t.return);break;case 3:al(t);break;case 12:al(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ju(t)):al(t);break;default:al(t)}}function ju(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,Iv(o,t)}Pv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:tr(8,n,n.return),ju(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ju(n));break;default:ju(n)}t=t.sibling}}function Iv(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:tr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,An=o;else t:for(a=t;An!==null;){o=An;var u=o.sibling,f=o.return;if(Av(o),o===a){An=null;break t}if(u!==null){u.return=f,An=u;break t}An=f}}}var Y1={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},W1=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ze=null,Se=null,Me=0,Ve=0,ui=null,nr=!1,Ls=!1,th=!1,Ta=0,un=0,ir=0,qr=0,Ku=0,ci=0,Os=0,rl=null,Jn=null,eh=!1,Qu=0,Bv=0,Ju=1/0,$u=null,ar=null,rn=0,zi=null,Yr=null,na=0,nh=0,ih=null,Fv=null,Ps=null,zs=null,Is=null,sl=0,tc=null;function fi(){return(Pe&2)!==0&&Me!==0?Me&-Me:xt.T!==null?hh():wt()}function Hv(){if(ci===0)if((Me&536870912)===0||ve){var t=fa;fa<<=1,(fa&3932160)===0&&(fa=262144),ci=t}else ci=536870912;return t=wn.current,t!==null&&(t.flags|=32),ci}function Bs(t,n){if(n!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=E_(pa(t.memoizedProps,a))),zs===null&&(zs=[]),zs.push(n.bind(null,o))}}function $n(t,n,a){(t===Ze&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),rr(t,Me,ci,!1)),Rr(t,a),((Pe&2)===0||t!==Ze)&&(t===Ze&&((Pe&2)===0&&(qr|=a),un===4&&rr(t,Me,ci,!1)),ia(t))}function Gv(t,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fa(t,n),u=o?K1(t,n):rh(t,n,!0),f=o;do{if(u===0){Ls&&!o&&rr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Z1(a)){u=rh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;u=rl;var B=T.current.memoizedState.isDehydrated;if(B&&(Fs(T,S).flags|=256),S=rh(T,S,!1),S!==2&&S!==6){if(th&&!B){T.errorRecoveryDisabledLanes|=f,qr|=f,u=4;break t}f=Jn,Jn=u,f!==null&&(Jn===null?Jn=f:Jn.push.apply(Jn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Fs(t,0),rr(t,n,0,!0);break}t:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:rr(o,n,ci,!nr);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Qu+300-q(),10<u)){if(rr(o,n,ci,!nr),Ar(o,0,!0)!==0)break t;na=n,o.timeoutHandle=Th(Vv.bind(null,o,a,Jn,$u,eh,n,ci,qr,Os,nr,f,"Throttled",-0,0),u);break t}Vv(o,a,Jn,$u,eh,n,ci,qr,Os,nr,f,null,-0,0)}}break}while(!0);ia(t)}function Vv(t,n,a,o,u,f,S,T,B,j,lt,gt,W,rt){t.timeoutHandle=-1;var Pt=n.subtreeFlags,jt=(f&335544064)===f;if(gt=null,(jt||Pt&8192||(Pt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},li=null,Ov(n,f,gt),jt&&(Pt=gt,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=pl.bind(Pt),jt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?Qu-q():(f&4194048)===f?Bv-q():0,Pt=Jy(gt,Pt),Pt!==null)){na=f,t.cancelPendingCommit=Pt(Kv.bind(null,t,n,f,a,o,u,S,T,B,j,lt,gt,null,W,rt)),rr(t,f,S,!j);return}Kv(t,n,f,a,o,u,S,T,B,j,lt,gt)}function Z1(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(t,n,a,o){n=Ql(t,n),n&=~Ku,n&=~qr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-zn(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&D(t,a,n)}function ec(){return(Pe&6)===0?(ol(0),!1):!0}function ah(){if(Se!==null){if(Ve===0)var t=Se.return;else t=Se,_a=Lr=null,dd(t),bs=null,Xo=0,t=Se;for(;t!==null;)fv(t.alternate,t),t=t.return;Se=null}}function Fs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,_y(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,ah(),Ze=t,Se=a=ga(t.current,null),Me=n,Ve=0,ui=null,nr=!1,Ls=Fa(t,n),th=!1,Os=ci=Ku=qr=ir=un=0,Jn=rl=null,eh=!1,Ta=Ql(t,n),uu(),a}function kv(t,n){de=null,xt.H=Ou,n===Ts||n===Eu?(n=K0(),Ve=3):n===$f?(n=K0(),Ve=4):Ve=n===Rd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Se===null&&(un=1,Pu(t,Si(n,t.current)))}function Xv(){var t=wn.current;return t===null?!0:(Me&4194048)===Me?Bn===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Bn:!1}function qv(){var t=xt.H;return xt.H=Ou,t===null?Ou:t}function Yv(){var t=xt.A;return xt.A=Y1,t}function nc(){un=4,nr||(Me&4194048)!==Me&&wn.current!==null||(Ls=!0),(ir&134217727)===0&&(qr&134217727)===0||Ze===null||rr(Ze,Me,ci,!1)}function rh(t,n,a){var o=Pe;Pe|=2;var u=qv(),f=Yv();(Ze!==t||Me!==n)&&($u=null,Fs(t,n)),n=!1;var S=un;t:do try{if(Ve!==0&&Se!==null){var T=Se,B=ui;switch(Ve){case 8:ah(),S=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var j=Ve;if(Ve=0,ui=null,Hs(t,T,B,j),a&&Ls){S=0;break t}break;default:j=Ve,Ve=0,ui=null,Hs(t,T,B,j)}}j1(),S=un;break}catch(lt){kv(t,lt)}while(!0);return n&&t.shellSuspendCounter++,_a=Lr=null,Pe=o,xt.H=u,xt.A=f,Se===null&&(Ze=null,Me=0,uu()),S}function j1(){for(;Se!==null;)Wv(Se)}function K1(t,n){var a=Pe;Pe|=2;var o=qv(),u=Yv();Ze!==t||Me!==n?($u=null,Ju=q()+500,Fs(t,n)):Ls=Fa(t,n);t:do try{if(Ve!==0&&Se!==null){n=Se;var f=ui;e:switch(Ve){case 1:Ve=0,ui=null,Hs(t,n,f,1);break;case 2:case 9:if(Z0(f)){Ve=0,ui=null,Zv(n);break}n=function(){Ve!==2&&Ve!==9||Ze!==t||(Ve=7),ia(t)},f.then(n,n);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:Z0(f)?(Ve=0,ui=null,Zv(n)):(Ve=0,ui=null,Hs(t,n,f,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var T=Se;if(S?F_(S):T.stateNode.complete){Ve=0,ui=null;var B=T.sibling;if(B!==null)Se=B;else{var j=T.return;j!==null?(Se=j,ic(j)):Se=null}break e}}Ve=0,ui=null,Hs(t,n,f,5);break;case 6:Ve=0,ui=null,Hs(t,n,f,6);break;case 8:ah(),un=6;break t;default:throw Error(r(462))}}Q1();break}catch(lt){kv(t,lt)}while(!0);return _a=Lr=null,xt.H=o,xt.A=u,Pe=a,Se!==null?0:(Ze=null,Me=0,uu(),un)}function Q1(){for(;Se!==null&&!It();)Wv(Se)}function Wv(t){var n=uv(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,n===null?ic(t):Se=n}function Zv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=nv(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=nv(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:dd(n);var o=n;o===Tn&&(ve?(mu(o),o.tag===5&&o.stateNode!=null&&(Ke=o.stateNode)):(mu(o),ve=!0));default:fv(a,n),n=Se=I0(n,Ta),n=uv(a,n,Ta)}t.memoizedProps=t.pendingProps,n===null?ic(t):Se=n}function Hs(t,n,a,o){_a=Lr=null,dd(n),bs=null,Xo=0;var u=n.return;try{if(B1(t,u,n,a,Me)){un=1,Pu(t,Si(a,t.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;un=1,Pu(t,Si(a,t.current)),Se=null;return}n.flags&32768?(ve||o===1?t=!0:Ls||(Me&536870912)!==0?t=!1:(nr=t=!0,(o===2||o===9||o===3||o===6)&&(o=wn.current,o!==null&&o.tag===13&&(o.flags|=16384))),jv(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){jv(n,nr);return}t=n.return;var a=V1(n.alternate,n,Ta);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);un===0&&(un=5)}function jv(t,n){do{var a=k1(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);un=6,Se=null}function Kv(t,n,a,o,u,f,S,T,B,j,lt,gt){t.cancelPendingCommit=null;do ac();while(rn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ze&&(Se=Ze=null,Me=0),Yr=n,zi=t,na=a,ih=u,Fv=o,J1(t,n,a,S,T,B,gt)}}function J1(t,n,a,o,u,f,S){var T=n.lanes|n.childLanes;if(nh=T,T|=Hf,vf(t,a,T,o,u,f),zs=null,(a&335544064)===a?(Is=A1(t),o=10262):(Is=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(Ct,function(){return uh(),null})):(t.callbackNode=null,t.callbackPriority=0),ku=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=xt.T,xt.T=null,u=Xt.p,Xt.p=2,f=Pe,Pe|=4;try{X1(t,n,a)}finally{Pe=f,Xt.p=u,xt.T=o}}rn=1,ku?Ps=Ty(S,t.containerInfo,Is,sh,oh,ty,lh,uh,$1):(sh(),oh(),lh())}function $1(t){if(rn!==0){var n=zi.onRecoverableError;n(t,{componentStack:null})}}function ty(){rn===3&&(rn=0,Nv(Yr,zi),rn=4)}function sh(){if(rn===1){rn=0;var t=zi,n=Yr,a=na,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=xt.T,xt.T=null;var u=Xt.p;Xt.p=2;var f=Pe;Pe|=4;try{nl=Yu=!1,Dv(n,t,a),a=yh;var S=R0(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(S!==T&&T&&T.ownerDocument&&A0(T.ownerDocument.documentElement,T)){if(B!==null&&Pf(T)){var j=B.start,lt=B.end;if(lt===void 0&&(lt=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(lt,T.value.length);else{var gt=T.ownerDocument||document,W=gt&&gt.defaultView||window;if(W.getSelection){var rt=W.getSelection(),Pt=T.textContent.length,jt=Math.min(B.start,Pt),he=B.end===void 0?jt:Math.min(B.end,Pt);!rt.extend&&jt>he&&(S=he,he=jt,jt=S);var Z=b0(T,jt),X=b0(T,he);if(Z&&X&&(rt.rangeCount!==1||rt.anchorNode!==Z.node||rt.anchorOffset!==Z.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var et=gt.createRange();et.setStart(Z.node,Z.offset),rt.removeAllRanges(),jt>he?(rt.addRange(et),rt.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),rt.addRange(et))}}}}for(gt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var mt=gt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Zs=!!Eh,yh=Eh=null}finally{Pe=f,Xt.p=u,xt.T=o}}t.current=n,rn=2}}function oh(){if(rn===2){rn=0;var t=zi,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xt.T,xt.T=null;var o=Xt.p;Xt.p=2;var u=Pe;Pe|=4;try{Tv(t,n.alternate,n)}finally{Pe=u,Xt.p=o,xt.T=a}}rn=3}}function lh(){if(rn===4||rn===3){rn=0;var t=Ps;Ps=null,fe();var n=zi,a=Yr,o=na,u=Fv,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?rn=5:(rn=0,Yr=zi=null,Qv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ar=null),J(o),a=a.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(ye,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=xt.T,f=Xt.p,Xt.p=2,xt.T=null;try{for(var S=n.onRecoverableError,T=0;T<u.length;T++){var B=u[T];S(B.value,{componentStack:B.stack})}}finally{xt.T=a,Xt.p=f}}if(u=zs,S=Is,Is=null,u!==null&&(zs=null,S===null&&(S=[]),t!==null))for(B=0;B<u.length;B++)a=(0,u[B])(S),a!==void 0&&t.finished.finally(a);(na&3)!==0&&ac(),ia(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===tc?sl++:(sl=0,tc=n):(sl=0,tc=null),ol(0)}}function Qv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Go(n)))}function ac(){return Ps!==null&&(Ps.skipTransition(),Ps=null),sh(),oh(),lh(),uh()}function uh(){if(rn!==5)return!1;var t=zi,n=nh;nh=0;var a=J(na),o=xt.T,u=Xt.p;try{Xt.p=32>a?32:a,xt.T=null,a=ih,ih=null;var f=zi,S=na;if(rn=0,Yr=zi=null,na=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,zv(f.current),Lv(f,f.current,S,a),Pe=T,ol(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(ye,f)}catch{}return!0}finally{Xt.p=u,xt.T=o,Qv(t,n)}}function Jv(t,n,a){n=Si(a,n),n=Ad(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Rr(t,2),ia(t))}function ke(t,n,a){if(t.tag===3)Jv(t,t,a);else for(;n!==null;){if(n.tag===3){Jv(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){t=Si(a,t),a=Zg(2),o=Ka(n,a,2),o!==null&&(jg(a,o,n,t),Rr(o,2),ia(o));break}}n=n.return}}function ch(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new W1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(th=!0,u.add(a),t=ey.bind(null,t,n,a),n.then(t,t))}function ey(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Me&a)===a&&((un===4||un===3&&(Me&62914560)===Me&&300>q()-Qu)&&(Pe&2)===0?Fs(t,0):Ku|=a,Os===Me&&(Os=0)),ia(t)}function $v(t,n){n===0&&(n=Jl()),t=Dr(t,n),t!==null&&(Rr(t,n),ia(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$v(t,a)}function iy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),$v(t,a)}function ay(t,n){return ie(t,n)}var Gs=null,Vs=null,fh=!1,rc=!1,dh=!1,sr=0;function ia(t){t!==Vs&&t.next===null&&(Vs===null?Gs=Vs=t:Vs=Vs.next=t),rc=!0,fh||(fh=!0,sy())}function ol(t,n){if(!dh&&rc){dh=!0;do for(var a=!1,o=Gs;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-zn(42|t)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,i_(o,f))}else f=Me,f=Ar(o,o===Ze?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fa(o,f)||(a=!0,i_(o,f));o=o.next}while(a);dh=!1}}function ry(){t_()}function t_(){rc=fh=!1;var t=0;sr!==0&&vy()&&(t=sr);for(var n=q(),a=null,o=Gs;o!==null;){var u=o.next,f=e_(o,n);f===0?(o.next=null,a===null?Gs=u:a.next=u,u===null&&(Vs=a)):(a=o,(t!==0||(f&3)!==0)&&(rc=!0)),o=u}rn!==0&&rn!==5||ol(t),sr!==0&&(sr=0)}function e_(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-zn(f),T=1<<S,B=u[S];B===-1?((T&a)===0||(T&o)!==0)&&(u[S]=gf(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ze,a=Me,a=Ar(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Lt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Lt(o),J(a)){case 2:case 8:a=Yt;break;case 32:a=Ct;break;case 268435456:a=Kt;break;default:a=Ct}return o=n_.bind(null,t),a=ie(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Lt(o),t.callbackPriority=2,t.callbackNode=null,2}function n_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=Me;return o=Ar(t,t===Ze?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Gv(t,o,n),e_(t,q()),t.callbackNode!=null&&t.callbackNode===a?n_.bind(null,t):null)}function i_(t,n){if(ac())return null;Gv(t,n,!0)}function sy(){Sy(function(){(Pe&6)!==0?ie(Ot,ry):t_()})}function hh(){if(sr===0){var t=zr;t===0&&(t=Tr,Tr<<=1,(Tr&261888)===0&&(Tr=256)),sr=t}return sr}function a_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:eu(t)}function oy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=a_((u[Zt]||null).action),S=o.submitter;S&&(n=(n=S[Zt]||null)?a_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new ru("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(sr!==0){var B=new FormData(u,S);yd(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=new FormData(u,S),yd(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var ph=0;ph<Ff.length;ph++){var mh=Ff[ph],ly=mh.toLowerCase(),uy=mh[0].toUpperCase()+mh.slice(1);Ni(ly,"on"+uy)}Ni(D0,"onAnimationEnd"),Ni(U0,"onAnimationIteration"),Ni(N0,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(_1,"onTransitionRun"),Ni(S1,"onTransitionStart"),Ni(E1,"onTransitionCancel"),Ni(L0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function r_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],B=T.instance,j=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(lt){lu(lt)}u.currentTarget=null,f=B}else for(S=0;S<o.length;S++){if(T=o[S],B=T.instance,j=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(lt){lu(lt)}u.currentTarget=null,f=B}}}}function Ee(t,n){var a=n[ee];a===void 0&&(a=n[ee]=new Set);var o=t+"__bubble";a.has(o)||(s_(n,t,2,!1),a.add(o))}function gh(t,n,a){var o=0;n&&(o|=4),s_(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function vh(t){if(!t[sc]){t[sc]=!0,je.forEach(function(a){a!=="selectionchange"&&(cy.has(a)||gh(a,!1,t),gh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,gh("selectionchange",!1,n))}}function s_(t,n,a,o){switch(j_(n)){case 2:var u=nM;break;case 8:u=iM;break;default:u=Ih}a=u.bind(null,n,a,t),u=void 0,!bf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function _h(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Oe(T),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=f=S;continue t}T=T.parentNode}}o=o.return}s0(function(){var j=f,lt=xf(a),gt=[];t:{var W=O0.get(t);if(W!==void 0){var rt=ru,Pt=t;switch(t){case"keypress":if(iu(a)===0)break t;case"keydown":case"keyup":rt=ZE;break;case"focusin":Pt="focus",rt=wf;break;case"focusout":Pt="blur",rt=wf;break;case"beforeblur":case"afterblur":rt=wf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=u0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=$E;break;case D0:case U0:case N0:rt=FE;break;case L0:rt=e1;break;case"scroll":case"scrollend":rt=OE;break;case"wheel":rt=i1;break;case"copy":case"cut":case"paste":rt=GE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=f0;break;case"submit":rt=QE;break;case"toggle":case"beforetoggle":rt=r1}var jt=(n&4)!==0,he=!jt&&(t==="scroll"||t==="scrollend"),Z=jt?W!==null?W+"Capture":null:W;jt=[];for(var X=j,et;X!==null;){var mt=X;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||Z===null||(mt=Do(X,Z),mt!=null&&jt.push(ul(X,mt,et))),he)break;X=X.return}0<jt.length&&(W=new rt(W,Pt,null,a,lt),gt.push({event:W,listeners:jt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",rt&&a!==Mf&&(Pt=a.relatedTarget||a.fromElement)&&(Oe(Pt)||Pt[re]))break t;(W||rt)&&(Pt=lt.window===lt?lt:(rt=lt.ownerDocument)?rt.defaultView||rt.parentWindow:window,W?(rt=a.relatedTarget||a.toElement,W=j,rt=rt?Oe(rt):null,rt!==null&&(he=c(rt),jt=rt.tag,rt!==he||jt!==5&&jt!==27&&jt!==6)&&(rt=null)):(W=null,rt=j),W!==rt&&(jt=u0,mt="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(jt=f0,mt="onPointerLeave",Z="onPointerEnter",X="pointer"),he=W==null?Pt:En(W),et=rt==null?Pt:En(rt),Pt=new jt(mt,X+"leave",W,a,lt),Pt.target=he,Pt.relatedTarget=et,mt=null,Oe(lt)===j&&(jt=new jt(Z,X+"enter",rt,a,lt),jt.target=et,jt.relatedTarget=he,mt=jt),he=mt,jt=W&&rt?O(W,rt,fy):null,W!==null&&o_(gt,Pt,W,jt,!1),rt!==null&&he!==null&&o_(gt,he,rt,jt,!0)))}t:{if(W=j?En(j):window,rt=W.nodeName&&W.nodeName.toLowerCase(),rt==="select"||rt==="input"&&W.type==="file")var qt=S0;else if(v0(W))if(E0)qt=m1;else{qt=h1;var xe=d1}else rt=W.nodeName,!rt||rt.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?j&&yf(j.elementType)&&(qt=S0):qt=p1;if(qt&&(qt=qt(t,j))){_0(gt,qt,a,lt);break t}xe&&xe(t,W,j)}switch(xe=j?En(j):window,t){case"focusin":(v0(xe)||xe.contentEditable==="true")&&(gs=xe,zf=j,Bo=null);break;case"focusout":Bo=zf=gs=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,C0(gt,a,lt);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":C0(gt,a,lt)}var te;if(Uf)t:{switch(t){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else ms?m0(t,a)&&(le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(d0&&a.locale!=="ko"&&(ms||le!=="onCompositionStart"?le==="onCompositionEnd"&&ms&&(te=o0()):(Ga=lt,Af="value"in Ga?Ga.value:Ga.textContent,ms=!0)),xe=oc(j,le),0<xe.length&&(le=new c0(le,t,null,a,lt),gt.push({event:le,listeners:xe}),te?le.data=te:(te=g0(a),te!==null&&(le.data=te)))),(te=o1?l1(t,a):u1(t,a))&&(le=oc(j,"onBeforeInput"),0<le.length&&(xe=new c0("onBeforeInput","beforeinput",null,a,lt),gt.push({event:xe,listeners:le}),xe.data=te)),oy(gt,t,j,a,lt)}r_(gt,n)})}function ul(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Do(t,a),u!=null&&o.unshift(ul(t,u,f)),u=Do(t,n),u!=null&&o.push(ul(t,u,f))),t.tag===3)return o;t=t.return}return[]}function fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function o_(t,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,B=T.alternate,j=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||j===null||(B=j,u?(j=Do(a,f),j!=null&&S.unshift(ul(a,j,B))):u||(j=Do(a,f),j!=null&&S.push(ul(a,j,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var dy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function l_(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(hy,"")}function u_(t,n){return n=l_(n),l_(t)===n}function Xe(t,n,a,o,u,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||ds(t,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&ds(t,""+o);else return;break;case"className":tu(t,"class",o);break;case"tabIndex":tu(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(t,a,o);break;case"style":a0(t,o,f);return;case"data":if(n!=="object"){tu(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=eu(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",u.name,u,null),Xe(t,n,"formEncType",u.formEncType,u,null),Xe(t,n,"formMethod",u.formMethod,u,null),Xe(t,n,"formTarget",u.formTarget,u,null)):(Xe(t,n,"encType",u.encType,u,null),Xe(t,n,"method",u.method,u,null),Xe(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=eu(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Wi);return;case"onScroll":o!=null&&Ee("scroll",t);return;case"onScrollEnd":o!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=eu(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),$l(t,"popover",o);break;case"xlinkActuate":da(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":da(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":da(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":da(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":da(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":da(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":da(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":da(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":da(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$l(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=NE.get(a)||a,$l(t,a,o);else return}Ue=!0}function Sh(t,n,a,o,u,f){switch(a){case"style":a0(t,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")ds(t,o);else if(typeof o=="number"||typeof o=="bigint")ds(t,""+o);else return;break;case"onScroll":o!=null&&Ee("scroll",t);return;case"onScrollEnd":o!=null&&Ee("scrollend",t);return;case"onClick":o!=null&&(t.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[Zt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,o,u);break t}Ue=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):$l(t,a,o)}return}Ue=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,f,S,a,null)}}u&&Xe(t,n,"srcSet",a.srcSet,a,null),o&&Xe(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=f=S=u=null,B=null,j=null;for(o in a)if(a.hasOwnProperty(o)){var lt=a[o];if(lt!=null)switch(o){case"name":u=lt;break;case"type":S=lt;break;case"checked":B=lt;break;case"defaultChecked":j=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Xe(t,n,o,lt,a,null)}}t0(t,f,T,B,j,S,u,!1);return;case"select":Ee("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Xe(t,n,u,T,a,null)}n=f,a=S,t.multiple=!!o,n!=null?fs(t,!!o,n,!1):a!=null&&fs(t,!!o,a,!0);return;case"textarea":Ee("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Xe(t,n,S,T,a,null)}n0(t,o,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Xe(t,n,B,o,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(o=0;o<ll.length;o++)Ee(ll[o],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,j,o,a,null)}return;default:if(yf(n)){for(lt in a)a.hasOwnProperty(lt)&&(o=a[lt],o!==void 0&&Sh(t,n,lt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Xe(t,n,T,o,a,null))}var py={};function my(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,B=null,j=null,lt=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=gt;default:o.hasOwnProperty(rt)||Xe(t,n,rt,null,o,gt)}}for(var W in o){var rt=o[W];if(gt=a[W],o.hasOwnProperty(W)&&(rt!=null||gt!=null))switch(W){case"type":rt!==gt&&(Ue=!0),f=rt;break;case"name":rt!==gt&&(Ue=!0),u=rt;break;case"checked":rt!==gt&&(Ue=!0),j=rt;break;case"defaultChecked":rt!==gt&&(Ue=!0),lt=rt;break;case"value":rt!==gt&&(Ue=!0),S=rt;break;case"defaultValue":rt!==gt&&(Ue=!0),T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==gt&&Xe(t,n,W,rt,o,gt)}}Sf(t,S,T,B,j,lt,f,u);return;case"select":rt=S=T=W=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:o.hasOwnProperty(f)||Xe(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":f!==B&&(Ue=!0),W=f;break;case"defaultValue":f!==B&&(Ue=!0),T=f;break;case"multiple":f!==B&&(Ue=!0),S=f;default:f!==B&&Xe(t,n,u,f,o,B)}n=T,a=S,o=rt,W!=null?fs(t,!!a,W,!1):!!o!=!!a&&(n!=null?fs(t,!!a,n,!0):fs(t,!!a,a?[]:"",!1));return;case"textarea":rt=W=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,n,T,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":u!==f&&(Ue=!0),W=u;break;case"defaultValue":u!==f&&(Ue=!0),rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xe(t,n,S,u,o,f)}e0(t,W,rt);return;case"option":for(var Pt in a)W=a[Pt],a.hasOwnProperty(Pt)&&W!=null&&!o.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Xe(t,n,Pt,null,o,W));for(B in o)W=o[B],rt=a[B],o.hasOwnProperty(B)&&W!==rt&&(W!=null||rt!=null)&&(B==="selected"?(W!==rt&&(Ue=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol"):Xe(t,n,B,W,o,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)W=a[jt],a.hasOwnProperty(jt)&&W!=null&&!o.hasOwnProperty(jt)&&Xe(t,n,jt,null,o,W);for(j in o)if(W=o[j],rt=a[j],o.hasOwnProperty(j)&&W!==rt&&(W!=null||rt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,n));break;default:Xe(t,n,j,W,o,rt)}return;default:if(yf(n)){for(var he in a)W=a[he],a.hasOwnProperty(he)&&W!==void 0&&!o.hasOwnProperty(he)&&Sh(t,n,he,void 0,o,W);for(lt in o)W=o[lt],rt=a[lt],!o.hasOwnProperty(lt)||W===rt||W===void 0&&rt===void 0||Sh(t,n,lt,W,o,rt);return}}for(var Z in a)W=a[Z],a.hasOwnProperty(Z)&&W!=null&&!o.hasOwnProperty(Z)&&Xe(t,n,Z,null,o,W);for(gt in o)W=o[gt],rt=a[gt],!o.hasOwnProperty(gt)||W===rt||W==null&&rt==null||Xe(t,n,gt,W,o,rt)}function c_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,T=u.duration;if(f&&T&&c_(S)){for(S=0,T=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],j=B.startTime;if(j>T)break;var lt=B.transferSize,gt=B.initiatorType;lt&&c_(gt)&&(B=B.responseEnd,S+=lt*(B<T?1:(T-j)/(B-j)))}if(--o,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,yh=null;function cl(t){return t.nodeType===9?t:t.ownerDocument}function f_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function h_(t,n,a,o){return a=cl(a).createElement(t),a[Nt]=o,a[Zt]=n,Nn(a,t,n),De(a),a}function Mh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xh=null;function vy(){var t=window.event;return t&&t.type==="popstate"?t===xh?!1:(xh=t,!0):(xh=null,!1)}var Th=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,m_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Th,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(t){return p_.resolve(null).then(t).catch(Ey)}:Th;function Ey(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function g_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),js(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Nh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Nh(a);for(var f=a.firstChild;f;){var S=f.nextSibling,T=f.nodeName;f[Le]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Nh(t.ownerDocument.body);a=u}while(a);js(n)}function v_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function __(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function S_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function yy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function bh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return yy(n,a,t)}function My(t){return t.documentElement.clientHeight}function xy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Ty(t,n,a,o,u,f,S,T,B){var j=n.nodeType===9?n:n.ownerDocument;try{var lt=j.startViewTransition({update:function(){var W=j.defaultView,rt=W.navigation&&W.navigation.transition,Pt=j.fonts.status;o();var jt=[];if(Pt==="loaded"&&(My(j),j.fonts.status==="loading"&&jt.push(j.fonts.ready)),Pt=jt.length,t!==null)for(var he=t.suspenseyImages,Z=0,X=0;X<he.length;X++){var et=he[X];if(!et.complete){var mt=et.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<W.innerHeight&&mt.left<W.innerWidth){if(Z+=H_(et),Z>cc){jt.length=Pt;break}et=new Promise(xy.bind(et)),jt.push(et)}}}if(0<jt.length)return W=Promise.race([Promise.all(jt),new Promise(function(qt){return setTimeout(qt,500)})]).then(u,u),(rt?Promise.allSettled([rt.finished,W]):W).then(f,f);if(u(),rt)return rt.finished.then(f,f);f()},types:a});j.__reactViewTransition=lt;var gt=[];return lt.ready.then(function(){for(var W=j.documentElement.getAnimations({subtree:!0}),rt=0;rt<W.length;rt++){var Pt=W[rt],jt=Pt.effect,he=jt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){gt.push(Pt),Pt=jt.getKeyframes();for(var Z=he=void 0,X=!0,et=0;et<Pt.length;et++){var mt=Pt[et],qt=mt.width;if(he===void 0)he=qt;else if(he!==qt){X=!1;break}if(qt=mt.height,Z===void 0)Z=qt;else if(Z!==qt){X=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}X&&he!==void 0&&Z!==void 0&&(jt.setKeyframes(Pt),X=getComputedStyle(jt.target,jt.pseudoElement),X.width!==he||X.height!==Z)&&(X=Pt[0],X.width=he,X.height=Z,X=Pt[Pt.length-1],X.width=he,X.height=Z,jt.setKeyframes(Pt))}}S()},function(W){j.__reactViewTransition===lt&&(j.__reactViewTransition=null);try{typeof W=="object"&&W!==null&&W.name==="InvalidStateError"&&(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null),W!==null&&B(W)}finally{o(),u(),S()}}),lt.finished.finally(function(){for(var W=0;W<gt.length;W++)gt[W].cancel();j.__reactViewTransition===lt&&(j.__reactViewTransition=null),T()}),lt}catch{return o(),u(),S(),null}}function Wr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Wr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Wr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&o.push(a[u])}return o},Wr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function E_(t){return{name:t,group:new Wr("group",t),imagePair:new Wr("image-pair",t),old:new Wr("old",t),new:new Wr("new",t)}}function di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(t,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(M_(f,t,n,a)===-1){var S=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){S.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),o!==null&&(u=S.removeEventListener.bind(S,t,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=ks(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),p(this._fragmentFiber.child,!1,by,t,T,o)}this._eventListeners=f}};function by(t,n,a,o){return y(t).addEventListener(n,a,o),!1}di.prototype.removeEventListener=function(t,n,a){var o=this._eventListeners;if(o!==null&&(n=M_(o,t,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var f=u.cleanup;u=ks(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Ay,t,a,u),o.splice(n,1),f!==null&&f()}};function Ay(t,n,a,o){return y(t).removeEventListener(n,a,o),!1}function ks(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function y_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function M_(t,n,a,o){if(t.length===0)return-1;o=y_(o);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&y_(f.optionsOrUseCapture)===o)return u}return-1}di.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];o.addEventListener(f.type,f.attachedListener,ks(f.optionsOrUseCapture))}if(n.appendChild(o),t=o.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],o.removeEventListener(f.type,f.attachedListener,ks(f.optionsOrUseCapture));return n.removeChild(o),t}return n.dispatchEvent(t)},di.prototype.focus=function(t){p(this._fragmentFiber.child,!0,x_,t,void 0,void 0)};function x_(t,n){return t.tag===6?!1:(t=y(t),By(t,n))}di.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Ah,n,void 0,void 0);for(var a=n.length-1;0<=a&&!x_(n[a],t);a--);};function Ah(t,n){return n.push(t),!1}di.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=y(t),t=cl(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,Ry,t,void 0,void 0))};function Ry(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Cy,t,void 0,void 0)};function Cy(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,wy,t,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var o=Ii[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):Ii[n++]=o}Ii.length=n}};function wy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ii=[],Rh=!1;function Dy(t,n,a){Ii.push({fragmentInstance:t,observer:n,instance:a}),Rh||(Rh=!0,Fy(function(){Rh=!1;var o=Ii;Ii=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}di.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Uy,t,void 0,void 0),t};function Uy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}di.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},di.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Ah,a,void 0,void 0);var o=y(n);if(a.length===0){if(a=o,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=x(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),B=S&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=o&&f&&S&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===t||f&&u===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ny(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ny(t,n,a,o,u){var f=Oe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=O(a,f,F),n===null?n=!1:(p(n,!0,N,f,a),f=E,E=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=O(o,f,F),n===null?n=!1:(p(n,!0,w,f,o),f=E,U=E=null,n=f!==null)),n):!1}function T_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,Ah,n,void 0,void 0);var a=t!==!1;if(n.length===0){var o=x(this._fragmentFiber);if(o=a?o[1]||o[0]||_(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=y(o),T_(t,a);return}if(o=y(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=y(u),T_(u,a)):y(u).scrollIntoView(t),o+=a?-1:1}};function Ly(t,n){return t=y(t),b_(t,n),!1}function b_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function A_(t,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];t.addEventListener(u.type,u.attachedListener,ks(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var S=0,T=0;T<Ii.length;T++){var B=Ii[T];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(Ii[S++]=B)}Ii.length=S,f.observe(t)}),b_(t,n))}function Oy(t,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];t.removeEventListener(u.type,u.attachedListener,ks(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?Dy(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Ch(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ch(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Py(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function zy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function R_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function wh(t){return t.data==="$?"||t.data==="$~"}function Dh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Iy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Uh=null;function C_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function w_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function By(t,n){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function Fy(t){m_(function(){m_(function(n){return t(n)})})}function D_(t,n,a){switch(n=cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function U_(t,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&Xe(t,n,o,null,py,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wi&&(t.onclick=null),ne(t)}function Nh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ne(t)}var bi=new Map,N_=new Set;function fl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ba=Xt.d;Xt.d={f:Hy,r:Gy,D:Vy,C:ky,L:Xy,m:qy,X:Wy,S:Yy,M:Zy};function Hy(){var t=ba.f(),n=ec();return t||n}function Gy(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Og(n):ba.r(t)}var Xs=typeof document>"u"?null:document;function L_(t,n,a){var o=Xs;if(o&&typeof n=="string"&&n){var u=vi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),N_.has(u)||(N_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",t),De(n),o.head.appendChild(n)))}}function Vy(t){ba.D(t),L_("dns-prefetch",t,null)}function ky(t,n){ba.C(t,n),L_("preconnect",t,n)}function Xy(t,n,a){ba.L(t,n,a);var o=Xs;if(o&&t&&n){var u='link[rel="preload"][as="'+vi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vi(a.imageSizes)+'"]')):u+='[href="'+vi(t)+'"]';var f=u;switch(n){case"style":f=qs(t);break;case"script":f=Ys(t)}if(!(bi.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(dl(f))||n==="script"&&o.querySelector(hl(f))))){var S=o.createElement("link");Nn(S,"link",t),n==="style"&&(S[we]=!0,S.onload=S.onerror=function(){Ha(S)}),De(S),o.head.appendChild(S)}}}function qy(t,n){ba.m(t,n);var a=Xs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vi(o)+'"][href="'+vi(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ys(t)}if(!bi.has(f)&&(t=P({rel:"modulepreload",href:t},n),bi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(f)))return}o=a.createElement("link"),Nn(o,"link",t),De(o),a.head.appendChild(o)}}}function Yy(t,n,a){ba.S(t,n,a);var o=Xs;if(o&&t){var u=ai(o).hoistableStyles,f=qs(t);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(dl(f)))T.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(f))&&Lh(t,a);var B=S=o.createElement("link");De(B),Nn(B,"link",t),B._p=new Promise(function(j,lt){B.onload=j,B.onerror=lt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,lc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function Wy(t,n){ba.X(t,n);var a=Xs;if(a&&t){var o=ai(a).hoistableScripts,u=Ys(t),f=o.get(u);f||(f=a.querySelector(hl(u)),f||(t=P({src:t,async:!0},n),(n=bi.get(u))&&Oh(t,n),f=a.createElement("script"),De(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Zy(t,n){ba.M(t,n);var a=Xs;if(a&&t){var o=ai(a).hoistableScripts,u=Ys(t),f=o.get(u);f||(f=a.querySelector(hl(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&Oh(t,n),f=a.createElement("script"),De(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function O_(t,n,a,o){var u=(u=be.current)?fl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=qs(a.href),n=ai(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=qs(a.href);var f=ai(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(dl(t)))?f._p||(S.instance=f,S.state.loading=5):(f=bi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,f)),jy(u,t,f,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ys(a),n=ai(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function qs(t){return'href="'+vi(t)+'"'}function dl(t){return'link[rel="stylesheet"]['+t+"]"}function P_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function jy(t,n,a,o){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[we]!==!0){o.loading=1;return}}else n=t.createElement("link"),n[we]=!0,n.onload=n.onerror=Ha.bind(null,n),Nn(n,"link",a),De(n),t.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Ys(t){return'[src="'+vi(t)+'"]'}function hl(t){return"script[async]"+t}function z_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+vi(a.href)+'"]');if(o)return n.instance=o,De(o),o;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),De(o),Nn(o,"style",u),lc(o,a.precedence,t),n.instance=o;case"stylesheet":u=qs(a.href);var f=t.querySelector(dl(u));if(f)return n.state.loading|=4,n.instance=f,De(f),f;o=P_(a),(u=bi.get(u))&&Lh(o,u),f=(t.ownerDocument||t).createElement("link"),De(f);var S=f;return S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),Nn(f,"link",o),n.state.loading|=4,lc(f,a.precedence,t),n.instance=f;case"script":return f=Ys(a.src),(u=t.querySelector(hl(f)))?(n.instance=u,De(u),u):(o=a,(u=bi.get(f))&&(o=P({},a),Oh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),De(u),Nn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,t));return n.instance}function lc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Lh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Oh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var uc=null;function I_(t,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Le]||f[Nt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function Ph(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ky(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function F_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function H_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function G_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=H_(n),t.suspenseyImages.push(n)),t=$y.bind(t),n.decode().then(t,t))}function Qy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=qs(o.href),f=n.querySelector(dl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,De(f);return}f=n.ownerDocument||n,o=P_(o),(u=bi.get(u))&&Lh(o,u),f=f.createElement("link"),De(f);var S=f;S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),Nn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var cc=0;function Jy(t,n){return t.stylesheets&&t.count===0&&dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&cc===0&&(cc=62500*gy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>cc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function V_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)dc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function pl(){this.count--,V_(this)}function $y(){this.imgCount--,V_(this)}var fc=null;function dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,n.forEach(tM,t),fc=null,pl.call(t))}function tM(t,n){if(!(n.state.loading&4)){var a=fc.get(t);if(a)var o=a.get(null);else{a=new Map,fc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=pl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ws={$$typeof:I,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function eM(t,n,a,o,u,f,S,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.hiddenUpdates=wo(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function k_(t,n,a,o,u,f,S,T,B,j,lt,gt){return t=new eM(t,n,a,S,B,j,lt,gt,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Kf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},td(f),t}function X_(t){return t?(t=Ss,t):Ss}function q_(t,n,a,o,u,f){u=X_(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ka(t,o,n),a!==null&&($n(a,t,n),qo(a,t,n))}function Y_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function zh(t,n){Y_(t,n),(t=t.alternate)&&Y_(t,n)}function W_(t){if(t.tag===13||t.tag===31){var n=Dr(t,67108864);n!==null&&$n(n,t,67108864),zh(t,67108864)}}function Z_(t){if(t.tag===13||t.tag===31){var n=fi();n=dt(n);var a=Dr(t,n);a!==null&&$n(a,t,n),zh(t,n)}}var Zs=!0;function nM(t,n,a,o){var u=xt.T;xt.T=null;var f=Xt.p;try{Xt.p=2,Ih(t,n,a,o)}finally{Xt.p=f,xt.T=u}}function iM(t,n,a,o){var u=xt.T;xt.T=null;var f=Xt.p;try{Xt.p=8,Ih(t,n,a,o)}finally{Xt.p=f,xt.T=u}}function Ih(t,n,a,o){if(Zs){var u=Bh(o);if(u===null)_h(t,n,o,hc,a),K_(t,o);else if(rM(u,t,n,a,o))o.stopPropagation();else if(K_(t,o),n&4&&-1<aM.indexOf(t)){for(;u!==null;){var f=ge(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=gi(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var B=1<<31-zn(S);T.entanglements[1]|=B,S&=~B}ia(f),(Pe&6)===0&&(Ju=q()+500,ol(0))}}break;case 31:case 13:T=Dr(f,2),T!==null&&$n(T,f,2),ec(),zh(f,2)}if(f=Bh(o),f===null&&_h(t,n,o,hc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else _h(t,n,o,null,a)}}function Bh(t){return t=xf(t),Fh(t)}var hc=null;function Fh(t){if(hc=null,t=Oe(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function j_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case Ot:return 2;case Yt:return 8;case Ct:case St:return 32;case Kt:return 268435456;default:return 32}default:return 32}}var Hh=!1,lr=null,ur=null,cr=null,ml=new Map,gl=new Map,fr=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(t,n){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function vl(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&W_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function rM(t,n,a,o,u){switch(n){case"focusin":return lr=vl(lr,t,n,a,o,u),!0;case"dragenter":return ur=vl(ur,t,n,a,o,u),!0;case"mouseover":return cr=vl(cr,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ml.set(f,vl(ml.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,gl.set(f,vl(gl.get(f)||null,t,n,a,o,u)),!0}return!1}function Q_(t){var n=Oe(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){Z_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){Z_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Bh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Mf=o,a.target.dispatchEvent(o),Mf=null}else return n=ge(a),n!==null&&W_(n),t.blockedOn=a,!1;n.shift()}return!0}function J_(t,n,a){pc(t)&&a.delete(n)}function sM(){Hh=!1,lr!==null&&pc(lr)&&(lr=null),ur!==null&&pc(ur)&&(ur=null),cr!==null&&pc(cr)&&(cr=null),ml.forEach(J_),gl.forEach(J_)}function mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Hh||(Hh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,sM)))}var gc=null;function $_(t){gc!==t&&(gc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Fh(o||a)===null)continue;break}var f=ge(a);f!==null&&(t.splice(n,3),n-=3,yd(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function js(t){function n(B){return mc(B,t)}lr!==null&&mc(lr,t),ur!==null&&mc(ur,t),cr!==null&&mc(cr,t),ml.forEach(n),gl.forEach(n);for(var a=0;a<fr.length;a++){var o=fr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Q_(a),a.blockedOn===null&&fr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Zt]||null;if(typeof f=="function")S||$_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Zt]||null)T=S.formAction;else if(Fh(u)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),$_(a)}}}function tS(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Gh(t){this._internalRoot=t}vc.prototype.render=Gh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=fi();q_(a,o,t,n,null,null)},vc.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;q_(t.current,2,null,t,null,null),ec(),n[re]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var n=wt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fr.length&&n!==0&&n<fr[a].priority;a++);fr.splice(a,0,t),a===0&&Q_(t)}};var eS=e.version;if(eS!=="19.3.1")throw Error(r(527,eS,"19.3.1"));Xt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var oM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{ye=_c.inject(oM),an=_c}catch{}}return _l.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Xg,f=qg,S=Yg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=k_(t,1,!1,null,null,a,o,null,u,f,S,tS),t[re]=n.current,vh(t),new Gh(n)},_l.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Xg,S=qg,T=Yg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=k_(t,1,!0,n,a??null,o,u,B,f,S,T,tS),n.context=X_(null),a=n.current,o=fi(),o=dt(o),u=ja(o),u.callback=null,Ka(a,u,o),a=o,n.current.lanes=a,Rr(n,a),ia(n),t[re]=n.current,vh(t),new vc(n)},_l.version="19.3.1",_l}var uS;function gM(){if(uS)return kh.exports;uS=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),kh.exports=mM(),kh.exports}var vM=gM();const zm="180",_M=0,cS=1,SM=2,w2=1,EM=2,Na=3,xr=0,ei=1,La=2,yr=0,mo=1,fS=2,dS=3,hS=4,yM=5,ns=100,MM=101,xM=102,TM=103,bM=104,AM=200,RM=201,CM=202,wM=203,Rp=204,Cp=205,DM=206,UM=207,NM=208,LM=209,OM=210,PM=211,zM=212,IM=213,BM=214,wp=0,Dp=1,Up=2,vo=3,Np=4,Lp=5,Op=6,Pp=7,D2=0,FM=1,HM=2,Mr=0,GM=1,VM=2,kM=3,XM=4,qM=5,YM=6,WM=7,U2=300,_o=301,So=302,zp=303,Ip=304,hf=306,Nl=1e3,rs=1001,Bp=1002,mi=1003,ZM=1004,Sc=1005,Vi=1006,Wh=1007,Er=1008,Ia=1009,N2=1010,L2=1011,Ll=1012,Im=1013,ss=1014,Pa=1015,Xl=1016,Bm=1017,Fm=1018,Ol=1020,O2=35902,P2=35899,z2=1021,I2=1022,wi=1023,Pl=1026,zl=1027,B2=1028,Hm=1029,F2=1030,Gm=1031,Vm=1033,Wc=33776,Zc=33777,jc=33778,Kc=33779,Fp=35840,Hp=35841,Gp=35842,Vp=35843,kp=36196,Xp=37492,qp=37496,Yp=37808,Wp=37809,Zp=37810,jp=37811,Kp=37812,Qp=37813,Jp=37814,$p=37815,tm=37816,em=37817,nm=37818,im=37819,am=37820,rm=37821,sm=36492,om=36494,lm=36495,um=36283,cm=36284,fm=36285,dm=36286,jM=3200,KM=3201,QM=0,JM=1,Sr="",ti="srgb",Eo="srgb-linear",tf="linear",We="srgb",Ks=7680,pS=519,$M=512,tx=513,ex=514,H2=515,nx=516,ix=517,ax=518,rx=519,mS=35044,sx=35048,gS="300 es",oa=2e3,ef=2001;class bo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vS=1234567;const wl=Math.PI/180,Il=180/Math.PI;function Ao(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Te(s,e,i){return Math.max(e,Math.min(i,s))}function km(s,e){return(s%e+e)%e}function ox(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function lx(s,e,i){return s!==e?(i-s)/(e-s):0}function Dl(s,e,i){return(1-i)*s+i*e}function ux(s,e,i,r){return Dl(s,e,1-Math.exp(-i*r))}function cx(s,e=1){return e-Math.abs(km(s,e*2)-e)}function fx(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function dx(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function hx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function px(s,e){return s+Math.random()*(e-s)}function mx(s){return s*(.5-Math.random())}function gx(s){s!==void 0&&(vS=s);let e=vS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(s){return s*wl}function _x(s){return s*Il}function Sx(s){return(s&s-1)===0&&s!==0}function Ex(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mx(s,e,i,r,l){const c=Math.cos,d=Math.sin,h=c(i/2),v=d(i/2),g=c((e+r)/2),m=d((e+r)/2),p=c((e-r)/2),_=d((e-r)/2),M=c((r-e)/2),x=d((r-e)/2);switch(l){case"XYX":s.set(h*m,v*p,v*_,h*g);break;case"YZY":s.set(v*_,h*m,v*p,h*g);break;case"ZXZ":s.set(v*p,v*_,h*m,h*g);break;case"XZX":s.set(h*m,v*x,v*M,h*g);break;case"YXY":s.set(v*M,h*m,v*x,h*g);break;case"ZYZ":s.set(v*x,v*M,h*m,h*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ul={DEG2RAD:wl,RAD2DEG:Il,generateUUID:Ao,clamp:Te,euclideanModulo:km,mapLinear:ox,inverseLerp:lx,lerp:Dl,damp:ux,pingpong:cx,smoothstep:fx,smootherstep:dx,randInt:hx,randFloat:px,randFloatSpread:mx,seededRandom:gx,degToRad:vx,radToDeg:_x,isPowerOfTwo:Sx,ceilPowerOfTwo:Ex,floorPowerOfTwo:yx,setQuaternionFromProperEuler:Mx,normalize:Wn,denormalize:fo};class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ql{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let v=r[l+0],g=r[l+1],m=r[l+2],p=r[l+3];const _=c[d+0],M=c[d+1],x=c[d+2],b=c[d+3];if(h===0){e[i+0]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p;return}if(h===1){e[i+0]=_,e[i+1]=M,e[i+2]=x,e[i+3]=b;return}if(p!==b||v!==_||g!==M||m!==x){let y=1-h;const E=v*_+g*M+m*x+p*b,U=E>=0?1:-1,N=1-E*E;if(N>Number.EPSILON){const F=Math.sqrt(N),O=Math.atan2(F,E*U);y=Math.sin(y*O)/F,h=Math.sin(h*O)/F}const w=h*U;if(v=v*y+_*w,g=g*y+M*w,m=m*y+x*w,p=p*y+b*w,y===1-h){const F=1/Math.sqrt(v*v+g*g+m*m+p*p);v*=F,g*=F,m*=F,p*=F}}e[i]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],v=r[l+1],g=r[l+2],m=r[l+3],p=c[d],_=c[d+1],M=c[d+2],x=c[d+3];return e[i]=h*x+m*p+v*M-g*_,e[i+1]=v*x+m*_+g*p-h*M,e[i+2]=g*x+m*M+h*_-v*p,e[i+3]=m*x-h*p-v*_-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,v=Math.sin,g=h(r/2),m=h(l/2),p=h(c/2),_=v(r/2),M=v(l/2),x=v(c/2);switch(d){case"XYZ":this._x=_*m*p+g*M*x,this._y=g*M*p-_*m*x,this._z=g*m*x+_*M*p,this._w=g*m*p-_*M*x;break;case"YXZ":this._x=_*m*p+g*M*x,this._y=g*M*p-_*m*x,this._z=g*m*x-_*M*p,this._w=g*m*p+_*M*x;break;case"ZXY":this._x=_*m*p-g*M*x,this._y=g*M*p+_*m*x,this._z=g*m*x+_*M*p,this._w=g*m*p-_*M*x;break;case"ZYX":this._x=_*m*p-g*M*x,this._y=g*M*p+_*m*x,this._z=g*m*x-_*M*p,this._w=g*m*p+_*M*x;break;case"YZX":this._x=_*m*p+g*M*x,this._y=g*M*p+_*m*x,this._z=g*m*x-_*M*p,this._w=g*m*p-_*M*x;break;case"XZY":this._x=_*m*p-g*M*x,this._y=g*M*p-_*m*x,this._z=g*m*x+_*M*p,this._w=g*m*p+_*M*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],v=i[9],g=i[2],m=i[6],p=i[10],_=r+h+p;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(m-v)*M,this._y=(c-g)*M,this._z=(d-l)*M}else if(r>h&&r>p){const M=2*Math.sqrt(1+r-h-p);this._w=(m-v)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+g)/M}else if(h>p){const M=2*Math.sqrt(1+h-r-p);this._w=(c-g)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(v+m)/M}else{const M=2*Math.sqrt(1+p-r-h);this._w=(d-l)/M,this._x=(c+g)/M,this._y=(v+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,v=i._y,g=i._z,m=i._w;return this._x=r*m+d*h+l*g-c*v,this._y=l*m+d*v+c*h-r*g,this._z=c*m+d*g+r*v-l*h,this._w=d*m-r*h-l*v-c*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const v=1-h*h;if(v<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const g=Math.sqrt(v),m=Math.atan2(g,h),p=Math.sin((1-i)*m)/g,_=Math.sin(i*m)/g;return this._w=d*p+this._w*_,this._x=r*p+this._x*_,this._y=l*p+this._y*_,this._z=c*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(e=0,i=0,r=0){ut.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(_S.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(_S.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,v=e.w,g=2*(d*l-h*r),m=2*(h*i-c*l),p=2*(c*r-d*i);return this.x=i+v*g+d*p-h*m,this.y=r+v*m+h*g-c*p,this.z=l+v*p+c*m-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,v=i.z;return this.x=l*v-c*h,this.y=c*d-r*v,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zh=new ut,_S=new ql;class pe{constructor(e,i,r,l,c,d,h,v,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,v,g)}set(e,i,r,l,c,d,h,v,g){const m=this.elements;return m[0]=e,m[1]=l,m[2]=h,m[3]=i,m[4]=c,m[5]=v,m[6]=r,m[7]=d,m[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],v=r[6],g=r[1],m=r[4],p=r[7],_=r[2],M=r[5],x=r[8],b=l[0],y=l[3],E=l[6],U=l[1],N=l[4],w=l[7],F=l[2],O=l[5],P=l[8];return c[0]=d*b+h*U+v*F,c[3]=d*y+h*N+v*O,c[6]=d*E+h*w+v*P,c[1]=g*b+m*U+p*F,c[4]=g*y+m*N+p*O,c[7]=g*E+m*w+p*P,c[2]=_*b+M*U+x*F,c[5]=_*y+M*N+x*O,c[8]=_*E+M*w+x*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8];return i*d*m-i*h*g-r*c*m+r*h*v+l*c*g-l*d*v}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8],p=m*d-h*g,_=h*v-m*c,M=g*c-d*v,x=i*p+r*_+l*M;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=p*b,e[1]=(l*g-m*r)*b,e[2]=(h*r-l*d)*b,e[3]=_*b,e[4]=(m*i-l*v)*b,e[5]=(l*c-h*i)*b,e[6]=M*b,e[7]=(r*v-g*i)*b,e[8]=(d*i-r*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const v=Math.cos(c),g=Math.sin(c);return this.set(r*v,r*g,-r*(v*d+g*h)+d+e,-l*g,l*v,-l*(-g*d+v*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(jh.makeScale(e,i)),this}rotate(e){return this.premultiply(jh.makeRotation(-e)),this}translate(e,i){return this.premultiply(jh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jh=new pe;function G2(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xx(){const s=Bl("canvas");return s.style.display="block",s}const SS={};function Fl(s){s in SS||(SS[s]=!0,console.warn(s))}function Tx(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const ES=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yS=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bx(){const s={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===We&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===We&&(l.r=go(l.r),l.g=go(l.g),l.b=go(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Sr?tf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Eo]:{primaries:e,whitePoint:r,transfer:tf,toXYZ:ES,fromXYZ:yS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:We,toXYZ:ES,fromXYZ:yS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const Ne=bx();function za(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class Ax{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=Bl("canvas")),Qs.width=e.width,Qs.height=e.height;const l=Qs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bl("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=za(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(za(i[r]/255)*255):i[r]=za(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rx=0;class Xm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Kh(l[d].image)):c.push(Kh(l[d]))}else c=Kh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Kh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ax.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;const Qh=new ut;class Pn extends bo{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=rs,l=rs,c=Vi,d=Er,h=wi,v=Ia,g=Pn.DEFAULT_ANISOTROPY,m=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ao(),this.name="",this.source=new Xm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=v,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qh).x}get height(){return this.source.getSize(Qh).y}get depth(){return this.source.getSize(Qh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Bp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Bp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=U2;Pn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,r=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const v=e.elements,g=v[0],m=v[4],p=v[8],_=v[1],M=v[5],x=v[9],b=v[2],y=v[6],E=v[10];if(Math.abs(m-_)<.01&&Math.abs(p-b)<.01&&Math.abs(x-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(p+b)<.1&&Math.abs(x+y)<.1&&Math.abs(g+M+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(g+1)/2,w=(M+1)/2,F=(E+1)/2,O=(m+_)/4,P=(p+b)/4,k=(x+y)/4;return N>w&&N>F?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=O/r,c=P/r):w>F?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=O/l,c=k/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=P/c,l=k/c),this.set(r,l,c,i),this}let U=Math.sqrt((y-x)*(y-x)+(p-b)*(p-b)+(_-m)*(_-m));return Math.abs(U)<.001&&(U=1),this.x=(y-x)/U,this.y=(p-b)/U,this.z=(_-m)/U,this.w=Math.acos((g+M+E-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wx extends bo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Vi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Xm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends wx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class V2 extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dx extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl{constructor(e=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Bi):Bi.fromBufferAttribute(c,d),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ec.copy(r.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),yc.subVectors(this.max,Sl),Js.subVectors(e.a,Sl),$s.subVectors(e.b,Sl),to.subVectors(e.c,Sl),hr.subVectors($s,Js),pr.subVectors(to,$s),Zr.subVectors(Js,to);let i=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Zr.z,Zr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Zr.z,0,-Zr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Zr.y,Zr.x,0];return!Jh(i,Js,$s,to,yc)||(i=[1,0,0,0,1,0,0,0,1],!Jh(i,Js,$s,to,yc))?!1:(Mc.crossVectors(hr,pr),i=[Mc.x,Mc.y,Mc.z],Jh(i,Js,$s,to,yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Aa=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Bi=new ut,Ec=new Yl,Js=new ut,$s=new ut,to=new ut,hr=new ut,pr=new ut,Zr=new ut,Sl=new ut,yc=new ut,Mc=new ut,jr=new ut;function Jh(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){jr.fromArray(s,c);const h=l.x*Math.abs(jr.x)+l.y*Math.abs(jr.y)+l.z*Math.abs(jr.z),v=e.dot(jr),g=i.dot(jr),m=r.dot(jr);if(Math.max(-Math.max(v,g,m),Math.min(v,g,m))>h)return!1}return!0}const Ux=new Yl,El=new ut,$h=new ut;class pf{constructor(e=new ut,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ux.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const i=El.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(El,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add($h)),this.expandByPoint(El.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ra=new ut,tp=new ut,xc=new ut,mr=new ut,ep=new ut,Tc=new ut,np=new ut;class k2{constructor(e=new ut,i=new ut(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ra)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ra.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){tp.copy(e).add(i).multiplyScalar(.5),xc.copy(i).sub(e).normalize(),mr.copy(this.origin).sub(tp);const c=e.distanceTo(i)*.5,d=-this.direction.dot(xc),h=mr.dot(this.direction),v=-mr.dot(xc),g=mr.lengthSq(),m=Math.abs(1-d*d);let p,_,M,x;if(m>0)if(p=d*v-h,_=d*h-v,x=c*m,p>=0)if(_>=-x)if(_<=x){const b=1/m;p*=b,_*=b,M=p*(p+d*_+2*h)+_*(d*p+_+2*v)+g}else _=c,p=Math.max(0,-(d*_+h)),M=-p*p+_*(_+2*v)+g;else _=-c,p=Math.max(0,-(d*_+h)),M=-p*p+_*(_+2*v)+g;else _<=-x?(p=Math.max(0,-(-d*c+h)),_=p>0?-c:Math.min(Math.max(-c,-v),c),M=-p*p+_*(_+2*v)+g):_<=x?(p=0,_=Math.min(Math.max(-c,-v),c),M=_*(_+2*v)+g):(p=Math.max(0,-(d*c+h)),_=p>0?c:Math.min(Math.max(-c,-v),c),M=-p*p+_*(_+2*v)+g);else _=d>0?-c:c,p=Math.max(0,-(d*_+h)),M=-p*p+_*(_+2*v)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(tp).addScaledVector(xc,_),M}intersectSphere(e,i){Ra.subVectors(e.center,this.origin);const r=Ra.dot(this.direction),l=Ra.dot(Ra)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,v=r+d;return v<0?null:h<0?this.at(v,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,v;const g=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,_=this.origin;return g>=0?(r=(e.min.x-_.x)*g,l=(e.max.x-_.x)*g):(r=(e.max.x-_.x)*g,l=(e.min.x-_.x)*g),m>=0?(c=(e.min.y-_.y)*m,d=(e.max.y-_.y)*m):(c=(e.max.y-_.y)*m,d=(e.min.y-_.y)*m),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),p>=0?(h=(e.min.z-_.z)*p,v=(e.max.z-_.z)*p):(h=(e.max.z-_.z)*p,v=(e.min.z-_.z)*p),r>v||h>l)||((h>r||r!==r)&&(r=h),(v<l||l!==l)&&(l=v),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ra)!==null}intersectTriangle(e,i,r,l,c){ep.subVectors(i,e),Tc.subVectors(r,e),np.crossVectors(ep,Tc);let d=this.direction.dot(np),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;mr.subVectors(this.origin,e);const v=h*this.direction.dot(Tc.crossVectors(mr,Tc));if(v<0)return null;const g=h*this.direction.dot(ep.cross(mr));if(g<0||v+g>d)return null;const m=-h*mr.dot(np);return m<0?null:this.at(m/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,i,r,l,c,d,h,v,g,m,p,_,M,x,b,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,v,g,m,p,_,M,x,b,y)}set(e,i,r,l,c,d,h,v,g,m,p,_,M,x,b,y){const E=this.elements;return E[0]=e,E[4]=i,E[8]=r,E[12]=l,E[1]=c,E[5]=d,E[9]=h,E[13]=v,E[2]=g,E[6]=m,E[10]=p,E[14]=_,E[3]=M,E[7]=x,E[11]=b,E[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/eo.setFromMatrixColumn(e,0).length(),c=1/eo.setFromMatrixColumn(e,1).length(),d=1/eo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),v=Math.cos(l),g=Math.sin(l),m=Math.cos(c),p=Math.sin(c);if(e.order==="XYZ"){const _=d*m,M=d*p,x=h*m,b=h*p;i[0]=v*m,i[4]=-v*p,i[8]=g,i[1]=M+x*g,i[5]=_-b*g,i[9]=-h*v,i[2]=b-_*g,i[6]=x+M*g,i[10]=d*v}else if(e.order==="YXZ"){const _=v*m,M=v*p,x=g*m,b=g*p;i[0]=_+b*h,i[4]=x*h-M,i[8]=d*g,i[1]=d*p,i[5]=d*m,i[9]=-h,i[2]=M*h-x,i[6]=b+_*h,i[10]=d*v}else if(e.order==="ZXY"){const _=v*m,M=v*p,x=g*m,b=g*p;i[0]=_-b*h,i[4]=-d*p,i[8]=x+M*h,i[1]=M+x*h,i[5]=d*m,i[9]=b-_*h,i[2]=-d*g,i[6]=h,i[10]=d*v}else if(e.order==="ZYX"){const _=d*m,M=d*p,x=h*m,b=h*p;i[0]=v*m,i[4]=x*g-M,i[8]=_*g+b,i[1]=v*p,i[5]=b*g+_,i[9]=M*g-x,i[2]=-g,i[6]=h*v,i[10]=d*v}else if(e.order==="YZX"){const _=d*v,M=d*g,x=h*v,b=h*g;i[0]=v*m,i[4]=b-_*p,i[8]=x*p+M,i[1]=p,i[5]=d*m,i[9]=-h*m,i[2]=-g*m,i[6]=M*p+x,i[10]=_-b*p}else if(e.order==="XZY"){const _=d*v,M=d*g,x=h*v,b=h*g;i[0]=v*m,i[4]=-p,i[8]=g*m,i[1]=_*p+b,i[5]=d*m,i[9]=M*p-x,i[2]=x*p-M,i[6]=h*m,i[10]=b*p+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nx,e,Lx)}lookAt(e,i,r){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),gr.crossVectors(r,hi),gr.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),gr.crossVectors(r,hi)),gr.normalize(),bc.crossVectors(hi,gr),l[0]=gr.x,l[4]=bc.x,l[8]=hi.x,l[1]=gr.y,l[5]=bc.y,l[9]=hi.y,l[2]=gr.z,l[6]=bc.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],v=r[8],g=r[12],m=r[1],p=r[5],_=r[9],M=r[13],x=r[2],b=r[6],y=r[10],E=r[14],U=r[3],N=r[7],w=r[11],F=r[15],O=l[0],P=l[4],k=l[8],R=l[12],C=l[1],z=l[5],$=l[9],it=l[13],ot=l[2],I=l[6],G=l[10],st=l[14],Y=l[3],vt=l[7],_t=l[11],Bt=l[15];return c[0]=d*O+h*C+v*ot+g*Y,c[4]=d*P+h*z+v*I+g*vt,c[8]=d*k+h*$+v*G+g*_t,c[12]=d*R+h*it+v*st+g*Bt,c[1]=m*O+p*C+_*ot+M*Y,c[5]=m*P+p*z+_*I+M*vt,c[9]=m*k+p*$+_*G+M*_t,c[13]=m*R+p*it+_*st+M*Bt,c[2]=x*O+b*C+y*ot+E*Y,c[6]=x*P+b*z+y*I+E*vt,c[10]=x*k+b*$+y*G+E*_t,c[14]=x*R+b*it+y*st+E*Bt,c[3]=U*O+N*C+w*ot+F*Y,c[7]=U*P+N*z+w*I+F*vt,c[11]=U*k+N*$+w*G+F*_t,c[15]=U*R+N*it+w*st+F*Bt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],v=e[9],g=e[13],m=e[2],p=e[6],_=e[10],M=e[14],x=e[3],b=e[7],y=e[11],E=e[15];return x*(+c*v*p-l*g*p-c*h*_+r*g*_+l*h*M-r*v*M)+b*(+i*v*M-i*g*_+c*d*_-l*d*M+l*g*m-c*v*m)+y*(+i*g*p-i*h*M-c*d*p+r*d*M+c*h*m-r*g*m)+E*(-l*h*m-i*v*p+i*h*_+l*d*p-r*d*_+r*v*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8],p=e[9],_=e[10],M=e[11],x=e[12],b=e[13],y=e[14],E=e[15],U=p*y*g-b*_*g+b*v*M-h*y*M-p*v*E+h*_*E,N=x*_*g-m*y*g-x*v*M+d*y*M+m*v*E-d*_*E,w=m*b*g-x*p*g+x*h*M-d*b*M-m*h*E+d*p*E,F=x*p*v-m*b*v-x*h*_+d*b*_+m*h*y-d*p*y,O=i*U+r*N+l*w+c*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return e[0]=U*P,e[1]=(b*_*c-p*y*c-b*l*M+r*y*M+p*l*E-r*_*E)*P,e[2]=(h*y*c-b*v*c+b*l*g-r*y*g-h*l*E+r*v*E)*P,e[3]=(p*v*c-h*_*c-p*l*g+r*_*g+h*l*M-r*v*M)*P,e[4]=N*P,e[5]=(m*y*c-x*_*c+x*l*M-i*y*M-m*l*E+i*_*E)*P,e[6]=(x*v*c-d*y*c-x*l*g+i*y*g+d*l*E-i*v*E)*P,e[7]=(d*_*c-m*v*c+m*l*g-i*_*g-d*l*M+i*v*M)*P,e[8]=w*P,e[9]=(x*p*c-m*b*c-x*r*M+i*b*M+m*r*E-i*p*E)*P,e[10]=(d*b*c-x*h*c+x*r*g-i*b*g-d*r*E+i*h*E)*P,e[11]=(m*h*c-d*p*c-m*r*g+i*p*g+d*r*M-i*h*M)*P,e[12]=F*P,e[13]=(m*b*l-x*p*l+x*r*_-i*b*_-m*r*y+i*p*y)*P,e[14]=(x*h*l-d*b*l-x*r*v+i*b*v+d*r*y-i*h*y)*P,e[15]=(d*p*l-m*h*l+m*r*v-i*p*v-d*r*_+i*h*_)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,v=e.z,g=c*d,m=c*h;return this.set(g*d+r,g*h-l*v,g*v+l*h,0,g*h+l*v,m*h+r,m*v-l*d,0,g*v-l*h,m*v+l*d,c*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,v=i._w,g=c+c,m=d+d,p=h+h,_=c*g,M=c*m,x=c*p,b=d*m,y=d*p,E=h*p,U=v*g,N=v*m,w=v*p,F=r.x,O=r.y,P=r.z;return l[0]=(1-(b+E))*F,l[1]=(M+w)*F,l[2]=(x-N)*F,l[3]=0,l[4]=(M-w)*O,l[5]=(1-(_+E))*O,l[6]=(y+U)*O,l[7]=0,l[8]=(x+N)*P,l[9]=(y-U)*P,l[10]=(1-(_+b))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=eo.set(l[0],l[1],l[2]).length();const d=eo.set(l[4],l[5],l[6]).length(),h=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Fi.copy(this);const g=1/c,m=1/d,p=1/h;return Fi.elements[0]*=g,Fi.elements[1]*=g,Fi.elements[2]*=g,Fi.elements[4]*=m,Fi.elements[5]*=m,Fi.elements[6]*=m,Fi.elements[8]*=p,Fi.elements[9]*=p,Fi.elements[10]*=p,i.setFromRotationMatrix(Fi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=oa,v=!1){const g=this.elements,m=2*c/(i-e),p=2*c/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let x,b;if(v)x=c/(d-c),b=d*c/(d-c);else if(h===oa)x=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(h===ef)x=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=m,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=x,g[14]=b,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=oa,v=!1){const g=this.elements,m=2/(i-e),p=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let x,b;if(v)x=1/(d-c),b=d/(d-c);else if(h===oa)x=-2/(d-c),b=-(d+c)/(d-c);else if(h===ef)x=-1/(d-c),b=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=m,g[4]=0,g[8]=0,g[12]=_,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=x,g[14]=b,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const eo=new ut,Fi=new dn,Nx=new ut(0,0,0),Lx=new ut(1,1,1),gr=new ut,bc=new ut,hi=new ut,MS=new dn,xS=new ql;class Ba{constructor(e=0,i=0,r=0,l=Ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],v=l[1],g=l[5],m=l[9],p=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(v,g)):(this._y=Math.atan2(-p,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(v,c));break;case"ZYX":this._y=Math.asin(-Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(v,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-m,g),this._y=Math.atan2(-p,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return MS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(MS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return xS.setFromEuler(this),this.setFromQuaternion(xS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ba.DEFAULT_ORDER="XYZ";class X2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ox=0;const TS=new ut,no=new ql,Ca=new dn,Ac=new ut,yl=new ut,Px=new ut,zx=new ql,bS=new ut(1,0,0),AS=new ut(0,1,0),RS=new ut(0,0,1),CS={type:"added"},Ix={type:"removed"},io={type:"childadded",child:null},ip={type:"childremoved",child:null};class ni extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new ut,i=new Ba,r=new ql,l=new ut(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new pe}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(bS,e)}rotateY(e){return this.rotateOnAxis(AS,e)}rotateZ(e){return this.rotateOnAxis(RS,e)}translateOnAxis(e,i){return TS.copy(e).applyQuaternion(this.quaternion),this.position.add(TS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(bS,e)}translateY(e){return this.translateOnAxis(AS,e)}translateZ(e){return this.translateOnAxis(RS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(yl,Ac,this.up):Ca.lookAt(Ac,yl,this.up),this.quaternion.setFromRotationMatrix(Ca),l&&(Ca.extractRotation(l.matrixWorld),no.setFromRotationMatrix(Ca),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(CS),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ix),ip.child=e,this.dispatchEvent(ip),ip.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(CS),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,Px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,v){return h[v.uuid]===void 0&&(h[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const v=h.shapes;if(Array.isArray(v))for(let g=0,m=v.length;g<m;g++){const p=v[g];c(e.shapes,p)}else c(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let v=0,g=this.material.length;v<g;v++)h.push(c(e.materials,this.material[v]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const v=this.animations[h];l.animations.push(c(e.animations,v))}}if(i){const h=d(e.geometries),v=d(e.materials),g=d(e.textures),m=d(e.images),p=d(e.shapes),_=d(e.skeletons),M=d(e.animations),x=d(e.nodes);h.length>0&&(r.geometries=h),v.length>0&&(r.materials=v),g.length>0&&(r.textures=g),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),x.length>0&&(r.nodes=x)}return r.object=l,r;function d(h){const v=[];for(const g in h){const m=h[g];delete m.metadata,v.push(m)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new ut(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new ut,wa=new ut,ap=new ut,Da=new ut,ao=new ut,ro=new ut,wS=new ut,rp=new ut,sp=new ut,op=new ut,lp=new fn,up=new fn,cp=new fn;class Gi{constructor(e=new ut,i=new ut,r=new ut){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Hi.subVectors(e,i),l.cross(Hi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Hi.subVectors(l,i),wa.subVectors(r,i),ap.subVectors(e,i);const d=Hi.dot(Hi),h=Hi.dot(wa),v=Hi.dot(ap),g=wa.dot(wa),m=wa.dot(ap),p=d*g-h*h;if(p===0)return c.set(0,0,0),null;const _=1/p,M=(g*v-h*m)*_,x=(d*m-h*v)*_;return c.set(1-M-x,x,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,i,r,l,c,d,h,v){return this.getBarycoord(e,i,r,l,Da)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(c,Da.x),v.addScaledVector(d,Da.y),v.addScaledVector(h,Da.z),v)}static getInterpolatedAttribute(e,i,r,l,c,d){return lp.setScalar(0),up.setScalar(0),cp.setScalar(0),lp.fromBufferAttribute(e,i),up.fromBufferAttribute(e,r),cp.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(lp,c.x),d.addScaledVector(up,c.y),d.addScaledVector(cp,c.z),d}static isFrontFacing(e,i,r,l){return Hi.subVectors(r,i),wa.subVectors(e,i),Hi.cross(wa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Hi.cross(wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;ao.subVectors(l,r),ro.subVectors(c,r),rp.subVectors(e,r);const v=ao.dot(rp),g=ro.dot(rp);if(v<=0&&g<=0)return i.copy(r);sp.subVectors(e,l);const m=ao.dot(sp),p=ro.dot(sp);if(m>=0&&p<=m)return i.copy(l);const _=v*p-m*g;if(_<=0&&v>=0&&m<=0)return d=v/(v-m),i.copy(r).addScaledVector(ao,d);op.subVectors(e,c);const M=ao.dot(op),x=ro.dot(op);if(x>=0&&M<=x)return i.copy(c);const b=M*g-v*x;if(b<=0&&g>=0&&x<=0)return h=g/(g-x),i.copy(r).addScaledVector(ro,h);const y=m*x-M*p;if(y<=0&&p-m>=0&&M-x>=0)return wS.subVectors(c,l),h=(p-m)/(p-m+(M-x)),i.copy(l).addScaledVector(wS,h);const E=1/(y+b+_);return d=b*E,h=_*E,i.copy(r).addScaledVector(ao,d).addScaledVector(ro,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function fp(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class He{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=km(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=fp(d,c,e+1/3),this.g=fp(d,c,e),this.b=fp(d,c,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=ti){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const r=q2[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ne.workingToColorSpace(Hn.copy(this),e),Math.round(Te(Hn.r*255,0,255))*65536+Math.round(Te(Hn.g*255,0,255))*256+Math.round(Te(Hn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,c=Hn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let v,g;const m=(h+d)/2;if(h===d)v=0,g=0;else{const p=d-h;switch(g=m<=.5?p/(d+h):p/(2-d-h),d){case r:v=(l-c)/p+(l<c?6:0);break;case l:v=(c-r)/p+2;break;case c:v=(r-l)/p+4;break}v/=6}return e.h=v,e.s=g,e.l=m,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ti){Ne.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+i,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(vr),e.getHSL(Rc);const r=Dl(vr.h,Rc.h,i),l=Dl(vr.s,Rc.s,i),c=Dl(vr.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new He;He.NAMES=q2;let Bx=0;class Wl extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=mo,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rp,this.blendDst=Cp,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rp&&(r.blendSrc=this.blendSrc),this.blendDst!==Cp&&(r.blendDst=this.blendDst),this.blendEquation!==ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pS&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const v=c[h];delete v.metadata,d.push(v)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Y2 extends Wl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ba,this.combine=D2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new ut,Cc=new ze;let Fx=0;class la{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=mS,this.updateRanges=[],this.gpuType=Pa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(e),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=fo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mS&&(e.usage=this.usage),e}}class W2 extends la{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Z2 extends la{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ui extends la{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Hx=0;const Ai=new dn,dp=new ni,so=new ut,pi=new Yl,Ml=new Yl,Rn=new ut;class ua extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G2(e)?Z2:W2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return dp.lookAt(e),dp.updateMatrix(),this.applyMatrix4(dp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ui(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pf);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ml.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(pi.min,Ml.min),pi.expandByPoint(Rn),Rn.addVectors(pi.max,Ml.max),pi.expandByPoint(Rn)):(pi.expandByPoint(Ml.min),pi.expandByPoint(Ml.max))}pi.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)Rn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],v=this.morphTargetsRelative;for(let g=0,m=h.count;g<m;g++)Rn.fromBufferAttribute(h,g),v&&(so.fromBufferAttribute(e,g),Rn.add(so)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],v=[];for(let k=0;k<r.count;k++)h[k]=new ut,v[k]=new ut;const g=new ut,m=new ut,p=new ut,_=new ze,M=new ze,x=new ze,b=new ut,y=new ut;function E(k,R,C){g.fromBufferAttribute(r,k),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,C),_.fromBufferAttribute(c,k),M.fromBufferAttribute(c,R),x.fromBufferAttribute(c,C),m.sub(g),p.sub(g),M.sub(_),x.sub(_);const z=1/(M.x*x.y-x.x*M.y);isFinite(z)&&(b.copy(m).multiplyScalar(x.y).addScaledVector(p,-M.y).multiplyScalar(z),y.copy(p).multiplyScalar(M.x).addScaledVector(m,-x.x).multiplyScalar(z),h[k].add(b),h[R].add(b),h[C].add(b),v[k].add(y),v[R].add(y),v[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let k=0,R=U.length;k<R;++k){const C=U[k],z=C.start,$=C.count;for(let it=z,ot=z+$;it<ot;it+=3)E(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const N=new ut,w=new ut,F=new ut,O=new ut;function P(k){F.fromBufferAttribute(l,k),O.copy(F);const R=h[k];N.copy(R),N.sub(F.multiplyScalar(F.dot(R))).normalize(),w.crossVectors(O,R);const z=w.dot(v[k])<0?-1:1;d.setXYZW(k,N.x,N.y,N.z,z)}for(let k=0,R=U.length;k<R;++k){const C=U[k],z=C.start,$=C.count;for(let it=z,ot=z+$;it<ot;it+=3)P(e.getX(it+0)),P(e.getX(it+1)),P(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new la(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new ut,c=new ut,d=new ut,h=new ut,v=new ut,g=new ut,m=new ut,p=new ut;if(e)for(let _=0,M=e.count;_<M;_+=3){const x=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),m.subVectors(d,c),p.subVectors(l,c),m.cross(p),h.fromBufferAttribute(r,x),v.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.add(m),v.add(m),g.add(m),r.setXYZ(x,h.x,h.y,h.z),r.setXYZ(b,v.x,v.y,v.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),m.subVectors(d,c),p.subVectors(l,c),m.cross(p),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,v){const g=h.array,m=h.itemSize,p=h.normalized,_=new g.constructor(v.length*m);let M=0,x=0;for(let b=0,y=v.length;b<y;b++){h.isInterleavedBufferAttribute?M=v[b]*h.data.stride+h.offset:M=v[b]*m;for(let E=0;E<m;E++)_[x++]=g[M++]}return new la(_,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ua,r=this.index.array,l=this.attributes;for(const h in l){const v=l[h],g=e(v,r);i.setAttribute(h,g)}const c=this.morphAttributes;for(const h in c){const v=[],g=c[h];for(let m=0,p=g.length;m<p;m++){const _=g[m],M=e(_,r);v.push(M)}i.morphAttributes[h]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,v=d.length;h<v;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const g in v)v[g]!==void 0&&(e[g]=v[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const g=r[v];e.data.attributes[v]=g.toJSON(e.data)}const l={};let c=!1;for(const v in this.morphAttributes){const g=this.morphAttributes[v],m=[];for(let p=0,_=g.length;p<_;p++){const M=g[p];m.push(M.toJSON(e.data))}m.length>0&&(l[v]=m,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const m=l[g];this.setAttribute(g,m.clone(i))}const c=e.morphAttributes;for(const g in c){const m=[],p=c[g];for(let _=0,M=p.length;_<M;_++)m.push(p[_].clone(i));this.morphAttributes[g]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,m=d.length;g<m;g++){const p=d[g];this.addGroup(p.start,p.count,p.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const DS=new dn,Kr=new k2,wc=new pf,US=new ut,Dc=new ut,Uc=new ut,Nc=new ut,hp=new ut,Lc=new ut,NS=new ut,Oc=new ut;class ki extends ni{constructor(e=new ua,i=new Y2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Lc.set(0,0,0);for(let v=0,g=c.length;v<g;v++){const m=h[v],p=c[v];m!==0&&(hp.fromBufferAttribute(p,e),d?Lc.addScaledVector(hp,m):Lc.addScaledVector(hp.sub(i),m))}i.add(Lc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(c),Kr.copy(e.ray).recast(e.near),!(wc.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(wc,US)===null||Kr.origin.distanceToSquared(US)>(e.far-e.near)**2))&&(DS.copy(c).invert(),Kr.copy(e.ray).applyMatrix4(DS),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Kr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,v=c.attributes.position,g=c.attributes.uv,m=c.attributes.uv1,p=c.attributes.normal,_=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let x=0,b=_.length;x<b;x++){const y=_[x],E=d[y.materialIndex],U=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let w=U,F=N;w<F;w+=3){const O=h.getX(w),P=h.getX(w+1),k=h.getX(w+2);l=Pc(this,E,e,r,g,m,p,O,P,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const x=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let y=x,E=b;y<E;y+=3){const U=h.getX(y),N=h.getX(y+1),w=h.getX(y+2);l=Pc(this,d,e,r,g,m,p,U,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let x=0,b=_.length;x<b;x++){const y=_[x],E=d[y.materialIndex],U=Math.max(y.start,M.start),N=Math.min(v.count,Math.min(y.start+y.count,M.start+M.count));for(let w=U,F=N;w<F;w+=3){const O=w,P=w+1,k=w+2;l=Pc(this,E,e,r,g,m,p,O,P,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const x=Math.max(0,M.start),b=Math.min(v.count,M.start+M.count);for(let y=x,E=b;y<E;y+=3){const U=y,N=y+1,w=y+2;l=Pc(this,d,e,r,g,m,p,U,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Gx(s,e,i,r,l,c,d,h){let v;if(e.side===ei?v=r.intersectTriangle(d,c,l,!0,h):v=r.intersectTriangle(l,c,d,e.side===xr,h),v===null)return null;Oc.copy(h),Oc.applyMatrix4(s.matrixWorld);const g=i.ray.origin.distanceTo(Oc);return g<i.near||g>i.far?null:{distance:g,point:Oc.clone(),object:s}}function Pc(s,e,i,r,l,c,d,h,v,g){s.getVertexPosition(h,Dc),s.getVertexPosition(v,Uc),s.getVertexPosition(g,Nc);const m=Gx(s,e,i,r,Dc,Uc,Nc,NS);if(m){const p=new ut;Gi.getBarycoord(NS,Dc,Uc,Nc,p),l&&(m.uv=Gi.getInterpolatedAttribute(l,h,v,g,p,new ze)),c&&(m.uv1=Gi.getInterpolatedAttribute(c,h,v,g,p,new ze)),d&&(m.normal=Gi.getInterpolatedAttribute(d,h,v,g,p,new ut),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:h,b:v,c:g,normal:new ut,materialIndex:0};Gi.getNormal(Dc,Uc,Nc,_.normal),m.face=_,m.barycoord=p}return m}class Zl extends ua{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const v=[],g=[],m=[],p=[];let _=0,M=0;x("z","y","x",-1,-1,r,i,e,d,c,0),x("z","y","x",1,-1,r,i,-e,d,c,1),x("x","z","y",1,1,e,r,i,l,d,2),x("x","z","y",1,-1,e,r,-i,l,d,3),x("x","y","z",1,-1,e,i,r,l,c,4),x("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(v),this.setAttribute("position",new Ui(g,3)),this.setAttribute("normal",new Ui(m,3)),this.setAttribute("uv",new Ui(p,2));function x(b,y,E,U,N,w,F,O,P,k,R){const C=w/P,z=F/k,$=w/2,it=F/2,ot=O/2,I=P+1,G=k+1;let st=0,Y=0;const vt=new ut;for(let _t=0;_t<G;_t++){const Bt=_t*z-it;for(let $t=0;$t<I;$t++){const ae=$t*C-$;vt[b]=ae*U,vt[y]=Bt*N,vt[E]=ot,g.push(vt.x,vt.y,vt.z),vt[b]=0,vt[y]=0,vt[E]=O>0?1:-1,m.push(vt.x,vt.y,vt.z),p.push($t/P),p.push(1-_t/k),st+=1}}for(let _t=0;_t<k;_t++)for(let Bt=0;Bt<P;Bt++){const $t=_+Bt+I*_t,ae=_+Bt+I*(_t+1),H=_+(Bt+1)+I*(_t+1),ct=_+(Bt+1)+I*_t;v.push($t,ae,ct),v.push(ae,H,ct),Y+=6}h.addGroup(M,Y,R),M+=Y,_+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Zn(s){const e={};for(let i=0;i<s.length;i++){const r=yo(s[i]);for(const l in r)e[l]=r[l]}return e}function Vx(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function j2(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const kx={clone:yo,merge:Zn};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Wl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class qm extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new ut,LS=new ze,OS=new ze;class Ri extends qm{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,i){return this.getViewBounds(e,LS,OS),i.subVectors(OS,LS)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(wl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,g=d.fullHeight;c+=d.offsetX*l/v,i-=d.offsetY*r/g,l*=d.width/v,r*=d.height/g}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const oo=-90,lo=1;class Yx extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(oo,lo,e,i);l.layers=this.layers,this.add(l);const c=new Ri(oo,lo,e,i);c.layers=this.layers,this.add(c);const d=new Ri(oo,lo,e,i);d.layers=this.layers,this.add(d);const h=new Ri(oo,lo,e,i);h.layers=this.layers,this.add(h);const v=new Ri(oo,lo,e,i);v.layers=this.layers,this.add(v);const g=new Ri(oo,lo,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,v]=i;for(const g of i)this.remove(g);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===ef)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,v,g,m]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,v),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,m),e.setRenderTarget(p,_,M),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class K2 extends Pn{constructor(e=[],i=_o,r,l,c,d,h,v,g,m){super(e,i,r,l,c,d,h,v,g,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wx extends os{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new K2(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Zl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:yr});c.uniforms.tEquirect.value=i;const d=new ki(l,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Vi),new Yx(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class zc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zx={type:"move"};class pp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,v=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const b of e.hand.values()){const y=i.getJointPose(b,r),E=this._getHandJoint(g,b);y!==null&&(E.matrix.fromArray(y.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=y.radius),E.visible=y!==null}const m=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],_=m.position.distanceTo(p.position),M=.02,x=.005;g.inputState.pinching&&_>M+x?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=M-x&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(v.matrix.fromArray(c.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,c.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(c.linearVelocity)):v.hasLinearVelocity=!1,c.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(c.angularVelocity)):v.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return h!==null&&(h.visible=l!==null),v!==null&&(v.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new zc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Q2 extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ba,this.environmentIntensity=1,this.environmentRotation=new Ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class jx extends Pn{constructor(e=null,i=1,r=1,l,c,d,h,v,g=mi,m=mi,p,_){super(null,d,h,v,g,m,l,c,p,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mp=new ut,Kx=new ut,Qx=new pe;class ts{constructor(e=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=mp.subVectors(r,i).cross(Kx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(mp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Qx.getNormalMatrix(e),l=this.coplanarPoint(mp).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new pf,Jx=new ze(.5,.5),Ic=new ut;class J2{constructor(e=new ts,i=new ts,r=new ts,l=new ts,c=new ts,d=new ts){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],M=c[7],x=c[8],b=c[9],y=c[10],E=c[11],U=c[12],N=c[13],w=c[14],F=c[15];if(l[0].setComponents(g-d,M-m,E-x,F-U).normalize(),l[1].setComponents(g+d,M+m,E+x,F+U).normalize(),l[2].setComponents(g+h,M+p,E+b,F+N).normalize(),l[3].setComponents(g-h,M-p,E-b,F-N).normalize(),r)l[4].setComponents(v,_,y,w).normalize(),l[5].setComponents(g-v,M-_,E-y,F-w).normalize();else if(l[4].setComponents(g-v,M-_,E-y,F-w).normalize(),i===oa)l[5].setComponents(g+v,M+_,E+y,F+w).normalize();else if(i===ef)l[5].setComponents(v,_,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const i=Jx.distanceTo(e.center);return Qr.radius=.7071067811865476+i,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $x extends Wl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const PS=new dn,hm=new k2,Bc=new pf,Fc=new ut;class tT extends ni{constructor(e=new ua,i=new $x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bc.copy(r.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;PS.copy(l).invert(),hm.copy(e.ray).applyMatrix4(PS);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),v=h*h,g=r.index,p=r.attributes.position;if(g!==null){const _=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let x=_,b=M;x<b;x++){const y=g.getX(x);Fc.fromBufferAttribute(p,y),zS(Fc,y,v,l,e,i,this)}}else{const _=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let x=_,b=M;x<b;x++)Fc.fromBufferAttribute(p,x),zS(Fc,x,v,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zS(s,e,i,r,l,c,d){const h=hm.distanceSqToPoint(s);if(h<i){const v=new ut;hm.closestPointToPoint(s,v),v.applyMatrix4(r);const g=l.ray.origin.distanceTo(v);if(g<l.near||g>l.far)return;c.push({distance:g,distanceToRay:Math.sqrt(h),point:v,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class eT extends Pn{constructor(e,i,r,l,c,d,h,v,g){super(e,i,r,l,c,d,h,v,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $2 extends Pn{constructor(e,i,r=ss,l,c,d,h=mi,v=mi,g,m=Pl,p=1){if(m!==Pl&&m!==zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:p};super(_,l,c,d,h,v,m,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tE extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jl extends ua{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),v=Math.floor(l),g=h+1,m=v+1,p=e/h,_=i/v,M=[],x=[],b=[],y=[];for(let E=0;E<m;E++){const U=E*_-d;for(let N=0;N<g;N++){const w=N*p-c;x.push(w,-U,0),b.push(0,0,1),y.push(N/h),y.push(1-E/v)}}for(let E=0;E<v;E++)for(let U=0;U<h;U++){const N=U+g*E,w=U+g*(E+1),F=U+1+g*(E+1),O=U+1+g*E;M.push(N,w,O),M.push(w,F,O)}this.setIndex(M),this.setAttribute("position",new Ui(x,3)),this.setAttribute("normal",new Ui(b,3)),this.setAttribute("uv",new Ui(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ym extends ua{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const v=Math.min(d+h,Math.PI);let g=0;const m=[],p=new ut,_=new ut,M=[],x=[],b=[],y=[];for(let E=0;E<=r;E++){const U=[],N=E/r;let w=0;E===0&&d===0?w=.5/i:E===r&&v===Math.PI&&(w=-.5/i);for(let F=0;F<=i;F++){const O=F/i;p.x=-e*Math.cos(l+O*c)*Math.sin(d+N*h),p.y=e*Math.cos(d+N*h),p.z=e*Math.sin(l+O*c)*Math.sin(d+N*h),x.push(p.x,p.y,p.z),_.copy(p).normalize(),b.push(_.x,_.y,_.z),y.push(O+w,1-N),U.push(g++)}m.push(U)}for(let E=0;E<r;E++)for(let U=0;U<i;U++){const N=m[E][U+1],w=m[E][U],F=m[E+1][U],O=m[E+1][U+1];(E!==0||d>0)&&M.push(N,w,O),(E!==r-1||v<Math.PI)&&M.push(w,F,O)}this.setIndex(M),this.setAttribute("position",new Ui(x,3)),this.setAttribute("normal",new Ui(b,3)),this.setAttribute("uv",new Ui(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ym(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nT extends Wl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iT extends Wl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gp={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class aT{constructor(e,i,r){const l=this;let c=!1,d=0,h=0,v;const g=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(m){h++,c===!1&&l.onStart!==void 0&&l.onStart(m,d,h),c=!0},this.itemEnd=function(m){d++,l.onProgress!==void 0&&l.onProgress(m,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(m){l.onError!==void 0&&l.onError(m)},this.resolveURL=function(m){return v?v(m):m},this.setURLModifier=function(m){return v=m,this},this.addHandler=function(m,p){return g.push(m,p),this},this.removeHandler=function(m){const p=g.indexOf(m);return p!==-1&&g.splice(p,2),this},this.getHandler=function(m){for(let p=0,_=g.length;p<_;p+=2){const M=g[p],x=g[p+1];if(M.global&&(M.lastIndex=0),M.test(m))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const rT=new aT;class Wm{constructor(e){this.manager=e!==void 0?e:rT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wm.DEFAULT_MATERIAL_NAME="__DEFAULT";const uo=new WeakMap;class sT extends Wm{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=gp.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(d),c.manager.itemEnd(e)},0);else{let p=uo.get(d);p===void 0&&(p=[],uo.set(d,p)),p.push({onLoad:i,onError:l})}return d}const h=Bl("img");function v(){m(),i&&i(this);const p=uo.get(this)||[];for(let _=0;_<p.length;_++){const M=p[_];M.onLoad&&M.onLoad(this)}uo.delete(this),c.manager.itemEnd(e)}function g(p){m(),l&&l(p),gp.remove(`image:${e}`);const _=uo.get(this)||[];for(let M=0;M<_.length;M++){const x=_[M];x.onError&&x.onError(p)}uo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function m(){h.removeEventListener("load",v,!1),h.removeEventListener("error",g,!1)}return h.addEventListener("load",v,!1),h.addEventListener("error",g,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),gp.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class oT extends Wm{constructor(e){super(e)}load(e,i,r,l){const c=new Pn,d=new sT(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class lT extends qm{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,h-=m*this.view.offsetY,v=h-m*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uT extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function IS(s,e,i,r){const l=cT(r);switch(i){case z2:return s*e;case B2:return s*e/l.components*l.byteLength;case Hm:return s*e/l.components*l.byteLength;case F2:return s*e*2/l.components*l.byteLength;case Gm:return s*e*2/l.components*l.byteLength;case I2:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case Vm:return s*e*4/l.components*l.byteLength;case Wc:case Zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hp:case Vp:return Math.max(s,16)*Math.max(e,8)/4;case Fp:case Gp:return Math.max(s,8)*Math.max(e,8)/2;case kp:case Xp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $p:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case tm:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case em:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case am:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rm:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sm:case om:case lm:return Math.ceil(s/4)*Math.ceil(e/4)*16;case um:case cm:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fm:case dm:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cT(s){switch(s){case Ia:case N2:return{byteLength:1,components:1};case Ll:case L2:case Xl:return{byteLength:2,components:1};case Bm:case Fm:return{byteLength:2,components:4};case ss:case Im:case Pa:return{byteLength:4,components:1};case O2:case P2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);function eE(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function fT(s){const e=new WeakMap;function i(h,v){const g=h.array,m=h.usage,p=g.byteLength,_=s.createBuffer();s.bindBuffer(v,_),s.bufferData(v,g,m),h.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=s.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:p}}function r(h,v,g){const m=v.array,p=v.updateRanges;if(s.bindBuffer(g,h),p.length===0)s.bufferSubData(g,0,m);else{p.sort((M,x)=>M.start-x.start);let _=0;for(let M=1;M<p.length;M++){const x=p[_],b=p[M];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++_,p[_]=b)}p.length=_+1;for(let M=0,x=p.length;M<x;M++){const b=p[M];s.bufferSubData(g,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=e.get(h);v&&(s.deleteBuffer(v.buffer),e.delete(h))}function d(h,v){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=e.get(h);if(g===void 0)e.set(h,i(h,v));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,h,v),g.version=h.version}}return{get:l,remove:c,update:d}}var dT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hT=`#ifdef USE_ALPHAHASH
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
#endif`,pT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_T=`#ifdef USE_AOMAP
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
#endif`,ST=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ET=`#ifdef USE_BATCHING
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
#endif`,yT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bT=`#ifdef USE_IRIDESCENCE
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
#endif`,AT=`#ifdef USE_BUMPMAP
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PT=`#define PI 3.141592653589793
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
} // validated`,zT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IT=`vec3 transformedNormal = objectNormal;
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
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VT="gl_FragColor = linearToOutputTexel( gl_FragColor );",kT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XT=`#ifdef USE_ENVMAP
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
#endif`,qT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$T=`#ifdef USE_GRADIENTMAP
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
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ib=`uniform bool receiveShadow;
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
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
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
#endif`,cb=`struct PhysicalMaterial {
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
}`,fb=`
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
#endif`,db=`#if defined( RE_IndirectDiffuse )
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yb=`#if defined( USE_POINTS_UV )
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
#endif`,Mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
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
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kb=`float getShadowMask() {
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
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tA=`#ifdef USE_SKINNING
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
#endif`,eA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rA=`#ifdef USE_TRANSMISSION
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
#endif`,sA=`#ifdef USE_TRANSMISSION
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
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dA=`uniform sampler2D t2D;
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`#include <common>
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
}`,_A=`#if DEPTH_PACKING == 3200
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
}`,SA=`#define DISTANCE
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
}`,EA=`#define DISTANCE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`uniform float scale;
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
}`,TA=`uniform vec3 diffuse;
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
}`,bA=`#include <common>
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
}`,AA=`uniform vec3 diffuse;
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
}`,RA=`#define LAMBERT
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
}`,CA=`#define LAMBERT
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
}`,wA=`#define MATCAP
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
}`,DA=`#define MATCAP
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
}`,UA=`#define NORMAL
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
}`,NA=`#define NORMAL
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
}`,LA=`#define PHONG
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
}`,OA=`#define PHONG
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
}`,PA=`#define STANDARD
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
}`,zA=`#define STANDARD
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
}`,IA=`#define TOON
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
}`,BA=`#define TOON
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
}`,FA=`uniform float size;
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
}`,HA=`uniform vec3 diffuse;
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
}`,GA=`#include <common>
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
}`,VA=`uniform vec3 color;
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
}`,kA=`uniform float rotation;
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
}`,XA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:dT,alphahash_pars_fragment:hT,alphamap_fragment:pT,alphamap_pars_fragment:mT,alphatest_fragment:gT,alphatest_pars_fragment:vT,aomap_fragment:_T,aomap_pars_fragment:ST,batching_pars_vertex:ET,batching_vertex:yT,begin_vertex:MT,beginnormal_vertex:xT,bsdfs:TT,iridescence_fragment:bT,bumpmap_pars_fragment:AT,clipping_planes_fragment:RT,clipping_planes_pars_fragment:CT,clipping_planes_pars_vertex:wT,clipping_planes_vertex:DT,color_fragment:UT,color_pars_fragment:NT,color_pars_vertex:LT,color_vertex:OT,common:PT,cube_uv_reflection_fragment:zT,defaultnormal_vertex:IT,displacementmap_pars_vertex:BT,displacementmap_vertex:FT,emissivemap_fragment:HT,emissivemap_pars_fragment:GT,colorspace_fragment:VT,colorspace_pars_fragment:kT,envmap_fragment:XT,envmap_common_pars_fragment:qT,envmap_pars_fragment:YT,envmap_pars_vertex:WT,envmap_physical_pars_fragment:ab,envmap_vertex:ZT,fog_vertex:jT,fog_pars_vertex:KT,fog_fragment:QT,fog_pars_fragment:JT,gradientmap_pars_fragment:$T,lightmap_pars_fragment:tb,lights_lambert_fragment:eb,lights_lambert_pars_fragment:nb,lights_pars_begin:ib,lights_toon_fragment:rb,lights_toon_pars_fragment:sb,lights_phong_fragment:ob,lights_phong_pars_fragment:lb,lights_physical_fragment:ub,lights_physical_pars_fragment:cb,lights_fragment_begin:fb,lights_fragment_maps:db,lights_fragment_end:hb,logdepthbuf_fragment:pb,logdepthbuf_pars_fragment:mb,logdepthbuf_pars_vertex:gb,logdepthbuf_vertex:vb,map_fragment:_b,map_pars_fragment:Sb,map_particle_fragment:Eb,map_particle_pars_fragment:yb,metalnessmap_fragment:Mb,metalnessmap_pars_fragment:xb,morphinstance_vertex:Tb,morphcolor_vertex:bb,morphnormal_vertex:Ab,morphtarget_pars_vertex:Rb,morphtarget_vertex:Cb,normal_fragment_begin:wb,normal_fragment_maps:Db,normal_pars_fragment:Ub,normal_pars_vertex:Nb,normal_vertex:Lb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Bb,opaque_fragment:Fb,packing:Hb,premultiplied_alpha_fragment:Gb,project_vertex:Vb,dithering_fragment:kb,dithering_pars_fragment:Xb,roughnessmap_fragment:qb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:Wb,shadowmap_pars_vertex:Zb,shadowmap_vertex:jb,shadowmask_pars_fragment:Kb,skinbase_vertex:Qb,skinning_pars_vertex:Jb,skinning_vertex:$b,skinnormal_vertex:tA,specularmap_fragment:eA,specularmap_pars_fragment:nA,tonemapping_fragment:iA,tonemapping_pars_fragment:aA,transmission_fragment:rA,transmission_pars_fragment:sA,uv_pars_fragment:oA,uv_pars_vertex:lA,uv_vertex:uA,worldpos_vertex:cA,background_vert:fA,background_frag:dA,backgroundCube_vert:hA,backgroundCube_frag:pA,cube_vert:mA,cube_frag:gA,depth_vert:vA,depth_frag:_A,distanceRGBA_vert:SA,distanceRGBA_frag:EA,equirect_vert:yA,equirect_frag:MA,linedashed_vert:xA,linedashed_frag:TA,meshbasic_vert:bA,meshbasic_frag:AA,meshlambert_vert:RA,meshlambert_frag:CA,meshmatcap_vert:wA,meshmatcap_frag:DA,meshnormal_vert:UA,meshnormal_frag:NA,meshphong_vert:LA,meshphong_frag:OA,meshphysical_vert:PA,meshphysical_frag:zA,meshtoon_vert:IA,meshtoon_frag:BA,points_vert:FA,points_frag:HA,shadow_vert:GA,shadow_frag:VA,sprite_vert:kA,sprite_frag:XA},Gt={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},aa={basic:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Zn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Zn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Zn([Gt.points,Gt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Zn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Zn([Gt.common,Gt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Zn([Gt.sprite,Gt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Zn([Gt.common,Gt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Zn([Gt.lights,Gt.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};aa.physical={uniforms:Zn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Hc={r:0,b:0,g:0},Jr=new Ba,qA=new dn;function YA(s,e,i,r,l,c,d){const h=new He(0);let v=c===!0?0:1,g,m,p=null,_=0,M=null;function x(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:e).get(w)),w}function b(N){let w=!1;const F=x(N);F===null?E(h,v):F&&F.isColor&&(E(F,1),w=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,w){const F=x(w);F&&(F.isCubeTexture||F.mapping===hf)?(m===void 0&&(m=new ki(new Zl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:yo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(m)),Jr.copy(w.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.material.uniforms.envMap.value=F,m.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qA.makeRotationFromEuler(Jr)),m.material.toneMapped=Ne.getTransfer(F.colorSpace)!==We,(p!==F||_!==F.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,p=F,_=F.version,M=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new ki(new jl(2,2),new Xi({name:"BackgroundMaterial",uniforms:yo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.toneMapped=Ne.getTransfer(F.colorSpace)!==We,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(p!==F||_!==F.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,p=F,_=F.version,M=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function E(N,w){N.getRGB(Hc,j2(s)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,w,d)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,w=1){h.set(N),v=w,E(h,v)},getClearAlpha:function(){return v},setClearAlpha:function(N){v=N,E(h,v)},render:b,addToRenderList:y,dispose:U}}function WA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function h(C,z,$,it,ot){let I=!1;const G=p(it,$,z);c!==G&&(c=G,g(c.object)),I=M(C,it,$,ot),I&&x(C,it,$,ot),ot!==null&&e.update(ot,s.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,w(C,z,$,it),ot!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ot).buffer))}function v(){return s.createVertexArray()}function g(C){return s.bindVertexArray(C)}function m(C){return s.deleteVertexArray(C)}function p(C,z,$){const it=$.wireframe===!0;let ot=r[C.id];ot===void 0&&(ot={},r[C.id]=ot);let I=ot[z.id];I===void 0&&(I={},ot[z.id]=I);let G=I[it];return G===void 0&&(G=_(v()),I[it]=G),G}function _(C){const z=[],$=[],it=[];for(let ot=0;ot<i;ot++)z[ot]=0,$[ot]=0,it[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:it,object:C,attributes:{},index:null}}function M(C,z,$,it){const ot=c.attributes,I=z.attributes;let G=0;const st=$.getAttributes();for(const Y in st)if(st[Y].location>=0){const _t=ot[Y];let Bt=I[Y];if(Bt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Bt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Bt=C.instanceColor)),_t===void 0||_t.attribute!==Bt||Bt&&_t.data!==Bt.data)return!0;G++}return c.attributesNum!==G||c.index!==it}function x(C,z,$,it){const ot={},I=z.attributes;let G=0;const st=$.getAttributes();for(const Y in st)if(st[Y].location>=0){let _t=I[Y];_t===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor));const Bt={};Bt.attribute=_t,_t&&_t.data&&(Bt.data=_t.data),ot[Y]=Bt,G++}c.attributes=ot,c.attributesNum=G,c.index=it}function b(){const C=c.newAttributes;for(let z=0,$=C.length;z<$;z++)C[z]=0}function y(C){E(C,0)}function E(C,z){const $=c.newAttributes,it=c.enabledAttributes,ot=c.attributeDivisors;$[C]=1,it[C]===0&&(s.enableVertexAttribArray(C),it[C]=1),ot[C]!==z&&(s.vertexAttribDivisor(C,z),ot[C]=z)}function U(){const C=c.newAttributes,z=c.enabledAttributes;for(let $=0,it=z.length;$<it;$++)z[$]!==C[$]&&(s.disableVertexAttribArray($),z[$]=0)}function N(C,z,$,it,ot,I,G){G===!0?s.vertexAttribIPointer(C,z,$,ot,I):s.vertexAttribPointer(C,z,$,it,ot,I)}function w(C,z,$,it){b();const ot=it.attributes,I=$.getAttributes(),G=z.defaultAttributeValues;for(const st in I){const Y=I[st];if(Y.location>=0){let vt=ot[st];if(vt===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const _t=vt.normalized,Bt=vt.itemSize,$t=e.get(vt);if($t===void 0)continue;const ae=$t.buffer,H=$t.type,ct=$t.bytesPerElement,tt=H===s.INT||H===s.UNSIGNED_INT||vt.gpuType===Im;if(vt.isInterleavedBufferAttribute){const nt=vt.data,bt=nt.stride,Mt=vt.offset;if(nt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<Y.locationSize;Rt++)E(Y.location+Rt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)y(Y.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Rt=0;Rt<Y.locationSize;Rt++)N(Y.location+Rt,Bt/Y.locationSize,H,_t,bt*ct,(Mt+Bt/Y.locationSize*Rt)*ct,tt)}else{if(vt.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)E(Y.location+nt,vt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let nt=0;nt<Y.locationSize;nt++)y(Y.location+nt);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let nt=0;nt<Y.locationSize;nt++)N(Y.location+nt,Bt/Y.locationSize,H,_t,Bt*ct,Bt/Y.locationSize*nt*ct,tt)}}else if(G!==void 0){const _t=G[st];if(_t!==void 0)switch(_t.length){case 2:s.vertexAttrib2fv(Y.location,_t);break;case 3:s.vertexAttrib3fv(Y.location,_t);break;case 4:s.vertexAttrib4fv(Y.location,_t);break;default:s.vertexAttrib1fv(Y.location,_t)}}}}U()}function F(){k();for(const C in r){const z=r[C];for(const $ in z){const it=z[$];for(const ot in it)m(it[ot].object),delete it[ot];delete z[$]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const $ in z){const it=z[$];for(const ot in it)m(it[ot].object),delete it[ot];delete z[$]}delete r[C.id]}function P(C){for(const z in r){const $=r[z];if($[C.id]===void 0)continue;const it=$[C.id];for(const ot in it)m(it[ot].object),delete it[ot];delete $[C.id]}}function k(){R(),d=!0,c!==l&&(c=l,g(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:y,disableUnusedAttributes:U}}function ZA(s,e,i){let r;function l(g){r=g}function c(g,m){s.drawArrays(r,g,m),i.update(m,r,1)}function d(g,m,p){p!==0&&(s.drawArraysInstanced(r,g,m,p),i.update(m,r,p))}function h(g,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,p);let M=0;for(let x=0;x<p;x++)M+=m[x];i.update(M,r,1)}function v(g,m,p,_){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<g.length;x++)d(g[x],m[x],_[x]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,m,0,_,0,p);let x=0;for(let b=0;b<p;b++)x+=m[b]*_[b];i.update(x,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=v}function jA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==wi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const k=P===Xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ia&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pa&&!k)}function v(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const m=v(g);m!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",m,"instead."),g=m);const p=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),E=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=x>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:F,maxSamples:O}}function KA(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new ts,h=new pe,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const M=p.length!==0||_||r!==0||l;return l=_,r=p.length,M},this.beginShadows=function(){c=!0,m(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(p,_){i=m(p,_,0)},this.setState=function(p,_,M){const x=p.clippingPlanes,b=p.clipIntersection,y=p.clipShadows,E=s.get(p);if(!l||x===null||x.length===0||c&&!y)c?m(null):g();else{const U=c?0:r,N=U*4;let w=E.clippingState||null;v.value=w,w=m(x,_,N,M);for(let F=0;F!==N;++F)w[F]=i[F];E.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function g(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,_,M,x){const b=p!==null?p.length:0;let y=null;if(b!==0){if(y=v.value,x!==!0||y===null){const E=M+b*4,U=_.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<E)&&(y=new Float32Array(E));for(let N=0,w=M;N!==b;++N,w+=4)d.copy(p[N]).applyMatrix4(U,h),d.normal.toArray(y,w),y[w+3]=d.constant}v.value=y,v.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function QA(s){let e=new WeakMap;function i(d,h){return h===zp?d.mapping=_o:h===Ip&&(d.mapping=So),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===zp||h===Ip)if(e.has(d)){const v=e.get(d).texture;return i(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const g=new Wx(v.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",l),i(g.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ho=4,BS=[.125,.215,.35,.446,.526,.582],is=20,vp=new lT,FS=new He;let _p=null,Sp=0,Ep=0,yp=!1;const es=(1+Math.sqrt(5))/2,co=1/es,HS=[new ut(-es,co,0),new ut(es,co,0),new ut(-co,0,es),new ut(co,0,es),new ut(0,es,-co),new ut(0,es,co),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],JA=new ut;class GS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=JA}=c;_p=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,l,v,h),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=XS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_p,Sp,Ep),this._renderer.xr.enabled=yp,e.scissorTest=!1,Gc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===_o||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_p=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:Xl,format:wi,colorSpace:Eo,depthBuffer:!1},l=VS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=VS(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$A(c)),this._blurMaterial=t3(c,e,i)}return l}_compileMaterial(e){const i=new ki(this._lodPlanes[0],e);this._renderer.compile(i,vp)}_sceneToCubeUV(e,i,r,l,c){const v=new Ri(90,1,i,r),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,M=p.toneMapping;p.getClearColor(FS),p.toneMapping=Mr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const b=new Y2({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),y=new ki(new Zl,b);let E=!1;const U=e.background;U?U.isColor&&(b.color.copy(U),e.background=null,E=!0):(b.color.copy(FS),E=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(v.up.set(0,g[N],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x+m[N],c.y,c.z)):w===1?(v.up.set(0,0,g[N]),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y+m[N],c.z)):(v.up.set(0,g[N],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y,c.z+m[N]));const F=this._cubeSize;Gc(l,w*F,N>2?F:0,F,F),p.setRenderTarget(l),E&&p.render(y,v),p.render(e,v)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=_,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===_o||e.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=XS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kS());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new ki(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const v=this._cubeSize;Gc(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(d,vp)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=HS[(l-c-1)%HS.length];this._blur(e,c-1,c,d,h)}i.autoClear=r}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const v=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new ki(this._lodPlanes[l],g),_=g.uniforms,M=this._sizeLods[r]-1,x=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*is-1),b=c/x,y=isFinite(c)?1+Math.floor(m*b):is;y>is&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${is}`);const E=[];let U=0;for(let P=0;P<is;++P){const k=P/b,R=Math.exp(-k*k/2);E.push(R),P===0?U+=R:P<y&&(U+=2*R)}for(let P=0;P<E.length;P++)E[P]=E[P]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=E,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:N}=this;_.dTheta.value=x,_.mipInt.value=N-r;const w=this._sizeLods[l],F=3*w*(l>N-ho?l-N+ho:0),O=4*(this._cubeSize-w);Gc(i,F,O,3*w,2*w),v.setRenderTarget(i),v.render(p,vp)}}function $A(s){const e=[],i=[],r=[];let l=s;const c=s-ho+1+BS.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let v=1/h;d>s-ho?v=BS[d-s+ho-1]:d===0&&(v=0),r.push(v);const g=1/(h-2),m=-g,p=1+g,_=[m,m,p,m,p,p,m,m,p,p,m,p],M=6,x=6,b=3,y=2,E=1,U=new Float32Array(b*x*M),N=new Float32Array(y*x*M),w=new Float32Array(E*x*M);for(let O=0;O<M;O++){const P=O%3*2/3-1,k=O>2?0:-1,R=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];U.set(R,b*x*O),N.set(_,y*x*O);const C=[O,O,O,O,O,O];w.set(C,E*x*O)}const F=new ua;F.setAttribute("position",new la(U,b)),F.setAttribute("uv",new la(N,y)),F.setAttribute("faceIndex",new la(w,E)),e.push(F),l>ho&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function VS(s,e,i){const r=new os(s,e,i);return r.texture.mapping=hf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function t3(s,e,i){const r=new Float32Array(is),l=new ut(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function kS(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function XS(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Zm(){return`

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
	`}function e3(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const v=h.mapping,g=v===zp||v===Ip,m=v===_o||v===So;if(g||m){let p=e.get(h);const _=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new GS(s)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return g&&M&&M.height>0||m&&M&&l(M)?(i===null&&(i=new GS(s)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",c),p.texture):null}}}return h}function l(h){let v=0;const g=6;for(let m=0;m<g;m++)h[m]!==void 0&&v++;return v===g}function c(h){const v=h.target;v.removeEventListener("dispose",c);const g=e.get(v);g!==void 0&&(e.delete(v),g.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function n3(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function i3(s,e,i,r){const l={},c=new WeakMap;function d(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const x in _.attributes)e.remove(_.attributes[x]);_.removeEventListener("dispose",d),delete l[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(p,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function v(p){const _=p.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER)}function g(p){const _=[],M=p.index,x=p.attributes.position;let b=0;if(M!==null){const U=M.array;b=M.version;for(let N=0,w=U.length;N<w;N+=3){const F=U[N+0],O=U[N+1],P=U[N+2];_.push(F,O,O,P,P,F)}}else if(x!==void 0){const U=x.array;b=x.version;for(let N=0,w=U.length/3-1;N<w;N+=3){const F=N+0,O=N+1,P=N+2;_.push(F,O,O,P,P,F)}}else return;const y=new(G2(_)?Z2:W2)(_,1);y.version=b;const E=c.get(p);E&&e.remove(E),c.set(p,y)}function m(p){const _=c.get(p);if(_){const M=p.index;M!==null&&_.version<M.version&&g(p)}else g(p);return c.get(p)}return{get:h,update:v,getWireframeAttribute:m}}function a3(s,e,i){let r;function l(_){r=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function v(_,M){s.drawElements(r,M,c,_*d),i.update(M,r,1)}function g(_,M,x){x!==0&&(s.drawElementsInstanced(r,M,c,_*d,x),i.update(M,r,x))}function m(_,M,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,x);let y=0;for(let E=0;E<x;E++)y+=M[E];i.update(y,r,1)}function p(_,M,x,b){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<_.length;E++)g(_[E]/d,M[E],b[E]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,b,0,x);let E=0;for(let U=0;U<x;U++)E+=M[U]*b[U];i.update(E,r,1)}}this.setMode=l,this.setIndex=h,this.render=v,this.renderInstances=g,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function r3(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function s3(s,e,i){const r=new WeakMap,l=new fn;function c(d,h,v){const g=d.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(h);if(_===void 0||_.count!==p){let R=function(){P.dispose(),r.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let N=0;M===!0&&(N=1),x===!0&&(N=2),b===!0&&(N=3);let w=h.attributes.position.count*N,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const O=new Float32Array(w*F*4*p),P=new V2(O,w,F,p);P.type=Pa,P.needsUpdate=!0;const k=N*4;for(let C=0;C<p;C++){const z=y[C],$=E[C],it=U[C],ot=w*F*4*C;for(let I=0;I<z.count;I++){const G=I*k;M===!0&&(l.fromBufferAttribute(z,I),O[ot+G+0]=l.x,O[ot+G+1]=l.y,O[ot+G+2]=l.z,O[ot+G+3]=0),x===!0&&(l.fromBufferAttribute($,I),O[ot+G+4]=l.x,O[ot+G+5]=l.y,O[ot+G+6]=l.z,O[ot+G+7]=0),b===!0&&(l.fromBufferAttribute(it,I),O[ot+G+8]=l.x,O[ot+G+9]=l.y,O[ot+G+10]=l.z,O[ot+G+11]=it.itemSize===4?l.w:1)}}_={count:p,texture:P,size:new ze(w,F)},r.set(h,_),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let M=0;for(let b=0;b<g.length;b++)M+=g[b];const x=h.morphTargetsRelative?1:1-M;v.getUniforms().setValue(s,"morphTargetBaseInfluence",x),v.getUniforms().setValue(s,"morphTargetInfluences",g)}v.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),v.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function o3(s,e,i,r){let l=new WeakMap;function c(v){const g=r.render.frame,m=v.geometry,p=e.get(v,m);if(l.get(p)!==g&&(e.update(p),l.set(p,g)),v.isInstancedMesh&&(v.hasEventListener("dispose",h)===!1&&v.addEventListener("dispose",h),l.get(v)!==g&&(i.update(v.instanceMatrix,s.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,s.ARRAY_BUFFER),l.set(v,g))),v.isSkinnedMesh){const _=v.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return p}function d(){l=new WeakMap}function h(v){const g=v.target;g.removeEventListener("dispose",h),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:d}}const nE=new Pn,qS=new $2(1,1),iE=new V2,aE=new Dx,rE=new K2,YS=[],WS=[],ZS=new Float32Array(16),jS=new Float32Array(9),KS=new Float32Array(4);function Ro(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=YS[l];if(c===void 0&&(c=new Float32Array(l),YS[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(c,h)}return c}function Mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function mf(s,e){let i=WS[e];i===void 0&&(i=new Int32Array(e),WS[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function l3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function u3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function c3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function f3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function d3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(Mn(i,r))return;KS.set(r),s.uniformMatrix2fv(this.addr,!1,KS),xn(i,r)}}function h3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(Mn(i,r))return;jS.set(r),s.uniformMatrix3fv(this.addr,!1,jS),xn(i,r)}}function p3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(Mn(i,r))return;ZS.set(r),s.uniformMatrix4fv(this.addr,!1,ZS),xn(i,r)}}function m3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function g3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function v3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function _3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function S3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function E3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function y3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function M3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function x3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(qS.compareFunction=H2,c=qS):c=nE,i.setTexture2D(e||c,l)}function T3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||aE,l)}function b3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||rE,l)}function A3(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||iE,l)}function R3(s){switch(s){case 5126:return l3;case 35664:return u3;case 35665:return c3;case 35666:return f3;case 35674:return d3;case 35675:return h3;case 35676:return p3;case 5124:case 35670:return m3;case 35667:case 35671:return g3;case 35668:case 35672:return v3;case 35669:case 35673:return _3;case 5125:return S3;case 36294:return E3;case 36295:return y3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return T3;case 35680:case 36300:case 36308:case 36293:return b3;case 36289:case 36303:case 36311:case 36292:return A3}}function C3(s,e){s.uniform1fv(this.addr,e)}function w3(s,e){const i=Ro(e,this.size,2);s.uniform2fv(this.addr,i)}function D3(s,e){const i=Ro(e,this.size,3);s.uniform3fv(this.addr,i)}function U3(s,e){const i=Ro(e,this.size,4);s.uniform4fv(this.addr,i)}function N3(s,e){const i=Ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function L3(s,e){const i=Ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function O3(s,e){const i=Ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function P3(s,e){s.uniform1iv(this.addr,e)}function z3(s,e){s.uniform2iv(this.addr,e)}function I3(s,e){s.uniform3iv(this.addr,e)}function B3(s,e){s.uniform4iv(this.addr,e)}function F3(s,e){s.uniform1uiv(this.addr,e)}function H3(s,e){s.uniform2uiv(this.addr,e)}function G3(s,e){s.uniform3uiv(this.addr,e)}function V3(s,e){s.uniform4uiv(this.addr,e)}function k3(s,e,i){const r=this.cache,l=e.length,c=mf(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||nE,c[d])}function X3(s,e,i){const r=this.cache,l=e.length,c=mf(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||aE,c[d])}function q3(s,e,i){const r=this.cache,l=e.length,c=mf(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||rE,c[d])}function Y3(s,e,i){const r=this.cache,l=e.length,c=mf(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||iE,c[d])}function W3(s){switch(s){case 5126:return C3;case 35664:return w3;case 35665:return D3;case 35666:return U3;case 35674:return N3;case 35675:return L3;case 35676:return O3;case 5124:case 35670:return P3;case 35667:case 35671:return z3;case 35668:case 35672:return I3;case 35669:case 35673:return B3;case 5125:return F3;case 36294:return H3;case 36295:return G3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return k3;case 35679:case 36299:case 36307:return X3;case 35680:case 36300:case 36308:case 36293:return q3;case 36289:case 36303:case 36311:case 36292:return Y3}}class Z3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=R3(i.type)}}class j3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=W3(i.type)}}class K3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Mp=/(\w+)(\])?(\[|\.)?/g;function QS(s,e){s.seq.push(e),s.map[e.id]=e}function Q3(s,e,i){const r=s.name,l=r.length;for(Mp.lastIndex=0;;){const c=Mp.exec(r),d=Mp.lastIndex;let h=c[1];const v=c[2]==="]",g=c[3];if(v&&(h=h|0),g===void 0||g==="["&&d+2===l){QS(i,g===void 0?new Z3(h,s,e):new j3(h,s,e));break}else{let p=i.map[h];p===void 0&&(p=new K3(h),QS(i,p)),i=p}}}class Qc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);Q3(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],v=r[h.id];v.needsUpdate!==!1&&h.setValue(e,v.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function JS(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const J3=37297;let $3=0;function tR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const $S=new pe;function eR(s){Ne._getMatrix($S,Ne.workingColorSpace,s);const e=`mat3( ${$S.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(s)){case tf:return[e,"LinearTransferOETF"];case We:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function t2(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+tR(s.getShaderSource(e),h)}else return c}function nR(s,e){const i=eR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function iR(s,e){let i;switch(e){case GM:i="Linear";break;case VM:i="Reinhard";break;case kM:i="Cineon";break;case XM:i="ACESFilmic";break;case YM:i="AgX";break;case WM:i="Neutral";break;case qM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new ut;function aR(){Ne.getLuminanceCoefficients(Vc);const s=Vc.x.toFixed(4),e=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function sR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function oR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function xl(s){return s!==""}function e2(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n2(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(s){return s.replace(lR,cR)}const uR=new Map;function cR(s,e){let i=me[e];if(i===void 0){const r=uR.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return pm(i)}const fR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i2(s){return s.replace(fR,dR)}function dR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function a2(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===w2?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===EM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Na&&(e="SHADOWMAP_TYPE_VSM"),e}function pR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _o:case So:e="ENVMAP_TYPE_CUBE";break;case hf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mR(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===So&&(e="ENVMAP_MODE_REFRACTION"),e}function gR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case D2:e="ENVMAP_BLENDING_MULTIPLY";break;case FM:e="ENVMAP_BLENDING_MIX";break;case HM:e="ENVMAP_BLENDING_ADD";break}return e}function vR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function _R(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const v=hR(i),g=pR(i),m=mR(i),p=gR(i),_=vR(i),M=rR(i),x=sR(c),b=l.createProgram();let y,E,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(xl).join(`
`),y.length>0&&(y+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(xl).join(`
`),E.length>0&&(E+=`
`)):(y=[a2(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),E=[a2(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+m:"",i.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Mr?"#define TONE_MAPPING":"",i.toneMapping!==Mr?me.tonemapping_pars_fragment:"",i.toneMapping!==Mr?iR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,nR("linearToOutputTexel",i.outputColorSpace),aR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xl).join(`
`)),d=pm(d),d=e2(d,i),d=n2(d,i),h=pm(h),h=e2(h,i),h=n2(h,i),d=i2(d),h=i2(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,E=["#define varying in",i.glslVersion===gS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===gS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const N=U+y+d,w=U+E+h,F=JS(l,l.VERTEX_SHADER,N),O=JS(l,l.FRAGMENT_SHADER,w);l.attachShader(b,F),l.attachShader(b,O),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(z){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(b)||"",it=l.getShaderInfoLog(F)||"",ot=l.getShaderInfoLog(O)||"",I=$.trim(),G=it.trim(),st=ot.trim();let Y=!0,vt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,F,O);else{const _t=t2(l,F,"vertex"),Bt=t2(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+I+`
`+_t+`
`+Bt)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(G===""||st==="")&&(vt=!1);vt&&(z.diagnostics={runnable:Y,programLog:I,vertexShader:{log:G,prefix:y},fragmentShader:{log:st,prefix:E}})}l.deleteShader(F),l.deleteShader(O),k=new Qc(l,b),R=oR(l,b)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,J3)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$3++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=O,this}let SR=0;class ER{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new yR(e),i.set(e,r)),r}}class yR{constructor(e){this.id=SR++,this.code=e,this.usedTimes=0}}function MR(s,e,i,r,l,c,d){const h=new X2,v=new ER,g=new Set,m=[],p=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return g.add(R),R===0?"uv":`uv${R}`}function y(R,C,z,$,it){const ot=$.fog,I=it.geometry,G=R.isMeshStandardMaterial?$.environment:null,st=(R.isMeshStandardMaterial?i:e).get(R.envMap||G),Y=st&&st.mapping===hf?st.image.height:null,vt=x[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const _t=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Bt=_t!==void 0?_t.length:0;let $t=0;I.morphAttributes.position!==void 0&&($t=1),I.morphAttributes.normal!==void 0&&($t=2),I.morphAttributes.color!==void 0&&($t=3);let ae,H,ct,tt;if(vt){const ye=aa[vt];ae=ye.vertexShader,H=ye.fragmentShader}else ae=R.vertexShader,H=R.fragmentShader,v.update(R),ct=v.getVertexShaderID(R),tt=v.getFragmentShaderID(R);const nt=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Mt=it.isInstancedMesh===!0,Rt=it.isBatchedMesh===!0,xt=!!R.map,Xt=!!R.matcap,V=!!st,Re=!!R.aoMap,Qt=!!R.lightMap,Jt=!!R.bumpMap,Ut=!!R.normalMap,se=!!R.displacementMap,Ft=!!R.emissiveMap,oe=!!R.metalnessMap,be=!!R.roughnessMap,Ge=R.anisotropy>0,L=R.clearcoat>0,A=R.dispersion>0,at=R.iridescence>0,pt=R.sheen>0,Et=R.transmission>0,ht=Ge&&!!R.anisotropyMap,Tt=L&&!!R.clearcoatMap,yt=L&&!!R.clearcoatNormalMap,Vt=L&&!!R.clearcoatRoughnessMap,Wt=at&&!!R.iridescenceMap,At=at&&!!R.iridescenceThicknessMap,zt=pt&&!!R.sheenColorMap,ie=pt&&!!R.sheenRoughnessMap,Lt=!!R.specularMap,It=!!R.specularColorMap,fe=!!R.specularIntensityMap,q=Et&&!!R.transmissionMap,Dt=Et&&!!R.thicknessMap,Ot=!!R.gradientMap,Yt=!!R.alphaMap,Ct=R.alphaTest>0,St=!!R.alphaHash,Kt=!!R.extensions;let ce=Mr;R.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=s.toneMapping);const qe={shaderID:vt,shaderType:R.type,shaderName:R.name,vertexShader:ae,fragmentShader:H,defines:R.defines,customVertexShaderID:ct,customFragmentShaderID:tt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&it._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&it.instanceColor!==null,instancingMorph:Mt&&it.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Eo,alphaToCoverage:!!R.alphaToCoverage,map:xt,matcap:Xt,envMap:V,envMapMode:V&&st.mapping,envMapCubeUVHeight:Y,aoMap:Re,lightMap:Qt,bumpMap:Jt,normalMap:Ut,displacementMap:_&&se,emissiveMap:Ft,normalMapObjectSpace:Ut&&R.normalMapType===JM,normalMapTangentSpace:Ut&&R.normalMapType===QM,metalnessMap:oe,roughnessMap:be,anisotropy:Ge,anisotropyMap:ht,clearcoat:L,clearcoatMap:Tt,clearcoatNormalMap:yt,clearcoatRoughnessMap:Vt,dispersion:A,iridescence:at,iridescenceMap:Wt,iridescenceThicknessMap:At,sheen:pt,sheenColorMap:zt,sheenRoughnessMap:ie,specularMap:Lt,specularColorMap:It,specularIntensityMap:fe,transmission:Et,transmissionMap:q,thicknessMap:Dt,gradientMap:Ot,opaque:R.transparent===!1&&R.blending===mo&&R.alphaToCoverage===!1,alphaMap:Yt,alphaTest:Ct,alphaHash:St,combine:R.combine,mapUv:xt&&b(R.map.channel),aoMapUv:Re&&b(R.aoMap.channel),lightMapUv:Qt&&b(R.lightMap.channel),bumpMapUv:Jt&&b(R.bumpMap.channel),normalMapUv:Ut&&b(R.normalMap.channel),displacementMapUv:se&&b(R.displacementMap.channel),emissiveMapUv:Ft&&b(R.emissiveMap.channel),metalnessMapUv:oe&&b(R.metalnessMap.channel),roughnessMapUv:be&&b(R.roughnessMap.channel),anisotropyMapUv:ht&&b(R.anisotropyMap.channel),clearcoatMapUv:Tt&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:yt&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:ie&&b(R.sheenRoughnessMap.channel),specularMapUv:Lt&&b(R.specularMap.channel),specularColorMapUv:It&&b(R.specularColorMap.channel),specularIntensityMapUv:fe&&b(R.specularIntensityMap.channel),transmissionMapUv:q&&b(R.transmissionMap.channel),thicknessMapUv:Dt&&b(R.thicknessMap.channel),alphaMapUv:Yt&&b(R.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ut||Ge),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!I.attributes.uv&&(xt||Yt),fog:!!ot,useFog:R.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:bt,skinning:it.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:$t,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&R.map.isVideoTexture===!0&&Ne.getTransfer(R.map.colorSpace)===We,decodeVideoTextureEmissive:Ft&&R.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(R.emissiveMap.colorSpace)===We,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===La,flipSided:R.side===ei,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Kt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&R.extensions.multiDraw===!0||Rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return qe.vertexUv1s=g.has(1),qe.vertexUv2s=g.has(2),qe.vertexUv3s=g.has(3),g.clear(),qe}function E(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)C.push(z),C.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(U(C,R),N(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function U(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function N(R,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),R.push(h.mask)}function w(R){const C=x[R.type];let z;if(C){const $=aa[C];z=kx.clone($.uniforms)}else z=R.uniforms;return z}function F(R,C){let z;for(let $=0,it=m.length;$<it;$++){const ot=m[$];if(ot.cacheKey===C){z=ot,++z.usedTimes;break}}return z===void 0&&(z=new _R(s,C,R,c),m.push(z)),z}function O(R){if(--R.usedTimes===0){const C=m.indexOf(R);m[C]=m[m.length-1],m.pop(),R.destroy()}}function P(R){v.remove(R)}function k(){v.dispose()}return{getParameters:y,getProgramCacheKey:E,getUniforms:w,acquireProgram:F,releaseProgram:O,releaseShaderCache:P,programs:m,dispose:k}}function xR(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,v){s.get(d)[h]=v}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function TR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function r2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function s2(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(p,_,M,x,b,y){let E=s[e];return E===void 0?(E={id:p.id,object:p,geometry:_,material:M,groupOrder:x,renderOrder:p.renderOrder,z:b,group:y},s[e]=E):(E.id=p.id,E.object=p,E.geometry=_,E.material=M,E.groupOrder=x,E.renderOrder=p.renderOrder,E.z=b,E.group=y),e++,E}function h(p,_,M,x,b,y){const E=d(p,_,M,x,b,y);M.transmission>0?r.push(E):M.transparent===!0?l.push(E):i.push(E)}function v(p,_,M,x,b,y){const E=d(p,_,M,x,b,y);M.transmission>0?r.unshift(E):M.transparent===!0?l.unshift(E):i.unshift(E)}function g(p,_){i.length>1&&i.sort(p||TR),r.length>1&&r.sort(_||r2),l.length>1&&l.sort(_||r2)}function m(){for(let p=e,_=s.length;p<_;p++){const M=s[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:v,finish:m,sort:g}}function bR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new s2,s.set(r,[d])):l>=c.length?(d=new s2,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function AR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ut,color:new He};break;case"SpotLight":i={position:new ut,direction:new ut,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return s[e.id]=i,i}}}function RR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let CR=0;function wR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function DR(s){const e=new AR,i=RR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new ut);const l=new ut,c=new dn,d=new dn;function h(g){let m=0,p=0,_=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,x=0,b=0,y=0,E=0,U=0,N=0,w=0,F=0,O=0,P=0;g.sort(wR);for(let R=0,C=g.length;R<C;R++){const z=g[R],$=z.color,it=z.intensity,ot=z.distance,I=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=$.r*it,p+=$.g*it,_+=$.b*it;else if(z.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(z.sh.coefficients[G],it);P++}else if(z.isDirectionalLight){const G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const st=z.shadow,Y=i.get(z);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=I,r.directionalShadowMatrix[M]=z.shadow.matrix,U++}r.directional[M]=G,M++}else if(z.isSpotLight){const G=e.get(z);G.position.setFromMatrixPosition(z.matrixWorld),G.color.copy($).multiplyScalar(it),G.distance=ot,G.coneCos=Math.cos(z.angle),G.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),G.decay=z.decay,r.spot[b]=G;const st=z.shadow;if(z.map&&(r.spotLightMap[F]=z.map,F++,st.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[b]=st.matrix,z.castShadow){const Y=i.get(z);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=I,w++}b++}else if(z.isRectAreaLight){const G=e.get(z);G.color.copy($).multiplyScalar(it),G.halfWidth.set(z.width*.5,0,0),G.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=G,y++}else if(z.isPointLight){const G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity),G.distance=z.distance,G.decay=z.decay,z.castShadow){const st=z.shadow,Y=i.get(z);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,Y.shadowCameraNear=st.camera.near,Y.shadowCameraFar=st.camera.far,r.pointShadow[x]=Y,r.pointShadowMap[x]=I,r.pointShadowMatrix[x]=z.shadow.matrix,N++}r.point[x]=G,x++}else if(z.isHemisphereLight){const G=e.get(z);G.skyColor.copy(z.color).multiplyScalar(it),G.groundColor.copy(z.groundColor).multiplyScalar(it),r.hemi[E]=G,E++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Gt.LTC_FLOAT_1,r.rectAreaLTC2=Gt.LTC_FLOAT_2):(r.rectAreaLTC1=Gt.LTC_HALF_1,r.rectAreaLTC2=Gt.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==M||k.pointLength!==x||k.spotLength!==b||k.rectAreaLength!==y||k.hemiLength!==E||k.numDirectionalShadows!==U||k.numPointShadows!==N||k.numSpotShadows!==w||k.numSpotMaps!==F||k.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=y,r.point.length=x,r.hemi.length=E,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+F-O,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=P,k.directionalLength=M,k.pointLength=x,k.spotLength=b,k.rectAreaLength=y,k.hemiLength=E,k.numDirectionalShadows=U,k.numPointShadows=N,k.numSpotShadows=w,k.numSpotMaps=F,k.numLightProbes=P,r.version=CR++)}function v(g,m){let p=0,_=0,M=0,x=0,b=0;const y=m.matrixWorldInverse;for(let E=0,U=g.length;E<U;E++){const N=g[E];if(N.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),p++}else if(N.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),d.identity(),c.copy(N.matrixWorld),c.premultiply(y),d.extractRotation(c),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),x++}else if(N.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),_++}else if(N.isHemisphereLight){const w=r.hemi[b];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(y),b++}}}return{setup:h,setupView:v,state:r}}function o2(s){const e=new DR(s),i=[],r=[];function l(m){g.camera=m,i.length=0,r.length=0}function c(m){i.push(m)}function d(m){r.push(m)}function h(){e.setup(i)}function v(m){e.setupView(i,m)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:h,setupLightsView:v,pushLight:c,pushShadow:d}}function UR(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new o2(s),e.set(l,[h])):c>=d.length?(h=new o2(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LR=`uniform sampler2D shadow_pass;
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
}`;function OR(s,e,i){let r=new J2;const l=new ze,c=new ze,d=new fn,h=new nT({depthPacking:KM}),v=new iT,g={},m=i.maxTextureSize,p={[xr]:ei,[ei]:xr,[La]:La},_=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:NR,fragmentShader:LR}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const x=new ua;x.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ki(x,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w2;let E=this.type;this.render=function(O,P,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(yr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const it=E!==Na&&this.type===Na,ot=E===Na&&this.type!==Na;for(let I=0,G=O.length;I<G;I++){const st=O[I],Y=st.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const vt=Y.getFrameExtents();if(l.multiply(vt),c.copy(Y.mapSize),(l.x>m||l.y>m)&&(l.x>m&&(c.x=Math.floor(m/vt.x),l.x=c.x*vt.x,Y.mapSize.x=c.x),l.y>m&&(c.y=Math.floor(m/vt.y),l.y=c.y*vt.y,Y.mapSize.y=c.y)),Y.map===null||it===!0||ot===!0){const Bt=this.type!==Na?{minFilter:mi,magFilter:mi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new os(l.x,l.y,Bt),Y.map.texture.name=st.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const _t=Y.getViewportCount();for(let Bt=0;Bt<_t;Bt++){const $t=Y.getViewport(Bt);d.set(c.x*$t.x,c.y*$t.y,c.x*$t.z,c.y*$t.w),$.viewport(d),Y.updateMatrices(st,Bt),r=Y.getFrustum(),w(P,k,Y.camera,st,this.type)}Y.isPointLightShadow!==!0&&this.type===Na&&U(Y,k),Y.needsUpdate=!1}E=this.type,y.needsUpdate=!1,s.setRenderTarget(R,C,z)};function U(O,P){const k=e.update(b);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new os(l.x,l.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(P,null,k,_,b,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(P,null,k,M,b,null)}function N(O,P,k,R){let C=null;const z=k.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)C=z;else if(C=k.isPointLight===!0?v:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=C.uuid,it=P.uuid;let ot=g[$];ot===void 0&&(ot={},g[$]=ot);let I=ot[it];I===void 0&&(I=C.clone(),ot[it]=I,P.addEventListener("dispose",F)),C=I}if(C.visible=P.visible,C.wireframe=P.wireframe,R===Na?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:p[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=s.properties.get(C);$.light=k}return C}function w(O,P,k,R,C){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Na)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,O.matrixWorld);const it=e.update(O),ot=O.material;if(Array.isArray(ot)){const I=it.groups;for(let G=0,st=I.length;G<st;G++){const Y=I[G],vt=ot[Y.materialIndex];if(vt&&vt.visible){const _t=N(O,vt,R,C);O.onBeforeShadow(s,O,P,k,it,_t,Y),s.renderBufferDirect(k,null,it,_t,O,Y),O.onAfterShadow(s,O,P,k,it,_t,Y)}}}else if(ot.visible){const I=N(O,ot,R,C);O.onBeforeShadow(s,O,P,k,it,I,null),s.renderBufferDirect(k,null,it,I,O,null),O.onAfterShadow(s,O,P,k,it,I,null)}}const $=O.children;for(let it=0,ot=$.length;it<ot;it++)w($[it],P,k,R,C)}function F(O){O.target.removeEventListener("dispose",F);for(const k in g){const R=g[k],C=O.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const PR={[wp]:Dp,[Up]:Op,[Np]:Pp,[vo]:Lp,[Dp]:wp,[Op]:Up,[Pp]:Np,[Lp]:vo};function zR(s,e){function i(){let q=!1;const Dt=new fn;let Ot=null;const Yt=new fn(0,0,0,0);return{setMask:function(Ct){Ot!==Ct&&!q&&(s.colorMask(Ct,Ct,Ct,Ct),Ot=Ct)},setLocked:function(Ct){q=Ct},setClear:function(Ct,St,Kt,ce,qe){qe===!0&&(Ct*=ce,St*=ce,Kt*=ce),Dt.set(Ct,St,Kt,ce),Yt.equals(Dt)===!1&&(s.clearColor(Ct,St,Kt,ce),Yt.copy(Dt))},reset:function(){q=!1,Ot=null,Yt.set(-1,0,0,0)}}}function r(){let q=!1,Dt=!1,Ot=null,Yt=null,Ct=null;return{setReversed:function(St){if(Dt!==St){const Kt=e.get("EXT_clip_control");St?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Dt=St;const ce=Ct;Ct=null,this.setClear(ce)}},getReversed:function(){return Dt},setTest:function(St){St?nt(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(St){Ot!==St&&!q&&(s.depthMask(St),Ot=St)},setFunc:function(St){if(Dt&&(St=PR[St]),Yt!==St){switch(St){case wp:s.depthFunc(s.NEVER);break;case Dp:s.depthFunc(s.ALWAYS);break;case Up:s.depthFunc(s.LESS);break;case vo:s.depthFunc(s.LEQUAL);break;case Np:s.depthFunc(s.EQUAL);break;case Lp:s.depthFunc(s.GEQUAL);break;case Op:s.depthFunc(s.GREATER);break;case Pp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Yt=St}},setLocked:function(St){q=St},setClear:function(St){Ct!==St&&(Dt&&(St=1-St),s.clearDepth(St),Ct=St)},reset:function(){q=!1,Ot=null,Yt=null,Ct=null,Dt=!1}}}function l(){let q=!1,Dt=null,Ot=null,Yt=null,Ct=null,St=null,Kt=null,ce=null,qe=null;return{setTest:function(ye){q||(ye?nt(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(ye){Dt!==ye&&!q&&(s.stencilMask(ye),Dt=ye)},setFunc:function(ye,an,Sn){(Ot!==ye||Yt!==an||Ct!==Sn)&&(s.stencilFunc(ye,an,Sn),Ot=ye,Yt=an,Ct=Sn)},setOp:function(ye,an,Sn){(St!==ye||Kt!==an||ce!==Sn)&&(s.stencilOp(ye,an,Sn),St=ye,Kt=an,ce=Sn)},setLocked:function(ye){q=ye},setClear:function(ye){qe!==ye&&(s.clearStencil(ye),qe=ye)},reset:function(){q=!1,Dt=null,Ot=null,Yt=null,Ct=null,St=null,Kt=null,ce=null,qe=null}}}const c=new i,d=new r,h=new l,v=new WeakMap,g=new WeakMap;let m={},p={},_=new WeakMap,M=[],x=null,b=!1,y=null,E=null,U=null,N=null,w=null,F=null,O=null,P=new He(0,0,0),k=0,R=!1,C=null,z=null,$=null,it=null,ot=null;const I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,st=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=st>=2);let vt=null,_t={};const Bt=s.getParameter(s.SCISSOR_BOX),$t=s.getParameter(s.VIEWPORT),ae=new fn().fromArray(Bt),H=new fn().fromArray($t);function ct(q,Dt,Ot,Yt){const Ct=new Uint8Array(4),St=s.createTexture();s.bindTexture(q,St),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<Ot;Kt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Dt,0,s.RGBA,1,1,Yt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(Dt+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return St}const tt={};tt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),nt(s.DEPTH_TEST),d.setFunc(vo),Jt(!1),Ut(cS),nt(s.CULL_FACE),Re(yr);function nt(q){m[q]!==!0&&(s.enable(q),m[q]=!0)}function bt(q){m[q]!==!1&&(s.disable(q),m[q]=!1)}function Mt(q,Dt){return p[q]!==Dt?(s.bindFramebuffer(q,Dt),p[q]=Dt,q===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Dt),q===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Rt(q,Dt){let Ot=M,Yt=!1;if(q){Ot=_.get(Dt),Ot===void 0&&(Ot=[],_.set(Dt,Ot));const Ct=q.textures;if(Ot.length!==Ct.length||Ot[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Kt=Ct.length;St<Kt;St++)Ot[St]=s.COLOR_ATTACHMENT0+St;Ot.length=Ct.length,Yt=!0}}else Ot[0]!==s.BACK&&(Ot[0]=s.BACK,Yt=!0);Yt&&s.drawBuffers(Ot)}function xt(q){return x!==q?(s.useProgram(q),x=q,!0):!1}const Xt={[ns]:s.FUNC_ADD,[MM]:s.FUNC_SUBTRACT,[xM]:s.FUNC_REVERSE_SUBTRACT};Xt[TM]=s.MIN,Xt[bM]=s.MAX;const V={[AM]:s.ZERO,[RM]:s.ONE,[CM]:s.SRC_COLOR,[Rp]:s.SRC_ALPHA,[OM]:s.SRC_ALPHA_SATURATE,[NM]:s.DST_COLOR,[DM]:s.DST_ALPHA,[wM]:s.ONE_MINUS_SRC_COLOR,[Cp]:s.ONE_MINUS_SRC_ALPHA,[LM]:s.ONE_MINUS_DST_COLOR,[UM]:s.ONE_MINUS_DST_ALPHA,[PM]:s.CONSTANT_COLOR,[zM]:s.ONE_MINUS_CONSTANT_COLOR,[IM]:s.CONSTANT_ALPHA,[BM]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(q,Dt,Ot,Yt,Ct,St,Kt,ce,qe,ye){if(q===yr){b===!0&&(bt(s.BLEND),b=!1);return}if(b===!1&&(nt(s.BLEND),b=!0),q!==yM){if(q!==y||ye!==R){if((E!==ns||w!==ns)&&(s.blendEquation(s.FUNC_ADD),E=ns,w=ns),ye)switch(q){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fS:s.blendFunc(s.ONE,s.ONE);break;case dS:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hS:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fS:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dS:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hS:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,N=null,F=null,O=null,P.set(0,0,0),k=0,y=q,R=ye}return}Ct=Ct||Dt,St=St||Ot,Kt=Kt||Yt,(Dt!==E||Ct!==w)&&(s.blendEquationSeparate(Xt[Dt],Xt[Ct]),E=Dt,w=Ct),(Ot!==U||Yt!==N||St!==F||Kt!==O)&&(s.blendFuncSeparate(V[Ot],V[Yt],V[St],V[Kt]),U=Ot,N=Yt,F=St,O=Kt),(ce.equals(P)===!1||qe!==k)&&(s.blendColor(ce.r,ce.g,ce.b,qe),P.copy(ce),k=qe),y=q,R=!1}function Qt(q,Dt){q.side===La?bt(s.CULL_FACE):nt(s.CULL_FACE);let Ot=q.side===ei;Dt&&(Ot=!Ot),Jt(Ot),q.blending===mo&&q.transparent===!1?Re(yr):Re(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const Yt=q.stencilWrite;h.setTest(Yt),Yt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ft(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(q){C!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),C=q)}function Ut(q){q!==_M?(nt(s.CULL_FACE),q!==z&&(q===cS?s.cullFace(s.BACK):q===SM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),z=q}function se(q){q!==$&&(G&&s.lineWidth(q),$=q)}function Ft(q,Dt,Ot){q?(nt(s.POLYGON_OFFSET_FILL),(it!==Dt||ot!==Ot)&&(s.polygonOffset(Dt,Ot),it=Dt,ot=Ot)):bt(s.POLYGON_OFFSET_FILL)}function oe(q){q?nt(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function be(q){q===void 0&&(q=s.TEXTURE0+I-1),vt!==q&&(s.activeTexture(q),vt=q)}function Ge(q,Dt,Ot){Ot===void 0&&(vt===null?Ot=s.TEXTURE0+I-1:Ot=vt);let Yt=_t[Ot];Yt===void 0&&(Yt={type:void 0,texture:void 0},_t[Ot]=Yt),(Yt.type!==q||Yt.texture!==Dt)&&(vt!==Ot&&(s.activeTexture(Ot),vt=Ot),s.bindTexture(q,Dt||tt[q]),Yt.type=q,Yt.texture=Dt)}function L(){const q=_t[vt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function yt(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Vt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(q){ae.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ae.copy(q))}function ie(q){H.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),H.copy(q))}function Lt(q,Dt){let Ot=g.get(Dt);Ot===void 0&&(Ot=new WeakMap,g.set(Dt,Ot));let Yt=Ot.get(q);Yt===void 0&&(Yt=s.getUniformBlockIndex(Dt,q.name),Ot.set(q,Yt))}function It(q,Dt){const Yt=g.get(Dt).get(q);v.get(Dt)!==Yt&&(s.uniformBlockBinding(Dt,Yt,q.__bindingPointIndex),v.set(Dt,Yt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},vt=null,_t={},p={},_=new WeakMap,M=[],x=null,b=!1,y=null,E=null,U=null,N=null,w=null,F=null,O=null,P=new He(0,0,0),k=0,R=!1,C=null,z=null,$=null,it=null,ot=null,ae.set(0,0,s.canvas.width,s.canvas.height),H.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:nt,disable:bt,bindFramebuffer:Mt,drawBuffers:Rt,useProgram:xt,setBlending:Re,setMaterial:Qt,setFlipSided:Jt,setCullFace:Ut,setLineWidth:se,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:be,bindTexture:Ge,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:at,texImage2D:Wt,texImage3D:At,updateUBOMapping:Lt,uniformBlockBinding:It,texStorage2D:yt,texStorage3D:Vt,texSubImage2D:pt,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:Tt,scissor:zt,viewport:ie,reset:fe}}function IR(s,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ze,m=new WeakMap;let p;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,A){return M?new OffscreenCanvas(L,A):Bl("canvas")}function b(L,A,at){let pt=1;const Et=Ge(L);if((Et.width>at||Et.height>at)&&(pt=at/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(pt*Et.width),Tt=Math.floor(pt*Et.height);p===void 0&&(p=x(ht,Tt));const yt=A?x(ht,Tt):p;return yt.width=ht,yt.height=Tt,yt.getContext("2d").drawImage(L,0,0,ht,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ht+"x"+Tt+")."),yt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function y(L){return L.generateMipmaps}function E(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,A,at,pt,Et=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=A;if(A===s.RED&&(at===s.FLOAT&&(ht=s.R32F),at===s.HALF_FLOAT&&(ht=s.R16F),at===s.UNSIGNED_BYTE&&(ht=s.R8)),A===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.R8UI),at===s.UNSIGNED_SHORT&&(ht=s.R16UI),at===s.UNSIGNED_INT&&(ht=s.R32UI),at===s.BYTE&&(ht=s.R8I),at===s.SHORT&&(ht=s.R16I),at===s.INT&&(ht=s.R32I)),A===s.RG&&(at===s.FLOAT&&(ht=s.RG32F),at===s.HALF_FLOAT&&(ht=s.RG16F),at===s.UNSIGNED_BYTE&&(ht=s.RG8)),A===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RG8UI),at===s.UNSIGNED_SHORT&&(ht=s.RG16UI),at===s.UNSIGNED_INT&&(ht=s.RG32UI),at===s.BYTE&&(ht=s.RG8I),at===s.SHORT&&(ht=s.RG16I),at===s.INT&&(ht=s.RG32I)),A===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),at===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),at===s.UNSIGNED_INT&&(ht=s.RGB32UI),at===s.BYTE&&(ht=s.RGB8I),at===s.SHORT&&(ht=s.RGB16I),at===s.INT&&(ht=s.RGB32I)),A===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),at===s.UNSIGNED_INT&&(ht=s.RGBA32UI),at===s.BYTE&&(ht=s.RGBA8I),at===s.SHORT&&(ht=s.RGBA16I),at===s.INT&&(ht=s.RGBA32I)),A===s.RGB&&(at===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),at===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),A===s.RGBA){const Tt=Et?tf:Ne.getTransfer(pt);at===s.FLOAT&&(ht=s.RGBA32F),at===s.HALF_FLOAT&&(ht=s.RGBA16F),at===s.UNSIGNED_BYTE&&(ht=Tt===We?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function w(L,A){let at;return L?A===null||A===ss||A===Ol?at=s.DEPTH24_STENCIL8:A===Pa?at=s.DEPTH32F_STENCIL8:A===Ll&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ss||A===Ol?at=s.DEPTH_COMPONENT24:A===Pa?at=s.DEPTH_COMPONENT32F:A===Ll&&(at=s.DEPTH_COMPONENT16),at}function F(L,A){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==Vi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),k(A),A.isVideoTexture&&m.delete(A)}function P(L){const A=L.target;A.removeEventListener("dispose",P),C(A)}function k(L){const A=r.get(L);if(A.__webglInit===void 0)return;const at=L.source,pt=_.get(at);if(pt){const Et=pt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&R(L),Object.keys(pt).length===0&&_.delete(at)}r.remove(L)}function R(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const at=L.source,pt=_.get(at);delete pt[A.__cacheKey],d.memory.textures--}function C(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let Et=0;Et<A.__webglFramebuffer[pt].length;Et++)s.deleteFramebuffer(A.__webglFramebuffer[pt][Et]);else s.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)s.deleteFramebuffer(A.__webglFramebuffer[pt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=L.textures;for(let pt=0,Et=at.length;pt<Et;pt++){const ht=r.get(at[pt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),d.memory.textures--),r.remove(at[pt])}r.remove(L)}let z=0;function $(){z=0}function it(){const L=z;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),z+=1,L}function ot(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function I(L,A){const at=r.get(L);if(L.isVideoTexture&&oe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&at.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(at,L,A);return}}else L.isExternalTexture&&(at.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+A)}function G(L,A){const at=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&at.__version!==L.version){tt(at,L,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+A)}function st(L,A){const at=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&at.__version!==L.version){tt(at,L,A);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+A)}function Y(L,A){const at=r.get(L);if(L.version>0&&at.__version!==L.version){nt(at,L,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+A)}const vt={[Nl]:s.REPEAT,[rs]:s.CLAMP_TO_EDGE,[Bp]:s.MIRRORED_REPEAT},_t={[mi]:s.NEAREST,[ZM]:s.NEAREST_MIPMAP_NEAREST,[Sc]:s.NEAREST_MIPMAP_LINEAR,[Vi]:s.LINEAR,[Wh]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},Bt={[$M]:s.NEVER,[rx]:s.ALWAYS,[tx]:s.LESS,[H2]:s.LEQUAL,[ex]:s.EQUAL,[ax]:s.GEQUAL,[nx]:s.GREATER,[ix]:s.NOTEQUAL};function $t(L,A){if(A.type===Pa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Vi||A.magFilter===Wh||A.magFilter===Sc||A.magFilter===Er||A.minFilter===Vi||A.minFilter===Wh||A.minFilter===Sc||A.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,vt[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,vt[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,vt[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,_t[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,_t[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Bt[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===mi||A.minFilter!==Sc&&A.minFilter!==Er||A.type===Pa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ae(L,A){let at=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const pt=A.source;let Et=_.get(pt);Et===void 0&&(Et={},_.set(pt,Et));const ht=ot(A);if(ht!==L.__cacheKey){Et[ht]===void 0&&(Et[ht]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,at=!0),Et[ht].usedTimes++;const Tt=Et[L.__cacheKey];Tt!==void 0&&(Et[L.__cacheKey].usedTimes--,Tt.usedTimes===0&&R(A)),L.__cacheKey=ht,L.__webglTexture=Et[ht].texture}return at}function H(L,A,at){return Math.floor(Math.floor(L/at)/A)}function ct(L,A,at,pt){const ht=L.updateRanges;if(ht.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,at,pt,A.data);else{ht.sort((At,zt)=>At.start-zt.start);let Tt=0;for(let At=1;At<ht.length;At++){const zt=ht[Tt],ie=ht[At],Lt=zt.start+zt.count,It=H(ie.start,A.width,4),fe=H(zt.start,A.width,4);ie.start<=Lt+1&&It===fe&&H(ie.start+ie.count-1,A.width,4)===It?zt.count=Math.max(zt.count,ie.start+ie.count-zt.start):(++Tt,ht[Tt]=ie)}ht.length=Tt+1;const yt=s.getParameter(s.UNPACK_ROW_LENGTH),Vt=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let At=0,zt=ht.length;At<zt;At++){const ie=ht[At],Lt=Math.floor(ie.start/4),It=Math.ceil(ie.count/4),fe=Lt%A.width,q=Math.floor(Lt/A.width),Dt=It,Ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,fe,q,Dt,Ot,at,pt,A.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,yt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function tt(L,A,at){let pt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=s.TEXTURE_3D);const Et=ae(L,A),ht=A.source;i.bindTexture(pt,L.__webglTexture,s.TEXTURE0+at);const Tt=r.get(ht);if(ht.version!==Tt.__version||Et===!0){i.activeTexture(s.TEXTURE0+at);const yt=Ne.getPrimaries(Ne.workingColorSpace),Vt=A.colorSpace===Sr?null:Ne.getPrimaries(A.colorSpace),Wt=A.colorSpace===Sr||yt===Vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let At=b(A.image,!1,l.maxTextureSize);At=be(A,At);const zt=c.convert(A.format,A.colorSpace),ie=c.convert(A.type);let Lt=N(A.internalFormat,zt,ie,A.colorSpace,A.isVideoTexture);$t(pt,A);let It;const fe=A.mipmaps,q=A.isVideoTexture!==!0,Dt=Tt.__version===void 0||Et===!0,Ot=ht.dataReady,Yt=F(A,At);if(A.isDepthTexture)Lt=w(A.format===zl,A.type),Dt&&(q?i.texStorage2D(s.TEXTURE_2D,1,Lt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Lt,At.width,At.height,0,zt,ie,null));else if(A.isDataTexture)if(fe.length>0){q&&Dt&&i.texStorage2D(s.TEXTURE_2D,Yt,Lt,fe[0].width,fe[0].height);for(let Ct=0,St=fe.length;Ct<St;Ct++)It=fe[Ct],q?Ot&&i.texSubImage2D(s.TEXTURE_2D,Ct,0,0,It.width,It.height,zt,ie,It.data):i.texImage2D(s.TEXTURE_2D,Ct,Lt,It.width,It.height,0,zt,ie,It.data);A.generateMipmaps=!1}else q?(Dt&&i.texStorage2D(s.TEXTURE_2D,Yt,Lt,At.width,At.height),Ot&&ct(A,At,zt,ie)):i.texImage2D(s.TEXTURE_2D,0,Lt,At.width,At.height,0,zt,ie,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){q&&Dt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,Lt,fe[0].width,fe[0].height,At.depth);for(let Ct=0,St=fe.length;Ct<St;Ct++)if(It=fe[Ct],A.format!==wi)if(zt!==null)if(q){if(Ot)if(A.layerUpdates.size>0){const Kt=IS(It.width,It.height,A.format,A.type);for(const ce of A.layerUpdates){const qe=It.data.subarray(ce*Kt/It.data.BYTES_PER_ELEMENT,(ce+1)*Kt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,ce,It.width,It.height,1,zt,qe)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,0,It.width,It.height,At.depth,zt,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ct,Lt,It.width,It.height,At.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ot&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,0,It.width,It.height,At.depth,zt,ie,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ct,Lt,It.width,It.height,At.depth,0,zt,ie,It.data)}else{q&&Dt&&i.texStorage2D(s.TEXTURE_2D,Yt,Lt,fe[0].width,fe[0].height);for(let Ct=0,St=fe.length;Ct<St;Ct++)It=fe[Ct],A.format!==wi?zt!==null?q?Ot&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ct,0,0,It.width,It.height,zt,It.data):i.compressedTexImage2D(s.TEXTURE_2D,Ct,Lt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ot&&i.texSubImage2D(s.TEXTURE_2D,Ct,0,0,It.width,It.height,zt,ie,It.data):i.texImage2D(s.TEXTURE_2D,Ct,Lt,It.width,It.height,0,zt,ie,It.data)}else if(A.isDataArrayTexture)if(q){if(Dt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,Lt,At.width,At.height,At.depth),Ot)if(A.layerUpdates.size>0){const Ct=IS(At.width,At.height,A.format,A.type);for(const St of A.layerUpdates){const Kt=At.data.subarray(St*Ct/At.data.BYTES_PER_ELEMENT,(St+1)*Ct/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,zt,ie,Kt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,zt,ie,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,At.width,At.height,At.depth,0,zt,ie,At.data);else if(A.isData3DTexture)q?(Dt&&i.texStorage3D(s.TEXTURE_3D,Yt,Lt,At.width,At.height,At.depth),Ot&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,zt,ie,At.data)):i.texImage3D(s.TEXTURE_3D,0,Lt,At.width,At.height,At.depth,0,zt,ie,At.data);else if(A.isFramebufferTexture){if(Dt)if(q)i.texStorage2D(s.TEXTURE_2D,Yt,Lt,At.width,At.height);else{let Ct=At.width,St=At.height;for(let Kt=0;Kt<Yt;Kt++)i.texImage2D(s.TEXTURE_2D,Kt,Lt,Ct,St,0,zt,ie,null),Ct>>=1,St>>=1}}else if(fe.length>0){if(q&&Dt){const Ct=Ge(fe[0]);i.texStorage2D(s.TEXTURE_2D,Yt,Lt,Ct.width,Ct.height)}for(let Ct=0,St=fe.length;Ct<St;Ct++)It=fe[Ct],q?Ot&&i.texSubImage2D(s.TEXTURE_2D,Ct,0,0,zt,ie,It):i.texImage2D(s.TEXTURE_2D,Ct,Lt,zt,ie,It);A.generateMipmaps=!1}else if(q){if(Dt){const Ct=Ge(At);i.texStorage2D(s.TEXTURE_2D,Yt,Lt,Ct.width,Ct.height)}Ot&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,ie,At)}else i.texImage2D(s.TEXTURE_2D,0,Lt,zt,ie,At);y(A)&&E(pt),Tt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function nt(L,A,at){if(A.image.length!==6)return;const pt=ae(L,A),Et=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+at);const ht=r.get(Et);if(Et.version!==ht.__version||pt===!0){i.activeTexture(s.TEXTURE0+at);const Tt=Ne.getPrimaries(Ne.workingColorSpace),yt=A.colorSpace===Sr?null:Ne.getPrimaries(A.colorSpace),Vt=A.colorSpace===Sr||Tt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Wt=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!Wt&&!At?zt[St]=b(A.image[St],!0,l.maxCubemapSize):zt[St]=At?A.image[St].image:A.image[St],zt[St]=be(A,zt[St]);const ie=zt[0],Lt=c.convert(A.format,A.colorSpace),It=c.convert(A.type),fe=N(A.internalFormat,Lt,It,A.colorSpace),q=A.isVideoTexture!==!0,Dt=ht.__version===void 0||pt===!0,Ot=Et.dataReady;let Yt=F(A,ie);$t(s.TEXTURE_CUBE_MAP,A);let Ct;if(Wt){q&&Dt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Yt,fe,ie.width,ie.height);for(let St=0;St<6;St++){Ct=zt[St].mipmaps;for(let Kt=0;Kt<Ct.length;Kt++){const ce=Ct[Kt];A.format!==wi?Lt!==null?q?Ot&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,0,0,ce.width,ce.height,Lt,ce.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,0,0,ce.width,ce.height,Lt,It,ce.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,fe,ce.width,ce.height,0,Lt,It,ce.data)}}}else{if(Ct=A.mipmaps,q&&Dt){Ct.length>0&&Yt++;const St=Ge(zt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Yt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(At){q?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,Lt,It,zt[St].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,zt[St].width,zt[St].height,0,Lt,It,zt[St].data);for(let Kt=0;Kt<Ct.length;Kt++){const qe=Ct[Kt].image[St].image;q?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,0,0,qe.width,qe.height,Lt,It,qe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,fe,qe.width,qe.height,0,Lt,It,qe.data)}}else{q?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Lt,It,zt[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Lt,It,zt[St]);for(let Kt=0;Kt<Ct.length;Kt++){const ce=Ct[Kt];q?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,0,0,Lt,It,ce.image[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,fe,Lt,It,ce.image[St])}}}y(A)&&E(s.TEXTURE_CUBE_MAP),ht.__version=Et.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function bt(L,A,at,pt,Et,ht){const Tt=c.convert(at.format,at.colorSpace),yt=c.convert(at.type),Vt=N(at.internalFormat,Tt,yt,at.colorSpace),Wt=r.get(A),At=r.get(at);if(At.__renderTarget=A,!Wt.__hasExternalTextures){const zt=Math.max(1,A.width>>ht),ie=Math.max(1,A.height>>ht);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,ht,Vt,zt,ie,A.depth,0,Tt,yt,null):i.texImage2D(Et,ht,Vt,zt,ie,0,Tt,yt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ft(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Et,At.__webglTexture,0,se(A)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Et,At.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(L,A,at){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const pt=A.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,ht=w(A.stencilBuffer,Et),Tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=se(A);Ft(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,ht,A.width,A.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,ht,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,L)}else{const pt=A.textures;for(let Et=0;Et<pt.length;Et++){const ht=pt[Et],Tt=c.convert(ht.format,ht.colorSpace),yt=c.convert(ht.type),Vt=N(ht.internalFormat,Tt,yt,ht.colorSpace),Wt=se(A);at&&Ft(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Vt,A.width,A.height):Ft(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,Vt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Vt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);const Et=pt.__webglTexture,ht=se(A);if(A.depthTexture.format===Pl)Ft(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(A.depthTexture.format===zl)Ft(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function xt(L){const A=r.get(L),at=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=pt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?Rt(A.__webglFramebuffer[0],L):Rt(A.__webglFramebuffer,L)}else if(at){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=s.createRenderbuffer(),Mt(A.__webglDepthbuffer[pt],L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ht)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Mt(A.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(L,A,at){const pt=r.get(L);A!==void 0&&bt(pt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&xt(L)}function V(L){const A=L.texture,at=r.get(L),pt=r.get(A);L.addEventListener("dispose",P);const Et=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Tt=Et.length>1;if(Tt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=A.version,d.memory.textures++),ht){at.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[yt]=[];for(let Vt=0;Vt<A.mipmaps.length;Vt++)at.__webglFramebuffer[yt][Vt]=s.createFramebuffer()}else at.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let yt=0;yt<A.mipmaps.length;yt++)at.__webglFramebuffer[yt]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let yt=0,Vt=Et.length;yt<Vt;yt++){const Wt=r.get(Et[yt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&Ft(L)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let yt=0;yt<Et.length;yt++){const Vt=Et[yt];at.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[yt]);const Wt=c.convert(Vt.format,Vt.colorSpace),At=c.convert(Vt.type),zt=N(Vt.internalFormat,Wt,At,Vt.colorSpace,L.isXRRenderTarget===!0),ie=se(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,zt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,at.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(at.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),$t(s.TEXTURE_CUBE_MAP,A);for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)bt(at.__webglFramebuffer[yt][Vt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Vt);else bt(at.__webglFramebuffer[yt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);y(A)&&E(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Tt){for(let yt=0,Vt=Et.length;yt<Vt;yt++){const Wt=Et[yt],At=r.get(Wt);let zt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(zt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(zt,At.__webglTexture),$t(zt,Wt),bt(at.__webglFramebuffer,L,Wt,s.COLOR_ATTACHMENT0+yt,zt,0),y(Wt)&&E(zt)}i.unbindTexture()}else{let yt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(yt,pt.__webglTexture),$t(yt,A),A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)bt(at.__webglFramebuffer[Vt],L,A,s.COLOR_ATTACHMENT0,yt,Vt);else bt(at.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,yt,0);y(A)&&E(yt),i.unbindTexture()}L.depthBuffer&&xt(L)}function Re(L){const A=L.textures;for(let at=0,pt=A.length;at<pt;at++){const Et=A[at];if(y(Et)){const ht=U(L),Tt=r.get(Et).__webglTexture;i.bindTexture(ht,Tt),E(ht),i.unbindTexture()}}}const Qt=[],Jt=[];function Ut(L){if(L.samples>0){if(Ft(L)===!1){const A=L.textures,at=L.width,pt=L.height;let Et=s.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=r.get(L),yt=A.length>1;if(yt)for(let Wt=0;Wt<A.length;Wt++)i.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const Vt=L.texture.mipmaps;Vt&&Vt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Wt=0;Wt<A.length;Wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Wt]);const At=r.get(A[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,at,pt,0,0,at,pt,Et,s.NEAREST),v===!0&&(Qt.length=0,Jt.length=0,Qt.push(s.COLOR_ATTACHMENT0+Wt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qt.push(ht),Jt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let Wt=0;Wt<A.length;Wt++){i.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Wt]);const At=r.get(A[Wt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&v){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function se(L){return Math.min(l.maxSamples,L.samples)}function Ft(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function oe(L){const A=d.render.frame;m.get(L)!==A&&(m.set(L,A),L.update())}function be(L,A){const at=L.colorSpace,pt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||at!==Eo&&at!==Sr&&(Ne.getTransfer(at)===We?(pt!==wi||Et!==Ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=it,this.resetTextureUnits=$,this.setTexture2D=I,this.setTexture2DArray=G,this.setTexture3D=st,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ft}function BR(s,e){function i(r,l=Sr){let c;const d=Ne.getTransfer(l);if(r===Ia)return s.UNSIGNED_BYTE;if(r===Bm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===O2)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===P2)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===N2)return s.BYTE;if(r===L2)return s.SHORT;if(r===Ll)return s.UNSIGNED_SHORT;if(r===Im)return s.INT;if(r===ss)return s.UNSIGNED_INT;if(r===Pa)return s.FLOAT;if(r===Xl)return s.HALF_FLOAT;if(r===z2)return s.ALPHA;if(r===I2)return s.RGB;if(r===wi)return s.RGBA;if(r===Pl)return s.DEPTH_COMPONENT;if(r===zl)return s.DEPTH_STENCIL;if(r===B2)return s.RED;if(r===Hm)return s.RED_INTEGER;if(r===F2)return s.RG;if(r===Gm)return s.RG_INTEGER;if(r===Vm)return s.RGBA_INTEGER;if(r===Wc||r===Zc||r===jc||r===Kc)if(d===We)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fp||r===Hp||r===Gp||r===Vp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Fp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kp||r===Xp||r===qp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===kp||r===Xp)return d===We?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===qp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yp||r===Wp||r===Zp||r===jp||r===Kp||r===Qp||r===Jp||r===$p||r===tm||r===em||r===nm||r===im||r===am||r===rm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Yp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$p)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tm)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===em)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nm)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===im)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===am)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rm)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sm||r===om||r===lm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===sm)return d===We?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===om)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===um||r===cm||r===fm||r===dm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===um)return c.COMPRESSED_RED_RGTC1_EXT;if(r===cm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ol?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const FR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HR=`
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

}`;class GR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new tE(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Xi({vertexShader:FR,fragmentShader:HR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ki(new jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends bo{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",v=1,g=null,m=null,p=null,_=null,M=null,x=null;const b=typeof XRWebGLBinding<"u",y=new GR,E={},U=i.getContextAttributes();let N=null,w=null;const F=[],O=[],P=new ze;let k=null;const R=new Ri;R.viewport=new fn;const C=new Ri;C.viewport=new fn;const z=[R,C],$=new uT;let it=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let nt=F[tt];return nt===void 0&&(nt=new pp,F[tt]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(tt){let nt=F[tt];return nt===void 0&&(nt=new pp,F[tt]=nt),nt.getGripSpace()},this.getHand=function(tt){let nt=F[tt];return nt===void 0&&(nt=new pp,F[tt]=nt),nt.getHandSpace()};function I(tt){const nt=O.indexOf(tt.inputSource);if(nt===-1)return;const bt=F[nt];bt!==void 0&&(bt.update(tt.inputSource,tt.frame,g||d),bt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function G(){l.removeEventListener("select",I),l.removeEventListener("selectstart",I),l.removeEventListener("selectend",I),l.removeEventListener("squeeze",I),l.removeEventListener("squeezestart",I),l.removeEventListener("squeezeend",I),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",st);for(let tt=0;tt<F.length;tt++){const nt=O[tt];nt!==null&&(O[tt]=null,F[tt].disconnect(nt))}it=null,ot=null,y.reset();for(const tt in E)delete E[tt];e.setRenderTarget(N),M=null,_=null,p=null,l=null,w=null,ct.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(tt){g=tt},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return x},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",I),l.addEventListener("selectstart",I),l.addEventListener("selectend",I),l.addEventListener("squeeze",I),l.addEventListener("squeezestart",I),l.addEventListener("squeezeend",I),l.addEventListener("end",G),l.addEventListener("inputsourceschange",st),U.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Mt=null,Rt=null;U.depth&&(Rt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=U.stencil?zl:Pl,Mt=U.stencil?Ol:ss);const xt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};p=this.getBinding(),_=p.createProjectionLayer(xt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new os(_.textureWidth,_.textureHeight,{format:wi,type:Ia,depthTexture:new $2(_.textureWidth,_.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new os(M.framebufferWidth,M.framebufferHeight,{format:wi,type:Ia,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(v),g=null,d=await l.requestReferenceSpace(h),ct.setContext(l),ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function st(tt){for(let nt=0;nt<tt.removed.length;nt++){const bt=tt.removed[nt],Mt=O.indexOf(bt);Mt>=0&&(O[Mt]=null,F[Mt].disconnect(bt))}for(let nt=0;nt<tt.added.length;nt++){const bt=tt.added[nt];let Mt=O.indexOf(bt);if(Mt===-1){for(let xt=0;xt<F.length;xt++)if(xt>=O.length){O.push(bt),Mt=xt;break}else if(O[xt]===null){O[xt]=bt,Mt=xt;break}if(Mt===-1)break}const Rt=F[Mt];Rt&&Rt.connect(bt)}}const Y=new ut,vt=new ut;function _t(tt,nt,bt){Y.setFromMatrixPosition(nt.matrixWorld),vt.setFromMatrixPosition(bt.matrixWorld);const Mt=Y.distanceTo(vt),Rt=nt.projectionMatrix.elements,xt=bt.projectionMatrix.elements,Xt=Rt[14]/(Rt[10]-1),V=Rt[14]/(Rt[10]+1),Re=(Rt[9]+1)/Rt[5],Qt=(Rt[9]-1)/Rt[5],Jt=(Rt[8]-1)/Rt[0],Ut=(xt[8]+1)/xt[0],se=Xt*Jt,Ft=Xt*Ut,oe=Mt/(-Jt+Ut),be=oe*-Jt;if(nt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(be),tt.translateZ(oe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Rt[10]===-1)tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Ge=Xt+oe,L=V+oe,A=se-be,at=Ft+(Mt-be),pt=Re*V/L*Ge,Et=Qt*V/L*Ge;tt.projectionMatrix.makePerspective(A,at,pt,Et,Ge,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Bt(tt,nt){nt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(nt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let nt=tt.near,bt=tt.far;y.texture!==null&&(y.depthNear>0&&(nt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),$.near=C.near=R.near=nt,$.far=C.far=R.far=bt,(it!==$.near||ot!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),it=$.near,ot=$.far),$.layers.mask=tt.layers.mask|6,R.layers.mask=$.layers.mask&3,C.layers.mask=$.layers.mask&5;const Mt=tt.parent,Rt=$.cameras;Bt($,Mt);for(let xt=0;xt<Rt.length;xt++)Bt(Rt[xt],Mt);Rt.length===2?_t($,R,C):$.projectionMatrix.copy(R.projectionMatrix),$t(tt,$,Mt)};function $t(tt,nt,bt){bt===null?tt.matrix.copy(nt.matrixWorld):(tt.matrix.copy(bt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(nt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Il*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&M===null))return v},this.setFoveation=function(tt){v=tt,_!==null&&(_.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(tt){return E[tt]};let ae=null;function H(tt,nt){if(m=nt.getViewerPose(g||d),x=nt,m!==null){const bt=m.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Mt=!1;bt.length!==$.cameras.length&&($.cameras.length=0,Mt=!0);for(let V=0;V<bt.length;V++){const Re=bt[V];let Qt=null;if(M!==null)Qt=M.getViewport(Re);else{const Ut=p.getViewSubImage(_,Re);Qt=Ut.viewport,V===0&&(e.setRenderTargetTextures(w,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(w))}let Jt=z[V];Jt===void 0&&(Jt=new Ri,Jt.layers.enable(V),Jt.viewport=new fn,z[V]=Jt),Jt.matrix.fromArray(Re.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Re.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),V===0&&($.matrix.copy(Jt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Mt===!0&&$.cameras.push(Jt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){p=r.getBinding();const V=p.getDepthInformation(bt[0]);V&&V.isValid&&V.texture&&y.init(V,l.renderState)}if(Rt&&Rt.includes("camera-access")&&b){e.state.unbindTexture(),p=r.getBinding();for(let V=0;V<bt.length;V++){const Re=bt[V].camera;if(Re){let Qt=E[Re];Qt||(Qt=new tE,E[Re]=Qt);const Jt=p.getCameraImage(Re);Qt.sourceTexture=Jt}}}}for(let bt=0;bt<F.length;bt++){const Mt=O[bt],Rt=F[bt];Mt!==null&&Rt!==void 0&&Rt.update(Mt,nt,g||d)}ae&&ae(tt,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),x=null}const ct=new eE;ct.setAnimationLoop(H),this.setAnimationLoop=function(tt){ae=tt},this.dispose=function(){}}}const $r=new Ba,kR=new dn;function XR(s,e){function i(y,E){y.matrixAutoUpdate===!0&&y.updateMatrix(),E.value.copy(y.matrix)}function r(y,E){E.color.getRGB(y.fogColor.value,j2(s)),E.isFog?(y.fogNear.value=E.near,y.fogFar.value=E.far):E.isFogExp2&&(y.fogDensity.value=E.density)}function l(y,E,U,N,w){E.isMeshBasicMaterial||E.isMeshLambertMaterial?c(y,E):E.isMeshToonMaterial?(c(y,E),p(y,E)):E.isMeshPhongMaterial?(c(y,E),m(y,E)):E.isMeshStandardMaterial?(c(y,E),_(y,E),E.isMeshPhysicalMaterial&&M(y,E,w)):E.isMeshMatcapMaterial?(c(y,E),x(y,E)):E.isMeshDepthMaterial?c(y,E):E.isMeshDistanceMaterial?(c(y,E),b(y,E)):E.isMeshNormalMaterial?c(y,E):E.isLineBasicMaterial?(d(y,E),E.isLineDashedMaterial&&h(y,E)):E.isPointsMaterial?v(y,E,U,N):E.isSpriteMaterial?g(y,E):E.isShadowMaterial?(y.color.value.copy(E.color),y.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function c(y,E){y.opacity.value=E.opacity,E.color&&y.diffuse.value.copy(E.color),E.emissive&&y.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.bumpMap&&(y.bumpMap.value=E.bumpMap,i(E.bumpMap,y.bumpMapTransform),y.bumpScale.value=E.bumpScale,E.side===ei&&(y.bumpScale.value*=-1)),E.normalMap&&(y.normalMap.value=E.normalMap,i(E.normalMap,y.normalMapTransform),y.normalScale.value.copy(E.normalScale),E.side===ei&&y.normalScale.value.negate()),E.displacementMap&&(y.displacementMap.value=E.displacementMap,i(E.displacementMap,y.displacementMapTransform),y.displacementScale.value=E.displacementScale,y.displacementBias.value=E.displacementBias),E.emissiveMap&&(y.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,y.emissiveMapTransform)),E.specularMap&&(y.specularMap.value=E.specularMap,i(E.specularMap,y.specularMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest);const U=e.get(E),N=U.envMap,w=U.envMapRotation;N&&(y.envMap.value=N,$r.copy(w),$r.x*=-1,$r.y*=-1,$r.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4(kR.makeRotationFromEuler($r)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=E.reflectivity,y.ior.value=E.ior,y.refractionRatio.value=E.refractionRatio),E.lightMap&&(y.lightMap.value=E.lightMap,y.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,y.lightMapTransform)),E.aoMap&&(y.aoMap.value=E.aoMap,y.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,y.aoMapTransform))}function d(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform))}function h(y,E){y.dashSize.value=E.dashSize,y.totalSize.value=E.dashSize+E.gapSize,y.scale.value=E.scale}function v(y,E,U,N){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.size.value=E.size*U,y.scale.value=N*.5,E.map&&(y.map.value=E.map,i(E.map,y.uvTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function g(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.rotation.value=E.rotation,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function m(y,E){y.specular.value.copy(E.specular),y.shininess.value=Math.max(E.shininess,1e-4)}function p(y,E){E.gradientMap&&(y.gradientMap.value=E.gradientMap)}function _(y,E){y.metalness.value=E.metalness,E.metalnessMap&&(y.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,y.metalnessMapTransform)),y.roughness.value=E.roughness,E.roughnessMap&&(y.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,y.roughnessMapTransform)),E.envMap&&(y.envMapIntensity.value=E.envMapIntensity)}function M(y,E,U){y.ior.value=E.ior,E.sheen>0&&(y.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),y.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(y.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,y.sheenColorMapTransform)),E.sheenRoughnessMap&&(y.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,y.sheenRoughnessMapTransform))),E.clearcoat>0&&(y.clearcoat.value=E.clearcoat,y.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(y.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,y.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(y.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===ei&&y.clearcoatNormalScale.value.negate())),E.dispersion>0&&(y.dispersion.value=E.dispersion),E.iridescence>0&&(y.iridescence.value=E.iridescence,y.iridescenceIOR.value=E.iridescenceIOR,y.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(y.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,y.iridescenceMapTransform)),E.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),E.transmission>0&&(y.transmission.value=E.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),E.transmissionMap&&(y.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,y.transmissionMapTransform)),y.thickness.value=E.thickness,E.thicknessMap&&(y.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=E.attenuationDistance,y.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(y.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(y.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=E.specularIntensity,y.specularColor.value.copy(E.specularColor),E.specularColorMap&&(y.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,y.specularColorMapTransform)),E.specularIntensityMap&&(y.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,E){E.matcap&&(y.matcap.value=E.matcap)}function b(y,E){const U=e.get(E).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function qR(s,e,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function v(U,N){const w=N.program;r.uniformBlockBinding(U,w)}function g(U,N){let w=l[U.id];w===void 0&&(x(U),w=m(U),l[U.id]=w,U.addEventListener("dispose",y));const F=N.program;r.updateUBOMapping(U,F);const O=e.render.frame;c[U.id]!==O&&(_(U),c[U.id]=O)}function m(U){const N=p();U.__bindingPointIndex=N;const w=s.createBuffer(),F=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,F,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,w),w}function p(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const N=l[U.id],w=U.uniforms,F=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let O=0,P=w.length;O<P;O++){const k=Array.isArray(w[O])?w[O]:[w[O]];for(let R=0,C=k.length;R<C;R++){const z=k[R];if(M(z,O,R,F)===!0){const $=z.__offset,it=Array.isArray(z.value)?z.value:[z.value];let ot=0;for(let I=0;I<it.length;I++){const G=it[I],st=b(G);typeof G=="number"||typeof G=="boolean"?(z.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,$+ot,z.__data)):G.isMatrix3?(z.__data[0]=G.elements[0],z.__data[1]=G.elements[1],z.__data[2]=G.elements[2],z.__data[3]=0,z.__data[4]=G.elements[3],z.__data[5]=G.elements[4],z.__data[6]=G.elements[5],z.__data[7]=0,z.__data[8]=G.elements[6],z.__data[9]=G.elements[7],z.__data[10]=G.elements[8],z.__data[11]=0):(G.toArray(z.__data,ot),ot+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,N,w,F){const O=U.value,P=N+"_"+w;if(F[P]===void 0)return typeof O=="number"||typeof O=="boolean"?F[P]=O:F[P]=O.clone(),!0;{const k=F[P];if(typeof O=="number"||typeof O=="boolean"){if(k!==O)return F[P]=O,!0}else if(k.equals(O)===!1)return k.copy(O),!0}return!1}function x(U){const N=U.uniforms;let w=0;const F=16;for(let P=0,k=N.length;P<k;P++){const R=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,z=R.length;C<z;C++){const $=R[C],it=Array.isArray($.value)?$.value:[$.value];for(let ot=0,I=it.length;ot<I;ot++){const G=it[ot],st=b(G),Y=w%F,vt=Y%st.boundary,_t=Y+vt;w+=vt,_t!==0&&F-_t<st.storage&&(w+=F-_t),$.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=st.storage}}}const O=w%F;return O>0&&(w+=F-O),U.__size=w,U.__cache={},this}function b(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),N}function y(U){const N=U.target;N.removeEventListener("dispose",y);const w=d.indexOf(N.__bindingPointIndex);d.splice(w,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function E(){for(const U in l)s.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:v,update:g,dispose:E}}class sE{constructor(e={}){const{canvas:i=xx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:g=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const x=new Uint32Array(4),b=new Int32Array(4);let y=null,E=null;const U=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=ti;let O=0,P=0,k=null,R=-1,C=null;const z=new fn,$=new fn;let it=null;const ot=new He(0);let I=0,G=i.width,st=i.height,Y=1,vt=null,_t=null;const Bt=new fn(0,0,G,st),$t=new fn(0,0,G,st);let ae=!1;const H=new J2;let ct=!1,tt=!1;const nt=new dn,bt=new ut,Mt=new fn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Xt(){return k===null?Y:1}let V=r;function Re(D,Q){return i.getContext(D,Q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:v,preserveDrawingBuffer:g,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zm}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),V===null){const Q="webgl2";if(V=Re(Q,D),V===null)throw Re(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Qt,Jt,Ut,se,Ft,oe,be,Ge,L,A,at,pt,Et,ht,Tt,yt,Vt,Wt,At,zt,ie,Lt,It,fe;function q(){Qt=new n3(V),Qt.init(),Lt=new BR(V,Qt),Jt=new jA(V,Qt,e,Lt),Ut=new zR(V,Qt),Jt.reversedDepthBuffer&&_&&Ut.buffers.depth.setReversed(!0),se=new r3(V),Ft=new xR,oe=new IR(V,Qt,Ut,Ft,Jt,Lt,se),be=new QA(w),Ge=new e3(w),L=new fT(V),It=new WA(V,L),A=new i3(V,L,se,It),at=new o3(V,A,L,se),At=new s3(V,Jt,oe),yt=new KA(Ft),pt=new MR(w,be,Ge,Qt,Jt,It,yt),Et=new XR(w,Ft),ht=new bR,Tt=new UR(Qt),Wt=new YA(w,be,Ge,Ut,at,M,v),Vt=new OR(w,at,Jt),fe=new qR(V,se,Jt,Ut),zt=new ZA(V,Qt,se),ie=new a3(V,Qt,se),se.programs=pt.programs,w.capabilities=Jt,w.extensions=Qt,w.properties=Ft,w.renderLists=ht,w.shadowMap=Vt,w.state=Ut,w.info=se}q();const Dt=new VR(w,V);this.xr=Dt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=Qt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Qt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(G,st,!1))},this.getSize=function(D){return D.set(G,st)},this.setSize=function(D,Q,ft=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,st=Q,i.width=Math.floor(D*Y),i.height=Math.floor(Q*Y),ft===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(G*Y,st*Y).floor()},this.setDrawingBufferSize=function(D,Q,ft){G=D,st=Q,Y=ft,i.width=Math.floor(D*ft),i.height=Math.floor(Q*ft),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(Bt)},this.setViewport=function(D,Q,ft,dt){D.isVector4?Bt.set(D.x,D.y,D.z,D.w):Bt.set(D,Q,ft,dt),Ut.viewport(z.copy(Bt).multiplyScalar(Y).round())},this.getScissor=function(D){return D.copy($t)},this.setScissor=function(D,Q,ft,dt){D.isVector4?$t.set(D.x,D.y,D.z,D.w):$t.set(D,Q,ft,dt),Ut.scissor($.copy($t).multiplyScalar(Y).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(D){Ut.setScissorTest(ae=D)},this.setOpaqueSort=function(D){vt=D},this.setTransparentSort=function(D){_t=D},this.getClearColor=function(D){return D.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,ft=!0){let dt=0;if(D){let J=!1;if(k!==null){const wt=k.texture.format;J=wt===Vm||wt===Gm||wt===Hm}if(J){const wt=k.texture.type,Ht=wt===Ia||wt===ss||wt===Ll||wt===Ol||wt===Bm||wt===Fm,kt=Wt.getClearColor(),Nt=Wt.getClearAlpha(),Zt=kt.r,re=kt.g,ee=kt.b;Ht?(x[0]=Zt,x[1]=re,x[2]=ee,x[3]=Nt,V.clearBufferuiv(V.COLOR,0,x)):(b[0]=Zt,b[1]=re,b[2]=ee,b[3]=Nt,V.clearBufferiv(V.COLOR,0,b))}else dt|=V.COLOR_BUFFER_BIT}Q&&(dt|=V.DEPTH_BUFFER_BIT),ft&&(dt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),Wt.dispose(),ht.dispose(),Tt.dispose(),Ft.dispose(),be.dispose(),Ge.dispose(),at.dispose(),It.dispose(),fe.dispose(),pt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Sn),Dt.removeEventListener("sessionend",zn),ca.stop()};function Ot(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const D=se.autoReset,Q=Vt.enabled,ft=Vt.autoUpdate,dt=Vt.needsUpdate,J=Vt.type;q(),se.autoReset=D,Vt.enabled=Q,Vt.autoUpdate=ft,Vt.needsUpdate=dt,Vt.type=J}function Ct(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function St(D){const Q=D.target;Q.removeEventListener("dispose",St),Kt(Q)}function Kt(D){ce(D),Ft.remove(D)}function ce(D){const Q=Ft.get(D).programs;Q!==void 0&&(Q.forEach(function(ft){pt.releaseProgram(ft)}),D.isShaderMaterial&&pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,ft,dt,J,wt){Q===null&&(Q=Rt);const Ht=J.isMesh&&J.matrixWorld.determinant()<0,kt=Ql(D,Q,ft,dt,J);Ut.setMaterial(dt,Ht);let Nt=ft.index,Zt=1;if(dt.wireframe===!0){if(Nt=A.getWireframeAttribute(ft),Nt===void 0)return;Zt=2}const re=ft.drawRange,ee=ft.attributes.position;let _e=re.start*Zt,Ie=(re.start+re.count)*Zt;wt!==null&&(_e=Math.max(_e,wt.start*Zt),Ie=Math.min(Ie,(wt.start+wt.count)*Zt)),Nt!==null?(_e=Math.max(_e,0),Ie=Math.min(Ie,Nt.count)):ee!=null&&(_e=Math.max(_e,0),Ie=Math.min(Ie,ee.count));const $e=Ie-_e;if($e<0||$e===1/0)return;It.setup(J,dt,kt,ft,Nt);let Le,we=zt;if(Nt!==null&&(Le=L.get(Nt),we=ie,we.setIndex(Le)),J.isMesh)dt.wireframe===!0?(Ut.setLineWidth(dt.wireframeLinewidth*Xt()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if(J.isLine){let ne=dt.linewidth;ne===void 0&&(ne=1),Ut.setLineWidth(ne*Xt()),J.isLineSegments?we.setMode(V.LINES):J.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else J.isPoints?we.setMode(V.POINTS):J.isSprite&&we.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))we.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ne=J._multiDrawStarts,Oe=J._multiDrawCounts,ge=J._multiDrawCount,En=Nt?L.get(Nt).bytesPerElement:1,ai=Ft.get(dt).currentProgram.getUniforms();for(let De=0;De<ge;De++)ai.setValue(V,"_gl_DrawID",De),we.render(ne[De]/En,Oe[De])}else if(J.isInstancedMesh)we.renderInstances(_e,$e,J.count);else if(ft.isInstancedBufferGeometry){const ne=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Oe=Math.min(ft.instanceCount,ne);we.renderInstances(_e,$e,Oe)}else we.render(_e,$e)};function qe(D,Q,ft){D.transparent===!0&&D.side===La&&D.forceSinglePass===!1?(D.side=ei,D.needsUpdate=!0,gi(D,Q,ft),D.side=xr,D.needsUpdate=!0,gi(D,Q,ft),D.side=La):gi(D,Q,ft)}this.compile=function(D,Q,ft=null){ft===null&&(ft=D),E=Tt.get(ft),E.init(Q),N.push(E),ft.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),D!==ft&&D.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights();const dt=new Set;return D.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const wt=J.material;if(wt)if(Array.isArray(wt))for(let Ht=0;Ht<wt.length;Ht++){const kt=wt[Ht];qe(kt,ft,J),dt.add(kt)}else qe(wt,ft,J),dt.add(wt)}),E=N.pop(),dt},this.compileAsync=function(D,Q,ft=null){const dt=this.compile(D,Q,ft);return new Promise(J=>{function wt(){if(dt.forEach(function(Ht){Ft.get(Ht).currentProgram.isReady()&&dt.delete(Ht)}),dt.size===0){J(D);return}setTimeout(wt,10)}Qt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ye=null;function an(D){ye&&ye(D)}function Sn(){ca.stop()}function zn(){ca.start()}const ca=new eE;ca.setAnimationLoop(an),typeof self<"u"&&ca.setContext(self),this.setAnimationLoop=function(D){ye=D,Dt.setAnimationLoop(D),D===null?ca.stop():ca.start()},Dt.addEventListener("sessionstart",Sn),Dt.addEventListener("sessionend",zn),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Q),Q=Dt.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,Q,k),E=Tt.get(D,N.length),E.init(Q),N.push(E),nt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H.setFromProjectionMatrix(nt,oa,Q.reversedDepth),tt=this.localClippingEnabled,ct=yt.init(this.clippingPlanes,tt),y=ht.get(D,U.length),y.init(),U.push(y),Dt.enabled===!0&&Dt.isPresenting===!0){const wt=w.xr.getDepthSensingMesh();wt!==null&&Co(wt,Q,-1/0,w.sortObjects)}Co(D,Q,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(vt,_t),xt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,xt&&Wt.addToRenderList(y,D),this.info.render.frame++,ct===!0&&yt.beginShadows();const ft=E.state.shadowsArray;Vt.render(ft,D,Q),ct===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=y.opaque,J=y.transmissive;if(E.setupLights(),Q.isArrayCamera){const wt=Q.cameras;if(J.length>0)for(let Ht=0,kt=wt.length;Ht<kt;Ht++){const Nt=wt[Ht];Tr(dt,J,D,Nt)}xt&&Wt.render(D);for(let Ht=0,kt=wt.length;Ht<kt;Ht++){const Nt=wt[Ht];Kl(y,D,Nt,Nt.viewport)}}else J.length>0&&Tr(dt,J,D,Q),xt&&Wt.render(D),Kl(y,D,Q);k!==null&&P===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),D.isScene===!0&&D.onAfterRender(w,D,Q),It.resetDefaultState(),R=-1,C=null,N.pop(),N.length>0?(E=N[N.length-1],ct===!0&&yt.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Co(D,Q,ft,dt){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)ft=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)E.pushLight(D),D.castShadow&&E.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||H.intersectsSprite(D)){dt&&Mt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(nt);const Ht=at.update(D),kt=D.material;kt.visible&&y.push(D,Ht,kt,ft,Mt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||H.intersectsObject(D))){const Ht=at.update(D),kt=D.material;if(dt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Mt.copy(D.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Mt.copy(Ht.boundingSphere.center)),Mt.applyMatrix4(D.matrixWorld).applyMatrix4(nt)),Array.isArray(kt)){const Nt=Ht.groups;for(let Zt=0,re=Nt.length;Zt<re;Zt++){const ee=Nt[Zt],_e=kt[ee.materialIndex];_e&&_e.visible&&y.push(D,Ht,_e,ft,Mt.z,ee)}}else kt.visible&&y.push(D,Ht,kt,ft,Mt.z,null)}}const wt=D.children;for(let Ht=0,kt=wt.length;Ht<kt;Ht++)Co(wt[Ht],Q,ft,dt)}function Kl(D,Q,ft,dt){const J=D.opaque,wt=D.transmissive,Ht=D.transparent;E.setupLightsView(ft),ct===!0&&yt.setGlobalState(w.clippingPlanes,ft),dt&&Ut.viewport(z.copy(dt)),J.length>0&&fa(J,Q,ft),wt.length>0&&fa(wt,Q,ft),Ht.length>0&&fa(Ht,Q,ft),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Tr(D,Q,ft,dt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[dt.id]===void 0&&(E.state.transmissionRenderTarget[dt.id]=new os(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Xl:Ia,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const wt=E.state.transmissionRenderTarget[dt.id],Ht=dt.viewport||z;wt.setSize(Ht.z*w.transmissionResolutionScale,Ht.w*w.transmissionResolutionScale);const kt=w.getRenderTarget(),Nt=w.getActiveCubeFace(),Zt=w.getActiveMipmapLevel();w.setRenderTarget(wt),w.getClearColor(ot),I=w.getClearAlpha(),I<1&&w.setClearColor(16777215,.5),w.clear(),xt&&Wt.render(ft);const re=w.toneMapping;w.toneMapping=Mr;const ee=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),E.setupLightsView(dt),ct===!0&&yt.setGlobalState(w.clippingPlanes,dt),fa(D,ft,dt),oe.updateMultisampleRenderTarget(wt),oe.updateRenderTargetMipmap(wt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Ie=0,$e=Q.length;Ie<$e;Ie++){const Le=Q[Ie],we=Le.object,ne=Le.geometry,Oe=Le.material,ge=Le.group;if(Oe.side===La&&we.layers.test(dt.layers)){const En=Oe.side;Oe.side=ei,Oe.needsUpdate=!0,br(we,ft,dt,ne,Oe,ge),Oe.side=En,Oe.needsUpdate=!0,_e=!0}}_e===!0&&(oe.updateMultisampleRenderTarget(wt),oe.updateRenderTargetMipmap(wt))}w.setRenderTarget(kt,Nt,Zt),w.setClearColor(ot,I),ee!==void 0&&(dt.viewport=ee),w.toneMapping=re}function fa(D,Q,ft){const dt=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,wt=D.length;J<wt;J++){const Ht=D[J],kt=Ht.object,Nt=Ht.geometry,Zt=Ht.group;let re=Ht.material;re.allowOverride===!0&&dt!==null&&(re=dt),kt.layers.test(ft.layers)&&br(kt,Q,ft,Nt,re,Zt)}}function br(D,Q,ft,dt,J,wt){D.onBeforeRender(w,Q,ft,dt,J,wt),D.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(w,Q,ft,dt,D,wt),J.transparent===!0&&J.side===La&&J.forceSinglePass===!1?(J.side=ei,J.needsUpdate=!0,w.renderBufferDirect(ft,Q,dt,J,D,wt),J.side=xr,J.needsUpdate=!0,w.renderBufferDirect(ft,Q,dt,J,D,wt),J.side=La):w.renderBufferDirect(ft,Q,dt,J,D,wt),D.onAfterRender(w,Q,ft,dt,J,wt)}function gi(D,Q,ft){Q.isScene!==!0&&(Q=Rt);const dt=Ft.get(D),J=E.state.lights,wt=E.state.shadowsArray,Ht=J.state.version,kt=pt.getParameters(D,J.state,wt,Q,ft),Nt=pt.getProgramCacheKey(kt);let Zt=dt.programs;dt.environment=D.isMeshStandardMaterial?Q.environment:null,dt.fog=Q.fog,dt.envMap=(D.isMeshStandardMaterial?Ge:be).get(D.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,Zt===void 0&&(D.addEventListener("dispose",St),Zt=new Map,dt.programs=Zt);let re=Zt.get(Nt);if(re!==void 0){if(dt.currentProgram===re&&dt.lightsStateVersion===Ht)return Fa(D,kt),re}else kt.uniforms=pt.getUniforms(D),D.onBeforeCompile(kt,w),re=pt.acquireProgram(kt,Nt),Zt.set(Nt,re),dt.uniforms=kt.uniforms;const ee=dt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ee.clippingPlanes=yt.uniform),Fa(D,kt),dt.needsLights=Jl(D),dt.lightsStateVersion=Ht,dt.needsLights&&(ee.ambientLightColor.value=J.state.ambient,ee.lightProbe.value=J.state.probe,ee.directionalLights.value=J.state.directional,ee.directionalLightShadows.value=J.state.directionalShadow,ee.spotLights.value=J.state.spot,ee.spotLightShadows.value=J.state.spotShadow,ee.rectAreaLights.value=J.state.rectArea,ee.ltc_1.value=J.state.rectAreaLTC1,ee.ltc_2.value=J.state.rectAreaLTC2,ee.pointLights.value=J.state.point,ee.pointLightShadows.value=J.state.pointShadow,ee.hemisphereLights.value=J.state.hemi,ee.directionalShadowMap.value=J.state.directionalShadowMap,ee.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ee.spotShadowMap.value=J.state.spotShadowMap,ee.spotLightMatrix.value=J.state.spotLightMatrix,ee.spotLightMap.value=J.state.spotLightMap,ee.pointShadowMap.value=J.state.pointShadowMap,ee.pointShadowMatrix.value=J.state.pointShadowMatrix),dt.currentProgram=re,dt.uniformsList=null,re}function Ar(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=Qc.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function Fa(D,Q){const ft=Ft.get(D);ft.outputColorSpace=Q.outputColorSpace,ft.batching=Q.batching,ft.batchingColor=Q.batchingColor,ft.instancing=Q.instancing,ft.instancingColor=Q.instancingColor,ft.instancingMorph=Q.instancingMorph,ft.skinning=Q.skinning,ft.morphTargets=Q.morphTargets,ft.morphNormals=Q.morphNormals,ft.morphColors=Q.morphColors,ft.morphTargetsCount=Q.morphTargetsCount,ft.numClippingPlanes=Q.numClippingPlanes,ft.numIntersection=Q.numClipIntersection,ft.vertexAlphas=Q.vertexAlphas,ft.vertexTangents=Q.vertexTangents,ft.toneMapping=Q.toneMapping}function Ql(D,Q,ft,dt,J){Q.isScene!==!0&&(Q=Rt),oe.resetTextureUnits();const wt=Q.fog,Ht=dt.isMeshStandardMaterial?Q.environment:null,kt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Eo,Nt=(dt.isMeshStandardMaterial?Ge:be).get(dt.envMap||Ht),Zt=dt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,re=!!ft.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),ee=!!ft.morphAttributes.position,_e=!!ft.morphAttributes.normal,Ie=!!ft.morphAttributes.color;let $e=Mr;dt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&($e=w.toneMapping);const Le=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,we=Le!==void 0?Le.length:0,ne=Ft.get(dt),Oe=E.state.lights;if(ct===!0&&(tt===!0||D!==C)){const on=D===C&&dt.id===R;yt.setState(dt,D,on)}let ge=!1;dt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Oe.state.version||ne.outputColorSpace!==kt||J.isBatchedMesh&&ne.batching===!1||!J.isBatchedMesh&&ne.batching===!0||J.isBatchedMesh&&ne.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ne.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ne.instancing===!1||!J.isInstancedMesh&&ne.instancing===!0||J.isSkinnedMesh&&ne.skinning===!1||!J.isSkinnedMesh&&ne.skinning===!0||J.isInstancedMesh&&ne.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ne.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ne.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ne.instancingMorph===!1&&J.morphTexture!==null||ne.envMap!==Nt||dt.fog===!0&&ne.fog!==wt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==yt.numPlanes||ne.numIntersection!==yt.numIntersection)||ne.vertexAlphas!==Zt||ne.vertexTangents!==re||ne.morphTargets!==ee||ne.morphNormals!==_e||ne.morphColors!==Ie||ne.toneMapping!==$e||ne.morphTargetsCount!==we)&&(ge=!0):(ge=!0,ne.__version=dt.version);let En=ne.currentProgram;ge===!0&&(En=gi(dt,Q,J));let ai=!1,De=!1,Ha=!1;const je=En.getUniforms(),Vn=ne.uniforms;if(Ut.useProgram(En.program)&&(ai=!0,De=!0,Ha=!0),dt.id!==R&&(R=dt.id,De=!0),ai||C!==D){Ut.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),je.setValue(V,"projectionMatrix",D.projectionMatrix),je.setValue(V,"viewMatrix",D.matrixWorldInverse);const In=je.map.cameraPosition;In!==void 0&&In.setValue(V,bt.setFromMatrixPosition(D.matrixWorld)),Jt.logarithmicDepthBuffer&&je.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&je.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,De=!0,Ha=!0)}if(J.isSkinnedMesh){je.setOptional(V,J,"bindMatrix"),je.setOptional(V,J,"bindMatrixInverse");const on=J.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),je.setValue(V,"boneTexture",on.boneTexture,oe))}J.isBatchedMesh&&(je.setOptional(V,J,"batchingTexture"),je.setValue(V,"batchingTexture",J._matricesTexture,oe),je.setOptional(V,J,"batchingIdTexture"),je.setValue(V,"batchingIdTexture",J._indirectTexture,oe),je.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&je.setValue(V,"batchingColorTexture",J._colorsTexture,oe));const hn=ft.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&At.update(J,ft,En),(De||ne.receiveShadow!==J.receiveShadow)&&(ne.receiveShadow=J.receiveShadow,je.setValue(V,"receiveShadow",J.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(Vn.envMap.value=Nt,Vn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&Q.environment!==null&&(Vn.envMapIntensity.value=Q.environmentIntensity),De&&(je.setValue(V,"toneMappingExposure",w.toneMappingExposure),ne.needsLights&&gf(Vn,Ha),wt&&dt.fog===!0&&Et.refreshFogUniforms(Vn,wt),Et.refreshMaterialUniforms(Vn,dt,Y,st,E.state.transmissionRenderTarget[D.id]),Qc.upload(V,Ar(ne),Vn,oe)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Qc.upload(V,Ar(ne),Vn,oe),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&je.setValue(V,"center",J.center),je.setValue(V,"modelViewMatrix",J.modelViewMatrix),je.setValue(V,"normalMatrix",J.normalMatrix),je.setValue(V,"modelMatrix",J.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const on=dt.uniformsGroups;for(let In=0,cs=on.length;In<cs;In++){const Yi=on[In];fe.update(Yi,En),fe.bind(Yi,En)}}return En}function gf(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function Jl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(D,Q,ft){const dt=Ft.get(D);dt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),Ft.get(D.texture).__webglTexture=Q,Ft.get(D.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:ft,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const ft=Ft.get(D);ft.__webglFramebuffer=Q,ft.__useDefaultFramebuffer=Q===void 0};const wo=V.createFramebuffer();this.setRenderTarget=function(D,Q=0,ft=0){k=D,O=Q,P=ft;let dt=!0,J=null,wt=!1,Ht=!1;if(D){const Nt=Ft.get(D);if(Nt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(V.FRAMEBUFFER,null),dt=!1;else if(Nt.__webglFramebuffer===void 0)oe.setupRenderTarget(D);else if(Nt.__hasExternalTextures)oe.rebindTextures(D,Ft.get(D.texture).__webglTexture,Ft.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ee=D.depthTexture;if(Nt.__boundDepthTexture!==ee){if(ee!==null&&Ft.has(ee)&&(D.width!==ee.image.width||D.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(D)}}const Zt=D.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ht=!0);const re=Ft.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(re[Q])?J=re[Q][ft]:J=re[Q],wt=!0):D.samples>0&&oe.useMultisampledRTT(D)===!1?J=Ft.get(D).__webglMultisampledFramebuffer:Array.isArray(re)?J=re[ft]:J=re,z.copy(D.viewport),$.copy(D.scissor),it=D.scissorTest}else z.copy(Bt).multiplyScalar(Y).floor(),$.copy($t).multiplyScalar(Y).floor(),it=ae;if(ft!==0&&(J=wo),Ut.bindFramebuffer(V.FRAMEBUFFER,J)&&dt&&Ut.drawBuffers(D,J),Ut.viewport(z),Ut.scissor($),Ut.setScissorTest(it),wt){const Nt=Ft.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Nt.__webglTexture,ft)}else if(Ht){const Nt=Q;for(let Zt=0;Zt<D.textures.length;Zt++){const re=Ft.get(D.textures[Zt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Zt,re.__webglTexture,ft,Nt)}}else if(D!==null&&ft!==0){const Nt=Ft.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,ft)}R=-1},this.readRenderTargetPixels=function(D,Q,ft,dt,J,wt,Ht,kt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ft.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ht!==void 0&&(Nt=Nt[Ht]),Nt){Ut.bindFramebuffer(V.FRAMEBUFFER,Nt);try{const Zt=D.textures[kt],re=Zt.format,ee=Zt.type;if(!Jt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-dt&&ft>=0&&ft<=D.height-J&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt),V.readPixels(Q,ft,dt,J,Lt.convert(re),Lt.convert(ee),wt))}finally{const Zt=k!==null?Ft.get(k).__webglFramebuffer:null;Ut.bindFramebuffer(V.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(D,Q,ft,dt,J,wt,Ht,kt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ft.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ht!==void 0&&(Nt=Nt[Ht]),Nt)if(Q>=0&&Q<=D.width-dt&&ft>=0&&ft<=D.height-J){Ut.bindFramebuffer(V.FRAMEBUFFER,Nt);const Zt=D.textures[kt],re=Zt.format,ee=Zt.type;if(!Jt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,_e),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt),V.readPixels(Q,ft,dt,J,Lt.convert(re),Lt.convert(ee),0);const Ie=k!==null?Ft.get(k).__webglFramebuffer:null;Ut.bindFramebuffer(V.FRAMEBUFFER,Ie);const $e=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Tx(V,$e,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,_e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.deleteBuffer(_e),V.deleteSync($e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,ft=0){const dt=Math.pow(2,-ft),J=Math.floor(D.image.width*dt),wt=Math.floor(D.image.height*dt),Ht=Q!==null?Q.x:0,kt=Q!==null?Q.y:0;oe.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,ft,0,0,Ht,kt,J,wt),Ut.unbindTexture()};const Rr=V.createFramebuffer(),vf=V.createFramebuffer();this.copyTextureToTexture=function(D,Q,ft=null,dt=null,J=0,wt=null){wt===null&&(J!==0?(Fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=J,J=0):wt=0);let Ht,kt,Nt,Zt,re,ee,_e,Ie,$e;const Le=D.isCompressedTexture?D.mipmaps[wt]:D.image;if(ft!==null)Ht=ft.max.x-ft.min.x,kt=ft.max.y-ft.min.y,Nt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,re=ft.min.y,ee=ft.isBox3?ft.min.z:0;else{const hn=Math.pow(2,-J);Ht=Math.floor(Le.width*hn),kt=Math.floor(Le.height*hn),D.isDataArrayTexture?Nt=Le.depth:D.isData3DTexture?Nt=Math.floor(Le.depth*hn):Nt=1,Zt=0,re=0,ee=0}dt!==null?(_e=dt.x,Ie=dt.y,$e=dt.z):(_e=0,Ie=0,$e=0);const we=Lt.convert(Q.format),ne=Lt.convert(Q.type);let Oe;Q.isData3DTexture?(oe.setTexture3D(Q,0),Oe=V.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(oe.setTexture2DArray(Q,0),Oe=V.TEXTURE_2D_ARRAY):(oe.setTexture2D(Q,0),Oe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);const ge=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ai=V.getParameter(V.UNPACK_SKIP_PIXELS),De=V.getParameter(V.UNPACK_SKIP_ROWS),Ha=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Le.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Le.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,re),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ee);const je=D.isDataArrayTexture||D.isData3DTexture,Vn=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const hn=Ft.get(D),on=Ft.get(Q),In=Ft.get(hn.__renderTarget),cs=Ft.get(on.__renderTarget);Ut.bindFramebuffer(V.READ_FRAMEBUFFER,In.__webglFramebuffer),Ut.bindFramebuffer(V.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let Yi=0;Yi<Nt;Yi++)je&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ft.get(D).__webglTexture,J,ee+Yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ft.get(Q).__webglTexture,wt,$e+Yi)),V.blitFramebuffer(Zt,re,Ht,kt,_e,Ie,Ht,kt,V.DEPTH_BUFFER_BIT,V.NEAREST);Ut.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||D.isRenderTargetTexture||Ft.has(D)){const hn=Ft.get(D),on=Ft.get(Q);Ut.bindFramebuffer(V.READ_FRAMEBUFFER,Rr),Ut.bindFramebuffer(V.DRAW_FRAMEBUFFER,vf);for(let In=0;In<Nt;In++)je?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,J,ee+In):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,J),Vn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,wt,$e+In):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,wt),J!==0?V.blitFramebuffer(Zt,re,Ht,kt,_e,Ie,Ht,kt,V.COLOR_BUFFER_BIT,V.NEAREST):Vn?V.copyTexSubImage3D(Oe,wt,_e,Ie,$e+In,Zt,re,Ht,kt):V.copyTexSubImage2D(Oe,wt,_e,Ie,Zt,re,Ht,kt);Ut.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Vn?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(Oe,wt,_e,Ie,$e,Ht,kt,Nt,we,ne,Le.data):Q.isCompressedArrayTexture?V.compressedTexSubImage3D(Oe,wt,_e,Ie,$e,Ht,kt,Nt,we,Le.data):V.texSubImage3D(Oe,wt,_e,Ie,$e,Ht,kt,Nt,we,ne,Le):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,_e,Ie,Ht,kt,we,ne,Le.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,_e,Ie,Le.width,Le.height,we,Le.data):V.texSubImage2D(V.TEXTURE_2D,wt,_e,Ie,Ht,kt,we,ne,Le);V.pixelStorei(V.UNPACK_ROW_LENGTH,ge),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ai),V.pixelStorei(V.UNPACK_SKIP_ROWS,De),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ha),wt===0&&Q.generateMipmaps&&V.generateMipmap(Oe),Ut.unbindTexture()},this.initRenderTarget=function(D){Ft.get(D).__webglFramebuffer===void 0&&oe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?oe.setTextureCube(D,0):D.isData3DTexture?oe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?oe.setTexture2DArray(D,0):oe.setTexture2D(D,0),Ut.unbindTexture()},this.resetState=function(){O=0,P=0,k=null,Ut.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}class qi{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const i=this._partials;let r=0;for(let l=0;l<this._n&&l<32;l++){const c=i[l],d=e+c,h=Math.abs(e)<Math.abs(c)?e-(d-c):c-(d-e);h&&(i[r++]=h),e=d}return i[r]=e,this._n=r+1,this}valueOf(){const e=this._partials;let i=this._n,r,l,c,d=0;if(i>0){for(d=e[--i];i>0&&(r=d,l=e[--i],d=r+l,c=l-(d-r),!c););i>0&&(c<0&&e[i-1]<0||c>0&&e[i-1]>0)&&(l=c*2,r=d+l,l==r-d&&(d=r))}return d}}function*YR(s){for(const e of s)yield*e}function oE(s){return Array.from(YR(s))}var Je=1e-6,Ce=Math.PI,Di=Ce/2,nf=Ce/4,ii=Ce*2,Ua=180/Ce,On=Ce/180,sn=Math.abs,WR=Math.atan,Mo=Math.atan2,en=Math.cos,nn=Math.sin,ZR=Math.sign||function(s){return s>0?1:s<0?-1:0},us=Math.sqrt;function jR(s){return s>1?0:s<-1?Ce:Math.acos(s)}function Hl(s){return s>1?Di:s<-1?-Di:Math.asin(s)}function Gn(){}function af(s,e){s&&u2.hasOwnProperty(s.type)&&u2[s.type](s,e)}var l2={Feature:function(s,e){af(s.geometry,e)},FeatureCollection:function(s,e){for(var i=s.features,r=-1,l=i.length;++r<l;)af(i[r].geometry,e)}},u2={Sphere:function(s,e){e.sphere()},Point:function(s,e){s=s.coordinates,e.point(s[0],s[1],s[2])},MultiPoint:function(s,e){for(var i=s.coordinates,r=-1,l=i.length;++r<l;)s=i[r],e.point(s[0],s[1],s[2])},LineString:function(s,e){mm(s.coordinates,e,0)},MultiLineString:function(s,e){for(var i=s.coordinates,r=-1,l=i.length;++r<l;)mm(i[r],e,0)},Polygon:function(s,e){c2(s.coordinates,e)},MultiPolygon:function(s,e){for(var i=s.coordinates,r=-1,l=i.length;++r<l;)c2(i[r],e)},GeometryCollection:function(s,e){for(var i=s.geometries,r=-1,l=i.length;++r<l;)af(i[r],e)}};function mm(s,e,i){var r=-1,l=s.length-i,c;for(e.lineStart();++r<l;)c=s[r],e.point(c[0],c[1],c[2]);e.lineEnd()}function c2(s,e){var i=-1,r=s.length;for(e.polygonStart();++i<r;)mm(s[i],e,1);e.polygonEnd()}function as(s,e){s&&l2.hasOwnProperty(s.type)?l2[s.type](s,e):af(s,e)}var gm=new qi,rf=new qi,lE,uE,vm,_m,Sm,Gl={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){gm=new qi,Gl.lineStart=KR,Gl.lineEnd=QR},polygonEnd:function(){var s=+gm;rf.add(s<0?ii+s:s),this.lineStart=this.lineEnd=this.point=Gn},sphere:function(){rf.add(ii)}};function KR(){Gl.point=JR}function QR(){cE(lE,uE)}function JR(s,e){Gl.point=cE,lE=s,uE=e,s*=On,e*=On,vm=s,_m=en(e=e/2+nf),Sm=nn(e)}function cE(s,e){s*=On,e*=On,e=e/2+nf;var i=s-vm,r=i>=0?1:-1,l=r*i,c=en(e),d=nn(e),h=Sm*d,v=_m*c+h*en(l),g=h*r*nn(l);gm.add(Mo(g,v)),vm=s,_m=c,Sm=d}function $R(s){return rf=new qi,as(s,Gl),rf*2}function Em(s){return[Mo(s[1],s[0]),Hl(s[2])]}function xo(s){var e=s[0],i=s[1],r=en(i);return[r*en(e),r*nn(e),nn(i)]}function kc(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]}function sf(s,e){return[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]]}function xp(s,e){s[0]+=e[0],s[1]+=e[1],s[2]+=e[2]}function Xc(s,e){return[s[0]*e,s[1]*e,s[2]*e]}function ym(s){var e=us(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]/=e,s[1]/=e,s[2]/=e}function Mm(s,e){function i(r,l){return r=s(r,l),e(r[0],r[1])}return s.invert&&e.invert&&(i.invert=function(r,l){return r=e.invert(r,l),r&&s.invert(r[0],r[1])}),i}function xm(s,e){return sn(s)>Ce&&(s-=Math.round(s/ii)*ii),[s,e]}xm.invert=xm;function tC(s,e,i){return(s%=ii)?e||i?Mm(d2(s),h2(e,i)):d2(s):e||i?h2(e,i):xm}function f2(s){return function(e,i){return e+=s,sn(e)>Ce&&(e-=Math.round(e/ii)*ii),[e,i]}}function d2(s){var e=f2(s);return e.invert=f2(-s),e}function h2(s,e){var i=en(s),r=nn(s),l=en(e),c=nn(e);function d(h,v){var g=en(v),m=en(h)*g,p=nn(h)*g,_=nn(v),M=_*i+m*r;return[Mo(p*l-M*c,m*i-_*r),Hl(M*l+p*c)]}return d.invert=function(h,v){var g=en(v),m=en(h)*g,p=nn(h)*g,_=nn(v),M=_*l-p*c;return[Mo(p*l+_*c,m*i+M*r),Hl(M*i-m*r)]},d}function eC(s,e,i,r,l,c){if(i){var d=en(e),h=nn(e),v=r*i;l==null?(l=e+r*ii,c=e-v/2):(l=p2(d,l),c=p2(d,c),(r>0?l<c:l>c)&&(l+=r*ii));for(var g,m=l;r>0?m>c:m<c;m-=v)g=Em([d,-h*en(m),-h*nn(m)]),s.point(g[0],g[1])}}function p2(s,e){e=xo(e),e[0]-=s,ym(e);var i=jR(-e[1]);return((-e[2]<0?-i:i)+ii-Je)%ii}function fE(){var s=[],e;return{point:function(i,r,l){e.push([i,r,l])},lineStart:function(){s.push(e=[])},lineEnd:Gn,rejoin:function(){s.length>1&&s.push(s.pop().concat(s.shift()))},result:function(){var i=s;return s=[],e=null,i}}}function Jc(s,e){return sn(s[0]-e[0])<Je&&sn(s[1]-e[1])<Je}function qc(s,e,i,r){this.x=s,this.z=e,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function dE(s,e,i,r,l){var c=[],d=[],h,v;if(s.forEach(function(x){if(!((b=x.length-1)<=0)){var b,y=x[0],E=x[b],U;if(Jc(y,E)){if(!y[2]&&!E[2]){for(l.lineStart(),h=0;h<b;++h)l.point((y=x[h])[0],y[1]);l.lineEnd();return}E[0]+=2*Je}c.push(U=new qc(y,x,null,!0)),d.push(U.o=new qc(y,null,U,!1)),c.push(U=new qc(E,x,null,!1)),d.push(U.o=new qc(E,null,U,!0))}}),!!c.length){for(d.sort(e),m2(c),m2(d),h=0,v=d.length;h<v;++h)d[h].e=i=!i;for(var g=c[0],m,p;;){for(var _=g,M=!0;_.v;)if((_=_.n)===g)return;m=_.z,l.lineStart();do{if(_.v=_.o.v=!0,_.e){if(M)for(h=0,v=m.length;h<v;++h)l.point((p=m[h])[0],p[1]);else r(_.x,_.n.x,1,l);_=_.n}else{if(M)for(m=_.p.z,h=m.length-1;h>=0;--h)l.point((p=m[h])[0],p[1]);else r(_.x,_.p.x,-1,l);_=_.p}_=_.o,m=_.z,M=!M}while(!_.v);l.lineEnd()}}}function m2(s){if(e=s.length){for(var e,i=0,r=s[0],l;++i<e;)r.n=l=s[i],l.p=r,r=l;r.n=l=s[0],l.p=r}}function Tp(s){return sn(s[0])<=Ce?s[0]:ZR(s[0])*((sn(s[0])+Ce)%ii-Ce)}function nC(s,e){var i=Tp(e),r=e[1],l=nn(r),c=[nn(i),-en(i),0],d=0,h=0,v=new qi;l===1?r=Di+Je:l===-1&&(r=-Di-Je);for(var g=0,m=s.length;g<m;++g)if(_=(p=s[g]).length)for(var p,_,M=p[_-1],x=Tp(M),b=M[1]/2+nf,y=nn(b),E=en(b),U=0;U<_;++U,x=w,y=O,E=P,M=N){var N=p[U],w=Tp(N),F=N[1]/2+nf,O=nn(F),P=en(F),k=w-x,R=k>=0?1:-1,C=R*k,z=C>Ce,$=y*O;if(v.add(Mo($*R*nn(C),E*P+$*en(C))),d+=z?k+R*ii:k,z^x>=i^w>=i){var it=sf(xo(M),xo(N));ym(it);var ot=sf(c,it);ym(ot);var I=(z^k>=0?-1:1)*Hl(ot[2]);(r>I||r===I&&(it[0]||it[1]))&&(h+=z^k>=0?1:-1)}}return(d<-Je||d<Je&&v<-1e-12)^h&1}function hE(s,e,i,r){return function(l){var c=e(l),d=fE(),h=e(d),v=!1,g,m,p,_={point:M,lineStart:b,lineEnd:y,polygonStart:function(){_.point=E,_.lineStart=U,_.lineEnd=N,m=[],g=[]},polygonEnd:function(){_.point=M,_.lineStart=b,_.lineEnd=y,m=oE(m);var w=nC(g,r);m.length?(v||(l.polygonStart(),v=!0),dE(m,aC,w,i,l)):w&&(v||(l.polygonStart(),v=!0),l.lineStart(),i(null,null,1,l),l.lineEnd()),v&&(l.polygonEnd(),v=!1),m=g=null},sphere:function(){l.polygonStart(),l.lineStart(),i(null,null,1,l),l.lineEnd(),l.polygonEnd()}};function M(w,F){s(w,F)&&l.point(w,F)}function x(w,F){c.point(w,F)}function b(){_.point=x,c.lineStart()}function y(){_.point=M,c.lineEnd()}function E(w,F){p.push([w,F]),h.point(w,F)}function U(){h.lineStart(),p=[]}function N(){E(p[0][0],p[0][1]),h.lineEnd();var w=h.clean(),F=d.result(),O,P=F.length,k,R,C;if(p.pop(),g.push(p),p=null,!!P){if(w&1){if(R=F[0],(k=R.length-1)>0){for(v||(l.polygonStart(),v=!0),l.lineStart(),O=0;O<k;++O)l.point((C=R[O])[0],C[1]);l.lineEnd()}return}P>1&&w&2&&F.push(F.pop().concat(F.shift())),m.push(F.filter(iC))}}return _}}function iC(s){return s.length>1}function aC(s,e){return((s=s.x)[0]<0?s[1]-Di-Je:Di-s[1])-((e=e.x)[0]<0?e[1]-Di-Je:Di-e[1])}const g2=hE(function(){return!0},rC,oC,[-Ce,-Di]);function rC(s){var e=NaN,i=NaN,r=NaN,l;return{lineStart:function(){s.lineStart(),l=1},point:function(c,d){var h=c>0?Ce:-Ce,v=sn(c-e);sn(v-Ce)<Je?(s.point(e,i=(i+d)/2>0?Di:-Di),s.point(r,i),s.lineEnd(),s.lineStart(),s.point(h,i),s.point(c,i),l=0):r!==h&&v>=Ce&&(sn(e-r)<Je&&(e-=r*Je),sn(c-h)<Je&&(c-=h*Je),i=sC(e,i,c,d),s.point(r,i),s.lineEnd(),s.lineStart(),s.point(h,i),l=0),s.point(e=c,i=d),r=h},lineEnd:function(){s.lineEnd(),e=i=NaN},clean:function(){return 2-l}}}function sC(s,e,i,r){var l,c,d=nn(s-i);return sn(d)>Je?WR((nn(e)*(c=en(r))*nn(i)-nn(r)*(l=en(e))*nn(s))/(l*c*d)):(e+r)/2}function oC(s,e,i,r){var l;if(s==null)l=i*Di,r.point(-Ce,l),r.point(0,l),r.point(Ce,l),r.point(Ce,0),r.point(Ce,-l),r.point(0,-l),r.point(-Ce,-l),r.point(-Ce,0),r.point(-Ce,l);else if(sn(s[0]-e[0])>Je){var c=s[0]<e[0]?Ce:-Ce;l=i*c/2,r.point(-c,l),r.point(0,l),r.point(c,l)}else r.point(e[0],e[1])}function lC(s){var e=en(s),i=2*On,r=e>0,l=sn(e)>Je;function c(m,p,_,M){eC(M,s,i,_,m,p)}function d(m,p){return en(m)*en(p)>e}function h(m){var p,_,M,x,b;return{lineStart:function(){x=M=!1,b=1},point:function(y,E){var U=[y,E],N,w=d(y,E),F=r?w?0:g(y,E):w?g(y+(y<0?Ce:-Ce),E):0;if(!p&&(x=M=w)&&m.lineStart(),w!==M&&(N=v(p,U),(!N||Jc(p,N)||Jc(U,N))&&(U[2]=1)),w!==M)b=0,w?(m.lineStart(),N=v(U,p),m.point(N[0],N[1])):(N=v(p,U),m.point(N[0],N[1],2),m.lineEnd()),p=N;else if(l&&p&&r^w){var O;!(F&_)&&(O=v(U,p,!0))&&(b=0,r?(m.lineStart(),m.point(O[0][0],O[0][1]),m.point(O[1][0],O[1][1]),m.lineEnd()):(m.point(O[1][0],O[1][1]),m.lineEnd(),m.lineStart(),m.point(O[0][0],O[0][1],3)))}w&&(!p||!Jc(p,U))&&m.point(U[0],U[1]),p=U,M=w,_=F},lineEnd:function(){M&&m.lineEnd(),p=null},clean:function(){return b|(x&&M)<<1}}}function v(m,p,_){var M=xo(m),x=xo(p),b=[1,0,0],y=sf(M,x),E=kc(y,y),U=y[0],N=E-U*U;if(!N)return!_&&m;var w=e*E/N,F=-e*U/N,O=sf(b,y),P=Xc(b,w),k=Xc(y,F);xp(P,k);var R=O,C=kc(P,R),z=kc(R,R),$=C*C-z*(kc(P,P)-1);if(!($<0)){var it=us($),ot=Xc(R,(-C-it)/z);if(xp(ot,P),ot=Em(ot),!_)return ot;var I=m[0],G=p[0],st=m[1],Y=p[1],vt;G<I&&(vt=I,I=G,G=vt);var _t=G-I,Bt=sn(_t-Ce)<Je,$t=Bt||_t<Je;if(!Bt&&Y<st&&(vt=st,st=Y,Y=vt),$t?Bt?st+Y>0^ot[1]<(sn(ot[0]-I)<Je?st:Y):st<=ot[1]&&ot[1]<=Y:_t>Ce^(I<=ot[0]&&ot[0]<=G)){var ae=Xc(R,(-C+it)/z);return xp(ae,P),[ot,Em(ae)]}}}function g(m,p){var _=r?s:Ce-s,M=0;return m<-_?M|=1:m>_&&(M|=2),p<-_?M|=4:p>_&&(M|=8),M}return hE(d,h,c,r?[0,-s]:[-Ce,s-Ce])}function uC(s,e,i,r,l,c){var d=s[0],h=s[1],v=e[0],g=e[1],m=0,p=1,_=v-d,M=g-h,x;if(x=i-d,!(!_&&x>0)){if(x/=_,_<0){if(x<m)return;x<p&&(p=x)}else if(_>0){if(x>p)return;x>m&&(m=x)}if(x=l-d,!(!_&&x<0)){if(x/=_,_<0){if(x>p)return;x>m&&(m=x)}else if(_>0){if(x<m)return;x<p&&(p=x)}if(x=r-h,!(!M&&x>0)){if(x/=M,M<0){if(x<m)return;x<p&&(p=x)}else if(M>0){if(x>p)return;x>m&&(m=x)}if(x=c-h,!(!M&&x<0)){if(x/=M,M<0){if(x>p)return;x>m&&(m=x)}else if(M>0){if(x<m)return;x<p&&(p=x)}return m>0&&(s[0]=d+m*_,s[1]=h+m*M),p<1&&(e[0]=d+p*_,e[1]=h+p*M),!0}}}}}var Tl=1e9,Yc=-Tl;function cC(s,e,i,r){function l(g,m){return s<=g&&g<=i&&e<=m&&m<=r}function c(g,m,p,_){var M=0,x=0;if(g==null||(M=d(g,p))!==(x=d(m,p))||v(g,m)<0^p>0)do _.point(M===0||M===3?s:i,M>1?r:e);while((M=(M+p+4)%4)!==x);else _.point(m[0],m[1])}function d(g,m){return sn(g[0]-s)<Je?m>0?0:3:sn(g[0]-i)<Je?m>0?2:1:sn(g[1]-e)<Je?m>0?1:0:m>0?3:2}function h(g,m){return v(g.x,m.x)}function v(g,m){var p=d(g,1),_=d(m,1);return p!==_?p-_:p===0?m[1]-g[1]:p===1?g[0]-m[0]:p===2?g[1]-m[1]:m[0]-g[0]}return function(g){var m=g,p=fE(),_,M,x,b,y,E,U,N,w,F,O,P={point:k,lineStart:$,lineEnd:it,polygonStart:C,polygonEnd:z};function k(I,G){l(I,G)&&m.point(I,G)}function R(){for(var I=0,G=0,st=M.length;G<st;++G)for(var Y=M[G],vt=1,_t=Y.length,Bt=Y[0],$t,ae,H=Bt[0],ct=Bt[1];vt<_t;++vt)$t=H,ae=ct,Bt=Y[vt],H=Bt[0],ct=Bt[1],ae<=r?ct>r&&(H-$t)*(r-ae)>(ct-ae)*(s-$t)&&++I:ct<=r&&(H-$t)*(r-ae)<(ct-ae)*(s-$t)&&--I;return I}function C(){m=p,_=[],M=[],O=!0}function z(){var I=R(),G=O&&I,st=(_=oE(_)).length;(G||st)&&(g.polygonStart(),G&&(g.lineStart(),c(null,null,1,g),g.lineEnd()),st&&dE(_,h,I,c,g),g.polygonEnd()),m=g,_=M=x=null}function $(){P.point=ot,M&&M.push(x=[]),F=!0,w=!1,U=N=NaN}function it(){_&&(ot(b,y),E&&w&&p.rejoin(),_.push(p.result())),P.point=k,w&&m.lineEnd()}function ot(I,G){var st=l(I,G);if(M&&x.push([I,G]),F)b=I,y=G,E=st,F=!1,st&&(m.lineStart(),m.point(I,G));else if(st&&w)m.point(I,G);else{var Y=[U=Math.max(Yc,Math.min(Tl,U)),N=Math.max(Yc,Math.min(Tl,N))],vt=[I=Math.max(Yc,Math.min(Tl,I)),G=Math.max(Yc,Math.min(Tl,G))];uC(Y,vt,s,e,i,r)?(w||(m.lineStart(),m.point(Y[0],Y[1])),m.point(vt[0],vt[1]),st||m.lineEnd(),O=!1):st&&(m.lineStart(),m.point(I,G),O=!1)}U=I,N=G,w=st}return P}}const Tm=s=>s;var bp=new qi,bm=new qi,pE,mE,Am,Rm,Oa={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){Oa.lineStart=fC,Oa.lineEnd=hC},polygonEnd:function(){Oa.lineStart=Oa.lineEnd=Oa.point=Gn,bp.add(sn(bm)),bm=new qi},result:function(){var s=bp/2;return bp=new qi,s}};function fC(){Oa.point=dC}function dC(s,e){Oa.point=gE,pE=Am=s,mE=Rm=e}function gE(s,e){bm.add(Rm*s-Am*e),Am=s,Rm=e}function hC(){gE(pE,mE)}var To=1/0,of=To,Vl=-To,lf=Vl,uf={point:pC,lineStart:Gn,lineEnd:Gn,polygonStart:Gn,polygonEnd:Gn,result:function(){var s=[[To,of],[Vl,lf]];return Vl=lf=-(of=To=1/0),s}};function pC(s,e){s<To&&(To=s),s>Vl&&(Vl=s),e<of&&(of=e),e>lf&&(lf=e)}var Cm=0,wm=0,bl=0,cf=0,ff=0,po=0,Dm=0,Um=0,Al=0,vE,_E,ra,sa,Ci={point:ls,lineStart:v2,lineEnd:_2,polygonStart:function(){Ci.lineStart=vC,Ci.lineEnd=_C},polygonEnd:function(){Ci.point=ls,Ci.lineStart=v2,Ci.lineEnd=_2},result:function(){var s=Al?[Dm/Al,Um/Al]:po?[cf/po,ff/po]:bl?[Cm/bl,wm/bl]:[NaN,NaN];return Cm=wm=bl=cf=ff=po=Dm=Um=Al=0,s}};function ls(s,e){Cm+=s,wm+=e,++bl}function v2(){Ci.point=mC}function mC(s,e){Ci.point=gC,ls(ra=s,sa=e)}function gC(s,e){var i=s-ra,r=e-sa,l=us(i*i+r*r);cf+=l*(ra+s)/2,ff+=l*(sa+e)/2,po+=l,ls(ra=s,sa=e)}function _2(){Ci.point=ls}function vC(){Ci.point=SC}function _C(){SE(vE,_E)}function SC(s,e){Ci.point=SE,ls(vE=ra=s,_E=sa=e)}function SE(s,e){var i=s-ra,r=e-sa,l=us(i*i+r*r);cf+=l*(ra+s)/2,ff+=l*(sa+e)/2,po+=l,l=sa*s-ra*e,Dm+=l*(ra+s),Um+=l*(sa+e),Al+=l*3,ls(ra=s,sa=e)}function EE(s){this._context=s}EE.prototype={_radius:4.5,pointRadius:function(s){return this._radius=s,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(s,e){switch(this._point){case 0:{this._context.moveTo(s,e),this._point=1;break}case 1:{this._context.lineTo(s,e);break}default:{this._context.moveTo(s+this._radius,e),this._context.arc(s,e,this._radius,0,ii);break}}},result:Gn};var Nm=new qi,Ap,yE,ME,Rl,Cl,kl={point:Gn,lineStart:function(){kl.point=EC},lineEnd:function(){Ap&&xE(yE,ME),kl.point=Gn},polygonStart:function(){Ap=!0},polygonEnd:function(){Ap=null},result:function(){var s=+Nm;return Nm=new qi,s}};function EC(s,e){kl.point=xE,yE=Rl=s,ME=Cl=e}function xE(s,e){Rl-=s,Cl-=e,Nm.add(us(Rl*Rl+Cl*Cl)),Rl=s,Cl=e}let S2,df,E2,y2;class M2{constructor(e){this._append=e==null?TE:yC(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,i){switch(this._point){case 0:{this._append`M${e},${i}`,this._point=1;break}case 1:{this._append`L${e},${i}`;break}default:{if(this._append`M${e},${i}`,this._radius!==E2||this._append!==df){const r=this._radius,l=this._;this._="",this._append`m0,${r}a${r},${r} 0 1,1 0,${-2*r}a${r},${r} 0 1,1 0,${2*r}z`,E2=r,df=this._append,y2=this._,this._=l}this._+=y2;break}}}result(){const e=this._;return this._="",e.length?e:null}}function TE(s){let e=1;this._+=s[0];for(const i=s.length;e<i;++e)this._+=arguments[e]+s[e]}function yC(s){const e=Math.floor(s);if(!(e>=0))throw new RangeError(`invalid digits: ${s}`);if(e>15)return TE;if(e!==S2){const i=10**e;S2=e,df=function(l){let c=1;this._+=l[0];for(const d=l.length;c<d;++c)this._+=Math.round(arguments[c]*i)/i+l[c]}}return df}function x2(s,e){let i=3,r=4.5,l,c;function d(h){return h&&(typeof r=="function"&&c.pointRadius(+r.apply(this,arguments)),as(h,l(c))),c.result()}return d.area=function(h){return as(h,l(Oa)),Oa.result()},d.measure=function(h){return as(h,l(kl)),kl.result()},d.bounds=function(h){return as(h,l(uf)),uf.result()},d.centroid=function(h){return as(h,l(Ci)),Ci.result()},d.projection=function(h){return arguments.length?(l=h==null?(s=null,Tm):(s=h).stream,d):s},d.context=function(h){return arguments.length?(c=h==null?(e=null,new M2(i)):new EE(e=h),typeof r!="function"&&c.pointRadius(r),d):e},d.pointRadius=function(h){return arguments.length?(r=typeof h=="function"?h:(c.pointRadius(+h),+h),d):r},d.digits=function(h){if(!arguments.length)return i;if(h==null)i=null;else{const v=Math.floor(h);if(!(v>=0))throw new RangeError(`invalid digits: ${h}`);i=v}return e===null&&(c=new M2(i)),d},d.projection(s).digits(i).context(e)}function jm(s){return function(e){var i=new Lm;for(var r in s)i[r]=s[r];return i.stream=e,i}}function Lm(){}Lm.prototype={constructor:Lm,point:function(s,e){this.stream.point(s,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Km(s,e,i){var r=s.clipExtent&&s.clipExtent();return s.scale(150).translate([0,0]),r!=null&&s.clipExtent(null),as(i,s.stream(uf)),e(uf.result()),r!=null&&s.clipExtent(r),s}function bE(s,e,i){return Km(s,function(r){var l=e[1][0]-e[0][0],c=e[1][1]-e[0][1],d=Math.min(l/(r[1][0]-r[0][0]),c/(r[1][1]-r[0][1])),h=+e[0][0]+(l-d*(r[1][0]+r[0][0]))/2,v=+e[0][1]+(c-d*(r[1][1]+r[0][1]))/2;s.scale(150*d).translate([h,v])},i)}function MC(s,e,i){return bE(s,[[0,0],e],i)}function xC(s,e,i){return Km(s,function(r){var l=+e,c=l/(r[1][0]-r[0][0]),d=(l-c*(r[1][0]+r[0][0]))/2,h=-c*r[0][1];s.scale(150*c).translate([d,h])},i)}function TC(s,e,i){return Km(s,function(r){var l=+e,c=l/(r[1][1]-r[0][1]),d=-c*r[0][0],h=(l-c*(r[1][1]+r[0][1]))/2;s.scale(150*c).translate([d,h])},i)}var T2=16,bC=en(30*On);function b2(s,e){return+e?RC(s,e):AC(s)}function AC(s){return jm({point:function(e,i){e=s(e,i),this.stream.point(e[0],e[1])}})}function RC(s,e){function i(r,l,c,d,h,v,g,m,p,_,M,x,b,y){var E=g-r,U=m-l,N=E*E+U*U;if(N>4*e&&b--){var w=d+_,F=h+M,O=v+x,P=us(w*w+F*F+O*O),k=Hl(O/=P),R=sn(sn(O)-1)<Je||sn(c-p)<Je?(c+p)/2:Mo(F,w),C=s(R,k),z=C[0],$=C[1],it=z-r,ot=$-l,I=U*it-E*ot;(I*I/N>e||sn((E*it+U*ot)/N-.5)>.3||d*_+h*M+v*x<bC)&&(i(r,l,c,d,h,v,z,$,R,w/=P,F/=P,O,b,y),y.point(z,$),i(z,$,R,w,F,O,g,m,p,_,M,x,b,y))}}return function(r){var l,c,d,h,v,g,m,p,_,M,x,b,y={point:E,lineStart:U,lineEnd:w,polygonStart:function(){r.polygonStart(),y.lineStart=F},polygonEnd:function(){r.polygonEnd(),y.lineStart=U}};function E(k,R){k=s(k,R),r.point(k[0],k[1])}function U(){p=NaN,y.point=N,r.lineStart()}function N(k,R){var C=xo([k,R]),z=s(k,R);i(p,_,m,M,x,b,p=z[0],_=z[1],m=k,M=C[0],x=C[1],b=C[2],T2,r),r.point(p,_)}function w(){y.point=E,r.lineEnd()}function F(){U(),y.point=O,y.lineEnd=P}function O(k,R){N(l=k,R),c=p,d=_,h=M,v=x,g=b,y.point=N}function P(){i(p,_,m,M,x,b,c,d,l,h,v,g,T2,r),y.lineEnd=w,w()}return y}}var CC=jm({point:function(s,e){this.stream.point(s*On,e*On)}});function wC(s){return jm({point:function(e,i){var r=s(e,i);return this.stream.point(r[0],r[1])}})}function DC(s,e,i,r,l){function c(d,h){return d*=r,h*=l,[e+s*d,i-s*h]}return c.invert=function(d,h){return[(d-e)/s*r,(i-h)/s*l]},c}function A2(s,e,i,r,l,c){if(!c)return DC(s,e,i,r,l);var d=en(c),h=nn(c),v=d*s,g=h*s,m=d/s,p=h/s,_=(h*i-d*e)/s,M=(h*e+d*i)/s;function x(b,y){return b*=r,y*=l,[v*b-g*y+e,i-g*b-v*y]}return x.invert=function(b,y){return[r*(m*b-p*y+_),l*(M-p*b-m*y)]},x}function UC(s){return NC(function(){return s})()}function NC(s){var e,i=150,r=480,l=250,c=0,d=0,h=0,v=0,g=0,m,p=0,_=1,M=1,x=null,b=g2,y=null,E,U,N,w=Tm,F=.5,O,P,k,R,C;function z(I){return k(I[0]*On,I[1]*On)}function $(I){return I=k.invert(I[0],I[1]),I&&[I[0]*Ua,I[1]*Ua]}z.stream=function(I){return R&&C===I?R:R=CC(wC(m)(b(O(w(C=I)))))},z.preclip=function(I){return arguments.length?(b=I,x=void 0,ot()):b},z.postclip=function(I){return arguments.length?(w=I,y=E=U=N=null,ot()):w},z.clipAngle=function(I){return arguments.length?(b=+I?lC(x=I*On):(x=null,g2),ot()):x*Ua},z.clipExtent=function(I){return arguments.length?(w=I==null?(y=E=U=N=null,Tm):cC(y=+I[0][0],E=+I[0][1],U=+I[1][0],N=+I[1][1]),ot()):y==null?null:[[y,E],[U,N]]},z.scale=function(I){return arguments.length?(i=+I,it()):i},z.translate=function(I){return arguments.length?(r=+I[0],l=+I[1],it()):[r,l]},z.center=function(I){return arguments.length?(c=I[0]%360*On,d=I[1]%360*On,it()):[c*Ua,d*Ua]},z.rotate=function(I){return arguments.length?(h=I[0]%360*On,v=I[1]%360*On,g=I.length>2?I[2]%360*On:0,it()):[h*Ua,v*Ua,g*Ua]},z.angle=function(I){return arguments.length?(p=I%360*On,it()):p*Ua},z.reflectX=function(I){return arguments.length?(_=I?-1:1,it()):_<0},z.reflectY=function(I){return arguments.length?(M=I?-1:1,it()):M<0},z.precision=function(I){return arguments.length?(O=b2(P,F=I*I),ot()):us(F)},z.fitExtent=function(I,G){return bE(z,I,G)},z.fitSize=function(I,G){return MC(z,I,G)},z.fitWidth=function(I,G){return xC(z,I,G)},z.fitHeight=function(I,G){return TC(z,I,G)};function it(){var I=A2(i,0,0,_,M,p).apply(null,e(c,d)),G=A2(i,r-I[0],l-I[1],_,M,p);return m=tC(h,v,g),P=Mm(e,G),k=Mm(m,P),O=b2(P,F),ot()}function ot(){return R=C=null,z}return function(){return e=s.apply(this,arguments),z.invert=e.invert&&$,it()}}function Om(s,e){return[s,e]}Om.invert=Om;function LC(){return UC(Om).scale(152.63)}function OC({colorMap:s,reliefMap:e,relief:i,rimStrength:r}){return new Xi({uniforms:{colorMap:{value:s},reliefMap:{value:e},relief:{value:i},rimStrength:{value:r}},vertexShader:`
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
        color *= 1.0 - bevel * land * min(relief * 18.0, 0.65);
        color += vec3(0.06) * max(bevelLight, 0.0) * land * min(relief * 85.0, 1.0);
        color += vec3(lighting.y * mix(0.20, 0.075, land));
        float coastShadow = (1.0 - land) * coast.a;
        color *= 1.0 - coastShadow * min(relief * 35.0, 0.65);
        color += vec3(lighting.z) * (1.0 - land * 0.88);
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `})}const R2=[["AUS",-33.8688,151.2093],["GBR",51.5074,-.1278],["CAN",43.6532,-79.3832],["USA",38.9072,-77.0369],["NZL",-36.8485,174.7633],["AUT",48.2082,16.3738],["BEL",50.8503,4.3517],["DEU",52.52,13.405],["DNK",55.4038,10.4024],["IRL",53.3498,-6.2603],["ITA",41.9028,12.4964],["ISL",64.1265,-21.8174],["ISR",32.0853,34.7818],["NLD",52.3676,4.9041],["NOR",59.9139,10.7522],["SVN",46.0569,14.5058],["FIN",60.1699,24.9384],["FRA",48.8566,2.3522],["CZE",50.0755,14.4378],["SWE",59.3293,18.0686],["CHE",46.948,7.4474],["ESP",40.4168,-3.7038]];function PC(s,e,i=1.001){const r=Ul.degToRad(s),l=Ul.degToRad(e);return[i*Math.cos(r)*Math.cos(l),i*Math.sin(r),-i*Math.cos(r)*Math.sin(l)]}function zC(){const s=new ua;s.setAttribute("position",new Ui(R2.flatMap(([,r,l])=>PC(r,l)),3)),s.setAttribute("startTime",new Ui(R2.map(()=>-100),1).setUsage(sx));const e=new Xi({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{time:{value:0},pixelRatio:{value:1},duration:{value:1.5},diameter:{value:32},dotDiameter:{value:5},lineWidth:{value:1.4},reducedMotion:{value:0},color:{value:new He("#FFFFFF")},canvasSize:{value:new ze(1,1)},sphereRadius:{value:1}},vertexShader:`
      uniform float time, pixelRatio, duration, diameter, reducedMotion;
      attribute float startTime;
      varying float age, visibility;
      void main(){
        vec4 view=modelViewMatrix*vec4(position,1.0);
        float facing=dot(normalize(normalMatrix*normalize(position)),normalize(-view.xyz));
        visibility=smoothstep(0.0,.10,facing);
        age=time-startTime;
        // Inactive/back-facing sprites are clipped before rasterisation.
        if(visibility<=0.0 || (reducedMotion<.5 && (age<0.0 || age>=duration))){
          gl_Position=vec4(2.0,2.0,2.0,1.0); gl_PointSize=1.0; return;
        }
        gl_Position=projectionMatrix*view;
        gl_PointSize=(diameter+2.0)*pixelRatio;
      }
    `,fragmentShader:`
      uniform float duration, diameter, dotDiameter, lineWidth, reducedMotion, sphereRadius;
      uniform vec2 canvasSize;
      uniform vec3 color;
      varying float age, visibility;
      void main(){
        // Explicit sphere clipping replaces depth testing for the flat sprites:
        // rings can sit over curved land without half the outline being buried.
        float silhouette=length(gl_FragCoord.xy-canvasSize*.5);
        if(silhouette>=sphereRadius || visibility<=0.0) discard;
        float r=length(gl_PointCoord-.5)*(diameter+2.0);
        float dot=1.0-smoothstep(dotDiameter*.5-.4,dotDiameter*.5+.4,r);
        float alpha;
        if(reducedMotion>.5){
          alpha=dot*.65;
        }else{
          if(age<0.0 || age>=duration) discard;
          float progress=age/duration;
          float enter=smoothstep(0.0,.10,age);
          float center=enter*(1.0-smoothstep(.48,.92,progress));
          float eased=1.0-pow(1.0-progress,3.0);
          float ringRadius=mix(dotDiameter*.5,diameter*.5,eased);
          float ring=1.0-smoothstep(lineWidth*.5-.3,lineWidth*.5+.3,abs(r-ringRadius));
          float ringAlpha=enter*pow(1.0-progress,1.35)*.85;
          float glow=exp(-r*r/(dotDiameter*dotDiameter*.6))*.12*center;
          alpha=max(dot*center*.95,ring*ringAlpha)+glow;
        }
        alpha*=visibility*(1.0-smoothstep(sphereRadius-1.0,sphereRadius,silhouette));
        if(alpha<.003) discard;
        gl_FragColor=vec4(color,min(alpha,1.0));
        #include <colorspace_fragment>
      }
    `}),i=new tT(s,e);return i.renderOrder=1,i.userData.pulses={next:0,cursor:0,matrix:new dn,normal:new pe,position:new ut,direction:new ut,eye:new ut},i}function IC(s,{time:e,camera:i,mobile:r=!1,reducedMotion:l=!1}){const c=s.material.uniforms;if(c.time.value=e,c.duration.value=r?1.35:1.5,c.diameter.value=r?26:32,c.dotDiameter.value=r?4:5,c.lineWidth.value=r?1.2:1.4,c.reducedMotion.value=l?1:0,l)return;const d=s.userData.pulses;if(e<d.next)return;d.next=e+(r?.85:.55),s.updateWorldMatrix(!0,!1),i.updateWorldMatrix(!0,!1),d.matrix.multiplyMatrices(i.matrixWorldInverse,s.matrixWorld),d.normal.getNormalMatrix(d.matrix);const h=s.geometry.attributes.position,v=s.geometry.attributes.startTime;for(let g=0;g<h.count;g++){const m=(d.cursor+g)%h.count;if(!(e-v.getX(m)<c.duration.value+.8)&&(d.position.fromBufferAttribute(h,m).applyMatrix4(d.matrix),d.direction.fromBufferAttribute(h,m).normalize().applyMatrix3(d.normal).normalize(),d.eye.copy(d.position).negate().normalize(),!(d.direction.dot(d.eye)<.04))){v.setX(m,e),v.needsUpdate=!0,d.cursor=(m+1)%h.count;break}}}function BC(s,{width:e,height:i,pixelRatio:r,camera:l}){const c=s.material.uniforms;c.pixelRatio.value=r,c.canvasSize.value.set(e*r,i*r),c.sphereRadius.value=i*r*.5*l.projectionMatrix.elements[5]/Math.sqrt(l.position.lengthSq()-1)}function AE({dataUrl:s="/data/countries.geojson",rotationPeriod:e=60,paused:i=!1,interactive:r=!0,showMarkers:l=!0,landColor:c="#03FA7F",oceanColor:d="#212121",borderColor:h="#02e573",relief:v=.022,rimStrength:g=0,maxPixelRatio:m=2,textureWidth:p=4096,className:_="",style:M,onFrame:x,onReady:b}){const y=Fe.useRef(null),E=Fe.useRef({paused:i,rotationPeriod:e,onFrame:x,onReady:b}),U=Fe.useRef(()=>{}),[N,w]=Fe.useState("");return Fe.useEffect(()=>{E.current={paused:i,rotationPeriod:e,onFrame:x,onReady:b},U.current()},[i,e,x,b]),Fe.useEffect(()=>{const F=y.current,O=new AbortController,P=window.matchMedia("(prefers-reduced-motion: reduce)"),k=[];let R,C,z,$=()=>{},it=!1,ot=null,I=null,G=!0,st=0,Y=!1;const vt=()=>{!it&&ot===null&&(ot=requestAnimationFrame(Bt))},_t=()=>{I=null,vt()};U.current=_t;function Bt(nt){if(ot=null,it||!R||!H||document.hidden||!G){I=null;return}const bt=I===null?0:(nt-I)/1e3;I=nt;const{paused:Mt,rotationPeriod:Rt,onFrame:xt}=E.current,Xt=!Mt&&!Y&&!P.matches&&Number.isFinite(Rt)&&Rt>0;Xt&&(H.rotation.y+=Math.PI*2/Rt*bt),st+=bt,ct&&IC(ct,{time:st,camera:ae,mobile:window.innerWidth<=760,reducedMotion:P.matches}),R.render($t,ae),xt?.({timestamp:nt,delta:bt,elapsed:st,rotation:H.rotation.y,axisTilt:H.rotation.x,drawCalls:R.info.render.calls,triangles:R.info.render.triangles,textureWidth:H.material.uniforms.colorMap.value.image.width,pixelRatio:R.getPixelRatio(),markerCount:ct?.geometry.attributes.position.count||0}),Xt?vt():I=null}let $t,ae,H,ct;async function tt(){try{w("");const nt=await fetch(s,{signal:O.signal});if(!nt.ok)throw new Error(`Geography request failed (${nt.status})`);const bt=await nt.json();if(it)return;bt.features=bt.features.filter(Tt=>!["RUS","BLR"].includes(Tt.properties.iso_a3??Tt.properties["ISO3166-1-Alpha-3"]));for(const Tt of bt.features){const yt=Tt.geometry.type==="Polygon"?[Tt.geometry.coordinates]:Tt.geometry.coordinates;for(const Vt of yt)Vt.forEach((Wt,At)=>{const zt=$R({type:"Polygon",coordinates:[Wt]});(At===0&&zt>2*Math.PI||At>0&&zt<2*Math.PI)&&Wt.reverse()})}R=new sE({alpha:!0,antialias:!0,powerPreference:"low-power"}),R.setPixelRatio(Math.min(window.devicePixelRatio||1,Math.max(1,m))),R.setClearColor(0,0);const Mt=Math.min(R.capabilities.maxTextureSize,4096,Math.max(512,Math.round(p))),Rt=document.createElement("canvas");Rt.width=Mt,Rt.height=Mt/2;const xt=Rt.getContext("2d");xt.fillStyle=d,xt.fillRect(0,0,Mt,Mt/2);const Xt=LC().precision(.1).scale(Mt/(2*Math.PI)).translate([Mt/2,Mt/4]),V=x2(Xt,xt);xt.fillStyle=c,xt.strokeStyle=h,xt.lineWidth=Mt/4096*1.5;for(const Tt of bt.features)xt.beginPath(),V(Tt),xt.fill(),xt.stroke();const Re=document.createElement("canvas");Re.width=Mt,Re.height=Mt/2;const Qt=Re.getContext("2d");Qt.fillStyle="#000",Qt.fillRect(0,0,Mt,Mt/2),Qt.fillStyle="#fff";const Jt=x2(Xt,Qt);for(const Tt of bt.features)Qt.beginPath(),Jt(Tt),Qt.fill(),Qt.strokeStyle="#fff",Qt.lineWidth=.4,Qt.stroke();const Ut=Qt.getImageData(0,0,Mt,Mt/2),se=Ut.data.slice(),Ft=Re.height,oe=(Tt,yt)=>se[(Math.max(0,Math.min(Ft-1,yt))*Mt+(Tt+Mt)%Mt)*4],be=Math.max(1,Math.round(Mt/2048));for(let Tt=0;Tt<Ft;Tt++){for(let yt=0;yt<Mt;yt++){const Vt=(Tt*Mt+yt)*4;Ut.data[Vt+1]=Math.round(127.5+(oe(yt+be,Tt)-oe(yt-be,Tt))/2),Ut.data[Vt+2]=Math.round(127.5+(oe(yt,Tt-be)-oe(yt,Tt+be))/2),Ut.data[Vt+3]=oe(yt-2*be,Tt-2*be)}if((Tt+1)%64===0&&(await new Promise(yt=>setTimeout(yt,0)),it))return}const Ge=new Uint8Array(Ut.data.length);for(let Tt=0;Tt<Ft;Tt++)Ge.set(Ut.data.subarray(Tt*Mt*4,(Tt+1)*Mt*4),(Ft-1-Tt)*Mt*4);const L=new jx(Ge,Mt,Ft,wi);L.generateMipmaps=!0,L.minFilter=Er,L.wrapS=Nl,L.magFilter=Vi,L.needsUpdate=!0,k.push(L);const A=new eT(Rt);A.colorSpace=ti,k.push(A),A.wrapS=Nl,A.anisotropy=Math.min(8,R.capabilities.getMaxAnisotropy()),F.appendChild(R.domElement),$t=new Q2,ae=new Ri(34,1,.1,20),ae.position.set(0,0,3.7);const at=new Ym(1,128,96),pt=OC({colorMap:A,reliefMap:L,textureWidth:Mt,relief:Math.max(0,Math.min(.03,v)),rimStrength:Math.max(0,Math.min(1,g))});k.push(at,pt),H=new ki(at,pt),H.rotation.set(.5,-1.45,0),$t.add(H),l&&(ct=zC(),H.add(ct),k.push(ct.geometry,ct.material));const Et=R.domElement;if(Et.setAttribute("role","img"),Et.setAttribute("aria-label",r?"Animated globe. Drag horizontally or use left and right arrow keys to turn it.":"Animated globe."),r){Et.tabIndex=0;let Tt=null,yt=0;const Vt=Lt=>{!Lt.isPrimary||Lt.button!==0||(Tt=Lt.pointerId,yt=Lt.clientX,Y=!0,_t(),Et.setPointerCapture(Tt))},Wt=Lt=>{Lt.pointerId===Tt&&(H.rotation.y+=(Lt.clientX-yt)/Math.max(1,F.clientWidth)*Math.PI*1.3,yt=Lt.clientX,vt())},At=Lt=>{Lt?.pointerId!==void 0&&Lt.pointerId!==Tt||(Tt=null,Y=!1,_t())},ie={pointerdown:Vt,pointermove:Wt,pointerup:At,pointercancel:At,lostpointercapture:At,keydown:Lt=>{Lt.key!=="ArrowLeft"&&Lt.key!=="ArrowRight"||(Lt.preventDefault(),H.rotation.y+=(Lt.key==="ArrowLeft"?-1:1)*Math.PI/18,vt())}};for(const[Lt,It]of Object.entries(ie))Et.addEventListener(Lt,It);window.addEventListener("blur",At),$=()=>{window.removeEventListener("blur",At);for(const[Lt,It]of Object.entries(ie))Et.removeEventListener(Lt,It)}}const ht=()=>{const{width:Tt,height:yt}=F.getBoundingClientRect();if(!(!Tt||!yt)){if(R.setPixelRatio(Math.min(window.devicePixelRatio||1,Math.max(1,m))),R.setSize(Tt,yt),ae.aspect=Tt/yt,ae.updateProjectionMatrix(),ae.position.setLength(3.7/Math.min(1,ae.aspect)),ct){const Vt=R.getPixelRatio();BC(ct,{width:R.domElement.width/Vt,height:R.domElement.height/Vt,pixelRatio:Vt,camera:ae})}_t()}};C=new ResizeObserver(ht),C.observe(F),ht(),z=new IntersectionObserver(([Tt])=>{G=Tt.isIntersecting,_t()}),z.observe(F),document.addEventListener("visibilitychange",_t),P.addEventListener("change",_t),E.current.onReady?.(),vt()}catch(nt){!it&&nt.name!=="AbortError"&&w("The globe could not load. Check the geography URL and WebGL browser support.")}}return tt(),()=>{it=!0,O.abort(),cancelAnimationFrame(ot),U.current=()=>{},document.removeEventListener("visibilitychange",_t),P.removeEventListener("change",_t),C?.disconnect(),z?.disconnect(),$(),k.forEach(nt=>nt.dispose()),R?.dispose(),R?.domElement.remove()}},[s,r,l,c,d,h,v,g,m,p]),K.createElement("div",{className:`expla-globe ${_}`,style:M,ref:y,"data-interactive":r},N&&K.createElement("p",{className:"expla-globe__error",role:"alert"},N))}function FC(){const s=Fe.useRef(null),[e,i]=Fe.useState(!1);return Fe.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.disconnect())},{threshold:.3});return r.observe(s.current),()=>r.disconnect()},[]),[s,e]}const C2=""+new URL("top-100-background-BPLwb_hO.png",import.meta.url).href;function HC(){const s=Fe.useRef(null);return Fe.useEffect(()=>{const e=s.current,i=e.parentElement,r=matchMedia("(prefers-reduced-motion: reduce)");let l,c,d,h=null,v=null,g=0,m=!0,p=0,_,M=!1,x=!1;const b=new ze(.5,.5),y=()=>{h===null&&(h=requestAnimationFrame(w))},E=()=>{v=null,y()};let U,N;function w(R){if(h=null,!m||document.hidden||!l||!M){v=null;return}const C=v===null?0:Math.min((R-v)/1e3,.1);v=R,r.matches||(g+=C),d.uniforms.time.value=r.matches?0:g,r.matches?(d.uniforms.pointer.value.set(.5,.5),d.uniforms.activity.value=0):(p*=Math.exp(-C*.8),d.uniforms.pointer.value.lerp(b,1-Math.exp(-C*3.5)),d.uniforms.activity.value=Ul.lerp(d.uniforms.activity.value,p,1-Math.exp(-C*2.5))),l.render(F,O),r.matches||y()}let F,O;const P=R=>{const C=i.getBoundingClientRect(),z=Ul.clamp((R.clientX-C.left)/C.width,0,1),$=Ul.clamp(1-(R.clientY-C.top)/C.height,0,1);p=Math.min(1,p+.22+Math.hypot(z-b.x,$-b.y)*12),b.set(z,$),y()},k=()=>{p=0,b.set(.5,.5),y()};try{l=new sE({alpha:!1,antialias:!1,powerPreference:"low-power"}),l.setPixelRatio(Math.min(devicePixelRatio||1,1)),l.domElement.setAttribute("aria-hidden","true"),e.appendChild(l.domElement),F=new Q2,O=new qm,c=new jl(2,2),_=new oT().load(C2,()=>{x||(M=!0,E())}),_.colorSpace=ti,d=new Xi({uniforms:{backgroundMap:{value:_},time:{value:0},aspect:{value:1},pointer:{value:new ze(.5,.5)},activity:{value:0}},vertexShader:"varying vec2 uvPosition; void main(){uvPosition=uv;gl_Position=vec4(position,1.0);}",fragmentShader:`
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
        `}),F.add(new ki(c,d));const R=()=>{const{width:C,height:z}=e.getBoundingClientRect();!C||!z||(l.setSize(C,z),d.uniforms.aspect.value=C/z,E())};U=new ResizeObserver(R),U.observe(e),N=new IntersectionObserver(([C])=>{m=C.isIntersecting,E()}),N.observe(e),i.addEventListener("pointermove",P),i.addEventListener("pointerleave",k),i.addEventListener("pointercancel",k),document.addEventListener("visibilitychange",E),r.addEventListener("change",E),R()}catch{e.dataset.fallback="true",l?.domElement.remove()}return()=>{x=!0,_?.dispose(),cancelAnimationFrame(h),U?.disconnect(),N?.disconnect(),i.removeEventListener("pointermove",P),i.removeEventListener("pointerleave",k),i.removeEventListener("pointercancel",k),document.removeEventListener("visibilitychange",E),r.removeEventListener("change",E),c?.dispose(),d?.dispose(),l?.dispose(),l?.domElement.remove()}},[]),K.createElement("div",{className:"hero-background",ref:s,style:{backgroundImage:`url(${C2})`,backgroundSize:"100% 100%"},"aria-hidden":"true"})}function GC({items:s,renderItem:e,label:i,heading:r,language:l="uk"}){const c=Fe.useRef(null),d=Fe.useRef(()=>{});return Fe.useEffect(()=>{const h=c.current,v=h.querySelector(".channel-track"),g=h.querySelector(".channel-group"),m=matchMedia("(prefers-reduced-motion: reduce)");let p=null,_=null,M=0,x=0,b=0,y=!0,E=null,U=0;const N=()=>{x>0&&(M=-((-M%x+x)%x)),v.style.transform=`translate3d(${M}px,0,0)`},w=()=>{p===null&&(p=requestAnimationFrame(F))},F=I=>{p=null;const G=_===null?0:Math.min((I-_)/1e3,.1);if(_=I,y&&!document.hidden){const st=m.matches?b:b*(1-Math.exp(-G*9));b-=st,M+=st,!m.matches&&E===null&&(M-=42*G),N()}!m.matches||Math.abs(b)>.1?w():_=null};d.current=I=>{b+=I*(g.children[0]?.getBoundingClientRect().width||200),w()};const O=()=>{x=g.getBoundingClientRect().width,N(),_=null,w()},P=()=>{_=null,w()},k=I=>{I.key!=="ArrowLeft"&&I.key!=="ArrowRight"||(I.preventDefault(),d.current(I.key==="ArrowRight"?-1:1))},R=I=>{I.pointerType!=="touch"||!I.isPrimary||(E=I.pointerId,U=I.clientX,b=0,h.setPointerCapture(E))},C=I=>{I.pointerId===E&&(M+=I.clientX-U,U=I.clientX,N())},z=()=>{E=null,P()},$={keydown:k,pointerdown:R,pointermove:C,pointerup:z,pointercancel:z};for(const[I,G]of Object.entries($))h.addEventListener(I,G);document.addEventListener("visibilitychange",P),m.addEventListener("change",P);const it=new ResizeObserver(O);it.observe(h),it.observe(g);const ot=new IntersectionObserver(([I])=>{y=I.isIntersecting,P()});return ot.observe(h),O(),()=>{cancelAnimationFrame(p),it.disconnect(),ot.disconnect(),d.current=()=>{};for(const[I,G]of Object.entries($))h.removeEventListener(I,G);document.removeEventListener("visibilitychange",P),m.removeEventListener("change",P)}},[s.length]),K.createElement(K.Fragment,null,K.createElement("div",{className:"container channels-heading"},K.createElement("div",null,r),K.createElement("div",{className:"channel-controls"},K.createElement("button",{type:"button","aria-label":l==="uk"?"Попередні платформи":"Previous platforms",onClick:()=>d.current(1)},"‹"),K.createElement("button",{type:"button","aria-label":l==="uk"?"Наступні платформи":"Next platforms",onClick:()=>d.current(-1)},"›"))),K.createElement("div",{className:"channel-strip",ref:c,tabIndex:0,role:"region","aria-label":i},K.createElement("div",{className:"channel-track"},[0,1].map(h=>K.createElement("div",{className:`channel-group${h?" channel-group--duplicate":""}`,key:h,"aria-hidden":h?!0:void 0},s.map((v,g)=>K.createElement("div",{className:"channel",key:v},K.createElement("span",{className:"channel-number"},String(g+1).padStart(2,"0")),e(v))))))))}function RE({small:s=!1,linked:e=!0}){const i=`logo${s?" logo--small":""}`,r=K.createElement("img",{src:"./brand/logo.svg",alt:"expla",width:"202",height:"44"});return e?K.createElement("a",{className:i,href:"#about","aria-label":"expla"},r):K.createElement("span",{className:i},r)}const VC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2024V21.7647C2%2019.9862%202.75857%2018.2805%204.10883%2017.0229C5.45909%2015.7653%207.29044%2015.0588%209.2%2015.0588C11.1096%2015.0588%2012.9409%2015.7653%2014.2912%2017.0229C15.6414%2018.2805%2016.4%2019.9862%2016.4%2021.7647V24M18.8%2011.7059H22.4M22.4%2011.7059H26M22.4%2011.7059V8.35294M22.4%2011.7059V15.0588M12.8%208.35294C12.8%2010.2047%2011.1882%2011.7059%209.2%2011.7059C7.21177%2011.7059%205.6%2010.2047%205.6%208.35294C5.6%206.50116%207.21177%205%209.2%205C11.1882%205%2012.8%206.50116%2012.8%208.35294Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",kC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%204V25H24M9.47059%2019.1667V14.5M15.0588%2019.1667V9.83333M20.6471%2019.1667V6.33333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",XC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2023V20.75C4%2018.9598%204.7375%2017.2429%206.05025%2015.977C7.36301%2014.7112%209.14348%2014%2011%2014C12.8565%2014%2014.637%2014.7112%2015.9497%2015.977C17.2625%2017.2429%2018%2018.9598%2018%2020.75V23M19.1667%205C20.0949%205%2020.9852%205.35558%2021.6415%205.98851C22.2979%206.62145%2022.6667%207.47989%2022.6667%208.375C22.6667%209.27011%2022.2979%2010.1286%2021.6415%2010.7615C20.9852%2011.3944%2020.0949%2011.75%2019.1667%2011.75M20.3333%2016.25C21.4914%2016.458%2022.5571%2016.9992%2023.3901%2017.8024C24.223%2018.6057%2024.7843%2019.6333%2025%2020.75V23M14.5%208.375C14.5%2010.239%2012.933%2011.75%2011%2011.75C9.067%2011.75%207.5%2010.239%207.5%208.375C7.5%206.51104%209.067%205%2011%205C12.933%205%2014.5%206.51104%2014.5%208.375Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",qC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2023V20.75C4%2018.9598%204.7375%2017.2429%206.05025%2015.977C7.36301%2014.7112%209.14348%2014%2011%2014C12.8565%2014%2014.637%2014.7112%2015.9497%2015.977C17.2625%2017.2429%2018%2018.9598%2018%2020.75V23M19.1667%205C20.0949%205%2020.9852%205.35558%2021.6415%205.98851C22.2979%206.62145%2022.6667%207.47989%2022.6667%208.375C22.6667%209.27011%2022.2979%2010.1286%2021.6415%2010.7615C20.9852%2011.3944%2020.0949%2011.75%2019.1667%2011.75M20.3333%2016.25C21.4914%2016.458%2022.5571%2016.9992%2023.3901%2017.8024C24.223%2018.6057%2024.7843%2019.6333%2025%2020.75V23M14.5%208.375C14.5%2010.239%2012.933%2011.75%2011%2011.75C9.067%2011.75%207.5%2010.239%207.5%208.375C7.5%206.51104%209.067%205%2011%205C12.933%205%2014.5%206.51104%2014.5%208.375Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",YC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.8333%209.9334C23.2932%208.52039%2022.4038%207.26032%2021.2446%206.26576C20.0854%205.2712%2018.6924%204.57312%2017.1902%204.23389C15.688%203.89466%2014.1234%203.92485%2012.636%204.32176C11.1486%204.71867%209.78492%205.46994%208.66667%206.50844L4%209.9334M9.83333%209.9334H4V4.22514M5.16667%2019.0666C5.70679%2020.4796%206.59619%2021.7397%207.75541%2022.7342C8.91463%2023.7288%2010.3076%2024.4269%2011.8098%2024.7661C13.312%2025.1053%2014.8766%2025.0751%2016.364%2024.6782C17.8514%2024.2813%2019.2151%2023.5301%2020.3333%2022.4916L25%2019.0666M25%2024.7749V19.0666H19.1667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",WC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%206.33333H22M6%2014.5H22M6%2022.6667H22M11.7143%206.33333C11.7143%207.622%2010.6909%208.66667%209.42857%208.66667C8.16621%208.66667%207.14286%207.622%207.14286%206.33333C7.14286%205.04467%208.16621%204%209.42857%204C10.6909%204%2011.7143%205.04467%2011.7143%206.33333ZM20.8571%2014.5C20.8571%2015.7887%2019.8338%2016.8333%2018.5714%2016.8333C17.3091%2016.8333%2016.2857%2015.7887%2016.2857%2014.5C16.2857%2013.2113%2017.3091%2012.1667%2018.5714%2012.1667C19.8338%2012.1667%2020.8571%2013.2113%2020.8571%2014.5ZM14%2022.6667C14%2023.9553%2012.9767%2025%2011.7143%2025C10.4519%2025%209.42857%2023.9553%209.42857%2022.6667C9.42857%2021.378%2010.4519%2020.3333%2011.7143%2020.3333C12.9767%2020.3333%2014%2021.378%2014%2022.6667Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",ZC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2023V20.75C2%2018.9598%202.75853%2017.2429%204.10872%2015.977C5.45892%2014.7112%207.29017%2014%209.19963%2014C11.1091%2014%2012.9403%2014.7112%2014.2905%2015.977C15.6407%2017.2429%2016.3993%2018.9598%2016.3993%2020.75V23M18.7991%2017.375C19.6809%2017.2061%2020.592%2017.2253%2021.4648%2017.4313C22.3376%2017.6372%2023.1498%2018.0247%2023.8412%2018.5649C24.5326%2019.1051%2025.0856%2019.7842%2025.459%2020.5519C25.8325%2021.3197%2026.017%2022.1564%2025.9988%2023M12.7994%208.375C12.7994%2010.239%2011.1878%2011.75%209.19963%2011.75C7.21151%2011.75%205.59982%2010.239%205.59982%208.375C5.59982%206.51104%207.21151%205%209.19963%205C11.1878%205%2012.7994%206.51104%2012.7994%208.375ZM22.9989%2010.625C22.9989%2012.1783%2021.6558%2013.4375%2019.9991%2013.4375C18.3423%2013.4375%2016.9992%2012.1783%2016.9992%2010.625C16.9992%209.0717%2018.3423%207.8125%2019.9991%207.8125C21.6558%207.8125%2022.9989%209.0717%2022.9989%2010.625Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",jC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25%2014.5C25%2020.299%2020.299%2025%2014.5%2025M25%2014.5C25%208.70101%2020.299%204%2014.5%204M25%2014.5H18.875M14.5%2025C8.70101%2025%204%2020.299%204%2014.5M14.5%2025C17.4167%2022.0833%2018.875%2018.2917%2018.875%2014.5M14.5%2025C11.5833%2022.0833%2010.125%2018.2917%2010.125%2014.5M4%2014.5C4%208.70101%208.70101%204%2014.5%204M4%2014.5H10.125M14.5%204C17.4167%206.91667%2018.875%2010.7083%2018.875%2014.5M14.5%204C11.5833%206.91667%2010.125%2010.7083%2010.125%2014.5M10.125%2014.5H18.875'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",KC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%209.83333V14.5M14.5%2014.5H6.45V19.1667M14.5%2014.5H22.55V19.1667M12.2%204H16.8C17.4351%204%2017.95%204.52233%2017.95%205.16667V8.66667C17.95%209.311%2017.4351%209.83333%2016.8%209.83333H12.2C11.5649%209.83333%2011.05%209.311%2011.05%208.66667V5.16667C11.05%204.52233%2011.5649%204%2012.2%204ZM4.15%2019.1667H8.75C9.38513%2019.1667%209.9%2019.689%209.9%2020.3333V23.8333C9.9%2024.4777%209.38513%2025%208.75%2025H4.15C3.51487%2025%203%2024.4777%203%2023.8333V20.3333C3%2019.689%203.51487%2019.1667%204.15%2019.1667ZM20.25%2019.1667H24.85C25.4851%2019.1667%2026%2019.689%2026%2020.3333V23.8333C26%2024.4777%2025.4851%2025%2024.85%2025H20.25C19.6149%2025%2019.1%2024.4777%2019.1%2023.8333V20.3333C19.1%2019.689%2019.6149%2019.1667%2020.25%2019.1667Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",QC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2010.5714H25M8.66667%2016.2857H12.1667M16.8333%2017.4286L19.1667%2019.7143L23.8333%2015.1429M6.33333%206H22.6667C23.9553%206%2025%207.02335%2025%208.28571V19.7143C25%2020.9767%2023.9553%2022%2022.6667%2022H6.33333C5.04467%2022%204%2020.9767%204%2019.7143V8.28571C4%207.02335%205.04467%206%206.33333%206Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",JC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2023H25M6.33333%2018.4667L12.1667%2012.8L16.8333%2016.2L25%206M25%2012.8V6H18'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",$C="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.83333%207.5V4H19.1667V7.5M4%2013.3333H12.1667M12.1667%2013.3333H16.8333M12.1667%2013.3333V16.8333H16.8333V13.3333M16.8333%2013.3333H25M6.33333%207.5H22.6667C23.9553%207.5%2025%208.54467%2025%209.83333V22.6667C25%2023.9553%2023.9553%2025%2022.6667%2025H6.33333C5.04467%2025%204%2023.9553%204%2022.6667V9.83333C4%208.54467%205.04467%207.5%206.33333%207.5Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",tw="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204V25H25M8.66667%2020.3333V15.6667M14.5%2020.3333V11M20.3333%2020.3333V6.33333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",ew="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.1765%2017.1765L24%2024M19.2941%2011.6471C19.2941%2015.8704%2015.8704%2019.2941%2011.6471%2019.2941C7.4237%2019.2941%204%2015.8704%204%2011.6471C4%207.4237%207.4237%204%2011.6471%204C15.8704%204%2019.2941%207.4237%2019.2941%2011.6471Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",nw="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25%2014.5C25%2020.299%2020.299%2025%2014.5%2025C8.70101%2025%204%2020.299%204%2014.5C4%208.70101%208.70101%204%2014.5%204M25%2014.5C25%208.70101%2020.299%204%2014.5%204M25%2014.5H14.5M14.5%204V14.5M14.5%2014.5L7.03333%2021.9667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",iw="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%205H8.70588L14.5882%2014M14.5882%2014L8.70588%2023H4M14.5882%2014H4M14.5882%2014H24M19.2941%2018.5L24%2014L19.2941%209.5'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",aw="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.125%203L5%2016.8H12.875L11.75%2026L23%2011.05H15.125L16.25%203H15.125Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",rw="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.61538%2013.3333C5.61538%2010.858%206.56846%208.48401%208.26494%206.73367C9.96142%204.98333%2012.2623%204%2014.6615%204C17.0607%204%2019.3617%204.98333%2021.0581%206.73367C22.7546%208.48401%2023.7077%2010.858%2023.7077%2013.3333M15.7923%2025H19.1846C20.3842%2025%2021.4735%2024.6653%2022.3829%2023.6332C22.9864%2022.9482%2022.8997%2022%2022.8997%2022M6.26154%2013.667C7.51055%2013.667%208.52308%2014.7117%208.52308%2016.0003V19.5003C8.52308%2020.789%207.51055%2021.8337%206.26154%2021.8337C5.01253%2021.8337%204%2020.789%204%2019.5003V16.0003C4%2014.7117%205.01253%2013.667%206.26154%2013.667ZM22.7385%2013.5C23.9875%2013.5%2025%2014.5447%2025%2015.8333V19.3333C25%2020.622%2023.9875%2021.6667%2022.7385%2021.6667C21.4894%2021.6667%2020.4769%2020.622%2020.4769%2019.3333V15.8333C20.4769%2014.5447%2021.4894%2013.5%2022.7385%2013.5Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",sw=Object.assign({"../assets/benefits/acquisition.svg":VC,"../assets/benefits/analytics.svg":kC,"../assets/benefits/audience-1.svg":XC,"../assets/benefits/audience.svg":qC,"../assets/benefits/automation.svg":YC,"../assets/benefits/data.svg":WC,"../assets/benefits/expertise.svg":ZC,"../assets/benefits/globe.svg":jC,"../assets/benefits/network.svg":KC,"../assets/benefits/payment.svg":QC,"../assets/benefits/profit.svg":JC,"../assets/benefits/projects.svg":$C,"../assets/benefits/results.svg":tw,"../assets/benefits/search.svg":ew,"../assets/benefits/segments.svg":nw,"../assets/benefits/sources.svg":iw,"../assets/benefits/speed.svg":aw,"../assets/benefits/support.svg":rw});function ow({name:s}){return K.createElement("img",{className:"benefit-icon",src:sw[`../assets/benefits/${s}.svg`],width:"28",height:"28",alt:"","aria-hidden":"true"})}const lw={uk:[{lead:"З 2015 року залучаємо користувачів через рекламу у Meta, Instagram, Snapchat, TikTok та X (Twitter)",paragraphs:["Будуємо маркетингові воронки для діджитал-компаній у різних напрямах. Поєднуємо креативи й аналітику, щоб вести користувачів від першого контакту до покупки"],benefits:[["Ефективне залучення клієнтів"],["Швидкість реагування"],["Автоматизація"],["Зацікавлена аудиторія"]],icons:["acquisition","speed","automation","audience"],tags:"META ADS · TIKTOK · SNAPCHAT · X"},{lead:"Залучаємо користувачів для наших партнерів через Google Ads, Microsoft Ads та інші рекламні платформи",paragraphs:["Працюємо з пошуковою, медійною та нативною рекламою різних діджитал-компаній на ринках англомовних країн. Запускаємо рекламу в Google Ads та інших рекламних системах. Через власні сайти допомагаємо користувачам обирати продукти й приводимо клієнтів нашим партнерам"],benefits:[["Різні джерела залучення"],["Вимірюваний результат"],["Оплата за цільові дії"],["Фокус на прибутковості"]],icons:["sources","results","payment","profit"],tags:"GOOGLE ADS · MICROSOFT ADS · DISPLAY · NATIVE ADS"},{lead:"Створюємо та розвиваємо власні онлайн-проєкти, які залучають користувачів із пошуку Google та Bing",paragraphs:["Працюємо з різними діджитал-компаніями на міжнародних ринках. Поєднуємо SEO, контент, аналітику й технічну розробку, щоб залучати більше користувачів із пошукових систем та приводити клієнтів нашим партнерам."],benefits:[["Робота з пошуковим запитом"],["Власні проєкти"],["Рішення на основі даних"],["Спільна експертиза"]],icons:["search","projects","data","expertise"],tags:"GOOGLE SEARCH · КОНТЕНТ · АНАЛІТИКА · ВЛАСНІ ПРОЄКТИ"},{lead:"Cpamatica — глобальна афіліат-мережа powered by expla, яка об’єднує рекламодавців та афіліатів із 2015 року",paragraphs:["Допомагаємо рекламодавцям залучати нових користувачів, а афіліатам — знаходити пропозиції для роботи зі своєю аудиторією.","Поєднуємо досвід у performance-маркетингу, розгалужену мережу партнерів та аналітику, щоб розвивати діджитал-компанії наших клієнтів. Будуємо співпрацю, яка приносить результат рекламодавцям і афіліатам."],benefits:[["Професійна підтримка"],["Зацікавлена аудиторія"],["Широка мережа паблішерів"],["Аналітика та звітність"],["Сегментація аудиторії"],["Міжнародна географія"]],icons:["support","audience-1","network","analytics","segments","globe"],tags:"CPAMATICA · РЕКЛАМОДАВЦІ · АФІЛІАТИ · ПАРТНЕРСТВА",stats:[["1 000+","активних партнерів"],["1 000+","рекламних пропозицій"],["11+","років досвіду"]]}],en:[{lead:"Acquiring users through Meta, Instagram, Snapchat, TikTok, and X (Twitter) advertising since 2015",paragraphs:["We build marketing funnels for digital companies across different sectors. We combine creative work and analytics to guide users from their first interaction to purchase."],benefits:[["Efficient customer acquisition"],["Fast response"],["Automation"],["Interested audiences"]],icons:["acquisition","speed","automation","audience"],tags:"META ADS · TIKTOK · SNAPCHAT · X"},{lead:"Acquiring users for our partners through Google Ads, Microsoft Ads, and other advertising platforms",paragraphs:["We work with search, display, and native advertising for digital companies in English-speaking markets. We launch campaigns in Google Ads and other advertising systems. Through our own websites, we help users choose products and bring customers to our partners."],benefits:[["Multiple acquisition sources"],["Measurable results"],["Pay for actions"],["Focus on profitability"]],icons:["sources","results","payment","profit"],tags:"GOOGLE ADS · MICROSOFT ADS · DISPLAY · NATIVE ADS"},{lead:"Creating and growing our own online projects that attract users from Google and Bing search",paragraphs:["We work with digital companies in international markets. We combine SEO, content, analytics, and technical development to attract more search users and bring customers to our partners."],benefits:[["Search intent"],["Our own projects"],["Data-driven decisions"],["Shared expertise"]],icons:["search","projects","data","expertise"],tags:"GOOGLE SEARCH · CONTENT · ANALYTICS · OWN PROJECTS"},{lead:"Cpamatica is a global affiliate network powered by expla, connecting advertisers and affiliates since 2015",paragraphs:["We help advertisers acquire new users and affiliates find offers for their audiences.","We combine performance-marketing experience, a broad partner network, and analytics to build collaborations that deliver results for advertisers and affiliates."],benefits:[["Professional support"],["Interested audiences"],["Extensive publisher network"],["Analytics and reporting"],["Audience segmentation"],["International reach"]],icons:["support","audience-1","network","analytics","segments","globe"],tags:"CPAMATICA · ADVERTISERS · AFFILIATES · PARTNERSHIPS",stats:[["1 000+","active partners"],["1 000+","advertising offers"],["11+","years of experience"]]}]};function uw({language:s,cards:e,index:i,onChange:r,onClose:l,closeLabel:c}){const[d,h]=Fe.useState(!1),[v,g]=Fe.useState(!1),m=Fe.useRef(null),p=Fe.useId(),_=Fe.useId();Fe.useEffect(()=>{h(!1),g(!1)},[i]);const M=e[i],x=lw[s][i];return K.createElement(K.Fragment,null,K.createElement("header",{className:"direction-dialog-header"},K.createElement("div",{className:"direction-dialog-toolbar"},K.createElement(RE,{linked:!1}),K.createElement("button",{className:"dialog-close direction-dialog-close",type:"button","aria-label":c,onClick:l,autoFocus:!0},K.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},K.createElement("path",{d:"m5 5 14 14M19 5 5 19"})))),K.createElement("nav",{className:"direction-tabs","aria-label":s==="uk"?"Напрямки бізнесу":"Business areas"},e.map((b,y)=>K.createElement("button",{type:"button",key:b.title,"aria-current":y===i?"page":void 0,onClick:()=>r(y)},b.title,y!==i&&K.createElement("span",{"aria-hidden":"true"},"›")))),K.createElement("div",{className:"direction-select-wrap"},K.createElement("button",{ref:m,type:"button",className:"direction-select","aria-label":s==="uk"?"Напрямок":"Expertise","aria-expanded":d,"aria-controls":p,onClick:()=>h(!d)},M.title,K.createElement("span",{"aria-hidden":"true"},d?"⌃":"⌄")),d&&K.createElement("div",{id:p,className:"direction-options"},e.map((b,y)=>y!==i&&K.createElement("button",{type:"button",key:b.title,onClick:()=>{h(!1),r(y),m.current?.focus()}},b.title)))),K.createElement("h2",{id:"dialog-title"},M.title),K.createElement("p",{className:"direction-dialog-tags"},x.tags)),K.createElement("div",{className:"direction-dialog-body"},K.createElement("p",{className:"direction-dialog-lead"},x.lead),K.createElement("div",{className:"direction-dialog-description"},x.paragraphs.map(b=>K.createElement("p",{key:b},b)))),x.stats&&K.createElement("section",{className:"direction-stats"},K.createElement("h3",{className:"direction-benefits-heading"},K.createElement("i",{"aria-hidden":"true"}),s==="uk"?"ПОКАЗНИКИ":"KEY FIGURES"),K.createElement("dl",null,x.stats.map(([b,y])=>K.createElement("div",{key:y},K.createElement("dt",null,b),K.createElement("dd",null,y))))),K.createElement("section",{className:"direction-dialog-benefits"},K.createElement("h3",{className:"direction-benefits-heading"},K.createElement("i",{"aria-hidden":"true"}),s==="uk"?"ПЕРЕВАГИ":"OUR STRENGTHS"),K.createElement("ul",{id:_,className:`dialog-benefits${x.stats&&!v?" is-collapsed":""}`},x.benefits.map(([b],y)=>K.createElement("li",{key:b},K.createElement(ow,{name:x.icons[y]}),K.createElement("h4",null,b)))),x.stats&&K.createElement("button",{className:"benefits-toggle",type:"button","aria-expanded":v,"aria-controls":_,onClick:()=>g(!v)},s==="uk"?v?"Показати менше":"Показати більше":v?"Show less":"Show more",K.createElement("span",{"aria-hidden":"true"},v?"−":"+"))))}const cw={uk:{nav:["Про нас","Наші напрямки","Кар’єра","Блог","Контакти"],title:"expla топ-100 партнерів",subtitle:"Meta Ads & Google Ads у Європі",directions:"Наші напрямки",more:"ДЕТАЛЬНІШЕ",cards:[{title:"Social Media Advertising",description:"Залучаємо користувачів через рекламу в соціальних мережах",tags:"META ADS · TIKTOK · SNAPCHAT · X"},{title:"PPC Team",description:"Перетворюємо рекламний клік на реєстрацію чи покупку",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS"},{title:"SEO",description:"Розвиваємо власні сайти та залучаємо користувачів із пошуку Google",tags:"ОРГАНІЧНИЙ ПОШУК · КОНТЕНТ · АНАЛІТИКА"},{title:"Affiliate Network",description:"Поєднуємо рекламодавців і афіліатів у партнерську мережу",tags:"CPAMATICA · 1 000+ ПАРТНЕРІВ"}],seen:"нашу рекламу бачать",online:"онлайн-користувачів у світі",users:"8 з 10 користувачів",zone:"НАША ЗОНА РОБОТИ",channelsStart:"Канали, що перетворюють",channelsEnd:"увагу на",result:"результат",close:"Закрити",menu:"Відкрити меню",socialTitle:"Соціальні мережі expla",socialBody:"Дізнавайтеся більше про команду, ідеї та життя expla.",careerTitle:"Зростай разом з expla",careerBody:"Наші напрямки — це різні можливості для людей, яких захоплюють маркетинг, технології та аналітика. Обери свій напрямок і познайомся з тим, над чим працює команда.",careerAction:"Дослідити напрямки",blogTitle:"Ідеї, що рухають уперед",blogBody:"Досліджуємо рекламу, пошукову оптимізацію та партнерський маркетинг. Почни з напрямку, який цікавить тебе найбільше.",contactTitle:"Почнімо з вашої задачі",contactBody:"Розкажіть, що хочете розвивати. Тут можна підготувати й скопіювати текст вашого звернення.",name:"Ваше ім’я",email:"Email",message:"Про вашу задачу",submit:"Скопіювати звернення",copied:"Звернення скопійовано. Ви можете надіслати його через звичний канал зв’язку.",copyError:"Скопіюйте текст із поля нижче.",skip:"Перейти до вмісту",globe:"Жива планета expla"},en:{nav:["About us","Our expertise","Careers","Blog","Contacts"],title:"expla is a top-100 partner",subtitle:"for Meta Ads & Google Ads in Europe",directions:"Our expertise",more:"LEARN MORE",cards:[{title:"Social Media Advertising",description:"Connecting people with brands through social media advertising",tags:"META ADS · TIKTOK · SNAPCHAT · X"},{title:"PPC Team",description:"Turning an ad click into a registration or a purchase",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS"},{title:"SEO",description:"Growing our own websites and attracting users from Google search",tags:"ORGANIC SEARCH · CONTENT · ANALYTICS"},{title:"Affiliate Network",description:"Bringing advertisers and affiliates together in a partner network",tags:"CPAMATICA · 1,000+ PARTNERS"}],seen:"our advertising reaches",online:"of online users worldwide",users:"8 out of 10 users",zone:"WHERE WE WORK",channelsStart:"Channels that turn",channelsEnd:"attention into",result:"results",close:"Close",menu:"Open menu",socialTitle:"Find expla on social media",socialBody:"Get to know our people, ideas, and life at expla.",careerTitle:"Grow with expla",careerBody:"Our teams offer different paths for people who love marketing, technology, and analytics. Explore a discipline and discover what our team works on.",careerAction:"Explore our expertise",blogTitle:"Ideas that move us forward",blogBody:"Explore advertising, search optimization, and affiliate marketing. Start with the discipline that interests you most.",contactTitle:"Let’s start with your challenge",contactBody:"Tell us what you want to grow. Prepare and copy your inquiry here.",name:"Your name",email:"Email",message:"Your challenge",submit:"Copy inquiry",copied:"Inquiry copied. You can send it through your preferred contact channel.",copyError:"Copy the text from the field below.",skip:"Skip to content",globe:"The live expla globe"}};function $c(){return K.createElement("svg",{"aria-hidden":"true",width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},K.createElement("path",{d:"M4 12h15m-6-6 6 6-6 6"}))}function fw({name:s}){return s==="Microsoft"?K.createElement("span",{className:"channel-brand microsoft"},K.createElement("span",{className:"windows","aria-hidden":"true"},K.createElement("i",null),K.createElement("i",null),K.createElement("i",null),K.createElement("i",null)),"Microsoft"):s==="Meta"?K.createElement("span",{className:"channel-brand meta"},K.createElement("svg",{width:"35",height:"24",viewBox:"0 0 40 25",fill:"none",stroke:"currentColor",strokeWidth:"3","aria-hidden":"true"},K.createElement("path",{d:"M20 13C15 3 11 0 7 3S0 16 4 21c5 6 10-7 16-13s10-8 14-2 7 15 2 17-10-5-16-10Z"})),"Meta"):s==="TikTok"?K.createElement("span",{className:"channel-brand tiktok"},K.createElement("svg",{width:"25",height:"29",viewBox:"0 0 26 30",fill:"currentColor","aria-hidden":"true"},K.createElement("path",{d:"M16 1h4c.5 4 2 6 6 7v5c-3 0-5-1-7-3v11a9 9 0 1 1-8-9v5a4 4 0 1 0 3 4V1Z"})),"TikTok"):K.createElement("span",{className:`channel-brand ${s==="Google"?"google":""}`},s)}function dw({t:s}){const[e,i]=Fe.useState(""),[r,l]=Fe.useState("");async function c(d){d.preventDefault();const h=new FormData(d.currentTarget),v=`${h.get("name")}
${h.get("email")}

${h.get("message")}`;try{await navigator.clipboard.writeText(v),i(s.copied)}catch{l(v),i(s.copyError)}}return K.createElement("form",{className:"contact-form",onSubmit:c},K.createElement("label",null,s.name,K.createElement("input",{name:"name",autoComplete:"name",required:!0,maxLength:100})),K.createElement("label",null,s.email,K.createElement("input",{name:"email",type:"email",autoComplete:"email",required:!0,maxLength:200})),K.createElement("label",null,s.message,K.createElement("textarea",{name:"message",rows:4,required:!0,maxLength:4e3})),K.createElement("button",{className:"primary-button",type:"submit"},s.submit,K.createElement($c,null)),e&&K.createElement("p",{className:"form-status",role:"status"},e),r&&K.createElement("textarea",{readOnly:!0,"aria-label":s.message,value:r,rows:5,onFocus:d=>d.target.select()}))}function hw(){const[s,e]=Fe.useState("uk"),[i,r]=Fe.useState(!1),[l,c]=Fe.useState(null),d=Fe.useRef(null),[h,v]=FC(),g=`reach-ring-${Fe.useId().replaceAll(":","")}`,m=cw[s],p=!!l;Fe.useEffect(()=>{document.documentElement.lang=s},[s]),Fe.useEffect(()=>{if(!l)return;const y=d.current,E=document.activeElement;y.showModal();const U=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{y.close(),document.body.style.overflow=U,E instanceof HTMLElement&&E.isConnected&&E.focus({preventScroll:!0})}},[p]);function _(y){r(!1),c(y)}function M(){c(null),document.getElementById("directions").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}const x=l?.type==="direction"?m.cards[l.index]:null,b=x?.title||(l?.type==="career"?m.careerTitle:l?.type==="blog"?m.blogTitle:l?.type==="contact"?m.contactTitle:`${l?.network||""} · expla`);return K.createElement(K.Fragment,null,K.createElement("a",{className:"skip-link",href:"#main"},m.skip),K.createElement("header",{className:"masthead"},K.createElement(HC,null),K.createElement("div",{className:"site-header container"},K.createElement(RE,null),K.createElement("button",{className:"menu-toggle",type:"button","aria-expanded":i,"aria-controls":"site-navigation","aria-label":m.menu,onClick:()=>r(!i)},K.createElement("span",null),K.createElement("span",null)),K.createElement("nav",{id:"site-navigation",className:`navigation${i?" is-open":""}`,"aria-label":s==="uk"?"Основна навігація":"Main navigation"},K.createElement("a",{href:"#about",onClick:()=>r(!1)},m.nav[0]),K.createElement("a",{href:"#directions",onClick:()=>r(!1)},m.nav[1]),K.createElement("button",{onClick:()=>_({type:"career"})},m.nav[2]),K.createElement("button",{onClick:()=>_({type:"blog"})},m.nav[3]),K.createElement("button",{onClick:()=>_({type:"contact"})},m.nav[4])),K.createElement("div",{className:"language-switch","aria-label":s==="uk"?"Мова сайту":"Website language"},K.createElement("button",{lang:"uk","aria-pressed":s==="uk",onClick:()=>e("uk")},"UA"),K.createElement("span",{"aria-hidden":"true"},"|"),K.createElement("button",{lang:"en","aria-pressed":s==="en",onClick:()=>e("en")},"EN"))),K.createElement("section",{className:"hero container",id:"about"},K.createElement("h1",null,m.title),K.createElement("p",null,m.subtitle))),K.createElement("main",{id:"main"},K.createElement("section",{className:"directions",id:"directions","aria-labelledby":"directions-title"},K.createElement("div",{className:"container"},K.createElement("h2",{id:"directions-title"},m.directions),K.createElement("div",{className:"direction-grid"},m.cards.map((y,E)=>K.createElement("article",{className:"direction-card",key:y.title},K.createElement("h3",null,y.title),K.createElement("p",null,y.description),K.createElement("div",{className:"card-bottom"},K.createElement("p",{className:"card-tags"},y.tags),K.createElement("button",{className:"detail-button","aria-haspopup":"dialog",onClick:()=>_({type:"direction",index:E}),"aria-label":`${m.more}: ${y.title}`},m.more,K.createElement($c,null)))))))),K.createElement("section",{className:`reach container${v?" is-revealed":""}`,ref:h,"aria-label":m.globe},K.createElement("div",{className:"reach-globe"},K.createElement("svg",{className:"globe-ring",viewBox:"0 0 100 100","aria-hidden":"true"},K.createElement("defs",null,K.createElement("linearGradient",{id:g,x1:"0",y1:"0",x2:"1",y2:"1"},K.createElement("stop",{offset:"0%",stopColor:"#20c57c"}),K.createElement("stop",{offset:"55%",stopColor:"#138353"}),K.createElement("stop",{offset:"100%",stopColor:"#06492e"}))),K.createElement("circle",{className:"ring-progress",cx:"50",cy:"50",r:"49",pathLength:"100",stroke:`url(#${g})`})),K.createElement(AE,{dataUrl:"./data/countries.geojson"})),K.createElement("div",{className:"reach-copy"},K.createElement("p",{className:"reach-intro"},m.seen),K.createElement("p",{className:"reach-value"},"80",K.createElement("span",null,"%")),K.createElement("h2",null,m.online),K.createElement("div",{className:"reach-meter"},K.createElement("span",{className:"meter-blocks","aria-hidden":"true"},Array.from({length:10},(y,E)=>K.createElement("i",{key:E,className:E<8?"is-filled":"",style:{"--cube-delay":`${E*.26}s`}}))),K.createElement("span",null,m.users)))),K.createElement("section",{className:"channels","aria-labelledby":"channels-title"},K.createElement(GC,{language:s,heading:K.createElement(K.Fragment,null,K.createElement("p",{className:"section-eyebrow"},K.createElement("i",{"aria-hidden":"true"}),m.zone),K.createElement("h2",{id:"channels-title"},m.channelsStart,K.createElement("br",null),m.channelsEnd," ",K.createElement("span",null,m.result))),items:["Google","Meta","Microsoft","Native Ads","TikTok","Snapchat","X","SEO","Affiliate Network"],renderItem:y=>K.createElement(fw,{name:y}),label:s==="uk"?"Рекламні платформи":"Advertising platforms"}))),K.createElement("footer",{className:"site-footer container"},K.createElement("div",{className:"footer-brands"},K.createElement("span",{className:"powered-by"},"POWERED BY ",K.createElement("span",null,"expla:")),K.createElement("span",null,"Cpamatica"),K.createElement("span",null,"TRAFFIC kitchen"),K.createElement("span",null,"adoly")),K.createElement("div",{className:"social-links"},["Facebook","Instagram","LinkedIn"].map(y=>K.createElement("button",{key:y,onClick:()=>_({type:"social",network:y})},y)))),l&&K.createElement("dialog",{className:`info-dialog${x?" direction-dialog":""}`,ref:d,"aria-labelledby":"dialog-title",onCancel:y=>{y.preventDefault(),c(null)},onClick:y=>{if(y.target===y.currentTarget){const E=y.currentTarget.getBoundingClientRect();(y.clientX<E.left||y.clientX>E.right||y.clientY<E.top||y.clientY>E.bottom)&&c(null)}}},x?K.createElement(uw,{language:s,cards:m.cards,index:l.index,closeLabel:m.close,onClose:()=>c(null),onChange:y=>{c({type:"direction",index:y}),d.current.scrollTop=0}}):K.createElement(K.Fragment,null,K.createElement("button",{className:"dialog-close",type:"button","aria-label":m.close,onClick:()=>c(null),autoFocus:!0},"×"),K.createElement("h2",{id:"dialog-title"},b),l.type==="contact"?K.createElement(K.Fragment,null,K.createElement("p",null,m.contactBody),K.createElement(dw,{t:m})):l.type==="career"?K.createElement(K.Fragment,null,K.createElement("p",null,m.careerBody),K.createElement("button",{className:"primary-button",onClick:M},m.careerAction,K.createElement($c,null))):l.type==="blog"?K.createElement(K.Fragment,null,K.createElement("p",null,m.blogBody),K.createElement("div",{className:"dialog-directions"},m.cards.map((y,E)=>K.createElement("button",{key:y.title,onClick:()=>{_({type:"direction",index:E}),d.current.scrollTop=0}},y.title,K.createElement($c,null))))):K.createElement("p",null,m.socialBody))))}const pw=s=>{window.__globeFrame=s,window.__globeSamples?.push(s)},mw=new URLSearchParams(window.location.search).get("view")==="globe";vM.createRoot(document.getElementById("root")).render(mw?K.createElement("main",{className:"standalone-preview","aria-label":"Globe integration preview"},K.createElement(AE,{dataUrl:"./data/countries.geojson",onFrame:pw})):K.createElement(hw,null));
