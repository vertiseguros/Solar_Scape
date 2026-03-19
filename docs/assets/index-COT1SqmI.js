(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},jr=[],ti=()=>{},Bh=()=>!1,To=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qc=n=>n.startsWith("onUpdate:"),jt=Object.assign,eu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},om=Object.prototype.hasOwnProperty,xt=(n,e)=>om.call(n,e),rt=Array.isArray,Kr=n=>aa(n)==="[object Map]",kh=n=>aa(n)==="[object Set]",Nu=n=>aa(n)==="[object Date]",ot=n=>typeof n=="function",Nt=n=>typeof n=="string",si=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",zh=n=>(vt(n)||ot(n))&&ot(n.then)&&ot(n.catch),Vh=Object.prototype.toString,aa=n=>Vh.call(n),lm=n=>aa(n).slice(8,-1),Hh=n=>aa(n)==="[object Object]",tu=n=>Nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Us=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cm=/-\w/g,Vn=wo(n=>n.replace(cm,e=>e.slice(1).toUpperCase())),um=/\B([A-Z])/g,vr=wo(n=>n.replace(um,"-$1").toLowerCase()),Gh=wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wo=wo(n=>n?`on${Gh(n)}`:""),$n=(n,e)=>!Object.is(n,e),Xo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Wh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Fu;const Ao=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ys(n){if(rt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Nt(i)?mm(i):Ys(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Nt(n)||vt(n))return n}const hm=/;(?![^(]*\))/g,dm=/:([^]+)/,pm=/\/\*[^]*?\*\//g;function mm(n){const e={};return n.replace(pm,"").split(hm).forEach(t=>{if(t){const i=t.split(dm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Co(n){let e="";if(Nt(n))e=n;else if(rt(n))for(let t=0;t<n.length;t++){const i=Co(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xm=Jc(gm);function Xh(n){return!!n||n===""}function _m(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=nu(n[i],e[i]);return t}function nu(n,e){if(n===e)return!0;let t=Nu(n),i=Nu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=si(n),i=si(e),t||i)return n===e;if(t=rt(n),i=rt(e),t||i)return t&&i?_m(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!nu(n[a],e[a]))return!1}}return String(n)===String(e)}const Yh=n=>!!(n&&n.__v_isRef===!0),yn=n=>Nt(n)?n:n==null?"":rt(n)||vt(n)&&(n.toString===Vh||!ot(n.toString))?Yh(n)?yn(n.value):JSON.stringify(n,qh,2):String(n),qh=(n,e)=>Yh(e)?qh(n,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Yo(i,s)+" =>"]=r,t),{})}:kh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Yo(t))}:si(e)?Yo(e):vt(e)&&!rt(e)&&!Hh(e)?String(e):e,Yo=(n,e="")=>{var t;return si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pn;class vm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=pn;try{return pn=this,e()}finally{pn=t}}}on(){++this._on===1&&(this.prevScope=pn,pn=this)}off(){this._on>0&&--this._on===0&&(pn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Sm(){return pn}let At;const qo=new WeakSet;class jh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pn&&pn.active&&pn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),$h(this);const e=At,t=Hn;At=this,Hn=!0;try{return this.fn()}finally{Jh(this),At=e,Hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)su(e);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let Kh=0,Ns,Fs;function Zh(n,e=!1){if(n.flags|=8,e){n.next=Fs,Fs=n;return}n.next=Ns,Ns=n}function iu(){Kh++}function ru(){if(--Kh>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ns;){let e=Ns;for(Ns=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $h(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),su(i),bm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Hl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Qh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qs)||(n.globalVersion=qs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hl(n))))return;n.flags|=2;const e=n.dep,t=At,i=Hn;At=n,Hn=!0;try{$h(n);const r=n.fn(n._value);(e.version===0||$n(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{At=t,Hn=i,Jh(n),n.flags&=-3}}function su(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)su(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function bm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Hn=!0;const ed=[];function Ci(){ed.push(Hn),Hn=!1}function Ri(){const n=ed.pop();Hn=n===void 0?!0:n}function Ou(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=At;At=void 0;try{e()}finally{At=t}}}let qs=0;class ym{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!Hn||At===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==At)t=this.activeLink=new ym(At,this),At.deps?(t.prevDep=At.depsTail,At.depsTail.nextDep=t,At.depsTail=t):At.deps=At.depsTail=t,td(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=At.depsTail,t.nextDep=void 0,At.depsTail.nextDep=t,At.depsTail=t,At.deps===t&&(At.deps=i)}return t}trigger(e){this.version++,qs++,this.notify(e)}notify(e){iu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ru()}}}function td(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)td(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Gl=new WeakMap,pr=Symbol(""),Wl=Symbol(""),js=Symbol("");function $t(n,e,t){if(Hn&&At){let i=Gl.get(n);i||Gl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new au),r.map=i,r.key=t),r.track()}}function Ti(n,e,t,i,r,s){const a=Gl.get(n);if(!a){qs++;return}const o=l=>{l&&l.trigger()};if(iu(),e==="clear")a.forEach(o);else{const l=rt(n),c=l&&tu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===js||!si(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(js)),e){case"add":l?c&&o(a.get("length")):(o(a.get(pr)),Kr(n)&&o(a.get(Wl)));break;case"delete":l||(o(a.get(pr)),Kr(n)&&o(a.get(Wl)));break;case"set":Kr(n)&&o(a.get(pr));break}}ru()}function Mr(n){const e=gt(n);return e===n?e:($t(e,"iterate",js),Un(n)?e:e.map(Gn))}function Ro(n){return $t(n=gt(n),"iterate",js),n}function jn(n,e){return Pi(n)?ts(gr(n)?Gn(e):e):Gn(e)}const Mm={__proto__:null,[Symbol.iterator](){return jo(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return Mr(this).concat(...n.map(e=>rt(e)?Mr(e):e))},entries(){return jo(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,e){return hi(this,"every",n,e,void 0,arguments)},filter(n,e){return hi(this,"filter",n,e,t=>t.map(i=>jn(this,i)),arguments)},find(n,e){return hi(this,"find",n,e,t=>jn(this,t),arguments)},findIndex(n,e){return hi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hi(this,"findLast",n,e,t=>jn(this,t),arguments)},findLastIndex(n,e){return hi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,e){return hi(this,"map",n,e,void 0,arguments)},pop(){return _s(this,"pop")},push(...n){return _s(this,"push",n)},reduce(n,...e){return Bu(this,"reduce",n,e)},reduceRight(n,...e){return Bu(this,"reduceRight",n,e)},shift(){return _s(this,"shift")},some(n,e){return hi(this,"some",n,e,void 0,arguments)},splice(...n){return _s(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return _s(this,"unshift",n)},values(){return jo(this,"values",n=>jn(this,n))}};function jo(n,e,t){const i=Ro(n),r=i[e]();return i!==n&&!Un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Em=Array.prototype;function hi(n,e,t,i,r,s){const a=Ro(n),o=a!==n&&!Un(n),l=a[e];if(l!==Em[e]){const f=l.apply(n,s);return o?Gn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,jn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Bu(n,e,t,i){const r=Ro(n),s=r!==n&&!Un(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=jn(n,c)),t.call(this,c,jn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?jn(n,l):l}function Ko(n,e,t){const i=gt(n);$t(i,"iterate",js);const r=i[e](...t);return(r===-1||r===!1)&&cu(t[0])?(t[0]=gt(t[0]),i[e](...t)):r}function _s(n,e,t=[]){Ci(),iu();const i=gt(n)[e].apply(n,t);return ru(),Ri(),i}const Tm=Jc("__proto__,__v_isRef,__isVue"),nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(si));function wm(n){si(n)||(n=String(n));const e=gt(this);return $t(e,"has",n),e.hasOwnProperty(n)}class id{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Fm:od:s?ad:sd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=rt(e);if(!r){let l;if(a&&(l=Mm[t]))return l;if(t==="hasOwnProperty")return wm}const o=Reflect.get(e,t,Qt(e)?e:i);if((si(t)?nd.has(t):Tm(t))||(r||$t(e,"get",t),s))return o;if(Qt(o)){const l=a&&tu(t)?o:o.value;return r&&vt(l)?Yl(l):l}return vt(o)?r?Yl(o):mr(o):o}}class rd extends id{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=rt(e)&&tu(t);if(!this._isShallow){const c=Pi(s);if(!Un(i)&&!Pi(i)&&(s=gt(s),i=gt(i)),!a&&Qt(s)&&!Qt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:xt(e,t),l=Reflect.set(e,t,i,Qt(e)?e:r);return e===gt(r)&&(o?$n(i,s)&&Ti(e,"set",t,i):Ti(e,"add",t,i)),l}deleteProperty(e,t){const i=xt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ti(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!si(t)||!nd.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",rt(e)?"length":pr),Reflect.ownKeys(e)}}class Am extends id{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Cm=new rd,Rm=new Am,Pm=new rd(!0);const Xl=n=>n,xa=n=>Reflect.getPrototypeOf(n);function Dm(n,e,t){return function(...i){const r=this.__v_raw,s=gt(r),a=Kr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Xl:e?ts:Gn;return!e&&$t(s,"iterate",l?Wl:pr),jt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function _a(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Lm(n,e){const t={get(r){const s=this.__v_raw,a=gt(s),o=gt(r);n||($n(r,o)&&$t(a,"get",r),$t(a,"get",o));const{has:l}=xa(a),c=e?Xl:n?ts:Gn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&$t(gt(r),"iterate",pr),r.size},has(r){const s=this.__v_raw,a=gt(s),o=gt(r);return n||($n(r,o)&&$t(a,"has",r),$t(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=gt(o),c=e?Xl:n?ts:Gn;return!n&&$t(l,"iterate",pr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return jt(t,n?{add:_a("add"),set:_a("set"),delete:_a("delete"),clear:_a("clear")}:{add(r){const s=gt(this),a=xa(s),o=gt(r),l=!e&&!Un(r)&&!Pi(r)?o:r;return a.has.call(s,l)||$n(r,l)&&a.has.call(s,r)||$n(o,l)&&a.has.call(s,o)||(s.add(l),Ti(s,"add",l,l)),this},set(r,s){!e&&!Un(s)&&!Pi(s)&&(s=gt(s));const a=gt(this),{has:o,get:l}=xa(a);let c=o.call(a,r);c||(r=gt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?$n(s,u)&&Ti(a,"set",r,s):Ti(a,"add",r,s),this},delete(r){const s=gt(this),{has:a,get:o}=xa(s);let l=a.call(s,r);l||(r=gt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ti(s,"delete",r,void 0),c},clear(){const r=gt(this),s=r.size!==0,a=r.clear();return s&&Ti(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Dm(r,n,e)}),t}function ou(n,e){const t=Lm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(xt(t,r)&&r in i?t:i,r,s)}const Im={get:ou(!1,!1)},Um={get:ou(!1,!0)},Nm={get:ou(!0,!1)};const sd=new WeakMap,ad=new WeakMap,od=new WeakMap,Fm=new WeakMap;function Om(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bm(n){return n.__v_skip||!Object.isExtensible(n)?0:Om(lm(n))}function mr(n){return Pi(n)?n:lu(n,!1,Cm,Im,sd)}function ld(n){return lu(n,!1,Pm,Um,ad)}function Yl(n){return lu(n,!0,Rm,Nm,od)}function lu(n,e,t,i,r){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Bm(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function gr(n){return Pi(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function Pi(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function cu(n){return n?!!n.__v_raw:!1}function gt(n){const e=n&&n.__v_raw;return e?gt(e):n}function km(n){return!xt(n,"__v_skip")&&Object.isExtensible(n)&&Wh(n,"__v_skip",!0),n}const Gn=n=>vt(n)?mr(n):n,ts=n=>vt(n)?Yl(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function Ja(n){return ud(n,!1)}function cd(n){return ud(n,!0)}function ud(n,e){return Qt(n)?n:new zm(n,e)}class zm{constructor(e,t){this.dep=new au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:gt(e),this._value=t?e:Gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||Pi(e);e=i?e:gt(e),$n(e,t)&&(this._rawValue=e,this._value=i?e:Gn(e),this.dep.trigger())}}function ni(n){return Qt(n)?n.value:n}const Vm={get:(n,e,t)=>e==="__v_raw"?n:ni(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Qt(r)&&!Qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function fd(n){return gr(n)?n:new Proxy(n,Vm)}class Hm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return Zh(this,!0),!0}get value(){const e=this.dep.track();return Qh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gm(n,e,t=!1){let i,r;return ot(n)?i=n:(i=n.get,r=n.set),new Hm(i,r,t)}const va={},lo=new WeakMap;let ur;function Wm(n,e=!1,t=ur){if(t){let i=lo.get(t);i||lo.set(t,i=[]),i.push(n)}}function Xm(n,e,t=Tt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=A=>r?A:Un(A)||r===!1||r===0?Gi(A,1):Gi(A);let u,f,h,d,v=!1,S=!1;if(Qt(n)?(f=()=>n.value,v=Un(n)):gr(n)?(f=()=>c(n),v=!0):rt(n)?(S=!0,v=n.some(A=>gr(A)||Un(A)),f=()=>n.map(A=>{if(Qt(A))return A.value;if(gr(A))return c(A);if(ot(A))return l?l(A,2):A()})):ot(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ci();try{h()}finally{Ri()}}const A=ur;ur=u;try{return l?l(n,3,[d]):n(d)}finally{ur=A}}:f=ti,e&&r){const A=f,B=r===!0?1/0:r;f=()=>Gi(A(),B)}const x=Sm(),p=()=>{u.stop(),x&&x.active&&eu(x.effects,u)};if(s&&e){const A=e;e=(...B)=>{A(...B),p()}}let M=S?new Array(n.length).fill(va):va;const b=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const B=u.run();if(r||v||(S?B.some((D,z)=>$n(D,M[z])):$n(B,M))){h&&h();const D=ur;ur=u;try{const z=[B,M===va?void 0:S&&M[0]===va?[]:M,d];M=B,l?l(e,3,z):e(...z)}finally{ur=D}}}else u.run()};return o&&o(b),u=new jh(f),u.scheduler=a?()=>a(b,!1):b,d=A=>Wm(A,!1,u),h=u.onStop=()=>{const A=lo.get(u);if(A){if(l)l(A,4);else for(const B of A)B();lo.delete(u)}},e?i?b(!0):M=u.run():a?a(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Gi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))Gi(n.value,e,t);else if(rt(n))for(let i=0;i<n.length;i++)Gi(n[i],e,t);else if(kh(n)||Kr(n))n.forEach(i=>{Gi(i,e,t)});else if(Hh(n)){for(const i in n)Gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oa(n,e,t,i){try{return i?n(...i):n()}catch(r){Po(r,e,t)}}function ai(n,e,t,i){if(ot(n)){const r=oa(n,e,t,i);return r&&zh(r)&&r.catch(s=>{Po(s,e,t)}),r}if(rt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ai(n[s],e,t,i));return r}}function Po(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Tt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Ci(),oa(s,null,10,[n,l,c]),Ri();return}}Ym(n,t,r,i,a)}function Ym(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const on=[];let qn=-1;const Zr=[];let zi=null,Gr=0;const hd=Promise.resolve();let co=null;function dd(n){const e=co||hd;return n?e.then(this?n.bind(this):n):e}function qm(n){let e=qn+1,t=on.length;for(;e<t;){const i=e+t>>>1,r=on[i],s=Ks(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function uu(n){if(!(n.flags&1)){const e=Ks(n),t=on[on.length-1];!t||!(n.flags&2)&&e>=Ks(t)?on.push(n):on.splice(qm(e),0,n),n.flags|=1,pd()}}function pd(){co||(co=hd.then(gd))}function jm(n){rt(n)?Zr.push(...n):zi&&n.id===-1?zi.splice(Gr+1,0,n):n.flags&1||(Zr.push(n),n.flags|=1),pd()}function ku(n,e,t=qn+1){for(;t<on.length;t++){const i=on[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;on.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function md(n){if(Zr.length){const e=[...new Set(Zr)].sort((t,i)=>Ks(t)-Ks(i));if(Zr.length=0,zi){zi.push(...e);return}for(zi=e,Gr=0;Gr<zi.length;Gr++){const t=zi[Gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}zi=null,Gr=0}}const Ks=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gd(n){try{for(qn=0;qn<on.length;qn++){const e=on[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<on.length;qn++){const e=on[qn];e&&(e.flags&=-2)}qn=-1,on.length=0,md(),co=null,(on.length||Zr.length)&&gd()}}let Qn=null,xd=null;function uo(n){const e=Qn;return Qn=n,xd=n&&n.type.__scopeId||null,e}function fu(n,e=Qn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&mo(-1);const s=uo(e);let a;try{a=n(...r)}finally{uo(s),i._d&&mo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function nr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ci(),ai(l,t,8,[n.el,o,n,e]),Ri())}}function Qa(n,e){if(ln){let t=ln.provides;const i=ln.parent&&ln.parent.provides;i===t&&(t=ln.provides=Object.create(i)),t[n]=e}}function ii(n,e,t=!1){const i=Yd();if(i||$r){let r=$r?$r._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ot(e)?e.call(i&&i.proxy):e}}const Km=Symbol.for("v-scx"),Zm=()=>ii(Km);function Os(n,e,t){return _d(n,e,t)}function _d(n,e,t=Tt){const{immediate:i,deep:r,flush:s,once:a}=t,o=jt({},t),l=e&&i||!e&&s!=="post";let c;if($s){if(s==="sync"){const d=Zm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ti,d.resume=ti,d.pause=ti,d}}const u=ln;o.call=(d,v,S)=>ai(d,u,v,S);let f=!1;s==="post"?o.scheduler=d=>{dn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,v)=>{v?d():uu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Xm(n,e,o);return $s&&(c?c.push(h):l&&h()),h}function $m(n,e,t){const i=this.proxy,r=Nt(n)?n.includes(".")?vd(i,n):()=>i[n]:n.bind(i,i);let s;ot(e)?s=e:(s=e.handler,t=e);const a=la(this),o=_d(r,s.bind(i),t);return a(),o}function vd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Jm=Symbol("_vte"),Qm=n=>n.__isTeleport,e0=Symbol("_leaveCb");function hu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,hu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sd(n,e){return ot(n)?jt({name:n.name},e,{setup:n}):n}function bd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function t0(n){const e=Yd(),t=cd(null);if(e){const r=e.refs===Tt?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function zu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const fo=new WeakMap;function Bs(n,e,t,i,r=!1){if(rt(n)){n.forEach((S,x)=>Bs(S,e&&(rt(e)?e[x]:e),t,i,r));return}if(ks(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Bs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?gu(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Tt?o.refs={}:o.refs,f=o.setupState,h=gt(f),d=f===Tt?Bh:S=>zu(u,S)?!1:xt(h,S),v=(S,x)=>!(x&&zu(u,x));if(c!=null&&c!==l){if(Vu(e),Nt(c))u[c]=null,d(c)&&(f[c]=null);else if(Qt(c)){const S=e;v(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(ot(l))oa(l,o,12,[a,u]);else{const S=Nt(l),x=Qt(l);if(S||x){const p=()=>{if(n.f){const M=S?d(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)rt(M)&&eu(M,s);else if(rt(M))M.includes(s)||M.push(s);else if(S)u[l]=[s],d(l)&&(f[l]=u[l]);else{const b=[s];v(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else S?(u[l]=a,d(l)&&(f[l]=a)):x&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{p(),fo.delete(n)};M.id=-1,fo.set(n,M),dn(M,t)}else Vu(n),p()}}}function Vu(n){const e=fo.get(n);e&&(e.flags|=8,fo.delete(n))}Ao().requestIdleCallback;Ao().cancelIdleCallback;const ks=n=>!!n.type.__asyncLoader,yd=n=>n.type.__isKeepAlive;function n0(n,e){Md(n,"a",e)}function i0(n,e){Md(n,"da",e)}function Md(n,e,t=ln){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Do(e,i,t),t){let r=t.parent;for(;r&&r.parent;)yd(r.parent.vnode)&&r0(i,e,t,r),r=r.parent}}function r0(n,e,t,i){const r=Do(e,n,i,!0);wd(()=>{eu(i[e],r)},t)}function Do(n,e,t=ln,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Ci();const o=la(t),l=ai(e,t,n,a);return o(),Ri(),l});return i?r.unshift(s):r.push(s),s}}const Di=n=>(e,t=ln)=>{(!$s||n==="sp")&&Do(n,(...i)=>e(...i),t)},s0=Di("bm"),Ed=Di("m"),a0=Di("bu"),o0=Di("u"),Td=Di("bum"),wd=Di("um"),l0=Di("sp"),c0=Di("rtg"),u0=Di("rtc");function f0(n,e=ln){Do("ec",n,e)}const h0=Symbol.for("v-ndc");function ho(n,e,t,i){let r;const s=t,a=rt(n);if(a||Nt(n)){const o=a&&gr(n);let l=!1,c=!1;o&&(l=!Un(n),c=Pi(n),n=Ro(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ts(Gn(n[u])):Gn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(vt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ql=n=>n?qd(n)?gu(n):ql(n.parent):null,zs=jt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ql(n.parent),$root:n=>ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Cd(n),$forceUpdate:n=>n.f||(n.f=()=>{uu(n.update)}),$nextTick:n=>n.n||(n.n=dd.bind(n.proxy)),$watch:n=>$m.bind(n)}),Zo=(n,e)=>n!==Tt&&!n.__isScriptSetup&&xt(n,e),d0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Zo(i,e))return a[e]=1,i[e];if(r!==Tt&&xt(r,e))return a[e]=2,r[e];if(xt(s,e))return a[e]=3,s[e];if(t!==Tt&&xt(t,e))return a[e]=4,t[e];jl&&(a[e]=0)}}const c=zs[e];let u,f;if(c)return e==="$attrs"&&$t(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Tt&&xt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,xt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Zo(r,e)?(r[e]=t,!0):i!==Tt&&xt(i,e)?(i[e]=t,!0):xt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Tt&&o[0]!=="$"&&xt(n,o)||Zo(e,o)||xt(s,o)||xt(i,o)||xt(zs,o)||xt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hu(n){return rt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let jl=!0;function p0(n){const e=Cd(n),t=n.proxy,i=n.ctx;jl=!1,e.beforeCreate&&Gu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:S,deactivated:x,beforeDestroy:p,beforeUnmount:M,destroyed:b,unmounted:A,render:B,renderTracked:D,renderTriggered:z,errorCaptured:j,serverPrefetch:R,expose:y,inheritAttrs:U,components:G,directives:ee,filters:de}=e;if(c&&m0(c,i,null),a)for(const ae in a){const J=a[ae];ot(J)&&(i[ae]=J.bind(t))}if(r){const ae=r.call(t,t);vt(ae)&&(n.data=mr(ae))}if(jl=!0,s)for(const ae in s){const J=s[ae],be=ot(J)?J.bind(t,t):ot(J.get)?J.get.bind(t,t):ti,Ee=!ot(J)&&ot(J.set)?J.set.bind(t):ti,Ve=cn({get:be,set:Ee});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:We=>Ve.value=We})}if(o)for(const ae in o)Ad(o[ae],i,t,ae);if(l){const ae=ot(l)?l.call(t):l;Reflect.ownKeys(ae).forEach(J=>{Qa(J,ae[J])})}u&&Gu(u,n,"c");function $(ae,J){rt(J)?J.forEach(be=>ae(be.bind(t))):J&&ae(J.bind(t))}if($(s0,f),$(Ed,h),$(a0,d),$(o0,v),$(n0,S),$(i0,x),$(f0,j),$(u0,D),$(c0,z),$(Td,M),$(wd,A),$(l0,R),rt(y))if(y.length){const ae=n.exposed||(n.exposed={});y.forEach(J=>{Object.defineProperty(ae,J,{get:()=>t[J],set:be=>t[J]=be,enumerable:!0})})}else n.exposed||(n.exposed={});B&&n.render===ti&&(n.render=B),U!=null&&(n.inheritAttrs=U),G&&(n.components=G),ee&&(n.directives=ee),R&&bd(n)}function m0(n,e,t=ti){rt(n)&&(n=Kl(n));for(const i in n){const r=n[i];let s;vt(r)?"default"in r?s=ii(r.from||i,r.default,!0):s=ii(r.from||i):s=ii(r),Qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Gu(n,e,t){ai(rt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ad(n,e,t,i){let r=i.includes(".")?vd(t,i):()=>t[i];if(Nt(n)){const s=e[n];ot(s)&&Os(r,s)}else if(ot(n))Os(r,n.bind(t));else if(vt(n))if(rt(n))n.forEach(s=>Ad(s,e,t,i));else{const s=ot(n.handler)?n.handler.bind(t):e[n.handler];ot(s)&&Os(r,s,n)}}function Cd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>po(l,c,a,!0)),po(l,e,a)),vt(e)&&s.set(e,l),l}function po(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&po(n,s,t,!0),r&&r.forEach(a=>po(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=g0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const g0={data:Wu,props:Xu,emits:Xu,methods:Ls,computed:Ls,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Ls,directives:Ls,watch:_0,provide:Wu,inject:x0};function Wu(n,e){return e?n?function(){return jt(ot(n)?n.call(this,this):n,ot(e)?e.call(this,this):e)}:e:n}function x0(n,e){return Ls(Kl(n),Kl(e))}function Kl(n){if(rt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function tn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ls(n,e){return n?jt(Object.create(null),n,e):e}function Xu(n,e){return n?rt(n)&&rt(e)?[...new Set([...n,...e])]:jt(Object.create(null),Hu(n),Hu(e??{})):e}function _0(n,e){if(!n)return e;if(!e)return n;const t=jt(Object.create(null),n);for(const i in e)t[i]=tn(n[i],e[i]);return t}function Rd(){return{app:null,config:{isNativeTag:Bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v0=0;function S0(n,e){return function(i,r=null){ot(i)||(i=jt({},i)),r!=null&&!vt(r)&&(r=null);const s=Rd(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:v0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:J0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ot(u.install)?(a.add(u),u.install(c,...f)):ot(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Jt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,gu(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ai(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=$r;$r=c;try{return u()}finally{$r=f}}};return c}}let $r=null;const b0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Vn(e)}Modifiers`]||n[`${vr(e)}Modifiers`];function y0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let r=t;const s=e.startsWith("update:"),a=s&&b0(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Nt(u)?u.trim():u)),a.number&&(r=t.map(fm)));let o,l=i[o=Wo(e)]||i[o=Wo(Vn(e))];!l&&s&&(l=i[o=Wo(vr(e))]),l&&ai(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ai(c,n,6,r)}}const M0=new WeakMap;function Pd(n,e,t=!1){const i=t?M0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ot(n)){const l=c=>{const u=Pd(c,e,!0);u&&(o=!0,jt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(vt(n)&&i.set(n,null),null):(rt(s)?s.forEach(l=>a[l]=null):jt(a,s),vt(n)&&i.set(n,a),a)}function Lo(n,e){return!n||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(n,e[0].toLowerCase()+e.slice(1))||xt(n,vr(e))||xt(n,e))}function Yu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:S}=n,x=uo(n);let p,M;try{if(t.shapeFlag&4){const A=r||i,B=A;p=Kn(c.call(B,A,u,f,d,h,v)),M=o}else{const A=e;p=Kn(A.length>1?A(f,{attrs:o,slots:a,emit:l}):A(f,null)),M=e.props?o:E0(o)}}catch(A){Vs.length=0,Po(A,n,1),p=Jt($i)}let b=p;if(M&&S!==!1){const A=Object.keys(M),{shapeFlag:B}=b;A.length&&B&7&&(s&&A.some(Qc)&&(M=T0(M,s)),b=ns(b,M,!1,!0))}return t.dirs&&(b=ns(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&hu(b,t.transition),p=b,uo(x),p}const E0=n=>{let e;for(const t in n)(t==="class"||t==="style"||To(t))&&((e||(e={}))[t]=n[t]);return e},T0=(n,e)=>{const t={};for(const i in n)(!Qc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function w0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Dd(a,i,h)&&!Lo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?qu(i,a,c):!0:!!a;return!1}function qu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Dd(e,n,s)&&!Lo(t,s))return!0}return!1}function Dd(n,e,t){const i=n[t],r=e[t];return t==="style"&&vt(i)&&vt(r)?!nu(i,r):i!==r}function A0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ld={},Id=()=>Object.create(Ld),Ud=n=>Object.getPrototypeOf(n)===Ld;function C0(n,e,t,i=!1){const r={},s=Id();n.propsDefaults=Object.create(null),Nd(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:ld(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function R0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=gt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Lo(n.emitsOptions,h))continue;const d=e[h];if(l)if(xt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=Vn(h);r[v]=Zl(l,o,v,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Nd(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!xt(e,f)&&((u=vr(f))===f||!xt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Zl(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!xt(e,f))&&(delete s[f],c=!0)}c&&Ti(n.attrs,"set","")}function Nd(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Us(l))continue;const c=e[l];let u;r&&xt(r,u=Vn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Lo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=gt(t),c=o||Tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Zl(r,l,f,c[f],n,!xt(c,f))}}return a}function Zl(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=xt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ot(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=la(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===vr(t))&&(i=!0))}return i}const P0=new WeakMap;function Fd(n,e,t=!1){const i=t?P0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ot(n)){const u=f=>{l=!0;const[h,d]=Fd(f,e,!0);jt(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return vt(n)&&i.set(n,jr),jr;if(rt(s))for(let u=0;u<s.length;u++){const f=Vn(s[u]);ju(f)&&(a[f]=Tt)}else if(s)for(const u in s){const f=Vn(u);if(ju(f)){const h=s[u],d=a[f]=rt(h)||ot(h)?{type:h}:jt({},h),v=d.type;let S=!1,x=!0;if(rt(v))for(let p=0;p<v.length;++p){const M=v[p],b=ot(M)&&M.name;if(b==="Boolean"){S=!0;break}else b==="String"&&(x=!1)}else S=ot(v)&&v.name==="Boolean";d[0]=S,d[1]=x,(S||xt(d,"default"))&&o.push(f)}}const c=[a,o];return vt(n)&&i.set(n,c),c}function ju(n){return n[0]!=="$"&&!Us(n)}const du=n=>n==="_"||n==="_ctx"||n==="$stable",pu=n=>rt(n)?n.map(Kn):[Kn(n)],D0=(n,e,t)=>{if(e._n)return e;const i=fu((...r)=>pu(e(...r)),t);return i._c=!1,i},Od=(n,e,t)=>{const i=n._ctx;for(const r in n){if(du(r))continue;const s=n[r];if(ot(s))e[r]=D0(r,s,i);else if(s!=null){const a=pu(s);e[r]=()=>a}}},Bd=(n,e)=>{const t=pu(e);n.slots.default=()=>t},kd=(n,e,t)=>{for(const i in e)(t||!du(i))&&(n[i]=e[i])},L0=(n,e,t)=>{const i=n.slots=Id();if(n.vnode.shapeFlag&32){const r=e._;r?(kd(i,e,t),t&&Wh(i,"_",r,!0)):Od(e,i)}else e&&Bd(n,e)},I0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Tt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:kd(r,e,t):(s=!e.$stable,Od(e,r)),a=e}else e&&(Bd(n,e),a={default:1});if(s)for(const o in r)!du(o)&&a[o]==null&&delete r[o]},dn=B0;function U0(n){return N0(n)}function N0(n,e){const t=Ao();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ti,insertStaticContent:v}=n,S=(L,N,W,w=null,oe=null,re=null,Te=void 0,ce=null,_e=!!N.dynamicChildren)=>{if(L===N)return;L&&!vs(L,N)&&(w=V(L),We(L,oe,re,!0),L=null),N.patchFlag===-2&&(_e=!1,N.dynamicChildren=null);const{type:se,ref:Ae,shapeFlag:T}=N;switch(se){case Io:x(L,N,W,w);break;case $i:p(L,N,W,w);break;case Jo:L==null&&M(N,W,w,Te);break;case Tn:G(L,N,W,w,oe,re,Te,ce,_e);break;default:T&1?B(L,N,W,w,oe,re,Te,ce,_e):T&6?ee(L,N,W,w,oe,re,Te,ce,_e):(T&64||T&128)&&se.process(L,N,W,w,oe,re,Te,ce,_e,ge)}Ae!=null&&oe?Bs(Ae,L&&L.ref,re,N||L,!N):Ae==null&&L&&L.ref!=null&&Bs(L.ref,null,re,L,!0)},x=(L,N,W,w)=>{if(L==null)i(N.el=o(N.children),W,w);else{const oe=N.el=L.el;N.children!==L.children&&c(oe,N.children)}},p=(L,N,W,w)=>{L==null?i(N.el=l(N.children||""),W,w):N.el=L.el},M=(L,N,W,w)=>{[L.el,L.anchor]=v(L.children,N,W,w,L.el,L.anchor)},b=({el:L,anchor:N},W,w)=>{let oe;for(;L&&L!==N;)oe=h(L),i(L,W,w),L=oe;i(N,W,w)},A=({el:L,anchor:N})=>{let W;for(;L&&L!==N;)W=h(L),r(L),L=W;r(N)},B=(L,N,W,w,oe,re,Te,ce,_e)=>{if(N.type==="svg"?Te="svg":N.type==="math"&&(Te="mathml"),L==null)D(N,W,w,oe,re,Te,ce,_e);else{const se=L.el&&L.el._isVueCE?L.el:null;try{se&&se._beginPatch(),R(L,N,oe,re,Te,ce,_e)}finally{se&&se._endPatch()}}},D=(L,N,W,w,oe,re,Te,ce)=>{let _e,se;const{props:Ae,shapeFlag:T,transition:g,dirs:I}=L;if(_e=L.el=a(L.type,re,Ae&&Ae.is,Ae),T&8?u(_e,L.children):T&16&&j(L.children,_e,null,w,oe,$o(L,re),Te,ce),I&&nr(L,null,w,"created"),z(_e,L,L.scopeId,Te,w),Ae){for(const ie in Ae)ie!=="value"&&!Us(ie)&&s(_e,ie,null,Ae[ie],re,w);"value"in Ae&&s(_e,"value",null,Ae.value,re),(se=Ae.onVnodeBeforeMount)&&Yn(se,w,L)}I&&nr(L,null,w,"beforeMount");const Y=F0(oe,g);Y&&g.beforeEnter(_e),i(_e,N,W),((se=Ae&&Ae.onVnodeMounted)||Y||I)&&dn(()=>{se&&Yn(se,w,L),Y&&g.enter(_e),I&&nr(L,null,w,"mounted")},oe)},z=(L,N,W,w,oe)=>{if(W&&d(L,W),w)for(let re=0;re<w.length;re++)d(L,w[re]);if(oe){let re=oe.subTree;if(N===re||Gd(re.type)&&(re.ssContent===N||re.ssFallback===N)){const Te=oe.vnode;z(L,Te,Te.scopeId,Te.slotScopeIds,oe.parent)}}},j=(L,N,W,w,oe,re,Te,ce,_e=0)=>{for(let se=_e;se<L.length;se++){const Ae=L[se]=ce?Ei(L[se]):Kn(L[se]);S(null,Ae,N,W,w,oe,re,Te,ce)}},R=(L,N,W,w,oe,re,Te)=>{const ce=N.el=L.el;let{patchFlag:_e,dynamicChildren:se,dirs:Ae}=N;_e|=L.patchFlag&16;const T=L.props||Tt,g=N.props||Tt;let I;if(W&&ir(W,!1),(I=g.onVnodeBeforeUpdate)&&Yn(I,W,N,L),Ae&&nr(N,L,W,"beforeUpdate"),W&&ir(W,!0),(T.innerHTML&&g.innerHTML==null||T.textContent&&g.textContent==null)&&u(ce,""),se?y(L.dynamicChildren,se,ce,W,w,$o(N,oe),re):Te||J(L,N,ce,null,W,w,$o(N,oe),re,!1),_e>0){if(_e&16)U(ce,T,g,W,oe);else if(_e&2&&T.class!==g.class&&s(ce,"class",null,g.class,oe),_e&4&&s(ce,"style",T.style,g.style,oe),_e&8){const Y=N.dynamicProps;for(let ie=0;ie<Y.length;ie++){const K=Y[ie],De=T[K],xe=g[K];(xe!==De||K==="value")&&s(ce,K,De,xe,oe,W)}}_e&1&&L.children!==N.children&&u(ce,N.children)}else!Te&&se==null&&U(ce,T,g,W,oe);((I=g.onVnodeUpdated)||Ae)&&dn(()=>{I&&Yn(I,W,N,L),Ae&&nr(N,L,W,"updated")},w)},y=(L,N,W,w,oe,re,Te)=>{for(let ce=0;ce<N.length;ce++){const _e=L[ce],se=N[ce],Ae=_e.el&&(_e.type===Tn||!vs(_e,se)||_e.shapeFlag&198)?f(_e.el):W;S(_e,se,Ae,null,w,oe,re,Te,!0)}},U=(L,N,W,w,oe)=>{if(N!==W){if(N!==Tt)for(const re in N)!Us(re)&&!(re in W)&&s(L,re,N[re],null,oe,w);for(const re in W){if(Us(re))continue;const Te=W[re],ce=N[re];Te!==ce&&re!=="value"&&s(L,re,ce,Te,oe,w)}"value"in W&&s(L,"value",N.value,W.value,oe)}},G=(L,N,W,w,oe,re,Te,ce,_e)=>{const se=N.el=L?L.el:o(""),Ae=N.anchor=L?L.anchor:o("");let{patchFlag:T,dynamicChildren:g,slotScopeIds:I}=N;I&&(ce=ce?ce.concat(I):I),L==null?(i(se,W,w),i(Ae,W,w),j(N.children||[],W,Ae,oe,re,Te,ce,_e)):T>0&&T&64&&g&&L.dynamicChildren&&L.dynamicChildren.length===g.length?(y(L.dynamicChildren,g,W,oe,re,Te,ce),(N.key!=null||oe&&N===oe.subTree)&&zd(L,N,!0)):J(L,N,W,Ae,oe,re,Te,ce,_e)},ee=(L,N,W,w,oe,re,Te,ce,_e)=>{N.slotScopeIds=ce,L==null?N.shapeFlag&512?oe.ctx.activate(N,W,w,Te,_e):de(N,W,w,oe,re,Te,_e):Q(L,N,_e)},de=(L,N,W,w,oe,re,Te)=>{const ce=L.component=Y0(L,w,oe);if(yd(L)&&(ce.ctx.renderer=ge),q0(ce,!1,Te),ce.asyncDep){if(oe&&oe.registerDep(ce,$,Te),!L.el){const _e=ce.subTree=Jt($i);p(null,_e,N,W),L.placeholder=_e.el}}else $(ce,L,N,W,oe,re,Te)},Q=(L,N,W)=>{const w=N.component=L.component;if(w0(L,N,W))if(w.asyncDep&&!w.asyncResolved){ae(w,N,W);return}else w.next=N,w.update();else N.el=L.el,w.vnode=N},$=(L,N,W,w,oe,re,Te)=>{const ce=()=>{if(L.isMounted){let{next:T,bu:g,u:I,parent:Y,vnode:ie}=L;{const Ne=Vd(L);if(Ne){T&&(T.el=ie.el,ae(L,T,Te)),Ne.asyncDep.then(()=>{dn(()=>{L.isUnmounted||se()},oe)});return}}let K=T,De;ir(L,!1),T?(T.el=ie.el,ae(L,T,Te)):T=ie,g&&Xo(g),(De=T.props&&T.props.onVnodeBeforeUpdate)&&Yn(De,Y,T,ie),ir(L,!0);const xe=Yu(L),ke=L.subTree;L.subTree=xe,S(ke,xe,f(ke.el),V(ke),L,oe,re),T.el=xe.el,K===null&&A0(L,xe.el),I&&dn(I,oe),(De=T.props&&T.props.onVnodeUpdated)&&dn(()=>Yn(De,Y,T,ie),oe)}else{let T;const{el:g,props:I}=N,{bm:Y,m:ie,parent:K,root:De,type:xe}=L,ke=ks(N);ir(L,!1),Y&&Xo(Y),!ke&&(T=I&&I.onVnodeBeforeMount)&&Yn(T,K,N),ir(L,!0);{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(xe,L.parent?L.parent.type:void 0);const Ne=L.subTree=Yu(L);S(null,Ne,W,w,L,oe,re),N.el=Ne.el}if(ie&&dn(ie,oe),!ke&&(T=I&&I.onVnodeMounted)){const Ne=N;dn(()=>Yn(T,K,Ne),oe)}(N.shapeFlag&256||K&&ks(K.vnode)&&K.vnode.shapeFlag&256)&&L.a&&dn(L.a,oe),L.isMounted=!0,N=W=w=null}};L.scope.on();const _e=L.effect=new jh(ce);L.scope.off();const se=L.update=_e.run.bind(_e),Ae=L.job=_e.runIfDirty.bind(_e);Ae.i=L,Ae.id=L.uid,_e.scheduler=()=>uu(Ae),ir(L,!0),se()},ae=(L,N,W)=>{N.component=L;const w=L.vnode.props;L.vnode=N,L.next=null,R0(L,N.props,w,W),I0(L,N.children,W),Ci(),ku(L),Ri()},J=(L,N,W,w,oe,re,Te,ce,_e=!1)=>{const se=L&&L.children,Ae=L?L.shapeFlag:0,T=N.children,{patchFlag:g,shapeFlag:I}=N;if(g>0){if(g&128){Ee(se,T,W,w,oe,re,Te,ce,_e);return}else if(g&256){be(se,T,W,w,oe,re,Te,ce,_e);return}}I&8?(Ae&16&&ne(se,oe,re),T!==se&&u(W,T)):Ae&16?I&16?Ee(se,T,W,w,oe,re,Te,ce,_e):ne(se,oe,re,!0):(Ae&8&&u(W,""),I&16&&j(T,W,w,oe,re,Te,ce,_e))},be=(L,N,W,w,oe,re,Te,ce,_e)=>{L=L||jr,N=N||jr;const se=L.length,Ae=N.length,T=Math.min(se,Ae);let g;for(g=0;g<T;g++){const I=N[g]=_e?Ei(N[g]):Kn(N[g]);S(L[g],I,W,null,oe,re,Te,ce,_e)}se>Ae?ne(L,oe,re,!0,!1,T):j(N,W,w,oe,re,Te,ce,_e,T)},Ee=(L,N,W,w,oe,re,Te,ce,_e)=>{let se=0;const Ae=N.length;let T=L.length-1,g=Ae-1;for(;se<=T&&se<=g;){const I=L[se],Y=N[se]=_e?Ei(N[se]):Kn(N[se]);if(vs(I,Y))S(I,Y,W,null,oe,re,Te,ce,_e);else break;se++}for(;se<=T&&se<=g;){const I=L[T],Y=N[g]=_e?Ei(N[g]):Kn(N[g]);if(vs(I,Y))S(I,Y,W,null,oe,re,Te,ce,_e);else break;T--,g--}if(se>T){if(se<=g){const I=g+1,Y=I<Ae?N[I].el:w;for(;se<=g;)S(null,N[se]=_e?Ei(N[se]):Kn(N[se]),W,Y,oe,re,Te,ce,_e),se++}}else if(se>g)for(;se<=T;)We(L[se],oe,re,!0),se++;else{const I=se,Y=se,ie=new Map;for(se=Y;se<=g;se++){const Ue=N[se]=_e?Ei(N[se]):Kn(N[se]);Ue.key!=null&&ie.set(Ue.key,se)}let K,De=0;const xe=g-Y+1;let ke=!1,Ne=0;const Me=new Array(xe);for(se=0;se<xe;se++)Me[se]=0;for(se=I;se<=T;se++){const Ue=L[se];if(De>=xe){We(Ue,oe,re,!0);continue}let Ge;if(Ue.key!=null)Ge=ie.get(Ue.key);else for(K=Y;K<=g;K++)if(Me[K-Y]===0&&vs(Ue,N[K])){Ge=K;break}Ge===void 0?We(Ue,oe,re,!0):(Me[Ge-Y]=se+1,Ge>=Ne?Ne=Ge:ke=!0,S(Ue,N[Ge],W,null,oe,re,Te,ce,_e),De++)}const we=ke?O0(Me):jr;for(K=we.length-1,se=xe-1;se>=0;se--){const Ue=Y+se,Ge=N[Ue],Ie=N[Ue+1],qe=Ue+1<Ae?Ie.el||Hd(Ie):w;Me[se]===0?S(null,Ge,W,qe,oe,re,Te,ce,_e):ke&&(K<0||se!==we[K]?Ve(Ge,W,qe,2):K--)}}},Ve=(L,N,W,w,oe=null)=>{const{el:re,type:Te,transition:ce,children:_e,shapeFlag:se}=L;if(se&6){Ve(L.component.subTree,N,W,w);return}if(se&128){L.suspense.move(N,W,w);return}if(se&64){Te.move(L,N,W,ge);return}if(Te===Tn){i(re,N,W);for(let T=0;T<_e.length;T++)Ve(_e[T],N,W,w);i(L.anchor,N,W);return}if(Te===Jo){b(L,N,W);return}if(w!==2&&se&1&&ce)if(w===0)ce.beforeEnter(re),i(re,N,W),dn(()=>ce.enter(re),oe);else{const{leave:T,delayLeave:g,afterLeave:I}=ce,Y=()=>{L.ctx.isUnmounted?r(re):i(re,N,W)},ie=()=>{re._isLeaving&&re[e0](!0),T(re,()=>{Y(),I&&I()})};g?g(re,Y,ie):ie()}else i(re,N,W)},We=(L,N,W,w=!1,oe=!1)=>{const{type:re,props:Te,ref:ce,children:_e,dynamicChildren:se,shapeFlag:Ae,patchFlag:T,dirs:g,cacheIndex:I}=L;if(T===-2&&(oe=!1),ce!=null&&(Ci(),Bs(ce,null,W,L,!0),Ri()),I!=null&&(N.renderCache[I]=void 0),Ae&256){N.ctx.deactivate(L);return}const Y=Ae&1&&g,ie=!ks(L);let K;if(ie&&(K=Te&&Te.onVnodeBeforeUnmount)&&Yn(K,N,L),Ae&6)tt(L.component,W,w);else{if(Ae&128){L.suspense.unmount(W,w);return}Y&&nr(L,null,N,"beforeUnmount"),Ae&64?L.type.remove(L,N,W,ge,w):se&&!se.hasOnce&&(re!==Tn||T>0&&T&64)?ne(se,N,W,!1,!0):(re===Tn&&T&384||!oe&&Ae&16)&&ne(_e,N,W),w&&Qe(L)}(ie&&(K=Te&&Te.onVnodeUnmounted)||Y)&&dn(()=>{K&&Yn(K,N,L),Y&&nr(L,null,N,"unmounted")},W)},Qe=L=>{const{type:N,el:W,anchor:w,transition:oe}=L;if(N===Tn){st(W,w);return}if(N===Jo){A(L);return}const re=()=>{r(W),oe&&!oe.persisted&&oe.afterLeave&&oe.afterLeave()};if(L.shapeFlag&1&&oe&&!oe.persisted){const{leave:Te,delayLeave:ce}=oe,_e=()=>Te(W,re);ce?ce(L.el,re,_e):_e()}else re()},st=(L,N)=>{let W;for(;L!==N;)W=h(L),r(L),L=W;r(N)},tt=(L,N,W)=>{const{bum:w,scope:oe,job:re,subTree:Te,um:ce,m:_e,a:se}=L;Ku(_e),Ku(se),w&&Xo(w),oe.stop(),re&&(re.flags|=8,We(Te,L,N,W)),ce&&dn(ce,N),dn(()=>{L.isUnmounted=!0},N)},ne=(L,N,W,w=!1,oe=!1,re=0)=>{for(let Te=re;Te<L.length;Te++)We(L[Te],N,W,w,oe)},V=L=>{if(L.shapeFlag&6)return V(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const N=h(L.anchor||L.el),W=N&&N[Jm];return W?h(W):N};let ue=!1;const pe=(L,N,W)=>{let w;L==null?N._vnode&&(We(N._vnode,null,null,!0),w=N._vnode.component):S(N._vnode||null,L,N,null,null,null,W),N._vnode=L,ue||(ue=!0,ku(w),md(),ue=!1)},ge={p:S,um:We,m:Ve,r:Qe,mt:de,mc:j,pc:J,pbc:y,n:V,o:n};return{render:pe,hydrate:void 0,createApp:S0(pe)}}function $o({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function F0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function zd(n,e,t=!1){const i=n.children,r=e.children;if(rt(i)&&rt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ei(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&zd(a,o)),o.type===Io&&(o.patchFlag===-1&&(o=r[s]=Ei(o)),o.el=a.el),o.type===$i&&!o.el&&(o.el=a.el)}}function O0(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Vd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vd(e)}function Ku(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Hd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Hd(e.subTree):null}const Gd=n=>n.__isSuspense;function B0(n,e){e&&e.pendingBranch?rt(n)?e.effects.push(...n):e.effects.push(n):jm(n)}const Tn=Symbol.for("v-fgt"),Io=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),Vs=[];let An=null;function rn(n=!1){Vs.push(An=n?null:[])}function k0(){Vs.pop(),An=Vs[Vs.length-1]||null}let Zs=1;function mo(n,e=!1){Zs+=n,n<0&&An&&e&&(An.hasOnce=!0)}function Wd(n){return n.dynamicChildren=Zs>0?An||jr:null,k0(),Zs>0&&An&&An.push(n),n}function mn(n,e,t,i,r,s){return Wd(Xe(n,e,t,i,r,s,!0))}function z0(n,e,t,i,r){return Wd(Jt(n,e,t,i,r,!0))}function go(n){return n?n.__v_isVNode===!0:!1}function vs(n,e){return n.type===e.type&&n.key===e.key}const Xd=({key:n})=>n??null,eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Nt(n)||Qt(n)||ot(n)?{i:Qn,r:n,k:e,f:!!t}:n:null);function Xe(n,e=null,t=null,i=0,r=null,s=n===Tn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Xd(e),ref:e&&eo(e),scopeId:xd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qn};return o?(mu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Nt(t)?8:16),Zs>0&&!a&&An&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&An.push(l),l}const Jt=V0;function V0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===h0)&&(n=$i),go(n)){const o=ns(n,e,!0);return t&&mu(o,t),Zs>0&&!s&&An&&(o.shapeFlag&6?An[An.indexOf(n)]=o:An.push(o)),o.patchFlag=-2,o}if($0(n)&&(n=n.__vccOpts),e){e=H0(e);let{class:o,style:l}=e;o&&!Nt(o)&&(e.class=Co(o)),vt(l)&&(cu(l)&&!rt(l)&&(l=jt({},l)),e.style=Ys(l))}const a=Nt(n)?1:Gd(n)?128:Qm(n)?64:vt(n)?4:ot(n)?2:0;return Xe(n,e,t,i,r,a,s,!0)}function H0(n){return n?cu(n)||Ud(n)?jt({},n):n:null}function ns(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?G0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Xd(c),ref:e&&e.ref?t&&s?rt(s)?s.concat(eo(e)):[s,eo(e)]:eo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Tn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ns(n.ssContent),ssFallback:n.ssFallback&&ns(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hu(u,l.clone(u)),u}function xo(n=" ",e=0){return Jt(Io,null,n,e)}function Ss(n="",e=!1){return e?(rn(),z0($i,null,n)):Jt($i,null,n)}function Kn(n){return n==null||typeof n=="boolean"?Jt($i):rt(n)?Jt(Tn,null,n.slice()):go(n)?Ei(n):Jt(Io,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ns(n)}function mu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(rt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),mu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ud(e)?e._ctx=Qn:r===3&&Qn&&(Qn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ot(e)?(e={default:e,_ctx:Qn},t=32):(e=String(e),i&64?(t=16,e=[xo(e)]):t=8);n.children=e,n.shapeFlag|=t}function G0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Co([e.class,i.class]));else if(r==="style")e.style=Ys([e.style,i.style]);else if(To(r)){const s=e[r],a=i[r];a&&s!==a&&!(rt(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Yn(n,e,t,i=null){ai(n,e,7,[t,i])}const W0=Rd();let X0=0;function Y0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||W0,s={uid:X0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(i,r),emitsOptions:Pd(i,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=y0.bind(null,s),n.ce&&n.ce(s),s}let ln=null;const Yd=()=>ln||Qn;let _o,$l;{const n=Ao(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};_o=e("__VUE_INSTANCE_SETTERS__",t=>ln=t),$l=e("__VUE_SSR_SETTERS__",t=>$s=t)}const la=n=>{const e=ln;return _o(n),n.scope.on(),()=>{n.scope.off(),_o(e)}},Zu=()=>{ln&&ln.scope.off(),_o(null)};function qd(n){return n.vnode.shapeFlag&4}let $s=!1;function q0(n,e=!1,t=!1){e&&$l(e);const{props:i,children:r}=n.vnode,s=qd(n);C0(n,i,s,e),L0(n,r,t||e);const a=s?j0(n,e):void 0;return e&&$l(!1),a}function j0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,d0);const{setup:i}=t;if(i){Ci();const r=n.setupContext=i.length>1?Z0(n):null,s=la(n),a=oa(i,n,0,[n.props,r]),o=zh(a);if(Ri(),s(),(o||n.sp)&&!ks(n)&&bd(n),o){if(a.then(Zu,Zu),e)return a.then(l=>{$u(n,l)}).catch(l=>{Po(l,n,0)});n.asyncDep=a}else $u(n,a)}else jd(n)}function $u(n,e,t){ot(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=fd(e)),jd(n)}function jd(n,e,t){const i=n.type;n.render||(n.render=i.render||ti);{const r=la(n);Ci();try{p0(n)}finally{Ri(),r()}}}const K0={get(n,e){return $t(n,"get",""),n[e]}};function Z0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,K0),slots:n.slots,emit:n.emit,expose:e}}function gu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(fd(km(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zs)return zs[t](n)},has(e,t){return t in e||t in zs}})):n.proxy}function $0(n){return ot(n)&&"__vccOpts"in n}const cn=(n,e)=>Gm(n,e,$s);function Kd(n,e,t){try{mo(-1);const i=arguments.length;return i===2?vt(e)&&!rt(e)?go(e)?Jt(n,null,[e]):Jt(n,e):Jt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&go(t)&&(t=[t]),Jt(n,e,t))}finally{mo(1)}}const J0="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jl;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{Jl=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const Zd=Jl?n=>Jl.createHTML(n):n=>n,Q0="http://www.w3.org/2000/svg",eg="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,Qu=Mi&&Mi.createElement("template"),tg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Mi.createElementNS(Q0,n):e==="mathml"?Mi.createElementNS(eg,n):t?Mi.createElement(n,{is:t}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Qu.innerHTML=Zd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Qu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ng=Symbol("_vtc");function ig(n,e,t){const i=n[ng];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ef=Symbol("_vod"),rg=Symbol("_vsh"),sg=Symbol(""),ag=/(?:^|;)\s*display\s*:/;function og(n,e,t){const i=n.style,r=Nt(t);let s=!1;if(t&&!r){if(e)if(Nt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&to(i,o,"")}else for(const a in e)t[a]==null&&to(i,a,"");for(const a in t)a==="display"&&(s=!0),to(i,a,t[a])}else if(r){if(e!==t){const a=i[sg];a&&(t+=";"+a),i.cssText=t,s=ag.test(t)}}else e&&n.removeAttribute("style");ef in n&&(n[ef]=s?i.display:"",n[rg]&&(i.display="none"))}const tf=/\s*!important$/;function to(n,e,t){if(rt(t))t.forEach(i=>to(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=lg(n,e);tf.test(t)?n.setProperty(vr(i),t.replace(tf,""),"important"):n[i]=t}}const nf=["Webkit","Moz","ms"],Qo={};function lg(n,e){const t=Qo[e];if(t)return t;let i=Vn(e);if(i!=="filter"&&i in n)return Qo[e]=i;i=Gh(i);for(let r=0;r<nf.length;r++){const s=nf[r]+i;if(s in n)return Qo[e]=s}return e}const rf="http://www.w3.org/1999/xlink";function sf(n,e,t,i,r,s=xm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(rf,e.slice(6,e.length)):n.setAttributeNS(rf,e,t):t==null||s&&!Xh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":si(t)?String(t):t)}function af(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Xh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function cg(n,e,t,i){n.addEventListener(e,t,i)}function ug(n,e,t,i){n.removeEventListener(e,t,i)}const of=Symbol("_vei");function fg(n,e,t,i,r=null){const s=n[of]||(n[of]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=hg(e);if(i){const c=s[e]=mg(i,r);cg(n,o,c,l)}else a&&(ug(n,o,a,l),s[e]=void 0)}}const lf=/(?:Once|Passive|Capture)$/;function hg(n){let e;if(lf.test(n)){e={};let i;for(;i=n.match(lf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vr(n.slice(2)),e]}let el=0;const dg=Promise.resolve(),pg=()=>el||(dg.then(()=>el=0),el=Date.now());function mg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ai(gg(i,t.value),e,5,[i])};return t.value=n,t.attached=pg(),t}function gg(n,e){if(rt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const cf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,xg=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?ig(n,i,a):e==="style"?og(n,t,i):To(e)?Qc(e)||fg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_g(n,e,i,a))?(af(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sf(n,e,i,a,s,e!=="value")):n._isVueCE&&(vg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Nt(i)))?af(n,Vn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),sf(n,e,i,a))};function _g(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&cf(e)&&ot(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return cf(e)&&Nt(t)?!1:e in n}function vg(n,e){const t=n._def.props;if(!t)return!1;const i=Vn(e);return Array.isArray(t)?t.some(r=>Vn(r)===i):Object.keys(t).some(r=>Vn(r)===i)}const Sg=["ctrl","shift","alt","meta"],bg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Sg.some(t=>n[`${t}Key`]&&!e.includes(t))},yg=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=bg[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Mg=jt({patchProp:xg},tg);let uf;function Eg(){return uf||(uf=U0(Mg))}const Tg=(...n)=>{const e=Eg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ag(i);if(!r)return;const s=e._component;!ot(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,wg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function wg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ag(n){return Nt(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Wr=typeof document<"u";function $d(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Cg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&$d(n.default)}const mt=Object.assign;function tl(n,e){const t={};for(const i in e){const r=e[i];t[i]=Wn(r)?r.map(n):n(r)}return t}const Hs=()=>{},Wn=Array.isArray;function ff(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Jd=/#/g,Rg=/&/g,Pg=/\//g,Dg=/=/g,Lg=/\?/g,Qd=/\+/g,Ig=/%5B/g,Ug=/%5D/g,ep=/%5E/g,Ng=/%60/g,tp=/%7B/g,Fg=/%7C/g,np=/%7D/g,Og=/%20/g;function xu(n){return n==null?"":encodeURI(""+n).replace(Fg,"|").replace(Ig,"[").replace(Ug,"]")}function Bg(n){return xu(n).replace(tp,"{").replace(np,"}").replace(ep,"^")}function Ql(n){return xu(n).replace(Qd,"%2B").replace(Og,"+").replace(Jd,"%23").replace(Rg,"%26").replace(Ng,"`").replace(tp,"{").replace(np,"}").replace(ep,"^")}function kg(n){return Ql(n).replace(Dg,"%3D")}function zg(n){return xu(n).replace(Jd,"%23").replace(Lg,"%3F")}function Vg(n){return zg(n).replace(Pg,"%2F")}function Js(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Hg=/\/$/,Gg=n=>n.replace(Hg,"");function nl(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=qg(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:Js(a)}}function Wg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function hf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Xg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&is(e.matched[i],t.matched[r])&&ip(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function is(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ip(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Yg(n[t],e[t]))return!1;return!0}function Yg(n,e){return Wn(n)?df(n,e):Wn(e)?df(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function df(n,e){return Wn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function qg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ec=function(n){return n.pop="pop",n.push="push",n}({}),il=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function jg(n){if(!n)if(Wr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Gg(n)}const Kg=/^[^#]+#/;function Zg(n,e){return n.replace(Kg,"#")+e}function $g(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Uo=()=>({left:window.scrollX,top:window.scrollY});function Jg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=$g(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pf(n,e){return(history.state?history.state.position-e:-1)+n}const tc=new Map;function Qg(n,e){tc.set(n,e)}function ex(n){const e=tc.get(n);return tc.delete(n),e}function tx(n){return typeof n=="string"||n&&typeof n=="object"}function rp(n){return typeof n=="string"||typeof n=="symbol"}let It=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const sp=Symbol("");It.MATCHER_NOT_FOUND+"",It.NAVIGATION_GUARD_REDIRECT+"",It.NAVIGATION_ABORTED+"",It.NAVIGATION_CANCELLED+"",It.NAVIGATION_DUPLICATED+"";function rs(n,e){return mt(new Error,{type:n,[sp]:!0},e)}function di(n,e){return n instanceof Error&&sp in n&&(e==null||!!(n.type&e))}const nx=["params","query","hash"];function ix(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of nx)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function rx(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Qd," "),s=r.indexOf("="),a=Js(s<0?r:r.slice(0,s)),o=s<0?null:Js(r.slice(s+1));if(a in e){let l=e[a];Wn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function mf(n){let e="";for(let t in n){const i=n[t];if(t=kg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Wn(i)?i.map(r=>r&&Ql(r)):[i&&Ql(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function sx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ax=Symbol(""),gf=Symbol(""),_u=Symbol(""),vu=Symbol(""),nc=Symbol("");function bs(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Vi(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(rs(It.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):tx(h)?l(rs(It.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function rl(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if($d(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Vi(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Cg(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Vi(h,t,i,a,o,r)()}))}}return s}function ox(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>is(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>is(c,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lx=()=>location.protocol+"//"+location.host;function ap(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),hf(o,"")}return hf(t,n)+i+r}function cx(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=ap(n,location),v=t.value,S=e.value;let x=0;if(h){if(t.value=d,e.value=h,a&&a===v){a=null;return}x=S?h.position-S.position:0}else i(d);r.forEach(p=>{p(t.value,v,{delta:x,type:ec.pop,direction:x?x>0?il.forward:il.back:il.unknown})})};function l(){a=t.value}function c(h){r.push(h);const d=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(mt({},h.state,{scroll:Uo()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function xf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Uo():null}}function ux(n){const{history:e,location:t}=window,i={value:ap(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:lx()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){s(l,mt({},e.state,xf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=mt({},r.value,e.state,{forward:l,scroll:Uo()});s(u.current,u,!0),s(l,mt({},xf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function fx(n){n=jg(n);const e=ux(n),t=cx(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=mt({location:"",base:n,go:i,createHref:Zg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hx(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),fx(n)}let dr=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Bt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Bt||{});const dx={type:dr.Static,value:""},px=/[a-zA-Z0-9_]/;function mx(n){if(!n)return[[]];if(n==="/")return[[dx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=Bt.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===Bt.Static?s.push({type:dr.Static,value:c}):t===Bt.Param||t===Bt.ParamRegExp||t===Bt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:dr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Bt.ParamRegExp){i=t,t=Bt.EscapeNext;continue}switch(t){case Bt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Bt.Param):h();break;case Bt.EscapeNext:h(),t=i;break;case Bt.Param:l==="("?t=Bt.ParamRegExp:px.test(l)?h():(f(),t=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Bt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Bt.ParamRegExpEnd:u+=l;break;case Bt.ParamRegExpEnd:f(),t=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const _f="[^/]+?",gx={sensitive:!1,strict:!1,start:!0,end:!0};var sn=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(sn||{});const xx=/[.+*?^${}()[\]/\\]/g;function _x(n,e){const t=mt({},gx,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[sn.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=sn.Segment+(t.sensitive?sn.BonusCaseSensitive:0);if(h.type===dr.Static)f||(r+="/"),r+=h.value.replace(xx,"\\$&"),d+=sn.Static;else if(h.type===dr.Param){const{value:v,repeatable:S,optional:x,regexp:p}=h;s.push({name:v,repeatable:S,optional:x});const M=p||_f;if(M!==_f){d+=sn.BonusCustomRegExp;try{`${M}`}catch(A){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+A.message)}}let b=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(b=x&&c.length<2?`(?:/${b})`:"/"+b),x&&(b+="?"),r+=b,d+=sn.Dynamic,x&&(d+=sn.BonusOptional),S&&(d+=sn.BonusRepeatable),M===".*"&&(d+=sn.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=sn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",v=s[h-1];f[v.name]=d&&v.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===dr.Static)u+=d.value;else if(d.type===dr.Param){const{value:v,repeatable:S,optional:x}=d,p=v in c?c[v]:"";if(Wn(p)&&!S)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Wn(p)?p.join("/"):p;if(!M)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function vx(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===sn.Static+sn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===sn.Static+sn.Segment?1:-1:0}function op(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=vx(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(vf(i))return 1;if(vf(r))return-1}return r.length-i.length}function vf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Sx={strict:!1,end:!0,sensitive:!1};function bx(n,e,t){const i=_x(mx(n.path),t),r=mt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yx(n,e){const t=[],i=new Map;e=ff(Sx,e);function r(f){return i.get(f)}function s(f,h,d){const v=!d,S=bf(f);S.aliasOf=d&&d.record;const x=ff(e,f),p=[S];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of A)p.push(bf(mt({},S,{components:d?d.record.components:S.components,path:B,aliasOf:d?d.record:S})))}let M,b;for(const A of p){const{path:B}=A;if(h&&B[0]!=="/"){const D=h.record.path,z=D[D.length-1]==="/"?"":"/";A.path=h.record.path+(B&&z+B)}if(M=bx(A,h,x),d?d.alias.push(M):(b=b||M,b!==M&&b.alias.push(M),v&&f.name&&!yf(M)&&a(f.name)),lp(M)&&l(M),S.children){const D=S.children;for(let z=0;z<D.length;z++)s(D[z],M,d&&d.children[z])}d=d||M}return b?()=>{a(b)}:Hs}function a(f){if(rp(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=Tx(f,t);t.splice(h,0,f),f.record.name&&!yf(f)&&i.set(f.record.name,f)}function c(f,h){let d,v={},S,x;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw rs(It.MATCHER_NOT_FOUND,{location:f});x=d.record.name,v=mt(Sf(h.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&Sf(f.params,d.keys.map(b=>b.name))),S=d.stringify(v)}else if(f.path!=null)S=f.path,d=t.find(b=>b.re.test(S)),d&&(v=d.parse(S),x=d.record.name);else{if(d=h.name?i.get(h.name):t.find(b=>b.re.test(h.path)),!d)throw rs(It.MATCHER_NOT_FOUND,{location:f,currentLocation:h});x=d.record.name,v=mt({},h.params,f.params),S=d.stringify(v)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:x,path:S,params:v,matched:p,meta:Ex(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Sf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function bf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Mx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function yf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ex(n){return n.reduce((e,t)=>mt(e,t.meta),{})}function Tx(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;op(n,e[s])<0?i=s:t=s+1}const r=wx(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function wx(n){let e=n;for(;e=e.parent;)if(lp(e)&&op(n,e)===0)return e}function lp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Mf(n){const e=ii(_u),t=ii(vu),i=cn(()=>{const l=ni(n.to);return e.resolve(l)}),r=cn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(is.bind(null,u));if(h>-1)return h;const d=Ef(l[c-2]);return c>1&&Ef(u)===d&&f[f.length-1].path!==d?f.findIndex(is.bind(null,l[c-2])):h}),s=cn(()=>r.value>-1&&Px(t.params,i.value.params)),a=cn(()=>r.value>-1&&r.value===t.matched.length-1&&ip(t.params,i.value.params));function o(l={}){if(Rx(l)){const c=e[ni(n.replace)?"replace":"push"](ni(n.to)).catch(Hs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:cn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function Ax(n){return n.length===1?n[0]:n}const Cx=Sd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Mf,setup(n,{slots:e}){const t=mr(Mf(n)),{options:i}=ii(_u),r=cn(()=>({[Tf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Tf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Ax(e.default(t));return n.custom?s:Kd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Su=Cx;function Rx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Px(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Wn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Ef(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Tf=(n,e,t)=>n??e??t,Dx=Sd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ii(nc),r=cn(()=>n.route||i.value),s=ii(gf,0),a=cn(()=>{let c=ni(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=cn(()=>r.value.matched[a.value]);Qa(gf,cn(()=>a.value+1)),Qa(ax,o),Qa(nc,r);const l=Ja();return Os(()=>[l.value,o.value,n.name],([c,u,f],[h,d,v])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!is(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return wf(t.default,{Component:h,route:c});const d=f.props[u],v=d?d===!0?c.params:typeof d=="function"?d(c):d:null,x=Kd(h,mt({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wf(t.default,{Component:x,route:c})||x}}});function wf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const cp=Dx;function Lx(n){const e=yx(n.routes,n),t=n.parseQuery||rx,i=n.stringifyQuery||mf,r=n.history,s=bs(),a=bs(),o=bs(),l=cd(Li);let c=Li;Wr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,V=>""+V),f=tl.bind(null,Vg),h=tl.bind(null,Js);function d(V,ue){let pe,ge;return rp(V)?(pe=e.getRecordMatcher(V),ge=ue):ge=V,e.addRoute(ge,pe)}function v(V){const ue=e.getRecordMatcher(V);ue&&e.removeRoute(ue)}function S(){return e.getRoutes().map(V=>V.record)}function x(V){return!!e.getRecordMatcher(V)}function p(V,ue){if(ue=mt({},ue||l.value),typeof V=="string"){const W=nl(t,V,ue.path),w=e.resolve({path:W.path},ue),oe=r.createHref(W.fullPath);return mt(W,w,{params:h(w.params),hash:Js(W.hash),redirectedFrom:void 0,href:oe})}let pe;if(V.path!=null)pe=mt({},V,{path:nl(t,V.path,ue.path).path});else{const W=mt({},V.params);for(const w in W)W[w]==null&&delete W[w];pe=mt({},V,{params:f(W)}),ue.params=f(ue.params)}const ge=e.resolve(pe,ue),Le=V.hash||"";ge.params=u(h(ge.params));const L=Wg(i,mt({},V,{hash:Bg(Le),path:ge.path})),N=r.createHref(L);return mt({fullPath:L,hash:Le,query:i===mf?sx(V.query):V.query||{}},ge,{redirectedFrom:void 0,href:N})}function M(V){return typeof V=="string"?nl(t,V,l.value.path):mt({},V)}function b(V,ue){if(c!==V)return rs(It.NAVIGATION_CANCELLED,{from:ue,to:V})}function A(V){return z(V)}function B(V){return A(mt(M(V),{replace:!0}))}function D(V,ue){const pe=V.matched[V.matched.length-1];if(pe&&pe.redirect){const{redirect:ge}=pe;let Le=typeof ge=="function"?ge(V,ue):ge;return typeof Le=="string"&&(Le=Le.includes("?")||Le.includes("#")?Le=M(Le):{path:Le},Le.params={}),mt({query:V.query,hash:V.hash,params:Le.path!=null?{}:V.params},Le)}}function z(V,ue){const pe=c=p(V),ge=l.value,Le=V.state,L=V.force,N=V.replace===!0,W=D(pe,ge);if(W)return z(mt(M(W),{state:typeof W=="object"?mt({},Le,W.state):Le,force:L,replace:N}),ue||pe);const w=pe;w.redirectedFrom=ue;let oe;return!L&&Xg(i,ge,pe)&&(oe=rs(It.NAVIGATION_DUPLICATED,{to:w,from:ge}),Ve(ge,ge,!0,!1)),(oe?Promise.resolve(oe):y(w,ge)).catch(re=>di(re)?di(re,It.NAVIGATION_GUARD_REDIRECT)?re:Ee(re):J(re,w,ge)).then(re=>{if(re){if(di(re,It.NAVIGATION_GUARD_REDIRECT))return z(mt({replace:N},M(re.to),{state:typeof re.to=="object"?mt({},Le,re.to.state):Le,force:L}),ue||w)}else re=G(w,ge,!0,N,Le);return U(w,ge,re),re})}function j(V,ue){const pe=b(V,ue);return pe?Promise.reject(pe):Promise.resolve()}function R(V){const ue=st.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(V):V()}function y(V,ue){let pe;const[ge,Le,L]=ox(V,ue);pe=rl(ge.reverse(),"beforeRouteLeave",V,ue);for(const W of ge)W.leaveGuards.forEach(w=>{pe.push(Vi(w,V,ue))});const N=j.bind(null,V,ue);return pe.push(N),ne(pe).then(()=>{pe=[];for(const W of s.list())pe.push(Vi(W,V,ue));return pe.push(N),ne(pe)}).then(()=>{pe=rl(Le,"beforeRouteUpdate",V,ue);for(const W of Le)W.updateGuards.forEach(w=>{pe.push(Vi(w,V,ue))});return pe.push(N),ne(pe)}).then(()=>{pe=[];for(const W of L)if(W.beforeEnter)if(Wn(W.beforeEnter))for(const w of W.beforeEnter)pe.push(Vi(w,V,ue));else pe.push(Vi(W.beforeEnter,V,ue));return pe.push(N),ne(pe)}).then(()=>(V.matched.forEach(W=>W.enterCallbacks={}),pe=rl(L,"beforeRouteEnter",V,ue,R),pe.push(N),ne(pe))).then(()=>{pe=[];for(const W of a.list())pe.push(Vi(W,V,ue));return pe.push(N),ne(pe)}).catch(W=>di(W,It.NAVIGATION_CANCELLED)?W:Promise.reject(W))}function U(V,ue,pe){o.list().forEach(ge=>R(()=>ge(V,ue,pe)))}function G(V,ue,pe,ge,Le){const L=b(V,ue);if(L)return L;const N=ue===Li,W=Wr?history.state:{};pe&&(ge||N?r.replace(V.fullPath,mt({scroll:N&&W&&W.scroll},Le)):r.push(V.fullPath,Le)),l.value=V,Ve(V,ue,pe,N),Ee()}let ee;function de(){ee||(ee=r.listen((V,ue,pe)=>{if(!tt.listening)return;const ge=p(V),Le=D(ge,tt.currentRoute.value);if(Le){z(mt(Le,{replace:!0,force:!0}),ge).catch(Hs);return}c=ge;const L=l.value;Wr&&Qg(pf(L.fullPath,pe.delta),Uo()),y(ge,L).catch(N=>di(N,It.NAVIGATION_ABORTED|It.NAVIGATION_CANCELLED)?N:di(N,It.NAVIGATION_GUARD_REDIRECT)?(z(mt(M(N.to),{force:!0}),ge).then(W=>{di(W,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&!pe.delta&&pe.type===ec.pop&&r.go(-1,!1)}).catch(Hs),Promise.reject()):(pe.delta&&r.go(-pe.delta,!1),J(N,ge,L))).then(N=>{N=N||G(ge,L,!1),N&&(pe.delta&&!di(N,It.NAVIGATION_CANCELLED)?r.go(-pe.delta,!1):pe.type===ec.pop&&di(N,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),U(ge,L,N)}).catch(Hs)}))}let Q=bs(),$=bs(),ae;function J(V,ue,pe){Ee(V);const ge=$.list();return ge.length?ge.forEach(Le=>Le(V,ue,pe)):console.error(V),Promise.reject(V)}function be(){return ae&&l.value!==Li?Promise.resolve():new Promise((V,ue)=>{Q.add([V,ue])})}function Ee(V){return ae||(ae=!V,de(),Q.list().forEach(([ue,pe])=>V?pe(V):ue()),Q.reset()),V}function Ve(V,ue,pe,ge){const{scrollBehavior:Le}=n;if(!Wr||!Le)return Promise.resolve();const L=!pe&&ex(pf(V.fullPath,0))||(ge||!pe)&&history.state&&history.state.scroll||null;return dd().then(()=>Le(V,ue,L)).then(N=>N&&Jg(N)).catch(N=>J(N,V,ue))}const We=V=>r.go(V);let Qe;const st=new Set,tt={currentRoute:l,listening:!0,addRoute:d,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:S,resolve:p,options:n,push:A,replace:B,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:$.add,isReady:be,install(V){V.component("RouterLink",Su),V.component("RouterView",cp),V.config.globalProperties.$router=tt,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ni(l)}),Wr&&!Qe&&l.value===Li&&(Qe=!0,A(r.location).catch(ge=>{}));const ue={};for(const ge in Li)Object.defineProperty(ue,ge,{get:()=>l.value[ge],enumerable:!0});V.provide(_u,tt),V.provide(vu,ld(ue)),V.provide(nc,l);const pe=V.unmount;st.add(V),V.unmount=function(){st.delete(V),st.size<1&&(c=Li,ee&&ee(),ee=null,l.value=Li,Qe=!1,ae=!1),pe()}}};function ne(V){return V.reduce((ue,pe)=>ue.then(()=>R(pe)),Promise.resolve())}return tt}function Ix(n){return ii(vu)}const Ux={class:"app-frame"},Nx={class:"app-header"},Fx={class:"app-nav"},Ox={__name:"App",setup(n){const e=Ix(),t=[{name:"Home",to:"/"},{name:"Solar Scape",to:"/projects/solar-scape"}];return(i,r)=>(rn(),mn("div",Ux,[Xe("header",Nx,[r[0]||(r[0]=Xe("h1",{class:"app-header__title"},"MVRDV NEXT",-1)),Xe("nav",Fx,[(rn(),mn(Tn,null,ho(t,s=>Jt(ni(Su),{key:s.to,to:s.to,class:Co(["app-nav__link",{"app-nav__link--active":ni(e).path===s.to}])},{default:fu(()=>[xo(yn(s.name),1)]),_:2},1032,["to","class"])),64))])]),Jt(ni(cp))]))}},Bx={class:"home-view"},kx={class:"project-grid"},zx={__name:"HomeView",setup(n){const e=[{title:"Solar Scape",path:"/projects/solar-scape",description:"Interactive Rhino plot viewer with Plot-linked voxel metadata and a coordinated analysis sidebar."}];return(t,i)=>(rn(),mn("main",Bx,[i[1]||(i[1]=Xe("section",{class:"hero-card"},[Xe("p",{class:"hero-card__eyebrow"},"MVRDV NEXT technologies"),Xe("h2",null,"Solar Scape"),Xe("p",null,[xo(" The app is structured around a single Three.js experience under "),Xe("strong",null,"src/projects/solar-scape"),xo(" with dedicated viewer, loader, config, and metadata modules. ")])],-1)),Xe("section",kx,[(rn(),mn(Tn,null,ho(e,r=>Jt(ni(Su),{key:r.path,to:r.path,class:"project-card"},{default:fu(()=>[i[0]||(i[0]=Xe("p",{class:"project-card__eyebrow"},"Project",-1)),Xe("h3",null,yn(r.title),1),Xe("p",null,yn(r.description),1)]),_:2},1032,["to"])),64))])]))}},Af="/Solar_Scape/",pi={title:"Solar Scape",staticContextModelPath:`${Af}context/260311 context.3dm`,sunVoxelModelPath:`${Af}sun_voxel/Voxel_v2.3dm`,rhinoLibraryPath:"https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/",clickSelectionMaxDurationMs:180,clickSelectionMaxMovementPx:6,selectionMetadata:["Plot"],requiredMetadata:["Plot","Max_height","Occupied_voxels","Max_voxels","Potential"],filterableFields:["Max_height","Occupied_voxels","Max_voxels","Potential"],fieldLabels:{Plot:"Plot",Max_height:"Max height",Occupied_voxels:"Current volume",Max_voxels:"Max volume",Potential:"Buildable potential"},filterBounds:{Max_height:{min:200,max:200,step:1},Occupied_voxels:{min:0,max:3500,step:1},Max_voxels:{min:0,max:3e4,step:1},Potential:{min:0,max:150,step:1}},valuePrefixes:{Potential:"x"}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bu="181",Jr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,Cf=1,Hx=2,up=1,Gx=2,yi=3,Ji=0,xn=1,wn=2,Nn=0,Qr=1,ic=2,Rf=3,Pf=4,Wx=5,fr=100,Xx=101,Yx=102,qx=103,jx=104,Kx=200,Zx=201,$x=202,Jx=203,rc=204,sc=205,Qx=206,e_=207,t_=208,n_=209,i_=210,r_=211,s_=212,a_=213,o_=214,ac=0,oc=1,lc=2,ss=3,cc=4,uc=5,fc=6,hc=7,fp=0,l_=1,c_=2,Ki=0,hp=1,dp=2,pp=3,mp=4,gp=5,xp=6,_p=7,vp=300,as=301,os=302,dc=303,pc=304,No=306,Qs=1e3,un=1001,mc=1002,Cn=1003,u_=1004,Sa=1005,Gt=1006,sl=1007,Yi=1008,oi=1009,Sp=1010,bp=1011,ea=1012,yu=1013,xr=1014,In=1015,Wt=1016,Mu=1017,Eu=1018,ta=1020,yp=35902,Mp=35899,Ep=1021,Tp=1022,Xt=1023,na=1026,ia=1027,Yr=1028,Tu=1029,Wi=1030,wu=1031,Au=1033,no=33776,io=33777,ro=33778,so=33779,gc=35840,xc=35841,_c=35842,vc=35843,Sc=36196,bc=37492,yc=37496,Mc=37808,Ec=37809,Tc=37810,wc=37811,Ac=37812,Cc=37813,Rc=37814,Pc=37815,Dc=37816,Lc=37817,Ic=37818,Uc=37819,Nc=37820,Fc=37821,Oc=36492,Bc=36494,kc=36495,zc=36283,Vc=36284,Hc=36285,Gc=36286,f_=3200,wp=3201,Ap=0,h_=1,Xi="",Mn="srgb",En="srgb-linear",vo="linear",_t="srgb",Er=7680,Df=519,d_=512,p_=513,m_=514,Cp=515,g_=516,x_=517,__=518,v_=519,Wc=35044,Lf="300 es",ei=2e3,So=2001;function Rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const S_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ba(n,e){return new S_[n](e)}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b_(){const n=ra("canvas");return n.style.display="block",n}const If={};function bo(...n){const e="THREE."+n.shift();console.log(e,...n)}function it(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Dt(...n){const e="THREE."+n.shift();console.error(e,...n)}function sa(...n){const e=n.join(" ");e in If||(If[e]=!0,it(...n))}function y_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,yo=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function M_(n,e){return(n%e+e)%e}function al(n,e,t){return(1-t)*n+t*e}function Jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:ao};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _r{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],v=s[a+2],S=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=v,e[t+3]=S;return}if(f!==S||l!==h||c!==d||u!==v){let x=l*h+c*d+u*v+f*S;x<0&&(h=-h,d=-d,v=-v,S=-S,x=-x);let p=1-o;if(x<.9995){const M=Math.acos(x),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,l=l*p+h*o,c=c*p+d*o,u=u*p+v*o,f=f*p+S*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+v*o,f=f*p+S*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*d-c*h,e[t+1]=l*v+u*h+c*f-o*d,e[t+2]=c*v+u*d+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new Z,Uf=new _r;class at{constructor(e,t,i,r,s,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],v=i[8],S=r[0],x=r[3],p=r[6],M=r[1],b=r[4],A=r[7],B=r[2],D=r[5],z=r[8];return s[0]=a*S+o*M+l*B,s[3]=a*x+o*b+l*D,s[6]=a*p+o*A+l*z,s[1]=c*S+u*M+f*B,s[4]=c*x+u*b+f*D,s[7]=c*p+u*A+f*z,s[2]=h*S+d*M+v*B,s[5]=h*x+d*b+v*D,s[8]=h*p+d*A+v*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,v=t*f+i*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=d*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new at,Nf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){const n={enabled:!0,workingColorSpace:En,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?vo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[En]:{primaries:e,whitePoint:i,transfer:vo,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}const dt=T_();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Tr;class w_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Tr===void 0&&(Tr=ra("canvas")),Tr.width=e.width,Tr.height=e.height;const r=Tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class Cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cl(r[a].image)):s.push(cl(r[a]))}else s=cl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?w_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let C_=0;const ul=new Z;class qt extends Sr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=un,r=un,s=Gt,a=Yi,o=Xt,l=oi,c=qt.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Zi(),this.name="",this.source=new Cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qs:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qs:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=vp;qt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],S=l[2],x=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,A=(d+1)/2,B=(p+1)/2,D=(u+h)/4,z=(f+S)/4,j=(v+x)/4;return b>A&&b>B?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=D/i,s=z/i):A>B?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=D/r,s=j/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=z/s,r=j/s),this.set(i,r,s,t),this}let M=Math.sqrt((x-v)*(x-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(x-v)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R_ extends Sr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new qt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Cu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends R_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pp extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Ma.subVectors(this.max,ys),wr.subVectors(e.a,ys),Ar.subVectors(e.b,ys),Cr.subVectors(e.c,ys),Ii.subVectors(Ar,wr),Ui.subVectors(Cr,Ar),rr.subVectors(wr,Cr);let t=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-rr.z,rr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,rr.z,0,-rr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-rr.y,rr.x,0];return!fl(t,wr,Ar,Cr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,wr,Ar,Cr,Ma))?!1:(Ea.crossVectors(Ii,Ui),t=[Ea.x,Ea.y,Ea.z],fl(t,wr,Ar,Cr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fn=new Z,ya=new us,wr=new Z,Ar=new Z,Cr=new Z,Ii=new Z,Ui=new Z,rr=new Z,ys=new Z,Ma=new Z,Ea=new Z,sr=new Z;function fl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){sr.fromArray(n,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=i.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const D_=new us,Ms=new Z,hl=new Z;class fs{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):D_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(hl)),this.expandByPoint(Ms.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new Z,dl=new Z,Ta=new Z,Ni=new Z,pl=new Z,wa=new Z,ml=new Z;class ca{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){dl.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(dl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Ni.dot(this.direction),l=-Ni.dot(Ta),c=Ni.lengthSq(),u=Math.abs(1-a*a);let f,h,d,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(dl).addScaledVector(Ta,h),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,r,s){pl.subVectors(t,e),wa.subVectors(i,e),ml.crossVectors(pl,wa);let a=this.direction.dot(ml),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(Ni,wa));if(l<0)return null;const c=o*this.direction.dot(pl.cross(Ni));if(c<0||l+c>a)return null;const u=-o*Ni.dot(ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,v,S,x){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,v,S,x)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,v,S,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=v,p[11]=S,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,v=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,v=c*u,S=c*f;t[0]=h+S*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-v,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,v=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,v=o*u,S=o*f;t[0]=l*u,t[4]=v*c-d,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,v=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=v*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+v,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,d=a*c,v=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,I_)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Fi.crossVectors(i,Sn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Fi.crossVectors(i,Sn)),Fi.normalize(),Aa.crossVectors(Sn,Fi),r[0]=Fi.x,r[4]=Aa.x,r[8]=Sn.x,r[1]=Fi.y,r[5]=Aa.y,r[9]=Sn.y,r[2]=Fi.z,r[6]=Aa.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],v=i[2],S=i[6],x=i[10],p=i[14],M=i[3],b=i[7],A=i[11],B=i[15],D=r[0],z=r[4],j=r[8],R=r[12],y=r[1],U=r[5],G=r[9],ee=r[13],de=r[2],Q=r[6],$=r[10],ae=r[14],J=r[3],be=r[7],Ee=r[11],Ve=r[15];return s[0]=a*D+o*y+l*de+c*J,s[4]=a*z+o*U+l*Q+c*be,s[8]=a*j+o*G+l*$+c*Ee,s[12]=a*R+o*ee+l*ae+c*Ve,s[1]=u*D+f*y+h*de+d*J,s[5]=u*z+f*U+h*Q+d*be,s[9]=u*j+f*G+h*$+d*Ee,s[13]=u*R+f*ee+h*ae+d*Ve,s[2]=v*D+S*y+x*de+p*J,s[6]=v*z+S*U+x*Q+p*be,s[10]=v*j+S*G+x*$+p*Ee,s[14]=v*R+S*ee+x*ae+p*Ve,s[3]=M*D+b*y+A*de+B*J,s[7]=M*z+b*U+A*Q+B*be,s[11]=M*j+b*G+A*$+B*Ee,s[15]=M*R+b*ee+A*ae+B*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],S=e[7],x=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+S*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+x*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],S=e[13],x=e[14],p=e[15],M=f*x*c-S*h*c+S*l*d-o*x*d-f*l*p+o*h*p,b=v*h*c-u*x*c-v*l*d+a*x*d+u*l*p-a*h*p,A=u*S*c-v*f*c+v*o*d-a*S*d-u*o*p+a*f*p,B=v*f*l-u*S*l-v*o*h+a*S*h+u*o*x-a*f*x,D=t*M+i*b+r*A+s*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=M*z,e[1]=(S*h*s-f*x*s-S*r*d+i*x*d+f*r*p-i*h*p)*z,e[2]=(o*x*s-S*l*s+S*r*c-i*x*c-o*r*p+i*l*p)*z,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*z,e[4]=b*z,e[5]=(u*x*s-v*h*s+v*r*d-t*x*d-u*r*p+t*h*p)*z,e[6]=(v*l*s-a*x*s-v*r*c+t*x*c+a*r*p-t*l*p)*z,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*z,e[8]=A*z,e[9]=(v*f*s-u*S*s-v*i*d+t*S*d+u*i*p-t*f*p)*z,e[10]=(a*S*s-v*o*s+v*i*c-t*S*c-a*i*p+t*o*p)*z,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*z,e[12]=B*z,e[13]=(u*S*r-v*f*r+v*i*h-t*S*h-u*i*x+t*f*x)*z,e[14]=(v*o*r-a*S*r-v*i*l+t*S*l+a*i*x-t*o*x)*z,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,v=s*f,S=a*u,x=a*f,p=o*f,M=l*c,b=l*u,A=l*f,B=i.x,D=i.y,z=i.z;return r[0]=(1-(S+p))*B,r[1]=(d+A)*B,r[2]=(v-b)*B,r[3]=0,r[4]=(d-A)*D,r[5]=(1-(h+p))*D,r[6]=(x+M)*D,r[7]=0,r[8]=(v+b)*z,r[9]=(x-M)*z,r[10]=(1-(h+S))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const a=Rr.set(r[4],r[5],r[6]).length(),o=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/a,f=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ei,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(o===ei)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===So)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ei,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(o===ei)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===So)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new Z,On=new Mt,L_=new Z(0,0,0),I_=new Z(1,1,1),Fi=new Z,Aa=new Z,Sn=new Z,Of=new Mt,Bf=new _r;class li{constructor(e=0,t=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const kf=new Z,Pr=new _r,xi=new Mt,Ca=new Z,Es=new Z,N_=new Z,F_=new _r,zf=new Z(1,0,0),Vf=new Z(0,1,0),Hf=new Z(0,0,1),Gf={type:"added"},O_={type:"removed"},Dr={type:"childadded",child:null},gl={type:"childremoved",child:null};class Lt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new Z,t=new li,i=new _r,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new at}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Es,Ca,this.up):xi.lookAt(Ca,Es,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(xi),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new Z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new Z,_i=new Z,xl=new Z,vi=new Z,Lr=new Z,Ir=new Z,Wf=new Z,_l=new Z,vl=new Z,Sl=new Z,bl=new yt,yl=new yt,Ml=new yt;class Dn{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bn.subVectors(r,t),_i.subVectors(i,t),xl.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(_i),l=Bn.dot(xl),c=_i.dot(_i),u=_i.dot(xl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return bl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),bl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bl,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(Ml,s.z),a}static isFrontFacing(e,t,i,r){return Bn.subVectors(i,t),_i.subVectors(e,t),Bn.cross(_i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Bn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Lr.subVectors(r,i),Ir.subVectors(s,i),_l.subVectors(e,i);const l=Lr.dot(_l),c=Ir.dot(_l);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,r);const u=Lr.dot(vl),f=Ir.dot(vl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Lr,a);Sl.subVectors(e,s);const d=Lr.dot(Sl),v=Ir.dot(Sl);if(v>=0&&d<=v)return t.copy(s);const S=d*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Ir,o);const x=u*v-d*f;if(x<=0&&f-u>=0&&d-v>=0)return Wf.subVectors(s,r),o=(f-u)/(f-u+(d-v)),t.copy(r).addScaledVector(Wf,o);const p=1/(x+S+h);return a=S*p,o=h*p,t.copy(i).addScaledVector(Lr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=M_(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=El(a,s,e+1/3),this.g=El(a,s,e),this.b=El(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return dt.workingToColorSpace(Zt.copy(this),e),Math.round(ft(Zt.r*255,0,255))*65536+Math.round(ft(Zt.g*255,0,255))*256+Math.round(ft(Zt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Mn){dt.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Ra);const i=al(Oi.h,Ra.h,t),r=al(Oi.s,Ra.s,t),s=al(Oi.l,Ra.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Je;Je.NAMES=Dp;let B_=0;class er extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Qr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=sc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rc&&(i.blendSrc=this.blendSrc),this.blendDst!==sc&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Df&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lp extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wi=k_();function k_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function z_(n){Math.abs(n)>65504&&it("DataUtils.toHalfFloat(): Value out of range."),n=ft(n,-65504,65504),wi.floatView[0]=n;const e=wi.uint32View[0],t=e>>23&511;return wi.baseTable[t]+((e&8388607)>>wi.shiftTable[t])}function V_(n){const e=n>>10;return wi.uint32View[0]=wi.mantissaTable[wi.offsetTable[e]+(n&1023)]+wi.exponentTable[e],wi.floatView[0]}class Xf{static toHalfFloat(e){return z_(e)}static fromHalfFloat(e){return V_(e)}}const Ut=new Z,Pa=new Ye;let H_=0;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class Ip extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Up extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ri extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let G_=0;const Pn=new Mt,Tl=new Lt,Ur=new Z,bn=new us,Ts=new us,Ht=new Z;class _n extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Up:Ip)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(bn.min,Ts.min),bn.expandByPoint(Ht),Ht.addVectors(bn.max,Ts.max),bn.expandByPoint(Ht)):(bn.expandByPoint(Ts.min),bn.expandByPoint(Ts.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Ur.fromBufferAttribute(e,c),Ht.add(Ur)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let j=0;j<i.count;j++)o[j]=new Z,l[j]=new Z;const c=new Z,u=new Z,f=new Z,h=new Ye,d=new Ye,v=new Ye,S=new Z,x=new Z;function p(j,R,y){c.fromBufferAttribute(i,j),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,j),d.fromBufferAttribute(s,R),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),v.sub(h);const U=1/(d.x*v.y-v.x*d.y);isFinite(U)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(U),x.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(U),o[j].add(S),o[R].add(S),o[y].add(S),l[j].add(x),l[R].add(x),l[y].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let j=0,R=M.length;j<R;++j){const y=M[j],U=y.start,G=y.count;for(let ee=U,de=U+G;ee<de;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const b=new Z,A=new Z,B=new Z,D=new Z;function z(j){B.fromBufferAttribute(r,j),D.copy(B);const R=o[j];b.copy(R),b.sub(B.multiplyScalar(B.dot(R))).normalize(),A.crossVectors(D,R);const U=A.dot(l[j])<0?-1:1;a.setXYZW(j,b.x,b.y,b.z,U)}for(let j=0,R=M.length;j<R;++j){const y=M[j],U=y.start,G=y.count;for(let ee=U,de=U+G;ee<de;ee+=3)z(e.getX(ee+0)),z(e.getX(ee+1)),z(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),S=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,x),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,x),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let p=0;p<u;p++)h[v++]=c[d++]}return new fn(h,u,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yf=new Mt,ar=new ca,Da=new fs,qf=new Z,La=new Z,Ia=new Z,Ua=new Z,wl=new Z,Na=new Z,jf=new Z,Fa=new Z;class ci extends Lt{constructor(e=new _n,t=new Lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(wl.fromBufferAttribute(f,e),a?Na.addScaledVector(wl,u):Na.addScaledVector(wl.sub(t),u))}t.add(Na)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Da.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Da,qf)===null||ar.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&(Yf.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Yf),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const x=h[v],p=a[x.materialIndex],M=Math.max(x.start,d.start),b=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let A=M,B=b;A<B;A+=3){const D=o.getX(A),z=o.getX(A+1),j=o.getX(A+2);r=Oa(this,p,e,i,c,u,f,D,z,j),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let x=v,p=S;x<p;x+=3){const M=o.getX(x),b=o.getX(x+1),A=o.getX(x+2);r=Oa(this,a,e,i,c,u,f,M,b,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const x=h[v],p=a[x.materialIndex],M=Math.max(x.start,d.start),b=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let A=M,B=b;A<B;A+=3){const D=A,z=A+1,j=A+2;r=Oa(this,p,e,i,c,u,f,D,z,j),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let x=v,p=S;x<p;x+=3){const M=x,b=x+1,A=x+2;r=Oa(this,a,e,i,c,u,f,M,b,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function W_(n,e,t,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ji,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:n}}function Oa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,La),n.getVertexPosition(l,Ia),n.getVertexPosition(c,Ua);const u=W_(n,e,t,i,La,Ia,Ua,jf);if(u){const f=new Z;Dn.getBarycoord(jf,La,Ia,Ua,f),r&&(u.uv=Dn.getInterpolatedAttribute(r,o,l,c,f,new Ye)),s&&(u.uv1=Dn.getInterpolatedAttribute(s,o,l,c,f,new Ye)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Z,materialIndex:0};Dn.getNormal(La,Ia,Ua,h.normal),u.face=h,u.barycoord=f}return u}class ua extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function v(S,x,p,M,b,A,B,D,z,j,R){const y=A/z,U=B/j,G=A/2,ee=B/2,de=D/2,Q=z+1,$=j+1;let ae=0,J=0;const be=new Z;for(let Ee=0;Ee<$;Ee++){const Ve=Ee*U-ee;for(let We=0;We<Q;We++){const Qe=We*y-G;be[S]=Qe*M,be[x]=Ve*b,be[p]=de,c.push(be.x,be.y,be.z),be[S]=0,be[x]=0,be[p]=D>0?1:-1,u.push(be.x,be.y,be.z),f.push(We/z),f.push(1-Ee/j),ae+=1}}for(let Ee=0;Ee<j;Ee++)for(let Ve=0;Ve<z;Ve++){const We=h+Ve+Q*Ee,Qe=h+Ve+Q*(Ee+1),st=h+(Ve+1)+Q*(Ee+1),tt=h+(Ve+1)+Q*Ee;l.push(We,Qe,tt),l.push(Qe,st,tt),J+=6}o.addGroup(d,J,R),d+=J,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=ls(n[t]);for(const r in i)e[r]=i[r]}return e}function X_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Np(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Fo={clone:ls,merge:nn};var Y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fp extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new Z,Kf=new Ye,Zf=new Ye;class gn extends Fp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Kf,Zf),t.subVectors(Zf,Kf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Fr=1;class j_ extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);const s=new gn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);const a=new gn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);const o=new gn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);const l=new gn(Nr,Fr,e,t);l.layers=this.layers,this.add(l);const c=new gn(Nr,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Op extends qt{constructor(e=[],t=as,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Op(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ua(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Nn});s.uniforms.tEquirect.value=t;const a=new ci(r,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Gt),new j_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ba extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const x=t.getJointPose(S,i),p=this._getHandJoint(c,S);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $_ extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new Z;class cs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kp extends er{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Or;const ws=new Z,Br=new Z,kr=new Z,zr=new Ye,As=new Ye,zp=new Mt,ka=new Z,Cs=new Z,za=new Z,$f=new Ye,Cl=new Ye,Jf=new Ye;class J_ extends Lt{constructor(e=new kp){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new _n;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bp(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new cs(i,3,0,!1)),Or.setAttribute("uv",new cs(i,2,3,!1))}this.geometry=Or,this.material=e,this.center=new Ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-kr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Va(ka.set(-.5,-.5,0),kr,a,Br,r,s),Va(Cs.set(.5,-.5,0),kr,a,Br,r,s),Va(za.set(.5,.5,0),kr,a,Br,r,s),$f.set(0,0),Cl.set(1,0),Jf.set(1,1);let o=e.ray.intersectTriangle(ka,Cs,za,!1,ws);if(o===null&&(Va(Cs.set(-.5,.5,0),kr,a,Br,r,s),Cl.set(0,1),o=e.ray.intersectTriangle(ka,za,Cs,!1,ws),o===null))return;const l=e.ray.origin.distanceTo(ws);l<e.near||l>e.far||t.push({distance:l,point:ws.clone(),uv:Dn.getInterpolation(ws,ka,Cs,za,$f,Cl,Jf,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Va(n,e,t,i,r,s){zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(As.x=s*zr.x-r*zr.y,As.y=r*zr.x+s*zr.y):As.copy(zr),n.copy(e),n.x+=As.x,n.y+=As.y,n.applyMatrix4(zp)}class Vp extends qt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Cn,u=Cn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q_ extends fn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rl=new Z,ev=new Z,tv=new at;class Hi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Rl.subVectors(i,t).cross(ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tv.getNormalMatrix(e),r=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new fs,nv=new Ye(.5,.5),Ha=new Z;class Pu{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],v=s[8],S=s[9],x=s[10],p=s[11],M=s[12],b=s[13],A=s[14],B=s[15];if(r[0].setComponents(c-a,d-u,p-v,B-M).normalize(),r[1].setComponents(c+a,d+u,p+v,B+M).normalize(),r[2].setComponents(c+o,d+f,p+S,B+b).normalize(),r[3].setComponents(c-o,d-f,p-S,B-b).normalize(),i)r[4].setComponents(l,h,x,A).normalize(),r[5].setComponents(c-l,d-h,p-x,B-A).normalize();else if(r[4].setComponents(c-l,d-h,p-x,B-A).normalize(),t===ei)r[5].setComponents(c+l,d+h,p+x,B+A).normalize();else if(t===So)r[5].setComponents(l,h,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const t=nv.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mo=new Z,Eo=new Z,Qf=new Mt,Rs=new ca,Ga=new fs,Pl=new Z,eh=new Z;class iv extends Lt{constructor(e=new _n,t=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Mo.fromBufferAttribute(t,r-1),Eo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Mo.distanceTo(Eo);e.setAttribute("lineDistance",new ri(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;Qf.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let S=d,x=v-1;S<x;S+=c){const p=u.getX(S),M=u.getX(S+1),b=Wa(this,e,Rs,l,p,M,S);b&&t.push(b)}if(this.isLineLoop){const S=u.getX(v-1),x=u.getX(d),p=Wa(this,e,Rs,l,S,x,v-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let S=d,x=v-1;S<x;S+=c){const p=Wa(this,e,Rs,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=Wa(this,e,Rs,l,v-1,d,v-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wa(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Mo.fromBufferAttribute(o,r),Eo.fromBufferAttribute(o,s),t.distanceSqToSegment(Mo,Eo,Pl,eh)>i)return;Pl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:eh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Xc extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const th=new Mt,Yc=new ca,Xa=new fs,Ya=new Z;class rv extends Lt{constructor(e=new _n,t=new Xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;th.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(th);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=h,S=d;v<S;v++){const x=c.getX(v);Ya.fromBufferAttribute(f,x),nh(Ya,x,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let v=h,S=d;v<S;v++)Ya.fromBufferAttribute(f,v),nh(Ya,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nh(n,e,t,i,r,s,a){const o=Yc.distanceSqToPoint(n);if(o<t){const l=new Z;Yc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sv extends qt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gp extends qt{constructor(e,t,i=xr,r,s,a,o=Cn,l=Cn,c,u=na,f=1){if(u!==na&&u!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wp extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oo extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],v=[],S=[],x=[];for(let p=0;p<u;p++){const M=p*h-a;for(let b=0;b<c;b++){const A=b*f-s;v.push(A,-M,0),S.push(0,0,1),x.push(b/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const b=M+c*p,A=M+c*(p+1),B=M+1+c*(p+1),D=M+1+c*p;d.push(b,A,D),d.push(A,B,D)}this.setIndex(d),this.setAttribute("position",new ri(v,3)),this.setAttribute("normal",new ri(S,3)),this.setAttribute("uv",new ri(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class av extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xp extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ov extends Xp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yp extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lv extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class cv{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],v=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const uv=new cv;class Qi{constructor(e){this.manager=e!==void 0?e:uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class fv extends Error{constructor(e,t){super(e),this.response=t}}class Ws extends Qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Gs.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:i,onError:r});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,v=d!==0;let S=0;const x=new ReadableStream({start(p){M();function M(){f.read().then(({done:b,value:A})=>{if(b)p.close();else{S+=A.byteLength;const B=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:d});for(let D=0,z=u.length;D<z;D++){const j=u[D];j.onProgress&&j.onProgress(B)}p.enqueue(A),M()}},b=>{p.error(b)})}}});return new Response(x)}else throw new fv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{Gs.add(`file:${e}`,c);const u=Si[e];delete Si[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vr=new WeakMap;class hv extends Qi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Gs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Vr.get(a);f===void 0&&(f=[],Vr.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=ra("img");function l(){u(),t&&t(this);const f=Vr.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Vr.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Gs.remove(`image:${e}`);const h=Vr.get(this)||[];for(let d=0;d<h.length;d++){const v=h[d];v.onError&&v.onError(f)}Vr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gs.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class dv extends Qi{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new Vp,o=new Ws(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{u(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:un,a.wrapT=c.wrapT!==void 0?c.wrapT:un,a.magFilter=c.magFilter!==void 0?c.magFilter:Gt,a.minFilter=c.minFilter!==void 0?c.minFilter:Gt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Yi),c.mipmapCount===1&&(a.minFilter=Gt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,r),a}}class pv extends Qi{constructor(e){super(e)}load(e,t,i,r){const s=new qt,a=new hv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fa extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Dl=new Mt,ih=new Z,rh=new Z;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pu,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mv extends Du{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=yo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gv extends fa{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new mv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sh=new Mt,Ps=new Z,Ll=new Z;class xv extends Du{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ps),Ll.copy(i.position),Ll.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ll),i.updateMatrixWorld(),r.makeTranslation(-Ps.x,-Ps.y,-Ps.z),sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh,i.coordinateSystem,i.reversedDepth)}}class _v extends fa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lu extends Fp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vv extends Du{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sv extends fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bv extends fa{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class yv extends _n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Mv extends Qi{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new Ws(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):Dt(l),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(d,v){if(t[v]!==void 0)return t[v];const x=d.interleavedBuffers[v],p=s(d,x.buffer),M=ba(x.type,p),b=new Bp(M,x.stride);return b.uuid=x.uuid,t[v]=b,b}function s(d,v){if(i[v]!==void 0)return i[v];const x=d.arrayBuffers[v],p=new Uint32Array(x).buffer;return i[v]=p,p}const a=e.isInstancedBufferGeometry?new yv:new _n,o=e.data.index;if(o!==void 0){const d=ba(o.type,o.array);a.setIndex(new fn(d,1))}const l=e.data.attributes;for(const d in l){const v=l[d];let S;if(v.isInterleavedBufferAttribute){const x=r(e.data,v.data);S=new cs(x,v.itemSize,v.offset,v.normalized)}else{const x=ba(v.type,v.array),p=v.isInstancedBufferAttribute?Q_:fn;S=new p(x,v.itemSize,v.normalized)}v.name!==void 0&&(S.name=v.name),v.usage!==void 0&&S.setUsage(v.usage),a.setAttribute(d,S)}const c=e.data.morphAttributes;if(c)for(const d in c){const v=c[d],S=[];for(let x=0,p=v.length;x<p;x++){const M=v[x];let b;if(M.isInterleavedBufferAttribute){const A=r(e.data,M.data);b=new cs(A,M.itemSize,M.offset,M.normalized)}else{const A=ba(M.type,M.array);b=new fn(A,M.itemSize,M.normalized)}M.name!==void 0&&(b.name=M.name),S.push(b)}a.morphAttributes[d]=S}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,v=f.length;d!==v;++d){const S=f[d];a.addGroup(S.start,S.count,S.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new fs().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Ev extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ah=new Mt;class wv{constructor(e,t,i=0,r=1/0){this.ray=new ca(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(e,t=!0,i=[]){return jc(e,this,i,t),i.sort(oh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jc(e[r],this,i,t);return i.sort(oh),i}}function oh(n,e){return n.distance-e.distance}function jc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)jc(s[a],e,t,!0)}}class lh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Av extends Sr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){it("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ch(n,e,t,i){const r=Cv(i);switch(t){case Ep:return n*e;case Yr:return n*e/r.components*r.byteLength;case Tu:return n*e/r.components*r.byteLength;case Wi:return n*e*2/r.components*r.byteLength;case wu:return n*e*2/r.components*r.byteLength;case Tp:return n*e*3/r.components*r.byteLength;case Xt:return n*e*4/r.components*r.byteLength;case Au:return n*e*4/r.components*r.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xc:case vc:return Math.max(n,16)*Math.max(e,8)/4;case gc:case _c:return Math.max(n,8)*Math.max(e,8)/2;case Sc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Bc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cv(n){switch(n){case oi:case Sp:return{byteLength:1,components:1};case ea:case bp:case Wt:return{byteLength:2,components:1};case Mu:case Eu:return{byteLength:2,components:4};case xr:case yu:case In:return{byteLength:4,components:1};case yp:case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Rv(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,v)=>d.start-v.start);let h=0;for(let d=1;d<f.length;d++){const v=f[h],S=f[d];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,v=f.length;d<v;d++){const S=f[d];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Pv=`#ifdef USE_ALPHAHASH
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
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
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
}`,ry=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ct={alphahash_fragment:Pv,alphahash_pars_fragment:Dv,alphamap_fragment:Lv,alphamap_pars_fragment:Iv,alphatest_fragment:Uv,alphatest_pars_fragment:Nv,aomap_fragment:Fv,aomap_pars_fragment:Ov,batching_pars_vertex:Bv,batching_vertex:kv,begin_vertex:zv,beginnormal_vertex:Vv,bsdfs:Hv,iridescence_fragment:Gv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:jv,color_fragment:Kv,color_pars_fragment:Zv,color_pars_vertex:$v,color_vertex:Jv,common:Qv,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:aS,colorspace_pars_fragment:oS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:yS,envmap_vertex:hS,fog_vertex:dS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:xS,lightmap_pars_fragment:_S,lights_lambert_fragment:vS,lights_lambert_pars_fragment:SS,lights_pars_begin:bS,lights_toon_fragment:MS,lights_toon_pars_fragment:ES,lights_phong_fragment:TS,lights_phong_pars_fragment:wS,lights_physical_fragment:AS,lights_physical_pars_fragment:CS,lights_fragment_begin:RS,lights_fragment_maps:PS,lights_fragment_end:DS,logdepthbuf_fragment:LS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:NS,map_fragment:FS,map_pars_fragment:OS,map_particle_fragment:BS,map_particle_pars_fragment:kS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:VS,morphinstance_vertex:HS,morphcolor_vertex:GS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:YS,normal_fragment_begin:qS,normal_fragment_maps:jS,normal_pars_fragment:KS,normal_pars_vertex:ZS,normal_vertex:$S,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:rb,premultiplied_alpha_fragment:sb,project_vertex:ab,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:hb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:xb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:Sb,tonemapping_fragment:bb,tonemapping_pars_fragment:yb,transmission_fragment:Mb,transmission_pars_fragment:Eb,uv_pars_fragment:Tb,uv_pars_vertex:wb,uv_vertex:Ab,worldpos_vertex:Cb,background_vert:Rb,background_frag:Pb,backgroundCube_vert:Db,backgroundCube_frag:Lb,cube_vert:Ib,cube_frag:Ub,depth_vert:Nb,depth_frag:Fb,distanceRGBA_vert:Ob,distanceRGBA_frag:Bb,equirect_vert:kb,equirect_frag:zb,linedashed_vert:Vb,linedashed_frag:Hb,meshbasic_vert:Gb,meshbasic_frag:Wb,meshlambert_vert:Xb,meshlambert_frag:Yb,meshmatcap_vert:qb,meshmatcap_frag:jb,meshnormal_vert:Kb,meshnormal_frag:Zb,meshphong_vert:$b,meshphong_frag:Jb,meshphysical_vert:Qb,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:ry,shadow_vert:sy,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},Be={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Zn={basic:{uniforms:nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Je(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:nn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:nn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Je(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:nn([Be.points,Be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:nn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:nn([Be.common,Be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:nn([Be.sprite,Be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:nn([Be.common,Be.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:nn([Be.lights,Be.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Zn.physical={uniforms:nn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const qa={r:0,b:0,g:0},lr=new li,cy=new Mt;function uy(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function v(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function S(b){let A=!1;const B=v(b);B===null?p(o,l):B&&B.isColor&&(p(B,1),A=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,A){const B=v(A);B&&(B.isCubeTexture||B.mapping===No)?(u===void 0&&(u=new ci(new ua(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:ls(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),lr.copy(A.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=B,u.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(lr)),u.material.toneMapped=dt.getTransfer(B.colorSpace)!==_t,(f!==B||h!==B.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=B,h=B.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):B&&B.isTexture&&(c===void 0&&(c=new ci(new Oo(2,2),new Yt({name:"BackgroundMaterial",uniforms:ls(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=B,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=dt.getTransfer(B.colorSpace)!==_t,B.matrixAutoUpdate===!0&&B.updateMatrix(),c.material.uniforms.uvTransform.value.copy(B.matrix),(f!==B||h!==B.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=B,h=B.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB(qa,Np(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,A,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),l=A,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:S,addToRenderList:x,dispose:M}}function fy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,U,G,ee,de){let Q=!1;const $=f(ee,G,U);s!==$&&(s=$,c(s.object)),Q=d(y,ee,G,de),Q&&v(y,ee,G,de),de!==null&&e.update(de,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,A(y,U,G,ee),de!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,U,G){const ee=G.wireframe===!0;let de=i[y.id];de===void 0&&(de={},i[y.id]=de);let Q=de[U.id];Q===void 0&&(Q={},de[U.id]=Q);let $=Q[ee];return $===void 0&&($=h(l()),Q[ee]=$),$}function h(y){const U=[],G=[],ee=[];for(let de=0;de<t;de++)U[de]=0,G[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:ee,object:y,attributes:{},index:null}}function d(y,U,G,ee){const de=s.attributes,Q=U.attributes;let $=0;const ae=G.getAttributes();for(const J in ae)if(ae[J].location>=0){const Ee=de[J];let Ve=Q[J];if(Ve===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Ve=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Ve=y.instanceColor)),Ee===void 0||Ee.attribute!==Ve||Ve&&Ee.data!==Ve.data)return!0;$++}return s.attributesNum!==$||s.index!==ee}function v(y,U,G,ee){const de={},Q=U.attributes;let $=0;const ae=G.getAttributes();for(const J in ae)if(ae[J].location>=0){let Ee=Q[J];Ee===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor));const Ve={};Ve.attribute=Ee,Ee&&Ee.data&&(Ve.data=Ee.data),de[J]=Ve,$++}s.attributes=de,s.attributesNum=$,s.index=ee}function S(){const y=s.newAttributes;for(let U=0,G=y.length;U<G;U++)y[U]=0}function x(y){p(y,0)}function p(y,U){const G=s.newAttributes,ee=s.enabledAttributes,de=s.attributeDivisors;G[y]=1,ee[y]===0&&(n.enableVertexAttribArray(y),ee[y]=1),de[y]!==U&&(n.vertexAttribDivisor(y,U),de[y]=U)}function M(){const y=s.newAttributes,U=s.enabledAttributes;for(let G=0,ee=U.length;G<ee;G++)U[G]!==y[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function b(y,U,G,ee,de,Q,$){$===!0?n.vertexAttribIPointer(y,U,G,de,Q):n.vertexAttribPointer(y,U,G,ee,de,Q)}function A(y,U,G,ee){S();const de=ee.attributes,Q=G.getAttributes(),$=U.defaultAttributeValues;for(const ae in Q){const J=Q[ae];if(J.location>=0){let be=de[ae];if(be===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),be!==void 0){const Ee=be.normalized,Ve=be.itemSize,We=e.get(be);if(We===void 0)continue;const Qe=We.buffer,st=We.type,tt=We.bytesPerElement,ne=st===n.INT||st===n.UNSIGNED_INT||be.gpuType===yu;if(be.isInterleavedBufferAttribute){const V=be.data,ue=V.stride,pe=be.offset;if(V.isInstancedInterleavedBuffer){for(let ge=0;ge<J.locationSize;ge++)p(J.location+ge,V.meshPerAttribute);y.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ge=0;ge<J.locationSize;ge++)x(J.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ge=0;ge<J.locationSize;ge++)b(J.location+ge,Ve/J.locationSize,st,Ee,ue*tt,(pe+Ve/J.locationSize*ge)*tt,ne)}else{if(be.isInstancedBufferAttribute){for(let V=0;V<J.locationSize;V++)p(J.location+V,be.meshPerAttribute);y.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let V=0;V<J.locationSize;V++)x(J.location+V);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let V=0;V<J.locationSize;V++)b(J.location+V,Ve/J.locationSize,st,Ee,Ve*tt,Ve/J.locationSize*V*tt,ne)}}else if($!==void 0){const Ee=$[ae];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(J.location,Ee);break;case 3:n.vertexAttrib3fv(J.location,Ee);break;case 4:n.vertexAttrib4fv(J.location,Ee);break;default:n.vertexAttrib1fv(J.location,Ee)}}}}M()}function B(){j();for(const y in i){const U=i[y];for(const G in U){const ee=U[G];for(const de in ee)u(ee[de].object),delete ee[de];delete U[G]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const G in U){const ee=U[G];for(const de in ee)u(ee[de].object),delete ee[de];delete U[G]}delete i[y.id]}function z(y){for(const U in i){const G=i[U];if(G[y.id]===void 0)continue;const ee=G[y.id];for(const de in ee)u(ee[de].object),delete ee[de];delete G[y.id]}}function j(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:j,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:S,enableAttribute:x,disableUnusedAttributes:M}}function hy(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let v=0;v<f;v++)d+=u[v];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S]*h[S];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(z){return!(z!==Xt&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(z){const j=z===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==oi&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==In&&!j)}function l(z){if(z==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:B,maxSamples:D}}function py(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hi,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,S=f.clipIntersection,x=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!x)s?u(null):c();else{const M=s?0:i,b=M*4;let A=p.clippingState||null;l.value=A,A=u(v,h,b,d);for(let B=0;B!==b;++B)A[B]=t[B];p.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,v){const S=f!==null?f.length:0;let x=null;if(S!==0){if(x=l.value,v!==!0||x===null){const p=d+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,A=d;b!==S;++b,A+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(x,A),x[A+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function my(n){let e=new WeakMap;function t(a,o){return o===dc?a.mapping=as:o===pc&&(a.mapping=os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===dc||o===pc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new K_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const qi=4,uh=[.125,.215,.35,.446,.526,.582],hr=20,gy=256,Ds=new Lu,fh=new Je;let Il=null,Ul=0,Nl=0,Fl=!1;const xy=new Z;class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=xy}=s;Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ul,Nl),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Wt,format:Xt,colorSpace:En,depthBuffer:!1},r=dh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_y(s)),this._blurMaterial=Sy(s,e,t),this._ggxMaterial=vy(s,e,t)}return r}_compileMaterial(e){const t=new ci(new _n,e);this._renderer.compile(t,Ds)}_sceneToCubeUV(e,t,i,r,s){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(fh),f.toneMapping=Ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new ua,new Lp({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,x=S.material;let p=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(fh),p=!0);for(let b=0;b<6;b++){const A=b%3;A===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):A===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const B=this._cubeSize;Hr(r,A*B,b>2?B:0,B,B),f.setRenderTarget(r),p&&f.render(S,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===as||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ds)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,d=f*h,{_lodMax:v}=this,S=this._sizeLods[i],x=3*S*(i>v-qi?i-v+qi:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=v-t,Hr(s,x,p,3*S,2*S),r.setRenderTarget(s),r.render(o,Ds),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Hr(e,x,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Ds)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hr-1),S=s/v,x=isFinite(s)?1+Math.floor(u*S):hr;x>hr&&it(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${hr}`);const p=[];let M=0;for(let z=0;z<hr;++z){const j=z/S,R=Math.exp(-j*j/2);p.push(R),z===0?M+=R:z<x&&(M+=2*R)}for(let z=0;z<p.length;z++)p[z]=p[z]/M;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=v,h.mipInt.value=b-i;const A=this._sizeLods[r],B=3*A*(r>b-qi?r-b+qi:0),D=4*(this._cubeSize-A);Hr(t,B,D,3*A,2*A),l.setRenderTarget(t),l.render(f,Ds)}}function _y(n){const e=[],t=[],i=[];let r=n;const s=n-qi+1+uh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-qi?l=uh[a-n+qi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,S=3,x=2,p=1,M=new Float32Array(S*v*d),b=new Float32Array(x*v*d),A=new Float32Array(p*v*d);for(let D=0;D<d;D++){const z=D%3*2/3-1,j=D>2?0:-1,R=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];M.set(R,S*v*D),b.set(h,x*v*D);const y=[D,D,D,D,D,D];A.set(y,p*v*D)}const B=new _n;B.setAttribute("position",new fn(M,S)),B.setAttribute("uv",new fn(b,x)),B.setAttribute("faceIndex",new fn(A,p)),i.push(new ci(B,null)),r>qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function dh(n,e,t){const i=new an(n,e,t);return i.texture.mapping=No,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vy(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Sy(n,e,t){const i=new Float32Array(hr),r=new Z(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bo(),fragmentShader:`

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
	`}function by(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===dc||l===pc,u=l===as||l===os;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new hh(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new hh(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function yy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sa("WebGLRenderer: "+i+" extension not supported."),r}}}function My(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,v=f.attributes.position;let S=0;if(d!==null){const M=d.array;S=d.version;for(let b=0,A=M.length;b<A;b+=3){const B=M[b+0],D=M[b+1],z=M[b+2];h.push(B,D,D,z,z,B)}}else if(v!==void 0){const M=v.array;S=v.version;for(let b=0,A=M.length/3-1;b<A;b+=3){const B=b+0,D=b+1,z=b+2;h.push(B,D,D,z,z,B)}}else return;const x=new(Rp(h)?Up:Ip)(h,1);x.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,x)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ey(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,v){v!==0&&(n.drawElementsInstanced(i,d,s,h*a,v),t.update(d,i,v))}function u(h,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,v);let x=0;for(let p=0;p<v;p++)x+=d[p];t.update(x,i,1)}function f(h,d,v,S){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],S[p]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,S,0,v);let p=0;for(let M=0;M<v;M++)p+=d[M]*S[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ty(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wy(n,e,t){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){j.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),S===!0&&(A=2),x===!0&&(A=3);let B=o.attributes.position.count*A,D=1;B>e.maxTextureSize&&(D=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*D*4*f),j=new Pp(z,B,D,f);j.type=In,j.needsUpdate=!0;const R=A*4;for(let U=0;U<f;U++){const G=p[U],ee=M[U],de=b[U],Q=B*D*4*U;for(let $=0;$<G.count;$++){const ae=$*R;v===!0&&(r.fromBufferAttribute(G,$),z[Q+ae+0]=r.x,z[Q+ae+1]=r.y,z[Q+ae+2]=r.z,z[Q+ae+3]=0),S===!0&&(r.fromBufferAttribute(ee,$),z[Q+ae+4]=r.x,z[Q+ae+5]=r.y,z[Q+ae+6]=r.z,z[Q+ae+7]=0),x===!0&&(r.fromBufferAttribute(de,$),z[Q+ae+8]=r.x,z[Q+ae+9]=r.y,z[Q+ae+10]=r.z,z[Q+ae+11]=de.itemSize===4?r.w:1)}}h={count:f,texture:j,size:new Ye(B,D)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let x=0;x<c.length;x++)v+=c[x];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ay(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const jp=new qt,gh=new Gp(1,1),Kp=new Pp,Zp=new P_,$p=new Op,xh=[],_h=[],vh=new Float32Array(16),Sh=new Float32Array(9),bh=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xh[r];if(s===void 0&&(s=new Float32Array(r),xh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ko(n,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;bh.set(i),n.uniformMatrix2fv(this.addr,!1,bh),zt(t,i)}}function Iy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Sh.set(i),n.uniformMatrix3fv(this.addr,!1,Sh),zt(t,i)}}function Uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;vh.set(i),n.uniformMatrix4fv(this.addr,!1,vh),zt(t,i)}}function Ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function Gy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gh.compareFunction=Cp,s=gh):s=jp,t.setTexture2D(e||s,r)}function Wy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zp,r)}function Xy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$p,r)}function Yy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kp,r)}function qy(n){switch(n){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Dy;case 35674:return Ly;case 35675:return Iy;case 35676:return Uy;case 5124:case 35670:return Ny;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Vy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}function jy(n,e){n.uniform1fv(this.addr,e)}function Ky(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function Zy(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function $y(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function Jy(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qy(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eM(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tM(n,e){n.uniform1iv(this.addr,e)}function nM(n,e){n.uniform2iv(this.addr,e)}function iM(n,e){n.uniform3iv(this.addr,e)}function rM(n,e){n.uniform4iv(this.addr,e)}function sM(n,e){n.uniform1uiv(this.addr,e)}function aM(n,e){n.uniform2uiv(this.addr,e)}function oM(n,e){n.uniform3uiv(this.addr,e)}function lM(n,e){n.uniform4uiv(this.addr,e)}function cM(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||jp,s[a])}function uM(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Zp,s[a])}function fM(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$p,s[a])}function hM(n,e,t){const i=this.cache,r=e.length,s=ko(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kp,s[a])}function dM(n){switch(n){case 5126:return jy;case 35664:return Ky;case 35665:return Zy;case 35666:return $y;case 35674:return Jy;case 35675:return Qy;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qy(t.type)}}class mM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dM(t.type)}}class gM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function yh(n,e){n.seq.push(e),n.map[e.id]=e}function xM(n,e,t){const i=n.name,r=i.length;for(Ol.lastIndex=0;;){const s=Ol.exec(i),a=Ol.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yh(t,c===void 0?new pM(o,n,e):new mM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new gM(o),yh(t,f)),t=f}}}class oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);xM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Mh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _M=37297;let vM=0;function SM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Eh=new at;function bM(n){dt._getMatrix(Eh,dt.workingColorSpace,n);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case vo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+SM(n.getShaderSource(e),o)}else return s}function yM(n,e){const t=bM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MM(n,e){let t;switch(e){case hp:t="Linear";break;case dp:t="Reinhard";break;case pp:t="Cineon";break;case mp:t="ACESFilmic";break;case xp:t="AgX";break;case _p:t="Neutral";break;case gp:t="Custom";break;default:it("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new Z;function EM(){dt.getLuminanceCoefficients(ja);const n=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function wM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Is(n){return n!==""}function wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(CM,PM)}const RM=new Map;function PM(n,e){let t=ct[e];if(t===void 0){const i=RM.get(e);if(i!==void 0)t=ct[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}const DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(DM,LM)}function LM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function IM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function UM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function FM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function OM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=IM(t),c=UM(t),u=NM(t),f=FM(t),h=OM(t),d=TM(t),v=wM(s),S=r.createProgram();let x,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Is).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(x=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ki?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,yM("linearToOutputTexel",t.outputColorSpace),EM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=Kc(a),a=wh(a,t),a=Ah(a,t),o=Kc(o),o=wh(o,t),o=Ah(o,t),a=Ch(a),o=Ch(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+x+a,A=M+p+o,B=Mh(r,r.VERTEX_SHADER,b),D=Mh(r,r.FRAGMENT_SHADER,A);r.attachShader(S,B),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function z(U){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(S)||"",ee=r.getShaderInfoLog(B)||"",de=r.getShaderInfoLog(D)||"",Q=G.trim(),$=ee.trim(),ae=de.trim();let J=!0,be=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,B,D);else{const Ee=Th(r,B,"vertex"),Ve=Th(r,D,"fragment");Dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+Ee+`
`+Ve)}else Q!==""?it("WebGLProgram: Program Info Log:",Q):($===""||ae==="")&&(be=!1);be&&(U.diagnostics={runnable:J,programLog:Q,vertexShader:{log:$,prefix:x},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(B),r.deleteShader(D),j=new oo(r,S),R=AM(r,S)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,_M)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=B,this.fragmentShader=D,this}let kM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VM(e),t.set(e,i)),i}}class VM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function HM(n,e,t,i,r,s,a){const o=new Ru,l=new zM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(R){return c.add(R),R===0?"uv":`uv${R}`}function x(R,y,U,G,ee){const de=G.fog,Q=ee.geometry,$=R.isMeshStandardMaterial?G.environment:null,ae=(R.isMeshStandardMaterial?t:e).get(R.envMap||$),J=ae&&ae.mapping===No?ae.image.height:null,be=v[R.type];R.precision!==null&&(d=r.getMaxPrecision(R.precision),d!==R.precision&&it("WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));const Ee=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ve=Ee!==void 0?Ee.length:0;let We=0;Q.morphAttributes.position!==void 0&&(We=1),Q.morphAttributes.normal!==void 0&&(We=2),Q.morphAttributes.color!==void 0&&(We=3);let Qe,st,tt,ne;if(be){const pt=Zn[be];Qe=pt.vertexShader,st=pt.fragmentShader}else Qe=R.vertexShader,st=R.fragmentShader,l.update(R),tt=l.getVertexShaderID(R),ne=l.getFragmentShaderID(R);const V=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),pe=ee.isInstancedMesh===!0,ge=ee.isBatchedMesh===!0,Le=!!R.map,L=!!R.matcap,N=!!ae,W=!!R.aoMap,w=!!R.lightMap,oe=!!R.bumpMap,re=!!R.normalMap,Te=!!R.displacementMap,ce=!!R.emissiveMap,_e=!!R.metalnessMap,se=!!R.roughnessMap,Ae=R.anisotropy>0,T=R.clearcoat>0,g=R.dispersion>0,I=R.iridescence>0,Y=R.sheen>0,ie=R.transmission>0,K=Ae&&!!R.anisotropyMap,De=T&&!!R.clearcoatMap,xe=T&&!!R.clearcoatNormalMap,ke=T&&!!R.clearcoatRoughnessMap,Ne=I&&!!R.iridescenceMap,Me=I&&!!R.iridescenceThicknessMap,we=Y&&!!R.sheenColorMap,Ue=Y&&!!R.sheenRoughnessMap,Ge=!!R.specularMap,Ie=!!R.specularColorMap,qe=!!R.specularIntensityMap,H=ie&&!!R.transmissionMap,Fe=ie&&!!R.thicknessMap,le=!!R.gradientMap,Pe=!!R.alphaMap,Re=R.alphaTest>0,ve=!!R.alphaHash,je=!!R.extensions;let nt=Ki;R.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Et={shaderID:be,shaderType:R.type,shaderName:R.name,vertexShader:Qe,fragmentShader:st,defines:R.defines,customVertexShaderID:tt,customFragmentShaderID:ne,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:ge,batchingColor:ge&&ee._colorsTexture!==null,instancing:pe,instancingColor:pe&&ee.instanceColor!==null,instancingMorph:pe&&ee.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:En,alphaToCoverage:!!R.alphaToCoverage,map:Le,matcap:L,envMap:N,envMapMode:N&&ae.mapping,envMapCubeUVHeight:J,aoMap:W,lightMap:w,bumpMap:oe,normalMap:re,displacementMap:h&&Te,emissiveMap:ce,normalMapObjectSpace:re&&R.normalMapType===h_,normalMapTangentSpace:re&&R.normalMapType===Ap,metalnessMap:_e,roughnessMap:se,anisotropy:Ae,anisotropyMap:K,clearcoat:T,clearcoatMap:De,clearcoatNormalMap:xe,clearcoatRoughnessMap:ke,dispersion:g,iridescence:I,iridescenceMap:Ne,iridescenceThicknessMap:Me,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Ue,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:qe,transmission:ie,transmissionMap:H,thicknessMap:Fe,gradientMap:le,opaque:R.transparent===!1&&R.blending===Qr&&R.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Re,alphaHash:ve,combine:R.combine,mapUv:Le&&S(R.map.channel),aoMapUv:W&&S(R.aoMap.channel),lightMapUv:w&&S(R.lightMap.channel),bumpMapUv:oe&&S(R.bumpMap.channel),normalMapUv:re&&S(R.normalMap.channel),displacementMapUv:Te&&S(R.displacementMap.channel),emissiveMapUv:ce&&S(R.emissiveMap.channel),metalnessMapUv:_e&&S(R.metalnessMap.channel),roughnessMapUv:se&&S(R.roughnessMap.channel),anisotropyMapUv:K&&S(R.anisotropyMap.channel),clearcoatMapUv:De&&S(R.clearcoatMap.channel),clearcoatNormalMapUv:xe&&S(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&S(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&S(R.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&S(R.iridescenceThicknessMap.channel),sheenColorMapUv:we&&S(R.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&S(R.sheenRoughnessMap.channel),specularMapUv:Ge&&S(R.specularMap.channel),specularColorMapUv:Ie&&S(R.specularColorMap.channel),specularIntensityMapUv:qe&&S(R.specularIntensityMap.channel),transmissionMapUv:H&&S(R.transmissionMap.channel),thicknessMapUv:Fe&&S(R.thicknessMap.channel),alphaMapUv:Pe&&S(R.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(re||Ae),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!Q.attributes.uv&&(Le||Pe),fog:!!de,useFog:R.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:ee.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:We,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:Le&&R.map.isVideoTexture===!0&&dt.getTransfer(R.map.colorSpace)===_t,decodeVideoTextureEmissive:ce&&R.emissiveMap.isVideoTexture===!0&&dt.getTransfer(R.emissiveMap.colorSpace)===_t,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===wn,flipSided:R.side===xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:je&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&R.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(R){const y=[];if(R.shaderID?y.push(R.shaderID):(y.push(R.customVertexShaderID),y.push(R.customFragmentShaderID)),R.defines!==void 0)for(const U in R.defines)y.push(U),y.push(R.defines[U]);return R.isRawShaderMaterial===!1&&(M(y,R),b(y,R),y.push(n.outputColorSpace)),y.push(R.customProgramCacheKey),y.join()}function M(R,y){R.push(y.precision),R.push(y.outputColorSpace),R.push(y.envMapMode),R.push(y.envMapCubeUVHeight),R.push(y.mapUv),R.push(y.alphaMapUv),R.push(y.lightMapUv),R.push(y.aoMapUv),R.push(y.bumpMapUv),R.push(y.normalMapUv),R.push(y.displacementMapUv),R.push(y.emissiveMapUv),R.push(y.metalnessMapUv),R.push(y.roughnessMapUv),R.push(y.anisotropyMapUv),R.push(y.clearcoatMapUv),R.push(y.clearcoatNormalMapUv),R.push(y.clearcoatRoughnessMapUv),R.push(y.iridescenceMapUv),R.push(y.iridescenceThicknessMapUv),R.push(y.sheenColorMapUv),R.push(y.sheenRoughnessMapUv),R.push(y.specularMapUv),R.push(y.specularColorMapUv),R.push(y.specularIntensityMapUv),R.push(y.transmissionMapUv),R.push(y.thicknessMapUv),R.push(y.combine),R.push(y.fogExp2),R.push(y.sizeAttenuation),R.push(y.morphTargetsCount),R.push(y.morphAttributeCount),R.push(y.numDirLights),R.push(y.numPointLights),R.push(y.numSpotLights),R.push(y.numSpotLightMaps),R.push(y.numHemiLights),R.push(y.numRectAreaLights),R.push(y.numDirLightShadows),R.push(y.numPointLightShadows),R.push(y.numSpotLightShadows),R.push(y.numSpotLightShadowsWithMaps),R.push(y.numLightProbes),R.push(y.shadowMapType),R.push(y.toneMapping),R.push(y.numClippingPlanes),R.push(y.numClipIntersection),R.push(y.depthPacking)}function b(R,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),R.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),R.push(o.mask)}function A(R){const y=v[R.type];let U;if(y){const G=Zn[y];U=Fo.clone(G.uniforms)}else U=R.uniforms;return U}function B(R,y){let U;for(let G=0,ee=u.length;G<ee;G++){const de=u[G];if(de.cacheKey===y){U=de,++U.usedTimes;break}}return U===void 0&&(U=new BM(n,y,R,s),u.push(U)),U}function D(R){if(--R.usedTimes===0){const y=u.indexOf(R);u[y]=u[u.length-1],u.pop(),R.destroy()}}function z(R){l.remove(R)}function j(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:A,acquireProgram:B,releaseProgram:D,releaseShaderCache:z,programs:u,dispose:j}}function GM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function WM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ph(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,v,S,x){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:S,group:x},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=S,p.group=x),e++,p}function o(f,h,d,v,S,x){const p=a(f,h,d,v,S,x);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,v,S,x){const p=a(f,h,d,v,S,x);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||WM),i.length>1&&i.sort(h||Ph),r.length>1&&r.sort(h||Ph)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function XM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Dh,n.set(i,[a])):r>=s.length?(a=new Dh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function YM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Je};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jM=0;function KM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZM(n){const e=new YM,t=qM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new Mt,a=new Mt;function o(c){let u=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,v=0,S=0,x=0,p=0,M=0,b=0,A=0,B=0,D=0,z=0;c.sort(KM);for(let R=0,y=c.length;R<y;R++){const U=c[R],G=U.color,ee=U.intensity,de=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=G.r*ee,f+=G.g*ee,h+=G.b*ee;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],ee);z++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ae=U.shadow,J=t.get(U);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=U.shadow.matrix,M++}i.directional[d]=$,d++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(G).multiplyScalar(ee),$.distance=de,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[S]=$;const ae=U.shadow;if(U.map&&(i.spotLightMap[B]=U.map,B++,ae.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[S]=ae.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,i.spotShadow[S]=J,i.spotShadowMap[S]=Q,A++}S++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(G).multiplyScalar(ee),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[x]=$,x++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const ae=U.shadow,J=t.get(U);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,J.shadowCameraNear=ae.camera.near,J.shadowCameraFar=ae.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=U.shadow.matrix,b++}i.point[v]=$,v++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(ee),$.groundColor.copy(U.groundColor).multiplyScalar(ee),i.hemi[p]=$,p++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const j=i.hash;(j.directionalLength!==d||j.pointLength!==v||j.spotLength!==S||j.rectAreaLength!==x||j.hemiLength!==p||j.numDirectionalShadows!==M||j.numPointShadows!==b||j.numSpotShadows!==A||j.numSpotMaps!==B||j.numLightProbes!==z)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=x,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+B-D,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=z,j.directionalLength=d,j.pointLength=v,j.spotLength=S,j.rectAreaLength=x,j.hemiLength=p,j.numDirectionalShadows=M,j.numPointShadows=b,j.numSpotShadows=A,j.numSpotMaps=B,j.numLightProbes=z,i.version=jM++)}function l(c,u){let f=0,h=0,d=0,v=0,S=0;const x=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),f++}else if(b.isSpotLight){const A=i.spot[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),d++}else if(b.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(x),a.identity(),s.copy(b.matrixWorld),s.premultiply(x),a.extractRotation(s),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(x),h++}else if(b.isHemisphereLight){const A=i.hemi[S];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(x),S++}}}return{setup:o,setupView:l,state:i}}function Lh(n){const e=new ZM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $M(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lh(n),e.set(r,[o])):s>=a.length?(o=new Lh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const JM=`void main() {
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
}`;function eE(n,e,t){let i=new Pu;const r=new Ye,s=new Ye,a=new yt,o=new Yp({depthPacking:wp}),l=new lv,c={},u=t.maxTextureSize,f={[Ji]:xn,[xn]:Ji,[wn]:wn},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:JM,fragmentShader:QM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new _n;v.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ci(v,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(D,z,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const R=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Nn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ee=p!==yi&&this.type===yi,de=p===yi&&this.type!==yi;for(let Q=0,$=D.length;Q<$;Q++){const ae=D[Q],J=ae.shadow;if(J===void 0){it("WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const be=J.getFrameExtents();if(r.multiply(be),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/be.x),r.x=s.x*be.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/be.y),r.y=s.y*be.y,J.mapSize.y=s.y)),J.map===null||ee===!0||de===!0){const Ve=this.type!==yi?{minFilter:Cn,magFilter:Cn}:{};J.map!==null&&J.map.dispose(),J.map=new an(r.x,r.y,Ve),J.map.texture.name=ae.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const Ee=J.getViewportCount();for(let Ve=0;Ve<Ee;Ve++){const We=J.getViewport(Ve);a.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),G.viewport(a),J.updateMatrices(ae,Ve),i=J.getFrustum(),A(z,j,J.camera,ae,this.type)}J.isPointLightShadow!==!0&&this.type===yi&&M(J,j),J.needsUpdate=!1}p=this.type,x.needsUpdate=!1,n.setRenderTarget(R,y,U)};function M(D,z){const j=e.update(S);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new an(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(z,null,j,h,S,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(z,null,j,d,S,null)}function b(D,z,j,R){let y=null;const U=j.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)y=U;else if(y=j.isPointLight===!0?l:o,n.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const G=y.uuid,ee=z.uuid;let de=c[G];de===void 0&&(de={},c[G]=de);let Q=de[ee];Q===void 0&&(Q=y.clone(),de[ee]=Q,z.addEventListener("dispose",B)),y=Q}if(y.visible=z.visible,y.wireframe=z.wireframe,R===yi?y.side=z.shadowSide!==null?z.shadowSide:z.side:y.side=z.shadowSide!==null?z.shadowSide:f[z.side],y.alphaMap=z.alphaMap,y.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,y.map=z.map,y.clipShadows=z.clipShadows,y.clippingPlanes=z.clippingPlanes,y.clipIntersection=z.clipIntersection,y.displacementMap=z.displacementMap,y.displacementScale=z.displacementScale,y.displacementBias=z.displacementBias,y.wireframeLinewidth=z.wireframeLinewidth,y.linewidth=z.linewidth,j.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=n.properties.get(y);G.light=j}return y}function A(D,z,j,R,y){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===yi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,D.matrixWorld);const ee=e.update(D),de=D.material;if(Array.isArray(de)){const Q=ee.groups;for(let $=0,ae=Q.length;$<ae;$++){const J=Q[$],be=de[J.materialIndex];if(be&&be.visible){const Ee=b(D,be,R,y);D.onBeforeShadow(n,D,z,j,ee,Ee,J),n.renderBufferDirect(j,null,ee,Ee,D,J),D.onAfterShadow(n,D,z,j,ee,Ee,J)}}}else if(de.visible){const Q=b(D,de,R,y);D.onBeforeShadow(n,D,z,j,ee,Q,null),n.renderBufferDirect(j,null,ee,Q,D,null),D.onAfterShadow(n,D,z,j,ee,Q,null)}}const G=D.children;for(let ee=0,de=G.length;ee<de;ee++)A(G[ee],z,j,R,y)}function B(D){D.target.removeEventListener("dispose",B);for(const j in c){const R=c[j],y=D.target.uuid;y in R&&(R[y].dispose(),delete R[y])}}}const tE={[ac]:oc,[lc]:fc,[cc]:hc,[ss]:uc,[oc]:ac,[fc]:lc,[hc]:cc,[uc]:ss};function nE(n,e){function t(){let H=!1;const Fe=new yt;let le=null;const Pe=new yt(0,0,0,0);return{setMask:function(Re){le!==Re&&!H&&(n.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){H=Re},setClear:function(Re,ve,je,nt,Et){Et===!0&&(Re*=nt,ve*=nt,je*=nt),Fe.set(Re,ve,je,nt),Pe.equals(Fe)===!1&&(n.clearColor(Re,ve,je,nt),Pe.copy(Fe))},reset:function(){H=!1,le=null,Pe.set(-1,0,0,0)}}}function i(){let H=!1,Fe=!1,le=null,Pe=null,Re=null;return{setReversed:function(ve){if(Fe!==ve){const je=e.get("EXT_clip_control");ve?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Fe=ve;const nt=Re;Re=null,this.setClear(nt)}},getReversed:function(){return Fe},setTest:function(ve){ve?V(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ve){le!==ve&&!H&&(n.depthMask(ve),le=ve)},setFunc:function(ve){if(Fe&&(ve=tE[ve]),Pe!==ve){switch(ve){case ac:n.depthFunc(n.NEVER);break;case oc:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case uc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Re!==ve&&(Fe&&(ve=1-ve),n.clearDepth(ve),Re=ve)},reset:function(){H=!1,le=null,Pe=null,Re=null,Fe=!1}}}function r(){let H=!1,Fe=null,le=null,Pe=null,Re=null,ve=null,je=null,nt=null,Et=null;return{setTest:function(pt){H||(pt?V(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(pt){Fe!==pt&&!H&&(n.stencilMask(pt),Fe=pt)},setFunc:function(pt,Rn,vn){(le!==pt||Pe!==Rn||Re!==vn)&&(n.stencilFunc(pt,Rn,vn),le=pt,Pe=Rn,Re=vn)},setOp:function(pt,Rn,vn){(ve!==pt||je!==Rn||nt!==vn)&&(n.stencilOp(pt,Rn,vn),ve=pt,je=Rn,nt=vn)},setLocked:function(pt){H=pt},setClear:function(pt){Et!==pt&&(n.clearStencil(pt),Et=pt)},reset:function(){H=!1,Fe=null,le=null,Pe=null,Re=null,ve=null,je=null,nt=null,Et=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],v=null,S=!1,x=null,p=null,M=null,b=null,A=null,B=null,D=null,z=new Je(0,0,0),j=0,R=!1,y=null,U=null,G=null,ee=null,de=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ae=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=ae>=1):J.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=ae>=2);let be=null,Ee={};const Ve=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),Qe=new yt().fromArray(Ve),st=new yt().fromArray(We);function tt(H,Fe,le,Pe){const Re=new Uint8Array(4),ve=n.createTexture();n.bindTexture(H,ve),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<le;je++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Fe,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Fe+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return ve}const ne={};ne[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(n.DEPTH_TEST),a.setFunc(ss),oe(!1),re(Cf),V(n.CULL_FACE),W(Nn);function V(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ue(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function pe(H,Fe){return f[H]!==Fe?(n.bindFramebuffer(H,Fe),f[H]=Fe,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Fe),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Fe),!0):!1}function ge(H,Fe){let le=d,Pe=!1;if(H){le=h.get(Fe),le===void 0&&(le=[],h.set(Fe,le));const Re=H.textures;if(le.length!==Re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,je=Re.length;ve<je;ve++)le[ve]=n.COLOR_ATTACHMENT0+ve;le.length=Re.length,Pe=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(le)}function Le(H){return v!==H?(n.useProgram(H),v=H,!0):!1}const L={[fr]:n.FUNC_ADD,[Xx]:n.FUNC_SUBTRACT,[Yx]:n.FUNC_REVERSE_SUBTRACT};L[qx]=n.MIN,L[jx]=n.MAX;const N={[Kx]:n.ZERO,[Zx]:n.ONE,[$x]:n.SRC_COLOR,[rc]:n.SRC_ALPHA,[i_]:n.SRC_ALPHA_SATURATE,[t_]:n.DST_COLOR,[Qx]:n.DST_ALPHA,[Jx]:n.ONE_MINUS_SRC_COLOR,[sc]:n.ONE_MINUS_SRC_ALPHA,[n_]:n.ONE_MINUS_DST_COLOR,[e_]:n.ONE_MINUS_DST_ALPHA,[r_]:n.CONSTANT_COLOR,[s_]:n.ONE_MINUS_CONSTANT_COLOR,[a_]:n.CONSTANT_ALPHA,[o_]:n.ONE_MINUS_CONSTANT_ALPHA};function W(H,Fe,le,Pe,Re,ve,je,nt,Et,pt){if(H===Nn){S===!0&&(ue(n.BLEND),S=!1);return}if(S===!1&&(V(n.BLEND),S=!0),H!==Wx){if(H!==x||pt!==R){if((p!==fr||A!==fr)&&(n.blendEquation(n.FUNC_ADD),p=fr,A=fr),pt)switch(H){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.ONE,n.ONE);break;case Rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",H);break}else switch(H){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rf:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pf:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",H);break}M=null,b=null,B=null,D=null,z.set(0,0,0),j=0,x=H,R=pt}return}Re=Re||Fe,ve=ve||le,je=je||Pe,(Fe!==p||Re!==A)&&(n.blendEquationSeparate(L[Fe],L[Re]),p=Fe,A=Re),(le!==M||Pe!==b||ve!==B||je!==D)&&(n.blendFuncSeparate(N[le],N[Pe],N[ve],N[je]),M=le,b=Pe,B=ve,D=je),(nt.equals(z)===!1||Et!==j)&&(n.blendColor(nt.r,nt.g,nt.b,Et),z.copy(nt),j=Et),x=H,R=!1}function w(H,Fe){H.side===wn?ue(n.CULL_FACE):V(n.CULL_FACE);let le=H.side===xn;Fe&&(le=!le),oe(le),H.blending===Qr&&H.transparent===!1?W(Nn):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const Pe=H.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ce(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(H){y!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),y=H)}function re(H){H!==Vx?(V(n.CULL_FACE),H!==U&&(H===Cf?n.cullFace(n.BACK):H===Hx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),U=H}function Te(H){H!==G&&($&&n.lineWidth(H),G=H)}function ce(H,Fe,le){H?(V(n.POLYGON_OFFSET_FILL),(ee!==Fe||de!==le)&&(n.polygonOffset(Fe,le),ee=Fe,de=le)):ue(n.POLYGON_OFFSET_FILL)}function _e(H){H?V(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function se(H){H===void 0&&(H=n.TEXTURE0+Q-1),be!==H&&(n.activeTexture(H),be=H)}function Ae(H,Fe,le){le===void 0&&(be===null?le=n.TEXTURE0+Q-1:le=be);let Pe=Ee[le];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ee[le]=Pe),(Pe.type!==H||Pe.texture!==Fe)&&(be!==le&&(n.activeTexture(le),be=le),n.bindTexture(H,Fe||ne[H]),Pe.type=H,Pe.texture=Fe)}function T(){const H=Ee[be];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Y(){try{n.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ie(){try{n.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function xe(){try{n.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ke(){try{n.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ne(){try{n.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Me(){try{n.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function we(H){Qe.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Qe.copy(H))}function Ue(H){st.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),st.copy(H))}function Ge(H,Fe){let le=c.get(Fe);le===void 0&&(le=new WeakMap,c.set(Fe,le));let Pe=le.get(H);Pe===void 0&&(Pe=n.getUniformBlockIndex(Fe,H.name),le.set(H,Pe))}function Ie(H,Fe){const Pe=c.get(Fe).get(H);l.get(Fe)!==Pe&&(n.uniformBlockBinding(Fe,Pe,H.__bindingPointIndex),l.set(Fe,Pe))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},be=null,Ee={},f={},h=new WeakMap,d=[],v=null,S=!1,x=null,p=null,M=null,b=null,A=null,B=null,D=null,z=new Je(0,0,0),j=0,R=!1,y=null,U=null,G=null,ee=null,de=null,Qe.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:V,disable:ue,bindFramebuffer:pe,drawBuffers:ge,useProgram:Le,setBlending:W,setMaterial:w,setFlipSided:oe,setCullFace:re,setLineWidth:Te,setPolygonOffset:ce,setScissorTest:_e,activeTexture:se,bindTexture:Ae,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ne,texImage3D:Me,updateUBOMapping:Ge,uniformBlockBinding:Ie,texStorage2D:xe,texStorage3D:ke,texSubImage2D:Y,texSubImage3D:ie,compressedTexSubImage2D:K,compressedTexSubImage3D:De,scissor:we,viewport:Ue,reset:qe}}function iE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,g){return d?new OffscreenCanvas(T,g):ra("canvas")}function S(T,g,I){let Y=1;const ie=Ae(T);if((ie.width>I||ie.height>I)&&(Y=I/Math.max(ie.width,ie.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*ie.width),De=Math.floor(Y*ie.height);f===void 0&&(f=v(K,De));const xe=g?v(K,De):f;return xe.width=K,xe.height=De,xe.getContext("2d").drawImage(T,0,0,K,De),it("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+K+"x"+De+")."),xe}else return"data"in T&&it("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function x(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,g,I,Y,ie=!1){if(T!==null){if(n[T]!==void 0)return n[T];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=g;if(g===n.RED&&(I===n.FLOAT&&(K=n.R32F),I===n.HALF_FLOAT&&(K=n.R16F),I===n.UNSIGNED_BYTE&&(K=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(K=n.R8UI),I===n.UNSIGNED_SHORT&&(K=n.R16UI),I===n.UNSIGNED_INT&&(K=n.R32UI),I===n.BYTE&&(K=n.R8I),I===n.SHORT&&(K=n.R16I),I===n.INT&&(K=n.R32I)),g===n.RG&&(I===n.FLOAT&&(K=n.RG32F),I===n.HALF_FLOAT&&(K=n.RG16F),I===n.UNSIGNED_BYTE&&(K=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(K=n.RG8UI),I===n.UNSIGNED_SHORT&&(K=n.RG16UI),I===n.UNSIGNED_INT&&(K=n.RG32UI),I===n.BYTE&&(K=n.RG8I),I===n.SHORT&&(K=n.RG16I),I===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(K=n.RGB8UI),I===n.UNSIGNED_SHORT&&(K=n.RGB16UI),I===n.UNSIGNED_INT&&(K=n.RGB32UI),I===n.BYTE&&(K=n.RGB8I),I===n.SHORT&&(K=n.RGB16I),I===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),I===n.UNSIGNED_INT&&(K=n.RGBA32UI),I===n.BYTE&&(K=n.RGBA8I),I===n.SHORT&&(K=n.RGBA16I),I===n.INT&&(K=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),g===n.RGBA){const De=ie?vo:dt.getTransfer(Y);I===n.FLOAT&&(K=n.RGBA32F),I===n.HALF_FLOAT&&(K=n.RGBA16F),I===n.UNSIGNED_BYTE&&(K=De===_t?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(T,g){let I;return T?g===null||g===xr||g===ta?I=n.DEPTH24_STENCIL8:g===In?I=n.DEPTH32F_STENCIL8:g===ea&&(I=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xr||g===ta?I=n.DEPTH_COMPONENT24:g===In?I=n.DEPTH_COMPONENT32F:g===ea&&(I=n.DEPTH_COMPONENT16),I}function B(T,g){return x(T)===!0||T.isFramebufferTexture&&T.minFilter!==Cn&&T.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function D(T){const g=T.target;g.removeEventListener("dispose",D),j(g),g.isVideoTexture&&u.delete(g)}function z(T){const g=T.target;g.removeEventListener("dispose",z),y(g)}function j(T){const g=i.get(T);if(g.__webglInit===void 0)return;const I=T.source,Y=h.get(I);if(Y){const ie=Y[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(T),Object.keys(Y).length===0&&h.delete(I)}i.remove(T)}function R(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const I=T.source,Y=h.get(I);delete Y[g.__cacheKey],a.memory.textures--}function y(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let ie=0;ie<g.__webglFramebuffer[Y].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[Y][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[Y]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let Y=0,ie=I.length;Y<ie;Y++){const K=i.get(I[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(I[Y])}i.remove(T)}let U=0;function G(){U=0}function ee(){const T=U;return T>=r.maxTextures&&it("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),U+=1,T}function de(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function Q(T,g){const I=i.get(T);if(T.isVideoTexture&&_e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const Y=T.image;if(Y===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,T,g);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function $(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){ne(I,T,g);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function ae(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){ne(I,T,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function J(T,g){const I=i.get(T);if(T.version>0&&I.__version!==T.version){V(I,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const be={[Qs]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},Ee={[Cn]:n.NEAREST,[u_]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Ve={[d_]:n.NEVER,[v_]:n.ALWAYS,[p_]:n.LESS,[Cp]:n.LEQUAL,[m_]:n.EQUAL,[__]:n.GEQUAL,[g_]:n.GREATER,[x_]:n.NOTEQUAL};function We(T,g){if(g.type===In&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===sl||g.magFilter===Sa||g.magFilter===Yi||g.minFilter===Gt||g.minFilter===sl||g.minFilter===Sa||g.minFilter===Yi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,be[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,be[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,be[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Ee[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ve[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Cn||g.minFilter!==Sa&&g.minFilter!==Yi||g.type===In&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Qe(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",D));const Y=g.source;let ie=h.get(Y);ie===void 0&&(ie={},h.set(Y,ie));const K=de(g);if(K!==T.__cacheKey){ie[K]===void 0&&(ie[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ie[K].usedTimes++;const De=ie[T.__cacheKey];De!==void 0&&(ie[T.__cacheKey].usedTimes--,De.usedTimes===0&&R(g)),T.__cacheKey=K,T.__webglTexture=ie[K].texture}return I}function st(T,g,I){return Math.floor(Math.floor(T/I)/g)}function tt(T,g,I,Y){const K=T.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,Y,g.data);else{K.sort((Me,we)=>Me.start-we.start);let De=0;for(let Me=1;Me<K.length;Me++){const we=K[De],Ue=K[Me],Ge=we.start+we.count,Ie=st(Ue.start,g.width,4),qe=st(we.start,g.width,4);Ue.start<=Ge+1&&Ie===qe&&st(Ue.start+Ue.count-1,g.width,4)===Ie?we.count=Math.max(we.count,Ue.start+Ue.count-we.start):(++De,K[De]=Ue)}K.length=De+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),ke=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Me=0,we=K.length;Me<we;Me++){const Ue=K[Me],Ge=Math.floor(Ue.start/4),Ie=Math.ceil(Ue.count/4),qe=Ge%g.width,H=Math.floor(Ge/g.width),Fe=Ie,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,qe,H,Fe,le,I,Y,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function ne(T,g,I){let Y=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=n.TEXTURE_3D);const ie=Qe(T,g),K=g.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+I);const De=i.get(K);if(K.version!==De.__version||ie===!0){t.activeTexture(n.TEXTURE0+I);const xe=dt.getPrimaries(dt.workingColorSpace),ke=g.colorSpace===Xi?null:dt.getPrimaries(g.colorSpace),Ne=g.colorSpace===Xi||xe===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Me=S(g.image,!1,r.maxTextureSize);Me=se(g,Me);const we=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type);let Ge=b(g.internalFormat,we,Ue,g.colorSpace,g.isVideoTexture);We(Y,g);let Ie;const qe=g.mipmaps,H=g.isVideoTexture!==!0,Fe=De.__version===void 0||ie===!0,le=K.dataReady,Pe=B(g,Me);if(g.isDepthTexture)Ge=A(g.format===ia,g.type),Fe&&(H?t.texStorage2D(n.TEXTURE_2D,1,Ge,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Ge,Me.width,Me.height,0,we,Ue,null));else if(g.isDataTexture)if(qe.length>0){H&&Fe&&t.texStorage2D(n.TEXTURE_2D,Pe,Ge,qe[0].width,qe[0].height);for(let Re=0,ve=qe.length;Re<ve;Re++)Ie=qe[Re],H?le&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,we,Ue,Ie.data):t.texImage2D(n.TEXTURE_2D,Re,Ge,Ie.width,Ie.height,0,we,Ue,Ie.data);g.generateMipmaps=!1}else H?(Fe&&t.texStorage2D(n.TEXTURE_2D,Pe,Ge,Me.width,Me.height),le&&tt(g,Me,we,Ue)):t.texImage2D(n.TEXTURE_2D,0,Ge,Me.width,Me.height,0,we,Ue,Me.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){H&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ge,qe[0].width,qe[0].height,Me.depth);for(let Re=0,ve=qe.length;Re<ve;Re++)if(Ie=qe[Re],g.format!==Xt)if(we!==null)if(H){if(le)if(g.layerUpdates.size>0){const je=ch(Ie.width,Ie.height,g.format,g.type);for(const nt of g.layerUpdates){const Et=Ie.data.subarray(nt*je/Ie.data.BYTES_PER_ELEMENT,(nt+1)*je/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,nt,Ie.width,Ie.height,1,we,Et)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Me.depth,we,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Re,Ge,Ie.width,Ie.height,Me.depth,0,Ie.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Me.depth,we,Ue,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Re,Ge,Ie.width,Ie.height,Me.depth,0,we,Ue,Ie.data)}else{H&&Fe&&t.texStorage2D(n.TEXTURE_2D,Pe,Ge,qe[0].width,qe[0].height);for(let Re=0,ve=qe.length;Re<ve;Re++)Ie=qe[Re],g.format!==Xt?we!==null?H?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Re,Ge,Ie.width,Ie.height,0,Ie.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?le&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,we,Ue,Ie.data):t.texImage2D(n.TEXTURE_2D,Re,Ge,Ie.width,Ie.height,0,we,Ue,Ie.data)}else if(g.isDataArrayTexture)if(H){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ge,Me.width,Me.height,Me.depth),le)if(g.layerUpdates.size>0){const Re=ch(Me.width,Me.height,g.format,g.type);for(const ve of g.layerUpdates){const je=Me.data.subarray(ve*Re/Me.data.BYTES_PER_ELEMENT,(ve+1)*Re/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,we,Ue,je)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,we,Ue,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,we,Ue,Me.data);else if(g.isData3DTexture)H?(Fe&&t.texStorage3D(n.TEXTURE_3D,Pe,Ge,Me.width,Me.height,Me.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,we,Ue,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,we,Ue,Me.data);else if(g.isFramebufferTexture){if(Fe)if(H)t.texStorage2D(n.TEXTURE_2D,Pe,Ge,Me.width,Me.height);else{let Re=Me.width,ve=Me.height;for(let je=0;je<Pe;je++)t.texImage2D(n.TEXTURE_2D,je,Ge,Re,ve,0,we,Ue,null),Re>>=1,ve>>=1}}else if(qe.length>0){if(H&&Fe){const Re=Ae(qe[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Ge,Re.width,Re.height)}for(let Re=0,ve=qe.length;Re<ve;Re++)Ie=qe[Re],H?le&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,we,Ue,Ie):t.texImage2D(n.TEXTURE_2D,Re,Ge,we,Ue,Ie);g.generateMipmaps=!1}else if(H){if(Fe){const Re=Ae(Me);t.texStorage2D(n.TEXTURE_2D,Pe,Ge,Re.width,Re.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ue,Me)}else t.texImage2D(n.TEXTURE_2D,0,Ge,we,Ue,Me);x(g)&&p(Y),De.__version=K.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function V(T,g,I){if(g.image.length!==6)return;const Y=Qe(T,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+I);const K=i.get(ie);if(ie.version!==K.__version||Y===!0){t.activeTexture(n.TEXTURE0+I);const De=dt.getPrimaries(dt.workingColorSpace),xe=g.colorSpace===Xi?null:dt.getPrimaries(g.colorSpace),ke=g.colorSpace===Xi||De===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ne=g.isCompressedTexture||g.image[0].isCompressedTexture,Me=g.image[0]&&g.image[0].isDataTexture,we=[];for(let ve=0;ve<6;ve++)!Ne&&!Me?we[ve]=S(g.image[ve],!0,r.maxCubemapSize):we[ve]=Me?g.image[ve].image:g.image[ve],we[ve]=se(g,we[ve]);const Ue=we[0],Ge=s.convert(g.format,g.colorSpace),Ie=s.convert(g.type),qe=b(g.internalFormat,Ge,Ie,g.colorSpace),H=g.isVideoTexture!==!0,Fe=K.__version===void 0||Y===!0,le=ie.dataReady;let Pe=B(g,Ue);We(n.TEXTURE_CUBE_MAP,g);let Re;if(Ne){H&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,qe,Ue.width,Ue.height);for(let ve=0;ve<6;ve++){Re=we[ve].mipmaps;for(let je=0;je<Re.length;je++){const nt=Re[je];g.format!==Xt?Ge!==null?H?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,nt.width,nt.height,Ge,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,qe,nt.width,nt.height,0,nt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,nt.width,nt.height,Ge,Ie,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,qe,nt.width,nt.height,0,Ge,Ie,nt.data)}}}else{if(Re=g.mipmaps,H&&Fe){Re.length>0&&Pe++;const ve=Ae(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,qe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Me){H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,we[ve].width,we[ve].height,Ge,Ie,we[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,qe,we[ve].width,we[ve].height,0,Ge,Ie,we[ve].data);for(let je=0;je<Re.length;je++){const Et=Re[je].image[ve].image;H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,Et.width,Et.height,Ge,Ie,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,qe,Et.width,Et.height,0,Ge,Ie,Et.data)}}else{H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ge,Ie,we[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,qe,Ge,Ie,we[ve]);for(let je=0;je<Re.length;je++){const nt=Re[je];H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,Ge,Ie,nt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,qe,Ge,Ie,nt.image[ve])}}}x(g)&&p(n.TEXTURE_CUBE_MAP),K.__version=ie.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ue(T,g,I,Y,ie,K){const De=s.convert(I.format,I.colorSpace),xe=s.convert(I.type),ke=b(I.internalFormat,De,xe,I.colorSpace),Ne=i.get(g),Me=i.get(I);if(Me.__renderTarget=g,!Ne.__hasExternalTextures){const we=Math.max(1,g.width>>K),Ue=Math.max(1,g.height>>K);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,K,ke,we,Ue,g.depth,0,De,xe,null):t.texImage2D(ie,K,ke,we,Ue,0,De,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ce(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ie,Me.__webglTexture,0,Te(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ie,Me.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(T,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const Y=g.depthTexture,ie=Y&&Y.isDepthTexture?Y.type:null,K=A(g.stencilBuffer,ie),De=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=Te(g);ce(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,K,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,T)}else{const Y=g.textures;for(let ie=0;ie<Y.length;ie++){const K=Y[ie],De=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),ke=b(K.internalFormat,De,xe,K.colorSpace),Ne=Te(g);I&&ce(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ke,g.width,g.height):ce(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,ke,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ke,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const ie=Y.__webglTexture,K=Te(g);if(g.depthTexture.format===na)ce(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(g.depthTexture.format===ia)ce(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Le(T){const g=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",ie)};Y.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=Y}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?ge(g.__webglFramebuffer[0],T):ge(g.__webglFramebuffer,T)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=n.createRenderbuffer(),pe(g.__webglDepthbuffer[Y],T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,K)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),pe(g.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(T,g,I){const Y=i.get(T);g!==void 0&&ue(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Le(T)}function N(T){const g=T.texture,I=i.get(T),Y=i.get(g);T.addEventListener("dispose",z);const ie=T.textures,K=T.isWebGLCubeRenderTarget===!0,De=ie.length>1;if(De||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=g.version,a.memory.textures++),K){I.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[xe]=[];for(let ke=0;ke<g.mipmaps.length;ke++)I.__webglFramebuffer[xe][ke]=n.createFramebuffer()}else I.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let xe=0;xe<g.mipmaps.length;xe++)I.__webglFramebuffer[xe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(De)for(let xe=0,ke=ie.length;xe<ke;xe++){const Ne=i.get(ie[xe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ce(T)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){const ke=ie[xe];I.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[xe]);const Ne=s.convert(ke.format,ke.colorSpace),Me=s.convert(ke.type),we=b(ke.internalFormat,Ne,Me,ke.colorSpace,T.isXRRenderTarget===!0),Ue=Te(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,we,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,I.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),We(n.TEXTURE_CUBE_MAP,g);for(let xe=0;xe<6;xe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ke=0;ke<g.mipmaps.length;ke++)ue(I.__webglFramebuffer[xe][ke],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke);else ue(I.__webglFramebuffer[xe],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);x(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,ke=ie.length;xe<ke;xe++){const Ne=ie[xe],Me=i.get(Ne);let we=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(we=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,Me.__webglTexture),We(we,Ne),ue(I.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+xe,we,0),x(Ne)&&p(we)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Y.__webglTexture),We(xe,g),g.mipmaps&&g.mipmaps.length>0)for(let ke=0;ke<g.mipmaps.length;ke++)ue(I.__webglFramebuffer[ke],T,g,n.COLOR_ATTACHMENT0,xe,ke);else ue(I.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,xe,0);x(g)&&p(xe),t.unbindTexture()}T.depthBuffer&&Le(T)}function W(T){const g=T.textures;for(let I=0,Y=g.length;I<Y;I++){const ie=g[I];if(x(ie)){const K=M(T),De=i.get(ie).__webglTexture;t.bindTexture(K,De),p(K),t.unbindTexture()}}}const w=[],oe=[];function re(T){if(T.samples>0){if(ce(T)===!1){const g=T.textures,I=T.width,Y=T.height;let ie=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(T),xe=g.length>1;if(xe)for(let Ne=0;Ne<g.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const ke=T.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ne=0;Ne<g.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const Me=i.get(g[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,I,Y,0,0,I,Y,ie,n.NEAREST),l===!0&&(w.length=0,oe.length=0,w.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push(K),oe.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Ne=0;Ne<g.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const Me=i.get(g[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Te(T){return Math.min(r.maxSamples,T.samples)}function ce(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function _e(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function se(T,g){const I=T.colorSpace,Y=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==En&&I!==Xi&&(dt.getTransfer(I)===_t?(Y!==Xt||ie!==oi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",I)),g}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=J,this.rebindTextures=L,this.setupRenderTarget=N,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ce}function rE(n,e){function t(i,r=Xi){let s;const a=dt.getTransfer(r);if(i===oi)return n.UNSIGNED_BYTE;if(i===Mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sp)return n.BYTE;if(i===bp)return n.SHORT;if(i===ea)return n.UNSIGNED_SHORT;if(i===yu)return n.INT;if(i===xr)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Wt)return n.HALF_FLOAT;if(i===Ep)return n.ALPHA;if(i===Tp)return n.RGB;if(i===Xt)return n.RGBA;if(i===na)return n.DEPTH_COMPONENT;if(i===ia)return n.DEPTH_STENCIL;if(i===Yr)return n.RED;if(i===Tu)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Au)return n.RGBA_INTEGER;if(i===no||i===io||i===ro||i===so)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===xc||i===_c||i===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===bc||i===yc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sc||i===bc)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Dc||i===Lc||i===Ic||i===Uc||i===Nc||i===Fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oc||i===Bc||i===kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oc)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zc||i===Vc||i===Hc||i===Gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sE=`
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

}`;class oE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Wp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yt({vertexShader:sE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lE extends Sr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const S=typeof XRWebGLBinding<"u",x=new oE,p={},M=t.getContextAttributes();let b=null,A=null;const B=[],D=[],z=new Ye;let j=null;const R=new gn;R.viewport=new yt;const y=new gn;y.viewport=new yt;const U=[R,y],G=new Ev;let ee=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let V=B[ne];return V===void 0&&(V=new Al,B[ne]=V),V.getTargetRaySpace()},this.getControllerGrip=function(ne){let V=B[ne];return V===void 0&&(V=new Al,B[ne]=V),V.getGripSpace()},this.getHand=function(ne){let V=B[ne];return V===void 0&&(V=new Al,B[ne]=V),V.getHandSpace()};function Q(ne){const V=D.indexOf(ne.inputSource);if(V===-1)return;const ue=B[V];ue!==void 0&&(ue.update(ne.inputSource,ne.frame,c||a),ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function $(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ae);for(let ne=0;ne<B.length;ne++){const V=D[ne];V!==null&&(D[ne]=null,B[ne].disconnect(V))}ee=null,de=null,x.reset();for(const ne in p)delete p[ne];e.setRenderTarget(b),d=null,h=null,f=null,r=null,A=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(j),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ae),M.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(z),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,pe=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?ia:na,pe=M.stencil?ta:xr);const Le={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new an(h.textureWidth,h.textureHeight,{format:Xt,type:oi,depthTexture:new Gp(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new an(d.framebufferWidth,d.framebufferHeight,{format:Xt,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(ne){for(let V=0;V<ne.removed.length;V++){const ue=ne.removed[V],pe=D.indexOf(ue);pe>=0&&(D[pe]=null,B[pe].disconnect(ue))}for(let V=0;V<ne.added.length;V++){const ue=ne.added[V];let pe=D.indexOf(ue);if(pe===-1){for(let Le=0;Le<B.length;Le++)if(Le>=D.length){D.push(ue),pe=Le;break}else if(D[Le]===null){D[Le]=ue,pe=Le;break}if(pe===-1)break}const ge=B[pe];ge&&ge.connect(ue)}}const J=new Z,be=new Z;function Ee(ne,V,ue){J.setFromMatrixPosition(V.matrixWorld),be.setFromMatrixPosition(ue.matrixWorld);const pe=J.distanceTo(be),ge=V.projectionMatrix.elements,Le=ue.projectionMatrix.elements,L=ge[14]/(ge[10]-1),N=ge[14]/(ge[10]+1),W=(ge[9]+1)/ge[5],w=(ge[9]-1)/ge[5],oe=(ge[8]-1)/ge[0],re=(Le[8]+1)/Le[0],Te=L*oe,ce=L*re,_e=pe/(-oe+re),se=_e*-oe;if(V.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(_e),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ge[10]===-1)ne.projectionMatrix.copy(V.projectionMatrix),ne.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Ae=L+_e,T=N+_e,g=Te-se,I=ce+(pe-se),Y=W*N/T*Ae,ie=w*N/T*Ae;ne.projectionMatrix.makePerspective(g,I,Y,ie,Ae,T),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Ve(ne,V){V===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(V.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let V=ne.near,ue=ne.far;x.texture!==null&&(x.depthNear>0&&(V=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),G.near=y.near=R.near=V,G.far=y.far=R.far=ue,(ee!==G.near||de!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),ee=G.near,de=G.far),G.layers.mask=ne.layers.mask|6,R.layers.mask=G.layers.mask&3,y.layers.mask=G.layers.mask&5;const pe=ne.parent,ge=G.cameras;Ve(G,pe);for(let Le=0;Le<ge.length;Le++)Ve(ge[Le],pe);ge.length===2?Ee(G,R,y):G.projectionMatrix.copy(R.projectionMatrix),We(ne,G,pe)};function We(ne,V,ue){ue===null?ne.matrix.copy(V.matrixWorld):(ne.matrix.copy(ue.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(V.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(V.projectionMatrix),ne.projectionMatrixInverse.copy(V.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=yo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(G)},this.getCameraTexture=function(ne){return p[ne]};let Qe=null;function st(ne,V){if(u=V.getViewerPose(c||a),v=V,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let pe=!1;ue.length!==G.cameras.length&&(G.cameras.length=0,pe=!0);for(let N=0;N<ue.length;N++){const W=ue[N];let w=null;if(d!==null)w=d.getViewport(W);else{const re=f.getViewSubImage(h,W);w=re.viewport,N===0&&(e.setRenderTargetTextures(A,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(A))}let oe=U[N];oe===void 0&&(oe=new gn,oe.layers.enable(N),oe.viewport=new yt,U[N]=oe),oe.matrix.fromArray(W.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(W.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(w.x,w.y,w.width,w.height),N===0&&(G.matrix.copy(oe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),pe===!0&&G.cameras.push(oe)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const N=f.getDepthInformation(ue[0]);N&&N.isValid&&N.texture&&x.init(N,r.renderState)}if(ge&&ge.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<ue.length;N++){const W=ue[N].camera;if(W){let w=p[W];w||(w=new Wp,p[W]=w);const oe=f.getCameraImage(W);w.sourceTexture=oe}}}}for(let ue=0;ue<B.length;ue++){const pe=D[ue],ge=B[ue];pe!==null&&ge!==void 0&&ge.update(pe,V,c||a)}Qe&&Qe(ne,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const tt=new qp;tt.setAnimationLoop(st),this.setAnimationLoop=function(ne){Qe=ne},this.dispose=function(){}}}const cr=new li,cE=new Mt;function uE(n,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,Np(n)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,M,b,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(x,p):p.isMeshToonMaterial?(s(x,p),f(x,p)):p.isMeshPhongMaterial?(s(x,p),u(x,p)):p.isMeshStandardMaterial?(s(x,p),h(x,p),p.isMeshPhysicalMaterial&&d(x,p,A)):p.isMeshMatcapMaterial?(s(x,p),v(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),S(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,M,b):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===xn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===xn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,A=M.envMapRotation;b&&(x.envMap.value=b,cr.copy(A),cr.x*=-1,cr.y*=-1,cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),x.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(cr)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,M,b){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*M,x.scale.value=b*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,M){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,p){p.matcap&&(x.matcap.value=p.matcap)}function S(x,p){const M=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const A=b.program;i.uniformBlockBinding(M,A)}function c(M,b){let A=r[M.id];A===void 0&&(v(M),A=u(M),r[M.id]=A,M.addEventListener("dispose",x));const B=b.program;i.updateUBOMapping(M,B);const D=e.render.frame;s[M.id]!==D&&(h(M),s[M.id]=D)}function u(M){const b=f();M.__bindingPointIndex=b;const A=n.createBuffer(),B=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,B,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,A),A}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=r[M.id],A=M.uniforms,B=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,z=A.length;D<z;D++){const j=Array.isArray(A[D])?A[D]:[A[D]];for(let R=0,y=j.length;R<y;R++){const U=j[R];if(d(U,D,R,B)===!0){const G=U.__offset,ee=Array.isArray(U.value)?U.value:[U.value];let de=0;for(let Q=0;Q<ee.length;Q++){const $=ee[Q],ae=S($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,G+de,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,de),de+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,A,B){const D=M.value,z=b+"_"+A;if(B[z]===void 0)return typeof D=="number"||typeof D=="boolean"?B[z]=D:B[z]=D.clone(),!0;{const j=B[z];if(typeof D=="number"||typeof D=="boolean"){if(j!==D)return B[z]=D,!0}else if(j.equals(D)===!1)return j.copy(D),!0}return!1}function v(M){const b=M.uniforms;let A=0;const B=16;for(let z=0,j=b.length;z<j;z++){const R=Array.isArray(b[z])?b[z]:[b[z]];for(let y=0,U=R.length;y<U;y++){const G=R[y],ee=Array.isArray(G.value)?G.value:[G.value];for(let de=0,Q=ee.length;de<Q;de++){const $=ee[de],ae=S($),J=A%B,be=J%ae.boundary,Ee=J+be;A+=be,Ee!==0&&B-Ee<ae.storage&&(A+=B-Ee),G.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=ae.storage}}}const D=A%B;return D>0&&(A+=B-D),M.__size=A,M.__cache={},this}function S(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",M),b}function x(M){const b=M.target;b.removeEventListener("dispose",x);const A=a.indexOf(b.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const hE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let bi=null;function dE(){return bi===null&&(bi=new Vp(hE,32,32,Wi,Wt),bi.minFilter=Gt,bi.magFilter=Gt,bi.wrapS=un,bi.wrapT=un,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class pE{constructor(e={}){const{canvas:t=b_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const v=new Set([Au,wu,Tu]),S=new Set([oi,xr,ea,ta,Mu,Eu]),x=new Uint32Array(4),p=new Int32Array(4);let M=null,b=null;const A=[],B=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let z=!1;this._outputColorSpace=Mn;let j=0,R=0,y=null,U=-1,G=null;const ee=new yt,de=new yt;let Q=null;const $=new Je(0);let ae=0,J=t.width,be=t.height,Ee=1,Ve=null,We=null;const Qe=new yt(0,0,J,be),st=new yt(0,0,J,be);let tt=!1;const ne=new Pu;let V=!1,ue=!1;const pe=new Mt,ge=new Z,Le=new yt,L={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function W(){return y===null?Ee:1}let w=i;function oe(_,P){return t.getContext(_,P)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",je,!1),w===null){const P="webgl2";if(w=oe(P,_),w===null)throw oe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw _("WebGLRenderer: "+_.message),_}let re,Te,ce,_e,se,Ae,T,g,I,Y,ie,K,De,xe,ke,Ne,Me,we,Ue,Ge,Ie,qe,H,Fe;function le(){re=new yy(w),re.init(),qe=new rE(w,re),Te=new dy(w,re,e,qe),ce=new nE(w,re),Te.reversedDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),_e=new Ty(w),se=new GM,Ae=new iE(w,re,ce,se,Te,qe,_e),T=new my(D),g=new by(D),I=new Rv(w),H=new fy(w,I),Y=new My(w,I,_e,H),ie=new Ay(w,Y,I,_e),Ue=new wy(w,Te,Ae),Ne=new py(se),K=new HM(D,T,g,re,Te,H,Ne),De=new uE(D,se),xe=new XM,ke=new $M(re),we=new uy(D,T,g,ce,ie,d,l),Me=new eE(D,ie,Te),Fe=new fE(w,_e,Te,ce),Ge=new hy(w,re,_e),Ie=new Ey(w,re,_e),_e.programs=K.programs,D.capabilities=Te,D.extensions=re,D.properties=se,D.renderLists=xe,D.shadowMap=Me,D.state=ce,D.info=_e}le();const Pe=new lE(D,w);this.xr=Pe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const _=re.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=re.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(_){_!==void 0&&(Ee=_,this.setSize(J,be,!1))},this.getSize=function(_){return _.set(J,be)},this.setSize=function(_,P,k=!0){if(Pe.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}J=_,be=P,t.width=Math.floor(_*Ee),t.height=Math.floor(P*Ee),k===!0&&(t.style.width=_+"px",t.style.height=P+"px"),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(J*Ee,be*Ee).floor()},this.setDrawingBufferSize=function(_,P,k){J=_,be=P,Ee=k,t.width=Math.floor(_*k),t.height=Math.floor(P*k),this.setViewport(0,0,_,P)},this.getCurrentViewport=function(_){return _.copy(ee)},this.getViewport=function(_){return _.copy(Qe)},this.setViewport=function(_,P,k,C){_.isVector4?Qe.set(_.x,_.y,_.z,_.w):Qe.set(_,P,k,C),ce.viewport(ee.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(_){return _.copy(st)},this.setScissor=function(_,P,k,C){_.isVector4?st.set(_.x,_.y,_.z,_.w):st.set(_,P,k,C),ce.scissor(de.copy(st).multiplyScalar(Ee).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(_){ce.setScissorTest(tt=_)},this.setOpaqueSort=function(_){Ve=_},this.setTransparentSort=function(_){We=_},this.getClearColor=function(_){return _.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,k=!0){let C=0;if(_){let F=!1;if(y!==null){const X=y.texture.format;F=v.has(X)}if(F){const X=y.texture.type,q=S.has(X),te=we.getClearColor(),fe=we.getClearAlpha(),he=te.r,me=te.g,Se=te.b;q?(x[0]=he,x[1]=me,x[2]=Se,x[3]=fe,w.clearBufferuiv(w.COLOR,0,x)):(p[0]=he,p[1]=me,p[2]=Se,p[3]=fe,w.clearBufferiv(w.COLOR,0,p))}else C|=w.COLOR_BUFFER_BIT}P&&(C|=w.DEPTH_BUFFER_BIT),k&&(C|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",je,!1),we.dispose(),xe.dispose(),ke.dispose(),se.dispose(),T.dispose(),g.dispose(),ie.dispose(),H.dispose(),Fe.dispose(),K.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",da),Pe.removeEventListener("sessionend",pa),ui.stop()};function Re(_){_.preventDefault(),bo("WebGLRenderer: Context Lost."),z=!0}function ve(){bo("WebGLRenderer: Context Restored."),z=!1;const _=_e.autoReset,P=Me.enabled,k=Me.autoUpdate,C=Me.needsUpdate,F=Me.type;le(),_e.autoReset=_,Me.enabled=P,Me.autoUpdate=k,Me.needsUpdate=C,Me.type=F}function je(_){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function nt(_){const P=_.target;P.removeEventListener("dispose",nt),Et(P)}function Et(_){pt(_),se.remove(_)}function pt(_){const P=se.get(_).programs;P!==void 0&&(P.forEach(function(k){K.releaseProgram(k)}),_.isShaderMaterial&&K.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,k,C,F,X){P===null&&(P=L);const q=F.isMesh&&F.matrixWorld.determinant()<0,te=Ho(_,P,k,C,F);ce.setMaterial(C,q);let fe=k.index,he=1;if(C.wireframe===!0){if(fe=Y.getWireframeAttribute(k),fe===void 0)return;he=2}const me=k.drawRange,Se=k.attributes.position;let ye=me.start*he,Ce=(me.start+me.count)*he;X!==null&&(ye=Math.max(ye,X.start*he),Ce=Math.min(Ce,(X.start+X.count)*he)),fe!==null?(ye=Math.max(ye,0),Ce=Math.min(Ce,fe.count)):Se!=null&&(ye=Math.max(ye,0),Ce=Math.min(Ce,Se.count));const ze=Ce-ye;if(ze<0||ze===1/0)return;H.setup(F,C,te,k,fe);let Ke,Ze=Ge;if(fe!==null&&(Ke=I.get(fe),Ze=Ie,Ze.setIndex(Ke)),F.isMesh)C.wireframe===!0?(ce.setLineWidth(C.wireframeLinewidth*W()),Ze.setMode(w.LINES)):Ze.setMode(w.TRIANGLES);else if(F.isLine){let He=C.linewidth;He===void 0&&(He=1),ce.setLineWidth(He*W()),F.isLineSegments?Ze.setMode(w.LINES):F.isLineLoop?Ze.setMode(w.LINE_LOOP):Ze.setMode(w.LINE_STRIP)}else F.isPoints?Ze.setMode(w.POINTS):F.isSprite&&Ze.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)sa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const He=F._multiDrawStarts,$e=F._multiDrawCounts,Oe=F._multiDrawCount,ht=fe?I.get(fe).bytesPerElement:1,Ct=se.get(C).currentProgram.getUniforms();for(let ut=0;ut<Oe;ut++)Ct.setValue(w,"_gl_DrawID",ut),Ze.render(He[ut]/ht,$e[ut])}else if(F.isInstancedMesh)Ze.renderInstances(ye,ze,F.count);else if(k.isInstancedBufferGeometry){const He=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,$e=Math.min(k.instanceCount,He);Ze.renderInstances(ye,ze,$e)}else Ze.render(ye,ze)};function Rn(_,P,k){_.transparent===!0&&_.side===wn&&_.forceSinglePass===!1?(_.side=xn,_.needsUpdate=!0,yr(_,P,k),_.side=Ji,_.needsUpdate=!0,yr(_,P,k),_.side=wn):yr(_,P,k)}this.compile=function(_,P,k=null){k===null&&(k=_),b=ke.get(k),b.init(P),B.push(b),k.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(b.pushLight(F),F.castShadow&&b.pushShadow(F))}),_!==k&&_.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(b.pushLight(F),F.castShadow&&b.pushShadow(F))}),b.setupLights();const C=new Set;return _.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const X=F.material;if(X)if(Array.isArray(X))for(let q=0;q<X.length;q++){const te=X[q];Rn(te,k,F),C.add(te)}else Rn(X,k,F),C.add(X)}),b=B.pop(),C},this.compileAsync=function(_,P,k=null){const C=this.compile(_,P,k);return new Promise(F=>{function X(){if(C.forEach(function(q){se.get(q).currentProgram.isReady()&&C.delete(q)}),C.size===0){F(_);return}setTimeout(X,10)}re.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let vn=null;function Vo(_){vn&&vn(_)}function da(){ui.stop()}function pa(){ui.start()}const ui=new qp;ui.setAnimationLoop(Vo),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(_){vn=_,Pe.setAnimationLoop(_),_===null?ui.stop():ui.start()},Pe.addEventListener("sessionstart",da),Pe.addEventListener("sessionend",pa),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(P),P=Pe.getCamera()),_.isScene===!0&&_.onBeforeRender(D,_,P,y),b=ke.get(_,B.length),b.init(P),B.push(b),pe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ne.setFromProjectionMatrix(pe,ei,P.reversedDepth),ue=this.localClippingEnabled,V=Ne.init(this.clippingPlanes,ue),M=xe.get(_,A.length),M.init(),A.push(M),Pe.enabled===!0&&Pe.isPresenting===!0){const X=D.xr.getDepthSensingMesh();X!==null&&ps(X,P,-1/0,D.sortObjects)}ps(_,P,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Ve,We),N=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,N&&we.addToRenderList(M,_),this.info.render.frame++,V===!0&&Ne.beginShadows();const k=b.state.shadowsArray;Me.render(k,_,P),V===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const C=M.opaque,F=M.transmissive;if(b.setupLights(),P.isArrayCamera){const X=P.cameras;if(F.length>0)for(let q=0,te=X.length;q<te;q++){const fe=X[q];ma(C,F,_,fe)}N&&we.render(_);for(let q=0,te=X.length;q<te;q++){const fe=X[q];ms(M,_,fe,fe.viewport)}}else F.length>0&&ma(C,F,_,P),N&&we.render(_),ms(M,_,P);y!==null&&R===0&&(Ae.updateMultisampleRenderTarget(y),Ae.updateRenderTargetMipmap(y)),_.isScene===!0&&_.onAfterRender(D,_,P),H.resetDefaultState(),U=-1,G=null,B.pop(),B.length>0?(b=B[B.length-1],V===!0&&Ne.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function ps(_,P,k,C){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)b.pushLight(_),_.castShadow&&b.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||ne.intersectsSprite(_)){C&&Le.setFromMatrixPosition(_.matrixWorld).applyMatrix4(pe);const q=ie.update(_),te=_.material;te.visible&&M.push(_,q,te,k,Le.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||ne.intersectsObject(_))){const q=ie.update(_),te=_.material;if(C&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Le.copy(_.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),Le.copy(q.boundingSphere.center)),Le.applyMatrix4(_.matrixWorld).applyMatrix4(pe)),Array.isArray(te)){const fe=q.groups;for(let he=0,me=fe.length;he<me;he++){const Se=fe[he],ye=te[Se.materialIndex];ye&&ye.visible&&M.push(_,q,ye,k,Le.z,Se)}}else te.visible&&M.push(_,q,te,k,Le.z,null)}}const X=_.children;for(let q=0,te=X.length;q<te;q++)ps(X[q],P,k,C)}function ms(_,P,k,C){const{opaque:F,transmissive:X,transparent:q}=_;b.setupLightsView(k),V===!0&&Ne.setGlobalState(D.clippingPlanes,k),C&&ce.viewport(ee.copy(C)),F.length>0&&br(F,P,k),X.length>0&&br(X,P,k),q.length>0&&br(q,P,k),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ma(_,P,k,C){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[C.id]===void 0&&(b.state.transmissionRenderTarget[C.id]=new an(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Wt:oi,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const X=b.state.transmissionRenderTarget[C.id],q=C.viewport||ee;X.setSize(q.z*D.transmissionResolutionScale,q.w*D.transmissionResolutionScale);const te=D.getRenderTarget(),fe=D.getActiveCubeFace(),he=D.getActiveMipmapLevel();D.setRenderTarget(X),D.getClearColor($),ae=D.getClearAlpha(),ae<1&&D.setClearColor(16777215,.5),D.clear(),N&&we.render(k);const me=D.toneMapping;D.toneMapping=Ki;const Se=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),b.setupLightsView(C),V===!0&&Ne.setGlobalState(D.clippingPlanes,C),br(_,k,C),Ae.updateMultisampleRenderTarget(X),Ae.updateRenderTargetMipmap(X),re.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ce=0,ze=P.length;Ce<ze;Ce++){const Ke=P[Ce],{object:Ze,geometry:He,material:$e,group:Oe}=Ke;if($e.side===wn&&Ze.layers.test(C.layers)){const ht=$e.side;$e.side=xn,$e.needsUpdate=!0,ga(Ze,k,C,He,$e,Oe),$e.side=ht,$e.needsUpdate=!0,ye=!0}}ye===!0&&(Ae.updateMultisampleRenderTarget(X),Ae.updateRenderTargetMipmap(X))}D.setRenderTarget(te,fe,he),D.setClearColor($,ae),Se!==void 0&&(C.viewport=Se),D.toneMapping=me}function br(_,P,k){const C=P.isScene===!0?P.overrideMaterial:null;for(let F=0,X=_.length;F<X;F++){const q=_[F],{object:te,geometry:fe,group:he}=q;let me=q.material;me.allowOverride===!0&&C!==null&&(me=C),te.layers.test(k.layers)&&ga(te,P,k,fe,me,he)}}function ga(_,P,k,C,F,X){_.onBeforeRender(D,P,k,C,F,X),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),F.onBeforeRender(D,P,k,C,_,X),F.transparent===!0&&F.side===wn&&F.forceSinglePass===!1?(F.side=xn,F.needsUpdate=!0,D.renderBufferDirect(k,P,C,F,_,X),F.side=Ji,F.needsUpdate=!0,D.renderBufferDirect(k,P,C,F,_,X),F.side=wn):D.renderBufferDirect(k,P,C,F,_,X),_.onAfterRender(D,P,k,C,F,X)}function yr(_,P,k){P.isScene!==!0&&(P=L);const C=se.get(_),F=b.state.lights,X=b.state.shadowsArray,q=F.state.version,te=K.getParameters(_,F.state,X,P,k),fe=K.getProgramCacheKey(te);let he=C.programs;C.environment=_.isMeshStandardMaterial?P.environment:null,C.fog=P.fog,C.envMap=(_.isMeshStandardMaterial?g:T).get(_.envMap||C.environment),C.envMapRotation=C.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,he===void 0&&(_.addEventListener("dispose",nt),he=new Map,C.programs=he);let me=he.get(fe);if(me!==void 0){if(C.currentProgram===me&&C.lightsStateVersion===q)return xs(_,te),me}else te.uniforms=K.getUniforms(_),_.onBeforeCompile(te,D),me=K.acquireProgram(te,fe),he.set(fe,me),C.uniforms=te.uniforms;const Se=C.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Se.clippingPlanes=Ne.uniform),xs(_,te),C.needsLights=Xn(_),C.lightsStateVersion=q,C.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),C.currentProgram=me,C.uniformsList=null,me}function gs(_){if(_.uniformsList===null){const P=_.currentProgram.getUniforms();_.uniformsList=oo.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function xs(_,P){const k=se.get(_);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function Ho(_,P,k,C,F){P.isScene!==!0&&(P=L),Ae.resetTextureUnits();const X=P.fog,q=C.isMeshStandardMaterial?P.environment:null,te=y===null?D.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:En,fe=(C.isMeshStandardMaterial?g:T).get(C.envMap||q),he=C.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,me=!!k.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),Se=!!k.morphAttributes.position,ye=!!k.morphAttributes.normal,Ce=!!k.morphAttributes.color;let ze=Ki;C.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ze=D.toneMapping);const Ke=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ze=Ke!==void 0?Ke.length:0,He=se.get(C),$e=b.state.lights;if(V===!0&&(ue===!0||_!==G)){const wt=_===G&&C.id===U;Ne.setState(C,_,wt)}let Oe=!1;C.version===He.__version?(He.needsLights&&He.lightsStateVersion!==$e.state.version||He.outputColorSpace!==te||F.isBatchedMesh&&He.batching===!1||!F.isBatchedMesh&&He.batching===!0||F.isBatchedMesh&&He.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&He.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&He.instancing===!1||!F.isInstancedMesh&&He.instancing===!0||F.isSkinnedMesh&&He.skinning===!1||!F.isSkinnedMesh&&He.skinning===!0||F.isInstancedMesh&&He.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&He.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&He.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&He.instancingMorph===!1&&F.morphTexture!==null||He.envMap!==fe||C.fog===!0&&He.fog!==X||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ne.numPlanes||He.numIntersection!==Ne.numIntersection)||He.vertexAlphas!==he||He.vertexTangents!==me||He.morphTargets!==Se||He.morphNormals!==ye||He.morphColors!==Ce||He.toneMapping!==ze||He.morphTargetsCount!==Ze)&&(Oe=!0):(Oe=!0,He.__version=C.version);let ht=He.currentProgram;Oe===!0&&(ht=yr(C,P,F));let Ct=!1,ut=!1,lt=!1;const et=ht.getUniforms(),Pt=He.uniforms;if(ce.useProgram(ht.program)&&(Ct=!0,ut=!0,lt=!0),C.id!==U&&(U=C.id,ut=!0),Ct||G!==_){ce.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),et.setValue(w,"projectionMatrix",_.projectionMatrix),et.setValue(w,"viewMatrix",_.matrixWorldInverse);const Ft=et.map.cameraPosition;Ft!==void 0&&Ft.setValue(w,ge.setFromMatrixPosition(_.matrixWorld)),Te.logarithmicDepthBuffer&&et.setValue(w,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&et.setValue(w,"isOrthographic",_.isOrthographicCamera===!0),G!==_&&(G=_,ut=!0,lt=!0)}if(F.isSkinnedMesh){et.setOptional(w,F,"bindMatrix"),et.setOptional(w,F,"bindMatrixInverse");const wt=F.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),et.setValue(w,"boneTexture",wt.boneTexture,Ae))}F.isBatchedMesh&&(et.setOptional(w,F,"batchingTexture"),et.setValue(w,"batchingTexture",F._matricesTexture,Ae),et.setOptional(w,F,"batchingIdTexture"),et.setValue(w,"batchingIdTexture",F._indirectTexture,Ae),et.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&et.setValue(w,"batchingColorTexture",F._colorsTexture,Ae));const Vt=k.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&Ue.update(F,k,ht),(ut||He.receiveShadow!==F.receiveShadow)&&(He.receiveShadow=F.receiveShadow,et.setValue(w,"receiveShadow",F.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(Pt.envMap.value=fe,Pt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),C.isMeshStandardMaterial&&C.envMap===null&&P.environment!==null&&(Pt.envMapIntensity.value=P.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=dE()),ut&&(et.setValue(w,"toneMappingExposure",D.toneMappingExposure),He.needsLights&&fi(Pt,lt),X&&C.fog===!0&&De.refreshFogUniforms(Pt,X),De.refreshMaterialUniforms(Pt,C,Ee,be,b.state.transmissionRenderTarget[_.id]),oo.upload(w,gs(He),Pt,Ae)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(oo.upload(w,gs(He),Pt,Ae),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&et.setValue(w,"center",F.center),et.setValue(w,"modelViewMatrix",F.modelViewMatrix),et.setValue(w,"normalMatrix",F.normalMatrix),et.setValue(w,"modelMatrix",F.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const wt=C.uniformsGroups;for(let Ft=0,Go=wt.length;Ft<Go;Ft++){const tr=wt[Ft];Fe.update(tr,ht),Fe.bind(tr,ht)}}return ht}function fi(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function Xn(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(_,P,k){const C=se.get(_);C.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),se.get(_.texture).__webglTexture=P,se.get(_.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:k,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){const k=se.get(_);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0};const m=w.createFramebuffer();this.setRenderTarget=function(_,P=0,k=0){y=_,j=P,R=k;let C=!0,F=null,X=!1,q=!1;if(_){const fe=se.get(_);if(fe.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(w.FRAMEBUFFER,null),C=!1;else if(fe.__webglFramebuffer===void 0)Ae.setupRenderTarget(_);else if(fe.__hasExternalTextures)Ae.rebindTextures(_,se.get(_.texture).__webglTexture,se.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Se=_.depthTexture;if(fe.__boundDepthTexture!==Se){if(Se!==null&&se.has(Se)&&(_.width!==Se.image.width||_.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(_)}}const he=_.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(q=!0);const me=se.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(me[P])?F=me[P][k]:F=me[P],X=!0):_.samples>0&&Ae.useMultisampledRTT(_)===!1?F=se.get(_).__webglMultisampledFramebuffer:Array.isArray(me)?F=me[k]:F=me,ee.copy(_.viewport),de.copy(_.scissor),Q=_.scissorTest}else ee.copy(Qe).multiplyScalar(Ee).floor(),de.copy(st).multiplyScalar(Ee).floor(),Q=tt;if(k!==0&&(F=m),ce.bindFramebuffer(w.FRAMEBUFFER,F)&&C&&ce.drawBuffers(_,F),ce.viewport(ee),ce.scissor(de),ce.setScissorTest(Q),X){const fe=se.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,k)}else if(q){const fe=P;for(let he=0;he<_.textures.length;he++){const me=se.get(_.textures[he]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+he,me.__webglTexture,k,fe)}}else if(_!==null&&k!==0){const fe=se.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,fe.__webglTexture,k)}U=-1},this.readRenderTargetPixels=function(_,P,k,C,F,X,q,te=0){if(!(_&&_.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=se.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&q!==void 0&&(fe=fe[q]),fe){ce.bindFramebuffer(w.FRAMEBUFFER,fe);try{const he=_.textures[te],me=he.format,Se=he.type;if(!Te.textureFormatReadable(me)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Se)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-C&&k>=0&&k<=_.height-F&&(_.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+te),w.readPixels(P,k,C,F,qe.convert(me),qe.convert(Se),X))}finally{const he=y!==null?se.get(y).__webglFramebuffer:null;ce.bindFramebuffer(w.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(_,P,k,C,F,X,q,te=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=se.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&q!==void 0&&(fe=fe[q]),fe)if(P>=0&&P<=_.width-C&&k>=0&&k<=_.height-F){ce.bindFramebuffer(w.FRAMEBUFFER,fe);const he=_.textures[te],me=he.format,Se=he.type;if(!Te.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.bufferData(w.PIXEL_PACK_BUFFER,X.byteLength,w.STREAM_READ),_.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+te),w.readPixels(P,k,C,F,qe.convert(me),qe.convert(Se),0);const Ce=y!==null?se.get(y).__webglFramebuffer:null;ce.bindFramebuffer(w.FRAMEBUFFER,Ce);const ze=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await y_(w,ze,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,X),w.deleteBuffer(ye),w.deleteSync(ze),X}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,k=0){const C=Math.pow(2,-k),F=Math.floor(_.image.width*C),X=Math.floor(_.image.height*C),q=P!==null?P.x:0,te=P!==null?P.y:0;Ae.setTexture2D(_,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,q,te,F,X),ce.unbindTexture()};const E=w.createFramebuffer(),O=w.createFramebuffer();this.copyTextureToTexture=function(_,P,k=null,C=null,F=0,X=null){X===null&&(F!==0?(sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),X=F,F=0):X=0);let q,te,fe,he,me,Se,ye,Ce,ze;const Ke=_.isCompressedTexture?_.mipmaps[X]:_.image;if(k!==null)q=k.max.x-k.min.x,te=k.max.y-k.min.y,fe=k.isBox3?k.max.z-k.min.z:1,he=k.min.x,me=k.min.y,Se=k.isBox3?k.min.z:0;else{const Vt=Math.pow(2,-F);q=Math.floor(Ke.width*Vt),te=Math.floor(Ke.height*Vt),_.isDataArrayTexture?fe=Ke.depth:_.isData3DTexture?fe=Math.floor(Ke.depth*Vt):fe=1,he=0,me=0,Se=0}C!==null?(ye=C.x,Ce=C.y,ze=C.z):(ye=0,Ce=0,ze=0);const Ze=qe.convert(P.format),He=qe.convert(P.type);let $e;P.isData3DTexture?(Ae.setTexture3D(P,0),$e=w.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ae.setTexture2DArray(P,0),$e=w.TEXTURE_2D_ARRAY):(Ae.setTexture2D(P,0),$e=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);const Oe=w.getParameter(w.UNPACK_ROW_LENGTH),ht=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ct=w.getParameter(w.UNPACK_SKIP_PIXELS),ut=w.getParameter(w.UNPACK_SKIP_ROWS),lt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,he),w.pixelStorei(w.UNPACK_SKIP_ROWS,me),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Se);const et=_.isDataArrayTexture||_.isData3DTexture,Pt=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){const Vt=se.get(_),wt=se.get(P),Ft=se.get(Vt.__renderTarget),Go=se.get(wt.__renderTarget);ce.bindFramebuffer(w.READ_FRAMEBUFFER,Ft.__webglFramebuffer),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let tr=0;tr<fe;tr++)et&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,se.get(_).__webglTexture,F,Se+tr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,se.get(P).__webglTexture,X,ze+tr)),w.blitFramebuffer(he,me,q,te,ye,Ce,q,te,w.DEPTH_BUFFER_BIT,w.NEAREST);ce.bindFramebuffer(w.READ_FRAMEBUFFER,null),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(F!==0||_.isRenderTargetTexture||se.has(_)){const Vt=se.get(_),wt=se.get(P);ce.bindFramebuffer(w.READ_FRAMEBUFFER,E),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,O);for(let Ft=0;Ft<fe;Ft++)et?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Vt.__webglTexture,F,Se+Ft):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Vt.__webglTexture,F),Pt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.__webglTexture,X,ze+Ft):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,wt.__webglTexture,X),F!==0?w.blitFramebuffer(he,me,q,te,ye,Ce,q,te,w.COLOR_BUFFER_BIT,w.NEAREST):Pt?w.copyTexSubImage3D($e,X,ye,Ce,ze+Ft,he,me,q,te):w.copyTexSubImage2D($e,X,ye,Ce,he,me,q,te);ce.bindFramebuffer(w.READ_FRAMEBUFFER,null),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Pt?_.isDataTexture||_.isData3DTexture?w.texSubImage3D($e,X,ye,Ce,ze,q,te,fe,Ze,He,Ke.data):P.isCompressedArrayTexture?w.compressedTexSubImage3D($e,X,ye,Ce,ze,q,te,fe,Ze,Ke.data):w.texSubImage3D($e,X,ye,Ce,ze,q,te,fe,Ze,He,Ke):_.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,X,ye,Ce,q,te,Ze,He,Ke.data):_.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,X,ye,Ce,Ke.width,Ke.height,Ze,Ke.data):w.texSubImage2D(w.TEXTURE_2D,X,ye,Ce,q,te,Ze,He,Ke);w.pixelStorei(w.UNPACK_ROW_LENGTH,Oe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ht),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ct),w.pixelStorei(w.UNPACK_SKIP_ROWS,ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,lt),X===0&&P.generateMipmaps&&w.generateMipmap($e),ce.unbindTexture()},this.initRenderTarget=function(_){se.get(_).__webglFramebuffer===void 0&&Ae.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Ae.setTextureCube(_,0):_.isData3DTexture?Ae.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Ae.setTexture2DArray(_,0):Ae.setTexture2D(_,0),ce.unbindTexture()},this.resetState=function(){j=0,R=0,y=null,ce.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const Ih={type:"change"},Iu={type:"start"},Jp={type:"end"},Ka=new ca,Uh=new Hi,mE=Math.cos(70*E_.DEG2RAD),Ot=new Z,hn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class gE extends Av{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new _r,this._lastTargetPosition=new Z,this._quat=new _r().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lh,this._sphericalDelta=new lh,this._scale=1,this._panOffset=new Z,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new Z,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_E.bind(this),this._onPointerDown=xE.bind(this),this._onPointerUp=vE.bind(this),this._onContextMenu=wE.bind(this),this._onMouseWheel=yE.bind(this),this._onKeyDown=ME.bind(this),this._onTouchStart=EE.bind(this),this._onTouchMove=TE.bind(this),this._onMouseDown=SE.bind(this),this._onMouseMove=bE.bind(this),this._interceptControlDown=AE.bind(this),this._interceptControlUp=CE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ih),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ot.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<mE?this.object.lookAt(this.target):(Uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(Uh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ot.copy(r).sub(this.target);let s=Ot.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function _E(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jp),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function SE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case Jr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case Jr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Iu)}function bE(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yE(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(Iu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Jp))}function ME(n){this.enabled!==!1&&this._handleKeyDown(n)}function EE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Iu)}function TE(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function wE(n){this.enabled!==!1&&n.preventDefault()}function AE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Ln=Uint8Array,qr=Uint16Array,RE=Int32Array,Qp=new Ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),em=new Ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),PE=new Ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tm=function(n,e){for(var t=new qr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new RE(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},nm=tm(Qp,2),im=nm.b,DE=nm.r;im[28]=258,DE[258]=28;var LE=tm(em,0),IE=LE.b,Zc=new qr(32768);for(var Rt=0;Rt<32768;++Rt){var ki=(Rt&43690)>>1|(Rt&21845)<<1;ki=(ki&52428)>>2|(ki&13107)<<2,ki=(ki&61680)>>4|(ki&3855)<<4,Zc[Rt]=((ki&65280)>>8|(ki&255)<<8)>>1}var Xs=function(n,e,t){for(var i=n.length,r=0,s=new qr(e);r<i;++r)n[r]&&++s[n[r]-1];var a=new qr(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new qr(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],f=a[n[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)o[Zc[f]>>l]=c}else for(o=new qr(i),r=0;r<i;++r)n[r]&&(o[r]=Zc[a[n[r]-1]++]>>15-n[r]);return o},ha=new Ln(288);for(var Rt=0;Rt<144;++Rt)ha[Rt]=8;for(var Rt=144;Rt<256;++Rt)ha[Rt]=9;for(var Rt=256;Rt<280;++Rt)ha[Rt]=7;for(var Rt=280;Rt<288;++Rt)ha[Rt]=8;var rm=new Ln(32);for(var Rt=0;Rt<32;++Rt)rm[Rt]=5;var UE=Xs(ha,9,1),NE=Xs(rm,5,1),kl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},kn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},zl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},FE=function(n){return(n+7)/8|0},OE=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Ln(n.subarray(e,t))},BE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zn=function(n,e,t){var i=new Error(e||BE[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,zn),!t)throw i;return i},kE=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new Ln(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Ln(r*3));var c=function(Le){var L=t.length;if(Le>L){var N=new Ln(Math.max(L*2,Le));N.set(t),t=N}},u=e.f||0,f=e.p||0,h=e.b||0,d=e.l,v=e.d,S=e.m,x=e.n,p=r*8;do{if(!d){u=kn(n,f,1);var M=kn(n,f+1,3);if(f+=3,M)if(M==1)d=UE,v=NE,S=9,x=5;else if(M==2){var D=kn(n,f,31)+257,z=kn(n,f+10,15)+4,j=D+kn(n,f+5,31)+1;f+=14;for(var R=new Ln(j),y=new Ln(19),U=0;U<z;++U)y[PE[U]]=kn(n,f+U*3,7);f+=z*3;for(var G=kl(y),ee=(1<<G)-1,de=Xs(y,G,1),U=0;U<j;){var Q=de[kn(n,f,ee)];f+=Q&15;var b=Q>>4;if(b<16)R[U++]=b;else{var $=0,ae=0;for(b==16?(ae=3+kn(n,f,3),f+=2,$=R[U-1]):b==17?(ae=3+kn(n,f,7),f+=3):b==18&&(ae=11+kn(n,f,127),f+=7);ae--;)R[U++]=$}}var J=R.subarray(0,D),be=R.subarray(D);S=kl(J),x=kl(be),d=Xs(J,S,1),v=Xs(be,x,1)}else zn(1);else{var b=FE(f)+4,A=n[b-4]|n[b-3]<<8,B=b+A;if(B>r){l&&zn(0);break}o&&c(h+A),t.set(n.subarray(b,B),h),e.b=h+=A,e.p=f=B*8,e.f=u;continue}if(f>p){l&&zn(0);break}}o&&c(h+131072);for(var Ee=(1<<S)-1,Ve=(1<<x)-1,We=f;;We=f){var $=d[zl(n,f)&Ee],Qe=$>>4;if(f+=$&15,f>p){l&&zn(0);break}if($||zn(2),Qe<256)t[h++]=Qe;else if(Qe==256){We=f,d=null;break}else{var st=Qe-254;if(Qe>264){var U=Qe-257,tt=Qp[U];st=kn(n,f,(1<<tt)-1)+im[U],f+=tt}var ne=v[zl(n,f)&Ve],V=ne>>4;ne||zn(3),f+=ne&15;var be=IE[V];if(V>3){var tt=em[V];be+=zl(n,f)&(1<<tt)-1,f+=tt}if(f>p){l&&zn(0);break}o&&c(h+131072);var ue=h+st;if(h<be){var pe=s-be,ge=Math.min(be,ue);for(pe+h<0&&zn(3);h<ge;++h)t[h]=i[pe+h]}for(;h<ue;++h)t[h]=t[h-be]}}e.l=d,e.p=We,e.b=h,e.f=u,d&&(u=1,e.m=S,e.d=v,e.n=x)}while(!u);return h!=t.length&&a?OE(t,0,h):t.subarray(0,h)},zE=new Ln(0),VE=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&zn(6,"invalid zlib data"),(n[1]>>5&1)==1&&zn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Za(n,e){return kE(n.subarray(VE(n),-4),{i:2},e,e)}var HE=typeof TextDecoder<"u"&&new TextDecoder,GE=0;try{HE.decode(zE,{stream:!0}),GE=1}catch{}class WE extends dv{constructor(e){super(e),this.type=Wt,this.outputFormat=Xt}parse(e){const R=Math.pow(2.7182818,2.2);function y(m,E){let O=0;for(let P=0;P<65536;++P)(P==0||m[P>>3]&1<<(P&7))&&(E[O++]=P);const _=O-1;for(;O<65536;)E[O++]=0;return _}function U(m){for(let E=0;E<16384;E++)m[E]={},m[E].len=0,m[E].lit=0,m[E].p=null}const G={l:0,c:0,lc:0};function ee(m,E,O,_,P){for(;O<m;)E=E<<8|Ge(_,P),O+=8;O-=m,G.l=E>>O&(1<<m)-1,G.c=E,G.lc=O}const de=new Array(59);function Q(m){for(let O=0;O<=58;++O)de[O]=0;for(let O=0;O<65537;++O)de[m[O]]+=1;let E=0;for(let O=58;O>0;--O){const _=E+de[O]>>1;de[O]=E,E=_}for(let O=0;O<65537;++O){const _=m[O];_>0&&(m[O]=_|de[_]++<<6)}}function $(m,E,O,_,P,k){const C=E;let F=0,X=0;for(;_<=P;_++){if(C.value-E.value>O)return!1;ee(6,F,X,m,C);const q=G.l;if(F=G.c,X=G.lc,k[_]=q,q==63){if(C.value-E.value>O)throw new Error("Something wrong with hufUnpackEncTable");ee(8,F,X,m,C);let te=G.l+6;if(F=G.c,X=G.lc,_+te>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;te--;)k[_++]=0;_--}else if(q>=59){let te=q-59+2;if(_+te>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;te--;)k[_++]=0;_--}}Q(k)}function ae(m){return m&63}function J(m){return m>>6}function be(m,E,O,_){for(;E<=O;E++){const P=J(m[E]),k=ae(m[E]);if(P>>k)throw new Error("Invalid table entry");if(k>14){const C=_[P>>k-14];if(C.len)throw new Error("Invalid table entry");if(C.lit++,C.p){const F=C.p;C.p=new Array(C.lit);for(let X=0;X<C.lit-1;++X)C.p[X]=F[X]}else C.p=new Array(1);C.p[C.lit-1]=E}else if(k){let C=0;for(let F=1<<14-k;F>0;F--){const X=_[(P<<14-k)+C];if(X.len||X.p)throw new Error("Invalid table entry");X.len=k,X.lit=E,C++}}}return!0}const Ee={c:0,lc:0};function Ve(m,E,O,_){m=m<<8|Ge(O,_),E+=8,Ee.c=m,Ee.lc=E}const We={c:0,lc:0};function Qe(m,E,O,_,P,k,C,F,X){if(m==E){_<8&&(Ve(O,_,P,k),O=Ee.c,_=Ee.lc),_-=8;let q=O>>_;if(q=new Uint8Array([q])[0],F.value+q>X)return!1;const te=C[F.value-1];for(;q-- >0;)C[F.value++]=te}else if(F.value<X)C[F.value++]=m;else return!1;We.c=O,We.lc=_}function st(m){return m&65535}function tt(m){const E=st(m);return E>32767?E-65536:E}const ne={a:0,b:0};function V(m,E){const O=tt(m),P=tt(E),k=O+(P&1)+(P>>1),C=k,F=k-P;ne.a=C,ne.b=F}function ue(m,E){const O=st(m),_=st(E),P=O-(_>>1)&65535,k=_+P-32768&65535;ne.a=k,ne.b=P}function pe(m,E,O,_,P,k,C){const F=C<16384,X=O>P?P:O;let q=1,te,fe;for(;q<=X;)q<<=1;for(q>>=1,te=q,q>>=1;q>=1;){fe=0;const he=fe+k*(P-te),me=k*q,Se=k*te,ye=_*q,Ce=_*te;let ze,Ke,Ze,He;for(;fe<=he;fe+=Se){let $e=fe;const Oe=fe+_*(O-te);for(;$e<=Oe;$e+=Ce){const ht=$e+ye,Ct=$e+me,ut=Ct+ye;F?(V(m[$e+E],m[Ct+E]),ze=ne.a,Ze=ne.b,V(m[ht+E],m[ut+E]),Ke=ne.a,He=ne.b,V(ze,Ke),m[$e+E]=ne.a,m[ht+E]=ne.b,V(Ze,He),m[Ct+E]=ne.a,m[ut+E]=ne.b):(ue(m[$e+E],m[Ct+E]),ze=ne.a,Ze=ne.b,ue(m[ht+E],m[ut+E]),Ke=ne.a,He=ne.b,ue(ze,Ke),m[$e+E]=ne.a,m[ht+E]=ne.b,ue(Ze,He),m[Ct+E]=ne.a,m[ut+E]=ne.b)}if(O&q){const ht=$e+me;F?V(m[$e+E],m[ht+E]):ue(m[$e+E],m[ht+E]),ze=ne.a,m[ht+E]=ne.b,m[$e+E]=ze}}if(P&q){let $e=fe;const Oe=fe+_*(O-te);for(;$e<=Oe;$e+=Ce){const ht=$e+ye;F?V(m[$e+E],m[ht+E]):ue(m[$e+E],m[ht+E]),ze=ne.a,m[ht+E]=ne.b,m[$e+E]=ze}}te=q,q>>=1}return fe}function ge(m,E,O,_,P,k,C,F,X){let q=0,te=0;const fe=C,he=Math.trunc(_.value+(P+7)/8);for(;_.value<he;)for(Ve(q,te,O,_),q=Ee.c,te=Ee.lc;te>=14;){const Se=q>>te-14&16383,ye=E[Se];if(ye.len)te-=ye.len,Qe(ye.lit,k,q,te,O,_,F,X,fe),q=We.c,te=We.lc;else{if(!ye.p)throw new Error("hufDecode issues");let Ce;for(Ce=0;Ce<ye.lit;Ce++){const ze=ae(m[ye.p[Ce]]);for(;te<ze&&_.value<he;)Ve(q,te,O,_),q=Ee.c,te=Ee.lc;if(te>=ze&&J(m[ye.p[Ce]])==(q>>te-ze&(1<<ze)-1)){te-=ze,Qe(ye.p[Ce],k,q,te,O,_,F,X,fe),q=We.c,te=We.lc;break}}if(Ce==ye.lit)throw new Error("hufDecode issues")}}const me=8-P&7;for(q>>=me,te-=me;te>0;){const Se=E[q<<14-te&16383];if(Se.len)te-=Se.len,Qe(Se.lit,k,q,te,O,_,F,X,fe),q=We.c,te=We.lc;else throw new Error("hufDecode issues")}return!0}function Le(m,E,O,_,P,k){const C={value:0},F=O.value,X=Ue(E,O),q=Ue(E,O);O.value+=4;const te=Ue(E,O);if(O.value+=4,X<0||X>=65537||q<0||q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const fe=new Array(65537),he=new Array(16384);U(he);const me=_-(O.value-F);if($(m,O,me,X,q,fe),te>8*(_-(O.value-F)))throw new Error("Something wrong with hufUncompress");be(fe,X,q,he),ge(fe,he,m,O,te,q,k,P,C)}function L(m,E,O){for(let _=0;_<O;++_)E[_]=m[E[_]]}function N(m){for(let E=1;E<m.length;E++){const O=m[E-1]+m[E]-128;m[E]=O}}function W(m,E){let O=0,_=Math.floor((m.length+1)/2),P=0;const k=m.length-1;for(;!(P>k||(E[P++]=m[O++],P>k));)E[P++]=m[_++]}function w(m){let E=m.byteLength;const O=new Array;let _=0;const P=new DataView(m);for(;E>0;){const k=P.getInt8(_++);if(k<0){const C=-k;E-=C+1;for(let F=0;F<C;F++)O.push(P.getUint8(_++))}else{const C=k;E-=2;const F=P.getUint8(_++);for(let X=0;X<C+1;X++)O.push(F)}}return O}function oe(m,E,O,_,P,k){let C=new DataView(k.buffer);const F=O[m.idx[0]].width,X=O[m.idx[0]].height,q=3,te=Math.floor(F/8),fe=Math.ceil(F/8),he=Math.ceil(X/8),me=F-(fe-1)*8,Se=X-(he-1)*8,ye={value:0},Ce=new Array(q),ze=new Array(q),Ke=new Array(q),Ze=new Array(q),He=new Array(q);for(let Oe=0;Oe<q;++Oe)He[Oe]=E[m.idx[Oe]],Ce[Oe]=Oe<1?0:Ce[Oe-1]+fe*he,ze[Oe]=new Float32Array(64),Ke[Oe]=new Uint16Array(64),Ze[Oe]=new Uint16Array(fe*64);for(let Oe=0;Oe<he;++Oe){let ht=8;Oe==he-1&&(ht=Se);let Ct=8;for(let lt=0;lt<fe;++lt){lt==fe-1&&(Ct=me);for(let et=0;et<q;++et)Ke[et].fill(0),Ke[et][0]=P[Ce[et]++],Te(ye,_,Ke[et]),ce(Ke[et],ze[et]),_e(ze[et]);se(ze);for(let et=0;et<q;++et)Ae(ze[et],Ze[et],lt*64)}let ut=0;for(let lt=0;lt<q;++lt){const et=O[m.idx[lt]].type;for(let Pt=8*Oe;Pt<8*Oe+ht;++Pt){ut=He[lt][Pt];for(let Vt=0;Vt<te;++Vt){const wt=Vt*64+(Pt&7)*8;C.setUint16(ut+0*2*et,Ze[lt][wt+0],!0),C.setUint16(ut+1*2*et,Ze[lt][wt+1],!0),C.setUint16(ut+2*2*et,Ze[lt][wt+2],!0),C.setUint16(ut+3*2*et,Ze[lt][wt+3],!0),C.setUint16(ut+4*2*et,Ze[lt][wt+4],!0),C.setUint16(ut+5*2*et,Ze[lt][wt+5],!0),C.setUint16(ut+6*2*et,Ze[lt][wt+6],!0),C.setUint16(ut+7*2*et,Ze[lt][wt+7],!0),ut+=8*2*et}}if(te!=fe)for(let Pt=8*Oe;Pt<8*Oe+ht;++Pt){const Vt=He[lt][Pt]+8*te*2*et,wt=te*64+(Pt&7)*8;for(let Ft=0;Ft<Ct;++Ft)C.setUint16(Vt+Ft*2*et,Ze[lt][wt+Ft],!0)}}}const $e=new Uint16Array(F);C=new DataView(k.buffer);for(let Oe=0;Oe<q;++Oe){O[m.idx[Oe]].decoded=!0;const ht=O[m.idx[Oe]].type;if(O[Oe].type==2)for(let Ct=0;Ct<X;++Ct){const ut=He[Oe][Ct];for(let lt=0;lt<F;++lt)$e[lt]=C.getUint16(ut+lt*2*ht,!0);for(let lt=0;lt<F;++lt)C.setFloat32(ut+lt*2*ht,le($e[lt]),!0)}}}function re(m,E,O,_,P,k){const C=new DataView(k.buffer),F=O[m],X=F.width,q=F.height,te=Math.ceil(X/8),fe=Math.ceil(q/8),he=Math.floor(X/8),me=X-(te-1)*8,Se=q-(fe-1)*8,ye={value:0};let Ce=0;const ze=new Float32Array(64),Ke=new Uint16Array(64),Ze=new Uint16Array(te*64);for(let He=0;He<fe;++He){let $e=8;He==fe-1&&($e=Se);for(let Oe=0;Oe<te;++Oe)Ke.fill(0),Ke[0]=P[Ce++],Te(ye,_,Ke),ce(Ke,ze),_e(ze),Ae(ze,Ze,Oe*64);for(let Oe=8*He;Oe<8*He+$e;++Oe){let ht=E[m][Oe];for(let Ct=0;Ct<he;++Ct){const ut=Ct*64+(Oe&7)*8;for(let lt=0;lt<8;++lt)C.setUint16(ht+lt*2*F.type,Ze[ut+lt],!0);ht+=8*2*F.type}if(te!=he){const Ct=he*64+(Oe&7)*8;for(let ut=0;ut<me;++ut)C.setUint16(ht+ut*2*F.type,Ze[Ct+ut],!0)}}}F.decoded=!0}function Te(m,E,O){let _,P=1;for(;P<64;)_=E[m.value],_==65280?P=64:_>>8==255?P+=_&255:(O[P]=_,P++),m.value++}function ce(m,E){E[0]=le(m[0]),E[1]=le(m[1]),E[2]=le(m[5]),E[3]=le(m[6]),E[4]=le(m[14]),E[5]=le(m[15]),E[6]=le(m[27]),E[7]=le(m[28]),E[8]=le(m[2]),E[9]=le(m[4]),E[10]=le(m[7]),E[11]=le(m[13]),E[12]=le(m[16]),E[13]=le(m[26]),E[14]=le(m[29]),E[15]=le(m[42]),E[16]=le(m[3]),E[17]=le(m[8]),E[18]=le(m[12]),E[19]=le(m[17]),E[20]=le(m[25]),E[21]=le(m[30]),E[22]=le(m[41]),E[23]=le(m[43]),E[24]=le(m[9]),E[25]=le(m[11]),E[26]=le(m[18]),E[27]=le(m[24]),E[28]=le(m[31]),E[29]=le(m[40]),E[30]=le(m[44]),E[31]=le(m[53]),E[32]=le(m[10]),E[33]=le(m[19]),E[34]=le(m[23]),E[35]=le(m[32]),E[36]=le(m[39]),E[37]=le(m[45]),E[38]=le(m[52]),E[39]=le(m[54]),E[40]=le(m[20]),E[41]=le(m[22]),E[42]=le(m[33]),E[43]=le(m[38]),E[44]=le(m[46]),E[45]=le(m[51]),E[46]=le(m[55]),E[47]=le(m[60]),E[48]=le(m[21]),E[49]=le(m[34]),E[50]=le(m[37]),E[51]=le(m[47]),E[52]=le(m[50]),E[53]=le(m[56]),E[54]=le(m[59]),E[55]=le(m[61]),E[56]=le(m[35]),E[57]=le(m[36]),E[58]=le(m[48]),E[59]=le(m[49]),E[60]=le(m[57]),E[61]=le(m[58]),E[62]=le(m[62]),E[63]=le(m[63])}function _e(m){const E=.5*Math.cos(.7853975),O=.5*Math.cos(3.14159/16),_=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),k=.5*Math.cos(5*3.14159/16),C=.5*Math.cos(3*3.14159/8),F=.5*Math.cos(7*3.14159/16),X=new Array(4),q=new Array(4),te=new Array(4),fe=new Array(4);for(let he=0;he<8;++he){const me=he*8;X[0]=_*m[me+2],X[1]=C*m[me+2],X[2]=_*m[me+6],X[3]=C*m[me+6],q[0]=O*m[me+1]+P*m[me+3]+k*m[me+5]+F*m[me+7],q[1]=P*m[me+1]-F*m[me+3]-O*m[me+5]-k*m[me+7],q[2]=k*m[me+1]-O*m[me+3]+F*m[me+5]+P*m[me+7],q[3]=F*m[me+1]-k*m[me+3]+P*m[me+5]-O*m[me+7],te[0]=E*(m[me+0]+m[me+4]),te[3]=E*(m[me+0]-m[me+4]),te[1]=X[0]+X[3],te[2]=X[1]-X[2],fe[0]=te[0]+te[1],fe[1]=te[3]+te[2],fe[2]=te[3]-te[2],fe[3]=te[0]-te[1],m[me+0]=fe[0]+q[0],m[me+1]=fe[1]+q[1],m[me+2]=fe[2]+q[2],m[me+3]=fe[3]+q[3],m[me+4]=fe[3]-q[3],m[me+5]=fe[2]-q[2],m[me+6]=fe[1]-q[1],m[me+7]=fe[0]-q[0]}for(let he=0;he<8;++he)X[0]=_*m[16+he],X[1]=C*m[16+he],X[2]=_*m[48+he],X[3]=C*m[48+he],q[0]=O*m[8+he]+P*m[24+he]+k*m[40+he]+F*m[56+he],q[1]=P*m[8+he]-F*m[24+he]-O*m[40+he]-k*m[56+he],q[2]=k*m[8+he]-O*m[24+he]+F*m[40+he]+P*m[56+he],q[3]=F*m[8+he]-k*m[24+he]+P*m[40+he]-O*m[56+he],te[0]=E*(m[he]+m[32+he]),te[3]=E*(m[he]-m[32+he]),te[1]=X[0]+X[3],te[2]=X[1]-X[2],fe[0]=te[0]+te[1],fe[1]=te[3]+te[2],fe[2]=te[3]-te[2],fe[3]=te[0]-te[1],m[0+he]=fe[0]+q[0],m[8+he]=fe[1]+q[1],m[16+he]=fe[2]+q[2],m[24+he]=fe[3]+q[3],m[32+he]=fe[3]-q[3],m[40+he]=fe[2]-q[2],m[48+he]=fe[1]-q[1],m[56+he]=fe[0]-q[0]}function se(m){for(let E=0;E<64;++E){const O=m[0][E],_=m[1][E],P=m[2][E];m[0][E]=O+1.5747*P,m[1][E]=O-.1873*_-.4682*P,m[2][E]=O+1.8556*_}}function Ae(m,E,O){for(let _=0;_<64;++_)E[O+_]=Xf.toHalfFloat(T(m[_]))}function T(m){return m<=1?Math.sign(m)*Math.pow(Math.abs(m),2.2):Math.sign(m)*Math.pow(R,Math.abs(m)-1)}function g(m){return new DataView(m.array.buffer,m.offset.value,m.size)}function I(m){const E=m.viewer.buffer.slice(m.offset.value,m.offset.value+m.size),O=new Uint8Array(w(E)),_=new Uint8Array(O.length);return N(O),W(O,_),new DataView(_.buffer)}function Y(m){const E=m.array.slice(m.offset.value,m.offset.value+m.size),O=Za(E),_=new Uint8Array(O.length);return N(O),W(O,_),new DataView(_.buffer)}function ie(m){const E=m.viewer,O={value:m.offset.value},_=new Uint16Array(m.columns*m.lines*(m.inputChannels.length*m.type)),P=new Uint8Array(8192);let k=0;const C=new Array(m.inputChannels.length);for(let Se=0,ye=m.inputChannels.length;Se<ye;Se++)C[Se]={},C[Se].start=k,C[Se].end=C[Se].start,C[Se].nx=m.columns,C[Se].ny=m.lines,C[Se].size=m.type,k+=C[Se].nx*C[Se].ny*C[Se].size;const F=Pe(E,O),X=Pe(E,O);if(X>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(F<=X)for(let Se=0;Se<X-F+1;Se++)P[Se+F]=Ie(E,O);const q=new Uint16Array(65536),te=y(P,q),fe=Ue(E,O);Le(m.array,E,O,fe,_,k);for(let Se=0;Se<m.inputChannels.length;++Se){const ye=C[Se];for(let Ce=0;Ce<C[Se].size;++Ce)pe(_,ye.start+Ce,ye.nx,ye.size,ye.ny,ye.nx*ye.size,te)}L(q,_,k);let he=0;const me=new Uint8Array(_.buffer.byteLength);for(let Se=0;Se<m.lines;Se++)for(let ye=0;ye<m.inputChannels.length;ye++){const Ce=C[ye],ze=Ce.nx*Ce.size,Ke=new Uint8Array(_.buffer,Ce.end*2,ze*2);me.set(Ke,he),he+=ze*2,Ce.end+=ze}return new DataView(me.buffer)}function K(m){const E=m.array.slice(m.offset.value,m.offset.value+m.size),O=Za(E),_=m.inputChannels.length*m.lines*m.columns*m.totalBytes,P=new ArrayBuffer(_),k=new DataView(P);let C=0,F=0;const X=new Array(4);for(let q=0;q<m.lines;q++)for(let te=0;te<m.inputChannels.length;te++){let fe=0;switch(m.inputChannels[te].pixelType){case 1:X[0]=C,X[1]=X[0]+m.columns,C=X[1]+m.columns;for(let me=0;me<m.columns;++me){const Se=O[X[0]++]<<8|O[X[1]++];fe+=Se,k.setUint16(F,fe,!0),F+=2}break;case 2:X[0]=C,X[1]=X[0]+m.columns,X[2]=X[1]+m.columns,C=X[2]+m.columns;for(let me=0;me<m.columns;++me){const Se=O[X[0]++]<<24|O[X[1]++]<<16|O[X[2]++]<<8;fe+=Se,k.setUint32(F,fe,!0),F+=4}break}}return k}function De(m){const E=m.viewer,O={value:m.offset.value},_=new Uint8Array(m.columns*m.lines*(m.inputChannels.length*m.type*2)),P={version:qe(E,O),unknownUncompressedSize:qe(E,O),unknownCompressedSize:qe(E,O),acCompressedSize:qe(E,O),dcCompressedSize:qe(E,O),rleCompressedSize:qe(E,O),rleUncompressedSize:qe(E,O),rleRawSize:qe(E,O),totalAcUncompressedCount:qe(E,O),totalDcUncompressedCount:qe(E,O),acCompression:qe(E,O)};if(P.version<2)throw new Error("EXRLoader.parse: "+fi.compression+" version "+P.version+" is unsupported");const k=new Array;let C=Pe(E,O)-2;for(;C>0;){const ye=xe(E.buffer,O),Ce=Ie(E,O),ze=Ce>>2&3,Ke=(Ce>>4)-1,Ze=new Int8Array([Ke])[0],He=Ie(E,O);k.push({name:ye,index:Ze,type:He,compression:ze}),C-=ye.length+3}const F=fi.channels,X=new Array(m.inputChannels.length);for(let ye=0;ye<m.inputChannels.length;++ye){const Ce=X[ye]={},ze=F[ye];Ce.name=ze.name,Ce.compression=0,Ce.decoded=!1,Ce.type=ze.pixelType,Ce.pLinear=ze.pLinear,Ce.width=m.columns,Ce.height=m.lines}const q={idx:new Array(3)};for(let ye=0;ye<m.inputChannels.length;++ye){const Ce=X[ye];for(let ze=0;ze<k.length;++ze){const Ke=k[ze];Ce.name==Ke.name&&(Ce.compression=Ke.compression,Ke.index>=0&&(q.idx[Ke.index]=ye),Ce.offset=ye)}}let te,fe,he;if(P.acCompressedSize>0)switch(P.acCompression){case 0:te=new Uint16Array(P.totalAcUncompressedCount),Le(m.array,E,O,P.acCompressedSize,te,P.totalAcUncompressedCount);break;case 1:const ye=m.array.slice(O.value,O.value+P.totalAcUncompressedCount),Ce=Za(ye);te=new Uint16Array(Ce.buffer),O.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){const ye={array:m.array,offset:O,size:P.dcCompressedSize};fe=new Uint16Array(Y(ye).buffer),O.value+=P.dcCompressedSize}if(P.rleRawSize>0){const ye=m.array.slice(O.value,O.value+P.rleCompressedSize),Ce=Za(ye);he=w(Ce.buffer),O.value+=P.rleCompressedSize}let me=0;const Se=new Array(X.length);for(let ye=0;ye<Se.length;++ye)Se[ye]=new Array;for(let ye=0;ye<m.lines;++ye)for(let Ce=0;Ce<X.length;++Ce)Se[Ce].push(me),me+=X[Ce].width*m.type*2;q.idx[0]!==void 0&&X[q.idx[0]]&&oe(q,Se,X,te,fe,_);for(let ye=0;ye<X.length;++ye){const Ce=X[ye];if(!Ce.decoded)switch(Ce.compression){case 2:let ze=0,Ke=0;for(let Ze=0;Ze<m.lines;++Ze){let He=Se[ye][ze];for(let $e=0;$e<Ce.width;++$e){for(let Oe=0;Oe<2*Ce.type;++Oe)_[He++]=he[Ke+Oe*Ce.width*Ce.height];Ke++}ze++}break;case 1:re(ye,Se,X,te,fe,_);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(_.buffer)}function xe(m,E){const O=new Uint8Array(m);let _=0;for(;O[E.value+_]!=0;)_+=1;const P=new TextDecoder().decode(O.slice(E.value,E.value+_));return E.value=E.value+_+1,P}function ke(m,E,O){const _=new TextDecoder().decode(new Uint8Array(m).slice(E.value,E.value+O));return E.value=E.value+O,_}function Ne(m,E){const O=we(m,E),_=Ue(m,E);return[O,_]}function Me(m,E){const O=Ue(m,E),_=Ue(m,E);return[O,_]}function we(m,E){const O=m.getInt32(E.value,!0);return E.value=E.value+4,O}function Ue(m,E){const O=m.getUint32(E.value,!0);return E.value=E.value+4,O}function Ge(m,E){const O=m[E.value];return E.value=E.value+1,O}function Ie(m,E){const O=m.getUint8(E.value);return E.value=E.value+1,O}const qe=function(m,E){let O;return"getBigInt64"in DataView.prototype?O=Number(m.getBigInt64(E.value,!0)):O=m.getUint32(E.value+4,!0)+Number(m.getUint32(E.value,!0)<<32),E.value+=8,O};function H(m,E){const O=m.getFloat32(E.value,!0);return E.value+=4,O}function Fe(m,E){return Xf.toHalfFloat(H(m,E))}function le(m){const E=(m&31744)>>10,O=m&1023;return(m>>15?-1:1)*(E?E===31?O?NaN:1/0:Math.pow(2,E-15)*(1+O/1024):6103515625e-14*(O/1024))}function Pe(m,E){const O=m.getUint16(E.value,!0);return E.value+=2,O}function Re(m,E){return le(Pe(m,E))}function ve(m,E,O,_){const P=O.value,k=[];for(;O.value<P+_-1;){const C=xe(E,O),F=we(m,O),X=Ie(m,O);O.value+=3;const q=we(m,O),te=we(m,O);k.push({name:C,pixelType:F,pLinear:X,xSampling:q,ySampling:te})}return O.value+=1,k}function je(m,E){const O=H(m,E),_=H(m,E),P=H(m,E),k=H(m,E),C=H(m,E),F=H(m,E),X=H(m,E),q=H(m,E);return{redX:O,redY:_,greenX:P,greenY:k,blueX:C,blueY:F,whiteX:X,whiteY:q}}function nt(m,E){const O=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],_=Ie(m,E);return O[_]}function Et(m,E){const O=we(m,E),_=we(m,E),P=we(m,E),k=we(m,E);return{xMin:O,yMin:_,xMax:P,yMax:k}}function pt(m,E){const O=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],_=Ie(m,E);return O[_]}function Rn(m,E){const O=["ENVMAP_LATLONG","ENVMAP_CUBE"],_=Ie(m,E);return O[_]}function vn(m,E){const O=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],_=["ROUND_DOWN","ROUND_UP"],P=Ue(m,E),k=Ue(m,E),C=Ie(m,E);return{xSize:P,ySize:k,levelMode:O[C&15],roundingMode:_[C>>4]}}function Vo(m,E){const O=H(m,E),_=H(m,E);return[O,_]}function da(m,E){const O=H(m,E),_=H(m,E),P=H(m,E);return[O,_,P]}function pa(m,E,O,_,P){if(_==="string"||_==="stringvector"||_==="iccProfile")return ke(E,O,P);if(_==="chlist")return ve(m,E,O,P);if(_==="chromaticities")return je(m,O);if(_==="compression")return nt(m,O);if(_==="box2i")return Et(m,O);if(_==="envmap")return Rn(m,O);if(_==="tiledesc")return vn(m,O);if(_==="lineOrder")return pt(m,O);if(_==="float")return H(m,O);if(_==="v2f")return Vo(m,O);if(_==="v3f")return da(m,O);if(_==="int")return we(m,O);if(_==="rational")return Ne(m,O);if(_==="timecode")return Me(m,O);if(_==="preview")return O.value+=P,"skipped";O.value+=P}function ui(m,E){const O=Math.log2(m);return E=="ROUND_DOWN"?Math.floor(O):Math.ceil(O)}function ps(m,E,O){let _=0;switch(m.levelMode){case"ONE_LEVEL":_=1;break;case"MIPMAP_LEVELS":_=ui(Math.max(E,O),m.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return _}function ms(m,E,O,_){const P=new Array(m);for(let k=0;k<m;k++){const C=1<<k;let F=E/C|0;_=="ROUND_UP"&&F*C<E&&(F+=1);const X=Math.max(F,1);P[k]=(X+O-1)/O|0}return P}function ma(){const m=this,E=m.offset,O={value:0};for(let _=0;_<m.tileCount;_++){const P=we(m.viewer,E),k=we(m.viewer,E);E.value+=8,m.size=Ue(m.viewer,E);const C=P*m.blockWidth,F=k*m.blockHeight;m.columns=C+m.blockWidth>m.width?m.width-C:m.blockWidth,m.lines=F+m.blockHeight>m.height?m.height-F:m.blockHeight;const X=m.columns*m.totalBytes,te=m.size<m.lines*X?m.uncompress(m):g(m);E.value+=m.size;for(let fe=0;fe<m.lines;fe++){const he=fe*m.columns*m.totalBytes;for(let me=0;me<m.inputChannels.length;me++){const Se=fi.channels[me].name,ye=m.channelByteOffsets[Se]*m.columns,Ce=m.decodeChannels[Se];if(Ce===void 0)continue;O.value=he+ye;const ze=(m.height-(1+F+fe))*m.outLineWidth;for(let Ke=0;Ke<m.columns;Ke++){const Ze=ze+(Ke+C)*m.outputChannels+Ce;m.byteArray[Ze]=m.getter(te,O)}}}}}function br(){const m=this,E=m.offset,O={value:0};for(let _=0;_<m.height/m.blockHeight;_++){const P=we(m.viewer,E)-fi.dataWindow.yMin;m.size=Ue(m.viewer,E),m.lines=P+m.blockHeight>m.height?m.height-P:m.blockHeight;const k=m.columns*m.totalBytes,F=m.size<m.lines*k?m.uncompress(m):g(m);E.value+=m.size;for(let X=0;X<m.blockHeight;X++){const q=_*m.blockHeight,te=X+m.scanOrder(q);if(te>=m.height)continue;const fe=X*k,he=(m.height-1-te)*m.outLineWidth;for(let me=0;me<m.inputChannels.length;me++){const Se=fi.channels[me].name,ye=m.channelByteOffsets[Se]*m.columns,Ce=m.decodeChannels[Se];if(Ce!==void 0){O.value=fe+ye;for(let ze=0;ze<m.columns;ze++){const Ke=he+ze*m.outputChannels+Ce;m.byteArray[Ke]=m.getter(F,O)}}}}}}function ga(m,E,O){const _={};if(m.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");_.version=m.getUint8(4);const P=m.getUint8(5);_.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},O.value=8;let k=!0;for(;k;){const C=xe(E,O);if(C==="")k=!1;else{const F=xe(E,O),X=Ue(m,O),q=pa(m,E,O,F,X);q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${F}'.`):_[C]=q}}if(P&-7)throw console.error("THREE.EXRHeader:",_),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return _}function yr(m,E,O,_,P,k){const C={size:0,viewer:E,array:O,offset:_,width:m.dataWindow.xMax-m.dataWindow.xMin+1,height:m.dataWindow.yMax-m.dataWindow.yMin+1,inputChannels:m.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:En};switch(m.compression){case"NO_COMPRESSION":C.blockHeight=1,C.uncompress=g;break;case"RLE_COMPRESSION":C.blockHeight=1,C.uncompress=I;break;case"ZIPS_COMPRESSION":C.blockHeight=1,C.uncompress=Y;break;case"ZIP_COMPRESSION":C.blockHeight=16,C.uncompress=Y;break;case"PIZ_COMPRESSION":C.blockHeight=32,C.uncompress=ie;break;case"PXR24_COMPRESSION":C.blockHeight=16,C.uncompress=K;break;case"DWAA_COMPRESSION":C.blockHeight=32,C.uncompress=De;break;case"DWAB_COMPRESSION":C.blockHeight=256,C.uncompress=De;break;default:throw new Error("EXRLoader.parse: "+m.compression+" is unsupported")}const F={};for(const he of m.channels)switch(he.name){case"Y":case"R":case"G":case"B":case"A":F[he.name]=!0,C.type=he.pixelType}let X=!1,q=!1;if(F.R&&F.G&&F.B)C.outputChannels=4;else if(F.Y)C.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(C.outputChannels){case 4:k==Xt?(X=!F.A,C.format=Xt,C.colorSpace=En,C.outputChannels=4,C.decodeChannels={R:0,G:1,B:2,A:3}):k==Wi?(C.format=Wi,C.colorSpace=En,C.outputChannels=2,C.decodeChannels={R:0,G:1}):k==Yr?(C.format=Yr,C.colorSpace=En,C.outputChannels=1,C.decodeChannels={R:0}):q=!0;break;case 1:k==Xt?(X=!0,C.format=Xt,C.colorSpace=En,C.outputChannels=4,C.shouldExpand=!0,C.decodeChannels={Y:0}):k==Wi?(C.format=Wi,C.colorSpace=En,C.outputChannels=2,C.shouldExpand=!0,C.decodeChannels={Y:0}):k==Yr?(C.format=Yr,C.colorSpace=En,C.outputChannels=1,C.decodeChannels={Y:0}):q=!0;break;default:q=!0}if(q)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(C.type==1)switch(P){case In:C.getter=Re;break;case Wt:C.getter=Pe;break}else if(C.type==2)switch(P){case In:C.getter=H;break;case Wt:C.getter=Fe}else throw new Error("EXRLoader.parse: unsupported pixelType "+C.type+" for "+m.compression+".");C.columns=C.width;const te=C.width*C.height*C.outputChannels;switch(P){case In:C.byteArray=new Float32Array(te),X&&C.byteArray.fill(1,0,te);break;case Wt:C.byteArray=new Uint16Array(te),X&&C.byteArray.fill(15360,0,te);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}let fe=0;for(const he of m.channels)C.decodeChannels[he.name]!==void 0&&(C.channelByteOffsets[he.name]=fe),fe+=he.pixelType*2;if(C.totalBytes=fe,C.outLineWidth=C.width*C.outputChannels,m.lineOrder==="INCREASING_Y"?C.scanOrder=he=>he:C.scanOrder=he=>C.height-1-he,m.spec.singleTile){C.blockHeight=m.tiles.ySize,C.blockWidth=m.tiles.xSize;const he=ps(m.tiles,C.width,C.height),me=ms(he,C.width,m.tiles.xSize,m.tiles.roundingMode),Se=ms(he,C.height,m.tiles.ySize,m.tiles.roundingMode);C.tileCount=me[0]*Se[0];for(let ye=0;ye<he;ye++)for(let Ce=0;Ce<Se[ye];Ce++)for(let ze=0;ze<me[ye];ze++)qe(E,_);C.decode=ma.bind(C)}else{C.blockWidth=C.width;const he=Math.ceil(C.height/C.blockHeight);for(let me=0;me<he;me++)qe(E,_);C.decode=br.bind(C)}return C}const gs={value:0},xs=new DataView(e),Ho=new Uint8Array(e),fi=ga(xs,e,gs),Xn=yr(fi,xs,Ho,gs,this.type,this.outputFormat);if(Xn.decode(),Xn.shouldExpand){const m=Xn.byteArray;if(this.outputFormat==Xt)for(let E=0;E<m.length;E+=4)m[E+2]=m[E+1]=m[E];else if(this.outputFormat==Wi)for(let E=0;E<m.length;E+=2)m[E+1]=m[E]}return{header:fi,width:Xn.width,height:Xn.height,data:Xn.byteArray,format:Xn.format,colorSpace:Xn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,i,r){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Gt,a.magFilter=Gt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,i,r)}}const Vl=new WeakMap;class XE extends Qi{constructor(e){super(e),this.libraryPath="",this.libraryPending=null,this.libraryBinary=null,this.libraryConfig={},this.url="",this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.workerConfig={},this.materials=[],this.warnings=[]}setLibraryPath(e){return this.libraryPath=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const s=new Ws(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),this.url=e,s.load(e,a=>{if(Vl.has(a))return Vl.get(a).promise.then(t).catch(r);this.decodeObjects(a,e).then(o=>{o.userData.warnings=this.warnings,t(o)}).catch(o=>r(o))},i,r)}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}decodeObjects(e,t){let i,r;const s=e.byteLength,a=this._getWorker(s).then(o=>(i=o,r=this.workerNextTaskID++,new Promise((l,c)=>{i._callbacks[r]={resolve:l,reject:c},i.postMessage({type:"decode",id:r,buffer:e},[e])}))).then(o=>this._createGeometry(o.data)).catch(o=>{throw o});return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Vl.set(e,{url:t,promise:a}),a}parse(e,t,i){this.decodeObjects(e,"").then(r=>{r.userData.warnings=this.warnings,t(r)}).catch(r=>i(r))}_compareMaterials(e){const t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type,t.vertexColors=e.vertexColors;const i=JSON.stringify(t);for(let r=0;r<this.materials.length;r++){const s=this.materials[r],a={};if(a.name=s.name,a.color={},a.color.r=s.color.r,a.color.g=s.color.g,a.color.b=s.color.b,a.type=s.type,a.vertexColors=s.vertexColors,JSON.stringify(a)===i)return s}return this.materials.push(e),e}_createMaterial(e,t){if(e===void 0)return new Xp({color:new Je(1,1,1),metalness:.8,name:Qi.DEFAULT_MATERIAL_NAME,side:wn});const i=new ov({color:new Je(e.diffuseColor.r/255,e.diffuseColor.g/255,e.diffuseColor.b/255),emissive:new Je(e.emissionColor.r,e.emissionColor.g,e.emissionColor.b),flatShading:e.disableLighting,ior:e.indexOfRefraction,name:e.name,reflectivity:e.reflectivity,opacity:1-e.transparency,side:wn,specularColor:e.specularColor,transparent:e.transparency>0});if(i.userData.id=e.id,e.pbrSupported){const s=e.pbr;i.anisotropy=s.anisotropic,i.anisotropyRotation=s.anisotropicRotation,i.color=new Je(s.baseColor.r,s.baseColor.g,s.baseColor.b),i.clearcoat=s.clearcoat,i.clearcoatRoughness=s.clearcoatRoughness,i.metalness=s.metallic,i.transmission=1-s.opacity,i.roughness=s.roughness,i.sheen=s.sheen,i.specularIntensity=s.specular,i.thickness=s.subsurface}e.pbrSupported&&e.pbr.opacity===0&&e.transparency===1&&(i.opacity=.2,i.transmission=1);const r=new pv;for(let s=0;s<e.textures.length;s++){const a=e.textures[s];if(a.image!==null){const o=r.load(a.image);switch(a.type){case"Bump":i.bumpMap=o;break;case"Diffuse":i.map=o;break;case"Emap":i.envMap=o;break;case"Opacity":i.transmissionMap=o;break;case"Transparency":i.alphaMap=o,i.transparent=!0;break;case"PBR_Alpha":i.alphaMap=o,i.transparent=!0;break;case"PBR_AmbientOcclusion":i.aoMap=o;break;case"PBR_Anisotropic":i.anisotropyMap=o;break;case"PBR_BaseColor":i.map=o;break;case"PBR_Clearcoat":i.clearcoatMap=o;break;case"PBR_ClearcoatBump":i.clearcoatNormalMap=o;break;case"PBR_ClearcoatRoughness":i.clearcoatRoughnessMap=o;break;case"PBR_Displacement":i.displacementMap=o;break;case"PBR_Emission":i.emissiveMap=o;break;case"PBR_Metallic":i.metalnessMap=o;break;case"PBR_Roughness":i.roughnessMap=o;break;case"PBR_Sheen":i.sheenColorMap=o;break;case"PBR_Specular":i.specularColorMap=o;break;case"PBR_Subsurface":i.thicknessMap=o;break;default:this.warnings.push({message:`THREE.3DMLoader: No conversion exists for 3dm ${a.type}.`,type:"no conversion"});break}o.wrapS=a.wrapU===0?Qs:un,o.wrapT=a.wrapV===0?Qs:un,a.repeat&&o.repeat.set(a.repeat[0],a.repeat[1])}}return t&&new WE().load(t.image,function(s){s.mapping=THREE.EquirectangularReflectionMapping,i.envMap=s}),i}_createGeometry(e){const t=new Lt,i=[],r=[],s=[];t.userData.layers=e.layers,t.userData.groups=e.groups,t.userData.settings=e.settings,t.userData.settings.renderSettings=e.renderSettings,t.userData.objectType="File3dm",t.userData.materials=null,t.name=this.url;let a=e.objects;const o=e.materials;for(let l=0;l<a.length;l++){const c=a[l],u=c.attributes;switch(c.objectType){case"InstanceDefinition":r.push(c);break;case"InstanceReference":s.push(c);break;default:let f=null;switch(u.materialSource.name){case"ObjectMaterialSource_MaterialFromLayer":u.layerIndex>=0&&(f=e.layers[u.layerIndex].renderMaterialIndex);break;case"ObjectMaterialSource_MaterialFromObject":u.materialIndex>=0&&(f=u.materialIndex);break}let h=null;if(f>=0){const S=o[f];h=this._createMaterial(S,e.renderEnvironment)}const d=this._createObject(c,h);if(d===void 0)continue;const v=e.layers[u.layerIndex];d.visible=v?e.layers[u.layerIndex].visible:!0,u.isInstanceDefinitionObject?i.push(d):t.add(d);break}}for(let l=0;l<r.length;l++){const c=r[l];a=[];for(let u=0;u<c.attributes.objectIds.length;u++){const f=c.attributes.objectIds[u];for(let h=0;h<i.length;h++){const d=i[h].userData.attributes.id;f===d&&a.push(i[h])}}for(let u=0;u<s.length;u++){const f=s[u];if(f.geometry.parentIdefId===c.attributes.id){const h=new Lt,d=f.geometry.xform.array,v=new Mt;v.set(...d),h.applyMatrix4(v);for(let S=0;S<a.length;S++)h.add(a[S].clone(!0));t.add(h)}}}return t.userData.materials=this.materials,t.name="",t}_createObject(e,t){const i=new Mv,r=e.attributes;let s,a,o,l;switch(e.objectType){case"Point":case"PointSet":s=i.parse(e.geometry),s.attributes.hasOwnProperty("color")?a=new Xc({vertexColors:!0,sizeAttenuation:!1,size:2}):(o=r.drawColor,l=new Je(o.r/255,o.g/255,o.b/255),a=new Xc({color:l,sizeAttenuation:!1,size:2})),a=this._compareMaterials(a);const c=new rv(s,a);return c.userData.attributes=r,c.userData.objectType=e.objectType,r.name&&(c.name=r.name),c;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(e.geometry===null)return;s=i.parse(e.geometry),t===null&&(t=this._createMaterial()),s.attributes.hasOwnProperty("color")&&(t.vertexColors=!0),t=this._compareMaterials(t);const u=new ci(s,t);return u.castShadow=r.castsShadows,u.receiveShadow=r.receivesShadows,u.userData.attributes=r,u.userData.objectType=e.objectType,r.name&&(u.name=r.name),u;case"Curve":s=i.parse(e.geometry),o=r.drawColor,l=new Je(o.r/255,o.g/255,o.b/255),a=new Hp({color:l}),a=this._compareMaterials(a);const f=new iv(s,a);return f.userData.attributes=r,f.userData.objectType=e.objectType,r.name&&(f.name=r.name),f;case"TextDot":s=e.geometry;const h=document.createElement("canvas").getContext("2d"),d=`${s.fontHeight}px ${s.fontFace}`;h.font=d;const v=h.measureText(s.text).width+10,S=s.fontHeight+10,x=window.devicePixelRatio;h.canvas.width=v*x,h.canvas.height=S*x,h.canvas.style.width=v+"px",h.canvas.style.height=S+"px",h.setTransform(x,0,0,x,0,0),h.font=d,h.textBaseline="middle",h.textAlign="center",l=r.drawColor,h.fillStyle=`rgba(${l.r},${l.g},${l.b},${l.a})`,h.fillRect(0,0,v,S),h.fillStyle="white",h.fillText(s.text,v/2,S/2);const p=new sv(h.canvas);p.minFilter=Gt,p.generateMipmaps=!1,p.wrapS=un,p.wrapT=un,a=new kp({map:p,depthTest:!1});const M=new J_(a);return M.position.set(s.point[0],s.point[1],s.point[2]),M.scale.set(v/10,S/10,1),M.userData.attributes=r,M.userData.objectType=e.objectType,r.name&&(M.name=r.name),M;case"Light":s=e.geometry;let b;switch(s.lightStyle.name){case"LightStyle_WorldPoint":b=new _v,b.castShadow=r.castsShadows,b.position.set(s.location[0],s.location[1],s.location[2]),b.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":b=new gv,b.castShadow=r.castsShadows,b.position.set(s.location[0],s.location[1],s.location[2]),b.target.position.set(s.direction[0],s.direction[1],s.direction[2]),b.angle=s.spotAngleRadians,b.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":b=new bv;const A=Math.abs(s.width[2]),B=Math.abs(s.length[0]);b.position.set(s.location[0]-B/2,s.location[1],s.location[2]-A/2),b.height=B,b.width=A,b.lookAt(s.direction[0],s.direction[1],s.direction[2]);break;case"LightStyle_WorldDirectional":b=new qc,b.castShadow=r.castsShadows,b.position.set(s.location[0],s.location[1],s.location[2]),b.target.position.set(s.direction[0],s.direction[1],s.direction[2]),b.shadow.normalBias=.1;break}return b&&(b.intensity=s.intensity,o=s.diffuse,l=new Je(o.r/255,o.g/255,o.b/255),b.color=l,b.userData.attributes=r,b.userData.objectType=e.objectType),b}}_initLibrary(){if(!this.libraryPending){const e=new Ws(this.manager);e.setPath(this.libraryPath);const t=new Promise((s,a)=>{e.load("rhino3dm.js",s,void 0,a)}),i=new Ws(this.manager);i.setPath(this.libraryPath),i.setResponseType("arraybuffer");const r=new Promise((s,a)=>{i.load("rhino3dm.wasm",s,void 0,a)});this.libraryPending=Promise.all([t,r]).then(([s,a])=>{this.libraryConfig.wasmBinary=a;const o=YE.toString(),l=["/* rhino3dm.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l]))})}return this.libraryPending}_getWorker(e){return this._initLibrary().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",libraryConfig:this.libraryConfig}),i.onmessage=r=>{const s=r.data;switch(s.type){case"warning":this.warnings.push(s.data),console.warn(s.data);break;case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskLoad+=e,t})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();this.workerPool.length=0}}function YE(){let n,e,t,i;onmessage=function(u){const f=u.data;switch(f.type){case"init":e=f.libraryConfig;const h=e.wasmBinary;let d;n=new Promise(function(S){d={wasmBinary:h,onRuntimeInitialized:S},rhino3dm(d)}).then(()=>{t=d});break;case"decode":i=f.id;const v=f.buffer;n.then(()=>{try{const S=r(t,v);self.postMessage({type:"decode",id:f.id,data:S})}catch(S){self.postMessage({type:"error",id:f.id,error:S})}});break}};function r(u,f){const h=new Uint8Array(f),d=u.File3dm.fromByteArray(h),v=[],S=[],x=[],p=[],M=[],b=[],A=[],B=d.objects(),D=B.count;for(let Q=0;Q<D;Q++){const $=B.get(Q),ae=o($,d);$.delete(),ae&&v.push(ae)}for(let Q=0;Q<d.instanceDefinitions().count;Q++){const $=d.instanceDefinitions().get(Q),ae=l($);ae.objectIds=$.getObjectIds(),v.push({geometry:null,attributes:ae,objectType:"InstanceDefinition"})}const z=[u.TextureType.Diffuse,u.TextureType.Bump,u.TextureType.Transparency,u.TextureType.Opacity,u.TextureType.Emap],j=[u.TextureType.PBR_BaseColor,u.TextureType.PBR_Subsurface,u.TextureType.PBR_SubsurfaceScattering,u.TextureType.PBR_SubsurfaceScatteringRadius,u.TextureType.PBR_Metallic,u.TextureType.PBR_Specular,u.TextureType.PBR_SpecularTint,u.TextureType.PBR_Roughness,u.TextureType.PBR_Anisotropic,u.TextureType.PBR_Anisotropic_Rotation,u.TextureType.PBR_Sheen,u.TextureType.PBR_SheenTint,u.TextureType.PBR_Clearcoat,u.TextureType.PBR_ClearcoatBump,u.TextureType.PBR_ClearcoatRoughness,u.TextureType.PBR_OpacityIor,u.TextureType.PBR_OpacityRoughness,u.TextureType.PBR_Emission,u.TextureType.PBR_AmbientOcclusion,u.TextureType.PBR_Displacement];for(let Q=0;Q<d.materials().count;Q++){const $=d.materials().get(Q),ae=l($),J=[];J.push(...s($,z,d)),ae.pbrSupported=$.physicallyBased().supported,ae.pbrSupported&&(J.push(...s($,j,d)),ae.pbr=l($.physicallyBased())),ae.textures=J,S.push(ae),$.delete()}for(let Q=0;Q<d.layers().count;Q++){const $=d.layers().get(Q),ae=l($);x.push(ae),$.delete()}for(let Q=0;Q<d.views().count;Q++){const $=d.views().get(Q),ae=l($);p.push(ae),$.delete()}for(let Q=0;Q<d.namedViews().count;Q++){const $=d.namedViews().get(Q),ae=l($);M.push(ae),$.delete()}for(let Q=0;Q<d.groups().count;Q++){const $=d.groups().get(Q),ae=l($);b.push(ae),$.delete()}const R=l(d.settings()),y=d.strings().count;for(let Q=0;Q<y;Q++)A.push(d.strings().get(Q));const U=d.settings().renderSettings().renderEnvironments.reflectionId,G=d.renderContent();let ee=null;for(let Q=0;Q<G.count;Q++){const $=G.get(Q);switch($.kind){case"environment":if($.id!==U)break;const be=$.findChild("texture").fileName;for(let Ee=0;Ee<d.embeddedFiles().count;Ee++){const Ve=d.embeddedFiles().get(Ee).fileName;be===Ve&&(ee={type:"renderEnvironment",image:"data:image/png;base64,"+d.getEmbeddedFileAsBase64(be),name:be})}break}}const de={ambientLight:d.settings().renderSettings().ambientLight,backgroundColorTop:d.settings().renderSettings().backgroundColorTop,backgroundColorBottom:d.settings().renderSettings().backgroundColorBottom,useHiddenLights:d.settings().renderSettings().useHiddenLights,depthCue:d.settings().renderSettings().depthCue,flatShade:d.settings().renderSettings().flatShade,renderBackFaces:d.settings().renderSettings().renderBackFaces,renderPoints:d.settings().renderSettings().renderPoints,renderCurves:d.settings().renderSettings().renderCurves,renderIsoParams:d.settings().renderSettings().renderIsoParams,renderMeshEdges:d.settings().renderSettings().renderMeshEdges,renderAnnotations:d.settings().renderSettings().renderAnnotations,useViewportSize:d.settings().renderSettings().useViewportSize,scaleBackgroundToFit:d.settings().renderSettings().scaleBackgroundToFit,transparentBackground:d.settings().renderSettings().transparentBackground,imageDpi:d.settings().renderSettings().imageDpi,shadowMapLevel:d.settings().renderSettings().shadowMapLevel,namedView:d.settings().renderSettings().namedView,snapShot:d.settings().renderSettings().snapShot,specificViewport:d.settings().renderSettings().specificViewport,groundPlane:l(d.settings().renderSettings().groundPlane),safeFrame:l(d.settings().renderSettings().safeFrame),dithering:l(d.settings().renderSettings().dithering),skylight:l(d.settings().renderSettings().skylight),linearWorkflow:l(d.settings().renderSettings().linearWorkflow),renderChannels:l(d.settings().renderSettings().renderChannels),sun:l(d.settings().renderSettings().sun),renderEnvironments:l(d.settings().renderSettings().renderEnvironments),postEffects:l(d.settings().renderSettings().postEffects)};return d.delete(),{objects:v,materials:S,layers:x,views:p,namedViews:M,groups:b,strings:A,settings:R,renderSettings:de,renderEnvironment:ee}}function s(u,f,h){const d=[];for(let v=0;v<f.length;v++){const S=u.getTexture(f[v]);if(S){let x=f[v].constructor.name;x=x.substring(12,x.length);const p=a(S,x,h);d.push(p),S.delete()}}return d}function a(u,f,h){const d={type:f},v=h.getEmbeddedFileAsBase64(u.fileName);d.wrapU=u.wrapU,d.wrapV=u.wrapV,d.wrapW=u.wrapW;const S=u.uvwTransform.toFloatArray(!0);return d.repeat=[S[0],S[5]],v?d.image="data:image/png;base64,"+v:(self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Image for ${f} texture not embedded in file.`,type:"missing resource"}}),d.image=null),d}function o(u,f){const h=u.geometry(),d=u.attributes();let v=h.objectType,S,x,p,M,b;switch(v){case t.ObjectType.Curve:const A=c(h,100);p={},x={},M={},p.itemSize=3,p.type="Float32Array",p.array=[];for(let R=0;R<A.length;R++)p.array.push(A[R][0]),p.array.push(A[R][1]),p.array.push(A[R][2]);x.position=p,M.attributes=x,S={data:M};break;case t.ObjectType.Point:const B=h.location;p={};const D={};x={},M={},p.itemSize=3,p.type="Float32Array",p.array=[B[0],B[1],B[2]];const z=d.drawColor(f);D.itemSize=3,D.type="Float32Array",D.array=[z.r/255,z.g/255,z.b/255],x.position=p,x.color=D,M.attributes=x,S={data:M};break;case t.ObjectType.PointSet:case t.ObjectType.Mesh:S=h.toThreejsJSON();break;case t.ObjectType.Brep:const j=h.faces();b=new t.Mesh;for(let R=0;R<j.count;R++){const y=j.get(R),U=y.getMesh(t.MeshType.Any);U&&(b.append(U),U.delete()),y.delete()}b.faces().count>0&&(b.compact(),S=b.toThreejsJSON(),j.delete()),b.delete();break;case t.ObjectType.Extrusion:b=h.getMesh(t.MeshType.Any),b&&(S=b.toThreejsJSON(),b.delete());break;case t.ObjectType.TextDot:S=l(h);break;case t.ObjectType.Light:S=l(h),S.lightStyle.name==="LightStyle_WorldLinear"&&self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: No conversion exists for ${v.constructor.name} ${S.lightStyle.name}`,type:"no conversion",guid:d.id}});break;case t.ObjectType.InstanceReference:S=l(h),S.xform=l(h.xform),S.xform.array=h.xform.toFloatArray(!0);break;case t.ObjectType.SubD:h.subdivide(3),b=t.Mesh.createFromSubDControlNet(h,!1),b&&(S=b.toThreejsJSON(),b.delete());break;default:self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Conversion not implemented for ${v.constructor.name}`,type:"not implemented",guid:d.id}});break}if(S)return x=l(d),x.geometry=l(h),d.groupCount>0&&(x.groupIds=d.getGroupList()),d.userStringCount>0&&(x.userStrings=d.getUserStrings()),h.userStringCount>0&&(x.geometry.userStrings=h.getUserStrings()),d.decals().count>0&&self.postMessage({type:"warning",id:i,data:{message:"THREE.3DMLoader: No conversion exists for the decals associated with this object.",type:"no conversion",guid:d.id}}),x.drawColor=d.drawColor(f),v=v.constructor.name,v=v.substring(11,v.length),{geometry:S,attributes:x,objectType:v};self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: ${v.constructor.name} has no associated mesh geometry.`,type:"missing mesh",guid:d.id}})}function l(u){const f={};for(const h in u){const d=u[h];typeof d!="function"&&(typeof d=="object"&&d!==null&&d.hasOwnProperty("constructor")?f[h]={name:d.constructor.name,value:d.value}:typeof d=="object"&&d!==null?f[h]=l(d):f[h]=d)}return f}function c(u,f){let h=f,d=[];const v=[];if(u instanceof t.LineCurve)return[u.pointAtStart,u.pointAtEnd];if(u instanceof t.PolylineCurve){h=u.pointCount;for(let p=0;p<h;p++)d.push(u.point(p));return d}if(u instanceof t.PolyCurve){const p=u.segmentCount;for(let M=0;M<p;M++){const b=u.segmentCurve(M),A=c(b,h);d=d.concat(A),b.delete()}return d}if(u instanceof t.ArcCurve&&(h=Math.floor(u.angleDegrees/5),h=h<2?2:h),u instanceof t.NurbsCurve&&u.degree===1){const p=u.tryGetPolyline();for(let M=0;M<p.count;M++)d.push(p.get(M));return p.delete(),d}const S=u.domain,x=h-1;for(let p=0;p<h;p++){const M=S[0]+p/x*(S[1]-S[0]);if(M===S[0]||M===S[1]){v.push(M);continue}const b=u.tangentAt(M),A=u.tangentAt(v.slice(-1)[0]),B=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],D=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],z=Math.sqrt(B*D);let j;if(z===0)j=Math.PI/2;else{const R=(b.x*A.x+b.y*A.y+b.z*A.z)/z;j=Math.acos(Math.max(-1,Math.min(1,R)))}j<.1||v.push(M)}return d=v.map(p=>u.pointAt(p)),d}}const sm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qE=new Lu(-1,1,1,-1,0,1);class jE extends _n{constructor(){super(),this.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ri([0,2,0,0,2,0],2))}}const KE=new jE;class Uu{constructor(e){this._mesh=new ci(KE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class am extends ds{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fo.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Uu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nh extends ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class ZE extends ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $E{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ye);this._width=i.width,this._height=i.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new am(sm),this.copyPass.material.blending=Nn,this.clock=new Tv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nh!==void 0&&(a instanceof Nh?i=!0:a instanceof ZE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class JE extends ds{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}class ji extends ds{constructor(e,t,i,r){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=r!==void 0?r:[],this.visibleEdgeColor=new Je(1,1,1),this.hiddenEdgeColor=new Je(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new an(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Yp,this.depthMaterial.side=wn,this.depthMaterial.depthPacking=wp,this.depthMaterial.blending=Nn,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=wn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new an(this.resolution.x,this.resolution.y,{type:Wt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new an(s,a,{type:Wt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new an(s,a,{type:Wt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new an(Math.round(s/2),Math.round(a/2),{type:Wt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new an(s,a,{type:Wt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new an(Math.round(s/2),Math.round(a/2),{type:Wt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(s,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=sm;this.copyUniforms=Fo.clone(c.uniforms),this.materialCopy=new Yt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Je,this.oldClearAlpha=1,this._fsQuad=new Uu(null),this.tempPulseColor1=new Je,this.tempPulseColor2=new Je,this.textureMatrix=new Mt;function u(f,h){const d=h.isPerspectiveCamera?"perspective":"orthographic";return f.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,r),this.renderTargetBlurBuffer1.setSize(i,r),this.renderTargetEdgeBuffer1.setSize(i,r),this.separableBlurMaterial1.uniforms.texSize.value.set(i,r),i=Math.round(i/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(i,r),this.renderTargetEdgeBuffer2.setSize(i,r),this.separableBlurMaterial2.uniforms.texSize.value.set(i,r)}render(e,t,i,r,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ji.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function r(s){if(s.isPoints||s.isLine||s.isLine2)e===!0?s.visible=t.get(s):(t.set(s,s.visible),s.visible=e);else if((s.isMesh||s.isSprite)&&!i.has(s)){const a=s.visible;(e===!1||t.get(s)===!0)&&(s.visible=e),t.set(s,a)}}this.renderScene.traverse(r)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Yt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ye(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
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

				}`})}_getEdgeDetectionMaterial(){return new Yt({uniforms:{maskTexture:{value:null},texSize:{value:new Ye(.5,.5)},visibleEdgeColor:{value:new Z(1,1,1)},hiddenEdgeColor:{value:new Z(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}_getSeparableBlurMaterial(e){return new Yt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`,blending:ic,depthTest:!1,depthWrite:!1,transparent:!0})}}ji.BlurDirectionX=new Ye(1,0);ji.BlurDirectionY=new Ye(0,1);const $a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class QE extends ds{constructor(){super(),this.uniforms=Fo.clone($a.uniforms),this.material=new av({name:$a.name,uniforms:this.uniforms,vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader}),this._fsQuad=new Uu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_p?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===gp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const eT={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ye(1/1024,1/512)}},vertexShader:`

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

		}`},tT=new Set(["Max_height","Occupied_voxels","Max_voxels","Potential"]);function $c(n){if(n==null)return"";const e=String(n).trim();if(!e)return"";const t=Number(e);return Number.isFinite(t)?String(t):e}function Fh(n){if(!n)return{};if(Array.isArray(n)){if(n.length>0&&Array.isArray(n[0]))return Object.fromEntries(n);const e={};for(let t=0;t<n.length-1;t+=2){const i=n[t],r=n[t+1];typeof i=="string"&&(e[i]=r)}return e}return typeof n=="object"?{...n}:{}}function nT(n,e){if(e==null)return"";const t=String(e).trim();if(!tT.has(n))return t;const i=Number(t);return Number.isFinite(i)?i:t}function zo(n,e){var s,a,o,l,c;const t=Fh((a=(s=n==null?void 0:n.userData)==null?void 0:s.attributes)==null?void 0:a.userStrings),r={...Fh((c=(l=(o=n==null?void 0:n.userData)==null?void 0:o.attributes)==null?void 0:l.geometry)==null?void 0:c.userStrings),...t};return e.reduce((u,f)=>(u[f]=nT(f,r[f]),u),{})}function iT(n,e,t){let i=n;for(;i;){if(i.isMesh){const r=zo(i,t);if($c(r.Plot))return{mesh:i,metadata:r}}if(i===e)break;i=i.parent}return null}function rT(n,e){const t=$c(e);if(!n||!t)return[];const i=[];return n.traverse(r=>{if(!r.isMesh)return;const s=zo(r,["Plot"]);$c(s.Plot)===t&&i.push(r)}),i}function sT(n,e){return e.reduce((t,i)=>{const r=n.map(s=>zo(s,[i])[i]).find(s=>s!==""&&s!==void 0&&s!==null);return t[i]=r??"",t},{})}function aT(n){const{containerRef:e,config:t,onSelectionChange:i,onFilterBoundsChange:r=()=>{},onViewerError:s}=n,a=new XE;a.setLibraryPath(t.rhinoLibraryPath);const o=new wv,l=new Ye,c=new Z,u=new Z,f=new us,h=new Z(0,0,1),d=new Map,v=Object.fromEntries((t.filterableFields??[]).map(g=>[g,{min:null,max:null}])),S={opacity:.35,transparent:!0};let x=0,p,M,b,A,B,D,z,j,R=null,y=null,U=0,G=null,ee=[];function de(g){i(g)}function Q(){Lt.DEFAULT_UP.set(0,0,1),M=new $_,M.background=new Je("#f1f1f1"),b=new gn(40,1,.1,3e3),b.position.set(-220,-190,150),b.up.copy(h),A=new pE({antialias:!0}),A.setPixelRatio(window.devicePixelRatio),A.outputColorSpace=Mn,B=new $E(A);const g=new JE(M,b);B.addPass(g),D=new ji(new Ye(1,1),M,b),D.visibleEdgeColor.set("#ffe36e"),D.hiddenEdgeColor.set("#c59d16"),D.edgeStrength=4,D.edgeGlow=.15,D.edgeThickness=1.2,D.pulsePeriod=0,B.addPass(D),z=new am(eT),B.addPass(z),B.addPass(new QE),j=new gE(b,A.domElement),j.enableDamping=!0,j.dampingFactor=.08;const I=new qc("#fff3d8",3);I.position.set(-80,-60,150);const Y=new qc("#94b6ff",1.4);Y.position.set(130,80,110);const ie=new Sv("#f1f5ff",.8);M.add(I,Y,ie)}function $(){const g=e.value;if(!g)return!1;const I=g.clientWidth,Y=g.clientHeight;if(!I||!Y)return!1;b.aspect=I/Y,b.updateProjectionMatrix(),A.setSize(I,Y,!1),B.setSize(I,Y);const ie=A.getPixelRatio();return D.setSize(I*ie,Y*ie),z.material.uniforms.resolution.value.set(1/(I*ie),1/(Y*ie)),!0}function ae(g=10){$()||g<=0||(U=window.requestAnimationFrame(()=>{ae(g-1)}))}function J(){j.update(),B.render(),x=window.requestAnimationFrame(J)}function be(g,I=1.2){if(f.makeEmpty(),g.forEach(ke=>f.expandByObject(ke)),f.isEmpty())return;f.getSize(c),f.getCenter(u);const ie=Math.max(c.x,c.y,c.z)/(2*Math.atan(Math.PI*b.fov/360)),K=ie/b.aspect,De=I*Math.max(ie,K),xe=j.target.clone().sub(b.position).normalize().multiplyScalar(De);b.up.copy(h),j.target.copy(u),b.near=Math.max(De/100,.1),b.far=De*100,b.updateProjectionMatrix(),b.position.copy(j.target).sub(xe),j.update()}function Ee(g){g.transparent=S.transparent,g.opacity=S.opacity,g.depthWrite=!S.transparent,g.needsUpdate=!0}function Ve(g=y){g&&g.traverse(I=>{if(I.isMesh){if(Array.isArray(I.material)){I.material.forEach(Ee);return}Ee(I.material)}})}function We(g){if(g.isMesh){if(Array.isArray(g.material)){g.material=g.material.map(I=>I.clone()),g.material.forEach(Ee);return}g.material=g.material.clone(),Ee(g.material)}}function Qe(g){if(g===""||g===null||g===void 0)return null;const I=Number(g);return Number.isFinite(I)?I:null}function st(){return Object.fromEntries((t.filterableFields??[]).map(g=>{var xe;const I=(xe=t.filterBounds)==null?void 0:xe[g];if(I)return[g,{min:I.min,max:I.max,step:I.step??1}];const Y=[];if(d.forEach(ke=>{const Ne=Number(ke[g]);Number.isFinite(Ne)&&Y.push(Ne)}),!Y.length)return[g,{min:0,max:1,step:1}];const ie=Math.min(...Y),K=Math.max(...Y),De=Y.some(ke=>!Number.isInteger(ke))?.1:1;return[g,{min:ie,max:K,step:De}]}))}function tt(g){const I=d.get(g);return I?Object.entries(v).every(([Y,ie])=>{if(ie.min===null&&ie.max===null)return!0;const K=Number(I[Y]);return!(!Number.isFinite(K)||ie.min!==null&&K<ie.min||ie.max!==null&&K>ie.max)}):!0}function ne(){y&&y.traverse(g=>{g.isMesh&&(g.visible=tt(g))})}function V(g,I,Y){var De;const ie=(De=g==null?void 0:g.userData)==null?void 0:De.layers;if(!g||!Array.isArray(ie)||!I)return;const K=new Je(Y);g.traverse(xe=>{var Me,we;if(!xe.isMesh)return;const ke=(we=(Me=xe.userData)==null?void 0:Me.attributes)==null?void 0:we.layerIndex;if(typeof ke!="number")return;const Ne=ie[ke];if(!(!Ne||Ne.name!==I)){if(Array.isArray(xe.material)){xe.material=xe.material.map(Ue=>{const Ge=Ue.clone();return Ge.color.copy(K),Ge});return}xe.material=xe.material.clone(),xe.material.color.copy(K)}})}function ue(){D.selectedObjects=[]}function pe(g){ue(),D.selectedObjects=g}function ge(){ue(),de({status:"idle",metadata:null,voxelPath:null,message:""})}function Le(g){return new Promise((I,Y)=>{a.load(g,I,void 0,Y)})}function L(){G=null}function N(){if(!ee.length||(f.makeEmpty(),ee.forEach(Y=>f.expandByObject(Y)),f.isEmpty()))return;f.getSize(c),f.getCenter(u);const g=Math.max(c.x,c.y,c.z),I=Math.max(g*.95,120);j.target.copy(u),b.up.set(0,1,0),b.position.set(u.x,u.y,u.z+I),b.near=Math.max(I/100,.1),b.far=I*100,b.updateProjectionMatrix(),j.update()}function W(){ee.length&&be(ee,.5)}function w(g){S.transparent=g,S.opacity=g?.35:.92,Ve()}function oe(g){if(!G)return 0;const I=g.clientX-G.startX,Y=g.clientY-G.startY;return Math.hypot(I,Y)}function re(g){g.button===0&&(G={startTime:performance.now(),startX:g.clientX,startY:g.clientY,moved:!1})}function Te(g){G&&oe(g)>(t.clickSelectionMaxMovementPx??6)&&(G.moved=!0)}function ce(g){if(!G||g.button!==0){L();return}const I=performance.now()-G.startTime,Y=G.moved||oe(g)>(t.clickSelectionMaxMovementPx??6);L(),!(Y||I>(t.clickSelectionMaxDurationMs??180))&&se(g)}function _e(g){if(!y)throw new Error("The voxel metadata model is not loaded.");if(!String(g??"").trim())throw new Error("The selected block is missing a Plot value.");const I=rT(y,g).filter(Y=>Y.visible&&tt(Y));if(!I.length)throw new Error(`No voxel metadata was found for Plot ${g}.`);return{voxelPath:t.sunVoxelModelPath,metadata:sT(I,t.requiredMetadata),matchingMeshes:I}}async function se(g){if(!y)return;const I=A.domElement.getBoundingClientRect();l.x=(g.clientX-I.left)/I.width*2-1,l.y=-((g.clientY-I.top)/I.height)*2+1,o.setFromCamera(l,b);const Y=o.intersectObject(y,!0).filter(K=>K.object.visible);if(!Y.length){ge();return}const ie=iT(Y[0].object,y,t.selectionMetadata);if(!ie){de({status:"error",metadata:null,voxelPath:null,message:"The clicked object does not expose Plot metadata."});return}de({status:"loading",metadata:null,voxelPath:null,message:"Loading matching voxel metadata."});try{const{voxelPath:K,metadata:De,matchingMeshes:xe}=_e(ie.metadata.Plot);pe(xe),be(xe,1.35),de({status:"ready",metadata:De,voxelPath:K,message:""})}catch(K){de({status:"error",metadata:ie.metadata,voxelPath:null,message:K instanceof Error?K.message:"Unable to load the matching voxel metadata."})}}async function Ae(){de({status:"loading",metadata:null,voxelPath:null,message:"Loading context and voxel models."});try{[R,y]=await Promise.all([t.staticContextModelPath?Le(t.staticContextModelPath):Promise.resolve(null),Le(t.sunVoxelModelPath)]),V(R,"Sunspots","#ffd84d"),y.traverse(I=>{We(I),I.isMesh&&d.set(I,zo(I,t.requiredMetadata))}),r(st()),y.visible=!0,ne(),R&&M.add(R),M.add(y),ee=R?[R,y]:[y],be(ee,.5),de({status:"idle",metadata:null,voxelPath:null,message:""})}catch(g){const I=g instanceof Error?g.message:"Unable to load the Rhino models.";de({status:"error",metadata:null,voxelPath:null,message:`Failed to load ${t.staticContextModelPath} or ${t.sunVoxelModelPath}. ${I}`}),s(I)}}function T(g){(t.filterableFields??[]).forEach(I=>{const Y=(g==null?void 0:g[I])??{};v[I]={min:Qe(Y.min),max:Qe(Y.max)}}),ue(),ne()}return Ed(async()=>{try{Q();const g=e.value;if(!g)throw new Error("The viewer container did not mount.");g.appendChild(A.domElement),A.domElement.addEventListener("pointerdown",re),A.domElement.addEventListener("pointermove",Te),A.domElement.addEventListener("pointerup",ce),A.domElement.addEventListener("pointercancel",L),A.domElement.addEventListener("pointerleave",L),p=new ResizeObserver(()=>$()),p.observe(g),ae(),J(),await Ae()}catch(g){const I=g instanceof Error?g.message:"Unable to initialize the viewer.";de({status:"error",metadata:null,voxelPath:null,message:I}),s(I)}}),Td(()=>{window.cancelAnimationFrame(x),window.cancelAnimationFrame(U),A==null||A.domElement.removeEventListener("pointerdown",re),A==null||A.domElement.removeEventListener("pointermove",Te),A==null||A.domElement.removeEventListener("pointerup",ce),A==null||A.domElement.removeEventListener("pointercancel",L),A==null||A.domElement.removeEventListener("pointerleave",L),p==null||p.disconnect(),ue(),L(),j==null||j.dispose(),B==null||B.dispose(),a.dispose(),A==null||A.dispose()}),{resetView:W,setTopView:N,setVoxelFilters:T,setVoxelTransparency:w}}const oT={class:"project-layout project-layout--viewer-only"},lT={ref:"container",class:"project-layout__viewer"},cT={key:0,class:"viewer-loading",role:"status","aria-live":"polite"},uT={class:"viewer-loading__label"},fT={key:1,class:"viewer-note"},hT={class:"viewer-note__section"},dT={class:"metadata-list metadata-list--compact"},pT={key:2,class:"viewer-bottom-filter"},mT=["aria-label"],gT={class:"viewer-bottom-filter__header"},xT={class:"viewer-bottom-filter__label-row"},_T={class:"viewer-bottom-filter__label"},vT={class:"viewer-bottom-filter__info"},ST=["aria-expanded"],bT={key:0,id:"potential-filter-info",class:"viewer-bottom-filter__info-popover",role:"note"},yT={class:"range-slider__values"},MT={class:"range-slider range-slider--floating"},ET=["min","max","step","value"],TT=["min","max","step","value"],wT={class:"filter-drawer","aria-label":"Filters"},AT={class:"filter-list"},CT={class:"filter-group__header"},RT={class:"filter-group__label"},PT={class:"range-slider__values"},DT={class:"range-slider"},LT=["min","max","step","value","onInput"],IT=["min","max","step","value","onInput"],Oh="Potential",UT={__name:"SolarScapeView",setup(n){const e=t0("container"),t=Ja(!1),i=Ja(!1),r=Ja(!1),s=pi.filterBounds??{},a=mr(Object.fromEntries(pi.filterableFields.map(y=>{const U=s[y]??{min:0,max:100,step:1};return[y,{min:U.min,max:U.max,step:U.step??1}]}))),o=mr(Object.fromEntries(pi.filterableFields.map(y=>{const U=s[y]??{min:0,max:100};return[y,{min:U.min,max:U.max}]}))),l=cn(()=>pi.requiredMetadata.map(y=>({key:y,label:pi.fieldLabels[y]??y}))),c=cn(()=>pi.filterableFields.map(y=>({key:y,label:pi.fieldLabels[y]??y}))),u=cn(()=>c.value.find(y=>y.key===Oh)??null),f=cn(()=>c.value.filter(y=>y.key!==Oh)),h=mr({status:"idle",metadata:null,voxelPath:null,message:""});function d(y){h.status=y.status,h.metadata=y.metadata,h.voxelPath=y.voxelPath,h.message=y.message}function v(y){h.status="error",h.metadata=null,h.voxelPath=null,h.message=y}function S(y){c.value.forEach(({key:U})=>{y[U]&&(a[U].min=y[U].min,a[U].max=y[U].max,a[U].step=y[U].step)}),A(),i.value=!0}const x=aT({containerRef:e,config:pi,onSelectionChange:d,onFilterBoundsChange:S,onViewerError:v});Os(o,y=>{i.value&&x.setVoxelFilters(y)},{deep:!0});function p(){t.value=!t.value}function M(){t.value=!1}function b(){r.value=!r.value}function A(){c.value.forEach(({key:y})=>{o[y].min=a[y].min,o[y].max=a[y].max})}function B(y,U){const G=Number(U.target.value);o[y].min=Math.min(G,o[y].max)}function D(y,U){const G=Number(U.target.value);o[y].max=Math.max(G,o[y].min)}function z(y){const U=a[y],G=Math.max(U.max-U.min,1),ee=(o[y].min-U.min)/G*100,de=100-(o[y].max-U.min)/G*100;return{left:`${ee}%`,right:`${de}%`}}function j(y,U,G=1){var $;if(U==null||U==="")return"Missing";const ee=Number(U),de=(($=pi.valuePrefixes)==null?void 0:$[y])??"";if(!Number.isFinite(ee))return`${de}${String(U)}`;const Q=G<1?ee.toFixed(1):String(Math.round(ee));return`${de}${Q}`}function R(y,U,G){return Number.isFinite(U)?j(y,U,G):""}return(y,U)=>(rn(),mn("main",oT,[Xe("section",lT,[h.status==="loading"?(rn(),mn("div",cT,[U[2]||(U[2]=Xe("div",{class:"viewer-loading__sun","aria-hidden":"true"},[Xe("span",{class:"viewer-loading__core"}),Xe("span",{class:"viewer-loading__rays"})],-1)),Xe("p",uT,yn(h.message||"Loading scene..."),1)])):Ss("",!0),Xe("button",{type:"button",class:"filter-trigger",onClick:p,"aria-label":"Open filters"},[...U[3]||(U[3]=[Xe("span",{class:"filter-trigger__icon","aria-hidden":"true"},[Xe("span"),Xe("span"),Xe("span")],-1),Xe("span",{class:"filter-trigger__label"},"Filters",-1)])]),h.status==="ready"?(rn(),mn("div",fT,[Xe("section",hT,[U[4]||(U[4]=Xe("h2",{class:"viewer-note__title"},"Solar envelope info",-1)),Xe("dl",dT,[(rn(!0),mn(Tn,null,ho(l.value,G=>{var ee;return rn(),mn("div",{key:G.key,class:"metadata-list__row"},[Xe("dt",null,yn(G.label),1),Xe("dd",null,yn(j(G.key,(ee=h.metadata)==null?void 0:ee[G.key])),1)])}),128))])])])):Ss("",!0),u.value?(rn(),mn("div",pT,[Xe("section",{class:"viewer-bottom-filter__card","aria-label":`${u.value.label} filter`},[Xe("div",gT,[Xe("div",xT,[Xe("label",_T,yn(u.value.label),1),Xe("div",vT,[Xe("button",{type:"button",class:"viewer-bottom-filter__info-button","aria-expanded":r.value?"true":"false","aria-controls":"potential-filter-info","aria-label":"Explain potential",onClick:b}," i ",8,ST),r.value?(rn(),mn("div",bT," Ratio between the maximum buildable volume allowed by sun regulations and the existing built volume ")):Ss("",!0)])]),Xe("div",yT,[Xe("span",null,yn(R(u.value.key,o[u.value.key].min,a[u.value.key].step)),1),Xe("span",null,yn(R(u.value.key,o[u.value.key].max,a[u.value.key].step)),1)])]),Xe("div",MT,[U[5]||(U[5]=Xe("div",{class:"range-slider__track"},null,-1)),Xe("div",{class:"range-slider__active",style:Ys(z(u.value.key))},null,4),Xe("input",{class:"range-slider__input",type:"range",min:a[u.value.key].min,max:a[u.value.key].max,step:a[u.value.key].step,value:o[u.value.key].min,onInput:U[0]||(U[0]=G=>B(u.value.key,G))},null,40,ET),Xe("input",{class:"range-slider__input",type:"range",min:a[u.value.key].min,max:a[u.value.key].max,step:a[u.value.key].step,value:o[u.value.key].max,onInput:U[1]||(U[1]=G=>D(u.value.key,G))},null,40,TT)])],8,mT)])):Ss("",!0),t.value?(rn(),mn("div",{key:3,class:"filter-overlay",onClick:yg(M,["self"])},[Xe("aside",wT,[Xe("div",{class:"filter-drawer__header"},[U[6]||(U[6]=Xe("div",{class:"filter-drawer__heading"},[Xe("p",{class:"filter-drawer__eyebrow"},"Voxel filters"),Xe("h2",{class:"filter-drawer__title"},"Refine the visible range")],-1)),Xe("button",{type:"button",class:"filter-close",onClick:M,"aria-label":"Close filters"}," Close ")]),U[8]||(U[8]=Xe("p",{class:"filter-drawer__copy"},"Adjust both handles to keep only the values you want visible in the scene.",-1)),Xe("div",AT,[(rn(!0),mn(Tn,null,ho(f.value,G=>(rn(),mn("section",{key:G.key,class:"filter-group"},[Xe("div",CT,[Xe("label",RT,yn(G.label),1),Xe("div",PT,[Xe("span",null,yn(R(G.key,o[G.key].min,a[G.key].step)),1),Xe("span",null,yn(R(G.key,o[G.key].max,a[G.key].step)),1)])]),Xe("div",DT,[U[7]||(U[7]=Xe("div",{class:"range-slider__track"},null,-1)),Xe("div",{class:"range-slider__active",style:Ys(z(G.key))},null,4),Xe("input",{class:"range-slider__input",type:"range",min:a[G.key].min,max:a[G.key].max,step:a[G.key].step,value:o[G.key].min,onInput:ee=>B(G.key,ee)},null,40,LT),Xe("input",{class:"range-slider__input",type:"range",min:a[G.key].min,max:a[G.key].max,step:a[G.key].step,value:o[G.key].max,onInput:ee=>D(G.key,ee)},null,40,IT)])]))),128))]),Xe("div",{class:"filter-drawer__actions"},[Xe("button",{type:"button",class:"filter-reset",onClick:A},"Reset")])])])):Ss("",!0)],512)]))}},NT=Lx({history:hx("/Solar_Scape/"),routes:[{path:"/",name:"home",component:zx},{path:"/projects/solar-scape",name:"solar-scape",component:UT}]});Tg(Ox).use(NT).mount("#app");
