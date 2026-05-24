function Np(r,o){for(var d=0;d<o.length;d++){const s=o[d];if(typeof s!="string"&&!Array.isArray(s)){for(const g in s)if(g!=="default"&&!(g in r)){const m=Object.getOwnPropertyDescriptor(s,g);m&&Object.defineProperty(r,g,m.get?m:{enumerable:!0,get:()=>s[g]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))s(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const O of m.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&s(O)}).observe(document,{childList:!0,subtree:!0});function d(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerPolicy&&(m.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?m.credentials="include":g.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(g){if(g.ep)return;g.ep=!0;const m=d(g);fetch(g.href,m)}})();function Op(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gs={exports:{}},ci={};var Jh;function Cp(){if(Jh)return ci;Jh=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(s,g,m){var O=null;if(m!==void 0&&(O=""+m),g.key!==void 0&&(O=""+g.key),"key"in g){m={};for(var j in g)j!=="key"&&(m[j]=g[j])}else m=g;return g=m.ref,{$$typeof:r,type:s,key:O,ref:g!==void 0?g:null,props:m}}return ci.Fragment=o,ci.jsx=d,ci.jsxs=d,ci}var $h;function wp(){return $h||($h=1,gs.exports=Cp()),gs.exports}var u=wp(),ys={exports:{}},te={};var Wh;function _p(){if(Wh)return te;Wh=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),O=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),J=Symbol.iterator;function ae(v){return v===null||typeof v!="object"?null:(v=J&&v[J]||v["@@iterator"],typeof v=="function"?v:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,q={};function B(v,D,Y){this.props=v,this.context=D,this.refs=q,this.updater=Y||E}B.prototype.isReactComponent={},B.prototype.setState=function(v,D){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,D,"setState")},B.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function F(){}F.prototype=B.prototype;function $(v,D,Y){this.props=v,this.context=D,this.refs=q,this.updater=Y||E}var pe=$.prototype=new F;pe.constructor=$,M(pe,B.prototype),pe.isPureReactComponent=!0;var U=Array.isArray;function I(){}var G={H:null,A:null,T:null,S:null},me=Object.prototype.hasOwnProperty;function pt(v,D,Y){var X=Y.ref;return{$$typeof:r,type:v,key:D,ref:X!==void 0?X:null,props:Y}}function Tt(v,D){return pt(v.type,D,v.props)}function Pe(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function it(v){var D={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Y){return D[Y]})}var fn=/\/+/g;function on(v,D){return typeof v=="object"&&v!==null&&v.key!=null?it(""+v.key):D.toString(36)}function Ft(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(I,I):(v.status="pending",v.then(function(D){v.status==="pending"&&(v.status="fulfilled",v.value=D)},function(D){v.status==="pending"&&(v.status="rejected",v.reason=D)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function C(v,D,Y,X,le){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var Se=!1;if(v===null)Se=!0;else switch(re){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(v.$$typeof){case r:case o:Se=!0;break;case H:return Se=v._init,C(Se(v._payload),D,Y,X,le)}}if(Se)return le=le(v),Se=X===""?"."+on(v,0):X,U(le)?(Y="",Se!=null&&(Y=Se.replace(fn,"$&/")+"/"),C(le,D,Y,"",function(ml){return ml})):le!=null&&(Pe(le)&&(le=Tt(le,Y+(le.key==null||v&&v.key===le.key?"":(""+le.key).replace(fn,"$&/")+"/")+Se)),D.push(le)),1;Se=0;var ot=X===""?".":X+":";if(U(v))for(var Ge=0;Ge<v.length;Ge++)X=v[Ge],re=ot+on(X,Ge),Se+=C(X,D,Y,re,le);else if(Ge=ae(v),typeof Ge=="function")for(v=Ge.call(v),Ge=0;!(X=v.next()).done;)X=X.value,re=ot+on(X,Ge++),Se+=C(X,D,Y,re,le);else if(re==="object"){if(typeof v.then=="function")return C(Ft(v),D,Y,X,le);throw D=String(v),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Se}function k(v,D,Y){if(v==null)return v;var X=[],le=0;return C(v,X,"","",function(re){return D.call(Y,re,le++)}),X}function P(v){if(v._status===-1){var D=v._result;D=D(),D.then(function(Y){(v._status===0||v._status===-1)&&(v._status=1,v._result=Y)},function(Y){(v._status===0||v._status===-1)&&(v._status=2,v._result=Y)}),v._status===-1&&(v._status=0,v._result=D)}if(v._status===1)return v._result.default;throw v._result}var Me=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},_e={map:k,forEach:function(v,D,Y){k(v,function(){D.apply(this,arguments)},Y)},count:function(v){var D=0;return k(v,function(){D++}),D},toArray:function(v){return k(v,function(D){return D})||[]},only:function(v){if(!Pe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return te.Activity=R,te.Children=_e,te.Component=B,te.Fragment=d,te.Profiler=g,te.PureComponent=$,te.StrictMode=s,te.Suspense=z,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,te.__COMPILER_RUNTIME={__proto__:null,c:function(v){return G.H.useMemoCache(v)}},te.cache=function(v){return function(){return v.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(v,D,Y){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var X=M({},v.props),le=v.key;if(D!=null)for(re in D.key!==void 0&&(le=""+D.key),D)!me.call(D,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&D.ref===void 0||(X[re]=D[re]);var re=arguments.length-2;if(re===1)X.children=Y;else if(1<re){for(var Se=Array(re),ot=0;ot<re;ot++)Se[ot]=arguments[ot+2];X.children=Se}return pt(v.type,le,X)},te.createContext=function(v){return v={$$typeof:O,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},te.createElement=function(v,D,Y){var X,le={},re=null;if(D!=null)for(X in D.key!==void 0&&(re=""+D.key),D)me.call(D,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(le[X]=D[X]);var Se=arguments.length-2;if(Se===1)le.children=Y;else if(1<Se){for(var ot=Array(Se),Ge=0;Ge<Se;Ge++)ot[Ge]=arguments[Ge+2];le.children=ot}if(v&&v.defaultProps)for(X in Se=v.defaultProps,Se)le[X]===void 0&&(le[X]=Se[X]);return pt(v,re,le)},te.createRef=function(){return{current:null}},te.forwardRef=function(v){return{$$typeof:j,render:v}},te.isValidElement=Pe,te.lazy=function(v){return{$$typeof:H,_payload:{_status:-1,_result:v},_init:P}},te.memo=function(v,D){return{$$typeof:p,type:v,compare:D===void 0?null:D}},te.startTransition=function(v){var D=G.T,Y={};G.T=Y;try{var X=v(),le=G.S;le!==null&&le(Y,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(I,Me)}catch(re){Me(re)}finally{D!==null&&Y.types!==null&&(D.types=Y.types),G.T=D}},te.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},te.use=function(v){return G.H.use(v)},te.useActionState=function(v,D,Y){return G.H.useActionState(v,D,Y)},te.useCallback=function(v,D){return G.H.useCallback(v,D)},te.useContext=function(v){return G.H.useContext(v)},te.useDebugValue=function(){},te.useDeferredValue=function(v,D){return G.H.useDeferredValue(v,D)},te.useEffect=function(v,D){return G.H.useEffect(v,D)},te.useEffectEvent=function(v){return G.H.useEffectEvent(v)},te.useId=function(){return G.H.useId()},te.useImperativeHandle=function(v,D,Y){return G.H.useImperativeHandle(v,D,Y)},te.useInsertionEffect=function(v,D){return G.H.useInsertionEffect(v,D)},te.useLayoutEffect=function(v,D){return G.H.useLayoutEffect(v,D)},te.useMemo=function(v,D){return G.H.useMemo(v,D)},te.useOptimistic=function(v,D){return G.H.useOptimistic(v,D)},te.useReducer=function(v,D,Y){return G.H.useReducer(v,D,Y)},te.useRef=function(v){return G.H.useRef(v)},te.useState=function(v){return G.H.useState(v)},te.useSyncExternalStore=function(v,D,Y){return G.H.useSyncExternalStore(v,D,Y)},te.useTransition=function(){return G.H.useTransition()},te.version="19.2.6",te}var Fh;function Cs(){return Fh||(Fh=1,ys.exports=_p()),ys.exports}var K=Cs();const Nm=Op(K),Ph=Np({__proto__:null,default:Nm},[K]);var vs={exports:{}},ri={},xs={exports:{}},bs={};var Ih;function Dp(){return Ih||(Ih=1,(function(r){function o(C,k){var P=C.length;C.push(k);e:for(;0<P;){var Me=P-1>>>1,_e=C[Me];if(0<g(_e,k))C[Me]=k,C[P]=_e,P=Me;else break e}}function d(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var k=C[0],P=C.pop();if(P!==k){C[0]=P;e:for(var Me=0,_e=C.length,v=_e>>>1;Me<v;){var D=2*(Me+1)-1,Y=C[D],X=D+1,le=C[X];if(0>g(Y,P))X<_e&&0>g(le,Y)?(C[Me]=le,C[X]=P,Me=X):(C[Me]=Y,C[D]=P,Me=D);else if(X<_e&&0>g(le,P))C[Me]=le,C[X]=P,Me=X;else break e}}return k}function g(C,k){var P=C.sortIndex-k.sortIndex;return P!==0?P:C.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var O=Date,j=O.now();r.unstable_now=function(){return O.now()-j}}var z=[],p=[],H=1,R=null,J=3,ae=!1,E=!1,M=!1,q=!1,B=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function pe(C){for(var k=d(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=C)s(p),k.sortIndex=k.expirationTime,o(z,k);else break;k=d(p)}}function U(C){if(M=!1,pe(C),!E)if(d(z)!==null)E=!0,I||(I=!0,it());else{var k=d(p);k!==null&&Ft(U,k.startTime-C)}}var I=!1,G=-1,me=5,pt=-1;function Tt(){return q?!0:!(r.unstable_now()-pt<me)}function Pe(){if(q=!1,I){var C=r.unstable_now();pt=C;var k=!0;try{e:{E=!1,M&&(M=!1,F(G),G=-1),ae=!0;var P=J;try{t:{for(pe(C),R=d(z);R!==null&&!(R.expirationTime>C&&Tt());){var Me=R.callback;if(typeof Me=="function"){R.callback=null,J=R.priorityLevel;var _e=Me(R.expirationTime<=C);if(C=r.unstable_now(),typeof _e=="function"){R.callback=_e,pe(C),k=!0;break t}R===d(z)&&s(z),pe(C)}else s(z);R=d(z)}if(R!==null)k=!0;else{var v=d(p);v!==null&&Ft(U,v.startTime-C),k=!1}}break e}finally{R=null,J=P,ae=!1}k=void 0}}finally{k?it():I=!1}}}var it;if(typeof $=="function")it=function(){$(Pe)};else if(typeof MessageChannel<"u"){var fn=new MessageChannel,on=fn.port2;fn.port1.onmessage=Pe,it=function(){on.postMessage(null)}}else it=function(){B(Pe,0)};function Ft(C,k){G=B(function(){C(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return J},r.unstable_next=function(C){switch(J){case 1:case 2:case 3:var k=3;break;default:k=J}var P=J;J=k;try{return C()}finally{J=P}},r.unstable_requestPaint=function(){q=!0},r.unstable_runWithPriority=function(C,k){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=J;J=C;try{return k()}finally{J=P}},r.unstable_scheduleCallback=function(C,k,P){var Me=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Me+P:Me):P=Me,C){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=P+_e,C={id:H++,callback:k,priorityLevel:C,startTime:P,expirationTime:_e,sortIndex:-1},P>Me?(C.sortIndex=P,o(p,C),d(z)===null&&C===d(p)&&(M?(F(G),G=-1):M=!0,Ft(U,P-Me))):(C.sortIndex=_e,o(z,C),E||ae||(E=!0,I||(I=!0,it()))),C},r.unstable_shouldYield=Tt,r.unstable_wrapCallback=function(C){var k=J;return function(){var P=J;J=k;try{return C.apply(this,arguments)}finally{J=P}}}})(bs)),bs}var em;function Rp(){return em||(em=1,xs.exports=Dp()),xs.exports}var Ss={exports:{}},ut={};var tm;function Up(){if(tm)return ut;tm=1;var r=Cs();function o(z){var p="https://react.dev/errors/"+z;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)p+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+z+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},g=Symbol.for("react.portal");function m(z,p,H){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:R==null?null:""+R,children:z,containerInfo:p,implementation:H}}var O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(z,p){if(z==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ut.createPortal=function(z,p){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return m(z,p,null,H)},ut.flushSync=function(z){var p=O.T,H=s.p;try{if(O.T=null,s.p=2,z)return z()}finally{O.T=p,s.p=H,s.d.f()}},ut.preconnect=function(z,p){typeof z=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(z,p))},ut.prefetchDNS=function(z){typeof z=="string"&&s.d.D(z)},ut.preinit=function(z,p){if(typeof z=="string"&&p&&typeof p.as=="string"){var H=p.as,R=j(H,p.crossOrigin),J=typeof p.integrity=="string"?p.integrity:void 0,ae=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;H==="style"?s.d.S(z,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:R,integrity:J,fetchPriority:ae}):H==="script"&&s.d.X(z,{crossOrigin:R,integrity:J,fetchPriority:ae,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ut.preinitModule=function(z,p){if(typeof z=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var H=j(p.as,p.crossOrigin);s.d.M(z,{crossOrigin:H,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(z)},ut.preload=function(z,p){if(typeof z=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var H=p.as,R=j(H,p.crossOrigin);s.d.L(z,H,{crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ut.preloadModule=function(z,p){if(typeof z=="string")if(p){var H=j(p.as,p.crossOrigin);s.d.m(z,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:H,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(z)},ut.requestFormReset=function(z){s.d.r(z)},ut.unstable_batchedUpdates=function(z,p){return z(p)},ut.useFormState=function(z,p,H){return O.H.useFormState(z,p,H)},ut.useFormStatus=function(){return O.H.useHostTransitionStatus()},ut.version="19.2.6",ut}var nm;function Hp(){if(nm)return Ss.exports;nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ss.exports=Up(),Ss.exports}var am;function qp(){if(am)return ri;am=1;var r=Rp(),o=Cs(),d=Hp();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function O(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(m(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return z(l),e;if(i===a)return z(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=i;else{for(var c=!1,f=l.child;f;){if(f===n){c=!0,n=l,a=i;break}if(f===a){c=!0,a=l,n=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===n){c=!0,n=i,a=l;break}if(f===a){c=!0,a=i,n=l;break}f=f.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function H(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=H(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,J=Symbol.for("react.element"),ae=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),$=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),Tt=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var fn=Symbol.for("react.client.reference");function on(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case B:return"Profiler";case q:return"StrictMode";case U:return"Suspense";case I:return"SuspenseList";case pt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case $:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:on(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return on(e(t))}catch{}}return null}var Ft=Array.isArray,C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},Me=[],_e=-1;function v(e){return{current:e}}function D(e){0>_e||(e.current=Me[_e],Me[_e]=null,_e--)}function Y(e,t){_e++,Me[_e]=e.current,e.current=t}var X=v(null),le=v(null),re=v(null),Se=v(null);function ot(e,t){switch(Y(re,t),Y(le,e),Y(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yh(t),e=vh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(X),Y(X,e)}function Ge(){D(X),D(le),D(re)}function ml(e){e.memoizedState!==null&&Y(Se,e);var t=X.current,n=vh(t,e.type);t!==n&&(Y(le,e),Y(X,n))}function ji(e){le.current===e&&(D(X),D(le)),Se.current===e&&(D(Se),ai._currentValue=P)}var Pu,Zs;function ua(e){if(Pu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pu=t&&t[1]||"",Zs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pu+e+Zs}var Iu=!1;function ec(e,t){if(!e||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(T){var A=T}Reflect.construct(e,[],_)}else{try{_.call()}catch(T){A=T}e.call(_.prototype)}}else{try{throw Error()}catch(T){A=T}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(T){if(T&&A&&typeof T.stack=="string")return[T.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var h=c.split(`
`),S=f.split(`
`);for(l=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;if(a===h.length||l===S.length)for(a=h.length-1,l=S.length-1;1<=a&&0<=l&&h[a]!==S[l];)l--;for(;1<=a&&0<=l;a--,l--)if(h[a]!==S[l]){if(a!==1||l!==1)do if(a--,l--,0>l||h[a]!==S[l]){var N=`
`+h[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=l);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ua(n):""}function i0(e,t){switch(e.tag){case 26:case 27:case 5:return ua(e.type);case 16:return ua("Lazy");case 13:return e.child!==t&&t!==null?ua("Suspense Fallback"):ua("Suspense");case 19:return ua("SuspenseList");case 0:case 15:return ec(e.type,!1);case 11:return ec(e.type.render,!1);case 1:return ec(e.type,!0);case 31:return ua("Activity");default:return""}}function Vs(e){try{var t="",n=null;do t+=i0(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var tc=Object.prototype.hasOwnProperty,nc=r.unstable_scheduleCallback,ac=r.unstable_cancelCallback,u0=r.unstable_shouldYield,c0=r.unstable_requestPaint,Et=r.unstable_now,r0=r.unstable_getCurrentPriorityLevel,Ks=r.unstable_ImmediatePriority,Js=r.unstable_UserBlockingPriority,Ai=r.unstable_NormalPriority,s0=r.unstable_LowPriority,$s=r.unstable_IdlePriority,f0=r.log,o0=r.unstable_setDisableYieldValue,pl=null,Mt=null;function wn(e){if(typeof f0=="function"&&o0(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(pl,e)}catch{}}var Nt=Math.clz32?Math.clz32:m0,d0=Math.log,h0=Math.LN2;function m0(e){return e>>>=0,e===0?32:31-(d0(e)/h0|0)|0}var zi=256,Ti=262144,Ei=4194304;function ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?l=ca(a):(c&=f,c!==0?l=ca(c):n||(n=f&~e,n!==0&&(l=ca(n))))):(f=a&~i,f!==0?l=ca(f):c!==0?l=ca(c):n||(n=a&~e,n!==0&&(l=ca(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function gl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function p0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ws(){var e=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),e}function lc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g0(e,t,n,a,l,i){var c=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var f=e.entanglements,h=e.expirationTimes,S=e.hiddenUpdates;for(n=c&~n;0<n;){var N=31-Nt(n),_=1<<N;f[N]=0,h[N]=-1;var A=S[N];if(A!==null)for(S[N]=null,N=0;N<A.length;N++){var T=A[N];T!==null&&(T.lane&=-536870913)}n&=~_}a!==0&&Fs(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Fs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Nt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Nt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Is(e,t){var n=t&-t;return n=(n&42)!==0?1:ic(n),(n&(e.suspendedLanes|t))!==0?0:n}function ic(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ef(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Gh(e.type))}function tf(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var _n=Math.random().toString(36).slice(2),Ie="__reactFiber$"+_n,gt="__reactProps$"+_n,Ta="__reactContainer$"+_n,cc="__reactEvents$"+_n,y0="__reactListeners$"+_n,v0="__reactHandles$"+_n,nf="__reactResources$"+_n,vl="__reactMarker$"+_n;function rc(e){delete e[Ie],delete e[gt],delete e[cc],delete e[y0],delete e[v0]}function Ea(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Th(e);e!==null;){if(n=e[Ie])return n;e=Th(e)}return t}e=n,n=e.parentNode}return null}function Ma(e){if(e=e[Ie]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Na(e){var t=e[nf];return t||(t=e[nf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[vl]=!0}var af=new Set,lf={};function ra(e,t){Oa(e,t),Oa(e+"Capture",t)}function Oa(e,t){for(lf[e]=t,e=0;e<t.length;e++)af.add(t[e])}var x0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uf={},cf={};function b0(e){return tc.call(cf,e)?!0:tc.call(uf,e)?!1:x0.test(e)?cf[e]=!0:(uf[e]=!0,!1)}function Ni(e,t,n){if(b0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Oi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function dn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S0(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sc(e){if(!e._valueTracker){var t=rf(e)?"checked":"value";e._valueTracker=S0(e,t,""+e[t])}}function sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=rf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var j0=/[\n"\\]/g;function kt(e){return e.replace(j0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fc(e,t,n,a,l,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?oc(e,c,Bt(t)):n!=null?oc(e,c,Bt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Bt(f):e.removeAttribute("name")}function ff(e,t,n,a,l,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){sc(e);return}n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),sc(e)}function oc(e,t,n){t==="number"&&Ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ca(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function of(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function df(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Ft(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),sc(e)}function wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||A0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function mf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&hf(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&hf(e,i,t[i])}function dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wi(e){return T0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hn(){}var hc=null;function mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Da=null;function pf(e){var t=Ma(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[gt]||null;if(!l)throw Error(s(90));fc(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&sf(a)}break e;case"textarea":of(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ca(e,!!n.multiple,t,!1)}}}var pc=!1;function gf(e,t,n){if(pc)return e(t,n);pc=!0;try{var a=e(t);return a}finally{if(pc=!1,(_a!==null||Da!==null)&&(vu(),_a&&(t=_a,e=Da,Da=_a=null,pf(t),e)))for(t=0;t<e.length;t++)pf(e[t])}}function bl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=!1;if(mn)try{var Sl={};Object.defineProperty(Sl,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Sl,Sl),window.removeEventListener("test",Sl,Sl)}catch{gc=!1}var Dn=null,yc=null,_i=null;function yf(){if(_i)return _i;var e,t=yc,n=t.length,a,l="value"in Dn?Dn.value:Dn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===l[i-a];a++);return _i=l.slice(e,1<a?1-a:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function vf(){return!1}function yt(e){function t(n,a,l,i,c){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ri:vf,this.isPropagationStopped=vf,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=yt(sa),jl=R({},sa,{view:0,detail:0}),E0=yt(jl),vc,xc,Al,Hi=R({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Al&&(Al&&e.type==="mousemove"?(vc=e.screenX-Al.screenX,xc=e.screenY-Al.screenY):xc=vc=0,Al=e),vc)},movementY:function(e){return"movementY"in e?e.movementY:xc}}),xf=yt(Hi),M0=R({},Hi,{dataTransfer:0}),N0=yt(M0),O0=R({},jl,{relatedTarget:0}),bc=yt(O0),C0=R({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=yt(C0),_0=R({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D0=yt(_0),R0=R({},sa,{data:0}),bf=yt(R0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=q0[e])?!!t[e]:!1}function Sc(){return B0}var k0=R({},jl,{key:function(e){if(e.key){var t=U0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?H0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=yt(k0),G0=R({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=yt(G0),L0=R({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),X0=yt(L0),Q0=R({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=yt(Q0),V0=R({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=yt(V0),J0=R({},sa,{newState:0,oldState:0}),$0=yt(J0),W0=[9,13,27,32],jc=mn&&"CompositionEvent"in window,zl=null;mn&&"documentMode"in document&&(zl=document.documentMode);var F0=mn&&"TextEvent"in window&&!zl,jf=mn&&(!jc||zl&&8<zl&&11>=zl),Af=" ",zf=!1;function Tf(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function P0(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(zf=!0,Af);case"textInput":return e=t.data,e===Af&&zf?null:e;default:return null}}function I0(e,t){if(Ra)return e==="compositionend"||!jc&&Tf(e,t)?(e=yf(),_i=yc=Dn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jf&&t.locale!=="ko"?null:t.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!e1[e.type]:t==="textarea"}function Nf(e,t,n,a){_a?Da?Da.push(a):Da=[a]:_a=a,t=Tu(t,"onChange"),0<t.length&&(n=new Ui("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Tl=null,El=null;function t1(e){oh(e,0)}function qi(e){var t=xl(e);if(sf(t))return e}function Of(e,t){if(e==="change")return t}var Cf=!1;if(mn){var Ac;if(mn){var zc="oninput"in document;if(!zc){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),zc=typeof wf.oninput=="function"}Ac=zc}else Ac=!1;Cf=Ac&&(!document.documentMode||9<document.documentMode)}function _f(){Tl&&(Tl.detachEvent("onpropertychange",Df),El=Tl=null)}function Df(e){if(e.propertyName==="value"&&qi(El)){var t=[];Nf(t,El,e,mc(e)),gf(t1,t)}}function n1(e,t,n){e==="focusin"?(_f(),Tl=t,El=n,Tl.attachEvent("onpropertychange",Df)):e==="focusout"&&_f()}function a1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(El)}function l1(e,t){if(e==="click")return qi(t)}function i1(e,t){if(e==="input"||e==="change")return qi(t)}function u1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:u1;function Ml(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!tc.call(t,l)||!Ot(e[l],t[l]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uf(e,t){var n=Rf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ci(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var c1=mn&&"documentMode"in document&&11>=document.documentMode,Ua=null,Ec=null,Nl=null,Mc=!1;function Bf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mc||Ua==null||Ua!==Ci(a)||(a=Ua,"selectionStart"in a&&Tc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Nl&&Ml(Nl,a)||(Nl=a,a=Tu(Ec,"onSelect"),0<a.length&&(t=new Ui("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ua)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ha={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},Nc={},kf={};mn&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function oa(e){if(Nc[e])return Nc[e];if(!Ha[e])return e;var t=Ha[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kf)return Nc[e]=t[n];return e}var Yf=oa("animationend"),Gf=oa("animationiteration"),Lf=oa("animationstart"),r1=oa("transitionrun"),s1=oa("transitionstart"),f1=oa("transitioncancel"),Xf=oa("transitionend"),Qf=new Map,Oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oc.push("scrollEnd");function Pt(e,t){Qf.set(e,t),ra(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yt=[],qa=0,Cc=0;function ki(){for(var e=qa,t=Cc=qa=0;t<e;){var n=Yt[t];Yt[t++]=null;var a=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var i=Yt[t];if(Yt[t++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}i!==0&&Zf(n,l,i)}}function Yi(e,t,n,a){Yt[qa++]=e,Yt[qa++]=t,Yt[qa++]=n,Yt[qa++]=a,Cc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function wc(e,t,n,a){return Yi(e,t,n,a),Gi(e)}function da(e,t){return Yi(e,null,null,t),Gi(e)}function Zf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Nt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Gi(e){if(50<Wl)throw Wl=0,Yr=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function o1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,a){return new o1(e,t,n,a)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Li(e,t,n,a,l,i){var c=0;if(a=e,typeof e=="function")_c(e)&&(c=1);else if(typeof e=="string")c=gp(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pt:return e=Ct(31,n,t,l),e.elementType=pt,e.lanes=i,e;case M:return ha(n.children,l,i,t);case q:c=8,l|=24;break;case B:return e=Ct(12,n,t,l|2),e.elementType=B,e.lanes=i,e;case U:return e=Ct(13,n,t,l),e.elementType=U,e.lanes=i,e;case I:return e=Ct(19,n,t,l),e.elementType=I,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:c=10;break e;case F:c=9;break e;case pe:c=11;break e;case G:c=14;break e;case me:c=16,a=null;break e}c=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Ct(c,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function ha(e,t,n,a){return e=Ct(7,e,a,t),e.lanes=n,e}function Dc(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Kf(e){var t=Ct(18,null,null,0);return t.stateNode=e,t}function Rc(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jf=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Jf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Vs(t)},Jf.set(e,t),t)}return{value:e,source:t,stack:Vs(t)}}var ka=[],Ya=0,Xi=null,Ol=0,Lt=[],Xt=0,Rn=null,nn=1,an="";function gn(e,t){ka[Ya++]=Ol,ka[Ya++]=Xi,Xi=e,Ol=t}function $f(e,t,n){Lt[Xt++]=nn,Lt[Xt++]=an,Lt[Xt++]=Rn,Rn=e;var a=nn;e=an;var l=32-Nt(a)-1;a&=~(1<<l),n+=1;var i=32-Nt(t)+l;if(30<i){var c=l-l%5;i=(a&(1<<c)-1).toString(32),a>>=c,l-=c,nn=1<<32-Nt(t)+l|n<<l|a,an=i+e}else nn=1<<i|n<<l|a,an=e}function Uc(e){e.return!==null&&(gn(e,1),$f(e,1,0))}function Hc(e){for(;e===Xi;)Xi=ka[--Ya],ka[Ya]=null,Ol=ka[--Ya],ka[Ya]=null;for(;e===Rn;)Rn=Lt[--Xt],Lt[Xt]=null,an=Lt[--Xt],Lt[Xt]=null,nn=Lt[--Xt],Lt[Xt]=null}function Wf(e,t){Lt[Xt++]=nn,Lt[Xt++]=an,Lt[Xt++]=Rn,nn=t.id,an=t.overflow,Rn=e}var et=null,Re=null,he=!1,Un=null,Qt=!1,qc=Error(s(519));function Hn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cl(Gt(t,e)),qc}function Ff(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[gt]=a,n){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(n=0;n<Pl.length;n++)fe(Pl[n],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),ff(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),df(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||ph(t.textContent,n)?(a.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),a.onScroll!=null&&fe("scroll",t),a.onScrollEnd!=null&&fe("scrollend",t),a.onClick!=null&&(t.onclick=hn),t=!0):t=!1,t||Hn(e,!0)}function Pf(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:et=et.return}}function Ga(e){if(e!==et)return!1;if(!he)return Pf(e),he=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ts(e.type,e.memoizedProps)),n=!n),n&&Re&&Hn(e),Pf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Re=zh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Re=zh(e)}else t===27?(t=Re,Wn(e.type)?(e=us,us=null,Re=e):Re=t):Re=et?Vt(e.stateNode.nextSibling):null;return!0}function ma(){Re=et=null,he=!1}function Bc(){var e=Un;return e!==null&&(St===null?St=e:St.push.apply(St,e),Un=null),e}function Cl(e){Un===null?Un=[e]:Un.push(e)}var kc=v(null),pa=null,yn=null;function qn(e,t,n){Y(kc,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=kc.current,D(kc)}function Yc(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Gc(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=l;for(var h=0;h<t.length;h++)if(f.context===t[h]){i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),Yc(i.return,n,e),a||(c=null);break e}i=f.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=n,i=c.alternate,i!==null&&(i.lanes|=n),Yc(c,n,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function La(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var f=l.type;Ot(l.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(l===Se.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ai):e=[ai])}l=l.return}e!==null&&Gc(t,e,n,a),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){pa=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return If(pa,e)}function Zi(e,t){return pa===null&&ga(e),If(e,t)}function If(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},yn===null){if(e===null)throw Error(s(308));yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yn=yn.next=t;return n}var d1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},h1=r.unstable_scheduleCallback,m1=r.unstable_NormalPriority,Qe={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new d1,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&h1(m1,function(){e.controller.abort()})}var _l=null,Xc=0,Xa=0,Qa=null;function p1(e,t){if(_l===null){var n=_l=[];Xc=0,Xa=Vr(),Qa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Xc++,t.then(eo,eo),t}function eo(){if(--Xc===0&&_l!==null){Qa!==null&&(Qa.status="fulfilled");var e=_l;_l=null,Xa=0,Qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function g1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var to=C.S;C.S=function(e,t){kd=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&p1(e,t),to!==null&&to(e,t)};var ya=v(null);function Qc(){var e=ya.current;return e!==null?e:De.pooledCache}function Vi(e,t){t===null?Y(ya,ya.current):Y(ya,t.pool)}function no(){var e=Qc();return e===null?null:{parent:Qe._currentValue,pool:e}}var Za=Error(s(460)),Zc=Error(s(474)),Ki=Error(s(542)),Ji={then:function(){}};function ao(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hn,hn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uo(e),e;default:if(typeof t.status=="string")t.then(hn,hn);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uo(e),e}throw xa=t,Za}}function va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xa=n,Za):n}}var xa=null;function io(){if(xa===null)throw Error(s(459));var e=xa;return xa=null,e}function uo(e){if(e===Za||e===Ki)throw Error(s(483))}var Va=null,Dl=0;function $i(e){var t=Dl;return Dl+=1,Va===null&&(Va=[]),lo(Va,e,t)}function Rl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wi(e,t){throw t.$$typeof===J?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function co(e){function t(x,y){if(e){var b=x.deletions;b===null?(x.deletions=[y],x.flags|=16):b.push(y)}}function n(x,y){if(!e)return null;for(;y!==null;)t(x,y),y=y.sibling;return null}function a(x){for(var y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function l(x,y){return x=pn(x,y),x.index=0,x.sibling=null,x}function i(x,y,b){return x.index=b,e?(b=x.alternate,b!==null?(b=b.index,b<y?(x.flags|=67108866,y):b):(x.flags|=67108866,y)):(x.flags|=1048576,y)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function f(x,y,b,w){return y===null||y.tag!==6?(y=Dc(b,x.mode,w),y.return=x,y):(y=l(y,b),y.return=x,y)}function h(x,y,b,w){var V=b.type;return V===M?N(x,y,b.props.children,w,b.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===me&&va(V)===y.type)?(y=l(y,b.props),Rl(y,b),y.return=x,y):(y=Li(b.type,b.key,b.props,null,x.mode,w),Rl(y,b),y.return=x,y)}function S(x,y,b,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=Rc(b,x.mode,w),y.return=x,y):(y=l(y,b.children||[]),y.return=x,y)}function N(x,y,b,w,V){return y===null||y.tag!==7?(y=ha(b,x.mode,w,V),y.return=x,y):(y=l(y,b),y.return=x,y)}function _(x,y,b){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Dc(""+y,x.mode,b),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ae:return b=Li(y.type,y.key,y.props,null,x.mode,b),Rl(b,y),b.return=x,b;case E:return y=Rc(y,x.mode,b),y.return=x,y;case me:return y=va(y),_(x,y,b)}if(Ft(y)||it(y))return y=ha(y,x.mode,b,null),y.return=x,y;if(typeof y.then=="function")return _(x,$i(y),b);if(y.$$typeof===$)return _(x,Zi(x,y),b);Wi(x,y)}return null}function A(x,y,b,w){var V=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return V!==null?null:f(x,y,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ae:return b.key===V?h(x,y,b,w):null;case E:return b.key===V?S(x,y,b,w):null;case me:return b=va(b),A(x,y,b,w)}if(Ft(b)||it(b))return V!==null?null:N(x,y,b,w,null);if(typeof b.then=="function")return A(x,y,$i(b),w);if(b.$$typeof===$)return A(x,y,Zi(x,b),w);Wi(x,b)}return null}function T(x,y,b,w,V){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return x=x.get(b)||null,f(y,x,""+w,V);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ae:return x=x.get(w.key===null?b:w.key)||null,h(y,x,w,V);case E:return x=x.get(w.key===null?b:w.key)||null,S(y,x,w,V);case me:return w=va(w),T(x,y,b,w,V)}if(Ft(w)||it(w))return x=x.get(b)||null,N(y,x,w,V,null);if(typeof w.then=="function")return T(x,y,b,$i(w),V);if(w.$$typeof===$)return T(x,y,b,Zi(y,w),V);Wi(y,w)}return null}function L(x,y,b,w){for(var V=null,ge=null,Z=y,ue=y=0,de=null;Z!==null&&ue<b.length;ue++){Z.index>ue?(de=Z,Z=null):de=Z.sibling;var ye=A(x,Z,b[ue],w);if(ye===null){Z===null&&(Z=de);break}e&&Z&&ye.alternate===null&&t(x,Z),y=i(ye,y,ue),ge===null?V=ye:ge.sibling=ye,ge=ye,Z=de}if(ue===b.length)return n(x,Z),he&&gn(x,ue),V;if(Z===null){for(;ue<b.length;ue++)Z=_(x,b[ue],w),Z!==null&&(y=i(Z,y,ue),ge===null?V=Z:ge.sibling=Z,ge=Z);return he&&gn(x,ue),V}for(Z=a(Z);ue<b.length;ue++)de=T(Z,x,ue,b[ue],w),de!==null&&(e&&de.alternate!==null&&Z.delete(de.key===null?ue:de.key),y=i(de,y,ue),ge===null?V=de:ge.sibling=de,ge=de);return e&&Z.forEach(function(ta){return t(x,ta)}),he&&gn(x,ue),V}function W(x,y,b,w){if(b==null)throw Error(s(151));for(var V=null,ge=null,Z=y,ue=y=0,de=null,ye=b.next();Z!==null&&!ye.done;ue++,ye=b.next()){Z.index>ue?(de=Z,Z=null):de=Z.sibling;var ta=A(x,Z,ye.value,w);if(ta===null){Z===null&&(Z=de);break}e&&Z&&ta.alternate===null&&t(x,Z),y=i(ta,y,ue),ge===null?V=ta:ge.sibling=ta,ge=ta,Z=de}if(ye.done)return n(x,Z),he&&gn(x,ue),V;if(Z===null){for(;!ye.done;ue++,ye=b.next())ye=_(x,ye.value,w),ye!==null&&(y=i(ye,y,ue),ge===null?V=ye:ge.sibling=ye,ge=ye);return he&&gn(x,ue),V}for(Z=a(Z);!ye.done;ue++,ye=b.next())ye=T(Z,x,ue,ye.value,w),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?ue:ye.key),y=i(ye,y,ue),ge===null?V=ye:ge.sibling=ye,ge=ye);return e&&Z.forEach(function(Mp){return t(x,Mp)}),he&&gn(x,ue),V}function Ce(x,y,b,w){if(typeof b=="object"&&b!==null&&b.type===M&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ae:e:{for(var V=b.key;y!==null;){if(y.key===V){if(V=b.type,V===M){if(y.tag===7){n(x,y.sibling),w=l(y,b.props.children),w.return=x,x=w;break e}}else if(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===me&&va(V)===y.type){n(x,y.sibling),w=l(y,b.props),Rl(w,b),w.return=x,x=w;break e}n(x,y);break}else t(x,y);y=y.sibling}b.type===M?(w=ha(b.props.children,x.mode,w,b.key),w.return=x,x=w):(w=Li(b.type,b.key,b.props,null,x.mode,w),Rl(w,b),w.return=x,x=w)}return c(x);case E:e:{for(V=b.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(x,y.sibling),w=l(y,b.children||[]),w.return=x,x=w;break e}else{n(x,y);break}else t(x,y);y=y.sibling}w=Rc(b,x.mode,w),w.return=x,x=w}return c(x);case me:return b=va(b),Ce(x,y,b,w)}if(Ft(b))return L(x,y,b,w);if(it(b)){if(V=it(b),typeof V!="function")throw Error(s(150));return b=V.call(b),W(x,y,b,w)}if(typeof b.then=="function")return Ce(x,y,$i(b),w);if(b.$$typeof===$)return Ce(x,y,Zi(x,b),w);Wi(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,y!==null&&y.tag===6?(n(x,y.sibling),w=l(y,b),w.return=x,x=w):(n(x,y),w=Dc(b,x.mode,w),w.return=x,x=w),c(x)):n(x,y)}return function(x,y,b,w){try{Dl=0;var V=Ce(x,y,b,w);return Va=null,V}catch(Z){if(Z===Za||Z===Ki)throw Z;var ge=Ct(29,Z,null,x.mode);return ge.lanes=w,ge.return=x,ge}}}var ba=co(!0),ro=co(!1),Bn=!1;function Vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Gi(e),Zf(e,null,n),t}return Yi(e,a,t,n),Gi(e)}function Ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ps(e,n)}}function Jc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $c=!1;function Hl(){if($c){var e=Qa;if(e!==null)throw e}}function ql(e,t,n,a){$c=!1;var l=e.updateQueue;Bn=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var h=f,S=h.next;h.next=null,c===null?i=S:c.next=S,c=h;var N=e.alternate;N!==null&&(N=N.updateQueue,f=N.lastBaseUpdate,f!==c&&(f===null?N.firstBaseUpdate=S:f.next=S,N.lastBaseUpdate=h))}if(i!==null){var _=l.baseState;c=0,N=S=h=null,f=i;do{var A=f.lane&-536870913,T=A!==f.lane;if(T?(oe&A)===A:(a&A)===A){A!==0&&A===Xa&&($c=!0),N!==null&&(N=N.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var L=e,W=f;A=t;var Ce=n;switch(W.tag){case 1:if(L=W.payload,typeof L=="function"){_=L.call(Ce,_,A);break e}_=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=W.payload,A=typeof L=="function"?L.call(Ce,_,A):L,A==null)break e;_=R({},_,A);break e;case 2:Bn=!0}}A=f.callback,A!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[A]:T.push(A))}else T={lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},N===null?(S=N=T,h=_):N=N.next=T,c|=A;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;T=f,f=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);N===null&&(h=_),l.baseState=h,l.firstBaseUpdate=S,l.lastBaseUpdate=N,i===null&&(l.shared.lanes=0),Zn|=c,e.lanes=c,e.memoizedState=_}}function so(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function fo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)so(n[e],t)}var Ka=v(null),Fi=v(0);function oo(e,t){e=Mn,Y(Fi,e),Y(Ka,t),Mn=e|t.baseLanes}function Wc(){Y(Fi,Mn),Y(Ka,Ka.current)}function Fc(){Mn=Fi.current,D(Ka),D(Fi)}var wt=v(null),Zt=null;function Gn(e){var t=e.alternate;Y(Le,Le.current&1),Y(wt,e),Zt===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(Zt=e)}function Pc(e){Y(Le,Le.current),Y(wt,e),Zt===null&&(Zt=e)}function ho(e){e.tag===22?(Y(Le,Le.current),Y(wt,e),Zt===null&&(Zt=e)):Ln()}function Ln(){Y(Le,Le.current),Y(wt,wt.current)}function _t(e){D(wt),Zt===e&&(Zt=null),D(Le)}var Le=v(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ls(n)||is(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xn=0,ie=null,Ne=null,Ze=null,Ii=!1,Ja=!1,Sa=!1,eu=0,Bl=0,$a=null,y1=0;function ke(){throw Error(s(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function er(e,t,n,a,l,i){return xn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Wo:pr,Sa=!1,i=n(a,l),Sa=!1,Ja&&(i=po(t,n,a,l)),mo(e),i}function mo(e){C.H=Gl;var t=Ne!==null&&Ne.next!==null;if(xn=0,Ze=Ne=ie=null,Ii=!1,Bl=0,$a=null,t)throw Error(s(300));e===null||Ve||(e=e.dependencies,e!==null&&Qi(e)&&(Ve=!0))}function po(e,t,n,a){ie=e;var l=0;do{if(Ja&&($a=null),Bl=0,Ja=!1,25<=l)throw Error(s(301));if(l+=1,Ze=Ne=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=Fo,i=t(n,a)}while(Ja);return i}function v1(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?kl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ie.flags|=1024),t}function tr(){var e=eu!==0;return eu=0,e}function nr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ar(e){if(Ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ii=!1}xn=0,Ze=Ne=ie=null,Ja=!1,Bl=eu=0,$a=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ie.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Xe(){if(Ne===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ze===null?ie.memoizedState:Ze.next;if(t!==null)Ze=t,Ne=e;else{if(e===null)throw ie.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ze===null?ie.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(e){var t=Bl;return Bl+=1,$a===null&&($a=[]),e=lo($a,e,t),t=ie,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Wo:pr),e}function nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return kl(e);if(e.$$typeof===$)return tt(e)}throw Error(s(438,String(e)))}function lr(e){var t=null,n=ie.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ie.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=tu(),ie.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Tt;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function au(e){var t=Xe();return ir(t,Ne,e)}function ir(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var f=c=null,h=null,S=t,N=!1;do{var _=S.lane&-536870913;if(_!==S.lane?(oe&_)===_:(xn&_)===_){var A=S.revertLane;if(A===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),_===Xa&&(N=!0);else if((xn&A)===A){S=S.next,A===Xa&&(N=!0);continue}else _={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(f=h=_,c=i):h=h.next=_,ie.lanes|=A,Zn|=A;_=S.action,Sa&&n(i,_),i=S.hasEagerState?S.eagerState:n(i,_)}else A={lane:_,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(f=h=A,c=i):h=h.next=A,ie.lanes|=_,Zn|=_;S=S.next}while(S!==null&&S!==t);if(h===null?c=i:h.next=f,!Ot(i,e.memoizedState)&&(Ve=!0,N&&(n=Qa,n!==null)))throw n;e.memoizedState=i,e.baseState=c,e.baseQueue=h,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ur(e){var t=Xe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do i=e(i,c.action),c=c.next;while(c!==l);Ot(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function go(e,t,n){var a=ie,l=Xe(),i=he;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var c=!Ot((Ne||l).memoizedState,n);if(c&&(l.memoizedState=n,Ve=!0),l=l.queue,sr(xo.bind(null,a,l,e),[e]),l.getSnapshot!==t||c||Ze!==null&&Ze.memoizedState.tag&1){if(a.flags|=2048,Wa(9,{destroy:void 0},vo.bind(null,a,l,n,t),null),De===null)throw Error(s(349));i||(xn&127)!==0||yo(a,t,n)}return n}function yo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t=tu(),ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vo(e,t,n,a){t.value=n,t.getSnapshot=a,bo(t)&&So(e)}function xo(e,t,n){return n(function(){bo(t)&&So(e)})}function bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function So(e){var t=da(e,2);t!==null&&jt(t,e,2)}function cr(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),Sa){wn(!0);try{n()}finally{wn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function jo(e,t,n,a){return e.baseState=n,ir(e,Ne,typeof a=="function"?a:bn)}function x1(e,t,n,a,l){if(uu(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};C.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Ao(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Ao(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=C.T,c={};C.T=c;try{var f=n(l,a),h=C.S;h!==null&&h(c,f),zo(e,t,f)}catch(S){rr(e,t,S)}finally{i!==null&&c.types!==null&&(i.types=c.types),C.T=i}}else try{i=n(l,a),zo(e,t,i)}catch(S){rr(e,t,S)}}function zo(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){To(e,t,a)},function(a){return rr(e,t,a)}):To(e,t,n)}function To(e,t,n){t.status="fulfilled",t.value=n,Eo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ao(e,n)))}function rr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Eo(t),t=t.next;while(t!==a)}e.action=null}function Eo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Mo(e,t){return t}function No(e,t){if(he){var n=De.formState;if(n!==null){e:{var a=ie;if(he){if(Re){t:{for(var l=Re,i=Qt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Vt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Re=Vt(l.nextSibling),a=l.data==="F!";break e}}Hn(a)}a=!1}a&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},n.queue=a,n=Ko.bind(null,ie,a),a.dispatch=n,a=cr(!1),i=mr.bind(null,ie,!1,a.queue),a=dt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=x1.bind(null,ie,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Oo(e){var t=Xe();return Co(t,Ne,e)}function Co(e,t,n){if(t=ir(e,t,Mo)[0],e=au(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=kl(t)}catch(c){throw c===Za?Ki:c}else a=t;t=Xe();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(ie.flags|=2048,Wa(9,{destroy:void 0},b1.bind(null,l,n),null)),[a,i,e]}function b1(e,t){e.action=t}function wo(e){var t=Xe(),n=Ne;if(n!==null)return Co(t,n,e);Xe(),t=t.memoizedState,n=Xe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Wa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ie.updateQueue,t===null&&(t=tu(),ie.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function _o(){return Xe().memoizedState}function lu(e,t,n,a){var l=dt();ie.flags|=e,l.memoizedState=Wa(1|t,{destroy:void 0},n,a===void 0?null:a)}function iu(e,t,n,a){var l=Xe();a=a===void 0?null:a;var i=l.memoizedState.inst;Ne!==null&&a!==null&&Ic(a,Ne.memoizedState.deps)?l.memoizedState=Wa(t,i,n,a):(ie.flags|=e,l.memoizedState=Wa(1|t,i,n,a))}function Do(e,t){lu(8390656,8,e,t)}function sr(e,t){iu(2048,8,e,t)}function S1(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=tu(),ie.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ro(e){var t=Xe().memoizedState;return S1({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Uo(e,t){return iu(4,2,e,t)}function Ho(e,t){return iu(4,4,e,t)}function qo(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bo(e,t,n){n=n!=null?n.concat([e]):null,iu(4,4,qo.bind(null,t,e),n)}function fr(){}function ko(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ic(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Yo(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ic(t,a[1]))return a[0];if(a=e(),Sa){wn(!0);try{e()}finally{wn(!1)}}return n.memoizedState=[a,t],a}function or(e,t,n){return n===void 0||(xn&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Gd(),ie.lanes|=e,Zn|=e,n)}function Go(e,t,n,a){return Ot(n,t)?n:Ka.current!==null?(e=or(e,n,a),Ot(e,t)||(Ve=!0),e):(xn&42)===0||(xn&1073741824)!==0&&(oe&261930)===0?(Ve=!0,e.memoizedState=n):(e=Gd(),ie.lanes|=e,Zn|=e,t)}function Lo(e,t,n,a,l){var i=k.p;k.p=i!==0&&8>i?i:8;var c=C.T,f={};C.T=f,mr(e,!1,t,n);try{var h=l(),S=C.S;if(S!==null&&S(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var N=g1(h,a);Yl(e,t,N,Ut(e))}else Yl(e,t,a,Ut(e))}catch(_){Yl(e,t,{then:function(){},status:"rejected",reason:_},Ut())}finally{k.p=i,c!==null&&f.types!==null&&(c.types=f.types),C.T=c}}function j1(){}function dr(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=Xo(e).queue;Lo(e,l,t,P,n===null?j1:function(){return Qo(e),n(a)})}function Xo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qo(e){var t=Xo(e);t.next===null&&(t=e.alternate.memoizedState),Yl(e,t.next.queue,{},Ut())}function hr(){return tt(ai)}function Zo(){return Xe().memoizedState}function Vo(){return Xe().memoizedState}function A1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=kn(n);var a=Yn(t,e,n);a!==null&&(jt(a,t,n),Ul(a,t,n)),t={cache:Lc()},e.payload=t;return}t=t.return}}function z1(e,t,n){var a=Ut();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},uu(e)?Jo(t,n):(n=wc(e,t,n,a),n!==null&&(jt(n,e,a),$o(n,t,a)))}function Ko(e,t,n){var a=Ut();Yl(e,t,n,a)}function Yl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(uu(e))Jo(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,n);if(l.hasEagerState=!0,l.eagerState=f,Ot(f,c))return Yi(e,t,l,0),De===null&&ki(),!1}catch{}if(n=wc(e,t,l,a),n!==null)return jt(n,e,a),$o(n,t,a),!0}return!1}function mr(e,t,n,a){if(a={lane:2,revertLane:Vr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(t)throw Error(s(479))}else t=wc(e,n,a,2),t!==null&&jt(t,e,2)}function uu(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Jo(e,t){Ja=Ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $o(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ps(e,n)}}var Gl={readContext:tt,use:nu,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};Gl.useEffectEvent=ke;var Wo={readContext:tt,use:nu,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Do,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,lu(4194308,4,qo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lu(4194308,4,e,t)},useInsertionEffect:function(e,t){lu(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var a=e();if(Sa){wn(!0);try{e()}finally{wn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=dt();if(n!==void 0){var l=n(t);if(Sa){wn(!0);try{n(t)}finally{wn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=z1.bind(null,ie,e),[a.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=cr(e);var t=e.queue,n=Ko.bind(null,ie,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fr,useDeferredValue:function(e,t){var n=dt();return or(n,e,t)},useTransition:function(){var e=cr(!1);return e=Lo.bind(null,ie,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ie,l=dt();if(he){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),De===null)throw Error(s(349));(oe&127)!==0||yo(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Do(xo.bind(null,a,i,e),[e]),a.flags|=2048,Wa(9,{destroy:void 0},vo.bind(null,a,i,n,t),null),n},useId:function(){var e=dt(),t=De.identifierPrefix;if(he){var n=an,a=nn;n=(a&~(1<<32-Nt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=eu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=y1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:hr,useFormState:No,useActionState:No,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mr.bind(null,ie,!0,n),n.dispatch=t,[e,t]},useMemoCache:lr,useCacheRefresh:function(){return dt().memoizedState=A1.bind(null,ie)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((ve&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},pr={readContext:tt,use:nu,useCallback:ko,useContext:tt,useEffect:sr,useImperativeHandle:Bo,useInsertionEffect:Uo,useLayoutEffect:Ho,useMemo:Yo,useReducer:au,useRef:_o,useState:function(){return au(bn)},useDebugValue:fr,useDeferredValue:function(e,t){var n=Xe();return Go(n,Ne.memoizedState,e,t)},useTransition:function(){var e=au(bn)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:kl(e),t]},useSyncExternalStore:go,useId:Zo,useHostTransitionStatus:hr,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){var n=Xe();return jo(n,Ne,e,t)},useMemoCache:lr,useCacheRefresh:Vo};pr.useEffectEvent=Ro;var Fo={readContext:tt,use:nu,useCallback:ko,useContext:tt,useEffect:sr,useImperativeHandle:Bo,useInsertionEffect:Uo,useLayoutEffect:Ho,useMemo:Yo,useReducer:ur,useRef:_o,useState:function(){return ur(bn)},useDebugValue:fr,useDeferredValue:function(e,t){var n=Xe();return Ne===null?or(n,e,t):Go(n,Ne.memoizedState,e,t)},useTransition:function(){var e=ur(bn)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:kl(e),t]},useSyncExternalStore:go,useId:Zo,useHostTransitionStatus:hr,useFormState:wo,useActionState:wo,useOptimistic:function(e,t){var n=Xe();return Ne!==null?jo(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lr,useCacheRefresh:Vo};Fo.useEffectEvent=Ro;function gr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ut(),l=kn(a);l.payload=t,n!=null&&(l.callback=n),t=Yn(e,l,a),t!==null&&(jt(t,e,a),Ul(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ut(),l=kn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Yn(e,l,a),t!==null&&(jt(t,e,a),Ul(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),a=kn(n);a.tag=2,t!=null&&(a.callback=t),t=Yn(e,a,n),t!==null&&(jt(t,e,n),Ul(t,e,n))}};function Po(e,t,n,a,l,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!Ml(n,a)||!Ml(l,i):!0}function Io(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&yr.enqueueReplaceState(t,t.state,null)}function ja(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function ed(e){Bi(e)}function td(e){console.error(e)}function nd(e){Bi(e)}function cu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function ad(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function vr(e,t,n){return n=kn(n),n.tag=3,n.payload={element:null},n.callback=function(){cu(e,t)},n}function ld(e){return e=kn(e),e.tag=3,e}function id(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){ad(t,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){ad(t,n,a),typeof l!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function T1(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&La(t,n,l,!0),n=wt.current,n!==null){switch(n.tag){case 31:case 13:return Zt===null?xu():n.alternate===null&&Ye===0&&(Ye=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ji?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Xr(e,a,l)),!1;case 22:return n.flags|=65536,a===Ji?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Xr(e,a,l)),!1}throw Error(s(435,n.tag))}return Xr(e,a,l),xu(),!1}if(he)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==qc&&(e=Error(s(422),{cause:a}),Cl(Gt(e,n)))):(a!==qc&&(t=Error(s(423),{cause:a}),Cl(Gt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Gt(a,n),l=vr(e.stateNode,a,l),Jc(e,l),Ye!==4&&(Ye=2)),!1;var i=Error(s(520),{cause:a});if(i=Gt(i,n),$l===null?$l=[i]:$l.push(i),Ye!==4&&(Ye=2),t===null)return!0;a=Gt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=vr(n.stateNode,a,e),Jc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Vn===null||!Vn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=ld(l),id(l,e,n,a),Jc(n,l),!1}n=n.return}while(n!==null);return!1}var xr=Error(s(461)),Ve=!1;function nt(e,t,n,a){t.child=e===null?ro(t,null,n,a):ba(t,e.child,n,a)}function ud(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return ga(t),a=er(e,t,n,c,i,l),f=tr(),e!==null&&!Ve?(nr(e,t,l),Sn(e,t,l)):(he&&f&&Uc(t),t.flags|=1,nt(e,t,a,l),t.child)}function cd(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!_c(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,rd(e,t,i,a,l)):(e=Li(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Mr(e,l)){var c=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ml,n(c,a)&&e.ref===t.ref)return Sn(e,t,l)}return t.flags|=1,e=pn(i,a),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Ml(i,a)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=a=i,Mr(e,l))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,Sn(e,t,l)}return br(e,t,n,a,l)}function sd(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return fd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vi(t,i!==null?i.cachePool:null),i!==null?oo(t,i):Wc(),ho(t);else return a=t.lanes=536870912,fd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Vi(t,i.cachePool),oo(t,i),Ln(),t.memoizedState=null):(e!==null&&Vi(t,null),Wc(),Ln());return nt(e,t,l,n),t.child}function Ll(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fd(e,t,n,a,l){var i=Qc();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Vi(t,null),Wc(),ho(t),e!==null&&La(e,t,a,!0),t.childLanes=l,null}function ru(e,t){return t=fu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function od(e,t,n){return ba(t,e.child,null,n),e=ru(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function E1(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(a.mode==="hidden")return e=ru(t,a),t.lanes=536870912,Ll(null,e);if(Pc(t),(e=Re)?(e=Ah(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Kf(e),n.return=t,t.child=n,et=t,Re=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return ru(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Pc(t),l)if(t.flags&256)t.flags&=-257,t=od(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ve||La(e,t,n,!1),l=(n&e.childLanes)!==0,Ve||l){if(a=De,a!==null&&(c=Is(a,n),c!==0&&c!==i.retryLane))throw i.retryLane=c,da(e,c),jt(a,e,c),xr;xu(),t=od(e,t,n)}else e=i.treeContext,Re=Vt(c.nextSibling),et=t,he=!0,Un=null,Qt=!1,e!==null&&Wf(t,e),t=ru(t,a),t.flags|=4096;return t}return e=pn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function su(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function br(e,t,n,a,l){return ga(t),n=er(e,t,n,a,void 0,l),a=tr(),e!==null&&!Ve?(nr(e,t,l),Sn(e,t,l)):(he&&a&&Uc(t),t.flags|=1,nt(e,t,n,l),t.child)}function dd(e,t,n,a,l,i){return ga(t),t.updateQueue=null,n=po(t,a,n,l),mo(e),a=tr(),e!==null&&!Ve?(nr(e,t,i),Sn(e,t,i)):(he&&a&&Uc(t),t.flags|=1,nt(e,t,n,i),t.child)}function hd(e,t,n,a,l){if(ga(t),t.stateNode===null){var i=Ba,c=n.contextType;typeof c=="object"&&c!==null&&(i=tt(c)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=yr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Vc(t),c=n.contextType,i.context=typeof c=="object"&&c!==null?tt(c):Ba,i.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(gr(t,n,c,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&yr.enqueueReplaceState(i,i.state,null),ql(t,a,i,l),Hl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,h=ja(n,f);i.props=h;var S=i.context,N=n.contextType;c=Ba,typeof N=="object"&&N!==null&&(c=tt(N));var _=n.getDerivedStateFromProps;N=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||S!==c)&&Io(t,i,a,c),Bn=!1;var A=t.memoizedState;i.state=A,ql(t,a,i,l),Hl(),S=t.memoizedState,f||A!==S||Bn?(typeof _=="function"&&(gr(t,n,_,a),S=t.memoizedState),(h=Bn||Po(t,n,h,a,A,S,c))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=S),i.props=a,i.state=S,i.context=c,a=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Kc(e,t),c=t.memoizedProps,N=ja(n,c),i.props=N,_=t.pendingProps,A=i.context,S=n.contextType,h=Ba,typeof S=="object"&&S!==null&&(h=tt(S)),f=n.getDerivedStateFromProps,(S=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==_||A!==h)&&Io(t,i,a,h),Bn=!1,A=t.memoizedState,i.state=A,ql(t,a,i,l),Hl();var T=t.memoizedState;c!==_||A!==T||Bn||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof f=="function"&&(gr(t,n,f,a),T=t.memoizedState),(N=Bn||Po(t,n,N,a,A,T,h)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=T),i.props=a,i.state=T,i.context=h,a=N):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,su(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ba(t,e.child,null,l),t.child=ba(t,null,n,l)):nt(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Sn(e,t,l),e}function md(e,t,n,a){return ma(),t.flags|=256,nt(e,t,n,a),t.child}var Sr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jr(e){return{baseLanes:e,cachePool:no()}}function Ar(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function pd(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(l?Gn(t):Ln(),(e=Re)?(e=Ah(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Kf(e),n.return=t,t.child=n,et=t,Re=null)):e=null,e===null)throw Hn(t);return is(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,l?(Ln(),l=t.mode,f=fu({mode:"hidden",children:f},l),a=ha(a,l,n,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=jr(n),a.childLanes=Ar(e,c,n),t.memoizedState=Sr,Ll(null,a)):(Gn(t),zr(t,f))}var h=e.memoizedState;if(h!==null&&(f=h.dehydrated,f!==null)){if(i)t.flags&256?(Gn(t),t.flags&=-257,t=Tr(e,t,n)):t.memoizedState!==null?(Ln(),t.child=e.child,t.flags|=128,t=null):(Ln(),f=a.fallback,l=t.mode,a=fu({mode:"visible",children:a.children},l),f=ha(f,l,n,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,ba(t,e.child,null,n),a=t.child,a.memoizedState=jr(n),a.childLanes=Ar(e,c,n),t.memoizedState=Sr,t=Ll(null,a));else if(Gn(t),is(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var S=c.dgst;c=S,a=Error(s(419)),a.stack="",a.digest=c,Cl({value:a,source:null,stack:null}),t=Tr(e,t,n)}else if(Ve||La(e,t,n,!1),c=(n&e.childLanes)!==0,Ve||c){if(c=De,c!==null&&(a=Is(c,n),a!==0&&a!==h.retryLane))throw h.retryLane=a,da(e,a),jt(c,e,a),xr;ls(f)||xu(),t=Tr(e,t,n)}else ls(f)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Re=Vt(f.nextSibling),et=t,he=!0,Un=null,Qt=!1,e!==null&&Wf(t,e),t=zr(t,a.children),t.flags|=4096);return t}return l?(Ln(),f=a.fallback,l=t.mode,h=e.child,S=h.sibling,a=pn(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,S!==null?f=pn(S,f):(f=ha(f,l,n,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,Ll(null,a),a=t.child,f=e.child.memoizedState,f===null?f=jr(n):(l=f.cachePool,l!==null?(h=Qe._currentValue,l=l.parent!==h?{parent:h,pool:h}:l):l=no(),f={baseLanes:f.baseLanes|n,cachePool:l}),a.memoizedState=f,a.childLanes=Ar(e,c,n),t.memoizedState=Sr,Ll(e.child,a)):(Gn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function zr(e,t){return t=fu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fu(e,t){return e=Ct(22,e,null,t),e.lanes=0,e}function Tr(e,t,n){return ba(t,e.child,null,n),e=zr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Yc(e.return,t,n)}function Er(e,t,n,a,l,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=l,c.treeForkCount=i)}function yd(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var c=Le.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,Y(Le,c),nt(e,t,a,n),a=he?Ol:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,n,t);else if(e.tag===19)gd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Pi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Er(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Pi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Er(t,!0,n,null,i,a);break;case"together":Er(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(La(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qi(e)))}function M1(e,t,n){switch(t.tag){case 3:ot(t,t.stateNode.containerInfo),qn(t,Qe,e.memoizedState.cache),ma();break;case 27:case 5:ml(t);break;case 4:ot(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Pc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?pd(e,t,n):(Gn(t),e=Sn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(La(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return yd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Y(Le,Le.current),a)break;return null;case 22:return t.lanes=0,sd(e,t,n,t.pendingProps);case 24:qn(t,Qe,e.memoizedState.cache)}return Sn(e,t,n)}function vd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!Mr(e,n)&&(t.flags&128)===0)return Ve=!1,M1(e,t,n);Ve=(e.flags&131072)!==0}else Ve=!1,he&&(t.flags&1048576)!==0&&$f(t,Ol,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e=="function")_c(e)?(a=ja(e,a),t.tag=1,t=hd(null,t,e,a,n)):(t.tag=0,t=br(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===pe){t.tag=11,t=ud(null,t,e,a,n);break e}else if(l===G){t.tag=14,t=cd(null,t,e,a,n);break e}}throw t=on(e)||e,Error(s(306,t,""))}}return t;case 0:return br(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ja(a,t.pendingProps),hd(e,t,a,l,n);case 3:e:{if(ot(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Kc(e,t),ql(t,a,null,n);var c=t.memoizedState;if(a=c.cache,qn(t,Qe,a),a!==i.cache&&Gc(t,[Qe],n,!0),Hl(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=md(e,t,a,n);break e}else if(a!==l){l=Gt(Error(s(424)),t),Cl(l),t=md(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Vt(e.firstChild),et=t,he=!0,Un=null,Qt=!0,n=ro(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ma(),a===l){t=Sn(e,t,n);break e}nt(e,t,a,n)}t=t.child}return t;case 26:return su(e,t),e===null?(n=Oh(t.type,null,t.pendingProps,null))?t.memoizedState=n:he||(n=t.type,e=t.pendingProps,a=Eu(re.current).createElement(n),a[Ie]=t,a[gt]=e,at(a,n,e),We(a),t.stateNode=a):t.memoizedState=Oh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ml(t),e===null&&he&&(a=t.stateNode=Eh(t.type,t.pendingProps,re.current),et=t,Qt=!0,l=Re,Wn(t.type)?(us=l,Re=Vt(a.firstChild)):Re=l),nt(e,t,t.pendingProps.children,n),su(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((l=a=Re)&&(a=ap(a,t.type,t.pendingProps,Qt),a!==null?(t.stateNode=a,et=t,Re=Vt(a.firstChild),Qt=!1,l=!0):l=!1),l||Hn(t)),ml(t),l=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,ts(l,i)?a=null:c!==null&&ts(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=er(e,t,v1,null,null,n),ai._currentValue=l),su(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&he&&((e=n=Re)&&(n=lp(n,t.pendingProps,Qt),n!==null?(t.stateNode=n,et=t,Re=null,e=!0):e=!1),e||Hn(t)),null;case 13:return pd(e,t,n);case 4:return ot(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ba(t,null,a,n):nt(e,t,a,n),t.child;case 11:return ud(e,t,t.type,t.pendingProps,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,qn(t,t.type,a.value),nt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,ga(t),l=tt(l),a=a(l),t.flags|=1,nt(e,t,a,n),t.child;case 14:return cd(e,t,t.type,t.pendingProps,n);case 15:return rd(e,t,t.type,t.pendingProps,n);case 19:return yd(e,t,n);case 31:return E1(e,t,n);case 22:return sd(e,t,n,t.pendingProps);case 24:return ga(t),a=tt(Qe),e===null?(l=Qc(),l===null&&(l=De,i=Lc(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Vc(t),qn(t,Qe,l)):((e.lanes&n)!==0&&(Kc(e,t),ql(t,null,null,n),Hl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),qn(t,Qe,a)):(a=i.cache,qn(t,Qe,a),a!==l.cache&&Gc(t,[Qe],n,!0))),nt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function jn(e){e.flags|=4}function Nr(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Zd())e.flags|=8192;else throw xa=Ji,Zc}else e.flags&=-16777217}function xd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rh(t))if(Zd())e.flags|=8192;else throw xa=Ji,Zc}function ou(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ws():536870912,e.lanes|=t,el|=t)}function Xl(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function N1(e,t,n){var a=t.pendingProps;switch(Hc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),vn(Qe),Ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?jn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bc())),Ue(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(jn(t),i!==null?(Ue(t),xd(t,i)):(Ue(t),Nr(t,l,null,a,n))):i?i!==e.memoizedState?(jn(t),Ue(t),xd(t,i)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&jn(t),Ue(t),Nr(t,l,e,a,n)),null;case 27:if(ji(t),n=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ue(t),null}e=X.current,Ga(t)?Ff(t):(e=Eh(l,a,n),t.stateNode=e,jn(t))}return Ue(t),null;case 5:if(ji(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ue(t),null}if(i=X.current,Ga(t))Ff(t);else{var c=Eu(re.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(l,{is:a.is}):c.createElement(l)}}i[Ie]=t,i[gt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(at(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&jn(t)}}return Ue(t),Nr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,Ga(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=et,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||ph(e.nodeValue,n)),e||Hn(t,!0)}else e=Eu(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return Ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ga(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ie]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else n=Bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ue(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ga(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ie]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else l=Bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ou(t,t.updateQueue),Ue(t),null);case 4:return Ge(),e===null&&Wr(t.stateNode.containerInfo),Ue(t),null;case 10:return vn(t.type),Ue(t),null;case 19:if(D(Le),a=t.memoizedState,a===null)return Ue(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Xl(a,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Pi(e),i!==null){for(t.flags|=128,Xl(a,!1),e=i.updateQueue,t.updateQueue=e,ou(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Vf(n,e),n=n.sibling;return Y(Le,Le.current&1|2),he&&gn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Et()>gu&&(t.flags|=128,l=!0,Xl(a,!1),t.lanes=4194304)}else{if(!l)if(e=Pi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ou(t,e),Xl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!he)return Ue(t),null}else 2*Et()-a.renderingStartTime>gu&&n!==536870912&&(t.flags|=128,l=!0,Xl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Et(),e.sibling=null,n=Le.current,Y(Le,l?n&1|2:n&1),he&&gn(t,a.treeForkCount),e):(Ue(t),null);case 22:case 23:return _t(t),Fc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&ou(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&D(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(Qe),Ue(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function O1(e,t){switch(Hc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(Qe),Ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ji(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(s(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Le),null;case 4:return Ge(),null;case 10:return vn(t.type),null;case 22:case 23:return _t(t),Fc(),e!==null&&D(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(Qe),null;case 25:return null;default:return null}}function bd(e,t){switch(Hc(t),t.tag){case 3:vn(Qe),Ge();break;case 26:case 27:case 5:ji(t);break;case 4:Ge();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:D(Le);break;case 10:vn(t.type);break;case 22:case 23:_t(t),Fc(),e!==null&&D(ya);break;case 24:vn(Qe)}}function Ql(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,c=n.inst;a=i(),c.destroy=a}n=n.next}while(n!==l)}}catch(f){Te(t,t.return,f)}}function Xn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,l=t;var h=n,S=f;try{S()}catch(N){Te(l,h,N)}}}a=a.next}while(a!==i)}}catch(N){Te(t,t.return,N)}}function Sd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fo(t,n)}catch(a){Te(e,e.return,a)}}}function jd(e,t,n){n.props=ja(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Te(e,t,a)}}function Zl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Te(e,t,l)}}function ln(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Te(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Te(e,t,l)}else n.current=null}function Ad(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Te(e,e.return,l)}}function Or(e,t,n){try{var a=e.stateNode;F1(a,e.type,n,t),a[gt]=t}catch(l){Te(e,e.return,l)}}function zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function Cr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hn));else if(a!==4&&(a===27&&Wn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(wr(e,t,n),e=e.sibling;e!==null;)wr(e,t,n),e=e.sibling}function du(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Wn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}function Td(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);at(t,a,n),t[Ie]=e,t[gt]=n}catch(i){Te(e,e.return,i)}}var An=!1,Ke=!1,_r=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function C1(e,t){if(e=e.containerInfo,Ir=Du,e=qf(e),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var c=0,f=-1,h=-1,S=0,N=0,_=e,A=null;t:for(;;){for(var T;_!==n||l!==0&&_.nodeType!==3||(f=c+l),_!==i||a!==0&&_.nodeType!==3||(h=c+a),_.nodeType===3&&(c+=_.nodeValue.length),(T=_.firstChild)!==null;)A=_,_=T;for(;;){if(_===e)break t;if(A===n&&++S===l&&(f=c),A===i&&++N===a&&(h=c),(T=_.nextSibling)!==null)break;_=A,A=_.parentNode}_=T}n=f===-1||h===-1?null:{start:f,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(es={focusedElem:e,selectionRange:n},Du=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var L=ja(n.type,l);e=a.getSnapshotBeforeUpdate(L,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(W){Te(n,n.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)as(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":as(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function Md(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),a&4&&Ql(5,n);break;case 1:if(Tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){Te(n,n.return,c)}else{var l=ja(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Te(n,n.return,c)}}a&64&&Sd(n),a&512&&Zl(n,n.return);break;case 3:if(Tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fo(e,t)}catch(c){Te(n,n.return,c)}}break;case 27:t===null&&a&4&&Td(n);case 26:case 5:Tn(e,n),t===null&&a&4&&Ad(n),a&512&&Zl(n,n.return);break;case 12:Tn(e,n);break;case 31:Tn(e,n),a&4&&Cd(e,n);break;case 13:Tn(e,n),a&4&&wd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=k1.bind(null,n),ip(e,n))));break;case 22:if(a=n.memoizedState!==null||An,!a){t=t!==null&&t.memoizedState!==null||Ke,l=An;var i=Ke;An=a,(Ke=t)&&!i?En(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),An=l,Ke=i}break;case 30:break;default:Tn(e,n)}}function Nd(e){var t=e.alternate;t!==null&&(e.alternate=null,Nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&rc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,vt=!1;function zn(e,t,n){for(n=n.child;n!==null;)Od(e,t,n),n=n.sibling}function Od(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:Ke||ln(n,t),zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||ln(n,t);var a=qe,l=vt;Wn(n.type)&&(qe=n.stateNode,vt=!1),zn(e,t,n),ei(n.stateNode),qe=a,vt=l;break;case 5:Ke||ln(n,t);case 6:if(a=qe,l=vt,qe=null,zn(e,t,n),qe=a,vt=l,qe!==null)if(vt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(i){Te(n,t,i)}else try{qe.removeChild(n.stateNode)}catch(i){Te(n,t,i)}break;case 18:qe!==null&&(vt?(e=qe,Sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),rl(e)):Sh(qe,n.stateNode));break;case 4:a=qe,l=vt,qe=n.stateNode.containerInfo,vt=!0,zn(e,t,n),qe=a,vt=l;break;case 0:case 11:case 14:case 15:Xn(2,n,t),Ke||Xn(4,n,t),zn(e,t,n);break;case 1:Ke||(ln(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&jd(n,t,a)),zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:Ke=(a=Ke)||n.memoizedState!==null,zn(e,t,n),Ke=a;break;default:zn(e,t,n)}}function Cd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rl(e)}catch(n){Te(t,t.return,n)}}}function wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rl(e)}catch(n){Te(t,t.return,n)}}function w1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ed),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ed),t;default:throw Error(s(435,e.tag))}}function hu(e,t){var n=w1(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Y1.bind(null,e,a);a.then(l,l)}})}function xt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Wn(f.type)){qe=f.stateNode,vt=!1;break e}break;case 5:qe=f.stateNode,vt=!1;break e;case 3:case 4:qe=f.stateNode.containerInfo,vt=!0;break e}f=f.return}if(qe===null)throw Error(s(160));Od(i,c,l),qe=null,vt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}var It=null;function _d(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),bt(e),a&4&&(Xn(3,e,e.return),Ql(3,e),Xn(5,e,e.return));break;case 1:xt(t,e),bt(e),a&512&&(Ke||n===null||ln(n,n.return)),a&64&&An&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=It;if(xt(t,e),bt(e),a&512&&(Ke||n===null||ln(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[vl]||i[Ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),at(i,a,n),i[Ie]=e,We(i),a=i;break e;case"link":var c=_h("link","href",l).get(a+(n.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(f,1);break t}}i=l.createElement(a),at(i,a,n),l.head.appendChild(i);break;case"meta":if(c=_h("meta","content",l).get(a+(n.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(f,1);break t}}i=l.createElement(a),at(i,a,n),l.head.appendChild(i);break;default:throw Error(s(468,a))}i[Ie]=e,We(i),a=i}e.stateNode=a}else Dh(l,e.type,e.stateNode);else e.stateNode=wh(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Dh(l,e.type,e.stateNode):wh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Or(e,e.memoizedProps,n.memoizedProps)}break;case 27:xt(t,e),bt(e),a&512&&(Ke||n===null||ln(n,n.return)),n!==null&&a&4&&Or(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xt(t,e),bt(e),a&512&&(Ke||n===null||ln(n,n.return)),e.flags&32){l=e.stateNode;try{wa(l,"")}catch(L){Te(e,e.return,L)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Or(e,l,n!==null?n.memoizedProps:l)),a&1024&&(_r=!0);break;case 6:if(xt(t,e),bt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(L){Te(e,e.return,L)}}break;case 3:if(Ou=null,l=It,It=Mu(t.containerInfo),xt(t,e),It=l,bt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{rl(t.containerInfo)}catch(L){Te(e,e.return,L)}_r&&(_r=!1,Dd(e));break;case 4:a=It,It=Mu(e.stateNode.containerInfo),xt(t,e),bt(e),It=a;break;case 12:xt(t,e),bt(e);break;case 31:xt(t,e),bt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hu(e,a)));break;case 13:xt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pu=Et()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hu(e,a)));break;case 22:l=e.memoizedState!==null;var h=n!==null&&n.memoizedState!==null,S=An,N=Ke;if(An=S||l,Ke=N||h,xt(t,e),Ke=N,An=S,bt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||h||An||Ke||Aa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){h=n=t;try{if(i=h.stateNode,l)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=h.stateNode;var _=h.memoizedProps.style,A=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(L){Te(h,h.return,L)}}}else if(t.tag===6){if(n===null){h=t;try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(L){Te(h,h.return,L)}}}else if(t.tag===18){if(n===null){h=t;try{var T=h.stateNode;l?jh(T,!0):jh(h.stateNode,!1)}catch(L){Te(h,h.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,hu(e,n))));break;case 19:xt(t,e),bt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hu(e,a)));break;case 30:break;case 21:break;default:xt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(zd(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,i=Cr(e);du(e,i,l);break;case 5:var c=n.stateNode;n.flags&32&&(wa(c,""),n.flags&=-33);var f=Cr(e);du(e,f,c);break;case 3:case 4:var h=n.stateNode.containerInfo,S=Cr(e);wr(e,S,h);break;default:throw Error(s(161))}}catch(N){Te(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Md(e,t.alternate,t),t=t.sibling}function Aa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Aa(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&jd(t,t.return,n),Aa(t);break;case 27:ei(t.stateNode);case 26:case 5:ln(t,t.return),Aa(t);break;case 22:t.memoizedState===null&&Aa(t);break;case 30:Aa(t);break;default:Aa(t)}e=e.sibling}}function En(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:En(l,i,n),Ql(4,i);break;case 1:if(En(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(S){Te(a,a.return,S)}if(a=i,l=a.updateQueue,l!==null){var f=a.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)so(h[l],f)}catch(S){Te(a,a.return,S)}}n&&c&64&&Sd(i),Zl(i,i.return);break;case 27:Td(i);case 26:case 5:En(l,i,n),n&&a===null&&c&4&&Ad(i),Zl(i,i.return);break;case 12:En(l,i,n);break;case 31:En(l,i,n),n&&c&4&&Cd(l,i);break;case 13:En(l,i,n),n&&c&4&&wd(l,i);break;case 22:i.memoizedState===null&&En(l,i,n),Zl(i,i.return);break;case 30:break;default:En(l,i,n)}t=t.sibling}}function Dr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wl(n))}function Rr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e))}function en(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rd(e,t,n,a),t=t.sibling}function Rd(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,a),l&2048&&Ql(9,t);break;case 1:en(e,t,n,a);break;case 3:en(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e)));break;case 12:if(l&2048){en(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){Te(t,t.return,h)}}else en(e,t,n,a);break;case 31:en(e,t,n,a);break;case 13:en(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?en(e,t,n,a):Vl(e,t):i._visibility&2?en(e,t,n,a):(i._visibility|=2,Fa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Dr(c,t);break;case 24:en(e,t,n,a),l&2048&&Rr(t.alternate,t);break;default:en(e,t,n,a)}}function Fa(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,f=n,h=a,S=c.flags;switch(c.tag){case 0:case 11:case 15:Fa(i,c,f,h,l),Ql(8,c);break;case 23:break;case 22:var N=c.stateNode;c.memoizedState!==null?N._visibility&2?Fa(i,c,f,h,l):Vl(i,c):(N._visibility|=2,Fa(i,c,f,h,l)),l&&S&2048&&Dr(c.alternate,c);break;case 24:Fa(i,c,f,h,l),l&&S&2048&&Rr(c.alternate,c);break;default:Fa(i,c,f,h,l)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Vl(n,a),l&2048&&Dr(a.alternate,a);break;case 24:Vl(n,a),l&2048&&Rr(a.alternate,a);break;default:Vl(n,a)}t=t.sibling}}var Kl=8192;function Pa(e,t,n){if(e.subtreeFlags&Kl)for(e=e.child;e!==null;)Ud(e,t,n),e=e.sibling}function Ud(e,t,n){switch(e.tag){case 26:Pa(e,t,n),e.flags&Kl&&e.memoizedState!==null&&yp(n,It,e.memoizedState,e.memoizedProps);break;case 5:Pa(e,t,n);break;case 3:case 4:var a=It;It=Mu(e.stateNode.containerInfo),Pa(e,t,n),It=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Kl,Kl=16777216,Pa(e,t,n),Kl=a):Pa(e,t,n));break;default:Pa(e,t,n)}}function Hd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,Bd(a,e)}Hd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 0:case 11:case 15:Jl(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Jl(e);break;case 12:Jl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mu(e)):Jl(e);break;default:Jl(e)}}function mu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,Bd(a,e)}Hd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),mu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,mu(t));break;default:mu(t)}e=e.sibling}}function Bd(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:wl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Fe=a;else e:for(n=e;Fe!==null;){a=Fe;var l=a.sibling,i=a.return;if(Nd(a),a===n){Fe=null;break e}if(l!==null){l.return=i,Fe=l;break e}Fe=i}}}var _1={getCacheForType:function(e){var t=tt(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tt(Qe).controller.signal}},D1=typeof WeakMap=="function"?WeakMap:Map,ve=0,De=null,se=null,oe=0,ze=0,Dt=null,Qn=!1,Ia=!1,Ur=!1,Mn=0,Ye=0,Zn=0,za=0,Hr=0,Rt=0,el=0,$l=null,St=null,qr=!1,pu=0,kd=0,gu=1/0,yu=null,Vn=null,$e=0,Kn=null,tl=null,Nn=0,Br=0,kr=null,Yd=null,Wl=0,Yr=null;function Ut(){return(ve&2)!==0&&oe!==0?oe&-oe:C.T!==null?Vr():ef()}function Gd(){if(Rt===0)if((oe&536870912)===0||he){var e=Ti;Ti<<=1,(Ti&3932160)===0&&(Ti=262144),Rt=e}else Rt=536870912;return e=wt.current,e!==null&&(e.flags|=32),Rt}function jt(e,t,n){(e===De&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(nl(e,0),Jn(e,oe,Rt,!1)),yl(e,n),((ve&2)===0||e!==De)&&(e===De&&((ve&2)===0&&(za|=n),Ye===4&&Jn(e,oe,Rt,!1)),un(e))}function Ld(e,t,n){if((ve&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||gl(e,t),l=a?H1(e,t):Lr(e,t,!0),i=a;do{if(l===0){Ia&&!a&&Jn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!R1(n)){l=Lr(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;l=$l;var h=f.current.memoizedState.isDehydrated;if(h&&(nl(f,c).flags|=256),c=Lr(f,c,!1),c!==2){if(Ur&&!h){f.errorRecoveryDisabledLanes|=i,za|=i,l=4;break e}i=St,St=l,i!==null&&(St===null?St=i:St.push.apply(St,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){nl(e,0),Jn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Jn(a,t,Rt,!Qn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=pu+300-Et(),10<l)){if(Jn(a,t,Rt,!Qn),Mi(a,0,!0)!==0)break e;Nn=t,a.timeoutHandle=xh(Xd.bind(null,a,n,St,yu,qr,t,Rt,za,el,Qn,i,"Throttled",-0,0),l);break e}Xd(a,n,St,yu,qr,t,Rt,za,el,Qn,i,null,-0,0)}}break}while(!0);un(e)}function Xd(e,t,n,a,l,i,c,f,h,S,N,_,A,T){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hn},Ud(t,i,_);var L=(i&62914560)===i?pu-Et():(i&4194048)===i?kd-Et():0;if(L=vp(_,L),L!==null){Nn=i,e.cancelPendingCommit=L(Fd.bind(null,e,t,i,n,a,l,c,f,h,N,_,null,A,T)),Jn(e,i,c,!S);return}}Fd(e,t,i,n,a,l,c,f,h)}function R1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Ot(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,n,a){t&=~Hr,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-Nt(l),c=1<<i;a[i]=-1,l&=~c}n!==0&&Fs(e,n,t)}function vu(){return(ve&6)===0?(Fl(0),!1):!0}function Gr(){if(se!==null){if(ze===0)var e=se.return;else e=se,yn=pa=null,ar(e),Va=null,Dl=0,e=se;for(;e!==null;)bd(e.alternate,e),e=e.return;se=null}}function nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ep(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Nn=0,Gr(),De=e,se=n=pn(e.current,null),oe=t,ze=0,Dt=null,Qn=!1,Ia=gl(e,t),Ur=!1,el=Rt=Hr=za=Zn=Ye=0,St=$l=null,qr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-Nt(a),i=1<<l;t|=e[l],a&=~i}return Mn=t,ki(),n}function Qd(e,t){ie=null,C.H=Gl,t===Za||t===Ki?(t=io(),ze=3):t===Zc?(t=io(),ze=4):ze=t===xr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,se===null&&(Ye=1,cu(e,Gt(t,e.current)))}function Zd(){var e=wt.current;return e===null?!0:(oe&4194048)===oe?Zt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Zt:!1}function Vd(){var e=C.H;return C.H=Gl,e===null?Gl:e}function Kd(){var e=C.A;return C.A=_1,e}function xu(){Ye=4,Qn||(oe&4194048)!==oe&&wt.current!==null||(Ia=!0),(Zn&134217727)===0&&(za&134217727)===0||De===null||Jn(De,oe,Rt,!1)}function Lr(e,t,n){var a=ve;ve|=2;var l=Vd(),i=Kd();(De!==e||oe!==t)&&(yu=null,nl(e,t)),t=!1;var c=Ye;e:do try{if(ze!==0&&se!==null){var f=se,h=Dt;switch(ze){case 8:Gr(),c=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var S=ze;if(ze=0,Dt=null,al(e,f,h,S),n&&Ia){c=0;break e}break;default:S=ze,ze=0,Dt=null,al(e,f,h,S)}}U1(),c=Ye;break}catch(N){Qd(e,N)}while(!0);return t&&e.shellSuspendCounter++,yn=pa=null,ve=a,C.H=l,C.A=i,se===null&&(De=null,oe=0,ki()),c}function U1(){for(;se!==null;)Jd(se)}function H1(e,t){var n=ve;ve|=2;var a=Vd(),l=Kd();De!==e||oe!==t?(yu=null,gu=Et()+500,nl(e,t)):Ia=gl(e,t);e:do try{if(ze!==0&&se!==null){t=se;var i=Dt;t:switch(ze){case 1:ze=0,Dt=null,al(e,t,i,1);break;case 2:case 9:if(ao(i)){ze=0,Dt=null,$d(t);break}t=function(){ze!==2&&ze!==9||De!==e||(ze=7),un(e)},i.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:ao(i)?(ze=0,Dt=null,$d(t)):(ze=0,Dt=null,al(e,t,i,7));break;case 5:var c=null;switch(se.tag){case 26:c=se.memoizedState;case 5:case 27:var f=se;if(c?Rh(c):f.stateNode.complete){ze=0,Dt=null;var h=f.sibling;if(h!==null)se=h;else{var S=f.return;S!==null?(se=S,bu(S)):se=null}break t}}ze=0,Dt=null,al(e,t,i,5);break;case 6:ze=0,Dt=null,al(e,t,i,6);break;case 8:Gr(),Ye=6;break e;default:throw Error(s(462))}}q1();break}catch(N){Qd(e,N)}while(!0);return yn=pa=null,C.H=a,C.A=l,ve=n,se!==null?0:(De=null,oe=0,ki(),Ye)}function q1(){for(;se!==null&&!u0();)Jd(se)}function Jd(e){var t=vd(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?bu(e):se=t}function $d(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dd(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=dd(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:ar(t);default:bd(n,t),t=se=Vf(t,Mn),t=vd(n,t,Mn)}e.memoizedProps=e.pendingProps,t===null?bu(e):se=t}function al(e,t,n,a){yn=pa=null,ar(t),Va=null,Dl=0;var l=t.return;try{if(T1(e,l,t,n,oe)){Ye=1,cu(e,Gt(n,e.current)),se=null;return}}catch(i){if(l!==null)throw se=l,i;Ye=1,cu(e,Gt(n,e.current)),se=null;return}t.flags&32768?(he||a===1?e=!0:Ia||(oe&536870912)!==0?e=!1:(Qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Wd(t,e)):bu(t)}function bu(e){var t=e;do{if((t.flags&32768)!==0){Wd(t,Qn);return}e=t.return;var n=N1(t.alternate,t,Mn);if(n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ye===0&&(Ye=5)}function Wd(e,t){do{var n=O1(e.alternate,e);if(n!==null){n.flags&=32767,se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=n}while(e!==null);Ye=6,se=null}function Fd(e,t,n,a,l,i,c,f,h){e.cancelPendingCommit=null;do Su();while($e!==0);if((ve&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Cc,g0(e,n,i,c,f,h),e===De&&(se=De=null,oe=0),tl=t,Kn=e,Nn=n,Br=i,kr=l,Yd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,G1(Ai,function(){return nh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,l=k.p,k.p=2,c=ve,ve|=4;try{C1(e,t,n)}finally{ve=c,k.p=l,C.T=a}}$e=1,Pd(),Id(),eh()}}function Pd(){if($e===1){$e=0;var e=Kn,t=tl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=k.p;k.p=2;var l=ve;ve|=4;try{_d(t,e);var i=es,c=qf(e.containerInfo),f=i.focusedElem,h=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&Hf(f.ownerDocument.documentElement,f)){if(h!==null&&Tc(f)){var S=h.start,N=h.end;if(N===void 0&&(N=S),"selectionStart"in f)f.selectionStart=S,f.selectionEnd=Math.min(N,f.value.length);else{var _=f.ownerDocument||document,A=_&&_.defaultView||window;if(A.getSelection){var T=A.getSelection(),L=f.textContent.length,W=Math.min(h.start,L),Ce=h.end===void 0?W:Math.min(h.end,L);!T.extend&&W>Ce&&(c=Ce,Ce=W,W=c);var x=Uf(f,W),y=Uf(f,Ce);if(x&&y&&(T.rangeCount!==1||T.anchorNode!==x.node||T.anchorOffset!==x.offset||T.focusNode!==y.node||T.focusOffset!==y.offset)){var b=_.createRange();b.setStart(x.node,x.offset),T.removeAllRanges(),W>Ce?(T.addRange(b),T.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),T.addRange(b))}}}}for(_=[],T=f;T=T.parentNode;)T.nodeType===1&&_.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var w=_[f];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Du=!!Ir,es=Ir=null}finally{ve=l,k.p=a,C.T=n}}e.current=t,$e=2}}function Id(){if($e===2){$e=0;var e=Kn,t=tl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=k.p;k.p=2;var l=ve;ve|=4;try{Md(e,t.alternate,t)}finally{ve=l,k.p=a,C.T=n}}$e=3}}function eh(){if($e===4||$e===3){$e=0,c0();var e=Kn,t=tl,n=Nn,a=Yd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,tl=Kn=null,th(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Vn=null),uc(n),t=t.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,l=k.p,k.p=2,C.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var f=a[c];i(f.value,{componentStack:f.stack})}}finally{C.T=t,k.p=l}}(Nn&3)!==0&&Su(),un(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Yr?Wl++:(Wl=0,Yr=e):Wl=0,Fl(0)}}function th(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wl(t)))}function Su(){return Pd(),Id(),eh(),nh()}function nh(){if($e!==5)return!1;var e=Kn,t=Br;Br=0;var n=uc(Nn),a=C.T,l=k.p;try{k.p=32>n?32:n,C.T=null,n=kr,kr=null;var i=Kn,c=Nn;if($e=0,tl=Kn=null,Nn=0,(ve&6)!==0)throw Error(s(331));var f=ve;if(ve|=4,qd(i.current),Rd(i,i.current,c,n),ve=f,Fl(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(pl,i)}catch{}return!0}finally{k.p=l,C.T=a,th(e,t)}}function ah(e,t,n){t=Gt(n,t),t=vr(e.stateNode,t,2),e=Yn(e,t,2),e!==null&&(yl(e,2),un(e))}function Te(e,t,n){if(e.tag===3)ah(e,e,n);else for(;t!==null;){if(t.tag===3){ah(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){e=Gt(n,e),n=ld(2),a=Yn(t,n,2),a!==null&&(id(n,a,t,e),yl(a,2),un(a));break}}t=t.return}}function Xr(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new D1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Ur=!0,l.add(n),e=B1.bind(null,e,t,n),t.then(e,e))}function B1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(oe&n)===n&&(Ye===4||Ye===3&&(oe&62914560)===oe&&300>Et()-pu?(ve&2)===0&&nl(e,0):Hr|=n,el===oe&&(el=0)),un(e)}function lh(e,t){t===0&&(t=Ws()),e=da(e,t),e!==null&&(yl(e,t),un(e))}function k1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function Y1(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),lh(e,n)}function G1(e,t){return nc(e,t)}var ju=null,ll=null,Qr=!1,Au=!1,Zr=!1,$n=0;function un(e){e!==ll&&e.next===null&&(ll===null?ju=ll=e:ll=ll.next=e),Au=!0,Qr||(Qr=!0,X1())}function Fl(e,t){if(!Zr&&Au){Zr=!0;do for(var n=!1,a=ju;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var c=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-Nt(42|e)+1)-1,i&=l&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,rh(a,i))}else i=oe,i=Mi(a,a===De?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||gl(a,i)||(n=!0,rh(a,i));a=a.next}while(n);Zr=!1}}function L1(){ih()}function ih(){Au=Qr=!1;var e=0;$n!==0&&I1()&&(e=$n);for(var t=Et(),n=null,a=ju;a!==null;){var l=a.next,i=uh(a,t);i===0?(a.next=null,n===null?ju=l:n.next=l,l===null&&(ll=n)):(n=a,(e!==0||(i&3)!==0)&&(Au=!0)),a=l}$e!==0&&$e!==5||Fl(e),$n!==0&&($n=0)}function uh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-Nt(i),f=1<<c,h=l[c];h===-1?((f&n)===0||(f&a)!==0)&&(l[c]=p0(f,t)):h<=t&&(e.expiredLanes|=f),i&=~f}if(t=De,n=oe,n=Mi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ac(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||gl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ac(a),uc(n)){case 2:case 8:n=Js;break;case 32:n=Ai;break;case 268435456:n=$s;break;default:n=Ai}return a=ch.bind(null,e),n=nc(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ac(a),e.callbackPriority=2,e.callbackNode=null,2}function ch(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var a=oe;return a=Mi(e,e===De?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ld(e,a,t),uh(e,Et()),e.callbackNode!=null&&e.callbackNode===n?ch.bind(null,e):null)}function rh(e,t){if(Su())return null;Ld(e,t,!0)}function X1(){tp(function(){(ve&6)!==0?nc(Ks,L1):ih()})}function Vr(){if($n===0){var e=Xa;e===0&&(e=zi,zi<<=1,(zi&261888)===0&&(zi=256)),$n=e}return $n}function sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wi(""+e)}function fh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Q1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=sh((l[gt]||null).action),c=a.submitter;c&&(t=(t=c[gt]||null)?sh(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new Ui("action","action",null,a,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if($n!==0){var h=c?fh(l,c):new FormData(l);dr(n,{pending:!0,data:h,method:l.method,action:i},null,h)}}else typeof i=="function"&&(f.preventDefault(),h=c?fh(l,c):new FormData(l),dr(n,{pending:!0,data:h,method:l.method,action:i},i,h))},currentTarget:l}]})}}for(var Kr=0;Kr<Oc.length;Kr++){var Jr=Oc[Kr],Z1=Jr.toLowerCase(),V1=Jr[0].toUpperCase()+Jr.slice(1);Pt(Z1,"on"+V1)}Pt(Yf,"onAnimationEnd"),Pt(Gf,"onAnimationIteration"),Pt(Lf,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(r1,"onTransitionRun"),Pt(s1,"onTransitionStart"),Pt(f1,"onTransitionCancel"),Pt(Xf,"onTransitionEnd"),Oa("onMouseEnter",["mouseout","mouseover"]),Oa("onMouseLeave",["mouseout","mouseover"]),Oa("onPointerEnter",["pointerout","pointerover"]),Oa("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function oh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var f=a[c],h=f.instance,S=f.currentTarget;if(f=f.listener,h!==i&&l.isPropagationStopped())break e;i=f,l.currentTarget=S;try{i(l)}catch(N){Bi(N)}l.currentTarget=null,i=h}else for(c=0;c<a.length;c++){if(f=a[c],h=f.instance,S=f.currentTarget,f=f.listener,h!==i&&l.isPropagationStopped())break e;i=f,l.currentTarget=S;try{i(l)}catch(N){Bi(N)}l.currentTarget=null,i=h}}}}function fe(e,t){var n=t[cc];n===void 0&&(n=t[cc]=new Set);var a=e+"__bubble";n.has(a)||(dh(t,e,2,!1),n.add(a))}function $r(e,t,n){var a=0;t&&(a|=4),dh(n,e,a,t)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[zu]){e[zu]=!0,af.forEach(function(n){n!=="selectionchange"&&(K1.has(n)||$r(n,!1,e),$r(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zu]||(t[zu]=!0,$r("selectionchange",!1,t))}}function dh(e,t,n,a){switch(Gh(t)){case 2:var l=Sp;break;case 8:l=jp;break;default:l=os}n=l.bind(null,t,n,e),l=void 0,!gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fr(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===l)break;if(c===4)for(c=a.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;f!==null;){if(c=Ea(f),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){a=i=c;continue e}f=f.parentNode}}a=a.return}gf(function(){var S=i,N=mc(n),_=[];e:{var A=Qf.get(e);if(A!==void 0){var T=Ui,L=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":T=Y0;break;case"focusin":L="focus",T=bc;break;case"focusout":L="blur",T=bc;break;case"beforeblur":case"afterblur":T=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=X0;break;case Yf:case Gf:case Lf:T=w0;break;case Xf:T=Z0;break;case"scroll":case"scrollend":T=E0;break;case"wheel":T=K0;break;case"copy":case"cut":case"paste":T=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Sf;break;case"toggle":case"beforetoggle":T=$0}var W=(t&4)!==0,Ce=!W&&(e==="scroll"||e==="scrollend"),x=W?A!==null?A+"Capture":null:A;W=[];for(var y=S,b;y!==null;){var w=y;if(b=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||b===null||x===null||(w=bl(y,x),w!=null&&W.push(Il(y,w,b))),Ce)break;y=y.return}0<W.length&&(A=new T(A,L,null,n,N),_.push({event:A,listeners:W}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",A&&n!==hc&&(L=n.relatedTarget||n.fromElement)&&(Ea(L)||L[Ta]))break e;if((T||A)&&(A=N.window===N?N:(A=N.ownerDocument)?A.defaultView||A.parentWindow:window,T?(L=n.relatedTarget||n.toElement,T=S,L=L?Ea(L):null,L!==null&&(Ce=m(L),W=L.tag,L!==Ce||W!==5&&W!==27&&W!==6)&&(L=null)):(T=null,L=S),T!==L)){if(W=xf,w="onMouseLeave",x="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(W=Sf,w="onPointerLeave",x="onPointerEnter",y="pointer"),Ce=T==null?A:xl(T),b=L==null?A:xl(L),A=new W(w,y+"leave",T,n,N),A.target=Ce,A.relatedTarget=b,w=null,Ea(N)===S&&(W=new W(x,y+"enter",L,n,N),W.target=b,W.relatedTarget=Ce,w=W),Ce=w,T&&L)t:{for(W=J1,x=T,y=L,b=0,w=x;w;w=W(w))b++;w=0;for(var V=y;V;V=W(V))w++;for(;0<b-w;)x=W(x),b--;for(;0<w-b;)y=W(y),w--;for(;b--;){if(x===y||y!==null&&x===y.alternate){W=x;break t}x=W(x),y=W(y)}W=null}else W=null;T!==null&&hh(_,A,T,W,!1),L!==null&&Ce!==null&&hh(_,Ce,L,W,!0)}}e:{if(A=S?xl(S):window,T=A.nodeName&&A.nodeName.toLowerCase(),T==="select"||T==="input"&&A.type==="file")var ge=Of;else if(Mf(A))if(Cf)ge=i1;else{ge=a1;var Z=n1}else T=A.nodeName,!T||T.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?S&&dc(S.elementType)&&(ge=Of):ge=l1;if(ge&&(ge=ge(e,S))){Nf(_,ge,n,N);break e}Z&&Z(e,A,S),e==="focusout"&&S&&A.type==="number"&&S.memoizedProps.value!=null&&oc(A,"number",A.value)}switch(Z=S?xl(S):window,e){case"focusin":(Mf(Z)||Z.contentEditable==="true")&&(Ua=Z,Ec=S,Nl=null);break;case"focusout":Nl=Ec=Ua=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,Bf(_,n,N);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":Bf(_,n,N)}var ue;if(jc)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ra?Tf(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(jf&&n.locale!=="ko"&&(Ra||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ra&&(ue=yf()):(Dn=N,yc="value"in Dn?Dn.value:Dn.textContent,Ra=!0)),Z=Tu(S,de),0<Z.length&&(de=new bf(de,e,null,n,N),_.push({event:de,listeners:Z}),ue?de.data=ue:(ue=Ef(n),ue!==null&&(de.data=ue)))),(ue=F0?P0(e,n):I0(e,n))&&(de=Tu(S,"onBeforeInput"),0<de.length&&(Z=new bf("onBeforeInput","beforeinput",null,n,N),_.push({event:Z,listeners:de}),Z.data=ue)),Q1(_,e,S,n,N)}oh(_,t)})}function Il(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tu(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=bl(e,n),l!=null&&a.unshift(Il(e,l,i)),l=bl(e,t),l!=null&&a.push(Il(e,l,i))),e.tag===3)return a;e=e.return}return[]}function J1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hh(e,t,n,a,l){for(var i=t._reactName,c=[];n!==null&&n!==a;){var f=n,h=f.alternate,S=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||S===null||(h=S,l?(S=bl(n,i),S!=null&&c.unshift(Il(n,S,h))):l||(S=bl(n,i),S!=null&&c.push(Il(n,S,h)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var $1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace($1,`
`).replace(W1,"")}function ph(e,t){return t=mh(t),mh(e)===t}function Oe(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||wa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&wa(e,""+a);break;case"className":Oi(e,"class",a);break;case"tabIndex":Oi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,n,a);break;case"style":mf(e,a,i);break;case"data":if(t!=="object"){Oi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=wi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Oe(e,t,"name",l.name,l,null),Oe(e,t,"formEncType",l.formEncType,l,null),Oe(e,t,"formMethod",l.formMethod,l,null),Oe(e,t,"formTarget",l.formTarget,l,null)):(Oe(e,t,"encType",l.encType,l,null),Oe(e,t,"method",l.method,l,null),Oe(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=wi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=hn);break;case"onScroll":a!=null&&fe("scroll",e);break;case"onScrollEnd":a!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=wi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Ni(e,"popover",a);break;case"xlinkActuate":dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":dn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":dn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":dn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":dn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ni(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=z0.get(n)||n,Ni(e,n,a))}}function Pr(e,t,n,a,l,i){switch(n){case"style":mf(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?wa(e,a):(typeof a=="number"||typeof a=="bigint")&&wa(e,""+a);break;case"onScroll":a!=null&&fe("scroll",e);break;case"onScrollEnd":a!=null&&fe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[gt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ni(e,n,a)}}}function at(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Oe(e,t,i,c,n,null)}}l&&Oe(e,t,"srcSet",n.srcSet,n,null),a&&Oe(e,t,"src",n.src,n,null);return;case"input":fe("invalid",e);var f=i=c=l=null,h=null,S=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":l=N;break;case"type":c=N;break;case"checked":h=N;break;case"defaultChecked":S=N;break;case"value":i=N;break;case"defaultValue":f=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:Oe(e,t,a,N,n,null)}}ff(e,i,f,h,S,c,l,!1);return;case"select":fe("invalid",e),a=c=i=null;for(l in n)if(n.hasOwnProperty(l)&&(f=n[l],f!=null))switch(l){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:Oe(e,t,l,f,n,null)}t=i,n=c,e.multiple=!!a,t!=null?Ca(e,!!a,t,!1):n!=null&&Ca(e,!!a,n,!0);return;case"textarea":fe("invalid",e),i=l=a=null;for(c in n)if(n.hasOwnProperty(c)&&(f=n[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":l=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:Oe(e,t,c,f,n,null)}df(e,a,l,i);return;case"option":for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null)&&(h==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Oe(e,t,h,a,n,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(a=0;a<Pl.length;a++)fe(Pl[a],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Oe(e,t,S,a,n,null)}return;default:if(dc(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&Pr(e,t,N,a,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!=null&&Oe(e,t,f,a,n,null))}function F1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,f=null,h=null,S=null,N=null;for(T in n){var _=n[T];if(n.hasOwnProperty(T)&&_!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=_;default:a.hasOwnProperty(T)||Oe(e,t,T,null,a,_)}}for(var A in a){var T=a[A];if(_=n[A],a.hasOwnProperty(A)&&(T!=null||_!=null))switch(A){case"type":i=T;break;case"name":l=T;break;case"checked":S=T;break;case"defaultChecked":N=T;break;case"value":c=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:T!==_&&Oe(e,t,A,T,a,_)}}fc(e,c,f,h,S,N,i,l);return;case"select":T=c=f=A=null;for(i in n)if(h=n[i],n.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":T=h;default:a.hasOwnProperty(i)||Oe(e,t,i,null,a,h)}for(l in a)if(i=a[l],h=n[l],a.hasOwnProperty(l)&&(i!=null||h!=null))switch(l){case"value":A=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==h&&Oe(e,t,l,i,a,h)}t=f,n=c,a=T,A!=null?Ca(e,!!n,A,!1):!!a!=!!n&&(t!=null?Ca(e,!!n,t,!0):Ca(e,!!n,n?[]:"",!1));return;case"textarea":T=A=null;for(f in n)if(l=n[f],n.hasOwnProperty(f)&&l!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Oe(e,t,f,null,a,l)}for(c in a)if(l=a[c],i=n[c],a.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":A=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&Oe(e,t,c,l,a,i)}of(e,A,T);return;case"option":for(var L in n)A=n[L],n.hasOwnProperty(L)&&A!=null&&!a.hasOwnProperty(L)&&(L==="selected"?e.selected=!1:Oe(e,t,L,null,a,A));for(h in a)A=a[h],T=n[h],a.hasOwnProperty(h)&&A!==T&&(A!=null||T!=null)&&(h==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Oe(e,t,h,A,a,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)A=n[W],n.hasOwnProperty(W)&&A!=null&&!a.hasOwnProperty(W)&&Oe(e,t,W,null,a,A);for(S in a)if(A=a[S],T=n[S],a.hasOwnProperty(S)&&A!==T&&(A!=null||T!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:Oe(e,t,S,A,a,T)}return;default:if(dc(t)){for(var Ce in n)A=n[Ce],n.hasOwnProperty(Ce)&&A!==void 0&&!a.hasOwnProperty(Ce)&&Pr(e,t,Ce,void 0,a,A);for(N in a)A=a[N],T=n[N],!a.hasOwnProperty(N)||A===T||A===void 0&&T===void 0||Pr(e,t,N,A,a,T);return}}for(var x in n)A=n[x],n.hasOwnProperty(x)&&A!=null&&!a.hasOwnProperty(x)&&Oe(e,t,x,null,a,A);for(_ in a)A=a[_],T=n[_],!a.hasOwnProperty(_)||A===T||A==null&&T==null||Oe(e,t,_,A,a,T)}function gh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function P1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,c=l.initiatorType,f=l.duration;if(i&&f&&gh(c)){for(c=0,f=l.responseEnd,a+=1;a<n.length;a++){var h=n[a],S=h.startTime;if(S>f)break;var N=h.transferSize,_=h.initiatorType;N&&gh(_)&&(h=h.responseEnd,c+=N*(h<f?1:(f-S)/(h-S)))}if(--a,t+=8*(i+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ir=null,es=null;function Eu(e){return e.nodeType===9?e:e.ownerDocument}function yh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=null;function I1(){var e=window.event;return e&&e.type==="popstate"?e===ns?!1:(ns=e,!0):(ns=null,!1)}var xh=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(np)}:xh;function np(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function Sh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),rl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ei(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ei(n);for(var i=n.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[vl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=c}}else n==="body"&&ei(e.ownerDocument.body);n=l}while(n);rl(t)}function jh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function as(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":as(n),rc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ap(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function lp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function Ah(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function ls(e){return e.data==="$?"||e.data==="$~"}function is(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ip(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var us=null;function zh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Eh(e,t,n){switch(t=Eu(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ei(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);rc(e)}var Kt=new Map,Mh=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=k.d;k.d={f:up,r:cp,D:rp,C:sp,L:fp,m:op,X:hp,S:dp,M:mp};function up(){var e=On.f(),t=vu();return e||t}function cp(e){var t=Ma(e);t!==null&&t.tag===5&&t.type==="form"?Qo(t):On.r(e)}var il=typeof document>"u"?null:document;function Nh(e,t,n){var a=il;if(a&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Mh.has(l)||(Mh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),at(t,"link",e),We(t),a.head.appendChild(t)))}}function rp(e){On.D(e),Nh("dns-prefetch",e,null)}function sp(e,t){On.C(e,t),Nh("preconnect",e,t)}function fp(e,t,n){On.L(e,t,n);var a=il;if(a&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+kt(n.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var i=l;switch(t){case"style":i=ul(e);break;case"script":i=cl(e)}Kt.has(i)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(ti(i))||t==="script"&&a.querySelector(ni(i))||(t=a.createElement("link"),at(t,"link",e),We(t),a.head.appendChild(t)))}}function op(e,t){On.m(e,t);var n=il;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(a)+'"][href="'+kt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=cl(e)}if(!Kt.has(i)&&(e=R({rel:"modulepreload",href:e},t),Kt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ni(i)))return}a=n.createElement("link"),at(a,"link",e),We(a),n.head.appendChild(a)}}}function dp(e,t,n){On.S(e,t,n);var a=il;if(a&&e){var l=Na(a).hoistableStyles,i=ul(e);t=t||"default";var c=l.get(i);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(ti(i)))f.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(i))&&cs(e,n);var h=c=a.createElement("link");We(h),at(h,"link",e),h._p=new Promise(function(S,N){h.onload=S,h.onerror=N}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Nu(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:f},l.set(i,c)}}}function hp(e,t){On.X(e,t);var n=il;if(n&&e){var a=Na(n).hoistableScripts,l=cl(e),i=a.get(l);i||(i=n.querySelector(ni(l)),i||(e=R({src:e,async:!0},t),(t=Kt.get(l))&&rs(e,t),i=n.createElement("script"),We(i),at(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function mp(e,t){On.M(e,t);var n=il;if(n&&e){var a=Na(n).hoistableScripts,l=cl(e),i=a.get(l);i||(i=n.querySelector(ni(l)),i||(e=R({src:e,async:!0,type:"module"},t),(t=Kt.get(l))&&rs(e,t),i=n.createElement("script"),We(i),at(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Oh(e,t,n,a){var l=(l=re.current)?Mu(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ul(n.href),n=Na(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ul(n.href);var i=Na(l).hoistableStyles,c=i.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=l.querySelector(ti(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),i||pp(l,e,n,c.state))),t&&a===null)throw Error(s(528,""));return c}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cl(n),n=Na(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ul(e){return'href="'+kt(e)+'"'}function ti(e){return'link[rel="stylesheet"]['+e+"]"}function Ch(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function pp(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),at(t,"link",n),We(t),e.head.appendChild(t))}function cl(e){return'[src="'+kt(e)+'"]'}function ni(e){return"script[async]"+e}function wh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(a)return t.instance=a,We(a),a;var l=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),We(a),at(a,"style",l),Nu(a,n.precedence,e),t.instance=a;case"stylesheet":l=ul(n.href);var i=e.querySelector(ti(l));if(i)return t.state.loading|=4,t.instance=i,We(i),i;a=Ch(n),(l=Kt.get(l))&&cs(a,l),i=(e.ownerDocument||e).createElement("link"),We(i);var c=i;return c._p=new Promise(function(f,h){c.onload=f,c.onerror=h}),at(i,"link",a),t.state.loading|=4,Nu(i,n.precedence,e),t.instance=i;case"script":return i=cl(n.src),(l=e.querySelector(ni(i)))?(t.instance=l,We(l),l):(a=n,(l=Kt.get(i))&&(a=R({},n),rs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),We(l),at(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Nu(a,n.precedence,e));return t.instance}function Nu(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===t)i=f;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function cs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function rs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ou=null;function _h(e,t,n){if(Ou===null){var a=new Map,l=Ou=new Map;l.set(n,a)}else l=Ou,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[vl]||i[Ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=a.get(c);f?f.push(i):a.set(c,[i])}}return a}function Dh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function gp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yp(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ul(a.href),i=t.querySelector(ti(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Cu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,We(i);return}i=t.ownerDocument||t,a=Ch(a),(l=Kt.get(l))&&cs(a,l),i=i.createElement("link"),We(i);var c=i;c._p=new Promise(function(f,h){c.onload=f,c.onerror=h}),at(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Cu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ss=0;function vp(e,t){return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ss===0&&(ss=62500*P1());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ss?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wu=null;function _u(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wu=new Map,t.forEach(xp,e),wu=null,Cu.call(e))}function xp(e,t){if(!(t.state.loading&4)){var n=wu.get(e);if(n)var a=n.get(null);else{n=new Map,wu.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}l=t.instance,c=l.getAttribute("data-precedence"),i=n.get(c)||a,i===a&&n.set(null,l),n.set(c,l),this.count++,a=Cu.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ai={$$typeof:$,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function bp(e,t,n,a,l,i,c,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.hiddenUpdates=lc(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Uh(e,t,n,a,l,i,c,f,h,S,N,_){return e=new bp(e,t,n,c,h,S,N,_,f),t=1,i===!0&&(t|=24),i=Ct(3,null,null,t),e.current=i,i.stateNode=e,t=Lc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Vc(i),e}function Hh(e){return e?(e=Ba,e):Ba}function qh(e,t,n,a,l,i){l=Hh(l),a.context===null?a.context=l:a.pendingContext=l,a=kn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Yn(e,a,t),n!==null&&(jt(n,e,t),Ul(n,e,t))}function Bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fs(e,t){Bh(e,t),(e=e.alternate)&&Bh(e,t)}function kh(e){if(e.tag===13||e.tag===31){var t=da(e,67108864);t!==null&&jt(t,e,67108864),fs(e,67108864)}}function Yh(e){if(e.tag===13||e.tag===31){var t=Ut();t=ic(t);var n=da(e,t);n!==null&&jt(n,e,t),fs(e,t)}}var Du=!0;function Sp(e,t,n,a){var l=C.T;C.T=null;var i=k.p;try{k.p=2,os(e,t,n,a)}finally{k.p=i,C.T=l}}function jp(e,t,n,a){var l=C.T;C.T=null;var i=k.p;try{k.p=8,os(e,t,n,a)}finally{k.p=i,C.T=l}}function os(e,t,n,a){if(Du){var l=ds(a);if(l===null)Fr(e,t,a,Ru,n),Lh(e,a);else if(zp(l,e,t,n,a))a.stopPropagation();else if(Lh(e,a),t&4&&-1<Ap.indexOf(e)){for(;l!==null;){var i=Ma(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=ca(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var h=1<<31-Nt(c);f.entanglements[1]|=h,c&=~h}un(i),(ve&6)===0&&(gu=Et()+500,Fl(0))}}break;case 31:case 13:f=da(i,2),f!==null&&jt(f,i,2),vu(),fs(i,2)}if(i=ds(a),i===null&&Fr(e,t,a,Ru,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Fr(e,t,a,null,n)}}function ds(e){return e=mc(e),hs(e)}var Ru=null;function hs(e){if(Ru=null,e=Ea(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=O(t),e!==null)return e;e=null}else if(n===31){if(e=j(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ru=e,null}function Gh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r0()){case Ks:return 2;case Js:return 8;case Ai:case s0:return 32;case $s:return 268435456;default:return 32}default:return 32}}var ms=!1,Fn=null,Pn=null,In=null,li=new Map,ii=new Map,ea=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lh(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function ui(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Ma(t),t!==null&&kh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function zp(e,t,n,a,l){switch(t){case"focusin":return Fn=ui(Fn,e,t,n,a,l),!0;case"dragenter":return Pn=ui(Pn,e,t,n,a,l),!0;case"mouseover":return In=ui(In,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return li.set(i,ui(li.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,ii.set(i,ui(ii.get(i)||null,e,t,n,a,l)),!0}return!1}function Xh(e){var t=Ea(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=O(n),t!==null){e.blockedOn=t,tf(e.priority,function(){Yh(n)});return}}else if(t===31){if(t=j(n),t!==null){e.blockedOn=t,tf(e.priority,function(){Yh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ds(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);hc=a,n.target.dispatchEvent(a),hc=null}else return t=Ma(n),t!==null&&kh(t),e.blockedOn=n,!1;t.shift()}return!0}function Qh(e,t,n){Uu(e)&&n.delete(t)}function Tp(){ms=!1,Fn!==null&&Uu(Fn)&&(Fn=null),Pn!==null&&Uu(Pn)&&(Pn=null),In!==null&&Uu(In)&&(In=null),li.forEach(Qh),ii.forEach(Qh)}function Hu(e,t){e.blockedOn===t&&(e.blockedOn=null,ms||(ms=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tp)))}var qu=null;function Zh(e){qu!==e&&(qu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){qu===e&&(qu=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(hs(a||n)===null)continue;break}var i=Ma(n);i!==null&&(e.splice(t,3),t-=3,dr(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function rl(e){function t(h){return Hu(h,e)}Fn!==null&&Hu(Fn,e),Pn!==null&&Hu(Pn,e),In!==null&&Hu(In,e),li.forEach(t),ii.forEach(t);for(var n=0;n<ea.length;n++){var a=ea[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ea.length&&(n=ea[0],n.blockedOn===null);)Xh(n),n.blockedOn===null&&ea.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],c=l[gt]||null;if(typeof i=="function")c||Zh(n);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[gt]||null)f=c.formAction;else if(hs(l)!==null)continue}else f=c.action;typeof f=="function"?n[a+1]=f:(n.splice(a,3),a-=3),Zh(n)}}}function Vh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ps(e){this._internalRoot=e}Bu.prototype.render=ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Ut();qh(n,a,e,t,null,null)},Bu.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qh(e.current,2,null,e,null,null),vu(),t[Ta]=null}};function Bu(e){this._internalRoot=e}Bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ef();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ea.length&&t!==0&&t<ea[n].priority;n++);ea.splice(n,0,e),n===0&&Xh(e)}};var Kh=o.version;if(Kh!=="19.2.6")throw Error(s(527,Kh,"19.2.6"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(t),e=e!==null?H(e):null,e=e===null?null:e.stateNode,e};var Ep={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{pl=ku.inject(Ep),Mt=ku}catch{}}return ri.createRoot=function(e,t){if(!g(e))throw Error(s(299));var n=!1,a="",l=ed,i=td,c=nd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Uh(e,1,!1,null,null,n,a,null,l,i,c,Vh),e[Ta]=t.current,Wr(e),new ps(t)},ri.hydrateRoot=function(e,t,n){if(!g(e))throw Error(s(299));var a=!1,l="",i=ed,c=td,f=nd,h=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.formState!==void 0&&(h=n.formState)),t=Uh(e,1,!0,t,n??null,a,l,h,i,c,f,Vh),t.context=Hh(null),n=t.current,a=Ut(),a=ic(a),l=kn(a),l.callback=null,Yn(n,l,a),n=a,t.current.lanes=n,yl(t,n),un(t),e[Ta]=t.current,Wr(e),new Bu(t)},ri.version="19.2.6",ri}var lm;function Bp(){if(lm)return vs.exports;lm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),vs.exports=qp(),vs.exports}var kp=Bp();const Yp=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Om=(...r)=>r.filter((o,d,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===d).join(" ").trim();var Gp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Lp=K.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:d=2,absoluteStrokeWidth:s,className:g="",children:m,iconNode:O,...j},z)=>K.createElement("svg",{ref:z,...Gp,width:o,height:o,stroke:r,strokeWidth:s?Number(d)*24/Number(o):d,className:Om("lucide",g),...j},[...O.map(([p,H])=>K.createElement(p,H)),...Array.isArray(m)?m:[m]]));const Ee=(r,o)=>{const d=K.forwardRef(({className:s,...g},m)=>K.createElement(Lp,{ref:m,iconNode:o,className:Om(`lucide-${Yp(r)}`,s),...g}));return d.displayName=`${r}`,d};const Xp=Ee("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);const Qp=Ee("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Cm=Ee("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);const ws=Ee("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);const Zp=Ee("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const Vp=Ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const Kp=Ee("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const wm=Ee("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);const _m=Ee("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);const im=Ee("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);const Dm=Ee("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);const Jp=Ee("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const _s=Ee("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);const $p=Ee("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);const Ds=Ee("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const Wp=Ee("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);const Rm=Ee("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Fp=Ee("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);const um=Ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const Pp=Ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const Um=Ee("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Ip=Ee("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const eg=Ee("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const tg=Ee("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const ng=Ee("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);const ag=Ee("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);const Hm=Ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);const Rs=Ee("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);const lg=Ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ig="/api";async function ht(r,o={}){const d=await fetch(`${ig}${r}`,{headers:{"Content-Type":"application/json",...o.headers||{}},...o}),s=await d.json().catch(()=>({}));if(!d.ok)throw new Error(s.message||"Something went wrong");return s}const st={health:()=>ht("/health"),listings:(r="")=>ht(`/listings${r}`),createListing:r=>ht("/listings",{method:"POST",body:JSON.stringify(r)}),updateListing:(r,o)=>ht(`/listings/${r}`,{method:"PATCH",body:JSON.stringify(o)}),deleteListing:r=>ht(`/listings/${r}`,{method:"DELETE"}),bookings:()=>ht("/bookings"),createBooking:r=>ht("/bookings",{method:"POST",body:JSON.stringify(r)}),updateBooking:(r,o)=>ht(`/bookings/${r}`,{method:"PATCH",body:JSON.stringify(o)}),categories:()=>ht("/categories"),createCategory:r=>ht("/categories",{method:"POST",body:JSON.stringify(r)}),updateCategory:(r,o)=>ht(`/categories/${r}`,{method:"PATCH",body:JSON.stringify(o)}),deleteCategory:r=>ht(`/categories/${r}`,{method:"DELETE"}),settings:()=>ht("/settings"),updateSettings:r=>ht("/settings",{method:"PATCH",body:JSON.stringify(r)}),metrics:()=>ht("/metrics")};function Zu(){return Zu=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var d=arguments[o];for(var s in d)({}).hasOwnProperty.call(d,s)&&(r[s]=d[s])}return r},Zu.apply(null,arguments)}function ug(r){if(r.sheet)return r.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===r)return document.styleSheets[o]}function cg(r){var o=document.createElement("style");return o.setAttribute("data-emotion",r.key),r.nonce!==void 0&&o.setAttribute("nonce",r.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}var rg=(function(){function r(d){var s=this;this._insertTag=function(g){var m;s.tags.length===0?s.insertionPoint?m=s.insertionPoint.nextSibling:s.prepend?m=s.container.firstChild:m=s.before:m=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(g,m),s.tags.push(g)},this.isSpeedy=d.speedy===void 0?!0:d.speedy,this.tags=[],this.ctr=0,this.nonce=d.nonce,this.key=d.key,this.container=d.container,this.prepend=d.prepend,this.insertionPoint=d.insertionPoint,this.before=null}var o=r.prototype;return o.hydrate=function(s){s.forEach(this._insertTag)},o.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cg(this));var g=this.tags[this.tags.length-1];if(this.isSpeedy){var m=ug(g);try{m.insertRule(s,m.cssRules.length)}catch{}}else g.appendChild(document.createTextNode(s));this.ctr++},o.flush=function(){this.tags.forEach(function(s){var g;return(g=s.parentNode)==null?void 0:g.removeChild(s)}),this.tags=[],this.ctr=0},r})(),ct="-ms-",Vu="-moz-",xe="-webkit-",qm="comm",Us="rule",Hs="decl",sg="@import",Bm="@keyframes",fg="@layer",og=Math.abs,Ju=String.fromCharCode,dg=Object.assign;function hg(r,o){return lt(r,0)^45?(((o<<2^lt(r,0))<<2^lt(r,1))<<2^lt(r,2))<<2^lt(r,3):0}function km(r){return r.trim()}function mg(r,o){return(r=o.exec(r))?r[0]:r}function be(r,o,d){return r.replace(o,d)}function Ts(r,o){return r.indexOf(o)}function lt(r,o){return r.charCodeAt(o)|0}function pi(r,o,d){return r.slice(o,d)}function cn(r){return r.length}function qs(r){return r.length}function Yu(r,o){return o.push(r),r}function pg(r,o){return r.map(o).join("")}var $u=1,ol=1,Ym=0,zt=0,Je=0,hl="";function Wu(r,o,d,s,g,m,O){return{value:r,root:o,parent:d,type:s,props:g,children:m,line:$u,column:ol,length:O,return:""}}function si(r,o){return dg(Wu("",null,null,"",null,null,0),r,{length:-r.length},o)}function gg(){return Je}function yg(){return Je=zt>0?lt(hl,--zt):0,ol--,Je===10&&(ol=1,$u--),Je}function qt(){return Je=zt<Ym?lt(hl,zt++):0,ol++,Je===10&&(ol=1,$u++),Je}function sn(){return lt(hl,zt)}function Lu(){return zt}function bi(r,o){return pi(hl,r,o)}function gi(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gm(r){return $u=ol=1,Ym=cn(hl=r),zt=0,[]}function Lm(r){return hl="",r}function Xu(r){return km(bi(zt-1,Es(r===91?r+2:r===40?r+1:r)))}function vg(r){for(;(Je=sn())&&Je<33;)qt();return gi(r)>2||gi(Je)>3?"":" "}function xg(r,o){for(;--o&&qt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return bi(r,Lu()+(o<6&&sn()==32&&qt()==32))}function Es(r){for(;qt();)switch(Je){case r:return zt;case 34:case 39:r!==34&&r!==39&&Es(Je);break;case 40:r===41&&Es(r);break;case 92:qt();break}return zt}function bg(r,o){for(;qt()&&r+Je!==57;)if(r+Je===84&&sn()===47)break;return"/*"+bi(o,zt-1)+"*"+Ju(r===47?r:qt())}function Sg(r){for(;!gi(sn());)qt();return bi(r,zt)}function jg(r){return Lm(Qu("",null,null,null,[""],r=Gm(r),0,[0],r))}function Qu(r,o,d,s,g,m,O,j,z){for(var p=0,H=0,R=O,J=0,ae=0,E=0,M=1,q=1,B=1,F=0,$="",pe=g,U=m,I=s,G=$;q;)switch(E=F,F=qt()){case 40:if(E!=108&&lt(G,R-1)==58){Ts(G+=be(Xu(F),"&","&\f"),"&\f")!=-1&&(B=-1);break}case 34:case 39:case 91:G+=Xu(F);break;case 9:case 10:case 13:case 32:G+=vg(E);break;case 92:G+=xg(Lu()-1,7);continue;case 47:switch(sn()){case 42:case 47:Yu(Ag(bg(qt(),Lu()),o,d),z);break;default:G+="/"}break;case 123*M:j[p++]=cn(G)*B;case 125*M:case 59:case 0:switch(F){case 0:case 125:q=0;case 59+H:B==-1&&(G=be(G,/\f/g,"")),ae>0&&cn(G)-R&&Yu(ae>32?rm(G+";",s,d,R-1):rm(be(G," ","")+";",s,d,R-2),z);break;case 59:G+=";";default:if(Yu(I=cm(G,o,d,p,H,g,j,$,pe=[],U=[],R),m),F===123)if(H===0)Qu(G,o,I,I,pe,m,R,j,U);else switch(J===99&&lt(G,3)===110?100:J){case 100:case 108:case 109:case 115:Qu(r,I,I,s&&Yu(cm(r,I,I,0,0,g,j,$,g,pe=[],R),U),g,U,R,j,s?pe:U);break;default:Qu(G,I,I,I,[""],U,0,j,U)}}p=H=ae=0,M=B=1,$=G="",R=O;break;case 58:R=1+cn(G),ae=E;default:if(M<1){if(F==123)--M;else if(F==125&&M++==0&&yg()==125)continue}switch(G+=Ju(F),F*M){case 38:B=H>0?1:(G+="\f",-1);break;case 44:j[p++]=(cn(G)-1)*B,B=1;break;case 64:sn()===45&&(G+=Xu(qt())),J=sn(),H=R=cn($=G+=Sg(Lu())),F++;break;case 45:E===45&&cn(G)==2&&(M=0)}}return m}function cm(r,o,d,s,g,m,O,j,z,p,H){for(var R=g-1,J=g===0?m:[""],ae=qs(J),E=0,M=0,q=0;E<s;++E)for(var B=0,F=pi(r,R+1,R=og(M=O[E])),$=r;B<ae;++B)($=km(M>0?J[B]+" "+F:be(F,/&\f/g,J[B])))&&(z[q++]=$);return Wu(r,o,d,g===0?Us:j,z,p,H)}function Ag(r,o,d){return Wu(r,o,d,qm,Ju(gg()),pi(r,2,-2),0)}function rm(r,o,d,s){return Wu(r,o,d,Hs,pi(r,0,s),pi(r,s+1,-1),s)}function fl(r,o){for(var d="",s=qs(r),g=0;g<s;g++)d+=o(r[g],g,r,o)||"";return d}function zg(r,o,d,s){switch(r.type){case fg:if(r.children.length)break;case sg:case Hs:return r.return=r.return||r.value;case qm:return"";case Bm:return r.return=r.value+"{"+fl(r.children,s)+"}";case Us:r.value=r.props.join(",")}return cn(d=fl(r.children,s))?r.return=r.value+"{"+d+"}":""}function Tg(r){var o=qs(r);return function(d,s,g,m){for(var O="",j=0;j<o;j++)O+=r[j](d,s,g,m)||"";return O}}function Eg(r){return function(o){o.root||(o=o.return)&&r(o)}}var sm=function(o){var d=new WeakMap;return function(s){if(d.has(s))return d.get(s);var g=o(s);return d.set(s,g),g}};function Xm(r){var o=Object.create(null);return function(d){return o[d]===void 0&&(o[d]=r(d)),o[d]}}var Mg=function(o,d,s){for(var g=0,m=0;g=m,m=sn(),g===38&&m===12&&(d[s]=1),!gi(m);)qt();return bi(o,zt)},Ng=function(o,d){var s=-1,g=44;do switch(gi(g)){case 0:g===38&&sn()===12&&(d[s]=1),o[s]+=Mg(zt-1,d,s);break;case 2:o[s]+=Xu(g);break;case 4:if(g===44){o[++s]=sn()===58?"&\f":"",d[s]=o[s].length;break}default:o[s]+=Ju(g)}while(g=qt());return o},Og=function(o,d){return Lm(Ng(Gm(o),d))},fm=new WeakMap,Cg=function(o){if(!(o.type!=="rule"||!o.parent||o.length<1)){for(var d=o.value,s=o.parent,g=o.column===s.column&&o.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(o.props.length===1&&d.charCodeAt(0)!==58&&!fm.get(s))&&!g){fm.set(o,!0);for(var m=[],O=Og(d,m),j=s.props,z=0,p=0;z<O.length;z++)for(var H=0;H<j.length;H++,p++)o.props[p]=m[z]?O[z].replace(/&\f/g,j[H]):j[H]+" "+O[z]}}},wg=function(o){if(o.type==="decl"){var d=o.value;d.charCodeAt(0)===108&&d.charCodeAt(2)===98&&(o.return="",o.value="")}};function Qm(r,o){switch(hg(r,o)){case 5103:return xe+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+r+Vu+r+ct+r+r;case 6828:case 4268:return xe+r+ct+r+r;case 6165:return xe+r+ct+"flex-"+r+r;case 5187:return xe+r+be(r,/(\w+).+(:[^]+)/,xe+"box-$1$2"+ct+"flex-$1$2")+r;case 5443:return xe+r+ct+"flex-item-"+be(r,/flex-|-self/,"")+r;case 4675:return xe+r+ct+"flex-line-pack"+be(r,/align-content|flex-|-self/,"")+r;case 5548:return xe+r+ct+be(r,"shrink","negative")+r;case 5292:return xe+r+ct+be(r,"basis","preferred-size")+r;case 6060:return xe+"box-"+be(r,"-grow","")+xe+r+ct+be(r,"grow","positive")+r;case 4554:return xe+be(r,/([^-])(transform)/g,"$1"+xe+"$2")+r;case 6187:return be(be(be(r,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),r,"")+r;case 5495:case 3959:return be(r,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return be(be(r,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+r+r;case 4095:case 3583:case 4068:case 2532:return be(r,/(.+)-inline(.+)/,xe+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(r)-1-o>6)switch(lt(r,o+1)){case 109:if(lt(r,o+4)!==45)break;case 102:return be(r,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+Vu+(lt(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~Ts(r,"stretch")?Qm(be(r,"stretch","fill-available"),o)+r:r}break;case 4949:if(lt(r,o+1)!==115)break;case 6444:switch(lt(r,cn(r)-3-(~Ts(r,"!important")&&10))){case 107:return be(r,":",":"+xe)+r;case 101:return be(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+xe+(lt(r,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+ct+"$2box$3")+r}break;case 5936:switch(lt(r,o+11)){case 114:return xe+r+ct+be(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return xe+r+ct+be(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return xe+r+ct+be(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return xe+r+ct+r+r}return r}var _g=function(o,d,s,g){if(o.length>-1&&!o.return)switch(o.type){case Hs:o.return=Qm(o.value,o.length);break;case Bm:return fl([si(o,{value:be(o.value,"@","@"+xe)})],g);case Us:if(o.length)return pg(o.props,function(m){switch(mg(m,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fl([si(o,{props:[be(m,/:(read-\w+)/,":"+Vu+"$1")]})],g);case"::placeholder":return fl([si(o,{props:[be(m,/:(plac\w+)/,":"+xe+"input-$1")]}),si(o,{props:[be(m,/:(plac\w+)/,":"+Vu+"$1")]}),si(o,{props:[be(m,/:(plac\w+)/,ct+"input-$1")]})],g)}return""})}},Dg=[_g],Rg=function(o){var d=o.key;if(d==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(M){var q=M.getAttribute("data-emotion");q.indexOf(" ")!==-1&&(document.head.appendChild(M),M.setAttribute("data-s",""))})}var g=o.stylisPlugins||Dg,m={},O,j=[];O=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+d+' "]'),function(M){for(var q=M.getAttribute("data-emotion").split(" "),B=1;B<q.length;B++)m[q[B]]=!0;j.push(M)});var z,p=[Cg,wg];{var H,R=[zg,Eg(function(M){H.insert(M)})],J=Tg(p.concat(g,R)),ae=function(q){return fl(jg(q),J)};z=function(q,B,F,$){H=F,ae(q?q+"{"+B.styles+"}":B.styles),$&&(E.inserted[B.name]=!0)}}var E={key:d,sheet:new rg({key:d,container:O,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:m,registered:{},insert:z};return E.sheet.hydrate(j),E},js={exports:{}},je={};var om;function Ug(){if(om)return je;om=1;var r=typeof Symbol=="function"&&Symbol.for,o=r?Symbol.for("react.element"):60103,d=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,g=r?Symbol.for("react.strict_mode"):60108,m=r?Symbol.for("react.profiler"):60114,O=r?Symbol.for("react.provider"):60109,j=r?Symbol.for("react.context"):60110,z=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,H=r?Symbol.for("react.forward_ref"):60112,R=r?Symbol.for("react.suspense"):60113,J=r?Symbol.for("react.suspense_list"):60120,ae=r?Symbol.for("react.memo"):60115,E=r?Symbol.for("react.lazy"):60116,M=r?Symbol.for("react.block"):60121,q=r?Symbol.for("react.fundamental"):60117,B=r?Symbol.for("react.responder"):60118,F=r?Symbol.for("react.scope"):60119;function $(U){if(typeof U=="object"&&U!==null){var I=U.$$typeof;switch(I){case o:switch(U=U.type,U){case z:case p:case s:case m:case g:case R:return U;default:switch(U=U&&U.$$typeof,U){case j:case H:case E:case ae:case O:return U;default:return I}}case d:return I}}}function pe(U){return $(U)===p}return je.AsyncMode=z,je.ConcurrentMode=p,je.ContextConsumer=j,je.ContextProvider=O,je.Element=o,je.ForwardRef=H,je.Fragment=s,je.Lazy=E,je.Memo=ae,je.Portal=d,je.Profiler=m,je.StrictMode=g,je.Suspense=R,je.isAsyncMode=function(U){return pe(U)||$(U)===z},je.isConcurrentMode=pe,je.isContextConsumer=function(U){return $(U)===j},je.isContextProvider=function(U){return $(U)===O},je.isElement=function(U){return typeof U=="object"&&U!==null&&U.$$typeof===o},je.isForwardRef=function(U){return $(U)===H},je.isFragment=function(U){return $(U)===s},je.isLazy=function(U){return $(U)===E},je.isMemo=function(U){return $(U)===ae},je.isPortal=function(U){return $(U)===d},je.isProfiler=function(U){return $(U)===m},je.isStrictMode=function(U){return $(U)===g},je.isSuspense=function(U){return $(U)===R},je.isValidElementType=function(U){return typeof U=="string"||typeof U=="function"||U===s||U===p||U===m||U===g||U===R||U===J||typeof U=="object"&&U!==null&&(U.$$typeof===E||U.$$typeof===ae||U.$$typeof===O||U.$$typeof===j||U.$$typeof===H||U.$$typeof===q||U.$$typeof===B||U.$$typeof===F||U.$$typeof===M)},je.typeOf=$,je}var dm;function Hg(){return dm||(dm=1,js.exports=Ug()),js.exports}var As,hm;function qg(){if(hm)return As;hm=1;var r=Hg(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m={};m[r.ForwardRef]=s,m[r.Memo]=g;function O(E){return r.isMemo(E)?g:m[E.$$typeof]||o}var j=Object.defineProperty,z=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,H=Object.getOwnPropertyDescriptor,R=Object.getPrototypeOf,J=Object.prototype;function ae(E,M,q){if(typeof M!="string"){if(J){var B=R(M);B&&B!==J&&ae(E,B,q)}var F=z(M);p&&(F=F.concat(p(M)));for(var $=O(E),pe=O(M),U=0;U<F.length;++U){var I=F[U];if(!d[I]&&!(q&&q[I])&&!(pe&&pe[I])&&!($&&$[I])){var G=H(M,I);try{j(E,I,G)}catch{}}}}return E}return As=ae,As}qg();var Bg=!0;function Zm(r,o,d){var s="";return d.split(" ").forEach(function(g){r[g]!==void 0?o.push(r[g]+";"):g&&(s+=g+" ")}),s}var Bs=function(o,d,s){var g=o.key+"-"+d.name;(s===!1||Bg===!1)&&o.registered[g]===void 0&&(o.registered[g]=d.styles)},ks=function(o,d,s){Bs(o,d,s);var g=o.key+"-"+d.name;if(o.inserted[d.name]===void 0){var m=d;do o.insert(d===m?"."+g:"",m,o.sheet,!0),m=m.next;while(m!==void 0)}};function kg(r){for(var o=0,d,s=0,g=r.length;g>=4;++s,g-=4)d=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24,d=(d&65535)*1540483477+((d>>>16)*59797<<16),d^=d>>>24,o=(d&65535)*1540483477+((d>>>16)*59797<<16)^(o&65535)*1540483477+((o>>>16)*59797<<16);switch(g){case 3:o^=(r.charCodeAt(s+2)&255)<<16;case 2:o^=(r.charCodeAt(s+1)&255)<<8;case 1:o^=r.charCodeAt(s)&255,o=(o&65535)*1540483477+((o>>>16)*59797<<16)}return o^=o>>>13,o=(o&65535)*1540483477+((o>>>16)*59797<<16),((o^o>>>15)>>>0).toString(36)}var Yg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gg=/[A-Z]|^ms/g,Lg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Vm=function(o){return o.charCodeAt(1)===45},mm=function(o){return o!=null&&typeof o!="boolean"},zs=Xm(function(r){return Vm(r)?r:r.replace(Gg,"-$&").toLowerCase()}),pm=function(o,d){switch(o){case"animation":case"animationName":if(typeof d=="string")return d.replace(Lg,function(s,g,m){return rn={name:g,styles:m,next:rn},g})}return Yg[o]!==1&&!Vm(o)&&typeof d=="number"&&d!==0?d+"px":d};function yi(r,o,d){if(d==null)return"";var s=d;if(s.__emotion_styles!==void 0)return s;switch(typeof d){case"boolean":return"";case"object":{var g=d;if(g.anim===1)return rn={name:g.name,styles:g.styles,next:rn},g.name;var m=d;if(m.styles!==void 0){var O=m.next;if(O!==void 0)for(;O!==void 0;)rn={name:O.name,styles:O.styles,next:rn},O=O.next;var j=m.styles+";";return j}return Xg(r,o,d)}case"function":{if(r!==void 0){var z=rn,p=d(r);return rn=z,yi(r,o,p)}break}}var H=d;if(o==null)return H;var R=o[H];return R!==void 0?R:H}function Xg(r,o,d){var s="";if(Array.isArray(d))for(var g=0;g<d.length;g++)s+=yi(r,o,d[g])+";";else for(var m in d){var O=d[m];if(typeof O!="object"){var j=O;o!=null&&o[j]!==void 0?s+=m+"{"+o[j]+"}":mm(j)&&(s+=zs(m)+":"+pm(m,j)+";")}else if(Array.isArray(O)&&typeof O[0]=="string"&&(o==null||o[O[0]]===void 0))for(var z=0;z<O.length;z++)mm(O[z])&&(s+=zs(m)+":"+pm(m,O[z])+";");else{var p=yi(r,o,O);switch(m){case"animation":case"animationName":{s+=zs(m)+":"+p+";";break}default:s+=m+"{"+p+"}"}}}return s}var gm=/label:\s*([^\s;{]+)\s*(;|$)/g,rn;function Fu(r,o,d){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,g="";rn=void 0;var m=r[0];if(m==null||m.raw===void 0)s=!1,g+=yi(d,o,m);else{var O=m;g+=O[0]}for(var j=1;j<r.length;j++)if(g+=yi(d,o,r[j]),s){var z=m;g+=z[j]}gm.lastIndex=0;for(var p="",H;(H=gm.exec(g))!==null;)p+="-"+H[1];var R=kg(g)+p;return{name:R,styles:g,next:rn}}var Qg=function(o){return o()},Km=Ph.useInsertionEffect?Ph.useInsertionEffect:!1,Jm=Km||Qg,ym=Km||K.useLayoutEffect,$m=K.createContext(typeof HTMLElement<"u"?Rg({key:"css"}):null);$m.Provider;var Ys=function(o){return K.forwardRef(function(d,s){var g=K.useContext($m);return o(d,g,s)})},vi=K.createContext({}),Zg=function(o,d){if(typeof d=="function"){var s=d(o);return s}return Zu({},o,d)},Vg=sm(function(r){return sm(function(o){return Zg(r,o)})}),Kg=function(o){var d=K.useContext(vi);return o.theme!==d&&(d=Vg(d)(o.theme)),K.createElement(vi.Provider,{value:d},o.children)},Gs={}.hasOwnProperty,Ms="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Jg=function(o,d){var s={};for(var g in d)Gs.call(d,g)&&(s[g]=d[g]);return s[Ms]=o,s},$g=function(o){var d=o.cache,s=o.serialized,g=o.isStringTag;return Bs(d,s,g),Jm(function(){return ks(d,s,g)}),null},Wg=Ys(function(r,o,d){var s=r.css;typeof s=="string"&&o.registered[s]!==void 0&&(s=o.registered[s]);var g=r[Ms],m=[s],O="";typeof r.className=="string"?O=Zm(o.registered,m,r.className):r.className!=null&&(O=r.className+" ");var j=Fu(m,void 0,K.useContext(vi));O+=o.key+"-"+j.name;var z={};for(var p in r)Gs.call(r,p)&&p!=="css"&&p!==Ms&&(z[p]=r[p]);return z.className=O,d&&(z.ref=d),K.createElement(K.Fragment,null,K.createElement($g,{cache:o,serialized:j,isStringTag:typeof g=="string"}),K.createElement(g,z))}),Fg=Wg,vm=function(o,d){var s=arguments;if(d==null||!Gs.call(d,"css"))return K.createElement.apply(void 0,s);var g=s.length,m=new Array(g);m[0]=Fg,m[1]=Jg(o,d);for(var O=2;O<g;O++)m[O]=s[O];return K.createElement.apply(null,m)};(function(r){var o;o||(o=r.JSX||(r.JSX={}))})(vm||(vm={}));var xm=Ys(function(r,o){var d=r.styles,s=Fu([d],void 0,K.useContext(vi)),g=K.useRef();return ym(function(){var m=o.key+"-global",O=new o.sheet.constructor({key:m,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),j=!1,z=document.querySelector('style[data-emotion="'+m+" "+s.name+'"]');return o.sheet.tags.length&&(O.before=o.sheet.tags[0]),z!==null&&(j=!0,z.setAttribute("data-emotion",m),O.hydrate([z])),g.current=[O,j],function(){O.flush()}},[o]),ym(function(){var m=g.current,O=m[0],j=m[1];if(j){m[1]=!1;return}if(s.next!==void 0&&ks(o,s.next,!0),O.tags.length){var z=O.tags[O.tags.length-1].nextElementSibling;O.before=z,O.flush()}o.insert("",s,O,!1)},[o,s.name]),null});function Wm(){for(var r=arguments.length,o=new Array(r),d=0;d<r;d++)o[d]=arguments[d];return Fu(o)}var Pg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ig=Xm(function(r){return Pg.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),ey=Ig,ty=function(o){return o!=="theme"},bm=function(o){return typeof o=="string"&&o.charCodeAt(0)>96?ey:ty},Sm=function(o,d,s){var g;if(d){var m=d.shouldForwardProp;g=o.__emotion_forwardProp&&m?function(O){return o.__emotion_forwardProp(O)&&m(O)}:m}return typeof g!="function"&&s&&(g=o.__emotion_forwardProp),g},ny=function(o){var d=o.cache,s=o.serialized,g=o.isStringTag;return Bs(d,s,g),Jm(function(){return ks(d,s,g)}),null},ay=function r(o,d){var s=o.__emotion_real===o,g=s&&o.__emotion_base||o,m,O;d!==void 0&&(m=d.label,O=d.target);var j=Sm(o,d,s),z=j||bm(g),p=!z("as");return function(){var H=arguments,R=s&&o.__emotion_styles!==void 0?o.__emotion_styles.slice(0):[];if(m!==void 0&&R.push("label:"+m+";"),H[0]==null||H[0].raw===void 0)R.push.apply(R,H);else{var J=H[0];R.push(J[0]);for(var ae=H.length,E=1;E<ae;E++)R.push(H[E],J[E])}var M=Ys(function(q,B,F){var $=p&&q.as||g,pe="",U=[],I=q;if(q.theme==null){I={};for(var G in q)I[G]=q[G];I.theme=K.useContext(vi)}typeof q.className=="string"?pe=Zm(B.registered,U,q.className):q.className!=null&&(pe=q.className+" ");var me=Fu(R.concat(U),B.registered,I);pe+=B.key+"-"+me.name,O!==void 0&&(pe+=" "+O);var pt=p&&j===void 0?bm($):z,Tt={};for(var Pe in q)p&&Pe==="as"||pt(Pe)&&(Tt[Pe]=q[Pe]);return Tt.className=pe,F&&(Tt.ref=F),K.createElement(K.Fragment,null,K.createElement(ny,{cache:B,serialized:me,isStringTag:typeof $=="string"}),K.createElement($,Tt))});return M.displayName=m!==void 0?m:"Styled("+(typeof g=="string"?g:g.displayName||g.name||"Component")+")",M.defaultProps=o.defaultProps,M.__emotion_real=M,M.__emotion_base=g,M.__emotion_styles=R,M.__emotion_forwardProp=j,Object.defineProperty(M,"toString",{value:function(){return"."+O}}),M.withComponent=function(q,B){var F=r(q,Zu({},d,B,{shouldForwardProp:Sm(M,B,!0)}));return F.apply(void 0,R)},M}},ly=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Q=ay.bind(null);ly.forEach(function(r){Q[r]=Q(r)});const iy=Q.header``,uy=Q.button``,jm=Q.span``,cy=Q.strong``,ry=Q.small``,sy=Q.nav``,Am=Q.button``,fy=Q.a``,oy=Q.span``;function dy({view:r,setView:o,health:d}){return u.jsxs(iy,{className:"topbar",children:[u.jsxs(uy,{className:"brand-button",type:"button",onClick:()=>o("marketplace"),"aria-label":"Open marketplace",children:[u.jsx(jm,{className:"brand-mark",children:"RN"}),u.jsxs(jm,{className:"brand-copy",children:[u.jsx(cy,{children:"RentNest"}),u.jsx(ry,{children:d?.dataMode==="mongodb"?"MongoDB live":"Demo data mode"})]})]}),u.jsxs(sy,{className:"nav-tabs","aria-label":"Main views",children:[u.jsxs(Am,{className:r==="marketplace"?"active":"",type:"button",onClick:()=>o("marketplace"),children:[u.jsx(ng,{"aria-hidden":"true"}),"Marketplace"]}),u.jsxs(Am,{className:r==="admin"?"active":"",type:"button",onClick:()=>o("admin"),children:[u.jsx(Dm,{"aria-hidden":"true"}),"Admin Portal"]})]}),u.jsxs(fy,{className:"header-cta",href:"#rent-out",children:[u.jsx(Ds,{"aria-hidden":"true"}),"List your item"]})]})}const Ku={name:"",category:"Furniture",intent:"Home",area:"",city:"Pune",pricePerMonth:4500,deposit:1200,quantity:1,status:"available",condition:"Good",rating:4.6,deliveryAvailable:!0,imageUrl:"",description:"",tags:"",ownerName:"",ownerEmail:"",ownerPhone:"",ownerVerified:!0},aa={Furniture:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=82",Electronics:"https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=1000&q=82",Utensils:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=82",Appliances:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=82",Event:"https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=82"},Ls=["Hinjewadi Phase 1","Hinjewadi Phase 2","Hinjewadi Phase 3","Wakad","Aundh","Baner"],hy=[["72-hour setup","Delivery, placement, and install windows inspired by premium rental flows.",Rs],["Flexible plans","Monthly, quarterly, and move-in bundle pricing for short stays and new apartments.",Wp],["Verified supply","Owner checks, deposits, condition notes, and admin approval before going live.",Um]],my=[{name:"Work-from-home kit",area:"Baner + Wakad",price:1299,items:"Desk, chair, monitor stand, lamp"},{name:"1BHK move-in bundle",area:"Hinjewadi",price:5299,items:"Bed, mattress, wardrobe, desk, fridge"},{name:"Weekend event kit",area:"Aundh + Baner",price:2499,items:"Projector, speaker, dinner set, lights"}],fi=[{title:"Move-in packages",copy:"Furniture, fridge, washer, desk, and mattress bundles for new homes near Hinjewadi.",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82",tag:"From ₹5,299/month"},{title:"Work and study kits",copy:"Desk, chair, monitor stand, and lamps for hybrid workers in Baner and Wakad.",image:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=82",tag:"Setup in 72h"},{title:"Weekend event rentals",copy:"Projectors, speakers, dinner sets, and lights for house parties and office evenings.",image:"https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=82",tag:"Event-ready"}],py=[["Zero-hassle setup","Delivery, placement, basic installation, and pickup support in your locality."],["Maintenance included","Admin can track condition, owner verification, and service notes from inventory."],["Rent or list","Customers can rent monthly. Owners can submit products for admin review."],["Bundle-first shopping","Curated packages help new Pune renters furnish faster."]],Fm={available:"Available","pending-review":"Pending review",rented:"Rented",maintenance:"Maintenance",hidden:"Hidden",pending:"Pending",approved:"Approved",active:"Active",completed:"Completed",cancelled:"Cancelled"},zm={search:"",location:"",category:"all",intent:"all",maxPrice:2e4,verified:!1,delivery:!1,sort:"recommended"};function mt(r){return r?.id||r?._id}function Tm(){return new Date().toISOString().slice(0,10)}function gy(r){const o=new Date;return o.setMonth(o.getMonth()+Number(r||1)),o.toISOString().slice(0,10)}function yy(r){return r||"INR"}const ne=Q.div``,na=Q.section``,Pm=Q.aside``,oi=Q.article``,Im=Q.form``,Be=Q.label``,ft=Q.input``,xi=Q.select``,Wt=Q.option``,e0=Q.textarea``,Jt=Q.button``,Em=Q.a``,Xs=Q.img``,ee=Q.span``,Ht=Q.strong``,vy=Q.small``,xy=Q.h1``,sl=Q.h2``,di=Q.h3``,At=Q.p``;function by({listings:r,categories:o,settings:d,loading:s,money:g,onCreateBooking:m,onCreateListing:O}){const[j,z]=K.useState(zm),[p,H]=K.useState(null),[R,J]=K.useState(0);K.useEffect(()=>{const M=window.setInterval(()=>J(q=>(q+1)%fi.length),5200);return()=>window.clearInterval(M)},[]);const ae=K.useMemo(()=>{const M=j.search.trim().toLowerCase(),q=j.location.trim().toLowerCase();return r.filter(B=>B.status==="available").filter(B=>{const F=[B.name,B.category,B.description,B.owner?.name,...B.tags||[]].join(" ").toLowerCase(),$=[B.area,B.city].join(" ").toLowerCase();return(!M||F.includes(M))&&(!q||$.includes(q))&&(j.category==="all"||B.category===j.category)&&(j.intent==="all"||B.intent===j.intent)&&Number(B.pricePerMonth)<=Number(j.maxPrice)&&(!j.verified||B.owner?.verified)&&(!j.delivery||B.deliveryAvailable)}).sort((B,F)=>j.sort==="price-low"?B.pricePerMonth-F.pricePerMonth:j.sort==="rating"?F.rating-B.rating:Number(F.owner?.verified)-Number(B.owner?.verified)||F.rating-B.rating)},[j,r]),E=(M,q)=>z(B=>({...B,[M]:q}));return u.jsxs(u.Fragment,{children:[u.jsxs(na,{className:"market-hero","aria-label":"Rental marketplace",children:[u.jsxs(ne,{className:"hero-copy",children:[u.jsx(At,{className:"eyebrow",children:"Pune rentals for Hinjewadi, Wakad, Aundh, Baner"}),u.jsx(xy,{children:"Premium rentals for Pune homes, teams, and weekend plans."}),u.jsx(At,{children:"Rent furniture, appliances, electronics, utensils, and curated bundles with local delivery, installation, maintenance, and owner-powered inventory."}),u.jsxs(ne,{className:"hero-actions",children:[u.jsxs(Em,{className:"primary-action",href:"#catalog",children:[u.jsx(um,{"aria-hidden":"true"}),"Browse rentals"]}),u.jsxs(Em,{className:"secondary-action hero-link",href:"#rent-out",children:[u.jsx(_m,{"aria-hidden":"true"}),"Rent out your product"]})]}),u.jsxs(ne,{className:"hero-stats","aria-label":"Service highlights",children:[u.jsxs(ee,{children:[u.jsx(Ht,{children:"6"})," Pune zones"]}),u.jsxs(ee,{children:[u.jsx(Ht,{children:"72h"})," setup target"]}),u.jsxs(ee,{children:[u.jsx(Ht,{children:"0"})," listing fee"]})]})]}),u.jsxs(ne,{className:"search-panel","aria-label":"Marketplace search",children:[u.jsxs(ne,{className:"search-panel-top",children:[u.jsx(ee,{children:"Find your setup"}),u.jsx(Ht,{children:"Pune live"})]}),u.jsxs(Be,{className:"wide-field",children:[u.jsx(ee,{children:"Search inventory"}),u.jsxs(ne,{className:"input-with-icon",children:[u.jsx(um,{"aria-hidden":"true"}),u.jsx(ft,{value:j.search,onChange:M=>E("search",M.target.value),placeholder:"Sofa, fridge, work desk, event kit"})]})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Location"}),u.jsx(ft,{value:j.location,onChange:M=>E("location",M.target.value),placeholder:"Hinjewadi Phase 1"})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Sort"}),u.jsxs(xi,{value:j.sort,onChange:M=>E("sort",M.target.value),children:[u.jsx(Wt,{value:"recommended",children:"Recommended"}),u.jsx(Wt,{value:"price-low",children:"Price low to high"}),u.jsx(Wt,{value:"rating",children:"Highest rated"})]})]}),u.jsx(ne,{className:"locality-strip","aria-label":"Popular Pune localities",children:Ls.map(M=>u.jsx(Jt,{className:j.location===M?"active":"",type:"button",onClick:()=>E("location",j.location===M?"":M),children:M},M))})]})]}),u.jsxs(na,{className:"featured-carousel","aria-label":"Featured rental collections",children:[u.jsxs(ne,{className:"carousel-card",children:[fi.map((M,q)=>u.jsxs(oi,{className:`carousel-slide ${R===q?"active":""}`,"aria-hidden":R!==q,children:[u.jsx(Xs,{src:M.image,alt:M.title}),u.jsxs(ne,{className:"carousel-copy",children:[u.jsx(ee,{children:M.tag}),u.jsx(sl,{children:M.title}),u.jsx(At,{children:M.copy})]})]},M.title)),u.jsxs(ne,{className:"carousel-controls",children:[u.jsx(Jt,{type:"button",onClick:()=>J((R-1+fi.length)%fi.length),"aria-label":"Previous collection",children:u.jsx(Zp,{"aria-hidden":"true"})}),u.jsx(Jt,{type:"button",onClick:()=>J((R+1)%fi.length),"aria-label":"Next collection",children:u.jsx(Vp,{"aria-hidden":"true"})})]})]}),u.jsx(ne,{className:"story-grid",children:py.map(([M,q])=>u.jsxs(oi,{children:[u.jsx(di,{children:M}),u.jsx(At,{children:q})]},M))})]}),u.jsx(na,{className:"promise-band","aria-label":"Rental service promises",children:hy.map(([M,q,B])=>u.jsxs(oi,{children:[u.jsx(B,{"aria-hidden":"true"}),u.jsxs(ne,{children:[u.jsx(di,{children:M}),u.jsx(At,{children:q})]})]},M))}),u.jsxs(na,{className:"bundle-section","aria-label":"Rental bundles",children:[u.jsxs(ne,{className:"section-heading",children:[u.jsxs(ne,{children:[u.jsx(At,{className:"eyebrow",children:"Bundle plans"}),u.jsx(sl,{children:"Ready-made packages for Pune renters"})]}),u.jsxs(ee,{className:"soft-pill",children:[u.jsx(eg,{"aria-hidden":"true"}),"Premium look, local inventory"]})]}),u.jsx(ne,{className:"bundle-grid",children:my.map(M=>u.jsxs(oi,{className:"bundle-card",children:[u.jsx(ee,{children:M.area}),u.jsx(di,{children:M.name}),u.jsx(At,{children:M.items}),u.jsxs(Ht,{children:[g(M.price),"/month"]})]},M.name))})]}),u.jsxs(na,{className:"market-layout",id:"catalog",children:[u.jsxs(Pm,{className:"filters-card","aria-label":"Filters",children:[u.jsxs(ne,{className:"panel-title",children:[u.jsxs(ne,{children:[u.jsx(At,{className:"eyebrow",children:"Controls"}),u.jsx(sl,{children:"Filters"})]}),u.jsx(Jt,{className:"icon-button",type:"button",onClick:()=>z(zm),"aria-label":"Reset filters",title:"Reset filters",children:u.jsx(Rm,{"aria-hidden":"true"})})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Category"}),u.jsxs(xi,{value:j.category,onChange:M=>E("category",M.target.value),children:[u.jsx(Wt,{value:"all",children:"All categories"}),o.map(M=>u.jsx(Wt,{value:M.name,children:M.name},mt(M)))]})]}),u.jsxs(Be,{children:[u.jsxs(ee,{children:["Max monthly price: ",g(j.maxPrice)]}),u.jsx(ft,{type:"range",min:"500",max:"50000",step:"500",value:j.maxPrice,onChange:M=>E("maxPrice",M.target.value)})]}),u.jsx(ne,{className:"intent-grid",role:"group","aria-label":"Rental intent",children:["all","Home","Event","Move-in"].map(M=>u.jsx(Jt,{className:j.intent===M?"active":"",type:"button",onClick:()=>E("intent",M),children:M==="all"?"All":M},M))}),u.jsxs(Be,{className:"check-row",children:[u.jsx(ft,{type:"checkbox",checked:j.verified,onChange:M=>E("verified",M.target.checked)}),u.jsx(ee,{children:"Verified owners only"})]}),u.jsxs(Be,{className:"check-row",children:[u.jsx(ft,{type:"checkbox",checked:j.delivery,onChange:M=>E("delivery",M.target.checked)}),u.jsx(ee,{children:"Delivery available"})]})]}),u.jsxs(na,{className:"catalog-area","aria-live":"polite",children:[u.jsxs(ne,{className:"section-heading",children:[u.jsxs(ne,{children:[u.jsx(At,{className:"eyebrow",children:"Available now"}),u.jsxs(sl,{children:[ae.length," local rentals"]})]}),u.jsxs(ne,{className:"category-strip","aria-label":"Categories",children:[u.jsx(Jt,{className:j.category==="all"?"active":"",type:"button",onClick:()=>E("category","all"),children:"All"}),o.map(M=>u.jsx(Jt,{className:j.category===M.name?"active":"",type:"button",onClick:()=>E("category",M.name),children:M.name},mt(M)))]})]}),s?u.jsx(ne,{className:"empty-state",children:"Loading marketplace inventory..."}):ae.length?u.jsx(ne,{className:"catalog-grid",children:ae.map(M=>u.jsx(Sy,{item:M,money:g,onRent:()=>H(M)},mt(M)))}):u.jsxs(ne,{className:"empty-state",children:[u.jsx(_s,{"aria-hidden":"true"}),u.jsx(di,{children:"No matching rentals"}),u.jsx(At,{children:"Try another category, a wider price range, or a nearby locality."})]})]})]}),u.jsx(Ay,{categories:o,onCreateListing:O}),p?u.jsx(jy,{item:p,settings:d,money:g,onClose:()=>H(null),onCreateBooking:m}):null]})}function Sy({item:r,money:o,onRent:d}){const s=r.imageUrl||aa[r.category]||aa.Furniture;return u.jsxs(oi,{className:"item-card",children:[u.jsxs(ne,{className:"item-media",children:[u.jsx(Xs,{src:s,alt:r.name,loading:"lazy"}),u.jsx(ee,{className:`status-badge ${r.status}`,children:Fm[r.status]||r.status})]}),u.jsxs(ne,{className:"item-body",children:[u.jsxs(ne,{className:"card-top",children:[u.jsx(di,{children:r.name}),u.jsxs(Ht,{children:[o(r.pricePerMonth),"/month"]})]}),u.jsx(At,{children:r.description}),u.jsx(ne,{className:"benefit-row",children:(r.tags||[]).slice(0,3).map(g=>u.jsx(ee,{children:g},g))}),u.jsxs(ne,{className:"meta-row",children:[u.jsxs(ee,{children:[u.jsx(Jp,{"aria-hidden":"true"}),r.area]}),u.jsxs(ee,{children:[u.jsx(tg,{"aria-hidden":"true"}),Number(r.rating||0).toFixed(1)]}),u.jsxs(ee,{children:[r.deliveryAvailable?u.jsx(Rs,{"aria-hidden":"true"}):u.jsx(_s,{"aria-hidden":"true"}),r.deliveryAvailable?"Delivery":"Pickup"]}),r.owner?.verified?u.jsxs(ee,{children:[u.jsx(Qp,{"aria-hidden":"true"}),"Verified"]}):null]}),u.jsxs(ne,{className:"card-footer",children:[u.jsxs(ne,{children:[u.jsx(Ht,{children:r.owner?.name}),u.jsxs(ee,{children:["Deposit ",o(r.deposit)]})]}),u.jsxs(Jt,{className:"primary-action compact",type:"button",onClick:d,children:[u.jsx(ws,{"aria-hidden":"true"}),"Rent"]})]})]})]})}function jy({item:r,settings:o,money:d,onClose:s,onCreateBooking:g}){const[m,O]=K.useState({customerName:"",customerContact:"",startDate:Tm(),months:3,deliveryAddress:"",note:""}),[j,z]=K.useState(!1),p=Math.max(1,Number(m.months||1)),H=Number(r.pricePerMonth||0)*p,R=Math.round(H*Number(o?.platformFeePercent||0)/100),J=H+Number(r.deposit||0)+R,ae=gy(p),E=(q,B)=>O(F=>({...F,[q]:B})),M=async q=>{q.preventDefault(),z(!0);try{await g({listingId:mt(r),customerName:m.customerName,customerContact:m.customerContact,startDate:m.startDate,endDate:ae,months:p,deliveryAddress:m.deliveryAddress,note:m.note}),s()}finally{z(!1)}};return u.jsxs(Pm,{className:"drawer-shell","aria-label":"Booking request",children:[u.jsx(Jt,{className:"drawer-backdrop",type:"button",onClick:s,"aria-label":"Close booking drawer"}),u.jsxs(na,{className:"drawer-panel",role:"dialog","aria-modal":"true","aria-labelledby":"booking-title",children:[u.jsx(Jt,{className:"icon-button drawer-close",type:"button",onClick:s,"aria-label":"Close",title:"Close",children:u.jsx(lg,{"aria-hidden":"true"})}),u.jsx(Xs,{className:"drawer-image",src:r.imageUrl||aa[r.category]||aa.Furniture,alt:r.name}),u.jsxs(ne,{className:"drawer-heading",children:[u.jsxs(ne,{children:[u.jsx(At,{className:"eyebrow",children:r.category}),u.jsx(sl,{id:"booking-title",children:r.name})]}),u.jsxs(Ht,{children:[d(r.pricePerMonth),"/month"]})]}),u.jsxs(Im,{className:"drawer-form",onSubmit:M,children:[u.jsxs(ne,{className:"form-grid",children:[u.jsxs(Be,{children:[u.jsx(ee,{children:"Start date"}),u.jsx(ft,{type:"date",value:m.startDate,min:Tm(),onChange:q=>E("startDate",q.target.value),required:!0})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Tenure"}),u.jsxs(xi,{value:m.months,onChange:q=>E("months",q.target.value),children:[u.jsx(Wt,{value:"1",children:"1 month"}),u.jsx(Wt,{value:"3",children:"3 months"}),u.jsx(Wt,{value:"6",children:"6 months"}),u.jsx(Wt,{value:"12",children:"12 months"})]})]})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Your name"}),u.jsx(ft,{value:m.customerName,onChange:q=>E("customerName",q.target.value),required:!0})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Phone or email"}),u.jsx(ft,{value:m.customerContact,onChange:q=>E("customerContact",q.target.value),required:!0})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Delivery address or pickup note"}),u.jsx(e0,{rows:"3",value:m.deliveryAddress,onChange:q=>E("deliveryAddress",q.target.value)})]}),u.jsxs(ne,{className:"total-box",children:[u.jsxs(ne,{children:[u.jsxs(ee,{children:[p," month rent"]}),u.jsx(Ht,{children:d(H)})]}),u.jsxs(ne,{children:[u.jsx(ee,{children:"Security deposit"}),u.jsx(Ht,{children:d(r.deposit)})]}),u.jsxs(ne,{children:[u.jsx(ee,{children:"Platform fee"}),u.jsx(Ht,{children:d(R)})]}),u.jsxs(ne,{className:"total-line",children:[u.jsx(ee,{children:"Total before pickup"}),u.jsx(Ht,{children:d(J)})]})]}),u.jsxs(Jt,{className:"primary-action full",type:"submit",disabled:j,children:[u.jsx(ws,{"aria-hidden":"true"}),j?"Sending...":"Request Booking"]})]})]})]})}function Ay({categories:r,onCreateListing:o}){const[d,s]=K.useState(Ku),[g,m]=K.useState(!1),O=Math.max(0,Math.round(Number(d.pricePerMonth||0)*.75)),j=(p,H)=>s(R=>({...R,[p]:H})),z=async p=>{p.preventDefault(),m(!0);try{await o({...d,status:"pending-review",city:"Pune",tags:`${d.tags||""}, community owner, pending inspection`,imageUrl:d.imageUrl||aa[d.category]||aa.Furniture}),s(Ku)}finally{m(!1)}};return u.jsxs(na,{className:"owner-section",id:"rent-out","aria-label":"List an item",children:[u.jsxs(ne,{className:"owner-copy",children:[u.jsx(At,{className:"eyebrow",children:"Rent out your product"}),u.jsx(sl,{children:"Turn idle furniture, electronics, and utensils into monthly income"}),u.jsx(At,{children:"Owners in Hinjewadi, Wakad, Aundh, and Baner can submit items for review. Admins approve, price, and manage the listing before it goes live."}),u.jsxs(ne,{className:"owner-earnings",children:[u.jsx(ee,{children:"Estimated monthly earning"}),u.jsxs(Ht,{children:["₹",O.toLocaleString("en-IN")]}),u.jsx(vy,{children:"Estimated owner payout after platform operations"})]}),u.jsxs(ne,{className:"owner-steps",children:[u.jsx(ee,{children:"1. Submit item"}),u.jsx(ee,{children:"2. Admin verifies"}),u.jsx(ee,{children:"3. Customer books"})]})]}),u.jsxs(Im,{className:"listing-form",onSubmit:z,children:[u.jsxs(ne,{className:"form-grid",children:[u.jsxs(Be,{children:[u.jsx(ee,{children:"Item name"}),u.jsx(ft,{value:d.name,onChange:p=>j("name",p.target.value),required:!0})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Category"}),u.jsx(xi,{value:d.category,onChange:p=>j("category",p.target.value),required:!0,children:r.map(p=>u.jsx(Wt,{value:p.name,children:p.name},mt(p)))})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Area"}),u.jsxs(xi,{value:d.area,onChange:p=>j("area",p.target.value),required:!0,children:[u.jsx(Wt,{value:"",children:"Select locality"}),Ls.map(p=>u.jsx(Wt,{value:p,children:p},p))]})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Monthly price"}),u.jsx(ft,{type:"number",min:"0",value:d.pricePerMonth,onChange:p=>j("pricePerMonth",p.target.value),required:!0})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Security deposit"}),u.jsx(ft,{type:"number",min:"0",value:d.deposit,onChange:p=>j("deposit",p.target.value),required:!0})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Owner name"}),u.jsx(ft,{value:d.ownerName,onChange:p=>j("ownerName",p.target.value),required:!0})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Owner phone"}),u.jsx(ft,{value:d.ownerPhone,onChange:p=>j("ownerPhone",p.target.value),placeholder:"+91 98765 43210"})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Photo URL"}),u.jsx(ft,{value:d.imageUrl,onChange:p=>j("imageUrl",p.target.value),placeholder:"Optional image link"})]})]}),u.jsxs(Be,{children:[u.jsx(ee,{children:"Description"}),u.jsx(e0,{rows:"4",value:d.description,onChange:p=>j("description",p.target.value),required:!0})]}),u.jsxs(ne,{className:"form-actions",children:[u.jsxs(Be,{className:"check-row",children:[u.jsx(ft,{type:"checkbox",checked:d.deliveryAvailable,onChange:p=>j("deliveryAvailable",p.target.checked)}),u.jsx(ee,{children:"Delivery available"})]}),u.jsxs(Be,{className:"check-row",children:[u.jsx(ft,{type:"checkbox",checked:d.ownerVerified,onChange:p=>j("ownerVerified",p.target.checked)}),u.jsx(ee,{children:"Owner verified"})]})]}),u.jsxs(Jt,{className:"primary-action full",type:"submit",disabled:g,children:[u.jsx(_m,{"aria-hidden":"true"}),g?"Submitting...":"Submit for Admin Review"]})]})]})}function t0({status:r}){return u.jsx(oy,{className:`status-pill ${r}`,children:Fm[r]||r})}const we=Q.div``,la=Q.section``,zy=Q.aside``,Ns=Q.article``,Ty=Q.nav``,Cn=Q.button``,Qs=Q.form``,Ae=Q.label``,He=Q.input``,hi=Q.select``,rt=Q.option``,Ey=Q.textarea``,ce=Q.span``,dl=Q.strong``,My=Q.h1``,Si=Q.h2``,Os=Q.h3``,ia=Q.p``,n0=Q.table``,a0=Q.thead``,l0=Q.tbody``,mi=Q.tr``,tn=Q.th``,$t=Q.td``;function Ny({listings:r,categories:o,bookings:d,settings:s,metrics:g,money:m,reload:O,notify:j}){const[z,p]=K.useState("overview");return u.jsxs(la,{className:"admin-shell","aria-label":"Admin portal",children:[u.jsxs(zy,{className:"admin-sidebar",children:[u.jsx(ia,{className:"eyebrow",children:"Admin"}),u.jsx(My,{children:"Business command center"}),u.jsx(Ty,{"aria-label":"Admin sections",children:[["overview",Dm,"Overview"],["inventory",Cm,"Inventory"],["bookings",wm,"Bookings"],["categories",ag,"Categories"],["settings",Pp,"Settings"]].map(([H,R,J])=>u.jsxs(Cn,{className:z===H?"active":"",type:"button",onClick:()=>p(H),children:[u.jsx(R,{"aria-hidden":"true"}),J]},H))})]}),u.jsxs(we,{className:"admin-main",children:[z==="overview"?u.jsx(Oy,{metrics:g,bookings:d,money:m,settings:s}):null,z==="inventory"?u.jsx(Cy,{listings:r,categories:o,money:m,reload:O,notify:j}):null,z==="bookings"?u.jsx(wy,{bookings:d,money:m,reload:O,notify:j}):null,z==="categories"?u.jsx(_y,{categories:o,reload:O,notify:j}):null,z==="settings"?u.jsx(Dy,{settings:s,reload:O,notify:j}):null]})]})}function Oy({metrics:r,bookings:o,money:d,settings:s}){const g=[["Total listings",r?.totalListings||0,Cm],["Open bookings",r?.openBookings||0,wm],["Potential monthly revenue",d(r?.monthlyRevenue||0),im],["Utilization",`${r?.utilizationPercent||0}%`,Xp]];return u.jsxs(u.Fragment,{children:[u.jsx(we,{className:"section-heading",children:u.jsxs(we,{children:[u.jsx(ia,{className:"eyebrow",children:"Overview"}),u.jsxs(Si,{children:[s?.platformName||"RentNest"," operations"]})]})}),u.jsx(we,{className:"metrics-grid",children:g.map(([m,O,j])=>u.jsxs(Ns,{className:"metric-card",children:[u.jsx(j,{"aria-hidden":"true"}),u.jsx(ce,{children:m}),u.jsx(dl,{children:O})]},m))}),u.jsxs(we,{className:"admin-grid",children:[u.jsxs(la,{className:"admin-panel",children:[u.jsx(Os,{children:"Recent bookings"}),u.jsxs(we,{className:"activity-list",children:[o.slice(0,6).map(m=>u.jsxs(Ns,{className:"activity-row",children:[u.jsxs(we,{children:[u.jsx(dl,{children:m.listingName}),u.jsxs(ce,{children:[m.customer?.name," · ",d(m.total)]})]}),u.jsx(t0,{status:m.status})]},mt(m))),o.length?null:u.jsx(ia,{className:"muted",children:"No booking requests yet."})]})]}),u.jsxs(la,{className:"admin-panel",children:[u.jsx(Os,{children:"Policy snapshot"}),u.jsxs(we,{className:"policy-list",children:[u.jsx(Gu,{icon:Um,label:"Owner verification",value:s?.ownerVerificationRequired?"Required":"Optional"}),u.jsx(Gu,{icon:Rs,label:"Delivery",value:s?.deliveryEnabled?"Enabled":"Disabled"}),u.jsx(Gu,{icon:im,label:"Platform fee",value:`${s?.platformFeePercent||0}%`}),u.jsx(Gu,{icon:ws,label:"Rental window",value:`${s?.minRentalDays||1}-${s?.maxRentalDays||12} months`})]})]})]})]})}function Gu({icon:r,label:o,value:d}){return u.jsxs(we,{className:"policy-item",children:[u.jsx(r,{"aria-hidden":"true"}),u.jsx(ce,{children:o}),u.jsx(dl,{children:d})]})}function Cy({listings:r,categories:o,money:d,reload:s,notify:g}){const[m,O]=K.useState(Ku),[j,z]=K.useState(null),p=(E,M)=>O(q=>({...q,[E]:M})),H=()=>{z(null),O(Ku)},R=E=>{z(mt(E)),O({name:E.name||"",category:E.category||"Furniture",intent:E.intent||"Home",area:E.area||"",city:E.city||"Pune",pricePerMonth:E.pricePerMonth||0,deposit:E.deposit||0,quantity:E.quantity||1,status:E.status||"available",condition:E.condition||"Good",rating:E.rating||4.5,deliveryAvailable:!!E.deliveryAvailable,imageUrl:E.imageUrl||"",description:E.description||"",tags:(E.tags||[]).join(", "),ownerName:E.owner?.name||"",ownerEmail:E.owner?.email||"",ownerPhone:E.owner?.phone||"",ownerVerified:!!E.owner?.verified})},J=async E=>{E.preventDefault();const M={...m,imageUrl:m.imageUrl||aa[m.category]||aa.Furniture};j?(await st.updateListing(j,M),g("Inventory item updated.")):(await st.createListing(M),g("Inventory item created.")),H(),await s()},ae=async E=>{await st.deleteListing(E),await s(),g("Inventory item deleted.")};return u.jsxs(u.Fragment,{children:[u.jsxs(we,{className:"section-heading",children:[u.jsxs(we,{children:[u.jsx(ia,{className:"eyebrow",children:"Inventory"}),u.jsx(Si,{children:"Manage rental supply"})]}),u.jsxs(Cn,{className:"secondary-action",type:"button",onClick:H,children:[u.jsx(Ds,{"aria-hidden":"true"}),"New item"]})]}),u.jsx(la,{className:"admin-panel",children:u.jsxs(Qs,{className:"admin-form",onSubmit:J,children:[u.jsxs(we,{className:"form-grid",children:[u.jsxs(Ae,{children:[u.jsx(ce,{children:"Item name"}),u.jsx(He,{value:m.name,onChange:E=>p("name",E.target.value),required:!0})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Category"}),u.jsx(hi,{value:m.category,onChange:E=>p("category",E.target.value),required:!0,children:o.map(E=>u.jsx(rt,{value:E.name,children:E.name},mt(E)))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Status"}),u.jsxs(hi,{value:m.status,onChange:E=>p("status",E.target.value),children:[u.jsx(rt,{value:"available",children:"Available"}),u.jsx(rt,{value:"pending-review",children:"Pending review"}),u.jsx(rt,{value:"rented",children:"Rented"}),u.jsx(rt,{value:"maintenance",children:"Maintenance"}),u.jsx(rt,{value:"hidden",children:"Hidden"})]})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Intent"}),u.jsxs(hi,{value:m.intent,onChange:E=>p("intent",E.target.value),children:[u.jsx(rt,{value:"Home",children:"Home"}),u.jsx(rt,{value:"Event",children:"Event"}),u.jsx(rt,{value:"Move-in",children:"Move-in"})]})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Area"}),u.jsxs(hi,{value:m.area,onChange:E=>p("area",E.target.value),required:!0,children:[u.jsx(rt,{value:"",children:"Select locality"}),Ls.map(E=>u.jsx(rt,{value:E,children:E},E))]})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Quantity"}),u.jsx(He,{type:"number",min:"0",value:m.quantity,onChange:E=>p("quantity",E.target.value)})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Monthly price"}),u.jsx(He,{type:"number",min:"0",value:m.pricePerMonth,onChange:E=>p("pricePerMonth",E.target.value),required:!0})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Deposit"}),u.jsx(He,{type:"number",min:"0",value:m.deposit,onChange:E=>p("deposit",E.target.value),required:!0})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Owner"}),u.jsx(He,{value:m.ownerName,onChange:E=>p("ownerName",E.target.value),required:!0})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Owner phone"}),u.jsx(He,{value:m.ownerPhone,onChange:E=>p("ownerPhone",E.target.value)})]})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Description"}),u.jsx(Ey,{rows:"3",value:m.description,onChange:E=>p("description",E.target.value),required:!0})]}),u.jsxs(we,{className:"form-actions",children:[u.jsxs(Ae,{className:"check-row",children:[u.jsx(He,{type:"checkbox",checked:m.deliveryAvailable,onChange:E=>p("deliveryAvailable",E.target.checked)}),u.jsx(ce,{children:"Delivery available"})]}),u.jsxs(Ae,{className:"check-row",children:[u.jsx(He,{type:"checkbox",checked:m.ownerVerified,onChange:E=>p("ownerVerified",E.target.checked)}),u.jsx(ce,{children:"Owner verified"})]}),u.jsxs(Cn,{className:"primary-action",type:"submit",children:[u.jsx(Fp,{"aria-hidden":"true"}),j?"Save Item":"Create Item"]})]})]})}),u.jsx(la,{className:"admin-panel table-panel",children:u.jsx(we,{className:"table-wrap",children:u.jsxs(n0,{children:[u.jsx(a0,{children:u.jsxs(mi,{children:[u.jsx(tn,{children:"Item"}),u.jsx(tn,{children:"Category"}),u.jsx(tn,{children:"Status"}),u.jsx(tn,{children:"Price"}),u.jsx(tn,{children:"Owner"}),u.jsx(tn,{children:"Actions"})]})}),u.jsx(l0,{children:r.map(E=>u.jsxs(mi,{children:[u.jsxs($t,{children:[u.jsx(dl,{children:E.name}),u.jsx(ce,{children:E.area})]}),u.jsx($t,{children:E.category}),u.jsx($t,{children:u.jsx(t0,{status:E.status})}),u.jsx($t,{children:d(E.pricePerMonth)}),u.jsx($t,{children:E.owner?.name}),u.jsx($t,{children:u.jsxs(we,{className:"row-actions",children:[u.jsx(Cn,{className:"icon-button",type:"button",onClick:()=>R(E),"aria-label":`Edit ${E.name}`,title:"Edit",children:u.jsx($p,{"aria-hidden":"true"})}),u.jsx(Cn,{className:"icon-button danger",type:"button",onClick:()=>ae(mt(E)),"aria-label":`Delete ${E.name}`,title:"Delete",children:u.jsx(Hm,{"aria-hidden":"true"})})]})})]},mt(E)))})]})})})]})}function wy({bookings:r,money:o,reload:d,notify:s}){const g=async(m,O)=>{await st.updateBooking(m,{status:O}),await d(),s("Booking status updated.")};return u.jsxs(u.Fragment,{children:[u.jsx(we,{className:"section-heading",children:u.jsxs(we,{children:[u.jsx(ia,{className:"eyebrow",children:"Bookings"}),u.jsx(Si,{children:"Approve and track rental requests"})]})}),u.jsx(la,{className:"admin-panel table-panel",children:u.jsx(we,{className:"table-wrap",children:u.jsxs(n0,{children:[u.jsx(a0,{children:u.jsxs(mi,{children:[u.jsx(tn,{children:"Booking"}),u.jsx(tn,{children:"Customer"}),u.jsx(tn,{children:"Dates"}),u.jsx(tn,{children:"Total"}),u.jsx(tn,{children:"Status"})]})}),u.jsxs(l0,{children:[r.map(m=>u.jsxs(mi,{children:[u.jsxs($t,{children:[u.jsx(dl,{children:m.listingName}),u.jsxs(ce,{children:[m.months||m.days||1," month rental"]})]}),u.jsxs($t,{children:[u.jsx(dl,{children:m.customer?.name}),u.jsx(ce,{children:m.customer?.contact})]}),u.jsxs($t,{children:[u.jsx(ce,{children:String(m.startDate).slice(0,10)}),u.jsx(ce,{children:String(m.endDate).slice(0,10)})]}),u.jsx($t,{children:o(m.total)}),u.jsx($t,{children:u.jsxs(hi,{value:m.status,onChange:O=>g(mt(m),O.target.value),children:[u.jsx(rt,{value:"pending",children:"Pending"}),u.jsx(rt,{value:"approved",children:"Approved"}),u.jsx(rt,{value:"active",children:"Active"}),u.jsx(rt,{value:"completed",children:"Completed"}),u.jsx(rt,{value:"cancelled",children:"Cancelled"})]})})]},mt(m))),r.length?null:u.jsx(mi,{children:u.jsx($t,{colSpan:"5",children:"No booking requests yet."})})]})]})})})]})}function _y({categories:r,reload:o,notify:d}){const[s,g]=K.useState({name:"",icon:"package",description:""}),m=async z=>{z.preventDefault(),await st.createCategory({...s,active:!0}),g({name:"",icon:"package",description:""}),await o(),d("Category added.")},O=async z=>{await st.updateCategory(mt(z),{active:!z.active}),await o(),d("Category updated.")},j=async z=>{await st.deleteCategory(mt(z)),await o(),d("Category deleted.")};return u.jsxs(u.Fragment,{children:[u.jsx(we,{className:"section-heading",children:u.jsxs(we,{children:[u.jsx(ia,{className:"eyebrow",children:"Categories"}),u.jsx(Si,{children:"Manage marketplace structure"})]})}),u.jsx(la,{className:"admin-panel",children:u.jsxs(Qs,{className:"admin-form",onSubmit:m,children:[u.jsxs(we,{className:"form-grid three",children:[u.jsxs(Ae,{children:[u.jsx(ce,{children:"Name"}),u.jsx(He,{value:s.name,onChange:z=>g(p=>({...p,name:z.target.value})),required:!0})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Icon key"}),u.jsx(He,{value:s.icon,onChange:z=>g(p=>({...p,icon:z.target.value}))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Description"}),u.jsx(He,{value:s.description,onChange:z=>g(p=>({...p,description:z.target.value}))})]})]}),u.jsxs(Cn,{className:"primary-action",type:"submit",children:[u.jsx(Ds,{"aria-hidden":"true"}),"Add Category"]})]})}),u.jsx(we,{className:"category-admin-grid",children:r.map(z=>u.jsxs(Ns,{className:"category-admin-card",children:[u.jsxs(we,{children:[u.jsx(Os,{children:z.name}),u.jsx(ia,{children:z.description})]}),u.jsxs(we,{className:"row-actions",children:[u.jsxs(Cn,{className:"secondary-action",type:"button",onClick:()=>O(z),children:[u.jsx(Kp,{"aria-hidden":"true"}),z.active?"Active":"Paused"]}),u.jsx(Cn,{className:"icon-button danger",type:"button",onClick:()=>j(z),"aria-label":`Delete ${z.name}`,title:"Delete",children:u.jsx(Hm,{"aria-hidden":"true"})})]})]},mt(z)))})]})}function Dy({settings:r,reload:o,notify:d}){const[s,g]=K.useState(r||{});K.useEffect(()=>g(r||{}),[r]);const m=(j,z)=>g(p=>({...p,[j]:z})),O=async j=>{j.preventDefault(),await st.updateSettings(s),await o(),d("Business settings saved.")};return u.jsxs(u.Fragment,{children:[u.jsx(we,{className:"section-heading",children:u.jsxs(we,{children:[u.jsx(ia,{className:"eyebrow",children:"Settings"}),u.jsx(Si,{children:"Business logic and platform rules"})]})}),u.jsx(la,{className:"admin-panel",children:u.jsxs(Qs,{className:"admin-form",onSubmit:O,children:[u.jsxs(we,{className:"form-grid",children:[u.jsxs(Ae,{children:[u.jsx(ce,{children:"Platform name"}),u.jsx(He,{value:s.platformName||"",onChange:j=>m("platformName",j.target.value)})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Operating city"}),u.jsx(He,{value:s.city||"",onChange:j=>m("city",j.target.value)})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Currency"}),u.jsx(He,{value:s.currency||"INR",onChange:j=>m("currency",j.target.value.toUpperCase())})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Platform fee %"}),u.jsx(He,{type:"number",min:"0",value:s.platformFeePercent||0,onChange:j=>m("platformFeePercent",Number(j.target.value))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Default deposit %"}),u.jsx(He,{type:"number",min:"0",value:s.defaultDepositPercent||0,onChange:j=>m("defaultDepositPercent",Number(j.target.value))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Late fee per month"}),u.jsx(He,{type:"number",min:"0",value:s.lateFeePerDay||0,onChange:j=>m("lateFeePerDay",Number(j.target.value))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Cancellation window hours"}),u.jsx(He,{type:"number",min:"0",value:s.cancellationWindowHours||0,onChange:j=>m("cancellationWindowHours",Number(j.target.value))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Min rental months"}),u.jsx(He,{type:"number",min:"1",value:s.minRentalDays||1,onChange:j=>m("minRentalDays",Number(j.target.value))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Max rental months"}),u.jsx(He,{type:"number",min:"1",value:s.maxRentalDays||30,onChange:j=>m("maxRentalDays",Number(j.target.value))})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Support email"}),u.jsx(He,{value:s.supportEmail||"",onChange:j=>m("supportEmail",j.target.value)})]}),u.jsxs(Ae,{children:[u.jsx(ce,{children:"Support phone"}),u.jsx(He,{value:s.supportPhone||"",onChange:j=>m("supportPhone",j.target.value)})]})]}),u.jsxs(we,{className:"form-actions",children:[u.jsxs(Ae,{className:"check-row",children:[u.jsx(He,{type:"checkbox",checked:!!s.deliveryEnabled,onChange:j=>m("deliveryEnabled",j.target.checked)}),u.jsx(ce,{children:"Delivery enabled"})]}),u.jsxs(Ae,{className:"check-row",children:[u.jsx(He,{type:"checkbox",checked:!!s.ownerVerificationRequired,onChange:j=>m("ownerVerificationRequired",j.target.checked)}),u.jsx(ce,{children:"Require owner verification"})]}),u.jsxs(Ae,{className:"check-row",children:[u.jsx(He,{type:"checkbox",checked:!!s.autoApproveBookings,onChange:j=>m("autoApproveBookings",j.target.checked)}),u.jsx(ce,{children:"Auto approve bookings"})]})]}),u.jsxs(Cn,{className:"primary-action",type:"submit",children:[u.jsx(Ip,{"aria-hidden":"true"}),"Save Settings"]})]})})]})}const Ry=Q.div``,Uy=Q.main``,Hy=Q.main``,qy=Q.h1``,By=Q.p``,ky=Q.button``,Yy=Q.div``;function Gy(){const[r,o]=K.useState("marketplace"),[d,s]=K.useState([]),[g,m]=K.useState([]),[O,j]=K.useState([]),[z,p]=K.useState(null),[H,R]=K.useState(null),[J,ae]=K.useState(null),[E,M]=K.useState(!0),[q,B]=K.useState(""),[F,$]=K.useState(""),pe=me=>{try{return new Intl.NumberFormat("en-IN",{style:"currency",currency:yy(z?.currency),maximumFractionDigits:0}).format(Number(me||0))}catch{return`₹${Number(me||0).toLocaleString("en-IN")}`}},U=me=>{B(me),window.clearTimeout(U.timer),U.timer=window.setTimeout(()=>B(""),2800)},I=async()=>{$("");try{const[me,pt,Tt,Pe,it,fn]=await Promise.all([st.health(),st.listings("?includeAll=true"),st.categories(),st.bookings(),st.settings(),st.metrics()]);ae(me),s(pt),m(Tt),j(Pe),p(it),R(fn)}catch(me){$(me.message)}finally{M(!1)}};K.useEffect(()=>{I()},[]);const G=K.useMemo(()=>g.filter(me=>me.active!==!1),[g]);return u.jsxs(Ry,{className:"app-shell",children:[u.jsx(dy,{view:r,setView:o,health:J}),F?u.jsxs(Hy,{className:"error-screen",children:[u.jsx(_s,{"aria-hidden":"true"}),u.jsx(qy,{children:"API connection needs attention"}),u.jsx(By,{children:F}),u.jsxs(ky,{className:"primary-action",type:"button",onClick:I,children:[u.jsx(Rm,{"aria-hidden":"true"}),"Retry"]})]}):u.jsx(Uy,{children:r==="marketplace"?u.jsx(by,{listings:d,categories:G,settings:z,loading:E,money:pe,onCreateBooking:async me=>{await st.createBooking(me),await I(),U("Booking request sent to the admin queue.")},onCreateListing:async me=>{await st.createListing(me),await I(),U("Listing published and added to inventory.")}}):u.jsx(Ny,{listings:d,categories:g,bookings:O,settings:z,metrics:H,money:pe,reload:I,notify:U})}),u.jsx(Yy,{className:`toast ${q?"show":""}`,role:"status","aria-live":"polite",children:q})]})}const Ly=`:root {
  --ink: #142120;
  --muted: #64716f;
  --line: #dde6e1;
  --paper: #f7f7f1;
  --surface: #ffffff;
  --teal: #087b6c;
  --teal-dark: #07584f;
  --coral: #de6f4f;
  --blue: #295f8f;
  --amber: #edc758;
  --plum: #59406a;
  --green-soft: #e9f5ef;
  --shadow: 0 18px 60px rgba(15, 45, 45, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    linear-gradient(180deg, rgba(247, 247, 241, 0.98), rgba(239, 246, 242, 0.92) 55%, rgba(247, 247, 241, 1)),
    var(--paper);
  color: var(--ink);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.68;
}

img {
  display: block;
  max-width: 100%;
}

svg {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  stroke-width: 2.2;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 14px;
  font-size: clamp(2.55rem, 5vw, 5.35rem);
  line-height: 0.95;
  letter-spacing: 0;
}

h2 {
  margin-bottom: 0;
  font-size: clamp(1.55rem, 2.6vw, 2.28rem);
  line-height: 1.05;
  letter-spacing: 0;
}

h3 {
  margin-bottom: 10px;
  font-size: 1.05rem;
}

.app-shell {
  min-height: 100vh;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  min-height: 74px;
  padding: 12px clamp(18px, 4vw, 52px);
  background: rgba(247, 247, 241, 0.9);
  border-bottom: 1px solid rgba(220, 230, 227, 0.9);
  backdrop-filter: blur(16px);
}

.brand-button,
.nav-tabs button,
.primary-action,
.secondary-action,
.header-cta,
.icon-button,
.category-strip button,
.intent-grid button,
.locality-strip button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 8px;
  min-width: 0;
}

.brand-button {
  padding: 0;
  background: transparent;
  color: inherit;
  text-align: left;
}

.brand-mark {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  place-items: center;
  color: #ffffff;
  background: var(--ink);
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 900;
}

.brand-copy {
  display: grid;
  gap: 2px;
}

.brand-copy strong {
  font-size: 1.05rem;
  line-height: 1;
}

.brand-copy small {
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 800;
}

.nav-tabs {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.nav-tabs button {
  min-height: 42px;
  padding: 0 14px;
  color: var(--muted);
  background: #ecf3f1;
  font-weight: 850;
}

.nav-tabs button.active,
.nav-tabs button:hover {
  color: white;
  background: var(--ink);
}

.primary-action,
.secondary-action {
  min-height: 42px;
  padding: 0 15px;
  font-weight: 900;
}

.primary-action {
  color: #ffffff;
  background: var(--teal);
}

.primary-action:hover {
  background: var(--teal-dark);
}

.primary-action.compact {
  min-height: 38px;
  padding: 0 12px;
}

.primary-action.full {
  width: 100%;
}

.secondary-action {
  color: var(--ink);
  background: #e7f0ee;
}

.secondary-action:hover {
  background: #dceae7;
}

.header-cta {
  min-height: 42px;
  padding: 0 14px;
  color: var(--ink);
  background: #fff4cd;
  font-weight: 950;
  text-decoration: none;
}

.header-cta:hover {
  background: #ffe899;
}

.icon-button {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  padding: 0;
  color: var(--ink);
  background: #e8f0ee;
}

.icon-button:hover {
  background: #dbe9e6;
}

.icon-button.danger {
  color: #8f2d1d;
  background: #ffe3dc;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--teal);
  font-size: 0.76rem;
  font-weight: 950;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.market-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 0.58fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: end;
  min-height: min(700px, calc(100vh - 74px));
  padding: clamp(62px, 8vw, 112px) clamp(18px, 4vw, 52px) 40px;
  color: white;
  background:
    linear-gradient(105deg, rgba(10, 22, 24, 0.88), rgba(10, 22, 24, 0.6) 48%, rgba(10, 22, 24, 0.2)),
    url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=82") center / cover;
}

.hero-copy {
  max-width: 760px;
}

.hero-copy .eyebrow {
  color: #d7ee76;
}

.hero-copy p:not(.eyebrow) {
  max-width: 560px;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 1.12rem;
  line-height: 1.55;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-link {
  color: white;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.32);
}

.hero-link:hover {
  background: rgba(255, 255, 255, 0.24);
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.hero-stats span {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  min-height: 36px;
  padding: 0 12px;
  color: rgba(255, 255, 255, 0.84);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-weight: 850;
}

.hero-stats strong {
  color: #d7ee76;
  font-size: 1.18rem;
}

.search-panel,
.filters-card,
.listing-form,
.admin-panel {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.search-panel {
  display: grid;
  gap: 14px;
  padding: 16px;
}

.search-panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 2px 2px 8px;
}

.search-panel-top span {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 950;
  text-transform: uppercase;
}

.search-panel-top strong,
.soft-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 30px;
  padding: 0 9px;
  color: #5d3d00;
  background: #fff0bc;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 950;
}

label,
.label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 900;
}

input,
select,
textarea {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  color: var(--ink);
  background: #fbfdfc;
  border: 1px solid var(--line);
  border-radius: 8px;
  outline: 0;
}

textarea {
  resize: vertical;
  line-height: 1.45;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--teal);
  box-shadow: 0 0 0 4px rgba(13, 130, 118, 0.14);
}

.input-with-icon {
  position: relative;
}

.input-with-icon svg {
  position: absolute;
  left: 12px;
  top: 50%;
  color: var(--muted);
  transform: translateY(-50%);
}

.input-with-icon input {
  padding-left: 40px;
}

.locality-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.locality-strip button {
  min-height: 34px;
  padding: 0 10px;
  color: var(--muted);
  background: #eef4f0;
  font-size: 0.78rem;
  font-weight: 900;
}

.locality-strip button.active,
.locality-strip button:hover {
  color: white;
  background: var(--plum);
}

.promise-band {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 26px clamp(18px, 4vw, 52px);
  background: #fffdfa;
  border-bottom: 1px solid var(--line);
}

.promise-band article {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 18px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 12px 36px rgba(18, 35, 32, 0.07);
}

.promise-band svg {
  width: 42px;
  height: 42px;
  padding: 10px;
  color: var(--teal);
  background: #e8f5ef;
  border-radius: 8px;
}

.promise-band h3,
.bundle-card h3 {
  margin-bottom: 6px;
}

.promise-band p,
.bundle-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.bundle-section {
  padding: 52px clamp(18px, 4vw, 52px) 20px;
}

.bundle-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.bundle-card {
  min-width: 0;
  padding: 22px;
  color: white;
  background:
    linear-gradient(135deg, rgba(20, 33, 32, 0.94), rgba(89, 64, 106, 0.84)),
    url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80") center / cover;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.bundle-card span {
  display: inline-flex;
  min-height: 28px;
  align-items: center;
  margin-bottom: 28px;
  padding: 0 9px;
  color: #142120;
  background: #d7ee76;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 950;
}

.bundle-card p {
  min-height: 44px;
  color: rgba(255, 255, 255, 0.78);
}

.bundle-card strong {
  display: block;
  margin-top: 18px;
  color: white;
  font-size: 1.25rem;
}

.featured-carousel {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  gap: 18px;
  padding: 28px clamp(18px, 4vw, 52px) 18px;
  background: #fffdfa;
}

.carousel-card {
  position: relative;
  height: clamp(340px, 38vw, 440px);
  overflow: hidden;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.carousel-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 420ms ease;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-slide::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(90deg, rgba(20, 33, 32, 0.82), rgba(20, 33, 32, 0.42), rgba(20, 33, 32, 0.08));
}

.carousel-copy {
  position: absolute;
  left: clamp(18px, 4vw, 42px);
  bottom: clamp(18px, 4vw, 38px);
  z-index: 1;
  max-width: 520px;
  color: white;
}

.carousel-copy span {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 10px;
  color: #142120;
  background: #d7ee76;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 950;
}

.carousel-copy p {
  max-width: 440px;
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.5;
}

.carousel-controls {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 2;
  display: flex;
  gap: 8px;
}

.carousel-controls button {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.9);
  border: 0;
  border-radius: 8px;
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.story-grid article {
  min-width: 0;
  padding: 18px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 12px 36px rgba(18, 35, 32, 0.07);
}

.story-grid p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.market-layout {
  display: grid;
  grid-template-columns: minmax(240px, 296px) minmax(0, 1fr);
  gap: 26px;
  padding: 34px clamp(18px, 4vw, 52px) 70px;
}

.filters-card {
  position: sticky;
  top: 96px;
  align-self: start;
  display: grid;
  gap: 18px;
  padding: 18px;
}

.panel-title,
.section-heading,
.card-top,
.card-footer,
.drawer-heading,
.form-actions,
.activity-row,
.policy-item,
.row-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.panel-title h2 {
  font-size: 1.16rem;
}

.intent-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.intent-grid button,
.category-strip button {
  min-height: 38px;
  padding: 0 12px;
  color: var(--muted);
  background: #e9f2ef;
  font-weight: 900;
}

.intent-grid button.active,
.category-strip button.active {
  color: white;
  background: var(--teal);
}

.check-row {
  grid-template-columns: 18px minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  color: var(--ink);
  font-size: 0.9rem;
}

.check-row input {
  width: 18px;
  min-height: 18px;
  accent-color: var(--teal);
}

.catalog-area {
  min-width: 0;
}

.section-heading {
  align-items: flex-start;
  margin-bottom: 20px;
}

.section-heading .eyebrow {
  margin-bottom: 6px;
}

.category-strip {
  display: flex;
  max-width: 58vw;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.item-card {
  min-width: 0;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid rgba(221, 230, 225, 0.96);
  border-radius: 8px;
  box-shadow: 0 14px 44px rgba(17, 35, 38, 0.08);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.item-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 60px rgba(17, 35, 38, 0.13);
}

.item-media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: #dce6e3;
}

.item-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-badge,
.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 8px;
  font-size: 0.72rem;
  font-weight: 950;
  text-transform: capitalize;
  white-space: nowrap;
}

.status-badge {
  position: absolute;
  left: 12px;
  top: 12px;
  color: white;
  background: rgba(23, 35, 38, 0.84);
}

.status-pill.available,
.status-pill.approved,
.status-pill.completed,
.status-badge.available {
  color: #06453d;
  background: #d7f2e7;
}

.status-pill.pending {
  color: #6c4a00;
  background: #fff0bc;
}

.status-pill.pending-review,
.status-badge.pending-review {
  color: #5b3a00;
  background: #ffefbd;
}

.status-pill.active,
.status-pill.rented,
.status-badge.rented {
  color: #103d70;
  background: #d9ebff;
}

.status-pill.maintenance,
.status-badge.maintenance {
  color: #793320;
  background: #ffe0d6;
}

.status-pill.cancelled,
.status-pill.hidden,
.status-badge.hidden {
  color: #5e2d35;
  background: #f4dce2;
}

.item-body {
  display: grid;
  gap: 14px;
  padding: 16px;
}

.card-top {
  align-items: flex-start;
}

.card-top h3 {
  margin: 0;
  line-height: 1.18;
}

.card-top strong {
  color: var(--teal-dark);
  white-space: nowrap;
}

.item-body p {
  min-height: 42px;
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.45;
}

.benefit-row {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  min-height: 30px;
}

.benefit-row span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 8px;
  color: #3f3150;
  background: #f1e9f6;
  border-radius: 8px;
  font-size: 0.74rem;
  font-weight: 900;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.meta-row span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-height: 28px;
  padding: 0 8px;
  color: var(--muted);
  background: #f0f5f3;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 850;
}

.meta-row svg {
  width: 15px;
  height: 15px;
}

.card-footer {
  border-top: 1px solid var(--line);
  padding-top: 14px;
}

.card-footer > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.card-footer strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-footer span {
  color: var(--muted);
  font-size: 0.82rem;
}

.empty-state {
  display: grid;
  min-height: 300px;
  place-items: center;
  gap: 10px;
  padding: 34px;
  text-align: center;
  background: white;
  border: 1px dashed #b9cbc7;
  border-radius: 8px;
}

.empty-state svg {
  width: 44px;
  height: 44px;
  color: var(--teal);
}

.empty-state p {
  max-width: 360px;
  margin: 0;
  color: var(--muted);
}

.owner-section {
  display: grid;
  grid-template-columns: minmax(250px, 0.7fr) minmax(0, 1fr);
  gap: clamp(28px, 5vw, 70px);
  align-items: start;
  padding: 74px clamp(18px, 4vw, 52px);
  background:
    linear-gradient(90deg, rgba(247, 247, 241, 0.96), rgba(247, 247, 241, 0.8)),
    url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=82") center / cover;
  border-top: 1px solid var(--line);
}

.owner-copy {
  position: sticky;
  top: 104px;
}

.owner-copy p:not(.eyebrow) {
  max-width: 500px;
  color: var(--muted);
  line-height: 1.6;
}

.owner-earnings {
  display: grid;
  gap: 5px;
  width: min(360px, 100%);
  margin: 22px 0 14px;
  padding: 18px;
  color: white;
  background: var(--ink);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.owner-earnings span,
.owner-earnings small {
  color: rgba(255, 255, 255, 0.72);
  font-weight: 800;
}

.owner-earnings strong {
  color: #d7ee76;
  font-size: 2rem;
  line-height: 1;
}

.owner-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.owner-steps span {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  padding: 0 10px;
  color: var(--ink);
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 950;
}

.listing-form,
.admin-form {
  display: grid;
  gap: 16px;
  padding: clamp(18px, 3vw, 24px);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.form-grid.three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.form-actions {
  justify-content: flex-start;
  flex-wrap: wrap;
}

.drawer-shell {
  position: fixed;
  inset: 0;
  z-index: 50;
}

.drawer-backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  background: rgba(9, 16, 17, 0.52);
  border: 0;
}

.drawer-panel {
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  align-content: start;
  width: min(500px, 100%);
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  background: white;
  box-shadow: -20px 0 70px rgba(6, 21, 23, 0.24);
}

.drawer-close {
  justify-self: end;
  margin-bottom: 10px;
}

.drawer-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: #dce6e3;
  border-radius: 8px;
}

.drawer-heading {
  align-items: flex-start;
  margin: 18px 0;
}

.drawer-heading h2 {
  font-size: 1.6rem;
}

.drawer-heading strong {
  color: var(--teal-dark);
  white-space: nowrap;
}

.drawer-form {
  display: grid;
  gap: 14px;
}

.total-box {
  display: grid;
  gap: 10px;
  padding: 14px;
  background: #eef5f3;
  border-radius: 8px;
}

.total-box div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 0.9rem;
}

.total-box strong {
  color: var(--ink);
}

.total-box .total-line {
  padding-top: 10px;
  border-top: 1px solid #d7e4e1;
  font-weight: 950;
}

.admin-shell {
  display: grid;
  grid-template-columns: minmax(240px, 292px) minmax(0, 1fr);
  gap: 24px;
  padding: 28px clamp(18px, 4vw, 52px) 70px;
}

.admin-sidebar {
  position: sticky;
  top: 96px;
  align-self: start;
  padding: 20px;
  color: white;
  background: var(--ink);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.admin-sidebar h1 {
  margin-bottom: 18px;
  font-size: 1.75rem;
  line-height: 1.05;
}

.admin-sidebar .eyebrow {
  color: var(--amber);
}

.admin-sidebar nav {
  display: grid;
  gap: 8px;
}

.admin-sidebar button {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  min-height: 42px;
  padding: 0 12px;
  color: rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.08);
  border: 0;
  border-radius: 8px;
  font-weight: 850;
}

.admin-sidebar button.active,
.admin-sidebar button:hover {
  color: var(--ink);
  background: white;
}

.admin-main {
  min-width: 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.metric-card {
  min-width: 0;
  display: grid;
  gap: 10px;
  padding: 18px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 12px 38px rgba(17, 35, 38, 0.07);
}

.metric-card svg {
  color: var(--blue);
}

.metric-card span {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 900;
}

.metric-card strong {
  font-size: clamp(1.55rem, 3vw, 2.18rem);
  line-height: 1;
}

.admin-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 18px;
}

.admin-panel {
  padding: 20px;
}

.table-panel {
  margin-top: 18px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
}

th,
td {
  padding: 14px 12px;
  text-align: left;
  border-bottom: 1px solid var(--line);
  vertical-align: middle;
}

th {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 950;
  text-transform: uppercase;
}

td {
  font-size: 0.92rem;
}

td strong,
td span {
  display: block;
}

td span {
  color: var(--muted);
  font-size: 0.82rem;
}

.row-actions {
  justify-content: flex-start;
}

.activity-list,
.policy-list {
  display: grid;
  gap: 12px;
}

.activity-row,
.policy-item,
.category-admin-card {
  padding: 12px;
  background: #f8fbfa;
  border: 1px solid var(--line);
  border-radius: 8px;
}

.activity-row span,
.policy-item span,
.muted {
  color: var(--muted);
}

.activity-row > div {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.activity-row strong,
.activity-row span {
  overflow: hidden;
  text-overflow: ellipsis;
}

.policy-item {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) auto;
}

.policy-item svg {
  color: var(--teal);
}

.category-admin-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.category-admin-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  background: white;
}

.category-admin-card h3 {
  margin-bottom: 6px;
}

.category-admin-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.error-screen {
  display: grid;
  min-height: calc(100vh - 74px);
  place-items: center;
  align-content: center;
  gap: 14px;
  padding: 28px;
  text-align: center;
}

.error-screen svg {
  width: 52px;
  height: 52px;
  color: var(--coral);
}

.error-screen p {
  max-width: 560px;
  color: var(--muted);
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 20px;
  z-index: 60;
  max-width: min(430px, calc(100vw - 36px));
  padding: 13px 16px;
  color: white;
  background: var(--ink);
  border-radius: 8px;
  box-shadow: var(--shadow);
  font-weight: 850;
  opacity: 0;
  transform: translate(-50%, 120px);
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.toast.show {
  opacity: 1;
  transform: translate(-50%, 0);
}

@media (max-width: 1180px) {
  .catalog-grid,
  .metrics-grid,
  .promise-band,
  .bundle-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .market-hero {
    grid-template-columns: 1fr;
  }

  .search-panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .search-panel .wide-field {
    grid-column: 1 / -1;
  }
}

@media (max-width: 900px) {
  .topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-tabs {
    width: 100%;
    margin-left: 0;
  }

  .nav-tabs button {
    flex: 1;
  }

  .header-cta {
    width: 100%;
  }

  .market-layout,
  .featured-carousel,
  .owner-section,
  .admin-shell,
  .admin-grid {
    grid-template-columns: 1fr;
  }

  .filters-card,
  .owner-copy,
  .admin-sidebar {
    position: static;
  }

  .filters-card {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .filters-card .panel-title {
    grid-column: 1 / -1;
  }

  .category-strip {
    max-width: 100%;
  }

  .promise-band,
  .story-grid,
  .bundle-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .topbar,
  .market-hero,
  .market-layout,
  .promise-band,
  .featured-carousel,
  .bundle-section,
  .owner-section,
  .admin-shell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .brand-copy small {
    display: none;
  }

  .market-hero {
    min-height: auto;
    padding-top: 46px;
  }

  h1 {
    font-size: clamp(2.45rem, 13vw, 3.25rem);
  }

  .search-panel,
  .filters-card,
  .catalog-grid,
  .story-grid,
  .form-grid,
  .form-grid.three,
  .metrics-grid,
  .category-admin-grid {
    grid-template-columns: 1fr;
  }

  .section-heading,
  .category-admin-card,
  .hero-actions,
  .form-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .drawer-panel {
    padding: 16px;
  }
}
`,Xy=r=>Wm`
  :root {
    --ink: ${r.colors.ink};
    --muted: ${r.colors.muted};
    --line: ${r.colors.line};
    --paper: ${r.colors.paper};
    --surface: ${r.colors.surface};
    --teal: ${r.colors.teal};
    --teal-dark: ${r.colors.tealDark};
    --coral: ${r.colors.coral};
    --blue: ${r.colors.blue};
    --amber: ${r.colors.amber};
    --plum: ${r.colors.plum};
    --green-soft: ${r.colors.greenSoft};
    --shadow: ${r.shadow};
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`,Qy=Wm`
  ${Ly}
`;function Zy({theme:r}){return u.jsxs(u.Fragment,{children:[u.jsx(xm,{styles:Xy(r)}),u.jsx(xm,{styles:Qy})]})}const Mm={colors:{ink:"#142120",muted:"#64716f",line:"#dde6e1",paper:"#f7f7f1",surface:"#ffffff",teal:"#087b6c",tealDark:"#07584f",coral:"#de6f4f",blue:"#295f8f",amber:"#edc758",plum:"#59406a",greenSoft:"#e9f5ef"},shadow:"0 18px 60px rgba(15, 45, 45, 0.12)",radius:{md:"8px"}};function Vy({children:r}){return u.jsxs(Kg,{theme:Mm,children:[u.jsx(Zy,{theme:Mm}),r]})}kp.createRoot(document.getElementById("root")).render(u.jsx(Nm.StrictMode,{children:u.jsx(Vy,{children:u.jsx(Gy,{})})}));
