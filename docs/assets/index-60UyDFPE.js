(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $c(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},jr=[],ti=()=>{},Fh=()=>!1,yo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Jc=n=>n.startsWith("onUpdate:"),jt=Object.assign,Qc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sm=Object.prototype.hasOwnProperty,xt=(n,e)=>sm.call(n,e),rt=Array.isArray,Kr=n=>ra(n)==="[object Map]",Oh=n=>ra(n)==="[object Set]",Uu=n=>ra(n)==="[object Date]",ot=n=>typeof n=="function",Nt=n=>typeof n=="string",si=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Bh=n=>(vt(n)||ot(n))&&ot(n.then)&&ot(n.catch),zh=Object.prototype.toString,ra=n=>zh.call(n),am=n=>ra(n).slice(8,-1),kh=n=>ra(n)==="[object Object]",eu=n=>Nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Is=$c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},om=/-\w/g,kn=Mo(n=>n.replace(om,e=>e.slice(1).toUpperCase())),lm=/\B([A-Z])/g,vr=Mo(n=>n.replace(lm,"-$1").toLowerCase()),Vh=Mo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ho=Mo(n=>n?`on${Vh(n)}`:""),$n=(n,e)=>!Object.is(n,e),Go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Hh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},cm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Nu;const Eo=()=>Nu||(Nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function To(n){if(rt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Nt(i)?dm(i):To(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Nt(n)||vt(n))return n}const um=/;(?![^(]*\))/g,fm=/:([^]+)/,hm=/\/\*[^]*?\*\//g;function dm(n){const e={};return n.replace(hm,"").split(um).forEach(t=>{if(t){const i=t.split(fm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ao(n){let e="";if(Nt(n))e=n;else if(rt(n))for(let t=0;t<n.length;t++){const i=Ao(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mm=$c(pm);function Gh(n){return!!n||n===""}function gm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=tu(n[i],e[i]);return t}function tu(n,e){if(n===e)return!0;let t=Uu(n),i=Uu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=si(n),i=si(e),t||i)return n===e;if(t=rt(n),i=rt(e),t||i)return t&&i?gm(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!tu(n[a],e[a]))return!1}}return String(n)===String(e)}const Wh=n=>!!(n&&n.__v_isRef===!0),qn=n=>Nt(n)?n:n==null?"":rt(n)||vt(n)&&(n.toString===zh||!ot(n.toString))?Wh(n)?qn(n.value):JSON.stringify(n,Xh,2):String(n),Xh=(n,e)=>Wh(e)?Xh(n,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Wo(i,s)+" =>"]=r,t),{})}:Oh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wo(t))}:si(e)?Wo(e):vt(e)&&!rt(e)&&!kh(e)?String(e):e,Wo=(n,e="")=>{var t;return si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class xm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){++this._on===1&&(this.prevScope=hn,hn=this)}off(){this._on>0&&--this._on===0&&(hn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function _m(){return hn}let wt;const Xo=new WeakSet;class Yh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xo.has(this)&&(Xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),Kh(this);const e=wt,t=Vn;wt=this,Vn=!0;try{return this.fn()}finally{Zh(this),wt=e,Vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ru(e);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let qh=0,Us,Ns;function jh(n,e=!1){if(n.flags|=8,e){n.next=Ns,Ns=n;return}n.next=Us,Us=n}function nu(){qh++}function iu(){if(--qh>0)return;if(Ns){let e=Ns;for(Ns=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Us;){let e=Us;for(Us=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Kh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ru(i),vm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function kl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($h(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function $h(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xs)||(n.globalVersion=Xs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!kl(n))))return;n.flags|=2;const e=n.dep,t=wt,i=Vn;wt=n,Vn=!0;try{Kh(n);const r=n.fn(n._value);(e.version===0||$n(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{wt=t,Vn=i,Zh(n),n.flags&=-3}}function ru(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ru(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function vm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vn=!0;const Jh=[];function Ci(){Jh.push(Vn),Vn=!1}function Ri(){const n=Jh.pop();Vn=n===void 0?!0:n}function Fu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let Xs=0;class Sm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!Vn||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new Sm(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,Qh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,Xs++,this.notify(e)}notify(e){nu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{iu()}}}function Qh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Qh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Vl=new WeakMap,pr=Symbol(""),Hl=Symbol(""),Ys=Symbol("");function $t(n,e,t){if(Vn&&wt){let i=Vl.get(n);i||Vl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new su),r.map=i,r.key=t),r.track()}}function Ti(n,e,t,i,r,s){const a=Vl.get(n);if(!a){Xs++;return}const o=l=>{l&&l.trigger()};if(nu(),e==="clear")a.forEach(o);else{const l=rt(n),c=l&&eu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Ys||!si(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Ys)),e){case"add":l?c&&o(a.get("length")):(o(a.get(pr)),Kr(n)&&o(a.get(Hl)));break;case"delete":l||(o(a.get(pr)),Kr(n)&&o(a.get(Hl)));break;case"set":Kr(n)&&o(a.get(pr));break}}iu()}function Mr(n){const e=gt(n);return e===n?e:($t(e,"iterate",Ys),In(n)?e:e.map(Hn))}function wo(n){return $t(n=gt(n),"iterate",Ys),n}function jn(n,e){return Pi(n)?ts(gr(n)?Hn(e):e):Hn(e)}const bm={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return Mr(this).concat(...n.map(e=>rt(e)?Mr(e):e))},entries(){return Yo(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,e){return hi(this,"every",n,e,void 0,arguments)},filter(n,e){return hi(this,"filter",n,e,t=>t.map(i=>jn(this,i)),arguments)},find(n,e){return hi(this,"find",n,e,t=>jn(this,t),arguments)},findIndex(n,e){return hi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hi(this,"findLast",n,e,t=>jn(this,t),arguments)},findLastIndex(n,e){return hi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hi(this,"forEach",n,e,void 0,arguments)},includes(...n){return qo(this,"includes",n)},indexOf(...n){return qo(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return qo(this,"lastIndexOf",n)},map(n,e){return hi(this,"map",n,e,void 0,arguments)},pop(){return _s(this,"pop")},push(...n){return _s(this,"push",n)},reduce(n,...e){return Ou(this,"reduce",n,e)},reduceRight(n,...e){return Ou(this,"reduceRight",n,e)},shift(){return _s(this,"shift")},some(n,e){return hi(this,"some",n,e,void 0,arguments)},splice(...n){return _s(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return _s(this,"unshift",n)},values(){return Yo(this,"values",n=>jn(this,n))}};function Yo(n,e,t){const i=wo(n),r=i[e]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const ym=Array.prototype;function hi(n,e,t,i,r,s){const a=wo(n),o=a!==n&&!In(n),l=a[e];if(l!==ym[e]){const f=l.apply(n,s);return o?Hn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,jn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ou(n,e,t,i){const r=wo(n),s=r!==n&&!In(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=jn(n,c)),t.call(this,c,jn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?jn(n,l):l}function qo(n,e,t){const i=gt(n);$t(i,"iterate",Ys);const r=i[e](...t);return(r===-1||r===!1)&&lu(t[0])?(t[0]=gt(t[0]),i[e](...t)):r}function _s(n,e,t=[]){Ci(),nu();const i=gt(n)[e].apply(n,t);return iu(),Ri(),i}const Mm=$c("__proto__,__v_isRef,__isVue"),ed=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(si));function Em(n){si(n)||(n=String(n));const e=gt(this);return $t(e,"has",n),e.hasOwnProperty(n)}class td{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Um:sd:s?rd:id).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=rt(e);if(!r){let l;if(a&&(l=bm[t]))return l;if(t==="hasOwnProperty")return Em}const o=Reflect.get(e,t,Qt(e)?e:i);if((si(t)?ed.has(t):Mm(t))||(r||$t(e,"get",t),s))return o;if(Qt(o)){const l=a&&eu(t)?o:o.value;return r&&vt(l)?Wl(l):l}return vt(o)?r?Wl(o):mr(o):o}}class nd extends td{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=rt(e)&&eu(t);if(!this._isShallow){const c=Pi(s);if(!In(i)&&!Pi(i)&&(s=gt(s),i=gt(i)),!a&&Qt(s)&&!Qt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:xt(e,t),l=Reflect.set(e,t,i,Qt(e)?e:r);return e===gt(r)&&(o?$n(i,s)&&Ti(e,"set",t,i):Ti(e,"add",t,i)),l}deleteProperty(e,t){const i=xt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ti(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!si(t)||!ed.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",rt(e)?"length":pr),Reflect.ownKeys(e)}}class Tm extends td{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Am=new nd,wm=new Tm,Cm=new nd(!0);const Gl=n=>n,ma=n=>Reflect.getPrototypeOf(n);function Rm(n,e,t){return function(...i){const r=this.__v_raw,s=gt(r),a=Kr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Gl:e?ts:Hn;return!e&&$t(s,"iterate",l?Hl:pr),jt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function ga(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Pm(n,e){const t={get(r){const s=this.__v_raw,a=gt(s),o=gt(r);n||($n(r,o)&&$t(a,"get",r),$t(a,"get",o));const{has:l}=ma(a),c=e?Gl:n?ts:Hn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&$t(gt(r),"iterate",pr),r.size},has(r){const s=this.__v_raw,a=gt(s),o=gt(r);return n||($n(r,o)&&$t(a,"has",r),$t(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=gt(o),c=e?Gl:n?ts:Hn;return!n&&$t(l,"iterate",pr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return jt(t,n?{add:ga("add"),set:ga("set"),delete:ga("delete"),clear:ga("clear")}:{add(r){const s=gt(this),a=ma(s),o=gt(r),l=!e&&!In(r)&&!Pi(r)?o:r;return a.has.call(s,l)||$n(r,l)&&a.has.call(s,r)||$n(o,l)&&a.has.call(s,o)||(s.add(l),Ti(s,"add",l,l)),this},set(r,s){!e&&!In(s)&&!Pi(s)&&(s=gt(s));const a=gt(this),{has:o,get:l}=ma(a);let c=o.call(a,r);c||(r=gt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?$n(s,u)&&Ti(a,"set",r,s):Ti(a,"add",r,s),this},delete(r){const s=gt(this),{has:a,get:o}=ma(s);let l=a.call(s,r);l||(r=gt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ti(s,"delete",r,void 0),c},clear(){const r=gt(this),s=r.size!==0,a=r.clear();return s&&Ti(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Rm(r,n,e)}),t}function au(n,e){const t=Pm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(xt(t,r)&&r in i?t:i,r,s)}const Dm={get:au(!1,!1)},Lm={get:au(!1,!0)},Im={get:au(!0,!1)};const id=new WeakMap,rd=new WeakMap,sd=new WeakMap,Um=new WeakMap;function Nm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fm(n){return n.__v_skip||!Object.isExtensible(n)?0:Nm(am(n))}function mr(n){return Pi(n)?n:ou(n,!1,Am,Dm,id)}function ad(n){return ou(n,!1,Cm,Lm,rd)}function Wl(n){return ou(n,!0,wm,Im,sd)}function ou(n,e,t,i,r){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Fm(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function gr(n){return Pi(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function Pi(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function lu(n){return n?!!n.__v_raw:!1}function gt(n){const e=n&&n.__v_raw;return e?gt(e):n}function Om(n){return!xt(n,"__v_skip")&&Object.isExtensible(n)&&Hh(n,"__v_skip",!0),n}const Hn=n=>vt(n)?mr(n):n,ts=n=>vt(n)?Wl(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function Xl(n){return ld(n,!1)}function od(n){return ld(n,!0)}function ld(n,e){return Qt(n)?n:new Bm(n,e)}class Bm{constructor(e,t){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:gt(e),this._value=t?e:Hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||Pi(e);e=i?e:gt(e),$n(e,t)&&(this._rawValue=e,this._value=i?e:Hn(e),this.dep.trigger())}}function ni(n){return Qt(n)?n.value:n}const zm={get:(n,e,t)=>e==="__v_raw"?n:ni(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Qt(r)&&!Qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function cd(n){return gr(n)?n:new Proxy(n,zm)}class km{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return jh(this,!0),!0}get value(){const e=this.dep.track();return $h(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vm(n,e,t=!1){let i,r;return ot(n)?i=n:(i=n.get,r=n.set),new km(i,r,t)}const xa={},so=new WeakMap;let ur;function Hm(n,e=!1,t=ur){if(t){let i=so.get(t);i||so.set(t,i=[]),i.push(n)}}function Gm(n,e,t=Tt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=P=>r?P:In(P)||r===!1||r===0?Gi(P,1):Gi(P);let u,f,h,d,_=!1,v=!1;if(Qt(n)?(f=()=>n.value,_=In(n)):gr(n)?(f=()=>c(n),_=!0):rt(n)?(v=!0,_=n.some(P=>gr(P)||In(P)),f=()=>n.map(P=>{if(Qt(P))return P.value;if(gr(P))return c(P);if(ot(P))return l?l(P,2):P()})):ot(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ci();try{h()}finally{Ri()}}const P=ur;ur=u;try{return l?l(n,3,[d]):n(d)}finally{ur=P}}:f=ti,e&&r){const P=f,B=r===!0?1/0:r;f=()=>Gi(P(),B)}const g=_m(),p=()=>{u.stop(),g&&g.active&&Qc(g.effects,u)};if(s&&e){const P=e;e=(...B)=>{P(...B),p()}}let M=v?new Array(n.length).fill(xa):xa;const y=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const B=u.run();if(r||_||(v?B.some((C,L)=>$n(C,M[L])):$n(B,M))){h&&h();const C=ur;ur=u;try{const L=[B,M===xa?void 0:v&&M[0]===xa?[]:M,d];M=B,l?l(e,3,L):e(...L)}finally{ur=C}}}else u.run()};return o&&o(y),u=new Yh(f),u.scheduler=a?()=>a(y,!1):y,d=P=>Hm(P,!1,u),h=u.onStop=()=>{const P=so.get(u);if(P){if(l)l(P,4);else for(const B of P)B();so.delete(u)}},e?i?y(!0):M=u.run():a?a(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Gi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))Gi(n.value,e,t);else if(rt(n))for(let i=0;i<n.length;i++)Gi(n[i],e,t);else if(Oh(n)||Kr(n))n.forEach(i=>{Gi(i,e,t)});else if(kh(n)){for(const i in n)Gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sa(n,e,t,i){try{return i?n(...i):n()}catch(r){Co(r,e,t)}}function ai(n,e,t,i){if(ot(n)){const r=sa(n,e,t,i);return r&&Bh(r)&&r.catch(s=>{Co(s,e,t)}),r}if(rt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ai(n[s],e,t,i));return r}}function Co(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Tt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Ci(),sa(s,null,10,[n,l,c]),Ri();return}}Wm(n,t,r,i,a)}function Wm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const an=[];let Yn=-1;const Zr=[];let ki=null,Gr=0;const ud=Promise.resolve();let ao=null;function fd(n){const e=ao||ud;return n?e.then(this?n.bind(this):n):e}function Xm(n){let e=Yn+1,t=an.length;for(;e<t;){const i=e+t>>>1,r=an[i],s=qs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function cu(n){if(!(n.flags&1)){const e=qs(n),t=an[an.length-1];!t||!(n.flags&2)&&e>=qs(t)?an.push(n):an.splice(Xm(e),0,n),n.flags|=1,hd()}}function hd(){ao||(ao=ud.then(pd))}function Ym(n){rt(n)?Zr.push(...n):ki&&n.id===-1?ki.splice(Gr+1,0,n):n.flags&1||(Zr.push(n),n.flags|=1),hd()}function Bu(n,e,t=Yn+1){for(;t<an.length;t++){const i=an[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dd(n){if(Zr.length){const e=[...new Set(Zr)].sort((t,i)=>qs(t)-qs(i));if(Zr.length=0,ki){ki.push(...e);return}for(ki=e,Gr=0;Gr<ki.length;Gr++){const t=ki[Gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ki=null,Gr=0}}const qs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function pd(n){try{for(Yn=0;Yn<an.length;Yn++){const e=an[Yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yn<an.length;Yn++){const e=an[Yn];e&&(e.flags&=-2)}Yn=-1,an.length=0,dd(),ao=null,(an.length||Zr.length)&&pd()}}let Qn=null,md=null;function oo(n){const e=Qn;return Qn=n,md=n&&n.type.__scopeId||null,e}function uu(n,e=Qn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&fo(-1);const s=oo(e);let a;try{a=n(...r)}finally{oo(s),i._d&&fo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function nr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ci(),ai(l,t,8,[n.el,o,n,e]),Ri())}}function Za(n,e){if(on){let t=on.provides;const i=on.parent&&on.parent.provides;i===t&&(t=on.provides=Object.create(i)),t[n]=e}}function ii(n,e,t=!1){const i=Wd();if(i||$r){let r=$r?$r._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ot(e)?e.call(i&&i.proxy):e}}const qm=Symbol.for("v-scx"),jm=()=>ii(qm);function Fs(n,e,t){return gd(n,e,t)}function gd(n,e,t=Tt){const{immediate:i,deep:r,flush:s,once:a}=t,o=jt({},t),l=e&&i||!e&&s!=="post";let c;if(Ks){if(s==="sync"){const d=jm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ti,d.resume=ti,d.pause=ti,d}}const u=on;o.call=(d,_,v)=>ai(d,u,_,v);let f=!1;s==="post"?o.scheduler=d=>{fn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():cu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Gm(n,e,o);return Ks&&(c?c.push(h):l&&h()),h}function Km(n,e,t){const i=this.proxy,r=Nt(n)?n.includes(".")?xd(i,n):()=>i[n]:n.bind(i,i);let s;ot(e)?s=e:(s=e.handler,t=e);const a=aa(this),o=gd(r,s.bind(i),t);return a(),o}function xd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Zm=Symbol("_vte"),$m=n=>n.__isTeleport,Jm=Symbol("_leaveCb");function fu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function _d(n,e){return ot(n)?jt({name:n.name},e,{setup:n}):n}function vd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Qm(n){const e=Wd(),t=od(null);if(e){const r=e.refs===Tt?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function zu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const lo=new WeakMap;function Os(n,e,t,i,r=!1){if(rt(n)){n.forEach((v,g)=>Os(v,e&&(rt(e)?e[g]:e),t,i,r));return}if(Bs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Os(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?mu(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Tt?o.refs={}:o.refs,f=o.setupState,h=gt(f),d=f===Tt?Fh:v=>zu(u,v)?!1:xt(h,v),_=(v,g)=>!(g&&zu(u,g));if(c!=null&&c!==l){if(ku(e),Nt(c))u[c]=null,d(c)&&(f[c]=null);else if(Qt(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(ot(l))sa(l,o,12,[a,u]);else{const v=Nt(l),g=Qt(l);if(v||g){const p=()=>{if(n.f){const M=v?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)rt(M)&&Qc(M,s);else if(rt(M))M.includes(s)||M.push(s);else if(v)u[l]=[s],d(l)&&(f[l]=u[l]);else{const y=[s];_(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else v?(u[l]=a,d(l)&&(f[l]=a)):g&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{p(),lo.delete(n)};M.id=-1,lo.set(n,M),fn(M,t)}else ku(n),p()}}}function ku(n){const e=lo.get(n);e&&(e.flags|=8,lo.delete(n))}Eo().requestIdleCallback;Eo().cancelIdleCallback;const Bs=n=>!!n.type.__asyncLoader,Sd=n=>n.type.__isKeepAlive;function e0(n,e){bd(n,"a",e)}function t0(n,e){bd(n,"da",e)}function bd(n,e,t=on){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ro(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Sd(r.parent.vnode)&&n0(i,e,t,r),r=r.parent}}function n0(n,e,t,i){const r=Ro(e,n,i,!0);Ed(()=>{Qc(i[e],r)},t)}function Ro(n,e,t=on,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Ci();const o=aa(t),l=ai(e,t,n,a);return o(),Ri(),l});return i?r.unshift(s):r.push(s),s}}const Di=n=>(e,t=on)=>{(!Ks||n==="sp")&&Ro(n,(...i)=>e(...i),t)},i0=Di("bm"),yd=Di("m"),r0=Di("bu"),s0=Di("u"),Md=Di("bum"),Ed=Di("um"),a0=Di("sp"),o0=Di("rtg"),l0=Di("rtc");function c0(n,e=on){Ro("ec",n,e)}const u0=Symbol.for("v-ndc");function co(n,e,t,i){let r;const s=t,a=rt(n);if(a||Nt(n)){const o=a&&gr(n);let l=!1,c=!1;o&&(l=!In(n),c=Pi(n),n=wo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ts(Hn(n[u])):Hn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(vt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Yl=n=>n?Xd(n)?mu(n):Yl(n.parent):null,zs=jt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yl(n.parent),$root:n=>Yl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ad(n),$forceUpdate:n=>n.f||(n.f=()=>{cu(n.update)}),$nextTick:n=>n.n||(n.n=fd.bind(n.proxy)),$watch:n=>Km.bind(n)}),jo=(n,e)=>n!==Tt&&!n.__isScriptSetup&&xt(n,e),f0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(jo(i,e))return a[e]=1,i[e];if(r!==Tt&&xt(r,e))return a[e]=2,r[e];if(xt(s,e))return a[e]=3,s[e];if(t!==Tt&&xt(t,e))return a[e]=4,t[e];ql&&(a[e]=0)}}const c=zs[e];let u,f;if(c)return e==="$attrs"&&$t(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Tt&&xt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,xt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return jo(r,e)?(r[e]=t,!0):i!==Tt&&xt(i,e)?(i[e]=t,!0):xt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Tt&&o[0]!=="$"&&xt(n,o)||jo(e,o)||xt(s,o)||xt(i,o)||xt(zs,o)||xt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Vu(n){return rt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ql=!0;function h0(n){const e=Ad(n),t=n.proxy,i=n.ctx;ql=!1,e.beforeCreate&&Hu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:P,render:B,renderTracked:C,renderTriggered:L,errorCaptured:H,serverPrefetch:R,expose:A,inheritAttrs:k,components:J,directives:le,filters:pe}=e;if(c&&d0(c,i,null),a)for(const ae in a){const $=a[ae];ot($)&&(i[ae]=$.bind(t))}if(r){const ae=r.call(t,t);vt(ae)&&(n.data=mr(ae))}if(ql=!0,s)for(const ae in s){const $=s[ae],ye=ot($)?$.bind(t,t):ot($.get)?$.get.bind(t,t):ti,Te=!ot($)&&ot($.set)?$.set.bind(t):ti,Oe=Mn({get:ye,set:Te});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:He=>Oe.value=He})}if(o)for(const ae in o)Td(o[ae],i,t,ae);if(l){const ae=ot(l)?l.call(t):l;Reflect.ownKeys(ae).forEach($=>{Za($,ae[$])})}u&&Hu(u,n,"c");function Q(ae,$){rt($)?$.forEach(ye=>ae(ye.bind(t))):$&&ae($.bind(t))}if(Q(i0,f),Q(yd,h),Q(r0,d),Q(s0,_),Q(e0,v),Q(t0,g),Q(c0,H),Q(l0,C),Q(o0,L),Q(Md,M),Q(Ed,P),Q(a0,R),rt(A))if(A.length){const ae=n.exposed||(n.exposed={});A.forEach($=>{Object.defineProperty(ae,$,{get:()=>t[$],set:ye=>t[$]=ye,enumerable:!0})})}else n.exposed||(n.exposed={});B&&n.render===ti&&(n.render=B),k!=null&&(n.inheritAttrs=k),J&&(n.components=J),le&&(n.directives=le),R&&vd(n)}function d0(n,e,t=ti){rt(n)&&(n=jl(n));for(const i in n){const r=n[i];let s;vt(r)?"default"in r?s=ii(r.from||i,r.default,!0):s=ii(r.from||i):s=ii(r),Qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Hu(n,e,t){ai(rt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Td(n,e,t,i){let r=i.includes(".")?xd(t,i):()=>t[i];if(Nt(n)){const s=e[n];ot(s)&&Fs(r,s)}else if(ot(n))Fs(r,n.bind(t));else if(vt(n))if(rt(n))n.forEach(s=>Td(s,e,t,i));else{const s=ot(n.handler)?n.handler.bind(t):e[n.handler];ot(s)&&Fs(r,s,n)}}function Ad(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>uo(l,c,a,!0)),uo(l,e,a)),vt(e)&&s.set(e,l),l}function uo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&uo(n,s,t,!0),r&&r.forEach(a=>uo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=p0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const p0={data:Gu,props:Wu,emits:Wu,methods:Ds,computed:Ds,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Ds,directives:Ds,watch:g0,provide:Gu,inject:m0};function Gu(n,e){return e?n?function(){return jt(ot(n)?n.call(this,this):n,ot(e)?e.call(this,this):e)}:e:n}function m0(n,e){return Ds(jl(n),jl(e))}function jl(n){if(rt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function tn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ds(n,e){return n?jt(Object.create(null),n,e):e}function Wu(n,e){return n?rt(n)&&rt(e)?[...new Set([...n,...e])]:jt(Object.create(null),Vu(n),Vu(e??{})):e}function g0(n,e){if(!n)return e;if(!e)return n;const t=jt(Object.create(null),n);for(const i in e)t[i]=tn(n[i],e[i]);return t}function wd(){return{app:null,config:{isNativeTag:Fh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let x0=0;function _0(n,e){return function(i,r=null){ot(i)||(i=jt({},i)),r!=null&&!vt(r)&&(r=null);const s=wd(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:x0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ot(u.install)?(a.add(u),u.install(c,...f)):ot(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Jt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,mu(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ai(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=$r;$r=c;try{return u()}finally{$r=f}}};return c}}let $r=null;const v0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${kn(e)}Modifiers`]||n[`${vr(e)}Modifiers`];function S0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let r=t;const s=e.startsWith("update:"),a=s&&v0(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Nt(u)?u.trim():u)),a.number&&(r=t.map(cm)));let o,l=i[o=Ho(e)]||i[o=Ho(kn(e))];!l&&s&&(l=i[o=Ho(vr(e))]),l&&ai(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ai(c,n,6,r)}}const b0=new WeakMap;function Cd(n,e,t=!1){const i=t?b0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ot(n)){const l=c=>{const u=Cd(c,e,!0);u&&(o=!0,jt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(vt(n)&&i.set(n,null),null):(rt(s)?s.forEach(l=>a[l]=null):jt(a,s),vt(n)&&i.set(n,a),a)}function Po(n,e){return!n||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(n,e[0].toLowerCase()+e.slice(1))||xt(n,vr(e))||xt(n,e))}function Xu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:v}=n,g=oo(n);let p,M;try{if(t.shapeFlag&4){const P=r||i,B=P;p=Kn(c.call(B,P,u,f,d,h,_)),M=o}else{const P=e;p=Kn(P.length>1?P(f,{attrs:o,slots:a,emit:l}):P(f,null)),M=e.props?o:y0(o)}}catch(P){ks.length=0,Co(P,n,1),p=Jt($i)}let y=p;if(M&&v!==!1){const P=Object.keys(M),{shapeFlag:B}=y;P.length&&B&7&&(s&&P.some(Jc)&&(M=M0(M,s)),y=ns(y,M,!1,!0))}return t.dirs&&(y=ns(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&fu(y,t.transition),p=y,oo(g),p}const y0=n=>{let e;for(const t in n)(t==="class"||t==="style"||yo(t))&&((e||(e={}))[t]=n[t]);return e},M0=(n,e)=>{const t={};for(const i in n)(!Jc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function E0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Yu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Rd(a,i,h)&&!Po(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Yu(i,a,c):!0:!!a;return!1}function Yu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Rd(e,n,s)&&!Po(t,s))return!0}return!1}function Rd(n,e,t){const i=n[t],r=e[t];return t==="style"&&vt(i)&&vt(r)?!tu(i,r):i!==r}function T0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Pd={},Dd=()=>Object.create(Pd),Ld=n=>Object.getPrototypeOf(n)===Pd;function A0(n,e,t,i=!1){const r={},s=Dd();n.propsDefaults=Object.create(null),Id(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:ad(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function w0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=gt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Po(n.emitsOptions,h))continue;const d=e[h];if(l)if(xt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=kn(h);r[_]=Kl(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Id(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!xt(e,f)&&((u=vr(f))===f||!xt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Kl(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!xt(e,f))&&(delete s[f],c=!0)}c&&Ti(n.attrs,"set","")}function Id(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Is(l))continue;const c=e[l];let u;r&&xt(r,u=kn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Po(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=gt(t),c=o||Tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Kl(r,l,f,c[f],n,!xt(c,f))}}return a}function Kl(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=xt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ot(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=aa(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===vr(t))&&(i=!0))}return i}const C0=new WeakMap;function Ud(n,e,t=!1){const i=t?C0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ot(n)){const u=f=>{l=!0;const[h,d]=Ud(f,e,!0);jt(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return vt(n)&&i.set(n,jr),jr;if(rt(s))for(let u=0;u<s.length;u++){const f=kn(s[u]);qu(f)&&(a[f]=Tt)}else if(s)for(const u in s){const f=kn(u);if(qu(f)){const h=s[u],d=a[f]=rt(h)||ot(h)?{type:h}:jt({},h),_=d.type;let v=!1,g=!0;if(rt(_))for(let p=0;p<_.length;++p){const M=_[p],y=ot(M)&&M.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(g=!1)}else v=ot(_)&&_.name==="Boolean";d[0]=v,d[1]=g,(v||xt(d,"default"))&&o.push(f)}}const c=[a,o];return vt(n)&&i.set(n,c),c}function qu(n){return n[0]!=="$"&&!Is(n)}const hu=n=>n==="_"||n==="_ctx"||n==="$stable",du=n=>rt(n)?n.map(Kn):[Kn(n)],R0=(n,e,t)=>{if(e._n)return e;const i=uu((...r)=>du(e(...r)),t);return i._c=!1,i},Nd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(hu(r))continue;const s=n[r];if(ot(s))e[r]=R0(r,s,i);else if(s!=null){const a=du(s);e[r]=()=>a}}},Fd=(n,e)=>{const t=du(e);n.slots.default=()=>t},Od=(n,e,t)=>{for(const i in e)(t||!hu(i))&&(n[i]=e[i])},P0=(n,e,t)=>{const i=n.slots=Dd();if(n.vnode.shapeFlag&32){const r=e._;r?(Od(i,e,t),t&&Hh(i,"_",r,!0)):Nd(e,i)}else e&&Fd(n,e)},D0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Tt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Od(r,e,t):(s=!e.$stable,Nd(e,r)),a=e}else e&&(Fd(n,e),a={default:1});if(s)for(const o in r)!hu(o)&&a[o]==null&&delete r[o]},fn=F0;function L0(n){return I0(n)}function I0(n,e){const t=Eo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ti,insertStaticContent:_}=n,v=(I,U,X,S=null,W=null,Y=null,de=void 0,re=null,ge=!!U.dynamicChildren)=>{if(I===U)return;I&&!vs(I,U)&&(S=z(I),He(I,W,Y,!0),I=null),U.patchFlag===-2&&(ge=!1,U.dynamicChildren=null);const{type:Z,ref:Me,shapeFlag:E}=U;switch(Z){case Do:g(I,U,X,S);break;case $i:p(I,U,X,S);break;case Zo:I==null&&M(U,X,S,de);break;case yn:J(I,U,X,S,W,Y,de,re,ge);break;default:E&1?B(I,U,X,S,W,Y,de,re,ge):E&6?le(I,U,X,S,W,Y,de,re,ge):(E&64||E&128)&&Z.process(I,U,X,S,W,Y,de,re,ge,_e)}Me!=null&&W?Os(Me,I&&I.ref,Y,U||I,!U):Me==null&&I&&I.ref!=null&&Os(I.ref,null,Y,I,!0)},g=(I,U,X,S)=>{if(I==null)i(U.el=o(U.children),X,S);else{const W=U.el=I.el;U.children!==I.children&&c(W,U.children)}},p=(I,U,X,S)=>{I==null?i(U.el=l(U.children||""),X,S):U.el=I.el},M=(I,U,X,S)=>{[I.el,I.anchor]=_(I.children,U,X,S,I.el,I.anchor)},y=({el:I,anchor:U},X,S)=>{let W;for(;I&&I!==U;)W=h(I),i(I,X,S),I=W;i(U,X,S)},P=({el:I,anchor:U})=>{let X;for(;I&&I!==U;)X=h(I),r(I),I=X;r(U)},B=(I,U,X,S,W,Y,de,re,ge)=>{if(U.type==="svg"?de="svg":U.type==="math"&&(de="mathml"),I==null)C(U,X,S,W,Y,de,re,ge);else{const Z=I.el&&I.el._isVueCE?I.el:null;try{Z&&Z._beginPatch(),R(I,U,W,Y,de,re,ge)}finally{Z&&Z._endPatch()}}},C=(I,U,X,S,W,Y,de,re)=>{let ge,Z;const{props:Me,shapeFlag:E,transition:b,dirs:G}=I;if(ge=I.el=a(I.type,Y,Me&&Me.is,Me),E&8?u(ge,I.children):E&16&&H(I.children,ge,null,S,W,Ko(I,Y),de,re),G&&nr(I,null,S,"created"),L(ge,I,I.scopeId,de,S),Me){for(const he in Me)he!=="value"&&!Is(he)&&s(ge,he,null,Me[he],Y,S);"value"in Me&&s(ge,"value",null,Me.value,Y),(Z=Me.onVnodeBeforeMount)&&Xn(Z,S,I)}G&&nr(I,null,S,"beforeMount");const se=U0(W,b);se&&b.beforeEnter(ge),i(ge,U,X),((Z=Me&&Me.onVnodeMounted)||se||G)&&fn(()=>{Z&&Xn(Z,S,I),se&&b.enter(ge),G&&nr(I,null,S,"mounted")},W)},L=(I,U,X,S,W)=>{if(X&&d(I,X),S)for(let Y=0;Y<S.length;Y++)d(I,S[Y]);if(W){let Y=W.subTree;if(U===Y||Vd(Y.type)&&(Y.ssContent===U||Y.ssFallback===U)){const de=W.vnode;L(I,de,de.scopeId,de.slotScopeIds,W.parent)}}},H=(I,U,X,S,W,Y,de,re,ge=0)=>{for(let Z=ge;Z<I.length;Z++){const Me=I[Z]=re?Ei(I[Z]):Kn(I[Z]);v(null,Me,U,X,S,W,Y,de,re)}},R=(I,U,X,S,W,Y,de)=>{const re=U.el=I.el;let{patchFlag:ge,dynamicChildren:Z,dirs:Me}=U;ge|=I.patchFlag&16;const E=I.props||Tt,b=U.props||Tt;let G;if(X&&ir(X,!1),(G=b.onVnodeBeforeUpdate)&&Xn(G,X,U,I),Me&&nr(U,I,X,"beforeUpdate"),X&&ir(X,!0),(E.innerHTML&&b.innerHTML==null||E.textContent&&b.textContent==null)&&u(re,""),Z?A(I.dynamicChildren,Z,re,X,S,Ko(U,W),Y):de||$(I,U,re,null,X,S,Ko(U,W),Y,!1),ge>0){if(ge&16)k(re,E,b,X,W);else if(ge&2&&E.class!==b.class&&s(re,"class",null,b.class,W),ge&4&&s(re,"style",E.style,b.style,W),ge&8){const se=U.dynamicProps;for(let he=0;he<se.length;he++){const ie=se[he],Be=E[ie],we=b[ie];(we!==Be||ie==="value")&&s(re,ie,Be,we,W,X)}}ge&1&&I.children!==U.children&&u(re,U.children)}else!de&&Z==null&&k(re,E,b,X,W);((G=b.onVnodeUpdated)||Me)&&fn(()=>{G&&Xn(G,X,U,I),Me&&nr(U,I,X,"updated")},S)},A=(I,U,X,S,W,Y,de)=>{for(let re=0;re<U.length;re++){const ge=I[re],Z=U[re],Me=ge.el&&(ge.type===yn||!vs(ge,Z)||ge.shapeFlag&198)?f(ge.el):X;v(ge,Z,Me,null,S,W,Y,de,!0)}},k=(I,U,X,S,W)=>{if(U!==X){if(U!==Tt)for(const Y in U)!Is(Y)&&!(Y in X)&&s(I,Y,U[Y],null,W,S);for(const Y in X){if(Is(Y))continue;const de=X[Y],re=U[Y];de!==re&&Y!=="value"&&s(I,Y,re,de,W,S)}"value"in X&&s(I,"value",U.value,X.value,W)}},J=(I,U,X,S,W,Y,de,re,ge)=>{const Z=U.el=I?I.el:o(""),Me=U.anchor=I?I.anchor:o("");let{patchFlag:E,dynamicChildren:b,slotScopeIds:G}=U;G&&(re=re?re.concat(G):G),I==null?(i(Z,X,S),i(Me,X,S),H(U.children||[],X,Me,W,Y,de,re,ge)):E>0&&E&64&&b&&I.dynamicChildren&&I.dynamicChildren.length===b.length?(A(I.dynamicChildren,b,X,W,Y,de,re),(U.key!=null||W&&U===W.subTree)&&Bd(I,U,!0)):$(I,U,X,Me,W,Y,de,re,ge)},le=(I,U,X,S,W,Y,de,re,ge)=>{U.slotScopeIds=re,I==null?U.shapeFlag&512?W.ctx.activate(U,X,S,de,ge):pe(U,X,S,W,Y,de,ge):ee(I,U,ge)},pe=(I,U,X,S,W,Y,de)=>{const re=I.component=X0(I,S,W);if(Sd(I)&&(re.ctx.renderer=_e),Y0(re,!1,de),re.asyncDep){if(W&&W.registerDep(re,Q,de),!I.el){const ge=re.subTree=Jt($i);p(null,ge,U,X),I.placeholder=ge.el}}else Q(re,I,U,X,W,Y,de)},ee=(I,U,X)=>{const S=U.component=I.component;if(E0(I,U,X))if(S.asyncDep&&!S.asyncResolved){ae(S,U,X);return}else S.next=U,S.update();else U.el=I.el,S.vnode=U},Q=(I,U,X,S,W,Y,de)=>{const re=()=>{if(I.isMounted){let{next:E,bu:b,u:G,parent:se,vnode:he}=I;{const Ve=zd(I);if(Ve){E&&(E.el=he.el,ae(I,E,de)),Ve.asyncDep.then(()=>{fn(()=>{I.isUnmounted||Z()},W)});return}}let ie=E,Be;ir(I,!1),E?(E.el=he.el,ae(I,E,de)):E=he,b&&Go(b),(Be=E.props&&E.props.onVnodeBeforeUpdate)&&Xn(Be,se,E,he),ir(I,!0);const we=Xu(I),Ge=I.subTree;I.subTree=we,v(Ge,we,f(Ge.el),z(Ge),I,W,Y),E.el=we.el,ie===null&&T0(I,we.el),G&&fn(G,W),(Be=E.props&&E.props.onVnodeUpdated)&&fn(()=>Xn(Be,se,E,he),W)}else{let E;const{el:b,props:G}=U,{bm:se,m:he,parent:ie,root:Be,type:we}=I,Ge=Bs(U);ir(I,!1),se&&Go(se),!Ge&&(E=G&&G.onVnodeBeforeMount)&&Xn(E,ie,U),ir(I,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(we,I.parent?I.parent.type:void 0);const Ve=I.subTree=Xu(I);v(null,Ve,X,S,I,W,Y),U.el=Ve.el}if(he&&fn(he,W),!Ge&&(E=G&&G.onVnodeMounted)){const Ve=U;fn(()=>Xn(E,ie,Ve),W)}(U.shapeFlag&256||ie&&Bs(ie.vnode)&&ie.vnode.shapeFlag&256)&&I.a&&fn(I.a,W),I.isMounted=!0,U=X=S=null}};I.scope.on();const ge=I.effect=new Yh(re);I.scope.off();const Z=I.update=ge.run.bind(ge),Me=I.job=ge.runIfDirty.bind(ge);Me.i=I,Me.id=I.uid,ge.scheduler=()=>cu(Me),ir(I,!0),Z()},ae=(I,U,X)=>{U.component=I;const S=I.vnode.props;I.vnode=U,I.next=null,w0(I,U.props,S,X),D0(I,U.children,X),Ci(),Bu(I),Ri()},$=(I,U,X,S,W,Y,de,re,ge=!1)=>{const Z=I&&I.children,Me=I?I.shapeFlag:0,E=U.children,{patchFlag:b,shapeFlag:G}=U;if(b>0){if(b&128){Te(Z,E,X,S,W,Y,de,re,ge);return}else if(b&256){ye(Z,E,X,S,W,Y,de,re,ge);return}}G&8?(Me&16&&te(Z,W,Y),E!==Z&&u(X,E)):Me&16?G&16?Te(Z,E,X,S,W,Y,de,re,ge):te(Z,W,Y,!0):(Me&8&&u(X,""),G&16&&H(E,X,S,W,Y,de,re,ge))},ye=(I,U,X,S,W,Y,de,re,ge)=>{I=I||jr,U=U||jr;const Z=I.length,Me=U.length,E=Math.min(Z,Me);let b;for(b=0;b<E;b++){const G=U[b]=ge?Ei(U[b]):Kn(U[b]);v(I[b],G,X,null,W,Y,de,re,ge)}Z>Me?te(I,W,Y,!0,!1,E):H(U,X,S,W,Y,de,re,ge,E)},Te=(I,U,X,S,W,Y,de,re,ge)=>{let Z=0;const Me=U.length;let E=I.length-1,b=Me-1;for(;Z<=E&&Z<=b;){const G=I[Z],se=U[Z]=ge?Ei(U[Z]):Kn(U[Z]);if(vs(G,se))v(G,se,X,null,W,Y,de,re,ge);else break;Z++}for(;Z<=E&&Z<=b;){const G=I[E],se=U[b]=ge?Ei(U[b]):Kn(U[b]);if(vs(G,se))v(G,se,X,null,W,Y,de,re,ge);else break;E--,b--}if(Z>E){if(Z<=b){const G=b+1,se=G<Me?U[G].el:S;for(;Z<=b;)v(null,U[Z]=ge?Ei(U[Z]):Kn(U[Z]),X,se,W,Y,de,re,ge),Z++}}else if(Z>b)for(;Z<=E;)He(I[Z],W,Y,!0),Z++;else{const G=Z,se=Z,he=new Map;for(Z=se;Z<=b;Z++){const Ne=U[Z]=ge?Ei(U[Z]):Kn(U[Z]);Ne.key!=null&&he.set(Ne.key,Z)}let ie,Be=0;const we=b-se+1;let Ge=!1,Ve=0;const Ee=new Array(we);for(Z=0;Z<we;Z++)Ee[Z]=0;for(Z=G;Z<=E;Z++){const Ne=I[Z];if(Be>=we){He(Ne,W,Y,!0);continue}let We;if(Ne.key!=null)We=he.get(Ne.key);else for(ie=se;ie<=b;ie++)if(Ee[ie-se]===0&&vs(Ne,U[ie])){We=ie;break}We===void 0?He(Ne,W,Y,!0):(Ee[We-se]=Z+1,We>=Ve?Ve=We:Ge=!0,v(Ne,U[We],X,null,W,Y,de,re,ge),Be++)}const Ae=Ge?N0(Ee):jr;for(ie=Ae.length-1,Z=we-1;Z>=0;Z--){const Ne=se+Z,We=U[Ne],De=U[Ne+1],Ye=Ne+1<Me?De.el||kd(De):S;Ee[Z]===0?v(null,We,X,Ye,W,Y,de,re,ge):Ge&&(ie<0||Z!==Ae[ie]?Oe(We,X,Ye,2):ie--)}}},Oe=(I,U,X,S,W=null)=>{const{el:Y,type:de,transition:re,children:ge,shapeFlag:Z}=I;if(Z&6){Oe(I.component.subTree,U,X,S);return}if(Z&128){I.suspense.move(U,X,S);return}if(Z&64){de.move(I,U,X,_e);return}if(de===yn){i(Y,U,X);for(let E=0;E<ge.length;E++)Oe(ge[E],U,X,S);i(I.anchor,U,X);return}if(de===Zo){y(I,U,X);return}if(S!==2&&Z&1&&re)if(S===0)re.beforeEnter(Y),i(Y,U,X),fn(()=>re.enter(Y),W);else{const{leave:E,delayLeave:b,afterLeave:G}=re,se=()=>{I.ctx.isUnmounted?r(Y):i(Y,U,X)},he=()=>{Y._isLeaving&&Y[Jm](!0),E(Y,()=>{se(),G&&G()})};b?b(Y,se,he):he()}else i(Y,U,X)},He=(I,U,X,S=!1,W=!1)=>{const{type:Y,props:de,ref:re,children:ge,dynamicChildren:Z,shapeFlag:Me,patchFlag:E,dirs:b,cacheIndex:G}=I;if(E===-2&&(W=!1),re!=null&&(Ci(),Os(re,null,X,I,!0),Ri()),G!=null&&(U.renderCache[G]=void 0),Me&256){U.ctx.deactivate(I);return}const se=Me&1&&b,he=!Bs(I);let ie;if(he&&(ie=de&&de.onVnodeBeforeUnmount)&&Xn(ie,U,I),Me&6)tt(I.component,X,S);else{if(Me&128){I.suspense.unmount(X,S);return}se&&nr(I,null,U,"beforeUnmount"),Me&64?I.type.remove(I,U,X,_e,S):Z&&!Z.hasOnce&&(Y!==yn||E>0&&E&64)?te(Z,U,X,!1,!0):(Y===yn&&E&384||!W&&Me&16)&&te(ge,U,X),S&&Je(I)}(he&&(ie=de&&de.onVnodeUnmounted)||se)&&fn(()=>{ie&&Xn(ie,U,I),se&&nr(I,null,U,"unmounted")},X)},Je=I=>{const{type:U,el:X,anchor:S,transition:W}=I;if(U===yn){st(X,S);return}if(U===Zo){P(I);return}const Y=()=>{r(X),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(I.shapeFlag&1&&W&&!W.persisted){const{leave:de,delayLeave:re}=W,ge=()=>de(X,Y);re?re(I.el,Y,ge):ge()}else Y()},st=(I,U)=>{let X;for(;I!==U;)X=h(I),r(I),I=X;r(U)},tt=(I,U,X)=>{const{bum:S,scope:W,job:Y,subTree:de,um:re,m:ge,a:Z}=I;ju(ge),ju(Z),S&&Go(S),W.stop(),Y&&(Y.flags|=8,He(de,I,U,X)),re&&fn(re,U),fn(()=>{I.isUnmounted=!0},U)},te=(I,U,X,S=!1,W=!1,Y=0)=>{for(let de=Y;de<I.length;de++)He(I[de],U,X,S,W)},z=I=>{if(I.shapeFlag&6)return z(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const U=h(I.anchor||I.el),X=U&&U[Zm];return X?h(X):U};let ce=!1;const me=(I,U,X)=>{let S;I==null?U._vnode&&(He(U._vnode,null,null,!0),S=U._vnode.component):v(U._vnode||null,I,U,null,null,null,X),U._vnode=I,ce||(ce=!0,Bu(S),dd(),ce=!1)},_e={p:v,um:He,m:Oe,r:Je,mt:pe,mc:H,pc:$,pbc:A,n:z,o:n};return{render:me,hydrate:void 0,createApp:_0(me)}}function Ko({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function U0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bd(n,e,t=!1){const i=n.children,r=e.children;if(rt(i)&&rt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ei(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Bd(a,o)),o.type===Do&&(o.patchFlag===-1&&(o=r[s]=Ei(o)),o.el=a.el),o.type===$i&&!o.el&&(o.el=a.el)}}function N0(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zd(e)}function ju(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function kd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?kd(e.subTree):null}const Vd=n=>n.__isSuspense;function F0(n,e){e&&e.pendingBranch?rt(n)?e.effects.push(...n):e.effects.push(n):Ym(n)}const yn=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),ks=[];let Tn=null;function vn(n=!1){ks.push(Tn=n?null:[])}function O0(){ks.pop(),Tn=ks[ks.length-1]||null}let js=1;function fo(n,e=!1){js+=n,n<0&&Tn&&e&&(Tn.hasOnce=!0)}function Hd(n){return n.dynamicChildren=js>0?Tn||jr:null,O0(),js>0&&Tn&&Tn.push(n),n}function Rn(n,e,t,i,r,s){return Hd(et(n,e,t,i,r,s,!0))}function B0(n,e,t,i,r){return Hd(Jt(n,e,t,i,r,!0))}function ho(n){return n?n.__v_isVNode===!0:!1}function vs(n,e){return n.type===e.type&&n.key===e.key}const Gd=({key:n})=>n??null,$a=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Nt(n)||Qt(n)||ot(n)?{i:Qn,r:n,k:e,f:!!t}:n:null);function et(n,e=null,t=null,i=0,r=null,s=n===yn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Gd(e),ref:e&&$a(e),scopeId:md,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qn};return o?(pu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Nt(t)?8:16),js>0&&!a&&Tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tn.push(l),l}const Jt=z0;function z0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===u0)&&(n=$i),ho(n)){const o=ns(n,e,!0);return t&&pu(o,t),js>0&&!s&&Tn&&(o.shapeFlag&6?Tn[Tn.indexOf(n)]=o:Tn.push(o)),o.patchFlag=-2,o}if(Z0(n)&&(n=n.__vccOpts),e){e=k0(e);let{class:o,style:l}=e;o&&!Nt(o)&&(e.class=Ao(o)),vt(l)&&(lu(l)&&!rt(l)&&(l=jt({},l)),e.style=To(l))}const a=Nt(n)?1:Vd(n)?128:$m(n)?64:vt(n)?4:ot(n)?2:0;return et(n,e,t,i,r,a,s,!0)}function k0(n){return n?lu(n)||Ld(n)?jt({},n):n:null}function ns(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?H0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Gd(c),ref:e&&e.ref?t&&s?rt(s)?s.concat($a(e)):[s,$a(e)]:$a(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==yn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ns(n.ssContent),ssFallback:n.ssFallback&&ns(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&fu(u,l.clone(u)),u}function po(n=" ",e=0){return Jt(Do,null,n,e)}function V0(n="",e=!1){return e?(vn(),B0($i,null,n)):Jt($i,null,n)}function Kn(n){return n==null||typeof n=="boolean"?Jt($i):rt(n)?Jt(yn,null,n.slice()):ho(n)?Ei(n):Jt(Do,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ns(n)}function pu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(rt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),pu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ld(e)?e._ctx=Qn:r===3&&Qn&&(Qn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ot(e)?(e={default:e,_ctx:Qn},t=32):(e=String(e),i&64?(t=16,e=[po(e)]):t=8);n.children=e,n.shapeFlag|=t}function H0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ao([e.class,i.class]));else if(r==="style")e.style=To([e.style,i.style]);else if(yo(r)){const s=e[r],a=i[r];a&&s!==a&&!(rt(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Xn(n,e,t,i=null){ai(n,e,7,[t,i])}const G0=wd();let W0=0;function X0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||G0,s={uid:W0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ud(i,r),emitsOptions:Cd(i,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=S0.bind(null,s),n.ce&&n.ce(s),s}let on=null;const Wd=()=>on||Qn;let mo,Zl;{const n=Eo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};mo=e("__VUE_INSTANCE_SETTERS__",t=>on=t),Zl=e("__VUE_SSR_SETTERS__",t=>Ks=t)}const aa=n=>{const e=on;return mo(n),n.scope.on(),()=>{n.scope.off(),mo(e)}},Ku=()=>{on&&on.scope.off(),mo(null)};function Xd(n){return n.vnode.shapeFlag&4}let Ks=!1;function Y0(n,e=!1,t=!1){e&&Zl(e);const{props:i,children:r}=n.vnode,s=Xd(n);A0(n,i,s,e),P0(n,r,t||e);const a=s?q0(n,e):void 0;return e&&Zl(!1),a}function q0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,f0);const{setup:i}=t;if(i){Ci();const r=n.setupContext=i.length>1?K0(n):null,s=aa(n),a=sa(i,n,0,[n.props,r]),o=Bh(a);if(Ri(),s(),(o||n.sp)&&!Bs(n)&&vd(n),o){if(a.then(Ku,Ku),e)return a.then(l=>{Zu(n,l)}).catch(l=>{Co(l,n,0)});n.asyncDep=a}else Zu(n,a)}else Yd(n)}function Zu(n,e,t){ot(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=cd(e)),Yd(n)}function Yd(n,e,t){const i=n.type;n.render||(n.render=i.render||ti);{const r=aa(n);Ci();try{h0(n)}finally{Ri(),r()}}}const j0={get(n,e){return $t(n,"get",""),n[e]}};function K0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,j0),slots:n.slots,emit:n.emit,expose:e}}function mu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cd(Om(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zs)return zs[t](n)},has(e,t){return t in e||t in zs}})):n.proxy}function Z0(n){return ot(n)&&"__vccOpts"in n}const Mn=(n,e)=>Vm(n,e,Ks);function qd(n,e,t){try{fo(-1);const i=arguments.length;return i===2?vt(e)&&!rt(e)?ho(e)?Jt(n,null,[e]):Jt(n,e):Jt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ho(t)&&(t=[t]),Jt(n,e,t))}finally{fo(1)}}const $0="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $l;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{$l=$u.createPolicy("vue",{createHTML:n=>n})}catch{}const jd=$l?n=>$l.createHTML(n):n=>n,J0="http://www.w3.org/2000/svg",Q0="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,Ju=Mi&&Mi.createElement("template"),eg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Mi.createElementNS(J0,n):e==="mathml"?Mi.createElementNS(Q0,n):t?Mi.createElement(n,{is:t}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ju.innerHTML=jd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ju.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},tg=Symbol("_vtc");function ng(n,e,t){const i=n[tg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Qu=Symbol("_vod"),ig=Symbol("_vsh"),rg=Symbol(""),sg=/(?:^|;)\s*display\s*:/;function ag(n,e,t){const i=n.style,r=Nt(t);let s=!1;if(t&&!r){if(e)if(Nt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ja(i,o,"")}else for(const a in e)t[a]==null&&Ja(i,a,"");for(const a in t)a==="display"&&(s=!0),Ja(i,a,t[a])}else if(r){if(e!==t){const a=i[rg];a&&(t+=";"+a),i.cssText=t,s=sg.test(t)}}else e&&n.removeAttribute("style");Qu in n&&(n[Qu]=s?i.display:"",n[ig]&&(i.display="none"))}const ef=/\s*!important$/;function Ja(n,e,t){if(rt(t))t.forEach(i=>Ja(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=og(n,e);ef.test(t)?n.setProperty(vr(i),t.replace(ef,""),"important"):n[i]=t}}const tf=["Webkit","Moz","ms"],$o={};function og(n,e){const t=$o[e];if(t)return t;let i=kn(e);if(i!=="filter"&&i in n)return $o[e]=i;i=Vh(i);for(let r=0;r<tf.length;r++){const s=tf[r]+i;if(s in n)return $o[e]=s}return e}const nf="http://www.w3.org/1999/xlink";function rf(n,e,t,i,r,s=mm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(nf,e.slice(6,e.length)):n.setAttributeNS(nf,e,t):t==null||s&&!Gh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":si(t)?String(t):t)}function sf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Gh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function lg(n,e,t,i){n.addEventListener(e,t,i)}function cg(n,e,t,i){n.removeEventListener(e,t,i)}const af=Symbol("_vei");function ug(n,e,t,i,r=null){const s=n[af]||(n[af]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=fg(e);if(i){const c=s[e]=pg(i,r);lg(n,o,c,l)}else a&&(cg(n,o,a,l),s[e]=void 0)}}const of=/(?:Once|Passive|Capture)$/;function fg(n){let e;if(of.test(n)){e={};let i;for(;i=n.match(of);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vr(n.slice(2)),e]}let Jo=0;const hg=Promise.resolve(),dg=()=>Jo||(hg.then(()=>Jo=0),Jo=Date.now());function pg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ai(mg(i,t.value),e,5,[i])};return t.value=n,t.attached=dg(),t}function mg(n,e){if(rt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const lf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gg=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?ng(n,i,a):e==="style"?ag(n,t,i):yo(e)?Jc(e)||ug(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xg(n,e,i,a))?(sf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rf(n,e,i,a,s,e!=="value")):n._isVueCE&&(_g(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Nt(i)))?sf(n,kn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),rf(n,e,i,a))};function xg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&lf(e)&&ot(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lf(e)&&Nt(t)?!1:e in n}function _g(n,e){const t=n._def.props;if(!t)return!1;const i=kn(e);return Array.isArray(t)?t.some(r=>kn(r)===i):Object.keys(t).some(r=>kn(r)===i)}const vg=["ctrl","shift","alt","meta"],Sg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>vg.some(t=>n[`${t}Key`]&&!e.includes(t))},bg=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Sg[e[a]];if(o&&o(r,e))return}return n(r,...s)})},yg=jt({patchProp:gg},eg);let cf;function Mg(){return cf||(cf=L0(yg))}const Eg=(...n)=>{const e=Mg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ag(i);if(!r)return;const s=e._component;!ot(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Tg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Tg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ag(n){return Nt(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Wr=typeof document<"u";function Kd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function wg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kd(n.default)}const mt=Object.assign;function Qo(n,e){const t={};for(const i in e){const r=e[i];t[i]=Gn(r)?r.map(n):n(r)}return t}const Vs=()=>{},Gn=Array.isArray;function uf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Zd=/#/g,Cg=/&/g,Rg=/\//g,Pg=/=/g,Dg=/\?/g,$d=/\+/g,Lg=/%5B/g,Ig=/%5D/g,Jd=/%5E/g,Ug=/%60/g,Qd=/%7B/g,Ng=/%7C/g,ep=/%7D/g,Fg=/%20/g;function gu(n){return n==null?"":encodeURI(""+n).replace(Ng,"|").replace(Lg,"[").replace(Ig,"]")}function Og(n){return gu(n).replace(Qd,"{").replace(ep,"}").replace(Jd,"^")}function Jl(n){return gu(n).replace($d,"%2B").replace(Fg,"+").replace(Zd,"%23").replace(Cg,"%26").replace(Ug,"`").replace(Qd,"{").replace(ep,"}").replace(Jd,"^")}function Bg(n){return Jl(n).replace(Pg,"%3D")}function zg(n){return gu(n).replace(Zd,"%23").replace(Dg,"%3F")}function kg(n){return zg(n).replace(Rg,"%2F")}function Zs(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Vg=/\/$/,Hg=n=>n.replace(Vg,"");function el(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Yg(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:Zs(a)}}function Gg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ff(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Wg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&is(e.matched[i],t.matched[r])&&tp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function is(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function tp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Xg(n[t],e[t]))return!1;return!0}function Xg(n,e){return Gn(n)?hf(n,e):Gn(e)?hf(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function hf(n,e){return Gn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Yg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ql=function(n){return n.pop="pop",n.push="push",n}({}),tl=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function qg(n){if(!n)if(Wr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Hg(n)}const jg=/^[^#]+#/;function Kg(n,e){return n.replace(jg,"#")+e}function Zg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Lo=()=>({left:window.scrollX,top:window.scrollY});function $g(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Zg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function df(n,e){return(history.state?history.state.position-e:-1)+n}const ec=new Map;function Jg(n,e){ec.set(n,e)}function Qg(n){const e=ec.get(n);return ec.delete(n),e}function ex(n){return typeof n=="string"||n&&typeof n=="object"}function np(n){return typeof n=="string"||typeof n=="symbol"}let It=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const ip=Symbol("");It.MATCHER_NOT_FOUND+"",It.NAVIGATION_GUARD_REDIRECT+"",It.NAVIGATION_ABORTED+"",It.NAVIGATION_CANCELLED+"",It.NAVIGATION_DUPLICATED+"";function rs(n,e){return mt(new Error,{type:n,[ip]:!0},e)}function di(n,e){return n instanceof Error&&ip in n&&(e==null||!!(n.type&e))}const tx=["params","query","hash"];function nx(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of tx)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function ix(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace($d," "),s=r.indexOf("="),a=Zs(s<0?r:r.slice(0,s)),o=s<0?null:Zs(r.slice(s+1));if(a in e){let l=e[a];Gn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function pf(n){let e="";for(let t in n){const i=n[t];if(t=Bg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Gn(i)?i.map(r=>r&&Jl(r)):[i&&Jl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function rx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const sx=Symbol(""),mf=Symbol(""),xu=Symbol(""),_u=Symbol(""),tc=Symbol("");function Ss(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Vi(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(rs(It.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):ex(h)?l(rs(It.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function nl(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Kd(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Vi(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=wg(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Vi(h,t,i,a,o,r)()}))}}return s}function ax(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>is(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>is(c,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ox=()=>location.protocol+"//"+location.host;function rp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),ff(o,"")}return ff(t,n)+i+r}function lx(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=rp(n,location),_=t.value,v=e.value;let g=0;if(h){if(t.value=d,e.value=h,a&&a===_){a=null;return}g=v?h.position-v.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:g,type:Ql.pop,direction:g?g>0?tl.forward:tl.back:tl.unknown})})};function l(){a=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(mt({},h.state,{scroll:Lo()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function gf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Lo():null}}function cx(n){const{history:e,location:t}=window,i={value:rp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ox()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){s(l,mt({},e.state,gf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=mt({},r.value,e.state,{forward:l,scroll:Lo()});s(u.current,u,!0),s(l,mt({},gf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function ux(n){n=qg(n);const e=cx(n),t=lx(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=mt({location:"",base:n,go:i,createHref:Kg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function fx(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),ux(n)}let dr=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Bt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Bt||{});const hx={type:dr.Static,value:""},dx=/[a-zA-Z0-9_]/;function px(n){if(!n)return[[]];if(n==="/")return[[hx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=Bt.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===Bt.Static?s.push({type:dr.Static,value:c}):t===Bt.Param||t===Bt.ParamRegExp||t===Bt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:dr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Bt.ParamRegExp){i=t,t=Bt.EscapeNext;continue}switch(t){case Bt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Bt.Param):h();break;case Bt.EscapeNext:h(),t=i;break;case Bt.Param:l==="("?t=Bt.ParamRegExp:dx.test(l)?h():(f(),t=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Bt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Bt.ParamRegExpEnd:u+=l;break;case Bt.ParamRegExpEnd:f(),t=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const xf="[^/]+?",mx={sensitive:!1,strict:!1,start:!0,end:!0};var rn=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(rn||{});const gx=/[.+*?^${}()[\]/\\]/g;function xx(n,e){const t=mt({},mx,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[rn.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=rn.Segment+(t.sensitive?rn.BonusCaseSensitive:0);if(h.type===dr.Static)f||(r+="/"),r+=h.value.replace(gx,"\\$&"),d+=rn.Static;else if(h.type===dr.Param){const{value:_,repeatable:v,optional:g,regexp:p}=h;s.push({name:_,repeatable:v,optional:g});const M=p||xf;if(M!==xf){d+=rn.BonusCustomRegExp;try{`${M}`}catch(P){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+P.message)}}let y=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(y=g&&c.length<2?`(?:/${y})`:"/"+y),g&&(y+="?"),r+=y,d+=rn.Dynamic,g&&(d+=rn.BonusOptional),v&&(d+=rn.BonusRepeatable),M===".*"&&(d+=rn.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=rn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===dr.Static)u+=d.value;else if(d.type===dr.Param){const{value:_,repeatable:v,optional:g}=d,p=_ in c?c[_]:"";if(Gn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Gn(p)?p.join("/"):p;if(!M)if(g)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function _x(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===rn.Static+rn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===rn.Static+rn.Segment?1:-1:0}function sp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=_x(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(_f(i))return 1;if(_f(r))return-1}return r.length-i.length}function _f(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const vx={strict:!1,end:!0,sensitive:!1};function Sx(n,e,t){const i=xx(px(n.path),t),r=mt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function bx(n,e){const t=[],i=new Map;e=uf(vx,e);function r(f){return i.get(f)}function s(f,h,d){const _=!d,v=Sf(f);v.aliasOf=d&&d.record;const g=uf(e,f),p=[v];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of P)p.push(Sf(mt({},v,{components:d?d.record.components:v.components,path:B,aliasOf:d?d.record:v})))}let M,y;for(const P of p){const{path:B}=P;if(h&&B[0]!=="/"){const C=h.record.path,L=C[C.length-1]==="/"?"":"/";P.path=h.record.path+(B&&L+B)}if(M=Sx(P,h,g),d?d.alias.push(M):(y=y||M,y!==M&&y.alias.push(M),_&&f.name&&!bf(M)&&a(f.name)),ap(M)&&l(M),v.children){const C=v.children;for(let L=0;L<C.length;L++)s(C[L],M,d&&d.children[L])}d=d||M}return y?()=>{a(y)}:Vs}function a(f){if(np(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=Ex(f,t);t.splice(h,0,f),f.record.name&&!bf(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},v,g;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw rs(It.MATCHER_NOT_FOUND,{location:f});g=d.record.name,_=mt(vf(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&vf(f.params,d.keys.map(y=>y.name))),v=d.stringify(_)}else if(f.path!=null)v=f.path,d=t.find(y=>y.re.test(v)),d&&(_=d.parse(v),g=d.record.name);else{if(d=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw rs(It.MATCHER_NOT_FOUND,{location:f,currentLocation:h});g=d.record.name,_=mt({},h.params,f.params),v=d.stringify(_)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:g,path:v,params:_,matched:p,meta:Mx(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function vf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Sf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:yx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function bf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Mx(n){return n.reduce((e,t)=>mt(e,t.meta),{})}function Ex(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;sp(n,e[s])<0?i=s:t=s+1}const r=Tx(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Tx(n){let e=n;for(;e=e.parent;)if(ap(e)&&sp(n,e)===0)return e}function ap({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function yf(n){const e=ii(xu),t=ii(_u),i=Mn(()=>{const l=ni(n.to);return e.resolve(l)}),r=Mn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(is.bind(null,u));if(h>-1)return h;const d=Mf(l[c-2]);return c>1&&Mf(u)===d&&f[f.length-1].path!==d?f.findIndex(is.bind(null,l[c-2])):h}),s=Mn(()=>r.value>-1&&Rx(t.params,i.value.params)),a=Mn(()=>r.value>-1&&r.value===t.matched.length-1&&tp(t.params,i.value.params));function o(l={}){if(Cx(l)){const c=e[ni(n.replace)?"replace":"push"](ni(n.to)).catch(Vs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Mn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function Ax(n){return n.length===1?n[0]:n}const wx=_d({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yf,setup(n,{slots:e}){const t=mr(yf(n)),{options:i}=ii(xu),r=Mn(()=>({[Ef(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ef(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Ax(e.default(t));return n.custom?s:qd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),vu=wx;function Cx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Rx(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Gn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Mf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ef=(n,e,t)=>n??e??t,Px=_d({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ii(tc),r=Mn(()=>n.route||i.value),s=ii(mf,0),a=Mn(()=>{let c=ni(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Mn(()=>r.value.matched[a.value]);Za(mf,Mn(()=>a.value+1)),Za(sx,o),Za(tc,r);const l=Xl();return Fs(()=>[l.value,o.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!is(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Tf(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=qd(h,mt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Tf(t.default,{Component:g,route:c})||g}}});function Tf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const op=Px;function Dx(n){const e=bx(n.routes,n),t=n.parseQuery||ix,i=n.stringifyQuery||pf,r=n.history,s=Ss(),a=Ss(),o=Ss(),l=od(Li);let c=Li;Wr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qo.bind(null,z=>""+z),f=Qo.bind(null,kg),h=Qo.bind(null,Zs);function d(z,ce){let me,_e;return np(z)?(me=e.getRecordMatcher(z),_e=ce):_e=z,e.addRoute(_e,me)}function _(z){const ce=e.getRecordMatcher(z);ce&&e.removeRoute(ce)}function v(){return e.getRoutes().map(z=>z.record)}function g(z){return!!e.getRecordMatcher(z)}function p(z,ce){if(ce=mt({},ce||l.value),typeof z=="string"){const X=el(t,z,ce.path),S=e.resolve({path:X.path},ce),W=r.createHref(X.fullPath);return mt(X,S,{params:h(S.params),hash:Zs(X.hash),redirectedFrom:void 0,href:W})}let me;if(z.path!=null)me=mt({},z,{path:el(t,z.path,ce.path).path});else{const X=mt({},z.params);for(const S in X)X[S]==null&&delete X[S];me=mt({},z,{params:f(X)}),ce.params=f(ce.params)}const _e=e.resolve(me,ce),Le=z.hash||"";_e.params=u(h(_e.params));const I=Gg(i,mt({},z,{hash:Og(Le),path:_e.path})),U=r.createHref(I);return mt({fullPath:I,hash:Le,query:i===pf?rx(z.query):z.query||{}},_e,{redirectedFrom:void 0,href:U})}function M(z){return typeof z=="string"?el(t,z,l.value.path):mt({},z)}function y(z,ce){if(c!==z)return rs(It.NAVIGATION_CANCELLED,{from:ce,to:z})}function P(z){return L(z)}function B(z){return P(mt(M(z),{replace:!0}))}function C(z,ce){const me=z.matched[z.matched.length-1];if(me&&me.redirect){const{redirect:_e}=me;let Le=typeof _e=="function"?_e(z,ce):_e;return typeof Le=="string"&&(Le=Le.includes("?")||Le.includes("#")?Le=M(Le):{path:Le},Le.params={}),mt({query:z.query,hash:z.hash,params:Le.path!=null?{}:z.params},Le)}}function L(z,ce){const me=c=p(z),_e=l.value,Le=z.state,I=z.force,U=z.replace===!0,X=C(me,_e);if(X)return L(mt(M(X),{state:typeof X=="object"?mt({},Le,X.state):Le,force:I,replace:U}),ce||me);const S=me;S.redirectedFrom=ce;let W;return!I&&Wg(i,_e,me)&&(W=rs(It.NAVIGATION_DUPLICATED,{to:S,from:_e}),Oe(_e,_e,!0,!1)),(W?Promise.resolve(W):A(S,_e)).catch(Y=>di(Y)?di(Y,It.NAVIGATION_GUARD_REDIRECT)?Y:Te(Y):$(Y,S,_e)).then(Y=>{if(Y){if(di(Y,It.NAVIGATION_GUARD_REDIRECT))return L(mt({replace:U},M(Y.to),{state:typeof Y.to=="object"?mt({},Le,Y.to.state):Le,force:I}),ce||S)}else Y=J(S,_e,!0,U,Le);return k(S,_e,Y),Y})}function H(z,ce){const me=y(z,ce);return me?Promise.reject(me):Promise.resolve()}function R(z){const ce=st.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(z):z()}function A(z,ce){let me;const[_e,Le,I]=ax(z,ce);me=nl(_e.reverse(),"beforeRouteLeave",z,ce);for(const X of _e)X.leaveGuards.forEach(S=>{me.push(Vi(S,z,ce))});const U=H.bind(null,z,ce);return me.push(U),te(me).then(()=>{me=[];for(const X of s.list())me.push(Vi(X,z,ce));return me.push(U),te(me)}).then(()=>{me=nl(Le,"beforeRouteUpdate",z,ce);for(const X of Le)X.updateGuards.forEach(S=>{me.push(Vi(S,z,ce))});return me.push(U),te(me)}).then(()=>{me=[];for(const X of I)if(X.beforeEnter)if(Gn(X.beforeEnter))for(const S of X.beforeEnter)me.push(Vi(S,z,ce));else me.push(Vi(X.beforeEnter,z,ce));return me.push(U),te(me)}).then(()=>(z.matched.forEach(X=>X.enterCallbacks={}),me=nl(I,"beforeRouteEnter",z,ce,R),me.push(U),te(me))).then(()=>{me=[];for(const X of a.list())me.push(Vi(X,z,ce));return me.push(U),te(me)}).catch(X=>di(X,It.NAVIGATION_CANCELLED)?X:Promise.reject(X))}function k(z,ce,me){o.list().forEach(_e=>R(()=>_e(z,ce,me)))}function J(z,ce,me,_e,Le){const I=y(z,ce);if(I)return I;const U=ce===Li,X=Wr?history.state:{};me&&(_e||U?r.replace(z.fullPath,mt({scroll:U&&X&&X.scroll},Le)):r.push(z.fullPath,Le)),l.value=z,Oe(z,ce,me,U),Te()}let le;function pe(){le||(le=r.listen((z,ce,me)=>{if(!tt.listening)return;const _e=p(z),Le=C(_e,tt.currentRoute.value);if(Le){L(mt(Le,{replace:!0,force:!0}),_e).catch(Vs);return}c=_e;const I=l.value;Wr&&Jg(df(I.fullPath,me.delta),Lo()),A(_e,I).catch(U=>di(U,It.NAVIGATION_ABORTED|It.NAVIGATION_CANCELLED)?U:di(U,It.NAVIGATION_GUARD_REDIRECT)?(L(mt(M(U.to),{force:!0}),_e).then(X=>{di(X,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&!me.delta&&me.type===Ql.pop&&r.go(-1,!1)}).catch(Vs),Promise.reject()):(me.delta&&r.go(-me.delta,!1),$(U,_e,I))).then(U=>{U=U||J(_e,I,!1),U&&(me.delta&&!di(U,It.NAVIGATION_CANCELLED)?r.go(-me.delta,!1):me.type===Ql.pop&&di(U,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),k(_e,I,U)}).catch(Vs)}))}let ee=Ss(),Q=Ss(),ae;function $(z,ce,me){Te(z);const _e=Q.list();return _e.length?_e.forEach(Le=>Le(z,ce,me)):console.error(z),Promise.reject(z)}function ye(){return ae&&l.value!==Li?Promise.resolve():new Promise((z,ce)=>{ee.add([z,ce])})}function Te(z){return ae||(ae=!z,pe(),ee.list().forEach(([ce,me])=>z?me(z):ce()),ee.reset()),z}function Oe(z,ce,me,_e){const{scrollBehavior:Le}=n;if(!Wr||!Le)return Promise.resolve();const I=!me&&Qg(df(z.fullPath,0))||(_e||!me)&&history.state&&history.state.scroll||null;return fd().then(()=>Le(z,ce,I)).then(U=>U&&$g(U)).catch(U=>$(U,z,ce))}const He=z=>r.go(z);let Je;const st=new Set,tt={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:v,resolve:p,options:n,push:P,replace:B,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:ye,install(z){z.component("RouterLink",vu),z.component("RouterView",op),z.config.globalProperties.$router=tt,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>ni(l)}),Wr&&!Je&&l.value===Li&&(Je=!0,P(r.location).catch(_e=>{}));const ce={};for(const _e in Li)Object.defineProperty(ce,_e,{get:()=>l.value[_e],enumerable:!0});z.provide(xu,tt),z.provide(_u,ad(ce)),z.provide(tc,l);const me=z.unmount;st.add(z),z.unmount=function(){st.delete(z),st.size<1&&(c=Li,le&&le(),le=null,l.value=Li,Je=!1,ae=!1),me()}}};function te(z){return z.reduce((ce,me)=>ce.then(()=>R(me)),Promise.resolve())}return tt}function Lx(n){return ii(_u)}const Ix={class:"app-frame"},Ux={class:"app-header"},Nx={class:"app-nav"},Fx={__name:"App",setup(n){const e=Lx(),t=[{name:"Home",to:"/"},{name:"Solar Scape",to:"/projects/solar-scape"}];return(i,r)=>(vn(),Rn("div",Ix,[et("header",Ux,[r[0]||(r[0]=et("div",null,[et("p",{class:"app-header__eyebrow"},"Solar Scape"),et("h1",{class:"app-header__title"},"MVRDV NEXT technologies")],-1)),et("nav",Nx,[(vn(),Rn(yn,null,co(t,s=>Jt(ni(vu),{key:s.to,to:s.to,class:Ao(["app-nav__link",{"app-nav__link--active":ni(e).path===s.to}])},{default:uu(()=>[po(qn(s.name),1)]),_:2},1032,["to","class"])),64))])]),Jt(ni(op))]))}},Ox={class:"home-view"},Bx={class:"project-grid"},zx={__name:"HomeView",setup(n){const e=[{title:"Solar Scape",path:"/projects/solar-scape",description:"Interactive Rhino plot viewer with Plot-linked voxel metadata and a coordinated analysis sidebar."}];return(t,i)=>(vn(),Rn("main",Ox,[i[1]||(i[1]=et("section",{class:"hero-card"},[et("p",{class:"hero-card__eyebrow"},"MVRDV NEXT technologies"),et("h2",null,"Solar Scape"),et("p",null,[po(" The app is structured around a single Three.js experience under "),et("strong",null,"src/projects/solar-scape"),po(" with dedicated viewer, loader, config, and metadata modules. ")])],-1)),et("section",Bx,[(vn(),Rn(yn,null,co(e,r=>Jt(ni(vu),{key:r.path,to:r.path,class:"project-card"},{default:uu(()=>[i[0]||(i[0]=et("p",{class:"project-card__eyebrow"},"Project",-1)),et("h3",null,qn(r.title),1),et("p",null,qn(r.description),1)]),_:2},1032,["to"])),64))])]))}},Af="/Solar_Scape/",pi={title:"Solar Scape",staticContextModelPath:`${Af}context/Context.3dm`,sunVoxelModelPath:`${Af}sun_voxel/Voxel_v2.3dm`,rhinoLibraryPath:"https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/",clickSelectionMaxDurationMs:180,clickSelectionMaxMovementPx:6,selectionMetadata:["Plot"],requiredMetadata:["Plot","Max_height","Occupied_voxels","Max_voxels","Potential"],filterableFields:["Max_height","Occupied_voxels","Max_voxels","Potential"],fieldLabels:{Plot:"Plot",Max_height:"Max height",Occupied_voxels:"Occupied voxels",Max_voxels:"Max voxels",Potential:"Potential"},filterBounds:{Max_height:{min:200,max:200,step:1},Occupied_voxels:{min:0,max:3500,step:1},Max_voxels:{min:0,max:3e4,step:1},Potential:{min:0,max:200,step:1}},valuePrefixes:{Potential:"x"}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="181",Jr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kx=0,wf=1,Vx=2,lp=1,Hx=2,yi=3,Ji=0,pn=1,En=2,Un=0,Qr=1,nc=2,Cf=3,Rf=4,Gx=5,fr=100,Wx=101,Xx=102,Yx=103,qx=104,jx=200,Kx=201,Zx=202,$x=203,ic=204,rc=205,Jx=206,Qx=207,e_=208,t_=209,n_=210,i_=211,r_=212,s_=213,a_=214,sc=0,ac=1,oc=2,ss=3,lc=4,cc=5,uc=6,fc=7,cp=0,o_=1,l_=2,Ki=0,up=1,fp=2,hp=3,dp=4,pp=5,mp=6,gp=7,xp=300,as=301,os=302,hc=303,dc=304,Io=306,$s=1e3,ln=1001,pc=1002,An=1003,c_=1004,_a=1005,Gt=1006,il=1007,Yi=1008,oi=1009,_p=1010,vp=1011,Js=1012,bu=1013,xr=1014,Ln=1015,Wt=1016,yu=1017,Mu=1018,Qs=1020,Sp=35902,bp=35899,yp=1021,Mp=1022,Xt=1023,ea=1026,ta=1027,Yr=1028,Eu=1029,Wi=1030,Tu=1031,Au=1033,Qa=33776,eo=33777,to=33778,no=33779,mc=35840,gc=35841,xc=35842,_c=35843,vc=36196,Sc=37492,bc=37496,yc=37808,Mc=37809,Ec=37810,Tc=37811,Ac=37812,wc=37813,Cc=37814,Rc=37815,Pc=37816,Dc=37817,Lc=37818,Ic=37819,Uc=37820,Nc=37821,Fc=36492,Oc=36494,Bc=36495,zc=36283,kc=36284,Vc=36285,Hc=36286,u_=3200,Ep=3201,Tp=0,f_=1,Xi="",Sn="srgb",bn="srgb-linear",go="linear",_t="srgb",Er=7680,Pf=519,h_=512,d_=513,p_=514,Ap=515,m_=516,g_=517,x_=518,__=519,Gc=35044,Df="300 es",ei=2e3,xo=2001;function wp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const v_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function va(n,e){return new v_[n](e)}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S_(){const n=na("canvas");return n.style.display="block",n}const Lf={};function _o(...n){const e="THREE."+n.shift();console.log(e,...n)}function it(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Dt(...n){const e="THREE."+n.shift();console.error(e,...n)}function ia(...n){const e=n.join(" ");e in Lf||(Lf[e]=!0,it(...n))}function b_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,vo=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function y_(n,e){return(n%e+e)%e}function rl(n,e,t){return(1-t)*n+t*e}function Jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const M_={DEG2RAD:io};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _r{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],_=s[a+2],v=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==_){let g=l*h+c*d+u*_+f*v;g<0&&(h=-h,d=-d,_=-_,v=-v,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),y=Math.sin(M);p=Math.sin(p*M)/y,o=Math.sin(o*M)/y,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+v*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+v*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new K,If=new _r;class at{constructor(e,t,i,r,s,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],v=r[0],g=r[3],p=r[6],M=r[1],y=r[4],P=r[7],B=r[2],C=r[5],L=r[8];return s[0]=a*v+o*M+l*B,s[3]=a*g+o*y+l*C,s[6]=a*p+o*P+l*L,s[1]=c*v+u*M+f*B,s[4]=c*g+u*y+f*C,s[7]=c*p+u*P+f*L,s[2]=h*v+d*M+_*B,s[5]=h*g+d*y+_*C,s[8]=h*p+d*P+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const al=new at,Uf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const n={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?go:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bn]:{primaries:e,whitePoint:i,transfer:go,toXYZ:Uf,fromXYZ:Nf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Uf,fromXYZ:Nf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const dt=E_();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Tr;class T_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Tr===void 0&&(Tr=na("canvas")),Tr.width=e.width,Tr.height=e.height;const r=Tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ol(r[a].image)):s.push(ol(r[a]))}else s=ol(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let w_=0;const ll=new K;class qt extends Sr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=ln,r=ln,s=Gt,a=Yi,o=Xt,l=oi,c=qt.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Zi(),this.name="",this.source=new wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=xp;qt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,P=(d+1)/2,B=(p+1)/2,C=(u+h)/4,L=(f+v)/4,H=(_+g)/4;return y>P&&y>B?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=L/i):P>B?P<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(P),i=C/r,s=H/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=L/s,r=H/s),this.set(i,r,s,t),this}let M=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(f-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends Sr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new qt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new wu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends C_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cp extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R_ extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),ba.subVectors(this.max,bs),Ar.subVectors(e.a,bs),wr.subVectors(e.b,bs),Cr.subVectors(e.c,bs),Ii.subVectors(wr,Ar),Ui.subVectors(Cr,wr),rr.subVectors(Ar,Cr);let t=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-rr.z,rr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,rr.z,0,-rr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-rr.y,rr.x,0];return!cl(t,Ar,wr,Cr,ba)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,Ar,wr,Cr,ba))?!1:(ya.crossVectors(Ii,Ui),t=[ya.x,ya.y,ya.z],cl(t,Ar,wr,Cr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new K,new K,new K,new K,new K,new K,new K,new K],Nn=new K,Sa=new us,Ar=new K,wr=new K,Cr=new K,Ii=new K,Ui=new K,rr=new K,bs=new K,ba=new K,ya=new K,sr=new K;function cl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){sr.fromArray(n,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=i.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const P_=new us,ys=new K,ul=new K;class fs{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):P_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(ul)),this.expandByPoint(ys.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new K,fl=new K,Ma=new K,Ni=new K,hl=new K,Ea=new K,dl=new K;class oa{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fl.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(fl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=Ni.dot(this.direction),l=-Ni.dot(Ma),c=Ni.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fl).addScaledVector(Ma,h),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,r,s){hl.subVectors(t,e),Ea.subVectors(i,e),dl.crossVectors(hl,Ea);let a=this.direction.dot(dl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(Ea.crossVectors(Ni,Ea));if(l<0)return null;const c=o*this.direction.dot(hl.cross(Ni));if(c<0||l+c>a)return null;const u=-o*Ni.dot(dl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,_,v,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,v,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h+v*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,L_)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Fi.crossVectors(i,xn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Fi.crossVectors(i,xn)),Fi.normalize(),Ta.crossVectors(xn,Fi),r[0]=Fi.x,r[4]=Ta.x,r[8]=xn.x,r[1]=Fi.y,r[5]=Ta.y,r[9]=xn.y,r[2]=Fi.z,r[6]=Ta.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],v=i[6],g=i[10],p=i[14],M=i[3],y=i[7],P=i[11],B=i[15],C=r[0],L=r[4],H=r[8],R=r[12],A=r[1],k=r[5],J=r[9],le=r[13],pe=r[2],ee=r[6],Q=r[10],ae=r[14],$=r[3],ye=r[7],Te=r[11],Oe=r[15];return s[0]=a*C+o*A+l*pe+c*$,s[4]=a*L+o*k+l*ee+c*ye,s[8]=a*H+o*J+l*Q+c*Te,s[12]=a*R+o*le+l*ae+c*Oe,s[1]=u*C+f*A+h*pe+d*$,s[5]=u*L+f*k+h*ee+d*ye,s[9]=u*H+f*J+h*Q+d*Te,s[13]=u*R+f*le+h*ae+d*Oe,s[2]=_*C+v*A+g*pe+p*$,s[6]=_*L+v*k+g*ee+p*ye,s[10]=_*H+v*J+g*Q+p*Te,s[14]=_*R+v*le+g*ae+p*Oe,s[3]=M*C+y*A+P*pe+B*$,s[7]=M*L+y*k+P*ee+B*ye,s[11]=M*H+y*J+P*Q+B*Te,s[15]=M*R+y*le+P*ae+B*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+v*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+g*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],v=e[13],g=e[14],p=e[15],M=f*g*c-v*h*c+v*l*d-o*g*d-f*l*p+o*h*p,y=_*h*c-u*g*c-_*l*d+a*g*d+u*l*p-a*h*p,P=u*v*c-_*f*c+_*o*d-a*v*d-u*o*p+a*f*p,B=_*f*l-u*v*l-_*o*h+a*v*h+u*o*g-a*f*g,C=t*M+i*y+r*P+s*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=M*L,e[1]=(v*h*s-f*g*s-v*r*d+i*g*d+f*r*p-i*h*p)*L,e[2]=(o*g*s-v*l*s+v*r*c-i*g*c-o*r*p+i*l*p)*L,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*L,e[4]=y*L,e[5]=(u*g*s-_*h*s+_*r*d-t*g*d-u*r*p+t*h*p)*L,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*p-t*l*p)*L,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*L,e[8]=P*L,e[9]=(_*f*s-u*v*s-_*i*d+t*v*d+u*i*p-t*f*p)*L,e[10]=(a*v*s-_*o*s+_*i*c-t*v*c-a*i*p+t*o*p)*L,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*L,e[12]=B*L,e[13]=(u*v*r-_*f*r+_*i*h-t*v*h-u*i*g+t*f*g)*L,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*g-t*o*g)*L,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,v=a*u,g=a*f,p=o*f,M=l*c,y=l*u,P=l*f,B=i.x,C=i.y,L=i.z;return r[0]=(1-(v+p))*B,r[1]=(d+P)*B,r[2]=(_-y)*B,r[3]=0,r[4]=(d-P)*C,r[5]=(1-(h+p))*C,r[6]=(g+M)*C,r[7]=0,r[8]=(_+y)*L,r[9]=(g-M)*L,r[10]=(1-(h+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const a=Rr.set(r[4],r[5],r[6]).length(),o=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,u=1/a,f=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ei,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===ei)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===xo)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ei,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===ei)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===xo)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new K,Fn=new Mt,D_=new K(0,0,0),L_=new K(1,1,1),Fi=new K,Ta=new K,xn=new K,Ff=new Mt,Of=new _r;class li{constructor(e=0,t=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I_=0;const Bf=new K,Pr=new _r,xi=new Mt,Aa=new K,Ms=new K,U_=new K,N_=new _r,zf=new K(1,0,0),kf=new K(0,1,0),Vf=new K(0,0,1),Hf={type:"added"},F_={type:"removed"},Dr={type:"childadded",child:null},pl={type:"childremoved",child:null};class Lt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new K,t=new li,i=new _r,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new at}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(kf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(kf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Aa.copy(e):Aa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ms,Aa,this.up):xi.lookAt(Aa,Ms,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(xi),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new K(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new K,_i=new K,ml=new K,vi=new K,Lr=new K,Ir=new K,Gf=new K,gl=new K,xl=new K,_l=new K,vl=new yt,Sl=new yt,bl=new yt;class Pn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),_i.subVectors(i,t),ml.subVectors(e,t);const a=On.dot(On),o=On.dot(_i),l=On.dot(ml),c=_i.dot(_i),u=_i.dot(ml),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return vl.setScalar(0),Sl.setScalar(0),bl.setScalar(0),vl.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vl,s.x),a.addScaledVector(Sl,s.y),a.addScaledVector(bl,s.z),a}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),_i.subVectors(e,t),On.cross(_i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),On.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Lr.subVectors(r,i),Ir.subVectors(s,i),gl.subVectors(e,i);const l=Lr.dot(gl),c=Ir.dot(gl);if(l<=0&&c<=0)return t.copy(i);xl.subVectors(e,r);const u=Lr.dot(xl),f=Ir.dot(xl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Lr,a);_l.subVectors(e,s);const d=Lr.dot(_l),_=Ir.dot(_l);if(_>=0&&d<=_)return t.copy(s);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ir,o);const g=u*_-d*f;if(g<=0&&f-u>=0&&d-_>=0)return Gf.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Gf,o);const p=1/(g+v+h);return a=v*p,o=h*p,t.copy(i).addScaledVector(Lr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function yl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=y_(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=yl(a,s,e+1/3),this.g=yl(a,s,e),this.b=yl(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=Rp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return dt.workingToColorSpace(Zt.copy(this),e),Math.round(ft(Zt.r*255,0,255))*65536+Math.round(ft(Zt.g*255,0,255))*256+Math.round(ft(Zt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Sn){dt.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(wa);const i=rl(Oi.h,wa.h,t),r=rl(Oi.s,wa.s,t),s=rl(Oi.l,wa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new $e;$e.NAMES=Rp;let O_=0;class er extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Qr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ic&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pp extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ai=B_();function B_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function z_(n){Math.abs(n)>65504&&it("DataUtils.toHalfFloat(): Value out of range."),n=ft(n,-65504,65504),Ai.floatView[0]=n;const e=Ai.uint32View[0],t=e>>23&511;return Ai.baseTable[t]+((e&8388607)>>Ai.shiftTable[t])}function k_(n){const e=n>>10;return Ai.uint32View[0]=Ai.mantissaTable[Ai.offsetTable[e]+(n&1023)]+Ai.exponentTable[e],Ai.floatView[0]}class Wf{static toHalfFloat(e){return z_(e)}static fromHalfFloat(e){return k_(e)}}const Ut=new K,Ca=new Xe;let V_=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class Dp extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lp extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ri extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let H_=0;const Cn=new Mt,Ml=new Lt,Ur=new K,_n=new us,Es=new us,Ht=new K;class mn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wp(e)?Lp:Dp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(_n.min,Es.min),_n.expandByPoint(Ht),Ht.addVectors(_n.max,Es.max),_n.expandByPoint(Ht)):(_n.expandByPoint(Es.min),_n.expandByPoint(Es.max))}_n.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Ur.fromBufferAttribute(e,c),Ht.add(Ur)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let H=0;H<i.count;H++)o[H]=new K,l[H]=new K;const c=new K,u=new K,f=new K,h=new Xe,d=new Xe,_=new Xe,v=new K,g=new K;function p(H,R,A){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,A),h.fromBufferAttribute(s,H),d.fromBufferAttribute(s,R),_.fromBufferAttribute(s,A),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const k=1/(d.x*_.y-_.x*d.y);isFinite(k)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(k),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(k),o[H].add(v),o[R].add(v),o[A].add(v),l[H].add(g),l[R].add(g),l[A].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let H=0,R=M.length;H<R;++H){const A=M[H],k=A.start,J=A.count;for(let le=k,pe=k+J;le<pe;le+=3)p(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const y=new K,P=new K,B=new K,C=new K;function L(H){B.fromBufferAttribute(r,H),C.copy(B);const R=o[H];y.copy(R),y.sub(B.multiplyScalar(B.dot(R))).normalize(),P.crossVectors(C,R);const k=P.dot(l[H])<0?-1:1;a.setXYZW(H,y.x,y.y,y.z,k)}for(let H=0,R=M.length;H<R;++H){const A=M[H],k=A.start,J=A.count;for(let le=k,pe=k+J;le<pe;le+=3)L(e.getX(le+0)),L(e.getX(le+1)),L(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new cn(h,u,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xf=new Mt,ar=new oa,Ra=new fs,Yf=new K,Pa=new K,Da=new K,La=new K,El=new K,Ia=new K,qf=new K,Ua=new K;class ci extends Lt{constructor(e=new mn,t=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(El.fromBufferAttribute(f,e),a?Ia.addScaledVector(El,u):Ia.addScaledVector(El.sub(t),u))}t.add(Ia)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ra.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ra,Yf)===null||ar.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(Xf.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let P=M,B=y;P<B;P+=3){const C=o.getX(P),L=o.getX(P+1),H=o.getX(P+2);r=Na(this,p,e,i,c,u,f,C,L,H),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=o.getX(g),y=o.getX(g+1),P=o.getX(g+2);r=Na(this,a,e,i,c,u,f,M,y,P),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const g=h[_],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let P=M,B=y;P<B;P+=3){const C=P,L=P+1,H=P+2;r=Na(this,p,e,i,c,u,f,C,L,H),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=g,y=g+1,P=g+2;r=Na(this,a,e,i,c,u,f,M,y,P),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function G_(n,e,t,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ji,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:n}}function Na(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Pa),n.getVertexPosition(l,Da),n.getVertexPosition(c,La);const u=G_(n,e,t,i,Pa,Da,La,qf);if(u){const f=new K;Pn.getBarycoord(qf,Pa,Da,La,f),r&&(u.uv=Pn.getInterpolatedAttribute(r,o,l,c,f,new Xe)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,o,l,c,f,new Xe)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new K,materialIndex:0};Pn.getNormal(Pa,Da,La,h.normal),u.face=h,u.barycoord=f}return u}class la extends mn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function _(v,g,p,M,y,P,B,C,L,H,R){const A=P/L,k=B/H,J=P/2,le=B/2,pe=C/2,ee=L+1,Q=H+1;let ae=0,$=0;const ye=new K;for(let Te=0;Te<Q;Te++){const Oe=Te*k-le;for(let He=0;He<ee;He++){const Je=He*A-J;ye[v]=Je*M,ye[g]=Oe*y,ye[p]=pe,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[g]=0,ye[p]=C>0?1:-1,u.push(ye.x,ye.y,ye.z),f.push(He/L),f.push(1-Te/H),ae+=1}}for(let Te=0;Te<H;Te++)for(let Oe=0;Oe<L;Oe++){const He=h+Oe+ee*Te,Je=h+Oe+ee*(Te+1),st=h+(Oe+1)+ee*(Te+1),tt=h+(Oe+1)+ee*Te;l.push(He,Je,tt),l.push(Je,st,tt),$+=6}o.addGroup(d,$,R),d+=$,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=ls(n[t]);for(const r in i)e[r]=i[r]}return e}function W_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ip(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Uo={clone:ls,merge:nn};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=Y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=W_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Up extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new K,jf=new Xe,Kf=new Xe;class dn extends Up{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,jf,Kf),t.subVectors(Kf,jf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Fr=1;class q_ extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);const s=new dn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);const a=new dn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);const o=new dn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);const l=new dn(Nr,Fr,e,t);l.layers=this.layers,this.add(l);const c=new dn(Nr,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Np extends qt{constructor(e=[],t=as,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j_ extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Np(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new la(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Un});s.uniforms.tEquirect.value=t;const a=new ci(r,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Gt),new q_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Fa extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Z_ extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new K;class cs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Op extends er{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Or;const Ts=new K,Br=new K,zr=new K,kr=new Xe,As=new Xe,Bp=new Mt,Oa=new K,ws=new K,Ba=new K,Zf=new Xe,Al=new Xe,$f=new Xe;class $_ extends Lt{constructor(e=new Op){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fp(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new cs(i,3,0,!1)),Or.setAttribute("uv",new cs(i,2,3,!1))}this.geometry=Or,this.material=e,this.center=new Xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),Bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-zr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;za(Oa.set(-.5,-.5,0),zr,a,Br,r,s),za(ws.set(.5,-.5,0),zr,a,Br,r,s),za(Ba.set(.5,.5,0),zr,a,Br,r,s),Zf.set(0,0),Al.set(1,0),$f.set(1,1);let o=e.ray.intersectTriangle(Oa,ws,Ba,!1,Ts);if(o===null&&(za(ws.set(-.5,.5,0),zr,a,Br,r,s),Al.set(0,1),o=e.ray.intersectTriangle(Oa,Ba,ws,!1,Ts),o===null))return;const l=e.ray.origin.distanceTo(Ts);l<e.near||l>e.far||t.push({distance:l,point:Ts.clone(),uv:Pn.getInterpolation(Ts,Oa,ws,Ba,Zf,Al,$f,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function za(n,e,t,i,r,s){kr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(As.x=s*kr.x-r*kr.y,As.y=r*kr.x+s*kr.y):As.copy(kr),n.copy(e),n.x+=As.x,n.y+=As.y,n.applyMatrix4(Bp)}class zp extends qt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=An,u=An,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J_ extends cn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wl=new K,Q_=new K,ev=new at;class Hi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wl.subVectors(i,t).cross(Q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ev.getNormalMatrix(e),r=this.coplanarPoint(wl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new fs,tv=new Xe(.5,.5),ka=new K;class Ru{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],v=s[9],g=s[10],p=s[11],M=s[12],y=s[13],P=s[14],B=s[15];if(r[0].setComponents(c-a,d-u,p-_,B-M).normalize(),r[1].setComponents(c+a,d+u,p+_,B+M).normalize(),r[2].setComponents(c+o,d+f,p+v,B+y).normalize(),r[3].setComponents(c-o,d-f,p-v,B-y).normalize(),i)r[4].setComponents(l,h,g,P).normalize(),r[5].setComponents(c-l,d-h,p-g,B-P).normalize();else if(r[4].setComponents(c-l,d-h,p-g,B-P).normalize(),t===ei)r[5].setComponents(c+l,d+h,p+g,B+P).normalize();else if(t===xo)r[5].setComponents(l,h,g,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const t=tv.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kp extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const So=new K,bo=new K,Jf=new Mt,Cs=new oa,Va=new fs,Cl=new K,Qf=new K;class nv extends Lt{constructor(e=new mn,t=new kp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)So.fromBufferAttribute(t,r-1),bo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=So.distanceTo(bo);e.setAttribute("lineDistance",new ri(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Jf.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Jf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const p=u.getX(v),M=u.getX(v+1),y=Ha(this,e,Cs,l,p,M,v);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(d),p=Ha(this,e,Cs,l,v,g,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const p=Ha(this,e,Cs,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Ha(this,e,Cs,l,_-1,d,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ha(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(So.fromBufferAttribute(o,r),bo.fromBufferAttribute(o,s),t.distanceSqToSegment(So,bo,Cl,Qf)>i)return;Cl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:Qf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Wc extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new Mt,Xc=new oa,Ga=new fs,Wa=new K;class iv extends Lt{constructor(e=new mn,t=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;eh.copy(r).invert(),Xc.copy(e.ray).applyMatrix4(eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,v=d;_<v;_++){const g=c.getX(_);Wa.fromBufferAttribute(f,g),th(Wa,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,v=d;_<v;_++)Wa.fromBufferAttribute(f,_),th(Wa,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function th(n,e,t,i,r,s,a){const o=Xc.distanceSqToPoint(n);if(o<t){const l=new K;Xc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class rv extends qt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vp extends qt{constructor(e,t,i=xr,r,s,a,o=An,l=An,c,u=ea,f=1){if(u!==ea&&u!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hp extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class No extends mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],v=[],g=[];for(let p=0;p<u;p++){const M=p*h-a;for(let y=0;y<c;y++){const P=y*f-s;_.push(P,-M,0),v.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,P=M+c*(p+1),B=M+1+c*(p+1),C=M+1+c*p;d.push(y,P,C),d.push(P,B,C)}this.setIndex(d),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.widthSegments,e.heightSegments)}}class sv extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gp extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class av extends Gp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wp extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ov extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lv{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cv=new lv;class Qi{constructor(e){this.manager=e!==void 0?e:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class uv extends Error{constructor(e,t){super(e),this.response=t}}class Gs extends Qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hs.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:i,onError:r});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let v=0;const g=new ReadableStream({start(p){M();function M(){f.read().then(({done:y,value:P})=>{if(y)p.close();else{v+=P.byteLength;const B=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:d});for(let C=0,L=u.length;C<L;C++){const H=u[C];H.onProgress&&H.onProgress(B)}p.enqueue(P),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new uv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Hs.add(`file:${e}`,c);const u=Si[e];delete Si[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vr=new WeakMap;class fv extends Qi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Hs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Vr.get(a);f===void 0&&(f=[],Vr.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=na("img");function l(){u(),t&&t(this);const f=Vr.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Vr.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Hs.remove(`image:${e}`);const h=Vr.get(this)||[];for(let d=0;d<h.length;d++){const _=h[d];_.onError&&_.onError(f)}Vr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hs.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class hv extends Qi{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new zp,o=new Gs(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{u(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:ln,a.wrapT=c.wrapT!==void 0?c.wrapT:ln,a.magFilter=c.magFilter!==void 0?c.magFilter:Gt,a.minFilter=c.minFilter!==void 0?c.minFilter:Gt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Yi),c.mipmapCount===1&&(a.minFilter=Gt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,r),a}}class dv extends Qi{constructor(e){super(e)}load(e,t,i,r){const s=new qt,a=new fv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ca extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Rl=new Mt,nh=new K,ih=new K;class Pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pv extends Pu{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=vo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mv extends ca{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new pv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rh=new Mt,Rs=new K,Pl=new K;class gv extends Pu{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rs),Pl.copy(i.position),Pl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pl),i.updateMatrixWorld(),r.makeTranslation(-Rs.x,-Rs.y,-Rs.z),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,i.coordinateSystem,i.reversedDepth)}}class xv extends ca{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Du extends Up{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _v extends Pu{constructor(){super(new Du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yc extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vv extends ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sv extends ca{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class bv extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class yv extends Qi{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new Gs(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):Dt(l),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(d,_){if(t[_]!==void 0)return t[_];const g=d.interleavedBuffers[_],p=s(d,g.buffer),M=va(g.type,p),y=new Fp(M,g.stride);return y.uuid=g.uuid,t[_]=y,y}function s(d,_){if(i[_]!==void 0)return i[_];const g=d.arrayBuffers[_],p=new Uint32Array(g).buffer;return i[_]=p,p}const a=e.isInstancedBufferGeometry?new bv:new mn,o=e.data.index;if(o!==void 0){const d=va(o.type,o.array);a.setIndex(new cn(d,1))}const l=e.data.attributes;for(const d in l){const _=l[d];let v;if(_.isInterleavedBufferAttribute){const g=r(e.data,_.data);v=new cs(g,_.itemSize,_.offset,_.normalized)}else{const g=va(_.type,_.array),p=_.isInstancedBufferAttribute?J_:cn;v=new p(g,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),_.usage!==void 0&&v.setUsage(_.usage),a.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const _=c[d],v=[];for(let g=0,p=_.length;g<p;g++){const M=_[g];let y;if(M.isInterleavedBufferAttribute){const P=r(e.data,M.data);y=new cs(P,M.itemSize,M.offset,M.normalized)}else{const P=va(M.type,M.array);y=new cn(P,M.itemSize,M.normalized)}M.name!==void 0&&(y.name=M.name),v.push(y)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,_=f.length;d!==_;++d){const v=f[d];a.addGroup(v.start,v.count,v.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new fs().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Mv extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ev{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const sh=new Mt;class Tv{constructor(e,t,i=0,r=1/0){this.ray=new oa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(e,t=!0,i=[]){return qc(e,this,i,t),i.sort(ah),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qc(e[r],this,i,t);return i.sort(ah),i}}function ah(n,e){return n.distance-e.distance}function qc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)qc(s[a],e,t,!0)}}class oh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Av extends Sr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){it("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lh(n,e,t,i){const r=wv(i);switch(t){case yp:return n*e;case Yr:return n*e/r.components*r.byteLength;case Eu:return n*e/r.components*r.byteLength;case Wi:return n*e*2/r.components*r.byteLength;case Tu:return n*e*2/r.components*r.byteLength;case Mp:return n*e*3/r.components*r.byteLength;case Xt:return n*e*4/r.components*r.byteLength;case Au:return n*e*4/r.components*r.byteLength;case Qa:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:case _c:return Math.max(n,16)*Math.max(e,8)/4;case mc:case xc:return Math.max(n,8)*Math.max(e,8)/2;case vc:case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Oc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vc:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wv(n){switch(n){case oi:case _p:return{byteLength:1,components:1};case Js:case vp:case Wt:return{byteLength:2,components:1};case yu:case Mu:return{byteLength:2,components:4};case xr:case bu:case Ln:return{byteLength:4,components:1};case Sp:case bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cv(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],v=f[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pv=`#ifdef USE_ALPHAHASH
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
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nv=`#ifdef USE_AOMAP
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
#endif`,Fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ov=`#ifdef USE_BATCHING
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
#endif`,Bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
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
#endif`,Gv=`#ifdef USE_BUMPMAP
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
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jv=`#define PI 3.141592653589793
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
} // validated`,Qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eS=`vec3 transformedNormal = objectNormal;
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
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oS=`#ifdef USE_ENVMAP
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
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
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
#endif`,uS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gS=`#ifdef USE_GRADIENTMAP
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
}`,xS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_S=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SS=`uniform bool receiveShadow;
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
#endif`,bS=`#ifdef USE_ENVMAP
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
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ES=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
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
#endif`,wS=`uniform sampler2D dfgLUT;
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
}`,CS=`
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
#endif`,RS=`#if defined( RE_IndirectDiffuse )
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
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BS=`#if defined( USE_POINTS_UV )
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
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`#ifdef USE_MORPHTARGETS
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
#endif`,XS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
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
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QS=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ib=`vec3 packNormalToRGB( const in vec3 normal ) {
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
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,db=`float getShadowMask() {
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
}`,pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,_b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Fb=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,Bb=`varying vec3 vWorldDirection;
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
}`,kb=`uniform float scale;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Wb=`#define LAMBERT
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
}`,Xb=`#define LAMBERT
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
}`,Yb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,jb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,Zb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,Jb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,oy=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Rv,alphahash_pars_fragment:Pv,alphamap_fragment:Dv,alphamap_pars_fragment:Lv,alphatest_fragment:Iv,alphatest_pars_fragment:Uv,aomap_fragment:Nv,aomap_pars_fragment:Fv,batching_pars_vertex:Ov,batching_vertex:Bv,begin_vertex:zv,beginnormal_vertex:kv,bsdfs:Vv,iridescence_fragment:Hv,bumpmap_pars_fragment:Gv,clipping_planes_fragment:Wv,clipping_planes_pars_fragment:Xv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:qv,color_fragment:jv,color_pars_fragment:Kv,color_pars_vertex:Zv,color_vertex:$v,common:Jv,cube_uv_reflection_fragment:Qv,defaultnormal_vertex:eS,displacementmap_pars_vertex:tS,displacementmap_vertex:nS,emissivemap_fragment:iS,emissivemap_pars_fragment:rS,colorspace_fragment:sS,colorspace_pars_fragment:aS,envmap_fragment:oS,envmap_common_pars_fragment:lS,envmap_pars_fragment:cS,envmap_pars_vertex:uS,envmap_physical_pars_fragment:bS,envmap_vertex:fS,fog_vertex:hS,fog_pars_vertex:dS,fog_fragment:pS,fog_pars_fragment:mS,gradientmap_pars_fragment:gS,lightmap_pars_fragment:xS,lights_lambert_fragment:_S,lights_lambert_pars_fragment:vS,lights_pars_begin:SS,lights_toon_fragment:yS,lights_toon_pars_fragment:MS,lights_phong_fragment:ES,lights_phong_pars_fragment:TS,lights_physical_fragment:AS,lights_physical_pars_fragment:wS,lights_fragment_begin:CS,lights_fragment_maps:RS,lights_fragment_end:PS,logdepthbuf_fragment:DS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:IS,logdepthbuf_vertex:US,map_fragment:NS,map_pars_fragment:FS,map_particle_fragment:OS,map_particle_pars_fragment:BS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:kS,morphinstance_vertex:VS,morphcolor_vertex:HS,morphnormal_vertex:GS,morphtarget_pars_vertex:WS,morphtarget_vertex:XS,normal_fragment_begin:YS,normal_fragment_maps:qS,normal_pars_fragment:jS,normal_pars_vertex:KS,normal_vertex:ZS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:QS,clearcoat_pars_fragment:eb,iridescence_pars_fragment:tb,opaque_fragment:nb,packing:ib,premultiplied_alpha_fragment:rb,project_vertex:sb,dithering_fragment:ab,dithering_pars_fragment:ob,roughnessmap_fragment:lb,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:fb,shadowmap_vertex:hb,shadowmask_pars_fragment:db,skinbase_vertex:pb,skinning_pars_vertex:mb,skinning_vertex:gb,skinnormal_vertex:xb,specularmap_fragment:_b,specularmap_pars_fragment:vb,tonemapping_fragment:Sb,tonemapping_pars_fragment:bb,transmission_fragment:yb,transmission_pars_fragment:Mb,uv_pars_fragment:Eb,uv_pars_vertex:Tb,uv_vertex:Ab,worldpos_vertex:wb,background_vert:Cb,background_frag:Rb,backgroundCube_vert:Pb,backgroundCube_frag:Db,cube_vert:Lb,cube_frag:Ib,depth_vert:Ub,depth_frag:Nb,distanceRGBA_vert:Fb,distanceRGBA_frag:Ob,equirect_vert:Bb,equirect_frag:zb,linedashed_vert:kb,linedashed_frag:Vb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Wb,meshlambert_frag:Xb,meshmatcap_vert:Yb,meshmatcap_frag:qb,meshnormal_vert:jb,meshnormal_frag:Kb,meshphong_vert:Zb,meshphong_frag:$b,meshphysical_vert:Jb,meshphysical_frag:Qb,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:ry,shadow_frag:sy,sprite_vert:ay,sprite_frag:oy},Fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Zn={basic:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:nn([Fe.points,Fe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:nn([Fe.common,Fe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:nn([Fe.sprite,Fe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:nn([Fe.lights,Fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Zn.physical={uniforms:nn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Xa={r:0,b:0,g:0},lr=new li,ly=new Mt;function cy(n,e,t,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let P=y.isScene===!0?y.background:null;return P&&P.isTexture&&(P=(y.backgroundBlurriness>0?t:e).get(P)),P}function v(y){let P=!1;const B=_(y);B===null?p(o,l):B&&B.isColor&&(p(B,1),P=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,P){const B=_(P);B&&(B.isCubeTexture||B.mapping===Io)?(u===void 0&&(u=new ci(new la(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:ls(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),lr.copy(P.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=B,u.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler(lr)),u.material.toneMapped=dt.getTransfer(B.colorSpace)!==_t,(f!==B||h!==B.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=B,h=B.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):B&&B.isTexture&&(c===void 0&&(c=new ci(new No(2,2),new Yt({name:"BackgroundMaterial",uniforms:ls(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=B,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=dt.getTransfer(B.colorSpace)!==_t,B.matrixAutoUpdate===!0&&B.updateMatrix(),c.material.uniforms.uvTransform.value.copy(B.matrix),(f!==B||h!==B.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=B,h=B.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,P){y.getRGB(Xa,Ip(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,P,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,P=1){o.set(y),l=P,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:g,dispose:M}}function uy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(A,k,J,le,pe){let ee=!1;const Q=f(le,J,k);s!==Q&&(s=Q,c(s.object)),ee=d(A,le,J,pe),ee&&_(A,le,J,pe),pe!==null&&e.update(pe,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,P(A,k,J,le),pe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function f(A,k,J){const le=J.wireframe===!0;let pe=i[A.id];pe===void 0&&(pe={},i[A.id]=pe);let ee=pe[k.id];ee===void 0&&(ee={},pe[k.id]=ee);let Q=ee[le];return Q===void 0&&(Q=h(l()),ee[le]=Q),Q}function h(A){const k=[],J=[],le=[];for(let pe=0;pe<t;pe++)k[pe]=0,J[pe]=0,le[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:le,object:A,attributes:{},index:null}}function d(A,k,J,le){const pe=s.attributes,ee=k.attributes;let Q=0;const ae=J.getAttributes();for(const $ in ae)if(ae[$].location>=0){const Te=pe[$];let Oe=ee[$];if(Oe===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(Oe=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(Oe=A.instanceColor)),Te===void 0||Te.attribute!==Oe||Oe&&Te.data!==Oe.data)return!0;Q++}return s.attributesNum!==Q||s.index!==le}function _(A,k,J,le){const pe={},ee=k.attributes;let Q=0;const ae=J.getAttributes();for(const $ in ae)if(ae[$].location>=0){let Te=ee[$];Te===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(Te=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(Te=A.instanceColor));const Oe={};Oe.attribute=Te,Te&&Te.data&&(Oe.data=Te.data),pe[$]=Oe,Q++}s.attributes=pe,s.attributesNum=Q,s.index=le}function v(){const A=s.newAttributes;for(let k=0,J=A.length;k<J;k++)A[k]=0}function g(A){p(A,0)}function p(A,k){const J=s.newAttributes,le=s.enabledAttributes,pe=s.attributeDivisors;J[A]=1,le[A]===0&&(n.enableVertexAttribArray(A),le[A]=1),pe[A]!==k&&(n.vertexAttribDivisor(A,k),pe[A]=k)}function M(){const A=s.newAttributes,k=s.enabledAttributes;for(let J=0,le=k.length;J<le;J++)k[J]!==A[J]&&(n.disableVertexAttribArray(J),k[J]=0)}function y(A,k,J,le,pe,ee,Q){Q===!0?n.vertexAttribIPointer(A,k,J,pe,ee):n.vertexAttribPointer(A,k,J,le,pe,ee)}function P(A,k,J,le){v();const pe=le.attributes,ee=J.getAttributes(),Q=k.defaultAttributeValues;for(const ae in ee){const $=ee[ae];if($.location>=0){let ye=pe[ae];if(ye===void 0&&(ae==="instanceMatrix"&&A.instanceMatrix&&(ye=A.instanceMatrix),ae==="instanceColor"&&A.instanceColor&&(ye=A.instanceColor)),ye!==void 0){const Te=ye.normalized,Oe=ye.itemSize,He=e.get(ye);if(He===void 0)continue;const Je=He.buffer,st=He.type,tt=He.bytesPerElement,te=st===n.INT||st===n.UNSIGNED_INT||ye.gpuType===bu;if(ye.isInterleavedBufferAttribute){const z=ye.data,ce=z.stride,me=ye.offset;if(z.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)p($.location+_e,z.meshPerAttribute);A.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let _e=0;_e<$.locationSize;_e++)g($.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let _e=0;_e<$.locationSize;_e++)y($.location+_e,Oe/$.locationSize,st,Te,ce*tt,(me+Oe/$.locationSize*_e)*tt,te)}else{if(ye.isInstancedBufferAttribute){for(let z=0;z<$.locationSize;z++)p($.location+z,ye.meshPerAttribute);A.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let z=0;z<$.locationSize;z++)g($.location+z);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let z=0;z<$.locationSize;z++)y($.location+z,Oe/$.locationSize,st,Te,Oe*tt,Oe/$.locationSize*z*tt,te)}}else if(Q!==void 0){const Te=Q[ae];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv($.location,Te);break;case 3:n.vertexAttrib3fv($.location,Te);break;case 4:n.vertexAttrib4fv($.location,Te);break;default:n.vertexAttrib1fv($.location,Te)}}}}M()}function B(){H();for(const A in i){const k=i[A];for(const J in k){const le=k[J];for(const pe in le)u(le[pe].object),delete le[pe];delete k[J]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;const k=i[A.id];for(const J in k){const le=k[J];for(const pe in le)u(le[pe].object),delete le[pe];delete k[J]}delete i[A.id]}function L(A){for(const k in i){const J=i[k];if(J[A.id]===void 0)continue;const le=J[A.id];for(const pe in le)u(le[pe].object),delete le[pe];delete J[A.id]}}function H(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:H,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function fy(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Xt&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const H=L===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==oi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ln&&!H)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:P,vertexTextures:B,maxSamples:C}}function dy(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hi,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const M=s?0:i,y=M*4;let P=p.clippingState||null;l.value=P,P=u(_,h,y,d);for(let B=0;B!==y;++B)P[B]=t[B];p.clippingState=P,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const p=d+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,P=d;y!==v;++y,P+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(g,P),g[P+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function py(n){let e=new WeakMap;function t(a,o){return o===hc?a.mapping=as:o===dc&&(a.mapping=os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===hc||o===dc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new j_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const qi=4,ch=[.125,.215,.35,.446,.526,.582],hr=20,my=256,Ps=new Du,uh=new $e;let Dl=null,Ll=0,Il=0,Ul=!1;const gy=new K;class fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=gy}=s;Dl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Ll,Il),this._renderer.xr.enabled=Ul,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Wt,format:Xt,colorSpace:bn,depthBuffer:!1},r=hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xy(s)),this._blurMaterial=vy(s,e,t),this._ggxMaterial=_y(s,e,t)}return r}_compileMaterial(e){const t=new ci(new mn,e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,i,r,s){const l=new dn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(uh),f.toneMapping=Ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new la,new Pp({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(uh),p=!0);for(let y=0;y<6;y++){const P=y%3;P===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):P===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const B=this._cubeSize;Hr(r,P*B,y>2?B:0,B,B),f.setRenderTarget(r),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===as||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,d=f*h,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-qi?i-_+qi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Hr(s,g,p,3*v,2*v),r.setRenderTarget(s),r.render(o,Ps),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Hr(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(o,Ps)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hr-1),v=s/_,g=isFinite(s)?1+Math.floor(u*v):hr;g>hr&&it(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hr}`);const p=[];let M=0;for(let L=0;L<hr;++L){const H=L/v,R=Math.exp(-H*H/2);p.push(R),L===0?M+=R:L<g&&(M+=2*R)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const P=this._sizeLods[r],B=3*P*(r>y-qi?r-y+qi:0),C=4*(this._cubeSize-P);Hr(t,B,C,3*P,2*P),l.setRenderTarget(t),l.render(f,Ps)}}function xy(n){const e=[],t=[],i=[];let r=n;const s=n-qi+1+ch.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-qi?l=ch[a-n+qi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,v=3,g=2,p=1,M=new Float32Array(v*_*d),y=new Float32Array(g*_*d),P=new Float32Array(p*_*d);for(let C=0;C<d;C++){const L=C%3*2/3-1,H=C>2?0:-1,R=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];M.set(R,v*_*C),y.set(h,g*_*C);const A=[C,C,C,C,C,C];P.set(A,p*_*C)}const B=new mn;B.setAttribute("position",new cn(M,v)),B.setAttribute("uv",new cn(y,g)),B.setAttribute("faceIndex",new cn(P,p)),i.push(new ci(B,null)),r>qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function hh(n,e,t){const i=new sn(n,e,t);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _y(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function vy(n,e,t){const i=new Float32Array(hr),r=new K(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function dh(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ph(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function Sy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===hc||l===dc,u=l===as||l===os;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new fh(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new fh(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function by(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ia("WebGLRenderer: "+i+" extension not supported."),r}}}function yy(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let y=0,P=M.length;y<P;y+=3){const B=M[y+0],C=M[y+1],L=M[y+2];h.push(B,C,C,L,L,B)}}else if(_!==void 0){const M=_.array;v=_.version;for(let y=0,P=M.length/3-1;y<P;y+=3){const B=y+0,C=y+1,L=y+2;h.push(B,C,C,L,L,B)}}else return;const g=new(wp(h)?Lp:Dp)(h,1);g.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function My(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*a,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let g=0;for(let p=0;p<_;p++)g+=d[p];t.update(g,i,1)}function f(h,d,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*v[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ey(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ty(n,e,t){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let A=function(){H.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var d=A;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let P=0;_===!0&&(P=1),v===!0&&(P=2),g===!0&&(P=3);let B=o.attributes.position.count*P,C=1;B>e.maxTextureSize&&(C=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const L=new Float32Array(B*C*4*f),H=new Cp(L,B,C,f);H.type=Ln,H.needsUpdate=!0;const R=P*4;for(let k=0;k<f;k++){const J=p[k],le=M[k],pe=y[k],ee=B*C*4*k;for(let Q=0;Q<J.count;Q++){const ae=Q*R;_===!0&&(r.fromBufferAttribute(J,Q),L[ee+ae+0]=r.x,L[ee+ae+1]=r.y,L[ee+ae+2]=r.z,L[ee+ae+3]=0),v===!0&&(r.fromBufferAttribute(le,Q),L[ee+ae+4]=r.x,L[ee+ae+5]=r.y,L[ee+ae+6]=r.z,L[ee+ae+7]=0),g===!0&&(r.fromBufferAttribute(pe,Q),L[ee+ae+8]=r.x,L[ee+ae+9]=r.y,L[ee+ae+10]=r.z,L[ee+ae+11]=pe.itemSize===4?r.w:1)}}h={count:f,texture:H,size:new Xe(B,C)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ay(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Yp=new qt,mh=new Vp(1,1),qp=new Cp,jp=new R_,Kp=new Np,gh=[],xh=[],_h=new Float32Array(16),vh=new Float32Array(9),Sh=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gh[r];if(s===void 0&&(s=new Float32Array(r),gh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function Dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),kt(t,i)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;vh.set(i),n.uniformMatrix3fv(this.addr,!1,vh),kt(t,i)}}function Iy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;_h.set(i),n.uniformMatrix4fv(this.addr,!1,_h),kt(t,i)}}function Uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Hy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mh.compareFunction=Ap,s=mh):s=Yp,t.setTexture2D(e||s,r)}function Gy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||jp,r)}function Wy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kp,r)}function Xy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qp,r)}function Yy(n){switch(n){case 5126:return wy;case 35664:return Cy;case 35665:return Ry;case 35666:return Py;case 35674:return Dy;case 35675:return Ly;case 35676:return Iy;case 5124:case 35670:return Uy;case 35667:case 35671:return Ny;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return By;case 36294:return zy;case 36295:return ky;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}function qy(n,e){n.uniform1fv(this.addr,e)}function jy(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function Ky(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function Zy(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function $y(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jy(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qy(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eM(n,e){n.uniform1iv(this.addr,e)}function tM(n,e){n.uniform2iv(this.addr,e)}function nM(n,e){n.uniform3iv(this.addr,e)}function iM(n,e){n.uniform4iv(this.addr,e)}function rM(n,e){n.uniform1uiv(this.addr,e)}function sM(n,e){n.uniform2uiv(this.addr,e)}function aM(n,e){n.uniform3uiv(this.addr,e)}function oM(n,e){n.uniform4uiv(this.addr,e)}function lM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yp,s[a])}function cM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jp,s[a])}function uM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Kp,s[a])}function fM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qp,s[a])}function hM(n){switch(n){case 5126:return qy;case 35664:return jy;case 35665:return Ky;case 35666:return Zy;case 35674:return $y;case 35675:return Jy;case 35676:return Qy;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}class dM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yy(t.type)}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hM(t.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function bh(n,e){n.seq.push(e),n.map[e.id]=e}function gM(n,e,t){const i=n.name,r=i.length;for(Nl.lastIndex=0;;){const s=Nl.exec(i),a=Nl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bh(t,c===void 0?new dM(o,n,e):new pM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new mM(o),bh(t,f)),t=f}}}class ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);gM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function yh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xM=37297;let _M=0;function vM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Mh=new at;function SM(n){dt._getMatrix(Mh,dt.workingColorSpace,n);const e=`mat3( ${Mh.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case go:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Eh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+vM(n.getShaderSource(e),o)}else return s}function bM(n,e){const t=SM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yM(n,e){let t;switch(e){case up:t="Linear";break;case fp:t="Reinhard";break;case hp:t="Cineon";break;case dp:t="ACESFilmic";break;case mp:t="AgX";break;case gp:t="Neutral";break;case pp:t="Custom";break;default:it("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ya=new K;function MM(){dt.getLuminanceCoefficients(Ya);const n=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function TM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ls(n){return n!==""}function Th(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(wM,RM)}const CM=new Map;function RM(n,e){let t=ct[e];if(t===void 0){const i=CM.get(e);if(i!==void 0)t=ct[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}const PM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(n){return n.replace(PM,DM)}function DM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ch(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function LM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function IM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function NM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cp:e="ENVMAP_BLENDING_MULTIPLY";break;case o_:e="ENVMAP_BLENDING_MIX";break;case l_:e="ENVMAP_BLENDING_ADD";break}return e}function FM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=LM(t),c=IM(t),u=UM(t),f=NM(t),h=FM(t),d=EM(t),_=TM(s),v=r.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(g=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ki?yM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,bM("linearToOutputTexel",t.outputColorSpace),MM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=jc(a),a=Th(a,t),a=Ah(a,t),o=jc(o),o=Th(o,t),o=Ah(o,t),a=wh(a),o=wh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+a,P=M+p+o,B=yh(r,r.VERTEX_SHADER,y),C=yh(r,r.FRAGMENT_SHADER,P);r.attachShader(v,B),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(k){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(v)||"",le=r.getShaderInfoLog(B)||"",pe=r.getShaderInfoLog(C)||"",ee=J.trim(),Q=le.trim(),ae=pe.trim();let $=!0,ye=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,B,C);else{const Te=Eh(r,B,"vertex"),Oe=Eh(r,C,"fragment");Dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+Te+`
`+Oe)}else ee!==""?it("WebGLProgram: Program Info Log:",ee):(Q===""||ae==="")&&(ye=!1);ye&&(k.diagnostics={runnable:$,programLog:ee,vertexShader:{log:Q,prefix:g},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(B),r.deleteShader(C),H=new ro(r,v),R=AM(r,v)}let H;this.getUniforms=function(){return H===void 0&&L(this),H};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,xM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_M++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=C,this}let BM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kM(e),t.set(e,i)),i}}class kM{constructor(e){this.id=BM++,this.code=e,this.usedTimes=0}}function VM(n,e,t,i,r,s,a){const o=new Cu,l=new zM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(R){return c.add(R),R===0?"uv":`uv${R}`}function g(R,A,k,J,le){const pe=J.fog,ee=le.geometry,Q=R.isMeshStandardMaterial?J.environment:null,ae=(R.isMeshStandardMaterial?t:e).get(R.envMap||Q),$=ae&&ae.mapping===Io?ae.image.height:null,ye=_[R.type];R.precision!==null&&(d=r.getMaxPrecision(R.precision),d!==R.precision&&it("WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));const Te=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Oe=Te!==void 0?Te.length:0;let He=0;ee.morphAttributes.position!==void 0&&(He=1),ee.morphAttributes.normal!==void 0&&(He=2),ee.morphAttributes.color!==void 0&&(He=3);let Je,st,tt,te;if(ye){const pt=Zn[ye];Je=pt.vertexShader,st=pt.fragmentShader}else Je=R.vertexShader,st=R.fragmentShader,l.update(R),tt=l.getVertexShaderID(R),te=l.getFragmentShaderID(R);const z=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),me=le.isInstancedMesh===!0,_e=le.isBatchedMesh===!0,Le=!!R.map,I=!!R.matcap,U=!!ae,X=!!R.aoMap,S=!!R.lightMap,W=!!R.bumpMap,Y=!!R.normalMap,de=!!R.displacementMap,re=!!R.emissiveMap,ge=!!R.metalnessMap,Z=!!R.roughnessMap,Me=R.anisotropy>0,E=R.clearcoat>0,b=R.dispersion>0,G=R.iridescence>0,se=R.sheen>0,he=R.transmission>0,ie=Me&&!!R.anisotropyMap,Be=E&&!!R.clearcoatMap,we=E&&!!R.clearcoatNormalMap,Ge=E&&!!R.clearcoatRoughnessMap,Ve=G&&!!R.iridescenceMap,Ee=G&&!!R.iridescenceThicknessMap,Ae=se&&!!R.sheenColorMap,Ne=se&&!!R.sheenRoughnessMap,We=!!R.specularMap,De=!!R.specularColorMap,Ye=!!R.specularIntensityMap,V=he&&!!R.transmissionMap,Ie=he&&!!R.thicknessMap,oe=!!R.gradientMap,Pe=!!R.alphaMap,Re=R.alphaTest>0,ve=!!R.alphaHash,qe=!!R.extensions;let nt=Ki;R.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Et={shaderID:ye,shaderType:R.type,shaderName:R.name,vertexShader:Je,fragmentShader:st,defines:R.defines,customVertexShaderID:tt,customFragmentShaderID:te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:_e,batchingColor:_e&&le._colorsTexture!==null,instancing:me,instancingColor:me&&le.instanceColor!==null,instancingMorph:me&&le.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:bn,alphaToCoverage:!!R.alphaToCoverage,map:Le,matcap:I,envMap:U,envMapMode:U&&ae.mapping,envMapCubeUVHeight:$,aoMap:X,lightMap:S,bumpMap:W,normalMap:Y,displacementMap:h&&de,emissiveMap:re,normalMapObjectSpace:Y&&R.normalMapType===f_,normalMapTangentSpace:Y&&R.normalMapType===Tp,metalnessMap:ge,roughnessMap:Z,anisotropy:Me,anisotropyMap:ie,clearcoat:E,clearcoatMap:Be,clearcoatNormalMap:we,clearcoatRoughnessMap:Ge,dispersion:b,iridescence:G,iridescenceMap:Ve,iridescenceThicknessMap:Ee,sheen:se,sheenColorMap:Ae,sheenRoughnessMap:Ne,specularMap:We,specularColorMap:De,specularIntensityMap:Ye,transmission:he,transmissionMap:V,thicknessMap:Ie,gradientMap:oe,opaque:R.transparent===!1&&R.blending===Qr&&R.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Re,alphaHash:ve,combine:R.combine,mapUv:Le&&v(R.map.channel),aoMapUv:X&&v(R.aoMap.channel),lightMapUv:S&&v(R.lightMap.channel),bumpMapUv:W&&v(R.bumpMap.channel),normalMapUv:Y&&v(R.normalMap.channel),displacementMapUv:de&&v(R.displacementMap.channel),emissiveMapUv:re&&v(R.emissiveMap.channel),metalnessMapUv:ge&&v(R.metalnessMap.channel),roughnessMapUv:Z&&v(R.roughnessMap.channel),anisotropyMapUv:ie&&v(R.anisotropyMap.channel),clearcoatMapUv:Be&&v(R.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&v(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&v(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(R.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(R.sheenRoughnessMap.channel),specularMapUv:We&&v(R.specularMap.channel),specularColorMapUv:De&&v(R.specularColorMap.channel),specularIntensityMapUv:Ye&&v(R.specularIntensityMap.channel),transmissionMapUv:V&&v(R.transmissionMap.channel),thicknessMapUv:Ie&&v(R.thicknessMap.channel),alphaMapUv:Pe&&v(R.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Y||Me),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!ee.attributes.uv&&(Le||Pe),fog:!!pe,useFog:R.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:le.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:He,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:Le&&R.map.isVideoTexture===!0&&dt.getTransfer(R.map.colorSpace)===_t,decodeVideoTextureEmissive:re&&R.emissiveMap.isVideoTexture===!0&&dt.getTransfer(R.emissiveMap.colorSpace)===_t,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===En,flipSided:R.side===pn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:qe&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&R.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)A.push(k),A.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(M(A,R),y(A,R),A.push(n.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function M(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function y(R,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),A.gradientMap&&o.enable(22),R.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),R.push(o.mask)}function P(R){const A=_[R.type];let k;if(A){const J=Zn[A];k=Uo.clone(J.uniforms)}else k=R.uniforms;return k}function B(R,A){let k;for(let J=0,le=u.length;J<le;J++){const pe=u[J];if(pe.cacheKey===A){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new OM(n,A,R,s),u.push(k)),k}function C(R){if(--R.usedTimes===0){const A=u.indexOf(R);u[A]=u[u.length-1],u.pop(),R.destroy()}}function L(R){l.remove(R)}function H(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:P,acquireProgram:B,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:H}}function HM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function GM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ph(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,_,v,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function o(f,h,d,_,v,g){const p=a(f,h,d,_,v,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,v,g){const p=a(f,h,d,_,v,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||GM),i.length>1&&i.sort(h||Rh),r.length>1&&r.sort(h||Rh)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function WM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ph,n.set(i,[a])):r>=s.length?(a=new Ph,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function XM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new $e};break;case"SpotLight":t={position:new K,direction:new K,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function YM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qM=0;function jM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KM(n){const e=new XM,t=YM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new Mt,a=new Mt;function o(c){let u=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,_=0,v=0,g=0,p=0,M=0,y=0,P=0,B=0,C=0,L=0;c.sort(jM);for(let R=0,A=c.length;R<A;R++){const k=c[R],J=k.color,le=k.intensity,pe=k.distance,ee=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=J.r*le,f+=J.g*le,h+=J.b*le;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(k.sh.coefficients[Q],le);L++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ae=k.shadow,$=t.get(k);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=k.shadow.matrix,M++}i.directional[d]=Q,d++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(J).multiplyScalar(le),Q.distance=pe,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,i.spot[v]=Q;const ae=k.shadow;if(k.map&&(i.spotLightMap[B]=k.map,B++,ae.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[v]=ae.matrix,k.castShadow){const $=t.get(k);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=ee,P++}v++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(J).multiplyScalar(le),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),i.rectArea[g]=Q,g++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const ae=k.shadow,$=t.get(k);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,$.shadowCameraNear=ae.camera.near,$.shadowCameraFar=ae.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=k.shadow.matrix,y++}i.point[_]=Q,_++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(le),Q.groundColor.copy(k.groundColor).multiplyScalar(le),i.hemi[p]=Q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const H=i.hash;(H.directionalLength!==d||H.pointLength!==_||H.spotLength!==v||H.rectAreaLength!==g||H.hemiLength!==p||H.numDirectionalShadows!==M||H.numPointShadows!==y||H.numSpotShadows!==P||H.numSpotMaps!==B||H.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=P+B-C,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,H.directionalLength=d,H.pointLength=_,H.spotLength=v,H.rectAreaLength=g,H.hemiLength=p,H.numDirectionalShadows=M,H.numPointShadows=y,H.numSpotShadows=P,H.numSpotMaps=B,H.numLightProbes=L,i.version=qM++)}function l(c,u){let f=0,h=0,d=0,_=0,v=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const P=i.directional[f];P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),f++}else if(y.isSpotLight){const P=i.spot[d];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(g),P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const P=i.point[h];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const P=i.hemi[v];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Dh(n){const e=new KM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ZM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Dh(n),e.set(r,[o])):s>=a.length?(o=new Dh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
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
}`;function QM(n,e,t){let i=new Ru;const r=new Xe,s=new Xe,a=new yt,o=new Wp({depthPacking:Ep}),l=new ov,c={},u=t.maxTextureSize,f={[Ji]:pn,[pn]:Ji,[En]:En},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:$M,fragmentShader:JM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new mn;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ci(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lp;let p=this.type;this.render=function(C,L,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const R=n.getRenderTarget(),A=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Un),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const le=p!==yi&&this.type===yi,pe=p===yi&&this.type!==yi;for(let ee=0,Q=C.length;ee<Q;ee++){const ae=C[ee],$=ae.shadow;if($===void 0){it("WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ye=$.getFrameExtents();if(r.multiply(ye),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ye.x),r.x=s.x*ye.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ye.y),r.y=s.y*ye.y,$.mapSize.y=s.y)),$.map===null||le===!0||pe===!0){const Oe=this.type!==yi?{minFilter:An,magFilter:An}:{};$.map!==null&&$.map.dispose(),$.map=new sn(r.x,r.y,Oe),$.map.texture.name=ae.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const Te=$.getViewportCount();for(let Oe=0;Oe<Te;Oe++){const He=$.getViewport(Oe);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),J.viewport(a),$.updateMatrices(ae,Oe),i=$.getFrustum(),P(L,H,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===yi&&M($,H),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(R,A,k)};function M(C,L){const H=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,H,h,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,H,d,v,null)}function y(C,L,H,R){let A=null;const k=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)A=k;else if(A=H.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const J=A.uuid,le=L.uuid;let pe=c[J];pe===void 0&&(pe={},c[J]=pe);let ee=pe[le];ee===void 0&&(ee=A.clone(),pe[le]=ee,L.addEventListener("dispose",B)),A=ee}if(A.visible=L.visible,A.wireframe=L.wireframe,R===yi?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const J=n.properties.get(A);J.light=H}return A}function P(C,L,H,R,A){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);const le=e.update(C),pe=C.material;if(Array.isArray(pe)){const ee=le.groups;for(let Q=0,ae=ee.length;Q<ae;Q++){const $=ee[Q],ye=pe[$.materialIndex];if(ye&&ye.visible){const Te=y(C,ye,R,A);C.onBeforeShadow(n,C,L,H,le,Te,$),n.renderBufferDirect(H,null,le,Te,C,$),C.onAfterShadow(n,C,L,H,le,Te,$)}}}else if(pe.visible){const ee=y(C,pe,R,A);C.onBeforeShadow(n,C,L,H,le,ee,null),n.renderBufferDirect(H,null,le,ee,C,null),C.onAfterShadow(n,C,L,H,le,ee,null)}}const J=C.children;for(let le=0,pe=J.length;le<pe;le++)P(J[le],L,H,R,A)}function B(C){C.target.removeEventListener("dispose",B);for(const H in c){const R=c[H],A=C.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const eE={[sc]:ac,[oc]:uc,[lc]:fc,[ss]:cc,[ac]:sc,[uc]:oc,[fc]:lc,[cc]:ss};function tE(n,e){function t(){let V=!1;const Ie=new yt;let oe=null;const Pe=new yt(0,0,0,0);return{setMask:function(Re){oe!==Re&&!V&&(n.colorMask(Re,Re,Re,Re),oe=Re)},setLocked:function(Re){V=Re},setClear:function(Re,ve,qe,nt,Et){Et===!0&&(Re*=nt,ve*=nt,qe*=nt),Ie.set(Re,ve,qe,nt),Pe.equals(Ie)===!1&&(n.clearColor(Re,ve,qe,nt),Pe.copy(Ie))},reset:function(){V=!1,oe=null,Pe.set(-1,0,0,0)}}}function i(){let V=!1,Ie=!1,oe=null,Pe=null,Re=null;return{setReversed:function(ve){if(Ie!==ve){const qe=e.get("EXT_clip_control");ve?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ie=ve;const nt=Re;Re=null,this.setClear(nt)}},getReversed:function(){return Ie},setTest:function(ve){ve?z(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(ve){oe!==ve&&!V&&(n.depthMask(ve),oe=ve)},setFunc:function(ve){if(Ie&&(ve=eE[ve]),Pe!==ve){switch(ve){case sc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case cc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ve}},setLocked:function(ve){V=ve},setClear:function(ve){Re!==ve&&(Ie&&(ve=1-ve),n.clearDepth(ve),Re=ve)},reset:function(){V=!1,oe=null,Pe=null,Re=null,Ie=!1}}}function r(){let V=!1,Ie=null,oe=null,Pe=null,Re=null,ve=null,qe=null,nt=null,Et=null;return{setTest:function(pt){V||(pt?z(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(pt){Ie!==pt&&!V&&(n.stencilMask(pt),Ie=pt)},setFunc:function(pt,wn,gn){(oe!==pt||Pe!==wn||Re!==gn)&&(n.stencilFunc(pt,wn,gn),oe=pt,Pe=wn,Re=gn)},setOp:function(pt,wn,gn){(ve!==pt||qe!==wn||nt!==gn)&&(n.stencilOp(pt,wn,gn),ve=pt,qe=wn,nt=gn)},setLocked:function(pt){V=pt},setClear:function(pt){Et!==pt&&(n.clearStencil(pt),Et=pt)},reset:function(){V=!1,Ie=null,oe=null,Pe=null,Re=null,ve=null,qe=null,nt=null,Et=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,v=!1,g=null,p=null,M=null,y=null,P=null,B=null,C=null,L=new $e(0,0,0),H=0,R=!1,A=null,k=null,J=null,le=null,pe=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ae=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=ae>=2);let ye=null,Te={};const Oe=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Je=new yt().fromArray(Oe),st=new yt().fromArray(He);function tt(V,Ie,oe,Pe){const Re=new Uint8Array(4),ve=n.createTexture();n.bindTexture(V,ve),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<oe;qe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ie+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return ve}const te={};te[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(n.DEPTH_TEST),a.setFunc(ss),W(!1),Y(wf),z(n.CULL_FACE),X(Un);function z(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function ce(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function me(V,Ie){return f[V]!==Ie?(n.bindFramebuffer(V,Ie),f[V]=Ie,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ie),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function _e(V,Ie){let oe=d,Pe=!1;if(V){oe=h.get(Ie),oe===void 0&&(oe=[],h.set(Ie,oe));const Re=V.textures;if(oe.length!==Re.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,qe=Re.length;ve<qe;ve++)oe[ve]=n.COLOR_ATTACHMENT0+ve;oe.length=Re.length,Pe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(oe)}function Le(V){return _!==V?(n.useProgram(V),_=V,!0):!1}const I={[fr]:n.FUNC_ADD,[Wx]:n.FUNC_SUBTRACT,[Xx]:n.FUNC_REVERSE_SUBTRACT};I[Yx]=n.MIN,I[qx]=n.MAX;const U={[jx]:n.ZERO,[Kx]:n.ONE,[Zx]:n.SRC_COLOR,[ic]:n.SRC_ALPHA,[n_]:n.SRC_ALPHA_SATURATE,[e_]:n.DST_COLOR,[Jx]:n.DST_ALPHA,[$x]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[t_]:n.ONE_MINUS_DST_COLOR,[Qx]:n.ONE_MINUS_DST_ALPHA,[i_]:n.CONSTANT_COLOR,[r_]:n.ONE_MINUS_CONSTANT_COLOR,[s_]:n.CONSTANT_ALPHA,[a_]:n.ONE_MINUS_CONSTANT_ALPHA};function X(V,Ie,oe,Pe,Re,ve,qe,nt,Et,pt){if(V===Un){v===!0&&(ce(n.BLEND),v=!1);return}if(v===!1&&(z(n.BLEND),v=!0),V!==Gx){if(V!==g||pt!==R){if((p!==fr||P!==fr)&&(n.blendEquation(n.FUNC_ADD),p=fr,P=fr),pt)switch(V){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFunc(n.ONE,n.ONE);break;case Cf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",V);break}else switch(V){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cf:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rf:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",V);break}M=null,y=null,B=null,C=null,L.set(0,0,0),H=0,g=V,R=pt}return}Re=Re||Ie,ve=ve||oe,qe=qe||Pe,(Ie!==p||Re!==P)&&(n.blendEquationSeparate(I[Ie],I[Re]),p=Ie,P=Re),(oe!==M||Pe!==y||ve!==B||qe!==C)&&(n.blendFuncSeparate(U[oe],U[Pe],U[ve],U[qe]),M=oe,y=Pe,B=ve,C=qe),(nt.equals(L)===!1||Et!==H)&&(n.blendColor(nt.r,nt.g,nt.b,Et),L.copy(nt),H=Et),g=V,R=!1}function S(V,Ie){V.side===En?ce(n.CULL_FACE):z(n.CULL_FACE);let oe=V.side===pn;Ie&&(oe=!oe),W(oe),V.blending===Qr&&V.transparent===!1?X(Un):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const Pe=V.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function W(V){A!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),A=V)}function Y(V){V!==kx?(z(n.CULL_FACE),V!==k&&(V===wf?n.cullFace(n.BACK):V===Vx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),k=V}function de(V){V!==J&&(Q&&n.lineWidth(V),J=V)}function re(V,Ie,oe){V?(z(n.POLYGON_OFFSET_FILL),(le!==Ie||pe!==oe)&&(n.polygonOffset(Ie,oe),le=Ie,pe=oe)):ce(n.POLYGON_OFFSET_FILL)}function ge(V){V?z(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Z(V){V===void 0&&(V=n.TEXTURE0+ee-1),ye!==V&&(n.activeTexture(V),ye=V)}function Me(V,Ie,oe){oe===void 0&&(ye===null?oe=n.TEXTURE0+ee-1:oe=ye);let Pe=Te[oe];Pe===void 0&&(Pe={type:void 0,texture:void 0},Te[oe]=Pe),(Pe.type!==V||Pe.texture!==Ie)&&(ye!==oe&&(n.activeTexture(oe),ye=oe),n.bindTexture(V,Ie||te[V]),Pe.type=V,Pe.texture=Ie)}function E(){const V=Te[ye];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function se(){try{n.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function he(){try{n.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function we(){try{n.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ge(){try{n.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ve(){try{n.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ee(){try{n.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ae(V){Je.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Je.copy(V))}function Ne(V){st.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),st.copy(V))}function We(V,Ie){let oe=c.get(Ie);oe===void 0&&(oe=new WeakMap,c.set(Ie,oe));let Pe=oe.get(V);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ie,V.name),oe.set(V,Pe))}function De(V,Ie){const Pe=c.get(Ie).get(V);l.get(Ie)!==Pe&&(n.uniformBlockBinding(Ie,Pe,V.__bindingPointIndex),l.set(Ie,Pe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ye=null,Te={},f={},h=new WeakMap,d=[],_=null,v=!1,g=null,p=null,M=null,y=null,P=null,B=null,C=null,L=new $e(0,0,0),H=0,R=!1,A=null,k=null,J=null,le=null,pe=null,Je.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:z,disable:ce,bindFramebuffer:me,drawBuffers:_e,useProgram:Le,setBlending:X,setMaterial:S,setFlipSided:W,setCullFace:Y,setLineWidth:de,setPolygonOffset:re,setScissorTest:ge,activeTexture:Z,bindTexture:Me,unbindTexture:E,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:Ve,texImage3D:Ee,updateUBOMapping:We,uniformBlockBinding:De,texStorage2D:we,texStorage3D:Ge,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:ie,compressedTexSubImage3D:Be,scissor:Ae,viewport:Ne,reset:Ye}}function nE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,b){return d?new OffscreenCanvas(E,b):na("canvas")}function v(E,b,G){let se=1;const he=Me(E);if((he.width>G||he.height>G)&&(se=G/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ie=Math.floor(se*he.width),Be=Math.floor(se*he.height);f===void 0&&(f=_(ie,Be));const we=b?_(ie,Be):f;return we.width=ie,we.height=Be,we.getContext("2d").drawImage(E,0,0,ie,Be),it("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ie+"x"+Be+")."),we}else return"data"in E&&it("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,b,G,se,he=!1){if(E!==null){if(n[E]!==void 0)return n[E];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=b;if(b===n.RED&&(G===n.FLOAT&&(ie=n.R32F),G===n.HALF_FLOAT&&(ie=n.R16F),G===n.UNSIGNED_BYTE&&(ie=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.R8UI),G===n.UNSIGNED_SHORT&&(ie=n.R16UI),G===n.UNSIGNED_INT&&(ie=n.R32UI),G===n.BYTE&&(ie=n.R8I),G===n.SHORT&&(ie=n.R16I),G===n.INT&&(ie=n.R32I)),b===n.RG&&(G===n.FLOAT&&(ie=n.RG32F),G===n.HALF_FLOAT&&(ie=n.RG16F),G===n.UNSIGNED_BYTE&&(ie=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RG8UI),G===n.UNSIGNED_SHORT&&(ie=n.RG16UI),G===n.UNSIGNED_INT&&(ie=n.RG32UI),G===n.BYTE&&(ie=n.RG8I),G===n.SHORT&&(ie=n.RG16I),G===n.INT&&(ie=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),G===n.UNSIGNED_INT&&(ie=n.RGB32UI),G===n.BYTE&&(ie=n.RGB8I),G===n.SHORT&&(ie=n.RGB16I),G===n.INT&&(ie=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),G===n.UNSIGNED_INT&&(ie=n.RGBA32UI),G===n.BYTE&&(ie=n.RGBA8I),G===n.SHORT&&(ie=n.RGBA16I),G===n.INT&&(ie=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),b===n.RGBA){const Be=he?go:dt.getTransfer(se);G===n.FLOAT&&(ie=n.RGBA32F),G===n.HALF_FLOAT&&(ie=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ie=Be===_t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function P(E,b){let G;return E?b===null||b===xr||b===Qs?G=n.DEPTH24_STENCIL8:b===Ln?G=n.DEPTH32F_STENCIL8:b===Js&&(G=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xr||b===Qs?G=n.DEPTH_COMPONENT24:b===Ln?G=n.DEPTH_COMPONENT32F:b===Js&&(G=n.DEPTH_COMPONENT16),G}function B(E,b){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==An&&E.minFilter!==Gt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function C(E){const b=E.target;b.removeEventListener("dispose",C),H(b),b.isVideoTexture&&u.delete(b)}function L(E){const b=E.target;b.removeEventListener("dispose",L),A(b)}function H(E){const b=i.get(E);if(b.__webglInit===void 0)return;const G=E.source,se=h.get(G);if(se){const he=se[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&R(E),Object.keys(se).length===0&&h.delete(G)}i.remove(E)}function R(E){const b=i.get(E);n.deleteTexture(b.__webglTexture);const G=E.source,se=h.get(G);delete se[b.__cacheKey],a.memory.textures--}function A(E){const b=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let he=0;he<b.__webglFramebuffer[se].length;he++)n.deleteFramebuffer(b.__webglFramebuffer[se][he]);else n.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)n.deleteFramebuffer(b.__webglFramebuffer[se]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=E.textures;for(let se=0,he=G.length;se<he;se++){const ie=i.get(G[se]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(G[se])}i.remove(E)}let k=0;function J(){k=0}function le(){const E=k;return E>=r.maxTextures&&it("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),k+=1,E}function pe(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function ee(E,b){const G=i.get(E);if(E.isVideoTexture&&ge(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&G.__version!==E.version){const se=E.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{te(G,E,b);return}}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function Q(E,b){const G=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){te(G,E,b);return}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function ae(E,b){const G=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){te(G,E,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function $(E,b){const G=i.get(E);if(E.version>0&&G.__version!==E.version){z(G,E,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const ye={[$s]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},Te={[An]:n.NEAREST,[c_]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Oe={[h_]:n.NEVER,[__]:n.ALWAYS,[d_]:n.LESS,[Ap]:n.LEQUAL,[p_]:n.EQUAL,[x_]:n.GEQUAL,[m_]:n.GREATER,[g_]:n.NOTEQUAL};function He(E,b){if(b.type===Ln&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gt||b.magFilter===il||b.magFilter===_a||b.magFilter===Yi||b.minFilter===Gt||b.minFilter===il||b.minFilter===_a||b.minFilter===Yi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ye[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ye[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ye[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Te[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Te[b.minFilter]),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==_a&&b.minFilter!==Yi||b.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Je(E,b){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",C));const se=b.source;let he=h.get(se);he===void 0&&(he={},h.set(se,he));const ie=pe(b);if(ie!==E.__cacheKey){he[ie]===void 0&&(he[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),he[ie].usedTimes++;const Be=he[E.__cacheKey];Be!==void 0&&(he[E.__cacheKey].usedTimes--,Be.usedTimes===0&&R(b)),E.__cacheKey=ie,E.__webglTexture=he[ie].texture}return G}function st(E,b,G){return Math.floor(Math.floor(E/G)/b)}function tt(E,b,G,se){const ie=E.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,se,b.data);else{ie.sort((Ee,Ae)=>Ee.start-Ae.start);let Be=0;for(let Ee=1;Ee<ie.length;Ee++){const Ae=ie[Be],Ne=ie[Ee],We=Ae.start+Ae.count,De=st(Ne.start,b.width,4),Ye=st(Ae.start,b.width,4);Ne.start<=We+1&&De===Ye&&st(Ne.start+Ne.count-1,b.width,4)===De?Ae.count=Math.max(Ae.count,Ne.start+Ne.count-Ae.start):(++Be,ie[Be]=Ne)}ie.length=Be+1;const we=n.getParameter(n.UNPACK_ROW_LENGTH),Ge=n.getParameter(n.UNPACK_SKIP_PIXELS),Ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Ae=ie.length;Ee<Ae;Ee++){const Ne=ie[Ee],We=Math.floor(Ne.start/4),De=Math.ceil(Ne.count/4),Ye=We%b.width,V=Math.floor(We/b.width),Ie=De,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ye,V,Ie,oe,G,se,b.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,we),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function te(E,b,G){let se=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=n.TEXTURE_3D);const he=Je(E,b),ie=b.source;t.bindTexture(se,E.__webglTexture,n.TEXTURE0+G);const Be=i.get(ie);if(ie.version!==Be.__version||he===!0){t.activeTexture(n.TEXTURE0+G);const we=dt.getPrimaries(dt.workingColorSpace),Ge=b.colorSpace===Xi?null:dt.getPrimaries(b.colorSpace),Ve=b.colorSpace===Xi||we===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Ee=v(b.image,!1,r.maxTextureSize);Ee=Z(b,Ee);const Ae=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type);let We=y(b.internalFormat,Ae,Ne,b.colorSpace,b.isVideoTexture);He(se,b);let De;const Ye=b.mipmaps,V=b.isVideoTexture!==!0,Ie=Be.__version===void 0||he===!0,oe=ie.dataReady,Pe=B(b,Ee);if(b.isDepthTexture)We=P(b.format===ta,b.type),Ie&&(V?t.texStorage2D(n.TEXTURE_2D,1,We,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,We,Ee.width,Ee.height,0,Ae,Ne,null));else if(b.isDataTexture)if(Ye.length>0){V&&Ie&&t.texStorage2D(n.TEXTURE_2D,Pe,We,Ye[0].width,Ye[0].height);for(let Re=0,ve=Ye.length;Re<ve;Re++)De=Ye[Re],V?oe&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,De.width,De.height,Ae,Ne,De.data):t.texImage2D(n.TEXTURE_2D,Re,We,De.width,De.height,0,Ae,Ne,De.data);b.generateMipmaps=!1}else V?(Ie&&t.texStorage2D(n.TEXTURE_2D,Pe,We,Ee.width,Ee.height),oe&&tt(b,Ee,Ae,Ne)):t.texImage2D(n.TEXTURE_2D,0,We,Ee.width,Ee.height,0,Ae,Ne,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,We,Ye[0].width,Ye[0].height,Ee.depth);for(let Re=0,ve=Ye.length;Re<ve;Re++)if(De=Ye[Re],b.format!==Xt)if(Ae!==null)if(V){if(oe)if(b.layerUpdates.size>0){const qe=lh(De.width,De.height,b.format,b.type);for(const nt of b.layerUpdates){const Et=De.data.subarray(nt*qe/De.data.BYTES_PER_ELEMENT,(nt+1)*qe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,nt,De.width,De.height,1,Ae,Et)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,De.width,De.height,Ee.depth,Ae,De.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Re,We,De.width,De.height,Ee.depth,0,De.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Re,0,0,0,De.width,De.height,Ee.depth,Ae,Ne,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Re,We,De.width,De.height,Ee.depth,0,Ae,Ne,De.data)}else{V&&Ie&&t.texStorage2D(n.TEXTURE_2D,Pe,We,Ye[0].width,Ye[0].height);for(let Re=0,ve=Ye.length;Re<ve;Re++)De=Ye[Re],b.format!==Xt?Ae!==null?V?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Re,0,0,De.width,De.height,Ae,De.data):t.compressedTexImage2D(n.TEXTURE_2D,Re,We,De.width,De.height,0,De.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?oe&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,De.width,De.height,Ae,Ne,De.data):t.texImage2D(n.TEXTURE_2D,Re,We,De.width,De.height,0,Ae,Ne,De.data)}else if(b.isDataArrayTexture)if(V){if(Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,We,Ee.width,Ee.height,Ee.depth),oe)if(b.layerUpdates.size>0){const Re=lh(Ee.width,Ee.height,b.format,b.type);for(const ve of b.layerUpdates){const qe=Ee.data.subarray(ve*Re/Ee.data.BYTES_PER_ELEMENT,(ve+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,Ae,Ne,qe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ne,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,Ee.width,Ee.height,Ee.depth,0,Ae,Ne,Ee.data);else if(b.isData3DTexture)V?(Ie&&t.texStorage3D(n.TEXTURE_3D,Pe,We,Ee.width,Ee.height,Ee.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ne,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,We,Ee.width,Ee.height,Ee.depth,0,Ae,Ne,Ee.data);else if(b.isFramebufferTexture){if(Ie)if(V)t.texStorage2D(n.TEXTURE_2D,Pe,We,Ee.width,Ee.height);else{let Re=Ee.width,ve=Ee.height;for(let qe=0;qe<Pe;qe++)t.texImage2D(n.TEXTURE_2D,qe,We,Re,ve,0,Ae,Ne,null),Re>>=1,ve>>=1}}else if(Ye.length>0){if(V&&Ie){const Re=Me(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Pe,We,Re.width,Re.height)}for(let Re=0,ve=Ye.length;Re<ve;Re++)De=Ye[Re],V?oe&&t.texSubImage2D(n.TEXTURE_2D,Re,0,0,Ae,Ne,De):t.texImage2D(n.TEXTURE_2D,Re,We,Ae,Ne,De);b.generateMipmaps=!1}else if(V){if(Ie){const Re=Me(Ee);t.texStorage2D(n.TEXTURE_2D,Pe,We,Re.width,Re.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ne,Ee)}else t.texImage2D(n.TEXTURE_2D,0,We,Ae,Ne,Ee);g(b)&&p(se),Be.__version=ie.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function z(E,b,G){if(b.image.length!==6)return;const se=Je(E,b),he=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+G);const ie=i.get(he);if(he.version!==ie.__version||se===!0){t.activeTexture(n.TEXTURE0+G);const Be=dt.getPrimaries(dt.workingColorSpace),we=b.colorSpace===Xi?null:dt.getPrimaries(b.colorSpace),Ge=b.colorSpace===Xi||Be===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Ve=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let ve=0;ve<6;ve++)!Ve&&!Ee?Ae[ve]=v(b.image[ve],!0,r.maxCubemapSize):Ae[ve]=Ee?b.image[ve].image:b.image[ve],Ae[ve]=Z(b,Ae[ve]);const Ne=Ae[0],We=s.convert(b.format,b.colorSpace),De=s.convert(b.type),Ye=y(b.internalFormat,We,De,b.colorSpace),V=b.isVideoTexture!==!0,Ie=ie.__version===void 0||se===!0,oe=he.dataReady;let Pe=B(b,Ne);He(n.TEXTURE_CUBE_MAP,b);let Re;if(Ve){V&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ye,Ne.width,Ne.height);for(let ve=0;ve<6;ve++){Re=Ae[ve].mipmaps;for(let qe=0;qe<Re.length;qe++){const nt=Re[qe];b.format!==Xt?We!==null?V?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,nt.width,nt.height,We,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,Ye,nt.width,nt.height,0,nt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,nt.width,nt.height,We,De,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,Ye,nt.width,nt.height,0,We,De,nt.data)}}}else{if(Re=b.mipmaps,V&&Ie){Re.length>0&&Pe++;const ve=Me(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ye,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae[ve].width,Ae[ve].height,We,De,Ae[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ye,Ae[ve].width,Ae[ve].height,0,We,De,Ae[ve].data);for(let qe=0;qe<Re.length;qe++){const Et=Re[qe].image[ve].image;V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,Et.width,Et.height,We,De,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,Ye,Et.width,Et.height,0,We,De,Et.data)}}else{V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,We,De,Ae[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ye,We,De,Ae[ve]);for(let qe=0;qe<Re.length;qe++){const nt=Re[qe];V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,We,De,nt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,Ye,We,De,nt.image[ve])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),ie.__version=he.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ce(E,b,G,se,he,ie){const Be=s.convert(G.format,G.colorSpace),we=s.convert(G.type),Ge=y(G.internalFormat,Be,we,G.colorSpace),Ve=i.get(b),Ee=i.get(G);if(Ee.__renderTarget=b,!Ve.__hasExternalTextures){const Ae=Math.max(1,b.width>>ie),Ne=Math.max(1,b.height>>ie);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ie,Ge,Ae,Ne,b.depth,0,Be,we,null):t.texImage2D(he,ie,Ge,Ae,Ne,0,Be,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),re(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,he,Ee.__webglTexture,0,de(b)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,he,Ee.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(E,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer){const se=b.depthTexture,he=se&&se.isDepthTexture?se.type:null,ie=P(b.stencilBuffer,he),Be=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=de(b);re(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ie,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ie,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ie,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,E)}else{const se=b.textures;for(let he=0;he<se.length;he++){const ie=se[he],Be=s.convert(ie.format,ie.colorSpace),we=s.convert(ie.type),Ge=y(ie.internalFormat,Be,we,ie.colorSpace),Ve=de(b);G&&re(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ge,b.width,b.height):re(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Ge,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ge,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(b.depthTexture);se.__renderTarget=b,(!se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const he=se.__webglTexture,ie=de(b);if(b.depthTexture.format===ea)re(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(b.depthTexture.format===ta)re(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Le(E){const b=i.get(E),G=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const se=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=se}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const se=E.texture.mipmaps;se&&se.length>0?_e(b.__webglFramebuffer[0],E):_e(b.__webglFramebuffer,E)}else if(G){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=n.createRenderbuffer(),me(b.__webglDepthbuffer[se],E,!1);else{const he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ie)}}else{const se=E.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),me(b.__webglDepthbuffer,E,!1);else{const he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(E,b,G){const se=i.get(E);b!==void 0&&ce(se.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Le(E)}function U(E){const b=E.texture,G=i.get(E),se=i.get(b);E.addEventListener("dispose",L);const he=E.textures,ie=E.isWebGLCubeRenderTarget===!0,Be=he.length>1;if(Be||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=b.version,a.memory.textures++),ie){G.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[we]=[];for(let Ge=0;Ge<b.mipmaps.length;Ge++)G.__webglFramebuffer[we][Ge]=n.createFramebuffer()}else G.__webglFramebuffer[we]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)G.__webglFramebuffer[we]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Be)for(let we=0,Ge=he.length;we<Ge;we++){const Ve=i.get(he[we]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&re(E)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let we=0;we<he.length;we++){const Ge=he[we];G.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[we]);const Ve=s.convert(Ge.format,Ge.colorSpace),Ee=s.convert(Ge.type),Ae=y(Ge.internalFormat,Ve,Ee,Ge.colorSpace,E.isXRRenderTarget===!0),Ne=de(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,G.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),me(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),He(n.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)ce(G.__webglFramebuffer[we][Ge],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge);else ce(G.__webglFramebuffer[we],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let we=0,Ge=he.length;we<Ge;we++){const Ve=he[we],Ee=i.get(Ve);let Ae=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Ee.__webglTexture),He(Ae,Ve),ce(G.__webglFramebuffer,E,Ve,n.COLOR_ATTACHMENT0+we,Ae,0),g(Ve)&&p(Ae)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(we=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,se.__webglTexture),He(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)ce(G.__webglFramebuffer[Ge],E,b,n.COLOR_ATTACHMENT0,we,Ge);else ce(G.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,we,0);g(b)&&p(we),t.unbindTexture()}E.depthBuffer&&Le(E)}function X(E){const b=E.textures;for(let G=0,se=b.length;G<se;G++){const he=b[G];if(g(he)){const ie=M(E),Be=i.get(he).__webglTexture;t.bindTexture(ie,Be),p(ie),t.unbindTexture()}}}const S=[],W=[];function Y(E){if(E.samples>0){if(re(E)===!1){const b=E.textures,G=E.width,se=E.height;let he=n.COLOR_BUFFER_BIT;const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(E),we=b.length>1;if(we)for(let Ve=0;Ve<b.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ge=E.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ve=0;Ve<b.length;Ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),we){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Ee=i.get(b[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,G,se,0,0,G,se,he,n.NEAREST),l===!0&&(S.length=0,W.length=0,S.push(n.COLOR_ATTACHMENT0+Ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(S.push(ie),W.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,W)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let Ve=0;Ve<b.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Ee=i.get(b[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const b=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function de(E){return Math.min(r.maxSamples,E.samples)}function re(E){const b=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(E){const b=a.render.frame;u.get(E)!==b&&(u.set(E,b),E.update())}function Z(E,b){const G=E.colorSpace,se=E.format,he=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==bn&&G!==Xi&&(dt.getTransfer(G)===_t?(se!==Xt||he!==oi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",G)),b}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=Q,this.setTexture3D=ae,this.setTextureCube=$,this.rebindTextures=I,this.setupRenderTarget=U,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=re}function iE(n,e){function t(i,r=Xi){let s;const a=dt.getTransfer(r);if(i===oi)return n.UNSIGNED_BYTE;if(i===yu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_p)return n.BYTE;if(i===vp)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===bu)return n.INT;if(i===xr)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Wt)return n.HALF_FLOAT;if(i===yp)return n.ALPHA;if(i===Mp)return n.RGB;if(i===Xt)return n.RGBA;if(i===ea)return n.DEPTH_COMPONENT;if(i===ta)return n.DEPTH_STENCIL;if(i===Yr)return n.RED;if(i===Eu)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===Tu)return n.RG_INTEGER;if(i===Au)return n.RGBA_INTEGER;if(i===Qa||i===eo||i===to||i===no)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===xc||i===_c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===Sc||i===bc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vc||i===Sc)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yc||i===Mc||i===Ec||i===Tc||i===Ac||i===wc||i===Cc||i===Rc||i===Pc||i===Dc||i===Lc||i===Ic||i===Uc||i===Nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fc||i===Oc||i===Bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fc)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zc||i===kc||i===Vc||i===Hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
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

}`;class aE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Hp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yt({vertexShader:rE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new No(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oE extends Sr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const v=typeof XRWebGLBinding<"u",g=new aE,p={},M=t.getContextAttributes();let y=null,P=null;const B=[],C=[],L=new Xe;let H=null;const R=new dn;R.viewport=new yt;const A=new dn;A.viewport=new yt;const k=[R,A],J=new Mv;let le=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let z=B[te];return z===void 0&&(z=new Tl,B[te]=z),z.getTargetRaySpace()},this.getControllerGrip=function(te){let z=B[te];return z===void 0&&(z=new Tl,B[te]=z),z.getGripSpace()},this.getHand=function(te){let z=B[te];return z===void 0&&(z=new Tl,B[te]=z),z.getHandSpace()};function ee(te){const z=C.indexOf(te.inputSource);if(z===-1)return;const ce=B[z];ce!==void 0&&(ce.update(te.inputSource,te.frame,c||a),ce.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ae);for(let te=0;te<B.length;te++){const z=C[te];z!==null&&(C[te]=null,B[te].disconnect(z))}le=null,pe=null,g.reset();for(const te in p)delete p[te];e.setRenderTarget(y),d=null,h=null,f=null,r=null,P=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ae),M.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,me=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=M.stencil?ta:ea,me=M.stencil?Qs:xr);const Le={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),P=new sn(h.textureWidth,h.textureHeight,{format:Xt,type:oi,depthTexture:new Vp(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ce={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),P=new sn(d.framebufferWidth,d.framebufferHeight,{format:Xt,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(te){for(let z=0;z<te.removed.length;z++){const ce=te.removed[z],me=C.indexOf(ce);me>=0&&(C[me]=null,B[me].disconnect(ce))}for(let z=0;z<te.added.length;z++){const ce=te.added[z];let me=C.indexOf(ce);if(me===-1){for(let Le=0;Le<B.length;Le++)if(Le>=C.length){C.push(ce),me=Le;break}else if(C[Le]===null){C[Le]=ce,me=Le;break}if(me===-1)break}const _e=B[me];_e&&_e.connect(ce)}}const $=new K,ye=new K;function Te(te,z,ce){$.setFromMatrixPosition(z.matrixWorld),ye.setFromMatrixPosition(ce.matrixWorld);const me=$.distanceTo(ye),_e=z.projectionMatrix.elements,Le=ce.projectionMatrix.elements,I=_e[14]/(_e[10]-1),U=_e[14]/(_e[10]+1),X=(_e[9]+1)/_e[5],S=(_e[9]-1)/_e[5],W=(_e[8]-1)/_e[0],Y=(Le[8]+1)/Le[0],de=I*W,re=I*Y,ge=me/(-W+Y),Z=ge*-W;if(z.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Z),te.translateZ(ge),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),_e[10]===-1)te.projectionMatrix.copy(z.projectionMatrix),te.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const Me=I+ge,E=U+ge,b=de-Z,G=re+(me-Z),se=X*U/E*Me,he=S*U/E*Me;te.projectionMatrix.makePerspective(b,G,se,he,Me,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Oe(te,z){z===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(z.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let z=te.near,ce=te.far;g.texture!==null&&(g.depthNear>0&&(z=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),J.near=A.near=R.near=z,J.far=A.far=R.far=ce,(le!==J.near||pe!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),le=J.near,pe=J.far),J.layers.mask=te.layers.mask|6,R.layers.mask=J.layers.mask&3,A.layers.mask=J.layers.mask&5;const me=te.parent,_e=J.cameras;Oe(J,me);for(let Le=0;Le<_e.length;Le++)Oe(_e[Le],me);_e.length===2?Te(J,R,A):J.projectionMatrix.copy(R.projectionMatrix),He(te,J,me)};function He(te,z,ce){ce===null?te.matrix.copy(z.matrixWorld):(te.matrix.copy(ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(z.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(z.projectionMatrix),te.projectionMatrixInverse.copy(z.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=vo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(J)},this.getCameraTexture=function(te){return p[te]};let Je=null;function st(te,z){if(u=z.getViewerPose(c||a),_=z,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(P,d.framebuffer),e.setRenderTarget(P));let me=!1;ce.length!==J.cameras.length&&(J.cameras.length=0,me=!0);for(let U=0;U<ce.length;U++){const X=ce[U];let S=null;if(d!==null)S=d.getViewport(X);else{const Y=f.getViewSubImage(h,X);S=Y.viewport,U===0&&(e.setRenderTargetTextures(P,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(P))}let W=k[U];W===void 0&&(W=new dn,W.layers.enable(U),W.viewport=new yt,k[U]=W),W.matrix.fromArray(X.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(X.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(S.x,S.y,S.width,S.height),U===0&&(J.matrix.copy(W.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),me===!0&&J.cameras.push(W)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const U=f.getDepthInformation(ce[0]);U&&U.isValid&&U.texture&&g.init(U,r.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<ce.length;U++){const X=ce[U].camera;if(X){let S=p[X];S||(S=new Hp,p[X]=S);const W=f.getCameraImage(X);S.sourceTexture=W}}}}for(let ce=0;ce<B.length;ce++){const me=C[ce],_e=B[ce];me!==null&&_e!==void 0&&_e.update(me,z,c||a)}Je&&Je(te,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),_=null}const tt=new Xp;tt.setAnimationLoop(st),this.setAnimationLoop=function(te){Je=te},this.dispose=function(){}}}const cr=new li,lE=new Mt;function cE(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Ip(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,y,P){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,P)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,P=M.envMapRotation;y&&(g.envMap.value=y,cr.copy(P),cr.x*=-1,cr.y*=-1,cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.envMapRotation.value.setFromMatrix4(lE.makeRotationFromEuler(cr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const P=y.program;i.uniformBlockBinding(M,P)}function c(M,y){let P=r[M.id];P===void 0&&(_(M),P=u(M),r[M.id]=P,M.addEventListener("dispose",g));const B=y.program;i.updateUBOMapping(M,B);const C=e.render.frame;s[M.id]!==C&&(h(M),s[M.id]=C)}function u(M){const y=f();M.__bindingPointIndex=y;const P=n.createBuffer(),B=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,B,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,P),P}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=r[M.id],P=M.uniforms,B=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,L=P.length;C<L;C++){const H=Array.isArray(P[C])?P[C]:[P[C]];for(let R=0,A=H.length;R<A;R++){const k=H[R];if(d(k,C,R,B)===!0){const J=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let ee=0;ee<le.length;ee++){const Q=le[ee],ae=v(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,J+pe,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):(Q.toArray(k.__data,pe),pe+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,P,B){const C=M.value,L=y+"_"+P;if(B[L]===void 0)return typeof C=="number"||typeof C=="boolean"?B[L]=C:B[L]=C.clone(),!0;{const H=B[L];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return B[L]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function _(M){const y=M.uniforms;let P=0;const B=16;for(let L=0,H=y.length;L<H;L++){const R=Array.isArray(y[L])?y[L]:[y[L]];for(let A=0,k=R.length;A<k;A++){const J=R[A],le=Array.isArray(J.value)?J.value:[J.value];for(let pe=0,ee=le.length;pe<ee;pe++){const Q=le[pe],ae=v(Q),$=P%B,ye=$%ae.boundary,Te=$+ye;P+=ye,Te!==0&&B-Te<ae.storage&&(P+=B-Te),J.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=ae.storage}}}const C=P%B;return C>0&&(P+=B-C),M.__size=P,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const P=a.indexOf(y.__bindingPointIndex);a.splice(P,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const fE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let bi=null;function hE(){return bi===null&&(bi=new zp(fE,32,32,Wi,Wt),bi.minFilter=Gt,bi.magFilter=Gt,bi.wrapS=ln,bi.wrapT=ln,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class dE{constructor(e={}){const{canvas:t=S_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const _=new Set([Au,Tu,Eu]),v=new Set([oi,xr,Js,Qs,yu,Mu]),g=new Uint32Array(4),p=new Int32Array(4);let M=null,y=null;const P=[],B=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1;this._outputColorSpace=Sn;let H=0,R=0,A=null,k=-1,J=null;const le=new yt,pe=new yt;let ee=null;const Q=new $e(0);let ae=0,$=t.width,ye=t.height,Te=1,Oe=null,He=null;const Je=new yt(0,0,$,ye),st=new yt(0,0,$,ye);let tt=!1;const te=new Ru;let z=!1,ce=!1;const me=new Mt,_e=new K,Le=new yt,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function X(){return A===null?Te:1}let S=i;function W(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",qe,!1),S===null){const D="webgl2";if(S=W(D,x),S===null)throw W(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw x("WebGLRenderer: "+x.message),x}let Y,de,re,ge,Z,Me,E,b,G,se,he,ie,Be,we,Ge,Ve,Ee,Ae,Ne,We,De,Ye,V,Ie;function oe(){Y=new by(S),Y.init(),Ye=new iE(S,Y),de=new hy(S,Y,e,Ye),re=new tE(S,Y),de.reversedDepthBuffer&&h&&re.buffers.depth.setReversed(!0),ge=new Ey(S),Z=new HM,Me=new nE(S,Y,re,Z,de,Ye,ge),E=new py(C),b=new Sy(C),G=new Cv(S),V=new uy(S,G),se=new yy(S,G,ge,V),he=new Ay(S,se,G,ge),Ne=new Ty(S,de,Me),Ve=new dy(Z),ie=new VM(C,E,b,Y,de,V,Ve),Be=new cE(C,Z),we=new WM,Ge=new ZM(Y),Ae=new cy(C,E,b,re,he,d,l),Ee=new QM(C,he,de),Ie=new uE(S,ge,de,re),We=new fy(S,Y,ge),De=new My(S,Y,ge),ge.programs=ie.programs,C.capabilities=de,C.extensions=Y,C.properties=Z,C.renderLists=we,C.shadowMap=Ee,C.state=re,C.info=ge}oe();const Pe=new oE(C,S);this.xr=Pe,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const x=Y.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Y.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(x){x!==void 0&&(Te=x,this.setSize($,ye,!1))},this.getSize=function(x){return x.set($,ye)},this.setSize=function(x,D,O=!0){if(Pe.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,ye=D,t.width=Math.floor(x*Te),t.height=Math.floor(D*Te),O===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set($*Te,ye*Te).floor()},this.setDrawingBufferSize=function(x,D,O){$=x,ye=D,Te=O,t.width=Math.floor(x*O),t.height=Math.floor(D*O),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(le)},this.getViewport=function(x){return x.copy(Je)},this.setViewport=function(x,D,O,w){x.isVector4?Je.set(x.x,x.y,x.z,x.w):Je.set(x,D,O,w),re.viewport(le.copy(Je).multiplyScalar(Te).round())},this.getScissor=function(x){return x.copy(st)},this.setScissor=function(x,D,O,w){x.isVector4?st.set(x.x,x.y,x.z,x.w):st.set(x,D,O,w),re.scissor(pe.copy(st).multiplyScalar(Te).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){re.setScissorTest(tt=x)},this.setOpaqueSort=function(x){Oe=x},this.setTransparentSort=function(x){He=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,O=!0){let w=0;if(x){let N=!1;if(A!==null){const q=A.texture.format;N=_.has(q)}if(N){const q=A.texture.type,j=v.has(q),ne=Ae.getClearColor(),ue=Ae.getClearAlpha(),fe=ne.r,xe=ne.g,Se=ne.b;j?(g[0]=fe,g[1]=xe,g[2]=Se,g[3]=ue,S.clearBufferuiv(S.COLOR,0,g)):(p[0]=fe,p[1]=xe,p[2]=Se,p[3]=ue,S.clearBufferiv(S.COLOR,0,p))}else w|=S.COLOR_BUFFER_BIT}D&&(w|=S.DEPTH_BUFFER_BIT),O&&(w|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),Ae.dispose(),we.dispose(),Ge.dispose(),Z.dispose(),E.dispose(),b.dispose(),he.dispose(),V.dispose(),Ie.dispose(),ie.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",fa),Pe.removeEventListener("sessionend",ha),ui.stop()};function Re(x){x.preventDefault(),_o("WebGLRenderer: Context Lost."),L=!0}function ve(){_o("WebGLRenderer: Context Restored."),L=!1;const x=ge.autoReset,D=Ee.enabled,O=Ee.autoUpdate,w=Ee.needsUpdate,N=Ee.type;oe(),ge.autoReset=x,Ee.enabled=D,Ee.autoUpdate=O,Ee.needsUpdate=w,Ee.type=N}function qe(x){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function nt(x){const D=x.target;D.removeEventListener("dispose",nt),Et(D)}function Et(x){pt(x),Z.remove(x)}function pt(x){const D=Z.get(x).programs;D!==void 0&&(D.forEach(function(O){ie.releaseProgram(O)}),x.isShaderMaterial&&ie.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,O,w,N,q){D===null&&(D=I);const j=N.isMesh&&N.matrixWorld.determinant()<0,ne=ko(x,D,O,w,N);re.setMaterial(w,j);let ue=O.index,fe=1;if(w.wireframe===!0){if(ue=se.getWireframeAttribute(O),ue===void 0)return;fe=2}const xe=O.drawRange,Se=O.attributes.position;let be=xe.start*fe,Ce=(xe.start+xe.count)*fe;q!==null&&(be=Math.max(be,q.start*fe),Ce=Math.min(Ce,(q.start+q.count)*fe)),ue!==null?(be=Math.max(be,0),Ce=Math.min(Ce,ue.count)):Se!=null&&(be=Math.max(be,0),Ce=Math.min(Ce,Se.count));const ze=Ce-be;if(ze<0||ze===1/0)return;V.setup(N,w,ne,O,ue);let je,Ke=We;if(ue!==null&&(je=G.get(ue),Ke=De,Ke.setIndex(je)),N.isMesh)w.wireframe===!0?(re.setLineWidth(w.wireframeLinewidth*X()),Ke.setMode(S.LINES)):Ke.setMode(S.TRIANGLES);else if(N.isLine){let ke=w.linewidth;ke===void 0&&(ke=1),re.setLineWidth(ke*X()),N.isLineSegments?Ke.setMode(S.LINES):N.isLineLoop?Ke.setMode(S.LINE_LOOP):Ke.setMode(S.LINE_STRIP)}else N.isPoints?Ke.setMode(S.POINTS):N.isSprite&&Ke.setMode(S.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ia("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ke=N._multiDrawStarts,Ze=N._multiDrawCounts,Ue=N._multiDrawCount,ht=ue?G.get(ue).bytesPerElement:1,Ct=Z.get(w).currentProgram.getUniforms();for(let ut=0;ut<Ue;ut++)Ct.setValue(S,"_gl_DrawID",ut),Ke.render(ke[ut]/ht,Ze[ut])}else if(N.isInstancedMesh)Ke.renderInstances(be,ze,N.count);else if(O.isInstancedBufferGeometry){const ke=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ze=Math.min(O.instanceCount,ke);Ke.renderInstances(be,ze,Ze)}else Ke.render(be,ze)};function wn(x,D,O){x.transparent===!0&&x.side===En&&x.forceSinglePass===!1?(x.side=pn,x.needsUpdate=!0,yr(x,D,O),x.side=Ji,x.needsUpdate=!0,yr(x,D,O),x.side=En):yr(x,D,O)}this.compile=function(x,D,O=null){O===null&&(O=x),y=Ge.get(O),y.init(D),B.push(y),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(y.pushLight(N),N.castShadow&&y.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(y.pushLight(N),N.castShadow&&y.pushShadow(N))}),y.setupLights();const w=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const q=N.material;if(q)if(Array.isArray(q))for(let j=0;j<q.length;j++){const ne=q[j];wn(ne,O,N),w.add(ne)}else wn(q,O,N),w.add(q)}),y=B.pop(),w},this.compileAsync=function(x,D,O=null){const w=this.compile(x,D,O);return new Promise(N=>{function q(){if(w.forEach(function(j){Z.get(j).currentProgram.isReady()&&w.delete(j)}),w.size===0){N(x);return}setTimeout(q,10)}Y.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let gn=null;function zo(x){gn&&gn(x)}function fa(){ui.stop()}function ha(){ui.start()}const ui=new Xp;ui.setAnimationLoop(zo),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(x){gn=x,Pe.setAnimationLoop(x),x===null?ui.stop():ui.start()},Pe.addEventListener("sessionstart",fa),Pe.addEventListener("sessionend",ha),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(D),D=Pe.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,D,A),y=Ge.get(x,B.length),y.init(D),B.push(y),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),te.setFromProjectionMatrix(me,ei,D.reversedDepth),ce=this.localClippingEnabled,z=Ve.init(this.clippingPlanes,ce),M=we.get(x,P.length),M.init(),P.push(M),Pe.enabled===!0&&Pe.isPresenting===!0){const q=C.xr.getDepthSensingMesh();q!==null&&ps(q,D,-1/0,C.sortObjects)}ps(x,D,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(Oe,He),U=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,U&&Ae.addToRenderList(M,x),this.info.render.frame++,z===!0&&Ve.beginShadows();const O=y.state.shadowsArray;Ee.render(O,x,D),z===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const w=M.opaque,N=M.transmissive;if(y.setupLights(),D.isArrayCamera){const q=D.cameras;if(N.length>0)for(let j=0,ne=q.length;j<ne;j++){const ue=q[j];da(w,N,x,ue)}U&&Ae.render(x);for(let j=0,ne=q.length;j<ne;j++){const ue=q[j];ms(M,x,ue,ue.viewport)}}else N.length>0&&da(w,N,x,D),U&&Ae.render(x),ms(M,x,D);A!==null&&R===0&&(Me.updateMultisampleRenderTarget(A),Me.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(C,x,D),V.resetDefaultState(),k=-1,J=null,B.pop(),B.length>0?(y=B[B.length-1],z===!0&&Ve.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function ps(x,D,O,w){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||te.intersectsSprite(x)){w&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(me);const j=he.update(x),ne=x.material;ne.visible&&M.push(x,j,ne,O,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||te.intersectsObject(x))){const j=he.update(x),ne=x.material;if(w&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Le.copy(j.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(me)),Array.isArray(ne)){const ue=j.groups;for(let fe=0,xe=ue.length;fe<xe;fe++){const Se=ue[fe],be=ne[Se.materialIndex];be&&be.visible&&M.push(x,j,be,O,Le.z,Se)}}else ne.visible&&M.push(x,j,ne,O,Le.z,null)}}const q=x.children;for(let j=0,ne=q.length;j<ne;j++)ps(q[j],D,O,w)}function ms(x,D,O,w){const{opaque:N,transmissive:q,transparent:j}=x;y.setupLightsView(O),z===!0&&Ve.setGlobalState(C.clippingPlanes,O),w&&re.viewport(le.copy(w)),N.length>0&&br(N,D,O),q.length>0&&br(q,D,O),j.length>0&&br(j,D,O),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function da(x,D,O,w){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[w.id]===void 0&&(y.state.transmissionRenderTarget[w.id]=new sn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Wt:oi,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const q=y.state.transmissionRenderTarget[w.id],j=w.viewport||le;q.setSize(j.z*C.transmissionResolutionScale,j.w*C.transmissionResolutionScale);const ne=C.getRenderTarget(),ue=C.getActiveCubeFace(),fe=C.getActiveMipmapLevel();C.setRenderTarget(q),C.getClearColor(Q),ae=C.getClearAlpha(),ae<1&&C.setClearColor(16777215,.5),C.clear(),U&&Ae.render(O);const xe=C.toneMapping;C.toneMapping=Ki;const Se=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),y.setupLightsView(w),z===!0&&Ve.setGlobalState(C.clippingPlanes,w),br(x,O,w),Me.updateMultisampleRenderTarget(q),Me.updateRenderTargetMipmap(q),Y.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ce=0,ze=D.length;Ce<ze;Ce++){const je=D[Ce],{object:Ke,geometry:ke,material:Ze,group:Ue}=je;if(Ze.side===En&&Ke.layers.test(w.layers)){const ht=Ze.side;Ze.side=pn,Ze.needsUpdate=!0,pa(Ke,O,w,ke,Ze,Ue),Ze.side=ht,Ze.needsUpdate=!0,be=!0}}be===!0&&(Me.updateMultisampleRenderTarget(q),Me.updateRenderTargetMipmap(q))}C.setRenderTarget(ne,ue,fe),C.setClearColor(Q,ae),Se!==void 0&&(w.viewport=Se),C.toneMapping=xe}function br(x,D,O){const w=D.isScene===!0?D.overrideMaterial:null;for(let N=0,q=x.length;N<q;N++){const j=x[N],{object:ne,geometry:ue,group:fe}=j;let xe=j.material;xe.allowOverride===!0&&w!==null&&(xe=w),ne.layers.test(O.layers)&&pa(ne,D,O,ue,xe,fe)}}function pa(x,D,O,w,N,q){x.onBeforeRender(C,D,O,w,N,q),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(C,D,O,w,x,q),N.transparent===!0&&N.side===En&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,C.renderBufferDirect(O,D,w,N,x,q),N.side=Ji,N.needsUpdate=!0,C.renderBufferDirect(O,D,w,N,x,q),N.side=En):C.renderBufferDirect(O,D,w,N,x,q),x.onAfterRender(C,D,O,w,N,q)}function yr(x,D,O){D.isScene!==!0&&(D=I);const w=Z.get(x),N=y.state.lights,q=y.state.shadowsArray,j=N.state.version,ne=ie.getParameters(x,N.state,q,D,O),ue=ie.getProgramCacheKey(ne);let fe=w.programs;w.environment=x.isMeshStandardMaterial?D.environment:null,w.fog=D.fog,w.envMap=(x.isMeshStandardMaterial?b:E).get(x.envMap||w.environment),w.envMapRotation=w.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,fe===void 0&&(x.addEventListener("dispose",nt),fe=new Map,w.programs=fe);let xe=fe.get(ue);if(xe!==void 0){if(w.currentProgram===xe&&w.lightsStateVersion===j)return xs(x,ne),xe}else ne.uniforms=ie.getUniforms(x),x.onBeforeCompile(ne,C),xe=ie.acquireProgram(ne,ue),fe.set(ue,xe),w.uniforms=ne.uniforms;const Se=w.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Ve.uniform),xs(x,ne),w.needsLights=Wn(x),w.lightsStateVersion=j,w.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),w.currentProgram=xe,w.uniformsList=null,xe}function gs(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=ro.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function xs(x,D){const O=Z.get(x);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ko(x,D,O,w,N){D.isScene!==!0&&(D=I),Me.resetTextureUnits();const q=D.fog,j=w.isMeshStandardMaterial?D.environment:null,ne=A===null?C.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,ue=(w.isMeshStandardMaterial?b:E).get(w.envMap||j),fe=w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,xe=!!O.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),Se=!!O.morphAttributes.position,be=!!O.morphAttributes.normal,Ce=!!O.morphAttributes.color;let ze=Ki;w.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ze=C.toneMapping);const je=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=je!==void 0?je.length:0,ke=Z.get(w),Ze=y.state.lights;if(z===!0&&(ce===!0||x!==J)){const At=x===J&&w.id===k;Ve.setState(w,x,At)}let Ue=!1;w.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ze.state.version||ke.outputColorSpace!==ne||N.isBatchedMesh&&ke.batching===!1||!N.isBatchedMesh&&ke.batching===!0||N.isBatchedMesh&&ke.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ke.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ke.instancing===!1||!N.isInstancedMesh&&ke.instancing===!0||N.isSkinnedMesh&&ke.skinning===!1||!N.isSkinnedMesh&&ke.skinning===!0||N.isInstancedMesh&&ke.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ke.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ke.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ke.instancingMorph===!1&&N.morphTexture!==null||ke.envMap!==ue||w.fog===!0&&ke.fog!==q||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ve.numPlanes||ke.numIntersection!==Ve.numIntersection)||ke.vertexAlphas!==fe||ke.vertexTangents!==xe||ke.morphTargets!==Se||ke.morphNormals!==be||ke.morphColors!==Ce||ke.toneMapping!==ze||ke.morphTargetsCount!==Ke)&&(Ue=!0):(Ue=!0,ke.__version=w.version);let ht=ke.currentProgram;Ue===!0&&(ht=yr(w,D,N));let Ct=!1,ut=!1,lt=!1;const Qe=ht.getUniforms(),Pt=ke.uniforms;if(re.useProgram(ht.program)&&(Ct=!0,ut=!0,lt=!0),w.id!==k&&(k=w.id,ut=!0),Ct||J!==x){re.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Qe.setValue(S,"projectionMatrix",x.projectionMatrix),Qe.setValue(S,"viewMatrix",x.matrixWorldInverse);const Ft=Qe.map.cameraPosition;Ft!==void 0&&Ft.setValue(S,_e.setFromMatrixPosition(x.matrixWorld)),de.logarithmicDepthBuffer&&Qe.setValue(S,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&Qe.setValue(S,"isOrthographic",x.isOrthographicCamera===!0),J!==x&&(J=x,ut=!0,lt=!0)}if(N.isSkinnedMesh){Qe.setOptional(S,N,"bindMatrix"),Qe.setOptional(S,N,"bindMatrixInverse");const At=N.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Qe.setValue(S,"boneTexture",At.boneTexture,Me))}N.isBatchedMesh&&(Qe.setOptional(S,N,"batchingTexture"),Qe.setValue(S,"batchingTexture",N._matricesTexture,Me),Qe.setOptional(S,N,"batchingIdTexture"),Qe.setValue(S,"batchingIdTexture",N._indirectTexture,Me),Qe.setOptional(S,N,"batchingColorTexture"),N._colorsTexture!==null&&Qe.setValue(S,"batchingColorTexture",N._colorsTexture,Me));const Vt=O.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&Ne.update(N,O,ht),(ut||ke.receiveShadow!==N.receiveShadow)&&(ke.receiveShadow=N.receiveShadow,Qe.setValue(S,"receiveShadow",N.receiveShadow)),w.isMeshGouraudMaterial&&w.envMap!==null&&(Pt.envMap.value=ue,Pt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),w.isMeshStandardMaterial&&w.envMap===null&&D.environment!==null&&(Pt.envMapIntensity.value=D.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=hE()),ut&&(Qe.setValue(S,"toneMappingExposure",C.toneMappingExposure),ke.needsLights&&fi(Pt,lt),q&&w.fog===!0&&Be.refreshFogUniforms(Pt,q),Be.refreshMaterialUniforms(Pt,w,Te,ye,y.state.transmissionRenderTarget[x.id]),ro.upload(S,gs(ke),Pt,Me)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(ro.upload(S,gs(ke),Pt,Me),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&Qe.setValue(S,"center",N.center),Qe.setValue(S,"modelViewMatrix",N.modelViewMatrix),Qe.setValue(S,"normalMatrix",N.normalMatrix),Qe.setValue(S,"modelMatrix",N.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){const At=w.uniformsGroups;for(let Ft=0,Vo=At.length;Ft<Vo;Ft++){const tr=At[Ft];Ie.update(tr,ht),Ie.bind(tr,ht)}}return ht}function fi(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Wn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,D,O){const w=Z.get(x);w.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,w.__autoAllocateDepthBuffer===!1&&(w.__useRenderToTexture=!1),Z.get(x.texture).__webglTexture=D,Z.get(x.depthTexture).__webglTexture=w.__autoAllocateDepthBuffer?void 0:O,w.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const O=Z.get(x);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const m=S.createFramebuffer();this.setRenderTarget=function(x,D=0,O=0){A=x,H=D,R=O;let w=!0,N=null,q=!1,j=!1;if(x){const ue=Z.get(x);if(ue.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(S.FRAMEBUFFER,null),w=!1;else if(ue.__webglFramebuffer===void 0)Me.setupRenderTarget(x);else if(ue.__hasExternalTextures)Me.rebindTextures(x,Z.get(x.texture).__webglTexture,Z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Se=x.depthTexture;if(ue.__boundDepthTexture!==Se){if(Se!==null&&Z.has(Se)&&(x.width!==Se.image.width||x.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(x)}}const fe=x.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(j=!0);const xe=Z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(xe[D])?N=xe[D][O]:N=xe[D],q=!0):x.samples>0&&Me.useMultisampledRTT(x)===!1?N=Z.get(x).__webglMultisampledFramebuffer:Array.isArray(xe)?N=xe[O]:N=xe,le.copy(x.viewport),pe.copy(x.scissor),ee=x.scissorTest}else le.copy(Je).multiplyScalar(Te).floor(),pe.copy(st).multiplyScalar(Te).floor(),ee=tt;if(O!==0&&(N=m),re.bindFramebuffer(S.FRAMEBUFFER,N)&&w&&re.drawBuffers(x,N),re.viewport(le),re.scissor(pe),re.setScissorTest(ee),q){const ue=Z.get(x.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,O)}else if(j){const ue=D;for(let fe=0;fe<x.textures.length;fe++){const xe=Z.get(x.textures[fe]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+fe,xe.__webglTexture,O,ue)}}else if(x!==null&&O!==0){const ue=Z.get(x.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ue.__webglTexture,O)}k=-1},this.readRenderTargetPixels=function(x,D,O,w,N,q,j,ne=0){if(!(x&&x.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&j!==void 0&&(ue=ue[j]),ue){re.bindFramebuffer(S.FRAMEBUFFER,ue);try{const fe=x.textures[ne],xe=fe.format,Se=fe.type;if(!de.textureFormatReadable(xe)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Se)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-w&&O>=0&&O<=x.height-N&&(x.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+ne),S.readPixels(D,O,w,N,Ye.convert(xe),Ye.convert(Se),q))}finally{const fe=A!==null?Z.get(A).__webglFramebuffer:null;re.bindFramebuffer(S.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(x,D,O,w,N,q,j,ne=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&j!==void 0&&(ue=ue[j]),ue)if(D>=0&&D<=x.width-w&&O>=0&&O<=x.height-N){re.bindFramebuffer(S.FRAMEBUFFER,ue);const fe=x.textures[ne],xe=fe.format,Se=fe.type;if(!de.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,be),S.bufferData(S.PIXEL_PACK_BUFFER,q.byteLength,S.STREAM_READ),x.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+ne),S.readPixels(D,O,w,N,Ye.convert(xe),Ye.convert(Se),0);const Ce=A!==null?Z.get(A).__webglFramebuffer:null;re.bindFramebuffer(S.FRAMEBUFFER,Ce);const ze=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await b_(S,ze,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,be),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,q),S.deleteBuffer(be),S.deleteSync(ze),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,O=0){const w=Math.pow(2,-O),N=Math.floor(x.image.width*w),q=Math.floor(x.image.height*w),j=D!==null?D.x:0,ne=D!==null?D.y:0;Me.setTexture2D(x,0),S.copyTexSubImage2D(S.TEXTURE_2D,O,0,0,j,ne,N,q),re.unbindTexture()};const T=S.createFramebuffer(),F=S.createFramebuffer();this.copyTextureToTexture=function(x,D,O=null,w=null,N=0,q=null){q===null&&(N!==0?(ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=N,N=0):q=0);let j,ne,ue,fe,xe,Se,be,Ce,ze;const je=x.isCompressedTexture?x.mipmaps[q]:x.image;if(O!==null)j=O.max.x-O.min.x,ne=O.max.y-O.min.y,ue=O.isBox3?O.max.z-O.min.z:1,fe=O.min.x,xe=O.min.y,Se=O.isBox3?O.min.z:0;else{const Vt=Math.pow(2,-N);j=Math.floor(je.width*Vt),ne=Math.floor(je.height*Vt),x.isDataArrayTexture?ue=je.depth:x.isData3DTexture?ue=Math.floor(je.depth*Vt):ue=1,fe=0,xe=0,Se=0}w!==null?(be=w.x,Ce=w.y,ze=w.z):(be=0,Ce=0,ze=0);const Ke=Ye.convert(D.format),ke=Ye.convert(D.type);let Ze;D.isData3DTexture?(Me.setTexture3D(D,0),Ze=S.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Me.setTexture2DArray(D,0),Ze=S.TEXTURE_2D_ARRAY):(Me.setTexture2D(D,0),Ze=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,D.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,D.unpackAlignment);const Ue=S.getParameter(S.UNPACK_ROW_LENGTH),ht=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Ct=S.getParameter(S.UNPACK_SKIP_PIXELS),ut=S.getParameter(S.UNPACK_SKIP_ROWS),lt=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,je.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,je.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,fe),S.pixelStorei(S.UNPACK_SKIP_ROWS,xe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Se);const Qe=x.isDataArrayTexture||x.isData3DTexture,Pt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Vt=Z.get(x),At=Z.get(D),Ft=Z.get(Vt.__renderTarget),Vo=Z.get(At.__renderTarget);re.bindFramebuffer(S.READ_FRAMEBUFFER,Ft.__webglFramebuffer),re.bindFramebuffer(S.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let tr=0;tr<ue;tr++)Qe&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Z.get(x).__webglTexture,N,Se+tr),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Z.get(D).__webglTexture,q,ze+tr)),S.blitFramebuffer(fe,xe,j,ne,be,Ce,j,ne,S.DEPTH_BUFFER_BIT,S.NEAREST);re.bindFramebuffer(S.READ_FRAMEBUFFER,null),re.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||Z.has(x)){const Vt=Z.get(x),At=Z.get(D);re.bindFramebuffer(S.READ_FRAMEBUFFER,T),re.bindFramebuffer(S.DRAW_FRAMEBUFFER,F);for(let Ft=0;Ft<ue;Ft++)Qe?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Vt.__webglTexture,N,Se+Ft):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Vt.__webglTexture,N),Pt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,At.__webglTexture,q,ze+Ft):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,At.__webglTexture,q),N!==0?S.blitFramebuffer(fe,xe,j,ne,be,Ce,j,ne,S.COLOR_BUFFER_BIT,S.NEAREST):Pt?S.copyTexSubImage3D(Ze,q,be,Ce,ze+Ft,fe,xe,j,ne):S.copyTexSubImage2D(Ze,q,be,Ce,fe,xe,j,ne);re.bindFramebuffer(S.READ_FRAMEBUFFER,null),re.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Pt?x.isDataTexture||x.isData3DTexture?S.texSubImage3D(Ze,q,be,Ce,ze,j,ne,ue,Ke,ke,je.data):D.isCompressedArrayTexture?S.compressedTexSubImage3D(Ze,q,be,Ce,ze,j,ne,ue,Ke,je.data):S.texSubImage3D(Ze,q,be,Ce,ze,j,ne,ue,Ke,ke,je):x.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,q,be,Ce,j,ne,Ke,ke,je.data):x.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,q,be,Ce,je.width,je.height,Ke,je.data):S.texSubImage2D(S.TEXTURE_2D,q,be,Ce,j,ne,Ke,ke,je);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ue),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ht),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ct),S.pixelStorei(S.UNPACK_SKIP_ROWS,ut),S.pixelStorei(S.UNPACK_SKIP_IMAGES,lt),q===0&&D.generateMipmaps&&S.generateMipmap(Ze),re.unbindTexture()},this.initRenderTarget=function(x){Z.get(x).__webglFramebuffer===void 0&&Me.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Me.setTextureCube(x,0):x.isData3DTexture?Me.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Me.setTexture2DArray(x,0):Me.setTexture2D(x,0),re.unbindTexture()},this.resetState=function(){H=0,R=0,A=null,re.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const Lh={type:"change"},Lu={type:"start"},Zp={type:"end"},qa=new oa,Ih=new Hi,pE=Math.cos(70*M_.DEG2RAD),Ot=new K,un=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6;class mE extends Av{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new _r,this._lastTargetPosition=new K,this._quat=new _r().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oh,this._sphericalDelta=new oh,this._scale=1,this._panOffset=new K,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new K,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xE.bind(this),this._onPointerDown=gE.bind(this),this._onPointerUp=_E.bind(this),this._onContextMenu=TE.bind(this),this._onMouseWheel=bE.bind(this),this._onKeyDown=yE.bind(this),this._onTouchStart=ME.bind(this),this._onTouchMove=EE.bind(this),this._onMouseDown=vE.bind(this),this._onMouseMove=SE.bind(this),this._interceptControlDown=AE.bind(this),this._interceptControlUp=wE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lh),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ot.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qa.origin.copy(this.object.position),qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qa.direction))<pE?this.object.lookAt(this.target):(Ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),qa.intersectPlane(Ih,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent(Lh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ot.copy(r).sub(this.target);let s=Ot.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _E(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zp),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case Jr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case Jr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Lu)}function SE(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bE(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(Lu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zp))}function yE(n){this.enabled!==!1&&this._handleKeyDown(n)}function ME(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Lu)}function EE(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function TE(n){this.enabled!==!1&&n.preventDefault()}function AE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Dn=Uint8Array,qr=Uint16Array,CE=Int32Array,$p=new Dn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Jp=new Dn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),RE=new Dn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qp=function(n,e){for(var t=new qr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new CE(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},em=Qp($p,2),tm=em.b,PE=em.r;tm[28]=258,PE[258]=28;var DE=Qp(Jp,0),LE=DE.b,Kc=new qr(32768);for(var Rt=0;Rt<32768;++Rt){var zi=(Rt&43690)>>1|(Rt&21845)<<1;zi=(zi&52428)>>2|(zi&13107)<<2,zi=(zi&61680)>>4|(zi&3855)<<4,Kc[Rt]=((zi&65280)>>8|(zi&255)<<8)>>1}var Ws=function(n,e,t){for(var i=n.length,r=0,s=new qr(e);r<i;++r)n[r]&&++s[n[r]-1];var a=new qr(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new qr(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],f=a[n[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)o[Kc[f]>>l]=c}else for(o=new qr(i),r=0;r<i;++r)n[r]&&(o[r]=Kc[a[n[r]-1]++]>>15-n[r]);return o},ua=new Dn(288);for(var Rt=0;Rt<144;++Rt)ua[Rt]=8;for(var Rt=144;Rt<256;++Rt)ua[Rt]=9;for(var Rt=256;Rt<280;++Rt)ua[Rt]=7;for(var Rt=280;Rt<288;++Rt)ua[Rt]=8;var nm=new Dn(32);for(var Rt=0;Rt<32;++Rt)nm[Rt]=5;var IE=Ws(ua,9,1),UE=Ws(nm,5,1),Ol=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Bn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Bl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},NE=function(n){return(n+7)/8|0},FE=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Dn(n.subarray(e,t))},OE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zn=function(n,e,t){var i=new Error(e||OE[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,zn),!t)throw i;return i},BE=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new Dn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Dn(r*3));var c=function(Le){var I=t.length;if(Le>I){var U=new Dn(Math.max(I*2,Le));U.set(t),t=U}},u=e.f||0,f=e.p||0,h=e.b||0,d=e.l,_=e.d,v=e.m,g=e.n,p=r*8;do{if(!d){u=Bn(n,f,1);var M=Bn(n,f+1,3);if(f+=3,M)if(M==1)d=IE,_=UE,v=9,g=5;else if(M==2){var C=Bn(n,f,31)+257,L=Bn(n,f+10,15)+4,H=C+Bn(n,f+5,31)+1;f+=14;for(var R=new Dn(H),A=new Dn(19),k=0;k<L;++k)A[RE[k]]=Bn(n,f+k*3,7);f+=L*3;for(var J=Ol(A),le=(1<<J)-1,pe=Ws(A,J,1),k=0;k<H;){var ee=pe[Bn(n,f,le)];f+=ee&15;var y=ee>>4;if(y<16)R[k++]=y;else{var Q=0,ae=0;for(y==16?(ae=3+Bn(n,f,3),f+=2,Q=R[k-1]):y==17?(ae=3+Bn(n,f,7),f+=3):y==18&&(ae=11+Bn(n,f,127),f+=7);ae--;)R[k++]=Q}}var $=R.subarray(0,C),ye=R.subarray(C);v=Ol($),g=Ol(ye),d=Ws($,v,1),_=Ws(ye,g,1)}else zn(1);else{var y=NE(f)+4,P=n[y-4]|n[y-3]<<8,B=y+P;if(B>r){l&&zn(0);break}o&&c(h+P),t.set(n.subarray(y,B),h),e.b=h+=P,e.p=f=B*8,e.f=u;continue}if(f>p){l&&zn(0);break}}o&&c(h+131072);for(var Te=(1<<v)-1,Oe=(1<<g)-1,He=f;;He=f){var Q=d[Bl(n,f)&Te],Je=Q>>4;if(f+=Q&15,f>p){l&&zn(0);break}if(Q||zn(2),Je<256)t[h++]=Je;else if(Je==256){He=f,d=null;break}else{var st=Je-254;if(Je>264){var k=Je-257,tt=$p[k];st=Bn(n,f,(1<<tt)-1)+tm[k],f+=tt}var te=_[Bl(n,f)&Oe],z=te>>4;te||zn(3),f+=te&15;var ye=LE[z];if(z>3){var tt=Jp[z];ye+=Bl(n,f)&(1<<tt)-1,f+=tt}if(f>p){l&&zn(0);break}o&&c(h+131072);var ce=h+st;if(h<ye){var me=s-ye,_e=Math.min(ye,ce);for(me+h<0&&zn(3);h<_e;++h)t[h]=i[me+h]}for(;h<ce;++h)t[h]=t[h-ye]}}e.l=d,e.p=He,e.b=h,e.f=u,d&&(u=1,e.m=v,e.d=_,e.n=g)}while(!u);return h!=t.length&&a?FE(t,0,h):t.subarray(0,h)},zE=new Dn(0),kE=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&zn(6,"invalid zlib data"),(n[1]>>5&1)==1&&zn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function ja(n,e){return BE(n.subarray(kE(n),-4),{i:2},e,e)}var VE=typeof TextDecoder<"u"&&new TextDecoder,HE=0;try{VE.decode(zE,{stream:!0}),HE=1}catch{}class GE extends hv{constructor(e){super(e),this.type=Wt,this.outputFormat=Xt}parse(e){const R=Math.pow(2.7182818,2.2);function A(m,T){let F=0;for(let D=0;D<65536;++D)(D==0||m[D>>3]&1<<(D&7))&&(T[F++]=D);const x=F-1;for(;F<65536;)T[F++]=0;return x}function k(m){for(let T=0;T<16384;T++)m[T]={},m[T].len=0,m[T].lit=0,m[T].p=null}const J={l:0,c:0,lc:0};function le(m,T,F,x,D){for(;F<m;)T=T<<8|We(x,D),F+=8;F-=m,J.l=T>>F&(1<<m)-1,J.c=T,J.lc=F}const pe=new Array(59);function ee(m){for(let F=0;F<=58;++F)pe[F]=0;for(let F=0;F<65537;++F)pe[m[F]]+=1;let T=0;for(let F=58;F>0;--F){const x=T+pe[F]>>1;pe[F]=T,T=x}for(let F=0;F<65537;++F){const x=m[F];x>0&&(m[F]=x|pe[x]++<<6)}}function Q(m,T,F,x,D,O){const w=T;let N=0,q=0;for(;x<=D;x++){if(w.value-T.value>F)return!1;le(6,N,q,m,w);const j=J.l;if(N=J.c,q=J.lc,O[x]=j,j==63){if(w.value-T.value>F)throw new Error("Something wrong with hufUnpackEncTable");le(8,N,q,m,w);let ne=J.l+6;if(N=J.c,q=J.lc,x+ne>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ne--;)O[x++]=0;x--}else if(j>=59){let ne=j-59+2;if(x+ne>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ne--;)O[x++]=0;x--}}ee(O)}function ae(m){return m&63}function $(m){return m>>6}function ye(m,T,F,x){for(;T<=F;T++){const D=$(m[T]),O=ae(m[T]);if(D>>O)throw new Error("Invalid table entry");if(O>14){const w=x[D>>O-14];if(w.len)throw new Error("Invalid table entry");if(w.lit++,w.p){const N=w.p;w.p=new Array(w.lit);for(let q=0;q<w.lit-1;++q)w.p[q]=N[q]}else w.p=new Array(1);w.p[w.lit-1]=T}else if(O){let w=0;for(let N=1<<14-O;N>0;N--){const q=x[(D<<14-O)+w];if(q.len||q.p)throw new Error("Invalid table entry");q.len=O,q.lit=T,w++}}}return!0}const Te={c:0,lc:0};function Oe(m,T,F,x){m=m<<8|We(F,x),T+=8,Te.c=m,Te.lc=T}const He={c:0,lc:0};function Je(m,T,F,x,D,O,w,N,q){if(m==T){x<8&&(Oe(F,x,D,O),F=Te.c,x=Te.lc),x-=8;let j=F>>x;if(j=new Uint8Array([j])[0],N.value+j>q)return!1;const ne=w[N.value-1];for(;j-- >0;)w[N.value++]=ne}else if(N.value<q)w[N.value++]=m;else return!1;He.c=F,He.lc=x}function st(m){return m&65535}function tt(m){const T=st(m);return T>32767?T-65536:T}const te={a:0,b:0};function z(m,T){const F=tt(m),D=tt(T),O=F+(D&1)+(D>>1),w=O,N=O-D;te.a=w,te.b=N}function ce(m,T){const F=st(m),x=st(T),D=F-(x>>1)&65535,O=x+D-32768&65535;te.a=O,te.b=D}function me(m,T,F,x,D,O,w){const N=w<16384,q=F>D?D:F;let j=1,ne,ue;for(;j<=q;)j<<=1;for(j>>=1,ne=j,j>>=1;j>=1;){ue=0;const fe=ue+O*(D-ne),xe=O*j,Se=O*ne,be=x*j,Ce=x*ne;let ze,je,Ke,ke;for(;ue<=fe;ue+=Se){let Ze=ue;const Ue=ue+x*(F-ne);for(;Ze<=Ue;Ze+=Ce){const ht=Ze+be,Ct=Ze+xe,ut=Ct+be;N?(z(m[Ze+T],m[Ct+T]),ze=te.a,Ke=te.b,z(m[ht+T],m[ut+T]),je=te.a,ke=te.b,z(ze,je),m[Ze+T]=te.a,m[ht+T]=te.b,z(Ke,ke),m[Ct+T]=te.a,m[ut+T]=te.b):(ce(m[Ze+T],m[Ct+T]),ze=te.a,Ke=te.b,ce(m[ht+T],m[ut+T]),je=te.a,ke=te.b,ce(ze,je),m[Ze+T]=te.a,m[ht+T]=te.b,ce(Ke,ke),m[Ct+T]=te.a,m[ut+T]=te.b)}if(F&j){const ht=Ze+xe;N?z(m[Ze+T],m[ht+T]):ce(m[Ze+T],m[ht+T]),ze=te.a,m[ht+T]=te.b,m[Ze+T]=ze}}if(D&j){let Ze=ue;const Ue=ue+x*(F-ne);for(;Ze<=Ue;Ze+=Ce){const ht=Ze+be;N?z(m[Ze+T],m[ht+T]):ce(m[Ze+T],m[ht+T]),ze=te.a,m[ht+T]=te.b,m[Ze+T]=ze}}ne=j,j>>=1}return ue}function _e(m,T,F,x,D,O,w,N,q){let j=0,ne=0;const ue=w,fe=Math.trunc(x.value+(D+7)/8);for(;x.value<fe;)for(Oe(j,ne,F,x),j=Te.c,ne=Te.lc;ne>=14;){const Se=j>>ne-14&16383,be=T[Se];if(be.len)ne-=be.len,Je(be.lit,O,j,ne,F,x,N,q,ue),j=He.c,ne=He.lc;else{if(!be.p)throw new Error("hufDecode issues");let Ce;for(Ce=0;Ce<be.lit;Ce++){const ze=ae(m[be.p[Ce]]);for(;ne<ze&&x.value<fe;)Oe(j,ne,F,x),j=Te.c,ne=Te.lc;if(ne>=ze&&$(m[be.p[Ce]])==(j>>ne-ze&(1<<ze)-1)){ne-=ze,Je(be.p[Ce],O,j,ne,F,x,N,q,ue),j=He.c,ne=He.lc;break}}if(Ce==be.lit)throw new Error("hufDecode issues")}}const xe=8-D&7;for(j>>=xe,ne-=xe;ne>0;){const Se=T[j<<14-ne&16383];if(Se.len)ne-=Se.len,Je(Se.lit,O,j,ne,F,x,N,q,ue),j=He.c,ne=He.lc;else throw new Error("hufDecode issues")}return!0}function Le(m,T,F,x,D,O){const w={value:0},N=F.value,q=Ne(T,F),j=Ne(T,F);F.value+=4;const ne=Ne(T,F);if(F.value+=4,q<0||q>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ue=new Array(65537),fe=new Array(16384);k(fe);const xe=x-(F.value-N);if(Q(m,F,xe,q,j,ue),ne>8*(x-(F.value-N)))throw new Error("Something wrong with hufUncompress");ye(ue,q,j,fe),_e(ue,fe,m,F,ne,j,O,D,w)}function I(m,T,F){for(let x=0;x<F;++x)T[x]=m[T[x]]}function U(m){for(let T=1;T<m.length;T++){const F=m[T-1]+m[T]-128;m[T]=F}}function X(m,T){let F=0,x=Math.floor((m.length+1)/2),D=0;const O=m.length-1;for(;!(D>O||(T[D++]=m[F++],D>O));)T[D++]=m[x++]}function S(m){let T=m.byteLength;const F=new Array;let x=0;const D=new DataView(m);for(;T>0;){const O=D.getInt8(x++);if(O<0){const w=-O;T-=w+1;for(let N=0;N<w;N++)F.push(D.getUint8(x++))}else{const w=O;T-=2;const N=D.getUint8(x++);for(let q=0;q<w+1;q++)F.push(N)}}return F}function W(m,T,F,x,D,O){let w=new DataView(O.buffer);const N=F[m.idx[0]].width,q=F[m.idx[0]].height,j=3,ne=Math.floor(N/8),ue=Math.ceil(N/8),fe=Math.ceil(q/8),xe=N-(ue-1)*8,Se=q-(fe-1)*8,be={value:0},Ce=new Array(j),ze=new Array(j),je=new Array(j),Ke=new Array(j),ke=new Array(j);for(let Ue=0;Ue<j;++Ue)ke[Ue]=T[m.idx[Ue]],Ce[Ue]=Ue<1?0:Ce[Ue-1]+ue*fe,ze[Ue]=new Float32Array(64),je[Ue]=new Uint16Array(64),Ke[Ue]=new Uint16Array(ue*64);for(let Ue=0;Ue<fe;++Ue){let ht=8;Ue==fe-1&&(ht=Se);let Ct=8;for(let lt=0;lt<ue;++lt){lt==ue-1&&(Ct=xe);for(let Qe=0;Qe<j;++Qe)je[Qe].fill(0),je[Qe][0]=D[Ce[Qe]++],de(be,x,je[Qe]),re(je[Qe],ze[Qe]),ge(ze[Qe]);Z(ze);for(let Qe=0;Qe<j;++Qe)Me(ze[Qe],Ke[Qe],lt*64)}let ut=0;for(let lt=0;lt<j;++lt){const Qe=F[m.idx[lt]].type;for(let Pt=8*Ue;Pt<8*Ue+ht;++Pt){ut=ke[lt][Pt];for(let Vt=0;Vt<ne;++Vt){const At=Vt*64+(Pt&7)*8;w.setUint16(ut+0*2*Qe,Ke[lt][At+0],!0),w.setUint16(ut+1*2*Qe,Ke[lt][At+1],!0),w.setUint16(ut+2*2*Qe,Ke[lt][At+2],!0),w.setUint16(ut+3*2*Qe,Ke[lt][At+3],!0),w.setUint16(ut+4*2*Qe,Ke[lt][At+4],!0),w.setUint16(ut+5*2*Qe,Ke[lt][At+5],!0),w.setUint16(ut+6*2*Qe,Ke[lt][At+6],!0),w.setUint16(ut+7*2*Qe,Ke[lt][At+7],!0),ut+=8*2*Qe}}if(ne!=ue)for(let Pt=8*Ue;Pt<8*Ue+ht;++Pt){const Vt=ke[lt][Pt]+8*ne*2*Qe,At=ne*64+(Pt&7)*8;for(let Ft=0;Ft<Ct;++Ft)w.setUint16(Vt+Ft*2*Qe,Ke[lt][At+Ft],!0)}}}const Ze=new Uint16Array(N);w=new DataView(O.buffer);for(let Ue=0;Ue<j;++Ue){F[m.idx[Ue]].decoded=!0;const ht=F[m.idx[Ue]].type;if(F[Ue].type==2)for(let Ct=0;Ct<q;++Ct){const ut=ke[Ue][Ct];for(let lt=0;lt<N;++lt)Ze[lt]=w.getUint16(ut+lt*2*ht,!0);for(let lt=0;lt<N;++lt)w.setFloat32(ut+lt*2*ht,oe(Ze[lt]),!0)}}}function Y(m,T,F,x,D,O){const w=new DataView(O.buffer),N=F[m],q=N.width,j=N.height,ne=Math.ceil(q/8),ue=Math.ceil(j/8),fe=Math.floor(q/8),xe=q-(ne-1)*8,Se=j-(ue-1)*8,be={value:0};let Ce=0;const ze=new Float32Array(64),je=new Uint16Array(64),Ke=new Uint16Array(ne*64);for(let ke=0;ke<ue;++ke){let Ze=8;ke==ue-1&&(Ze=Se);for(let Ue=0;Ue<ne;++Ue)je.fill(0),je[0]=D[Ce++],de(be,x,je),re(je,ze),ge(ze),Me(ze,Ke,Ue*64);for(let Ue=8*ke;Ue<8*ke+Ze;++Ue){let ht=T[m][Ue];for(let Ct=0;Ct<fe;++Ct){const ut=Ct*64+(Ue&7)*8;for(let lt=0;lt<8;++lt)w.setUint16(ht+lt*2*N.type,Ke[ut+lt],!0);ht+=8*2*N.type}if(ne!=fe){const Ct=fe*64+(Ue&7)*8;for(let ut=0;ut<xe;++ut)w.setUint16(ht+ut*2*N.type,Ke[Ct+ut],!0)}}}N.decoded=!0}function de(m,T,F){let x,D=1;for(;D<64;)x=T[m.value],x==65280?D=64:x>>8==255?D+=x&255:(F[D]=x,D++),m.value++}function re(m,T){T[0]=oe(m[0]),T[1]=oe(m[1]),T[2]=oe(m[5]),T[3]=oe(m[6]),T[4]=oe(m[14]),T[5]=oe(m[15]),T[6]=oe(m[27]),T[7]=oe(m[28]),T[8]=oe(m[2]),T[9]=oe(m[4]),T[10]=oe(m[7]),T[11]=oe(m[13]),T[12]=oe(m[16]),T[13]=oe(m[26]),T[14]=oe(m[29]),T[15]=oe(m[42]),T[16]=oe(m[3]),T[17]=oe(m[8]),T[18]=oe(m[12]),T[19]=oe(m[17]),T[20]=oe(m[25]),T[21]=oe(m[30]),T[22]=oe(m[41]),T[23]=oe(m[43]),T[24]=oe(m[9]),T[25]=oe(m[11]),T[26]=oe(m[18]),T[27]=oe(m[24]),T[28]=oe(m[31]),T[29]=oe(m[40]),T[30]=oe(m[44]),T[31]=oe(m[53]),T[32]=oe(m[10]),T[33]=oe(m[19]),T[34]=oe(m[23]),T[35]=oe(m[32]),T[36]=oe(m[39]),T[37]=oe(m[45]),T[38]=oe(m[52]),T[39]=oe(m[54]),T[40]=oe(m[20]),T[41]=oe(m[22]),T[42]=oe(m[33]),T[43]=oe(m[38]),T[44]=oe(m[46]),T[45]=oe(m[51]),T[46]=oe(m[55]),T[47]=oe(m[60]),T[48]=oe(m[21]),T[49]=oe(m[34]),T[50]=oe(m[37]),T[51]=oe(m[47]),T[52]=oe(m[50]),T[53]=oe(m[56]),T[54]=oe(m[59]),T[55]=oe(m[61]),T[56]=oe(m[35]),T[57]=oe(m[36]),T[58]=oe(m[48]),T[59]=oe(m[49]),T[60]=oe(m[57]),T[61]=oe(m[58]),T[62]=oe(m[62]),T[63]=oe(m[63])}function ge(m){const T=.5*Math.cos(.7853975),F=.5*Math.cos(3.14159/16),x=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),w=.5*Math.cos(3*3.14159/8),N=.5*Math.cos(7*3.14159/16),q=new Array(4),j=new Array(4),ne=new Array(4),ue=new Array(4);for(let fe=0;fe<8;++fe){const xe=fe*8;q[0]=x*m[xe+2],q[1]=w*m[xe+2],q[2]=x*m[xe+6],q[3]=w*m[xe+6],j[0]=F*m[xe+1]+D*m[xe+3]+O*m[xe+5]+N*m[xe+7],j[1]=D*m[xe+1]-N*m[xe+3]-F*m[xe+5]-O*m[xe+7],j[2]=O*m[xe+1]-F*m[xe+3]+N*m[xe+5]+D*m[xe+7],j[3]=N*m[xe+1]-O*m[xe+3]+D*m[xe+5]-F*m[xe+7],ne[0]=T*(m[xe+0]+m[xe+4]),ne[3]=T*(m[xe+0]-m[xe+4]),ne[1]=q[0]+q[3],ne[2]=q[1]-q[2],ue[0]=ne[0]+ne[1],ue[1]=ne[3]+ne[2],ue[2]=ne[3]-ne[2],ue[3]=ne[0]-ne[1],m[xe+0]=ue[0]+j[0],m[xe+1]=ue[1]+j[1],m[xe+2]=ue[2]+j[2],m[xe+3]=ue[3]+j[3],m[xe+4]=ue[3]-j[3],m[xe+5]=ue[2]-j[2],m[xe+6]=ue[1]-j[1],m[xe+7]=ue[0]-j[0]}for(let fe=0;fe<8;++fe)q[0]=x*m[16+fe],q[1]=w*m[16+fe],q[2]=x*m[48+fe],q[3]=w*m[48+fe],j[0]=F*m[8+fe]+D*m[24+fe]+O*m[40+fe]+N*m[56+fe],j[1]=D*m[8+fe]-N*m[24+fe]-F*m[40+fe]-O*m[56+fe],j[2]=O*m[8+fe]-F*m[24+fe]+N*m[40+fe]+D*m[56+fe],j[3]=N*m[8+fe]-O*m[24+fe]+D*m[40+fe]-F*m[56+fe],ne[0]=T*(m[fe]+m[32+fe]),ne[3]=T*(m[fe]-m[32+fe]),ne[1]=q[0]+q[3],ne[2]=q[1]-q[2],ue[0]=ne[0]+ne[1],ue[1]=ne[3]+ne[2],ue[2]=ne[3]-ne[2],ue[3]=ne[0]-ne[1],m[0+fe]=ue[0]+j[0],m[8+fe]=ue[1]+j[1],m[16+fe]=ue[2]+j[2],m[24+fe]=ue[3]+j[3],m[32+fe]=ue[3]-j[3],m[40+fe]=ue[2]-j[2],m[48+fe]=ue[1]-j[1],m[56+fe]=ue[0]-j[0]}function Z(m){for(let T=0;T<64;++T){const F=m[0][T],x=m[1][T],D=m[2][T];m[0][T]=F+1.5747*D,m[1][T]=F-.1873*x-.4682*D,m[2][T]=F+1.8556*x}}function Me(m,T,F){for(let x=0;x<64;++x)T[F+x]=Wf.toHalfFloat(E(m[x]))}function E(m){return m<=1?Math.sign(m)*Math.pow(Math.abs(m),2.2):Math.sign(m)*Math.pow(R,Math.abs(m)-1)}function b(m){return new DataView(m.array.buffer,m.offset.value,m.size)}function G(m){const T=m.viewer.buffer.slice(m.offset.value,m.offset.value+m.size),F=new Uint8Array(S(T)),x=new Uint8Array(F.length);return U(F),X(F,x),new DataView(x.buffer)}function se(m){const T=m.array.slice(m.offset.value,m.offset.value+m.size),F=ja(T),x=new Uint8Array(F.length);return U(F),X(F,x),new DataView(x.buffer)}function he(m){const T=m.viewer,F={value:m.offset.value},x=new Uint16Array(m.columns*m.lines*(m.inputChannels.length*m.type)),D=new Uint8Array(8192);let O=0;const w=new Array(m.inputChannels.length);for(let Se=0,be=m.inputChannels.length;Se<be;Se++)w[Se]={},w[Se].start=O,w[Se].end=w[Se].start,w[Se].nx=m.columns,w[Se].ny=m.lines,w[Se].size=m.type,O+=w[Se].nx*w[Se].ny*w[Se].size;const N=Pe(T,F),q=Pe(T,F);if(q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(N<=q)for(let Se=0;Se<q-N+1;Se++)D[Se+N]=De(T,F);const j=new Uint16Array(65536),ne=A(D,j),ue=Ne(T,F);Le(m.array,T,F,ue,x,O);for(let Se=0;Se<m.inputChannels.length;++Se){const be=w[Se];for(let Ce=0;Ce<w[Se].size;++Ce)me(x,be.start+Ce,be.nx,be.size,be.ny,be.nx*be.size,ne)}I(j,x,O);let fe=0;const xe=new Uint8Array(x.buffer.byteLength);for(let Se=0;Se<m.lines;Se++)for(let be=0;be<m.inputChannels.length;be++){const Ce=w[be],ze=Ce.nx*Ce.size,je=new Uint8Array(x.buffer,Ce.end*2,ze*2);xe.set(je,fe),fe+=ze*2,Ce.end+=ze}return new DataView(xe.buffer)}function ie(m){const T=m.array.slice(m.offset.value,m.offset.value+m.size),F=ja(T),x=m.inputChannels.length*m.lines*m.columns*m.totalBytes,D=new ArrayBuffer(x),O=new DataView(D);let w=0,N=0;const q=new Array(4);for(let j=0;j<m.lines;j++)for(let ne=0;ne<m.inputChannels.length;ne++){let ue=0;switch(m.inputChannels[ne].pixelType){case 1:q[0]=w,q[1]=q[0]+m.columns,w=q[1]+m.columns;for(let xe=0;xe<m.columns;++xe){const Se=F[q[0]++]<<8|F[q[1]++];ue+=Se,O.setUint16(N,ue,!0),N+=2}break;case 2:q[0]=w,q[1]=q[0]+m.columns,q[2]=q[1]+m.columns,w=q[2]+m.columns;for(let xe=0;xe<m.columns;++xe){const Se=F[q[0]++]<<24|F[q[1]++]<<16|F[q[2]++]<<8;ue+=Se,O.setUint32(N,ue,!0),N+=4}break}}return O}function Be(m){const T=m.viewer,F={value:m.offset.value},x=new Uint8Array(m.columns*m.lines*(m.inputChannels.length*m.type*2)),D={version:Ye(T,F),unknownUncompressedSize:Ye(T,F),unknownCompressedSize:Ye(T,F),acCompressedSize:Ye(T,F),dcCompressedSize:Ye(T,F),rleCompressedSize:Ye(T,F),rleUncompressedSize:Ye(T,F),rleRawSize:Ye(T,F),totalAcUncompressedCount:Ye(T,F),totalDcUncompressedCount:Ye(T,F),acCompression:Ye(T,F)};if(D.version<2)throw new Error("EXRLoader.parse: "+fi.compression+" version "+D.version+" is unsupported");const O=new Array;let w=Pe(T,F)-2;for(;w>0;){const be=we(T.buffer,F),Ce=De(T,F),ze=Ce>>2&3,je=(Ce>>4)-1,Ke=new Int8Array([je])[0],ke=De(T,F);O.push({name:be,index:Ke,type:ke,compression:ze}),w-=be.length+3}const N=fi.channels,q=new Array(m.inputChannels.length);for(let be=0;be<m.inputChannels.length;++be){const Ce=q[be]={},ze=N[be];Ce.name=ze.name,Ce.compression=0,Ce.decoded=!1,Ce.type=ze.pixelType,Ce.pLinear=ze.pLinear,Ce.width=m.columns,Ce.height=m.lines}const j={idx:new Array(3)};for(let be=0;be<m.inputChannels.length;++be){const Ce=q[be];for(let ze=0;ze<O.length;++ze){const je=O[ze];Ce.name==je.name&&(Ce.compression=je.compression,je.index>=0&&(j.idx[je.index]=be),Ce.offset=be)}}let ne,ue,fe;if(D.acCompressedSize>0)switch(D.acCompression){case 0:ne=new Uint16Array(D.totalAcUncompressedCount),Le(m.array,T,F,D.acCompressedSize,ne,D.totalAcUncompressedCount);break;case 1:const be=m.array.slice(F.value,F.value+D.totalAcUncompressedCount),Ce=ja(be);ne=new Uint16Array(Ce.buffer),F.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const be={array:m.array,offset:F,size:D.dcCompressedSize};ue=new Uint16Array(se(be).buffer),F.value+=D.dcCompressedSize}if(D.rleRawSize>0){const be=m.array.slice(F.value,F.value+D.rleCompressedSize),Ce=ja(be);fe=S(Ce.buffer),F.value+=D.rleCompressedSize}let xe=0;const Se=new Array(q.length);for(let be=0;be<Se.length;++be)Se[be]=new Array;for(let be=0;be<m.lines;++be)for(let Ce=0;Ce<q.length;++Ce)Se[Ce].push(xe),xe+=q[Ce].width*m.type*2;j.idx[0]!==void 0&&q[j.idx[0]]&&W(j,Se,q,ne,ue,x);for(let be=0;be<q.length;++be){const Ce=q[be];if(!Ce.decoded)switch(Ce.compression){case 2:let ze=0,je=0;for(let Ke=0;Ke<m.lines;++Ke){let ke=Se[be][ze];for(let Ze=0;Ze<Ce.width;++Ze){for(let Ue=0;Ue<2*Ce.type;++Ue)x[ke++]=fe[je+Ue*Ce.width*Ce.height];je++}ze++}break;case 1:Y(be,Se,q,ne,ue,x);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(x.buffer)}function we(m,T){const F=new Uint8Array(m);let x=0;for(;F[T.value+x]!=0;)x+=1;const D=new TextDecoder().decode(F.slice(T.value,T.value+x));return T.value=T.value+x+1,D}function Ge(m,T,F){const x=new TextDecoder().decode(new Uint8Array(m).slice(T.value,T.value+F));return T.value=T.value+F,x}function Ve(m,T){const F=Ae(m,T),x=Ne(m,T);return[F,x]}function Ee(m,T){const F=Ne(m,T),x=Ne(m,T);return[F,x]}function Ae(m,T){const F=m.getInt32(T.value,!0);return T.value=T.value+4,F}function Ne(m,T){const F=m.getUint32(T.value,!0);return T.value=T.value+4,F}function We(m,T){const F=m[T.value];return T.value=T.value+1,F}function De(m,T){const F=m.getUint8(T.value);return T.value=T.value+1,F}const Ye=function(m,T){let F;return"getBigInt64"in DataView.prototype?F=Number(m.getBigInt64(T.value,!0)):F=m.getUint32(T.value+4,!0)+Number(m.getUint32(T.value,!0)<<32),T.value+=8,F};function V(m,T){const F=m.getFloat32(T.value,!0);return T.value+=4,F}function Ie(m,T){return Wf.toHalfFloat(V(m,T))}function oe(m){const T=(m&31744)>>10,F=m&1023;return(m>>15?-1:1)*(T?T===31?F?NaN:1/0:Math.pow(2,T-15)*(1+F/1024):6103515625e-14*(F/1024))}function Pe(m,T){const F=m.getUint16(T.value,!0);return T.value+=2,F}function Re(m,T){return oe(Pe(m,T))}function ve(m,T,F,x){const D=F.value,O=[];for(;F.value<D+x-1;){const w=we(T,F),N=Ae(m,F),q=De(m,F);F.value+=3;const j=Ae(m,F),ne=Ae(m,F);O.push({name:w,pixelType:N,pLinear:q,xSampling:j,ySampling:ne})}return F.value+=1,O}function qe(m,T){const F=V(m,T),x=V(m,T),D=V(m,T),O=V(m,T),w=V(m,T),N=V(m,T),q=V(m,T),j=V(m,T);return{redX:F,redY:x,greenX:D,greenY:O,blueX:w,blueY:N,whiteX:q,whiteY:j}}function nt(m,T){const F=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],x=De(m,T);return F[x]}function Et(m,T){const F=Ae(m,T),x=Ae(m,T),D=Ae(m,T),O=Ae(m,T);return{xMin:F,yMin:x,xMax:D,yMax:O}}function pt(m,T){const F=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],x=De(m,T);return F[x]}function wn(m,T){const F=["ENVMAP_LATLONG","ENVMAP_CUBE"],x=De(m,T);return F[x]}function gn(m,T){const F=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],x=["ROUND_DOWN","ROUND_UP"],D=Ne(m,T),O=Ne(m,T),w=De(m,T);return{xSize:D,ySize:O,levelMode:F[w&15],roundingMode:x[w>>4]}}function zo(m,T){const F=V(m,T),x=V(m,T);return[F,x]}function fa(m,T){const F=V(m,T),x=V(m,T),D=V(m,T);return[F,x,D]}function ha(m,T,F,x,D){if(x==="string"||x==="stringvector"||x==="iccProfile")return Ge(T,F,D);if(x==="chlist")return ve(m,T,F,D);if(x==="chromaticities")return qe(m,F);if(x==="compression")return nt(m,F);if(x==="box2i")return Et(m,F);if(x==="envmap")return wn(m,F);if(x==="tiledesc")return gn(m,F);if(x==="lineOrder")return pt(m,F);if(x==="float")return V(m,F);if(x==="v2f")return zo(m,F);if(x==="v3f")return fa(m,F);if(x==="int")return Ae(m,F);if(x==="rational")return Ve(m,F);if(x==="timecode")return Ee(m,F);if(x==="preview")return F.value+=D,"skipped";F.value+=D}function ui(m,T){const F=Math.log2(m);return T=="ROUND_DOWN"?Math.floor(F):Math.ceil(F)}function ps(m,T,F){let x=0;switch(m.levelMode){case"ONE_LEVEL":x=1;break;case"MIPMAP_LEVELS":x=ui(Math.max(T,F),m.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return x}function ms(m,T,F,x){const D=new Array(m);for(let O=0;O<m;O++){const w=1<<O;let N=T/w|0;x=="ROUND_UP"&&N*w<T&&(N+=1);const q=Math.max(N,1);D[O]=(q+F-1)/F|0}return D}function da(){const m=this,T=m.offset,F={value:0};for(let x=0;x<m.tileCount;x++){const D=Ae(m.viewer,T),O=Ae(m.viewer,T);T.value+=8,m.size=Ne(m.viewer,T);const w=D*m.blockWidth,N=O*m.blockHeight;m.columns=w+m.blockWidth>m.width?m.width-w:m.blockWidth,m.lines=N+m.blockHeight>m.height?m.height-N:m.blockHeight;const q=m.columns*m.totalBytes,ne=m.size<m.lines*q?m.uncompress(m):b(m);T.value+=m.size;for(let ue=0;ue<m.lines;ue++){const fe=ue*m.columns*m.totalBytes;for(let xe=0;xe<m.inputChannels.length;xe++){const Se=fi.channels[xe].name,be=m.channelByteOffsets[Se]*m.columns,Ce=m.decodeChannels[Se];if(Ce===void 0)continue;F.value=fe+be;const ze=(m.height-(1+N+ue))*m.outLineWidth;for(let je=0;je<m.columns;je++){const Ke=ze+(je+w)*m.outputChannels+Ce;m.byteArray[Ke]=m.getter(ne,F)}}}}}function br(){const m=this,T=m.offset,F={value:0};for(let x=0;x<m.height/m.blockHeight;x++){const D=Ae(m.viewer,T)-fi.dataWindow.yMin;m.size=Ne(m.viewer,T),m.lines=D+m.blockHeight>m.height?m.height-D:m.blockHeight;const O=m.columns*m.totalBytes,N=m.size<m.lines*O?m.uncompress(m):b(m);T.value+=m.size;for(let q=0;q<m.blockHeight;q++){const j=x*m.blockHeight,ne=q+m.scanOrder(j);if(ne>=m.height)continue;const ue=q*O,fe=(m.height-1-ne)*m.outLineWidth;for(let xe=0;xe<m.inputChannels.length;xe++){const Se=fi.channels[xe].name,be=m.channelByteOffsets[Se]*m.columns,Ce=m.decodeChannels[Se];if(Ce!==void 0){F.value=ue+be;for(let ze=0;ze<m.columns;ze++){const je=fe+ze*m.outputChannels+Ce;m.byteArray[je]=m.getter(N,F)}}}}}}function pa(m,T,F){const x={};if(m.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");x.version=m.getUint8(4);const D=m.getUint8(5);x.spec={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)},F.value=8;let O=!0;for(;O;){const w=we(T,F);if(w==="")O=!1;else{const N=we(T,F),q=Ne(m,F),j=ha(m,T,F,N,q);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${N}'.`):x[w]=j}}if(D&-7)throw console.error("THREE.EXRHeader:",x),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return x}function yr(m,T,F,x,D,O){const w={size:0,viewer:T,array:F,offset:x,width:m.dataWindow.xMax-m.dataWindow.xMin+1,height:m.dataWindow.yMax-m.dataWindow.yMin+1,inputChannels:m.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:bn};switch(m.compression){case"NO_COMPRESSION":w.blockHeight=1,w.uncompress=b;break;case"RLE_COMPRESSION":w.blockHeight=1,w.uncompress=G;break;case"ZIPS_COMPRESSION":w.blockHeight=1,w.uncompress=se;break;case"ZIP_COMPRESSION":w.blockHeight=16,w.uncompress=se;break;case"PIZ_COMPRESSION":w.blockHeight=32,w.uncompress=he;break;case"PXR24_COMPRESSION":w.blockHeight=16,w.uncompress=ie;break;case"DWAA_COMPRESSION":w.blockHeight=32,w.uncompress=Be;break;case"DWAB_COMPRESSION":w.blockHeight=256,w.uncompress=Be;break;default:throw new Error("EXRLoader.parse: "+m.compression+" is unsupported")}const N={};for(const fe of m.channels)switch(fe.name){case"Y":case"R":case"G":case"B":case"A":N[fe.name]=!0,w.type=fe.pixelType}let q=!1,j=!1;if(N.R&&N.G&&N.B)w.outputChannels=4;else if(N.Y)w.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(w.outputChannels){case 4:O==Xt?(q=!N.A,w.format=Xt,w.colorSpace=bn,w.outputChannels=4,w.decodeChannels={R:0,G:1,B:2,A:3}):O==Wi?(w.format=Wi,w.colorSpace=bn,w.outputChannels=2,w.decodeChannels={R:0,G:1}):O==Yr?(w.format=Yr,w.colorSpace=bn,w.outputChannels=1,w.decodeChannels={R:0}):j=!0;break;case 1:O==Xt?(q=!0,w.format=Xt,w.colorSpace=bn,w.outputChannels=4,w.shouldExpand=!0,w.decodeChannels={Y:0}):O==Wi?(w.format=Wi,w.colorSpace=bn,w.outputChannels=2,w.shouldExpand=!0,w.decodeChannels={Y:0}):O==Yr?(w.format=Yr,w.colorSpace=bn,w.outputChannels=1,w.decodeChannels={Y:0}):j=!0;break;default:j=!0}if(j)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(w.type==1)switch(D){case Ln:w.getter=Re;break;case Wt:w.getter=Pe;break}else if(w.type==2)switch(D){case Ln:w.getter=V;break;case Wt:w.getter=Ie}else throw new Error("EXRLoader.parse: unsupported pixelType "+w.type+" for "+m.compression+".");w.columns=w.width;const ne=w.width*w.height*w.outputChannels;switch(D){case Ln:w.byteArray=new Float32Array(ne),q&&w.byteArray.fill(1,0,ne);break;case Wt:w.byteArray=new Uint16Array(ne),q&&w.byteArray.fill(15360,0,ne);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let ue=0;for(const fe of m.channels)w.decodeChannels[fe.name]!==void 0&&(w.channelByteOffsets[fe.name]=ue),ue+=fe.pixelType*2;if(w.totalBytes=ue,w.outLineWidth=w.width*w.outputChannels,m.lineOrder==="INCREASING_Y"?w.scanOrder=fe=>fe:w.scanOrder=fe=>w.height-1-fe,m.spec.singleTile){w.blockHeight=m.tiles.ySize,w.blockWidth=m.tiles.xSize;const fe=ps(m.tiles,w.width,w.height),xe=ms(fe,w.width,m.tiles.xSize,m.tiles.roundingMode),Se=ms(fe,w.height,m.tiles.ySize,m.tiles.roundingMode);w.tileCount=xe[0]*Se[0];for(let be=0;be<fe;be++)for(let Ce=0;Ce<Se[be];Ce++)for(let ze=0;ze<xe[be];ze++)Ye(T,x);w.decode=da.bind(w)}else{w.blockWidth=w.width;const fe=Math.ceil(w.height/w.blockHeight);for(let xe=0;xe<fe;xe++)Ye(T,x);w.decode=br.bind(w)}return w}const gs={value:0},xs=new DataView(e),ko=new Uint8Array(e),fi=pa(xs,e,gs),Wn=yr(fi,xs,ko,gs,this.type,this.outputFormat);if(Wn.decode(),Wn.shouldExpand){const m=Wn.byteArray;if(this.outputFormat==Xt)for(let T=0;T<m.length;T+=4)m[T+2]=m[T+1]=m[T];else if(this.outputFormat==Wi)for(let T=0;T<m.length;T+=2)m[T+1]=m[T]}return{header:fi,width:Wn.width,height:Wn.height,data:Wn.byteArray,format:Wn.format,colorSpace:Wn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,i,r){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Gt,a.magFilter=Gt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,i,r)}}const zl=new WeakMap;class WE extends Qi{constructor(e){super(e),this.libraryPath="",this.libraryPending=null,this.libraryBinary=null,this.libraryConfig={},this.url="",this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.workerConfig={},this.materials=[],this.warnings=[]}setLibraryPath(e){return this.libraryPath=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const s=new Gs(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),this.url=e,s.load(e,a=>{if(zl.has(a))return zl.get(a).promise.then(t).catch(r);this.decodeObjects(a,e).then(o=>{o.userData.warnings=this.warnings,t(o)}).catch(o=>r(o))},i,r)}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}decodeObjects(e,t){let i,r;const s=e.byteLength,a=this._getWorker(s).then(o=>(i=o,r=this.workerNextTaskID++,new Promise((l,c)=>{i._callbacks[r]={resolve:l,reject:c},i.postMessage({type:"decode",id:r,buffer:e},[e])}))).then(o=>this._createGeometry(o.data)).catch(o=>{throw o});return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),zl.set(e,{url:t,promise:a}),a}parse(e,t,i){this.decodeObjects(e,"").then(r=>{r.userData.warnings=this.warnings,t(r)}).catch(r=>i(r))}_compareMaterials(e){const t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type,t.vertexColors=e.vertexColors;const i=JSON.stringify(t);for(let r=0;r<this.materials.length;r++){const s=this.materials[r],a={};if(a.name=s.name,a.color={},a.color.r=s.color.r,a.color.g=s.color.g,a.color.b=s.color.b,a.type=s.type,a.vertexColors=s.vertexColors,JSON.stringify(a)===i)return s}return this.materials.push(e),e}_createMaterial(e,t){if(e===void 0)return new Gp({color:new $e(1,1,1),metalness:.8,name:Qi.DEFAULT_MATERIAL_NAME,side:En});const i=new av({color:new $e(e.diffuseColor.r/255,e.diffuseColor.g/255,e.diffuseColor.b/255),emissive:new $e(e.emissionColor.r,e.emissionColor.g,e.emissionColor.b),flatShading:e.disableLighting,ior:e.indexOfRefraction,name:e.name,reflectivity:e.reflectivity,opacity:1-e.transparency,side:En,specularColor:e.specularColor,transparent:e.transparency>0});if(i.userData.id=e.id,e.pbrSupported){const s=e.pbr;i.anisotropy=s.anisotropic,i.anisotropyRotation=s.anisotropicRotation,i.color=new $e(s.baseColor.r,s.baseColor.g,s.baseColor.b),i.clearcoat=s.clearcoat,i.clearcoatRoughness=s.clearcoatRoughness,i.metalness=s.metallic,i.transmission=1-s.opacity,i.roughness=s.roughness,i.sheen=s.sheen,i.specularIntensity=s.specular,i.thickness=s.subsurface}e.pbrSupported&&e.pbr.opacity===0&&e.transparency===1&&(i.opacity=.2,i.transmission=1);const r=new dv;for(let s=0;s<e.textures.length;s++){const a=e.textures[s];if(a.image!==null){const o=r.load(a.image);switch(a.type){case"Bump":i.bumpMap=o;break;case"Diffuse":i.map=o;break;case"Emap":i.envMap=o;break;case"Opacity":i.transmissionMap=o;break;case"Transparency":i.alphaMap=o,i.transparent=!0;break;case"PBR_Alpha":i.alphaMap=o,i.transparent=!0;break;case"PBR_AmbientOcclusion":i.aoMap=o;break;case"PBR_Anisotropic":i.anisotropyMap=o;break;case"PBR_BaseColor":i.map=o;break;case"PBR_Clearcoat":i.clearcoatMap=o;break;case"PBR_ClearcoatBump":i.clearcoatNormalMap=o;break;case"PBR_ClearcoatRoughness":i.clearcoatRoughnessMap=o;break;case"PBR_Displacement":i.displacementMap=o;break;case"PBR_Emission":i.emissiveMap=o;break;case"PBR_Metallic":i.metalnessMap=o;break;case"PBR_Roughness":i.roughnessMap=o;break;case"PBR_Sheen":i.sheenColorMap=o;break;case"PBR_Specular":i.specularColorMap=o;break;case"PBR_Subsurface":i.thicknessMap=o;break;default:this.warnings.push({message:`THREE.3DMLoader: No conversion exists for 3dm ${a.type}.`,type:"no conversion"});break}o.wrapS=a.wrapU===0?$s:ln,o.wrapT=a.wrapV===0?$s:ln,a.repeat&&o.repeat.set(a.repeat[0],a.repeat[1])}}return t&&new GE().load(t.image,function(s){s.mapping=THREE.EquirectangularReflectionMapping,i.envMap=s}),i}_createGeometry(e){const t=new Lt,i=[],r=[],s=[];t.userData.layers=e.layers,t.userData.groups=e.groups,t.userData.settings=e.settings,t.userData.settings.renderSettings=e.renderSettings,t.userData.objectType="File3dm",t.userData.materials=null,t.name=this.url;let a=e.objects;const o=e.materials;for(let l=0;l<a.length;l++){const c=a[l],u=c.attributes;switch(c.objectType){case"InstanceDefinition":r.push(c);break;case"InstanceReference":s.push(c);break;default:let f=null;switch(u.materialSource.name){case"ObjectMaterialSource_MaterialFromLayer":u.layerIndex>=0&&(f=e.layers[u.layerIndex].renderMaterialIndex);break;case"ObjectMaterialSource_MaterialFromObject":u.materialIndex>=0&&(f=u.materialIndex);break}let h=null;if(f>=0){const v=o[f];h=this._createMaterial(v,e.renderEnvironment)}const d=this._createObject(c,h);if(d===void 0)continue;const _=e.layers[u.layerIndex];d.visible=_?e.layers[u.layerIndex].visible:!0,u.isInstanceDefinitionObject?i.push(d):t.add(d);break}}for(let l=0;l<r.length;l++){const c=r[l];a=[];for(let u=0;u<c.attributes.objectIds.length;u++){const f=c.attributes.objectIds[u];for(let h=0;h<i.length;h++){const d=i[h].userData.attributes.id;f===d&&a.push(i[h])}}for(let u=0;u<s.length;u++){const f=s[u];if(f.geometry.parentIdefId===c.attributes.id){const h=new Lt,d=f.geometry.xform.array,_=new Mt;_.set(...d),h.applyMatrix4(_);for(let v=0;v<a.length;v++)h.add(a[v].clone(!0));t.add(h)}}}return t.userData.materials=this.materials,t.name="",t}_createObject(e,t){const i=new yv,r=e.attributes;let s,a,o,l;switch(e.objectType){case"Point":case"PointSet":s=i.parse(e.geometry),s.attributes.hasOwnProperty("color")?a=new Wc({vertexColors:!0,sizeAttenuation:!1,size:2}):(o=r.drawColor,l=new $e(o.r/255,o.g/255,o.b/255),a=new Wc({color:l,sizeAttenuation:!1,size:2})),a=this._compareMaterials(a);const c=new iv(s,a);return c.userData.attributes=r,c.userData.objectType=e.objectType,r.name&&(c.name=r.name),c;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(e.geometry===null)return;s=i.parse(e.geometry),t===null&&(t=this._createMaterial()),s.attributes.hasOwnProperty("color")&&(t.vertexColors=!0),t=this._compareMaterials(t);const u=new ci(s,t);return u.castShadow=r.castsShadows,u.receiveShadow=r.receivesShadows,u.userData.attributes=r,u.userData.objectType=e.objectType,r.name&&(u.name=r.name),u;case"Curve":s=i.parse(e.geometry),o=r.drawColor,l=new $e(o.r/255,o.g/255,o.b/255),a=new kp({color:l}),a=this._compareMaterials(a);const f=new nv(s,a);return f.userData.attributes=r,f.userData.objectType=e.objectType,r.name&&(f.name=r.name),f;case"TextDot":s=e.geometry;const h=document.createElement("canvas").getContext("2d"),d=`${s.fontHeight}px ${s.fontFace}`;h.font=d;const _=h.measureText(s.text).width+10,v=s.fontHeight+10,g=window.devicePixelRatio;h.canvas.width=_*g,h.canvas.height=v*g,h.canvas.style.width=_+"px",h.canvas.style.height=v+"px",h.setTransform(g,0,0,g,0,0),h.font=d,h.textBaseline="middle",h.textAlign="center",l=r.drawColor,h.fillStyle=`rgba(${l.r},${l.g},${l.b},${l.a})`,h.fillRect(0,0,_,v),h.fillStyle="white",h.fillText(s.text,_/2,v/2);const p=new rv(h.canvas);p.minFilter=Gt,p.generateMipmaps=!1,p.wrapS=ln,p.wrapT=ln,a=new Op({map:p,depthTest:!1});const M=new $_(a);return M.position.set(s.point[0],s.point[1],s.point[2]),M.scale.set(_/10,v/10,1),M.userData.attributes=r,M.userData.objectType=e.objectType,r.name&&(M.name=r.name),M;case"Light":s=e.geometry;let y;switch(s.lightStyle.name){case"LightStyle_WorldPoint":y=new xv,y.castShadow=r.castsShadows,y.position.set(s.location[0],s.location[1],s.location[2]),y.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":y=new mv,y.castShadow=r.castsShadows,y.position.set(s.location[0],s.location[1],s.location[2]),y.target.position.set(s.direction[0],s.direction[1],s.direction[2]),y.angle=s.spotAngleRadians,y.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":y=new Sv;const P=Math.abs(s.width[2]),B=Math.abs(s.length[0]);y.position.set(s.location[0]-B/2,s.location[1],s.location[2]-P/2),y.height=B,y.width=P,y.lookAt(s.direction[0],s.direction[1],s.direction[2]);break;case"LightStyle_WorldDirectional":y=new Yc,y.castShadow=r.castsShadows,y.position.set(s.location[0],s.location[1],s.location[2]),y.target.position.set(s.direction[0],s.direction[1],s.direction[2]),y.shadow.normalBias=.1;break}return y&&(y.intensity=s.intensity,o=s.diffuse,l=new $e(o.r/255,o.g/255,o.b/255),y.color=l,y.userData.attributes=r,y.userData.objectType=e.objectType),y}}_initLibrary(){if(!this.libraryPending){const e=new Gs(this.manager);e.setPath(this.libraryPath);const t=new Promise((s,a)=>{e.load("rhino3dm.js",s,void 0,a)}),i=new Gs(this.manager);i.setPath(this.libraryPath),i.setResponseType("arraybuffer");const r=new Promise((s,a)=>{i.load("rhino3dm.wasm",s,void 0,a)});this.libraryPending=Promise.all([t,r]).then(([s,a])=>{this.libraryConfig.wasmBinary=a;const o=XE.toString(),l=["/* rhino3dm.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l]))})}return this.libraryPending}_getWorker(e){return this._initLibrary().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",libraryConfig:this.libraryConfig}),i.onmessage=r=>{const s=r.data;switch(s.type){case"warning":this.warnings.push(s.data),console.warn(s.data);break;case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskLoad+=e,t})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();this.workerPool.length=0}}function XE(){let n,e,t,i;onmessage=function(u){const f=u.data;switch(f.type){case"init":e=f.libraryConfig;const h=e.wasmBinary;let d;n=new Promise(function(v){d={wasmBinary:h,onRuntimeInitialized:v},rhino3dm(d)}).then(()=>{t=d});break;case"decode":i=f.id;const _=f.buffer;n.then(()=>{try{const v=r(t,_);self.postMessage({type:"decode",id:f.id,data:v})}catch(v){self.postMessage({type:"error",id:f.id,error:v})}});break}};function r(u,f){const h=new Uint8Array(f),d=u.File3dm.fromByteArray(h),_=[],v=[],g=[],p=[],M=[],y=[],P=[],B=d.objects(),C=B.count;for(let ee=0;ee<C;ee++){const Q=B.get(ee),ae=o(Q,d);Q.delete(),ae&&_.push(ae)}for(let ee=0;ee<d.instanceDefinitions().count;ee++){const Q=d.instanceDefinitions().get(ee),ae=l(Q);ae.objectIds=Q.getObjectIds(),_.push({geometry:null,attributes:ae,objectType:"InstanceDefinition"})}const L=[u.TextureType.Diffuse,u.TextureType.Bump,u.TextureType.Transparency,u.TextureType.Opacity,u.TextureType.Emap],H=[u.TextureType.PBR_BaseColor,u.TextureType.PBR_Subsurface,u.TextureType.PBR_SubsurfaceScattering,u.TextureType.PBR_SubsurfaceScatteringRadius,u.TextureType.PBR_Metallic,u.TextureType.PBR_Specular,u.TextureType.PBR_SpecularTint,u.TextureType.PBR_Roughness,u.TextureType.PBR_Anisotropic,u.TextureType.PBR_Anisotropic_Rotation,u.TextureType.PBR_Sheen,u.TextureType.PBR_SheenTint,u.TextureType.PBR_Clearcoat,u.TextureType.PBR_ClearcoatBump,u.TextureType.PBR_ClearcoatRoughness,u.TextureType.PBR_OpacityIor,u.TextureType.PBR_OpacityRoughness,u.TextureType.PBR_Emission,u.TextureType.PBR_AmbientOcclusion,u.TextureType.PBR_Displacement];for(let ee=0;ee<d.materials().count;ee++){const Q=d.materials().get(ee),ae=l(Q),$=[];$.push(...s(Q,L,d)),ae.pbrSupported=Q.physicallyBased().supported,ae.pbrSupported&&($.push(...s(Q,H,d)),ae.pbr=l(Q.physicallyBased())),ae.textures=$,v.push(ae),Q.delete()}for(let ee=0;ee<d.layers().count;ee++){const Q=d.layers().get(ee),ae=l(Q);g.push(ae),Q.delete()}for(let ee=0;ee<d.views().count;ee++){const Q=d.views().get(ee),ae=l(Q);p.push(ae),Q.delete()}for(let ee=0;ee<d.namedViews().count;ee++){const Q=d.namedViews().get(ee),ae=l(Q);M.push(ae),Q.delete()}for(let ee=0;ee<d.groups().count;ee++){const Q=d.groups().get(ee),ae=l(Q);y.push(ae),Q.delete()}const R=l(d.settings()),A=d.strings().count;for(let ee=0;ee<A;ee++)P.push(d.strings().get(ee));const k=d.settings().renderSettings().renderEnvironments.reflectionId,J=d.renderContent();let le=null;for(let ee=0;ee<J.count;ee++){const Q=J.get(ee);switch(Q.kind){case"environment":if(Q.id!==k)break;const ye=Q.findChild("texture").fileName;for(let Te=0;Te<d.embeddedFiles().count;Te++){const Oe=d.embeddedFiles().get(Te).fileName;ye===Oe&&(le={type:"renderEnvironment",image:"data:image/png;base64,"+d.getEmbeddedFileAsBase64(ye),name:ye})}break}}const pe={ambientLight:d.settings().renderSettings().ambientLight,backgroundColorTop:d.settings().renderSettings().backgroundColorTop,backgroundColorBottom:d.settings().renderSettings().backgroundColorBottom,useHiddenLights:d.settings().renderSettings().useHiddenLights,depthCue:d.settings().renderSettings().depthCue,flatShade:d.settings().renderSettings().flatShade,renderBackFaces:d.settings().renderSettings().renderBackFaces,renderPoints:d.settings().renderSettings().renderPoints,renderCurves:d.settings().renderSettings().renderCurves,renderIsoParams:d.settings().renderSettings().renderIsoParams,renderMeshEdges:d.settings().renderSettings().renderMeshEdges,renderAnnotations:d.settings().renderSettings().renderAnnotations,useViewportSize:d.settings().renderSettings().useViewportSize,scaleBackgroundToFit:d.settings().renderSettings().scaleBackgroundToFit,transparentBackground:d.settings().renderSettings().transparentBackground,imageDpi:d.settings().renderSettings().imageDpi,shadowMapLevel:d.settings().renderSettings().shadowMapLevel,namedView:d.settings().renderSettings().namedView,snapShot:d.settings().renderSettings().snapShot,specificViewport:d.settings().renderSettings().specificViewport,groundPlane:l(d.settings().renderSettings().groundPlane),safeFrame:l(d.settings().renderSettings().safeFrame),dithering:l(d.settings().renderSettings().dithering),skylight:l(d.settings().renderSettings().skylight),linearWorkflow:l(d.settings().renderSettings().linearWorkflow),renderChannels:l(d.settings().renderSettings().renderChannels),sun:l(d.settings().renderSettings().sun),renderEnvironments:l(d.settings().renderSettings().renderEnvironments),postEffects:l(d.settings().renderSettings().postEffects)};return d.delete(),{objects:_,materials:v,layers:g,views:p,namedViews:M,groups:y,strings:P,settings:R,renderSettings:pe,renderEnvironment:le}}function s(u,f,h){const d=[];for(let _=0;_<f.length;_++){const v=u.getTexture(f[_]);if(v){let g=f[_].constructor.name;g=g.substring(12,g.length);const p=a(v,g,h);d.push(p),v.delete()}}return d}function a(u,f,h){const d={type:f},_=h.getEmbeddedFileAsBase64(u.fileName);d.wrapU=u.wrapU,d.wrapV=u.wrapV,d.wrapW=u.wrapW;const v=u.uvwTransform.toFloatArray(!0);return d.repeat=[v[0],v[5]],_?d.image="data:image/png;base64,"+_:(self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Image for ${f} texture not embedded in file.`,type:"missing resource"}}),d.image=null),d}function o(u,f){const h=u.geometry(),d=u.attributes();let _=h.objectType,v,g,p,M,y;switch(_){case t.ObjectType.Curve:const P=c(h,100);p={},g={},M={},p.itemSize=3,p.type="Float32Array",p.array=[];for(let R=0;R<P.length;R++)p.array.push(P[R][0]),p.array.push(P[R][1]),p.array.push(P[R][2]);g.position=p,M.attributes=g,v={data:M};break;case t.ObjectType.Point:const B=h.location;p={};const C={};g={},M={},p.itemSize=3,p.type="Float32Array",p.array=[B[0],B[1],B[2]];const L=d.drawColor(f);C.itemSize=3,C.type="Float32Array",C.array=[L.r/255,L.g/255,L.b/255],g.position=p,g.color=C,M.attributes=g,v={data:M};break;case t.ObjectType.PointSet:case t.ObjectType.Mesh:v=h.toThreejsJSON();break;case t.ObjectType.Brep:const H=h.faces();y=new t.Mesh;for(let R=0;R<H.count;R++){const A=H.get(R),k=A.getMesh(t.MeshType.Any);k&&(y.append(k),k.delete()),A.delete()}y.faces().count>0&&(y.compact(),v=y.toThreejsJSON(),H.delete()),y.delete();break;case t.ObjectType.Extrusion:y=h.getMesh(t.MeshType.Any),y&&(v=y.toThreejsJSON(),y.delete());break;case t.ObjectType.TextDot:v=l(h);break;case t.ObjectType.Light:v=l(h),v.lightStyle.name==="LightStyle_WorldLinear"&&self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: No conversion exists for ${_.constructor.name} ${v.lightStyle.name}`,type:"no conversion",guid:d.id}});break;case t.ObjectType.InstanceReference:v=l(h),v.xform=l(h.xform),v.xform.array=h.xform.toFloatArray(!0);break;case t.ObjectType.SubD:h.subdivide(3),y=t.Mesh.createFromSubDControlNet(h,!1),y&&(v=y.toThreejsJSON(),y.delete());break;default:self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Conversion not implemented for ${_.constructor.name}`,type:"not implemented",guid:d.id}});break}if(v)return g=l(d),g.geometry=l(h),d.groupCount>0&&(g.groupIds=d.getGroupList()),d.userStringCount>0&&(g.userStrings=d.getUserStrings()),h.userStringCount>0&&(g.geometry.userStrings=h.getUserStrings()),d.decals().count>0&&self.postMessage({type:"warning",id:i,data:{message:"THREE.3DMLoader: No conversion exists for the decals associated with this object.",type:"no conversion",guid:d.id}}),g.drawColor=d.drawColor(f),_=_.constructor.name,_=_.substring(11,_.length),{geometry:v,attributes:g,objectType:_};self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: ${_.constructor.name} has no associated mesh geometry.`,type:"missing mesh",guid:d.id}})}function l(u){const f={};for(const h in u){const d=u[h];typeof d!="function"&&(typeof d=="object"&&d!==null&&d.hasOwnProperty("constructor")?f[h]={name:d.constructor.name,value:d.value}:typeof d=="object"&&d!==null?f[h]=l(d):f[h]=d)}return f}function c(u,f){let h=f,d=[];const _=[];if(u instanceof t.LineCurve)return[u.pointAtStart,u.pointAtEnd];if(u instanceof t.PolylineCurve){h=u.pointCount;for(let p=0;p<h;p++)d.push(u.point(p));return d}if(u instanceof t.PolyCurve){const p=u.segmentCount;for(let M=0;M<p;M++){const y=u.segmentCurve(M),P=c(y,h);d=d.concat(P),y.delete()}return d}if(u instanceof t.ArcCurve&&(h=Math.floor(u.angleDegrees/5),h=h<2?2:h),u instanceof t.NurbsCurve&&u.degree===1){const p=u.tryGetPolyline();for(let M=0;M<p.count;M++)d.push(p.get(M));return p.delete(),d}const v=u.domain,g=h-1;for(let p=0;p<h;p++){const M=v[0]+p/g*(v[1]-v[0]);if(M===v[0]||M===v[1]){_.push(M);continue}const y=u.tangentAt(M),P=u.tangentAt(_.slice(-1)[0]),B=y[0]*y[0]+y[1]*y[1]+y[2]*y[2],C=P[0]*P[0]+P[1]*P[1]+P[2]*P[2],L=Math.sqrt(B*C);let H;if(L===0)H=Math.PI/2;else{const R=(y.x*P.x+y.y*P.y+y.z*P.z)/L;H=Math.acos(Math.max(-1,Math.min(1,R)))}H<.1||_.push(M)}return d=_.map(p=>u.pointAt(p)),d}}const im={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YE=new Du(-1,1,1,-1,0,1);class qE extends mn{constructor(){super(),this.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ri([0,2,0,0,2,0],2))}}const jE=new qE;class Iu{constructor(e){this._mesh=new ci(jE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rm extends ds{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Iu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uh extends ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class KE extends ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ZE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Xe);this._width=i.width,this._height=i.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rm(im),this.copyPass.material.blending=Un,this.clock=new Ev}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uh!==void 0&&(a instanceof Uh?i=!0:a instanceof KE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $E extends ds{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}class ji extends ds{constructor(e,t,i,r){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=r!==void 0?r:[],this.visibleEdgeColor=new $e(1,1,1),this.hiddenEdgeColor=new $e(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new sn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Wp,this.depthMaterial.side=En,this.depthMaterial.depthPacking=Ep,this.depthMaterial.blending=Un,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=En,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new sn(this.resolution.x,this.resolution.y,{type:Wt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new sn(s,a,{type:Wt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new sn(s,a,{type:Wt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new sn(Math.round(s/2),Math.round(a/2),{type:Wt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new sn(s,a,{type:Wt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new sn(Math.round(s/2),Math.round(a/2),{type:Wt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(s,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=im;this.copyUniforms=Uo.clone(c.uniforms),this.materialCopy=new Yt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Un,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this._fsQuad=new Iu(null),this.tempPulseColor1=new $e,this.tempPulseColor2=new $e,this.textureMatrix=new Mt;function u(f,h){const d=h.isPerspectiveCamera?"perspective":"orthographic";return f.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,r),this.renderTargetBlurBuffer1.setSize(i,r),this.renderTargetEdgeBuffer1.setSize(i,r),this.separableBlurMaterial1.uniforms.texSize.value.set(i,r),i=Math.round(i/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(i,r),this.renderTargetEdgeBuffer2.setSize(i,r),this.separableBlurMaterial2.uniforms.texSize.value.set(i,r)}render(e,t,i,r,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ji.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function r(s){if(s.isPoints||s.isLine||s.isLine2)e===!0?s.visible=t.get(s):(t.set(s,s.visible),s.visible=e);else if((s.isMesh||s.isSprite)&&!i.has(s)){const a=s.visible;(e===!1||t.get(s)===!0)&&(s.visible=e),t.set(s,a)}}this.renderScene.traverse(r)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Yt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Xe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
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

				}`})}_getEdgeDetectionMaterial(){return new Yt({uniforms:{maskTexture:{value:null},texSize:{value:new Xe(.5,.5)},visibleEdgeColor:{value:new K(1,1,1)},hiddenEdgeColor:{value:new K(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`,blending:nc,depthTest:!1,depthWrite:!1,transparent:!0})}}ji.BlurDirectionX=new Xe(1,0);ji.BlurDirectionY=new Xe(0,1);const Ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class JE extends ds{constructor(){super(),this.uniforms=Uo.clone(Ka.uniforms),this.material=new sv({name:Ka.name,uniforms:this.uniforms,vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader}),this._fsQuad=new Iu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===up?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const QE={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Xe(1/1024,1/512)}},vertexShader:`

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

		}`},eT=new Set(["Max_height","Occupied_voxels","Max_voxels","Potential"]);function Zc(n){if(n==null)return"";const e=String(n).trim();if(!e)return"";const t=Number(e);return Number.isFinite(t)?String(t):e}function Nh(n){if(!n)return{};if(Array.isArray(n)){if(n.length>0&&Array.isArray(n[0]))return Object.fromEntries(n);const e={};for(let t=0;t<n.length-1;t+=2){const i=n[t],r=n[t+1];typeof i=="string"&&(e[i]=r)}return e}return typeof n=="object"?{...n}:{}}function tT(n,e){if(e==null)return"";const t=String(e).trim();if(!eT.has(n))return t;const i=Number(t);return Number.isFinite(i)?i:t}function Bo(n,e){var s,a,o,l,c;const t=Nh((a=(s=n==null?void 0:n.userData)==null?void 0:s.attributes)==null?void 0:a.userStrings),r={...Nh((c=(l=(o=n==null?void 0:n.userData)==null?void 0:o.attributes)==null?void 0:l.geometry)==null?void 0:c.userStrings),...t};return e.reduce((u,f)=>(u[f]=tT(f,r[f]),u),{})}function nT(n,e,t){let i=n;for(;i;){if(i.isMesh){const r=Bo(i,t);if(Zc(r.Plot))return{mesh:i,metadata:r}}if(i===e)break;i=i.parent}return null}function iT(n,e){const t=Zc(e);if(!n||!t)return[];const i=[];return n.traverse(r=>{if(!r.isMesh)return;const s=Bo(r,["Plot"]);Zc(s.Plot)===t&&i.push(r)}),i}function rT(n,e){return e.reduce((t,i)=>{const r=n.map(s=>Bo(s,[i])[i]).find(s=>s!==""&&s!==void 0&&s!==null);return t[i]=r??"",t},{})}function sT(n){const{containerRef:e,config:t,onSelectionChange:i,onFilterBoundsChange:r=()=>{},onViewerError:s}=n,a=new WE;a.setLibraryPath(t.rhinoLibraryPath);const o=new Tv,l=new Xe,c=new K,u=new K,f=new us,h=new Map,d=Object.fromEntries((t.filterableFields??[]).map(S=>[S,{min:null,max:null}]));let _=0,v,g,p,M,y,P,B,C,L=null,H=null,R=0,A=null;function k(S){i(S)}function J(){Lt.DEFAULT_UP.set(0,0,1),g=new Z_,g.background=new $e("#f1f1f1"),p=new dn(40,1,.1,3e3),p.position.set(-220,-190,150),M=new dE({antialias:!0}),M.setPixelRatio(window.devicePixelRatio),M.outputColorSpace=Sn,y=new ZE(M);const S=new $E(g,p);y.addPass(S),P=new ji(new Xe(1,1),g,p),P.visibleEdgeColor.set("#ffe36e"),P.hiddenEdgeColor.set("#c59d16"),P.edgeStrength=4,P.edgeGlow=.15,P.edgeThickness=1.2,P.pulsePeriod=0,y.addPass(P),B=new rm(QE),y.addPass(B),y.addPass(new JE),C=new mE(p,M.domElement),C.enableDamping=!0,C.dampingFactor=.08;const W=new Yc("#fff3d8",3);W.position.set(-80,-60,150);const Y=new Yc("#94b6ff",1.4);Y.position.set(130,80,110);const de=new vv("#f1f5ff",.8);g.add(W,Y,de)}function le(){const S=e.value;if(!S)return!1;const W=S.clientWidth,Y=S.clientHeight;if(!W||!Y)return!1;p.aspect=W/Y,p.updateProjectionMatrix(),M.setSize(W,Y,!1),y.setSize(W,Y);const de=M.getPixelRatio();return P.setSize(W*de,Y*de),B.material.uniforms.resolution.value.set(1/(W*de),1/(Y*de)),!0}function pe(S=10){le()||S<=0||(R=window.requestAnimationFrame(()=>{pe(S-1)}))}function ee(){C.update(),y.render(),_=window.requestAnimationFrame(ee)}function Q(S,W=1.2){if(f.makeEmpty(),S.forEach(Me=>f.expandByObject(Me)),f.isEmpty())return;f.getSize(c),f.getCenter(u);const de=Math.max(c.x,c.y,c.z)/(2*Math.atan(Math.PI*p.fov/360)),re=de/p.aspect,ge=W*Math.max(de,re),Z=C.target.clone().sub(p.position).normalize().multiplyScalar(ge);C.target.copy(u),p.near=Math.max(ge/100,.1),p.far=ge*100,p.updateProjectionMatrix(),p.position.copy(C.target).sub(Z),C.update()}function ae(S){if(S.isMesh){if(Array.isArray(S.material)){S.material=S.material.map(W=>W.clone());return}S.material=S.material.clone(),S.material.transparent=!0,S.material.opacity=.35}}function $(S){if(S===""||S===null||S===void 0)return null;const W=Number(S);return Number.isFinite(W)?W:null}function ye(){return Object.fromEntries((t.filterableFields??[]).map(S=>{var Z;const W=(Z=t.filterBounds)==null?void 0:Z[S];if(W)return[S,{min:W.min,max:W.max,step:W.step??1}];const Y=[];if(h.forEach(Me=>{const E=Number(Me[S]);Number.isFinite(E)&&Y.push(E)}),!Y.length)return[S,{min:0,max:1,step:1}];const de=Math.min(...Y),re=Math.max(...Y),ge=Y.some(Me=>!Number.isInteger(Me))?.1:1;return[S,{min:de,max:re,step:ge}]}))}function Te(S){const W=h.get(S);return W?Object.entries(d).every(([Y,de])=>{if(de.min===null&&de.max===null)return!0;const re=Number(W[Y]);return!(!Number.isFinite(re)||de.min!==null&&re<de.min||de.max!==null&&re>de.max)}):!0}function Oe(){H&&H.traverse(S=>{S.isMesh&&(S.visible=Te(S))})}function He(S,W,Y){var ge;const de=(ge=S==null?void 0:S.userData)==null?void 0:ge.layers;if(!S||!Array.isArray(de)||!W)return;const re=new $e(Y);S.traverse(Z=>{var b,G;if(!Z.isMesh)return;const Me=(G=(b=Z.userData)==null?void 0:b.attributes)==null?void 0:G.layerIndex;if(typeof Me!="number")return;const E=de[Me];if(!(!E||E.name!==W)){if(Array.isArray(Z.material)){Z.material=Z.material.map(se=>{const he=se.clone();return he.color.copy(re),he});return}Z.material=Z.material.clone(),Z.material.color.copy(re)}})}function Je(){P.selectedObjects=[]}function st(S){Je(),P.selectedObjects=S}function tt(S){return new Promise((W,Y)=>{a.load(S,W,void 0,Y)})}function te(){A=null}function z(S){if(!A)return 0;const W=S.clientX-A.startX,Y=S.clientY-A.startY;return Math.hypot(W,Y)}function ce(S){S.button===0&&(A={startTime:performance.now(),startX:S.clientX,startY:S.clientY,moved:!1})}function me(S){A&&z(S)>(t.clickSelectionMaxMovementPx??6)&&(A.moved=!0)}function _e(S){if(!A||S.button!==0){te();return}const W=performance.now()-A.startTime,Y=A.moved||z(S)>(t.clickSelectionMaxMovementPx??6);te(),!(Y||W>(t.clickSelectionMaxDurationMs??180))&&I(S)}function Le(S){if(!H)throw new Error("The voxel metadata model is not loaded.");if(!String(S??"").trim())throw new Error("The selected block is missing a Plot value.");const W=iT(H,S).filter(Y=>Y.visible&&Te(Y));if(!W.length)throw new Error(`No voxel metadata was found for Plot ${S}.`);return{voxelPath:t.sunVoxelModelPath,metadata:rT(W,t.requiredMetadata),matchingMeshes:W}}async function I(S){if(!H)return;const W=M.domElement.getBoundingClientRect();l.x=(S.clientX-W.left)/W.width*2-1,l.y=-((S.clientY-W.top)/W.height)*2+1,o.setFromCamera(l,p);const Y=o.intersectObject(H,!0).filter(re=>re.object.visible);if(!Y.length)return;const de=nT(Y[0].object,H,t.selectionMetadata);if(!de){k({status:"error",metadata:null,voxelPath:null,message:"The clicked object does not expose Plot metadata."});return}k({status:"loading",metadata:null,voxelPath:null,message:"Loading matching voxel metadata."});try{const{voxelPath:re,metadata:ge,matchingMeshes:Z}=Le(de.metadata.Plot);st(Z),Q(Z,1.35),k({status:"ready",metadata:ge,voxelPath:re,message:""})}catch(re){k({status:"error",metadata:de.metadata,voxelPath:null,message:re instanceof Error?re.message:"Unable to load the matching voxel metadata."})}}async function U(){k({status:"loading",metadata:null,voxelPath:null,message:"Loading context and voxel models."});try{[L,H]=await Promise.all([t.staticContextModelPath?tt(t.staticContextModelPath):Promise.resolve(null),tt(t.sunVoxelModelPath)]),He(L,"Sunspots","#ffd84d"),H.traverse(Y=>{ae(Y),Y.isMesh&&h.set(Y,Bo(Y,t.requiredMetadata))}),r(ye()),H.visible=!0,Oe(),L&&g.add(L),g.add(H),Q(L?[L,H]:[H]),k({status:"idle",metadata:null,voxelPath:null,message:""})}catch(S){const W=S instanceof Error?S.message:"Unable to load the Rhino models.";k({status:"error",metadata:null,voxelPath:null,message:`Failed to load ${t.staticContextModelPath} or ${t.sunVoxelModelPath}. ${W}`}),s(W)}}function X(S){(t.filterableFields??[]).forEach(W=>{const Y=(S==null?void 0:S[W])??{};d[W]={min:$(Y.min),max:$(Y.max)}}),Je(),Oe()}return yd(async()=>{try{J();const S=e.value;if(!S)throw new Error("The viewer container did not mount.");S.appendChild(M.domElement),M.domElement.addEventListener("pointerdown",ce),M.domElement.addEventListener("pointermove",me),M.domElement.addEventListener("pointerup",_e),M.domElement.addEventListener("pointercancel",te),M.domElement.addEventListener("pointerleave",te),v=new ResizeObserver(()=>le()),v.observe(S),pe(),ee(),await U()}catch(S){const W=S instanceof Error?S.message:"Unable to initialize the viewer.";k({status:"error",metadata:null,voxelPath:null,message:W}),s(W)}}),Md(()=>{window.cancelAnimationFrame(_),window.cancelAnimationFrame(R),M==null||M.domElement.removeEventListener("pointerdown",ce),M==null||M.domElement.removeEventListener("pointermove",me),M==null||M.domElement.removeEventListener("pointerup",_e),M==null||M.domElement.removeEventListener("pointercancel",te),M==null||M.domElement.removeEventListener("pointerleave",te),v==null||v.disconnect(),Je(),te(),C==null||C.dispose(),y==null||y.dispose(),a.dispose(),M==null||M.dispose()}),{setVoxelFilters:X}}const aT={class:"project-layout project-layout--viewer-only"},oT={ref:"container",class:"project-layout__viewer"},lT={class:"viewer-note"},cT={class:"viewer-note__section"},uT={key:0,class:"metadata-list metadata-list--compact"},fT={key:1,class:"viewer-note__copy"},hT={class:"filter-drawer","aria-label":"Filters"},dT={class:"filter-list"},pT={class:"filter-group__header"},mT={class:"filter-group__label"},gT={class:"range-slider__values"},xT={class:"range-slider"},_T=["min","max","step","value","onInput"],vT=["min","max","step","value","onInput"],ST={__name:"SolarScapeView",setup(n){const e=Qm("container"),t=Xl(!1),i=Xl(!1),r=pi.filterBounds??{},s=mr(Object.fromEntries(pi.filterableFields.map(C=>{const L=r[C]??{min:0,max:100,step:1};return[C,{min:L.min,max:L.max,step:L.step??1}]}))),a=mr(Object.fromEntries(pi.filterableFields.map(C=>{const L=r[C]??{min:0,max:100};return[C,{min:L.min,max:L.max}]}))),o=Mn(()=>pi.requiredMetadata.map(C=>({key:C,label:pi.fieldLabels[C]??C}))),l=Mn(()=>pi.filterableFields.map(C=>({key:C,label:pi.fieldLabels[C]??C}))),c=mr({status:"idle",metadata:null,voxelPath:null,message:""});function u(C){c.status=C.status,c.metadata=C.metadata,c.voxelPath=C.voxelPath,c.message=C.message}function f(C){c.status="error",c.metadata=null,c.voxelPath=null,c.message=C}function h(C){l.value.forEach(({key:L})=>{C[L]&&(s[L].min=C[L].min,s[L].max=C[L].max,s[L].step=C[L].step)}),g(),i.value=!0}const d=sT({containerRef:e,config:pi,onSelectionChange:u,onFilterBoundsChange:h,onViewerError:f});Fs(a,C=>{i.value&&d.setVoxelFilters(C)},{deep:!0});function _(){t.value=!t.value}function v(){t.value=!1}function g(){l.value.forEach(({key:C})=>{a[C].min=s[C].min,a[C].max=s[C].max})}function p(C,L){const H=Number(L.target.value);a[C].min=Math.min(H,a[C].max)}function M(C,L){const H=Number(L.target.value);a[C].max=Math.max(H,a[C].min)}function y(C){const L=s[C],H=Math.max(L.max-L.min,1),R=(a[C].min-L.min)/H*100,A=100-(a[C].max-L.min)/H*100;return{left:`${R}%`,right:`${A}%`}}function P(C,L,H=1){var J;if(L==null||L==="")return"Missing";const R=Number(L),A=((J=pi.valuePrefixes)==null?void 0:J[C])??"";if(!Number.isFinite(R))return`${A}${String(L)}`;const k=H<1?R.toFixed(1):String(Math.round(R));return`${A}${k}`}function B(C,L,H){return Number.isFinite(L)?P(C,L,H):""}return(C,L)=>(vn(),Rn("main",aT,[et("section",oT,[et("button",{type:"button",class:"filter-trigger",onClick:_,"aria-label":"Open filters"},[...L[0]||(L[0]=[et("span",{class:"filter-trigger__icon","aria-hidden":"true"},[et("span"),et("span"),et("span")],-1),et("span",{class:"filter-trigger__label"},"Filters",-1)])]),et("div",lT,[et("section",cT,[L[1]||(L[1]=et("h2",{class:"viewer-note__title"},"Solar envelope info",-1)),c.status==="ready"?(vn(),Rn("dl",uT,[(vn(!0),Rn(yn,null,co(o.value,H=>{var R;return vn(),Rn("div",{key:H.key,class:"metadata-list__row"},[et("dt",null,qn(H.label),1),et("dd",null,qn(P(H.key,(R=c.metadata)==null?void 0:R[H.key])),1)])}),128))])):(vn(),Rn("p",fT,qn(c.message||"Click to inspect the solar envelope information."),1))])]),t.value?(vn(),Rn("div",{key:0,class:"filter-overlay",onClick:bg(v,["self"])},[et("aside",hT,[et("div",{class:"filter-drawer__header"},[L[2]||(L[2]=et("div",{class:"filter-drawer__heading"},[et("p",{class:"filter-drawer__eyebrow"},"Voxel filters"),et("h2",{class:"filter-drawer__title"},"Refine the visible range")],-1)),et("button",{type:"button",class:"filter-close",onClick:v,"aria-label":"Close filters"}," Close ")]),L[4]||(L[4]=et("p",{class:"filter-drawer__copy"},"Adjust both handles to keep only the values you want visible in the scene.",-1)),et("div",dT,[(vn(!0),Rn(yn,null,co(l.value,H=>(vn(),Rn("section",{key:H.key,class:"filter-group"},[et("div",pT,[et("label",mT,qn(H.label),1),et("div",gT,[et("span",null,qn(B(H.key,a[H.key].min,s[H.key].step)),1),et("span",null,qn(B(H.key,a[H.key].max,s[H.key].step)),1)])]),et("div",xT,[L[3]||(L[3]=et("div",{class:"range-slider__track"},null,-1)),et("div",{class:"range-slider__active",style:To(y(H.key))},null,4),et("input",{class:"range-slider__input",type:"range",min:s[H.key].min,max:s[H.key].max,step:s[H.key].step,value:a[H.key].min,onInput:R=>p(H.key,R)},null,40,_T),et("input",{class:"range-slider__input",type:"range",min:s[H.key].min,max:s[H.key].max,step:s[H.key].step,value:a[H.key].max,onInput:R=>M(H.key,R)},null,40,vT)])]))),128))]),et("div",{class:"filter-drawer__actions"},[et("button",{type:"button",class:"filter-reset",onClick:g},"Reset")])])])):V0("",!0)],512)]))}},bT=Dx({history:fx("/Solar_Scape/"),routes:[{path:"/",name:"home",component:zx},{path:"/projects/solar-scape",name:"solar-scape",component:ST}]});Eg(Fx).use(bT).mount("#app");
