(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Fv(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(s).forEach(function(r){var a=Object.getOwnPropertyDescriptor(s,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return s[r]}})}),n}var Cc={exports:{}},Fo={},Pc={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function kv(){if(Gp)return vt;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.iterator;function M(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,b={};function E(w,B,ce){this.props=w,this.context=B,this.refs=b,this.updater=ce||A}E.prototype.isReactComponent={},E.prototype.setState=function(w,B){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,B,"setState")},E.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function y(){}y.prototype=E.prototype;function q(w,B,ce){this.props=w,this.context=B,this.refs=b,this.updater=ce||A}var H=q.prototype=new y;H.constructor=q,D(H,E.prototype),H.isPureReactComponent=!0;var k=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function V(w,B,ce){var j,J={},ie=null,se=null;if(B!=null)for(j in B.ref!==void 0&&(se=B.ref),B.key!==void 0&&(ie=""+B.key),B)L.call(B,j)&&!I.hasOwnProperty(j)&&(J[j]=B[j]);var ge=arguments.length-2;if(ge===1)J.children=ce;else if(1<ge){for(var Se=Array(ge),Re=0;Re<ge;Re++)Se[Re]=arguments[Re+2];J.children=Se}if(w&&w.defaultProps)for(j in ge=w.defaultProps,ge)J[j]===void 0&&(J[j]=ge[j]);return{$$typeof:s,type:w,key:ie,ref:se,props:J,_owner:P.current}}function T(w,B){return{$$typeof:s,type:w.type,key:B,ref:w.ref,props:w.props,_owner:w._owner}}function m(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function O(w){var B={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ce){return B[ce]})}var K=/\/+/g;function F(w,B){return typeof w=="object"&&w!==null&&w.key!=null?O(""+w.key):B.toString(36)}function G(w,B,ce,j,J){var ie=typeof w;(ie==="undefined"||ie==="boolean")&&(w=null);var se=!1;if(w===null)se=!0;else switch(ie){case"string":case"number":se=!0;break;case"object":switch(w.$$typeof){case s:case e:se=!0}}if(se)return se=w,J=J(se),w=j===""?"."+F(se,0):j,k(J)?(ce="",w!=null&&(ce=w.replace(K,"$&/")+"/"),G(J,B,ce,"",function(Re){return Re})):J!=null&&(m(J)&&(J=T(J,ce+(!J.key||se&&se.key===J.key?"":(""+J.key).replace(K,"$&/")+"/")+w)),B.push(J)),1;if(se=0,j=j===""?".":j+":",k(w))for(var ge=0;ge<w.length;ge++){ie=w[ge];var Se=j+F(ie,ge);se+=G(ie,B,ce,Se,J)}else if(Se=M(w),typeof Se=="function")for(w=Se.call(w),ge=0;!(ie=w.next()).done;)ie=ie.value,Se=j+F(ie,ge++),se+=G(ie,B,ce,Se,J);else if(ie==="object")throw B=String(w),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return se}function ee(w,B,ce){if(w==null)return w;var j=[],J=0;return G(w,j,"","",function(ie){return B.call(ce,ie,J++)}),j}function Z(w){if(w._status===-1){var B=w._result;B=B(),B.then(function(ce){(w._status===0||w._status===-1)&&(w._status=1,w._result=ce)},function(ce){(w._status===0||w._status===-1)&&(w._status=2,w._result=ce)}),w._status===-1&&(w._status=0,w._result=B)}if(w._status===1)return w._result.default;throw w._result}var v={current:null},Y={transition:null},U={ReactCurrentDispatcher:v,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function _(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ee,forEach:function(w,B,ce){ee(w,function(){B.apply(this,arguments)},ce)},count:function(w){var B=0;return ee(w,function(){B++}),B},toArray:function(w){return ee(w,function(B){return B})||[]},only:function(w){if(!m(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},vt.Component=E,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=q,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,vt.act=_,vt.cloneElement=function(w,B,ce){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var j=D({},w.props),J=w.key,ie=w.ref,se=w._owner;if(B!=null){if(B.ref!==void 0&&(ie=B.ref,se=P.current),B.key!==void 0&&(J=""+B.key),w.type&&w.type.defaultProps)var ge=w.type.defaultProps;for(Se in B)L.call(B,Se)&&!I.hasOwnProperty(Se)&&(j[Se]=B[Se]===void 0&&ge!==void 0?ge[Se]:B[Se])}var Se=arguments.length-2;if(Se===1)j.children=ce;else if(1<Se){ge=Array(Se);for(var Re=0;Re<Se;Re++)ge[Re]=arguments[Re+2];j.children=ge}return{$$typeof:s,type:w.type,key:J,ref:ie,props:j,_owner:se}},vt.createContext=function(w){return w={$$typeof:c,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},vt.createElement=V,vt.createFactory=function(w){var B=V.bind(null,w);return B.type=w,B},vt.createRef=function(){return{current:null}},vt.forwardRef=function(w){return{$$typeof:f,render:w}},vt.isValidElement=m,vt.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:Z}},vt.memo=function(w,B){return{$$typeof:g,type:w,compare:B===void 0?null:B}},vt.startTransition=function(w){var B=Y.transition;Y.transition={};try{w()}finally{Y.transition=B}},vt.unstable_act=_,vt.useCallback=function(w,B){return v.current.useCallback(w,B)},vt.useContext=function(w){return v.current.useContext(w)},vt.useDebugValue=function(){},vt.useDeferredValue=function(w){return v.current.useDeferredValue(w)},vt.useEffect=function(w,B){return v.current.useEffect(w,B)},vt.useId=function(){return v.current.useId()},vt.useImperativeHandle=function(w,B,ce){return v.current.useImperativeHandle(w,B,ce)},vt.useInsertionEffect=function(w,B){return v.current.useInsertionEffect(w,B)},vt.useLayoutEffect=function(w,B){return v.current.useLayoutEffect(w,B)},vt.useMemo=function(w,B){return v.current.useMemo(w,B)},vt.useReducer=function(w,B,ce){return v.current.useReducer(w,B,ce)},vt.useRef=function(w){return v.current.useRef(w)},vt.useState=function(w){return v.current.useState(w)},vt.useSyncExternalStore=function(w,B,ce){return v.current.useSyncExternalStore(w,B,ce)},vt.useTransition=function(){return v.current.useTransition()},vt.version="18.3.1",vt}var Wp;function yi(){return Wp||(Wp=1,Pc.exports=kv()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function zv(){if(jp)return Fo;jp=1;var s=yi(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,g){var S,x={},M=null,A=null;g!==void 0&&(M=""+g),h.key!==void 0&&(M=""+h.key),h.ref!==void 0&&(A=h.ref);for(S in h)r.call(h,S)&&!l.hasOwnProperty(S)&&(x[S]=h[S]);if(f&&f.defaultProps)for(S in h=f.defaultProps,h)x[S]===void 0&&(x[S]=h[S]);return{$$typeof:e,type:f,key:M,ref:A,props:x,_owner:a.current}}return Fo.Fragment=n,Fo.jsx=c,Fo.jsxs=c,Fo}var Xp;function Bv(){return Xp||(Xp=1,Cc.exports=zv()),Cc.exports}var Pe=Bv(),Qr=yi(),ul={},Lc={exports:{}},Dn={},Dc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Hv(){return qp||(qp=1,function(s){function e(Y,U){var _=Y.length;Y.push(U);e:for(;0<_;){var w=_-1>>>1,B=Y[w];if(0<a(B,U))Y[w]=U,Y[_]=B,_=w;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var U=Y[0],_=Y.pop();if(_!==U){Y[0]=_;e:for(var w=0,B=Y.length,ce=B>>>1;w<ce;){var j=2*(w+1)-1,J=Y[j],ie=j+1,se=Y[ie];if(0>a(J,_))ie<B&&0>a(se,J)?(Y[w]=se,Y[ie]=_,w=ie):(Y[w]=J,Y[j]=_,w=j);else if(ie<B&&0>a(se,_))Y[w]=se,Y[ie]=_,w=ie;else break e}}return U}function a(Y,U){var _=Y.sortIndex-U.sortIndex;return _!==0?_:Y.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],g=[],S=1,x=null,M=3,A=!1,D=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(Y){for(var U=n(g);U!==null;){if(U.callback===null)r(g);else if(U.startTime<=Y)r(g),U.sortIndex=U.expirationTime,e(h,U);else break;U=n(g)}}function k(Y){if(b=!1,H(Y),!D)if(n(h)!==null)D=!0,Z(L);else{var U=n(g);U!==null&&v(k,U.startTime-Y)}}function L(Y,U){D=!1,b&&(b=!1,y(V),V=-1),A=!0;var _=M;try{for(H(U),x=n(h);x!==null&&(!(x.expirationTime>U)||Y&&!O());){var w=x.callback;if(typeof w=="function"){x.callback=null,M=x.priorityLevel;var B=w(x.expirationTime<=U);U=s.unstable_now(),typeof B=="function"?x.callback=B:x===n(h)&&r(h),H(U)}else r(h);x=n(h)}if(x!==null)var ce=!0;else{var j=n(g);j!==null&&v(k,j.startTime-U),ce=!1}return ce}finally{x=null,M=_,A=!1}}var P=!1,I=null,V=-1,T=5,m=-1;function O(){return!(s.unstable_now()-m<T)}function K(){if(I!==null){var Y=s.unstable_now();m=Y;var U=!0;try{U=I(!0,Y)}finally{U?F():(P=!1,I=null)}}else P=!1}var F;if(typeof q=="function")F=function(){q(K)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ee=G.port2;G.port1.onmessage=K,F=function(){ee.postMessage(null)}}else F=function(){E(K,0)};function Z(Y){I=Y,P||(P=!0,F())}function v(Y,U){V=E(function(){Y(s.unstable_now())},U)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){D||A||(D=!0,Z(L))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return M},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(Y){switch(M){case 1:case 2:case 3:var U=3;break;default:U=M}var _=M;M=U;try{return Y()}finally{M=_}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,U){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var _=M;M=Y;try{return U()}finally{M=_}},s.unstable_scheduleCallback=function(Y,U,_){var w=s.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?w+_:w):_=w,Y){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=_+B,Y={id:S++,callback:U,priorityLevel:Y,startTime:_,expirationTime:B,sortIndex:-1},_>w?(Y.sortIndex=_,e(g,Y),n(h)===null&&Y===n(g)&&(b?(y(V),V=-1):b=!0,v(k,_-w))):(Y.sortIndex=B,e(h,Y),D||A||(D=!0,Z(L))),Y},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(Y){var U=M;return function(){var _=M;M=U;try{return Y.apply(this,arguments)}finally{M=_}}}}(Ic)),Ic}var Yp;function Vv(){return Yp||(Yp=1,Dc.exports=Hv()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Gv(){if(Kp)return Dn;Kp=1;var s=yi(),e=Vv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},x={};function M(t){return h.call(x,t)?!0:h.call(S,t)?!1:g.test(t)?x[t]=!0:(S[t]=!0,!1)}function A(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D(t,i,o,u){if(i===null||typeof i>"u"||A(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,u,d,p,R){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=R}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){E[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];E[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){E[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){E[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){E[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){E[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){E[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){E[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){E[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function q(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(y,q);E[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(y,q);E[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(y,q);E[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){E[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),E.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){E[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function H(t,i,o,u){var d=E.hasOwnProperty(i)?E[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(D(i,o,d,u)&&(o=null),u||d===null?M(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var k=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),O=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),Y=Symbol.iterator;function U(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var _=Object.assign,w;function B(t){if(w===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+t}var ce=!1;function j(t,i){if(!t||ce)return"";ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var u=he}Reflect.construct(t,[],i)}else{try{i.call()}catch(he){u=he}t.call(i.prototype)}else{try{throw Error()}catch(he){u=he}t()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var d=he.stack.split(`
`),p=u.stack.split(`
`),R=d.length-1,W=p.length-1;1<=R&&0<=W&&d[R]!==p[W];)W--;for(;1<=R&&0<=W;R--,W--)if(d[R]!==p[W]){if(R!==1||W!==1)do if(R--,W--,0>W||d[R]!==p[W]){var $=`
`+d[R].replace(" at new "," at ");return t.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",t.displayName)),$}while(1<=R&&0<=W);break}}}finally{ce=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?B(t):""}function J(t){switch(t.tag){case 5:return B(t.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return t=j(t.type,!1),t;case 11:return t=j(t.type.render,!1),t;case 1:return t=j(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case P:return"Portal";case T:return"Profiler";case V:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case m:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ee:return i=t.displayName||null,i!==null?i:ie(t.type)||"Memo";case Z:i=t._payload,t=t._init;try{return ie(t(i))}catch{}}return null}function se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(t){var i=Se(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(R){u=""+R,p.call(this,R)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(R){u=""+R},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Je(t){t._valueTracker||(t._valueTracker=Re(t))}function Ge(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Se(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var o=i.checked;return _({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ct(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ge(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function et(t,i){i=i.checked,i!=null&&H(t,"checked",i,!1)}function De(t,i){et(t,i);var o=ge(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ot(t,i.type,o):i.hasOwnProperty("defaultValue")&&ot(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Le(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ot(t,i,o){(i!=="number"||Qe(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ce=Array.isArray;function z(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+ge(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function C(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return _({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function le(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ce(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ge(o)}}function ve(t,i){var o=ge(i.value),u=ge(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Ve=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function gt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){je.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function nt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function at(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=nt(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var Xe=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(t,i){if(i){if(Xe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ft(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function te(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ie=null,pe=null,_e=null;function ke(t){if(t=Mo(t)){if(typeof Ie!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ea(i),Ie(t.stateNode,t.type,i))}}function Ue(t){pe?_e?_e.push(t):_e=[t]:pe=t}function dt(){if(pe){var t=pe,i=_e;if(_e=pe=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function Ot(t,i){return t(i)}function $t(){}var Tt=!1;function An(t,i,o){if(Tt)return t(i,o);Tt=!0;try{return Ot(t,i,o)}finally{Tt=!1,(pe!==null||_e!==null)&&($t(),dt())}}function Sn(t,i){var o=t.stateNode;if(o===null)return null;var u=Ea(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var is=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){is=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{is=!1}function Si(t,i,o,u,d,p,R,W,$){var he=Array.prototype.slice.call(arguments,3);try{i.apply(o,he)}catch(Me){this.onError(Me)}}var xi=!1,Ar=null,Rr=!1,qi=null,ta={onError:function(t){xi=!0,Ar=t}};function rs(t,i,o,u,d,p,R,W,$){xi=!1,Ar=null,Si.apply(ta,arguments)}function na(t,i,o,u,d,p,R,W,$){if(rs.apply(this,arguments),xi){if(xi){var he=Ar;xi=!1,Ar=null}else throw Error(n(198));Rr||(Rr=!0,qi=he)}}function ci(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ia(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ra(t){if(ci(t)!==t)throw Error(n(188))}function Ql(t){var i=t.alternate;if(!i){if(i=ci(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ra(d),t;if(p===u)return ra(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=p;else{for(var R=!1,W=d.child;W;){if(W===o){R=!0,o=d,u=p;break}if(W===u){R=!0,u=d,o=p;break}W=W.sibling}if(!R){for(W=p.child;W;){if(W===o){R=!0,o=p,u=d;break}if(W===u){R=!0,u=p,o=d;break}W=W.sibling}if(!R)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function sa(t){return t=Ql(t),t!==null?oa(t):null}function oa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=oa(t);if(i!==null)return i;t=t.sibling}return null}var aa=e.unstable_scheduleCallback,N=e.unstable_cancelCallback,ne=e.unstable_shouldYield,de=e.unstable_requestPaint,ae=e.unstable_now,re=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,qe=e.unstable_LowPriority,lt=e.unstable_IdlePriority,st=null,Ke=null;function Mt(t){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(st,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Et,Vt=Math.log,kt=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(Vt(t)/kt|0)|0}var tt=64,Gt=4194304;function xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes,R=o&268435455;if(R!==0){var W=R&~d;W!==0?u=xt(W):(p&=R,p!==0&&(u=xt(p)))}else R=o&~d,R!==0?u=xt(R):p!==0&&(u=xt(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-ht(i),d=1<<o,u|=t[o],i&=~d;return u}function Yi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var R=31-ht(p),W=1<<R,$=d[R];$===-1?(!(W&o)||W&u)&&(d[R]=Yi(W,i)):$<=i&&(t.expiredLanes|=W),p&=~W}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function It(){var t=tt;return tt<<=1,!(tt&4194240)&&(tt=64),t}function hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ht(i),t[i]=o}function un(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-ht(o),p=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~p}}function rn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-ht(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var wt=0;function fi(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Md,Jl,Ed,Td,wd,eu=!1,la=[],Ki=null,$i=null,Zi=null,so=new Map,oo=new Map,Qi=[],s_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(t,i,o,u,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&Jl(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function o_(t,i,o,u,d){switch(i){case"focusin":return Ki=ao(Ki,t,i,o,u,d),!0;case"dragenter":return $i=ao($i,t,i,o,u,d),!0;case"mouseover":return Zi=ao(Zi,t,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return so.set(p,ao(so.get(p)||null,t,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,oo.set(p,ao(oo.get(p)||null,t,i,o,u,d)),!0}return!1}function Rd(t){var i=br(t.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=ia(o),i!==null){t.blockedOn=i,wd(t.priority,function(){Ed(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ua(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=nu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return i=Mo(o),i!==null&&Jl(i),t.blockedOn=o,!1;i.shift()}return!0}function bd(t,i,o){ua(t)&&o.delete(i)}function a_(){eu=!1,Ki!==null&&ua(Ki)&&(Ki=null),$i!==null&&ua($i)&&($i=null),Zi!==null&&ua(Zi)&&(Zi=null),so.forEach(bd),oo.forEach(bd)}function lo(t,i){t.blockedOn===i&&(t.blockedOn=null,eu||(eu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,a_)))}function uo(t){function i(d){return lo(d,t)}if(0<la.length){lo(la[0],t);for(var o=1;o<la.length;o++){var u=la[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Ki!==null&&lo(Ki,t),$i!==null&&lo($i,t),Zi!==null&&lo(Zi,t),so.forEach(i),oo.forEach(i),o=0;o<Qi.length;o++)u=Qi[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Qi.length&&(o=Qi[0],o.blockedOn===null);)Rd(o),o.blockedOn===null&&Qi.shift()}var ss=k.ReactCurrentBatchConfig,ca=!0;function l_(t,i,o,u){var d=wt,p=ss.transition;ss.transition=null;try{wt=1,tu(t,i,o,u)}finally{wt=d,ss.transition=p}}function u_(t,i,o,u){var d=wt,p=ss.transition;ss.transition=null;try{wt=4,tu(t,i,o,u)}finally{wt=d,ss.transition=p}}function tu(t,i,o,u){if(ca){var d=nu(t,i,o,u);if(d===null)yu(t,i,u,fa,o),Ad(t,u);else if(o_(d,t,i,o,u))u.stopPropagation();else if(Ad(t,u),i&4&&-1<s_.indexOf(t)){for(;d!==null;){var p=Mo(d);if(p!==null&&Md(p),p=nu(t,i,o,u),p===null&&yu(t,i,u,fa,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else yu(t,i,u,null,o)}}var fa=null;function nu(t,i,o,u){if(fa=null,t=te(u),t=br(t),t!==null)if(i=ci(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ia(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return fa=t,null}function Cd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(re()){case Te:return 1;case Ne:return 4;case ze:case qe:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Ji=null,iu=null,da=null;function Pd(){if(da)return da;var t,i=iu,o=i.length,u,d="value"in Ji?Ji.value:Ji.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var R=o-t;for(u=1;u<=R&&i[o-u]===d[p-u];u++);return da=d.slice(t,1<u?1-u:void 0)}function ha(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function Ld(){return!1}function Fn(t){function i(o,u,d,p,R){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=R,this.currentTarget=null;for(var W in t)t.hasOwnProperty(W)&&(o=t[W],this[W]=o?o(p):p[W]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?pa:Ld,this.isPropagationStopped=Ld,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Fn(os),co=_({},os,{view:0,detail:0}),c_=Fn(co),su,ou,fo,ma=_({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(su=t.screenX-fo.screenX,ou=t.screenY-fo.screenY):ou=su=0,fo=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),Dd=Fn(ma),f_=_({},ma,{dataTransfer:0}),d_=Fn(f_),h_=_({},co,{relatedTarget:0}),au=Fn(h_),p_=_({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=Fn(p_),g_=_({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),__=Fn(g_),v_=_({},os,{data:0}),Id=Fn(v_),y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=x_[t])?!!i[t]:!1}function lu(){return M_}var E_=_({},co,{key:function(t){if(t.key){var i=y_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T_=Fn(E_),w_=_({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Fn(w_),A_=_({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),R_=Fn(A_),b_=_({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=Fn(b_),P_=_({},ma,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=Fn(P_),D_=[9,13,27,32],uu=f&&"CompositionEvent"in window,ho=null;f&&"documentMode"in document&&(ho=document.documentMode);var I_=f&&"TextEvent"in window&&!ho,Od=f&&(!uu||ho&&8<ho&&11>=ho),Ud=" ",Fd=!1;function kd(t,i){switch(t){case"keyup":return D_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function N_(t,i){switch(t){case"compositionend":return zd(i);case"keypress":return i.which!==32?null:(Fd=!0,Ud);case"textInput":return t=i.data,t===Ud&&Fd?null:t;default:return null}}function O_(t,i){if(as)return t==="compositionend"||!uu&&kd(t,i)?(t=Pd(),da=iu=Ji=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Od&&i.locale!=="ko"?null:i.data;default:return null}}var U_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!U_[t.type]:i==="textarea"}function Hd(t,i,o,u){Ue(u),i=Sa(i,"onChange"),0<i.length&&(o=new ru("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var po=null,mo=null;function F_(t){sh(t,0)}function ga(t){var i=ds(t);if(Ge(i))return t}function k_(t,i){if(t==="change")return i}var Vd=!1;if(f){var cu;if(f){var fu="oninput"in document;if(!fu){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),fu=typeof Gd.oninput=="function"}cu=fu}else cu=!1;Vd=cu&&(!document.documentMode||9<document.documentMode)}function Wd(){po&&(po.detachEvent("onpropertychange",jd),mo=po=null)}function jd(t){if(t.propertyName==="value"&&ga(mo)){var i=[];Hd(i,mo,t,te(t)),An(F_,i)}}function z_(t,i,o){t==="focusin"?(Wd(),po=i,mo=o,po.attachEvent("onpropertychange",jd)):t==="focusout"&&Wd()}function B_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ga(mo)}function H_(t,i){if(t==="click")return ga(i)}function V_(t,i){if(t==="input"||t==="change")return ga(i)}function G_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:G_;function go(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Qn(t[d],i[d]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qd(t,i){var o=Xd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xd(o)}}function Yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Kd(){for(var t=window,i=Qe();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Qe(t.document)}return i}function du(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function W_(t){var i=Kd(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Yd(o.ownerDocument.documentElement,o)){if(u!==null&&du(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!t.extend&&p>u&&(d=u,u=p,p=d),d=qd(o,p);var R=qd(o,u);d&&R&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==R.node||t.focusOffset!==R.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(R.node,R.offset)):(i.setEnd(R.node,R.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j_=f&&"documentMode"in document&&11>=document.documentMode,ls=null,hu=null,_o=null,pu=!1;function $d(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pu||ls==null||ls!==Qe(u)||(u=ls,"selectionStart"in u&&du(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&go(_o,u)||(_o=u,u=Sa(hu,"onSelect"),0<u.length&&(i=new ru("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=ls)))}function _a(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var us={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},mu={},Zd={};f&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function va(t){if(mu[t])return mu[t];if(!us[t])return t;var i=us[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Zd)return mu[t]=i[o];return t}var Qd=va("animationend"),Jd=va("animationiteration"),eh=va("animationstart"),th=va("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,i){nh.set(t,i),l(i,[t])}for(var gu=0;gu<ih.length;gu++){var _u=ih[gu],X_=_u.toLowerCase(),q_=_u[0].toUpperCase()+_u.slice(1);er(X_,"on"+q_)}er(Qd,"onAnimationEnd"),er(Jd,"onAnimationIteration"),er(eh,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function rh(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,na(u,i,void 0,t),t.currentTarget=null}function sh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var R=u.length-1;0<=R;R--){var W=u[R],$=W.instance,he=W.currentTarget;if(W=W.listener,$!==p&&d.isPropagationStopped())break e;rh(d,W,he),p=$}else for(R=0;R<u.length;R++){if(W=u[R],$=W.instance,he=W.currentTarget,W=W.listener,$!==p&&d.isPropagationStopped())break e;rh(d,W,he),p=$}}}if(Rr)throw t=qi,Rr=!1,qi=null,t}function Ut(t,i){var o=i[wu];o===void 0&&(o=i[wu]=new Set);var u=t+"__bubble";o.has(u)||(oh(i,t,2,!1),o.add(u))}function vu(t,i,o){var u=0;i&&(u|=4),oh(o,t,u,i)}var ya="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[ya]){t[ya]=!0,r.forEach(function(o){o!=="selectionchange"&&(Y_.has(o)||vu(o,!1,t),vu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ya]||(i[ya]=!0,vu("selectionchange",!1,i))}}function oh(t,i,o,u){switch(Cd(i)){case 1:var d=l_;break;case 4:d=u_;break;default:d=tu}o=d.bind(null,i,o,t),d=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function yu(t,i,o,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var R=u.tag;if(R===3||R===4){var W=u.stateNode.containerInfo;if(W===d||W.nodeType===8&&W.parentNode===d)break;if(R===4)for(R=u.return;R!==null;){var $=R.tag;if(($===3||$===4)&&($=R.stateNode.containerInfo,$===d||$.nodeType===8&&$.parentNode===d))return;R=R.return}for(;W!==null;){if(R=br(W),R===null)return;if($=R.tag,$===5||$===6){u=p=R;continue e}W=W.parentNode}}u=u.return}An(function(){var he=p,Me=te(o),Ee=[];e:{var xe=nh.get(t);if(xe!==void 0){var Be=ru,Ye=t;switch(t){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":Be=T_;break;case"focusin":Ye="focus",Be=au;break;case"focusout":Ye="blur",Be=au;break;case"beforeblur":case"afterblur":Be=au;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=R_;break;case Qd:case Jd:case eh:Be=m_;break;case th:Be=C_;break;case"scroll":Be=c_;break;case"wheel":Be=L_;break;case"copy":case"cut":case"paste":Be=__;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Nd}var $e=(i&4)!==0,jt=!$e&&t==="scroll",oe=$e?xe!==null?xe+"Capture":null:xe;$e=[];for(var Q=he,ue;Q!==null;){ue=Q;var Ae=ue.stateNode;if(ue.tag===5&&Ae!==null&&(ue=Ae,oe!==null&&(Ae=Sn(Q,oe),Ae!=null&&$e.push(So(Q,Ae,ue)))),jt)break;Q=Q.return}0<$e.length&&(xe=new Be(xe,Ye,null,o,Me),Ee.push({event:xe,listeners:$e}))}}if(!(i&7)){e:{if(xe=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",xe&&o!==Ct&&(Ye=o.relatedTarget||o.fromElement)&&(br(Ye)||Ye[Ei]))break e;if((Be||xe)&&(xe=Me.window===Me?Me:(xe=Me.ownerDocument)?xe.defaultView||xe.parentWindow:window,Be?(Ye=o.relatedTarget||o.toElement,Be=he,Ye=Ye?br(Ye):null,Ye!==null&&(jt=ci(Ye),Ye!==jt||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Be=null,Ye=he),Be!==Ye)){if($e=Dd,Ae="onMouseLeave",oe="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&($e=Nd,Ae="onPointerLeave",oe="onPointerEnter",Q="pointer"),jt=Be==null?xe:ds(Be),ue=Ye==null?xe:ds(Ye),xe=new $e(Ae,Q+"leave",Be,o,Me),xe.target=jt,xe.relatedTarget=ue,Ae=null,br(Me)===he&&($e=new $e(oe,Q+"enter",Ye,o,Me),$e.target=ue,$e.relatedTarget=jt,Ae=$e),jt=Ae,Be&&Ye)t:{for($e=Be,oe=Ye,Q=0,ue=$e;ue;ue=cs(ue))Q++;for(ue=0,Ae=oe;Ae;Ae=cs(Ae))ue++;for(;0<Q-ue;)$e=cs($e),Q--;for(;0<ue-Q;)oe=cs(oe),ue--;for(;Q--;){if($e===oe||oe!==null&&$e===oe.alternate)break t;$e=cs($e),oe=cs(oe)}$e=null}else $e=null;Be!==null&&ah(Ee,xe,Be,$e,!1),Ye!==null&&jt!==null&&ah(Ee,jt,Ye,$e,!0)}}e:{if(xe=he?ds(he):window,Be=xe.nodeName&&xe.nodeName.toLowerCase(),Be==="select"||Be==="input"&&xe.type==="file")var Ze=k_;else if(Bd(xe))if(Vd)Ze=V_;else{Ze=B_;var it=z_}else(Be=xe.nodeName)&&Be.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=H_);if(Ze&&(Ze=Ze(t,he))){Hd(Ee,Ze,o,Me);break e}it&&it(t,xe,he),t==="focusout"&&(it=xe._wrapperState)&&it.controlled&&xe.type==="number"&&ot(xe,"number",xe.value)}switch(it=he?ds(he):window,t){case"focusin":(Bd(it)||it.contentEditable==="true")&&(ls=it,hu=he,_o=null);break;case"focusout":_o=hu=ls=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,$d(Ee,o,Me);break;case"selectionchange":if(j_)break;case"keydown":case"keyup":$d(Ee,o,Me)}var rt;if(uu)e:{switch(t){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else as?kd(t,o)&&(ut="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Od&&o.locale!=="ko"&&(as||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&as&&(rt=Pd()):(Ji=Me,iu="value"in Ji?Ji.value:Ji.textContent,as=!0)),it=Sa(he,ut),0<it.length&&(ut=new Id(ut,t,null,o,Me),Ee.push({event:ut,listeners:it}),rt?ut.data=rt:(rt=zd(o),rt!==null&&(ut.data=rt)))),(rt=I_?N_(t,o):O_(t,o))&&(he=Sa(he,"onBeforeInput"),0<he.length&&(Me=new Id("onBeforeInput","beforeinput",null,o,Me),Ee.push({event:Me,listeners:he}),Me.data=rt))}sh(Ee,i)})}function So(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Sa(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Sn(t,o),p!=null&&u.unshift(So(t,p,d)),p=Sn(t,i),p!=null&&u.push(So(t,p,d))),t=t.return}return u}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,i,o,u,d){for(var p=i._reactName,R=[];o!==null&&o!==u;){var W=o,$=W.alternate,he=W.stateNode;if($!==null&&$===u)break;W.tag===5&&he!==null&&(W=he,d?($=Sn(o,p),$!=null&&R.unshift(So(o,$,W))):d||($=Sn(o,p),$!=null&&R.push(So(o,$,W)))),o=o.return}R.length!==0&&t.push({event:i,listeners:R})}var K_=/\r\n?/g,$_=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(K_,`
`).replace($_,"")}function xa(t,i,o){if(i=lh(i),lh(t)!==i&&o)throw Error(n(425))}function Ma(){}var Su=null,xu=null;function Mu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,Q_=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(t){return uh.resolve(null).then(t).catch(J_)}:Eu;function J_(t){setTimeout(function(){throw t})}function Tu(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),uo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);uo(i)}function tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ch(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),di="__reactFiber$"+fs,xo="__reactProps$"+fs,Ei="__reactContainer$"+fs,wu="__reactEvents$"+fs,ev="__reactListeners$"+fs,tv="__reactHandles$"+fs;function br(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ei]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=ch(t);t!==null;){if(o=t[di])return o;t=ch(t)}return i}t=o,o=t.parentNode}return null}function Mo(t){return t=t[di]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ea(t){return t[xo]||null}var Au=[],hs=-1;function nr(t){return{current:t}}function Ft(t){0>hs||(t.current=Au[hs],Au[hs]=null,hs--)}function Nt(t,i){hs++,Au[hs]=t.current,t.current=i}var ir={},pn=nr(ir),Rn=nr(!1),Cr=ir;function ps(t,i){var o=t.type.contextTypes;if(!o)return ir;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function bn(t){return t=t.childContextTypes,t!=null}function Ta(){Ft(Rn),Ft(pn)}function fh(t,i,o){if(pn.current!==ir)throw Error(n(168));Nt(pn,i),Nt(Rn,o)}function dh(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,se(t)||"Unknown",d));return _({},o,u)}function wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Cr=pn.current,Nt(pn,t),Nt(Rn,Rn.current),!0}function hh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=dh(t,i,Cr),u.__reactInternalMemoizedMergedChildContext=t,Ft(Rn),Ft(pn),Nt(pn,t)):Ft(Rn),Nt(Rn,o)}var Ti=null,Aa=!1,Ru=!1;function ph(t){Ti===null?Ti=[t]:Ti.push(t)}function nv(t){Aa=!0,ph(t)}function rr(){if(!Ru&&Ti!==null){Ru=!0;var t=0,i=wt;try{var o=Ti;for(wt=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Ti=null,Aa=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(t+1)),aa(Te,rr),d}finally{wt=i,Ru=!1}}return null}var ms=[],gs=0,Ra=null,ba=0,Gn=[],Wn=0,Pr=null,wi=1,Ai="";function Lr(t,i){ms[gs++]=ba,ms[gs++]=Ra,Ra=t,ba=i}function mh(t,i,o){Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Pr,Pr=t;var u=wi;t=Ai;var d=32-ht(u)-1;u&=~(1<<d),o+=1;var p=32-ht(i)+d;if(30<p){var R=d-d%5;p=(u&(1<<R)-1).toString(32),u>>=R,d-=R,wi=1<<32-ht(i)+d|o<<d|u,Ai=p+t}else wi=1<<p|o<<d|u,Ai=t}function bu(t){t.return!==null&&(Lr(t,1),mh(t,1,0))}function Cu(t){for(;t===Ra;)Ra=ms[--gs],ms[gs]=null,ba=ms[--gs],ms[gs]=null;for(;t===Pr;)Pr=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null}var kn=null,zn=null,zt=!1,Jn=null;function gh(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function _h(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,zn=tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,kn=t,zn=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(zt){var i=zn;if(i){var o=i;if(!_h(t,i)){if(Pu(t))throw Error(n(418));i=tr(o.nextSibling);var u=kn;i&&_h(t,i)?gh(u,o):(t.flags=t.flags&-4097|2,zt=!1,kn=t)}}else{if(Pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,kn=t}}}function vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Ca(t){if(t!==kn)return!1;if(!zt)return vh(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mu(t.type,t.memoizedProps)),i&&(i=zn)){if(Pu(t))throw yh(),Error(n(418));for(;i;)gh(t,i),i=tr(i.nextSibling)}if(vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){zn=tr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}zn=null}}else zn=kn?tr(t.stateNode.nextSibling):null;return!0}function yh(){for(var t=zn;t;)t=tr(t.nextSibling)}function _s(){zn=kn=null,zt=!1}function Du(t){Jn===null?Jn=[t]:Jn.push(t)}var iv=k.ReactCurrentBatchConfig;function Eo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(R){var W=d.refs;R===null?delete W[p]:W[p]=R},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Sh(t){var i=t._init;return i(t._payload)}function xh(t){function i(oe,Q){if(t){var ue=oe.deletions;ue===null?(oe.deletions=[Q],oe.flags|=16):ue.push(Q)}}function o(oe,Q){if(!t)return null;for(;Q!==null;)i(oe,Q),Q=Q.sibling;return null}function u(oe,Q){for(oe=new Map;Q!==null;)Q.key!==null?oe.set(Q.key,Q):oe.set(Q.index,Q),Q=Q.sibling;return oe}function d(oe,Q){return oe=dr(oe,Q),oe.index=0,oe.sibling=null,oe}function p(oe,Q,ue){return oe.index=ue,t?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<Q?(oe.flags|=2,Q):ue):(oe.flags|=2,Q)):(oe.flags|=1048576,Q)}function R(oe){return t&&oe.alternate===null&&(oe.flags|=2),oe}function W(oe,Q,ue,Ae){return Q===null||Q.tag!==6?(Q=Ec(ue,oe.mode,Ae),Q.return=oe,Q):(Q=d(Q,ue),Q.return=oe,Q)}function $(oe,Q,ue,Ae){var Ze=ue.type;return Ze===I?Me(oe,Q,ue.props.children,Ae,ue.key):Q!==null&&(Q.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&Sh(Ze)===Q.type)?(Ae=d(Q,ue.props),Ae.ref=Eo(oe,Q,ue),Ae.return=oe,Ae):(Ae=el(ue.type,ue.key,ue.props,null,oe.mode,Ae),Ae.ref=Eo(oe,Q,ue),Ae.return=oe,Ae)}function he(oe,Q,ue,Ae){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ue.containerInfo||Q.stateNode.implementation!==ue.implementation?(Q=Tc(ue,oe.mode,Ae),Q.return=oe,Q):(Q=d(Q,ue.children||[]),Q.return=oe,Q)}function Me(oe,Q,ue,Ae,Ze){return Q===null||Q.tag!==7?(Q=zr(ue,oe.mode,Ae,Ze),Q.return=oe,Q):(Q=d(Q,ue),Q.return=oe,Q)}function Ee(oe,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Ec(""+Q,oe.mode,ue),Q.return=oe,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:return ue=el(Q.type,Q.key,Q.props,null,oe.mode,ue),ue.ref=Eo(oe,null,Q),ue.return=oe,ue;case P:return Q=Tc(Q,oe.mode,ue),Q.return=oe,Q;case Z:var Ae=Q._init;return Ee(oe,Ae(Q._payload),ue)}if(Ce(Q)||U(Q))return Q=zr(Q,oe.mode,ue,null),Q.return=oe,Q;Pa(oe,Q)}return null}function xe(oe,Q,ue,Ae){var Ze=Q!==null?Q.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return Ze!==null?null:W(oe,Q,""+ue,Ae);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:return ue.key===Ze?$(oe,Q,ue,Ae):null;case P:return ue.key===Ze?he(oe,Q,ue,Ae):null;case Z:return Ze=ue._init,xe(oe,Q,Ze(ue._payload),Ae)}if(Ce(ue)||U(ue))return Ze!==null?null:Me(oe,Q,ue,Ae,null);Pa(oe,ue)}return null}function Be(oe,Q,ue,Ae,Ze){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return oe=oe.get(ue)||null,W(Q,oe,""+Ae,Ze);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case L:return oe=oe.get(Ae.key===null?ue:Ae.key)||null,$(Q,oe,Ae,Ze);case P:return oe=oe.get(Ae.key===null?ue:Ae.key)||null,he(Q,oe,Ae,Ze);case Z:var it=Ae._init;return Be(oe,Q,ue,it(Ae._payload),Ze)}if(Ce(Ae)||U(Ae))return oe=oe.get(ue)||null,Me(Q,oe,Ae,Ze,null);Pa(Q,Ae)}return null}function Ye(oe,Q,ue,Ae){for(var Ze=null,it=null,rt=Q,ut=Q=0,an=null;rt!==null&&ut<ue.length;ut++){rt.index>ut?(an=rt,rt=null):an=rt.sibling;var Rt=xe(oe,rt,ue[ut],Ae);if(Rt===null){rt===null&&(rt=an);break}t&&rt&&Rt.alternate===null&&i(oe,rt),Q=p(Rt,Q,ut),it===null?Ze=Rt:it.sibling=Rt,it=Rt,rt=an}if(ut===ue.length)return o(oe,rt),zt&&Lr(oe,ut),Ze;if(rt===null){for(;ut<ue.length;ut++)rt=Ee(oe,ue[ut],Ae),rt!==null&&(Q=p(rt,Q,ut),it===null?Ze=rt:it.sibling=rt,it=rt);return zt&&Lr(oe,ut),Ze}for(rt=u(oe,rt);ut<ue.length;ut++)an=Be(rt,oe,ut,ue[ut],Ae),an!==null&&(t&&an.alternate!==null&&rt.delete(an.key===null?ut:an.key),Q=p(an,Q,ut),it===null?Ze=an:it.sibling=an,it=an);return t&&rt.forEach(function(hr){return i(oe,hr)}),zt&&Lr(oe,ut),Ze}function $e(oe,Q,ue,Ae){var Ze=U(ue);if(typeof Ze!="function")throw Error(n(150));if(ue=Ze.call(ue),ue==null)throw Error(n(151));for(var it=Ze=null,rt=Q,ut=Q=0,an=null,Rt=ue.next();rt!==null&&!Rt.done;ut++,Rt=ue.next()){rt.index>ut?(an=rt,rt=null):an=rt.sibling;var hr=xe(oe,rt,Rt.value,Ae);if(hr===null){rt===null&&(rt=an);break}t&&rt&&hr.alternate===null&&i(oe,rt),Q=p(hr,Q,ut),it===null?Ze=hr:it.sibling=hr,it=hr,rt=an}if(Rt.done)return o(oe,rt),zt&&Lr(oe,ut),Ze;if(rt===null){for(;!Rt.done;ut++,Rt=ue.next())Rt=Ee(oe,Rt.value,Ae),Rt!==null&&(Q=p(Rt,Q,ut),it===null?Ze=Rt:it.sibling=Rt,it=Rt);return zt&&Lr(oe,ut),Ze}for(rt=u(oe,rt);!Rt.done;ut++,Rt=ue.next())Rt=Be(rt,oe,ut,Rt.value,Ae),Rt!==null&&(t&&Rt.alternate!==null&&rt.delete(Rt.key===null?ut:Rt.key),Q=p(Rt,Q,ut),it===null?Ze=Rt:it.sibling=Rt,it=Rt);return t&&rt.forEach(function(Ov){return i(oe,Ov)}),zt&&Lr(oe,ut),Ze}function jt(oe,Q,ue,Ae){if(typeof ue=="object"&&ue!==null&&ue.type===I&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:e:{for(var Ze=ue.key,it=Q;it!==null;){if(it.key===Ze){if(Ze=ue.type,Ze===I){if(it.tag===7){o(oe,it.sibling),Q=d(it,ue.props.children),Q.return=oe,oe=Q;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&Sh(Ze)===it.type){o(oe,it.sibling),Q=d(it,ue.props),Q.ref=Eo(oe,it,ue),Q.return=oe,oe=Q;break e}o(oe,it);break}else i(oe,it);it=it.sibling}ue.type===I?(Q=zr(ue.props.children,oe.mode,Ae,ue.key),Q.return=oe,oe=Q):(Ae=el(ue.type,ue.key,ue.props,null,oe.mode,Ae),Ae.ref=Eo(oe,Q,ue),Ae.return=oe,oe=Ae)}return R(oe);case P:e:{for(it=ue.key;Q!==null;){if(Q.key===it)if(Q.tag===4&&Q.stateNode.containerInfo===ue.containerInfo&&Q.stateNode.implementation===ue.implementation){o(oe,Q.sibling),Q=d(Q,ue.children||[]),Q.return=oe,oe=Q;break e}else{o(oe,Q);break}else i(oe,Q);Q=Q.sibling}Q=Tc(ue,oe.mode,Ae),Q.return=oe,oe=Q}return R(oe);case Z:return it=ue._init,jt(oe,Q,it(ue._payload),Ae)}if(Ce(ue))return Ye(oe,Q,ue,Ae);if(U(ue))return $e(oe,Q,ue,Ae);Pa(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,Q!==null&&Q.tag===6?(o(oe,Q.sibling),Q=d(Q,ue),Q.return=oe,oe=Q):(o(oe,Q),Q=Ec(ue,oe.mode,Ae),Q.return=oe,oe=Q),R(oe)):o(oe,Q)}return jt}var vs=xh(!0),Mh=xh(!1),La=nr(null),Da=null,ys=null,Iu=null;function Nu(){Iu=ys=Da=null}function Ou(t){var i=La.current;Ft(La),t._currentValue=i}function Uu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Ss(t,i){Da=t,Iu=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Cn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Iu!==t)if(t={context:t,memoizedValue:i,next:null},ys===null){if(Da===null)throw Error(n(308));ys=t,Da.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return i}var Dr=null;function Fu(t){Dr===null?Dr=[t]:Dr.push(t)}function Eh(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Fu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ri(t,u)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var sr=!1;function ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,At&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(t,o)}return d=u.interleaved,d===null?(i.next=i,Fu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(t,o)}function Ia(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}function wh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var R={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=R:p=p.next=R,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Na(t,i,o,u){var d=t.updateQueue;sr=!1;var p=d.firstBaseUpdate,R=d.lastBaseUpdate,W=d.shared.pending;if(W!==null){d.shared.pending=null;var $=W,he=$.next;$.next=null,R===null?p=he:R.next=he,R=$;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,W=Me.lastBaseUpdate,W!==R&&(W===null?Me.firstBaseUpdate=he:W.next=he,Me.lastBaseUpdate=$))}if(p!==null){var Ee=d.baseState;R=0,Me=he=$=null,W=p;do{var xe=W.lane,Be=W.eventTime;if((u&xe)===xe){Me!==null&&(Me=Me.next={eventTime:Be,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var Ye=t,$e=W;switch(xe=i,Be=o,$e.tag){case 1:if(Ye=$e.payload,typeof Ye=="function"){Ee=Ye.call(Be,Ee,xe);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=$e.payload,xe=typeof Ye=="function"?Ye.call(Be,Ee,xe):Ye,xe==null)break e;Ee=_({},Ee,xe);break e;case 2:sr=!0}}W.callback!==null&&W.lane!==0&&(t.flags|=64,xe=d.effects,xe===null?d.effects=[W]:xe.push(W))}else Be={eventTime:Be,lane:xe,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Me===null?(he=Me=Be,$=Ee):Me=Me.next=Be,R|=xe;if(W=W.next,W===null){if(W=d.shared.pending,W===null)break;xe=W,W=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(Me===null&&($=Ee),d.baseState=$,d.firstBaseUpdate=he,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do R|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Or|=R,t.lanes=R,t.memoizedState=Ee}}function Ah(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var To={},hi=nr(To),wo=nr(To),Ao=nr(To);function Ir(t){if(t===To)throw Error(n(174));return t}function zu(t,i){switch(Nt(Ao,i),Nt(wo,t),Nt(hi,To),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=He(i,t)}Ft(hi),Nt(hi,i)}function xs(){Ft(hi),Ft(wo),Ft(Ao)}function Rh(t){Ir(Ao.current);var i=Ir(hi.current),o=He(i,t.type);i!==o&&(Nt(wo,t),Nt(hi,o))}function Bu(t){wo.current===t&&(Ft(hi),Ft(wo))}var Bt=nr(0);function Oa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hu=[];function Vu(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var Ua=k.ReactCurrentDispatcher,Gu=k.ReactCurrentBatchConfig,Nr=0,Ht=null,Zt=null,sn=null,Fa=!1,Ro=!1,bo=0,rv=0;function mn(){throw Error(n(321))}function Wu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function ju(t,i,o,u,d,p){if(Nr=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=t===null||t.memoizedState===null?lv:uv,t=o(u,d),Ro){p=0;do{if(Ro=!1,bo=0,25<=p)throw Error(n(301));p+=1,sn=Zt=null,i.updateQueue=null,Ua.current=cv,t=o(u,d)}while(Ro)}if(Ua.current=Ba,i=Zt!==null&&Zt.next!==null,Nr=0,sn=Zt=Ht=null,Fa=!1,i)throw Error(n(300));return t}function Xu(){var t=bo!==0;return bo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=t:sn=sn.next=t,sn}function Xn(){if(Zt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Ht.memoizedState=sn=t:sn=sn.next=t}return sn}function Co(t,i){return typeof i=="function"?i(t):i}function qu(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Zt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var R=d.next;d.next=p.next,p.next=R}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var W=R=null,$=null,he=p;do{var Me=he.lane;if((Nr&Me)===Me)$!==null&&($=$.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:t(u,he.action);else{var Ee={lane:Me,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};$===null?(W=$=Ee,R=u):$=$.next=Ee,Ht.lanes|=Me,Or|=Me}he=he.next}while(he!==null&&he!==p);$===null?R=u:$.next=W,Qn(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=R,i.baseQueue=$,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Ht.lanes|=p,Or|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yu(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var R=d=d.next;do p=t(p,R.action),R=R.next;while(R!==d);Qn(p,i.memoizedState)||(Cn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function bh(){}function Ch(t,i){var o=Ht,u=Xn(),d=i(),p=!Qn(u.memoizedState,d);if(p&&(u.memoizedState=d,Cn=!0),u=u.queue,Ku(Dh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Po(9,Lh.bind(null,o,u,d,i),void 0,null),on===null)throw Error(n(349));Nr&30||Ph(o,i,d)}return d}function Ph(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Lh(t,i,o,u){i.value=o,i.getSnapshot=u,Ih(i)&&Nh(t)}function Dh(t,i,o){return o(function(){Ih(i)&&Nh(t)})}function Ih(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function Nh(t){var i=Ri(t,1);i!==null&&ii(i,t,1,-1)}function Oh(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},i.queue=t,t=t.dispatch=av.bind(null,Ht,t),[i.memoizedState,t]}function Po(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Uh(){return Xn().memoizedState}function ka(t,i,o,u){var d=pi();Ht.flags|=t,d.memoizedState=Po(1|i,o,void 0,u===void 0?null:u)}function za(t,i,o,u){var d=Xn();u=u===void 0?null:u;var p=void 0;if(Zt!==null){var R=Zt.memoizedState;if(p=R.destroy,u!==null&&Wu(u,R.deps)){d.memoizedState=Po(i,o,p,u);return}}Ht.flags|=t,d.memoizedState=Po(1|i,o,p,u)}function Fh(t,i){return ka(8390656,8,t,i)}function Ku(t,i){return za(2048,8,t,i)}function kh(t,i){return za(4,2,t,i)}function zh(t,i){return za(4,4,t,i)}function Bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Hh(t,i,o){return o=o!=null?o.concat([t]):null,za(4,4,Bh.bind(null,i,t),o)}function $u(){}function Vh(t,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Wu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Gh(t,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Wu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Wh(t,i,o){return Nr&21?(Qn(o,i)||(o=It(),Ht.lanes|=o,Or|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=o)}function sv(t,i){var o=wt;wt=o!==0&&4>o?o:4,t(!0);var u=Gu.transition;Gu.transition={};try{t(!1),i()}finally{wt=o,Gu.transition=u}}function jh(){return Xn().memoizedState}function ov(t,i,o){var u=cr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Xh(t))qh(i,o);else if(o=Eh(t,i,o,u),o!==null){var d=En();ii(o,t,u,d),Yh(o,i,u)}}function av(t,i,o){var u=cr(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xh(t))qh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var R=i.lastRenderedState,W=p(R,o);if(d.hasEagerState=!0,d.eagerState=W,Qn(W,R)){var $=i.interleaved;$===null?(d.next=d,Fu(i)):(d.next=$.next,$.next=d),i.interleaved=d;return}}catch{}finally{}o=Eh(t,i,d,u),o!==null&&(d=En(),ii(o,t,u,d),Yh(o,i,u))}}function Xh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function qh(t,i){Ro=Fa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Yh(t,i,o){if(o&4194240){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}var Ba={readContext:jn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},lv={readContext:jn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Fh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ka(4194308,4,Bh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ka(4194308,4,t,i)},useInsertionEffect:function(t,i){return ka(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=pi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=ov.bind(null,Ht,t),[u.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:Oh,useDebugValue:$u,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Oh(!1),i=t[0];return t=sv.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Ht,d=pi();if(zt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));Nr&30||Ph(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Fh(Dh.bind(null,u,p,t),[t]),u.flags|=2048,Po(9,Lh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=pi(),i=on.identifierPrefix;if(zt){var o=Ai,u=wi;o=(u&~(1<<32-ht(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=rv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},uv={readContext:jn,useCallback:Vh,useContext:jn,useEffect:Ku,useImperativeHandle:Hh,useInsertionEffect:kh,useLayoutEffect:zh,useMemo:Gh,useReducer:qu,useRef:Uh,useState:function(){return qu(Co)},useDebugValue:$u,useDeferredValue:function(t){var i=Xn();return Wh(i,Zt.memoizedState,t)},useTransition:function(){var t=qu(Co)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:Ch,useId:jh,unstable_isNewReconciler:!1},cv={readContext:jn,useCallback:Vh,useContext:jn,useEffect:Ku,useImperativeHandle:Hh,useInsertionEffect:kh,useLayoutEffect:zh,useMemo:Gh,useReducer:Yu,useRef:Uh,useState:function(){return Yu(Co)},useDebugValue:$u,useDeferredValue:function(t){var i=Xn();return Zt===null?i.memoizedState=t:Wh(i,Zt.memoizedState,t)},useTransition:function(){var t=Yu(Co)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:Ch,useId:jh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=_({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Zu(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:_({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ha={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=En(),d=cr(t),p=bi(u,d);p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(ii(i,t,d,u),Ia(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=En(),d=cr(t),p=bi(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(ii(i,t,d,u),Ia(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=En(),u=cr(t),d=bi(o,u);d.tag=2,i!=null&&(d.callback=i),i=or(t,d,u),i!==null&&(ii(i,t,u,o),Ia(i,t,u))}};function Kh(t,i,o,u,d,p,R){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,R):i.prototype&&i.prototype.isPureReactComponent?!go(o,u)||!go(d,p):!0}function $h(t,i,o){var u=!1,d=ir,p=i.contextType;return typeof p=="object"&&p!==null?p=jn(p):(d=bn(i)?Cr:pn.current,u=i.contextTypes,p=(u=u!=null)?ps(t,d):ir),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ha,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Zh(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ha.enqueueReplaceState(i,i.state,null)}function Qu(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},ku(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=jn(p):(p=bn(i)?Cr:pn.current,d.context=ps(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Zu(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ha.enqueueReplaceState(d,d.state,null),Na(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var o="",u=i;do o+=J(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Ju(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ec(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function Qh(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ya||(Ya=!0,mc=u),ec(t,i)},o}function Jh(t,i,o){o=bi(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ec(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ec(t,i),typeof u!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var R=i.stack;this.componentDidCatch(i.value,{componentStack:R!==null?R:""})}),o}function ep(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new fv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=wv.bind(null,t,i,o),i.then(t,t))}function tp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function np(t,i,o,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),t)}var dv=k.ReactCurrentOwner,Cn=!1;function Mn(t,i,o,u){i.child=t===null?Mh(i,null,o,u):vs(i,t.child,o,u)}function ip(t,i,o,u,d){o=o.render;var p=i.ref;return Ss(i,d),u=ju(t,i,o,u,p,d),o=Xu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(zt&&o&&bu(i),i.flags|=1,Mn(t,i,u,d),i.child)}function rp(t,i,o,u,d){if(t===null){var p=o.type;return typeof p=="function"&&!Mc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,sp(t,i,p,u,d)):(t=el(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!(t.lanes&d)){var R=p.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(R,u)&&t.ref===i.ref)return Ci(t,i,d)}return i.flags|=1,t=dr(p,u),t.ref=i.ref,t.return=i,i.child=t}function sp(t,i,o,u,d){if(t!==null){var p=t.memoizedProps;if(go(p,u)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=u=p,(t.lanes&d)!==0)t.flags&131072&&(Cn=!0);else return i.lanes=t.lanes,Ci(t,i,d)}return tc(t,i,o,u,d)}function op(t,i,o){var u=i.pendingProps,d=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ts,Bn),Bn|=o;else{if(!(o&1073741824))return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ts,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Nt(Ts,Bn),Bn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Nt(Ts,Bn),Bn|=u;return Mn(t,i,d,o),i.child}function ap(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tc(t,i,o,u,d){var p=bn(o)?Cr:pn.current;return p=ps(i,p),Ss(i,d),o=ju(t,i,o,u,p,d),u=Xu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(zt&&u&&bu(i),i.flags|=1,Mn(t,i,o,d),i.child)}function lp(t,i,o,u,d){if(bn(o)){var p=!0;wa(i)}else p=!1;if(Ss(i,d),i.stateNode===null)Ga(t,i),$h(i,o,u),Qu(i,o,u,d),u=!0;else if(t===null){var R=i.stateNode,W=i.memoizedProps;R.props=W;var $=R.context,he=o.contextType;typeof he=="object"&&he!==null?he=jn(he):(he=bn(o)?Cr:pn.current,he=ps(i,he));var Me=o.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ee||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(W!==u||$!==he)&&Zh(i,R,u,he),sr=!1;var xe=i.memoizedState;R.state=xe,Na(i,u,R,d),$=i.memoizedState,W!==u||xe!==$||Rn.current||sr?(typeof Me=="function"&&(Zu(i,o,Me,u),$=i.memoizedState),(W=sr||Kh(i,o,W,u,xe,$,he))?(Ee||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(i.flags|=4194308)):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=$),R.props=u,R.state=$,R.context=he,u=W):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{R=i.stateNode,Th(t,i),W=i.memoizedProps,he=i.type===i.elementType?W:ei(i.type,W),R.props=he,Ee=i.pendingProps,xe=R.context,$=o.contextType,typeof $=="object"&&$!==null?$=jn($):($=bn(o)?Cr:pn.current,$=ps(i,$));var Be=o.getDerivedStateFromProps;(Me=typeof Be=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(W!==Ee||xe!==$)&&Zh(i,R,u,$),sr=!1,xe=i.memoizedState,R.state=xe,Na(i,u,R,d);var Ye=i.memoizedState;W!==Ee||xe!==Ye||Rn.current||sr?(typeof Be=="function"&&(Zu(i,o,Be,u),Ye=i.memoizedState),(he=sr||Kh(i,o,he,u,xe,Ye,$)||!1)?(Me||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(u,Ye,$),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(u,Ye,$)),typeof R.componentDidUpdate=="function"&&(i.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof R.componentDidUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),R.props=u,R.state=Ye,R.context=$,u=he):(typeof R.componentDidUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||W===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),u=!1)}return nc(t,i,o,u,p,d)}function nc(t,i,o,u,d,p){ap(t,i);var R=(i.flags&128)!==0;if(!u&&!R)return d&&hh(i,o,!1),Ci(t,i,p);u=i.stateNode,dv.current=i;var W=R&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&R?(i.child=vs(i,t.child,null,p),i.child=vs(i,null,W,p)):Mn(t,i,W,p),i.memoizedState=u.state,d&&hh(i,o,!0),i.child}function up(t){var i=t.stateNode;i.pendingContext?fh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&fh(t,i.context,!1),zu(t,i.containerInfo)}function cp(t,i,o,u,d){return _s(),Du(d),i.flags|=256,Mn(t,i,o,u),i.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function fp(t,i,o){var u=i.pendingProps,d=Bt.current,p=!1,R=(i.flags&128)!==0,W;if((W=R)||(W=t!==null&&t.memoizedState===null?!1:(d&2)!==0),W?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Nt(Bt,d&1),t===null)return Lu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(R=u.children,t=u.fallback,p?(u=i.mode,p=i.child,R={mode:"hidden",children:R},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=R):p=tl(R,u,0,null),t=zr(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=rc(o),i.memoizedState=ic,t):sc(i,R));if(d=t.memoizedState,d!==null&&(W=d.dehydrated,W!==null))return hv(t,i,R,u,W,d,o);if(p){p=u.fallback,R=i.mode,d=t.child,W=d.sibling;var $={mode:"hidden",children:u.children};return!(R&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=$,i.deletions=null):(u=dr(d,$),u.subtreeFlags=d.subtreeFlags&14680064),W!==null?p=dr(W,p):(p=zr(p,R,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,R=t.child.memoizedState,R=R===null?rc(o):{baseLanes:R.baseLanes|o,cachePool:null,transitions:R.transitions},p.memoizedState=R,p.childLanes=t.childLanes&~o,i.memoizedState=ic,u}return p=t.child,t=p.sibling,u=dr(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function sc(t,i){return i=tl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Va(t,i,o,u){return u!==null&&Du(u),vs(i,t.child,null,o),t=sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function hv(t,i,o,u,d,p,R){if(o)return i.flags&256?(i.flags&=-257,u=Ju(Error(n(422))),Va(t,i,R,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=tl({mode:"visible",children:u.children},d,0,null),p=zr(p,d,R,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&vs(i,t.child,null,R),i.child.memoizedState=rc(R),i.memoizedState=ic,p);if(!(i.mode&1))return Va(t,i,R,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var W=u.dgst;return u=W,p=Error(n(419)),u=Ju(p,u,void 0),Va(t,i,R,u)}if(W=(R&t.childLanes)!==0,Cn||W){if(u=on,u!==null){switch(R&-R){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|R)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ri(t,d),ii(u,t,d,-1))}return xc(),u=Ju(Error(n(421))),Va(t,i,R,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Av.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,zn=tr(d.nextSibling),kn=i,zt=!0,Jn=null,t!==null&&(Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Pr,wi=t.id,Ai=t.overflow,Pr=i),i=sc(i,u.children),i.flags|=4096,i)}function dp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Uu(t.return,i,o)}function oc(t,i,o,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function hp(t,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Mn(t,i,u.children,o),u=Bt.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dp(t,o,i);else if(t.tag===19)dp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Nt(Bt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Oa(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),oc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Oa(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}oc(i,!0,o,null,p);break;case"together":oc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ga(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Or|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function pv(t,i,o){switch(i.tag){case 3:up(i),_s();break;case 5:Rh(i);break;case 1:bn(i.type)&&wa(i);break;case 4:zu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Nt(La,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(Bt,Bt.current&1),i.flags|=128,null):o&i.child.childLanes?fp(t,i,o):(Nt(Bt,Bt.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);Nt(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,t.flags&128){if(u)return hp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,op(t,i,o)}return Ci(t,i,o)}var pp,ac,mp,gp;pp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ac=function(){},mp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Ir(hi.current);var p=null;switch(o){case"input":d=X(t,d),u=X(t,u),p=[];break;case"select":d=_({},d,{value:void 0}),u=_({},u,{value:void 0}),p=[];break;case"textarea":d=C(t,d),u=C(t,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ma)}_t(o,u);var R;o=null;for(he in d)if(!u.hasOwnProperty(he)&&d.hasOwnProperty(he)&&d[he]!=null)if(he==="style"){var W=d[he];for(R in W)W.hasOwnProperty(R)&&(o||(o={}),o[R]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?p||(p=[]):(p=p||[]).push(he,null));for(he in u){var $=u[he];if(W=d!=null?d[he]:void 0,u.hasOwnProperty(he)&&$!==W&&($!=null||W!=null))if(he==="style")if(W){for(R in W)!W.hasOwnProperty(R)||$&&$.hasOwnProperty(R)||(o||(o={}),o[R]="");for(R in $)$.hasOwnProperty(R)&&W[R]!==$[R]&&(o||(o={}),o[R]=$[R])}else o||(p||(p=[]),p.push(he,o)),o=$;else he==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,W=W?W.__html:void 0,$!=null&&W!==$&&(p=p||[]).push(he,$)):he==="children"?typeof $!="string"&&typeof $!="number"||(p=p||[]).push(he,""+$):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?($!=null&&he==="onScroll"&&Ut("scroll",t),p||W===$||(p=[])):(p=p||[]).push(he,$))}o&&(p=p||[]).push("style",o);var he=p;(i.updateQueue=he)&&(i.flags|=4)}},gp=function(t,i,o,u){o!==u&&(i.flags|=4)};function Lo(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function mv(t,i,o){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return bn(i.type)&&Ta(),gn(i),null;case 3:return u=i.stateNode,xs(),Ft(Rn),Ft(pn),Vu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ca(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Jn!==null&&(vc(Jn),Jn=null))),ac(t,i),gn(i),null;case 5:Bu(i);var d=Ir(Ao.current);if(o=i.type,t!==null&&i.stateNode!=null)mp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Ir(hi.current),Ca(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[di]=i,u[xo]=p,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(d=0;d<vo.length;d++)Ut(vo[d],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":ct(u,p),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",u);break;case"textarea":le(u,p),Ut("invalid",u)}_t(o,p),d=null;for(var R in p)if(p.hasOwnProperty(R)){var W=p[R];R==="children"?typeof W=="string"?u.textContent!==W&&(p.suppressHydrationWarning!==!0&&xa(u.textContent,W,t),d=["children",W]):typeof W=="number"&&u.textContent!==""+W&&(p.suppressHydrationWarning!==!0&&xa(u.textContent,W,t),d=["children",""+W]):a.hasOwnProperty(R)&&W!=null&&R==="onScroll"&&Ut("scroll",u)}switch(o){case"input":Je(u),Le(u,p,!0);break;case"textarea":Je(u),ye(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ma)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{R=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=R.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=R.createElement(o,{is:u.is}):(t=R.createElement(o),o==="select"&&(R=t,u.multiple?R.multiple=!0:u.size&&(R.size=u.size))):t=R.createElementNS(t,o),t[di]=i,t[xo]=u,pp(t,i,!1,!1),i.stateNode=t;e:{switch(R=ft(o,u),o){case"dialog":Ut("cancel",t),Ut("close",t),d=u;break;case"iframe":case"object":case"embed":Ut("load",t),d=u;break;case"video":case"audio":for(d=0;d<vo.length;d++)Ut(vo[d],t);d=u;break;case"source":Ut("error",t),d=u;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),d=u;break;case"details":Ut("toggle",t),d=u;break;case"input":ct(t,u),d=X(t,u),Ut("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=_({},u,{value:void 0}),Ut("invalid",t);break;case"textarea":le(t,u),d=C(t,u),Ut("invalid",t);break;default:d=u}_t(o,d),W=d;for(p in W)if(W.hasOwnProperty(p)){var $=W[p];p==="style"?at(t,$):p==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Ve(t,$)):p==="children"?typeof $=="string"?(o!=="textarea"||$!=="")&&gt(t,$):typeof $=="number"&&gt(t,""+$):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?$!=null&&p==="onScroll"&&Ut("scroll",t):$!=null&&H(t,p,$,R))}switch(o){case"input":Je(t),Le(t,u,!1);break;case"textarea":Je(t),ye(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ge(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?z(t,!!u.multiple,p,!1):u.defaultValue!=null&&z(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ma)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)gp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ir(Ao.current),Ir(hi.current),Ca(i)){if(u=i.stateNode,o=i.memoizedProps,u[di]=i,(p=u.nodeValue!==o)&&(t=kn,t!==null))switch(t.tag){case 3:xa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[di]=i,i.stateNode=u}return gn(i),null;case 13:if(Ft(Bt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&zn!==null&&i.mode&1&&!(i.flags&128))yh(),_s(),i.flags|=98560,p=!1;else if(p=Ca(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[di]=i}else _s(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else Jn!==null&&(vc(Jn),Jn=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||Bt.current&1?Qt===0&&(Qt=3):xc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return xs(),ac(t,i),t===null&&yo(i.stateNode.containerInfo),gn(i),null;case 10:return Ou(i.type._context),gn(i),null;case 17:return bn(i.type)&&Ta(),gn(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,R=p.rendering,R===null)if(u)Lo(p,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(R=Oa(t),R!==null){for(i.flags|=128,Lo(p,!1),u=R.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,R=p.alternate,R===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=R.childLanes,p.lanes=R.lanes,p.child=R.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=R.memoizedProps,p.memoizedState=R.memoizedState,p.updateQueue=R.updateQueue,p.type=R.type,t=R.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Nt(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&ae()>ws&&(i.flags|=128,u=!0,Lo(p,!1),i.lanes=4194304)}else{if(!u)if(t=Oa(R),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!R.alternate&&!zt)return gn(i),null}else 2*ae()-p.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,u=!0,Lo(p,!1),i.lanes=4194304);p.isBackwards?(R.sibling=i.child,i.child=R):(o=p.last,o!==null?o.sibling=R:i.child=R,p.last=R)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=ae(),i.sibling=null,o=Bt.current,Nt(Bt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return Sc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Bn&1073741824&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function gv(t,i){switch(Cu(i),i.tag){case 1:return bn(i.type)&&Ta(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Ft(Rn),Ft(pn),Vu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Bu(i),null;case 13:if(Ft(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return xs(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var Wa=!1,_n=!1,_v=typeof WeakSet=="function"?WeakSet:Set,We=null;function Es(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(t,i,u)}else o.current=null}function lc(t,i,o){try{o()}catch(u){Wt(t,i,u)}}var _p=!1;function vv(t,i){if(Su=ca,t=Kd(),du(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var R=0,W=-1,$=-1,he=0,Me=0,Ee=t,xe=null;t:for(;;){for(var Be;Ee!==o||d!==0&&Ee.nodeType!==3||(W=R+d),Ee!==p||u!==0&&Ee.nodeType!==3||($=R+u),Ee.nodeType===3&&(R+=Ee.nodeValue.length),(Be=Ee.firstChild)!==null;)xe=Ee,Ee=Be;for(;;){if(Ee===t)break t;if(xe===o&&++he===d&&(W=R),xe===p&&++Me===u&&($=R),(Be=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Be}o=W===-1||$===-1?null:{start:W,end:$}}else o=null}o=o||{start:0,end:0}}else o=null;for(xu={focusedElem:t,selectionRange:o},ca=!1,We=i;We!==null;)if(i=We,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,We=t;else for(;We!==null;){i=We;try{var Ye=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var $e=Ye.memoizedProps,jt=Ye.memoizedState,oe=i.stateNode,Q=oe.getSnapshotBeforeUpdate(i.elementType===i.type?$e:ei(i.type,$e),jt);oe.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Wt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,We=t;break}We=i.return}return Ye=_p,_p=!1,Ye}function Do(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&lc(i,o,p)}d=d.next}while(d!==u)}}function ja(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function uc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function vp(t){var i=t.alternate;i!==null&&(t.alternate=null,vp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[xo],delete i[wu],delete i[ev],delete i[tv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yp(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ma));else if(u!==4&&(t=t.child,t!==null))for(cc(t,i,o),t=t.sibling;t!==null;)cc(t,i,o),t=t.sibling}function fc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(fc(t,i,o),t=t.sibling;t!==null;)fc(t,i,o),t=t.sibling}var cn=null,ti=!1;function ar(t,i,o){for(o=o.child;o!==null;)xp(t,i,o),o=o.sibling}function xp(t,i,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(st,o)}catch{}switch(o.tag){case 5:_n||Es(o,i);case 6:var u=cn,d=ti;cn=null,ar(t,i,o),cn=u,ti=d,cn!==null&&(ti?(t=cn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ti?(t=cn,o=o.stateNode,t.nodeType===8?Tu(t.parentNode,o):t.nodeType===1&&Tu(t,o),uo(t)):Tu(cn,o.stateNode));break;case 4:u=cn,d=ti,cn=o.stateNode.containerInfo,ti=!0,ar(t,i,o),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,R=p.destroy;p=p.tag,R!==void 0&&(p&2||p&4)&&lc(o,i,R),d=d.next}while(d!==u)}ar(t,i,o);break;case 1:if(!_n&&(Es(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(W){Wt(o,i,W)}ar(t,i,o);break;case 21:ar(t,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,ar(t,i,o),_n=u):ar(t,i,o);break;default:ar(t,i,o)}}function Mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new _v),i.forEach(function(u){var d=Rv.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=t,R=i,W=R;e:for(;W!==null;){switch(W.tag){case 5:cn=W.stateNode,ti=!1;break e;case 3:cn=W.stateNode.containerInfo,ti=!0;break e;case 4:cn=W.stateNode.containerInfo,ti=!0;break e}W=W.return}if(cn===null)throw Error(n(160));xp(p,R,d),cn=null,ti=!1;var $=d.alternate;$!==null&&($.return=null),d.return=null}catch(he){Wt(d,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,t),i=i.sibling}function Ep(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),mi(t),u&4){try{Do(3,t,t.return),ja(3,t)}catch($e){Wt(t,t.return,$e)}try{Do(5,t,t.return)}catch($e){Wt(t,t.return,$e)}}break;case 1:ni(i,t),mi(t),u&512&&o!==null&&Es(o,o.return);break;case 5:if(ni(i,t),mi(t),u&512&&o!==null&&Es(o,o.return),t.flags&32){var d=t.stateNode;try{gt(d,"")}catch($e){Wt(t,t.return,$e)}}if(u&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,R=o!==null?o.memoizedProps:p,W=t.type,$=t.updateQueue;if(t.updateQueue=null,$!==null)try{W==="input"&&p.type==="radio"&&p.name!=null&&et(d,p),ft(W,R);var he=ft(W,p);for(R=0;R<$.length;R+=2){var Me=$[R],Ee=$[R+1];Me==="style"?at(d,Ee):Me==="dangerouslySetInnerHTML"?Ve(d,Ee):Me==="children"?gt(d,Ee):H(d,Me,Ee,he)}switch(W){case"input":De(d,p);break;case"textarea":ve(d,p);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Be=p.value;Be!=null?z(d,!!p.multiple,Be,!1):xe!==!!p.multiple&&(p.defaultValue!=null?z(d,!!p.multiple,p.defaultValue,!0):z(d,!!p.multiple,p.multiple?[]:"",!1))}d[xo]=p}catch($e){Wt(t,t.return,$e)}}break;case 6:if(ni(i,t),mi(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch($e){Wt(t,t.return,$e)}}break;case 3:if(ni(i,t),mi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch($e){Wt(t,t.return,$e)}break;case 4:ni(i,t),mi(t);break;case 13:ni(i,t),mi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(pc=ae())),u&4&&Mp(t);break;case 22:if(Me=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(he=_n)||Me,ni(i,t),_n=he):ni(i,t),mi(t),u&8192){if(he=t.memoizedState!==null,(t.stateNode.isHidden=he)&&!Me&&t.mode&1)for(We=t,Me=t.child;Me!==null;){for(Ee=We=Me;We!==null;){switch(xe=We,Be=xe.child,xe.tag){case 0:case 11:case 14:case 15:Do(4,xe,xe.return);break;case 1:Es(xe,xe.return);var Ye=xe.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=xe,o=xe.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch($e){Wt(u,o,$e)}}break;case 5:Es(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Ap(Ee);continue}}Be!==null?(Be.return=xe,We=Be):Ap(Ee)}Me=Me.sibling}e:for(Me=null,Ee=t;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{d=Ee.stateNode,he?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(W=Ee.stateNode,$=Ee.memoizedProps.style,R=$!=null&&$.hasOwnProperty("display")?$.display:null,W.style.display=nt("display",R))}catch($e){Wt(t,t.return,$e)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=he?"":Ee.memoizedProps}catch($e){Wt(t,t.return,$e)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ni(i,t),mi(t),u&4&&Mp(t);break;case 21:break;default:ni(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(yp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(gt(d,""),u.flags&=-33);var p=Sp(t);fc(t,p,d);break;case 3:case 4:var R=u.stateNode.containerInfo,W=Sp(t);cc(t,W,R);break;default:throw Error(n(161))}}catch($){Wt(t,t.return,$)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function yv(t,i,o){We=t,Tp(t)}function Tp(t,i,o){for(var u=(t.mode&1)!==0;We!==null;){var d=We,p=d.child;if(d.tag===22&&u){var R=d.memoizedState!==null||Wa;if(!R){var W=d.alternate,$=W!==null&&W.memoizedState!==null||_n;W=Wa;var he=_n;if(Wa=R,(_n=$)&&!he)for(We=d;We!==null;)R=We,$=R.child,R.tag===22&&R.memoizedState!==null?Rp(d):$!==null?($.return=R,We=$):Rp(d);for(;p!==null;)We=p,Tp(p),p=p.sibling;We=d,Wa=W,_n=he}wp(t)}else d.subtreeFlags&8772&&p!==null?(p.return=d,We=p):wp(t)}}function wp(t){for(;We!==null;){var i=We;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:_n||ja(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ah(i,p,u);break;case 3:var R=i.updateQueue;if(R!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ah(i,R,o)}break;case 5:var W=i.stateNode;if(o===null&&i.flags&4){o=W;var $=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&o.focus();break;case"img":$.src&&(o.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var Me=he.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&uo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&uc(i)}catch(xe){Wt(i,i.return,xe)}}if(i===t){We=null;break}if(o=i.sibling,o!==null){o.return=i.return,We=o;break}We=i.return}}function Ap(t){for(;We!==null;){var i=We;if(i===t){We=null;break}var o=i.sibling;if(o!==null){o.return=i.return,We=o;break}We=i.return}}function Rp(t){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ja(4,i)}catch($){Wt(i,o,$)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch($){Wt(i,d,$)}}var p=i.return;try{uc(i)}catch($){Wt(i,p,$)}break;case 5:var R=i.return;try{uc(i)}catch($){Wt(i,R,$)}}}catch($){Wt(i,i.return,$)}if(i===t){We=null;break}var W=i.sibling;if(W!==null){W.return=i.return,We=W;break}We=i.return}}var Sv=Math.ceil,Xa=k.ReactCurrentDispatcher,dc=k.ReactCurrentOwner,qn=k.ReactCurrentBatchConfig,At=0,on=null,Yt=null,fn=0,Bn=0,Ts=nr(0),Qt=0,Io=null,Or=0,qa=0,hc=0,No=null,Pn=null,pc=0,ws=1/0,Pi=null,Ya=!1,mc=null,lr=null,Ka=!1,ur=null,$a=0,Oo=0,gc=null,Za=-1,Qa=0;function En(){return At&6?ae():Za!==-1?Za:Za=ae()}function cr(t){return t.mode&1?At&2&&fn!==0?fn&-fn:iv.transition!==null?(Qa===0&&(Qa=It()),Qa):(t=wt,t!==0||(t=window.event,t=t===void 0?16:Cd(t.type)),t):1}function ii(t,i,o,u){if(50<Oo)throw Oo=0,gc=null,Error(n(185));nn(t,o,u),(!(At&2)||t!==on)&&(t===on&&(!(At&2)&&(qa|=o),Qt===4&&fr(t,fn)),Ln(t,u),o===1&&At===0&&!(i.mode&1)&&(ws=ae()+500,Aa&&rr()))}function Ln(t,i){var o=t.callbackNode;xn(t,i);var u=dn(t,t===on?fn:0);if(u===0)o!==null&&N(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&N(o),i===1)t.tag===0?nv(Cp.bind(null,t)):ph(Cp.bind(null,t)),Q_(function(){!(At&6)&&rr()}),o=null;else{switch(fi(u)){case 1:o=Te;break;case 4:o=Ne;break;case 16:o=ze;break;case 536870912:o=lt;break;default:o=ze}o=Fp(o,bp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function bp(t,i){if(Za=-1,Qa=0,At&6)throw Error(n(327));var o=t.callbackNode;if(As()&&t.callbackNode!==o)return null;var u=dn(t,t===on?fn:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=Ja(t,u);else{i=u;var d=At;At|=2;var p=Lp();(on!==t||fn!==i)&&(Pi=null,ws=ae()+500,Fr(t,i));do try{Ev();break}catch(W){Pp(t,W)}while(!0);Nu(),Xa.current=p,At=d,Yt!==null?i=0:(on=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=Mi(t),d!==0&&(u=d,i=_c(t,d))),i===1)throw o=Io,Fr(t,0),fr(t,u),Ln(t,ae()),o;if(i===6)fr(t,u);else{if(d=t.current.alternate,!(u&30)&&!xv(d)&&(i=Ja(t,u),i===2&&(p=Mi(t),p!==0&&(u=p,i=_c(t,p))),i===1))throw o=Io,Fr(t,0),fr(t,u),Ln(t,ae()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Pn,Pi);break;case 3:if(fr(t,u),(u&130023424)===u&&(i=pc+500-ae(),10<i)){if(dn(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){En(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Eu(kr.bind(null,t,Pn,Pi),i);break}kr(t,Pn,Pi);break;case 4:if(fr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var R=31-ht(u);p=1<<R,R=i[R],R>d&&(d=R),u&=~p}if(u=d,u=ae()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Sv(u/1960))-u,10<u){t.timeoutHandle=Eu(kr.bind(null,t,Pn,Pi),u);break}kr(t,Pn,Pi);break;case 5:kr(t,Pn,Pi);break;default:throw Error(n(329))}}}return Ln(t,ae()),t.callbackNode===o?bp.bind(null,t):null}function _c(t,i){var o=No;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Ja(t,i),t!==2&&(i=Pn,Pn=o,i!==null&&vc(i)),t}function vc(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function xv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Qn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~hc,i&=~qa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ht(i),u=1<<o;t[o]=-1,i&=~u}}function Cp(t){if(At&6)throw Error(n(327));As();var i=dn(t,0);if(!(i&1))return Ln(t,ae()),null;var o=Ja(t,i);if(t.tag!==0&&o===2){var u=Mi(t);u!==0&&(i=u,o=_c(t,u))}if(o===1)throw o=Io,Fr(t,0),fr(t,i),Ln(t,ae()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Pn,Pi),Ln(t,ae()),null}function yc(t,i){var o=At;At|=1;try{return t(i)}finally{At=o,At===0&&(ws=ae()+500,Aa&&rr())}}function Ur(t){ur!==null&&ur.tag===0&&!(At&6)&&As();var i=At;At|=1;var o=qn.transition,u=wt;try{if(qn.transition=null,wt=1,t)return t()}finally{wt=u,qn.transition=o,At=i,!(At&6)&&rr()}}function Sc(){Bn=Ts.current,Ft(Ts)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Z_(o)),Yt!==null)for(o=Yt.return;o!==null;){var u=o;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ta();break;case 3:xs(),Ft(Rn),Ft(pn),Vu();break;case 5:Bu(u);break;case 4:xs();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Ou(u.type._context);break;case 22:case 23:Sc()}o=o.return}if(on=t,Yt=t=dr(t.current,null),fn=Bn=i,Qt=0,Io=null,hc=qa=Or=0,Pn=No=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var R=p.next;p.next=d,u.next=R}o.pending=u}Dr=null}return t}function Pp(t,i){do{var o=Yt;try{if(Nu(),Ua.current=Ba,Fa){for(var u=Ht.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Fa=!1}if(Nr=0,sn=Zt=Ht=null,Ro=!1,bo=0,dc.current=null,o===null||o.return===null){Qt=1,Io=i,Yt=null;break}e:{var p=t,R=o.return,W=o,$=i;if(i=fn,W.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var he=$,Me=W,Ee=Me.tag;if(!(Me.mode&1)&&(Ee===0||Ee===11||Ee===15)){var xe=Me.alternate;xe?(Me.updateQueue=xe.updateQueue,Me.memoizedState=xe.memoizedState,Me.lanes=xe.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Be=tp(R);if(Be!==null){Be.flags&=-257,np(Be,R,W,p,i),Be.mode&1&&ep(p,he,i),i=Be,$=he;var Ye=i.updateQueue;if(Ye===null){var $e=new Set;$e.add($),i.updateQueue=$e}else Ye.add($);break e}else{if(!(i&1)){ep(p,he,i),xc();break e}$=Error(n(426))}}else if(zt&&W.mode&1){var jt=tp(R);if(jt!==null){!(jt.flags&65536)&&(jt.flags|=256),np(jt,R,W,p,i),Du(Ms($,W));break e}}p=$=Ms($,W),Qt!==4&&(Qt=2),No===null?No=[p]:No.push(p),p=R;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var oe=Qh(p,$,i);wh(p,oe);break e;case 1:W=$;var Q=p.type,ue=p.stateNode;if(!(p.flags&128)&&(typeof Q.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(lr===null||!lr.has(ue)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=Jh(p,W,i);wh(p,Ae);break e}}p=p.return}while(p!==null)}Ip(o)}catch(Ze){i=Ze,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function Lp(){var t=Xa.current;return Xa.current=Ba,t===null?Ba:t}function xc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||!(Or&268435455)&&!(qa&268435455)||fr(on,fn)}function Ja(t,i){var o=At;At|=2;var u=Lp();(on!==t||fn!==i)&&(Pi=null,Fr(t,i));do try{Mv();break}catch(d){Pp(t,d)}while(!0);if(Nu(),At=o,Xa.current=u,Yt!==null)throw Error(n(261));return on=null,fn=0,Qt}function Mv(){for(;Yt!==null;)Dp(Yt)}function Ev(){for(;Yt!==null&&!ne();)Dp(Yt)}function Dp(t){var i=Up(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Ip(t):Yt=i,dc.current=null}function Ip(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=gv(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}else if(o=mv(o,i,Bn),o!==null){Yt=o;return}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function kr(t,i,o){var u=wt,d=qn.transition;try{qn.transition=null,wt=1,Tv(t,i,o,u)}finally{qn.transition=d,wt=u}return null}function Tv(t,i,o,u){do As();while(ur!==null);if(At&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(t,p),t===on&&(Yt=on=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Ka||(Ka=!0,Fp(ze,function(){return As(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=qn.transition,qn.transition=null;var R=wt;wt=1;var W=At;At|=4,dc.current=null,vv(t,o),Ep(o,t),W_(xu),ca=!!Su,xu=Su=null,t.current=o,yv(o),de(),At=W,wt=R,qn.transition=p}else t.current=o;if(Ka&&(Ka=!1,ur=t,$a=d),p=t.pendingLanes,p===0&&(lr=null),Mt(o.stateNode),Ln(t,ae()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ya)throw Ya=!1,t=mc,mc=null,t;return $a&1&&t.tag!==0&&As(),p=t.pendingLanes,p&1?t===gc?Oo++:(Oo=0,gc=t):Oo=0,rr(),null}function As(){if(ur!==null){var t=fi($a),i=qn.transition,o=wt;try{if(qn.transition=null,wt=16>t?16:t,ur===null)var u=!1;else{if(t=ur,ur=null,$a=0,At&6)throw Error(n(331));var d=At;for(At|=4,We=t.current;We!==null;){var p=We,R=p.child;if(We.flags&16){var W=p.deletions;if(W!==null){for(var $=0;$<W.length;$++){var he=W[$];for(We=he;We!==null;){var Me=We;switch(Me.tag){case 0:case 11:case 15:Do(8,Me,p)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,We=Ee;else for(;We!==null;){Me=We;var xe=Me.sibling,Be=Me.return;if(vp(Me),Me===he){We=null;break}if(xe!==null){xe.return=Be,We=xe;break}We=Be}}}var Ye=p.alternate;if(Ye!==null){var $e=Ye.child;if($e!==null){Ye.child=null;do{var jt=$e.sibling;$e.sibling=null,$e=jt}while($e!==null)}}We=p}}if(p.subtreeFlags&2064&&R!==null)R.return=p,We=R;else e:for(;We!==null;){if(p=We,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Do(9,p,p.return)}var oe=p.sibling;if(oe!==null){oe.return=p.return,We=oe;break e}We=p.return}}var Q=t.current;for(We=Q;We!==null;){R=We;var ue=R.child;if(R.subtreeFlags&2064&&ue!==null)ue.return=R,We=ue;else e:for(R=Q;We!==null;){if(W=We,W.flags&2048)try{switch(W.tag){case 0:case 11:case 15:ja(9,W)}}catch(Ze){Wt(W,W.return,Ze)}if(W===R){We=null;break e}var Ae=W.sibling;if(Ae!==null){Ae.return=W.return,We=Ae;break e}We=W.return}}if(At=d,rr(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(st,t)}catch{}u=!0}return u}finally{wt=o,qn.transition=i}}return!1}function Np(t,i,o){i=Ms(o,i),i=Qh(t,i,1),t=or(t,i,1),i=En(),t!==null&&(nn(t,1,i),Ln(t,i))}function Wt(t,i,o){if(t.tag===3)Np(t,t,o);else for(;i!==null;){if(i.tag===3){Np(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(lr===null||!lr.has(u))){t=Ms(o,t),t=Jh(i,t,1),i=or(i,t,1),t=En(),i!==null&&(nn(i,1,t),Ln(i,t));break}}i=i.return}}function wv(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=En(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(fn&o)===o&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>ae()-pc?Fr(t,0):hc|=o),Ln(t,i)}function Op(t,i){i===0&&(t.mode&1?(i=Gt,Gt<<=1,!(Gt&130023424)&&(Gt=4194304)):i=1);var o=En();t=Ri(t,i),t!==null&&(nn(t,i,o),Ln(t,o))}function Av(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Op(t,o)}function Rv(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Op(t,o)}var Up;Up=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Cn=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return Cn=!1,pv(t,i,o);Cn=!!(t.flags&131072)}else Cn=!1,zt&&i.flags&1048576&&mh(i,ba,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ga(t,i),t=i.pendingProps;var d=ps(i,pn.current);Ss(i,o),d=ju(null,i,u,t,d,o);var p=Xu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(p=!0,wa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ku(i),d.updater=Ha,i.stateNode=d,d._reactInternals=i,Qu(i,u,t,o),i=nc(null,i,u,!0,p,o)):(i.tag=0,zt&&p&&bu(i),Mn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ga(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Cv(u),t=ei(u,t),d){case 0:i=tc(null,i,u,t,o);break e;case 1:i=lp(null,i,u,t,o);break e;case 11:i=ip(null,i,u,t,o);break e;case 14:i=rp(null,i,u,ei(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),tc(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),lp(t,i,u,d,o);case 3:e:{if(up(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,d=p.element,Th(t,i),Na(i,u,null,o);var R=i.memoizedState;if(u=R.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ms(Error(n(423)),i),i=cp(t,i,u,o,d);break e}else if(u!==d){d=Ms(Error(n(424)),i),i=cp(t,i,u,o,d);break e}else for(zn=tr(i.stateNode.containerInfo.firstChild),kn=i,zt=!0,Jn=null,o=Mh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_s(),u===d){i=Ci(t,i,o);break e}Mn(t,i,u,o)}i=i.child}return i;case 5:return Rh(i),t===null&&Lu(i),u=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,R=d.children,Mu(u,d)?R=null:p!==null&&Mu(u,p)&&(i.flags|=32),ap(t,i),Mn(t,i,R,o),i.child;case 6:return t===null&&Lu(i),null;case 13:return fp(t,i,o);case 4:return zu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=vs(i,null,u,o):Mn(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ip(t,i,u,d,o);case 7:return Mn(t,i,i.pendingProps,o),i.child;case 8:return Mn(t,i,i.pendingProps.children,o),i.child;case 12:return Mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,R=d.value,Nt(La,u._currentValue),u._currentValue=R,p!==null)if(Qn(p.value,R)){if(p.children===d.children&&!Rn.current){i=Ci(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var W=p.dependencies;if(W!==null){R=p.child;for(var $=W.firstContext;$!==null;){if($.context===u){if(p.tag===1){$=bi(-1,o&-o),$.tag=2;var he=p.updateQueue;if(he!==null){he=he.shared;var Me=he.pending;Me===null?$.next=$:($.next=Me.next,Me.next=$),he.pending=$}}p.lanes|=o,$=p.alternate,$!==null&&($.lanes|=o),Uu(p.return,o,i),W.lanes|=o;break}$=$.next}}else if(p.tag===10)R=p.type===i.type?null:p.child;else if(p.tag===18){if(R=p.return,R===null)throw Error(n(341));R.lanes|=o,W=R.alternate,W!==null&&(W.lanes|=o),Uu(R,o,i),R=p.sibling}else R=p.child;if(R!==null)R.return=p;else for(R=p;R!==null;){if(R===i){R=null;break}if(p=R.sibling,p!==null){p.return=R.return,R=p;break}R=R.return}p=R}Mn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ss(i,o),d=jn(d),u=u(d),i.flags|=1,Mn(t,i,u,o),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),rp(t,i,u,d,o);case 15:return sp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Ga(t,i),i.tag=1,bn(u)?(t=!0,wa(i)):t=!1,Ss(i,o),$h(i,u,d),Qu(i,u,d,o),nc(null,i,u,!0,t,o);case 19:return hp(t,i,o);case 22:return op(t,i,o)}throw Error(n(156,i.tag))};function Fp(t,i){return aa(t,i)}function bv(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,u){return new bv(t,i,o,u)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cv(t){if(typeof t=="function")return Mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===ee)return 14}return 2}function dr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function el(t,i,o,u,d,p){var R=2;if(u=t,typeof t=="function")Mc(t)&&(R=1);else if(typeof t=="string")R=5;else e:switch(t){case I:return zr(o.children,d,p,i);case V:R=8,d|=8;break;case T:return t=Yn(12,o,i,d|2),t.elementType=T,t.lanes=p,t;case F:return t=Yn(13,o,i,d),t.elementType=F,t.lanes=p,t;case G:return t=Yn(19,o,i,d),t.elementType=G,t.lanes=p,t;case v:return tl(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m:R=10;break e;case O:R=9;break e;case K:R=11;break e;case ee:R=14;break e;case Z:R=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(R,o,i,d),i.elementType=t,i.type=u,i.lanes=p,i}function zr(t,i,o,u){return t=Yn(7,t,u,i),t.lanes=o,t}function tl(t,i,o,u){return t=Yn(22,t,u,i),t.elementType=v,t.lanes=o,t.stateNode={isHidden:!1},t}function Ec(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function Tc(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Pv(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wc(t,i,o,u,d,p,R,W,$){return t=new Pv(t,i,o,W,$),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(p),t}function Lv(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function kp(t){if(!t)return ir;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return dh(t,o,i)}return i}function zp(t,i,o,u,d,p,R,W,$){return t=wc(o,u,!0,t,d,p,R,W,$),t.context=kp(null),o=t.current,u=En(),d=cr(o),p=bi(u,d),p.callback=i??null,or(o,p,d),t.current.lanes=d,nn(t,d,u),Ln(t,u),t}function nl(t,i,o,u){var d=i.current,p=En(),R=cr(d);return o=kp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,R),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=or(d,i,R),t!==null&&(ii(t,d,R,p),Ia(t,d,R)),R}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Ac(t,i){Bp(t,i),(t=t.alternate)&&Bp(t,i)}var Hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}rl.prototype.render=Rc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));nl(t,i,null,null)},rl.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){nl(null,t,null,null)}),i[Ei]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Td();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Qi.length&&i!==0&&i<Qi[o].priority;o++);Qi.splice(o,0,t),o===0&&Rd(t)}};function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function Dv(t,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var he=il(R);p.call(he)}}var R=zp(i,u,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=R,t[Ei]=R.current,yo(t.nodeType===8?t.parentNode:t),Ur(),R}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var W=u;u=function(){var he=il($);W.call(he)}}var $=wc(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=$,t[Ei]=$.current,yo(t.nodeType===8?t.parentNode:t),Ur(function(){nl(i,$,o,u)}),$}function ol(t,i,o,u,d){var p=o._reactRootContainer;if(p){var R=p;if(typeof d=="function"){var W=d;d=function(){var $=il(R);W.call($)}}nl(i,R,t,d)}else R=Dv(o,i,t,d,u);return il(R)}Md=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(rn(i,o|1),Ln(i,ae()),!(At&6)&&(ws=ae()+500,rr()))}break;case 13:Ur(function(){var u=Ri(t,1);if(u!==null){var d=En();ii(u,t,1,d)}}),Ac(t,1)}},Jl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=En();ii(i,t,134217728,o)}Ac(t,134217728)}},Ed=function(t){if(t.tag===13){var i=cr(t),o=Ri(t,i);if(o!==null){var u=En();ii(o,t,i,u)}Ac(t,i)}},Td=function(){return wt},wd=function(t,i){var o=wt;try{return wt=t,i()}finally{wt=o}},Ie=function(t,i,o){switch(i){case"input":if(De(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=Ea(u);if(!d)throw Error(n(90));Ge(u),De(u,d)}}}break;case"textarea":ve(t,o);break;case"select":i=o.value,i!=null&&z(t,!!o.multiple,i,!1)}},Ot=yc,$t=Ur;var Iv={usingClientEntryPoint:!1,Events:[Mo,ds,Ea,Ue,dt,yc]},Uo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nv={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sa(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{st=al.inject(Nv),Ke=al}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv,Dn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(i))throw Error(n(200));return Lv(t,i,null,o)},Dn.createRoot=function(t,i){if(!bc(t))throw Error(n(299));var o=!1,u="",d=Hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=wc(t,1,!1,null,null,o,!1,u,d),t[Ei]=i.current,yo(t.nodeType===8?t.parentNode:t),new Rc(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=sa(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Ur(t)},Dn.hydrate=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!0,o)},Dn.hydrateRoot=function(t,i,o){if(!bc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",R=Hp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(R=o.onRecoverableError)),i=zp(i,null,t,1,o??null,d,!1,p,R),t[Ei]=i.current,yo(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new rl(i)},Dn.render=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!1,o)},Dn.unmountComponentAtNode=function(t){if(!sl(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Dn.unstable_batchedUpdates=yc,Dn.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!sl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ol(t,i,o,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var $p;function Wv(){if($p)return Lc.exports;$p=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lc.exports=Gv(),Lc.exports}var Zp;function jv(){if(Zp)return ul;Zp=1;var s=Wv();return ul.createRoot=s.createRoot,ul.hydrateRoot=s.hydrateRoot,ul}var Xv=jv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="172",js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qv=0,Qp=1,Yv=2,vg=1,Kv=2,Ui=3,Tr=0,Nn=1,Fi=2,Mr=0,Xs=1,Jp=2,em=3,tm=4,$v=5,Yr=100,Zv=101,Qv=102,Jv=103,e0=104,t0=200,n0=201,i0=202,r0=203,Ef=204,Tf=205,s0=206,o0=207,a0=208,l0=209,u0=210,c0=211,f0=212,d0=213,h0=214,wf=0,Af=1,Rf=2,Ks=3,bf=4,Cf=5,Pf=6,Lf=7,yg=0,p0=1,m0=2,Er=0,g0=1,_0=2,v0=3,y0=4,S0=5,x0=6,M0=7,Sg=300,$s=301,Zs=302,Df=303,If=304,Xl=306,Nf=1e3,$r=1001,Of=1002,ui=1003,E0=1004,cl=1005,_i=1006,Nc=1007,Zr=1008,Gi=1009,xg=1010,Mg=1011,Yo=1012,dd=1013,Jr=1014,ki=1015,$o=1016,hd=1017,pd=1018,Qs=1020,Eg=35902,Tg=1021,wg=1022,li=1023,Ag=1024,Rg=1025,qs=1026,Js=1027,bg=1028,md=1029,Cg=1030,gd=1031,_d=1033,Ol=33776,Ul=33777,Fl=33778,kl=33779,Uf=35840,Ff=35841,kf=35842,zf=35843,Bf=36196,Hf=37492,Vf=37496,Gf=37808,Wf=37809,jf=37810,Xf=37811,qf=37812,Yf=37813,Kf=37814,$f=37815,Zf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,zl=36492,id=36494,rd=36495,Pg=36283,sd=36284,od=36285,ad=36286,T0=3200,w0=3201,A0=0,R0=1,xr="",$n="srgb",eo="srgb-linear",Hl="linear",Lt="srgb",Rs=7680,nm=519,b0=512,C0=513,P0=514,Lg=515,L0=516,D0=517,I0=518,N0=519,im=35044,rm="300 es",zi=2e3,Vl=2001;class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sm=1234567;const Xo=Math.PI/180,Ko=180/Math.PI;function io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function St(s,e,n){return Math.max(e,Math.min(n,s))}function vd(s,e){return(s%e+e)%e}function O0(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function U0(s,e,n){return s!==e?(n-s)/(e-s):0}function qo(s,e,n){return(1-n)*s+n*e}function F0(s,e,n,r){return qo(s,e,1-Math.exp(-n*r))}function k0(s,e=1){return e-Math.abs(vd(s,e*2)-e)}function z0(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function B0(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function H0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function V0(s,e){return s+Math.random()*(e-s)}function G0(s){return s*(.5-Math.random())}function W0(s){s!==void 0&&(sm=s);let e=sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j0(s){return s*Xo}function X0(s){return s*Ko}function q0(s){return(s&s-1)===0&&s!==0}function Y0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function K0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $0(s,e,n,r,a){const l=Math.cos,c=Math.sin,f=l(n/2),h=c(n/2),g=l((e+r)/2),S=c((e+r)/2),x=l((e-r)/2),M=c((e-r)/2),A=l((r-e)/2),D=c((r-e)/2);switch(a){case"XYX":s.set(f*S,h*x,h*M,f*g);break;case"YZY":s.set(h*M,f*S,h*x,f*g);break;case"ZXZ":s.set(h*x,h*M,f*S,f*g);break;case"XZX":s.set(f*S,h*D,h*A,f*g);break;case"YXY":s.set(h*A,f*S,h*D,f*g);break;case"ZYZ":s.set(h*D,h*A,f*S,f*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Hs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Z0={DEG2RAD:Xo,RAD2DEG:Ko,generateUUID:io,clamp:St,euclideanModulo:vd,mapLinear:O0,inverseLerp:U0,lerp:qo,damp:F0,pingpong:k0,smoothstep:z0,smootherstep:B0,randInt:H0,randFloat:V0,randFloatSpread:G0,seededRandom:W0,degToRad:j0,radToDeg:X0,isPowerOfTwo:q0,ceilPowerOfTwo:Y0,floorPowerOfTwo:K0,setQuaternionFromProperEuler:$0,normalize:Tn,denormalize:Hs};class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,n,r,a,l,c,f,h,g){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,h,g)}set(e,n,r,a,l,c,f,h,g){const S=this.elements;return S[0]=e,S[1]=a,S[2]=f,S[3]=n,S[4]=l,S[5]=h,S[6]=r,S[7]=c,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[3],h=r[6],g=r[1],S=r[4],x=r[7],M=r[2],A=r[5],D=r[8],b=a[0],E=a[3],y=a[6],q=a[1],H=a[4],k=a[7],L=a[2],P=a[5],I=a[8];return l[0]=c*b+f*q+h*L,l[3]=c*E+f*H+h*P,l[6]=c*y+f*k+h*I,l[1]=g*b+S*q+x*L,l[4]=g*E+S*H+x*P,l[7]=g*y+S*k+x*I,l[2]=M*b+A*q+D*L,l[5]=M*E+A*H+D*P,l[8]=M*y+A*k+D*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],g=e[7],S=e[8];return n*c*S-n*f*g-r*l*S+r*f*h+a*l*g-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],g=e[7],S=e[8],x=S*c-f*g,M=f*h-S*l,A=g*l-c*h,D=n*x+r*M+a*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/D;return e[0]=x*b,e[1]=(a*g-S*r)*b,e[2]=(f*r-a*c)*b,e[3]=M*b,e[4]=(S*n-a*h)*b,e[5]=(a*l-f*n)*b,e[6]=A*b,e[7]=(r*h-g*n)*b,e[8]=(c*n-r*l)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,f){const h=Math.cos(l),g=Math.sin(l);return this.set(r*h,r*g,-r*(h*c+g*f)+c+e,-a*g,a*h,-a*(-g*c+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new pt;function Dg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Q0(){const s=Gl("canvas");return s.style.display="block",s}const om={};function Vs(s){s in om||(om[s]=!0,console.warn(s))}function J0(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function ey(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ty(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const am=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(a.r=Ys(a.r),a.g=Ys(a.g),a.b=Ys(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?Hl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[eo]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const bt=ny();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class iy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Gl("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Hi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ry=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Uc(a[c].image)):l.push(Uc(a[c]))}else l=Uc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Uc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sy=0;class On extends ns{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,r=$r,a=$r,l=_i,c=Zr,f=li,h=Gi,g=On.DEFAULT_ANISOTROPY,S=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=io(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Sg;On.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,g=h[0],S=h[4],x=h[8],M=h[1],A=h[5],D=h[9],b=h[2],E=h[6],y=h[10];if(Math.abs(S-M)<.01&&Math.abs(x-b)<.01&&Math.abs(D-E)<.01){if(Math.abs(S+M)<.1&&Math.abs(x+b)<.1&&Math.abs(D+E)<.1&&Math.abs(g+A+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const H=(g+1)/2,k=(A+1)/2,L=(y+1)/2,P=(S+M)/4,I=(x+b)/4,V=(D+E)/4;return H>k&&H>L?H<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(H),a=P/r,l=I/r):k>L?k<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(k),r=P/a,l=V/a):L<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(L),r=I/l,a=V/l),this.set(r,a,l,n),this}let q=Math.sqrt((E-D)*(E-D)+(x-b)*(x-b)+(M-S)*(M-S));return Math.abs(q)<.001&&(q=1),this.x=(E-D)/q,this.y=(x-b)/q,this.z=(M-S)/q,this.w=Math.acos((g+A+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oy extends ns{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new On(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Ig(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends oy{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ng extends On{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ay extends On{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,f){let h=r[a+0],g=r[a+1],S=r[a+2],x=r[a+3];const M=l[c+0],A=l[c+1],D=l[c+2],b=l[c+3];if(f===0){e[n+0]=h,e[n+1]=g,e[n+2]=S,e[n+3]=x;return}if(f===1){e[n+0]=M,e[n+1]=A,e[n+2]=D,e[n+3]=b;return}if(x!==b||h!==M||g!==A||S!==D){let E=1-f;const y=h*M+g*A+S*D+x*b,q=y>=0?1:-1,H=1-y*y;if(H>Number.EPSILON){const L=Math.sqrt(H),P=Math.atan2(L,y*q);E=Math.sin(E*P)/L,f=Math.sin(f*P)/L}const k=f*q;if(h=h*E+M*k,g=g*E+A*k,S=S*E+D*k,x=x*E+b*k,E===1-f){const L=1/Math.sqrt(h*h+g*g+S*S+x*x);h*=L,g*=L,S*=L,x*=L}}e[n]=h,e[n+1]=g,e[n+2]=S,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,l,c){const f=r[a],h=r[a+1],g=r[a+2],S=r[a+3],x=l[c],M=l[c+1],A=l[c+2],D=l[c+3];return e[n]=f*D+S*x+h*A-g*M,e[n+1]=h*D+S*M+g*x-f*A,e[n+2]=g*D+S*A+f*M-h*x,e[n+3]=S*D-f*x-h*M-g*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,g=f(r/2),S=f(a/2),x=f(l/2),M=h(r/2),A=h(a/2),D=h(l/2);switch(c){case"XYZ":this._x=M*S*x+g*A*D,this._y=g*A*x-M*S*D,this._z=g*S*D+M*A*x,this._w=g*S*x-M*A*D;break;case"YXZ":this._x=M*S*x+g*A*D,this._y=g*A*x-M*S*D,this._z=g*S*D-M*A*x,this._w=g*S*x+M*A*D;break;case"ZXY":this._x=M*S*x-g*A*D,this._y=g*A*x+M*S*D,this._z=g*S*D+M*A*x,this._w=g*S*x-M*A*D;break;case"ZYX":this._x=M*S*x-g*A*D,this._y=g*A*x+M*S*D,this._z=g*S*D-M*A*x,this._w=g*S*x+M*A*D;break;case"YZX":this._x=M*S*x+g*A*D,this._y=g*A*x+M*S*D,this._z=g*S*D-M*A*x,this._w=g*S*x-M*A*D;break;case"XZY":this._x=M*S*x-g*A*D,this._y=g*A*x-M*S*D,this._z=g*S*D+M*A*x,this._w=g*S*x+M*A*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],f=n[5],h=n[9],g=n[2],S=n[6],x=n[10],M=r+f+x;if(M>0){const A=.5/Math.sqrt(M+1);this._w=.25/A,this._x=(S-h)*A,this._y=(l-g)*A,this._z=(c-a)*A}else if(r>f&&r>x){const A=2*Math.sqrt(1+r-f-x);this._w=(S-h)/A,this._x=.25*A,this._y=(a+c)/A,this._z=(l+g)/A}else if(f>x){const A=2*Math.sqrt(1+f-r-x);this._w=(l-g)/A,this._x=(a+c)/A,this._y=.25*A,this._z=(h+S)/A}else{const A=2*Math.sqrt(1+x-r-f);this._w=(c-a)/A,this._x=(l+g)/A,this._y=(h+S)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,f=n._x,h=n._y,g=n._z,S=n._w;return this._x=r*S+c*f+a*g-l*h,this._y=a*S+c*h+l*f-r*g,this._z=l*S+c*g+r*h-a*f,this._w=c*S-r*f-a*h-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const A=1-n;return this._w=A*c+n*this._w,this._x=A*r+n*this._x,this._y=A*a+n*this._y,this._z=A*l+n*this._z,this.normalize(),this}const g=Math.sqrt(h),S=Math.atan2(g,f),x=Math.sin((1-n)*S)/g,M=Math.sin(n*S)/g;return this._w=c*x+this._w*M,this._x=r*x+this._x*M,this._y=a*x+this._y*M,this._z=l*x+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,n=0,r=0){fe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,g=2*(c*a-f*r),S=2*(f*n-l*a),x=2*(l*r-c*n);return this.x=n+h*g+c*x-f*S,this.y=r+h*S+f*g-l*x,this.z=a+h*x+l*S-c*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,f=n.y,h=n.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new fe,um=new ts;class Zo{constructor(e=new fe(1/0,1/0,1/0),n=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),dl.subVectors(this.max,ko),Cs.subVectors(e.a,ko),Ps.subVectors(e.b,ko),Ls.subVectors(e.c,ko),pr.subVectors(Ps,Cs),mr.subVectors(Ls,Ps),Br.subVectors(Cs,Ls);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Br.z,Br.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Br.z,0,-Br.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Br.y,Br.x,0];return!kc(n,Cs,Ps,Ls,dl)||(n=[1,0,0,0,1,0,0,0,1],!kc(n,Cs,Ps,Ls,dl))?!1:(hl.crossVectors(pr,mr),n=[hl.x,hl.y,hl.z],kc(n,Cs,Ps,Ls,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],ri=new fe,fl=new Zo,Cs=new fe,Ps=new fe,Ls=new fe,pr=new fe,mr=new fe,Br=new fe,ko=new fe,dl=new fe,hl=new fe,Hr=new fe;function kc(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Hr.fromArray(s,l);const f=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),g=n.dot(Hr),S=r.dot(Hr);if(Math.max(-Math.max(h,g,S),Math.min(h,g,S))>f)return!1}return!0}const ly=new Zo,zo=new fe,zc=new fe;class ql{constructor(e=new fe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ly.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(zc)),this.expandByPoint(zo.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new fe,Bc=new fe,pl=new fe,gr=new fe,Hc=new fe,ml=new fe,Vc=new fe;class yd{constructor(e=new fe,n=new fe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Bc.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Bc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(pl),f=gr.dot(this.direction),h=-gr.dot(pl),g=gr.lengthSq(),S=Math.abs(1-c*c);let x,M,A,D;if(S>0)if(x=c*h-f,M=c*f-h,D=l*S,x>=0)if(M>=-D)if(M<=D){const b=1/S;x*=b,M*=b,A=x*(x+c*M+2*f)+M*(c*x+M+2*h)+g}else M=l,x=Math.max(0,-(c*M+f)),A=-x*x+M*(M+2*h)+g;else M=-l,x=Math.max(0,-(c*M+f)),A=-x*x+M*(M+2*h)+g;else M<=-D?(x=Math.max(0,-(-c*l+f)),M=x>0?-l:Math.min(Math.max(-l,-h),l),A=-x*x+M*(M+2*h)+g):M<=D?(x=0,M=Math.min(Math.max(-l,-h),l),A=M*(M+2*h)+g):(x=Math.max(0,-(c*l+f)),M=x>0?l:Math.min(Math.max(-l,-h),l),A=-x*x+M*(M+2*h)+g);else M=c>0?-l:l,x=Math.max(0,-(c*M+f)),A=-x*x+M*(M+2*h)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Bc).addScaledVector(pl,M),A}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,f,h;const g=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,M=this.origin;return g>=0?(r=(e.min.x-M.x)*g,a=(e.max.x-M.x)*g):(r=(e.max.x-M.x)*g,a=(e.min.x-M.x)*g),S>=0?(l=(e.min.y-M.y)*S,c=(e.max.y-M.y)*S):(l=(e.max.y-M.y)*S,c=(e.min.y-M.y)*S),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-M.z)*x,h=(e.max.z-M.z)*x):(f=(e.max.z-M.z)*x,h=(e.min.z-M.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,l){Hc.subVectors(n,e),ml.subVectors(r,e),Vc.crossVectors(Hc,ml);let c=this.direction.dot(Vc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;gr.subVectors(this.origin,e);const h=f*this.direction.dot(ml.crossVectors(gr,ml));if(h<0)return null;const g=f*this.direction.dot(Hc.cross(gr));if(g<0||h+g>c)return null;const S=-f*gr.dot(Vc);return S<0?null:this.at(S/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,a,l,c,f,h,g,S,x,M,A,D,b,E){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,h,g,S,x,M,A,D,b,E)}set(e,n,r,a,l,c,f,h,g,S,x,M,A,D,b,E){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=a,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=g,y[6]=S,y[10]=x,y[14]=M,y[3]=A,y[7]=D,y[11]=b,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),g=Math.sin(a),S=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const M=c*S,A=c*x,D=f*S,b=f*x;n[0]=h*S,n[4]=-h*x,n[8]=g,n[1]=A+D*g,n[5]=M-b*g,n[9]=-f*h,n[2]=b-M*g,n[6]=D+A*g,n[10]=c*h}else if(e.order==="YXZ"){const M=h*S,A=h*x,D=g*S,b=g*x;n[0]=M+b*f,n[4]=D*f-A,n[8]=c*g,n[1]=c*x,n[5]=c*S,n[9]=-f,n[2]=A*f-D,n[6]=b+M*f,n[10]=c*h}else if(e.order==="ZXY"){const M=h*S,A=h*x,D=g*S,b=g*x;n[0]=M-b*f,n[4]=-c*x,n[8]=D+A*f,n[1]=A+D*f,n[5]=c*S,n[9]=b-M*f,n[2]=-c*g,n[6]=f,n[10]=c*h}else if(e.order==="ZYX"){const M=c*S,A=c*x,D=f*S,b=f*x;n[0]=h*S,n[4]=D*g-A,n[8]=M*g+b,n[1]=h*x,n[5]=b*g+M,n[9]=A*g-D,n[2]=-g,n[6]=f*h,n[10]=c*h}else if(e.order==="YZX"){const M=c*h,A=c*g,D=f*h,b=f*g;n[0]=h*S,n[4]=b-M*x,n[8]=D*x+A,n[1]=x,n[5]=c*S,n[9]=-f*S,n[2]=-g*S,n[6]=A*x+D,n[10]=M-b*x}else if(e.order==="XZY"){const M=c*h,A=c*g,D=f*h,b=f*g;n[0]=h*S,n[4]=-x,n[8]=g*S,n[1]=M*x+b,n[5]=c*S,n[9]=A*x-D,n[2]=D*x-A,n[6]=f*S,n[10]=b*x+M}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uy,e,cy)}lookAt(e,n,r){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),_r.crossVectors(r,Hn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),_r.crossVectors(r,Hn)),_r.normalize(),gl.crossVectors(Hn,_r),a[0]=_r.x,a[4]=gl.x,a[8]=Hn.x,a[1]=_r.y,a[5]=gl.y,a[9]=Hn.y,a[2]=_r.z,a[6]=gl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[4],h=r[8],g=r[12],S=r[1],x=r[5],M=r[9],A=r[13],D=r[2],b=r[6],E=r[10],y=r[14],q=r[3],H=r[7],k=r[11],L=r[15],P=a[0],I=a[4],V=a[8],T=a[12],m=a[1],O=a[5],K=a[9],F=a[13],G=a[2],ee=a[6],Z=a[10],v=a[14],Y=a[3],U=a[7],_=a[11],w=a[15];return l[0]=c*P+f*m+h*G+g*Y,l[4]=c*I+f*O+h*ee+g*U,l[8]=c*V+f*K+h*Z+g*_,l[12]=c*T+f*F+h*v+g*w,l[1]=S*P+x*m+M*G+A*Y,l[5]=S*I+x*O+M*ee+A*U,l[9]=S*V+x*K+M*Z+A*_,l[13]=S*T+x*F+M*v+A*w,l[2]=D*P+b*m+E*G+y*Y,l[6]=D*I+b*O+E*ee+y*U,l[10]=D*V+b*K+E*Z+y*_,l[14]=D*T+b*F+E*v+y*w,l[3]=q*P+H*m+k*G+L*Y,l[7]=q*I+H*O+k*ee+L*U,l[11]=q*V+H*K+k*Z+L*_,l[15]=q*T+H*F+k*v+L*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],g=e[13],S=e[2],x=e[6],M=e[10],A=e[14],D=e[3],b=e[7],E=e[11],y=e[15];return D*(+l*h*x-a*g*x-l*f*M+r*g*M+a*f*A-r*h*A)+b*(+n*h*A-n*g*M+l*c*M-a*c*A+a*g*S-l*h*S)+E*(+n*g*x-n*f*A-l*c*x+r*c*A+l*f*S-r*g*S)+y*(-a*f*S-n*h*x+n*f*M+a*c*x-r*c*M+r*h*S)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],g=e[7],S=e[8],x=e[9],M=e[10],A=e[11],D=e[12],b=e[13],E=e[14],y=e[15],q=x*E*g-b*M*g+b*h*A-f*E*A-x*h*y+f*M*y,H=D*M*g-S*E*g-D*h*A+c*E*A+S*h*y-c*M*y,k=S*b*g-D*x*g+D*f*A-c*b*A-S*f*y+c*x*y,L=D*x*h-S*b*h-D*f*M+c*b*M+S*f*E-c*x*E,P=n*q+r*H+a*k+l*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=q*I,e[1]=(b*M*l-x*E*l-b*a*A+r*E*A+x*a*y-r*M*y)*I,e[2]=(f*E*l-b*h*l+b*a*g-r*E*g-f*a*y+r*h*y)*I,e[3]=(x*h*l-f*M*l-x*a*g+r*M*g+f*a*A-r*h*A)*I,e[4]=H*I,e[5]=(S*E*l-D*M*l+D*a*A-n*E*A-S*a*y+n*M*y)*I,e[6]=(D*h*l-c*E*l-D*a*g+n*E*g+c*a*y-n*h*y)*I,e[7]=(c*M*l-S*h*l+S*a*g-n*M*g-c*a*A+n*h*A)*I,e[8]=k*I,e[9]=(D*x*l-S*b*l-D*r*A+n*b*A+S*r*y-n*x*y)*I,e[10]=(c*b*l-D*f*l+D*r*g-n*b*g-c*r*y+n*f*y)*I,e[11]=(S*f*l-c*x*l-S*r*g+n*x*g+c*r*A-n*f*A)*I,e[12]=L*I,e[13]=(S*b*a-D*x*a+D*r*M-n*b*M-S*r*E+n*x*E)*I,e[14]=(D*f*a-c*b*a-D*r*h+n*b*h+c*r*E-n*f*E)*I,e[15]=(c*x*a-S*f*a+S*r*h-n*x*h-c*r*M+n*f*M)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,f=e.y,h=e.z,g=l*c,S=l*f;return this.set(g*c+r,g*f-a*h,g*h+a*f,0,g*f+a*h,S*f+r,S*h-a*c,0,g*h-a*f,S*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,f=n._z,h=n._w,g=l+l,S=c+c,x=f+f,M=l*g,A=l*S,D=l*x,b=c*S,E=c*x,y=f*x,q=h*g,H=h*S,k=h*x,L=r.x,P=r.y,I=r.z;return a[0]=(1-(b+y))*L,a[1]=(A+k)*L,a[2]=(D-H)*L,a[3]=0,a[4]=(A-k)*P,a[5]=(1-(M+y))*P,a[6]=(E+q)*P,a[7]=0,a[8]=(D+H)*I,a[9]=(E-q)*I,a[10]=(1-(M+b))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const c=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const g=1/l,S=1/c,x=1/f;return si.elements[0]*=g,si.elements[1]*=g,si.elements[2]*=g,si.elements[4]*=S,si.elements[5]*=S,si.elements[6]*=S,si.elements[8]*=x,si.elements[9]*=x,si.elements[10]*=x,n.setFromRotationMatrix(si),r.x=l,r.y=c,r.z=f,this}makePerspective(e,n,r,a,l,c,f=zi){const h=this.elements,g=2*l/(n-e),S=2*l/(r-a),x=(n+e)/(n-e),M=(r+a)/(r-a);let A,D;if(f===zi)A=-(c+l)/(c-l),D=-2*c*l/(c-l);else if(f===Vl)A=-c/(c-l),D=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,f=zi){const h=this.elements,g=1/(n-e),S=1/(r-a),x=1/(c-l),M=(n+e)*g,A=(r+a)*S;let D,b;if(f===zi)D=(c+l)*x,b=-2*x;else if(f===Vl)D=l*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-M,h[1]=0,h[5]=2*S,h[9]=0,h[13]=-A,h[2]=0,h[6]=0,h[10]=b,h[14]=-D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new fe,si=new qt,uy=new fe(0,0,0),cy=new fe(1,1,1),_r=new fe,gl=new fe,Hn=new fe,cm=new qt,fm=new ts;class Wi{constructor(e=0,n=0,r=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],g=a[5],S=a[9],x=a[2],M=a[6],A=a[10];switch(n){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-S,A),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(M,g),this._z=0);break;case"YXZ":this._x=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(f,A),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-x,A),this._z=Math.atan2(-c,g)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(M,A),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,g));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,A));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(M,g),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-S,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const dm=new fe,Is=new ts,Ii=new qt,_l=new fe,Bo=new fe,dy=new fe,hy=new ts,hm=new fe(1,0,0),pm=new fe(0,1,0),mm=new fe(0,0,1),gm={type:"added"},py={type:"removed"},Ns={type:"childadded",child:null},Gc={type:"childremoved",child:null};class Un extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new fe,n=new Wi,r=new ts,a=new fe(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new pt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,n){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?_l.copy(e):_l.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Bo,_l,this.up):Ii.lookAt(_l,Bo,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Ii),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(py),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let g=0,S=h.length;g<S;g++){const x=h[g];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,g=this.material.length;h<g;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(n){const f=c(e.geometries),h=c(e.materials),g=c(e.textures),S=c(e.images),x=c(e.shapes),M=c(e.skeletons),A=c(e.animations),D=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),g.length>0&&(r.textures=g),S.length>0&&(r.images=S),x.length>0&&(r.shapes=x),M.length>0&&(r.skeletons=M),A.length>0&&(r.animations=A),D.length>0&&(r.nodes=D)}return r.object=a,r;function c(f){const h=[];for(const g in f){const S=f[g];delete S.metadata,h.push(S)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Un.DEFAULT_UP=new fe(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new fe,Ni=new fe,Wc=new fe,Oi=new fe,Os=new fe,Us=new fe,_m=new fe,jc=new fe,Xc=new fe,qc=new fe,Yc=new Xt,Kc=new Xt,$c=new Xt;class ai{constructor(e=new fe,n=new fe,r=new fe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){oi.subVectors(a,n),Ni.subVectors(r,n),Wc.subVectors(e,n);const c=oi.dot(oi),f=oi.dot(Ni),h=oi.dot(Wc),g=Ni.dot(Ni),S=Ni.dot(Wc),x=c*g-f*f;if(x===0)return l.set(0,0,0),null;const M=1/x,A=(g*h-f*S)*M,D=(c*S-f*h)*M;return l.set(1-A-D,D,A)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,l,c,f,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,a,l,c){return Yc.setScalar(0),Kc.setScalar(0),$c.setScalar(0),Yc.fromBufferAttribute(e,n),Kc.fromBufferAttribute(e,r),$c.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Yc,l.x),c.addScaledVector(Kc,l.y),c.addScaledVector($c,l.z),c}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ni.subVectors(e,n),oi.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,f;Os.subVectors(a,r),Us.subVectors(l,r),jc.subVectors(e,r);const h=Os.dot(jc),g=Us.dot(jc);if(h<=0&&g<=0)return n.copy(r);Xc.subVectors(e,a);const S=Os.dot(Xc),x=Us.dot(Xc);if(S>=0&&x<=S)return n.copy(a);const M=h*x-S*g;if(M<=0&&h>=0&&S<=0)return c=h/(h-S),n.copy(r).addScaledVector(Os,c);qc.subVectors(e,l);const A=Os.dot(qc),D=Us.dot(qc);if(D>=0&&A<=D)return n.copy(l);const b=A*g-h*D;if(b<=0&&g>=0&&D<=0)return f=g/(g-D),n.copy(r).addScaledVector(Us,f);const E=S*D-A*x;if(E<=0&&x-S>=0&&A-D>=0)return _m.subVectors(l,a),f=(x-S)/(x-S+(A-D)),n.copy(a).addScaledVector(_m,f);const y=1/(E+b+M);return c=b*y,f=M*y,n.copy(r).addScaledVector(Os,c).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Zc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=bt.workingColorSpace){return this.r=e,this.g=n,this.b=r,bt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=bt.workingColorSpace){if(e=vd(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Zc(c,l,e+1/3),this.g=Zc(c,l,e),this.b=Zc(c,l,e-1/3)}return bt.toWorkingColorSpace(this,a),this}setStyle(e,n=$n){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=Ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return bt.fromWorkingColorSpace(yn.copy(this),e),Math.round(St(yn.r*255,0,255))*65536+Math.round(St(yn.g*255,0,255))*256+Math.round(St(yn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.fromWorkingColorSpace(yn.copy(this),n);const r=yn.r,a=yn.g,l=yn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,g;const S=(f+c)/2;if(f===c)h=0,g=0;else{const x=c-f;switch(g=S<=.5?x/(c+f):x/(2-c-f),c){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=g,e.l=S,e}getRGB(e,n=bt.workingColorSpace){return bt.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=$n){bt.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,a=yn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(vl);const r=qo(vr.h,vl.h,n),a=qo(vr.s,vl.s,n),l=qo(vr.l,vl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Pt;Pt.NAMES=Ug;let my=0;class Qo extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Xs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Tf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ef&&(r.blendSrc=this.blendSrc),this.blendDst!==Tf&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fg extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new fe,yl=new yt;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=im,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Hs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}}class kg extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class zg extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Vi extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let gy=0;const Kn=new qt,Qc=new Un,Fs=new fe,Vn=new Zo,Ho=new Zo,ln=new fe;class ji extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dg(e)?zg:kg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,r){return Kn.makeTranslation(e,n,r),this.applyMatrix4(Kn),this}scale(e,n,r){return Kn.makeScale(e,n,r),this.applyMatrix4(Kn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Vi(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,Ho.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Ho.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Ho.min),Vn.expandByPoint(Ho.max))}Vn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],h=this.morphTargetsRelative;for(let g=0,S=f.count;g<S;g++)ln.fromBufferAttribute(f,g),h&&(Fs.fromBufferAttribute(e,g),ln.add(Fs)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<r.count;V++)f[V]=new fe,h[V]=new fe;const g=new fe,S=new fe,x=new fe,M=new yt,A=new yt,D=new yt,b=new fe,E=new fe;function y(V,T,m){g.fromBufferAttribute(r,V),S.fromBufferAttribute(r,T),x.fromBufferAttribute(r,m),M.fromBufferAttribute(l,V),A.fromBufferAttribute(l,T),D.fromBufferAttribute(l,m),S.sub(g),x.sub(g),A.sub(M),D.sub(M);const O=1/(A.x*D.y-D.x*A.y);isFinite(O)&&(b.copy(S).multiplyScalar(D.y).addScaledVector(x,-A.y).multiplyScalar(O),E.copy(x).multiplyScalar(A.x).addScaledVector(S,-D.x).multiplyScalar(O),f[V].add(b),f[T].add(b),f[m].add(b),h[V].add(E),h[T].add(E),h[m].add(E))}let q=this.groups;q.length===0&&(q=[{start:0,count:e.count}]);for(let V=0,T=q.length;V<T;++V){const m=q[V],O=m.start,K=m.count;for(let F=O,G=O+K;F<G;F+=3)y(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const H=new fe,k=new fe,L=new fe,P=new fe;function I(V){L.fromBufferAttribute(a,V),P.copy(L);const T=f[V];H.copy(T),H.sub(L.multiplyScalar(L.dot(T))).normalize(),k.crossVectors(P,T);const O=k.dot(h[V])<0?-1:1;c.setXYZW(V,H.x,H.y,H.z,O)}for(let V=0,T=q.length;V<T;++V){const m=q[V],O=m.start,K=m.count;for(let F=O,G=O+K;F<G;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let M=0,A=r.count;M<A;M++)r.setXYZ(M,0,0,0);const a=new fe,l=new fe,c=new fe,f=new fe,h=new fe,g=new fe,S=new fe,x=new fe;if(e)for(let M=0,A=e.count;M<A;M+=3){const D=e.getX(M+0),b=e.getX(M+1),E=e.getX(M+2);a.fromBufferAttribute(n,D),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),S.subVectors(c,l),x.subVectors(a,l),S.cross(x),f.fromBufferAttribute(r,D),h.fromBufferAttribute(r,b),g.fromBufferAttribute(r,E),f.add(S),h.add(S),g.add(S),r.setXYZ(D,f.x,f.y,f.z),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(E,g.x,g.y,g.z)}else for(let M=0,A=n.count;M<A;M+=3)a.fromBufferAttribute(n,M+0),l.fromBufferAttribute(n,M+1),c.fromBufferAttribute(n,M+2),S.subVectors(c,l),x.subVectors(a,l),S.cross(x),r.setXYZ(M+0,S.x,S.y,S.z),r.setXYZ(M+1,S.x,S.y,S.z),r.setXYZ(M+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const g=f.array,S=f.itemSize,x=f.normalized,M=new g.constructor(h.length*S);let A=0,D=0;for(let b=0,E=h.length;b<E;b++){f.isInterleavedBufferAttribute?A=h[b]*f.data.stride+f.offset:A=h[b]*S;for(let y=0;y<S;y++)M[D++]=g[A++]}return new vi(M,S,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ji,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],g=e(h,r);n.setAttribute(f,g)}const l=this.morphAttributes;for(const f in l){const h=[],g=l[f];for(let S=0,x=g.length;S<x;S++){const M=g[S],A=e(M,r);h.push(A)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const g=c[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const g=r[h];e.data.attributes[h]=g.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],S=[];for(let x=0,M=g.length;x<M;x++){const A=g[x];S.push(A.toJSON(e.data))}S.length>0&&(a[h]=S,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const S=a[g];this.setAttribute(g,S.clone(n))}const l=e.morphAttributes;for(const g in l){const S=[],x=l[g];for(let M=0,A=x.length;M<A;M++)S.push(x[M].clone(n));this.morphAttributes[g]=S}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let g=0,S=c.length;g<S;g++){const x=c[g];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new qt,Vr=new yd,Sl=new ql,ym=new fe,xl=new fe,Ml=new fe,El=new fe,Jc=new fe,Tl=new fe,Sm=new fe,wl=new fe;class Bi extends Un{constructor(e=new ji,n=new Fg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Tl.set(0,0,0);for(let h=0,g=l.length;h<g;h++){const S=f[h],x=l[h];S!==0&&(Jc.fromBufferAttribute(x,e),c?Tl.addScaledVector(Jc,S):Tl.addScaledVector(Jc.sub(n),S))}n.add(Tl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Sl,ym)===null||Vr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(vm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,g=l.attributes.uv,S=l.attributes.uv1,x=l.attributes.normal,M=l.groups,A=l.drawRange;if(f!==null)if(Array.isArray(c))for(let D=0,b=M.length;D<b;D++){const E=M[D],y=c[E.materialIndex],q=Math.max(E.start,A.start),H=Math.min(f.count,Math.min(E.start+E.count,A.start+A.count));for(let k=q,L=H;k<L;k+=3){const P=f.getX(k),I=f.getX(k+1),V=f.getX(k+2);a=Al(this,y,e,r,g,S,x,P,I,V),a&&(a.faceIndex=Math.floor(k/3),a.face.materialIndex=E.materialIndex,n.push(a))}}else{const D=Math.max(0,A.start),b=Math.min(f.count,A.start+A.count);for(let E=D,y=b;E<y;E+=3){const q=f.getX(E),H=f.getX(E+1),k=f.getX(E+2);a=Al(this,c,e,r,g,S,x,q,H,k),a&&(a.faceIndex=Math.floor(E/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let D=0,b=M.length;D<b;D++){const E=M[D],y=c[E.materialIndex],q=Math.max(E.start,A.start),H=Math.min(h.count,Math.min(E.start+E.count,A.start+A.count));for(let k=q,L=H;k<L;k+=3){const P=k,I=k+1,V=k+2;a=Al(this,y,e,r,g,S,x,P,I,V),a&&(a.faceIndex=Math.floor(k/3),a.face.materialIndex=E.materialIndex,n.push(a))}}else{const D=Math.max(0,A.start),b=Math.min(h.count,A.start+A.count);for(let E=D,y=b;E<y;E+=3){const q=E,H=E+1,k=E+2;a=Al(this,c,e,r,g,S,x,q,H,k),a&&(a.faceIndex=Math.floor(E/3),n.push(a))}}}}function _y(s,e,n,r,a,l,c,f){let h;if(e.side===Nn?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===Tr,f),h===null)return null;wl.copy(f),wl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(wl);return g<n.near||g>n.far?null:{distance:g,point:wl.clone(),object:s}}function Al(s,e,n,r,a,l,c,f,h,g){s.getVertexPosition(f,xl),s.getVertexPosition(h,Ml),s.getVertexPosition(g,El);const S=_y(s,e,n,r,xl,Ml,El,Sm);if(S){const x=new fe;ai.getBarycoord(Sm,xl,Ml,El,x),a&&(S.uv=ai.getInterpolatedAttribute(a,f,h,g,x,new yt)),l&&(S.uv1=ai.getInterpolatedAttribute(l,f,h,g,x,new yt)),c&&(S.normal=ai.getInterpolatedAttribute(c,f,h,g,x,new fe),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const M={a:f,b:h,c:g,normal:new fe,materialIndex:0};ai.getNormal(xl,Ml,El,M.normal),S.face=M,S.barycoord=x}return S}class Jo extends ji{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],g=[],S=[],x=[];let M=0,A=0;D("z","y","x",-1,-1,r,n,e,c,l,0),D("z","y","x",1,-1,r,n,-e,c,l,1),D("x","z","y",1,1,e,r,n,a,c,2),D("x","z","y",1,-1,e,r,-n,a,c,3),D("x","y","z",1,-1,e,n,r,a,l,4),D("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Vi(g,3)),this.setAttribute("normal",new Vi(S,3)),this.setAttribute("uv",new Vi(x,2));function D(b,E,y,q,H,k,L,P,I,V,T){const m=k/I,O=L/V,K=k/2,F=L/2,G=P/2,ee=I+1,Z=V+1;let v=0,Y=0;const U=new fe;for(let _=0;_<Z;_++){const w=_*O-F;for(let B=0;B<ee;B++){const ce=B*m-K;U[b]=ce*q,U[E]=w*H,U[y]=G,g.push(U.x,U.y,U.z),U[b]=0,U[E]=0,U[y]=P>0?1:-1,S.push(U.x,U.y,U.z),x.push(B/I),x.push(1-_/V),v+=1}}for(let _=0;_<V;_++)for(let w=0;w<I;w++){const B=M+w+ee*_,ce=M+w+ee*(_+1),j=M+(w+1)+ee*(_+1),J=M+(w+1)+ee*_;h.push(B,ce,J),h.push(ce,j,J),Y+=6}f.addGroup(A,Y,T),A+=Y,M+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function wn(s){const e={};for(let n=0;n<s.length;n++){const r=to(s[n]);for(const a in r)e[a]=r[a]}return e}function vy(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Bg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const yy={clone:to,merge:wn};var Sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sy,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Hg extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new fe,xm=new yt,Mm=new yt;class Zn extends Hg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,xm,Mm),n.subVectors(Mm,xm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xo*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,g=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*r/g,a*=c.width/h,r*=c.height/g}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,zs=1;class My extends Un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(ks,zs,e,n);a.layers=this.layers,this.add(a);const l=new Zn(ks,zs,e,n);l.layers=this.layers,this.add(l);const c=new Zn(ks,zs,e,n);c.layers=this.layers,this.add(c);const f=new Zn(ks,zs,e,n);f.layers=this.layers,this.add(f);const h=new Zn(ks,zs,e,n);h.layers=this.layers,this.add(h);const g=new Zn(ks,zs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,f,h]=n;for(const g of n)this.remove(g);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,g,S]=this.children,x=e.getRenderTarget(),M=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),D=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(n,S),e.setRenderTarget(x,M,A),e.xr.enabled=D,r.texture.needsPMREMUpdate=!0}}class Vg extends On{constructor(e,n,r,a,l,c,f,h,g,S){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,r,a,l,c,f,h,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ey extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Vg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jo(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:Mr});l.uniforms.tEquirect.value=n;const c=new Bi(a,l),f=n.minFilter;return n.minFilter===Zr&&(n.minFilter=_i),new My(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class Ty extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ef=new fe,wy=new fe,Ay=new pt;class Sr{constructor(e=new fe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=ef.subVectors(r,n).cross(wy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(ef),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Ay.getNormalMatrix(e),a=this.coplanarPoint(ef).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new ql,Rl=new fe;class Gg{constructor(e=new Sr,n=new Sr,r=new Sr,a=new Sr,l=new Sr,c=new Sr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],g=a[4],S=a[5],x=a[6],M=a[7],A=a[8],D=a[9],b=a[10],E=a[11],y=a[12],q=a[13],H=a[14],k=a[15];if(r[0].setComponents(h-l,M-g,E-A,k-y).normalize(),r[1].setComponents(h+l,M+g,E+A,k+y).normalize(),r[2].setComponents(h+c,M+S,E+D,k+q).normalize(),r[3].setComponents(h-c,M-S,E-D,k-q).normalize(),r[4].setComponents(h-f,M-x,E-b,k-H).normalize(),n===zi)r[5].setComponents(h+f,M+x,E+b,k+H).normalize();else if(n===Vl)r[5].setComponents(f,x,b,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Rl.x=a.normal.x>0?e.max.x:e.min.x,Rl.y=a.normal.y>0?e.max.y:e.min.y,Rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wg extends Qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Em=new qt,ld=new yd,bl=new ql,Cl=new fe;class Ry extends Un{constructor(e=new ji,n=new Wg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(a),bl.radius+=l,e.ray.intersectsSphere(bl)===!1)return;Em.copy(a).invert(),ld.copy(e.ray).applyMatrix4(Em);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,g=r.index,x=r.attributes.position;if(g!==null){const M=Math.max(0,c.start),A=Math.min(g.count,c.start+c.count);for(let D=M,b=A;D<b;D++){const E=g.getX(D);Cl.fromBufferAttribute(x,E),Tm(Cl,E,h,a,e,n,this)}}else{const M=Math.max(0,c.start),A=Math.min(x.count,c.start+c.count);for(let D=M,b=A;D<b;D++)Cl.fromBufferAttribute(x,D),Tm(Cl,D,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Tm(s,e,n,r,a,l,c){const f=ld.distanceSqToPoint(s);if(f<n){const h=new fe;ld.closestPointToPoint(s,h),h.applyMatrix4(r);const g=a.ray.origin.distanceTo(h);if(g<a.near||g>a.far)return;l.push({distance:g,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Pl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class jg extends On{constructor(e,n,r,a,l,c,f,h,g,S=qs){if(S!==qs&&S!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&S===qs&&(r=Jr),r===void 0&&S===Js&&(r=Qs),super(null,a,l,c,f,h,S,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ui,this.minFilter=h!==void 0?h:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Yl extends ji{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,f=Math.floor(r),h=Math.floor(a),g=f+1,S=h+1,x=e/f,M=n/h,A=[],D=[],b=[],E=[];for(let y=0;y<S;y++){const q=y*M-c;for(let H=0;H<g;H++){const k=H*x-l;D.push(k,-q,0),b.push(0,0,1),E.push(H/f),E.push(1-y/h)}}for(let y=0;y<h;y++)for(let q=0;q<f;q++){const H=q+g*y,k=q+g*(y+1),L=q+1+g*(y+1),P=q+1+g*y;A.push(H,k,P),A.push(k,L,P)}this.setIndex(A),this.setAttribute("position",new Vi(D,3)),this.setAttribute("normal",new Vi(b,3)),this.setAttribute("uv",new Vi(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class by extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Py extends Hg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,c=l+g*this.view.width,f-=S*this.view.offsetY,h=f-S*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ly extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=St(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(St(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dy extends ns{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Am(s,e,n,r){const a=Iy(r);switch(n){case Tg:return s*e;case Ag:return s*e;case Rg:return s*e*2;case bg:return s*e/a.components*a.byteLength;case md:return s*e/a.components*a.byteLength;case Cg:return s*e*2/a.components*a.byteLength;case gd:return s*e*2/a.components*a.byteLength;case wg:return s*e*3/a.components*a.byteLength;case li:return s*e*4/a.components*a.byteLength;case _d:return s*e*4/a.components*a.byteLength;case Ol:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:case zf:return Math.max(s,16)*Math.max(e,8)/4;case Uf:case kf:return Math.max(s,8)*Math.max(e,8)/2;case Bf:case Hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case id:case rd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pg:case sd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case od:case ad:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Iy(s){switch(s){case Gi:case xg:return{byteLength:1,components:1};case Yo:case Mg:case $o:return{byteLength:2,components:1};case hd:case pd:return{byteLength:2,components:4};case Jr:case dd:case ki:return{byteLength:4,components:1};case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xg(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Ny(s){const e=new WeakMap;function n(f,h){const g=f.array,S=f.usage,x=g.byteLength,M=s.createBuffer();s.bindBuffer(h,M),s.bufferData(h,g,S),f.onUploadCallback();let A;if(g instanceof Float32Array)A=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?A=s.HALF_FLOAT:A=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=s.SHORT;else if(g instanceof Uint32Array)A=s.UNSIGNED_INT;else if(g instanceof Int32Array)A=s.INT;else if(g instanceof Int8Array)A=s.BYTE;else if(g instanceof Uint8Array)A=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,g){const S=h.array,x=h.updateRanges;if(s.bindBuffer(g,f),x.length===0)s.bufferSubData(g,0,S);else{x.sort((A,D)=>A.start-D.start);let M=0;for(let A=1;A<x.length;A++){const D=x[M],b=x[A];b.start<=D.start+D.count+1?D.count=Math.max(D.count,b.start+b.count-D.start):(++M,x[M]=b)}x.length=M+1;for(let A=0,D=x.length;A<D;A++){const b=x[A];s.bufferSubData(g,b.start*S.BYTES_PER_ELEMENT,S,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const S=e.get(f);(!S||S.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,h));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,h),g.version=f.version}}return{get:a,remove:l,update:c}}var Oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uy=`#ifdef USE_ALPHAHASH
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
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hy=`#ifdef USE_AOMAP
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
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
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
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ky=`#ifdef USE_BUMPMAP
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
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rS=`#define PI 3.141592653589793
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
} // validated`,sS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oS=`vec3 transformedNormal = objectNormal;
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
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fS="gl_FragColor = linearToOutputTexel( gl_FragColor );",dS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hS=`#ifdef USE_ENVMAP
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
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mS=`#ifdef USE_ENVMAP
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
#endif`,gS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MS=`#ifdef USE_GRADIENTMAP
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
}`,ES=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AS=`uniform bool receiveShadow;
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
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DS=`PhysicalMaterial material;
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
#endif`,IS=`struct PhysicalMaterial {
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
}`,NS=`
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
#endif`,OS=`#if defined( RE_IndirectDiffuse )
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
#endif`,US=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WS=`#if defined( USE_POINTS_UV )
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
#endif`,jS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
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
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vx=`#define DISTANCE
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
}`,Gx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,Zx=`#define LAMBERT
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
}`,Qx=`#define MATCAP
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
}`,Jx=`#define MATCAP
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
}`,eM=`#define NORMAL
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
}`,tM=`#define NORMAL
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
}`,nM=`#define PHONG
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
}`,iM=`#define PHONG
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
}`,rM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
}`,oM=`#define TOON
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
}`,aM=`#define TOON
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
}`,lM=`uniform float size;
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
}`,uM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,fM=`uniform vec3 color;
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
}`,dM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Oy,alphahash_pars_fragment:Uy,alphamap_fragment:Fy,alphamap_pars_fragment:ky,alphatest_fragment:zy,alphatest_pars_fragment:By,aomap_fragment:Hy,aomap_pars_fragment:Vy,batching_pars_vertex:Gy,batching_vertex:Wy,begin_vertex:jy,beginnormal_vertex:Xy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:Ky,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Qy,clipping_planes_vertex:Jy,color_fragment:eS,color_pars_fragment:tS,color_pars_vertex:nS,color_vertex:iS,common:rS,cube_uv_reflection_fragment:sS,defaultnormal_vertex:oS,displacementmap_pars_vertex:aS,displacementmap_vertex:lS,emissivemap_fragment:uS,emissivemap_pars_fragment:cS,colorspace_fragment:fS,colorspace_pars_fragment:dS,envmap_fragment:hS,envmap_common_pars_fragment:pS,envmap_pars_fragment:mS,envmap_pars_vertex:gS,envmap_physical_pars_fragment:RS,envmap_vertex:_S,fog_vertex:vS,fog_pars_vertex:yS,fog_fragment:SS,fog_pars_fragment:xS,gradientmap_pars_fragment:MS,lightmap_pars_fragment:ES,lights_lambert_fragment:TS,lights_lambert_pars_fragment:wS,lights_pars_begin:AS,lights_toon_fragment:bS,lights_toon_pars_fragment:CS,lights_phong_fragment:PS,lights_phong_pars_fragment:LS,lights_physical_fragment:DS,lights_physical_pars_fragment:IS,lights_fragment_begin:NS,lights_fragment_maps:OS,lights_fragment_end:US,logdepthbuf_fragment:FS,logdepthbuf_pars_fragment:kS,logdepthbuf_pars_vertex:zS,logdepthbuf_vertex:BS,map_fragment:HS,map_pars_fragment:VS,map_particle_fragment:GS,map_particle_pars_fragment:WS,metalnessmap_fragment:jS,metalnessmap_pars_fragment:XS,morphinstance_vertex:qS,morphcolor_vertex:YS,morphnormal_vertex:KS,morphtarget_pars_vertex:$S,morphtarget_vertex:ZS,normal_fragment_begin:QS,normal_fragment_maps:JS,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:ax,opaque_fragment:lx,packing:ux,premultiplied_alpha_fragment:cx,project_vertex:fx,dithering_fragment:dx,dithering_pars_fragment:hx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:vx,shadowmask_pars_fragment:yx,skinbase_vertex:Sx,skinning_pars_vertex:xx,skinning_vertex:Mx,skinnormal_vertex:Ex,specularmap_fragment:Tx,specularmap_pars_fragment:wx,tonemapping_fragment:Ax,tonemapping_pars_fragment:Rx,transmission_fragment:bx,transmission_pars_fragment:Cx,uv_pars_fragment:Px,uv_pars_vertex:Lx,uv_vertex:Dx,worldpos_vertex:Ix,background_vert:Nx,background_frag:Ox,backgroundCube_vert:Ux,backgroundCube_frag:Fx,cube_vert:kx,cube_frag:zx,depth_vert:Bx,depth_frag:Hx,distanceRGBA_vert:Vx,distanceRGBA_frag:Gx,equirect_vert:Wx,equirect_frag:jx,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:Yx,meshbasic_frag:Kx,meshlambert_vert:$x,meshlambert_frag:Zx,meshmatcap_vert:Qx,meshmatcap_frag:Jx,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:rM,meshphysical_frag:sM,meshtoon_vert:oM,meshtoon_frag:aM,points_vert:lM,points_frag:uM,shadow_vert:cM,shadow_frag:fM,sprite_vert:dM,sprite_frag:hM},Oe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},gi={basic:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:wn([Oe.common,Oe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:wn([Oe.lights,Oe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};gi.physical={uniforms:wn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ll={r:0,b:0,g:0},Wr=new Wi,pM=new qt;function mM(s,e,n,r,a,l,c){const f=new Pt(0);let h=l===!0?0:1,g,S,x=null,M=0,A=null;function D(H){let k=H.isScene===!0?H.background:null;return k&&k.isTexture&&(k=(H.backgroundBlurriness>0?n:e).get(k)),k}function b(H){let k=!1;const L=D(H);L===null?y(f,h):L&&L.isColor&&(y(L,1),k=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||k)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(H,k){const L=D(k);L&&(L.isCubeTexture||L.mapping===Xl)?(S===void 0&&(S=new Bi(new Jo(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:to(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(P,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(S)),Wr.copy(k.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),S.material.uniforms.envMap.value=L,S.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(Wr)),S.material.toneMapped=bt.getTransfer(L.colorSpace)!==Lt,(x!==L||M!==L.version||A!==s.toneMapping)&&(S.material.needsUpdate=!0,x=L,M=L.version,A=s.toneMapping),S.layers.enableAll(),H.unshift(S,S.geometry,S.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new Bi(new Yl(2,2),new wr({name:"BackgroundMaterial",uniforms:to(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,g.material.toneMapped=bt.getTransfer(L.colorSpace)!==Lt,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||M!==L.version||A!==s.toneMapping)&&(g.material.needsUpdate=!0,x=L,M=L.version,A=s.toneMapping),g.layers.enableAll(),H.unshift(g,g.geometry,g.material,0,0,null))}function y(H,k){H.getRGB(Ll,Bg(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,k,c)}function q(){S!==void 0&&(S.geometry.dispose(),S.material.dispose()),g!==void 0&&(g.geometry.dispose(),g.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(H,k=1){f.set(H),h=k,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(H){h=H,y(f,h)},render:b,addToRenderList:E,dispose:q}}function gM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=M(null);let l=a,c=!1;function f(m,O,K,F,G){let ee=!1;const Z=x(F,K,O);l!==Z&&(l=Z,g(l.object)),ee=A(m,F,K,G),ee&&D(m,F,K,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,k(m,O,K,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return s.createVertexArray()}function g(m){return s.bindVertexArray(m)}function S(m){return s.deleteVertexArray(m)}function x(m,O,K){const F=K.wireframe===!0;let G=r[m.id];G===void 0&&(G={},r[m.id]=G);let ee=G[O.id];ee===void 0&&(ee={},G[O.id]=ee);let Z=ee[F];return Z===void 0&&(Z=M(h()),ee[F]=Z),Z}function M(m){const O=[],K=[],F=[];for(let G=0;G<n;G++)O[G]=0,K[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:F,object:m,attributes:{},index:null}}function A(m,O,K,F){const G=l.attributes,ee=O.attributes;let Z=0;const v=K.getAttributes();for(const Y in v)if(v[Y].location>=0){const _=G[Y];let w=ee[Y];if(w===void 0&&(Y==="instanceMatrix"&&m.instanceMatrix&&(w=m.instanceMatrix),Y==="instanceColor"&&m.instanceColor&&(w=m.instanceColor)),_===void 0||_.attribute!==w||w&&_.data!==w.data)return!0;Z++}return l.attributesNum!==Z||l.index!==F}function D(m,O,K,F){const G={},ee=O.attributes;let Z=0;const v=K.getAttributes();for(const Y in v)if(v[Y].location>=0){let _=ee[Y];_===void 0&&(Y==="instanceMatrix"&&m.instanceMatrix&&(_=m.instanceMatrix),Y==="instanceColor"&&m.instanceColor&&(_=m.instanceColor));const w={};w.attribute=_,_&&_.data&&(w.data=_.data),G[Y]=w,Z++}l.attributes=G,l.attributesNum=Z,l.index=F}function b(){const m=l.newAttributes;for(let O=0,K=m.length;O<K;O++)m[O]=0}function E(m){y(m,0)}function y(m,O){const K=l.newAttributes,F=l.enabledAttributes,G=l.attributeDivisors;K[m]=1,F[m]===0&&(s.enableVertexAttribArray(m),F[m]=1),G[m]!==O&&(s.vertexAttribDivisor(m,O),G[m]=O)}function q(){const m=l.newAttributes,O=l.enabledAttributes;for(let K=0,F=O.length;K<F;K++)O[K]!==m[K]&&(s.disableVertexAttribArray(K),O[K]=0)}function H(m,O,K,F,G,ee,Z){Z===!0?s.vertexAttribIPointer(m,O,K,G,ee):s.vertexAttribPointer(m,O,K,F,G,ee)}function k(m,O,K,F){b();const G=F.attributes,ee=K.getAttributes(),Z=O.defaultAttributeValues;for(const v in ee){const Y=ee[v];if(Y.location>=0){let U=G[v];if(U===void 0&&(v==="instanceMatrix"&&m.instanceMatrix&&(U=m.instanceMatrix),v==="instanceColor"&&m.instanceColor&&(U=m.instanceColor)),U!==void 0){const _=U.normalized,w=U.itemSize,B=e.get(U);if(B===void 0)continue;const ce=B.buffer,j=B.type,J=B.bytesPerElement,ie=j===s.INT||j===s.UNSIGNED_INT||U.gpuType===dd;if(U.isInterleavedBufferAttribute){const se=U.data,ge=se.stride,Se=U.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<Y.locationSize;Re++)y(Y.location+Re,se.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<Y.locationSize;Re++)E(Y.location+Re);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Re=0;Re<Y.locationSize;Re++)H(Y.location+Re,w/Y.locationSize,j,_,ge*J,(Se+w/Y.locationSize*Re)*J,ie)}else{if(U.isInstancedBufferAttribute){for(let se=0;se<Y.locationSize;se++)y(Y.location+se,U.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let se=0;se<Y.locationSize;se++)E(Y.location+se);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let se=0;se<Y.locationSize;se++)H(Y.location+se,w/Y.locationSize,j,_,w*J,w/Y.locationSize*se*J,ie)}}else if(Z!==void 0){const _=Z[v];if(_!==void 0)switch(_.length){case 2:s.vertexAttrib2fv(Y.location,_);break;case 3:s.vertexAttrib3fv(Y.location,_);break;case 4:s.vertexAttrib4fv(Y.location,_);break;default:s.vertexAttrib1fv(Y.location,_)}}}}q()}function L(){V();for(const m in r){const O=r[m];for(const K in O){const F=O[K];for(const G in F)S(F[G].object),delete F[G];delete O[K]}delete r[m]}}function P(m){if(r[m.id]===void 0)return;const O=r[m.id];for(const K in O){const F=O[K];for(const G in F)S(F[G].object),delete F[G];delete O[K]}delete r[m.id]}function I(m){for(const O in r){const K=r[O];if(K[m.id]===void 0)continue;const F=K[m.id];for(const G in F)S(F[G].object),delete F[G];delete K[m.id]}}function V(){T(),c=!0,l!==a&&(l=a,g(l.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:E,disableUnusedAttributes:q}}function _M(s,e,n){let r;function a(g){r=g}function l(g,S){s.drawArrays(r,g,S),n.update(S,r,1)}function c(g,S,x){x!==0&&(s.drawArraysInstanced(r,g,S,x),n.update(S,r,x))}function f(g,S,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,S,0,x);let A=0;for(let D=0;D<x;D++)A+=S[D];n.update(A,r,1)}function h(g,S,x,M){if(x===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let D=0;D<g.length;D++)c(g[D],S[D],M[D]);else{A.multiDrawArraysInstancedWEBGL(r,g,0,S,0,M,0,x);let D=0;for(let b=0;b<x;b++)D+=S[b]*M[b];n.update(D,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function vM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==li&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const V=I===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Gi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ki&&!V)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const S=h(g);S!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const x=n.logarithmicDepthBuffer===!0,M=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),A=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),q=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),H=s.getParameter(s.MAX_VARYING_VECTORS),k=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=D>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:x,reverseDepthBuffer:M,maxTextures:A,maxVertexTextures:D,maxTextureSize:b,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:q,maxVaryings:H,maxFragmentUniforms:k,vertexTextures:L,maxSamples:P}}function yM(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Sr,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,M){const A=x.length!==0||M||r!==0||a;return a=M,r=x.length,A},this.beginShadows=function(){l=!0,S(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,M){n=S(x,M,0)},this.setState=function(x,M,A){const D=x.clippingPlanes,b=x.clipIntersection,E=x.clipShadows,y=s.get(x);if(!a||D===null||D.length===0||l&&!E)l?S(null):g();else{const q=l?0:r,H=q*4;let k=y.clippingState||null;h.value=k,k=S(D,M,H,A);for(let L=0;L!==H;++L)k[L]=n[L];y.clippingState=k,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=q}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(x,M,A,D){const b=x!==null?x.length:0;let E=null;if(b!==0){if(E=h.value,D!==!0||E===null){const y=A+b*4,q=M.matrixWorldInverse;f.getNormalMatrix(q),(E===null||E.length<y)&&(E=new Float32Array(y));for(let H=0,k=A;H!==b;++H,k+=4)c.copy(x[H]).applyMatrix4(q,f),c.normal.toArray(E,k),E[k+3]=c.constant}h.value=E,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,E}}function SM(s){let e=new WeakMap;function n(c,f){return f===Df?c.mapping=$s:f===If&&(c.mapping=Zs),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Df||f===If)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const g=new Ey(h.height);return g.fromEquirectangularTexture(s,c),e.set(c,g),c.addEventListener("dispose",a),n(g.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ws=4,Rm=[.125,.215,.35,.446,.526,.582],Kr=20,tf=new Py,bm=new Pt;let nf=null,rf=0,sf=0,of=!1;const qr=(1+Math.sqrt(5))/2,Bs=1/qr,Cm=[new fe(-qr,Bs,0),new fe(qr,Bs,0),new fe(-Bs,0,qr),new fe(Bs,0,qr),new fe(0,qr,-Bs),new fe(0,qr,Bs),new fe(-1,1,-1),new fe(1,1,-1),new fe(-1,1,1),new fe(1,1,1)];class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nf,rf,sf),this._renderer.xr.enabled=of,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:$o,format:li,colorSpace:eo,depthBuffer:!1},a=Lm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(l)),this._blurMaterial=MM(l,e,n)}return a}_compileMaterial(e){const n=new Bi(this._lodPlanes[0],e);this._renderer.compile(n,tf)}_sceneToCubeUV(e,n,r,a){const f=new Zn(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(bm),S.toneMapping=Er,S.autoClear=!1;const A=new Fg({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),D=new Bi(new Jo,A);let b=!1;const E=e.background;E?E.isColor&&(A.color.copy(E),e.background=null,b=!0):(A.color.copy(bm),b=!0);for(let y=0;y<6;y++){const q=y%3;q===0?(f.up.set(0,h[y],0),f.lookAt(g[y],0,0)):q===1?(f.up.set(0,0,h[y]),f.lookAt(0,g[y],0)):(f.up.set(0,h[y],0),f.lookAt(0,0,g[y]));const H=this._cubeSize;Dl(a,q*H,y>2?H:0,H,H),S.setRenderTarget(a),b&&S.render(D,f),S.render(e,f)}D.geometry.dispose(),D.material.dispose(),S.toneMapping=M,S.autoClear=x,e.background=E}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===$s||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Bi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Dl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,tf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Cm[(a-l-1)%Cm.length];this._blur(e,l-1,l,c,f)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,f){const h=this._renderer,g=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,x=new Bi(this._lodPlanes[a],g),M=g.uniforms,A=this._sizeLods[r]-1,D=isFinite(l)?Math.PI/(2*A):2*Math.PI/(2*Kr-1),b=l/D,E=isFinite(l)?1+Math.floor(S*b):Kr;E>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Kr}`);const y=[];let q=0;for(let I=0;I<Kr;++I){const V=I/b,T=Math.exp(-V*V/2);y.push(T),I===0?q+=T:I<E&&(q+=2*T)}for(let I=0;I<y.length;I++)y[I]=y[I]/q;M.envMap.value=e.texture,M.samples.value=E,M.weights.value=y,M.latitudinal.value=c==="latitudinal",f&&(M.poleAxis.value=f);const{_lodMax:H}=this;M.dTheta.value=D,M.mipInt.value=H-r;const k=this._sizeLods[a],L=3*k*(a>H-Ws?a-H+Ws:0),P=4*(this._cubeSize-k);Dl(n,L,P,3*k,2*k),h.setRenderTarget(n),h.render(x,tf)}}function xM(s){const e=[],n=[],r=[];let a=s;const l=s-Ws+1+Rm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);n.push(f);let h=1/f;c>s-Ws?h=Rm[c-s+Ws-1]:c===0&&(h=0),r.push(h);const g=1/(f-2),S=-g,x=1+g,M=[S,S,x,S,x,x,S,S,x,x,S,x],A=6,D=6,b=3,E=2,y=1,q=new Float32Array(b*D*A),H=new Float32Array(E*D*A),k=new Float32Array(y*D*A);for(let P=0;P<A;P++){const I=P%3*2/3-1,V=P>2?0:-1,T=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];q.set(T,b*D*P),H.set(M,E*D*P);const m=[P,P,P,P,P,P];k.set(m,y*D*P)}const L=new ji;L.setAttribute("position",new vi(q,b)),L.setAttribute("uv",new vi(H,E)),L.setAttribute("faceIndex",new vi(k,y)),e.push(L),a>Ws&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Lm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function MM(s,e,n){const r=new Float32Array(Kr),a=new fe(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Dm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Im(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Sd(){return`

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
	`}function EM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,g=h===Df||h===If,S=h===$s||h===Zs;if(g||S){let x=e.get(f);const M=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==M)return n===null&&(n=new Pm(s)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const A=f.image;return g&&A&&A.height>0||S&&A&&a(A)?(n===null&&(n=new Pm(s)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let h=0;const g=6;for(let S=0;S<g;S++)f[S]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function TM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Vs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function wM(s,e,n,r){const a={},l=new WeakMap;function c(x){const M=x.target;M.index!==null&&e.remove(M.index);for(const D in M.attributes)e.remove(M.attributes[D]);M.removeEventListener("dispose",c),delete a[M.id];const A=l.get(M);A&&(e.remove(A),l.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,n.memory.geometries--}function f(x,M){return a[M.id]===!0||(M.addEventListener("dispose",c),a[M.id]=!0,n.memory.geometries++),M}function h(x){const M=x.attributes;for(const A in M)e.update(M[A],s.ARRAY_BUFFER)}function g(x){const M=[],A=x.index,D=x.attributes.position;let b=0;if(A!==null){const q=A.array;b=A.version;for(let H=0,k=q.length;H<k;H+=3){const L=q[H+0],P=q[H+1],I=q[H+2];M.push(L,P,P,I,I,L)}}else if(D!==void 0){const q=D.array;b=D.version;for(let H=0,k=q.length/3-1;H<k;H+=3){const L=H+0,P=H+1,I=H+2;M.push(L,P,P,I,I,L)}}else return;const E=new(Dg(M)?zg:kg)(M,1);E.version=b;const y=l.get(x);y&&e.remove(y),l.set(x,E)}function S(x){const M=l.get(x);if(M){const A=x.index;A!==null&&M.version<A.version&&g(x)}else g(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:S}}function AM(s,e,n){let r;function a(M){r=M}let l,c;function f(M){l=M.type,c=M.bytesPerElement}function h(M,A){s.drawElements(r,A,l,M*c),n.update(A,r,1)}function g(M,A,D){D!==0&&(s.drawElementsInstanced(r,A,l,M*c,D),n.update(A,r,D))}function S(M,A,D){if(D===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,l,M,0,D);let E=0;for(let y=0;y<D;y++)E+=A[y];n.update(E,r,1)}function x(M,A,D,b){if(D===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<M.length;y++)g(M[y]/c,A[y],b[y]);else{E.multiDrawElementsInstancedWEBGL(r,A,0,l,M,0,b,0,D);let y=0;for(let q=0;q<D;q++)y+=A[q]*b[q];n.update(y,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=g,this.renderMultiDraw=S,this.renderMultiDrawInstances=x}function RM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function bM(s,e,n){const r=new WeakMap,a=new Xt;function l(c,f,h){const g=c.morphTargetInfluences,S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=S!==void 0?S.length:0;let M=r.get(f);if(M===void 0||M.count!==x){let m=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",m)};var A=m;M!==void 0&&M.texture.dispose();const D=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],q=f.morphAttributes.normal||[],H=f.morphAttributes.color||[];let k=0;D===!0&&(k=1),b===!0&&(k=2),E===!0&&(k=3);let L=f.attributes.position.count*k,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*P*4*x),V=new Ng(I,L,P,x);V.type=ki,V.needsUpdate=!0;const T=k*4;for(let O=0;O<x;O++){const K=y[O],F=q[O],G=H[O],ee=L*P*4*O;for(let Z=0;Z<K.count;Z++){const v=Z*T;D===!0&&(a.fromBufferAttribute(K,Z),I[ee+v+0]=a.x,I[ee+v+1]=a.y,I[ee+v+2]=a.z,I[ee+v+3]=0),b===!0&&(a.fromBufferAttribute(F,Z),I[ee+v+4]=a.x,I[ee+v+5]=a.y,I[ee+v+6]=a.z,I[ee+v+7]=0),E===!0&&(a.fromBufferAttribute(G,Z),I[ee+v+8]=a.x,I[ee+v+9]=a.y,I[ee+v+10]=a.z,I[ee+v+11]=G.itemSize===4?a.w:1)}}M={count:x,texture:V,size:new yt(L,P)},r.set(f,M),f.addEventListener("dispose",m)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let D=0;for(let E=0;E<g.length;E++)D+=g[E];const b=f.morphTargetsRelative?1:1-D;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",g)}h.getUniforms().setValue(s,"morphTargetsTexture",M.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",M.size)}return{update:l}}function CM(s,e,n,r){let a=new WeakMap;function l(h){const g=r.render.frame,S=h.geometry,x=e.get(h,S);if(a.get(x)!==g&&(e.update(x),a.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==g&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;a.get(M)!==g&&(M.update(),a.set(M,g))}return x}function c(){a=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:c}}const qg=new On,Nm=new jg(1,1),Yg=new Ng,Kg=new ay,$g=new Vg,Om=[],Um=[],Fm=new Float32Array(16),km=new Float32Array(9),zm=new Float32Array(4);function ro(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Om[a];if(l===void 0&&(l=new Float32Array(a),Om[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,s[c].toArray(l,f)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Um[e];n===void 0&&(n=new Int32Array(e),Um[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function PM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function NM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;zm.set(r),s.uniformMatrix2fv(this.addr,!1,zm),tn(n,r)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;km.set(r),s.uniformMatrix3fv(this.addr,!1,km),tn(n,r)}}function UM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Fm.set(r),s.uniformMatrix4fv(this.addr,!1,Fm),tn(n,r)}}function FM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function HM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function jM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Nm.compareFunction=Lg,l=Nm):l=qg,n.setTexture2D(e||l,a)}function XM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Kg,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||$g,a)}function YM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Yg,a)}function KM(s){switch(s){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return NM;case 35675:return OM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return kM;case 35668:case 35672:return zM;case 35669:case 35673:return BM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function $M(s,e){s.uniform1fv(this.addr,e)}function ZM(s,e){const n=ro(e,this.size,2);s.uniform2fv(this.addr,n)}function QM(s,e){const n=ro(e,this.size,3);s.uniform3fv(this.addr,n)}function JM(s,e){const n=ro(e,this.size,4);s.uniform4fv(this.addr,n)}function eE(s,e){const n=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function tE(s,e){const n=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function nE(s,e){const n=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function iE(s,e){s.uniform1iv(this.addr,e)}function rE(s,e){s.uniform2iv(this.addr,e)}function sE(s,e){s.uniform3iv(this.addr,e)}function oE(s,e){s.uniform4iv(this.addr,e)}function aE(s,e){s.uniform1uiv(this.addr,e)}function lE(s,e){s.uniform2uiv(this.addr,e)}function uE(s,e){s.uniform3uiv(this.addr,e)}function cE(s,e){s.uniform4uiv(this.addr,e)}function fE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||qg,l[c])}function dE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Kg,l[c])}function hE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||$g,l[c])}function pE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Yg,l[c])}function mE(s){switch(s){case 5126:return $M;case 35664:return ZM;case 35665:return QM;case 35666:return JM;case 35674:return eE;case 35675:return tE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return rE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return lE;case 36295:return uE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return pE}}class gE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=KM(n.type)}}class _E{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mE(n.type)}}class vE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const af=/(\w+)(\])?(\[|\.)?/g;function Bm(s,e){s.seq.push(e),s.map[e.id]=e}function yE(s,e,n){const r=s.name,a=r.length;for(af.lastIndex=0;;){const l=af.exec(r),c=af.lastIndex;let f=l[1];const h=l[2]==="]",g=l[3];if(h&&(f=f|0),g===void 0||g==="["&&c+2===a){Bm(n,g===void 0?new gE(f,s,e):new _E(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new vE(f),Bm(n,x)),n=x}}}class Bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);yE(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Hm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const SE=37297;let xE=0;function ME(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Vm=new pt;function EE(s){bt._getMatrix(Vm,bt.workingColorSpace,s);const e=`mat3( ${Vm.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Gm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+ME(s.getShaderSource(e),c)}else return a}function TE(s,e){const n=EE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wE(s,e){let n;switch(e){case g0:n="Linear";break;case _0:n="Reinhard";break;case v0:n="Cineon";break;case y0:n="ACESFilmic";break;case x0:n="AgX";break;case M0:n="Neutral";break;case S0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Il=new fe;function AE(){bt.getLuminanceCoefficients(Il);const s=Il.x.toFixed(4),e=Il.y.toFixed(4),n=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function bE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function CE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return n}function jo(s){return s!==""}function Wm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(s){return s.replace(PE,DE)}const LE=new Map;function DE(s,e){let n=mt[e];if(n===void 0){const r=LE.get(e);if(r!==void 0)n=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ud(n)}const IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(s){return s.replace(IE,NE)}function NE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function qm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function OE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function UE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Zs:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function kE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yg:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function zE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function BE(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const h=OE(n),g=UE(n),S=FE(n),x=kE(n),M=zE(n),A=RE(n),D=bE(l),b=a.createProgram();let E,y,q=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D].filter(jo).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D].filter(jo).join(`
`),y.length>0&&(y+=`
`)):(E=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+S:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),y=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+S:"",n.envMap?"#define "+x:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?mt.tonemapping_pars_fragment:"",n.toneMapping!==Er?wE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,TE("linearToOutputTexel",n.outputColorSpace),AE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jo).join(`
`)),c=ud(c),c=Wm(c,n),c=jm(c,n),f=ud(f),f=Wm(f,n),f=jm(f,n),c=Xm(c),f=Xm(f),n.isRawShaderMaterial!==!0&&(q=`#version 300 es
`,E=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",n.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const H=q+E+c,k=q+y+f,L=Hm(a,a.VERTEX_SHADER,H),P=Hm(a,a.FRAGMENT_SHADER,k);a.attachShader(b,L),a.attachShader(b,P),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function I(O){if(s.debug.checkShaderErrors){const K=a.getProgramInfoLog(b).trim(),F=a.getShaderInfoLog(L).trim(),G=a.getShaderInfoLog(P).trim();let ee=!0,Z=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,L,P);else{const v=Gm(a,L,"vertex"),Y=Gm(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+K+`
`+v+`
`+Y)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(F===""||G==="")&&(Z=!1);Z&&(O.diagnostics={runnable:ee,programLog:K,vertexShader:{log:F,prefix:E},fragmentShader:{log:G,prefix:y}})}a.deleteShader(L),a.deleteShader(P),V=new Bl(a,b),T=CE(a,b)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let m=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=a.getProgramParameter(b,SE)),m},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let HE=0;class VE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new GE(e),n.set(e,r)),r}}class GE{constructor(e){this.id=HE++,this.code=e,this.usedTimes=0}}function WE(s,e,n,r,a,l,c){const f=new Og,h=new VE,g=new Set,S=[],x=a.logarithmicDepthBuffer,M=a.vertexTextures;let A=a.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return g.add(T),T===0?"uv":`uv${T}`}function E(T,m,O,K,F){const G=K.fog,ee=F.geometry,Z=T.isMeshStandardMaterial?K.environment:null,v=(T.isMeshStandardMaterial?n:e).get(T.envMap||Z),Y=v&&v.mapping===Xl?v.image.height:null,U=D[T.type];T.precision!==null&&(A=a.getMaxPrecision(T.precision),A!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",A,"instead."));const _=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,w=_!==void 0?_.length:0;let B=0;ee.morphAttributes.position!==void 0&&(B=1),ee.morphAttributes.normal!==void 0&&(B=2),ee.morphAttributes.color!==void 0&&(B=3);let ce,j,J,ie;if(U){const Tt=gi[U];ce=Tt.vertexShader,j=Tt.fragmentShader}else ce=T.vertexShader,j=T.fragmentShader,h.update(T),J=h.getVertexShaderID(T),ie=h.getFragmentShaderID(T);const se=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,Je=!!T.map,Ge=!!T.matcap,Qe=!!v,X=!!T.aoMap,ct=!!T.lightMap,et=!!T.bumpMap,De=!!T.normalMap,Le=!!T.displacementMap,ot=!!T.emissiveMap,Ce=!!T.metalnessMap,z=!!T.roughnessMap,C=T.anisotropy>0,le=T.clearcoat>0,ve=T.dispersion>0,ye=T.iridescence>0,me=T.sheen>0,He=T.transmission>0,be=C&&!!T.anisotropyMap,Ve=le&&!!T.clearcoatMap,gt=le&&!!T.clearcoatNormalMap,we=le&&!!T.clearcoatRoughnessMap,je=ye&&!!T.iridescenceMap,nt=ye&&!!T.iridescenceThicknessMap,at=me&&!!T.sheenColorMap,Xe=me&&!!T.sheenRoughnessMap,_t=!!T.specularMap,ft=!!T.specularColorMap,Ct=!!T.specularIntensityMap,te=He&&!!T.transmissionMap,Ie=He&&!!T.thicknessMap,pe=!!T.gradientMap,_e=!!T.alphaMap,ke=T.alphaTest>0,Ue=!!T.alphaHash,dt=!!T.extensions;let Ot=Er;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const $t={shaderID:U,shaderType:T.type,shaderName:T.name,vertexShader:ce,fragmentShader:j,defines:T.defines,customVertexShaderID:J,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:A,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:eo,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:Ge,envMap:Qe,envMapMode:Qe&&v.mapping,envMapCubeUVHeight:Y,aoMap:X,lightMap:ct,bumpMap:et,normalMap:De,displacementMap:M&&Le,emissiveMap:ot,normalMapObjectSpace:De&&T.normalMapType===R0,normalMapTangentSpace:De&&T.normalMapType===A0,metalnessMap:Ce,roughnessMap:z,anisotropy:C,anisotropyMap:be,clearcoat:le,clearcoatMap:Ve,clearcoatNormalMap:gt,clearcoatRoughnessMap:we,dispersion:ve,iridescence:ye,iridescenceMap:je,iridescenceThicknessMap:nt,sheen:me,sheenColorMap:at,sheenRoughnessMap:Xe,specularMap:_t,specularColorMap:ft,specularIntensityMap:Ct,transmission:He,transmissionMap:te,thicknessMap:Ie,gradientMap:pe,opaque:T.transparent===!1&&T.blending===Xs&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:ke,alphaHash:Ue,combine:T.combine,mapUv:Je&&b(T.map.channel),aoMapUv:X&&b(T.aoMap.channel),lightMapUv:ct&&b(T.lightMap.channel),bumpMapUv:et&&b(T.bumpMap.channel),normalMapUv:De&&b(T.normalMap.channel),displacementMapUv:Le&&b(T.displacementMap.channel),emissiveMapUv:ot&&b(T.emissiveMap.channel),metalnessMapUv:Ce&&b(T.metalnessMap.channel),roughnessMapUv:z&&b(T.roughnessMap.channel),anisotropyMapUv:be&&b(T.anisotropyMap.channel),clearcoatMapUv:Ve&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:gt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:at&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&b(T.sheenRoughnessMap.channel),specularMapUv:_t&&b(T.specularMap.channel),specularColorMapUv:ft&&b(T.specularColorMap.channel),specularIntensityMapUv:Ct&&b(T.specularIntensityMap.channel),transmissionMapUv:te&&b(T.transmissionMap.channel),thicknessMapUv:Ie&&b(T.thicknessMap.channel),alphaMapUv:_e&&b(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(De||C),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ee.attributes.uv&&(Je||_e),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:B,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:ot&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fi,flipSided:T.side===Nn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:dt&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&T.extensions.multiDraw===!0||Re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $t.vertexUv1s=g.has(1),$t.vertexUv2s=g.has(2),$t.vertexUv3s=g.has(3),g.clear(),$t}function y(T){const m=[];if(T.shaderID?m.push(T.shaderID):(m.push(T.customVertexShaderID),m.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)m.push(O),m.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(q(m,T),H(m,T),m.push(s.outputColorSpace)),m.push(T.customProgramCacheKey),m.join()}function q(T,m){T.push(m.precision),T.push(m.outputColorSpace),T.push(m.envMapMode),T.push(m.envMapCubeUVHeight),T.push(m.mapUv),T.push(m.alphaMapUv),T.push(m.lightMapUv),T.push(m.aoMapUv),T.push(m.bumpMapUv),T.push(m.normalMapUv),T.push(m.displacementMapUv),T.push(m.emissiveMapUv),T.push(m.metalnessMapUv),T.push(m.roughnessMapUv),T.push(m.anisotropyMapUv),T.push(m.clearcoatMapUv),T.push(m.clearcoatNormalMapUv),T.push(m.clearcoatRoughnessMapUv),T.push(m.iridescenceMapUv),T.push(m.iridescenceThicknessMapUv),T.push(m.sheenColorMapUv),T.push(m.sheenRoughnessMapUv),T.push(m.specularMapUv),T.push(m.specularColorMapUv),T.push(m.specularIntensityMapUv),T.push(m.transmissionMapUv),T.push(m.thicknessMapUv),T.push(m.combine),T.push(m.fogExp2),T.push(m.sizeAttenuation),T.push(m.morphTargetsCount),T.push(m.morphAttributeCount),T.push(m.numDirLights),T.push(m.numPointLights),T.push(m.numSpotLights),T.push(m.numSpotLightMaps),T.push(m.numHemiLights),T.push(m.numRectAreaLights),T.push(m.numDirLightShadows),T.push(m.numPointLightShadows),T.push(m.numSpotLightShadows),T.push(m.numSpotLightShadowsWithMaps),T.push(m.numLightProbes),T.push(m.shadowMapType),T.push(m.toneMapping),T.push(m.numClippingPlanes),T.push(m.numClipIntersection),T.push(m.depthPacking)}function H(T,m){f.disableAll(),m.supportsVertexTextures&&f.enable(0),m.instancing&&f.enable(1),m.instancingColor&&f.enable(2),m.instancingMorph&&f.enable(3),m.matcap&&f.enable(4),m.envMap&&f.enable(5),m.normalMapObjectSpace&&f.enable(6),m.normalMapTangentSpace&&f.enable(7),m.clearcoat&&f.enable(8),m.iridescence&&f.enable(9),m.alphaTest&&f.enable(10),m.vertexColors&&f.enable(11),m.vertexAlphas&&f.enable(12),m.vertexUv1s&&f.enable(13),m.vertexUv2s&&f.enable(14),m.vertexUv3s&&f.enable(15),m.vertexTangents&&f.enable(16),m.anisotropy&&f.enable(17),m.alphaHash&&f.enable(18),m.batching&&f.enable(19),m.dispersion&&f.enable(20),m.batchingColor&&f.enable(21),T.push(f.mask),f.disableAll(),m.fog&&f.enable(0),m.useFog&&f.enable(1),m.flatShading&&f.enable(2),m.logarithmicDepthBuffer&&f.enable(3),m.reverseDepthBuffer&&f.enable(4),m.skinning&&f.enable(5),m.morphTargets&&f.enable(6),m.morphNormals&&f.enable(7),m.morphColors&&f.enable(8),m.premultipliedAlpha&&f.enable(9),m.shadowMapEnabled&&f.enable(10),m.doubleSided&&f.enable(11),m.flipSided&&f.enable(12),m.useDepthPacking&&f.enable(13),m.dithering&&f.enable(14),m.transmission&&f.enable(15),m.sheen&&f.enable(16),m.opaque&&f.enable(17),m.pointsUvs&&f.enable(18),m.decodeVideoTexture&&f.enable(19),m.decodeVideoTextureEmissive&&f.enable(20),m.alphaToCoverage&&f.enable(21),T.push(f.mask)}function k(T){const m=D[T.type];let O;if(m){const K=gi[m];O=yy.clone(K.uniforms)}else O=T.uniforms;return O}function L(T,m){let O;for(let K=0,F=S.length;K<F;K++){const G=S[K];if(G.cacheKey===m){O=G,++O.usedTimes;break}}return O===void 0&&(O=new BE(s,m,T,l),S.push(O)),O}function P(T){if(--T.usedTimes===0){const m=S.indexOf(T);S[m]=S[S.length-1],S.pop(),T.destroy()}}function I(T){h.remove(T)}function V(){h.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:k,acquireProgram:L,releaseProgram:P,releaseShaderCache:I,programs:S,dispose:V}}function jE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function XE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Km(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(x,M,A,D,b,E){let y=s[e];return y===void 0?(y={id:x.id,object:x,geometry:M,material:A,groupOrder:D,renderOrder:x.renderOrder,z:b,group:E},s[e]=y):(y.id=x.id,y.object=x,y.geometry=M,y.material=A,y.groupOrder=D,y.renderOrder=x.renderOrder,y.z=b,y.group=E),e++,y}function f(x,M,A,D,b,E){const y=c(x,M,A,D,b,E);A.transmission>0?r.push(y):A.transparent===!0?a.push(y):n.push(y)}function h(x,M,A,D,b,E){const y=c(x,M,A,D,b,E);A.transmission>0?r.unshift(y):A.transparent===!0?a.unshift(y):n.unshift(y)}function g(x,M){n.length>1&&n.sort(x||XE),r.length>1&&r.sort(M||Ym),a.length>1&&a.sort(M||Ym)}function S(){for(let x=e,M=s.length;x<M;x++){const A=s[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:S,sort:g}}function qE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Km,s.set(r,[c])):a>=l.length?(c=new Km,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function YE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new fe,color:new Pt};break;case"SpotLight":n={position:new fe,direction:new fe,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new fe,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new fe,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=n,n}}}function KE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let $E=0;function ZE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QE(s){const e=new YE,n=KE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new fe);const a=new fe,l=new qt,c=new qt;function f(g){let S=0,x=0,M=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let A=0,D=0,b=0,E=0,y=0,q=0,H=0,k=0,L=0,P=0,I=0;g.sort(ZE);for(let T=0,m=g.length;T<m;T++){const O=g[T],K=O.color,F=O.intensity,G=O.distance,ee=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)S+=K.r*F,x+=K.g*F,M+=K.b*F;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(O.sh.coefficients[Z],F);I++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const v=O.shadow,Y=n.get(O);Y.shadowIntensity=v.intensity,Y.shadowBias=v.bias,Y.shadowNormalBias=v.normalBias,Y.shadowRadius=v.radius,Y.shadowMapSize=v.mapSize,r.directionalShadow[A]=Y,r.directionalShadowMap[A]=ee,r.directionalShadowMatrix[A]=O.shadow.matrix,q++}r.directional[A]=Z,A++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(K).multiplyScalar(F),Z.distance=G,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,r.spot[b]=Z;const v=O.shadow;if(O.map&&(r.spotLightMap[L]=O.map,L++,v.updateMatrices(O),O.castShadow&&P++),r.spotLightMatrix[b]=v.matrix,O.castShadow){const Y=n.get(O);Y.shadowIntensity=v.intensity,Y.shadowBias=v.bias,Y.shadowNormalBias=v.normalBias,Y.shadowRadius=v.radius,Y.shadowMapSize=v.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=ee,k++}b++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(K).multiplyScalar(F),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),r.rectArea[E]=Z,E++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const v=O.shadow,Y=n.get(O);Y.shadowIntensity=v.intensity,Y.shadowBias=v.bias,Y.shadowNormalBias=v.normalBias,Y.shadowRadius=v.radius,Y.shadowMapSize=v.mapSize,Y.shadowCameraNear=v.camera.near,Y.shadowCameraFar=v.camera.far,r.pointShadow[D]=Y,r.pointShadowMap[D]=ee,r.pointShadowMatrix[D]=O.shadow.matrix,H++}r.point[D]=Z,D++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(F),Z.groundColor.copy(O.groundColor).multiplyScalar(F),r.hemi[y]=Z,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=M;const V=r.hash;(V.directionalLength!==A||V.pointLength!==D||V.spotLength!==b||V.rectAreaLength!==E||V.hemiLength!==y||V.numDirectionalShadows!==q||V.numPointShadows!==H||V.numSpotShadows!==k||V.numSpotMaps!==L||V.numLightProbes!==I)&&(r.directional.length=A,r.spot.length=b,r.rectArea.length=E,r.point.length=D,r.hemi.length=y,r.directionalShadow.length=q,r.directionalShadowMap.length=q,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=q,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=k+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=I,V.directionalLength=A,V.pointLength=D,V.spotLength=b,V.rectAreaLength=E,V.hemiLength=y,V.numDirectionalShadows=q,V.numPointShadows=H,V.numSpotShadows=k,V.numSpotMaps=L,V.numLightProbes=I,r.version=$E++)}function h(g,S){let x=0,M=0,A=0,D=0,b=0;const E=S.matrixWorldInverse;for(let y=0,q=g.length;y<q;y++){const H=g[y];if(H.isDirectionalLight){const k=r.directional[x];k.direction.setFromMatrixPosition(H.matrixWorld),a.setFromMatrixPosition(H.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(E),x++}else if(H.isSpotLight){const k=r.spot[A];k.position.setFromMatrixPosition(H.matrixWorld),k.position.applyMatrix4(E),k.direction.setFromMatrixPosition(H.matrixWorld),a.setFromMatrixPosition(H.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(E),A++}else if(H.isRectAreaLight){const k=r.rectArea[D];k.position.setFromMatrixPosition(H.matrixWorld),k.position.applyMatrix4(E),c.identity(),l.copy(H.matrixWorld),l.premultiply(E),c.extractRotation(l),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),D++}else if(H.isPointLight){const k=r.point[M];k.position.setFromMatrixPosition(H.matrixWorld),k.position.applyMatrix4(E),M++}else if(H.isHemisphereLight){const k=r.hemi[b];k.direction.setFromMatrixPosition(H.matrixWorld),k.direction.transformDirection(E),b++}}}return{setup:f,setupView:h,state:r}}function $m(s){const e=new QE(s),n=[],r=[];function a(S){g.camera=S,n.length=0,r.length=0}function l(S){n.push(S)}function c(S){r.push(S)}function f(){e.setup(n)}function h(S){e.setupView(n,S)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function JE(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new $m(s),e.set(a,[f])):l>=c.length?(f=new $m(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
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
}`;function nT(s,e,n){let r=new Gg;const a=new yt,l=new yt,c=new Xt,f=new by({depthPacking:w0}),h=new Cy,g={},S=n.maxTextureSize,x={[Tr]:Nn,[Nn]:Tr,[Fi]:Fi},M=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:eT,fragmentShader:tT}),A=M.clone();A.defines.HORIZONTAL_PASS=1;const D=new ji;D.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Bi(D,M),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let y=this.type;this.render=function(P,I,V){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||P.length===0)return;const T=s.getRenderTarget(),m=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Mr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const F=y!==Ui&&this.type===Ui,G=y===Ui&&this.type!==Ui;for(let ee=0,Z=P.length;ee<Z;ee++){const v=P[ee],Y=v.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",v,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const U=Y.getFrameExtents();if(a.multiply(U),l.copy(Y.mapSize),(a.x>S||a.y>S)&&(a.x>S&&(l.x=Math.floor(S/U.x),a.x=l.x*U.x,Y.mapSize.x=l.x),a.y>S&&(l.y=Math.floor(S/U.y),a.y=l.y*U.y,Y.mapSize.y=l.y)),Y.map===null||F===!0||G===!0){const w=this.type!==Ui?{minFilter:ui,magFilter:ui}:{};Y.map!==null&&Y.map.dispose(),Y.map=new es(a.x,a.y,w),Y.map.texture.name=v.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const _=Y.getViewportCount();for(let w=0;w<_;w++){const B=Y.getViewport(w);c.set(l.x*B.x,l.y*B.y,l.x*B.z,l.y*B.w),K.viewport(c),Y.updateMatrices(v,w),r=Y.getFrustum(),k(I,V,Y.camera,v,this.type)}Y.isPointLightShadow!==!0&&this.type===Ui&&q(Y,V),Y.needsUpdate=!1}y=this.type,E.needsUpdate=!1,s.setRenderTarget(T,m,O)};function q(P,I){const V=e.update(b);M.defines.VSM_SAMPLES!==P.blurSamples&&(M.defines.VSM_SAMPLES=P.blurSamples,A.defines.VSM_SAMPLES=P.blurSamples,M.needsUpdate=!0,A.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new es(a.x,a.y)),M.uniforms.shadow_pass.value=P.map.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,V,M,b,null),A.uniforms.shadow_pass.value=P.mapPass.texture,A.uniforms.resolution.value=P.mapSize,A.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,V,A,b,null)}function H(P,I,V,T){let m=null;const O=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)m=O;else if(m=V.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const K=m.uuid,F=I.uuid;let G=g[K];G===void 0&&(G={},g[K]=G);let ee=G[F];ee===void 0&&(ee=m.clone(),G[F]=ee,I.addEventListener("dispose",L)),m=ee}if(m.visible=I.visible,m.wireframe=I.wireframe,T===Ui?m.side=I.shadowSide!==null?I.shadowSide:I.side:m.side=I.shadowSide!==null?I.shadowSide:x[I.side],m.alphaMap=I.alphaMap,m.alphaTest=I.alphaTest,m.map=I.map,m.clipShadows=I.clipShadows,m.clippingPlanes=I.clippingPlanes,m.clipIntersection=I.clipIntersection,m.displacementMap=I.displacementMap,m.displacementScale=I.displacementScale,m.displacementBias=I.displacementBias,m.wireframeLinewidth=I.wireframeLinewidth,m.linewidth=I.linewidth,V.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const K=s.properties.get(m);K.light=V}return m}function k(P,I,V,T,m){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&m===Ui)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const F=e.update(P),G=P.material;if(Array.isArray(G)){const ee=F.groups;for(let Z=0,v=ee.length;Z<v;Z++){const Y=ee[Z],U=G[Y.materialIndex];if(U&&U.visible){const _=H(P,U,T,m);P.onBeforeShadow(s,P,I,V,F,_,Y),s.renderBufferDirect(V,null,F,_,P,Y),P.onAfterShadow(s,P,I,V,F,_,Y)}}}else if(G.visible){const ee=H(P,G,T,m);P.onBeforeShadow(s,P,I,V,F,ee,null),s.renderBufferDirect(V,null,F,ee,P,null),P.onAfterShadow(s,P,I,V,F,ee,null)}}const K=P.children;for(let F=0,G=K.length;F<G;F++)k(K[F],I,V,T,m)}function L(P){P.target.removeEventListener("dispose",L);for(const V in g){const T=g[V],m=P.target.uuid;m in T&&(T[m].dispose(),delete T[m])}}}const iT={[wf]:Af,[Rf]:Pf,[bf]:Lf,[Ks]:Cf,[Af]:wf,[Pf]:Rf,[Lf]:bf,[Cf]:Ks};function rT(s,e){function n(){let te=!1;const Ie=new Xt;let pe=null;const _e=new Xt(0,0,0,0);return{setMask:function(ke){pe!==ke&&!te&&(s.colorMask(ke,ke,ke,ke),pe=ke)},setLocked:function(ke){te=ke},setClear:function(ke,Ue,dt,Ot,$t){$t===!0&&(ke*=Ot,Ue*=Ot,dt*=Ot),Ie.set(ke,Ue,dt,Ot),_e.equals(Ie)===!1&&(s.clearColor(ke,Ue,dt,Ot),_e.copy(Ie))},reset:function(){te=!1,pe=null,_e.set(-1,0,0,0)}}}function r(){let te=!1,Ie=!1,pe=null,_e=null,ke=null;return{setReversed:function(Ue){if(Ie!==Ue){const dt=e.get("EXT_clip_control");Ie?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Ot=ke;ke=null,this.setClear(Ot)}Ie=Ue},getReversed:function(){return Ie},setTest:function(Ue){Ue?se(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ue){pe!==Ue&&!te&&(s.depthMask(Ue),pe=Ue)},setFunc:function(Ue){if(Ie&&(Ue=iT[Ue]),_e!==Ue){switch(Ue){case wf:s.depthFunc(s.NEVER);break;case Af:s.depthFunc(s.ALWAYS);break;case Rf:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case bf:s.depthFunc(s.EQUAL);break;case Cf:s.depthFunc(s.GEQUAL);break;case Pf:s.depthFunc(s.GREATER);break;case Lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Ue}},setLocked:function(Ue){te=Ue},setClear:function(Ue){ke!==Ue&&(Ie&&(Ue=1-Ue),s.clearDepth(Ue),ke=Ue)},reset:function(){te=!1,pe=null,_e=null,ke=null,Ie=!1}}}function a(){let te=!1,Ie=null,pe=null,_e=null,ke=null,Ue=null,dt=null,Ot=null,$t=null;return{setTest:function(Tt){te||(Tt?se(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Tt){Ie!==Tt&&!te&&(s.stencilMask(Tt),Ie=Tt)},setFunc:function(Tt,An,Sn){(pe!==Tt||_e!==An||ke!==Sn)&&(s.stencilFunc(Tt,An,Sn),pe=Tt,_e=An,ke=Sn)},setOp:function(Tt,An,Sn){(Ue!==Tt||dt!==An||Ot!==Sn)&&(s.stencilOp(Tt,An,Sn),Ue=Tt,dt=An,Ot=Sn)},setLocked:function(Tt){te=Tt},setClear:function(Tt){$t!==Tt&&(s.clearStencil(Tt),$t=Tt)},reset:function(){te=!1,Ie=null,pe=null,_e=null,ke=null,Ue=null,dt=null,Ot=null,$t=null}}}const l=new n,c=new r,f=new a,h=new WeakMap,g=new WeakMap;let S={},x={},M=new WeakMap,A=[],D=null,b=!1,E=null,y=null,q=null,H=null,k=null,L=null,P=null,I=new Pt(0,0,0),V=0,T=!1,m=null,O=null,K=null,F=null,G=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,v=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(v=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=v>=1):Y.indexOf("OpenGL ES")!==-1&&(v=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=v>=2);let U=null,_={};const w=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),ce=new Xt().fromArray(w),j=new Xt().fromArray(B);function J(te,Ie,pe,_e){const ke=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(te,Ue),s.texParameteri(te,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(te,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<pe;dt++)te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ie+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Ue}const ie={};ie[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),se(s.DEPTH_TEST),c.setFunc(Ks),et(!1),De(Qp),se(s.CULL_FACE),X(Mr);function se(te){S[te]!==!0&&(s.enable(te),S[te]=!0)}function ge(te){S[te]!==!1&&(s.disable(te),S[te]=!1)}function Se(te,Ie){return x[te]!==Ie?(s.bindFramebuffer(te,Ie),x[te]=Ie,te===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ie),te===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Re(te,Ie){let pe=A,_e=!1;if(te){pe=M.get(Ie),pe===void 0&&(pe=[],M.set(Ie,pe));const ke=te.textures;if(pe.length!==ke.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,dt=ke.length;Ue<dt;Ue++)pe[Ue]=s.COLOR_ATTACHMENT0+Ue;pe.length=ke.length,_e=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,_e=!0);_e&&s.drawBuffers(pe)}function Je(te){return D!==te?(s.useProgram(te),D=te,!0):!1}const Ge={[Yr]:s.FUNC_ADD,[Zv]:s.FUNC_SUBTRACT,[Qv]:s.FUNC_REVERSE_SUBTRACT};Ge[Jv]=s.MIN,Ge[e0]=s.MAX;const Qe={[t0]:s.ZERO,[n0]:s.ONE,[i0]:s.SRC_COLOR,[Ef]:s.SRC_ALPHA,[u0]:s.SRC_ALPHA_SATURATE,[a0]:s.DST_COLOR,[s0]:s.DST_ALPHA,[r0]:s.ONE_MINUS_SRC_COLOR,[Tf]:s.ONE_MINUS_SRC_ALPHA,[l0]:s.ONE_MINUS_DST_COLOR,[o0]:s.ONE_MINUS_DST_ALPHA,[c0]:s.CONSTANT_COLOR,[f0]:s.ONE_MINUS_CONSTANT_COLOR,[d0]:s.CONSTANT_ALPHA,[h0]:s.ONE_MINUS_CONSTANT_ALPHA};function X(te,Ie,pe,_e,ke,Ue,dt,Ot,$t,Tt){if(te===Mr){b===!0&&(ge(s.BLEND),b=!1);return}if(b===!1&&(se(s.BLEND),b=!0),te!==$v){if(te!==E||Tt!==T){if((y!==Yr||k!==Yr)&&(s.blendEquation(s.FUNC_ADD),y=Yr,k=Yr),Tt)switch(te){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.ONE,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}q=null,H=null,L=null,P=null,I.set(0,0,0),V=0,E=te,T=Tt}return}ke=ke||Ie,Ue=Ue||pe,dt=dt||_e,(Ie!==y||ke!==k)&&(s.blendEquationSeparate(Ge[Ie],Ge[ke]),y=Ie,k=ke),(pe!==q||_e!==H||Ue!==L||dt!==P)&&(s.blendFuncSeparate(Qe[pe],Qe[_e],Qe[Ue],Qe[dt]),q=pe,H=_e,L=Ue,P=dt),(Ot.equals(I)===!1||$t!==V)&&(s.blendColor(Ot.r,Ot.g,Ot.b,$t),I.copy(Ot),V=$t),E=te,T=!1}function ct(te,Ie){te.side===Fi?ge(s.CULL_FACE):se(s.CULL_FACE);let pe=te.side===Nn;Ie&&(pe=!pe),et(pe),te.blending===Xs&&te.transparent===!1?X(Mr):X(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),c.setFunc(te.depthFunc),c.setTest(te.depthTest),c.setMask(te.depthWrite),l.setMask(te.colorWrite);const _e=te.stencilWrite;f.setTest(_e),_e&&(f.setMask(te.stencilWriteMask),f.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),f.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),ot(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(te){m!==te&&(te?s.frontFace(s.CW):s.frontFace(s.CCW),m=te)}function De(te){te!==qv?(se(s.CULL_FACE),te!==O&&(te===Qp?s.cullFace(s.BACK):te===Yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),O=te}function Le(te){te!==K&&(Z&&s.lineWidth(te),K=te)}function ot(te,Ie,pe){te?(se(s.POLYGON_OFFSET_FILL),(F!==Ie||G!==pe)&&(s.polygonOffset(Ie,pe),F=Ie,G=pe)):ge(s.POLYGON_OFFSET_FILL)}function Ce(te){te?se(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function z(te){te===void 0&&(te=s.TEXTURE0+ee-1),U!==te&&(s.activeTexture(te),U=te)}function C(te,Ie,pe){pe===void 0&&(U===null?pe=s.TEXTURE0+ee-1:pe=U);let _e=_[pe];_e===void 0&&(_e={type:void 0,texture:void 0},_[pe]=_e),(_e.type!==te||_e.texture!==Ie)&&(U!==pe&&(s.activeTexture(pe),U=pe),s.bindTexture(te,Ie||ie[te]),_e.type=te,_e.texture=Ie)}function le(){const te=_[U];te!==void 0&&te.type!==void 0&&(s.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function gt(){try{s.texStorage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function nt(){try{s.texImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function at(te){ce.equals(te)===!1&&(s.scissor(te.x,te.y,te.z,te.w),ce.copy(te))}function Xe(te){j.equals(te)===!1&&(s.viewport(te.x,te.y,te.z,te.w),j.copy(te))}function _t(te,Ie){let pe=g.get(Ie);pe===void 0&&(pe=new WeakMap,g.set(Ie,pe));let _e=pe.get(te);_e===void 0&&(_e=s.getUniformBlockIndex(Ie,te.name),pe.set(te,_e))}function ft(te,Ie){const _e=g.get(Ie).get(te);h.get(Ie)!==_e&&(s.uniformBlockBinding(Ie,_e,te.__bindingPointIndex),h.set(Ie,_e))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),S={},U=null,_={},x={},M=new WeakMap,A=[],D=null,b=!1,E=null,y=null,q=null,H=null,k=null,L=null,P=null,I=new Pt(0,0,0),V=0,T=!1,m=null,O=null,K=null,F=null,G=null,ce.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:se,disable:ge,bindFramebuffer:Se,drawBuffers:Re,useProgram:Je,setBlending:X,setMaterial:ct,setFlipSided:et,setCullFace:De,setLineWidth:Le,setPolygonOffset:ot,setScissorTest:Ce,activeTexture:z,bindTexture:C,unbindTexture:le,compressedTexImage2D:ve,compressedTexImage3D:ye,texImage2D:je,texImage3D:nt,updateUBOMapping:_t,uniformBlockBinding:ft,texStorage2D:gt,texStorage3D:we,texSubImage2D:me,texSubImage3D:He,compressedTexSubImage2D:be,compressedTexSubImage3D:Ve,scissor:at,viewport:Xe,reset:Ct}}function sT(s,e,n,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new yt,S=new WeakMap;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(z,C){return A?new OffscreenCanvas(z,C):Gl("canvas")}function b(z,C,le){let ve=1;const ye=Ce(z);if((ye.width>le||ye.height>le)&&(ve=le/Math.max(ye.width,ye.height)),ve<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const me=Math.floor(ve*ye.width),He=Math.floor(ve*ye.height);x===void 0&&(x=D(me,He));const be=C?D(me,He):x;return be.width=me,be.height=He,be.getContext("2d").drawImage(z,0,0,me,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+He+")."),be}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),z;return z}function E(z){return z.generateMipmaps}function y(z){s.generateMipmap(z)}function q(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function H(z,C,le,ve,ye=!1){if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let me=C;if(C===s.RED&&(le===s.FLOAT&&(me=s.R32F),le===s.HALF_FLOAT&&(me=s.R16F),le===s.UNSIGNED_BYTE&&(me=s.R8)),C===s.RED_INTEGER&&(le===s.UNSIGNED_BYTE&&(me=s.R8UI),le===s.UNSIGNED_SHORT&&(me=s.R16UI),le===s.UNSIGNED_INT&&(me=s.R32UI),le===s.BYTE&&(me=s.R8I),le===s.SHORT&&(me=s.R16I),le===s.INT&&(me=s.R32I)),C===s.RG&&(le===s.FLOAT&&(me=s.RG32F),le===s.HALF_FLOAT&&(me=s.RG16F),le===s.UNSIGNED_BYTE&&(me=s.RG8)),C===s.RG_INTEGER&&(le===s.UNSIGNED_BYTE&&(me=s.RG8UI),le===s.UNSIGNED_SHORT&&(me=s.RG16UI),le===s.UNSIGNED_INT&&(me=s.RG32UI),le===s.BYTE&&(me=s.RG8I),le===s.SHORT&&(me=s.RG16I),le===s.INT&&(me=s.RG32I)),C===s.RGB_INTEGER&&(le===s.UNSIGNED_BYTE&&(me=s.RGB8UI),le===s.UNSIGNED_SHORT&&(me=s.RGB16UI),le===s.UNSIGNED_INT&&(me=s.RGB32UI),le===s.BYTE&&(me=s.RGB8I),le===s.SHORT&&(me=s.RGB16I),le===s.INT&&(me=s.RGB32I)),C===s.RGBA_INTEGER&&(le===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),le===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),le===s.UNSIGNED_INT&&(me=s.RGBA32UI),le===s.BYTE&&(me=s.RGBA8I),le===s.SHORT&&(me=s.RGBA16I),le===s.INT&&(me=s.RGBA32I)),C===s.RGB&&le===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),C===s.RGBA){const He=ye?Hl:bt.getTransfer(ve);le===s.FLOAT&&(me=s.RGBA32F),le===s.HALF_FLOAT&&(me=s.RGBA16F),le===s.UNSIGNED_BYTE&&(me=He===Lt?s.SRGB8_ALPHA8:s.RGBA8),le===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),le===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function k(z,C){let le;return z?C===null||C===Jr||C===Qs?le=s.DEPTH24_STENCIL8:C===ki?le=s.DEPTH32F_STENCIL8:C===Yo&&(le=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Jr||C===Qs?le=s.DEPTH_COMPONENT24:C===ki?le=s.DEPTH_COMPONENT32F:C===Yo&&(le=s.DEPTH_COMPONENT16),le}function L(z,C){return E(z)===!0||z.isFramebufferTexture&&z.minFilter!==ui&&z.minFilter!==_i?Math.log2(Math.max(C.width,C.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?C.mipmaps.length:1}function P(z){const C=z.target;C.removeEventListener("dispose",P),V(C),C.isVideoTexture&&S.delete(C)}function I(z){const C=z.target;C.removeEventListener("dispose",I),m(C)}function V(z){const C=r.get(z);if(C.__webglInit===void 0)return;const le=z.source,ve=M.get(le);if(ve){const ye=ve[C.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&T(z),Object.keys(ve).length===0&&M.delete(le)}r.remove(z)}function T(z){const C=r.get(z);s.deleteTexture(C.__webglTexture);const le=z.source,ve=M.get(le);delete ve[C.__cacheKey],c.memory.textures--}function m(z){const C=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(C.__webglFramebuffer[ve]))for(let ye=0;ye<C.__webglFramebuffer[ve].length;ye++)s.deleteFramebuffer(C.__webglFramebuffer[ve][ye]);else s.deleteFramebuffer(C.__webglFramebuffer[ve]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[ve])}else{if(Array.isArray(C.__webglFramebuffer))for(let ve=0;ve<C.__webglFramebuffer.length;ve++)s.deleteFramebuffer(C.__webglFramebuffer[ve]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ve=0;ve<C.__webglColorRenderbuffer.length;ve++)C.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[ve]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const le=z.textures;for(let ve=0,ye=le.length;ve<ye;ve++){const me=r.get(le[ve]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),c.memory.textures--),r.remove(le[ve])}r.remove(z)}let O=0;function K(){O=0}function F(){const z=O;return z>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+a.maxTextures),O+=1,z}function G(z){const C=[];return C.push(z.wrapS),C.push(z.wrapT),C.push(z.wrapR||0),C.push(z.magFilter),C.push(z.minFilter),C.push(z.anisotropy),C.push(z.internalFormat),C.push(z.format),C.push(z.type),C.push(z.generateMipmaps),C.push(z.premultiplyAlpha),C.push(z.flipY),C.push(z.unpackAlignment),C.push(z.colorSpace),C.join()}function ee(z,C){const le=r.get(z);if(z.isVideoTexture&&Le(z),z.isRenderTargetTexture===!1&&z.version>0&&le.__version!==z.version){const ve=z.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(le,z,C);return}}n.bindTexture(s.TEXTURE_2D,le.__webglTexture,s.TEXTURE0+C)}function Z(z,C){const le=r.get(z);if(z.version>0&&le.__version!==z.version){j(le,z,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,le.__webglTexture,s.TEXTURE0+C)}function v(z,C){const le=r.get(z);if(z.version>0&&le.__version!==z.version){j(le,z,C);return}n.bindTexture(s.TEXTURE_3D,le.__webglTexture,s.TEXTURE0+C)}function Y(z,C){const le=r.get(z);if(z.version>0&&le.__version!==z.version){J(le,z,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture,s.TEXTURE0+C)}const U={[Nf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[Of]:s.MIRRORED_REPEAT},_={[ui]:s.NEAREST,[E0]:s.NEAREST_MIPMAP_NEAREST,[cl]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},w={[b0]:s.NEVER,[N0]:s.ALWAYS,[C0]:s.LESS,[Lg]:s.LEQUAL,[P0]:s.EQUAL,[I0]:s.GEQUAL,[L0]:s.GREATER,[D0]:s.NOTEQUAL};function B(z,C){if(C.type===ki&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===_i||C.magFilter===Nc||C.magFilter===cl||C.magFilter===Zr||C.minFilter===_i||C.minFilter===Nc||C.minFilter===cl||C.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,U[C.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,U[C.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,U[C.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,_[C.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,_[C.minFilter]),C.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,w[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ui||C.minFilter!==cl&&C.minFilter!==Zr||C.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const le=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function ce(z,C){let le=!1;z.__webglInit===void 0&&(z.__webglInit=!0,C.addEventListener("dispose",P));const ve=C.source;let ye=M.get(ve);ye===void 0&&(ye={},M.set(ve,ye));const me=G(C);if(me!==z.__cacheKey){ye[me]===void 0&&(ye[me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,le=!0),ye[me].usedTimes++;const He=ye[z.__cacheKey];He!==void 0&&(ye[z.__cacheKey].usedTimes--,He.usedTimes===0&&T(C)),z.__cacheKey=me,z.__webglTexture=ye[me].texture}return le}function j(z,C,le){let ve=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ve=s.TEXTURE_3D);const ye=ce(z,C),me=C.source;n.bindTexture(ve,z.__webglTexture,s.TEXTURE0+le);const He=r.get(me);if(me.version!==He.__version||ye===!0){n.activeTexture(s.TEXTURE0+le);const be=bt.getPrimaries(bt.workingColorSpace),Ve=C.colorSpace===xr?null:bt.getPrimaries(C.colorSpace),gt=C.colorSpace===xr||be===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let we=b(C.image,!1,a.maxTextureSize);we=ot(C,we);const je=l.convert(C.format,C.colorSpace),nt=l.convert(C.type);let at=H(C.internalFormat,je,nt,C.colorSpace,C.isVideoTexture);B(ve,C);let Xe;const _t=C.mipmaps,ft=C.isVideoTexture!==!0,Ct=He.__version===void 0||ye===!0,te=me.dataReady,Ie=L(C,we);if(C.isDepthTexture)at=k(C.format===Js,C.type),Ct&&(ft?n.texStorage2D(s.TEXTURE_2D,1,at,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,at,we.width,we.height,0,je,nt,null));else if(C.isDataTexture)if(_t.length>0){ft&&Ct&&n.texStorage2D(s.TEXTURE_2D,Ie,at,_t[0].width,_t[0].height);for(let pe=0,_e=_t.length;pe<_e;pe++)Xe=_t[pe],ft?te&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Xe.width,Xe.height,je,nt,Xe.data):n.texImage2D(s.TEXTURE_2D,pe,at,Xe.width,Xe.height,0,je,nt,Xe.data);C.generateMipmaps=!1}else ft?(Ct&&n.texStorage2D(s.TEXTURE_2D,Ie,at,we.width,we.height),te&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,je,nt,we.data)):n.texImage2D(s.TEXTURE_2D,0,at,we.width,we.height,0,je,nt,we.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,at,_t[0].width,_t[0].height,we.depth);for(let pe=0,_e=_t.length;pe<_e;pe++)if(Xe=_t[pe],C.format!==li)if(je!==null)if(ft){if(te)if(C.layerUpdates.size>0){const ke=Am(Xe.width,Xe.height,C.format,C.type);for(const Ue of C.layerUpdates){const dt=Xe.data.subarray(Ue*ke/Xe.data.BYTES_PER_ELEMENT,(Ue+1)*ke/Xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,Ue,Xe.width,Xe.height,1,je,dt)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Xe.width,Xe.height,we.depth,je,Xe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,at,Xe.width,Xe.height,we.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?te&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Xe.width,Xe.height,we.depth,je,nt,Xe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,pe,at,Xe.width,Xe.height,we.depth,0,je,nt,Xe.data)}else{ft&&Ct&&n.texStorage2D(s.TEXTURE_2D,Ie,at,_t[0].width,_t[0].height);for(let pe=0,_e=_t.length;pe<_e;pe++)Xe=_t[pe],C.format!==li?je!==null?ft?te&&n.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Xe.width,Xe.height,je,Xe.data):n.compressedTexImage2D(s.TEXTURE_2D,pe,at,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?te&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Xe.width,Xe.height,je,nt,Xe.data):n.texImage2D(s.TEXTURE_2D,pe,at,Xe.width,Xe.height,0,je,nt,Xe.data)}else if(C.isDataArrayTexture)if(ft){if(Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,at,we.width,we.height,we.depth),te)if(C.layerUpdates.size>0){const pe=Am(we.width,we.height,C.format,C.type);for(const _e of C.layerUpdates){const ke=we.data.subarray(_e*pe/we.data.BYTES_PER_ELEMENT,(_e+1)*pe/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,je,nt,ke)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,je,nt,we.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,at,we.width,we.height,we.depth,0,je,nt,we.data);else if(C.isData3DTexture)ft?(Ct&&n.texStorage3D(s.TEXTURE_3D,Ie,at,we.width,we.height,we.depth),te&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,je,nt,we.data)):n.texImage3D(s.TEXTURE_3D,0,at,we.width,we.height,we.depth,0,je,nt,we.data);else if(C.isFramebufferTexture){if(Ct)if(ft)n.texStorage2D(s.TEXTURE_2D,Ie,at,we.width,we.height);else{let pe=we.width,_e=we.height;for(let ke=0;ke<Ie;ke++)n.texImage2D(s.TEXTURE_2D,ke,at,pe,_e,0,je,nt,null),pe>>=1,_e>>=1}}else if(_t.length>0){if(ft&&Ct){const pe=Ce(_t[0]);n.texStorage2D(s.TEXTURE_2D,Ie,at,pe.width,pe.height)}for(let pe=0,_e=_t.length;pe<_e;pe++)Xe=_t[pe],ft?te&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,je,nt,Xe):n.texImage2D(s.TEXTURE_2D,pe,at,je,nt,Xe);C.generateMipmaps=!1}else if(ft){if(Ct){const pe=Ce(we);n.texStorage2D(s.TEXTURE_2D,Ie,at,pe.width,pe.height)}te&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,je,nt,we)}else n.texImage2D(s.TEXTURE_2D,0,at,je,nt,we);E(C)&&y(ve),He.__version=me.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function J(z,C,le){if(C.image.length!==6)return;const ve=ce(z,C),ye=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+le);const me=r.get(ye);if(ye.version!==me.__version||ve===!0){n.activeTexture(s.TEXTURE0+le);const He=bt.getPrimaries(bt.workingColorSpace),be=C.colorSpace===xr?null:bt.getPrimaries(C.colorSpace),Ve=C.colorSpace===xr||He===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const gt=C.isCompressedTexture||C.image[0].isCompressedTexture,we=C.image[0]&&C.image[0].isDataTexture,je=[];for(let _e=0;_e<6;_e++)!gt&&!we?je[_e]=b(C.image[_e],!0,a.maxCubemapSize):je[_e]=we?C.image[_e].image:C.image[_e],je[_e]=ot(C,je[_e]);const nt=je[0],at=l.convert(C.format,C.colorSpace),Xe=l.convert(C.type),_t=H(C.internalFormat,at,Xe,C.colorSpace),ft=C.isVideoTexture!==!0,Ct=me.__version===void 0||ve===!0,te=ye.dataReady;let Ie=L(C,nt);B(s.TEXTURE_CUBE_MAP,C);let pe;if(gt){ft&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,_t,nt.width,nt.height);for(let _e=0;_e<6;_e++){pe=je[_e].mipmaps;for(let ke=0;ke<pe.length;ke++){const Ue=pe[ke];C.format!==li?at!==null?ft?te&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ue.width,Ue.height,at,Ue.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,_t,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?te&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ue.width,Ue.height,at,Xe,Ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,_t,Ue.width,Ue.height,0,at,Xe,Ue.data)}}}else{if(pe=C.mipmaps,ft&&Ct){pe.length>0&&Ie++;const _e=Ce(je[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,_t,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){ft?te&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je[_e].width,je[_e].height,at,Xe,je[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,_t,je[_e].width,je[_e].height,0,at,Xe,je[_e].data);for(let ke=0;ke<pe.length;ke++){const dt=pe[ke].image[_e].image;ft?te&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,dt.width,dt.height,at,Xe,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,_t,dt.width,dt.height,0,at,Xe,dt.data)}}else{ft?te&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,at,Xe,je[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,_t,at,Xe,je[_e]);for(let ke=0;ke<pe.length;ke++){const Ue=pe[ke];ft?te&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,at,Xe,Ue.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,_t,at,Xe,Ue.image[_e])}}}E(C)&&y(s.TEXTURE_CUBE_MAP),me.__version=ye.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function ie(z,C,le,ve,ye,me){const He=l.convert(le.format,le.colorSpace),be=l.convert(le.type),Ve=H(le.internalFormat,He,be,le.colorSpace),gt=r.get(C),we=r.get(le);if(we.__renderTarget=C,!gt.__hasExternalTextures){const je=Math.max(1,C.width>>me),nt=Math.max(1,C.height>>me);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,me,Ve,je,nt,C.depth,0,He,be,null):n.texImage2D(ye,me,Ve,je,nt,0,He,be,null)}n.bindFramebuffer(s.FRAMEBUFFER,z),De(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ye,we.__webglTexture,0,et(C)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,ye,we.__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function se(z,C,le){if(s.bindRenderbuffer(s.RENDERBUFFER,z),C.depthBuffer){const ve=C.depthTexture,ye=ve&&ve.isDepthTexture?ve.type:null,me=k(C.stencilBuffer,ye),He=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=et(C);De(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,me,C.width,C.height):le?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,me,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,z)}else{const ve=C.textures;for(let ye=0;ye<ve.length;ye++){const me=ve[ye],He=l.convert(me.format,me.colorSpace),be=l.convert(me.type),Ve=H(me.internalFormat,He,be,me.colorSpace),gt=et(C);le&&De(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Ve,C.width,C.height):De(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,Ve,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(z,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,z),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(C.depthTexture);ve.__renderTarget=C,(!ve.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ee(C.depthTexture,0);const ye=ve.__webglTexture,me=et(C);if(C.depthTexture.format===qs)De(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(C.depthTexture.format===Js)De(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Se(z){const C=r.get(z),le=z.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==z.depthTexture){const ve=z.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ve){const ye=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ve.removeEventListener("dispose",ye)};ve.addEventListener("dispose",ye),C.__depthDisposeCallback=ye}C.__boundDepthTexture=ve}if(z.depthTexture&&!C.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");ge(C.__webglFramebuffer,z)}else if(le){C.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ve]),C.__webglDepthbuffer[ve]===void 0)C.__webglDepthbuffer[ve]=s.createRenderbuffer(),se(C.__webglDepthbuffer[ve],z,!1);else{const ye=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),se(C.__webglDepthbuffer,z,!1);else{const ve=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,ye)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(z,C,le){const ve=r.get(z);C!==void 0&&ie(ve.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),le!==void 0&&Se(z)}function Je(z){const C=z.texture,le=r.get(z),ve=r.get(C);z.addEventListener("dispose",I);const ye=z.textures,me=z.isWebGLCubeRenderTarget===!0,He=ye.length>1;if(He||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=C.version,c.memory.textures++),me){le.__webglFramebuffer=[];for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0){le.__webglFramebuffer[be]=[];for(let Ve=0;Ve<C.mipmaps.length;Ve++)le.__webglFramebuffer[be][Ve]=s.createFramebuffer()}else le.__webglFramebuffer[be]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){le.__webglFramebuffer=[];for(let be=0;be<C.mipmaps.length;be++)le.__webglFramebuffer[be]=s.createFramebuffer()}else le.__webglFramebuffer=s.createFramebuffer();if(He)for(let be=0,Ve=ye.length;be<Ve;be++){const gt=r.get(ye[be]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),c.memory.textures++)}if(z.samples>0&&De(z)===!1){le.__webglMultisampledFramebuffer=s.createFramebuffer(),le.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let be=0;be<ye.length;be++){const Ve=ye[be];le.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const gt=l.convert(Ve.format,Ve.colorSpace),we=l.convert(Ve.type),je=H(Ve.internalFormat,gt,we,Ve.colorSpace,z.isXRRenderTarget===!0),nt=et(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,je,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,le.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(le.__webglDepthRenderbuffer=s.createRenderbuffer(),se(le.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),B(s.TEXTURE_CUBE_MAP,C);for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ve=0;Ve<C.mipmaps.length;Ve++)ie(le.__webglFramebuffer[be][Ve],z,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve);else ie(le.__webglFramebuffer[be],z,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);E(C)&&y(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let be=0,Ve=ye.length;be<Ve;be++){const gt=ye[be],we=r.get(gt);n.bindTexture(s.TEXTURE_2D,we.__webglTexture),B(s.TEXTURE_2D,gt),ie(le.__webglFramebuffer,z,gt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),E(gt)&&y(s.TEXTURE_2D)}n.unbindTexture()}else{let be=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(be=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,ve.__webglTexture),B(be,C),C.mipmaps&&C.mipmaps.length>0)for(let Ve=0;Ve<C.mipmaps.length;Ve++)ie(le.__webglFramebuffer[Ve],z,C,s.COLOR_ATTACHMENT0,be,Ve);else ie(le.__webglFramebuffer,z,C,s.COLOR_ATTACHMENT0,be,0);E(C)&&y(be),n.unbindTexture()}z.depthBuffer&&Se(z)}function Ge(z){const C=z.textures;for(let le=0,ve=C.length;le<ve;le++){const ye=C[le];if(E(ye)){const me=q(z),He=r.get(ye).__webglTexture;n.bindTexture(me,He),y(me),n.unbindTexture()}}}const Qe=[],X=[];function ct(z){if(z.samples>0){if(De(z)===!1){const C=z.textures,le=z.width,ve=z.height;let ye=s.COLOR_BUFFER_BIT;const me=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(z),be=C.length>1;if(be)for(let Ve=0;Ve<C.length;Ve++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ve=0;Ve<C.length;Ve++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ve]);const gt=r.get(C[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,gt,0)}s.blitFramebuffer(0,0,le,ve,0,0,le,ve,ye,s.NEAREST),h===!0&&(Qe.length=0,X.length=0,Qe.push(s.COLOR_ATTACHMENT0+Ve),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Qe.push(me),X.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ve=0;Ve<C.length;Ve++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ve]);const gt=r.get(C[Ve]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,gt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&h){const C=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function et(z){return Math.min(a.maxSamples,z.samples)}function De(z){const C=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Le(z){const C=c.render.frame;S.get(z)!==C&&(S.set(z,C),z.update())}function ot(z,C){const le=z.colorSpace,ve=z.format,ye=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||le!==eo&&le!==xr&&(bt.getTransfer(le)===Lt?(ve!==li||ye!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",le)),C}function Ce(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(g.width=z.naturalWidth||z.width,g.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(g.width=z.displayWidth,g.height=z.displayHeight):(g.width=z.width,g.height=z.height),g}this.allocateTextureUnit=F,this.resetTextureUnits=K,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=v,this.setTextureCube=Y,this.rebindTextures=Re,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=De}function oT(s,e){function n(r,a=xr){let l;const c=bt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return s.BYTE;if(r===Mg)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===dd)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===Tg)return s.ALPHA;if(r===wg)return s.RGB;if(r===li)return s.RGBA;if(r===Ag)return s.LUMINANCE;if(r===Rg)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===bg)return s.RED;if(r===md)return s.RED_INTEGER;if(r===Cg)return s.RG;if(r===gd)return s.RG_INTEGER;if(r===_d)return s.RGBA_INTEGER;if(r===Ol||r===Ul||r===Fl||r===kl)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uf||r===Ff||r===kf||r===zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Uf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ff)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bf||r===Hf||r===Vf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Bf||r===Hf)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Vf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gf||r===Wf||r===jf||r===Xf||r===qf||r===Yf||r===Kf||r===$f||r===Zf||r===Qf||r===Jf||r===ed||r===td||r===nd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Gf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$f)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ed)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===td)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===id||r===rd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===id)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pg||r===sd||r===od||r===ad)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===sd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===od)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ad)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const aT={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){c=!0;for(const b of e.hand.values()){const E=n.getJointPose(b,r),y=this._getHandJoint(g,b);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const S=g.joints["index-finger-tip"],x=g.joints["thumb-tip"],M=S.position.distanceTo(x.position),A=.02,D=.005;g.inputState.pinching&&M>A+D?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&M<=A-D&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(aT)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),g!==null&&(g.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
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

}`;class cT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new On,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:lT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bi(new Yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fT extends ns{constructor(e,n){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,g=null,S=null,x=null,M=null,A=null,D=null;const b=new cT,E=n.getContextAttributes();let y=null,q=null;const H=[],k=[],L=new yt;let P=null;const I=new Zn;I.viewport=new Xt;const V=new Zn;V.viewport=new Xt;const T=[I,V],m=new Ly;let O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=H[j];return J===void 0&&(J=new lf,H[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=H[j];return J===void 0&&(J=new lf,H[j]=J),J.getGripSpace()},this.getHand=function(j){let J=H[j];return J===void 0&&(J=new lf,H[j]=J),J.getHandSpace()};function F(j){const J=k.indexOf(j.inputSource);if(J===-1)return;const ie=H[J];ie!==void 0&&(ie.update(j.inputSource,j.frame,g||c),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",ee);for(let j=0;j<H.length;j++){const J=k[j];J!==null&&(k[j]=null,H[j].disconnect(J))}O=null,K=null,b.reset(),e.setRenderTarget(y),A=null,M=null,x=null,a=null,q=null,ce.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(j){g=j},this.getBaseLayer=function(){return M!==null?M:A},this.getBinding=function(){return x},this.getFrame=function(){return D},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",G),a.addEventListener("inputsourceschange",ee),E.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let ie=null,se=null,ge=null;E.depth&&(ge=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=E.stencil?Js:qs,se=E.stencil?Qs:Jr);const Se={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:l};x=new XRWebGLBinding(a,n),M=x.createProjectionLayer(Se),a.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),q=new es(M.textureWidth,M.textureHeight,{format:li,type:Gi,depthTexture:new jg(M.textureWidth,M.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1})}else{const ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};A=new XRWebGLLayer(a,n,ie),a.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),q=new es(A.framebufferWidth,A.framebufferHeight,{format:li,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}q.isXRRenderTarget=!0,this.setFoveation(h),g=null,c=await a.requestReferenceSpace(f),ce.setContext(a),ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ee(j){for(let J=0;J<j.removed.length;J++){const ie=j.removed[J],se=k.indexOf(ie);se>=0&&(k[se]=null,H[se].disconnect(ie))}for(let J=0;J<j.added.length;J++){const ie=j.added[J];let se=k.indexOf(ie);if(se===-1){for(let Se=0;Se<H.length;Se++)if(Se>=k.length){k.push(ie),se=Se;break}else if(k[Se]===null){k[Se]=ie,se=Se;break}if(se===-1)break}const ge=H[se];ge&&ge.connect(ie)}}const Z=new fe,v=new fe;function Y(j,J,ie){Z.setFromMatrixPosition(J.matrixWorld),v.setFromMatrixPosition(ie.matrixWorld);const se=Z.distanceTo(v),ge=J.projectionMatrix.elements,Se=ie.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),Je=ge[14]/(ge[10]+1),Ge=(ge[9]+1)/ge[5],Qe=(ge[9]-1)/ge[5],X=(ge[8]-1)/ge[0],ct=(Se[8]+1)/Se[0],et=Re*X,De=Re*ct,Le=se/(-X+ct),ot=Le*-X;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ot),j.translateZ(Le),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ge[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ce=Re+Le,z=Je+Le,C=et-ot,le=De+(se-ot),ve=Ge*Je/z*Ce,ye=Qe*Je/z*Ce;j.projectionMatrix.makePerspective(C,le,ve,ye,Ce,z),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function U(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let J=j.near,ie=j.far;b.texture!==null&&(b.depthNear>0&&(J=b.depthNear),b.depthFar>0&&(ie=b.depthFar)),m.near=V.near=I.near=J,m.far=V.far=I.far=ie,(O!==m.near||K!==m.far)&&(a.updateRenderState({depthNear:m.near,depthFar:m.far}),O=m.near,K=m.far),I.layers.mask=j.layers.mask|2,V.layers.mask=j.layers.mask|4,m.layers.mask=I.layers.mask|V.layers.mask;const se=j.parent,ge=m.cameras;U(m,se);for(let Se=0;Se<ge.length;Se++)U(ge[Se],se);ge.length===2?Y(m,I,V):m.projectionMatrix.copy(I.projectionMatrix),_(j,m,se)};function _(j,J,ie){ie===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ko*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(M===null&&A===null))return h},this.setFoveation=function(j){h=j,M!==null&&(M.fixedFoveation=j),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(m)};let w=null;function B(j,J){if(S=J.getViewerPose(g||c),D=J,S!==null){const ie=S.views;A!==null&&(e.setRenderTargetFramebuffer(q,A.framebuffer),e.setRenderTarget(q));let se=!1;ie.length!==m.cameras.length&&(m.cameras.length=0,se=!0);for(let Se=0;Se<ie.length;Se++){const Re=ie[Se];let Je=null;if(A!==null)Je=A.getViewport(Re);else{const Qe=x.getViewSubImage(M,Re);Je=Qe.viewport,Se===0&&(e.setRenderTargetTextures(q,Qe.colorTexture,M.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(q))}let Ge=T[Se];Ge===void 0&&(Ge=new Zn,Ge.layers.enable(Se),Ge.viewport=new Xt,T[Se]=Ge),Ge.matrix.fromArray(Re.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Re.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Je.x,Je.y,Je.width,Je.height),Se===0&&(m.matrix.copy(Ge.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),se===!0&&m.cameras.push(Ge)}const ge=a.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Se=x.getDepthInformation(ie[0]);Se&&Se.isValid&&Se.texture&&b.init(e,Se,a.renderState)}}for(let ie=0;ie<H.length;ie++){const se=k[ie],ge=H[ie];se!==null&&ge!==void 0&&ge.update(se,J,g||c)}w&&w(j,J),J.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:J}),D=null}const ce=new Xg;ce.setAnimationLoop(B),this.setAnimationLoop=function(j){w=j},this.dispose=function(){}}}const jr=new Wi,dT=new qt;function hT(s,e){function n(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function r(E,y){y.color.getRGB(E.fogColor.value,Bg(s)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function a(E,y,q,H,k){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(E,y):y.isMeshToonMaterial?(l(E,y),x(E,y)):y.isMeshPhongMaterial?(l(E,y),S(E,y)):y.isMeshStandardMaterial?(l(E,y),M(E,y),y.isMeshPhysicalMaterial&&A(E,y,k)):y.isMeshMatcapMaterial?(l(E,y),D(E,y)):y.isMeshDepthMaterial?l(E,y):y.isMeshDistanceMaterial?(l(E,y),b(E,y)):y.isMeshNormalMaterial?l(E,y):y.isLineBasicMaterial?(c(E,y),y.isLineDashedMaterial&&f(E,y)):y.isPointsMaterial?h(E,y,q,H):y.isSpriteMaterial?g(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,n(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,n(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===Nn&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,n(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===Nn&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,n(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,n(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const q=e.get(y),H=q.envMap,k=q.envMapRotation;H&&(E.envMap.value=H,jr.copy(k),jr.x*=-1,jr.y*=-1,jr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),E.envMapRotation.value.setFromMatrix4(dT.makeRotationFromEuler(jr)),E.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,E.aoMapTransform))}function c(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,n(y.map,E.mapTransform))}function f(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function h(E,y,q,H){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*q,E.scale.value=H*.5,y.map&&(E.map.value=y.map,n(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function g(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,n(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function S(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function x(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function M(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function A(E,y,q){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Nn&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=q.texture,E.transmissionSamplerSize.value.set(q.width,q.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,E.specularIntensityMapTransform))}function D(E,y){y.matcap&&(E.matcap.value=y.matcap)}function b(E,y){const q=e.get(y).light;E.referencePosition.value.setFromMatrixPosition(q.matrixWorld),E.nearDistance.value=q.shadow.camera.near,E.farDistance.value=q.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function pT(s,e,n,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(q,H){const k=H.program;r.uniformBlockBinding(q,k)}function g(q,H){let k=a[q.id];k===void 0&&(D(q),k=S(q),a[q.id]=k,q.addEventListener("dispose",E));const L=H.program;r.updateUBOMapping(q,L);const P=e.render.frame;l[q.id]!==P&&(M(q),l[q.id]=P)}function S(q){const H=x();q.__bindingPointIndex=H;const k=s.createBuffer(),L=q.__size,P=q.usage;return s.bindBuffer(s.UNIFORM_BUFFER,k),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,H,k),k}function x(){for(let q=0;q<f;q++)if(c.indexOf(q)===-1)return c.push(q),q;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(q){const H=a[q.id],k=q.uniforms,L=q.__cache;s.bindBuffer(s.UNIFORM_BUFFER,H);for(let P=0,I=k.length;P<I;P++){const V=Array.isArray(k[P])?k[P]:[k[P]];for(let T=0,m=V.length;T<m;T++){const O=V[T];if(A(O,P,T,L)===!0){const K=O.__offset,F=Array.isArray(O.value)?O.value:[O.value];let G=0;for(let ee=0;ee<F.length;ee++){const Z=F[ee],v=b(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,K+G,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,G),G+=v.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function A(q,H,k,L){const P=q.value,I=H+"_"+k;if(L[I]===void 0)return typeof P=="number"||typeof P=="boolean"?L[I]=P:L[I]=P.clone(),!0;{const V=L[I];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return L[I]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function D(q){const H=q.uniforms;let k=0;const L=16;for(let I=0,V=H.length;I<V;I++){const T=Array.isArray(H[I])?H[I]:[H[I]];for(let m=0,O=T.length;m<O;m++){const K=T[m],F=Array.isArray(K.value)?K.value:[K.value];for(let G=0,ee=F.length;G<ee;G++){const Z=F[G],v=b(Z),Y=k%L,U=Y%v.boundary,_=Y+U;k+=U,_!==0&&L-_<v.storage&&(k+=L-_),K.__data=new Float32Array(v.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=k,k+=v.storage}}}const P=k%L;return P>0&&(k+=L-P),q.__size=k,q.__cache={},this}function b(q){const H={boundary:0,storage:0};return typeof q=="number"||typeof q=="boolean"?(H.boundary=4,H.storage=4):q.isVector2?(H.boundary=8,H.storage=8):q.isVector3||q.isColor?(H.boundary=16,H.storage=12):q.isVector4?(H.boundary=16,H.storage=16):q.isMatrix3?(H.boundary=48,H.storage=48):q.isMatrix4?(H.boundary=64,H.storage=64):q.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",q),H}function E(q){const H=q.target;H.removeEventListener("dispose",E);const k=c.indexOf(H.__bindingPointIndex);c.splice(k,1),s.deleteBuffer(a[H.id]),delete a[H.id],delete l[H.id]}function y(){for(const q in a)s.deleteBuffer(a[q]);c=[],a={},l={}}return{bind:h,update:g,dispose:y}}class mT{constructor(e={}){const{canvas:n=Q0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:M=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const D=new Uint32Array(4),b=new Int32Array(4);let E=null,y=null;const q=[],H=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Er,this.toneMappingExposure=1;const k=this;let L=!1,P=0,I=0,V=null,T=-1,m=null;const O=new Xt,K=new Xt;let F=null;const G=new Pt(0);let ee=0,Z=n.width,v=n.height,Y=1,U=null,_=null;const w=new Xt(0,0,Z,v),B=new Xt(0,0,Z,v);let ce=!1;const j=new Gg;let J=!1,ie=!1;this.transmissionResolutionScale=1;const se=new qt,ge=new qt,Se=new fe,Re=new Xt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Qe(){return V===null?Y:1}let X=r;function ct(N,ne){return n.getContext(N,ne)}try{const N={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fd}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),X===null){const ne="webgl2";if(X=ct(ne,N),X===null)throw ct(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let et,De,Le,ot,Ce,z,C,le,ve,ye,me,He,be,Ve,gt,we,je,nt,at,Xe,_t,ft,Ct,te;function Ie(){et=new TM(X),et.init(),ft=new oT(X,et),De=new vM(X,et,e,ft),Le=new rT(X,et),De.reverseDepthBuffer&&M&&Le.buffers.depth.setReversed(!0),ot=new RM(X),Ce=new jE,z=new sT(X,et,Le,Ce,De,ft,ot),C=new SM(k),le=new EM(k),ve=new Ny(X),Ct=new gM(X,ve),ye=new wM(X,ve,ot,Ct),me=new CM(X,ye,ve,ot),at=new bM(X,De,z),we=new yM(Ce),He=new WE(k,C,le,et,De,Ct,we),be=new hT(k,Ce),Ve=new qE,gt=new JE(et),nt=new mM(k,C,le,Le,me,A,h),je=new nT(k,me,De),te=new pT(X,ot,De,Le),Xe=new _M(X,et,ot),_t=new AM(X,et,ot),ot.programs=He.programs,k.capabilities=De,k.extensions=et,k.properties=Ce,k.renderLists=Ve,k.shadowMap=je,k.state=Le,k.info=ot}Ie();const pe=new fT(k,X);this.xr=pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=et.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=et.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(N){N!==void 0&&(Y=N,this.setSize(Z,v,!1))},this.getSize=function(N){return N.set(Z,v)},this.setSize=function(N,ne,de=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=N,v=ne,n.width=Math.floor(N*Y),n.height=Math.floor(ne*Y),de===!0&&(n.style.width=N+"px",n.style.height=ne+"px"),this.setViewport(0,0,N,ne)},this.getDrawingBufferSize=function(N){return N.set(Z*Y,v*Y).floor()},this.setDrawingBufferSize=function(N,ne,de){Z=N,v=ne,Y=de,n.width=Math.floor(N*de),n.height=Math.floor(ne*de),this.setViewport(0,0,N,ne)},this.getCurrentViewport=function(N){return N.copy(O)},this.getViewport=function(N){return N.copy(w)},this.setViewport=function(N,ne,de,ae){N.isVector4?w.set(N.x,N.y,N.z,N.w):w.set(N,ne,de,ae),Le.viewport(O.copy(w).multiplyScalar(Y).round())},this.getScissor=function(N){return N.copy(B)},this.setScissor=function(N,ne,de,ae){N.isVector4?B.set(N.x,N.y,N.z,N.w):B.set(N,ne,de,ae),Le.scissor(K.copy(B).multiplyScalar(Y).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(N){Le.setScissorTest(ce=N)},this.setOpaqueSort=function(N){U=N},this.setTransparentSort=function(N){_=N},this.getClearColor=function(N){return N.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(N=!0,ne=!0,de=!0){let ae=0;if(N){let re=!1;if(V!==null){const Te=V.texture.format;re=Te===_d||Te===gd||Te===md}if(re){const Te=V.texture.type,Ne=Te===Gi||Te===Jr||Te===Yo||Te===Qs||Te===hd||Te===pd,ze=nt.getClearColor(),qe=nt.getClearAlpha(),lt=ze.r,st=ze.g,Ke=ze.b;Ne?(D[0]=lt,D[1]=st,D[2]=Ke,D[3]=qe,X.clearBufferuiv(X.COLOR,0,D)):(b[0]=lt,b[1]=st,b[2]=Ke,b[3]=qe,X.clearBufferiv(X.COLOR,0,b))}else ae|=X.COLOR_BUFFER_BIT}ne&&(ae|=X.DEPTH_BUFFER_BIT),de&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),nt.dispose(),Ve.dispose(),gt.dispose(),Ce.dispose(),C.dispose(),le.dispose(),me.dispose(),Ct.dispose(),te.dispose(),He.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",is),pe.removeEventListener("sessionend",Xi),Si.stop()};function _e(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const N=ot.autoReset,ne=je.enabled,de=je.autoUpdate,ae=je.needsUpdate,re=je.type;Ie(),ot.autoReset=N,je.enabled=ne,je.autoUpdate=de,je.needsUpdate=ae,je.type=re}function Ue(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function dt(N){const ne=N.target;ne.removeEventListener("dispose",dt),Ot(ne)}function Ot(N){$t(N),Ce.remove(N)}function $t(N){const ne=Ce.get(N).programs;ne!==void 0&&(ne.forEach(function(de){He.releaseProgram(de)}),N.isShaderMaterial&&He.releaseShaderCache(N))}this.renderBufferDirect=function(N,ne,de,ae,re,Te){ne===null&&(ne=Je);const Ne=re.isMesh&&re.matrixWorld.determinant()<0,ze=ia(N,ne,de,ae,re);Le.setMaterial(ae,Ne);let qe=de.index,lt=1;if(ae.wireframe===!0){if(qe=ye.getWireframeAttribute(de),qe===void 0)return;lt=2}const st=de.drawRange,Ke=de.attributes.position;let Mt=st.start*lt,ht=(st.start+st.count)*lt;Te!==null&&(Mt=Math.max(Mt,Te.start*lt),ht=Math.min(ht,(Te.start+Te.count)*lt)),qe!==null?(Mt=Math.max(Mt,0),ht=Math.min(ht,qe.count)):Ke!=null&&(Mt=Math.max(Mt,0),ht=Math.min(ht,Ke.count));const Vt=ht-Mt;if(Vt<0||Vt===1/0)return;Ct.setup(re,ae,ze,de,qe);let kt,Et=Xe;if(qe!==null&&(kt=ve.get(qe),Et=_t,Et.setIndex(kt)),re.isMesh)ae.wireframe===!0?(Le.setLineWidth(ae.wireframeLinewidth*Qe()),Et.setMode(X.LINES)):Et.setMode(X.TRIANGLES);else if(re.isLine){let tt=ae.linewidth;tt===void 0&&(tt=1),Le.setLineWidth(tt*Qe()),re.isLineSegments?Et.setMode(X.LINES):re.isLineLoop?Et.setMode(X.LINE_LOOP):Et.setMode(X.LINE_STRIP)}else re.isPoints?Et.setMode(X.POINTS):re.isSprite&&Et.setMode(X.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)Et.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Et.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const tt=re._multiDrawStarts,Gt=re._multiDrawCounts,xt=re._multiDrawCount,dn=qe?ve.get(qe).bytesPerElement:1,Yi=Ce.get(ae).currentProgram.getUniforms();for(let xn=0;xn<xt;xn++)Yi.setValue(X,"_gl_DrawID",xn),Et.render(tt[xn]/dn,Gt[xn])}else if(re.isInstancedMesh)Et.renderInstances(Mt,Vt,re.count);else if(de.isInstancedBufferGeometry){const tt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Gt=Math.min(de.instanceCount,tt);Et.renderInstances(Mt,Vt,Gt)}else Et.render(Mt,Vt)};function Tt(N,ne,de){N.transparent===!0&&N.side===Fi&&N.forceSinglePass===!1?(N.side=Nn,N.needsUpdate=!0,rs(N,ne,de),N.side=Tr,N.needsUpdate=!0,rs(N,ne,de),N.side=Fi):rs(N,ne,de)}this.compile=function(N,ne,de=null){de===null&&(de=N),y=gt.get(de),y.init(ne),H.push(y),de.traverseVisible(function(re){re.isLight&&re.layers.test(ne.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),N!==de&&N.traverseVisible(function(re){re.isLight&&re.layers.test(ne.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights();const ae=new Set;return N.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Te=re.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const ze=Te[Ne];Tt(ze,de,re),ae.add(ze)}else Tt(Te,de,re),ae.add(Te)}),H.pop(),y=null,ae},this.compileAsync=function(N,ne,de=null){const ae=this.compile(N,ne,de);return new Promise(re=>{function Te(){if(ae.forEach(function(Ne){Ce.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){re(N);return}setTimeout(Te,10)}et.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let An=null;function Sn(N){An&&An(N)}function is(){Si.stop()}function Xi(){Si.start()}const Si=new Xg;Si.setAnimationLoop(Sn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(N){An=N,pe.setAnimationLoop(N),N===null?Si.stop():Si.start()},pe.addEventListener("sessionstart",is),pe.addEventListener("sessionend",Xi),this.render=function(N,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(ne),ne=pe.getCamera()),N.isScene===!0&&N.onBeforeRender(k,N,ne,V),y=gt.get(N,H.length),y.init(ne),H.push(y),ge.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),j.setFromProjectionMatrix(ge),ie=this.localClippingEnabled,J=we.init(this.clippingPlanes,ie),E=Ve.get(N,q.length),E.init(),q.push(E),pe.enabled===!0&&pe.isPresenting===!0){const Te=k.xr.getDepthSensingMesh();Te!==null&&xi(Te,ne,-1/0,k.sortObjects)}xi(N,ne,0,k.sortObjects),E.finish(),k.sortObjects===!0&&E.sort(U,_),Ge=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Ge&&nt.addToRenderList(E,N),this.info.render.frame++,J===!0&&we.beginShadows();const de=y.state.shadowsArray;je.render(de,N,ne),J===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=E.opaque,re=E.transmissive;if(y.setupLights(),ne.isArrayCamera){const Te=ne.cameras;if(re.length>0)for(let Ne=0,ze=Te.length;Ne<ze;Ne++){const qe=Te[Ne];Rr(ae,re,N,qe)}Ge&&nt.render(N);for(let Ne=0,ze=Te.length;Ne<ze;Ne++){const qe=Te[Ne];Ar(E,N,qe,qe.viewport)}}else re.length>0&&Rr(ae,re,N,ne),Ge&&nt.render(N),Ar(E,N,ne);V!==null&&I===0&&(z.updateMultisampleRenderTarget(V),z.updateRenderTargetMipmap(V)),N.isScene===!0&&N.onAfterRender(k,N,ne),Ct.resetDefaultState(),T=-1,m=null,H.pop(),H.length>0?(y=H[H.length-1],J===!0&&we.setGlobalState(k.clippingPlanes,y.state.camera)):y=null,q.pop(),q.length>0?E=q[q.length-1]:E=null};function xi(N,ne,de,ae){if(N.visible===!1)return;if(N.layers.test(ne.layers)){if(N.isGroup)de=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ne);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||j.intersectsSprite(N)){ae&&Re.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ge);const Ne=me.update(N),ze=N.material;ze.visible&&E.push(N,Ne,ze,de,Re.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||j.intersectsObject(N))){const Ne=me.update(N),ze=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Re.copy(N.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Re.copy(Ne.boundingSphere.center)),Re.applyMatrix4(N.matrixWorld).applyMatrix4(ge)),Array.isArray(ze)){const qe=Ne.groups;for(let lt=0,st=qe.length;lt<st;lt++){const Ke=qe[lt],Mt=ze[Ke.materialIndex];Mt&&Mt.visible&&E.push(N,Ne,Mt,de,Re.z,Ke)}}else ze.visible&&E.push(N,Ne,ze,de,Re.z,null)}}const Te=N.children;for(let Ne=0,ze=Te.length;Ne<ze;Ne++)xi(Te[Ne],ne,de,ae)}function Ar(N,ne,de,ae){const re=N.opaque,Te=N.transmissive,Ne=N.transparent;y.setupLightsView(de),J===!0&&we.setGlobalState(k.clippingPlanes,de),ae&&Le.viewport(O.copy(ae)),re.length>0&&qi(re,ne,de),Te.length>0&&qi(Te,ne,de),Ne.length>0&&qi(Ne,ne,de),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Rr(N,ne,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new es(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?$o:Gi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||O;Te.setSize(Ne.z*k.transmissionResolutionScale,Ne.w*k.transmissionResolutionScale);const ze=k.getRenderTarget();k.setRenderTarget(Te),k.getClearColor(G),ee=k.getClearAlpha(),ee<1&&k.setClearColor(16777215,.5),k.clear(),Ge&&nt.render(de);const qe=k.toneMapping;k.toneMapping=Er;const lt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),J===!0&&we.setGlobalState(k.clippingPlanes,ae),qi(N,de,ae),z.updateMultisampleRenderTarget(Te),z.updateRenderTargetMipmap(Te),et.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ke=0,Mt=ne.length;Ke<Mt;Ke++){const ht=ne[Ke],Vt=ht.object,kt=ht.geometry,Et=ht.material,tt=ht.group;if(Et.side===Fi&&Vt.layers.test(ae.layers)){const Gt=Et.side;Et.side=Nn,Et.needsUpdate=!0,ta(Vt,de,ae,kt,Et,tt),Et.side=Gt,Et.needsUpdate=!0,st=!0}}st===!0&&(z.updateMultisampleRenderTarget(Te),z.updateRenderTargetMipmap(Te))}k.setRenderTarget(ze),k.setClearColor(G,ee),lt!==void 0&&(ae.viewport=lt),k.toneMapping=qe}function qi(N,ne,de){const ae=ne.isScene===!0?ne.overrideMaterial:null;for(let re=0,Te=N.length;re<Te;re++){const Ne=N[re],ze=Ne.object,qe=Ne.geometry,lt=ae===null?Ne.material:ae,st=Ne.group;ze.layers.test(de.layers)&&ta(ze,ne,de,qe,lt,st)}}function ta(N,ne,de,ae,re,Te){N.onBeforeRender(k,ne,de,ae,re,Te),N.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),re.onBeforeRender(k,ne,de,ae,N,Te),re.transparent===!0&&re.side===Fi&&re.forceSinglePass===!1?(re.side=Nn,re.needsUpdate=!0,k.renderBufferDirect(de,ne,ae,re,N,Te),re.side=Tr,re.needsUpdate=!0,k.renderBufferDirect(de,ne,ae,re,N,Te),re.side=Fi):k.renderBufferDirect(de,ne,ae,re,N,Te),N.onAfterRender(k,ne,de,ae,re,Te)}function rs(N,ne,de){ne.isScene!==!0&&(ne=Je);const ae=Ce.get(N),re=y.state.lights,Te=y.state.shadowsArray,Ne=re.state.version,ze=He.getParameters(N,re.state,Te,ne,de),qe=He.getProgramCacheKey(ze);let lt=ae.programs;ae.environment=N.isMeshStandardMaterial?ne.environment:null,ae.fog=ne.fog,ae.envMap=(N.isMeshStandardMaterial?le:C).get(N.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&N.envMap===null?ne.environmentRotation:N.envMapRotation,lt===void 0&&(N.addEventListener("dispose",dt),lt=new Map,ae.programs=lt);let st=lt.get(qe);if(st!==void 0){if(ae.currentProgram===st&&ae.lightsStateVersion===Ne)return ci(N,ze),st}else ze.uniforms=He.getUniforms(N),N.onBeforeCompile(ze,k),st=He.acquireProgram(ze,qe),lt.set(qe,st),ae.uniforms=ze.uniforms;const Ke=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ke.clippingPlanes=we.uniform),ci(N,ze),ae.needsLights=Ql(N),ae.lightsStateVersion=Ne,ae.needsLights&&(Ke.ambientLightColor.value=re.state.ambient,Ke.lightProbe.value=re.state.probe,Ke.directionalLights.value=re.state.directional,Ke.directionalLightShadows.value=re.state.directionalShadow,Ke.spotLights.value=re.state.spot,Ke.spotLightShadows.value=re.state.spotShadow,Ke.rectAreaLights.value=re.state.rectArea,Ke.ltc_1.value=re.state.rectAreaLTC1,Ke.ltc_2.value=re.state.rectAreaLTC2,Ke.pointLights.value=re.state.point,Ke.pointLightShadows.value=re.state.pointShadow,Ke.hemisphereLights.value=re.state.hemi,Ke.directionalShadowMap.value=re.state.directionalShadowMap,Ke.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ke.spotShadowMap.value=re.state.spotShadowMap,Ke.spotLightMatrix.value=re.state.spotLightMatrix,Ke.spotLightMap.value=re.state.spotLightMap,Ke.pointShadowMap.value=re.state.pointShadowMap,Ke.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.currentProgram=st,ae.uniformsList=null,st}function na(N){if(N.uniformsList===null){const ne=N.currentProgram.getUniforms();N.uniformsList=Bl.seqWithValue(ne.seq,N.uniforms)}return N.uniformsList}function ci(N,ne){const de=Ce.get(N);de.outputColorSpace=ne.outputColorSpace,de.batching=ne.batching,de.batchingColor=ne.batchingColor,de.instancing=ne.instancing,de.instancingColor=ne.instancingColor,de.instancingMorph=ne.instancingMorph,de.skinning=ne.skinning,de.morphTargets=ne.morphTargets,de.morphNormals=ne.morphNormals,de.morphColors=ne.morphColors,de.morphTargetsCount=ne.morphTargetsCount,de.numClippingPlanes=ne.numClippingPlanes,de.numIntersection=ne.numClipIntersection,de.vertexAlphas=ne.vertexAlphas,de.vertexTangents=ne.vertexTangents,de.toneMapping=ne.toneMapping}function ia(N,ne,de,ae,re){ne.isScene!==!0&&(ne=Je),z.resetTextureUnits();const Te=ne.fog,Ne=ae.isMeshStandardMaterial?ne.environment:null,ze=V===null?k.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:eo,qe=(ae.isMeshStandardMaterial?le:C).get(ae.envMap||Ne),lt=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,st=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ke=!!de.morphAttributes.position,Mt=!!de.morphAttributes.normal,ht=!!de.morphAttributes.color;let Vt=Er;ae.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Vt=k.toneMapping);const kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Et=kt!==void 0?kt.length:0,tt=Ce.get(ae),Gt=y.state.lights;if(J===!0&&(ie===!0||N!==m)){const un=N===m&&ae.id===T;we.setState(ae,N,un)}let xt=!1;ae.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Gt.state.version||tt.outputColorSpace!==ze||re.isBatchedMesh&&tt.batching===!1||!re.isBatchedMesh&&tt.batching===!0||re.isBatchedMesh&&tt.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&tt.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&tt.instancing===!1||!re.isInstancedMesh&&tt.instancing===!0||re.isSkinnedMesh&&tt.skinning===!1||!re.isSkinnedMesh&&tt.skinning===!0||re.isInstancedMesh&&tt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&tt.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&tt.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&tt.instancingMorph===!1&&re.morphTexture!==null||tt.envMap!==qe||ae.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==we.numPlanes||tt.numIntersection!==we.numIntersection)||tt.vertexAlphas!==lt||tt.vertexTangents!==st||tt.morphTargets!==Ke||tt.morphNormals!==Mt||tt.morphColors!==ht||tt.toneMapping!==Vt||tt.morphTargetsCount!==Et)&&(xt=!0):(xt=!0,tt.__version=ae.version);let dn=tt.currentProgram;xt===!0&&(dn=rs(ae,ne,re));let Yi=!1,xn=!1,Mi=!1;const It=dn.getUniforms(),hn=tt.uniforms;if(Le.useProgram(dn.program)&&(Yi=!0,xn=!0,Mi=!0),ae.id!==T&&(T=ae.id,xn=!0),Yi||m!==N){Le.buffers.depth.getReversed()?(se.copy(N.projectionMatrix),ey(se),ty(se),It.setValue(X,"projectionMatrix",se)):It.setValue(X,"projectionMatrix",N.projectionMatrix),It.setValue(X,"viewMatrix",N.matrixWorldInverse);const rn=It.map.cameraPosition;rn!==void 0&&rn.setValue(X,Se.setFromMatrixPosition(N.matrixWorld)),De.logarithmicDepthBuffer&&It.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),m!==N&&(m=N,xn=!0,Mi=!0)}if(re.isSkinnedMesh){It.setOptional(X,re,"bindMatrix"),It.setOptional(X,re,"bindMatrixInverse");const un=re.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),It.setValue(X,"boneTexture",un.boneTexture,z))}re.isBatchedMesh&&(It.setOptional(X,re,"batchingTexture"),It.setValue(X,"batchingTexture",re._matricesTexture,z),It.setOptional(X,re,"batchingIdTexture"),It.setValue(X,"batchingIdTexture",re._indirectTexture,z),It.setOptional(X,re,"batchingColorTexture"),re._colorsTexture!==null&&It.setValue(X,"batchingColorTexture",re._colorsTexture,z));const nn=de.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&at.update(re,de,dn),(xn||tt.receiveShadow!==re.receiveShadow)&&(tt.receiveShadow=re.receiveShadow,It.setValue(X,"receiveShadow",re.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(hn.envMap.value=qe,hn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&ne.environment!==null&&(hn.envMapIntensity.value=ne.environmentIntensity),xn&&(It.setValue(X,"toneMappingExposure",k.toneMappingExposure),tt.needsLights&&ra(hn,Mi),Te&&ae.fog===!0&&be.refreshFogUniforms(hn,Te),be.refreshMaterialUniforms(hn,ae,Y,v,y.state.transmissionRenderTarget[N.id]),Bl.upload(X,na(tt),hn,z)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bl.upload(X,na(tt),hn,z),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(X,"center",re.center),It.setValue(X,"modelViewMatrix",re.modelViewMatrix),It.setValue(X,"normalMatrix",re.normalMatrix),It.setValue(X,"modelMatrix",re.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const un=ae.uniformsGroups;for(let rn=0,wt=un.length;rn<wt;rn++){const fi=un[rn];te.update(fi,dn),te.bind(fi,dn)}}return dn}function ra(N,ne){N.ambientLightColor.needsUpdate=ne,N.lightProbe.needsUpdate=ne,N.directionalLights.needsUpdate=ne,N.directionalLightShadows.needsUpdate=ne,N.pointLights.needsUpdate=ne,N.pointLightShadows.needsUpdate=ne,N.spotLights.needsUpdate=ne,N.spotLightShadows.needsUpdate=ne,N.rectAreaLights.needsUpdate=ne,N.hemisphereLights.needsUpdate=ne}function Ql(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(N,ne,de){Ce.get(N.texture).__webglTexture=ne,Ce.get(N.depthTexture).__webglTexture=de;const ae=Ce.get(N);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=de===void 0,ae.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,ne){const de=Ce.get(N);de.__webglFramebuffer=ne,de.__useDefaultFramebuffer=ne===void 0};const sa=X.createFramebuffer();this.setRenderTarget=function(N,ne=0,de=0){V=N,P=ne,I=de;let ae=!0,re=null,Te=!1,Ne=!1;if(N){const qe=Ce.get(N);if(qe.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(X.FRAMEBUFFER,null),ae=!1;else if(qe.__webglFramebuffer===void 0)z.setupRenderTarget(N);else if(qe.__hasExternalTextures)z.rebindTextures(N,Ce.get(N.texture).__webglTexture,Ce.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ke=N.depthTexture;if(qe.__boundDepthTexture!==Ke){if(Ke!==null&&Ce.has(Ke)&&(N.width!==Ke.image.width||N.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(N)}}const lt=N.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ne=!0);const st=Ce.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(st[ne])?re=st[ne][de]:re=st[ne],Te=!0):N.samples>0&&z.useMultisampledRTT(N)===!1?re=Ce.get(N).__webglMultisampledFramebuffer:Array.isArray(st)?re=st[de]:re=st,O.copy(N.viewport),K.copy(N.scissor),F=N.scissorTest}else O.copy(w).multiplyScalar(Y).floor(),K.copy(B).multiplyScalar(Y).floor(),F=ce;if(de!==0&&(re=sa),Le.bindFramebuffer(X.FRAMEBUFFER,re)&&ae&&Le.drawBuffers(N,re),Le.viewport(O),Le.scissor(K),Le.setScissorTest(F),Te){const qe=Ce.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+ne,qe.__webglTexture,de)}else if(Ne){const qe=Ce.get(N.texture),lt=ne;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.__webglTexture,de,lt)}else if(N!==null&&de!==0){const qe=Ce.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qe.__webglTexture,de)}T=-1},this.readRenderTargetPixels=function(N,ne,de,ae,re,Te,Ne){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ce.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){Le.bindFramebuffer(X.FRAMEBUFFER,ze);try{const qe=N.texture,lt=qe.format,st=qe.type;if(!De.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=N.width-ae&&de>=0&&de<=N.height-re&&X.readPixels(ne,de,ae,re,ft.convert(lt),ft.convert(st),Te)}finally{const qe=V!==null?Ce.get(V).__webglFramebuffer:null;Le.bindFramebuffer(X.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(N,ne,de,ae,re,Te,Ne){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ce.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){const qe=N.texture,lt=qe.format,st=qe.type;if(!De.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ne>=0&&ne<=N.width-ae&&de>=0&&de<=N.height-re){Le.bindFramebuffer(X.FRAMEBUFFER,ze);const Ke=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ke),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(ne,de,ae,re,ft.convert(lt),ft.convert(st),0);const Mt=V!==null?Ce.get(V).__webglFramebuffer:null;Le.bindFramebuffer(X.FRAMEBUFFER,Mt);const ht=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await J0(X,ht,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ke),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(Ke),X.deleteSync(ht),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,ne=null,de=0){N.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ne=arguments[0]||null,N=arguments[1]);const ae=Math.pow(2,-de),re=Math.floor(N.image.width*ae),Te=Math.floor(N.image.height*ae),Ne=ne!==null?ne.x:0,ze=ne!==null?ne.y:0;z.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,de,0,0,Ne,ze,re,Te),Le.unbindTexture()};const oa=X.createFramebuffer(),aa=X.createFramebuffer();this.copyTextureToTexture=function(N,ne,de=null,ae=null,re=0,Te=null){N.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,N=arguments[1],ne=arguments[2],Te=arguments[3]||0,de=null),Te===null&&(re!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=re,re=0):Te=0);let Ne,ze,qe,lt,st,Ke,Mt,ht,Vt;const kt=N.isCompressedTexture?N.mipmaps[Te]:N.image;if(de!==null)Ne=de.max.x-de.min.x,ze=de.max.y-de.min.y,qe=de.isBox3?de.max.z-de.min.z:1,lt=de.min.x,st=de.min.y,Ke=de.isBox3?de.min.z:0;else{const nn=Math.pow(2,-re);Ne=Math.floor(kt.width*nn),ze=Math.floor(kt.height*nn),N.isDataArrayTexture?qe=kt.depth:N.isData3DTexture?qe=Math.floor(kt.depth*nn):qe=1,lt=0,st=0,Ke=0}ae!==null?(Mt=ae.x,ht=ae.y,Vt=ae.z):(Mt=0,ht=0,Vt=0);const Et=ft.convert(ne.format),tt=ft.convert(ne.type);let Gt;ne.isData3DTexture?(z.setTexture3D(ne,0),Gt=X.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(z.setTexture2DArray(ne,0),Gt=X.TEXTURE_2D_ARRAY):(z.setTexture2D(ne,0),Gt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ne.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ne.unpackAlignment);const xt=X.getParameter(X.UNPACK_ROW_LENGTH),dn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Yi=X.getParameter(X.UNPACK_SKIP_PIXELS),xn=X.getParameter(X.UNPACK_SKIP_ROWS),Mi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,kt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,kt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,lt),X.pixelStorei(X.UNPACK_SKIP_ROWS,st),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ke);const It=N.isDataArrayTexture||N.isData3DTexture,hn=ne.isDataArrayTexture||ne.isData3DTexture;if(N.isDepthTexture){const nn=Ce.get(N),un=Ce.get(ne),rn=Ce.get(nn.__renderTarget),wt=Ce.get(un.__renderTarget);Le.bindFramebuffer(X.READ_FRAMEBUFFER,rn.__webglFramebuffer),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let fi=0;fi<qe;fi++)It&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ce.get(N).__webglTexture,re,Ke+fi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ce.get(ne).__webglTexture,Te,Vt+fi)),X.blitFramebuffer(lt,st,Ne,ze,Mt,ht,Ne,ze,X.DEPTH_BUFFER_BIT,X.NEAREST);Le.bindFramebuffer(X.READ_FRAMEBUFFER,null),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(re!==0||N.isRenderTargetTexture||Ce.has(N)){const nn=Ce.get(N),un=Ce.get(ne);Le.bindFramebuffer(X.READ_FRAMEBUFFER,oa),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,aa);for(let rn=0;rn<qe;rn++)It?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,nn.__webglTexture,re,Ke+rn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,nn.__webglTexture,re),hn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,un.__webglTexture,Te,Vt+rn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,un.__webglTexture,Te),re!==0?X.blitFramebuffer(lt,st,Ne,ze,Mt,ht,Ne,ze,X.COLOR_BUFFER_BIT,X.NEAREST):hn?X.copyTexSubImage3D(Gt,Te,Mt,ht,Vt+rn,lt,st,Ne,ze):X.copyTexSubImage2D(Gt,Te,Mt,ht,lt,st,Ne,ze);Le.bindFramebuffer(X.READ_FRAMEBUFFER,null),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else hn?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(Gt,Te,Mt,ht,Vt,Ne,ze,qe,Et,tt,kt.data):ne.isCompressedArrayTexture?X.compressedTexSubImage3D(Gt,Te,Mt,ht,Vt,Ne,ze,qe,Et,kt.data):X.texSubImage3D(Gt,Te,Mt,ht,Vt,Ne,ze,qe,Et,tt,kt):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Te,Mt,ht,Ne,ze,Et,tt,kt.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Te,Mt,ht,kt.width,kt.height,Et,kt.data):X.texSubImage2D(X.TEXTURE_2D,Te,Mt,ht,Ne,ze,Et,tt,kt);X.pixelStorei(X.UNPACK_ROW_LENGTH,xt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,dn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Yi),X.pixelStorei(X.UNPACK_SKIP_ROWS,xn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Mi),Te===0&&ne.generateMipmaps&&X.generateMipmap(Gt),Le.unbindTexture()},this.copyTextureToTexture3D=function(N,ne,de=null,ae=null,re=0){return N.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),de=arguments[0]||null,ae=arguments[1]||null,N=arguments[2],ne=arguments[3],re=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,ne,de,ae,re)},this.initRenderTarget=function(N){Ce.get(N).__webglFramebuffer===void 0&&z.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?z.setTextureCube(N,0):N.isData3DTexture?z.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?z.setTexture2DArray(N,0):z.setTexture2D(N,0),Le.unbindTexture()},this.resetState=function(){P=0,I=0,V=null,Le.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const Zm={type:"change"},xd={type:"start"},Zg={type:"end"},Nl=new yd,Qm=new Sr,gT=Math.cos(70*Z0.DEG2RAD),Jt=new fe,In=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uf=1e-6;class _T extends Dy{constructor(e,n=null){super(e,n),this.state=Dt.NONE,this.enabled=!0,this.target=new fe,this.cursor=new fe,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new fe,this._lastQuaternion=new ts,this._lastTargetPosition=new fe,this._quat=new ts().setFromUnitVectors(e.up,new fe(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wm,this._sphericalDelta=new wm,this._scale=1,this._panOffset=new fe,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new fe,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yT.bind(this),this._onPointerDown=vT.bind(this),this._onPointerUp=ST.bind(this),this._onContextMenu=RT.bind(this),this._onMouseWheel=ET.bind(this),this._onKeyDown=TT.bind(this),this._onTouchStart=wT.bind(this),this._onTouchMove=AT.bind(this),this._onMouseDown=xT.bind(this),this._onMouseMove=MT.bind(this),this._interceptControlDown=bT.bind(this),this._interceptControlUp=CT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zm),this.update(),this.state=Dt.NONE}update(e=null){const n=this.object.position;Jt.copy(n).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=In:r>Math.PI&&(r-=In),a<-Math.PI?a+=In:a>Math.PI&&(a-=In),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=Jt.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new fe(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const g=new fe(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(f),this.object.updateMatrixWorld(),c=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<gT?this.object.lookAt(this.target):(Qm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(Qm,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>uf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uf||this._lastTargetPosition.distanceToSquared(this.target)>uf?(this.dispatchEvent(Zm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Jt.setFromMatrixColumn(n,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,n){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(n,1):(Jt.setFromMatrixColumn(n,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Jt.copy(a).sub(this.target);let l=Jt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*n*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=n-r.top,c=r.width,f=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new yt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function vT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function yT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ST(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zg),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function xT(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case js.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case js.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(xd)}function MT(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ET(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(xd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Zg))}function TT(s){this.enabled!==!1&&this._handleKeyDown(s)}function wT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(xd)}function AT(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function RT(s){this.enabled!==!1&&s.preventDefault()}function bT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const PT=()=>{const s=Qr.useRef();return Qr.useEffect(()=>{const e=s.current,n=new Ty,r=new mT,a=new Zn(40,window.innerWidth/window.innerHeight,.01,1e3),l=new _T(a,r.domElement);r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement),a.position.set(0,0,5),l.enableZoom=!1;const c=new Wg({size:.01,sizeAttenuation:!0,transparent:!0,vertexColors:!0}),f=new ji,h=[],g=[],S=()=>{const q=Math.random(),H=Math.random(),k=q*2*Math.PI,L=Math.acos(2*H-1),P=Math.cbrt(Math.random());return{x:P*Math.sin(L)*Math.cos(k),y:P*Math.sin(L)*Math.sin(k),z:P*Math.cos(L)}};for(let q=0;q<1e4;q++){const{x:H,y:k,z:L}=S();h.push(H*4,k*4,L*4),g.push(Math.random(),Math.random(),Math.random())}f.setAttribute("position",new Vi(h,3)),f.setAttribute("color",new Vi(g,3));const x=new Ry(f,c);n.add(x);let M=.001;const A=.02,D=()=>{M<A&&(M+=2e-4,c.size=M),requestAnimationFrame(D),r.render(n,a)};D();const b={x:0,y:0},E=q=>{b.x=q.clientX/window.innerWidth*2-1,b.y=-(q.clientY/window.innerHeight)*2+1,a.rotation.x=b.y*.1,a.rotation.y=b.x*.1};window.addEventListener("mousemove",E);const y=()=>{r.setSize(window.innerWidth,window.innerHeight),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix()};return window.addEventListener("resize",y),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("resize",y),e.removeChild(r.domElement)}},[]),Pe.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,pointerEvents:"none"}})},LT=()=>Pe.jsxs("section",{className:"button",children:[Pe.jsxs("button",{className:"button__first",children:["STREAM NOW",Pe.jsx("span",{className:"button__icon"})]}),Pe.jsx("button",{className:"button__second",children:"ALL EPISODES"})]}),DT=()=>{const[s,e]=Qr.useState(!1),n=()=>{e(!0)},r=()=>{e(!1)};return Pe.jsxs("div",{className:"search",children:[Pe.jsx("button",{className:"search__button",onClick:n,children:Pe.jsx("img",{src:"./src/assets/img/header/search.svg",alt:"Search",width:"37",height:"37"})}),s&&Pe.jsx("input",{type:"text",placeholder:"Search...",className:"search__input",onBlur:r})]})},IT=()=>Pe.jsxs("header",{className:"header",children:[Pe.jsxs("div",{className:"header__left",children:[Pe.jsx("a",{href:"/",className:"header__logo-link",children:Pe.jsx("img",{src:"./logo.svg",alt:"logo",className:"header__logo"})}),Pe.jsx("img",{src:"./src/assets/img/header/vector.svg",alt:"Decoration",className:"header__vector"}),Pe.jsx("div",{className:"header__date",children:"Friday July 8th"})]}),Pe.jsxs("div",{className:"header__right",children:[Pe.jsx(DT,{}),Pe.jsx("img",{src:"./src/assets/img/header/avatar.png",alt:"Avatar",className:"header__avatar"})]})]}),NT=({rating:s,maxStars:e})=>{const n=Math.round(s),r=e-n;return Pe.jsxs("ul",{className:"stars",children:[Array(n).fill(null).map((a,l)=>Pe.jsx("li",{className:"stars__star stars__star--active"},`active-${l}`)),Array(r).fill(null).map((a,l)=>Pe.jsx("li",{className:"stars__star"},`empty-${l}`))]})},OT=()=>Pe.jsxs("section",{className:"overview",children:[Pe.jsxs("div",{className:"overview__genres",children:[Pe.jsx("span",{children:"Drama"}),Pe.jsx("svg",{width:"4",height:"33",viewBox:"0 0 4 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Pe.jsx("path",{d:"M2 0V33",stroke:"white",strokeWidth:"3"})}),Pe.jsx("span",{children:"Thriller"}),Pe.jsx("svg",{width:"4",height:"33",viewBox:"0 0 4 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Pe.jsx("path",{d:"M2 0V33",stroke:"white",strokeWidth:"3"})}),Pe.jsx("span",{children:"Supernatural"})]}),Pe.jsx("h2",{className:"overview__title",children:"Stranger Things"}),Pe.jsxs("div",{className:"overview__details",children:[Pe.jsx("span",{children:"2019"}),Pe.jsx("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Pe.jsx("path",{d:"M2 0V20",stroke:"white",strokeWidth:"3"})}),Pe.jsxs("span",{children:["DIRECTOR: ",Pe.jsx("span",{className:"overview__details-info",children:"Shawn Levy"})]}),Pe.jsx("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Pe.jsx("path",{d:"M2 0V20",stroke:"white",strokeWidth:"3"})}),Pe.jsxs("span",{children:["Seasons:"," ",Pe.jsx("span",{className:"overview__details-info",children:"3 (5 Episodes)"})]})]}),Pe.jsx("p",{className:"overview__description",children:"In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."}),Pe.jsx(NT,{rating:3,maxStars:5})]});var cf={},ff={},Vo={},df={},Jm;function UT(){return Jm||(Jm=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};s.default=e}(df)),df}var hf,eg;function FT(){if(eg)return hf;eg=1;var s="Expected a function",e=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,h=typeof ll=="object"&&ll&&ll.Object===Object&&ll,g=typeof self=="object"&&self&&self.Object===Object&&self,S=h||g||Function("return this")(),x=Object.prototype,M=x.toString,A=Math.max,D=Math.min,b=function(){return S.Date.now()};function E(L,P,I){var V,T,m,O,K,F,G=0,ee=!1,Z=!1,v=!0;if(typeof L!="function")throw new TypeError(s);P=k(P)||0,y(I)&&(ee=!!I.leading,Z="maxWait"in I,m=Z?A(k(I.maxWait)||0,P):m,v="trailing"in I?!!I.trailing:v);function Y(se){var ge=V,Se=T;return V=T=void 0,G=se,O=L.apply(Se,ge),O}function U(se){return G=se,K=setTimeout(B,P),ee?Y(se):O}function _(se){var ge=se-F,Se=se-G,Re=P-ge;return Z?D(Re,m-Se):Re}function w(se){var ge=se-F,Se=se-G;return F===void 0||ge>=P||ge<0||Z&&Se>=m}function B(){var se=b();if(w(se))return ce(se);K=setTimeout(B,_(se))}function ce(se){return K=void 0,v&&V?Y(se):(V=T=void 0,O)}function j(){K!==void 0&&clearTimeout(K),G=0,V=F=T=K=void 0}function J(){return K===void 0?O:ce(b())}function ie(){var se=b(),ge=w(se);if(V=arguments,T=this,F=se,ge){if(K===void 0)return U(F);if(Z)return K=setTimeout(B,P),Y(F)}return K===void 0&&(K=setTimeout(B,P)),O}return ie.cancel=j,ie.flush=J,ie}function y(L){var P=typeof L;return!!L&&(P=="object"||P=="function")}function q(L){return!!L&&typeof L=="object"}function H(L){return typeof L=="symbol"||q(L)&&M.call(L)==n}function k(L){if(typeof L=="number")return L;if(H(L))return e;if(y(L)){var P=typeof L.valueOf=="function"?L.valueOf():L;L=y(P)?P+"":P}if(typeof L!="string")return L===0?L:+L;L=L.replace(r,"");var I=l.test(L);return I||c.test(L)?f(L.slice(2),I?2:8):a.test(L)?e:+L}return hf=E,hf}var pf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var tg;function $l(){return tg||(tg=1,function(s){(function(){var e={}.hasOwnProperty;function n(){for(var l="",c=0;c<arguments.length;c++){var f=arguments[c];f&&(l=a(l,r(f)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var c="";for(var f in l)e.call(l,f)&&l[f]&&(c=a(c,f));return c}function a(l,c){return c?l?l+" "+c:l+c:l}s.exports?(n.default=n,s.exports=n):window.classNames=n})()}(pf)),pf.exports}var Fe={},mf={},ng;function Qg(){return ng||(ng=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=n(yi());function n(a){return a&&a.__esModule?a:{default:a}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return e.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return e.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};s.default=r}(mf)),mf}var ig;function ea(){if(ig)return Fe;ig=1,Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.checkSpecKeys=Fe.checkNavigable=Fe.changeSlide=Fe.canUseDOM=Fe.canGoNext=void 0,Fe.clamp=g,Fe.extractObject=void 0,Fe.filterSettings=Y,Fe.validSettings=Fe.swipeStart=Fe.swipeMove=Fe.swipeEnd=Fe.slidesOnRight=Fe.slidesOnLeft=Fe.slideHandler=Fe.siblingDirection=Fe.safePreventDefault=Fe.lazyStartIndex=Fe.lazySlidesOnRight=Fe.lazySlidesOnLeft=Fe.lazyEndIndex=Fe.keyHandler=Fe.initializedState=Fe.getWidth=Fe.getTrackLeft=Fe.getTrackCSS=Fe.getTrackAnimateCSS=Fe.getTotalSlides=Fe.getSwipeDirection=Fe.getSlideCount=Fe.getRequiredLazySlides=Fe.getPreClones=Fe.getPostClones=Fe.getOnDemandLazySlides=Fe.getNavigableIndexes=Fe.getHeight=void 0;var s=n(yi()),e=n(Qg());function n(U){return U&&U.__esModule?U:{default:U}}function r(U){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},r(U)}function a(U,_){var w=Object.keys(U);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(U);_&&(B=B.filter(function(ce){return Object.getOwnPropertyDescriptor(U,ce).enumerable})),w.push.apply(w,B)}return w}function l(U){for(var _=1;_<arguments.length;_++){var w=arguments[_]!=null?arguments[_]:{};_%2?a(Object(w),!0).forEach(function(B){c(U,B,w[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(U,Object.getOwnPropertyDescriptors(w)):a(Object(w)).forEach(function(B){Object.defineProperty(U,B,Object.getOwnPropertyDescriptor(w,B))})}return U}function c(U,_,w){return _=f(_),_ in U?Object.defineProperty(U,_,{value:w,enumerable:!0,configurable:!0,writable:!0}):U[_]=w,U}function f(U){var _=h(U,"string");return r(_)=="symbol"?_:String(_)}function h(U,_){if(r(U)!="object"||!U)return U;var w=U[Symbol.toPrimitive];if(w!==void 0){var B=w.call(U,_||"default");if(r(B)!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(U)}function g(U,_,w){return Math.max(_,Math.min(U,w))}var S=Fe.safePreventDefault=function(_){var w=["onTouchStart","onTouchMove","onWheel"];w.includes(_._reactName)||_.preventDefault()},x=Fe.getOnDemandLazySlides=function(_){for(var w=[],B=M(_),ce=A(_),j=B;j<ce;j++)_.lazyLoadedList.indexOf(j)<0&&w.push(j);return w};Fe.getRequiredLazySlides=function(_){for(var w=[],B=M(_),ce=A(_),j=B;j<ce;j++)w.push(j);return w};var M=Fe.lazyStartIndex=function(_){return _.currentSlide-D(_)},A=Fe.lazyEndIndex=function(_){return _.currentSlide+b(_)},D=Fe.lazySlidesOnLeft=function(_){return _.centerMode?Math.floor(_.slidesToShow/2)+(parseInt(_.centerPadding)>0?1:0):0},b=Fe.lazySlidesOnRight=function(_){return _.centerMode?Math.floor((_.slidesToShow-1)/2)+1+(parseInt(_.centerPadding)>0?1:0):_.slidesToShow},E=Fe.getWidth=function(_){return _&&_.offsetWidth||0},y=Fe.getHeight=function(_){return _&&_.offsetHeight||0},q=Fe.getSwipeDirection=function(_){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,B,ce,j,J;return B=_.startX-_.curX,ce=_.startY-_.curY,j=Math.atan2(ce,B),J=Math.round(j*180/Math.PI),J<0&&(J=360-Math.abs(J)),J<=45&&J>=0||J<=360&&J>=315?"left":J>=135&&J<=225?"right":w===!0?J>=35&&J<=135?"up":"down":"vertical"},H=Fe.canGoNext=function(_){var w=!0;return _.infinite||(_.centerMode&&_.currentSlide>=_.slideCount-1||_.slideCount<=_.slidesToShow||_.currentSlide>=_.slideCount-_.slidesToShow)&&(w=!1),w};Fe.extractObject=function(_,w){var B={};return w.forEach(function(ce){return B[ce]=_[ce]}),B},Fe.initializedState=function(_){var w=s.default.Children.count(_.children),B=_.listRef,ce=Math.ceil(E(B)),j=_.trackRef&&_.trackRef.node,J=Math.ceil(E(j)),ie;if(_.vertical)ie=ce;else{var se=_.centerMode&&parseInt(_.centerPadding)*2;typeof _.centerPadding=="string"&&_.centerPadding.slice(-1)==="%"&&(se*=ce/100),ie=Math.ceil((ce-se)/_.slidesToShow)}var ge=B&&y(B.querySelector('[data-index="0"]')),Se=ge*_.slidesToShow,Re=_.currentSlide===void 0?_.initialSlide:_.currentSlide;_.rtl&&_.currentSlide===void 0&&(Re=w-1-_.initialSlide);var Je=_.lazyLoadedList||[],Ge=x(l(l({},_),{},{currentSlide:Re,lazyLoadedList:Je}));Je=Je.concat(Ge);var Qe={slideCount:w,slideWidth:ie,listWidth:ce,trackWidth:J,currentSlide:Re,slideHeight:ge,listHeight:Se,lazyLoadedList:Je};return _.autoplaying===null&&_.autoplay&&(Qe.autoplaying="playing"),Qe},Fe.slideHandler=function(_){var w=_.waitForAnimate,B=_.animating,ce=_.fade,j=_.infinite,J=_.index,ie=_.slideCount,se=_.lazyLoad,ge=_.currentSlide,Se=_.centerMode,Re=_.slidesToScroll,Je=_.slidesToShow,Ge=_.useCSS,Qe=_.lazyLoadedList;if(w&&B)return{};var X=J,ct,et,De,Le={},ot={},Ce=j?J:g(J,0,ie-1);if(ce){if(!j&&(J<0||J>=ie))return{};J<0?X=J+ie:J>=ie&&(X=J-ie),se&&Qe.indexOf(X)<0&&(Qe=Qe.concat(X)),Le={animating:!0,currentSlide:X,lazyLoadedList:Qe,targetSlide:X},ot={animating:!1,targetSlide:X}}else ct=X,X<0?(ct=X+ie,j?ie%Re!==0&&(ct=ie-ie%Re):ct=0):!H(_)&&X>ge?X=ct=ge:Se&&X>=ie?(X=j?ie:ie-1,ct=j?0:ie-1):X>=ie&&(ct=X-ie,j?ie%Re!==0&&(ct=0):ct=ie-Je),!j&&X+Je>=ie&&(ct=ie-Je),et=m(l(l({},_),{},{slideIndex:X})),De=m(l(l({},_),{},{slideIndex:ct})),j||(et===De&&(X=ct),et=De),se&&(Qe=Qe.concat(x(l(l({},_),{},{currentSlide:X})))),Ge?(Le={animating:!0,currentSlide:ct,trackStyle:T(l(l({},_),{},{left:et})),lazyLoadedList:Qe,targetSlide:Ce},ot={animating:!1,currentSlide:ct,trackStyle:V(l(l({},_),{},{left:De})),swipeLeft:null,targetSlide:Ce}):Le={currentSlide:ct,trackStyle:V(l(l({},_),{},{left:De})),lazyLoadedList:Qe,targetSlide:Ce};return{state:Le,nextState:ot}},Fe.changeSlide=function(_,w){var B,ce,j,J,ie,se=_.slidesToScroll,ge=_.slidesToShow,Se=_.slideCount,Re=_.currentSlide,Je=_.targetSlide,Ge=_.lazyLoad,Qe=_.infinite;if(J=Se%se!==0,B=J?0:(Se-Re)%se,w.message==="previous")j=B===0?se:ge-B,ie=Re-j,Ge&&!Qe&&(ce=Re-j,ie=ce===-1?Se-1:ce),Qe||(ie=Je-se);else if(w.message==="next")j=B===0?se:B,ie=Re+j,Ge&&!Qe&&(ie=(Re+se)%Se+B),Qe||(ie=Je+se);else if(w.message==="dots")ie=w.index*w.slidesToScroll;else if(w.message==="children"){if(ie=w.index,Qe){var X=G(l(l({},_),{},{targetSlide:ie}));ie>w.currentSlide&&X==="left"?ie=ie-Se:ie<w.currentSlide&&X==="right"&&(ie=ie+Se)}}else w.message==="index"&&(ie=Number(w.index));return ie},Fe.keyHandler=function(_,w,B){return _.target.tagName.match("TEXTAREA|INPUT|SELECT")||!w?"":_.keyCode===37?B?"next":"previous":_.keyCode===39?B?"previous":"next":""},Fe.swipeStart=function(_,w,B){return _.target.tagName==="IMG"&&S(_),!w||!B&&_.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:_.touches?_.touches[0].pageX:_.clientX,startY:_.touches?_.touches[0].pageY:_.clientY,curX:_.touches?_.touches[0].pageX:_.clientX,curY:_.touches?_.touches[0].pageY:_.clientY}}},Fe.swipeMove=function(_,w){var B=w.scrolling,ce=w.animating,j=w.vertical,J=w.swipeToSlide,ie=w.verticalSwiping,se=w.rtl,ge=w.currentSlide,Se=w.edgeFriction,Re=w.edgeDragged,Je=w.onEdge,Ge=w.swiped,Qe=w.swiping,X=w.slideCount,ct=w.slidesToScroll,et=w.infinite,De=w.touchObject,Le=w.swipeEvent,ot=w.listHeight,Ce=w.listWidth;if(!B){if(ce)return S(_);j&&J&&ie&&S(_);var z,C={},le=m(w);De.curX=_.touches?_.touches[0].pageX:_.clientX,De.curY=_.touches?_.touches[0].pageY:_.clientY,De.swipeLength=Math.round(Math.sqrt(Math.pow(De.curX-De.startX,2)));var ve=Math.round(Math.sqrt(Math.pow(De.curY-De.startY,2)));if(!ie&&!Qe&&ve>10)return{scrolling:!0};ie&&(De.swipeLength=ve);var ye=(se?-1:1)*(De.curX>De.startX?1:-1);ie&&(ye=De.curY>De.startY?1:-1);var me=Math.ceil(X/ct),He=q(w.touchObject,ie),be=De.swipeLength;return et||(ge===0&&(He==="right"||He==="down")||ge+1>=me&&(He==="left"||He==="up")||!H(w)&&(He==="left"||He==="up"))&&(be=De.swipeLength*Se,Re===!1&&Je&&(Je(He),C.edgeDragged=!0)),!Ge&&Le&&(Le(He),C.swiped=!0),j?z=le+be*(ot/Ce)*ye:se?z=le-be*ye:z=le+be*ye,ie&&(z=le+be*ye),C=l(l({},C),{},{touchObject:De,swipeLeft:z,trackStyle:V(l(l({},w),{},{left:z}))}),Math.abs(De.curX-De.startX)<Math.abs(De.curY-De.startY)*.8||De.swipeLength>10&&(C.swiping=!0,S(_)),C}},Fe.swipeEnd=function(_,w){var B=w.dragging,ce=w.swipe,j=w.touchObject,J=w.listWidth,ie=w.touchThreshold,se=w.verticalSwiping,ge=w.listHeight,Se=w.swipeToSlide,Re=w.scrolling,Je=w.onSwipe,Ge=w.targetSlide,Qe=w.currentSlide,X=w.infinite;if(!B)return ce&&S(_),{};var ct=se?ge/ie:J/ie,et=q(j,se),De={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Re||!j.swipeLength)return De;if(j.swipeLength>ct){S(_),Je&&Je(et);var Le,ot,Ce=X?Qe:Ge;switch(et){case"left":case"up":ot=Ce+P(w),Le=Se?L(w,ot):ot,De.currentDirection=0;break;case"right":case"down":ot=Ce-P(w),Le=Se?L(w,ot):ot,De.currentDirection=1;break;default:Le=Ce}De.triggerSlideHandler=Le}else{var z=m(w);De.trackStyle=T(l(l({},w),{},{left:z}))}return De};var k=Fe.getNavigableIndexes=function(_){for(var w=_.infinite?_.slideCount*2:_.slideCount,B=_.infinite?_.slidesToShow*-1:0,ce=_.infinite?_.slidesToShow*-1:0,j=[];B<w;)j.push(B),B=ce+_.slidesToScroll,ce+=Math.min(_.slidesToScroll,_.slidesToShow);return j},L=Fe.checkNavigable=function(_,w){var B=k(_),ce=0;if(w>B[B.length-1])w=B[B.length-1];else for(var j in B){if(w<B[j]){w=ce;break}ce=B[j]}return w},P=Fe.getSlideCount=function(_){var w=_.centerMode?_.slideWidth*Math.floor(_.slidesToShow/2):0;if(_.swipeToSlide){var B,ce=_.listRef,j=ce.querySelectorAll&&ce.querySelectorAll(".slick-slide")||[];if(Array.from(j).every(function(se){if(_.vertical){if(se.offsetTop+y(se)/2>_.swipeLeft*-1)return B=se,!1}else if(se.offsetLeft-w+E(se)/2>_.swipeLeft*-1)return B=se,!1;return!0}),!B)return 0;var J=_.rtl===!0?_.slideCount-_.currentSlide:_.currentSlide,ie=Math.abs(B.dataset.index-J)||1;return ie}else return _.slidesToScroll},I=Fe.checkSpecKeys=function(_,w){return w.reduce(function(B,ce){return B&&_.hasOwnProperty(ce)},!0)?null:console.error("Keys Missing:",_)},V=Fe.getTrackCSS=function(_){I(_,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var w,B,ce=_.slideCount+2*_.slidesToShow;_.vertical?B=ce*_.slideHeight:w=F(_)*_.slideWidth;var j={opacity:1,transition:"",WebkitTransition:""};if(_.useTransform){var J=_.vertical?"translate3d(0px, "+_.left+"px, 0px)":"translate3d("+_.left+"px, 0px, 0px)",ie=_.vertical?"translate3d(0px, "+_.left+"px, 0px)":"translate3d("+_.left+"px, 0px, 0px)",se=_.vertical?"translateY("+_.left+"px)":"translateX("+_.left+"px)";j=l(l({},j),{},{WebkitTransform:J,transform:ie,msTransform:se})}else _.vertical?j.top=_.left:j.left=_.left;return _.fade&&(j={opacity:1}),w&&(j.width=w),B&&(j.height=B),window&&!window.addEventListener&&window.attachEvent&&(_.vertical?j.marginTop=_.left+"px":j.marginLeft=_.left+"px"),j},T=Fe.getTrackAnimateCSS=function(_){I(_,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var w=V(_);return _.useTransform?(w.WebkitTransition="-webkit-transform "+_.speed+"ms "+_.cssEase,w.transition="transform "+_.speed+"ms "+_.cssEase):_.vertical?w.transition="top "+_.speed+"ms "+_.cssEase:w.transition="left "+_.speed+"ms "+_.cssEase,w},m=Fe.getTrackLeft=function(_){if(_.unslick)return 0;I(_,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var w=_.slideIndex,B=_.trackRef,ce=_.infinite,j=_.centerMode,J=_.slideCount,ie=_.slidesToShow,se=_.slidesToScroll,ge=_.slideWidth,Se=_.listWidth,Re=_.variableWidth,Je=_.slideHeight,Ge=_.fade,Qe=_.vertical,X=0,ct,et,De=0;if(Ge||_.slideCount===1)return 0;var Le=0;if(ce?(Le=-O(_),J%se!==0&&w+se>J&&(Le=-(w>J?ie-(w-J):J%se)),j&&(Le+=parseInt(ie/2))):(J%se!==0&&w+se>J&&(Le=ie-J%se),j&&(Le=parseInt(ie/2))),X=Le*ge,De=Le*Je,Qe?ct=w*Je*-1+De:ct=w*ge*-1+X,Re===!0){var ot,Ce=B&&B.node;if(ot=w+O(_),et=Ce&&Ce.childNodes[ot],ct=et?et.offsetLeft*-1:0,j===!0){ot=ce?w+O(_):w,et=Ce&&Ce.children[ot],ct=0;for(var z=0;z<ot;z++)ct-=Ce&&Ce.children[z]&&Ce.children[z].offsetWidth;ct-=parseInt(_.centerPadding),ct+=et&&(Se-et.offsetWidth)/2}}return ct},O=Fe.getPreClones=function(_){return _.unslick||!_.infinite?0:_.variableWidth?_.slideCount:_.slidesToShow+(_.centerMode?1:0)},K=Fe.getPostClones=function(_){return _.unslick||!_.infinite?0:_.slideCount},F=Fe.getTotalSlides=function(_){return _.slideCount===1?1:O(_)+_.slideCount+K(_)},G=Fe.siblingDirection=function(_){return _.targetSlide>_.currentSlide?_.targetSlide>_.currentSlide+ee(_)?"left":"right":_.targetSlide<_.currentSlide-Z(_)?"right":"left"},ee=Fe.slidesOnRight=function(_){var w=_.slidesToShow,B=_.centerMode,ce=_.rtl,j=_.centerPadding;if(B){var J=(w-1)/2+1;return parseInt(j)>0&&(J+=1),ce&&w%2===0&&(J+=1),J}return ce?0:w-1},Z=Fe.slidesOnLeft=function(_){var w=_.slidesToShow,B=_.centerMode,ce=_.rtl,j=_.centerPadding;if(B){var J=(w-1)/2+1;return parseInt(j)>0&&(J+=1),!ce&&w%2===0&&(J+=1),J}return ce?w-1:0};Fe.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var v=Fe.validSettings=Object.keys(e.default);function Y(U){return v.reduce(function(_,w){return U.hasOwnProperty(w)&&(_[w]=U[w]),_},{})}return Fe}var Go={},rg;function kT(){if(rg)return Go;rg=1,Object.defineProperty(Go,"__esModule",{value:!0}),Go.Track=void 0;var s=r(yi()),e=r($l()),n=ea();function r(T){return T&&T.__esModule?T:{default:T}}function a(T){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},a(T)}function l(){return l=Object.assign?Object.assign.bind():function(T){for(var m=1;m<arguments.length;m++){var O=arguments[m];for(var K in O)Object.prototype.hasOwnProperty.call(O,K)&&(T[K]=O[K])}return T},l.apply(this,arguments)}function c(T,m){if(!(T instanceof m))throw new TypeError("Cannot call a class as a function")}function f(T,m){for(var O=0;O<m.length;O++){var K=m[O];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(T,H(K.key),K)}}function h(T,m,O){return f(T.prototype,m),Object.defineProperty(T,"prototype",{writable:!1}),T}function g(T,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(m&&m.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),m&&S(T,m)}function S(T,m){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(K,F){return K.__proto__=F,K},S(T,m)}function x(T){var m=D();return function(){var K=b(T),F;if(m){var G=b(this).constructor;F=Reflect.construct(K,arguments,G)}else F=K.apply(this,arguments);return M(this,F)}}function M(T,m){if(m&&(a(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(T)}function A(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function D(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D=function(){return!!T})()}function b(T){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},b(T)}function E(T,m){var O=Object.keys(T);if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(T);m&&(K=K.filter(function(F){return Object.getOwnPropertyDescriptor(T,F).enumerable})),O.push.apply(O,K)}return O}function y(T){for(var m=1;m<arguments.length;m++){var O=arguments[m]!=null?arguments[m]:{};m%2?E(Object(O),!0).forEach(function(K){q(T,K,O[K])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(O)):E(Object(O)).forEach(function(K){Object.defineProperty(T,K,Object.getOwnPropertyDescriptor(O,K))})}return T}function q(T,m,O){return m=H(m),m in T?Object.defineProperty(T,m,{value:O,enumerable:!0,configurable:!0,writable:!0}):T[m]=O,T}function H(T){var m=k(T,"string");return a(m)=="symbol"?m:String(m)}function k(T,m){if(a(T)!="object"||!T)return T;var O=T[Symbol.toPrimitive];if(O!==void 0){var K=O.call(T,m||"default");if(a(K)!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(T)}var L=function(m){var O,K,F,G,ee;m.rtl?ee=m.slideCount-1-m.index:ee=m.index,F=ee<0||ee>=m.slideCount,m.centerMode?(G=Math.floor(m.slidesToShow/2),K=(ee-m.currentSlide)%m.slideCount===0,ee>m.currentSlide-G-1&&ee<=m.currentSlide+G&&(O=!0)):O=m.currentSlide<=ee&&ee<m.currentSlide+m.slidesToShow;var Z;m.targetSlide<0?Z=m.targetSlide+m.slideCount:m.targetSlide>=m.slideCount?Z=m.targetSlide-m.slideCount:Z=m.targetSlide;var v=ee===Z;return{"slick-slide":!0,"slick-active":O,"slick-center":K,"slick-cloned":F,"slick-current":v}},P=function(m){var O={};return(m.variableWidth===void 0||m.variableWidth===!1)&&(O.width=m.slideWidth),m.fade&&(O.position="relative",m.vertical?O.top=-m.index*parseInt(m.slideHeight):O.left=-m.index*parseInt(m.slideWidth),O.opacity=m.currentSlide===m.index?1:0,O.zIndex=m.currentSlide===m.index?999:998,m.useCSS&&(O.transition="opacity "+m.speed+"ms "+m.cssEase+", visibility "+m.speed+"ms "+m.cssEase)),O},I=function(m,O){return m.key||O},V=function(m){var O,K=[],F=[],G=[],ee=s.default.Children.count(m.children),Z=(0,n.lazyStartIndex)(m),v=(0,n.lazyEndIndex)(m);return s.default.Children.forEach(m.children,function(Y,U){var _,w={message:"children",index:U,slidesToScroll:m.slidesToScroll,currentSlide:m.currentSlide};!m.lazyLoad||m.lazyLoad&&m.lazyLoadedList.indexOf(U)>=0?_=Y:_=s.default.createElement("div",null);var B=P(y(y({},m),{},{index:U})),ce=_.props.className||"",j=L(y(y({},m),{},{index:U}));if(K.push(s.default.cloneElement(_,{key:"original"+I(_,U),"data-index":U,className:(0,e.default)(j,ce),tabIndex:"-1","aria-hidden":!j["slick-active"],style:y(y({outline:"none"},_.props.style||{}),B),onClick:function(se){_.props&&_.props.onClick&&_.props.onClick(se),m.focusOnSelect&&m.focusOnSelect(w)}})),m.infinite&&m.fade===!1){var J=ee-U;J<=(0,n.getPreClones)(m)&&(O=-J,O>=Z&&(_=Y),j=L(y(y({},m),{},{index:O})),F.push(s.default.cloneElement(_,{key:"precloned"+I(_,O),"data-index":O,tabIndex:"-1",className:(0,e.default)(j,ce),"aria-hidden":!j["slick-active"],style:y(y({},_.props.style||{}),B),onClick:function(se){_.props&&_.props.onClick&&_.props.onClick(se),m.focusOnSelect&&m.focusOnSelect(w)}}))),O=ee+U,O<v&&(_=Y),j=L(y(y({},m),{},{index:O})),G.push(s.default.cloneElement(_,{key:"postcloned"+I(_,O),"data-index":O,tabIndex:"-1",className:(0,e.default)(j,ce),"aria-hidden":!j["slick-active"],style:y(y({},_.props.style||{}),B),onClick:function(se){_.props&&_.props.onClick&&_.props.onClick(se),m.focusOnSelect&&m.focusOnSelect(w)}}))}}),m.rtl?F.concat(K,G).reverse():F.concat(K,G)};return Go.Track=function(T){g(O,T);var m=x(O);function O(){var K;c(this,O);for(var F=arguments.length,G=new Array(F),ee=0;ee<F;ee++)G[ee]=arguments[ee];return K=m.call.apply(m,[this].concat(G)),q(A(K),"node",null),q(A(K),"handleRef",function(Z){K.node=Z}),K}return h(O,[{key:"render",value:function(){var F=V(this.props),G=this.props,ee=G.onMouseEnter,Z=G.onMouseOver,v=G.onMouseLeave,Y={onMouseEnter:ee,onMouseOver:Z,onMouseLeave:v};return s.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},Y),F)}}]),O}(s.default.PureComponent),Go}var Wo={},sg;function zT(){if(sg)return Wo;sg=1;function s(L){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},s(L)}Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.Dots=void 0;var e=a(yi()),n=a($l()),r=ea();function a(L){return L&&L.__esModule?L:{default:L}}function l(L,P){var I=Object.keys(L);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(L);P&&(V=V.filter(function(T){return Object.getOwnPropertyDescriptor(L,T).enumerable})),I.push.apply(I,V)}return I}function c(L){for(var P=1;P<arguments.length;P++){var I=arguments[P]!=null?arguments[P]:{};P%2?l(Object(I),!0).forEach(function(V){f(L,V,I[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(I)):l(Object(I)).forEach(function(V){Object.defineProperty(L,V,Object.getOwnPropertyDescriptor(I,V))})}return L}function f(L,P,I){return P=x(P),P in L?Object.defineProperty(L,P,{value:I,enumerable:!0,configurable:!0,writable:!0}):L[P]=I,L}function h(L,P){if(!(L instanceof P))throw new TypeError("Cannot call a class as a function")}function g(L,P){for(var I=0;I<P.length;I++){var V=P[I];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(L,x(V.key),V)}}function S(L,P,I){return g(L.prototype,P),Object.defineProperty(L,"prototype",{writable:!1}),L}function x(L){var P=M(L,"string");return s(P)=="symbol"?P:String(P)}function M(L,P){if(s(L)!="object"||!L)return L;var I=L[Symbol.toPrimitive];if(I!==void 0){var V=I.call(L,P);if(s(V)!="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}function A(L,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(P&&P.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),P&&D(L,P)}function D(L,P){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(V,T){return V.__proto__=T,V},D(L,P)}function b(L){var P=q();return function(){var V=H(L),T;if(P){var m=H(this).constructor;T=Reflect.construct(V,arguments,m)}else T=V.apply(this,arguments);return E(this,T)}}function E(L,P){if(P&&(s(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(L)}function y(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function q(){try{var L=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(q=function(){return!!L})()}function H(L){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(I){return I.__proto__||Object.getPrototypeOf(I)},H(L)}var k=function(P){var I;return P.infinite?I=Math.ceil(P.slideCount/P.slidesToScroll):I=Math.ceil((P.slideCount-P.slidesToShow)/P.slidesToScroll)+1,I};return Wo.Dots=function(L){A(I,L);var P=b(I);function I(){return h(this,I),P.apply(this,arguments)}return S(I,[{key:"clickHandler",value:function(T,m){m.preventDefault(),this.props.clickHandler(T)}},{key:"render",value:function(){for(var T=this.props,m=T.onMouseEnter,O=T.onMouseOver,K=T.onMouseLeave,F=T.infinite,G=T.slidesToScroll,ee=T.slidesToShow,Z=T.slideCount,v=T.currentSlide,Y=k({slideCount:Z,slidesToScroll:G,slidesToShow:ee,infinite:F}),U={onMouseEnter:m,onMouseOver:O,onMouseLeave:K},_=[],w=0;w<Y;w++){var B=(w+1)*G-1,ce=F?B:(0,r.clamp)(B,0,Z-1),j=ce-(G-1),J=F?j:(0,r.clamp)(j,0,Z-1),ie=(0,n.default)({"slick-active":F?v>=J&&v<=ce:v===J}),se={message:"dots",index:w,slidesToScroll:G,currentSlide:v},ge=this.clickHandler.bind(this,se);_=_.concat(e.default.createElement("li",{key:w,className:ie},e.default.cloneElement(this.props.customPaging(w),{onClick:ge})))}return e.default.cloneElement(this.props.appendDots(_),c({className:this.props.dotsClass},U))}}]),I}(e.default.PureComponent),Wo}var Xr={},og;function BT(){if(og)return Xr;og=1;function s(L){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},s(L)}Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.PrevArrow=Xr.NextArrow=void 0;var e=a(yi()),n=a($l()),r=ea();function a(L){return L&&L.__esModule?L:{default:L}}function l(){return l=Object.assign?Object.assign.bind():function(L){for(var P=1;P<arguments.length;P++){var I=arguments[P];for(var V in I)Object.prototype.hasOwnProperty.call(I,V)&&(L[V]=I[V])}return L},l.apply(this,arguments)}function c(L,P){var I=Object.keys(L);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(L);P&&(V=V.filter(function(T){return Object.getOwnPropertyDescriptor(L,T).enumerable})),I.push.apply(I,V)}return I}function f(L){for(var P=1;P<arguments.length;P++){var I=arguments[P]!=null?arguments[P]:{};P%2?c(Object(I),!0).forEach(function(V){h(L,V,I[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(I)):c(Object(I)).forEach(function(V){Object.defineProperty(L,V,Object.getOwnPropertyDescriptor(I,V))})}return L}function h(L,P,I){return P=M(P),P in L?Object.defineProperty(L,P,{value:I,enumerable:!0,configurable:!0,writable:!0}):L[P]=I,L}function g(L,P){if(!(L instanceof P))throw new TypeError("Cannot call a class as a function")}function S(L,P){for(var I=0;I<P.length;I++){var V=P[I];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(L,M(V.key),V)}}function x(L,P,I){return P&&S(L.prototype,P),Object.defineProperty(L,"prototype",{writable:!1}),L}function M(L){var P=A(L,"string");return s(P)=="symbol"?P:String(P)}function A(L,P){if(s(L)!="object"||!L)return L;var I=L[Symbol.toPrimitive];if(I!==void 0){var V=I.call(L,P||"default");if(s(V)!="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(L)}function D(L,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(P&&P.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),P&&b(L,P)}function b(L,P){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(V,T){return V.__proto__=T,V},b(L,P)}function E(L){var P=H();return function(){var V=k(L),T;if(P){var m=k(this).constructor;T=Reflect.construct(V,arguments,m)}else T=V.apply(this,arguments);return y(this,T)}}function y(L,P){if(P&&(s(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q(L)}function q(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function H(){try{var L=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H=function(){return!!L})()}function k(L){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(I){return I.__proto__||Object.getPrototypeOf(I)},k(L)}return Xr.PrevArrow=function(L){D(I,L);var P=E(I);function I(){return g(this,I),P.apply(this,arguments)}return x(I,[{key:"clickHandler",value:function(T,m){m&&m.preventDefault(),this.props.clickHandler(T,m)}},{key:"render",value:function(){var T={"slick-arrow":!0,"slick-prev":!0},m=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(T["slick-disabled"]=!0,m=null);var O={key:"0","data-role":"none",className:(0,n.default)(T),style:{display:"block"},onClick:m},K={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.prevArrow?F=e.default.cloneElement(this.props.prevArrow,f(f({},O),K)):F=e.default.createElement("button",l({key:"0",type:"button"},O)," ","Previous"),F}}]),I}(e.default.PureComponent),Xr.NextArrow=function(L){D(I,L);var P=E(I);function I(){return g(this,I),P.apply(this,arguments)}return x(I,[{key:"clickHandler",value:function(T,m){m&&m.preventDefault(),this.props.clickHandler(T,m)}},{key:"render",value:function(){var T={"slick-arrow":!0,"slick-next":!0},m=this.clickHandler.bind(this,{message:"next"});(0,r.canGoNext)(this.props)||(T["slick-disabled"]=!0,m=null);var O={key:"1","data-role":"none",className:(0,n.default)(T),style:{display:"block"},onClick:m},K={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.nextArrow?F=e.default.cloneElement(this.props.nextArrow,f(f({},O),K)):F=e.default.createElement("button",l({key:"1",type:"button"},O)," ","Next"),F}}]),I}(e.default.PureComponent),Xr}var Jg=function(){if(typeof Map<"u")return Map;function s(e,n){var r=-1;return e.some(function(a,l){return a[0]===n?(r=l,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=s(this.__entries__,n),a=this.__entries__[r];return a&&a[1]},e.prototype.set=function(n,r){var a=s(this.__entries__,n);~a?this.__entries__[a][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,a=s(r,n);~a&&r.splice(a,1)},e.prototype.has=function(n){return!!~s(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var a=0,l=this.__entries__;a<l.length;a++){var c=l[a];n.call(r,c[1],c[0])}},e}()}(),cd=typeof window<"u"&&typeof document<"u"&&window.document===document,Wl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),HT=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Wl):function(s){return setTimeout(function(){return s(Date.now())},1e3/60)}}(),VT=2;function GT(s,e){var n=!1,r=!1,a=0;function l(){n&&(n=!1,s()),r&&f()}function c(){HT(l)}function f(){var h=Date.now();if(n){if(h-a<VT)return;r=!0}else n=!0,r=!1,setTimeout(c,e);a=h}return f}var WT=20,jT=["top","right","bottom","left","width","height","size","weight"],XT=typeof MutationObserver<"u",qT=function(){function s(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=GT(this.refresh.bind(this),WT)}return s.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},s.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},s.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},s.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},s.prototype.connect_=function(){!cd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),XT?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},s.prototype.disconnect_=function(){!cd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},s.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,a=jT.some(function(l){return!!~r.indexOf(l)});a&&this.refresh()},s.getInstance=function(){return this.instance_||(this.instance_=new s),this.instance_},s.instance_=null,s}(),e_=function(s,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var a=r[n];Object.defineProperty(s,a,{value:e[a],enumerable:!1,writable:!1,configurable:!0})}return s},no=function(s){var e=s&&s.ownerDocument&&s.ownerDocument.defaultView;return e||Wl},t_=Zl(0,0,0,0);function jl(s){return parseFloat(s)||0}function ag(s){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,a){var l=s["border-"+a+"-width"];return r+jl(l)},0)}function YT(s){for(var e=["top","right","bottom","left"],n={},r=0,a=e;r<a.length;r++){var l=a[r],c=s["padding-"+l];n[l]=jl(c)}return n}function KT(s){var e=s.getBBox();return Zl(0,0,e.width,e.height)}function $T(s){var e=s.clientWidth,n=s.clientHeight;if(!e&&!n)return t_;var r=no(s).getComputedStyle(s),a=YT(r),l=a.left+a.right,c=a.top+a.bottom,f=jl(r.width),h=jl(r.height);if(r.boxSizing==="border-box"&&(Math.round(f+l)!==e&&(f-=ag(r,"left","right")+l),Math.round(h+c)!==n&&(h-=ag(r,"top","bottom")+c)),!QT(s)){var g=Math.round(f+l)-e,S=Math.round(h+c)-n;Math.abs(g)!==1&&(f-=g),Math.abs(S)!==1&&(h-=S)}return Zl(a.left,a.top,f,h)}var ZT=function(){return typeof SVGGraphicsElement<"u"?function(s){return s instanceof no(s).SVGGraphicsElement}:function(s){return s instanceof no(s).SVGElement&&typeof s.getBBox=="function"}}();function QT(s){return s===no(s).document.documentElement}function JT(s){return cd?ZT(s)?KT(s):$T(s):t_}function ew(s){var e=s.x,n=s.y,r=s.width,a=s.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,c=Object.create(l.prototype);return e_(c,{x:e,y:n,width:r,height:a,top:n,right:e+r,bottom:a+n,left:e}),c}function Zl(s,e,n,r){return{x:s,y:e,width:n,height:r}}var tw=function(){function s(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Zl(0,0,0,0),this.target=e}return s.prototype.isActive=function(){var e=JT(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},s.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},s}(),nw=function(){function s(e,n){var r=ew(n);e_(this,{target:e,contentRect:r})}return s}(),iw=function(){function s(e,n,r){if(this.activeObservations_=[],this.observations_=new Jg,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return s.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof no(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new tw(e)),this.controller_.addObserver(this),this.controller_.refresh())}},s.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof no(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},s.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},s.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},s.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new nw(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},s.prototype.clearActive=function(){this.activeObservations_.splice(0)},s.prototype.hasActive=function(){return this.activeObservations_.length>0},s}(),n_=typeof WeakMap<"u"?new WeakMap:new Jg,i_=function(){function s(e){if(!(this instanceof s))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=qT.getInstance(),r=new iw(e,n,this);n_.set(this,r)}return s}();["observe","unobserve","disconnect"].forEach(function(s){i_.prototype[s]=function(){var e;return(e=n_.get(this))[s].apply(e,arguments)}});var rw=function(){return typeof Wl.ResizeObserver<"u"?Wl.ResizeObserver:i_}();const sw=Object.freeze(Object.defineProperty({__proto__:null,default:rw},Symbol.toStringTag,{value:"Module"})),ow=Fv(sw);var lg;function aw(){if(lg)return Vo;lg=1,Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.InnerSlider=void 0;var s=g(yi()),e=g(UT()),n=g(FT()),r=g($l()),a=ea(),l=kT(),c=zT(),f=BT(),h=g(ow);function g(F){return F&&F.__esModule?F:{default:F}}function S(F){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},S(F)}function x(){return x=Object.assign?Object.assign.bind():function(F){for(var G=1;G<arguments.length;G++){var ee=arguments[G];for(var Z in ee)Object.prototype.hasOwnProperty.call(ee,Z)&&(F[Z]=ee[Z])}return F},x.apply(this,arguments)}function M(F,G){if(F==null)return{};var ee=A(F,G),Z,v;if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(F);for(v=0;v<Y.length;v++)Z=Y[v],!(G.indexOf(Z)>=0)&&Object.prototype.propertyIsEnumerable.call(F,Z)&&(ee[Z]=F[Z])}return ee}function A(F,G){if(F==null)return{};var ee={},Z=Object.keys(F),v,Y;for(Y=0;Y<Z.length;Y++)v=Z[Y],!(G.indexOf(v)>=0)&&(ee[v]=F[v]);return ee}function D(F,G){var ee=Object.keys(F);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(F);G&&(Z=Z.filter(function(v){return Object.getOwnPropertyDescriptor(F,v).enumerable})),ee.push.apply(ee,Z)}return ee}function b(F){for(var G=1;G<arguments.length;G++){var ee=arguments[G]!=null?arguments[G]:{};G%2?D(Object(ee),!0).forEach(function(Z){m(F,Z,ee[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(ee)):D(Object(ee)).forEach(function(Z){Object.defineProperty(F,Z,Object.getOwnPropertyDescriptor(ee,Z))})}return F}function E(F,G){if(!(F instanceof G))throw new TypeError("Cannot call a class as a function")}function y(F,G){for(var ee=0;ee<G.length;ee++){var Z=G[ee];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(F,O(Z.key),Z)}}function q(F,G,ee){return y(F.prototype,G),Object.defineProperty(F,"prototype",{writable:!1}),F}function H(F,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(G&&G.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),G&&k(F,G)}function k(F,G){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(Z,v){return Z.__proto__=v,Z},k(F,G)}function L(F){var G=V();return function(){var Z=T(F),v;if(G){var Y=T(this).constructor;v=Reflect.construct(Z,arguments,Y)}else v=Z.apply(this,arguments);return P(this,v)}}function P(F,G){if(G&&(S(G)==="object"||typeof G=="function"))return G;if(G!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(F)}function I(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function V(){try{var F=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!F})()}function T(F){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(ee){return ee.__proto__||Object.getPrototypeOf(ee)},T(F)}function m(F,G,ee){return G=O(G),G in F?Object.defineProperty(F,G,{value:ee,enumerable:!0,configurable:!0,writable:!0}):F[G]=ee,F}function O(F){var G=K(F,"string");return S(G)=="symbol"?G:String(G)}function K(F,G){if(S(F)!="object"||!F)return F;var ee=F[Symbol.toPrimitive];if(ee!==void 0){var Z=ee.call(F,G||"default");if(S(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(G==="string"?String:Number)(F)}return Vo.InnerSlider=function(F){H(ee,F);var G=L(ee);function ee(Z){var v;E(this,ee),v=G.call(this,Z),m(I(v),"listRefHandler",function(U){return v.list=U}),m(I(v),"trackRefHandler",function(U){return v.track=U}),m(I(v),"adaptHeight",function(){if(v.props.adaptiveHeight&&v.list){var U=v.list.querySelector('[data-index="'.concat(v.state.currentSlide,'"]'));v.list.style.height=(0,a.getHeight)(U)+"px"}}),m(I(v),"componentDidMount",function(){if(v.props.onInit&&v.props.onInit(),v.props.lazyLoad){var U=(0,a.getOnDemandLazySlides)(b(b({},v.props),v.state));U.length>0&&(v.setState(function(w){return{lazyLoadedList:w.lazyLoadedList.concat(U)}}),v.props.onLazyLoad&&v.props.onLazyLoad(U))}var _=b({listRef:v.list,trackRef:v.track},v.props);v.updateState(_,!0,function(){v.adaptHeight(),v.props.autoplay&&v.autoPlay("update")}),v.props.lazyLoad==="progressive"&&(v.lazyLoadTimer=setInterval(v.progressiveLazyLoad,1e3)),v.ro=new h.default(function(){v.state.animating?(v.onWindowResized(!1),v.callbackTimers.push(setTimeout(function(){return v.onWindowResized()},v.props.speed))):v.onWindowResized()}),v.ro.observe(v.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(w){w.onfocus=v.props.pauseOnFocus?v.onSlideFocus:null,w.onblur=v.props.pauseOnFocus?v.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",v.onWindowResized):window.attachEvent("onresize",v.onWindowResized)}),m(I(v),"componentWillUnmount",function(){v.animationEndCallback&&clearTimeout(v.animationEndCallback),v.lazyLoadTimer&&clearInterval(v.lazyLoadTimer),v.callbackTimers.length&&(v.callbackTimers.forEach(function(U){return clearTimeout(U)}),v.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",v.onWindowResized):window.detachEvent("onresize",v.onWindowResized),v.autoplayTimer&&clearInterval(v.autoplayTimer),v.ro.disconnect()}),m(I(v),"componentDidUpdate",function(U){if(v.checkImagesLoad(),v.props.onReInit&&v.props.onReInit(),v.props.lazyLoad){var _=(0,a.getOnDemandLazySlides)(b(b({},v.props),v.state));_.length>0&&(v.setState(function(ce){return{lazyLoadedList:ce.lazyLoadedList.concat(_)}}),v.props.onLazyLoad&&v.props.onLazyLoad(_))}v.adaptHeight();var w=b(b({listRef:v.list,trackRef:v.track},v.props),v.state),B=v.didPropsChange(U);B&&v.updateState(w,B,function(){v.state.currentSlide>=s.default.Children.count(v.props.children)&&v.changeSlide({message:"index",index:s.default.Children.count(v.props.children)-v.props.slidesToShow,currentSlide:v.state.currentSlide}),v.props.autoplay?v.autoPlay("update"):v.pause("paused")})}),m(I(v),"onWindowResized",function(U){v.debouncedResize&&v.debouncedResize.cancel(),v.debouncedResize=(0,n.default)(function(){return v.resizeWindow(U)},50),v.debouncedResize()}),m(I(v),"resizeWindow",function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,_=!!(v.track&&v.track.node);if(_){var w=b(b({listRef:v.list,trackRef:v.track},v.props),v.state);v.updateState(w,U,function(){v.props.autoplay?v.autoPlay("update"):v.pause("paused")}),v.setState({animating:!1}),clearTimeout(v.animationEndCallback),delete v.animationEndCallback}}),m(I(v),"updateState",function(U,_,w){var B=(0,a.initializedState)(U);U=b(b(b({},U),B),{},{slideIndex:B.currentSlide});var ce=(0,a.getTrackLeft)(U);U=b(b({},U),{},{left:ce});var j=(0,a.getTrackCSS)(U);(_||s.default.Children.count(v.props.children)!==s.default.Children.count(U.children))&&(B.trackStyle=j),v.setState(B,w)}),m(I(v),"ssrInit",function(){if(v.props.variableWidth){var U=0,_=0,w=[],B=(0,a.getPreClones)(b(b(b({},v.props),v.state),{},{slideCount:v.props.children.length})),ce=(0,a.getPostClones)(b(b(b({},v.props),v.state),{},{slideCount:v.props.children.length}));v.props.children.forEach(function(et){w.push(et.props.style.width),U+=et.props.style.width});for(var j=0;j<B;j++)_+=w[w.length-1-j],U+=w[w.length-1-j];for(var J=0;J<ce;J++)U+=w[J];for(var ie=0;ie<v.state.currentSlide;ie++)_+=w[ie];var se={width:U+"px",left:-_+"px"};if(v.props.centerMode){var ge="".concat(w[v.state.currentSlide],"px");se.left="calc(".concat(se.left," + (100% - ").concat(ge,") / 2 ) ")}return{trackStyle:se}}var Se=s.default.Children.count(v.props.children),Re=b(b(b({},v.props),v.state),{},{slideCount:Se}),Je=(0,a.getPreClones)(Re)+(0,a.getPostClones)(Re)+Se,Ge=100/v.props.slidesToShow*Je,Qe=100/Je,X=-Qe*((0,a.getPreClones)(Re)+v.state.currentSlide)*Ge/100;v.props.centerMode&&(X+=(100-Qe*Ge/100)/2);var ct={width:Ge+"%",left:X+"%"};return{slideWidth:Qe+"%",trackStyle:ct}}),m(I(v),"checkImagesLoad",function(){var U=v.list&&v.list.querySelectorAll&&v.list.querySelectorAll(".slick-slide img")||[],_=U.length,w=0;Array.prototype.forEach.call(U,function(B){var ce=function(){return++w&&w>=_&&v.onWindowResized()};if(!B.onclick)B.onclick=function(){return B.parentNode.focus()};else{var j=B.onclick;B.onclick=function(J){j(J),B.parentNode.focus()}}B.onload||(v.props.lazyLoad?B.onload=function(){v.adaptHeight(),v.callbackTimers.push(setTimeout(v.onWindowResized,v.props.speed))}:(B.onload=ce,B.onerror=function(){ce(),v.props.onLazyLoadError&&v.props.onLazyLoadError()}))})}),m(I(v),"progressiveLazyLoad",function(){for(var U=[],_=b(b({},v.props),v.state),w=v.state.currentSlide;w<v.state.slideCount+(0,a.getPostClones)(_);w++)if(v.state.lazyLoadedList.indexOf(w)<0){U.push(w);break}for(var B=v.state.currentSlide-1;B>=-(0,a.getPreClones)(_);B--)if(v.state.lazyLoadedList.indexOf(B)<0){U.push(B);break}U.length>0?(v.setState(function(ce){return{lazyLoadedList:ce.lazyLoadedList.concat(U)}}),v.props.onLazyLoad&&v.props.onLazyLoad(U)):v.lazyLoadTimer&&(clearInterval(v.lazyLoadTimer),delete v.lazyLoadTimer)}),m(I(v),"slideHandler",function(U){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=v.props,B=w.asNavFor,ce=w.beforeChange,j=w.onLazyLoad,J=w.speed,ie=w.afterChange,se=v.state.currentSlide,ge=(0,a.slideHandler)(b(b(b({index:U},v.props),v.state),{},{trackRef:v.track,useCSS:v.props.useCSS&&!_})),Se=ge.state,Re=ge.nextState;if(Se){ce&&ce(se,Se.currentSlide);var Je=Se.lazyLoadedList.filter(function(Ge){return v.state.lazyLoadedList.indexOf(Ge)<0});j&&Je.length>0&&j(Je),!v.props.waitForAnimate&&v.animationEndCallback&&(clearTimeout(v.animationEndCallback),ie&&ie(se),delete v.animationEndCallback),v.setState(Se,function(){B&&v.asNavForIndex!==U&&(v.asNavForIndex=U,B.innerSlider.slideHandler(U)),Re&&(v.animationEndCallback=setTimeout(function(){var Ge=Re.animating,Qe=M(Re,["animating"]);v.setState(Qe,function(){v.callbackTimers.push(setTimeout(function(){return v.setState({animating:Ge})},10)),ie&&ie(Se.currentSlide),delete v.animationEndCallback})},J))})}}),m(I(v),"changeSlide",function(U){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=b(b({},v.props),v.state),B=(0,a.changeSlide)(w,U);if(!(B!==0&&!B)&&(_===!0?v.slideHandler(B,_):v.slideHandler(B),v.props.autoplay&&v.autoPlay("update"),v.props.focusOnSelect)){var ce=v.list.querySelectorAll(".slick-current");ce[0]&&ce[0].focus()}}),m(I(v),"clickHandler",function(U){v.clickable===!1&&(U.stopPropagation(),U.preventDefault()),v.clickable=!0}),m(I(v),"keyHandler",function(U){var _=(0,a.keyHandler)(U,v.props.accessibility,v.props.rtl);_!==""&&v.changeSlide({message:_})}),m(I(v),"selectHandler",function(U){v.changeSlide(U)}),m(I(v),"disableBodyScroll",function(){var U=function(w){w=w||window.event,w.preventDefault&&w.preventDefault(),w.returnValue=!1};window.ontouchmove=U}),m(I(v),"enableBodyScroll",function(){window.ontouchmove=null}),m(I(v),"swipeStart",function(U){v.props.verticalSwiping&&v.disableBodyScroll();var _=(0,a.swipeStart)(U,v.props.swipe,v.props.draggable);_!==""&&v.setState(_)}),m(I(v),"swipeMove",function(U){var _=(0,a.swipeMove)(U,b(b(b({},v.props),v.state),{},{trackRef:v.track,listRef:v.list,slideIndex:v.state.currentSlide}));_&&(_.swiping&&(v.clickable=!1),v.setState(_))}),m(I(v),"swipeEnd",function(U){var _=(0,a.swipeEnd)(U,b(b(b({},v.props),v.state),{},{trackRef:v.track,listRef:v.list,slideIndex:v.state.currentSlide}));if(_){var w=_.triggerSlideHandler;delete _.triggerSlideHandler,v.setState(_),w!==void 0&&(v.slideHandler(w),v.props.verticalSwiping&&v.enableBodyScroll())}}),m(I(v),"touchEnd",function(U){v.swipeEnd(U),v.clickable=!0}),m(I(v),"slickPrev",function(){v.callbackTimers.push(setTimeout(function(){return v.changeSlide({message:"previous"})},0))}),m(I(v),"slickNext",function(){v.callbackTimers.push(setTimeout(function(){return v.changeSlide({message:"next"})},0))}),m(I(v),"slickGoTo",function(U){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(U=Number(U),isNaN(U))return"";v.callbackTimers.push(setTimeout(function(){return v.changeSlide({message:"index",index:U,currentSlide:v.state.currentSlide},_)},0))}),m(I(v),"play",function(){var U;if(v.props.rtl)U=v.state.currentSlide-v.props.slidesToScroll;else if((0,a.canGoNext)(b(b({},v.props),v.state)))U=v.state.currentSlide+v.props.slidesToScroll;else return!1;v.slideHandler(U)}),m(I(v),"autoPlay",function(U){v.autoplayTimer&&clearInterval(v.autoplayTimer);var _=v.state.autoplaying;if(U==="update"){if(_==="hovered"||_==="focused"||_==="paused")return}else if(U==="leave"){if(_==="paused"||_==="focused")return}else if(U==="blur"&&(_==="paused"||_==="hovered"))return;v.autoplayTimer=setInterval(v.play,v.props.autoplaySpeed+50),v.setState({autoplaying:"playing"})}),m(I(v),"pause",function(U){v.autoplayTimer&&(clearInterval(v.autoplayTimer),v.autoplayTimer=null);var _=v.state.autoplaying;U==="paused"?v.setState({autoplaying:"paused"}):U==="focused"?(_==="hovered"||_==="playing")&&v.setState({autoplaying:"focused"}):_==="playing"&&v.setState({autoplaying:"hovered"})}),m(I(v),"onDotsOver",function(){return v.props.autoplay&&v.pause("hovered")}),m(I(v),"onDotsLeave",function(){return v.props.autoplay&&v.state.autoplaying==="hovered"&&v.autoPlay("leave")}),m(I(v),"onTrackOver",function(){return v.props.autoplay&&v.pause("hovered")}),m(I(v),"onTrackLeave",function(){return v.props.autoplay&&v.state.autoplaying==="hovered"&&v.autoPlay("leave")}),m(I(v),"onSlideFocus",function(){return v.props.autoplay&&v.pause("focused")}),m(I(v),"onSlideBlur",function(){return v.props.autoplay&&v.state.autoplaying==="focused"&&v.autoPlay("blur")}),m(I(v),"render",function(){var U=(0,r.default)("slick-slider",v.props.className,{"slick-vertical":v.props.vertical,"slick-initialized":!0}),_=b(b({},v.props),v.state),w=(0,a.extractObject)(_,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),B=v.props.pauseOnHover;w=b(b({},w),{},{onMouseEnter:B?v.onTrackOver:null,onMouseLeave:B?v.onTrackLeave:null,onMouseOver:B?v.onTrackOver:null,focusOnSelect:v.props.focusOnSelect&&v.clickable?v.selectHandler:null});var ce;if(v.props.dots===!0&&v.state.slideCount>=v.props.slidesToShow){var j=(0,a.extractObject)(_,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),J=v.props.pauseOnDotsHover;j=b(b({},j),{},{clickHandler:v.changeSlide,onMouseEnter:J?v.onDotsLeave:null,onMouseOver:J?v.onDotsOver:null,onMouseLeave:J?v.onDotsLeave:null}),ce=s.default.createElement(c.Dots,j)}var ie,se,ge=(0,a.extractObject)(_,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);ge.clickHandler=v.changeSlide,v.props.arrows&&(ie=s.default.createElement(f.PrevArrow,ge),se=s.default.createElement(f.NextArrow,ge));var Se=null;v.props.vertical&&(Se={height:v.state.listHeight});var Re=null;v.props.vertical===!1?v.props.centerMode===!0&&(Re={padding:"0px "+v.props.centerPadding}):v.props.centerMode===!0&&(Re={padding:v.props.centerPadding+" 0px"});var Je=b(b({},Se),Re),Ge=v.props.touchMove,Qe={className:"slick-list",style:Je,onClick:v.clickHandler,onMouseDown:Ge?v.swipeStart:null,onMouseMove:v.state.dragging&&Ge?v.swipeMove:null,onMouseUp:Ge?v.swipeEnd:null,onMouseLeave:v.state.dragging&&Ge?v.swipeEnd:null,onTouchStart:Ge?v.swipeStart:null,onTouchMove:v.state.dragging&&Ge?v.swipeMove:null,onTouchEnd:Ge?v.touchEnd:null,onTouchCancel:v.state.dragging&&Ge?v.swipeEnd:null,onKeyDown:v.props.accessibility?v.keyHandler:null},X={className:U,dir:"ltr",style:v.props.style};return v.props.unslick&&(Qe={className:"slick-list"},X={className:U}),s.default.createElement("div",X,v.props.unslick?"":ie,s.default.createElement("div",x({ref:v.listRefHandler},Qe),s.default.createElement(l.Track,x({ref:v.trackRefHandler},w),v.props.children)),v.props.unslick?"":se,v.props.unslick?"":ce)}),v.list=null,v.track=null,v.state=b(b({},e.default),{},{currentSlide:v.props.initialSlide,targetSlide:v.props.initialSlide?v.props.initialSlide:0,slideCount:s.default.Children.count(v.props.children)}),v.callbackTimers=[],v.clickable=!0,v.debouncedResize=null;var Y=v.ssrInit();return v.state=b(b({},v.state),Y),v}return q(ee,[{key:"didPropsChange",value:function(v){for(var Y=!1,U=0,_=Object.keys(this.props);U<_.length;U++){var w=_[U];if(!v.hasOwnProperty(w)){Y=!0;break}if(!(S(v[w])==="object"||typeof v[w]=="function"||isNaN(v[w]))&&v[w]!==this.props[w]){Y=!0;break}}return Y||s.default.Children.count(this.props.children)!==s.default.Children.count(v.children)}}]),ee}(s.default.Component),Vo}var gf,ug;function lw(){if(ug)return gf;ug=1;var s=function(e){return e.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()}).toLowerCase()};return gf=s,gf}var _f,cg;function uw(){if(cg)return _f;cg=1;var s=lw(),e=function(a){var l=/[height|width]$/;return l.test(a)},n=function(a){var l="",c=Object.keys(a);return c.forEach(function(f,h){var g=a[f];f=s(f),e(f)&&typeof g=="number"&&(g=g+"px"),g===!0?l+=f:g===!1?l+="not "+f:l+="("+f+": "+g+")",h<c.length-1&&(l+=" and ")}),l},r=function(a){var l="";return typeof a=="string"?a:a instanceof Array?(a.forEach(function(c,f){l+=n(c),f<a.length-1&&(l+=", ")}),l):n(a)};return _f=r,_f}var vf,fg;function cw(){if(fg)return vf;fg=1;function s(e){this.options=e,!e.deferSetup&&this.setup()}return s.prototype={constructor:s,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},vf=s,vf}var yf,dg;function r_(){if(dg)return yf;dg=1;function s(r,a){var l=0,c=r.length,f;for(l;l<c&&(f=a(r[l],l),f!==!1);l++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return yf={isFunction:n,isArray:e,each:s},yf}var Sf,hg;function fw(){if(hg)return Sf;hg=1;var s=cw(),e=r_().each;function n(r,a){this.query=r,this.isUnconditional=a,this.handlers=[],this.mql=window.matchMedia(r);var l=this;this.listener=function(c){l.mql=c.currentTarget||c,l.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var a=new s(r);this.handlers.push(a),this.matches()&&a.on()},removeHandler:function(r){var a=this.handlers;e(a,function(l,c){if(l.equals(r))return l.destroy(),!a.splice(c,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(a){a[r]()})}},Sf=n,Sf}var xf,pg;function dw(){if(pg)return xf;pg=1;var s=fw(),e=r_(),n=e.each,r=e.isFunction,a=e.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return l.prototype={constructor:l,register:function(c,f,h){var g=this.queries,S=h&&this.browserIsIncapable;return g[c]||(g[c]=new s(c,S)),r(f)&&(f={match:f}),a(f)||(f=[f]),n(f,function(x){r(x)&&(x={match:x}),g[c].addHandler(x)}),this},unregister:function(c,f){var h=this.queries[c];return h&&(f?h.removeHandler(f):(h.clear(),delete this.queries[c])),this}},xf=l,xf}var Mf,mg;function hw(){if(mg)return Mf;mg=1;var s=dw();return Mf=new s,Mf}var gg;function pw(){return gg||(gg=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=c(yi()),n=aw(),r=c(uw()),a=c(Qg()),l=ea();function c(T){return T&&T.__esModule?T:{default:T}}function f(T){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},f(T)}function h(){return h=Object.assign?Object.assign.bind():function(T){for(var m=1;m<arguments.length;m++){var O=arguments[m];for(var K in O)Object.prototype.hasOwnProperty.call(O,K)&&(T[K]=O[K])}return T},h.apply(this,arguments)}function g(T,m){var O=Object.keys(T);if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(T);m&&(K=K.filter(function(F){return Object.getOwnPropertyDescriptor(T,F).enumerable})),O.push.apply(O,K)}return O}function S(T){for(var m=1;m<arguments.length;m++){var O=arguments[m]!=null?arguments[m]:{};m%2?g(Object(O),!0).forEach(function(K){L(T,K,O[K])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(O)):g(Object(O)).forEach(function(K){Object.defineProperty(T,K,Object.getOwnPropertyDescriptor(O,K))})}return T}function x(T,m){if(!(T instanceof m))throw new TypeError("Cannot call a class as a function")}function M(T,m){for(var O=0;O<m.length;O++){var K=m[O];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(T,P(K.key),K)}}function A(T,m,O){return M(T.prototype,m),Object.defineProperty(T,"prototype",{writable:!1}),T}function D(T,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(m&&m.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),m&&b(T,m)}function b(T,m){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(K,F){return K.__proto__=F,K},b(T,m)}function E(T){var m=H();return function(){var K=k(T),F;if(m){var G=k(this).constructor;F=Reflect.construct(K,arguments,G)}else F=K.apply(this,arguments);return y(this,F)}}function y(T,m){if(m&&(f(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q(T)}function q(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function H(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H=function(){return!!T})()}function k(T){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},k(T)}function L(T,m,O){return m=P(m),m in T?Object.defineProperty(T,m,{value:O,enumerable:!0,configurable:!0,writable:!0}):T[m]=O,T}function P(T){var m=I(T,"string");return f(m)=="symbol"?m:String(m)}function I(T,m){if(f(T)!="object"||!T)return T;var O=T[Symbol.toPrimitive];if(O!==void 0){var K=O.call(T,m||"default");if(f(K)!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(T)}var V=(0,l.canUseDOM)()&&hw();s.default=function(T){D(O,T);var m=E(O);function O(K){var F;return x(this,O),F=m.call(this,K),L(q(F),"innerSliderRefHandler",function(G){return F.innerSlider=G}),L(q(F),"slickPrev",function(){return F.innerSlider.slickPrev()}),L(q(F),"slickNext",function(){return F.innerSlider.slickNext()}),L(q(F),"slickGoTo",function(G){var ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return F.innerSlider.slickGoTo(G,ee)}),L(q(F),"slickPause",function(){return F.innerSlider.pause("paused")}),L(q(F),"slickPlay",function(){return F.innerSlider.autoPlay("play")}),F.state={breakpoint:null},F._responsiveMediaHandlers=[],F}return A(O,[{key:"media",value:function(F,G){V.register(F,G),this._responsiveMediaHandlers.push({query:F,handler:G})}},{key:"componentDidMount",value:function(){var F=this;if(this.props.responsive){var G=this.props.responsive.map(function(Z){return Z.breakpoint});G.sort(function(Z,v){return Z-v}),G.forEach(function(Z,v){var Y;v===0?Y=(0,r.default)({minWidth:0,maxWidth:Z}):Y=(0,r.default)({minWidth:G[v-1]+1,maxWidth:Z}),(0,l.canUseDOM)()&&F.media(Y,function(){F.setState({breakpoint:Z})})});var ee=(0,r.default)({minWidth:G.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(ee,function(){F.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(F){V.unregister(F.query,F.handler)})}},{key:"render",value:function(){var F=this,G,ee;this.state.breakpoint?(ee=this.props.responsive.filter(function(J){return J.breakpoint===F.state.breakpoint}),G=ee[0].settings==="unslick"?"unslick":S(S(S({},a.default),this.props),ee[0].settings)):G=S(S({},a.default),this.props),G.centerMode&&(G.slidesToScroll>1,G.slidesToScroll=1),G.fade&&(G.slidesToShow>1,G.slidesToScroll>1,G.slidesToShow=1,G.slidesToScroll=1);var Z=e.default.Children.toArray(this.props.children);Z=Z.filter(function(J){return typeof J=="string"?!!J.trim():!!J}),G.variableWidth&&(G.rows>1||G.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),G.variableWidth=!1);for(var v=[],Y=null,U=0;U<Z.length;U+=G.rows*G.slidesPerRow){for(var _=[],w=U;w<U+G.rows*G.slidesPerRow;w+=G.slidesPerRow){for(var B=[],ce=w;ce<w+G.slidesPerRow&&(G.variableWidth&&Z[ce].props.style&&(Y=Z[ce].props.style.width),!(ce>=Z.length));ce+=1)B.push(e.default.cloneElement(Z[ce],{key:100*U+10*w+ce,tabIndex:-1,style:{width:"".concat(100/G.slidesPerRow,"%"),display:"inline-block"}}));_.push(e.default.createElement("div",{key:10*U+w},B))}G.variableWidth?v.push(e.default.createElement("div",{key:U,style:{width:Y}},_)):v.push(e.default.createElement("div",{key:U},_))}if(G==="unslick"){var j="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:j},Z)}else v.length<=G.slidesToShow&&!G.infinite&&(G.unslick=!0);return e.default.createElement(n.InnerSlider,h({style:this.props.style,ref:this.innerSliderRefHandler},(0,l.filterSettings)(G)),v)}}]),O}(e.default.Component)}(ff)),ff}var _g;function mw(){return _g||(_g=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=n(pw());function n(r){return r&&r.__esModule?r:{default:r}}s.default=e.default}(cf)),cf}var gw=mw();const _w=Uv(gw),vw=()=>{const s=Qr.useRef(null),[e,n]=Qr.useState(!0),[r,a]=Qr.useState(!1),l={infinite:!1,speed:500,slidesToShow:5,slidesToScroll:1,arrows:!1,afterChange:h=>{const g=s.current.props.children.length-l.slidesToShow;n(h===0),a(h>=g)},responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]},c=()=>{e||s.current.slickPrev()},f=()=>{r||s.current.slickNext()};return Pe.jsxs("section",{className:"slider",children:[Pe.jsxs("div",{className:"slider__header",children:[Pe.jsx("h3",{className:"slider__title",children:"POPULAR THIS WEEK"}),Pe.jsxs("div",{className:"slider__controls",children:[Pe.jsx("button",{className:`slider__button slider__button--prev ${e?"slider__button--disabled":""}`,onClick:c,disabled:e,children:Pe.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Pe.jsx("circle",{cx:"19",cy:"19",r:"18.2875",transform:"rotate(-180 19 19)",stroke:"#A7A6A6",strokeWidth:"1.425"}),Pe.jsx("path",{d:"M21.6916 27.075L23.5892 25.1774L17.4253 19L23.5892 12.8226L21.6916 10.925L13.6166 19L21.6916 27.075Z",fill:"#A7A6A6"})]})}),Pe.jsx("button",{className:`slider__button slider__button--next ${r?"slider__button--disabled":""}`,onClick:f,disabled:r,children:Pe.jsxs("svg",{width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Pe.jsx("circle",{cx:"20.5",cy:"20.5",r:"19.7313",stroke:"white",strokeWidth:"1.5375"}),Pe.jsx("path",{d:"M17.5959 11.7875L15.5485 13.8349L22.199 20.5L15.5485 27.1651L17.5959 29.2125L26.3084 20.5L17.5959 11.7875Z",fill:"white"})]})})]})]}),Pe.jsxs(_w,{ref:s,...l,children:[Pe.jsx("div",{className:"slider__item",children:Pe.jsx("img",{src:"./src/assets/img/slider/film1.jpg",alt:"Film 1"})}),Pe.jsx("div",{className:"slider__item",children:Pe.jsx("img",{src:"./src/assets/img/slider/film2.jpg",alt:"Film 2"})}),Pe.jsx("div",{className:"slider__item",children:Pe.jsx("img",{src:"./src/assets/img/slider/film3.jpg",alt:"Film 3"})}),Pe.jsx("div",{className:"slider__item",children:Pe.jsx("img",{src:"./src/assets/img/slider/film4.jpg",alt:"Film 4"})}),Pe.jsx("div",{className:"slider__item",children:Pe.jsx("img",{src:"./src/assets/img/slider/film5.jpg",alt:"Film 5"})}),Pe.jsx("div",{className:"slider__item",children:Pe.jsx("img",{src:"./src/assets/img/slider/film6.jpg",alt:"Film 6"})})]})]})};function yw(){return Pe.jsx(Pe.Fragment,{children:Pe.jsxs("div",{className:"",children:[Pe.jsx(IT,{}),Pe.jsx(PT,{}),Pe.jsx(OT,{}),Pe.jsx(LT,{}),Pe.jsx(vw,{})]})})}Xv.createRoot(document.getElementById("root")).render(Pe.jsx(Qr.StrictMode,{children:Pe.jsx(yw,{})}));
