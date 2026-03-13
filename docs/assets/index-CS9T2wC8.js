(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},js=[],ti=()=>{},Bh=()=>!1,To=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qc=n=>n.startsWith("onUpdate:"),jt=Object.assign,eu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},om=Object.prototype.hasOwnProperty,xt=(n,e)=>om.call(n,e),st=Array.isArray,Ks=n=>ra(n)==="[object Map]",kh=n=>ra(n)==="[object Set]",Nu=n=>ra(n)==="[object Date]",ot=n=>typeof n=="function",Nt=n=>typeof n=="string",ri=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",zh=n=>(vt(n)||ot(n))&&ot(n.then)&&ot(n.catch),Vh=Object.prototype.toString,ra=n=>Vh.call(n),lm=n=>ra(n).slice(8,-1),Hh=n=>ra(n)==="[object Object]",tu=n=>Nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ir=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cm=/-\w/g,Vn=wo(n=>n.replace(cm,e=>e.slice(1).toUpperCase())),um=/\B([A-Z])/g,vs=wo(n=>n.replace(um,"-$1").toLowerCase()),Gh=wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wo=wo(n=>n?`on${Gh(n)}`:""),$n=(n,e)=>!Object.is(n,e),Xo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Wh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Fu;const Ao=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(n){if(st(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Nt(i)?mm(i):Xr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Nt(n)||vt(n))return n}const hm=/;(?![^(]*\))/g,dm=/:([^]+)/,pm=/\/\*[^]*?\*\//g;function mm(n){const e={};return n.replace(pm,"").split(hm).forEach(t=>{if(t){const i=t.split(dm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Co(n){let e="";if(Nt(n))e=n;else if(st(n))for(let t=0;t<n.length;t++){const i=Co(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xm=Jc(gm);function Xh(n){return!!n||n===""}function _m(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=nu(n[i],e[i]);return t}function nu(n,e){if(n===e)return!0;let t=Nu(n),i=Nu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ri(n),i=ri(e),t||i)return n===e;if(t=st(n),i=st(e),t||i)return t&&i?_m(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!nu(n[a],e[a]))return!1}}return String(n)===String(e)}const Yh=n=>!!(n&&n.__v_isRef===!0),Pn=n=>Nt(n)?n:n==null?"":st(n)||vt(n)&&(n.toString===Vh||!ot(n.toString))?Yh(n)?Pn(n.value):JSON.stringify(n,qh,2):String(n),qh=(n,e)=>Yh(e)?qh(n,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Yo(i,r)+" =>"]=s,t),{})}:kh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Yo(t))}:ri(e)?Yo(e):vt(e)&&!st(e)&&!Hh(e)?String(e):e,Yo=(n,e="")=>{var t;return ri(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dn;class vm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){++this._on===1&&(this.prevScope=dn,dn=this)}off(){this._on>0&&--this._on===0&&(dn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sm(){return dn}let At;const qo=new WeakSet;class jh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dn&&dn.active&&dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),$h(this);const e=At,t=Hn;At=this,Hn=!0;try{return this.fn()}finally{Jh(this),At=e,Hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ru(e);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let Kh=0,Ur,Nr;function Zh(n,e=!1){if(n.flags|=8,e){n.next=Nr,Nr=n;return}n.next=Ur,Ur=n}function iu(){Kh++}function su(){if(--Kh>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $h(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ru(i),bm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Hl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Qh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Yr)||(n.globalVersion=Yr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hl(n))))return;n.flags|=2;const e=n.dep,t=At,i=Hn;At=n,Hn=!0;try{$h(n);const s=n.fn(n._value);(e.version===0||$n(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=t,Hn=i,Jh(n),n.flags&=-3}}function ru(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ru(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function bm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Hn=!0;const ed=[];function Ci(){ed.push(Hn),Hn=!1}function Ri(){const n=ed.pop();Hn=n===void 0?!0:n}function Ou(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=At;At=void 0;try{e()}finally{At=t}}}let Yr=0;class ym{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!Hn||At===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==At)t=this.activeLink=new ym(At,this),At.deps?(t.prevDep=At.depsTail,At.depsTail.nextDep=t,At.depsTail=t):At.deps=At.depsTail=t,td(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=At.depsTail,t.nextDep=void 0,At.depsTail.nextDep=t,At.depsTail=t,At.deps===t&&(At.deps=i)}return t}trigger(e){this.version++,Yr++,this.notify(e)}notify(e){iu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{su()}}}function td(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)td(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Gl=new WeakMap,ps=Symbol(""),Wl=Symbol(""),qr=Symbol("");function $t(n,e,t){if(Hn&&At){let i=Gl.get(n);i||Gl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new au),s.map=i,s.key=t),s.track()}}function Ti(n,e,t,i,s,r){const a=Gl.get(n);if(!a){Yr++;return}const o=l=>{l&&l.trigger()};if(iu(),e==="clear")a.forEach(o);else{const l=st(n),c=l&&tu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===qr||!ri(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(qr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ps)),Ks(n)&&o(a.get(Wl)));break;case"delete":l||(o(a.get(ps)),Ks(n)&&o(a.get(Wl)));break;case"set":Ks(n)&&o(a.get(ps));break}}su()}function Ms(n){const e=gt(n);return e===n?e:($t(e,"iterate",qr),Un(n)?e:e.map(Gn))}function Ro(n){return $t(n=gt(n),"iterate",qr),n}function jn(n,e){return Pi(n)?tr(gs(n)?Gn(e):e):Gn(e)}const Mm={__proto__:null,[Symbol.iterator](){return jo(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return Ms(this).concat(...n.map(e=>st(e)?Ms(e):e))},entries(){return jo(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,e){return hi(this,"every",n,e,void 0,arguments)},filter(n,e){return hi(this,"filter",n,e,t=>t.map(i=>jn(this,i)),arguments)},find(n,e){return hi(this,"find",n,e,t=>jn(this,t),arguments)},findIndex(n,e){return hi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hi(this,"findLast",n,e,t=>jn(this,t),arguments)},findLastIndex(n,e){return hi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return Ms(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,e){return hi(this,"map",n,e,void 0,arguments)},pop(){return _r(this,"pop")},push(...n){return _r(this,"push",n)},reduce(n,...e){return Bu(this,"reduce",n,e)},reduceRight(n,...e){return Bu(this,"reduceRight",n,e)},shift(){return _r(this,"shift")},some(n,e){return hi(this,"some",n,e,void 0,arguments)},splice(...n){return _r(this,"splice",n)},toReversed(){return Ms(this).toReversed()},toSorted(n){return Ms(this).toSorted(n)},toSpliced(...n){return Ms(this).toSpliced(...n)},unshift(...n){return _r(this,"unshift",n)},values(){return jo(this,"values",n=>jn(this,n))}};function jo(n,e,t){const i=Ro(n),s=i[e]();return i!==n&&!Un(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Em=Array.prototype;function hi(n,e,t,i,s,r){const a=Ro(n),o=a!==n&&!Un(n),l=a[e];if(l!==Em[e]){const f=l.apply(n,r);return o?Gn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,jn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Bu(n,e,t,i){const s=Ro(n),r=s!==n&&!Un(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=jn(n,c)),t.call(this,c,jn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?jn(n,l):l}function Ko(n,e,t){const i=gt(n);$t(i,"iterate",qr);const s=i[e](...t);return(s===-1||s===!1)&&cu(t[0])?(t[0]=gt(t[0]),i[e](...t)):s}function _r(n,e,t=[]){Ci(),iu();const i=gt(n)[e].apply(n,t);return su(),Ri(),i}const Tm=Jc("__proto__,__v_isRef,__isVue"),nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ri));function wm(n){ri(n)||(n=String(n));const e=gt(this);return $t(e,"has",n),e.hasOwnProperty(n)}class id{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Fm:od:r?ad:rd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=st(e);if(!s){let l;if(a&&(l=Mm[t]))return l;if(t==="hasOwnProperty")return wm}const o=Reflect.get(e,t,Qt(e)?e:i);if((ri(t)?nd.has(t):Tm(t))||(s||$t(e,"get",t),r))return o;if(Qt(o)){const l=a&&tu(t)?o:o.value;return s&&vt(l)?Yl(l):l}return vt(o)?s?Yl(o):ms(o):o}}class sd extends id{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=st(e)&&tu(t);if(!this._isShallow){const c=Pi(r);if(!Un(i)&&!Pi(i)&&(r=gt(r),i=gt(i)),!a&&Qt(r)&&!Qt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:xt(e,t),l=Reflect.set(e,t,i,Qt(e)?e:s);return e===gt(s)&&(o?$n(i,r)&&Ti(e,"set",t,i):Ti(e,"add",t,i)),l}deleteProperty(e,t){const i=xt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ti(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ri(t)||!nd.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",st(e)?"length":ps),Reflect.ownKeys(e)}}class Am extends id{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Cm=new sd,Rm=new Am,Pm=new sd(!0);const Xl=n=>n,ga=n=>Reflect.getPrototypeOf(n);function Dm(n,e,t){return function(...i){const s=this.__v_raw,r=gt(s),a=Ks(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Xl:e?tr:Gn;return!e&&$t(r,"iterate",l?Wl:ps),jt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function xa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Lm(n,e){const t={get(s){const r=this.__v_raw,a=gt(r),o=gt(s);n||($n(s,o)&&$t(a,"get",s),$t(a,"get",o));const{has:l}=ga(a),c=e?Xl:n?tr:Gn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$t(gt(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,a=gt(r),o=gt(s);return n||($n(s,o)&&$t(a,"has",s),$t(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=gt(o),c=e?Xl:n?tr:Gn;return!n&&$t(l,"iterate",ps),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return jt(t,n?{add:xa("add"),set:xa("set"),delete:xa("delete"),clear:xa("clear")}:{add(s){const r=gt(this),a=ga(r),o=gt(s),l=!e&&!Un(s)&&!Pi(s)?o:s;return a.has.call(r,l)||$n(s,l)&&a.has.call(r,s)||$n(o,l)&&a.has.call(r,o)||(r.add(l),Ti(r,"add",l,l)),this},set(s,r){!e&&!Un(r)&&!Pi(r)&&(r=gt(r));const a=gt(this),{has:o,get:l}=ga(a);let c=o.call(a,s);c||(s=gt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?$n(r,u)&&Ti(a,"set",s,r):Ti(a,"add",s,r),this},delete(s){const r=gt(this),{has:a,get:o}=ga(r);let l=a.call(r,s);l||(s=gt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Ti(r,"delete",s,void 0),c},clear(){const s=gt(this),r=s.size!==0,a=s.clear();return r&&Ti(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Dm(s,n,e)}),t}function ou(n,e){const t=Lm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(xt(t,s)&&s in i?t:i,s,r)}const Im={get:ou(!1,!1)},Um={get:ou(!1,!0)},Nm={get:ou(!0,!1)};const rd=new WeakMap,ad=new WeakMap,od=new WeakMap,Fm=new WeakMap;function Om(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bm(n){return n.__v_skip||!Object.isExtensible(n)?0:Om(lm(n))}function ms(n){return Pi(n)?n:lu(n,!1,Cm,Im,rd)}function ld(n){return lu(n,!1,Pm,Um,ad)}function Yl(n){return lu(n,!0,Rm,Nm,od)}function lu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Bm(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function gs(n){return Pi(n)?gs(n.__v_raw):!!(n&&n.__v_isReactive)}function Pi(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function cu(n){return n?!!n.__v_raw:!1}function gt(n){const e=n&&n.__v_raw;return e?gt(e):n}function km(n){return!xt(n,"__v_skip")&&Object.isExtensible(n)&&Wh(n,"__v_skip",!0),n}const Gn=n=>vt(n)?ms(n):n,tr=n=>vt(n)?Yl(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function Ja(n){return ud(n,!1)}function cd(n){return ud(n,!0)}function ud(n,e){return Qt(n)?n:new zm(n,e)}class zm{constructor(e,t){this.dep=new au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:gt(e),this._value=t?e:Gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||Pi(e);e=i?e:gt(e),$n(e,t)&&(this._rawValue=e,this._value=i?e:Gn(e),this.dep.trigger())}}function ni(n){return Qt(n)?n.value:n}const Vm={get:(n,e,t)=>e==="__v_raw"?n:ni(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Qt(s)&&!Qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function fd(n){return gs(n)?n:new Proxy(n,Vm)}class Hm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return Zh(this,!0),!0}get value(){const e=this.dep.track();return Qh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gm(n,e,t=!1){let i,s;return ot(n)?i=n:(i=n.get,s=n.set),new Hm(i,s,t)}const _a={},lo=new WeakMap;let us;function Wm(n,e=!1,t=us){if(t){let i=lo.get(t);i||lo.set(t,i=[]),i.push(n)}}function Xm(n,e,t=Tt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=C=>s?C:Un(C)||s===!1||s===0?Gi(C,1):Gi(C);let u,f,h,d,_=!1,v=!1;if(Qt(n)?(f=()=>n.value,_=Un(n)):gs(n)?(f=()=>c(n),_=!0):st(n)?(v=!0,_=n.some(C=>gs(C)||Un(C)),f=()=>n.map(C=>{if(Qt(C))return C.value;if(gs(C))return c(C);if(ot(C))return l?l(C,2):C()})):ot(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ci();try{h()}finally{Ri()}}const C=us;us=u;try{return l?l(n,3,[d]):n(d)}finally{us=C}}:f=ti,e&&s){const C=f,k=s===!0?1/0:s;f=()=>Gi(C(),k)}const g=Sm(),p=()=>{u.stop(),g&&g.active&&eu(g.effects,u)};if(r&&e){const C=e;e=(...k)=>{C(...k),p()}}let M=v?new Array(n.length).fill(_a):_a;const b=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(e){const k=u.run();if(s||_||(v?k.some((D,O)=>$n(D,M[O])):$n(k,M))){h&&h();const D=us;us=u;try{const O=[k,M===_a?void 0:v&&M[0]===_a?[]:M,d];M=k,l?l(e,3,O):e(...O)}finally{us=D}}}else u.run()};return o&&o(b),u=new jh(f),u.scheduler=a?()=>a(b,!1):b,d=C=>Wm(C,!1,u),h=u.onStop=()=>{const C=lo.get(u);if(C){if(l)l(C,4);else for(const k of C)k();lo.delete(u)}},e?i?b(!0):M=u.run():a?a(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Gi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))Gi(n.value,e,t);else if(st(n))for(let i=0;i<n.length;i++)Gi(n[i],e,t);else if(kh(n)||Ks(n))n.forEach(i=>{Gi(i,e,t)});else if(Hh(n)){for(const i in n)Gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aa(n,e,t,i){try{return i?n(...i):n()}catch(s){Po(s,e,t)}}function ai(n,e,t,i){if(ot(n)){const s=aa(n,e,t,i);return s&&zh(s)&&s.catch(r=>{Po(r,e,t)}),s}if(st(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ai(n[r],e,t,i));return s}}function Po(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Tt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){Ci(),aa(r,null,10,[n,l,c]),Ri();return}}Ym(n,t,s,i,a)}function Ym(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const an=[];let qn=-1;const Zs=[];let zi=null,Gs=0;const hd=Promise.resolve();let co=null;function dd(n){const e=co||hd;return n?e.then(this?n.bind(this):n):e}function qm(n){let e=qn+1,t=an.length;for(;e<t;){const i=e+t>>>1,s=an[i],r=jr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function uu(n){if(!(n.flags&1)){const e=jr(n),t=an[an.length-1];!t||!(n.flags&2)&&e>=jr(t)?an.push(n):an.splice(qm(e),0,n),n.flags|=1,pd()}}function pd(){co||(co=hd.then(gd))}function jm(n){st(n)?Zs.push(...n):zi&&n.id===-1?zi.splice(Gs+1,0,n):n.flags&1||(Zs.push(n),n.flags|=1),pd()}function ku(n,e,t=qn+1){for(;t<an.length;t++){const i=an[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function md(n){if(Zs.length){const e=[...new Set(Zs)].sort((t,i)=>jr(t)-jr(i));if(Zs.length=0,zi){zi.push(...e);return}for(zi=e,Gs=0;Gs<zi.length;Gs++){const t=zi[Gs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}zi=null,Gs=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gd(n){try{for(qn=0;qn<an.length;qn++){const e=an[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),aa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<an.length;qn++){const e=an[qn];e&&(e.flags&=-2)}qn=-1,an.length=0,md(),co=null,(an.length||Zs.length)&&gd()}}let Qn=null,xd=null;function uo(n){const e=Qn;return Qn=n,xd=n&&n.type.__scopeId||null,e}function fu(n,e=Qn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&mo(-1);const r=uo(e);let a;try{a=n(...s)}finally{uo(r),i._d&&mo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ns(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Ci(),ai(l,t,8,[n.el,o,n,e]),Ri())}}function Qa(n,e){if(on){let t=on.provides;const i=on.parent&&on.parent.provides;i===t&&(t=on.provides=Object.create(i)),t[n]=e}}function ii(n,e,t=!1){const i=Yd();if(i||$s){let s=$s?$s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ot(e)?e.call(i&&i.proxy):e}}const Km=Symbol.for("v-scx"),Zm=()=>ii(Km);function Fr(n,e,t){return _d(n,e,t)}function _d(n,e,t=Tt){const{immediate:i,deep:s,flush:r,once:a}=t,o=jt({},t),l=e&&i||!e&&r!=="post";let c;if(Zr){if(r==="sync"){const d=Zm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ti,d.resume=ti,d.pause=ti,d}}const u=on;o.call=(d,_,v)=>ai(d,u,_,v);let f=!1;r==="post"?o.scheduler=d=>{hn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():uu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Xm(n,e,o);return Zr&&(c?c.push(h):l&&h()),h}function $m(n,e,t){const i=this.proxy,s=Nt(n)?n.includes(".")?vd(i,n):()=>i[n]:n.bind(i,i);let r;ot(e)?r=e:(r=e.handler,t=e);const a=oa(this),o=_d(s,r.bind(i),t);return a(),o}function vd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Jm=Symbol("_vte"),Qm=n=>n.__isTeleport,e0=Symbol("_leaveCb");function hu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,hu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sd(n,e){return ot(n)?jt({name:n.name},e,{setup:n}):n}function bd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function t0(n){const e=Yd(),t=cd(null);if(e){const s=e.refs===Tt?e.refs={}:e.refs;Object.defineProperty(s,n,{enumerable:!0,get:()=>t.value,set:r=>t.value=r})}return t}function zu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const fo=new WeakMap;function Or(n,e,t,i,s=!1){if(st(n)){n.forEach((v,g)=>Or(v,e&&(st(e)?e[g]:e),t,i,s));return}if(Br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Or(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?gu(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Tt?o.refs={}:o.refs,f=o.setupState,h=gt(f),d=f===Tt?Bh:v=>zu(u,v)?!1:xt(h,v),_=(v,g)=>!(g&&zu(u,g));if(c!=null&&c!==l){if(Vu(e),Nt(c))u[c]=null,d(c)&&(f[c]=null);else if(Qt(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(ot(l))aa(l,o,12,[a,u]);else{const v=Nt(l),g=Qt(l);if(v||g){const p=()=>{if(n.f){const M=v?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)st(M)&&eu(M,r);else if(st(M))M.includes(r)||M.push(r);else if(v)u[l]=[r],d(l)&&(f[l]=u[l]);else{const b=[r];_(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else v?(u[l]=a,d(l)&&(f[l]=a)):g&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{p(),fo.delete(n)};M.id=-1,fo.set(n,M),hn(M,t)}else Vu(n),p()}}}function Vu(n){const e=fo.get(n);e&&(e.flags|=8,fo.delete(n))}Ao().requestIdleCallback;Ao().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,yd=n=>n.type.__isKeepAlive;function n0(n,e){Md(n,"a",e)}function i0(n,e){Md(n,"da",e)}function Md(n,e,t=on){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Do(e,i,t),t){let s=t.parent;for(;s&&s.parent;)yd(s.parent.vnode)&&s0(i,e,t,s),s=s.parent}}function s0(n,e,t,i){const s=Do(e,n,i,!0);wd(()=>{eu(i[e],s)},t)}function Do(n,e,t=on,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Ci();const o=oa(t),l=ai(e,t,n,a);return o(),Ri(),l});return i?s.unshift(r):s.push(r),r}}const Di=n=>(e,t=on)=>{(!Zr||n==="sp")&&Do(n,(...i)=>e(...i),t)},r0=Di("bm"),Ed=Di("m"),a0=Di("bu"),o0=Di("u"),Td=Di("bum"),wd=Di("um"),l0=Di("sp"),c0=Di("rtg"),u0=Di("rtc");function f0(n,e=on){Do("ec",n,e)}const h0=Symbol.for("v-ndc");function ho(n,e,t,i){let s;const r=t,a=st(n);if(a||Nt(n)){const o=a&&gs(n);let l=!1,c=!1;o&&(l=!Un(n),c=Pi(n),n=Ro(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?tr(Gn(n[u])):Gn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const ql=n=>n?qd(n)?gu(n):ql(n.parent):null,kr=jt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ql(n.parent),$root:n=>ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Cd(n),$forceUpdate:n=>n.f||(n.f=()=>{uu(n.update)}),$nextTick:n=>n.n||(n.n=dd.bind(n.proxy)),$watch:n=>$m.bind(n)}),Zo=(n,e)=>n!==Tt&&!n.__isScriptSetup&&xt(n,e),d0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Zo(i,e))return a[e]=1,i[e];if(s!==Tt&&xt(s,e))return a[e]=2,s[e];if(xt(r,e))return a[e]=3,r[e];if(t!==Tt&&xt(t,e))return a[e]=4,t[e];jl&&(a[e]=0)}}const c=kr[e];let u,f;if(c)return e==="$attrs"&&$t(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Tt&&xt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,xt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Zo(s,e)?(s[e]=t,!0):i!==Tt&&xt(i,e)?(i[e]=t,!0):xt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==Tt&&o[0]!=="$"&&xt(n,o)||Zo(e,o)||xt(r,o)||xt(i,o)||xt(kr,o)||xt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hu(n){return st(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let jl=!0;function p0(n){const e=Cd(n),t=n.proxy,i=n.ctx;jl=!1,e.beforeCreate&&Gu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:M,destroyed:b,unmounted:C,render:k,renderTracked:D,renderTriggered:O,errorCaptured:K,serverPrefetch:R,expose:y,inheritAttrs:L,components:X,directives:se,filters:pe}=e;if(c&&m0(c,i,null),a)for(const oe in a){const Q=a[oe];ot(Q)&&(i[oe]=Q.bind(t))}if(s){const oe=s.call(t,t);vt(oe)&&(n.data=ms(oe))}if(jl=!0,r)for(const oe in r){const Q=r[oe],Me=ot(Q)?Q.bind(t,t):ot(Q.get)?Q.get.bind(t,t):ti,Te=!ot(Q)&&ot(Q.set)?Q.set.bind(t):ti,Oe=ln({get:Me,set:Te});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:He=>Oe.value=He})}if(o)for(const oe in o)Ad(o[oe],i,t,oe);if(l){const oe=ot(l)?l.call(t):l;Reflect.ownKeys(oe).forEach(Q=>{Qa(Q,oe[Q])})}u&&Gu(u,n,"c");function J(oe,Q){st(Q)?Q.forEach(Me=>oe(Me.bind(t))):Q&&oe(Q.bind(t))}if(J(r0,f),J(Ed,h),J(a0,d),J(o0,_),J(n0,v),J(i0,g),J(f0,K),J(u0,D),J(c0,O),J(Td,M),J(wd,C),J(l0,R),st(y))if(y.length){const oe=n.exposed||(n.exposed={});y.forEach(Q=>{Object.defineProperty(oe,Q,{get:()=>t[Q],set:Me=>t[Q]=Me,enumerable:!0})})}else n.exposed||(n.exposed={});k&&n.render===ti&&(n.render=k),L!=null&&(n.inheritAttrs=L),X&&(n.components=X),se&&(n.directives=se),R&&bd(n)}function m0(n,e,t=ti){st(n)&&(n=Kl(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=ii(s.from||i,s.default,!0):r=ii(s.from||i):r=ii(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Gu(n,e,t){ai(st(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ad(n,e,t,i){let s=i.includes(".")?vd(t,i):()=>t[i];if(Nt(n)){const r=e[n];ot(r)&&Fr(s,r)}else if(ot(n))Fr(s,n.bind(t));else if(vt(n))if(st(n))n.forEach(r=>Ad(r,e,t,i));else{const r=ot(n.handler)?n.handler.bind(t):e[n.handler];ot(r)&&Fr(s,r,n)}}function Cd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>po(l,c,a,!0)),po(l,e,a)),vt(e)&&r.set(e,l),l}function po(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&po(n,r,t,!0),s&&s.forEach(a=>po(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=g0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const g0={data:Wu,props:Xu,emits:Xu,methods:Dr,computed:Dr,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Dr,directives:Dr,watch:_0,provide:Wu,inject:x0};function Wu(n,e){return e?n?function(){return jt(ot(n)?n.call(this,this):n,ot(e)?e.call(this,this):e)}:e:n}function x0(n,e){return Dr(Kl(n),Kl(e))}function Kl(n){if(st(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function tn(n,e){return n?[...new Set([].concat(n,e))]:e}function Dr(n,e){return n?jt(Object.create(null),n,e):e}function Xu(n,e){return n?st(n)&&st(e)?[...new Set([...n,...e])]:jt(Object.create(null),Hu(n),Hu(e??{})):e}function _0(n,e){if(!n)return e;if(!e)return n;const t=jt(Object.create(null),n);for(const i in e)t[i]=tn(n[i],e[i]);return t}function Rd(){return{app:null,config:{isNativeTag:Bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v0=0;function S0(n,e){return function(i,s=null){ot(i)||(i=jt({},i)),s!=null&&!vt(s)&&(s=null);const r=Rd(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:v0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:J0,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&ot(u.install)?(a.add(u),u.install(c,...f)):ot(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Jt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,gu(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ai(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=$s;$s=c;try{return u()}finally{$s=f}}};return c}}let $s=null;const b0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Vn(e)}Modifiers`]||n[`${vs(e)}Modifiers`];function y0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let s=t;const r=e.startsWith("update:"),a=r&&b0(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Nt(u)?u.trim():u)),a.number&&(s=t.map(fm)));let o,l=i[o=Wo(e)]||i[o=Wo(Vn(e))];!l&&r&&(l=i[o=Wo(vs(e))]),l&&ai(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ai(c,n,6,s)}}const M0=new WeakMap;function Pd(n,e,t=!1){const i=t?M0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!ot(n)){const l=c=>{const u=Pd(c,e,!0);u&&(o=!0,jt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(vt(n)&&i.set(n,null),null):(st(r)?r.forEach(l=>a[l]=null):jt(a,r),vt(n)&&i.set(n,a),a)}function Lo(n,e){return!n||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(n,e[0].toLowerCase()+e.slice(1))||xt(n,vs(e))||xt(n,e))}function Yu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:v}=n,g=uo(n);let p,M;try{if(t.shapeFlag&4){const C=s||i,k=C;p=Kn(c.call(k,C,u,f,d,h,_)),M=o}else{const C=e;p=Kn(C.length>1?C(f,{attrs:o,slots:a,emit:l}):C(f,null)),M=e.props?o:E0(o)}}catch(C){zr.length=0,Po(C,n,1),p=Jt($i)}let b=p;if(M&&v!==!1){const C=Object.keys(M),{shapeFlag:k}=b;C.length&&k&7&&(r&&C.some(Qc)&&(M=T0(M,r)),b=nr(b,M,!1,!0))}return t.dirs&&(b=nr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&hu(b,t.transition),p=b,uo(g),p}const E0=n=>{let e;for(const t in n)(t==="class"||t==="style"||To(t))&&((e||(e={}))[t]=n[t]);return e},T0=(n,e)=>{const t={};for(const i in n)(!Qc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function w0(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Dd(a,i,h)&&!Lo(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?qu(i,a,c):!0:!!a;return!1}function qu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Dd(e,n,r)&&!Lo(t,r))return!0}return!1}function Dd(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!nu(i,s):i!==s}function A0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ld={},Id=()=>Object.create(Ld),Ud=n=>Object.getPrototypeOf(n)===Ld;function C0(n,e,t,i=!1){const s={},r=Id();n.propsDefaults=Object.create(null),Nd(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:ld(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function R0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=gt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Lo(n.emitsOptions,h))continue;const d=e[h];if(l)if(xt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const _=Vn(h);s[_]=Zl(l,o,_,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Nd(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!xt(e,f)&&((u=vs(f))===f||!xt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Zl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!xt(e,f))&&(delete r[f],c=!0)}c&&Ti(n.attrs,"set","")}function Nd(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ir(l))continue;const c=e[l];let u;s&&xt(s,u=Vn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Lo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=gt(t),c=o||Tt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Zl(s,l,f,c[f],n,!xt(c,f))}}return a}function Zl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=xt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ot(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=oa(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===vs(t))&&(i=!0))}return i}const P0=new WeakMap;function Fd(n,e,t=!1){const i=t?P0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!ot(n)){const u=f=>{l=!0;const[h,d]=Fd(f,e,!0);jt(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,js),js;if(st(r))for(let u=0;u<r.length;u++){const f=Vn(r[u]);ju(f)&&(a[f]=Tt)}else if(r)for(const u in r){const f=Vn(u);if(ju(f)){const h=r[u],d=a[f]=st(h)||ot(h)?{type:h}:jt({},h),_=d.type;let v=!1,g=!0;if(st(_))for(let p=0;p<_.length;++p){const M=_[p],b=ot(M)&&M.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(g=!1)}else v=ot(_)&&_.name==="Boolean";d[0]=v,d[1]=g,(v||xt(d,"default"))&&o.push(f)}}const c=[a,o];return vt(n)&&i.set(n,c),c}function ju(n){return n[0]!=="$"&&!Ir(n)}const du=n=>n==="_"||n==="_ctx"||n==="$stable",pu=n=>st(n)?n.map(Kn):[Kn(n)],D0=(n,e,t)=>{if(e._n)return e;const i=fu((...s)=>pu(e(...s)),t);return i._c=!1,i},Od=(n,e,t)=>{const i=n._ctx;for(const s in n){if(du(s))continue;const r=n[s];if(ot(r))e[s]=D0(s,r,i);else if(r!=null){const a=pu(r);e[s]=()=>a}}},Bd=(n,e)=>{const t=pu(e);n.slots.default=()=>t},kd=(n,e,t)=>{for(const i in e)(t||!du(i))&&(n[i]=e[i])},L0=(n,e,t)=>{const i=n.slots=Id();if(n.vnode.shapeFlag&32){const s=e._;s?(kd(i,e,t),t&&Wh(i,"_",s,!0)):Od(e,i)}else e&&Bd(n,e)},I0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Tt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:kd(s,e,t):(r=!e.$stable,Od(e,s)),a=e}else e&&(Bd(n,e),a={default:1});if(r)for(const o in s)!du(o)&&a[o]==null&&delete s[o]},hn=B0;function U0(n){return N0(n)}function N0(n,e){const t=Ao();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ti,insertStaticContent:_}=n,v=(I,U,Y,w=null,V=null,W=null,ce=void 0,$=null,me=!!U.dynamicChildren)=>{if(I===U)return;I&&!vr(I,U)&&(w=z(I),He(I,V,W,!0),I=null),U.patchFlag===-2&&(me=!1,U.dynamicChildren=null);const{type:te,ref:ve,shapeFlag:E}=U;switch(te){case Io:g(I,U,Y,w);break;case $i:p(I,U,Y,w);break;case Jo:I==null&&M(U,Y,w,ce);break;case En:X(I,U,Y,w,V,W,ce,$,me);break;default:E&1?k(I,U,Y,w,V,W,ce,$,me):E&6?se(I,U,Y,w,V,W,ce,$,me):(E&64||E&128)&&te.process(I,U,Y,w,V,W,ce,$,me,_e)}ve!=null&&V?Or(ve,I&&I.ref,W,U||I,!U):ve==null&&I&&I.ref!=null&&Or(I.ref,null,W,I,!0)},g=(I,U,Y,w)=>{if(I==null)i(U.el=o(U.children),Y,w);else{const V=U.el=I.el;U.children!==I.children&&c(V,U.children)}},p=(I,U,Y,w)=>{I==null?i(U.el=l(U.children||""),Y,w):U.el=I.el},M=(I,U,Y,w)=>{[I.el,I.anchor]=_(I.children,U,Y,w,I.el,I.anchor)},b=({el:I,anchor:U},Y,w)=>{let V;for(;I&&I!==U;)V=h(I),i(I,Y,w),I=V;i(U,Y,w)},C=({el:I,anchor:U})=>{let Y;for(;I&&I!==U;)Y=h(I),s(I),I=Y;s(U)},k=(I,U,Y,w,V,W,ce,$,me)=>{if(U.type==="svg"?ce="svg":U.type==="math"&&(ce="mathml"),I==null)D(U,Y,w,V,W,ce,$,me);else{const te=I.el&&I.el._isVueCE?I.el:null;try{te&&te._beginPatch(),R(I,U,V,W,ce,$,me)}finally{te&&te._endPatch()}}},D=(I,U,Y,w,V,W,ce,$)=>{let me,te;const{props:ve,shapeFlag:E,transition:S,dirs:G}=I;if(me=I.el=a(I.type,W,ve&&ve.is,ve),E&8?u(me,I.children):E&16&&K(I.children,me,null,w,V,$o(I,W),ce,$),G&&ns(I,null,w,"created"),O(me,I,I.scopeId,ce,w),ve){for(const de in ve)de!=="value"&&!Ir(de)&&r(me,de,null,ve[de],W,w);"value"in ve&&r(me,"value",null,ve.value,W),(te=ve.onVnodeBeforeMount)&&Yn(te,w,I)}G&&ns(I,null,w,"beforeMount");const ae=F0(V,S);ae&&S.beforeEnter(me),i(me,U,Y),((te=ve&&ve.onVnodeMounted)||ae||G)&&hn(()=>{te&&Yn(te,w,I),ae&&S.enter(me),G&&ns(I,null,w,"mounted")},V)},O=(I,U,Y,w,V)=>{if(Y&&d(I,Y),w)for(let W=0;W<w.length;W++)d(I,w[W]);if(V){let W=V.subTree;if(U===W||Gd(W.type)&&(W.ssContent===U||W.ssFallback===U)){const ce=V.vnode;O(I,ce,ce.scopeId,ce.slotScopeIds,V.parent)}}},K=(I,U,Y,w,V,W,ce,$,me=0)=>{for(let te=me;te<I.length;te++){const ve=I[te]=$?Ei(I[te]):Kn(I[te]);v(null,ve,U,Y,w,V,W,ce,$)}},R=(I,U,Y,w,V,W,ce)=>{const $=U.el=I.el;let{patchFlag:me,dynamicChildren:te,dirs:ve}=U;me|=I.patchFlag&16;const E=I.props||Tt,S=U.props||Tt;let G;if(Y&&is(Y,!1),(G=S.onVnodeBeforeUpdate)&&Yn(G,Y,U,I),ve&&ns(U,I,Y,"beforeUpdate"),Y&&is(Y,!0),(E.innerHTML&&S.innerHTML==null||E.textContent&&S.textContent==null)&&u($,""),te?y(I.dynamicChildren,te,$,Y,w,$o(U,V),W):ce||Q(I,U,$,null,Y,w,$o(U,V),W,!1),me>0){if(me&16)L($,E,S,Y,V);else if(me&2&&E.class!==S.class&&r($,"class",null,S.class,V),me&4&&r($,"style",E.style,S.style,V),me&8){const ae=U.dynamicProps;for(let de=0;de<ae.length;de++){const ne=ae[de],Be=E[ne],Ae=S[ne];(Ae!==Be||ne==="value")&&r($,ne,Be,Ae,V,Y)}}me&1&&I.children!==U.children&&u($,U.children)}else!ce&&te==null&&L($,E,S,Y,V);((G=S.onVnodeUpdated)||ve)&&hn(()=>{G&&Yn(G,Y,U,I),ve&&ns(U,I,Y,"updated")},w)},y=(I,U,Y,w,V,W,ce)=>{for(let $=0;$<U.length;$++){const me=I[$],te=U[$],ve=me.el&&(me.type===En||!vr(me,te)||me.shapeFlag&198)?f(me.el):Y;v(me,te,ve,null,w,V,W,ce,!0)}},L=(I,U,Y,w,V)=>{if(U!==Y){if(U!==Tt)for(const W in U)!Ir(W)&&!(W in Y)&&r(I,W,U[W],null,V,w);for(const W in Y){if(Ir(W))continue;const ce=Y[W],$=U[W];ce!==$&&W!=="value"&&r(I,W,$,ce,V,w)}"value"in Y&&r(I,"value",U.value,Y.value,V)}},X=(I,U,Y,w,V,W,ce,$,me)=>{const te=U.el=I?I.el:o(""),ve=U.anchor=I?I.anchor:o("");let{patchFlag:E,dynamicChildren:S,slotScopeIds:G}=U;G&&($=$?$.concat(G):G),I==null?(i(te,Y,w),i(ve,Y,w),K(U.children||[],Y,ve,V,W,ce,$,me)):E>0&&E&64&&S&&I.dynamicChildren&&I.dynamicChildren.length===S.length?(y(I.dynamicChildren,S,Y,V,W,ce,$),(U.key!=null||V&&U===V.subTree)&&zd(I,U,!0)):Q(I,U,Y,ve,V,W,ce,$,me)},se=(I,U,Y,w,V,W,ce,$,me)=>{U.slotScopeIds=$,I==null?U.shapeFlag&512?V.ctx.activate(U,Y,w,ce,me):pe(U,Y,w,V,W,ce,me):ee(I,U,me)},pe=(I,U,Y,w,V,W,ce)=>{const $=I.component=Y0(I,w,V);if(yd(I)&&($.ctx.renderer=_e),q0($,!1,ce),$.asyncDep){if(V&&V.registerDep($,J,ce),!I.el){const me=$.subTree=Jt($i);p(null,me,U,Y),I.placeholder=me.el}}else J($,I,U,Y,V,W,ce)},ee=(I,U,Y)=>{const w=U.component=I.component;if(w0(I,U,Y))if(w.asyncDep&&!w.asyncResolved){oe(w,U,Y);return}else w.next=U,w.update();else U.el=I.el,w.vnode=U},J=(I,U,Y,w,V,W,ce)=>{const $=()=>{if(I.isMounted){let{next:E,bu:S,u:G,parent:ae,vnode:de}=I;{const Ve=Vd(I);if(Ve){E&&(E.el=de.el,oe(I,E,ce)),Ve.asyncDep.then(()=>{hn(()=>{I.isUnmounted||te()},V)});return}}let ne=E,Be;is(I,!1),E?(E.el=de.el,oe(I,E,ce)):E=de,S&&Xo(S),(Be=E.props&&E.props.onVnodeBeforeUpdate)&&Yn(Be,ae,E,de),is(I,!0);const Ae=Yu(I),Ge=I.subTree;I.subTree=Ae,v(Ge,Ae,f(Ge.el),z(Ge),I,V,W),E.el=Ae.el,ne===null&&A0(I,Ae.el),G&&hn(G,V),(Be=E.props&&E.props.onVnodeUpdated)&&hn(()=>Yn(Be,ae,E,de),V)}else{let E;const{el:S,props:G}=U,{bm:ae,m:de,parent:ne,root:Be,type:Ae}=I,Ge=Br(U);is(I,!1),ae&&Xo(ae),!Ge&&(E=G&&G.onVnodeBeforeMount)&&Yn(E,ne,U),is(I,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(Ae,I.parent?I.parent.type:void 0);const Ve=I.subTree=Yu(I);v(null,Ve,Y,w,I,V,W),U.el=Ve.el}if(de&&hn(de,V),!Ge&&(E=G&&G.onVnodeMounted)){const Ve=U;hn(()=>Yn(E,ne,Ve),V)}(U.shapeFlag&256||ne&&Br(ne.vnode)&&ne.vnode.shapeFlag&256)&&I.a&&hn(I.a,V),I.isMounted=!0,U=Y=w=null}};I.scope.on();const me=I.effect=new jh($);I.scope.off();const te=I.update=me.run.bind(me),ve=I.job=me.runIfDirty.bind(me);ve.i=I,ve.id=I.uid,me.scheduler=()=>uu(ve),is(I,!0),te()},oe=(I,U,Y)=>{U.component=I;const w=I.vnode.props;I.vnode=U,I.next=null,R0(I,U.props,w,Y),I0(I,U.children,Y),Ci(),ku(I),Ri()},Q=(I,U,Y,w,V,W,ce,$,me=!1)=>{const te=I&&I.children,ve=I?I.shapeFlag:0,E=U.children,{patchFlag:S,shapeFlag:G}=U;if(S>0){if(S&128){Te(te,E,Y,w,V,W,ce,$,me);return}else if(S&256){Me(te,E,Y,w,V,W,ce,$,me);return}}G&8?(ve&16&&re(te,V,W),E!==te&&u(Y,E)):ve&16?G&16?Te(te,E,Y,w,V,W,ce,$,me):re(te,V,W,!0):(ve&8&&u(Y,""),G&16&&K(E,Y,w,V,W,ce,$,me))},Me=(I,U,Y,w,V,W,ce,$,me)=>{I=I||js,U=U||js;const te=I.length,ve=U.length,E=Math.min(te,ve);let S;for(S=0;S<E;S++){const G=U[S]=me?Ei(U[S]):Kn(U[S]);v(I[S],G,Y,null,V,W,ce,$,me)}te>ve?re(I,V,W,!0,!1,E):K(U,Y,w,V,W,ce,$,me,E)},Te=(I,U,Y,w,V,W,ce,$,me)=>{let te=0;const ve=U.length;let E=I.length-1,S=ve-1;for(;te<=E&&te<=S;){const G=I[te],ae=U[te]=me?Ei(U[te]):Kn(U[te]);if(vr(G,ae))v(G,ae,Y,null,V,W,ce,$,me);else break;te++}for(;te<=E&&te<=S;){const G=I[E],ae=U[S]=me?Ei(U[S]):Kn(U[S]);if(vr(G,ae))v(G,ae,Y,null,V,W,ce,$,me);else break;E--,S--}if(te>E){if(te<=S){const G=S+1,ae=G<ve?U[G].el:w;for(;te<=S;)v(null,U[te]=me?Ei(U[te]):Kn(U[te]),Y,ae,V,W,ce,$,me),te++}}else if(te>S)for(;te<=E;)He(I[te],V,W,!0),te++;else{const G=te,ae=te,de=new Map;for(te=ae;te<=S;te++){const Ne=U[te]=me?Ei(U[te]):Kn(U[te]);Ne.key!=null&&de.set(Ne.key,te)}let ne,Be=0;const Ae=S-ae+1;let Ge=!1,Ve=0;const Ee=new Array(Ae);for(te=0;te<Ae;te++)Ee[te]=0;for(te=G;te<=E;te++){const Ne=I[te];if(Be>=Ae){He(Ne,V,W,!0);continue}let We;if(Ne.key!=null)We=de.get(Ne.key);else for(ne=ae;ne<=S;ne++)if(Ee[ne-ae]===0&&vr(Ne,U[ne])){We=ne;break}We===void 0?He(Ne,V,W,!0):(Ee[We-ae]=te+1,We>=Ve?Ve=We:Ge=!0,v(Ne,U[We],Y,null,V,W,ce,$,me),Be++)}const we=Ge?O0(Ee):js;for(ne=we.length-1,te=Ae-1;te>=0;te--){const Ne=ae+te,We=U[Ne],Le=U[Ne+1],Ye=Ne+1<ve?Le.el||Hd(Le):w;Ee[te]===0?v(null,We,Y,Ye,V,W,ce,$,me):Ge&&(ne<0||te!==we[ne]?Oe(We,Y,Ye,2):ne--)}}},Oe=(I,U,Y,w,V=null)=>{const{el:W,type:ce,transition:$,children:me,shapeFlag:te}=I;if(te&6){Oe(I.component.subTree,U,Y,w);return}if(te&128){I.suspense.move(U,Y,w);return}if(te&64){ce.move(I,U,Y,_e);return}if(ce===En){i(W,U,Y);for(let E=0;E<me.length;E++)Oe(me[E],U,Y,w);i(I.anchor,U,Y);return}if(ce===Jo){b(I,U,Y);return}if(w!==2&&te&1&&$)if(w===0)$.beforeEnter(W),i(W,U,Y),hn(()=>$.enter(W),V);else{const{leave:E,delayLeave:S,afterLeave:G}=$,ae=()=>{I.ctx.isUnmounted?s(W):i(W,U,Y)},de=()=>{W._isLeaving&&W[e0](!0),E(W,()=>{ae(),G&&G()})};S?S(W,ae,de):de()}else i(W,U,Y)},He=(I,U,Y,w=!1,V=!1)=>{const{type:W,props:ce,ref:$,children:me,dynamicChildren:te,shapeFlag:ve,patchFlag:E,dirs:S,cacheIndex:G}=I;if(E===-2&&(V=!1),$!=null&&(Ci(),Or($,null,Y,I,!0),Ri()),G!=null&&(U.renderCache[G]=void 0),ve&256){U.ctx.deactivate(I);return}const ae=ve&1&&S,de=!Br(I);let ne;if(de&&(ne=ce&&ce.onVnodeBeforeUnmount)&&Yn(ne,U,I),ve&6)it(I.component,Y,w);else{if(ve&128){I.suspense.unmount(Y,w);return}ae&&ns(I,null,U,"beforeUnmount"),ve&64?I.type.remove(I,U,Y,_e,w):te&&!te.hasOnce&&(W!==En||E>0&&E&64)?re(te,U,Y,!1,!0):(W===En&&E&384||!V&&ve&16)&&re(me,U,Y),w&&$e(I)}(de&&(ne=ce&&ce.onVnodeUnmounted)||ae)&&hn(()=>{ne&&Yn(ne,U,I),ae&&ns(I,null,U,"unmounted")},Y)},$e=I=>{const{type:U,el:Y,anchor:w,transition:V}=I;if(U===En){rt(Y,w);return}if(U===Jo){C(I);return}const W=()=>{s(Y),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(I.shapeFlag&1&&V&&!V.persisted){const{leave:ce,delayLeave:$}=V,me=()=>ce(Y,W);$?$(I.el,W,me):me()}else W()},rt=(I,U)=>{let Y;for(;I!==U;)Y=h(I),s(I),I=Y;s(U)},it=(I,U,Y)=>{const{bum:w,scope:V,job:W,subTree:ce,um:$,m:me,a:te}=I;Ku(me),Ku(te),w&&Xo(w),V.stop(),W&&(W.flags|=8,He(ce,I,U,Y)),$&&hn($,U),hn(()=>{I.isUnmounted=!0},U)},re=(I,U,Y,w=!1,V=!1,W=0)=>{for(let ce=W;ce<I.length;ce++)He(I[ce],U,Y,w,V)},z=I=>{if(I.shapeFlag&6)return z(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const U=h(I.anchor||I.el),Y=U&&U[Jm];return Y?h(Y):U};let ue=!1;const ge=(I,U,Y)=>{let w;I==null?U._vnode&&(He(U._vnode,null,null,!0),w=U._vnode.component):v(U._vnode||null,I,U,null,null,null,Y),U._vnode=I,ue||(ue=!0,ku(w),md(),ue=!1)},_e={p:v,um:He,m:Oe,r:$e,mt:pe,mc:K,pc:Q,pbc:y,n:z,o:n};return{render:ge,hydrate:void 0,createApp:S0(ge)}}function $o({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function is({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function F0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function zd(n,e,t=!1){const i=n.children,s=e.children;if(st(i)&&st(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Ei(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&zd(a,o)),o.type===Io&&(o.patchFlag===-1&&(o=s[r]=Ei(o)),o.el=a.el),o.type===$i&&!o.el&&(o.el=a.el)}}function O0(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Vd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vd(e)}function Ku(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Hd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Hd(e.subTree):null}const Gd=n=>n.__isSuspense;function B0(n,e){e&&e.pendingBranch?st(n)?e.effects.push(...n):e.effects.push(n):jm(n)}const En=Symbol.for("v-fgt"),Io=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),zr=[];let wn=null;function pn(n=!1){zr.push(wn=n?null:[])}function k0(){zr.pop(),wn=zr[zr.length-1]||null}let Kr=1;function mo(n,e=!1){Kr+=n,n<0&&wn&&e&&(wn.hasOnce=!0)}function Wd(n){return n.dynamicChildren=Kr>0?wn||js:null,k0(),Kr>0&&wn&&wn.push(n),n}function bn(n,e,t,i,s,r){return Wd(je(n,e,t,i,s,r,!0))}function z0(n,e,t,i,s){return Wd(Jt(n,e,t,i,s,!0))}function go(n){return n?n.__v_isVNode===!0:!1}function vr(n,e){return n.type===e.type&&n.key===e.key}const Xd=({key:n})=>n??null,eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Nt(n)||Qt(n)||ot(n)?{i:Qn,r:n,k:e,f:!!t}:n:null);function je(n,e=null,t=null,i=0,s=null,r=n===En?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Xd(e),ref:e&&eo(e),scopeId:xd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qn};return o?(mu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Nt(t)?8:16),Kr>0&&!a&&wn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wn.push(l),l}const Jt=V0;function V0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===h0)&&(n=$i),go(n)){const o=nr(n,e,!0);return t&&mu(o,t),Kr>0&&!r&&wn&&(o.shapeFlag&6?wn[wn.indexOf(n)]=o:wn.push(o)),o.patchFlag=-2,o}if($0(n)&&(n=n.__vccOpts),e){e=H0(e);let{class:o,style:l}=e;o&&!Nt(o)&&(e.class=Co(o)),vt(l)&&(cu(l)&&!st(l)&&(l=jt({},l)),e.style=Xr(l))}const a=Nt(n)?1:Gd(n)?128:Qm(n)?64:vt(n)?4:ot(n)?2:0;return je(n,e,t,i,s,a,r,!0)}function H0(n){return n?cu(n)||Ud(n)?jt({},n):n:null}function nr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?G0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Xd(c),ref:e&&e.ref?t&&r?st(r)?r.concat(eo(e)):[r,eo(e)]:eo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==En?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&nr(n.ssContent),ssFallback:n.ssFallback&&nr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hu(u,l.clone(u)),u}function xo(n=" ",e=0){return Jt(Io,null,n,e)}function va(n="",e=!1){return e?(pn(),z0($i,null,n)):Jt($i,null,n)}function Kn(n){return n==null||typeof n=="boolean"?Jt($i):st(n)?Jt(En,null,n.slice()):go(n)?Ei(n):Jt(Io,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:nr(n)}function mu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(st(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ud(e)?e._ctx=Qn:s===3&&Qn&&(Qn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ot(e)?(e={default:e,_ctx:Qn},t=32):(e=String(e),i&64?(t=16,e=[xo(e)]):t=8);n.children=e,n.shapeFlag|=t}function G0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Co([e.class,i.class]));else if(s==="style")e.style=Xr([e.style,i.style]);else if(To(s)){const r=e[s],a=i[s];a&&r!==a&&!(st(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Yn(n,e,t,i=null){ai(n,e,7,[t,i])}const W0=Rd();let X0=0;function Y0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||W0,r={uid:X0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(i,s),emitsOptions:Pd(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=y0.bind(null,r),n.ce&&n.ce(r),r}let on=null;const Yd=()=>on||Qn;let _o,$l;{const n=Ao(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};_o=e("__VUE_INSTANCE_SETTERS__",t=>on=t),$l=e("__VUE_SSR_SETTERS__",t=>Zr=t)}const oa=n=>{const e=on;return _o(n),n.scope.on(),()=>{n.scope.off(),_o(e)}},Zu=()=>{on&&on.scope.off(),_o(null)};function qd(n){return n.vnode.shapeFlag&4}let Zr=!1;function q0(n,e=!1,t=!1){e&&$l(e);const{props:i,children:s}=n.vnode,r=qd(n);C0(n,i,r,e),L0(n,s,t||e);const a=r?j0(n,e):void 0;return e&&$l(!1),a}function j0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,d0);const{setup:i}=t;if(i){Ci();const s=n.setupContext=i.length>1?Z0(n):null,r=oa(n),a=aa(i,n,0,[n.props,s]),o=zh(a);if(Ri(),r(),(o||n.sp)&&!Br(n)&&bd(n),o){if(a.then(Zu,Zu),e)return a.then(l=>{$u(n,l)}).catch(l=>{Po(l,n,0)});n.asyncDep=a}else $u(n,a)}else jd(n)}function $u(n,e,t){ot(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=fd(e)),jd(n)}function jd(n,e,t){const i=n.type;n.render||(n.render=i.render||ti);{const s=oa(n);Ci();try{p0(n)}finally{Ri(),s()}}}const K0={get(n,e){return $t(n,"get",""),n[e]}};function Z0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,K0),slots:n.slots,emit:n.emit,expose:e}}function gu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(fd(km(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in kr)return kr[t](n)},has(e,t){return t in e||t in kr}})):n.proxy}function $0(n){return ot(n)&&"__vccOpts"in n}const ln=(n,e)=>Gm(n,e,Zr);function Kd(n,e,t){try{mo(-1);const i=arguments.length;return i===2?vt(e)&&!st(e)?go(e)?Jt(n,null,[e]):Jt(n,e):Jt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&go(t)&&(t=[t]),Jt(n,e,t))}finally{mo(1)}}const J0="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jl;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{Jl=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const Zd=Jl?n=>Jl.createHTML(n):n=>n,Q0="http://www.w3.org/2000/svg",eg="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,Qu=Mi&&Mi.createElement("template"),tg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Mi.createElementNS(Q0,n):e==="mathml"?Mi.createElementNS(eg,n):t?Mi.createElement(n,{is:t}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=Zd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Qu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ng=Symbol("_vtc");function ig(n,e,t){const i=n[ng];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ef=Symbol("_vod"),sg=Symbol("_vsh"),rg=Symbol(""),ag=/(?:^|;)\s*display\s*:/;function og(n,e,t){const i=n.style,s=Nt(t);let r=!1;if(t&&!s){if(e)if(Nt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&to(i,o,"")}else for(const a in e)t[a]==null&&to(i,a,"");for(const a in t)a==="display"&&(r=!0),to(i,a,t[a])}else if(s){if(e!==t){const a=i[rg];a&&(t+=";"+a),i.cssText=t,r=ag.test(t)}}else e&&n.removeAttribute("style");ef in n&&(n[ef]=r?i.display:"",n[sg]&&(i.display="none"))}const tf=/\s*!important$/;function to(n,e,t){if(st(t))t.forEach(i=>to(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=lg(n,e);tf.test(t)?n.setProperty(vs(i),t.replace(tf,""),"important"):n[i]=t}}const nf=["Webkit","Moz","ms"],Qo={};function lg(n,e){const t=Qo[e];if(t)return t;let i=Vn(e);if(i!=="filter"&&i in n)return Qo[e]=i;i=Gh(i);for(let s=0;s<nf.length;s++){const r=nf[s]+i;if(r in n)return Qo[e]=r}return e}const sf="http://www.w3.org/1999/xlink";function rf(n,e,t,i,s,r=xm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(sf,e.slice(6,e.length)):n.setAttributeNS(sf,e,t):t==null||r&&!Xh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ri(t)?String(t):t)}function af(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Xh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function cg(n,e,t,i){n.addEventListener(e,t,i)}function ug(n,e,t,i){n.removeEventListener(e,t,i)}const of=Symbol("_vei");function fg(n,e,t,i,s=null){const r=n[of]||(n[of]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=hg(e);if(i){const c=r[e]=mg(i,s);cg(n,o,c,l)}else a&&(ug(n,o,a,l),r[e]=void 0)}}const lf=/(?:Once|Passive|Capture)$/;function hg(n){let e;if(lf.test(n)){e={};let i;for(;i=n.match(lf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vs(n.slice(2)),e]}let el=0;const dg=Promise.resolve(),pg=()=>el||(dg.then(()=>el=0),el=Date.now());function mg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ai(gg(i,t.value),e,5,[i])};return t.value=n,t.attached=pg(),t}function gg(n,e){if(st(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const cf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,xg=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?ig(n,i,a):e==="style"?og(n,t,i):To(e)?Qc(e)||fg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_g(n,e,i,a))?(af(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rf(n,e,i,a,r,e!=="value")):n._isVueCE&&(vg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Nt(i)))?af(n,Vn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),rf(n,e,i,a))};function _g(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&cf(e)&&ot(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cf(e)&&Nt(t)?!1:e in n}function vg(n,e){const t=n._def.props;if(!t)return!1;const i=Vn(e);return Array.isArray(t)?t.some(s=>Vn(s)===i):Object.keys(t).some(s=>Vn(s)===i)}const Sg=["ctrl","shift","alt","meta"],bg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Sg.some(t=>n[`${t}Key`]&&!e.includes(t))},yg=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=bg[e[a]];if(o&&o(s,e))return}return n(s,...r)})},Mg=jt({patchProp:xg},tg);let uf;function Eg(){return uf||(uf=U0(Mg))}const Tg=(...n)=>{const e=Eg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ag(i);if(!s)return;const r=e._component;!ot(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,wg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function wg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ag(n){return Nt(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ws=typeof document<"u";function $d(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Cg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&$d(n.default)}const mt=Object.assign;function tl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Wn(s)?s.map(n):n(s)}return t}const Vr=()=>{},Wn=Array.isArray;function ff(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Jd=/#/g,Rg=/&/g,Pg=/\//g,Dg=/=/g,Lg=/\?/g,Qd=/\+/g,Ig=/%5B/g,Ug=/%5D/g,ep=/%5E/g,Ng=/%60/g,tp=/%7B/g,Fg=/%7C/g,np=/%7D/g,Og=/%20/g;function xu(n){return n==null?"":encodeURI(""+n).replace(Fg,"|").replace(Ig,"[").replace(Ug,"]")}function Bg(n){return xu(n).replace(tp,"{").replace(np,"}").replace(ep,"^")}function Ql(n){return xu(n).replace(Qd,"%2B").replace(Og,"+").replace(Jd,"%23").replace(Rg,"%26").replace(Ng,"`").replace(tp,"{").replace(np,"}").replace(ep,"^")}function kg(n){return Ql(n).replace(Dg,"%3D")}function zg(n){return xu(n).replace(Jd,"%23").replace(Lg,"%3F")}function Vg(n){return zg(n).replace(Pg,"%2F")}function $r(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Hg=/\/$/,Gg=n=>n.replace(Hg,"");function nl(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,o>0?o:e.length),s=n(r.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=qg(i??e,t),{fullPath:i+r+a,path:i,query:s,hash:$r(a)}}function Wg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function hf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Xg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ir(e.matched[i],t.matched[s])&&ip(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ir(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ip(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Yg(n[t],e[t]))return!1;return!0}function Yg(n,e){return Wn(n)?df(n,e):Wn(e)?df(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function df(n,e){return Wn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function qg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const Li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ec=function(n){return n.pop="pop",n.push="push",n}({}),il=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function jg(n){if(!n)if(Ws){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Gg(n)}const Kg=/^[^#]+#/;function Zg(n,e){return n.replace(Kg,"#")+e}function $g(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Uo=()=>({left:window.scrollX,top:window.scrollY});function Jg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=$g(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pf(n,e){return(history.state?history.state.position-e:-1)+n}const tc=new Map;function Qg(n,e){tc.set(n,e)}function ex(n){const e=tc.get(n);return tc.delete(n),e}function tx(n){return typeof n=="string"||n&&typeof n=="object"}function sp(n){return typeof n=="string"||typeof n=="symbol"}let It=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const rp=Symbol("");It.MATCHER_NOT_FOUND+"",It.NAVIGATION_GUARD_REDIRECT+"",It.NAVIGATION_ABORTED+"",It.NAVIGATION_CANCELLED+"",It.NAVIGATION_DUPLICATED+"";function sr(n,e){return mt(new Error,{type:n,[rp]:!0},e)}function di(n,e){return n instanceof Error&&rp in n&&(e==null||!!(n.type&e))}const nx=["params","query","hash"];function ix(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of nx)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function sx(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(Qd," "),r=s.indexOf("="),a=$r(r<0?s:s.slice(0,r)),o=r<0?null:$r(s.slice(r+1));if(a in e){let l=e[a];Wn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function mf(n){let e="";for(let t in n){const i=n[t];if(t=kg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Wn(i)?i.map(s=>s&&Ql(s)):[i&&Ql(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function rx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Wn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const ax=Symbol(""),gf=Symbol(""),_u=Symbol(""),vu=Symbol(""),nc=Symbol("");function Sr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Vi(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(sr(It.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):tx(h)?l(sr(It.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[s]===a&&typeof h=="function"&&a.push(h),o())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function sl(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if($d(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Vi(c,t,i,a,o,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Cg(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Vi(h,t,i,a,o,s)()}))}}return r}function ox(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>ir(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>ir(c,l))||s.push(l))}return[t,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lx=()=>location.protocol+"//"+location.host;function ap(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,o=s.slice(a);return o[0]!=="/"&&(o="/"+o),hf(o,"")}return hf(t,n)+i+s}function cx(n,e,t,i){let s=[],r=[],a=null;const o=({state:h})=>{const d=ap(n,location),_=t.value,v=e.value;let g=0;if(h){if(t.value=d,e.value=h,a&&a===_){a=null;return}g=v?h.position-v.position:0}else i(d);s.forEach(p=>{p(t.value,_,{delta:g,type:ec.pop,direction:g?g>0?il.forward:il.back:il.unknown})})};function l(){a=t.value}function c(h){s.push(h);const d=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(mt({},h.state,{scroll:Uo()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function xf(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Uo():null}}function ux(n){const{history:e,location:t}=window,i={value:ap(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:lx()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){r(l,mt({},e.state,xf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function o(l,c){const u=mt({},s.value,e.state,{forward:l,scroll:Uo()});r(u.current,u,!0),r(l,mt({},xf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function fx(n){n=jg(n);const e=ux(n),t=cx(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=mt({location:"",base:n,go:i,createHref:Zg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hx(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),fx(n)}let ds=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Bt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Bt||{});const dx={type:ds.Static,value:""},px=/[a-zA-Z0-9_]/;function mx(n){if(!n)return[[]];if(n==="/")return[[dx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=Bt.Static,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function f(){c&&(t===Bt.Static?r.push({type:ds.Static,value:c}):t===Bt.Param||t===Bt.ParamRegExp||t===Bt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ds.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Bt.ParamRegExp){i=t,t=Bt.EscapeNext;continue}switch(t){case Bt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Bt.Param):h();break;case Bt.EscapeNext:h(),t=i;break;case Bt.Param:l==="("?t=Bt.ParamRegExp:px.test(l)?h():(f(),t=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Bt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Bt.ParamRegExpEnd:u+=l;break;case Bt.ParamRegExpEnd:f(),t=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),s}const _f="[^/]+?",gx={sensitive:!1,strict:!1,start:!0,end:!0};var sn=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(sn||{});const xx=/[.+*?^${}()[\]/\\]/g;function _x(n,e){const t=mt({},gx,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[sn.Root];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=sn.Segment+(t.sensitive?sn.BonusCaseSensitive:0);if(h.type===ds.Static)f||(s+="/"),s+=h.value.replace(xx,"\\$&"),d+=sn.Static;else if(h.type===ds.Param){const{value:_,repeatable:v,optional:g,regexp:p}=h;r.push({name:_,repeatable:v,optional:g});const M=p||_f;if(M!==_f){d+=sn.BonusCustomRegExp;try{`${M}`}catch(C){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+C.message)}}let b=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(b=g&&c.length<2?`(?:/${b})`:"/"+b),g&&(b+="?"),s+=b,d+=sn.Dynamic,g&&(d+=sn.BonusOptional),v&&(d+=sn.BonusRepeatable),M===".*"&&(d+=sn.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=sn.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=r[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===ds.Static)u+=d.value;else if(d.type===ds.Param){const{value:_,repeatable:v,optional:g}=d,p=_ in c?c[_]:"";if(Wn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Wn(p)?p.join("/"):p;if(!M)if(g)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function vx(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===sn.Static+sn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===sn.Static+sn.Segment?1:-1:0}function op(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=vx(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(vf(i))return 1;if(vf(s))return-1}return s.length-i.length}function vf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Sx={strict:!1,end:!0,sensitive:!1};function bx(n,e,t){const i=_x(mx(n.path),t),s=mt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function yx(n,e){const t=[],i=new Map;e=ff(Sx,e);function s(f){return i.get(f)}function r(f,h,d){const _=!d,v=bf(f);v.aliasOf=d&&d.record;const g=ff(e,f),p=[v];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const k of C)p.push(bf(mt({},v,{components:d?d.record.components:v.components,path:k,aliasOf:d?d.record:v})))}let M,b;for(const C of p){const{path:k}=C;if(h&&k[0]!=="/"){const D=h.record.path,O=D[D.length-1]==="/"?"":"/";C.path=h.record.path+(k&&O+k)}if(M=bx(C,h,g),d?d.alias.push(M):(b=b||M,b!==M&&b.alias.push(M),_&&f.name&&!yf(M)&&a(f.name)),lp(M)&&l(M),v.children){const D=v.children;for(let O=0;O<D.length;O++)r(D[O],M,d&&d.children[O])}d=d||M}return b?()=>{a(b)}:Vr}function a(f){if(sp(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=Tx(f,t);t.splice(h,0,f),f.record.name&&!yf(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},v,g;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw sr(It.MATCHER_NOT_FOUND,{location:f});g=d.record.name,_=mt(Sf(h.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&Sf(f.params,d.keys.map(b=>b.name))),v=d.stringify(_)}else if(f.path!=null)v=f.path,d=t.find(b=>b.re.test(v)),d&&(_=d.parse(v),g=d.record.name);else{if(d=h.name?i.get(h.name):t.find(b=>b.re.test(h.path)),!d)throw sr(It.MATCHER_NOT_FOUND,{location:f,currentLocation:h});g=d.record.name,_=mt({},h.params,f.params),v=d.stringify(_)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:g,path:v,params:_,matched:p,meta:Ex(p)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function Sf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function bf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Mx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function yf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ex(n){return n.reduce((e,t)=>mt(e,t.meta),{})}function Tx(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;op(n,e[r])<0?i=r:t=r+1}const s=wx(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function wx(n){let e=n;for(;e=e.parent;)if(lp(e)&&op(n,e)===0)return e}function lp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Mf(n){const e=ii(_u),t=ii(vu),i=ln(()=>{const l=ni(n.to);return e.resolve(l)}),s=ln(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ir.bind(null,u));if(h>-1)return h;const d=Ef(l[c-2]);return c>1&&Ef(u)===d&&f[f.length-1].path!==d?f.findIndex(ir.bind(null,l[c-2])):h}),r=ln(()=>s.value>-1&&Px(t.params,i.value.params)),a=ln(()=>s.value>-1&&s.value===t.matched.length-1&&ip(t.params,i.value.params));function o(l={}){if(Rx(l)){const c=e[ni(n.replace)?"replace":"push"](ni(n.to)).catch(Vr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ln(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function Ax(n){return n.length===1?n[0]:n}const Cx=Sd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Mf,setup(n,{slots:e}){const t=ms(Mf(n)),{options:i}=ii(_u),s=ln(()=>({[Tf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Tf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&Ax(e.default(t));return n.custom?r:Kd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Su=Cx;function Rx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Px(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Wn(s)||s.length!==i.length||i.some((r,a)=>r.valueOf()!==s[a].valueOf()))return!1}return!0}function Ef(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Tf=(n,e,t)=>n??e??t,Dx=Sd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ii(nc),s=ln(()=>n.route||i.value),r=ii(gf,0),a=ln(()=>{let c=ni(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=ln(()=>s.value.matched[a.value]);Qa(gf,ln(()=>a.value+1)),Qa(ax,o),Qa(nc,s);const l=Ja();return Fr(()=>[l.value,o.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ir(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return wf(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=Kd(h,mt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wf(t.default,{Component:g,route:c})||g}}});function wf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const cp=Dx;function Lx(n){const e=yx(n.routes,n),t=n.parseQuery||sx,i=n.stringifyQuery||mf,s=n.history,r=Sr(),a=Sr(),o=Sr(),l=cd(Li);let c=Li;Ws&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,z=>""+z),f=tl.bind(null,Vg),h=tl.bind(null,$r);function d(z,ue){let ge,_e;return sp(z)?(ge=e.getRecordMatcher(z),_e=ue):_e=z,e.addRoute(_e,ge)}function _(z){const ue=e.getRecordMatcher(z);ue&&e.removeRoute(ue)}function v(){return e.getRoutes().map(z=>z.record)}function g(z){return!!e.getRecordMatcher(z)}function p(z,ue){if(ue=mt({},ue||l.value),typeof z=="string"){const Y=nl(t,z,ue.path),w=e.resolve({path:Y.path},ue),V=s.createHref(Y.fullPath);return mt(Y,w,{params:h(w.params),hash:$r(Y.hash),redirectedFrom:void 0,href:V})}let ge;if(z.path!=null)ge=mt({},z,{path:nl(t,z.path,ue.path).path});else{const Y=mt({},z.params);for(const w in Y)Y[w]==null&&delete Y[w];ge=mt({},z,{params:f(Y)}),ue.params=f(ue.params)}const _e=e.resolve(ge,ue),De=z.hash||"";_e.params=u(h(_e.params));const I=Wg(i,mt({},z,{hash:Bg(De),path:_e.path})),U=s.createHref(I);return mt({fullPath:I,hash:De,query:i===mf?rx(z.query):z.query||{}},_e,{redirectedFrom:void 0,href:U})}function M(z){return typeof z=="string"?nl(t,z,l.value.path):mt({},z)}function b(z,ue){if(c!==z)return sr(It.NAVIGATION_CANCELLED,{from:ue,to:z})}function C(z){return O(z)}function k(z){return C(mt(M(z),{replace:!0}))}function D(z,ue){const ge=z.matched[z.matched.length-1];if(ge&&ge.redirect){const{redirect:_e}=ge;let De=typeof _e=="function"?_e(z,ue):_e;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=M(De):{path:De},De.params={}),mt({query:z.query,hash:z.hash,params:De.path!=null?{}:z.params},De)}}function O(z,ue){const ge=c=p(z),_e=l.value,De=z.state,I=z.force,U=z.replace===!0,Y=D(ge,_e);if(Y)return O(mt(M(Y),{state:typeof Y=="object"?mt({},De,Y.state):De,force:I,replace:U}),ue||ge);const w=ge;w.redirectedFrom=ue;let V;return!I&&Xg(i,_e,ge)&&(V=sr(It.NAVIGATION_DUPLICATED,{to:w,from:_e}),Oe(_e,_e,!0,!1)),(V?Promise.resolve(V):y(w,_e)).catch(W=>di(W)?di(W,It.NAVIGATION_GUARD_REDIRECT)?W:Te(W):Q(W,w,_e)).then(W=>{if(W){if(di(W,It.NAVIGATION_GUARD_REDIRECT))return O(mt({replace:U},M(W.to),{state:typeof W.to=="object"?mt({},De,W.to.state):De,force:I}),ue||w)}else W=X(w,_e,!0,U,De);return L(w,_e,W),W})}function K(z,ue){const ge=b(z,ue);return ge?Promise.reject(ge):Promise.resolve()}function R(z){const ue=rt.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(z):z()}function y(z,ue){let ge;const[_e,De,I]=ox(z,ue);ge=sl(_e.reverse(),"beforeRouteLeave",z,ue);for(const Y of _e)Y.leaveGuards.forEach(w=>{ge.push(Vi(w,z,ue))});const U=K.bind(null,z,ue);return ge.push(U),re(ge).then(()=>{ge=[];for(const Y of r.list())ge.push(Vi(Y,z,ue));return ge.push(U),re(ge)}).then(()=>{ge=sl(De,"beforeRouteUpdate",z,ue);for(const Y of De)Y.updateGuards.forEach(w=>{ge.push(Vi(w,z,ue))});return ge.push(U),re(ge)}).then(()=>{ge=[];for(const Y of I)if(Y.beforeEnter)if(Wn(Y.beforeEnter))for(const w of Y.beforeEnter)ge.push(Vi(w,z,ue));else ge.push(Vi(Y.beforeEnter,z,ue));return ge.push(U),re(ge)}).then(()=>(z.matched.forEach(Y=>Y.enterCallbacks={}),ge=sl(I,"beforeRouteEnter",z,ue,R),ge.push(U),re(ge))).then(()=>{ge=[];for(const Y of a.list())ge.push(Vi(Y,z,ue));return ge.push(U),re(ge)}).catch(Y=>di(Y,It.NAVIGATION_CANCELLED)?Y:Promise.reject(Y))}function L(z,ue,ge){o.list().forEach(_e=>R(()=>_e(z,ue,ge)))}function X(z,ue,ge,_e,De){const I=b(z,ue);if(I)return I;const U=ue===Li,Y=Ws?history.state:{};ge&&(_e||U?s.replace(z.fullPath,mt({scroll:U&&Y&&Y.scroll},De)):s.push(z.fullPath,De)),l.value=z,Oe(z,ue,ge,U),Te()}let se;function pe(){se||(se=s.listen((z,ue,ge)=>{if(!it.listening)return;const _e=p(z),De=D(_e,it.currentRoute.value);if(De){O(mt(De,{replace:!0,force:!0}),_e).catch(Vr);return}c=_e;const I=l.value;Ws&&Qg(pf(I.fullPath,ge.delta),Uo()),y(_e,I).catch(U=>di(U,It.NAVIGATION_ABORTED|It.NAVIGATION_CANCELLED)?U:di(U,It.NAVIGATION_GUARD_REDIRECT)?(O(mt(M(U.to),{force:!0}),_e).then(Y=>{di(Y,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&!ge.delta&&ge.type===ec.pop&&s.go(-1,!1)}).catch(Vr),Promise.reject()):(ge.delta&&s.go(-ge.delta,!1),Q(U,_e,I))).then(U=>{U=U||X(_e,I,!1),U&&(ge.delta&&!di(U,It.NAVIGATION_CANCELLED)?s.go(-ge.delta,!1):ge.type===ec.pop&&di(U,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),L(_e,I,U)}).catch(Vr)}))}let ee=Sr(),J=Sr(),oe;function Q(z,ue,ge){Te(z);const _e=J.list();return _e.length?_e.forEach(De=>De(z,ue,ge)):console.error(z),Promise.reject(z)}function Me(){return oe&&l.value!==Li?Promise.resolve():new Promise((z,ue)=>{ee.add([z,ue])})}function Te(z){return oe||(oe=!z,pe(),ee.list().forEach(([ue,ge])=>z?ge(z):ue()),ee.reset()),z}function Oe(z,ue,ge,_e){const{scrollBehavior:De}=n;if(!Ws||!De)return Promise.resolve();const I=!ge&&ex(pf(z.fullPath,0))||(_e||!ge)&&history.state&&history.state.scroll||null;return dd().then(()=>De(z,ue,I)).then(U=>U&&Jg(U)).catch(U=>Q(U,z,ue))}const He=z=>s.go(z);let $e;const rt=new Set,it={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:v,resolve:p,options:n,push:C,replace:k,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:J.add,isReady:Me,install(z){z.component("RouterLink",Su),z.component("RouterView",cp),z.config.globalProperties.$router=it,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>ni(l)}),Ws&&!$e&&l.value===Li&&($e=!0,C(s.location).catch(_e=>{}));const ue={};for(const _e in Li)Object.defineProperty(ue,_e,{get:()=>l.value[_e],enumerable:!0});z.provide(_u,it),z.provide(vu,ld(ue)),z.provide(nc,l);const ge=z.unmount;rt.add(z),z.unmount=function(){rt.delete(z),rt.size<1&&(c=Li,se&&se(),se=null,l.value=Li,$e=!1,oe=!1),ge()}}};function re(z){return z.reduce((ue,ge)=>ue.then(()=>R(ge)),Promise.resolve())}return it}function Ix(n){return ii(vu)}const Ux={class:"app-frame"},Nx={class:"app-header"},Fx={class:"app-nav"},Ox={__name:"App",setup(n){const e=Ix(),t=[{name:"Home",to:"/"},{name:"Solar Scape",to:"/projects/solar-scape"}];return(i,s)=>(pn(),bn("div",Ux,[je("header",Nx,[s[0]||(s[0]=je("h1",{class:"app-header__title"},"MVRDV NEXT",-1)),je("nav",Fx,[(pn(),bn(En,null,ho(t,r=>Jt(ni(Su),{key:r.to,to:r.to,class:Co(["app-nav__link",{"app-nav__link--active":ni(e).path===r.to}])},{default:fu(()=>[xo(Pn(r.name),1)]),_:2},1032,["to","class"])),64))])]),Jt(ni(cp))]))}},Bx={class:"home-view"},kx={class:"project-grid"},zx={__name:"HomeView",setup(n){const e=[{title:"Solar Scape",path:"/projects/solar-scape",description:"Interactive Rhino plot viewer with Plot-linked voxel metadata and a coordinated analysis sidebar."}];return(t,i)=>(pn(),bn("main",Bx,[i[1]||(i[1]=je("section",{class:"hero-card"},[je("p",{class:"hero-card__eyebrow"},"MVRDV NEXT technologies"),je("h2",null,"Solar Scape"),je("p",null,[xo(" The app is structured around a single Three.js experience under "),je("strong",null,"src/projects/solar-scape"),xo(" with dedicated viewer, loader, config, and metadata modules. ")])],-1)),je("section",kx,[(pn(),bn(En,null,ho(e,s=>Jt(ni(Su),{key:s.path,to:s.path,class:"project-card"},{default:fu(()=>[i[0]||(i[0]=je("p",{class:"project-card__eyebrow"},"Project",-1)),je("h3",null,Pn(s.title),1),je("p",null,Pn(s.description),1)]),_:2},1032,["to"])),64))])]))}},Af="/Solar_Scape/",pi={title:"Solar Scape",staticContextModelPath:`${Af}context/Context.3dm`,sunVoxelModelPath:`${Af}sun_voxel/Voxel_v2.3dm`,rhinoLibraryPath:"https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/",clickSelectionMaxDurationMs:180,clickSelectionMaxMovementPx:6,selectionMetadata:["Plot"],requiredMetadata:["Plot","Max_height","Occupied_voxels","Max_voxels","Potential"],filterableFields:["Max_height","Occupied_voxels","Max_voxels","Potential"],fieldLabels:{Plot:"Plot",Max_height:"Max height",Occupied_voxels:"Occupied voxels",Max_voxels:"Max voxels",Potential:"Potential"},filterBounds:{Max_height:{min:200,max:200,step:1},Occupied_voxels:{min:0,max:3500,step:1},Max_voxels:{min:0,max:3e4,step:1},Potential:{min:0,max:150,step:1}},valuePrefixes:{Potential:"x"}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bu="181",Js={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,Cf=1,Hx=2,up=1,Gx=2,yi=3,Ji=0,gn=1,Tn=2,Nn=0,Qs=1,ic=2,Rf=3,Pf=4,Wx=5,fs=100,Xx=101,Yx=102,qx=103,jx=104,Kx=200,Zx=201,$x=202,Jx=203,sc=204,rc=205,Qx=206,e_=207,t_=208,n_=209,i_=210,s_=211,r_=212,a_=213,o_=214,ac=0,oc=1,lc=2,rr=3,cc=4,uc=5,fc=6,hc=7,fp=0,l_=1,c_=2,Ki=0,hp=1,dp=2,pp=3,mp=4,gp=5,xp=6,_p=7,vp=300,ar=301,or=302,dc=303,pc=304,No=306,Jr=1e3,cn=1001,mc=1002,An=1003,u_=1004,Sa=1005,Gt=1006,rl=1007,Yi=1008,oi=1009,Sp=1010,bp=1011,Qr=1012,yu=1013,xs=1014,In=1015,Wt=1016,Mu=1017,Eu=1018,ea=1020,yp=35902,Mp=35899,Ep=1021,Tp=1022,Xt=1023,ta=1026,na=1027,Ys=1028,Tu=1029,Wi=1030,wu=1031,Au=1033,no=33776,io=33777,so=33778,ro=33779,gc=35840,xc=35841,_c=35842,vc=35843,Sc=36196,bc=37492,yc=37496,Mc=37808,Ec=37809,Tc=37810,wc=37811,Ac=37812,Cc=37813,Rc=37814,Pc=37815,Dc=37816,Lc=37817,Ic=37818,Uc=37819,Nc=37820,Fc=37821,Oc=36492,Bc=36494,kc=36495,zc=36283,Vc=36284,Hc=36285,Gc=36286,f_=3200,wp=3201,Ap=0,h_=1,Xi="",yn="srgb",Mn="srgb-linear",vo="linear",_t="srgb",Es=7680,Df=519,d_=512,p_=513,m_=514,Cp=515,g_=516,x_=517,__=518,v_=519,Wc=35044,Lf="300 es",ei=2e3,So=2001;function Rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const S_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ba(n,e){return new S_[n](e)}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b_(){const n=ia("canvas");return n.style.display="block",n}const If={};function bo(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Dt(...n){const e="THREE."+n.shift();console.error(e,...n)}function sa(...n){const e=n.join(" ");e in If||(If[e]=!0,nt(...n))}function y_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,yo=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function M_(n,e){return(n%e+e)%e}function al(n,e,t){return(1-t)*n+t*e}function Jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:ao};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _s{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],_=r[a+2],v=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==_){let g=l*h+c*d+u*_+f*v;g<0&&(h=-h,d=-d,_=-_,v=-v,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+v*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+v*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new Z,Uf=new _s;class at{constructor(e,t,i,s,r,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],v=s[0],g=s[3],p=s[6],M=s[1],b=s[4],C=s[7],k=s[2],D=s[5],O=s[8];return r[0]=a*v+o*M+l*k,r[3]=a*g+o*b+l*D,r[6]=a*p+o*C+l*O,r[1]=c*v+u*M+f*k,r[4]=c*g+u*b+f*D,r[7]=c*p+u*C+f*O,r[2]=h*v+d*M+_*k,r[5]=h*g+d*b+_*D,r[8]=h*p+d*C+_*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=t*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new at,Nf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){const n={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mn]:{primaries:e,whitePoint:i,transfer:vo,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const dt=T_();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ts;class w_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ts===void 0&&(Ts=ia("canvas")),Ts.width=e.width,Ts.height=e.height;const s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class Cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?w_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let C_=0;const ul=new Z;class qt extends Ss{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=cn,s=cn,r=Gt,a=Yi,o=Xt,l=oi,c=qt.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Zi(),this.name="",this.source=new Cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=vp;qt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,C=(d+1)/2,k=(p+1)/2,D=(u+h)/4,O=(f+v)/4,K=(_+g)/4;return b>C&&b>k?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=D/i,r=O/i):C>k?C<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),i=D/s,r=K/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=O/r,s=K/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(f-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R_ extends Ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new qt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends R_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pp extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Ma.subVectors(this.max,br),ws.subVectors(e.a,br),As.subVectors(e.b,br),Cs.subVectors(e.c,br),Ii.subVectors(As,ws),Ui.subVectors(Cs,As),ss.subVectors(ws,Cs);let t=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-ss.z,ss.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,ss.z,0,-ss.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-ss.y,ss.x,0];return!fl(t,ws,As,Cs,Ma)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,ws,As,Cs,Ma))?!1:(Ea.crossVectors(Ii,Ui),t=[Ea.x,Ea.y,Ea.z],fl(t,ws,As,Cs,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fn=new Z,ya=new ur,ws=new Z,As=new Z,Cs=new Z,Ii=new Z,Ui=new Z,ss=new Z,br=new Z,Ma=new Z,Ea=new Z,rs=new Z;function fl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){rs.fromArray(n,r);const o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const D_=new ur,yr=new Z,hl=new Z;class fr{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):D_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(hl)),this.expandByPoint(yr.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new Z,dl=new Z,Ta=new Z,Ni=new Z,pl=new Z,wa=new Z,ml=new Z;class la{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){dl.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(dl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Ni.dot(this.direction),l=-Ni.dot(Ta),c=Ni.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dl).addScaledVector(Ta,h),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){pl.subVectors(t,e),wa.subVectors(i,e),ml.crossVectors(pl,wa);let a=this.direction.dot(ml),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(Ni,wa));if(l<0)return null;const c=o*this.direction.dot(pl.cross(Ni));if(c<0||l+c>a)return null;const u=-o*Ni.dot(ml);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,_,v,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,_,v,g)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,_,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h+v*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,I_)}lookAt(e,t,i){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Fi.crossVectors(i,vn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Fi.crossVectors(i,vn)),Fi.normalize(),Aa.crossVectors(vn,Fi),s[0]=Fi.x,s[4]=Aa.x,s[8]=vn.x,s[1]=Fi.y,s[5]=Aa.y,s[9]=vn.y,s[2]=Fi.z,s[6]=Aa.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],v=i[6],g=i[10],p=i[14],M=i[3],b=i[7],C=i[11],k=i[15],D=s[0],O=s[4],K=s[8],R=s[12],y=s[1],L=s[5],X=s[9],se=s[13],pe=s[2],ee=s[6],J=s[10],oe=s[14],Q=s[3],Me=s[7],Te=s[11],Oe=s[15];return r[0]=a*D+o*y+l*pe+c*Q,r[4]=a*O+o*L+l*ee+c*Me,r[8]=a*K+o*X+l*J+c*Te,r[12]=a*R+o*se+l*oe+c*Oe,r[1]=u*D+f*y+h*pe+d*Q,r[5]=u*O+f*L+h*ee+d*Me,r[9]=u*K+f*X+h*J+d*Te,r[13]=u*R+f*se+h*oe+d*Oe,r[2]=_*D+v*y+g*pe+p*Q,r[6]=_*O+v*L+g*ee+p*Me,r[10]=_*K+v*X+g*J+p*Te,r[14]=_*R+v*se+g*oe+p*Oe,r[3]=M*D+b*y+C*pe+k*Q,r[7]=M*O+b*L+C*ee+k*Me,r[11]=M*K+b*X+C*J+k*Te,r[15]=M*R+b*se+C*oe+k*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+r*l*f-s*c*f-r*o*h+i*c*h+s*o*d-i*l*d)+v*(+t*l*d-t*c*h+r*a*h-s*a*d+s*c*u-r*l*u)+g*(+t*c*f-t*o*d-r*a*f+i*a*d+r*o*u-i*c*u)+p*(-s*o*u-t*l*f+t*o*h+s*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],v=e[13],g=e[14],p=e[15],M=f*g*c-v*h*c+v*l*d-o*g*d-f*l*p+o*h*p,b=_*h*c-u*g*c-_*l*d+a*g*d+u*l*p-a*h*p,C=u*v*c-_*f*c+_*o*d-a*v*d-u*o*p+a*f*p,k=_*f*l-u*v*l-_*o*h+a*v*h+u*o*g-a*f*g,D=t*M+i*b+s*C+r*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=M*O,e[1]=(v*h*r-f*g*r-v*s*d+i*g*d+f*s*p-i*h*p)*O,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*p+i*l*p)*O,e[3]=(f*l*r-o*h*r-f*s*c+i*h*c+o*s*d-i*l*d)*O,e[4]=b*O,e[5]=(u*g*r-_*h*r+_*s*d-t*g*d-u*s*p+t*h*p)*O,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*p-t*l*p)*O,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*d+t*l*d)*O,e[8]=C*O,e[9]=(_*f*r-u*v*r-_*i*d+t*v*d+u*i*p-t*f*p)*O,e[10]=(a*v*r-_*o*r+_*i*c-t*v*c-a*i*p+t*o*p)*O,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*d-t*o*d)*O,e[12]=k*O,e[13]=(u*v*s-_*f*s+_*i*h-t*v*h-u*i*g+t*f*g)*O,e[14]=(_*o*s-a*v*s-_*i*l+t*v*l+a*i*g-t*o*g)*O,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*h+t*o*h)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,v=a*u,g=a*f,p=o*f,M=l*c,b=l*u,C=l*f,k=i.x,D=i.y,O=i.z;return s[0]=(1-(v+p))*k,s[1]=(d+C)*k,s[2]=(_-b)*k,s[3]=0,s[4]=(d-C)*D,s[5]=(1-(h+p))*D,s[6]=(g+M)*D,s[7]=0,s[8]=(_+b)*O,s[9]=(g-M)*O,s[10]=(1-(h+v))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);const c=1/r,u=1/a,f=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ei,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let _,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===ei)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===So)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ei,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let _,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===ei)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===So)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rs=new Z,On=new Mt,L_=new Z(0,0,0),I_=new Z(1,1,1),Fi=new Z,Aa=new Z,vn=new Z,Of=new Mt,Bf=new _s;class li{constructor(e=0,t=0,i=0,s=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const kf=new Z,Ps=new _s,xi=new Mt,Ca=new Z,Mr=new Z,N_=new Z,F_=new _s,zf=new Z(1,0,0),Vf=new Z(0,1,0),Hf=new Z(0,0,1),Gf={type:"added"},O_={type:"removed"},Ds={type:"childadded",child:null},gl={type:"childremoved",child:null};class Lt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new Z,t=new li,i=new _s,s=new Z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new at}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Mr,Ca,this.up):xi.lookAt(Ca,Mr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(xi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new Z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new Z,_i=new Z,xl=new Z,vi=new Z,Ls=new Z,Is=new Z,Wf=new Z,_l=new Z,vl=new Z,Sl=new Z,bl=new yt,yl=new yt,Ml=new yt;class Dn{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Bn.subVectors(s,t),_i.subVectors(i,t),xl.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(_i),l=Bn.dot(xl),c=_i.dot(_i),u=_i.dot(xl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return bl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),bl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bl,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(Ml,r.z),a}static isFrontFacing(e,t,i,s){return Bn.subVectors(i,t),_i.subVectors(e,t),Bn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Bn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ls.subVectors(s,i),Is.subVectors(r,i),_l.subVectors(e,i);const l=Ls.dot(_l),c=Is.dot(_l);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,s);const u=Ls.dot(vl),f=Is.dot(vl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ls,a);Sl.subVectors(e,r);const d=Ls.dot(Sl),_=Is.dot(Sl);if(_>=0&&d<=_)return t.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Is,o);const g=u*_-d*f;if(g<=0&&f-u>=0&&d-_>=0)return Wf.subVectors(r,s),o=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(Wf,o);const p=1/(g+v+h);return a=v*p,o=h*p,t.copy(i).addScaledVector(Ls,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=M_(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=El(a,r,e+1/3),this.g=El(a,r,e),this.b=El(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return dt.workingToColorSpace(Zt.copy(this),e),Math.round(ft(Zt.r*255,0,255))*65536+Math.round(ft(Zt.g*255,0,255))*256+Math.round(ft(Zt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=yn){dt.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Ra);const i=al(Oi.h,Ra.h,t),s=al(Oi.s,Ra.s,t),r=al(Oi.l,Ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Qe;Qe.NAMES=Dp;let B_=0;class es extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Qs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Df&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lp extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wi=k_();function k_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function z_(n){Math.abs(n)>65504&&nt("DataUtils.toHalfFloat(): Value out of range."),n=ft(n,-65504,65504),wi.floatView[0]=n;const e=wi.uint32View[0],t=e>>23&511;return wi.baseTable[t]+((e&8388607)>>wi.shiftTable[t])}function V_(n){const e=n>>10;return wi.uint32View[0]=wi.mantissaTable[wi.offsetTable[e]+(n&1023)]+wi.exponentTable[e],wi.floatView[0]}class Xf{static toHalfFloat(e){return z_(e)}static fromHalfFloat(e){return V_(e)}}const Ut=new Z,Pa=new Xe;let H_=0;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class Ip extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Up extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class si extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let G_=0;const Rn=new Mt,Tl=new Lt,Us=new Z,Sn=new ur,Er=new ur,Ht=new Z;class xn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Up:Ip)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Sn.min,Er.min),Sn.expandByPoint(Ht),Ht.addVectors(Sn.max,Er.max),Sn.expandByPoint(Ht)):(Sn.expandByPoint(Er.min),Sn.expandByPoint(Er.max))}Sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(e,c),Ht.add(Us)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let K=0;K<i.count;K++)o[K]=new Z,l[K]=new Z;const c=new Z,u=new Z,f=new Z,h=new Xe,d=new Xe,_=new Xe,v=new Z,g=new Z;function p(K,R,y){c.fromBufferAttribute(i,K),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),h.fromBufferAttribute(r,K),d.fromBufferAttribute(r,R),_.fromBufferAttribute(r,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),o[K].add(v),o[R].add(v),o[y].add(v),l[K].add(g),l[R].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let K=0,R=M.length;K<R;++K){const y=M[K],L=y.start,X=y.count;for(let se=L,pe=L+X;se<pe;se+=3)p(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const b=new Z,C=new Z,k=new Z,D=new Z;function O(K){k.fromBufferAttribute(s,K),D.copy(k);const R=o[K];b.copy(R),b.sub(k.multiplyScalar(k.dot(R))).normalize(),C.crossVectors(D,R);const L=C.dot(l[K])<0?-1:1;a.setXYZW(K,b.x,b.y,b.z,L)}for(let K=0,R=M.length;K<R;++K){const y=M[K],L=y.start,X=y.count;for(let se=L,pe=L+X;se<pe;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new un(h,u,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yf=new Mt,as=new la,Da=new fr,qf=new Z,La=new Z,Ia=new Z,Ua=new Z,wl=new Z,Na=new Z,jf=new Z,Fa=new Z;class ci extends Lt{constructor(e=new xn,t=new Lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(wl.fromBufferAttribute(f,e),a?Na.addScaledVector(wl,u):Na.addScaledVector(wl.sub(t),u))}t.add(Na)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Da.containsPoint(as.origin)===!1&&(as.intersectSphere(Da,qf)===null||as.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&(Yf.copy(r).invert(),as.copy(e.ray).applyMatrix4(Yf),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let C=M,k=b;C<k;C+=3){const D=o.getX(C),O=o.getX(C+1),K=o.getX(C+2);s=Oa(this,p,e,i,c,u,f,D,O,K),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=o.getX(g),b=o.getX(g+1),C=o.getX(g+2);s=Oa(this,a,e,i,c,u,f,M,b,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let C=M,k=b;C<k;C+=3){const D=C,O=C+1,K=C+2;s=Oa(this,p,e,i,c,u,f,D,O,K),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=g,b=g+1,C=g+2;s=Oa(this,a,e,i,c,u,f,M,b,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function W_(n,e,t,i,s,r,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ji,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:n}}function Oa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,La),n.getVertexPosition(l,Ia),n.getVertexPosition(c,Ua);const u=W_(n,e,t,i,La,Ia,Ua,jf);if(u){const f=new Z;Dn.getBarycoord(jf,La,Ia,Ua,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,l,c,f,new Xe)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,l,c,f,new Xe)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Z,materialIndex:0};Dn.getNormal(La,Ia,Ua,h.normal),u.face=h,u.barycoord=f}return u}class ca extends xn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(f,2));function _(v,g,p,M,b,C,k,D,O,K,R){const y=C/O,L=k/K,X=C/2,se=k/2,pe=D/2,ee=O+1,J=K+1;let oe=0,Q=0;const Me=new Z;for(let Te=0;Te<J;Te++){const Oe=Te*L-se;for(let He=0;He<ee;He++){const $e=He*y-X;Me[v]=$e*M,Me[g]=Oe*b,Me[p]=pe,c.push(Me.x,Me.y,Me.z),Me[v]=0,Me[g]=0,Me[p]=D>0?1:-1,u.push(Me.x,Me.y,Me.z),f.push(He/O),f.push(1-Te/K),oe+=1}}for(let Te=0;Te<K;Te++)for(let Oe=0;Oe<O;Oe++){const He=h+Oe+ee*Te,$e=h+Oe+ee*(Te+1),rt=h+(Oe+1)+ee*(Te+1),it=h+(Oe+1)+ee*Te;l.push(He,$e,it),l.push($e,rt,it),Q+=6}o.addGroup(d,Q,R),d+=Q,h+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const s in i)e[s]=i[s]}return e}function X_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Np(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Fo={clone:lr,merge:nn};var Y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fp extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new Z,Kf=new Xe,Zf=new Xe;class mn extends Fp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Kf,Zf),t.subVectors(Zf,Kf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Fs=1;class j_ extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Ns,Fs,e,t);s.layers=this.layers,this.add(s);const r=new mn(Ns,Fs,e,t);r.layers=this.layers,this.add(r);const a=new mn(Ns,Fs,e,t);a.layers=this.layers,this.add(a);const o=new mn(Ns,Fs,e,t);o.layers=this.layers,this.add(o);const l=new mn(Ns,Fs,e,t);l.layers=this.layers,this.add(l);const c=new mn(Ns,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Op extends qt{constructor(e=[],t=ar,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Op(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ca(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Nn});r.uniforms.tEquirect.value=t;const a=new ci(s,r),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Gt),new j_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Ba extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $_ extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new Z;class cr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kp extends es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Os;const Tr=new Z,Bs=new Z,ks=new Z,zs=new Xe,wr=new Xe,zp=new Mt,ka=new Z,Ar=new Z,za=new Z,$f=new Xe,Cl=new Xe,Jf=new Xe;class J_ extends Lt{constructor(e=new kp){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new xn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bp(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new cr(i,3,0,!1)),Os.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new Xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-ks.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Va(ka.set(-.5,-.5,0),ks,a,Bs,s,r),Va(Ar.set(.5,-.5,0),ks,a,Bs,s,r),Va(za.set(.5,.5,0),ks,a,Bs,s,r),$f.set(0,0),Cl.set(1,0),Jf.set(1,1);let o=e.ray.intersectTriangle(ka,Ar,za,!1,Tr);if(o===null&&(Va(Ar.set(-.5,.5,0),ks,a,Bs,s,r),Cl.set(0,1),o=e.ray.intersectTriangle(ka,za,Ar,!1,Tr),o===null))return;const l=e.ray.origin.distanceTo(Tr);l<e.near||l>e.far||t.push({distance:l,point:Tr.clone(),uv:Dn.getInterpolation(Tr,ka,Ar,za,$f,Cl,Jf,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Va(n,e,t,i,s,r){zs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(wr.x=r*zs.x-s*zs.y,wr.y=s*zs.x+r*zs.y):wr.copy(zs),n.copy(e),n.x+=wr.x,n.y+=wr.y,n.applyMatrix4(zp)}class Vp extends qt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=An,u=An,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q_ extends un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rl=new Z,ev=new Z,tv=new at;class Hi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Rl.subVectors(i,t).cross(ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tv.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new fr,nv=new Xe(.5,.5),Ha=new Z;class Pu{constructor(e=new Hi,t=new Hi,i=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],v=r[9],g=r[10],p=r[11],M=r[12],b=r[13],C=r[14],k=r[15];if(s[0].setComponents(c-a,d-u,p-_,k-M).normalize(),s[1].setComponents(c+a,d+u,p+_,k+M).normalize(),s[2].setComponents(c+o,d+f,p+v,k+b).normalize(),s[3].setComponents(c-o,d-f,p-v,k-b).normalize(),i)s[4].setComponents(l,h,g,C).normalize(),s[5].setComponents(c-l,d-h,p-g,k-C).normalize();else if(s[4].setComponents(c-l,d-h,p-g,k-C).normalize(),t===ei)s[5].setComponents(c+l,d+h,p+g,k+C).normalize();else if(t===So)s[5].setComponents(l,h,g,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=nv.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mo=new Z,Eo=new Z,Qf=new Mt,Cr=new la,Ga=new fr,Pl=new Z,eh=new Z;class iv extends Lt{constructor(e=new xn,t=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Mo.fromBufferAttribute(t,s-1),Eo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Mo.distanceTo(Eo);e.setAttribute("lineDistance",new si(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Qf.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Qf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const p=u.getX(v),M=u.getX(v+1),b=Wa(this,e,Cr,l,p,M,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(d),p=Wa(this,e,Cr,l,v,g,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const p=Wa(this,e,Cr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Wa(this,e,Cr,l,_-1,d,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wa(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Mo.fromBufferAttribute(o,s),Eo.fromBufferAttribute(o,r),t.distanceSqToSegment(Mo,Eo,Pl,eh)>i)return;Pl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:eh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Xc extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const th=new Mt,Yc=new la,Xa=new fr,Ya=new Z;class sv extends Lt{constructor(e=new xn,t=new Xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;th.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,v=d;_<v;_++){const g=c.getX(_);Ya.fromBufferAttribute(f,g),nh(Ya,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,v=d;_<v;_++)Ya.fromBufferAttribute(f,_),nh(Ya,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nh(n,e,t,i,s,r,a){const o=Yc.distanceSqToPoint(n);if(o<t){const l=new Z;Yc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class rv extends qt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gp extends qt{constructor(e,t,i=xs,s,r,a,o=An,l=An,c,u=ta,f=1){if(u!==ta&&u!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wp extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oo extends xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],v=[],g=[];for(let p=0;p<u;p++){const M=p*h-a;for(let b=0;b<c;b++){const C=b*f-r;_.push(C,-M,0),v.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const b=M+c*p,C=M+c*(p+1),k=M+1+c*(p+1),D=M+1+c*p;d.push(b,C,D),d.push(C,k,D)}this.setIndex(d),this.setAttribute("position",new si(_,3)),this.setAttribute("normal",new si(v,3)),this.setAttribute("uv",new si(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class av extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xp extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ov extends Xp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yp extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lv extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class cv{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const uv=new cv;class Qi{constructor(e){this.manager=e!==void 0?e:uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class fv extends Error{constructor(e,t){super(e),this.response=t}}class Gr extends Qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:i,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let v=0;const g=new ReadableStream({start(p){M();function M(){f.read().then(({done:b,value:C})=>{if(b)p.close();else{v+=C.byteLength;const k=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:d});for(let D=0,O=u.length;D<O;D++){const K=u[D];K.onProgress&&K.onProgress(k)}p.enqueue(C),M()}},b=>{p.error(b)})}}});return new Response(g)}else throw new fv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Hr.add(`file:${e}`,c);const u=Si[e];delete Si[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vs=new WeakMap;class hv extends Qi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Hr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Vs.get(a);f===void 0&&(f=[],Vs.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=ia("img");function l(){u(),t&&t(this);const f=Vs.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Vs.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Hr.remove(`image:${e}`);const h=Vs.get(this)||[];for(let d=0;d<h.length;d++){const _=h[d];_.onError&&_.onError(f)}Vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class dv extends Qi{constructor(e){super(e)}load(e,t,i,s){const r=this,a=new Vp,o=new Gr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{u(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:cn,a.wrapT=c.wrapT!==void 0?c.wrapT:cn,a.magFilter=c.magFilter!==void 0?c.magFilter:Gt,a.minFilter=c.minFilter!==void 0?c.minFilter:Gt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Yi),c.mipmapCount===1&&(a.minFilter=Gt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}}class pv extends Qi{constructor(e){super(e)}load(e,t,i,s){const r=new qt,a=new hv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ua extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Dl=new Mt,ih=new Z,sh=new Z;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pu,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sh),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mv extends Du{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=yo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gv extends ua{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rh=new Mt,Rr=new Z,Ll=new Z;class xv extends Du{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rr),Ll.copy(i.position),Ll.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ll),i.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,i.coordinateSystem,i.reversedDepth)}}class _v extends ua{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lu extends Fp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vv extends Du{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sv extends ua{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bv extends ua{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class yv extends xn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Mv extends Qi{constructor(e){super(e)}load(e,t,i,s){const r=this,a=new Gr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Dt(l),r.manager.itemError(e)}},i,s)}parse(e){const t={},i={};function s(d,_){if(t[_]!==void 0)return t[_];const g=d.interleavedBuffers[_],p=r(d,g.buffer),M=ba(g.type,p),b=new Bp(M,g.stride);return b.uuid=g.uuid,t[_]=b,b}function r(d,_){if(i[_]!==void 0)return i[_];const g=d.arrayBuffers[_],p=new Uint32Array(g).buffer;return i[_]=p,p}const a=e.isInstancedBufferGeometry?new yv:new xn,o=e.data.index;if(o!==void 0){const d=ba(o.type,o.array);a.setIndex(new un(d,1))}const l=e.data.attributes;for(const d in l){const _=l[d];let v;if(_.isInterleavedBufferAttribute){const g=s(e.data,_.data);v=new cr(g,_.itemSize,_.offset,_.normalized)}else{const g=ba(_.type,_.array),p=_.isInstancedBufferAttribute?Q_:un;v=new p(g,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),_.usage!==void 0&&v.setUsage(_.usage),a.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const _=c[d],v=[];for(let g=0,p=_.length;g<p;g++){const M=_[g];let b;if(M.isInterleavedBufferAttribute){const C=s(e.data,M.data);b=new cr(C,M.itemSize,M.offset,M.normalized)}else{const C=ba(M.type,M.array);b=new un(C,M.itemSize,M.normalized)}M.name!==void 0&&(b.name=M.name),v.push(b)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,_=f.length;d!==_;++d){const v=f[d];a.addGroup(v.start,v.count,v.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new fr().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Ev extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ah=new Mt;class wv{constructor(e,t,i=0,s=1/0){this.ray=new la(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(e,t=!0,i=[]){return jc(e,this,i,t),i.sort(oh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jc(e[s],this,i,t);return i.sort(oh),i}}function oh(n,e){return n.distance-e.distance}function jc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)jc(r[a],e,t,!0)}}class lh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Av extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ch(n,e,t,i){const s=Cv(i);switch(t){case Ep:return n*e;case Ys:return n*e/s.components*s.byteLength;case Tu:return n*e/s.components*s.byteLength;case Wi:return n*e*2/s.components*s.byteLength;case wu:return n*e*2/s.components*s.byteLength;case Tp:return n*e*3/s.components*s.byteLength;case Xt:return n*e*4/s.components*s.byteLength;case Au:return n*e*4/s.components*s.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xc:case vc:return Math.max(n,16)*Math.max(e,8)/4;case gc:case _c:return Math.max(n,8)*Math.max(e,8)/2;case Sc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Bc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cv(n){switch(n){case oi:case Sp:return{byteLength:1,components:1};case Qr:case bp:case Wt:return{byteLength:2,components:1};case Mu:case Eu:return{byteLength:2,components:4};case xs:case yu:case In:return{byteLength:4,components:1};case yp:case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rv(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],v=f[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
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
#endif`,Lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
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
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
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
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gv=`#ifdef USE_IRIDESCENCE
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
#endif`,Wv=`#ifdef USE_BUMPMAP
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qv=`#define PI 3.141592653589793
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
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tS=`vec3 transformedNormal = objectNormal;
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
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aS="gl_FragColor = linearToOutputTexel( gl_FragColor );",oS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lS=`#ifdef USE_ENVMAP
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
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
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
}`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bS=`uniform bool receiveShadow;
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
#endif`,yS=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,MS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AS=`PhysicalMaterial material;
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
#endif`,CS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,RS=`
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
#endif`,PS=`#if defined( RE_IndirectDiffuse )
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kS=`#if defined( USE_POINTS_UV )
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
#endif`,zS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
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
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JS=`#ifdef USE_NORMALMAP
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
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
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
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
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
#endif`,xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yb=`#ifndef saturate
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
#endif`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const Rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Fb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#include <common>
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Xb=`#define LAMBERT
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
}`,qb=`#define MATCAP
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
}`,jb=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,$b=`#define PHONG
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
}`,Qb=`#define STANDARD
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
}`,ey=`#define STANDARD
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
}`,ty=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,ay=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Pv,alphahash_pars_fragment:Dv,alphamap_fragment:Lv,alphamap_pars_fragment:Iv,alphatest_fragment:Uv,alphatest_pars_fragment:Nv,aomap_fragment:Fv,aomap_pars_fragment:Ov,batching_pars_vertex:Bv,batching_vertex:kv,begin_vertex:zv,beginnormal_vertex:Vv,bsdfs:Hv,iridescence_fragment:Gv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:jv,color_fragment:Kv,color_pars_fragment:Zv,color_pars_vertex:$v,color_vertex:Jv,common:Qv,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:sS,emissivemap_pars_fragment:rS,colorspace_fragment:aS,colorspace_pars_fragment:oS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:yS,envmap_vertex:hS,fog_vertex:dS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:xS,lightmap_pars_fragment:_S,lights_lambert_fragment:vS,lights_lambert_pars_fragment:SS,lights_pars_begin:bS,lights_toon_fragment:MS,lights_toon_pars_fragment:ES,lights_phong_fragment:TS,lights_phong_pars_fragment:wS,lights_physical_fragment:AS,lights_physical_pars_fragment:CS,lights_fragment_begin:RS,lights_fragment_maps:PS,lights_fragment_end:DS,logdepthbuf_fragment:LS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:NS,map_fragment:FS,map_pars_fragment:OS,map_particle_fragment:BS,map_particle_pars_fragment:kS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:VS,morphinstance_vertex:HS,morphcolor_vertex:GS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:YS,normal_fragment_begin:qS,normal_fragment_maps:jS,normal_pars_fragment:KS,normal_pars_vertex:ZS,normal_vertex:$S,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:sb,premultiplied_alpha_fragment:rb,project_vertex:ab,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:hb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:xb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:Sb,tonemapping_fragment:bb,tonemapping_pars_fragment:yb,transmission_fragment:Mb,transmission_pars_fragment:Eb,uv_pars_fragment:Tb,uv_pars_vertex:wb,uv_vertex:Ab,worldpos_vertex:Cb,background_vert:Rb,background_frag:Pb,backgroundCube_vert:Db,backgroundCube_frag:Lb,cube_vert:Ib,cube_frag:Ub,depth_vert:Nb,depth_frag:Fb,distanceRGBA_vert:Ob,distanceRGBA_frag:Bb,equirect_vert:kb,equirect_frag:zb,linedashed_vert:Vb,linedashed_frag:Hb,meshbasic_vert:Gb,meshbasic_frag:Wb,meshlambert_vert:Xb,meshlambert_frag:Yb,meshmatcap_vert:qb,meshmatcap_frag:jb,meshnormal_vert:Kb,meshnormal_frag:Zb,meshphong_vert:$b,meshphong_frag:Jb,meshphysical_vert:Qb,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},Fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Zn={basic:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:nn([Fe.points,Fe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:nn([Fe.common,Fe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:nn([Fe.sprite,Fe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:nn([Fe.lights,Fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Zn.physical={uniforms:nn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const qa={r:0,b:0,g:0},ls=new li,cy=new Mt;function uy(n,e,t,i,s,r,a){const o=new Qe(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function _(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function v(b){let C=!1;const k=_(b);k===null?p(o,l):k&&k.isColor&&(p(k,1),C=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,C){const k=_(C);k&&(k.isCubeTexture||k.mapping===No)?(u===void 0&&(u=new ci(new ca(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:lr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,O,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ls.copy(C.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=k,u.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(ls)),u.material.toneMapped=dt.getTransfer(k.colorSpace)!==_t,(f!==k||h!==k.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=k,h=k.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):k&&k.isTexture&&(c===void 0&&(c=new ci(new Oo(2,2),new Yt({name:"BackgroundMaterial",uniforms:lr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=k,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=dt.getTransfer(k.colorSpace)!==_t,k.matrixAutoUpdate===!0&&k.updateMatrix(),c.material.uniforms.uvTransform.value.copy(k.matrix),(f!==k||h!==k.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=k,h=k.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,C){b.getRGB(qa,Np(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,C,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,C=1){o.set(b),l=C,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:g,dispose:M}}function fy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(y,L,X,se,pe){let ee=!1;const J=f(se,X,L);r!==J&&(r=J,c(r.object)),ee=d(y,se,X,pe),ee&&_(y,se,X,pe),pe!==null&&e.update(pe,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,C(y,L,X,se),pe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,L,X){const se=X.wireframe===!0;let pe=i[y.id];pe===void 0&&(pe={},i[y.id]=pe);let ee=pe[L.id];ee===void 0&&(ee={},pe[L.id]=ee);let J=ee[se];return J===void 0&&(J=h(l()),ee[se]=J),J}function h(y){const L=[],X=[],se=[];for(let pe=0;pe<t;pe++)L[pe]=0,X[pe]=0,se[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:se,object:y,attributes:{},index:null}}function d(y,L,X,se){const pe=r.attributes,ee=L.attributes;let J=0;const oe=X.getAttributes();for(const Q in oe)if(oe[Q].location>=0){const Te=pe[Q];let Oe=ee[Q];if(Oe===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Oe=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Oe=y.instanceColor)),Te===void 0||Te.attribute!==Oe||Oe&&Te.data!==Oe.data)return!0;J++}return r.attributesNum!==J||r.index!==se}function _(y,L,X,se){const pe={},ee=L.attributes;let J=0;const oe=X.getAttributes();for(const Q in oe)if(oe[Q].location>=0){let Te=ee[Q];Te===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor));const Oe={};Oe.attribute=Te,Te&&Te.data&&(Oe.data=Te.data),pe[Q]=Oe,J++}r.attributes=pe,r.attributesNum=J,r.index=se}function v(){const y=r.newAttributes;for(let L=0,X=y.length;L<X;L++)y[L]=0}function g(y){p(y,0)}function p(y,L){const X=r.newAttributes,se=r.enabledAttributes,pe=r.attributeDivisors;X[y]=1,se[y]===0&&(n.enableVertexAttribArray(y),se[y]=1),pe[y]!==L&&(n.vertexAttribDivisor(y,L),pe[y]=L)}function M(){const y=r.newAttributes,L=r.enabledAttributes;for(let X=0,se=L.length;X<se;X++)L[X]!==y[X]&&(n.disableVertexAttribArray(X),L[X]=0)}function b(y,L,X,se,pe,ee,J){J===!0?n.vertexAttribIPointer(y,L,X,pe,ee):n.vertexAttribPointer(y,L,X,se,pe,ee)}function C(y,L,X,se){v();const pe=se.attributes,ee=X.getAttributes(),J=L.defaultAttributeValues;for(const oe in ee){const Q=ee[oe];if(Q.location>=0){let Me=pe[oe];if(Me===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),Me!==void 0){const Te=Me.normalized,Oe=Me.itemSize,He=e.get(Me);if(He===void 0)continue;const $e=He.buffer,rt=He.type,it=He.bytesPerElement,re=rt===n.INT||rt===n.UNSIGNED_INT||Me.gpuType===yu;if(Me.isInterleavedBufferAttribute){const z=Me.data,ue=z.stride,ge=Me.offset;if(z.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)p(Q.location+_e,z.meshPerAttribute);y.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let _e=0;_e<Q.locationSize;_e++)g(Q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let _e=0;_e<Q.locationSize;_e++)b(Q.location+_e,Oe/Q.locationSize,rt,Te,ue*it,(ge+Oe/Q.locationSize*_e)*it,re)}else{if(Me.isInstancedBufferAttribute){for(let z=0;z<Q.locationSize;z++)p(Q.location+z,Me.meshPerAttribute);y.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let z=0;z<Q.locationSize;z++)g(Q.location+z);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let z=0;z<Q.locationSize;z++)b(Q.location+z,Oe/Q.locationSize,rt,Te,Oe*it,Oe/Q.locationSize*z*it,re)}}else if(J!==void 0){const Te=J[oe];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(Q.location,Te);break;case 3:n.vertexAttrib3fv(Q.location,Te);break;case 4:n.vertexAttrib4fv(Q.location,Te);break;default:n.vertexAttrib1fv(Q.location,Te)}}}}M()}function k(){K();for(const y in i){const L=i[y];for(const X in L){const se=L[X];for(const pe in se)u(se[pe].object),delete se[pe];delete L[X]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const X in L){const se=L[X];for(const pe in se)u(se[pe].object),delete se[pe];delete L[X]}delete i[y.id]}function O(y){for(const L in i){const X=i[L];if(X[y.id]===void 0)continue;const se=X[y.id];for(const pe in se)u(se[pe].object),delete se[pe];delete X[y.id]}}function K(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:K,resetDefaultState:R,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function hy(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(O){return!(O!==Xt&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){const K=O===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==oi&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==In&&!K)}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:k,maxSamples:D}}function py(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Hi,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const M=r?0:i,b=M*4;let C=p.clippingState||null;l.value=C,C=u(_,h,b,d);for(let k=0;k!==b;++k)C[k]=t[k];p.clippingState=C,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const p=d+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,C=d;b!==v;++b,C+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(g,C),g[C+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function my(n){let e=new WeakMap;function t(a,o){return o===dc?a.mapping=ar:o===pc&&(a.mapping=or),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===dc||o===pc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new K_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const qi=4,uh=[.125,.215,.35,.446,.526,.582],hs=20,gy=256,Pr=new Lu,fh=new Qe;let Il=null,Ul=0,Nl=0,Fl=!1;const xy=new Z;class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=xy}=r;Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ul,Nl),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Wt,format:Xt,colorSpace:Mn,depthBuffer:!1},s=dh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_y(r)),this._blurMaterial=Sy(r,e,t),this._ggxMaterial=vy(r,e,t)}return s}_compileMaterial(e){const t=new ci(new xn,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,i,s,r){const l=new mn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(fh),f.toneMapping=Ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new ca,new Lp({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(fh),p=!0);for(let b=0;b<6;b++){const C=b%3;C===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):C===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const k=this._cubeSize;Hs(s,C*k,b>2?k:0,k,k),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ar||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,d=f*h,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-qi?i-_+qi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Hs(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Hs(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Pr)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),v=r/_,g=isFinite(r)?1+Math.floor(u*v):hs;g>hs&&nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const p=[];let M=0;for(let O=0;O<hs;++O){const K=O/v,R=Math.exp(-K*K/2);p.push(R),O===0?M+=R:O<g&&(M+=2*R)}for(let O=0;O<p.length;O++)p[O]=p[O]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const C=this._sizeLods[s],k=3*C*(s>b-qi?s-b+qi:0),D=4*(this._cubeSize-C);Hs(t,k,D,3*C,2*C),l.setRenderTarget(t),l.render(f,Pr)}}function _y(n){const e=[],t=[],i=[];let s=n;const r=n-qi+1+uh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-qi?l=uh[a-n+qi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,v=3,g=2,p=1,M=new Float32Array(v*_*d),b=new Float32Array(g*_*d),C=new Float32Array(p*_*d);for(let D=0;D<d;D++){const O=D%3*2/3-1,K=D>2?0:-1,R=[O,K,0,O+2/3,K,0,O+2/3,K+1,0,O,K,0,O+2/3,K+1,0,O,K+1,0];M.set(R,v*_*D),b.set(h,g*_*D);const y=[D,D,D,D,D,D];C.set(y,p*_*D)}const k=new xn;k.setAttribute("position",new un(M,v)),k.setAttribute("uv",new un(b,g)),k.setAttribute("faceIndex",new un(C,p)),i.push(new ci(k,null)),s>qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function dh(n,e,t){const i=new rn(n,e,t);return i.texture.mapping=No,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vy(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Sy(n,e,t){const i=new Float32Array(hs),s=new Z(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ph(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function mh(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}function by(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===dc||l===pc,u=l===ar||l===or;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new hh(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new hh(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function yy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&sa("WebGLRenderer: "+i+" extension not supported."),s}}}function My(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let b=0,C=M.length;b<C;b+=3){const k=M[b+0],D=M[b+1],O=M[b+2];h.push(k,D,D,O,O,k)}}else if(_!==void 0){const M=_.array;v=_.version;for(let b=0,C=M.length/3-1;b<C;b+=3){const k=b+0,D=b+1,O=b+2;h.push(k,D,D,O,O,k)}}else return;const g=new(Rp(h)?Up:Ip)(h,1);g.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ey(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,h*a,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,_);let g=0;for(let p=0;p<_;p++)g+=d[p];t.update(g,i,1)}function f(h,d,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*v[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ty(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wy(n,e,t){const i=new WeakMap,s=new yt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){K.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let C=0;_===!0&&(C=1),v===!0&&(C=2),g===!0&&(C=3);let k=o.attributes.position.count*C,D=1;k>e.maxTextureSize&&(D=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const O=new Float32Array(k*D*4*f),K=new Pp(O,k,D,f);K.type=In,K.needsUpdate=!0;const R=C*4;for(let L=0;L<f;L++){const X=p[L],se=M[L],pe=b[L],ee=k*D*4*L;for(let J=0;J<X.count;J++){const oe=J*R;_===!0&&(s.fromBufferAttribute(X,J),O[ee+oe+0]=s.x,O[ee+oe+1]=s.y,O[ee+oe+2]=s.z,O[ee+oe+3]=0),v===!0&&(s.fromBufferAttribute(se,J),O[ee+oe+4]=s.x,O[ee+oe+5]=s.y,O[ee+oe+6]=s.z,O[ee+oe+7]=0),g===!0&&(s.fromBufferAttribute(pe,J),O[ee+oe+8]=s.x,O[ee+oe+9]=s.y,O[ee+oe+10]=s.z,O[ee+oe+11]=pe.itemSize===4?s.w:1)}}h={count:f,texture:K,size:new Xe(k,D)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Ay(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const jp=new qt,gh=new Gp(1,1),Kp=new Pp,Zp=new P_,$p=new Op,xh=[],_h=[],vh=new Float32Array(16),Sh=new Float32Array(9),bh=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ko(n,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;bh.set(i),n.uniformMatrix2fv(this.addr,!1,bh),zt(t,i)}}function Iy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Sh.set(i),n.uniformMatrix3fv(this.addr,!1,Sh),zt(t,i)}}function Uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;vh.set(i),n.uniformMatrix4fv(this.addr,!1,vh),zt(t,i)}}function Ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function Gy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gh.compareFunction=Cp,r=gh):r=jp,t.setTexture2D(e||r,s)}function Wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zp,s)}function Xy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$p,s)}function Yy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kp,s)}function qy(n){switch(n){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Dy;case 35674:return Ly;case 35675:return Iy;case 35676:return Uy;case 5124:case 35670:return Ny;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Vy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}function jy(n,e){n.uniform1fv(this.addr,e)}function Ky(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function Zy(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function $y(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function Jy(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qy(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eM(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tM(n,e){n.uniform1iv(this.addr,e)}function nM(n,e){n.uniform2iv(this.addr,e)}function iM(n,e){n.uniform3iv(this.addr,e)}function sM(n,e){n.uniform4iv(this.addr,e)}function rM(n,e){n.uniform1uiv(this.addr,e)}function aM(n,e){n.uniform2uiv(this.addr,e)}function oM(n,e){n.uniform3uiv(this.addr,e)}function lM(n,e){n.uniform4uiv(this.addr,e)}function cM(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||jp,r[a])}function uM(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zp,r[a])}function fM(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$p,r[a])}function hM(n,e,t){const i=this.cache,s=e.length,r=ko(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kp,r[a])}function dM(n){switch(n){case 5126:return jy;case 35664:return Ky;case 35665:return Zy;case 35666:return $y;case 35674:return Jy;case 35675:return Qy;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return rM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qy(t.type)}}class mM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dM(t.type)}}class gM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function yh(n,e){n.seq.push(e),n.map[e.id]=e}function xM(n,e,t){const i=n.name,s=i.length;for(Ol.lastIndex=0;;){const r=Ol.exec(i),a=Ol.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yh(t,c===void 0?new pM(o,n,e):new mM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new gM(o),yh(t,f)),t=f}}}class oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);xM(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Mh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _M=37297;let vM=0;function SM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Eh=new at;function bM(n){dt._getMatrix(Eh,dt.workingColorSpace,n);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case vo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+SM(n.getShaderSource(e),o)}else return r}function yM(n,e){const t=bM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MM(n,e){let t;switch(e){case hp:t="Linear";break;case dp:t="Reinhard";break;case pp:t="Cineon";break;case mp:t="ACESFilmic";break;case xp:t="AgX";break;case _p:t="Neutral";break;case gp:t="Custom";break;default:nt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new Z;function EM(){dt.getLuminanceCoefficients(ja);const n=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function wM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Lr(n){return n!==""}function wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(CM,PM)}const RM=new Map;function PM(n,e){let t=ct[e];if(t===void 0){const i=RM.get(e);if(i!==void 0)t=ct[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}const DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(DM,LM)}function LM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function UM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case or:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function FM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function OM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=IM(t),c=UM(t),u=NM(t),f=FM(t),h=OM(t),d=TM(t),_=wM(r),v=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(g=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ki?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,yM("linearToOutputTexel",t.outputColorSpace),EM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Kc(a),a=wh(a,t),a=Ah(a,t),o=Kc(o),o=wh(o,t),o=Ah(o,t),a=Ch(a),o=Ch(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+g+a,C=M+p+o,k=Mh(s,s.VERTEX_SHADER,b),D=Mh(s,s.FRAGMENT_SHADER,C);s.attachShader(v,k),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function O(L){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(v)||"",se=s.getShaderInfoLog(k)||"",pe=s.getShaderInfoLog(D)||"",ee=X.trim(),J=se.trim(),oe=pe.trim();let Q=!0,Me=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,k,D);else{const Te=Th(s,k,"vertex"),Oe=Th(s,D,"fragment");Dt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ee+`
`+Te+`
`+Oe)}else ee!==""?nt("WebGLProgram: Program Info Log:",ee):(J===""||oe==="")&&(Me=!1);Me&&(L.diagnostics={runnable:Q,programLog:ee,vertexShader:{log:J,prefix:g},fragmentShader:{log:oe,prefix:p}})}s.deleteShader(k),s.deleteShader(D),K=new oo(s,v),R=AM(s,v)}let K;this.getUniforms=function(){return K===void 0&&O(this),K};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,_M)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=D,this}let kM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VM(e),t.set(e,i)),i}}class VM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function HM(n,e,t,i,s,r,a){const o=new Ru,l=new zM,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(R){return c.add(R),R===0?"uv":`uv${R}`}function g(R,y,L,X,se){const pe=X.fog,ee=se.geometry,J=R.isMeshStandardMaterial?X.environment:null,oe=(R.isMeshStandardMaterial?t:e).get(R.envMap||J),Q=oe&&oe.mapping===No?oe.image.height:null,Me=_[R.type];R.precision!==null&&(d=s.getMaxPrecision(R.precision),d!==R.precision&&nt("WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));const Te=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Oe=Te!==void 0?Te.length:0;let He=0;ee.morphAttributes.position!==void 0&&(He=1),ee.morphAttributes.normal!==void 0&&(He=2),ee.morphAttributes.color!==void 0&&(He=3);let $e,rt,it,re;if(Me){const pt=Zn[Me];$e=pt.vertexShader,rt=pt.fragmentShader}else $e=R.vertexShader,rt=R.fragmentShader,l.update(R),it=l.getVertexShaderID(R),re=l.getFragmentShaderID(R);const z=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),ge=se.isInstancedMesh===!0,_e=se.isBatchedMesh===!0,De=!!R.map,I=!!R.matcap,U=!!oe,Y=!!R.aoMap,w=!!R.lightMap,V=!!R.bumpMap,W=!!R.normalMap,ce=!!R.displacementMap,$=!!R.emissiveMap,me=!!R.metalnessMap,te=!!R.roughnessMap,ve=R.anisotropy>0,E=R.clearcoat>0,S=R.dispersion>0,G=R.iridescence>0,ae=R.sheen>0,de=R.transmission>0,ne=ve&&!!R.anisotropyMap,Be=E&&!!R.clearcoatMap,Ae=E&&!!R.clearcoatNormalMap,Ge=E&&!!R.clearcoatRoughnessMap,Ve=G&&!!R.iridescenceMap,Ee=G&&!!R.iridescenceThicknessMap,we=ae&&!!R.sheenColorMap,Ne=ae&&!!R.sheenRoughnessMap,We=!!R.specularMap,Le=!!R.specularColorMap,Ye=!!R.specularIntensityMap,H=de&&!!R.transmissionMap,Ie=de&&!!R.thicknessMap,le=!!R.gradientMap,Pe=!!R.alphaMap,Re=R.alphaTest>0,Se=!!R.alphaHash,qe=!!R.extensions;let tt=Ki;R.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(tt=n.toneMapping);const Et={shaderID:Me,shaderType:R.type,shaderName:R.name,vertexShader:$e,fragmentShader:rt,defines:R.defines,customVertexShaderID:it,customFragmentShaderID:re,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:_e,batchingColor:_e&&se._colorsTexture!==null,instancing:ge,instancingColor:ge&&se.instanceColor!==null,instancingMorph:ge&&se.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Mn,alphaToCoverage:!!R.alphaToCoverage,map:De,matcap:I,envMap:U,envMapMode:U&&oe.mapping,envMapCubeUVHeight:Q,aoMap:Y,lightMap:w,bumpMap:V,normalMap:W,displacementMap:h&&ce,emissiveMap:$,normalMapObjectSpace:W&&R.normalMapType===h_,normalMapTangentSpace:W&&R.normalMapType===Ap,metalnessMap:me,roughnessMap:te,anisotropy:ve,anisotropyMap:ne,clearcoat:E,clearcoatMap:Be,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ge,dispersion:S,iridescence:G,iridescenceMap:Ve,iridescenceThicknessMap:Ee,sheen:ae,sheenColorMap:we,sheenRoughnessMap:Ne,specularMap:We,specularColorMap:Le,specularIntensityMap:Ye,transmission:de,transmissionMap:H,thicknessMap:Ie,gradientMap:le,opaque:R.transparent===!1&&R.blending===Qs&&R.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Re,alphaHash:Se,combine:R.combine,mapUv:De&&v(R.map.channel),aoMapUv:Y&&v(R.aoMap.channel),lightMapUv:w&&v(R.lightMap.channel),bumpMapUv:V&&v(R.bumpMap.channel),normalMapUv:W&&v(R.normalMap.channel),displacementMapUv:ce&&v(R.displacementMap.channel),emissiveMapUv:$&&v(R.emissiveMap.channel),metalnessMapUv:me&&v(R.metalnessMap.channel),roughnessMapUv:te&&v(R.roughnessMap.channel),anisotropyMapUv:ne&&v(R.anisotropyMap.channel),clearcoatMapUv:Be&&v(R.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&v(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&v(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(R.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(R.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(R.sheenRoughnessMap.channel),specularMapUv:We&&v(R.specularMap.channel),specularColorMapUv:Le&&v(R.specularColorMap.channel),specularIntensityMapUv:Ye&&v(R.specularIntensityMap.channel),transmissionMapUv:H&&v(R.transmissionMap.channel),thicknessMapUv:Ie&&v(R.thicknessMap.channel),alphaMapUv:Pe&&v(R.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(W||ve),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!ee.attributes.uv&&(De||Pe),fog:!!pe,useFog:R.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:se.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:He,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:De&&R.map.isVideoTexture===!0&&dt.getTransfer(R.map.colorSpace)===_t,decodeVideoTextureEmissive:$&&R.emissiveMap.isVideoTexture===!0&&dt.getTransfer(R.emissiveMap.colorSpace)===_t,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Tn,flipSided:R.side===gn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:qe&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&R.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(R){const y=[];if(R.shaderID?y.push(R.shaderID):(y.push(R.customVertexShaderID),y.push(R.customFragmentShaderID)),R.defines!==void 0)for(const L in R.defines)y.push(L),y.push(R.defines[L]);return R.isRawShaderMaterial===!1&&(M(y,R),b(y,R),y.push(n.outputColorSpace)),y.push(R.customProgramCacheKey),y.join()}function M(R,y){R.push(y.precision),R.push(y.outputColorSpace),R.push(y.envMapMode),R.push(y.envMapCubeUVHeight),R.push(y.mapUv),R.push(y.alphaMapUv),R.push(y.lightMapUv),R.push(y.aoMapUv),R.push(y.bumpMapUv),R.push(y.normalMapUv),R.push(y.displacementMapUv),R.push(y.emissiveMapUv),R.push(y.metalnessMapUv),R.push(y.roughnessMapUv),R.push(y.anisotropyMapUv),R.push(y.clearcoatMapUv),R.push(y.clearcoatNormalMapUv),R.push(y.clearcoatRoughnessMapUv),R.push(y.iridescenceMapUv),R.push(y.iridescenceThicknessMapUv),R.push(y.sheenColorMapUv),R.push(y.sheenRoughnessMapUv),R.push(y.specularMapUv),R.push(y.specularColorMapUv),R.push(y.specularIntensityMapUv),R.push(y.transmissionMapUv),R.push(y.thicknessMapUv),R.push(y.combine),R.push(y.fogExp2),R.push(y.sizeAttenuation),R.push(y.morphTargetsCount),R.push(y.morphAttributeCount),R.push(y.numDirLights),R.push(y.numPointLights),R.push(y.numSpotLights),R.push(y.numSpotLightMaps),R.push(y.numHemiLights),R.push(y.numRectAreaLights),R.push(y.numDirLightShadows),R.push(y.numPointLightShadows),R.push(y.numSpotLightShadows),R.push(y.numSpotLightShadowsWithMaps),R.push(y.numLightProbes),R.push(y.shadowMapType),R.push(y.toneMapping),R.push(y.numClippingPlanes),R.push(y.numClipIntersection),R.push(y.depthPacking)}function b(R,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),R.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),R.push(o.mask)}function C(R){const y=_[R.type];let L;if(y){const X=Zn[y];L=Fo.clone(X.uniforms)}else L=R.uniforms;return L}function k(R,y){let L;for(let X=0,se=u.length;X<se;X++){const pe=u[X];if(pe.cacheKey===y){L=pe,++L.usedTimes;break}}return L===void 0&&(L=new BM(n,y,R,r),u.push(L)),L}function D(R){if(--R.usedTimes===0){const y=u.indexOf(R);u[y]=u[u.length-1],u.pop(),R.destroy()}}function O(R){l.remove(R)}function K(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:C,acquireProgram:k,releaseProgram:D,releaseShaderCache:O,programs:u,dispose:K}}function GM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function WM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ph(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,h,d,_,v,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function o(f,h,d,_,v,g){const p=a(f,h,d,_,v,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,_,v,g){const p=a(f,h,d,_,v,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||WM),i.length>1&&i.sort(h||Ph),s.length>1&&s.sort(h||Ph)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function XM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Dh,n.set(i,[a])):s>=r.length?(a=new Dh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function YM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Qe};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jM=0;function KM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZM(n){const e=new YM,t=qM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const s=new Z,r=new Mt,a=new Mt;function o(c){let u=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,_=0,v=0,g=0,p=0,M=0,b=0,C=0,k=0,D=0,O=0;c.sort(KM);for(let R=0,y=c.length;R<y;R++){const L=c[R],X=L.color,se=L.intensity,pe=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=X.r*se,f+=X.g*se,h+=X.b*se;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],se);O++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,Q=t.get(L);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=L.shadow.matrix,M++}i.directional[d]=J,d++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(X).multiplyScalar(se),J.distance=pe,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[v]=J;const oe=L.shadow;if(L.map&&(i.spotLightMap[k]=L.map,k++,oe.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[v]=oe.matrix,L.castShadow){const Q=t.get(L);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=ee,C++}v++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(X).multiplyScalar(se),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=J,g++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const oe=L.shadow,Q=t.get(L);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,Q.shadowCameraNear=oe.camera.near,Q.shadowCameraFar=oe.camera.far,i.pointShadow[_]=Q,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=L.shadow.matrix,b++}i.point[_]=J,_++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(se),J.groundColor.copy(L.groundColor).multiplyScalar(se),i.hemi[p]=J,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const K=i.hash;(K.directionalLength!==d||K.pointLength!==_||K.spotLength!==v||K.rectAreaLength!==g||K.hemiLength!==p||K.numDirectionalShadows!==M||K.numPointShadows!==b||K.numSpotShadows!==C||K.numSpotMaps!==k||K.numLightProbes!==O)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+k-D,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=O,K.directionalLength=d,K.pointLength=_,K.spotLength=v,K.rectAreaLength=g,K.hemiLength=p,K.numDirectionalShadows=M,K.numPointShadows=b,K.numSpotShadows=C,K.numSpotMaps=k,K.numLightProbes=O,i.version=jM++)}function l(c,u){let f=0,h=0,d=0,_=0,v=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),f++}else if(b.isSpotLight){const C=i.spot[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const C=i.point[h];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const C=i.hemi[v];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Lh(n){const e=new ZM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $M(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Lh(n),e.set(s,[o])):r>=a.length?(o=new Lh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QM=`uniform sampler2D shadow_pass;
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
}`;function eE(n,e,t){let i=new Pu;const s=new Xe,r=new Xe,a=new yt,o=new Yp({depthPacking:wp}),l=new lv,c={},u=t.maxTextureSize,f={[Ji]:gn,[gn]:Ji,[Tn]:Tn},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:JM,fragmentShader:QM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ci(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(D,O,K){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const R=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Nn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const se=p!==yi&&this.type===yi,pe=p===yi&&this.type!==yi;for(let ee=0,J=D.length;ee<J;ee++){const oe=D[ee],Q=oe.shadow;if(Q===void 0){nt("WebGLShadowMap:",oe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const Me=Q.getFrameExtents();if(s.multiply(Me),r.copy(Q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Me.x),s.x=r.x*Me.x,Q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Me.y),s.y=r.y*Me.y,Q.mapSize.y=r.y)),Q.map===null||se===!0||pe===!0){const Oe=this.type!==yi?{minFilter:An,magFilter:An}:{};Q.map!==null&&Q.map.dispose(),Q.map=new rn(s.x,s.y,Oe),Q.map.texture.name=oe.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const Te=Q.getViewportCount();for(let Oe=0;Oe<Te;Oe++){const He=Q.getViewport(Oe);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),X.viewport(a),Q.updateMatrices(oe,Oe),i=Q.getFrustum(),C(O,K,Q.camera,oe,this.type)}Q.isPointLightShadow!==!0&&this.type===yi&&M(Q,K),Q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(R,y,L)};function M(D,O){const K=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new rn(s.x,s.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(O,null,K,h,v,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(O,null,K,d,v,null)}function b(D,O,K,R){let y=null;const L=K.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)y=L;else if(y=K.isPointLight===!0?l:o,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const X=y.uuid,se=O.uuid;let pe=c[X];pe===void 0&&(pe={},c[X]=pe);let ee=pe[se];ee===void 0&&(ee=y.clone(),pe[se]=ee,O.addEventListener("dispose",k)),y=ee}if(y.visible=O.visible,y.wireframe=O.wireframe,R===yi?y.side=O.shadowSide!==null?O.shadowSide:O.side:y.side=O.shadowSide!==null?O.shadowSide:f[O.side],y.alphaMap=O.alphaMap,y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,y.map=O.map,y.clipShadows=O.clipShadows,y.clippingPlanes=O.clippingPlanes,y.clipIntersection=O.clipIntersection,y.displacementMap=O.displacementMap,y.displacementScale=O.displacementScale,y.displacementBias=O.displacementBias,y.wireframeLinewidth=O.wireframeLinewidth,y.linewidth=O.linewidth,K.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=n.properties.get(y);X.light=K}return y}function C(D,O,K,R,y){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===yi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,D.matrixWorld);const se=e.update(D),pe=D.material;if(Array.isArray(pe)){const ee=se.groups;for(let J=0,oe=ee.length;J<oe;J++){const Q=ee[J],Me=pe[Q.materialIndex];if(Me&&Me.visible){const Te=b(D,Me,R,y);D.onBeforeShadow(n,D,O,K,se,Te,Q),n.renderBufferDirect(K,null,se,Te,D,Q),D.onAfterShadow(n,D,O,K,se,Te,Q)}}}else if(pe.visible){const ee=b(D,pe,R,y);D.onBeforeShadow(n,D,O,K,se,ee,null),n.renderBufferDirect(K,null,se,ee,D,null),D.onAfterShadow(n,D,O,K,se,ee,null)}}const X=D.children;for(let se=0,pe=X.length;se<pe;se++)C(X[se],O,K,R,y)}function k(D){D.target.removeEventListener("dispose",k);for(const K in c){const R=c[K],y=D.target.uuid;y in R&&(R[y].dispose(),delete R[y])}}}const tE={[ac]:oc,[lc]:fc,[cc]:hc,[rr]:uc,[oc]:ac,[fc]:lc,[hc]:cc,[uc]:rr};function nE(n,e){function t(){let H=!1;const Ie=new yt;let le=null;const Pe=new yt(0,0,0,0);return{setMask:function(Re){le!==Re&&!H&&(n.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){H=Re},setClear:function(Re,Se,qe,tt,Et){Et===!0&&(Re*=tt,Se*=tt,qe*=tt),Ie.set(Re,Se,qe,tt),Pe.equals(Ie)===!1&&(n.clearColor(Re,Se,qe,tt),Pe.copy(Ie))},reset:function(){H=!1,le=null,Pe.set(-1,0,0,0)}}}function i(){let H=!1,Ie=!1,le=null,Pe=null,Re=null;return{setReversed:function(Se){if(Ie!==Se){const qe=e.get("EXT_clip_control");Se?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ie=Se;const tt=Re;Re=null,this.setClear(tt)}},getReversed:function(){return Ie},setTest:function(Se){Se?z(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Se){le!==Se&&!H&&(n.depthMask(Se),le=Se)},setFunc:function(Se){if(Ie&&(Se=tE[Se]),Pe!==Se){switch(Se){case ac:n.depthFunc(n.NEVER);break;case oc:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case uc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=Se}},setLocked:function(Se){H=Se},setClear:function(Se){Re!==Se&&(Ie&&(Se=1-Se),n.clearDepth(Se),Re=Se)},reset:function(){H=!1,le=null,Pe=null,Re=null,Ie=!1}}}function s(){let H=!1,Ie=null,le=null,Pe=null,Re=null,Se=null,qe=null,tt=null,Et=null;return{setTest:function(pt){H||(pt?z(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(pt){Ie!==pt&&!H&&(n.stencilMask(pt),Ie=pt)},setFunc:function(pt,Cn,_n){(le!==pt||Pe!==Cn||Re!==_n)&&(n.stencilFunc(pt,Cn,_n),le=pt,Pe=Cn,Re=_n)},setOp:function(pt,Cn,_n){(Se!==pt||qe!==Cn||tt!==_n)&&(n.stencilOp(pt,Cn,_n),Se=pt,qe=Cn,tt=_n)},setLocked:function(pt){H=pt},setClear:function(pt){Et!==pt&&(n.clearStencil(pt),Et=pt)},reset:function(){H=!1,Ie=null,le=null,Pe=null,Re=null,Se=null,qe=null,tt=null,Et=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,v=!1,g=null,p=null,M=null,b=null,C=null,k=null,D=null,O=new Qe(0,0,0),K=0,R=!1,y=null,L=null,X=null,se=null,pe=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,oe=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=oe>=1):Q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=oe>=2);let Me=null,Te={};const Oe=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),$e=new yt().fromArray(Oe),rt=new yt().fromArray(He);function it(H,Ie,le,Pe){const Re=new Uint8Array(4),Se=n.createTexture();n.bindTexture(H,Se),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<le;qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ie+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Se}const re={};re[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(n.DEPTH_TEST),a.setFunc(rr),V(!1),W(Cf),z(n.CULL_FACE),Y(Nn);function z(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ue(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function ge(H,Ie){return f[H]!==Ie?(n.bindFramebuffer(H,Ie),f[H]=Ie,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ie),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function _e(H,Ie){let le=d,Pe=!1;if(H){le=h.get(Ie),le===void 0&&(le=[],h.set(Ie,le));const Re=H.textures;if(le.length!==Re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,qe=Re.length;Se<qe;Se++)le[Se]=n.COLOR_ATTACHMENT0+Se;le.length=Re.length,Pe=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(le)}function De(H){return _!==H?(n.useProgram(H),_=H,!0):!1}const I={[fs]:n.FUNC_ADD,[Xx]:n.FUNC_SUBTRACT,[Yx]:n.FUNC_REVERSE_SUBTRACT};I[qx]=n.MIN,I[jx]=n.MAX;const U={[Kx]:n.ZERO,[Zx]:n.ONE,[$x]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[i_]:n.SRC_ALPHA_SATURATE,[t_]:n.DST_COLOR,[Qx]:n.DST_ALPHA,[Jx]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[n_]:n.ONE_MINUS_DST_COLOR,[e_]:n.ONE_MINUS_DST_ALPHA,[s_]:n.CONSTANT_COLOR,[r_]:n.ONE_MINUS_CONSTANT_COLOR,[a_]:n.CONSTANT_ALPHA,[o_]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(H,Ie,le,Pe,Re,Se,qe,tt,Et,pt){if(H===Nn){v===!0&&(ue(n.BLEND),v=!1);return}if(v===!1&&(z(n.BLEND),v=!0),H!==Wx){if(H!==g||pt!==R){if((p!==fs||C!==fs)&&(n.blendEquation(n.FUNC_ADD),p=fs,C=fs),pt)switch(H){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.ONE,n.ONE);break;case Rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",H);break}else switch(H){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rf:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pf:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",H);break}M=null,b=null,k=null,D=null,O.set(0,0,0),K=0,g=H,R=pt}return}Re=Re||Ie,Se=Se||le,qe=qe||Pe,(Ie!==p||Re!==C)&&(n.blendEquationSeparate(I[Ie],I[Re]),p=Ie,C=Re),(le!==M||Pe!==b||Se!==k||qe!==D)&&(n.blendFuncSeparate(U[le],U[Pe],U[Se],U[qe]),M=le,b=Pe,k=Se,D=qe),(tt.equals(O)===!1||Et!==K)&&(n.blendColor(tt.r,tt.g,tt.b,Et),O.copy(tt),K=Et),g=H,R=!1}function w(H,Ie){H.side===Tn?ue(n.CULL_FACE):z(n.CULL_FACE);let le=H.side===gn;Ie&&(le=!le),V(le),H.blending===Qs&&H.transparent===!1?Y(Nn):Y(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const Pe=H.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),$(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(H){y!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),y=H)}function W(H){H!==Vx?(z(n.CULL_FACE),H!==L&&(H===Cf?n.cullFace(n.BACK):H===Hx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),L=H}function ce(H){H!==X&&(J&&n.lineWidth(H),X=H)}function $(H,Ie,le){H?(z(n.POLYGON_OFFSET_FILL),(se!==Ie||pe!==le)&&(n.polygonOffset(Ie,le),se=Ie,pe=le)):ue(n.POLYGON_OFFSET_FILL)}function me(H){H?z(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function te(H){H===void 0&&(H=n.TEXTURE0+ee-1),Me!==H&&(n.activeTexture(H),Me=H)}function ve(H,Ie,le){le===void 0&&(Me===null?le=n.TEXTURE0+ee-1:le=Me);let Pe=Te[le];Pe===void 0&&(Pe={type:void 0,texture:void 0},Te[le]=Pe),(Pe.type!==H||Pe.texture!==Ie)&&(Me!==le&&(n.activeTexture(le),Me=le),n.bindTexture(H,Ie||re[H]),Pe.type=H,Pe.texture=Ie)}function E(){const H=Te[Me];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ae(){try{n.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function de(){try{n.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ae(){try{n.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ge(){try{n.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ve(){try{n.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(){try{n.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function we(H){$e.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),$e.copy(H))}function Ne(H){rt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),rt.copy(H))}function We(H,Ie){let le=c.get(Ie);le===void 0&&(le=new WeakMap,c.set(Ie,le));let Pe=le.get(H);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ie,H.name),le.set(H,Pe))}function Le(H,Ie){const Pe=c.get(Ie).get(H);l.get(Ie)!==Pe&&(n.uniformBlockBinding(Ie,Pe,H.__bindingPointIndex),l.set(Ie,Pe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Me=null,Te={},f={},h=new WeakMap,d=[],_=null,v=!1,g=null,p=null,M=null,b=null,C=null,k=null,D=null,O=new Qe(0,0,0),K=0,R=!1,y=null,L=null,X=null,se=null,pe=null,$e.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:z,disable:ue,bindFramebuffer:ge,drawBuffers:_e,useProgram:De,setBlending:Y,setMaterial:w,setFlipSided:V,setCullFace:W,setLineWidth:ce,setPolygonOffset:$,setScissorTest:me,activeTexture:te,bindTexture:ve,unbindTexture:E,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ve,texImage3D:Ee,updateUBOMapping:We,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:Ge,texSubImage2D:ae,texSubImage3D:de,compressedTexSubImage2D:ne,compressedTexSubImage3D:Be,scissor:we,viewport:Ne,reset:Ye}}function iE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,S){return d?new OffscreenCanvas(E,S):ia("canvas")}function v(E,S,G){let ae=1;const de=ve(E);if((de.width>G||de.height>G)&&(ae=G/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor(ae*de.width),Be=Math.floor(ae*de.height);f===void 0&&(f=_(ne,Be));const Ae=S?_(ne,Be):f;return Ae.width=ne,Ae.height=Be,Ae.getContext("2d").drawImage(E,0,0,ne,Be),nt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ne+"x"+Be+")."),Ae}else return"data"in E&&nt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,S,G,ae,de=!1){if(E!==null){if(n[E]!==void 0)return n[E];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=S;if(S===n.RED&&(G===n.FLOAT&&(ne=n.R32F),G===n.HALF_FLOAT&&(ne=n.R16F),G===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.R8UI),G===n.UNSIGNED_SHORT&&(ne=n.R16UI),G===n.UNSIGNED_INT&&(ne=n.R32UI),G===n.BYTE&&(ne=n.R8I),G===n.SHORT&&(ne=n.R16I),G===n.INT&&(ne=n.R32I)),S===n.RG&&(G===n.FLOAT&&(ne=n.RG32F),G===n.HALF_FLOAT&&(ne=n.RG16F),G===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RG8UI),G===n.UNSIGNED_SHORT&&(ne=n.RG16UI),G===n.UNSIGNED_INT&&(ne=n.RG32UI),G===n.BYTE&&(ne=n.RG8I),G===n.SHORT&&(ne=n.RG16I),G===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),G===n.UNSIGNED_INT&&(ne=n.RGB32UI),G===n.BYTE&&(ne=n.RGB8I),G===n.SHORT&&(ne=n.RGB16I),G===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),G===n.UNSIGNED_INT&&(ne=n.RGBA32UI),G===n.BYTE&&(ne=n.RGBA8I),G===n.SHORT&&(ne=n.RGBA16I),G===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),S===n.RGBA){const Be=de?vo:dt.getTransfer(ae);G===n.FLOAT&&(ne=n.RGBA32F),G===n.HALF_FLOAT&&(ne=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ne=Be===_t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(E,S){let G;return E?S===null||S===xs||S===ea?G=n.DEPTH24_STENCIL8:S===In?G=n.DEPTH32F_STENCIL8:S===Qr&&(G=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xs||S===ea?G=n.DEPTH_COMPONENT24:S===In?G=n.DEPTH_COMPONENT32F:S===Qr&&(G=n.DEPTH_COMPONENT16),G}function k(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==An&&E.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function D(E){const S=E.target;S.removeEventListener("dispose",D),K(S),S.isVideoTexture&&u.delete(S)}function O(E){const S=E.target;S.removeEventListener("dispose",O),y(S)}function K(E){const S=i.get(E);if(S.__webglInit===void 0)return;const G=E.source,ae=h.get(G);if(ae){const de=ae[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&R(E),Object.keys(ae).length===0&&h.delete(G)}i.remove(E)}function R(E){const S=i.get(E);n.deleteTexture(S.__webglTexture);const G=E.source,ae=h.get(G);delete ae[S.__cacheKey],a.memory.textures--}function y(E){const S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let de=0;de<S.__webglFramebuffer[ae].length;de++)n.deleteFramebuffer(S.__webglFramebuffer[ae][de]);else n.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)n.deleteFramebuffer(S.__webglFramebuffer[ae]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=E.textures;for(let ae=0,de=G.length;ae<de;ae++){const ne=i.get(G[ae]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(G[ae])}i.remove(E)}let L=0;function X(){L=0}function se(){const E=L;return E>=s.maxTextures&&nt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function pe(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function ee(E,S){const G=i.get(E);if(E.isVideoTexture&&me(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&G.__version!==E.version){const ae=E.image;if(ae===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(G,E,S);return}}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function J(E,S){const G=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){re(G,E,S);return}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function oe(E,S){const G=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){re(G,E,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function Q(E,S){const G=i.get(E);if(E.version>0&&G.__version!==E.version){z(G,E,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const Me={[Jr]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},Te={[An]:n.NEAREST,[u_]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Oe={[d_]:n.NEVER,[v_]:n.ALWAYS,[p_]:n.LESS,[Cp]:n.LEQUAL,[m_]:n.EQUAL,[__]:n.GEQUAL,[g_]:n.GREATER,[x_]:n.NOTEQUAL};function He(E,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===rl||S.magFilter===Sa||S.magFilter===Yi||S.minFilter===Gt||S.minFilter===rl||S.minFilter===Sa||S.minFilter===Yi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Me[S.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Me[S.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Me[S.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Te[S.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Te[S.minFilter]),S.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===An||S.minFilter!==Sa&&S.minFilter!==Yi||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $e(E,S){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",D));const ae=S.source;let de=h.get(ae);de===void 0&&(de={},h.set(ae,de));const ne=pe(S);if(ne!==E.__cacheKey){de[ne]===void 0&&(de[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),de[ne].usedTimes++;const Be=de[E.__cacheKey];Be!==void 0&&(de[E.__cacheKey].usedTimes--,Be.usedTimes===0&&R(S)),E.__cacheKey=ne,E.__webglTexture=de[ne].texture}return G}function rt(E,S,G){return Math.floor(Math.floor(E/G)/S)}function it(E,S,G,ae){const ne=E.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,ae,S.data);else{ne.sort((Ee,we)=>Ee.start-we.start);let Be=0;for(let Ee=1;Ee<ne.length;Ee++){const we=ne[Be],Ne=ne[Ee],We=we.start+we.count,Le=rt(Ne.start,S.width,4),Ye=rt(we.start,S.width,4);Ne.start<=We+1&&Le===Ye&&rt(Ne.start+Ne.count-1,S.width,4)===Le?we.count=Math.max(we.count,Ne.start+Ne.count-we.start):(++Be,ne[Be]=Ne)}ne.length=Be+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ge=n.getParameter(n.UNPACK_SKIP_PIXELS),Ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ee=0,we=ne.length;Ee<we;Ee++){const Ne=ne[Ee],We=Math.floor(Ne.start/4),Le=Math.ceil(Ne.count/4),Ye=We%S.width,H=Math.floor(We/S.width),Ie=Le,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Ye,H,Ie,le,G,ae,S.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function re(E,S,G){let ae=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=n.TEXTURE_3D);const de=$e(E,S),ne=S.source;t.bindTexture(ae,E.__webglTexture,n.TEXTURE0+G);const Be=i.get(ne);if(ne.version!==Be.__version||de===!0){t.activeTexture(n.TEXTURE0+G);const Ae=dt.getPrimaries(dt.workingColorSpace),Ge=S.colorSpace===Xi?null:dt.getPrimaries(S.colorSpace),Ve=S.colorSpace===Xi||Ae===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Ee=v(S.image,!1,s.maxTextureSize);Ee=te(S,Ee);const we=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type);let We=b(S.internalFormat,we,Ne,S.colorSpace,S.isVideoTexture);He(ae,S);let Le;const Ye=S.mipmaps,H=S.isVideoTexture!==!0,Ie=Be.__version===void 0||de===!0,le=ne.dataReady,Pe=k(S,Ee);if(S.isDepthTexture)We=C(S.format===na,S.type),Ie&&(H?t.texStorage2D(n.TEXTURE_2D,1,We,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,We,Ee.width,Ee.height,0,we,Ne,null));else if(S.isDataTexture)if(Ye.length>0){H&&Ie&&t.texStorage2D(n.TEXTURE_2D,Pe,We,Ye[0].width,Ye[0].height);for(let Re=0,Se=Ye.length;Re<Se;Re++)Le=Ye[Re],H?le&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,Le.width,Le.height,we,Ne,Le.data):t.texImage2D(n.TEXTURE_2D,Re,We,Le.width,Le.height,0,we,Ne,Le.data);S.generateMipmaps=!1}else H?(Ie&&t.texStorage2D(n.TEXTURE_2D,Pe,We,Ee.width,Ee.height),le&&it(S,Ee,we,Ne)):t.texImage2D(n.TEXTURE_2D,0,We,Ee.width,Ee.height,0,we,Ne,Ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){H&&Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,We,Ye[0].width,Ye[0].height,Ee.depth);for(let Re=0,Se=Ye.length;Re<Se;Re++)if(Le=Ye[Re],S.format!==Xt)if(we!==null)if(H){if(le)if(S.layerUpdates.size>0){const qe=ch(Le.width,Le.height,S.format,S.type);for(const tt of S.layerUpdates){const Et=Le.data.subarray(tt*qe/Le.data.BYTES_PER_ELEMENT,(tt+1)*qe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,tt,Le.width,Le.height,1,we,Et)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,Le.width,Le.height,Ee.depth,we,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Re,We,Le.width,Le.height,Ee.depth,0,Le.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,Le.width,Le.height,Ee.depth,we,Ne,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Re,We,Le.width,Le.height,Ee.depth,0,we,Ne,Le.data)}else{H&&Ie&&t.texStorage2D(n.TEXTURE_2D,Pe,We,Ye[0].width,Ye[0].height);for(let Re=0,Se=Ye.length;Re<Se;Re++)Le=Ye[Re],S.format!==Xt?we!==null?H?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Re,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Re,We,Le.width,Le.height,0,Le.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?le&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,Le.width,Le.height,we,Ne,Le.data):t.texImage2D(n.TEXTURE_2D,Re,We,Le.width,Le.height,0,we,Ne,Le.data)}else if(S.isDataArrayTexture)if(H){if(Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,We,Ee.width,Ee.height,Ee.depth),le)if(S.layerUpdates.size>0){const Re=ch(Ee.width,Ee.height,S.format,S.type);for(const Se of S.layerUpdates){const qe=Ee.data.subarray(Se*Re/Ee.data.BYTES_PER_ELEMENT,(Se+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,Ee.width,Ee.height,1,we,Ne,qe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,we,Ne,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,Ee.width,Ee.height,Ee.depth,0,we,Ne,Ee.data);else if(S.isData3DTexture)H?(Ie&&t.texStorage3D(n.TEXTURE_3D,Pe,We,Ee.width,Ee.height,Ee.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,we,Ne,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,We,Ee.width,Ee.height,Ee.depth,0,we,Ne,Ee.data);else if(S.isFramebufferTexture){if(Ie)if(H)t.texStorage2D(n.TEXTURE_2D,Pe,We,Ee.width,Ee.height);else{let Re=Ee.width,Se=Ee.height;for(let qe=0;qe<Pe;qe++)t.texImage2D(n.TEXTURE_2D,qe,We,Re,Se,0,we,Ne,null),Re>>=1,Se>>=1}}else if(Ye.length>0){if(H&&Ie){const Re=ve(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Pe,We,Re.width,Re.height)}for(let Re=0,Se=Ye.length;Re<Se;Re++)Le=Ye[Re],H?le&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,we,Ne,Le):t.texImage2D(n.TEXTURE_2D,Re,We,we,Ne,Le);S.generateMipmaps=!1}else if(H){if(Ie){const Re=ve(Ee);t.texStorage2D(n.TEXTURE_2D,Pe,We,Re.width,Re.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ne,Ee)}else t.texImage2D(n.TEXTURE_2D,0,We,we,Ne,Ee);g(S)&&p(ae),Be.__version=ne.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function z(E,S,G){if(S.image.length!==6)return;const ae=$e(E,S),de=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+G);const ne=i.get(de);if(de.version!==ne.__version||ae===!0){t.activeTexture(n.TEXTURE0+G);const Be=dt.getPrimaries(dt.workingColorSpace),Ae=S.colorSpace===Xi?null:dt.getPrimaries(S.colorSpace),Ge=S.colorSpace===Xi||Be===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,we=[];for(let Se=0;Se<6;Se++)!Ve&&!Ee?we[Se]=v(S.image[Se],!0,s.maxCubemapSize):we[Se]=Ee?S.image[Se].image:S.image[Se],we[Se]=te(S,we[Se]);const Ne=we[0],We=r.convert(S.format,S.colorSpace),Le=r.convert(S.type),Ye=b(S.internalFormat,We,Le,S.colorSpace),H=S.isVideoTexture!==!0,Ie=ne.__version===void 0||ae===!0,le=de.dataReady;let Pe=k(S,Ne);He(n.TEXTURE_CUBE_MAP,S);let Re;if(Ve){H&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ye,Ne.width,Ne.height);for(let Se=0;Se<6;Se++){Re=we[Se].mipmaps;for(let qe=0;qe<Re.length;qe++){const tt=Re[qe];S.format!==Xt?We!==null?H?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,0,0,tt.width,tt.height,We,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,Ye,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,0,0,tt.width,tt.height,We,Le,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,Ye,tt.width,tt.height,0,We,Le,tt.data)}}}else{if(Re=S.mipmaps,H&&Ie){Re.length>0&&Pe++;const Se=ve(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ye,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ee){H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,we[Se].width,we[Se].height,We,Le,we[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ye,we[Se].width,we[Se].height,0,We,Le,we[Se].data);for(let qe=0;qe<Re.length;qe++){const Et=Re[qe].image[Se].image;H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,0,0,Et.width,Et.height,We,Le,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,Ye,Et.width,Et.height,0,We,Le,Et.data)}}else{H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,We,Le,we[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ye,We,Le,we[Se]);for(let qe=0;qe<Re.length;qe++){const tt=Re[qe];H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,0,0,We,Le,tt.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,Ye,We,Le,tt.image[Se])}}}g(S)&&p(n.TEXTURE_CUBE_MAP),ne.__version=de.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ue(E,S,G,ae,de,ne){const Be=r.convert(G.format,G.colorSpace),Ae=r.convert(G.type),Ge=b(G.internalFormat,Be,Ae,G.colorSpace),Ve=i.get(S),Ee=i.get(G);if(Ee.__renderTarget=S,!Ve.__hasExternalTextures){const we=Math.max(1,S.width>>ne),Ne=Math.max(1,S.height>>ne);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,ne,Ge,we,Ne,S.depth,0,Be,Ae,null):t.texImage2D(de,ne,Ge,we,Ne,0,Be,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),$(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,de,Ee.__webglTexture,0,ce(S)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,de,Ee.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(E,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,E),S.depthBuffer){const ae=S.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,ne=C(S.stencilBuffer,de),Be=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=ce(S);$(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ne,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,E)}else{const ae=S.textures;for(let de=0;de<ae.length;de++){const ne=ae[de],Be=r.convert(ne.format,ne.colorSpace),Ae=r.convert(ne.type),Ge=b(ne.internalFormat,Be,Ae,ne.colorSpace),Ve=ce(S);G&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ge,S.width,S.height):$(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(S.depthTexture);ae.__renderTarget=S,(!ae.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const de=ae.__webglTexture,ne=ce(S);if(S.depthTexture.format===ta)$(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(S.depthTexture.format===na)$(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function De(E){const S=i.get(E),G=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const ae=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){const de=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),S.__depthDisposeCallback=de}S.__boundDepthTexture=ae}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ae=E.texture.mipmaps;ae&&ae.length>0?_e(S.__webglFramebuffer[0],E):_e(S.__webglFramebuffer,E)}else if(G){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=n.createRenderbuffer(),ge(S.__webglDepthbuffer[ae],E,!1);else{const de=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ne)}}else{const ae=E.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ge(S.__webglDepthbuffer,E,!1);else{const de=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(E,S,G){const ae=i.get(E);S!==void 0&&ue(ae.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&De(E)}function U(E){const S=E.texture,G=i.get(E),ae=i.get(S);E.addEventListener("dispose",O);const de=E.textures,ne=E.isWebGLCubeRenderTarget===!0,Be=de.length>1;if(Be||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=S.version,a.memory.textures++),ne){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Ge=0;Ge<S.mipmaps.length;Ge++)G.__webglFramebuffer[Ae][Ge]=n.createFramebuffer()}else G.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Be)for(let Ae=0,Ge=de.length;Ae<Ge;Ae++){const Ve=i.get(de[Ae]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&$(E)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<de.length;Ae++){const Ge=de[Ae];G.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const Ve=r.convert(Ge.format,Ge.colorSpace),Ee=r.convert(Ge.type),we=b(Ge.internalFormat,Ve,Ee,Ge.colorSpace,E.isXRRenderTarget===!0),Ne=ce(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,we,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),He(n.TEXTURE_CUBE_MAP,S);for(let Ae=0;Ae<6;Ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ge=0;Ge<S.mipmaps.length;Ge++)ue(G.__webglFramebuffer[Ae][Ge],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ge);else ue(G.__webglFramebuffer[Ae],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);g(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Ae=0,Ge=de.length;Ae<Ge;Ae++){const Ve=de[Ae],Ee=i.get(Ve);let we=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(we=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,Ee.__webglTexture),He(we,Ve),ue(G.__webglFramebuffer,E,Ve,n.COLOR_ATTACHMENT0+Ae,we,0),g(Ve)&&p(we)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ae.__webglTexture),He(Ae,S),S.mipmaps&&S.mipmaps.length>0)for(let Ge=0;Ge<S.mipmaps.length;Ge++)ue(G.__webglFramebuffer[Ge],E,S,n.COLOR_ATTACHMENT0,Ae,Ge);else ue(G.__webglFramebuffer,E,S,n.COLOR_ATTACHMENT0,Ae,0);g(S)&&p(Ae),t.unbindTexture()}E.depthBuffer&&De(E)}function Y(E){const S=E.textures;for(let G=0,ae=S.length;G<ae;G++){const de=S[G];if(g(de)){const ne=M(E),Be=i.get(de).__webglTexture;t.bindTexture(ne,Be),p(ne),t.unbindTexture()}}}const w=[],V=[];function W(E){if(E.samples>0){if($(E)===!1){const S=E.textures,G=E.width,ae=E.height;let de=n.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(E),Ae=S.length>1;if(Ae)for(let Ve=0;Ve<S.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ge=E.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ve=0;Ve<S.length;Ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Ee=i.get(S[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,G,ae,0,0,G,ae,de,n.NEAREST),l===!0&&(w.length=0,V.length=0,w.push(n.COLOR_ATTACHMENT0+Ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(w.push(ne),V.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ve=0;Ve<S.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Ee=i.get(S[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const S=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ce(E){return Math.min(s.maxSamples,E.samples)}function $(E){const S=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function me(E){const S=a.render.frame;u.get(E)!==S&&(u.set(E,S),E.update())}function te(E,S){const G=E.colorSpace,ae=E.format,de=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==Mn&&G!==Xi&&(dt.getTransfer(G)===_t?(ae!==Xt||de!==oi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",G)),S}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=se,this.resetTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=oe,this.setTextureCube=Q,this.rebindTextures=I,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=$}function sE(n,e){function t(i,s=Xi){let r;const a=dt.getTransfer(s);if(i===oi)return n.UNSIGNED_BYTE;if(i===Mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sp)return n.BYTE;if(i===bp)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===yu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Wt)return n.HALF_FLOAT;if(i===Ep)return n.ALPHA;if(i===Tp)return n.RGB;if(i===Xt)return n.RGBA;if(i===ta)return n.DEPTH_COMPONENT;if(i===na)return n.DEPTH_STENCIL;if(i===Ys)return n.RED;if(i===Tu)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Au)return n.RGBA_INTEGER;if(i===no||i===io||i===so||i===ro)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===xc||i===_c||i===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===bc||i===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sc||i===bc)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Dc||i===Lc||i===Ic||i===Uc||i===Nc||i===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oc||i===Bc||i===kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Oc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zc||i===Vc||i===Hc||i===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
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

}`;class oE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Wp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yt({vertexShader:rE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lE extends Ss{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const v=typeof XRWebGLBinding<"u",g=new oE,p={},M=t.getContextAttributes();let b=null,C=null;const k=[],D=[],O=new Xe;let K=null;const R=new mn;R.viewport=new yt;const y=new mn;y.viewport=new yt;const L=[R,y],X=new Ev;let se=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let z=k[re];return z===void 0&&(z=new Al,k[re]=z),z.getTargetRaySpace()},this.getControllerGrip=function(re){let z=k[re];return z===void 0&&(z=new Al,k[re]=z),z.getGripSpace()},this.getHand=function(re){let z=k[re];return z===void 0&&(z=new Al,k[re]=z),z.getHandSpace()};function ee(re){const z=D.indexOf(re.inputSource);if(z===-1)return;const ue=k[z];ue!==void 0&&(ue.update(re.inputSource,re.frame,c||a),ue.dispatchEvent({type:re.type,data:re.inputSource}))}function J(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",oe);for(let re=0;re<k.length;re++){const z=D[re];z!==null&&(D[re]=null,k[re].disconnect(z))}se=null,pe=null,g.reset();for(const re in p)delete p[re];e.setRenderTarget(b),d=null,h=null,f=null,s=null,C=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(K),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",J),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(O),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ge=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?na:ta,ge=M.stencil?ea:xs);const De={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(De),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new rn(h.textureWidth,h.textureHeight,{format:Xt,type:oi,depthTexture:new Gp(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),C=new rn(d.framebufferWidth,d.framebufferHeight,{format:Xt,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(re){for(let z=0;z<re.removed.length;z++){const ue=re.removed[z],ge=D.indexOf(ue);ge>=0&&(D[ge]=null,k[ge].disconnect(ue))}for(let z=0;z<re.added.length;z++){const ue=re.added[z];let ge=D.indexOf(ue);if(ge===-1){for(let De=0;De<k.length;De++)if(De>=D.length){D.push(ue),ge=De;break}else if(D[De]===null){D[De]=ue,ge=De;break}if(ge===-1)break}const _e=k[ge];_e&&_e.connect(ue)}}const Q=new Z,Me=new Z;function Te(re,z,ue){Q.setFromMatrixPosition(z.matrixWorld),Me.setFromMatrixPosition(ue.matrixWorld);const ge=Q.distanceTo(Me),_e=z.projectionMatrix.elements,De=ue.projectionMatrix.elements,I=_e[14]/(_e[10]-1),U=_e[14]/(_e[10]+1),Y=(_e[9]+1)/_e[5],w=(_e[9]-1)/_e[5],V=(_e[8]-1)/_e[0],W=(De[8]+1)/De[0],ce=I*V,$=I*W,me=ge/(-V+W),te=me*-V;if(z.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(te),re.translateZ(me),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),_e[10]===-1)re.projectionMatrix.copy(z.projectionMatrix),re.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const ve=I+me,E=U+me,S=ce-te,G=$+(ge-te),ae=Y*U/E*ve,de=w*U/E*ve;re.projectionMatrix.makePerspective(S,G,ae,de,ve,E),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Oe(re,z){z===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(z.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let z=re.near,ue=re.far;g.texture!==null&&(g.depthNear>0&&(z=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),X.near=y.near=R.near=z,X.far=y.far=R.far=ue,(se!==X.near||pe!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),se=X.near,pe=X.far),X.layers.mask=re.layers.mask|6,R.layers.mask=X.layers.mask&3,y.layers.mask=X.layers.mask&5;const ge=re.parent,_e=X.cameras;Oe(X,ge);for(let De=0;De<_e.length;De++)Oe(_e[De],ge);_e.length===2?Te(X,R,y):X.projectionMatrix.copy(R.projectionMatrix),He(re,X,ge)};function He(re,z,ue){ue===null?re.matrix.copy(z.matrixWorld):(re.matrix.copy(ue.matrixWorld),re.matrix.invert(),re.matrix.multiply(z.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(z.projectionMatrix),re.projectionMatrixInverse.copy(z.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=yo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(re){return p[re]};let $e=null;function rt(re,z){if(u=z.getViewerPose(c||a),_=z,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(C,d.framebuffer),e.setRenderTarget(C));let ge=!1;ue.length!==X.cameras.length&&(X.cameras.length=0,ge=!0);for(let U=0;U<ue.length;U++){const Y=ue[U];let w=null;if(d!==null)w=d.getViewport(Y);else{const W=f.getViewSubImage(h,Y);w=W.viewport,U===0&&(e.setRenderTargetTextures(C,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(C))}let V=L[U];V===void 0&&(V=new mn,V.layers.enable(U),V.viewport=new yt,L[U]=V),V.matrix.fromArray(Y.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Y.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(w.x,w.y,w.width,w.height),U===0&&(X.matrix.copy(V.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ge===!0&&X.cameras.push(V)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const U=f.getDepthInformation(ue[0]);U&&U.isValid&&U.texture&&g.init(U,s.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<ue.length;U++){const Y=ue[U].camera;if(Y){let w=p[Y];w||(w=new Wp,p[Y]=w);const V=f.getCameraImage(Y);w.sourceTexture=V}}}}for(let ue=0;ue<k.length;ue++){const ge=D[ue],_e=k[ue];ge!==null&&_e!==void 0&&_e.update(ge,z,c||a)}$e&&$e(re,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),_=null}const it=new qp;it.setAnimationLoop(rt),this.setAnimationLoop=function(re){$e=re},this.dispose=function(){}}}const cs=new li,cE=new Mt;function uE(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Np(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,b,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,C)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===gn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===gn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,C=M.envMapRotation;b&&(g.envMap.value=b,cs.copy(C),cs.x*=-1,cs.y*=-1,cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),g.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(cs)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const C=b.program;i.uniformBlockBinding(M,C)}function c(M,b){let C=s[M.id];C===void 0&&(_(M),C=u(M),s[M.id]=C,M.addEventListener("dispose",g));const k=b.program;i.updateUBOMapping(M,k);const D=e.render.frame;r[M.id]!==D&&(h(M),r[M.id]=D)}function u(M){const b=f();M.__bindingPointIndex=b;const C=n.createBuffer(),k=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,k,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,C),C}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=s[M.id],C=M.uniforms,k=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,O=C.length;D<O;D++){const K=Array.isArray(C[D])?C[D]:[C[D]];for(let R=0,y=K.length;R<y;R++){const L=K[R];if(d(L,D,R,k)===!0){const X=L.__offset,se=Array.isArray(L.value)?L.value:[L.value];let pe=0;for(let ee=0;ee<se.length;ee++){const J=se[ee],oe=v(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,X+pe,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,pe),pe+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,C,k){const D=M.value,O=b+"_"+C;if(k[O]===void 0)return typeof D=="number"||typeof D=="boolean"?k[O]=D:k[O]=D.clone(),!0;{const K=k[O];if(typeof D=="number"||typeof D=="boolean"){if(K!==D)return k[O]=D,!0}else if(K.equals(D)===!1)return K.copy(D),!0}return!1}function _(M){const b=M.uniforms;let C=0;const k=16;for(let O=0,K=b.length;O<K;O++){const R=Array.isArray(b[O])?b[O]:[b[O]];for(let y=0,L=R.length;y<L;y++){const X=R[y],se=Array.isArray(X.value)?X.value:[X.value];for(let pe=0,ee=se.length;pe<ee;pe++){const J=se[pe],oe=v(J),Q=C%k,Me=Q%oe.boundary,Te=Q+Me;C+=Me,Te!==0&&k-Te<oe.storage&&(C+=k-Te),X.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=C,C+=oe.storage}}}const D=C%k;return D>0&&(C+=k-D),M.__size=C,M.__cache={},this}function v(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){const b=M.target;b.removeEventListener("dispose",g);const C=a.indexOf(b.__bindingPointIndex);a.splice(C,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const hE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let bi=null;function dE(){return bi===null&&(bi=new Vp(hE,32,32,Wi,Wt),bi.minFilter=Gt,bi.magFilter=Gt,bi.wrapS=cn,bi.wrapT=cn,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class pE{constructor(e={}){const{canvas:t=b_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const _=new Set([Au,wu,Tu]),v=new Set([oi,xs,Qr,ea,Mu,Eu]),g=new Uint32Array(4),p=new Int32Array(4);let M=null,b=null;const C=[],k=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=yn;let K=0,R=0,y=null,L=-1,X=null;const se=new yt,pe=new yt;let ee=null;const J=new Qe(0);let oe=0,Q=t.width,Me=t.height,Te=1,Oe=null,He=null;const $e=new yt(0,0,Q,Me),rt=new yt(0,0,Q,Me);let it=!1;const re=new Pu;let z=!1,ue=!1;const ge=new Mt,_e=new Z,De=new yt,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function Y(){return y===null?Te:1}let w=i;function V(x,P){return t.getContext(x,P)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",qe,!1),w===null){const P="webgl2";if(w=V(P,x),w===null)throw V(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw x("WebGLRenderer: "+x.message),x}let W,ce,$,me,te,ve,E,S,G,ae,de,ne,Be,Ae,Ge,Ve,Ee,we,Ne,We,Le,Ye,H,Ie;function le(){W=new yy(w),W.init(),Ye=new sE(w,W),ce=new dy(w,W,e,Ye),$=new nE(w,W),ce.reversedDepthBuffer&&h&&$.buffers.depth.setReversed(!0),me=new Ty(w),te=new GM,ve=new iE(w,W,$,te,ce,Ye,me),E=new my(D),S=new by(D),G=new Rv(w),H=new fy(w,G),ae=new My(w,G,me,H),de=new Ay(w,ae,G,me),Ne=new wy(w,ce,ve),Ve=new py(te),ne=new HM(D,E,S,W,ce,H,Ve),Be=new uE(D,te),Ae=new XM,Ge=new $M(W),we=new uy(D,E,S,$,de,d,l),Ee=new eE(D,de,ce),Ie=new fE(w,me,ce,$),We=new hy(w,W,me),Le=new Ey(w,W,me),me.programs=ne.programs,D.capabilities=ce,D.extensions=W,D.properties=te,D.renderLists=Ae,D.shadowMap=Ee,D.state=$,D.info=me}le();const Pe=new lE(D,w);this.xr=Pe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=W.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=W.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(x){x!==void 0&&(Te=x,this.setSize(Q,Me,!1))},this.getSize=function(x){return x.set(Q,Me)},this.setSize=function(x,P,B=!0){if(Pe.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=x,Me=P,t.width=Math.floor(x*Te),t.height=Math.floor(P*Te),B===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Q*Te,Me*Te).floor()},this.setDrawingBufferSize=function(x,P,B){Q=x,Me=P,Te=B,t.width=Math.floor(x*B),t.height=Math.floor(P*B),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(se)},this.getViewport=function(x){return x.copy($e)},this.setViewport=function(x,P,B,A){x.isVector4?$e.set(x.x,x.y,x.z,x.w):$e.set(x,P,B,A),$.viewport(se.copy($e).multiplyScalar(Te).round())},this.getScissor=function(x){return x.copy(rt)},this.setScissor=function(x,P,B,A){x.isVector4?rt.set(x.x,x.y,x.z,x.w):rt.set(x,P,B,A),$.scissor(pe.copy(rt).multiplyScalar(Te).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(x){$.setScissorTest(it=x)},this.setOpaqueSort=function(x){Oe=x},this.setTransparentSort=function(x){He=x},this.getClearColor=function(x){return x.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,B=!0){let A=0;if(x){let N=!1;if(y!==null){const q=y.texture.format;N=_.has(q)}if(N){const q=y.texture.type,j=v.has(q),ie=we.getClearColor(),fe=we.getClearAlpha(),he=ie.r,xe=ie.g,be=ie.b;j?(g[0]=he,g[1]=xe,g[2]=be,g[3]=fe,w.clearBufferuiv(w.COLOR,0,g)):(p[0]=he,p[1]=xe,p[2]=be,p[3]=fe,w.clearBufferiv(w.COLOR,0,p))}else A|=w.COLOR_BUFFER_BIT}P&&(A|=w.DEPTH_BUFFER_BIT),B&&(A|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),we.dispose(),Ae.dispose(),Ge.dispose(),te.dispose(),E.dispose(),S.dispose(),de.dispose(),H.dispose(),Ie.dispose(),ne.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ha),Pe.removeEventListener("sessionend",da),ui.stop()};function Re(x){x.preventDefault(),bo("WebGLRenderer: Context Lost."),O=!0}function Se(){bo("WebGLRenderer: Context Restored."),O=!1;const x=me.autoReset,P=Ee.enabled,B=Ee.autoUpdate,A=Ee.needsUpdate,N=Ee.type;le(),me.autoReset=x,Ee.enabled=P,Ee.autoUpdate=B,Ee.needsUpdate=A,Ee.type=N}function qe(x){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function tt(x){const P=x.target;P.removeEventListener("dispose",tt),Et(P)}function Et(x){pt(x),te.remove(x)}function pt(x){const P=te.get(x).programs;P!==void 0&&(P.forEach(function(B){ne.releaseProgram(B)}),x.isShaderMaterial&&ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,B,A,N,q){P===null&&(P=I);const j=N.isMesh&&N.matrixWorld.determinant()<0,ie=Ho(x,P,B,A,N);$.setMaterial(A,j);let fe=B.index,he=1;if(A.wireframe===!0){if(fe=ae.getWireframeAttribute(B),fe===void 0)return;he=2}const xe=B.drawRange,be=B.attributes.position;let ye=xe.start*he,Ce=(xe.start+xe.count)*he;q!==null&&(ye=Math.max(ye,q.start*he),Ce=Math.min(Ce,(q.start+q.count)*he)),fe!==null?(ye=Math.max(ye,0),Ce=Math.min(Ce,fe.count)):be!=null&&(ye=Math.max(ye,0),Ce=Math.min(Ce,be.count));const ke=Ce-ye;if(ke<0||ke===1/0)return;H.setup(N,A,ie,B,fe);let Ke,Ze=We;if(fe!==null&&(Ke=G.get(fe),Ze=Le,Ze.setIndex(Ke)),N.isMesh)A.wireframe===!0?($.setLineWidth(A.wireframeLinewidth*Y()),Ze.setMode(w.LINES)):Ze.setMode(w.TRIANGLES);else if(N.isLine){let ze=A.linewidth;ze===void 0&&(ze=1),$.setLineWidth(ze*Y()),N.isLineSegments?Ze.setMode(w.LINES):N.isLineLoop?Ze.setMode(w.LINE_LOOP):Ze.setMode(w.LINE_STRIP)}else N.isPoints?Ze.setMode(w.POINTS):N.isSprite&&Ze.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)sa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ze=N._multiDrawStarts,Je=N._multiDrawCounts,Ue=N._multiDrawCount,ht=fe?G.get(fe).bytesPerElement:1,Ct=te.get(A).currentProgram.getUniforms();for(let ut=0;ut<Ue;ut++)Ct.setValue(w,"_gl_DrawID",ut),Ze.render(ze[ut]/ht,Je[ut])}else if(N.isInstancedMesh)Ze.renderInstances(ye,ke,N.count);else if(B.isInstancedBufferGeometry){const ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Je=Math.min(B.instanceCount,ze);Ze.renderInstances(ye,ke,Je)}else Ze.render(ye,ke)};function Cn(x,P,B){x.transparent===!0&&x.side===Tn&&x.forceSinglePass===!1?(x.side=gn,x.needsUpdate=!0,ys(x,P,B),x.side=Ji,x.needsUpdate=!0,ys(x,P,B),x.side=Tn):ys(x,P,B)}this.compile=function(x,P,B=null){B===null&&(B=x),b=Ge.get(B),b.init(P),k.push(b),B.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(b.pushLight(N),N.castShadow&&b.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(b.pushLight(N),N.castShadow&&b.pushShadow(N))}),b.setupLights();const A=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const q=N.material;if(q)if(Array.isArray(q))for(let j=0;j<q.length;j++){const ie=q[j];Cn(ie,B,N),A.add(ie)}else Cn(q,B,N),A.add(q)}),b=k.pop(),A},this.compileAsync=function(x,P,B=null){const A=this.compile(x,P,B);return new Promise(N=>{function q(){if(A.forEach(function(j){te.get(j).currentProgram.isReady()&&A.delete(j)}),A.size===0){N(x);return}setTimeout(q,10)}W.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let _n=null;function Vo(x){_n&&_n(x)}function ha(){ui.stop()}function da(){ui.start()}const ui=new qp;ui.setAnimationLoop(Vo),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(x){_n=x,Pe.setAnimationLoop(x),x===null?ui.stop():ui.start()},Pe.addEventListener("sessionstart",ha),Pe.addEventListener("sessionend",da),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(P),P=Pe.getCamera()),x.isScene===!0&&x.onBeforeRender(D,x,P,y),b=Ge.get(x,k.length),b.init(P),k.push(b),ge.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),re.setFromProjectionMatrix(ge,ei,P.reversedDepth),ue=this.localClippingEnabled,z=Ve.init(this.clippingPlanes,ue),M=Ae.get(x,C.length),M.init(),C.push(M),Pe.enabled===!0&&Pe.isPresenting===!0){const q=D.xr.getDepthSensingMesh();q!==null&&pr(q,P,-1/0,D.sortObjects)}pr(x,P,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Oe,He),U=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,U&&we.addToRenderList(M,x),this.info.render.frame++,z===!0&&Ve.beginShadows();const B=b.state.shadowsArray;Ee.render(B,x,P),z===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const A=M.opaque,N=M.transmissive;if(b.setupLights(),P.isArrayCamera){const q=P.cameras;if(N.length>0)for(let j=0,ie=q.length;j<ie;j++){const fe=q[j];pa(A,N,x,fe)}U&&we.render(x);for(let j=0,ie=q.length;j<ie;j++){const fe=q[j];mr(M,x,fe,fe.viewport)}}else N.length>0&&pa(A,N,x,P),U&&we.render(x),mr(M,x,P);y!==null&&R===0&&(ve.updateMultisampleRenderTarget(y),ve.updateRenderTargetMipmap(y)),x.isScene===!0&&x.onAfterRender(D,x,P),H.resetDefaultState(),L=-1,X=null,k.pop(),k.length>0?(b=k[k.length-1],z===!0&&Ve.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?M=C[C.length-1]:M=null};function pr(x,P,B,A){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||re.intersectsSprite(x)){A&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);const j=de.update(x),ie=x.material;ie.visible&&M.push(x,j,ie,B,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||re.intersectsObject(x))){const j=de.update(x),ie=x.material;if(A&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),De.copy(j.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(ie)){const fe=j.groups;for(let he=0,xe=fe.length;he<xe;he++){const be=fe[he],ye=ie[be.materialIndex];ye&&ye.visible&&M.push(x,j,ye,B,De.z,be)}}else ie.visible&&M.push(x,j,ie,B,De.z,null)}}const q=x.children;for(let j=0,ie=q.length;j<ie;j++)pr(q[j],P,B,A)}function mr(x,P,B,A){const{opaque:N,transmissive:q,transparent:j}=x;b.setupLightsView(B),z===!0&&Ve.setGlobalState(D.clippingPlanes,B),A&&$.viewport(se.copy(A)),N.length>0&&bs(N,P,B),q.length>0&&bs(q,P,B),j.length>0&&bs(j,P,B),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function pa(x,P,B,A){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[A.id]===void 0&&(b.state.transmissionRenderTarget[A.id]=new rn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Wt:oi,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const q=b.state.transmissionRenderTarget[A.id],j=A.viewport||se;q.setSize(j.z*D.transmissionResolutionScale,j.w*D.transmissionResolutionScale);const ie=D.getRenderTarget(),fe=D.getActiveCubeFace(),he=D.getActiveMipmapLevel();D.setRenderTarget(q),D.getClearColor(J),oe=D.getClearAlpha(),oe<1&&D.setClearColor(16777215,.5),D.clear(),U&&we.render(B);const xe=D.toneMapping;D.toneMapping=Ki;const be=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),b.setupLightsView(A),z===!0&&Ve.setGlobalState(D.clippingPlanes,A),bs(x,B,A),ve.updateMultisampleRenderTarget(q),ve.updateRenderTargetMipmap(q),W.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ce=0,ke=P.length;Ce<ke;Ce++){const Ke=P[Ce],{object:Ze,geometry:ze,material:Je,group:Ue}=Ke;if(Je.side===Tn&&Ze.layers.test(A.layers)){const ht=Je.side;Je.side=gn,Je.needsUpdate=!0,ma(Ze,B,A,ze,Je,Ue),Je.side=ht,Je.needsUpdate=!0,ye=!0}}ye===!0&&(ve.updateMultisampleRenderTarget(q),ve.updateRenderTargetMipmap(q))}D.setRenderTarget(ie,fe,he),D.setClearColor(J,oe),be!==void 0&&(A.viewport=be),D.toneMapping=xe}function bs(x,P,B){const A=P.isScene===!0?P.overrideMaterial:null;for(let N=0,q=x.length;N<q;N++){const j=x[N],{object:ie,geometry:fe,group:he}=j;let xe=j.material;xe.allowOverride===!0&&A!==null&&(xe=A),ie.layers.test(B.layers)&&ma(ie,P,B,fe,xe,he)}}function ma(x,P,B,A,N,q){x.onBeforeRender(D,P,B,A,N,q),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(D,P,B,A,x,q),N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=gn,N.needsUpdate=!0,D.renderBufferDirect(B,P,A,N,x,q),N.side=Ji,N.needsUpdate=!0,D.renderBufferDirect(B,P,A,N,x,q),N.side=Tn):D.renderBufferDirect(B,P,A,N,x,q),x.onAfterRender(D,P,B,A,N,q)}function ys(x,P,B){P.isScene!==!0&&(P=I);const A=te.get(x),N=b.state.lights,q=b.state.shadowsArray,j=N.state.version,ie=ne.getParameters(x,N.state,q,P,B),fe=ne.getProgramCacheKey(ie);let he=A.programs;A.environment=x.isMeshStandardMaterial?P.environment:null,A.fog=P.fog,A.envMap=(x.isMeshStandardMaterial?S:E).get(x.envMap||A.environment),A.envMapRotation=A.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,he===void 0&&(x.addEventListener("dispose",tt),he=new Map,A.programs=he);let xe=he.get(fe);if(xe!==void 0){if(A.currentProgram===xe&&A.lightsStateVersion===j)return xr(x,ie),xe}else ie.uniforms=ne.getUniforms(x),x.onBeforeCompile(ie,D),xe=ne.acquireProgram(ie,fe),he.set(fe,xe),A.uniforms=ie.uniforms;const be=A.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=Ve.uniform),xr(x,ie),A.needsLights=Xn(x),A.lightsStateVersion=j,A.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),A.currentProgram=xe,A.uniformsList=null,xe}function gr(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=oo.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function xr(x,P){const B=te.get(x);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function Ho(x,P,B,A,N){P.isScene!==!0&&(P=I),ve.resetTextureUnits();const q=P.fog,j=A.isMeshStandardMaterial?P.environment:null,ie=y===null?D.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Mn,fe=(A.isMeshStandardMaterial?S:E).get(A.envMap||j),he=A.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,xe=!!B.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),be=!!B.morphAttributes.position,ye=!!B.morphAttributes.normal,Ce=!!B.morphAttributes.color;let ke=Ki;A.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ke=D.toneMapping);const Ke=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=Ke!==void 0?Ke.length:0,ze=te.get(A),Je=b.state.lights;if(z===!0&&(ue===!0||x!==X)){const wt=x===X&&A.id===L;Ve.setState(A,x,wt)}let Ue=!1;A.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Je.state.version||ze.outputColorSpace!==ie||N.isBatchedMesh&&ze.batching===!1||!N.isBatchedMesh&&ze.batching===!0||N.isBatchedMesh&&ze.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ze.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ze.instancing===!1||!N.isInstancedMesh&&ze.instancing===!0||N.isSkinnedMesh&&ze.skinning===!1||!N.isSkinnedMesh&&ze.skinning===!0||N.isInstancedMesh&&ze.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ze.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ze.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ze.instancingMorph===!1&&N.morphTexture!==null||ze.envMap!==fe||A.fog===!0&&ze.fog!==q||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ve.numPlanes||ze.numIntersection!==Ve.numIntersection)||ze.vertexAlphas!==he||ze.vertexTangents!==xe||ze.morphTargets!==be||ze.morphNormals!==ye||ze.morphColors!==Ce||ze.toneMapping!==ke||ze.morphTargetsCount!==Ze)&&(Ue=!0):(Ue=!0,ze.__version=A.version);let ht=ze.currentProgram;Ue===!0&&(ht=ys(A,P,N));let Ct=!1,ut=!1,lt=!1;const et=ht.getUniforms(),Pt=ze.uniforms;if($.useProgram(ht.program)&&(Ct=!0,ut=!0,lt=!0),A.id!==L&&(L=A.id,ut=!0),Ct||X!==x){$.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),et.setValue(w,"projectionMatrix",x.projectionMatrix),et.setValue(w,"viewMatrix",x.matrixWorldInverse);const Ft=et.map.cameraPosition;Ft!==void 0&&Ft.setValue(w,_e.setFromMatrixPosition(x.matrixWorld)),ce.logarithmicDepthBuffer&&et.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&et.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),X!==x&&(X=x,ut=!0,lt=!0)}if(N.isSkinnedMesh){et.setOptional(w,N,"bindMatrix"),et.setOptional(w,N,"bindMatrixInverse");const wt=N.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),et.setValue(w,"boneTexture",wt.boneTexture,ve))}N.isBatchedMesh&&(et.setOptional(w,N,"batchingTexture"),et.setValue(w,"batchingTexture",N._matricesTexture,ve),et.setOptional(w,N,"batchingIdTexture"),et.setValue(w,"batchingIdTexture",N._indirectTexture,ve),et.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&et.setValue(w,"batchingColorTexture",N._colorsTexture,ve));const Vt=B.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&Ne.update(N,B,ht),(ut||ze.receiveShadow!==N.receiveShadow)&&(ze.receiveShadow=N.receiveShadow,et.setValue(w,"receiveShadow",N.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Pt.envMap.value=fe,Pt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&P.environment!==null&&(Pt.envMapIntensity.value=P.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=dE()),ut&&(et.setValue(w,"toneMappingExposure",D.toneMappingExposure),ze.needsLights&&fi(Pt,lt),q&&A.fog===!0&&Be.refreshFogUniforms(Pt,q),Be.refreshMaterialUniforms(Pt,A,Te,Me,b.state.transmissionRenderTarget[x.id]),oo.upload(w,gr(ze),Pt,ve)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(oo.upload(w,gr(ze),Pt,ve),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&et.setValue(w,"center",N.center),et.setValue(w,"modelViewMatrix",N.modelViewMatrix),et.setValue(w,"normalMatrix",N.normalMatrix),et.setValue(w,"modelMatrix",N.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const wt=A.uniformsGroups;for(let Ft=0,Go=wt.length;Ft<Go;Ft++){const ts=wt[Ft];Ie.update(ts,ht),Ie.bind(ts,ht)}}return ht}function fi(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Xn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(x,P,B){const A=te.get(x);A.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,A.__autoAllocateDepthBuffer===!1&&(A.__useRenderToTexture=!1),te.get(x.texture).__webglTexture=P,te.get(x.depthTexture).__webglTexture=A.__autoAllocateDepthBuffer?void 0:B,A.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){const B=te.get(x);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0};const m=w.createFramebuffer();this.setRenderTarget=function(x,P=0,B=0){y=x,K=P,R=B;let A=!0,N=null,q=!1,j=!1;if(x){const fe=te.get(x);if(fe.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(w.FRAMEBUFFER,null),A=!1;else if(fe.__webglFramebuffer===void 0)ve.setupRenderTarget(x);else if(fe.__hasExternalTextures)ve.rebindTextures(x,te.get(x.texture).__webglTexture,te.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(fe.__boundDepthTexture!==be){if(be!==null&&te.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(x)}}const he=x.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(j=!0);const xe=te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(xe[P])?N=xe[P][B]:N=xe[P],q=!0):x.samples>0&&ve.useMultisampledRTT(x)===!1?N=te.get(x).__webglMultisampledFramebuffer:Array.isArray(xe)?N=xe[B]:N=xe,se.copy(x.viewport),pe.copy(x.scissor),ee=x.scissorTest}else se.copy($e).multiplyScalar(Te).floor(),pe.copy(rt).multiplyScalar(Te).floor(),ee=it;if(B!==0&&(N=m),$.bindFramebuffer(w.FRAMEBUFFER,N)&&A&&$.drawBuffers(x,N),$.viewport(se),$.scissor(pe),$.setScissorTest(ee),q){const fe=te.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,B)}else if(j){const fe=P;for(let he=0;he<x.textures.length;he++){const xe=te.get(x.textures[he]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+he,xe.__webglTexture,B,fe)}}else if(x!==null&&B!==0){const fe=te.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,fe.__webglTexture,B)}L=-1},this.readRenderTargetPixels=function(x,P,B,A,N,q,j,ie=0){if(!(x&&x.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&j!==void 0&&(fe=fe[j]),fe){$.bindFramebuffer(w.FRAMEBUFFER,fe);try{const he=x.textures[ie],xe=he.format,be=he.type;if(!ce.textureFormatReadable(xe)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(be)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-A&&B>=0&&B<=x.height-N&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ie),w.readPixels(P,B,A,N,Ye.convert(xe),Ye.convert(be),q))}finally{const he=y!==null?te.get(y).__webglFramebuffer:null;$.bindFramebuffer(w.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(x,P,B,A,N,q,j,ie=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&j!==void 0&&(fe=fe[j]),fe)if(P>=0&&P<=x.width-A&&B>=0&&B<=x.height-N){$.bindFramebuffer(w.FRAMEBUFFER,fe);const he=x.textures[ie],xe=he.format,be=he.type;if(!ce.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.bufferData(w.PIXEL_PACK_BUFFER,q.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ie),w.readPixels(P,B,A,N,Ye.convert(xe),Ye.convert(be),0);const Ce=y!==null?te.get(y).__webglFramebuffer:null;$.bindFramebuffer(w.FRAMEBUFFER,Ce);const ke=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await y_(w,ke,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,q),w.deleteBuffer(ye),w.deleteSync(ke),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,B=0){const A=Math.pow(2,-B),N=Math.floor(x.image.width*A),q=Math.floor(x.image.height*A),j=P!==null?P.x:0,ie=P!==null?P.y:0;ve.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,j,ie,N,q),$.unbindTexture()};const T=w.createFramebuffer(),F=w.createFramebuffer();this.copyTextureToTexture=function(x,P,B=null,A=null,N=0,q=null){q===null&&(N!==0?(sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=N,N=0):q=0);let j,ie,fe,he,xe,be,ye,Ce,ke;const Ke=x.isCompressedTexture?x.mipmaps[q]:x.image;if(B!==null)j=B.max.x-B.min.x,ie=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,he=B.min.x,xe=B.min.y,be=B.isBox3?B.min.z:0;else{const Vt=Math.pow(2,-N);j=Math.floor(Ke.width*Vt),ie=Math.floor(Ke.height*Vt),x.isDataArrayTexture?fe=Ke.depth:x.isData3DTexture?fe=Math.floor(Ke.depth*Vt):fe=1,he=0,xe=0,be=0}A!==null?(ye=A.x,Ce=A.y,ke=A.z):(ye=0,Ce=0,ke=0);const Ze=Ye.convert(P.format),ze=Ye.convert(P.type);let Je;P.isData3DTexture?(ve.setTexture3D(P,0),Je=w.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(ve.setTexture2DArray(P,0),Je=w.TEXTURE_2D_ARRAY):(ve.setTexture2D(P,0),Je=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);const Ue=w.getParameter(w.UNPACK_ROW_LENGTH),ht=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ct=w.getParameter(w.UNPACK_SKIP_PIXELS),ut=w.getParameter(w.UNPACK_SKIP_ROWS),lt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,he),w.pixelStorei(w.UNPACK_SKIP_ROWS,xe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,be);const et=x.isDataArrayTexture||x.isData3DTexture,Pt=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){const Vt=te.get(x),wt=te.get(P),Ft=te.get(Vt.__renderTarget),Go=te.get(wt.__renderTarget);$.bindFramebuffer(w.READ_FRAMEBUFFER,Ft.__webglFramebuffer),$.bindFramebuffer(w.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let ts=0;ts<fe;ts++)et&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(x).__webglTexture,N,be+ts),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(P).__webglTexture,q,ke+ts)),w.blitFramebuffer(he,xe,j,ie,ye,Ce,j,ie,w.DEPTH_BUFFER_BIT,w.NEAREST);$.bindFramebuffer(w.READ_FRAMEBUFFER,null),$.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||te.has(x)){const Vt=te.get(x),wt=te.get(P);$.bindFramebuffer(w.READ_FRAMEBUFFER,T),$.bindFramebuffer(w.DRAW_FRAMEBUFFER,F);for(let Ft=0;Ft<fe;Ft++)et?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Vt.__webglTexture,N,be+Ft):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Vt.__webglTexture,N),Pt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.__webglTexture,q,ke+Ft):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,wt.__webglTexture,q),N!==0?w.blitFramebuffer(he,xe,j,ie,ye,Ce,j,ie,w.COLOR_BUFFER_BIT,w.NEAREST):Pt?w.copyTexSubImage3D(Je,q,ye,Ce,ke+Ft,he,xe,j,ie):w.copyTexSubImage2D(Je,q,ye,Ce,he,xe,j,ie);$.bindFramebuffer(w.READ_FRAMEBUFFER,null),$.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Pt?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(Je,q,ye,Ce,ke,j,ie,fe,Ze,ze,Ke.data):P.isCompressedArrayTexture?w.compressedTexSubImage3D(Je,q,ye,Ce,ke,j,ie,fe,Ze,Ke.data):w.texSubImage3D(Je,q,ye,Ce,ke,j,ie,fe,Ze,ze,Ke):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,q,ye,Ce,j,ie,Ze,ze,Ke.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,q,ye,Ce,Ke.width,Ke.height,Ze,Ke.data):w.texSubImage2D(w.TEXTURE_2D,q,ye,Ce,j,ie,Ze,ze,Ke);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ue),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ht),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ct),w.pixelStorei(w.UNPACK_SKIP_ROWS,ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,lt),q===0&&P.generateMipmaps&&w.generateMipmap(Je),$.unbindTexture()},this.initRenderTarget=function(x){te.get(x).__webglFramebuffer===void 0&&ve.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ve.setTextureCube(x,0):x.isData3DTexture?ve.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ve.setTexture2DArray(x,0):ve.setTexture2D(x,0),$.unbindTexture()},this.resetState=function(){K=0,R=0,y=null,$.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const Ih={type:"change"},Iu={type:"start"},Jp={type:"end"},Ka=new la,Uh=new Hi,mE=Math.cos(70*E_.DEG2RAD),Ot=new Z,fn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class gE extends Av{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new _s,this._lastTargetPosition=new Z,this._quat=new _s().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lh,this._sphericalDelta=new lh,this._scale=1,this._panOffset=new Z,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new Z,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_E.bind(this),this._onPointerDown=xE.bind(this),this._onPointerUp=vE.bind(this),this._onContextMenu=wE.bind(this),this._onMouseWheel=yE.bind(this),this._onKeyDown=ME.bind(this),this._onTouchStart=EE.bind(this),this._onTouchMove=TE.bind(this),this._onMouseDown=SE.bind(this),this._onMouseMove=bE.bind(this),this._interceptControlDown=AE.bind(this),this._interceptControlUp=CE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ih),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ot.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<mE?this.object.lookAt(this.target):(Uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(Uh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function _E(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jp),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function SE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case Js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case Js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Iu)}function bE(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yE(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(Iu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Jp))}function ME(n){this.enabled!==!1&&this._handleKeyDown(n)}function EE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Iu)}function TE(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function wE(n){this.enabled!==!1&&n.preventDefault()}function AE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Ln=Uint8Array,qs=Uint16Array,RE=Int32Array,Qp=new Ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),em=new Ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),PE=new Ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tm=function(n,e){for(var t=new qs(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new RE(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},nm=tm(Qp,2),im=nm.b,DE=nm.r;im[28]=258,DE[258]=28;var LE=tm(em,0),IE=LE.b,Zc=new qs(32768);for(var Rt=0;Rt<32768;++Rt){var ki=(Rt&43690)>>1|(Rt&21845)<<1;ki=(ki&52428)>>2|(ki&13107)<<2,ki=(ki&61680)>>4|(ki&3855)<<4,Zc[Rt]=((ki&65280)>>8|(ki&255)<<8)>>1}var Wr=function(n,e,t){for(var i=n.length,s=0,r=new qs(e);s<i;++s)n[s]&&++r[n[s]-1];var a=new qs(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new qs(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],u=e-n[s],f=a[n[s]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)o[Zc[f]>>l]=c}else for(o=new qs(i),s=0;s<i;++s)n[s]&&(o[s]=Zc[a[n[s]-1]++]>>15-n[s]);return o},fa=new Ln(288);for(var Rt=0;Rt<144;++Rt)fa[Rt]=8;for(var Rt=144;Rt<256;++Rt)fa[Rt]=9;for(var Rt=256;Rt<280;++Rt)fa[Rt]=7;for(var Rt=280;Rt<288;++Rt)fa[Rt]=8;var sm=new Ln(32);for(var Rt=0;Rt<32;++Rt)sm[Rt]=5;var UE=Wr(fa,9,1),NE=Wr(sm,5,1),kl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},kn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},zl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},FE=function(n){return(n+7)/8|0},OE=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Ln(n.subarray(e,t))},BE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zn=function(n,e,t){var i=new Error(e||BE[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,zn),!t)throw i;return i},kE=function(n,e,t,i){var s=n.length,r=0;if(!s||e.f&&!e.l)return t||new Ln(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Ln(s*3));var c=function(De){var I=t.length;if(De>I){var U=new Ln(Math.max(I*2,De));U.set(t),t=U}},u=e.f||0,f=e.p||0,h=e.b||0,d=e.l,_=e.d,v=e.m,g=e.n,p=s*8;do{if(!d){u=kn(n,f,1);var M=kn(n,f+1,3);if(f+=3,M)if(M==1)d=UE,_=NE,v=9,g=5;else if(M==2){var D=kn(n,f,31)+257,O=kn(n,f+10,15)+4,K=D+kn(n,f+5,31)+1;f+=14;for(var R=new Ln(K),y=new Ln(19),L=0;L<O;++L)y[PE[L]]=kn(n,f+L*3,7);f+=O*3;for(var X=kl(y),se=(1<<X)-1,pe=Wr(y,X,1),L=0;L<K;){var ee=pe[kn(n,f,se)];f+=ee&15;var b=ee>>4;if(b<16)R[L++]=b;else{var J=0,oe=0;for(b==16?(oe=3+kn(n,f,3),f+=2,J=R[L-1]):b==17?(oe=3+kn(n,f,7),f+=3):b==18&&(oe=11+kn(n,f,127),f+=7);oe--;)R[L++]=J}}var Q=R.subarray(0,D),Me=R.subarray(D);v=kl(Q),g=kl(Me),d=Wr(Q,v,1),_=Wr(Me,g,1)}else zn(1);else{var b=FE(f)+4,C=n[b-4]|n[b-3]<<8,k=b+C;if(k>s){l&&zn(0);break}o&&c(h+C),t.set(n.subarray(b,k),h),e.b=h+=C,e.p=f=k*8,e.f=u;continue}if(f>p){l&&zn(0);break}}o&&c(h+131072);for(var Te=(1<<v)-1,Oe=(1<<g)-1,He=f;;He=f){var J=d[zl(n,f)&Te],$e=J>>4;if(f+=J&15,f>p){l&&zn(0);break}if(J||zn(2),$e<256)t[h++]=$e;else if($e==256){He=f,d=null;break}else{var rt=$e-254;if($e>264){var L=$e-257,it=Qp[L];rt=kn(n,f,(1<<it)-1)+im[L],f+=it}var re=_[zl(n,f)&Oe],z=re>>4;re||zn(3),f+=re&15;var Me=IE[z];if(z>3){var it=em[z];Me+=zl(n,f)&(1<<it)-1,f+=it}if(f>p){l&&zn(0);break}o&&c(h+131072);var ue=h+rt;if(h<Me){var ge=r-Me,_e=Math.min(Me,ue);for(ge+h<0&&zn(3);h<_e;++h)t[h]=i[ge+h]}for(;h<ue;++h)t[h]=t[h-Me]}}e.l=d,e.p=He,e.b=h,e.f=u,d&&(u=1,e.m=v,e.d=_,e.n=g)}while(!u);return h!=t.length&&a?OE(t,0,h):t.subarray(0,h)},zE=new Ln(0),VE=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&zn(6,"invalid zlib data"),(n[1]>>5&1)==1&&zn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Za(n,e){return kE(n.subarray(VE(n),-4),{i:2},e,e)}var HE=typeof TextDecoder<"u"&&new TextDecoder,GE=0;try{HE.decode(zE,{stream:!0}),GE=1}catch{}class WE extends dv{constructor(e){super(e),this.type=Wt,this.outputFormat=Xt}parse(e){const R=Math.pow(2.7182818,2.2);function y(m,T){let F=0;for(let P=0;P<65536;++P)(P==0||m[P>>3]&1<<(P&7))&&(T[F++]=P);const x=F-1;for(;F<65536;)T[F++]=0;return x}function L(m){for(let T=0;T<16384;T++)m[T]={},m[T].len=0,m[T].lit=0,m[T].p=null}const X={l:0,c:0,lc:0};function se(m,T,F,x,P){for(;F<m;)T=T<<8|We(x,P),F+=8;F-=m,X.l=T>>F&(1<<m)-1,X.c=T,X.lc=F}const pe=new Array(59);function ee(m){for(let F=0;F<=58;++F)pe[F]=0;for(let F=0;F<65537;++F)pe[m[F]]+=1;let T=0;for(let F=58;F>0;--F){const x=T+pe[F]>>1;pe[F]=T,T=x}for(let F=0;F<65537;++F){const x=m[F];x>0&&(m[F]=x|pe[x]++<<6)}}function J(m,T,F,x,P,B){const A=T;let N=0,q=0;for(;x<=P;x++){if(A.value-T.value>F)return!1;se(6,N,q,m,A);const j=X.l;if(N=X.c,q=X.lc,B[x]=j,j==63){if(A.value-T.value>F)throw new Error("Something wrong with hufUnpackEncTable");se(8,N,q,m,A);let ie=X.l+6;if(N=X.c,q=X.lc,x+ie>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)B[x++]=0;x--}else if(j>=59){let ie=j-59+2;if(x+ie>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)B[x++]=0;x--}}ee(B)}function oe(m){return m&63}function Q(m){return m>>6}function Me(m,T,F,x){for(;T<=F;T++){const P=Q(m[T]),B=oe(m[T]);if(P>>B)throw new Error("Invalid table entry");if(B>14){const A=x[P>>B-14];if(A.len)throw new Error("Invalid table entry");if(A.lit++,A.p){const N=A.p;A.p=new Array(A.lit);for(let q=0;q<A.lit-1;++q)A.p[q]=N[q]}else A.p=new Array(1);A.p[A.lit-1]=T}else if(B){let A=0;for(let N=1<<14-B;N>0;N--){const q=x[(P<<14-B)+A];if(q.len||q.p)throw new Error("Invalid table entry");q.len=B,q.lit=T,A++}}}return!0}const Te={c:0,lc:0};function Oe(m,T,F,x){m=m<<8|We(F,x),T+=8,Te.c=m,Te.lc=T}const He={c:0,lc:0};function $e(m,T,F,x,P,B,A,N,q){if(m==T){x<8&&(Oe(F,x,P,B),F=Te.c,x=Te.lc),x-=8;let j=F>>x;if(j=new Uint8Array([j])[0],N.value+j>q)return!1;const ie=A[N.value-1];for(;j-- >0;)A[N.value++]=ie}else if(N.value<q)A[N.value++]=m;else return!1;He.c=F,He.lc=x}function rt(m){return m&65535}function it(m){const T=rt(m);return T>32767?T-65536:T}const re={a:0,b:0};function z(m,T){const F=it(m),P=it(T),B=F+(P&1)+(P>>1),A=B,N=B-P;re.a=A,re.b=N}function ue(m,T){const F=rt(m),x=rt(T),P=F-(x>>1)&65535,B=x+P-32768&65535;re.a=B,re.b=P}function ge(m,T,F,x,P,B,A){const N=A<16384,q=F>P?P:F;let j=1,ie,fe;for(;j<=q;)j<<=1;for(j>>=1,ie=j,j>>=1;j>=1;){fe=0;const he=fe+B*(P-ie),xe=B*j,be=B*ie,ye=x*j,Ce=x*ie;let ke,Ke,Ze,ze;for(;fe<=he;fe+=be){let Je=fe;const Ue=fe+x*(F-ie);for(;Je<=Ue;Je+=Ce){const ht=Je+ye,Ct=Je+xe,ut=Ct+ye;N?(z(m[Je+T],m[Ct+T]),ke=re.a,Ze=re.b,z(m[ht+T],m[ut+T]),Ke=re.a,ze=re.b,z(ke,Ke),m[Je+T]=re.a,m[ht+T]=re.b,z(Ze,ze),m[Ct+T]=re.a,m[ut+T]=re.b):(ue(m[Je+T],m[Ct+T]),ke=re.a,Ze=re.b,ue(m[ht+T],m[ut+T]),Ke=re.a,ze=re.b,ue(ke,Ke),m[Je+T]=re.a,m[ht+T]=re.b,ue(Ze,ze),m[Ct+T]=re.a,m[ut+T]=re.b)}if(F&j){const ht=Je+xe;N?z(m[Je+T],m[ht+T]):ue(m[Je+T],m[ht+T]),ke=re.a,m[ht+T]=re.b,m[Je+T]=ke}}if(P&j){let Je=fe;const Ue=fe+x*(F-ie);for(;Je<=Ue;Je+=Ce){const ht=Je+ye;N?z(m[Je+T],m[ht+T]):ue(m[Je+T],m[ht+T]),ke=re.a,m[ht+T]=re.b,m[Je+T]=ke}}ie=j,j>>=1}return fe}function _e(m,T,F,x,P,B,A,N,q){let j=0,ie=0;const fe=A,he=Math.trunc(x.value+(P+7)/8);for(;x.value<he;)for(Oe(j,ie,F,x),j=Te.c,ie=Te.lc;ie>=14;){const be=j>>ie-14&16383,ye=T[be];if(ye.len)ie-=ye.len,$e(ye.lit,B,j,ie,F,x,N,q,fe),j=He.c,ie=He.lc;else{if(!ye.p)throw new Error("hufDecode issues");let Ce;for(Ce=0;Ce<ye.lit;Ce++){const ke=oe(m[ye.p[Ce]]);for(;ie<ke&&x.value<he;)Oe(j,ie,F,x),j=Te.c,ie=Te.lc;if(ie>=ke&&Q(m[ye.p[Ce]])==(j>>ie-ke&(1<<ke)-1)){ie-=ke,$e(ye.p[Ce],B,j,ie,F,x,N,q,fe),j=He.c,ie=He.lc;break}}if(Ce==ye.lit)throw new Error("hufDecode issues")}}const xe=8-P&7;for(j>>=xe,ie-=xe;ie>0;){const be=T[j<<14-ie&16383];if(be.len)ie-=be.len,$e(be.lit,B,j,ie,F,x,N,q,fe),j=He.c,ie=He.lc;else throw new Error("hufDecode issues")}return!0}function De(m,T,F,x,P,B){const A={value:0},N=F.value,q=Ne(T,F),j=Ne(T,F);F.value+=4;const ie=Ne(T,F);if(F.value+=4,q<0||q>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const fe=new Array(65537),he=new Array(16384);L(he);const xe=x-(F.value-N);if(J(m,F,xe,q,j,fe),ie>8*(x-(F.value-N)))throw new Error("Something wrong with hufUncompress");Me(fe,q,j,he),_e(fe,he,m,F,ie,j,B,P,A)}function I(m,T,F){for(let x=0;x<F;++x)T[x]=m[T[x]]}function U(m){for(let T=1;T<m.length;T++){const F=m[T-1]+m[T]-128;m[T]=F}}function Y(m,T){let F=0,x=Math.floor((m.length+1)/2),P=0;const B=m.length-1;for(;!(P>B||(T[P++]=m[F++],P>B));)T[P++]=m[x++]}function w(m){let T=m.byteLength;const F=new Array;let x=0;const P=new DataView(m);for(;T>0;){const B=P.getInt8(x++);if(B<0){const A=-B;T-=A+1;for(let N=0;N<A;N++)F.push(P.getUint8(x++))}else{const A=B;T-=2;const N=P.getUint8(x++);for(let q=0;q<A+1;q++)F.push(N)}}return F}function V(m,T,F,x,P,B){let A=new DataView(B.buffer);const N=F[m.idx[0]].width,q=F[m.idx[0]].height,j=3,ie=Math.floor(N/8),fe=Math.ceil(N/8),he=Math.ceil(q/8),xe=N-(fe-1)*8,be=q-(he-1)*8,ye={value:0},Ce=new Array(j),ke=new Array(j),Ke=new Array(j),Ze=new Array(j),ze=new Array(j);for(let Ue=0;Ue<j;++Ue)ze[Ue]=T[m.idx[Ue]],Ce[Ue]=Ue<1?0:Ce[Ue-1]+fe*he,ke[Ue]=new Float32Array(64),Ke[Ue]=new Uint16Array(64),Ze[Ue]=new Uint16Array(fe*64);for(let Ue=0;Ue<he;++Ue){let ht=8;Ue==he-1&&(ht=be);let Ct=8;for(let lt=0;lt<fe;++lt){lt==fe-1&&(Ct=xe);for(let et=0;et<j;++et)Ke[et].fill(0),Ke[et][0]=P[Ce[et]++],ce(ye,x,Ke[et]),$(Ke[et],ke[et]),me(ke[et]);te(ke);for(let et=0;et<j;++et)ve(ke[et],Ze[et],lt*64)}let ut=0;for(let lt=0;lt<j;++lt){const et=F[m.idx[lt]].type;for(let Pt=8*Ue;Pt<8*Ue+ht;++Pt){ut=ze[lt][Pt];for(let Vt=0;Vt<ie;++Vt){const wt=Vt*64+(Pt&7)*8;A.setUint16(ut+0*2*et,Ze[lt][wt+0],!0),A.setUint16(ut+1*2*et,Ze[lt][wt+1],!0),A.setUint16(ut+2*2*et,Ze[lt][wt+2],!0),A.setUint16(ut+3*2*et,Ze[lt][wt+3],!0),A.setUint16(ut+4*2*et,Ze[lt][wt+4],!0),A.setUint16(ut+5*2*et,Ze[lt][wt+5],!0),A.setUint16(ut+6*2*et,Ze[lt][wt+6],!0),A.setUint16(ut+7*2*et,Ze[lt][wt+7],!0),ut+=8*2*et}}if(ie!=fe)for(let Pt=8*Ue;Pt<8*Ue+ht;++Pt){const Vt=ze[lt][Pt]+8*ie*2*et,wt=ie*64+(Pt&7)*8;for(let Ft=0;Ft<Ct;++Ft)A.setUint16(Vt+Ft*2*et,Ze[lt][wt+Ft],!0)}}}const Je=new Uint16Array(N);A=new DataView(B.buffer);for(let Ue=0;Ue<j;++Ue){F[m.idx[Ue]].decoded=!0;const ht=F[m.idx[Ue]].type;if(F[Ue].type==2)for(let Ct=0;Ct<q;++Ct){const ut=ze[Ue][Ct];for(let lt=0;lt<N;++lt)Je[lt]=A.getUint16(ut+lt*2*ht,!0);for(let lt=0;lt<N;++lt)A.setFloat32(ut+lt*2*ht,le(Je[lt]),!0)}}}function W(m,T,F,x,P,B){const A=new DataView(B.buffer),N=F[m],q=N.width,j=N.height,ie=Math.ceil(q/8),fe=Math.ceil(j/8),he=Math.floor(q/8),xe=q-(ie-1)*8,be=j-(fe-1)*8,ye={value:0};let Ce=0;const ke=new Float32Array(64),Ke=new Uint16Array(64),Ze=new Uint16Array(ie*64);for(let ze=0;ze<fe;++ze){let Je=8;ze==fe-1&&(Je=be);for(let Ue=0;Ue<ie;++Ue)Ke.fill(0),Ke[0]=P[Ce++],ce(ye,x,Ke),$(Ke,ke),me(ke),ve(ke,Ze,Ue*64);for(let Ue=8*ze;Ue<8*ze+Je;++Ue){let ht=T[m][Ue];for(let Ct=0;Ct<he;++Ct){const ut=Ct*64+(Ue&7)*8;for(let lt=0;lt<8;++lt)A.setUint16(ht+lt*2*N.type,Ze[ut+lt],!0);ht+=8*2*N.type}if(ie!=he){const Ct=he*64+(Ue&7)*8;for(let ut=0;ut<xe;++ut)A.setUint16(ht+ut*2*N.type,Ze[Ct+ut],!0)}}}N.decoded=!0}function ce(m,T,F){let x,P=1;for(;P<64;)x=T[m.value],x==65280?P=64:x>>8==255?P+=x&255:(F[P]=x,P++),m.value++}function $(m,T){T[0]=le(m[0]),T[1]=le(m[1]),T[2]=le(m[5]),T[3]=le(m[6]),T[4]=le(m[14]),T[5]=le(m[15]),T[6]=le(m[27]),T[7]=le(m[28]),T[8]=le(m[2]),T[9]=le(m[4]),T[10]=le(m[7]),T[11]=le(m[13]),T[12]=le(m[16]),T[13]=le(m[26]),T[14]=le(m[29]),T[15]=le(m[42]),T[16]=le(m[3]),T[17]=le(m[8]),T[18]=le(m[12]),T[19]=le(m[17]),T[20]=le(m[25]),T[21]=le(m[30]),T[22]=le(m[41]),T[23]=le(m[43]),T[24]=le(m[9]),T[25]=le(m[11]),T[26]=le(m[18]),T[27]=le(m[24]),T[28]=le(m[31]),T[29]=le(m[40]),T[30]=le(m[44]),T[31]=le(m[53]),T[32]=le(m[10]),T[33]=le(m[19]),T[34]=le(m[23]),T[35]=le(m[32]),T[36]=le(m[39]),T[37]=le(m[45]),T[38]=le(m[52]),T[39]=le(m[54]),T[40]=le(m[20]),T[41]=le(m[22]),T[42]=le(m[33]),T[43]=le(m[38]),T[44]=le(m[46]),T[45]=le(m[51]),T[46]=le(m[55]),T[47]=le(m[60]),T[48]=le(m[21]),T[49]=le(m[34]),T[50]=le(m[37]),T[51]=le(m[47]),T[52]=le(m[50]),T[53]=le(m[56]),T[54]=le(m[59]),T[55]=le(m[61]),T[56]=le(m[35]),T[57]=le(m[36]),T[58]=le(m[48]),T[59]=le(m[49]),T[60]=le(m[57]),T[61]=le(m[58]),T[62]=le(m[62]),T[63]=le(m[63])}function me(m){const T=.5*Math.cos(.7853975),F=.5*Math.cos(3.14159/16),x=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),B=.5*Math.cos(5*3.14159/16),A=.5*Math.cos(3*3.14159/8),N=.5*Math.cos(7*3.14159/16),q=new Array(4),j=new Array(4),ie=new Array(4),fe=new Array(4);for(let he=0;he<8;++he){const xe=he*8;q[0]=x*m[xe+2],q[1]=A*m[xe+2],q[2]=x*m[xe+6],q[3]=A*m[xe+6],j[0]=F*m[xe+1]+P*m[xe+3]+B*m[xe+5]+N*m[xe+7],j[1]=P*m[xe+1]-N*m[xe+3]-F*m[xe+5]-B*m[xe+7],j[2]=B*m[xe+1]-F*m[xe+3]+N*m[xe+5]+P*m[xe+7],j[3]=N*m[xe+1]-B*m[xe+3]+P*m[xe+5]-F*m[xe+7],ie[0]=T*(m[xe+0]+m[xe+4]),ie[3]=T*(m[xe+0]-m[xe+4]),ie[1]=q[0]+q[3],ie[2]=q[1]-q[2],fe[0]=ie[0]+ie[1],fe[1]=ie[3]+ie[2],fe[2]=ie[3]-ie[2],fe[3]=ie[0]-ie[1],m[xe+0]=fe[0]+j[0],m[xe+1]=fe[1]+j[1],m[xe+2]=fe[2]+j[2],m[xe+3]=fe[3]+j[3],m[xe+4]=fe[3]-j[3],m[xe+5]=fe[2]-j[2],m[xe+6]=fe[1]-j[1],m[xe+7]=fe[0]-j[0]}for(let he=0;he<8;++he)q[0]=x*m[16+he],q[1]=A*m[16+he],q[2]=x*m[48+he],q[3]=A*m[48+he],j[0]=F*m[8+he]+P*m[24+he]+B*m[40+he]+N*m[56+he],j[1]=P*m[8+he]-N*m[24+he]-F*m[40+he]-B*m[56+he],j[2]=B*m[8+he]-F*m[24+he]+N*m[40+he]+P*m[56+he],j[3]=N*m[8+he]-B*m[24+he]+P*m[40+he]-F*m[56+he],ie[0]=T*(m[he]+m[32+he]),ie[3]=T*(m[he]-m[32+he]),ie[1]=q[0]+q[3],ie[2]=q[1]-q[2],fe[0]=ie[0]+ie[1],fe[1]=ie[3]+ie[2],fe[2]=ie[3]-ie[2],fe[3]=ie[0]-ie[1],m[0+he]=fe[0]+j[0],m[8+he]=fe[1]+j[1],m[16+he]=fe[2]+j[2],m[24+he]=fe[3]+j[3],m[32+he]=fe[3]-j[3],m[40+he]=fe[2]-j[2],m[48+he]=fe[1]-j[1],m[56+he]=fe[0]-j[0]}function te(m){for(let T=0;T<64;++T){const F=m[0][T],x=m[1][T],P=m[2][T];m[0][T]=F+1.5747*P,m[1][T]=F-.1873*x-.4682*P,m[2][T]=F+1.8556*x}}function ve(m,T,F){for(let x=0;x<64;++x)T[F+x]=Xf.toHalfFloat(E(m[x]))}function E(m){return m<=1?Math.sign(m)*Math.pow(Math.abs(m),2.2):Math.sign(m)*Math.pow(R,Math.abs(m)-1)}function S(m){return new DataView(m.array.buffer,m.offset.value,m.size)}function G(m){const T=m.viewer.buffer.slice(m.offset.value,m.offset.value+m.size),F=new Uint8Array(w(T)),x=new Uint8Array(F.length);return U(F),Y(F,x),new DataView(x.buffer)}function ae(m){const T=m.array.slice(m.offset.value,m.offset.value+m.size),F=Za(T),x=new Uint8Array(F.length);return U(F),Y(F,x),new DataView(x.buffer)}function de(m){const T=m.viewer,F={value:m.offset.value},x=new Uint16Array(m.columns*m.lines*(m.inputChannels.length*m.type)),P=new Uint8Array(8192);let B=0;const A=new Array(m.inputChannels.length);for(let be=0,ye=m.inputChannels.length;be<ye;be++)A[be]={},A[be].start=B,A[be].end=A[be].start,A[be].nx=m.columns,A[be].ny=m.lines,A[be].size=m.type,B+=A[be].nx*A[be].ny*A[be].size;const N=Pe(T,F),q=Pe(T,F);if(q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(N<=q)for(let be=0;be<q-N+1;be++)P[be+N]=Le(T,F);const j=new Uint16Array(65536),ie=y(P,j),fe=Ne(T,F);De(m.array,T,F,fe,x,B);for(let be=0;be<m.inputChannels.length;++be){const ye=A[be];for(let Ce=0;Ce<A[be].size;++Ce)ge(x,ye.start+Ce,ye.nx,ye.size,ye.ny,ye.nx*ye.size,ie)}I(j,x,B);let he=0;const xe=new Uint8Array(x.buffer.byteLength);for(let be=0;be<m.lines;be++)for(let ye=0;ye<m.inputChannels.length;ye++){const Ce=A[ye],ke=Ce.nx*Ce.size,Ke=new Uint8Array(x.buffer,Ce.end*2,ke*2);xe.set(Ke,he),he+=ke*2,Ce.end+=ke}return new DataView(xe.buffer)}function ne(m){const T=m.array.slice(m.offset.value,m.offset.value+m.size),F=Za(T),x=m.inputChannels.length*m.lines*m.columns*m.totalBytes,P=new ArrayBuffer(x),B=new DataView(P);let A=0,N=0;const q=new Array(4);for(let j=0;j<m.lines;j++)for(let ie=0;ie<m.inputChannels.length;ie++){let fe=0;switch(m.inputChannels[ie].pixelType){case 1:q[0]=A,q[1]=q[0]+m.columns,A=q[1]+m.columns;for(let xe=0;xe<m.columns;++xe){const be=F[q[0]++]<<8|F[q[1]++];fe+=be,B.setUint16(N,fe,!0),N+=2}break;case 2:q[0]=A,q[1]=q[0]+m.columns,q[2]=q[1]+m.columns,A=q[2]+m.columns;for(let xe=0;xe<m.columns;++xe){const be=F[q[0]++]<<24|F[q[1]++]<<16|F[q[2]++]<<8;fe+=be,B.setUint32(N,fe,!0),N+=4}break}}return B}function Be(m){const T=m.viewer,F={value:m.offset.value},x=new Uint8Array(m.columns*m.lines*(m.inputChannels.length*m.type*2)),P={version:Ye(T,F),unknownUncompressedSize:Ye(T,F),unknownCompressedSize:Ye(T,F),acCompressedSize:Ye(T,F),dcCompressedSize:Ye(T,F),rleCompressedSize:Ye(T,F),rleUncompressedSize:Ye(T,F),rleRawSize:Ye(T,F),totalAcUncompressedCount:Ye(T,F),totalDcUncompressedCount:Ye(T,F),acCompression:Ye(T,F)};if(P.version<2)throw new Error("EXRLoader.parse: "+fi.compression+" version "+P.version+" is unsupported");const B=new Array;let A=Pe(T,F)-2;for(;A>0;){const ye=Ae(T.buffer,F),Ce=Le(T,F),ke=Ce>>2&3,Ke=(Ce>>4)-1,Ze=new Int8Array([Ke])[0],ze=Le(T,F);B.push({name:ye,index:Ze,type:ze,compression:ke}),A-=ye.length+3}const N=fi.channels,q=new Array(m.inputChannels.length);for(let ye=0;ye<m.inputChannels.length;++ye){const Ce=q[ye]={},ke=N[ye];Ce.name=ke.name,Ce.compression=0,Ce.decoded=!1,Ce.type=ke.pixelType,Ce.pLinear=ke.pLinear,Ce.width=m.columns,Ce.height=m.lines}const j={idx:new Array(3)};for(let ye=0;ye<m.inputChannels.length;++ye){const Ce=q[ye];for(let ke=0;ke<B.length;++ke){const Ke=B[ke];Ce.name==Ke.name&&(Ce.compression=Ke.compression,Ke.index>=0&&(j.idx[Ke.index]=ye),Ce.offset=ye)}}let ie,fe,he;if(P.acCompressedSize>0)switch(P.acCompression){case 0:ie=new Uint16Array(P.totalAcUncompressedCount),De(m.array,T,F,P.acCompressedSize,ie,P.totalAcUncompressedCount);break;case 1:const ye=m.array.slice(F.value,F.value+P.totalAcUncompressedCount),Ce=Za(ye);ie=new Uint16Array(Ce.buffer),F.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){const ye={array:m.array,offset:F,size:P.dcCompressedSize};fe=new Uint16Array(ae(ye).buffer),F.value+=P.dcCompressedSize}if(P.rleRawSize>0){const ye=m.array.slice(F.value,F.value+P.rleCompressedSize),Ce=Za(ye);he=w(Ce.buffer),F.value+=P.rleCompressedSize}let xe=0;const be=new Array(q.length);for(let ye=0;ye<be.length;++ye)be[ye]=new Array;for(let ye=0;ye<m.lines;++ye)for(let Ce=0;Ce<q.length;++Ce)be[Ce].push(xe),xe+=q[Ce].width*m.type*2;j.idx[0]!==void 0&&q[j.idx[0]]&&V(j,be,q,ie,fe,x);for(let ye=0;ye<q.length;++ye){const Ce=q[ye];if(!Ce.decoded)switch(Ce.compression){case 2:let ke=0,Ke=0;for(let Ze=0;Ze<m.lines;++Ze){let ze=be[ye][ke];for(let Je=0;Je<Ce.width;++Je){for(let Ue=0;Ue<2*Ce.type;++Ue)x[ze++]=he[Ke+Ue*Ce.width*Ce.height];Ke++}ke++}break;case 1:W(ye,be,q,ie,fe,x);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(x.buffer)}function Ae(m,T){const F=new Uint8Array(m);let x=0;for(;F[T.value+x]!=0;)x+=1;const P=new TextDecoder().decode(F.slice(T.value,T.value+x));return T.value=T.value+x+1,P}function Ge(m,T,F){const x=new TextDecoder().decode(new Uint8Array(m).slice(T.value,T.value+F));return T.value=T.value+F,x}function Ve(m,T){const F=we(m,T),x=Ne(m,T);return[F,x]}function Ee(m,T){const F=Ne(m,T),x=Ne(m,T);return[F,x]}function we(m,T){const F=m.getInt32(T.value,!0);return T.value=T.value+4,F}function Ne(m,T){const F=m.getUint32(T.value,!0);return T.value=T.value+4,F}function We(m,T){const F=m[T.value];return T.value=T.value+1,F}function Le(m,T){const F=m.getUint8(T.value);return T.value=T.value+1,F}const Ye=function(m,T){let F;return"getBigInt64"in DataView.prototype?F=Number(m.getBigInt64(T.value,!0)):F=m.getUint32(T.value+4,!0)+Number(m.getUint32(T.value,!0)<<32),T.value+=8,F};function H(m,T){const F=m.getFloat32(T.value,!0);return T.value+=4,F}function Ie(m,T){return Xf.toHalfFloat(H(m,T))}function le(m){const T=(m&31744)>>10,F=m&1023;return(m>>15?-1:1)*(T?T===31?F?NaN:1/0:Math.pow(2,T-15)*(1+F/1024):6103515625e-14*(F/1024))}function Pe(m,T){const F=m.getUint16(T.value,!0);return T.value+=2,F}function Re(m,T){return le(Pe(m,T))}function Se(m,T,F,x){const P=F.value,B=[];for(;F.value<P+x-1;){const A=Ae(T,F),N=we(m,F),q=Le(m,F);F.value+=3;const j=we(m,F),ie=we(m,F);B.push({name:A,pixelType:N,pLinear:q,xSampling:j,ySampling:ie})}return F.value+=1,B}function qe(m,T){const F=H(m,T),x=H(m,T),P=H(m,T),B=H(m,T),A=H(m,T),N=H(m,T),q=H(m,T),j=H(m,T);return{redX:F,redY:x,greenX:P,greenY:B,blueX:A,blueY:N,whiteX:q,whiteY:j}}function tt(m,T){const F=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],x=Le(m,T);return F[x]}function Et(m,T){const F=we(m,T),x=we(m,T),P=we(m,T),B=we(m,T);return{xMin:F,yMin:x,xMax:P,yMax:B}}function pt(m,T){const F=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],x=Le(m,T);return F[x]}function Cn(m,T){const F=["ENVMAP_LATLONG","ENVMAP_CUBE"],x=Le(m,T);return F[x]}function _n(m,T){const F=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],x=["ROUND_DOWN","ROUND_UP"],P=Ne(m,T),B=Ne(m,T),A=Le(m,T);return{xSize:P,ySize:B,levelMode:F[A&15],roundingMode:x[A>>4]}}function Vo(m,T){const F=H(m,T),x=H(m,T);return[F,x]}function ha(m,T){const F=H(m,T),x=H(m,T),P=H(m,T);return[F,x,P]}function da(m,T,F,x,P){if(x==="string"||x==="stringvector"||x==="iccProfile")return Ge(T,F,P);if(x==="chlist")return Se(m,T,F,P);if(x==="chromaticities")return qe(m,F);if(x==="compression")return tt(m,F);if(x==="box2i")return Et(m,F);if(x==="envmap")return Cn(m,F);if(x==="tiledesc")return _n(m,F);if(x==="lineOrder")return pt(m,F);if(x==="float")return H(m,F);if(x==="v2f")return Vo(m,F);if(x==="v3f")return ha(m,F);if(x==="int")return we(m,F);if(x==="rational")return Ve(m,F);if(x==="timecode")return Ee(m,F);if(x==="preview")return F.value+=P,"skipped";F.value+=P}function ui(m,T){const F=Math.log2(m);return T=="ROUND_DOWN"?Math.floor(F):Math.ceil(F)}function pr(m,T,F){let x=0;switch(m.levelMode){case"ONE_LEVEL":x=1;break;case"MIPMAP_LEVELS":x=ui(Math.max(T,F),m.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return x}function mr(m,T,F,x){const P=new Array(m);for(let B=0;B<m;B++){const A=1<<B;let N=T/A|0;x=="ROUND_UP"&&N*A<T&&(N+=1);const q=Math.max(N,1);P[B]=(q+F-1)/F|0}return P}function pa(){const m=this,T=m.offset,F={value:0};for(let x=0;x<m.tileCount;x++){const P=we(m.viewer,T),B=we(m.viewer,T);T.value+=8,m.size=Ne(m.viewer,T);const A=P*m.blockWidth,N=B*m.blockHeight;m.columns=A+m.blockWidth>m.width?m.width-A:m.blockWidth,m.lines=N+m.blockHeight>m.height?m.height-N:m.blockHeight;const q=m.columns*m.totalBytes,ie=m.size<m.lines*q?m.uncompress(m):S(m);T.value+=m.size;for(let fe=0;fe<m.lines;fe++){const he=fe*m.columns*m.totalBytes;for(let xe=0;xe<m.inputChannels.length;xe++){const be=fi.channels[xe].name,ye=m.channelByteOffsets[be]*m.columns,Ce=m.decodeChannels[be];if(Ce===void 0)continue;F.value=he+ye;const ke=(m.height-(1+N+fe))*m.outLineWidth;for(let Ke=0;Ke<m.columns;Ke++){const Ze=ke+(Ke+A)*m.outputChannels+Ce;m.byteArray[Ze]=m.getter(ie,F)}}}}}function bs(){const m=this,T=m.offset,F={value:0};for(let x=0;x<m.height/m.blockHeight;x++){const P=we(m.viewer,T)-fi.dataWindow.yMin;m.size=Ne(m.viewer,T),m.lines=P+m.blockHeight>m.height?m.height-P:m.blockHeight;const B=m.columns*m.totalBytes,N=m.size<m.lines*B?m.uncompress(m):S(m);T.value+=m.size;for(let q=0;q<m.blockHeight;q++){const j=x*m.blockHeight,ie=q+m.scanOrder(j);if(ie>=m.height)continue;const fe=q*B,he=(m.height-1-ie)*m.outLineWidth;for(let xe=0;xe<m.inputChannels.length;xe++){const be=fi.channels[xe].name,ye=m.channelByteOffsets[be]*m.columns,Ce=m.decodeChannels[be];if(Ce!==void 0){F.value=fe+ye;for(let ke=0;ke<m.columns;ke++){const Ke=he+ke*m.outputChannels+Ce;m.byteArray[Ke]=m.getter(N,F)}}}}}}function ma(m,T,F){const x={};if(m.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");x.version=m.getUint8(4);const P=m.getUint8(5);x.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},F.value=8;let B=!0;for(;B;){const A=Ae(T,F);if(A==="")B=!1;else{const N=Ae(T,F),q=Ne(m,F),j=da(m,T,F,N,q);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${N}'.`):x[A]=j}}if(P&-7)throw console.error("THREE.EXRHeader:",x),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return x}function ys(m,T,F,x,P,B){const A={size:0,viewer:T,array:F,offset:x,width:m.dataWindow.xMax-m.dataWindow.xMin+1,height:m.dataWindow.yMax-m.dataWindow.yMin+1,inputChannels:m.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Mn};switch(m.compression){case"NO_COMPRESSION":A.blockHeight=1,A.uncompress=S;break;case"RLE_COMPRESSION":A.blockHeight=1,A.uncompress=G;break;case"ZIPS_COMPRESSION":A.blockHeight=1,A.uncompress=ae;break;case"ZIP_COMPRESSION":A.blockHeight=16,A.uncompress=ae;break;case"PIZ_COMPRESSION":A.blockHeight=32,A.uncompress=de;break;case"PXR24_COMPRESSION":A.blockHeight=16,A.uncompress=ne;break;case"DWAA_COMPRESSION":A.blockHeight=32,A.uncompress=Be;break;case"DWAB_COMPRESSION":A.blockHeight=256,A.uncompress=Be;break;default:throw new Error("EXRLoader.parse: "+m.compression+" is unsupported")}const N={};for(const he of m.channels)switch(he.name){case"Y":case"R":case"G":case"B":case"A":N[he.name]=!0,A.type=he.pixelType}let q=!1,j=!1;if(N.R&&N.G&&N.B)A.outputChannels=4;else if(N.Y)A.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(A.outputChannels){case 4:B==Xt?(q=!N.A,A.format=Xt,A.colorSpace=Mn,A.outputChannels=4,A.decodeChannels={R:0,G:1,B:2,A:3}):B==Wi?(A.format=Wi,A.colorSpace=Mn,A.outputChannels=2,A.decodeChannels={R:0,G:1}):B==Ys?(A.format=Ys,A.colorSpace=Mn,A.outputChannels=1,A.decodeChannels={R:0}):j=!0;break;case 1:B==Xt?(q=!0,A.format=Xt,A.colorSpace=Mn,A.outputChannels=4,A.shouldExpand=!0,A.decodeChannels={Y:0}):B==Wi?(A.format=Wi,A.colorSpace=Mn,A.outputChannels=2,A.shouldExpand=!0,A.decodeChannels={Y:0}):B==Ys?(A.format=Ys,A.colorSpace=Mn,A.outputChannels=1,A.decodeChannels={Y:0}):j=!0;break;default:j=!0}if(j)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(A.type==1)switch(P){case In:A.getter=Re;break;case Wt:A.getter=Pe;break}else if(A.type==2)switch(P){case In:A.getter=H;break;case Wt:A.getter=Ie}else throw new Error("EXRLoader.parse: unsupported pixelType "+A.type+" for "+m.compression+".");A.columns=A.width;const ie=A.width*A.height*A.outputChannels;switch(P){case In:A.byteArray=new Float32Array(ie),q&&A.byteArray.fill(1,0,ie);break;case Wt:A.byteArray=new Uint16Array(ie),q&&A.byteArray.fill(15360,0,ie);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}let fe=0;for(const he of m.channels)A.decodeChannels[he.name]!==void 0&&(A.channelByteOffsets[he.name]=fe),fe+=he.pixelType*2;if(A.totalBytes=fe,A.outLineWidth=A.width*A.outputChannels,m.lineOrder==="INCREASING_Y"?A.scanOrder=he=>he:A.scanOrder=he=>A.height-1-he,m.spec.singleTile){A.blockHeight=m.tiles.ySize,A.blockWidth=m.tiles.xSize;const he=pr(m.tiles,A.width,A.height),xe=mr(he,A.width,m.tiles.xSize,m.tiles.roundingMode),be=mr(he,A.height,m.tiles.ySize,m.tiles.roundingMode);A.tileCount=xe[0]*be[0];for(let ye=0;ye<he;ye++)for(let Ce=0;Ce<be[ye];Ce++)for(let ke=0;ke<xe[ye];ke++)Ye(T,x);A.decode=pa.bind(A)}else{A.blockWidth=A.width;const he=Math.ceil(A.height/A.blockHeight);for(let xe=0;xe<he;xe++)Ye(T,x);A.decode=bs.bind(A)}return A}const gr={value:0},xr=new DataView(e),Ho=new Uint8Array(e),fi=ma(xr,e,gr),Xn=ys(fi,xr,Ho,gr,this.type,this.outputFormat);if(Xn.decode(),Xn.shouldExpand){const m=Xn.byteArray;if(this.outputFormat==Xt)for(let T=0;T<m.length;T+=4)m[T+2]=m[T+1]=m[T];else if(this.outputFormat==Wi)for(let T=0;T<m.length;T+=2)m[T+1]=m[T]}return{header:fi,width:Xn.width,height:Xn.height,data:Xn.byteArray,format:Xn.format,colorSpace:Xn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,i,s){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=Gt,a.magFilter=Gt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,i,s)}}const Vl=new WeakMap;class XE extends Qi{constructor(e){super(e),this.libraryPath="",this.libraryPending=null,this.libraryBinary=null,this.libraryConfig={},this.url="",this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.workerConfig={},this.materials=[],this.warnings=[]}setLibraryPath(e){return this.libraryPath=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const r=new Gr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),this.url=e,r.load(e,a=>{if(Vl.has(a))return Vl.get(a).promise.then(t).catch(s);this.decodeObjects(a,e).then(o=>{o.userData.warnings=this.warnings,t(o)}).catch(o=>s(o))},i,s)}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}decodeObjects(e,t){let i,s;const r=e.byteLength,a=this._getWorker(r).then(o=>(i=o,s=this.workerNextTaskID++,new Promise((l,c)=>{i._callbacks[s]={resolve:l,reject:c},i.postMessage({type:"decode",id:s,buffer:e},[e])}))).then(o=>this._createGeometry(o.data)).catch(o=>{throw o});return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Vl.set(e,{url:t,promise:a}),a}parse(e,t,i){this.decodeObjects(e,"").then(s=>{s.userData.warnings=this.warnings,t(s)}).catch(s=>i(s))}_compareMaterials(e){const t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type,t.vertexColors=e.vertexColors;const i=JSON.stringify(t);for(let s=0;s<this.materials.length;s++){const r=this.materials[s],a={};if(a.name=r.name,a.color={},a.color.r=r.color.r,a.color.g=r.color.g,a.color.b=r.color.b,a.type=r.type,a.vertexColors=r.vertexColors,JSON.stringify(a)===i)return r}return this.materials.push(e),e}_createMaterial(e,t){if(e===void 0)return new Xp({color:new Qe(1,1,1),metalness:.8,name:Qi.DEFAULT_MATERIAL_NAME,side:Tn});const i=new ov({color:new Qe(e.diffuseColor.r/255,e.diffuseColor.g/255,e.diffuseColor.b/255),emissive:new Qe(e.emissionColor.r,e.emissionColor.g,e.emissionColor.b),flatShading:e.disableLighting,ior:e.indexOfRefraction,name:e.name,reflectivity:e.reflectivity,opacity:1-e.transparency,side:Tn,specularColor:e.specularColor,transparent:e.transparency>0});if(i.userData.id=e.id,e.pbrSupported){const r=e.pbr;i.anisotropy=r.anisotropic,i.anisotropyRotation=r.anisotropicRotation,i.color=new Qe(r.baseColor.r,r.baseColor.g,r.baseColor.b),i.clearcoat=r.clearcoat,i.clearcoatRoughness=r.clearcoatRoughness,i.metalness=r.metallic,i.transmission=1-r.opacity,i.roughness=r.roughness,i.sheen=r.sheen,i.specularIntensity=r.specular,i.thickness=r.subsurface}e.pbrSupported&&e.pbr.opacity===0&&e.transparency===1&&(i.opacity=.2,i.transmission=1);const s=new pv;for(let r=0;r<e.textures.length;r++){const a=e.textures[r];if(a.image!==null){const o=s.load(a.image);switch(a.type){case"Bump":i.bumpMap=o;break;case"Diffuse":i.map=o;break;case"Emap":i.envMap=o;break;case"Opacity":i.transmissionMap=o;break;case"Transparency":i.alphaMap=o,i.transparent=!0;break;case"PBR_Alpha":i.alphaMap=o,i.transparent=!0;break;case"PBR_AmbientOcclusion":i.aoMap=o;break;case"PBR_Anisotropic":i.anisotropyMap=o;break;case"PBR_BaseColor":i.map=o;break;case"PBR_Clearcoat":i.clearcoatMap=o;break;case"PBR_ClearcoatBump":i.clearcoatNormalMap=o;break;case"PBR_ClearcoatRoughness":i.clearcoatRoughnessMap=o;break;case"PBR_Displacement":i.displacementMap=o;break;case"PBR_Emission":i.emissiveMap=o;break;case"PBR_Metallic":i.metalnessMap=o;break;case"PBR_Roughness":i.roughnessMap=o;break;case"PBR_Sheen":i.sheenColorMap=o;break;case"PBR_Specular":i.specularColorMap=o;break;case"PBR_Subsurface":i.thicknessMap=o;break;default:this.warnings.push({message:`THREE.3DMLoader: No conversion exists for 3dm ${a.type}.`,type:"no conversion"});break}o.wrapS=a.wrapU===0?Jr:cn,o.wrapT=a.wrapV===0?Jr:cn,a.repeat&&o.repeat.set(a.repeat[0],a.repeat[1])}}return t&&new WE().load(t.image,function(r){r.mapping=THREE.EquirectangularReflectionMapping,i.envMap=r}),i}_createGeometry(e){const t=new Lt,i=[],s=[],r=[];t.userData.layers=e.layers,t.userData.groups=e.groups,t.userData.settings=e.settings,t.userData.settings.renderSettings=e.renderSettings,t.userData.objectType="File3dm",t.userData.materials=null,t.name=this.url;let a=e.objects;const o=e.materials;for(let l=0;l<a.length;l++){const c=a[l],u=c.attributes;switch(c.objectType){case"InstanceDefinition":s.push(c);break;case"InstanceReference":r.push(c);break;default:let f=null;switch(u.materialSource.name){case"ObjectMaterialSource_MaterialFromLayer":u.layerIndex>=0&&(f=e.layers[u.layerIndex].renderMaterialIndex);break;case"ObjectMaterialSource_MaterialFromObject":u.materialIndex>=0&&(f=u.materialIndex);break}let h=null;if(f>=0){const v=o[f];h=this._createMaterial(v,e.renderEnvironment)}const d=this._createObject(c,h);if(d===void 0)continue;const _=e.layers[u.layerIndex];d.visible=_?e.layers[u.layerIndex].visible:!0,u.isInstanceDefinitionObject?i.push(d):t.add(d);break}}for(let l=0;l<s.length;l++){const c=s[l];a=[];for(let u=0;u<c.attributes.objectIds.length;u++){const f=c.attributes.objectIds[u];for(let h=0;h<i.length;h++){const d=i[h].userData.attributes.id;f===d&&a.push(i[h])}}for(let u=0;u<r.length;u++){const f=r[u];if(f.geometry.parentIdefId===c.attributes.id){const h=new Lt,d=f.geometry.xform.array,_=new Mt;_.set(...d),h.applyMatrix4(_);for(let v=0;v<a.length;v++)h.add(a[v].clone(!0));t.add(h)}}}return t.userData.materials=this.materials,t.name="",t}_createObject(e,t){const i=new Mv,s=e.attributes;let r,a,o,l;switch(e.objectType){case"Point":case"PointSet":r=i.parse(e.geometry),r.attributes.hasOwnProperty("color")?a=new Xc({vertexColors:!0,sizeAttenuation:!1,size:2}):(o=s.drawColor,l=new Qe(o.r/255,o.g/255,o.b/255),a=new Xc({color:l,sizeAttenuation:!1,size:2})),a=this._compareMaterials(a);const c=new sv(r,a);return c.userData.attributes=s,c.userData.objectType=e.objectType,s.name&&(c.name=s.name),c;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(e.geometry===null)return;r=i.parse(e.geometry),t===null&&(t=this._createMaterial()),r.attributes.hasOwnProperty("color")&&(t.vertexColors=!0),t=this._compareMaterials(t);const u=new ci(r,t);return u.castShadow=s.castsShadows,u.receiveShadow=s.receivesShadows,u.userData.attributes=s,u.userData.objectType=e.objectType,s.name&&(u.name=s.name),u;case"Curve":r=i.parse(e.geometry),o=s.drawColor,l=new Qe(o.r/255,o.g/255,o.b/255),a=new Hp({color:l}),a=this._compareMaterials(a);const f=new iv(r,a);return f.userData.attributes=s,f.userData.objectType=e.objectType,s.name&&(f.name=s.name),f;case"TextDot":r=e.geometry;const h=document.createElement("canvas").getContext("2d"),d=`${r.fontHeight}px ${r.fontFace}`;h.font=d;const _=h.measureText(r.text).width+10,v=r.fontHeight+10,g=window.devicePixelRatio;h.canvas.width=_*g,h.canvas.height=v*g,h.canvas.style.width=_+"px",h.canvas.style.height=v+"px",h.setTransform(g,0,0,g,0,0),h.font=d,h.textBaseline="middle",h.textAlign="center",l=s.drawColor,h.fillStyle=`rgba(${l.r},${l.g},${l.b},${l.a})`,h.fillRect(0,0,_,v),h.fillStyle="white",h.fillText(r.text,_/2,v/2);const p=new rv(h.canvas);p.minFilter=Gt,p.generateMipmaps=!1,p.wrapS=cn,p.wrapT=cn,a=new kp({map:p,depthTest:!1});const M=new J_(a);return M.position.set(r.point[0],r.point[1],r.point[2]),M.scale.set(_/10,v/10,1),M.userData.attributes=s,M.userData.objectType=e.objectType,s.name&&(M.name=s.name),M;case"Light":r=e.geometry;let b;switch(r.lightStyle.name){case"LightStyle_WorldPoint":b=new _v,b.castShadow=s.castsShadows,b.position.set(r.location[0],r.location[1],r.location[2]),b.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":b=new gv,b.castShadow=s.castsShadows,b.position.set(r.location[0],r.location[1],r.location[2]),b.target.position.set(r.direction[0],r.direction[1],r.direction[2]),b.angle=r.spotAngleRadians,b.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":b=new bv;const C=Math.abs(r.width[2]),k=Math.abs(r.length[0]);b.position.set(r.location[0]-k/2,r.location[1],r.location[2]-C/2),b.height=k,b.width=C,b.lookAt(r.direction[0],r.direction[1],r.direction[2]);break;case"LightStyle_WorldDirectional":b=new qc,b.castShadow=s.castsShadows,b.position.set(r.location[0],r.location[1],r.location[2]),b.target.position.set(r.direction[0],r.direction[1],r.direction[2]),b.shadow.normalBias=.1;break}return b&&(b.intensity=r.intensity,o=r.diffuse,l=new Qe(o.r/255,o.g/255,o.b/255),b.color=l,b.userData.attributes=s,b.userData.objectType=e.objectType),b}}_initLibrary(){if(!this.libraryPending){const e=new Gr(this.manager);e.setPath(this.libraryPath);const t=new Promise((r,a)=>{e.load("rhino3dm.js",r,void 0,a)}),i=new Gr(this.manager);i.setPath(this.libraryPath),i.setResponseType("arraybuffer");const s=new Promise((r,a)=>{i.load("rhino3dm.wasm",r,void 0,a)});this.libraryPending=Promise.all([t,s]).then(([r,a])=>{this.libraryConfig.wasmBinary=a;const o=YE.toString(),l=["/* rhino3dm.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l]))})}return this.libraryPending}_getWorker(e){return this._initLibrary().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",libraryConfig:this.libraryConfig}),i.onmessage=s=>{const r=s.data;switch(r.type){case"warning":this.warnings.push(r.data),console.warn(r.data);break;case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskLoad+=e,t})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();this.workerPool.length=0}}function YE(){let n,e,t,i;onmessage=function(u){const f=u.data;switch(f.type){case"init":e=f.libraryConfig;const h=e.wasmBinary;let d;n=new Promise(function(v){d={wasmBinary:h,onRuntimeInitialized:v},rhino3dm(d)}).then(()=>{t=d});break;case"decode":i=f.id;const _=f.buffer;n.then(()=>{try{const v=s(t,_);self.postMessage({type:"decode",id:f.id,data:v})}catch(v){self.postMessage({type:"error",id:f.id,error:v})}});break}};function s(u,f){const h=new Uint8Array(f),d=u.File3dm.fromByteArray(h),_=[],v=[],g=[],p=[],M=[],b=[],C=[],k=d.objects(),D=k.count;for(let ee=0;ee<D;ee++){const J=k.get(ee),oe=o(J,d);J.delete(),oe&&_.push(oe)}for(let ee=0;ee<d.instanceDefinitions().count;ee++){const J=d.instanceDefinitions().get(ee),oe=l(J);oe.objectIds=J.getObjectIds(),_.push({geometry:null,attributes:oe,objectType:"InstanceDefinition"})}const O=[u.TextureType.Diffuse,u.TextureType.Bump,u.TextureType.Transparency,u.TextureType.Opacity,u.TextureType.Emap],K=[u.TextureType.PBR_BaseColor,u.TextureType.PBR_Subsurface,u.TextureType.PBR_SubsurfaceScattering,u.TextureType.PBR_SubsurfaceScatteringRadius,u.TextureType.PBR_Metallic,u.TextureType.PBR_Specular,u.TextureType.PBR_SpecularTint,u.TextureType.PBR_Roughness,u.TextureType.PBR_Anisotropic,u.TextureType.PBR_Anisotropic_Rotation,u.TextureType.PBR_Sheen,u.TextureType.PBR_SheenTint,u.TextureType.PBR_Clearcoat,u.TextureType.PBR_ClearcoatBump,u.TextureType.PBR_ClearcoatRoughness,u.TextureType.PBR_OpacityIor,u.TextureType.PBR_OpacityRoughness,u.TextureType.PBR_Emission,u.TextureType.PBR_AmbientOcclusion,u.TextureType.PBR_Displacement];for(let ee=0;ee<d.materials().count;ee++){const J=d.materials().get(ee),oe=l(J),Q=[];Q.push(...r(J,O,d)),oe.pbrSupported=J.physicallyBased().supported,oe.pbrSupported&&(Q.push(...r(J,K,d)),oe.pbr=l(J.physicallyBased())),oe.textures=Q,v.push(oe),J.delete()}for(let ee=0;ee<d.layers().count;ee++){const J=d.layers().get(ee),oe=l(J);g.push(oe),J.delete()}for(let ee=0;ee<d.views().count;ee++){const J=d.views().get(ee),oe=l(J);p.push(oe),J.delete()}for(let ee=0;ee<d.namedViews().count;ee++){const J=d.namedViews().get(ee),oe=l(J);M.push(oe),J.delete()}for(let ee=0;ee<d.groups().count;ee++){const J=d.groups().get(ee),oe=l(J);b.push(oe),J.delete()}const R=l(d.settings()),y=d.strings().count;for(let ee=0;ee<y;ee++)C.push(d.strings().get(ee));const L=d.settings().renderSettings().renderEnvironments.reflectionId,X=d.renderContent();let se=null;for(let ee=0;ee<X.count;ee++){const J=X.get(ee);switch(J.kind){case"environment":if(J.id!==L)break;const Me=J.findChild("texture").fileName;for(let Te=0;Te<d.embeddedFiles().count;Te++){const Oe=d.embeddedFiles().get(Te).fileName;Me===Oe&&(se={type:"renderEnvironment",image:"data:image/png;base64,"+d.getEmbeddedFileAsBase64(Me),name:Me})}break}}const pe={ambientLight:d.settings().renderSettings().ambientLight,backgroundColorTop:d.settings().renderSettings().backgroundColorTop,backgroundColorBottom:d.settings().renderSettings().backgroundColorBottom,useHiddenLights:d.settings().renderSettings().useHiddenLights,depthCue:d.settings().renderSettings().depthCue,flatShade:d.settings().renderSettings().flatShade,renderBackFaces:d.settings().renderSettings().renderBackFaces,renderPoints:d.settings().renderSettings().renderPoints,renderCurves:d.settings().renderSettings().renderCurves,renderIsoParams:d.settings().renderSettings().renderIsoParams,renderMeshEdges:d.settings().renderSettings().renderMeshEdges,renderAnnotations:d.settings().renderSettings().renderAnnotations,useViewportSize:d.settings().renderSettings().useViewportSize,scaleBackgroundToFit:d.settings().renderSettings().scaleBackgroundToFit,transparentBackground:d.settings().renderSettings().transparentBackground,imageDpi:d.settings().renderSettings().imageDpi,shadowMapLevel:d.settings().renderSettings().shadowMapLevel,namedView:d.settings().renderSettings().namedView,snapShot:d.settings().renderSettings().snapShot,specificViewport:d.settings().renderSettings().specificViewport,groundPlane:l(d.settings().renderSettings().groundPlane),safeFrame:l(d.settings().renderSettings().safeFrame),dithering:l(d.settings().renderSettings().dithering),skylight:l(d.settings().renderSettings().skylight),linearWorkflow:l(d.settings().renderSettings().linearWorkflow),renderChannels:l(d.settings().renderSettings().renderChannels),sun:l(d.settings().renderSettings().sun),renderEnvironments:l(d.settings().renderSettings().renderEnvironments),postEffects:l(d.settings().renderSettings().postEffects)};return d.delete(),{objects:_,materials:v,layers:g,views:p,namedViews:M,groups:b,strings:C,settings:R,renderSettings:pe,renderEnvironment:se}}function r(u,f,h){const d=[];for(let _=0;_<f.length;_++){const v=u.getTexture(f[_]);if(v){let g=f[_].constructor.name;g=g.substring(12,g.length);const p=a(v,g,h);d.push(p),v.delete()}}return d}function a(u,f,h){const d={type:f},_=h.getEmbeddedFileAsBase64(u.fileName);d.wrapU=u.wrapU,d.wrapV=u.wrapV,d.wrapW=u.wrapW;const v=u.uvwTransform.toFloatArray(!0);return d.repeat=[v[0],v[5]],_?d.image="data:image/png;base64,"+_:(self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Image for ${f} texture not embedded in file.`,type:"missing resource"}}),d.image=null),d}function o(u,f){const h=u.geometry(),d=u.attributes();let _=h.objectType,v,g,p,M,b;switch(_){case t.ObjectType.Curve:const C=c(h,100);p={},g={},M={},p.itemSize=3,p.type="Float32Array",p.array=[];for(let R=0;R<C.length;R++)p.array.push(C[R][0]),p.array.push(C[R][1]),p.array.push(C[R][2]);g.position=p,M.attributes=g,v={data:M};break;case t.ObjectType.Point:const k=h.location;p={};const D={};g={},M={},p.itemSize=3,p.type="Float32Array",p.array=[k[0],k[1],k[2]];const O=d.drawColor(f);D.itemSize=3,D.type="Float32Array",D.array=[O.r/255,O.g/255,O.b/255],g.position=p,g.color=D,M.attributes=g,v={data:M};break;case t.ObjectType.PointSet:case t.ObjectType.Mesh:v=h.toThreejsJSON();break;case t.ObjectType.Brep:const K=h.faces();b=new t.Mesh;for(let R=0;R<K.count;R++){const y=K.get(R),L=y.getMesh(t.MeshType.Any);L&&(b.append(L),L.delete()),y.delete()}b.faces().count>0&&(b.compact(),v=b.toThreejsJSON(),K.delete()),b.delete();break;case t.ObjectType.Extrusion:b=h.getMesh(t.MeshType.Any),b&&(v=b.toThreejsJSON(),b.delete());break;case t.ObjectType.TextDot:v=l(h);break;case t.ObjectType.Light:v=l(h),v.lightStyle.name==="LightStyle_WorldLinear"&&self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: No conversion exists for ${_.constructor.name} ${v.lightStyle.name}`,type:"no conversion",guid:d.id}});break;case t.ObjectType.InstanceReference:v=l(h),v.xform=l(h.xform),v.xform.array=h.xform.toFloatArray(!0);break;case t.ObjectType.SubD:h.subdivide(3),b=t.Mesh.createFromSubDControlNet(h,!1),b&&(v=b.toThreejsJSON(),b.delete());break;default:self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Conversion not implemented for ${_.constructor.name}`,type:"not implemented",guid:d.id}});break}if(v)return g=l(d),g.geometry=l(h),d.groupCount>0&&(g.groupIds=d.getGroupList()),d.userStringCount>0&&(g.userStrings=d.getUserStrings()),h.userStringCount>0&&(g.geometry.userStrings=h.getUserStrings()),d.decals().count>0&&self.postMessage({type:"warning",id:i,data:{message:"THREE.3DMLoader: No conversion exists for the decals associated with this object.",type:"no conversion",guid:d.id}}),g.drawColor=d.drawColor(f),_=_.constructor.name,_=_.substring(11,_.length),{geometry:v,attributes:g,objectType:_};self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: ${_.constructor.name} has no associated mesh geometry.`,type:"missing mesh",guid:d.id}})}function l(u){const f={};for(const h in u){const d=u[h];typeof d!="function"&&(typeof d=="object"&&d!==null&&d.hasOwnProperty("constructor")?f[h]={name:d.constructor.name,value:d.value}:typeof d=="object"&&d!==null?f[h]=l(d):f[h]=d)}return f}function c(u,f){let h=f,d=[];const _=[];if(u instanceof t.LineCurve)return[u.pointAtStart,u.pointAtEnd];if(u instanceof t.PolylineCurve){h=u.pointCount;for(let p=0;p<h;p++)d.push(u.point(p));return d}if(u instanceof t.PolyCurve){const p=u.segmentCount;for(let M=0;M<p;M++){const b=u.segmentCurve(M),C=c(b,h);d=d.concat(C),b.delete()}return d}if(u instanceof t.ArcCurve&&(h=Math.floor(u.angleDegrees/5),h=h<2?2:h),u instanceof t.NurbsCurve&&u.degree===1){const p=u.tryGetPolyline();for(let M=0;M<p.count;M++)d.push(p.get(M));return p.delete(),d}const v=u.domain,g=h-1;for(let p=0;p<h;p++){const M=v[0]+p/g*(v[1]-v[0]);if(M===v[0]||M===v[1]){_.push(M);continue}const b=u.tangentAt(M),C=u.tangentAt(_.slice(-1)[0]),k=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],D=C[0]*C[0]+C[1]*C[1]+C[2]*C[2],O=Math.sqrt(k*D);let K;if(O===0)K=Math.PI/2;else{const R=(b.x*C.x+b.y*C.y+b.z*C.z)/O;K=Math.acos(Math.max(-1,Math.min(1,R)))}K<.1||_.push(M)}return d=_.map(p=>u.pointAt(p)),d}}const rm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qE=new Lu(-1,1,1,-1,0,1);class jE extends xn{constructor(){super(),this.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new si([0,2,0,0,2,0],2))}}const KE=new jE;class Uu{constructor(e){this._mesh=new ci(KE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class am extends dr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fo.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Uu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nh extends dr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ZE extends dr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $E{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Xe);this._width=i.width,this._height=i.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new am(rm),this.copyPass.material.blending=Nn,this.clock=new Tv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nh!==void 0&&(a instanceof Nh?i=!0:a instanceof ZE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class JE extends dr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}class ji extends dr{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Qe(1,1,1),this.hiddenEdgeColor=new Qe(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new rn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Yp,this.depthMaterial.side=Tn,this.depthMaterial.depthPacking=wp,this.depthMaterial.blending=Nn,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Tn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new rn(this.resolution.x,this.resolution.y,{type:Wt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new rn(r,a,{type:Wt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new rn(r,a,{type:Wt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new rn(Math.round(r/2),Math.round(a/2),{type:Wt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new rn(r,a,{type:Wt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new rn(Math.round(r/2),Math.round(a/2),{type:Wt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=rm;this.copyUniforms=Fo.clone(c.uniforms),this.materialCopy=new Yt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Qe,this.oldClearAlpha=1,this._fsQuad=new Uu(null),this.tempPulseColor1=new Qe,this.tempPulseColor2=new Qe,this.textureMatrix=new Mt;function u(f,h){const d=h.isPerspectiveCamera?"perspective":"orthographic";return f.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ji.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!i.has(r)){const a=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,a)}}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Yt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Xe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new Yt({uniforms:{maskTexture:{value:null},texSize:{value:new Xe(.5,.5)},visibleEdgeColor:{value:new Z(1,1,1)},hiddenEdgeColor:{value:new Z(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new Yt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new Yt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:ic,depthTest:!1,depthWrite:!1,transparent:!0})}}ji.BlurDirectionX=new Xe(1,0);ji.BlurDirectionY=new Xe(0,1);const $a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class QE extends dr{constructor(){super(),this.uniforms=Fo.clone($a.uniforms),this.material=new av({name:$a.name,uniforms:this.uniforms,vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader}),this._fsQuad=new Uu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_p?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===gp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const eT={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Xe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},tT=new Set(["Max_height","Occupied_voxels","Max_voxels","Potential"]);function $c(n){if(n==null)return"";const e=String(n).trim();if(!e)return"";const t=Number(e);return Number.isFinite(t)?String(t):e}function Fh(n){if(!n)return{};if(Array.isArray(n)){if(n.length>0&&Array.isArray(n[0]))return Object.fromEntries(n);const e={};for(let t=0;t<n.length-1;t+=2){const i=n[t],s=n[t+1];typeof i=="string"&&(e[i]=s)}return e}return typeof n=="object"?{...n}:{}}function nT(n,e){if(e==null)return"";const t=String(e).trim();if(!tT.has(n))return t;const i=Number(t);return Number.isFinite(i)?i:t}function zo(n,e){var r,a,o,l,c;const t=Fh((a=(r=n==null?void 0:n.userData)==null?void 0:r.attributes)==null?void 0:a.userStrings),s={...Fh((c=(l=(o=n==null?void 0:n.userData)==null?void 0:o.attributes)==null?void 0:l.geometry)==null?void 0:c.userStrings),...t};return e.reduce((u,f)=>(u[f]=nT(f,s[f]),u),{})}function iT(n,e,t){let i=n;for(;i;){if(i.isMesh){const s=zo(i,t);if($c(s.Plot))return{mesh:i,metadata:s}}if(i===e)break;i=i.parent}return null}function sT(n,e){const t=$c(e);if(!n||!t)return[];const i=[];return n.traverse(s=>{if(!s.isMesh)return;const r=zo(s,["Plot"]);$c(r.Plot)===t&&i.push(s)}),i}function rT(n,e){return e.reduce((t,i)=>{const s=n.map(r=>zo(r,[i])[i]).find(r=>r!==""&&r!==void 0&&r!==null);return t[i]=s??"",t},{})}function aT(n){const{containerRef:e,config:t,onSelectionChange:i,onFilterBoundsChange:s=()=>{},onViewerError:r}=n,a=new XE;a.setLibraryPath(t.rhinoLibraryPath);const o=new wv,l=new Xe,c=new Z,u=new Z,f=new ur,h=new Map,d=Object.fromEntries((t.filterableFields??[]).map(V=>[V,{min:null,max:null}]));let _=0,v,g,p,M,b,C,k,D,O=null,K=null,R=0,y=null;function L(V){i(V)}function X(){Lt.DEFAULT_UP.set(0,0,1),g=new $_,g.background=new Qe("#f1f1f1"),p=new mn(40,1,.1,3e3),p.position.set(-220,-190,150),M=new pE({antialias:!0}),M.setPixelRatio(window.devicePixelRatio),M.outputColorSpace=yn,b=new $E(M);const V=new JE(g,p);b.addPass(V),C=new ji(new Xe(1,1),g,p),C.visibleEdgeColor.set("#ffe36e"),C.hiddenEdgeColor.set("#c59d16"),C.edgeStrength=4,C.edgeGlow=.15,C.edgeThickness=1.2,C.pulsePeriod=0,b.addPass(C),k=new am(eT),b.addPass(k),b.addPass(new QE),D=new gE(p,M.domElement),D.enableDamping=!0,D.dampingFactor=.08;const W=new qc("#fff3d8",3);W.position.set(-80,-60,150);const ce=new qc("#94b6ff",1.4);ce.position.set(130,80,110);const $=new Sv("#f1f5ff",.8);g.add(W,ce,$)}function se(){const V=e.value;if(!V)return!1;const W=V.clientWidth,ce=V.clientHeight;if(!W||!ce)return!1;p.aspect=W/ce,p.updateProjectionMatrix(),M.setSize(W,ce,!1),b.setSize(W,ce);const $=M.getPixelRatio();return C.setSize(W*$,ce*$),k.material.uniforms.resolution.value.set(1/(W*$),1/(ce*$)),!0}function pe(V=10){se()||V<=0||(R=window.requestAnimationFrame(()=>{pe(V-1)}))}function ee(){D.update(),b.render(),_=window.requestAnimationFrame(ee)}function J(V,W=1.2){if(f.makeEmpty(),V.forEach(E=>f.expandByObject(E)),f.isEmpty())return;f.getSize(c),f.getCenter(u);const $=Math.max(c.x,c.y,c.z)/(2*Math.atan(Math.PI*p.fov/360)),me=$/p.aspect,te=W*Math.max($,me),ve=D.target.clone().sub(p.position).normalize().multiplyScalar(te);D.target.copy(u),p.near=Math.max(te/100,.1),p.far=te*100,p.updateProjectionMatrix(),p.position.copy(D.target).sub(ve),D.update()}function oe(V){if(V.isMesh){if(Array.isArray(V.material)){V.material=V.material.map(W=>W.clone());return}V.material=V.material.clone(),V.material.transparent=!0,V.material.opacity=.35}}function Q(V){if(V===""||V===null||V===void 0)return null;const W=Number(V);return Number.isFinite(W)?W:null}function Me(){return Object.fromEntries((t.filterableFields??[]).map(V=>{var ve;const W=(ve=t.filterBounds)==null?void 0:ve[V];if(W)return[V,{min:W.min,max:W.max,step:W.step??1}];const ce=[];if(h.forEach(E=>{const S=Number(E[V]);Number.isFinite(S)&&ce.push(S)}),!ce.length)return[V,{min:0,max:1,step:1}];const $=Math.min(...ce),me=Math.max(...ce),te=ce.some(E=>!Number.isInteger(E))?.1:1;return[V,{min:$,max:me,step:te}]}))}function Te(V){const W=h.get(V);return W?Object.entries(d).every(([ce,$])=>{if($.min===null&&$.max===null)return!0;const me=Number(W[ce]);return!(!Number.isFinite(me)||$.min!==null&&me<$.min||$.max!==null&&me>$.max)}):!0}function Oe(){K&&K.traverse(V=>{V.isMesh&&(V.visible=Te(V))})}function He(V,W,ce){var te;const $=(te=V==null?void 0:V.userData)==null?void 0:te.layers;if(!V||!Array.isArray($)||!W)return;const me=new Qe(ce);V.traverse(ve=>{var G,ae;if(!ve.isMesh)return;const E=(ae=(G=ve.userData)==null?void 0:G.attributes)==null?void 0:ae.layerIndex;if(typeof E!="number")return;const S=$[E];if(!(!S||S.name!==W)){if(Array.isArray(ve.material)){ve.material=ve.material.map(de=>{const ne=de.clone();return ne.color.copy(me),ne});return}ve.material=ve.material.clone(),ve.material.color.copy(me)}})}function $e(){C.selectedObjects=[]}function rt(V){$e(),C.selectedObjects=V}function it(){$e(),L({status:"idle",metadata:null,voxelPath:null,message:""})}function re(V){return new Promise((W,ce)=>{a.load(V,W,void 0,ce)})}function z(){y=null}function ue(V){if(!y)return 0;const W=V.clientX-y.startX,ce=V.clientY-y.startY;return Math.hypot(W,ce)}function ge(V){V.button===0&&(y={startTime:performance.now(),startX:V.clientX,startY:V.clientY,moved:!1})}function _e(V){y&&ue(V)>(t.clickSelectionMaxMovementPx??6)&&(y.moved=!0)}function De(V){if(!y||V.button!==0){z();return}const W=performance.now()-y.startTime,ce=y.moved||ue(V)>(t.clickSelectionMaxMovementPx??6);z(),!(ce||W>(t.clickSelectionMaxDurationMs??180))&&U(V)}function I(V){if(!K)throw new Error("The voxel metadata model is not loaded.");if(!String(V??"").trim())throw new Error("The selected block is missing a Plot value.");const W=sT(K,V).filter(ce=>ce.visible&&Te(ce));if(!W.length)throw new Error(`No voxel metadata was found for Plot ${V}.`);return{voxelPath:t.sunVoxelModelPath,metadata:rT(W,t.requiredMetadata),matchingMeshes:W}}async function U(V){if(!K)return;const W=M.domElement.getBoundingClientRect();l.x=(V.clientX-W.left)/W.width*2-1,l.y=-((V.clientY-W.top)/W.height)*2+1,o.setFromCamera(l,p);const ce=o.intersectObject(K,!0).filter(me=>me.object.visible);if(!ce.length){it();return}const $=iT(ce[0].object,K,t.selectionMetadata);if(!$){L({status:"error",metadata:null,voxelPath:null,message:"The clicked object does not expose Plot metadata."});return}L({status:"loading",metadata:null,voxelPath:null,message:"Loading matching voxel metadata."});try{const{voxelPath:me,metadata:te,matchingMeshes:ve}=I($.metadata.Plot);rt(ve),J(ve,1.35),L({status:"ready",metadata:te,voxelPath:me,message:""})}catch(me){L({status:"error",metadata:$.metadata,voxelPath:null,message:me instanceof Error?me.message:"Unable to load the matching voxel metadata."})}}async function Y(){L({status:"loading",metadata:null,voxelPath:null,message:"Loading context and voxel models."});try{[O,K]=await Promise.all([t.staticContextModelPath?re(t.staticContextModelPath):Promise.resolve(null),re(t.sunVoxelModelPath)]),He(O,"Sunspots","#ffd84d"),K.traverse(ce=>{oe(ce),ce.isMesh&&h.set(ce,zo(ce,t.requiredMetadata))}),s(Me()),K.visible=!0,Oe(),O&&g.add(O),g.add(K),J(O?[O,K]:[K]),L({status:"idle",metadata:null,voxelPath:null,message:""})}catch(V){const W=V instanceof Error?V.message:"Unable to load the Rhino models.";L({status:"error",metadata:null,voxelPath:null,message:`Failed to load ${t.staticContextModelPath} or ${t.sunVoxelModelPath}. ${W}`}),r(W)}}function w(V){(t.filterableFields??[]).forEach(W=>{const ce=(V==null?void 0:V[W])??{};d[W]={min:Q(ce.min),max:Q(ce.max)}}),$e(),Oe()}return Ed(async()=>{try{X();const V=e.value;if(!V)throw new Error("The viewer container did not mount.");V.appendChild(M.domElement),M.domElement.addEventListener("pointerdown",ge),M.domElement.addEventListener("pointermove",_e),M.domElement.addEventListener("pointerup",De),M.domElement.addEventListener("pointercancel",z),M.domElement.addEventListener("pointerleave",z),v=new ResizeObserver(()=>se()),v.observe(V),pe(),ee(),await Y()}catch(V){const W=V instanceof Error?V.message:"Unable to initialize the viewer.";L({status:"error",metadata:null,voxelPath:null,message:W}),r(W)}}),Td(()=>{window.cancelAnimationFrame(_),window.cancelAnimationFrame(R),M==null||M.domElement.removeEventListener("pointerdown",ge),M==null||M.domElement.removeEventListener("pointermove",_e),M==null||M.domElement.removeEventListener("pointerup",De),M==null||M.domElement.removeEventListener("pointercancel",z),M==null||M.domElement.removeEventListener("pointerleave",z),v==null||v.disconnect(),$e(),z(),D==null||D.dispose(),b==null||b.dispose(),a.dispose(),M==null||M.dispose()}),{setVoxelFilters:w}}const oT={class:"project-layout project-layout--viewer-only"},lT={ref:"container",class:"project-layout__viewer"},cT={key:0,class:"viewer-note"},uT={class:"viewer-note__section"},fT={class:"metadata-list metadata-list--compact"},hT={key:1,class:"viewer-bottom-filter"},dT=["aria-label"],pT={class:"viewer-bottom-filter__header"},mT={class:"viewer-bottom-filter__label-row"},gT={class:"viewer-bottom-filter__label"},xT={class:"viewer-bottom-filter__info"},_T=["aria-expanded"],vT={key:0,id:"potential-filter-info",class:"viewer-bottom-filter__info-popover",role:"note"},ST={class:"range-slider__values"},bT={class:"range-slider range-slider--floating"},yT=["min","max","step","value"],MT=["min","max","step","value"],ET={class:"filter-drawer","aria-label":"Filters"},TT={class:"filter-list"},wT={class:"filter-group__header"},AT={class:"filter-group__label"},CT={class:"range-slider__values"},RT={class:"range-slider"},PT=["min","max","step","value","onInput"],DT=["min","max","step","value","onInput"],Oh="Potential",LT={__name:"SolarScapeView",setup(n){const e=t0("container"),t=Ja(!1),i=Ja(!1),s=Ja(!1),r=pi.filterBounds??{},a=ms(Object.fromEntries(pi.filterableFields.map(y=>{const L=r[y]??{min:0,max:100,step:1};return[y,{min:L.min,max:L.max,step:L.step??1}]}))),o=ms(Object.fromEntries(pi.filterableFields.map(y=>{const L=r[y]??{min:0,max:100};return[y,{min:L.min,max:L.max}]}))),l=ln(()=>pi.requiredMetadata.map(y=>({key:y,label:pi.fieldLabels[y]??y}))),c=ln(()=>pi.filterableFields.map(y=>({key:y,label:pi.fieldLabels[y]??y}))),u=ln(()=>c.value.find(y=>y.key===Oh)??null),f=ln(()=>c.value.filter(y=>y.key!==Oh)),h=ms({status:"idle",metadata:null,voxelPath:null,message:""});function d(y){h.status=y.status,h.metadata=y.metadata,h.voxelPath=y.voxelPath,h.message=y.message}function _(y){h.status="error",h.metadata=null,h.voxelPath=null,h.message=y}function v(y){c.value.forEach(({key:L})=>{y[L]&&(a[L].min=y[L].min,a[L].max=y[L].max,a[L].step=y[L].step)}),C(),i.value=!0}const g=aT({containerRef:e,config:pi,onSelectionChange:d,onFilterBoundsChange:v,onViewerError:_});Fr(o,y=>{i.value&&g.setVoxelFilters(y)},{deep:!0});function p(){t.value=!t.value}function M(){t.value=!1}function b(){s.value=!s.value}function C(){c.value.forEach(({key:y})=>{o[y].min=a[y].min,o[y].max=a[y].max})}function k(y,L){const X=Number(L.target.value);o[y].min=Math.min(X,o[y].max)}function D(y,L){const X=Number(L.target.value);o[y].max=Math.max(X,o[y].min)}function O(y){const L=a[y],X=Math.max(L.max-L.min,1),se=(o[y].min-L.min)/X*100,pe=100-(o[y].max-L.min)/X*100;return{left:`${se}%`,right:`${pe}%`}}function K(y,L,X=1){var J;if(L==null||L==="")return"Missing";const se=Number(L),pe=((J=pi.valuePrefixes)==null?void 0:J[y])??"";if(!Number.isFinite(se))return`${pe}${String(L)}`;const ee=X<1?se.toFixed(1):String(Math.round(se));return`${pe}${ee}`}function R(y,L,X){return Number.isFinite(L)?K(y,L,X):""}return(y,L)=>(pn(),bn("main",oT,[je("section",lT,[je("button",{type:"button",class:"filter-trigger",onClick:p,"aria-label":"Open filters"},[...L[2]||(L[2]=[je("span",{class:"filter-trigger__icon","aria-hidden":"true"},[je("span"),je("span"),je("span")],-1),je("span",{class:"filter-trigger__label"},"Filters",-1)])]),h.status==="ready"?(pn(),bn("div",cT,[je("section",uT,[L[3]||(L[3]=je("h2",{class:"viewer-note__title"},"Solar envelope info",-1)),je("dl",fT,[(pn(!0),bn(En,null,ho(l.value,X=>{var se;return pn(),bn("div",{key:X.key,class:"metadata-list__row"},[je("dt",null,Pn(X.label),1),je("dd",null,Pn(K(X.key,(se=h.metadata)==null?void 0:se[X.key])),1)])}),128))])])])):va("",!0),u.value?(pn(),bn("div",hT,[je("section",{class:"viewer-bottom-filter__card","aria-label":`${u.value.label} filter`},[je("div",pT,[je("div",mT,[je("label",gT,Pn(u.value.label),1),je("div",xT,[je("button",{type:"button",class:"viewer-bottom-filter__info-button","aria-expanded":s.value?"true":"false","aria-controls":"potential-filter-info","aria-label":"Explain potential",onClick:b}," i ",8,_T),s.value?(pn(),bn("div",vT," Ratio between the maximum buildable volume allowed by sun regulations and the existing built volume ")):va("",!0)])]),je("div",ST,[je("span",null,Pn(R(u.value.key,o[u.value.key].min,a[u.value.key].step)),1),je("span",null,Pn(R(u.value.key,o[u.value.key].max,a[u.value.key].step)),1)])]),je("div",bT,[L[4]||(L[4]=je("div",{class:"range-slider__track"},null,-1)),je("div",{class:"range-slider__active",style:Xr(O(u.value.key))},null,4),je("input",{class:"range-slider__input",type:"range",min:a[u.value.key].min,max:a[u.value.key].max,step:a[u.value.key].step,value:o[u.value.key].min,onInput:L[0]||(L[0]=X=>k(u.value.key,X))},null,40,yT),je("input",{class:"range-slider__input",type:"range",min:a[u.value.key].min,max:a[u.value.key].max,step:a[u.value.key].step,value:o[u.value.key].max,onInput:L[1]||(L[1]=X=>D(u.value.key,X))},null,40,MT)])],8,dT)])):va("",!0),t.value?(pn(),bn("div",{key:2,class:"filter-overlay",onClick:yg(M,["self"])},[je("aside",ET,[je("div",{class:"filter-drawer__header"},[L[5]||(L[5]=je("div",{class:"filter-drawer__heading"},[je("p",{class:"filter-drawer__eyebrow"},"Voxel filters"),je("h2",{class:"filter-drawer__title"},"Refine the visible range")],-1)),je("button",{type:"button",class:"filter-close",onClick:M,"aria-label":"Close filters"}," Close ")]),L[7]||(L[7]=je("p",{class:"filter-drawer__copy"},"Adjust both handles to keep only the values you want visible in the scene.",-1)),je("div",TT,[(pn(!0),bn(En,null,ho(f.value,X=>(pn(),bn("section",{key:X.key,class:"filter-group"},[je("div",wT,[je("label",AT,Pn(X.label),1),je("div",CT,[je("span",null,Pn(R(X.key,o[X.key].min,a[X.key].step)),1),je("span",null,Pn(R(X.key,o[X.key].max,a[X.key].step)),1)])]),je("div",RT,[L[6]||(L[6]=je("div",{class:"range-slider__track"},null,-1)),je("div",{class:"range-slider__active",style:Xr(O(X.key))},null,4),je("input",{class:"range-slider__input",type:"range",min:a[X.key].min,max:a[X.key].max,step:a[X.key].step,value:o[X.key].min,onInput:se=>k(X.key,se)},null,40,PT),je("input",{class:"range-slider__input",type:"range",min:a[X.key].min,max:a[X.key].max,step:a[X.key].step,value:o[X.key].max,onInput:se=>D(X.key,se)},null,40,DT)])]))),128))]),je("div",{class:"filter-drawer__actions"},[je("button",{type:"button",class:"filter-reset",onClick:C},"Reset")])])])):va("",!0)],512)]))}},IT=Lx({history:hx("/Solar_Scape/"),routes:[{path:"/",name:"home",component:zx},{path:"/projects/solar-scape",name:"solar-scape",component:LT}]});Tg(Ox).use(IT).mount("#app");
