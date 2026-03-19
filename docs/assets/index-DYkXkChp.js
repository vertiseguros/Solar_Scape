(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ou(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ct={},lr=[],oi=()=>{},$f=()=>!1,No=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),lu=n=>n.startsWith("onUpdate:"),sn=Object.assign,cu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vm=Object.prototype.hasOwnProperty,bt=(n,e)=>vm.call(n,e),ct=Array.isArray,cr=n=>va(n)==="[object Map]",Jf=n=>va(n)==="[object Set]",ju=n=>va(n)==="[object Date]",ht=n=>typeof n=="function",Ht=n=>typeof n=="string",hi=n=>typeof n=="symbol",Tt=n=>n!==null&&typeof n=="object",Qf=n=>(Tt(n)||ht(n))&&ht(n.then)&&ht(n.catch),ed=Object.prototype.toString,va=n=>ed.call(n),Sm=n=>va(n).slice(8,-1),td=n=>va(n)==="[object Object]",uu=n=>Ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},bm=/-\w/g,jn=Fo(n=>n.replace(bm,e=>e.slice(1).toUpperCase())),Mm=/\B([A-Z])/g,Is=Fo(n=>n.replace(Mm,"-$1").toLowerCase()),nd=Fo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qo=Fo(n=>n?`on${nd(n)}`:""),ii=(n,e)=>!Object.is(n,e),el=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},id=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ym=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let qu;const Oo=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function la(n){if(ct(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ht(i)?Am(i):la(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ht(n)||Tt(n))return n}const Em=/;(?![^(]*\))/g,Tm=/:([^]+)/,wm=/\/\*[^]*?\*\//g;function Am(n){const e={};return n.replace(wm,"").split(Em).forEach(t=>{if(t){const i=t.split(Tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ws(n){let e="";if(Ht(n))e=n;else if(ct(n))for(let t=0;t<n.length;t++){const i=ws(n[t]);i&&(e+=i+" ")}else if(Tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rm=ou(Cm);function sd(n){return!!n||n===""}function Pm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=hu(n[i],e[i]);return t}function hu(n,e){if(n===e)return!0;let t=ju(n),i=ju(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=hi(n),i=hi(e),t||i)return n===e;if(t=ct(n),i=ct(e),t||i)return t&&i?Pm(n,e):!1;if(t=Tt(n),i=Tt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!hu(n[a],e[a]))return!1}}return String(n)===String(e)}const rd=n=>!!(n&&n.__v_isRef===!0),pn=n=>Ht(n)?n:n==null?"":ct(n)||Tt(n)&&(n.toString===ed||!ht(n.toString))?rd(n)?pn(n.value):JSON.stringify(n,ad,2):String(n),ad=(n,e)=>rd(e)?ad(n,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[tl(i,r)+" =>"]=s,t),{})}:Jf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>tl(t))}:hi(e)?tl(e):Tt(e)&&!ct(e)&&!td(e)?String(e):e,tl=(n,e="")=>{var t;return hi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class Dm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){++this._on===1&&(this.prevScope=Tn,Tn=this)}off(){this._on>0&&--this._on===0&&(Tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lm(){return Tn}let Pt;const nl=new WeakSet;class od{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nl.has(this)&&(nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zu(this),ud(this);const e=Pt,t=qn;Pt=this,qn=!0;try{return this.fn()}finally{hd(this),Pt=e,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pu(e);this.deps=this.depsTail=void 0,Zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kl(this)&&this.run()}get dirty(){return Kl(this)}}let ld=0,qr,Zr;function cd(n,e=!1){if(n.flags|=8,e){n.next=Zr,Zr=n;return}n.next=qr,qr=n}function fu(){ld++}function du(){if(--ld>0)return;if(Zr){let e=Zr;for(Zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qr;){let e=qr;for(qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),pu(i),Im(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Kl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ca)||(n.globalVersion=ca,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Kl(n))))return;n.flags|=2;const e=n.dep,t=Pt,i=qn;Pt=n,qn=!0;try{ud(n);const s=n.fn(n._value);(e.version===0||ii(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pt=t,qn=i,hd(n),n.flags&=-3}}function pu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)pu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Im(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let qn=!0;const dd=[];function Oi(){dd.push(qn),qn=!1}function Bi(){const n=dd.pop();qn=n===void 0?!0:n}function Zu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Pt;Pt=void 0;try{e()}finally{Pt=t}}}let ca=0;class Um{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Pt||!qn||Pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Pt)t=this.activeLink=new Um(Pt,this),Pt.deps?(t.prevDep=Pt.depsTail,Pt.depsTail.nextDep=t,Pt.depsTail=t):Pt.deps=Pt.depsTail=t,pd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Pt.depsTail,t.nextDep=void 0,Pt.depsTail.nextDep=t,Pt.depsTail=t,Pt.deps===t&&(Pt.deps=i)}return t}trigger(e){this.version++,ca++,this.notify(e)}notify(e){fu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{du()}}}function pd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const $l=new WeakMap,As=Symbol(""),Jl=Symbol(""),ua=Symbol("");function ln(n,e,t){if(qn&&Pt){let i=$l.get(n);i||$l.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new mu),s.map=i,s.key=t),s.track()}}function Li(n,e,t,i,s,r){const a=$l.get(n);if(!a){ca++;return}const o=l=>{l&&l.trigger()};if(fu(),e==="clear")a.forEach(o);else{const l=ct(n),c=l&&uu(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===ua||!hi(f)&&f>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ua)),e){case"add":l?c&&o(a.get("length")):(o(a.get(As)),cr(n)&&o(a.get(Jl)));break;case"delete":l||(o(a.get(As)),cr(n)&&o(a.get(Jl)));break;case"set":cr(n)&&o(a.get(As));break}}du()}function Bs(n){const e=St(n);return e===n?e:(ln(e,"iterate",ua),zn(n)?e:e.map(Zn))}function Bo(n){return ln(n=St(n),"iterate",ua),n}function ei(n,e){return ki(n)?pr(Rs(n)?Zn(e):e):Zn(e)}const Nm={__proto__:null,[Symbol.iterator](){return il(this,Symbol.iterator,n=>ei(this,n))},concat(...n){return Bs(this).concat(...n.map(e=>ct(e)?Bs(e):e))},entries(){return il(this,"entries",n=>(n[1]=ei(this,n[1]),n))},every(n,e){return _i(this,"every",n,e,void 0,arguments)},filter(n,e){return _i(this,"filter",n,e,t=>t.map(i=>ei(this,i)),arguments)},find(n,e){return _i(this,"find",n,e,t=>ei(this,t),arguments)},findIndex(n,e){return _i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _i(this,"findLast",n,e,t=>ei(this,t),arguments)},findLastIndex(n,e){return _i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _i(this,"forEach",n,e,void 0,arguments)},includes(...n){return sl(this,"includes",n)},indexOf(...n){return sl(this,"indexOf",n)},join(n){return Bs(this).join(n)},lastIndexOf(...n){return sl(this,"lastIndexOf",n)},map(n,e){return _i(this,"map",n,e,void 0,arguments)},pop(){return Lr(this,"pop")},push(...n){return Lr(this,"push",n)},reduce(n,...e){return Ku(this,"reduce",n,e)},reduceRight(n,...e){return Ku(this,"reduceRight",n,e)},shift(){return Lr(this,"shift")},some(n,e){return _i(this,"some",n,e,void 0,arguments)},splice(...n){return Lr(this,"splice",n)},toReversed(){return Bs(this).toReversed()},toSorted(n){return Bs(this).toSorted(n)},toSpliced(...n){return Bs(this).toSpliced(...n)},unshift(...n){return Lr(this,"unshift",n)},values(){return il(this,"values",n=>ei(this,n))}};function il(n,e,t){const i=Bo(n),s=i[e]();return i!==n&&!zn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Fm=Array.prototype;function _i(n,e,t,i,s,r){const a=Bo(n),o=a!==n&&!zn(n),l=a[e];if(l!==Fm[e]){const h=l.apply(n,r);return o?Zn(h):h}let c=t;a!==n&&(o?c=function(h,f){return t.call(this,ei(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Ku(n,e,t,i){const s=Bo(n),r=s!==n&&!zn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=ei(n,c)),t.call(this,c,ei(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](a,...i);return o?ei(n,l):l}function sl(n,e,t){const i=St(n);ln(i,"iterate",ua);const s=i[e](...t);return(s===-1||s===!1)&&_u(t[0])?(t[0]=St(t[0]),i[e](...t)):s}function Lr(n,e,t=[]){Oi(),fu();const i=St(n)[e].apply(n,t);return du(),Bi(),i}const Om=ou("__proto__,__v_isRef,__isVue"),md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hi));function Bm(n){hi(n)||(n=String(n));const e=St(this);return ln(e,"has",n),e.hasOwnProperty(n)}class gd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?qm:Sd:r?vd:_d).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ct(e);if(!s){let l;if(a&&(l=Nm[t]))return l;if(t==="hasOwnProperty")return Bm}const o=Reflect.get(e,t,un(e)?e:i);if((hi(t)?md.has(t):Om(t))||(s||ln(e,"get",t),r))return o;if(un(o)){const l=a&&uu(t)?o:o.value;return s&&Tt(l)?ec(l):l}return Tt(o)?s?ec(o):Cs(o):o}}class xd extends gd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=ct(e)&&uu(t);if(!this._isShallow){const c=ki(r);if(!zn(i)&&!ki(i)&&(r=St(r),i=St(i)),!a&&un(r)&&!un(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:bt(e,t),l=Reflect.set(e,t,i,un(e)?e:s);return e===St(s)&&(o?ii(i,r)&&Li(e,"set",t,i):Li(e,"add",t,i)),l}deleteProperty(e,t){const i=bt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Li(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!hi(t)||!md.has(t))&&ln(e,"has",t),i}ownKeys(e){return ln(e,"iterate",ct(e)?"length":As),Reflect.ownKeys(e)}}class km extends gd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const zm=new xd,Vm=new km,Hm=new xd(!0);const Ql=n=>n,Aa=n=>Reflect.getPrototypeOf(n);function Gm(n,e,t){return function(...i){const s=this.__v_raw,r=St(s),a=cr(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Ql:e?pr:Zn;return!e&&ln(r,"iterate",l?Jl:As),sn(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Ca(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Wm(n,e){const t={get(s){const r=this.__v_raw,a=St(r),o=St(s);n||(ii(s,o)&&ln(a,"get",s),ln(a,"get",o));const{has:l}=Aa(a),c=e?Ql:n?pr:Zn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ln(St(s),"iterate",As),s.size},has(s){const r=this.__v_raw,a=St(r),o=St(s);return n||(ii(s,o)&&ln(a,"has",s),ln(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=St(o),c=e?Ql:n?pr:Zn;return!n&&ln(l,"iterate",As),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return sn(t,n?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(s){const r=St(this),a=Aa(r),o=St(s),l=!e&&!zn(s)&&!ki(s)?o:s;return a.has.call(r,l)||ii(s,l)&&a.has.call(r,s)||ii(o,l)&&a.has.call(r,o)||(r.add(l),Li(r,"add",l,l)),this},set(s,r){!e&&!zn(r)&&!ki(r)&&(r=St(r));const a=St(this),{has:o,get:l}=Aa(a);let c=o.call(a,s);c||(s=St(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?ii(r,u)&&Li(a,"set",s,r):Li(a,"add",s,r),this},delete(s){const r=St(this),{has:a,get:o}=Aa(r);let l=a.call(r,s);l||(s=St(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Li(r,"delete",s,void 0),c},clear(){const s=St(this),r=s.size!==0,a=s.clear();return r&&Li(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Gm(s,n,e)}),t}function gu(n,e){const t=Wm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(bt(t,s)&&s in i?t:i,s,r)}const Xm={get:gu(!1,!1)},Ym={get:gu(!1,!0)},jm={get:gu(!0,!1)};const _d=new WeakMap,vd=new WeakMap,Sd=new WeakMap,qm=new WeakMap;function Zm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Km(n){return n.__v_skip||!Object.isExtensible(n)?0:Zm(Sm(n))}function Cs(n){return ki(n)?n:xu(n,!1,zm,Xm,_d)}function bd(n){return xu(n,!1,Hm,Ym,vd)}function ec(n){return xu(n,!0,Vm,jm,Sd)}function xu(n,e,t,i,s){if(!Tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Km(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function Rs(n){return ki(n)?Rs(n.__v_raw):!!(n&&n.__v_isReactive)}function ki(n){return!!(n&&n.__v_isReadonly)}function zn(n){return!!(n&&n.__v_isShallow)}function _u(n){return n?!!n.__v_raw:!1}function St(n){const e=n&&n.__v_raw;return e?St(e):n}function $m(n){return!bt(n,"__v_skip")&&Object.isExtensible(n)&&id(n,"__v_skip",!0),n}const Zn=n=>Tt(n)?Cs(n):n,pr=n=>Tt(n)?ec(n):n;function un(n){return n?n.__v_isRef===!0:!1}function Ci(n){return yd(n,!1)}function Md(n){return yd(n,!0)}function yd(n,e){return un(n)?n:new Jm(n,e)}class Jm{constructor(e,t){this.dep=new mu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:St(e),this._value=t?e:Zn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||zn(e)||ki(e);e=i?e:St(e),ii(e,t)&&(this._rawValue=e,this._value=i?e:Zn(e),this.dep.trigger())}}function li(n){return un(n)?n.value:n}const Qm={get:(n,e,t)=>e==="__v_raw"?n:li(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return un(s)&&!un(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ed(n){return Rs(n)?n:new Proxy(n,Qm)}class e0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new mu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Pt!==this)return cd(this,!0),!0}get value(){const e=this.dep.track();return fd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function t0(n,e,t=!1){let i,s;return ht(n)?i=n:(i=n.get,s=n.set),new e0(i,s,t)}const Ra={},So=new WeakMap;let Ms;function n0(n,e=!1,t=Ms){if(t){let i=So.get(t);i||So.set(t,i=[]),i.push(n)}}function i0(n,e,t=Ct){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=w=>s?w:zn(w)||s===!1||s===0?es(w,1):es(w);let u,h,f,d,_=!1,v=!1;if(un(n)?(h=()=>n.value,_=zn(n)):Rs(n)?(h=()=>c(n),_=!0):ct(n)?(v=!0,_=n.some(w=>Rs(w)||zn(w)),h=()=>n.map(w=>{if(un(w))return w.value;if(Rs(w))return c(w);if(ht(w))return l?l(w,2):w()})):ht(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Oi();try{f()}finally{Bi()}}const w=Ms;Ms=u;try{return l?l(n,3,[d]):n(d)}finally{Ms=w}}:h=oi,e&&s){const w=h,F=s===!0?1/0:s;h=()=>es(w(),F)}const g=Lm(),p=()=>{u.stop(),g&&g.active&&cu(g.effects,u)};if(r&&e){const w=e;e=(...F)=>{w(...F),p()}}let M=v?new Array(n.length).fill(Ra):Ra;const b=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const F=u.run();if(s||_||(v?F.some((D,L)=>ii(D,M[L])):ii(F,M))){f&&f();const D=Ms;Ms=u;try{const L=[F,M===Ra?void 0:v&&M[0]===Ra?[]:M,d];M=F,l?l(e,3,L):e(...L)}finally{Ms=D}}}else u.run()};return o&&o(b),u=new od(h),u.scheduler=a?()=>a(b,!1):b,d=w=>n0(w,!1,u),f=u.onStop=()=>{const w=So.get(u);if(w){if(l)l(w,4);else for(const F of w)F();So.delete(u)}},e?i?b(!0):M=u.run():a?a(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function es(n,e=1/0,t){if(e<=0||!Tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,un(n))es(n.value,e,t);else if(ct(n))for(let i=0;i<n.length;i++)es(n[i],e,t);else if(Jf(n)||cr(n))n.forEach(i=>{es(i,e,t)});else if(td(n)){for(const i in n)es(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&es(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sa(n,e,t,i){try{return i?n(...i):n()}catch(s){ko(s,e,t)}}function fi(n,e,t,i){if(ht(n)){const s=Sa(n,e,t,i);return s&&Qf(s)&&s.catch(r=>{ko(r,e,t)}),s}if(ct(n)){const s=[];for(let r=0;r<n.length;r++)s.push(fi(n[r],e,t,i));return s}}function ko(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ct;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){Oi(),Sa(r,null,10,[n,l,c]),Bi();return}}s0(n,t,s,i,a)}function s0(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const gn=[];let Qn=-1;const ur=[];let Ki=null,sr=0;const Td=Promise.resolve();let bo=null;function wd(n){const e=bo||Td;return n?e.then(this?n.bind(this):n):e}function r0(n){let e=Qn+1,t=gn.length;for(;e<t;){const i=e+t>>>1,s=gn[i],r=ha(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function vu(n){if(!(n.flags&1)){const e=ha(n),t=gn[gn.length-1];!t||!(n.flags&2)&&e>=ha(t)?gn.push(n):gn.splice(r0(e),0,n),n.flags|=1,Ad()}}function Ad(){bo||(bo=Td.then(Rd))}function a0(n){ct(n)?ur.push(...n):Ki&&n.id===-1?Ki.splice(sr+1,0,n):n.flags&1||(ur.push(n),n.flags|=1),Ad()}function $u(n,e,t=Qn+1){for(;t<gn.length;t++){const i=gn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;gn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Cd(n){if(ur.length){const e=[...new Set(ur)].sort((t,i)=>ha(t)-ha(i));if(ur.length=0,Ki){Ki.push(...e);return}for(Ki=e,sr=0;sr<Ki.length;sr++){const t=Ki[sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ki=null,sr=0}}const ha=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rd(n){try{for(Qn=0;Qn<gn.length;Qn++){const e=gn[Qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Sa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qn<gn.length;Qn++){const e=gn[Qn];e&&(e.flags&=-2)}Qn=-1,gn.length=0,Cd(),bo=null,(gn.length||ur.length)&&Rd()}}let si=null,Pd=null;function Mo(n){const e=si;return si=n,Pd=n&&n.type.__scopeId||null,e}function Su(n,e=si,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&wo(-1);const r=Mo(e);let a;try{a=n(...s)}finally{Mo(r),i._d&&wo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ds(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Oi(),fi(l,t,8,[n.el,o,n,e]),Bi())}}function ho(n,e){if(xn){let t=xn.provides;const i=xn.parent&&xn.parent.provides;i===t&&(t=xn.provides=Object.create(i)),t[n]=e}}function ci(n,e,t=!1){const i=rp();if(i||hr){let s=hr?hr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ht(e)?e.call(i&&i.proxy):e}}const o0=Symbol.for("v-scx"),l0=()=>ci(o0);function Kr(n,e,t){return Dd(n,e,t)}function Dd(n,e,t=Ct){const{immediate:i,deep:s,flush:r,once:a}=t,o=sn({},t),l=e&&i||!e&&r!=="post";let c;if(da){if(r==="sync"){const d=l0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=oi,d.resume=oi,d.pause=oi,d}}const u=xn;o.call=(d,_,v)=>fi(d,u,_,v);let h=!1;r==="post"?o.scheduler=d=>{En(d,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(d,_)=>{_?d():vu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=i0(n,e,o);return da&&(c?c.push(f):l&&f()),f}function c0(n,e,t){const i=this.proxy,s=Ht(n)?n.includes(".")?Ld(i,n):()=>i[n]:n.bind(i,i);let r;ht(e)?r=e:(r=e.handler,t=e);const a=ba(this),o=Dd(s,r.bind(i),t);return a(),o}function Ld(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const u0=Symbol("_vte"),h0=n=>n.__isTeleport,f0=Symbol("_leaveCb");function bu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,bu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Id(n,e){return ht(n)?sn({name:n.name},e,{setup:n}):n}function Ud(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function d0(n){const e=rp(),t=Md(null);if(e){const s=e.refs===Ct?e.refs={}:e.refs;Object.defineProperty(s,n,{enumerable:!0,get:()=>t.value,set:r=>t.value=r})}return t}function Ju(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const yo=new WeakMap;function $r(n,e,t,i,s=!1){if(ct(n)){n.forEach((v,g)=>$r(v,e&&(ct(e)?e[g]:e),t,i,s));return}if(Jr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$r(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Tu(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ct?o.refs={}:o.refs,h=o.setupState,f=St(h),d=h===Ct?$f:v=>Ju(u,v)?!1:bt(f,v),_=(v,g)=>!(g&&Ju(u,g));if(c!=null&&c!==l){if(Qu(e),Ht(c))u[c]=null,d(c)&&(h[c]=null);else if(un(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(ht(l))Sa(l,o,12,[a,u]);else{const v=Ht(l),g=un(l);if(v||g){const p=()=>{if(n.f){const M=v?d(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)ct(M)&&cu(M,r);else if(ct(M))M.includes(r)||M.push(r);else if(v)u[l]=[r],d(l)&&(h[l]=u[l]);else{const b=[r];_(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else v?(u[l]=a,d(l)&&(h[l]=a)):g&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{p(),yo.delete(n)};M.id=-1,yo.set(n,M),En(M,t)}else Qu(n),p()}}}function Qu(n){const e=yo.get(n);e&&(e.flags|=8,yo.delete(n))}Oo().requestIdleCallback;Oo().cancelIdleCallback;const Jr=n=>!!n.type.__asyncLoader,Nd=n=>n.type.__isKeepAlive;function p0(n,e){Fd(n,"a",e)}function m0(n,e){Fd(n,"da",e)}function Fd(n,e,t=xn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(zo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Nd(s.parent.vnode)&&g0(i,e,t,s),s=s.parent}}function g0(n,e,t,i){const s=zo(e,n,i,!0);kd(()=>{cu(i[e],s)},t)}function zo(n,e,t=xn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Oi();const o=ba(t),l=fi(e,t,n,a);return o(),Bi(),l});return i?s.unshift(r):s.push(r),r}}const zi=n=>(e,t=xn)=>{(!da||n==="sp")&&zo(n,(...i)=>e(...i),t)},x0=zi("bm"),Od=zi("m"),_0=zi("bu"),v0=zi("u"),Bd=zi("bum"),kd=zi("um"),S0=zi("sp"),b0=zi("rtg"),M0=zi("rtc");function y0(n,e=xn){zo("ec",n,e)}const E0=Symbol.for("v-ndc");function Eo(n,e,t,i){let s;const r=t,a=ct(n);if(a||Ht(n)){const o=a&&Rs(n);let l=!1,c=!1;o&&(l=!zn(n),c=ki(n),n=Bo(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?pr(Zn(n[u])):Zn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(Tt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const tc=n=>n?ap(n)?Tu(n):tc(n.parent):null,Qr=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tc(n.parent),$root:n=>tc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Vd(n),$forceUpdate:n=>n.f||(n.f=()=>{vu(n.update)}),$nextTick:n=>n.n||(n.n=wd.bind(n.proxy)),$watch:n=>c0.bind(n)}),rl=(n,e)=>n!==Ct&&!n.__isScriptSetup&&bt(n,e),T0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(rl(i,e))return a[e]=1,i[e];if(s!==Ct&&bt(s,e))return a[e]=2,s[e];if(bt(r,e))return a[e]=3,r[e];if(t!==Ct&&bt(t,e))return a[e]=4,t[e];nc&&(a[e]=0)}}const c=Qr[e];let u,h;if(c)return e==="$attrs"&&ln(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Ct&&bt(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,bt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return rl(s,e)?(s[e]=t,!0):i!==Ct&&bt(i,e)?(i[e]=t,!0):bt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==Ct&&o[0]!=="$"&&bt(n,o)||rl(e,o)||bt(r,o)||bt(i,o)||bt(Qr,o)||bt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:bt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function eh(n){return ct(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nc=!0;function w0(n){const e=Vd(n),t=n.proxy,i=n.ctx;nc=!1,e.beforeCreate&&th(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:M,destroyed:b,unmounted:w,render:F,renderTracked:D,renderTriggered:L,errorCaptured:X,serverPrefetch:C,expose:y,inheritAttrs:O,components:Y,directives:Z,filters:he}=e;if(c&&A0(c,i,null),a)for(const ne in a){const $=a[ne];ht($)&&(i[ne]=$.bind(t))}if(s){const ne=s.call(t,t);Tt(ne)&&(n.data=Cs(ne))}if(nc=!0,r)for(const ne in r){const $=r[ne],xe=ht($)?$.bind(t,t):ht($.get)?$.get.bind(t,t):oi,Se=!ht($)&&ht($.set)?$.set.bind(t):oi,Oe=_n({get:xe,set:Se});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:pe=>Oe.value=pe})}if(o)for(const ne in o)zd(o[ne],i,t,ne);if(l){const ne=ht(l)?l.call(t):l;Reflect.ownKeys(ne).forEach($=>{ho($,ne[$])})}u&&th(u,n,"c");function J(ne,$){ct($)?$.forEach(xe=>ne(xe.bind(t))):$&&ne($.bind(t))}if(J(x0,h),J(Od,f),J(_0,d),J(v0,_),J(p0,v),J(m0,g),J(y0,X),J(M0,D),J(b0,L),J(Bd,M),J(kd,w),J(S0,C),ct(y))if(y.length){const ne=n.exposed||(n.exposed={});y.forEach($=>{Object.defineProperty(ne,$,{get:()=>t[$],set:xe=>t[$]=xe,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===oi&&(n.render=F),O!=null&&(n.inheritAttrs=O),Y&&(n.components=Y),Z&&(n.directives=Z),C&&Ud(n)}function A0(n,e,t=oi){ct(n)&&(n=ic(n));for(const i in n){const s=n[i];let r;Tt(s)?"default"in s?r=ci(s.from||i,s.default,!0):r=ci(s.from||i):r=ci(s),un(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function th(n,e,t){fi(ct(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zd(n,e,t,i){let s=i.includes(".")?Ld(t,i):()=>t[i];if(Ht(n)){const r=e[n];ht(r)&&Kr(s,r)}else if(ht(n))Kr(s,n.bind(t));else if(Tt(n))if(ct(n))n.forEach(r=>zd(r,e,t,i));else{const r=ht(n.handler)?n.handler.bind(t):e[n.handler];ht(r)&&Kr(s,r,n)}}function Vd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>To(l,c,a,!0)),To(l,e,a)),Tt(e)&&r.set(e,l),l}function To(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&To(n,r,t,!0),s&&s.forEach(a=>To(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=C0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const C0={data:nh,props:ih,emits:ih,methods:Xr,computed:Xr,beforeCreate:fn,created:fn,beforeMount:fn,mounted:fn,beforeUpdate:fn,updated:fn,beforeDestroy:fn,beforeUnmount:fn,destroyed:fn,unmounted:fn,activated:fn,deactivated:fn,errorCaptured:fn,serverPrefetch:fn,components:Xr,directives:Xr,watch:P0,provide:nh,inject:R0};function nh(n,e){return e?n?function(){return sn(ht(n)?n.call(this,this):n,ht(e)?e.call(this,this):e)}:e:n}function R0(n,e){return Xr(ic(n),ic(e))}function ic(n){if(ct(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function fn(n,e){return n?[...new Set([].concat(n,e))]:e}function Xr(n,e){return n?sn(Object.create(null),n,e):e}function ih(n,e){return n?ct(n)&&ct(e)?[...new Set([...n,...e])]:sn(Object.create(null),eh(n),eh(e??{})):e}function P0(n,e){if(!n)return e;if(!e)return n;const t=sn(Object.create(null),n);for(const i in e)t[i]=fn(n[i],e[i]);return t}function Hd(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D0=0;function L0(n,e){return function(i,s=null){ht(i)||(i=sn({},i)),s!=null&&!Tt(s)&&(s=null);const r=Hd(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:D0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ug,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&ht(u.install)?(a.add(u),u.install(c,...h)):ht(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||cn(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Tu(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(fi(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=hr;hr=c;try{return u()}finally{hr=h}}};return c}}let hr=null;const I0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${jn(e)}Modifiers`]||n[`${Is(e)}Modifiers`];function U0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ct;let s=t;const r=e.startsWith("update:"),a=r&&I0(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Ht(u)?u.trim():u)),a.number&&(s=t.map(ym)));let o,l=i[o=Qo(e)]||i[o=Qo(jn(e))];!l&&r&&(l=i[o=Qo(Is(e))]),l&&fi(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,fi(c,n,6,s)}}const N0=new WeakMap;function Gd(n,e,t=!1){const i=t?N0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!ht(n)){const l=c=>{const u=Gd(c,e,!0);u&&(o=!0,sn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Tt(n)&&i.set(n,null),null):(ct(r)?r.forEach(l=>a[l]=null):sn(a,r),Tt(n)&&i.set(n,a),a)}function Vo(n,e){return!n||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),bt(n,e[0].toLowerCase()+e.slice(1))||bt(n,Is(e))||bt(n,e))}function sh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:v}=n,g=Mo(n);let p,M;try{if(t.shapeFlag&4){const w=s||i,F=w;p=ti(c.call(F,w,u,h,d,f,_)),M=o}else{const w=e;p=ti(w.length>1?w(h,{attrs:o,slots:a,emit:l}):w(h,null)),M=e.props?o:F0(o)}}catch(w){ea.length=0,ko(w,n,1),p=cn(cs)}let b=p;if(M&&v!==!1){const w=Object.keys(M),{shapeFlag:F}=b;w.length&&F&7&&(r&&w.some(lu)&&(M=O0(M,r)),b=mr(b,M,!1,!0))}return t.dirs&&(b=mr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&bu(b,t.transition),p=b,Mo(g),p}const F0=n=>{let e;for(const t in n)(t==="class"||t==="style"||No(t))&&((e||(e={}))[t]=n[t]);return e},O0=(n,e)=>{const t={};for(const i in n)(!lu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function B0(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?rh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Wd(a,i,f)&&!Vo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?rh(i,a,c):!0:!!a;return!1}function rh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Wd(e,n,r)&&!Vo(t,r))return!0}return!1}function Wd(n,e,t){const i=n[t],s=e[t];return t==="style"&&Tt(i)&&Tt(s)?!hu(i,s):i!==s}function k0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xd={},Yd=()=>Object.create(Xd),jd=n=>Object.getPrototypeOf(n)===Xd;function z0(n,e,t,i=!1){const s={},r=Yd();n.propsDefaults=Object.create(null),qd(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:bd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function V0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=St(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Vo(n.emitsOptions,f))continue;const d=e[f];if(l)if(bt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=jn(f);s[_]=sc(l,o,_,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{qd(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!bt(e,h)&&((u=Is(h))===h||!bt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=sc(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!bt(e,h))&&(delete r[h],c=!0)}c&&Li(n.attrs,"set","")}function qd(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;s&&bt(s,u=jn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Vo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=St(t),c=o||Ct;for(let u=0;u<r.length;u++){const h=r[u];t[h]=sc(s,l,h,c[h],n,!bt(c,h))}}return a}function sc(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=bt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ht(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ba(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Is(t))&&(i=!0))}return i}const H0=new WeakMap;function Zd(n,e,t=!1){const i=t?H0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!ht(n)){const u=h=>{l=!0;const[f,d]=Zd(h,e,!0);sn(a,f),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Tt(n)&&i.set(n,lr),lr;if(ct(r))for(let u=0;u<r.length;u++){const h=jn(r[u]);ah(h)&&(a[h]=Ct)}else if(r)for(const u in r){const h=jn(u);if(ah(h)){const f=r[u],d=a[h]=ct(f)||ht(f)?{type:f}:sn({},f),_=d.type;let v=!1,g=!0;if(ct(_))for(let p=0;p<_.length;++p){const M=_[p],b=ht(M)&&M.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(g=!1)}else v=ht(_)&&_.name==="Boolean";d[0]=v,d[1]=g,(v||bt(d,"default"))&&o.push(h)}}const c=[a,o];return Tt(n)&&i.set(n,c),c}function ah(n){return n[0]!=="$"&&!jr(n)}const Mu=n=>n==="_"||n==="_ctx"||n==="$stable",yu=n=>ct(n)?n.map(ti):[ti(n)],G0=(n,e,t)=>{if(e._n)return e;const i=Su((...s)=>yu(e(...s)),t);return i._c=!1,i},Kd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Mu(s))continue;const r=n[s];if(ht(r))e[s]=G0(s,r,i);else if(r!=null){const a=yu(r);e[s]=()=>a}}},$d=(n,e)=>{const t=yu(e);n.slots.default=()=>t},Jd=(n,e,t)=>{for(const i in e)(t||!Mu(i))&&(n[i]=e[i])},W0=(n,e,t)=>{const i=n.slots=Yd();if(n.vnode.shapeFlag&32){const s=e._;s?(Jd(i,e,t),t&&id(i,"_",s,!0)):Kd(e,i)}else e&&$d(n,e)},X0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Ct;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Jd(s,e,t):(r=!e.$stable,Kd(e,s)),a=e}else e&&($d(n,e),a={default:1});if(r)for(const o in s)!Mu(o)&&a[o]==null&&delete s[o]},En=K0;function Y0(n){return j0(n)}function j0(n,e){const t=Oo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=oi,insertStaticContent:_}=n,v=(I,U,G,E=null,ce=null,se=null,Ee=void 0,ue=null,ye=!!U.dynamicChildren)=>{if(I===U)return;I&&!Ir(I,U)&&(E=k(I),pe(I,ce,se,!0),I=null),U.patchFlag===-2&&(ye=!1,U.dynamicChildren=null);const{type:re,ref:De,shapeFlag:T}=U;switch(re){case Ho:g(I,U,G,E);break;case cs:p(I,U,G,E);break;case ol:I==null&&M(U,G,E,Ee);break;case In:Y(I,U,G,E,ce,se,Ee,ue,ye);break;default:T&1?F(I,U,G,E,ce,se,Ee,ue,ye):T&6?Z(I,U,G,E,ce,se,Ee,ue,ye):(T&64||T&128)&&re.process(I,U,G,E,ce,se,Ee,ue,ye,be)}De!=null&&ce?$r(De,I&&I.ref,se,U||I,!U):De==null&&I&&I.ref!=null&&$r(I.ref,null,se,I,!0)},g=(I,U,G,E)=>{if(I==null)i(U.el=o(U.children),G,E);else{const ce=U.el=I.el;U.children!==I.children&&c(ce,U.children)}},p=(I,U,G,E)=>{I==null?i(U.el=l(U.children||""),G,E):U.el=I.el},M=(I,U,G,E)=>{[I.el,I.anchor]=_(I.children,U,G,E,I.el,I.anchor)},b=({el:I,anchor:U},G,E)=>{let ce;for(;I&&I!==U;)ce=f(I),i(I,G,E),I=ce;i(U,G,E)},w=({el:I,anchor:U})=>{let G;for(;I&&I!==U;)G=f(I),s(I),I=G;s(U)},F=(I,U,G,E,ce,se,Ee,ue,ye)=>{if(U.type==="svg"?Ee="svg":U.type==="math"&&(Ee="mathml"),I==null)D(U,G,E,ce,se,Ee,ue,ye);else{const re=I.el&&I.el._isVueCE?I.el:null;try{re&&re._beginPatch(),C(I,U,ce,se,Ee,ue,ye)}finally{re&&re._endPatch()}}},D=(I,U,G,E,ce,se,Ee,ue)=>{let ye,re;const{props:De,shapeFlag:T,transition:S,dirs:H}=I;if(ye=I.el=a(I.type,se,De&&De.is,De),T&8?u(ye,I.children):T&16&&X(I.children,ye,null,E,ce,al(I,se),Ee,ue),H&&ds(I,null,E,"created"),L(ye,I,I.scopeId,Ee,E),De){for(const me in De)me!=="value"&&!jr(me)&&r(ye,me,null,De[me],se,E);"value"in De&&r(ye,"value",null,De.value,se),(re=De.onVnodeBeforeMount)&&Jn(re,E,I)}H&&ds(I,null,E,"beforeMount");const ae=q0(ce,S);ae&&S.beforeEnter(ye),i(ye,U,G),((re=De&&De.onVnodeMounted)||ae||H)&&En(()=>{re&&Jn(re,E,I),ae&&S.enter(ye),H&&ds(I,null,E,"mounted")},ce)},L=(I,U,G,E,ce)=>{if(G&&d(I,G),E)for(let se=0;se<E.length;se++)d(I,E[se]);if(ce){let se=ce.subTree;if(U===se||np(se.type)&&(se.ssContent===U||se.ssFallback===U)){const Ee=ce.vnode;L(I,Ee,Ee.scopeId,Ee.slotScopeIds,ce.parent)}}},X=(I,U,G,E,ce,se,Ee,ue,ye=0)=>{for(let re=ye;re<I.length;re++){const De=I[re]=ue?Di(I[re]):ti(I[re]);v(null,De,U,G,E,ce,se,Ee,ue)}},C=(I,U,G,E,ce,se,Ee)=>{const ue=U.el=I.el;let{patchFlag:ye,dynamicChildren:re,dirs:De}=U;ye|=I.patchFlag&16;const T=I.props||Ct,S=U.props||Ct;let H;if(G&&ps(G,!1),(H=S.onVnodeBeforeUpdate)&&Jn(H,G,U,I),De&&ds(U,I,G,"beforeUpdate"),G&&ps(G,!0),(T.innerHTML&&S.innerHTML==null||T.textContent&&S.textContent==null)&&u(ue,""),re?y(I.dynamicChildren,re,ue,G,E,al(U,ce),se):Ee||$(I,U,ue,null,G,E,al(U,ce),se,!1),ye>0){if(ye&16)O(ue,T,S,G,ce);else if(ye&2&&T.class!==S.class&&r(ue,"class",null,S.class,ce),ye&4&&r(ue,"style",T.style,S.style,ce),ye&8){const ae=U.dynamicProps;for(let me=0;me<ae.length;me++){const te=ae[me],Ve=T[te],Pe=S[te];(Pe!==Ve||te==="value")&&r(ue,te,Ve,Pe,ce,G)}}ye&1&&I.children!==U.children&&u(ue,U.children)}else!Ee&&re==null&&O(ue,T,S,G,ce);((H=S.onVnodeUpdated)||De)&&En(()=>{H&&Jn(H,G,U,I),De&&ds(U,I,G,"updated")},E)},y=(I,U,G,E,ce,se,Ee)=>{for(let ue=0;ue<U.length;ue++){const ye=I[ue],re=U[ue],De=ye.el&&(ye.type===In||!Ir(ye,re)||ye.shapeFlag&198)?h(ye.el):G;v(ye,re,De,null,E,ce,se,Ee,!0)}},O=(I,U,G,E,ce)=>{if(U!==G){if(U!==Ct)for(const se in U)!jr(se)&&!(se in G)&&r(I,se,U[se],null,ce,E);for(const se in G){if(jr(se))continue;const Ee=G[se],ue=U[se];Ee!==ue&&se!=="value"&&r(I,se,ue,Ee,ce,E)}"value"in G&&r(I,"value",U.value,G.value,ce)}},Y=(I,U,G,E,ce,se,Ee,ue,ye)=>{const re=U.el=I?I.el:o(""),De=U.anchor=I?I.anchor:o("");let{patchFlag:T,dynamicChildren:S,slotScopeIds:H}=U;H&&(ue=ue?ue.concat(H):H),I==null?(i(re,G,E),i(De,G,E),X(U.children||[],G,De,ce,se,Ee,ue,ye)):T>0&&T&64&&S&&I.dynamicChildren&&I.dynamicChildren.length===S.length?(y(I.dynamicChildren,S,G,ce,se,Ee,ue),(U.key!=null||ce&&U===ce.subTree)&&Qd(I,U,!0)):$(I,U,G,De,ce,se,Ee,ue,ye)},Z=(I,U,G,E,ce,se,Ee,ue,ye)=>{U.slotScopeIds=ue,I==null?U.shapeFlag&512?ce.ctx.activate(U,G,E,Ee,ye):he(U,G,E,ce,se,Ee,ye):ee(I,U,ye)},he=(I,U,G,E,ce,se,Ee)=>{const ue=I.component=sg(I,E,ce);if(Nd(I)&&(ue.ctx.renderer=be),rg(ue,!1,Ee),ue.asyncDep){if(ce&&ce.registerDep(ue,J,Ee),!I.el){const ye=ue.subTree=cn(cs);p(null,ye,U,G),I.placeholder=ye.el}}else J(ue,I,U,G,ce,se,Ee)},ee=(I,U,G)=>{const E=U.component=I.component;if(B0(I,U,G))if(E.asyncDep&&!E.asyncResolved){ne(E,U,G);return}else E.next=U,E.update();else U.el=I.el,E.vnode=U},J=(I,U,G,E,ce,se,Ee)=>{const ue=()=>{if(I.isMounted){let{next:T,bu:S,u:H,parent:ae,vnode:me}=I;{const Ye=ep(I);if(Ye){T&&(T.el=me.el,ne(I,T,Ee)),Ye.asyncDep.then(()=>{En(()=>{I.isUnmounted||re()},ce)});return}}let te=T,Ve;ps(I,!1),T?(T.el=me.el,ne(I,T,Ee)):T=me,S&&el(S),(Ve=T.props&&T.props.onVnodeBeforeUpdate)&&Jn(Ve,ae,T,me),ps(I,!0);const Pe=sh(I),qe=I.subTree;I.subTree=Pe,v(qe,Pe,h(qe.el),k(qe),I,ce,se),T.el=Pe.el,te===null&&k0(I,Pe.el),H&&En(H,ce),(Ve=T.props&&T.props.onVnodeUpdated)&&En(()=>Jn(Ve,ae,T,me),ce)}else{let T;const{el:S,props:H}=U,{bm:ae,m:me,parent:te,root:Ve,type:Pe}=I,qe=Jr(U);ps(I,!1),ae&&el(ae),!qe&&(T=H&&H.onVnodeBeforeMount)&&Jn(T,te,U),ps(I,!0);{Ve.ce&&Ve.ce._hasShadowRoot()&&Ve.ce._injectChildStyle(Pe,I.parent?I.parent.type:void 0);const Ye=I.subTree=sh(I);v(null,Ye,G,E,I,ce,se),U.el=Ye.el}if(me&&En(me,ce),!qe&&(T=H&&H.onVnodeMounted)){const Ye=U;En(()=>Jn(T,te,Ye),ce)}(U.shapeFlag&256||te&&Jr(te.vnode)&&te.vnode.shapeFlag&256)&&I.a&&En(I.a,ce),I.isMounted=!0,U=G=E=null}};I.scope.on();const ye=I.effect=new od(ue);I.scope.off();const re=I.update=ye.run.bind(ye),De=I.job=ye.runIfDirty.bind(ye);De.i=I,De.id=I.uid,ye.scheduler=()=>vu(De),ps(I,!0),re()},ne=(I,U,G)=>{U.component=I;const E=I.vnode.props;I.vnode=U,I.next=null,V0(I,U.props,E,G),X0(I,U.children,G),Oi(),$u(I),Bi()},$=(I,U,G,E,ce,se,Ee,ue,ye=!1)=>{const re=I&&I.children,De=I?I.shapeFlag:0,T=U.children,{patchFlag:S,shapeFlag:H}=U;if(S>0){if(S&128){Se(re,T,G,E,ce,se,Ee,ue,ye);return}else if(S&256){xe(re,T,G,E,ce,se,Ee,ue,ye);return}}H&8?(De&16&&K(re,ce,se),T!==re&&u(G,T)):De&16?H&16?Se(re,T,G,E,ce,se,Ee,ue,ye):K(re,ce,se,!0):(De&8&&u(G,""),H&16&&X(T,G,E,ce,se,Ee,ue,ye))},xe=(I,U,G,E,ce,se,Ee,ue,ye)=>{I=I||lr,U=U||lr;const re=I.length,De=U.length,T=Math.min(re,De);let S;for(S=0;S<T;S++){const H=U[S]=ye?Di(U[S]):ti(U[S]);v(I[S],H,G,null,ce,se,Ee,ue,ye)}re>De?K(I,ce,se,!0,!1,T):X(U,G,E,ce,se,Ee,ue,ye,T)},Se=(I,U,G,E,ce,se,Ee,ue,ye)=>{let re=0;const De=U.length;let T=I.length-1,S=De-1;for(;re<=T&&re<=S;){const H=I[re],ae=U[re]=ye?Di(U[re]):ti(U[re]);if(Ir(H,ae))v(H,ae,G,null,ce,se,Ee,ue,ye);else break;re++}for(;re<=T&&re<=S;){const H=I[T],ae=U[S]=ye?Di(U[S]):ti(U[S]);if(Ir(H,ae))v(H,ae,G,null,ce,se,Ee,ue,ye);else break;T--,S--}if(re>T){if(re<=S){const H=S+1,ae=H<De?U[H].el:E;for(;re<=S;)v(null,U[re]=ye?Di(U[re]):ti(U[re]),G,ae,ce,se,Ee,ue,ye),re++}}else if(re>S)for(;re<=T;)pe(I[re],ce,se,!0),re++;else{const H=re,ae=re,me=new Map;for(re=ae;re<=S;re++){const Ge=U[re]=ye?Di(U[re]):ti(U[re]);Ge.key!=null&&me.set(Ge.key,re)}let te,Ve=0;const Pe=S-ae+1;let qe=!1,Ye=0;const we=new Array(Pe);for(re=0;re<Pe;re++)we[re]=0;for(re=H;re<=T;re++){const Ge=I[re];if(Ve>=Pe){pe(Ge,ce,se,!0);continue}let Je;if(Ge.key!=null)Je=me.get(Ge.key);else for(te=ae;te<=S;te++)if(we[te-ae]===0&&Ir(Ge,U[te])){Je=te;break}Je===void 0?pe(Ge,ce,se,!0):(we[Je-ae]=re+1,Je>=Ye?Ye=Je:qe=!0,v(Ge,U[Je],G,null,ce,se,Ee,ue,ye),Ve++)}const Re=qe?Z0(we):lr;for(te=Re.length-1,re=Pe-1;re>=0;re--){const Ge=ae+re,Je=U[Ge],Ne=U[Ge+1],Ze=Ge+1<De?Ne.el||tp(Ne):E;we[re]===0?v(null,Je,G,Ze,ce,se,Ee,ue,ye):qe&&(te<0||re!==Re[te]?Oe(Je,G,Ze,2):te--)}}},Oe=(I,U,G,E,ce=null)=>{const{el:se,type:Ee,transition:ue,children:ye,shapeFlag:re}=I;if(re&6){Oe(I.component.subTree,U,G,E);return}if(re&128){I.suspense.move(U,G,E);return}if(re&64){Ee.move(I,U,G,be);return}if(Ee===In){i(se,U,G);for(let T=0;T<ye.length;T++)Oe(ye[T],U,G,E);i(I.anchor,U,G);return}if(Ee===ol){b(I,U,G);return}if(E!==2&&re&1&&ue)if(E===0)ue.beforeEnter(se),i(se,U,G),En(()=>ue.enter(se),ce);else{const{leave:T,delayLeave:S,afterLeave:H}=ue,ae=()=>{I.ctx.isUnmounted?s(se):i(se,U,G)},me=()=>{se._isLeaving&&se[f0](!0),T(se,()=>{ae(),H&&H()})};S?S(se,ae,me):me()}else i(se,U,G)},pe=(I,U,G,E=!1,ce=!1)=>{const{type:se,props:Ee,ref:ue,children:ye,dynamicChildren:re,shapeFlag:De,patchFlag:T,dirs:S,cacheIndex:H}=I;if(T===-2&&(ce=!1),ue!=null&&(Oi(),$r(ue,null,G,I,!0),Bi()),H!=null&&(U.renderCache[H]=void 0),De&256){U.ctx.deactivate(I);return}const ae=De&1&&S,me=!Jr(I);let te;if(me&&(te=Ee&&Ee.onVnodeBeforeUnmount)&&Jn(te,U,I),De&6)$e(I.component,G,E);else{if(De&128){I.suspense.unmount(G,E);return}ae&&ds(I,null,U,"beforeUnmount"),De&64?I.type.remove(I,U,G,be,E):re&&!re.hasOnce&&(se!==In||T>0&&T&64)?K(re,U,G,!1,!0):(se===In&&T&384||!ce&&De&16)&&K(ye,U,G),E&&_e(I)}(me&&(te=Ee&&Ee.onVnodeUnmounted)||ae)&&En(()=>{te&&Jn(te,U,I),ae&&ds(I,null,U,"unmounted")},G)},_e=I=>{const{type:U,el:G,anchor:E,transition:ce}=I;if(U===In){Ie(G,E);return}if(U===ol){w(I);return}const se=()=>{s(G),ce&&!ce.persisted&&ce.afterLeave&&ce.afterLeave()};if(I.shapeFlag&1&&ce&&!ce.persisted){const{leave:Ee,delayLeave:ue}=ce,ye=()=>Ee(G,se);ue?ue(I.el,se,ye):ye()}else se()},Ie=(I,U)=>{let G;for(;I!==U;)G=f(I),s(I),I=G;s(U)},$e=(I,U,G)=>{const{bum:E,scope:ce,job:se,subTree:Ee,um:ue,m:ye,a:re}=I;oh(ye),oh(re),E&&el(E),ce.stop(),se&&(se.flags|=8,pe(Ee,I,U,G)),ue&&En(ue,U),En(()=>{I.isUnmounted=!0},U)},K=(I,U,G,E=!1,ce=!1,se=0)=>{for(let Ee=se;Ee<I.length;Ee++)pe(I[Ee],U,G,E,ce)},k=I=>{if(I.shapeFlag&6)return k(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const U=f(I.anchor||I.el),G=U&&U[u0];return G?f(G):U};let le=!1;const ve=(I,U,G)=>{let E;I==null?U._vnode&&(pe(U._vnode,null,null,!0),E=U._vnode.component):v(U._vnode||null,I,U,null,null,null,G),U._vnode=I,le||(le=!0,$u(E),Cd(),le=!1)},be={p:v,um:pe,m:Oe,r:_e,mt:he,mc:X,pc:$,pbc:y,n:k,o:n};return{render:ve,hydrate:void 0,createApp:L0(ve)}}function al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ps({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function q0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Qd(n,e,t=!1){const i=n.children,s=e.children;if(ct(i)&&ct(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Di(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Qd(a,o)),o.type===Ho&&(o.patchFlag===-1&&(o=s[r]=Di(o)),o.el=a.el),o.type===cs&&!o.el&&(o.el=a.el)}}function Z0(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function ep(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ep(e)}function oh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function tp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?tp(e.subTree):null}const np=n=>n.__isSuspense;function K0(n,e){e&&e.pendingBranch?ct(n)?e.effects.push(...n):e.effects.push(n):a0(n)}const In=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),cs=Symbol.for("v-cmt"),ol=Symbol.for("v-stc"),ea=[];let Nn=null;function Qt(n=!1){ea.push(Nn=n?null:[])}function $0(){ea.pop(),Nn=ea[ea.length-1]||null}let fa=1;function wo(n,e=!1){fa+=n,n<0&&Nn&&e&&(Nn.hasOnce=!0)}function ip(n){return n.dynamicChildren=fa>0?Nn||lr:null,$0(),fa>0&&Nn&&Nn.push(n),n}function on(n,e,t,i,s,r){return ip(ze(n,e,t,i,s,r,!0))}function J0(n,e,t,i,s){return ip(cn(n,e,t,i,s,!0))}function Ao(n){return n?n.__v_isVNode===!0:!1}function Ir(n,e){return n.type===e.type&&n.key===e.key}const sp=({key:n})=>n??null,fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ht(n)||un(n)||ht(n)?{i:si,r:n,k:e,f:!!t}:n:null);function ze(n,e=null,t=null,i=0,s=null,r=n===In?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sp(e),ref:e&&fo(e),scopeId:Pd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:si};return o?(Eu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ht(t)?8:16),fa>0&&!a&&Nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Nn.push(l),l}const cn=Q0;function Q0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===E0)&&(n=cs),Ao(n)){const o=mr(n,e,!0);return t&&Eu(o,t),fa>0&&!r&&Nn&&(o.shapeFlag&6?Nn[Nn.indexOf(n)]=o:Nn.push(o)),o.patchFlag=-2,o}if(cg(n)&&(n=n.__vccOpts),e){e=eg(e);let{class:o,style:l}=e;o&&!Ht(o)&&(e.class=ws(o)),Tt(l)&&(_u(l)&&!ct(l)&&(l=sn({},l)),e.style=la(l))}const a=Ht(n)?1:np(n)?128:h0(n)?64:Tt(n)?4:ht(n)?2:0;return ze(n,e,t,i,s,a,r,!0)}function eg(n){return n?_u(n)||jd(n)?sn({},n):n:null}function mr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?tg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&sp(c),ref:e&&e.ref?t&&r?ct(r)?r.concat(fo(e)):[r,fo(e)]:fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==In?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mr(n.ssContent),ssFallback:n.ssFallback&&mr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&bu(u,l.clone(u)),u}function Co(n=" ",e=0){return cn(Ho,null,n,e)}function ms(n="",e=!1){return e?(Qt(),J0(cs,null,n)):cn(cs,null,n)}function ti(n){return n==null||typeof n=="boolean"?cn(cs):ct(n)?cn(In,null,n.slice()):Ao(n)?Di(n):cn(Ho,null,String(n))}function Di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mr(n)}function Eu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ct(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Eu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!jd(e)?e._ctx=si:s===3&&si&&(si.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ht(e)?(e={default:e,_ctx:si},t=32):(e=String(e),i&64?(t=16,e=[Co(e)]):t=8);n.children=e,n.shapeFlag|=t}function tg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ws([e.class,i.class]));else if(s==="style")e.style=la([e.style,i.style]);else if(No(s)){const r=e[s],a=i[s];a&&r!==a&&!(ct(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Jn(n,e,t,i=null){fi(n,e,7,[t,i])}const ng=Hd();let ig=0;function sg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||ng,r={uid:ig++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zd(i,s),emitsOptions:Gd(i,s),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:i.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=U0.bind(null,r),n.ce&&n.ce(r),r}let xn=null;const rp=()=>xn||si;let Ro,rc;{const n=Oo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Ro=e("__VUE_INSTANCE_SETTERS__",t=>xn=t),rc=e("__VUE_SSR_SETTERS__",t=>da=t)}const ba=n=>{const e=xn;return Ro(n),n.scope.on(),()=>{n.scope.off(),Ro(e)}},lh=()=>{xn&&xn.scope.off(),Ro(null)};function ap(n){return n.vnode.shapeFlag&4}let da=!1;function rg(n,e=!1,t=!1){e&&rc(e);const{props:i,children:s}=n.vnode,r=ap(n);z0(n,i,r,e),W0(n,s,t||e);const a=r?ag(n,e):void 0;return e&&rc(!1),a}function ag(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,T0);const{setup:i}=t;if(i){Oi();const s=n.setupContext=i.length>1?lg(n):null,r=ba(n),a=Sa(i,n,0,[n.props,s]),o=Qf(a);if(Bi(),r(),(o||n.sp)&&!Jr(n)&&Ud(n),o){if(a.then(lh,lh),e)return a.then(l=>{ch(n,l)}).catch(l=>{ko(l,n,0)});n.asyncDep=a}else ch(n,a)}else op(n)}function ch(n,e,t){ht(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Tt(e)&&(n.setupState=Ed(e)),op(n)}function op(n,e,t){const i=n.type;n.render||(n.render=i.render||oi);{const s=ba(n);Oi();try{w0(n)}finally{Bi(),s()}}}const og={get(n,e){return ln(n,"get",""),n[e]}};function lg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,og),slots:n.slots,emit:n.emit,expose:e}}function Tu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ed($m(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qr)return Qr[t](n)},has(e,t){return t in e||t in Qr}})):n.proxy}function cg(n){return ht(n)&&"__vccOpts"in n}const _n=(n,e)=>t0(n,e,da);function lp(n,e,t){try{wo(-1);const i=arguments.length;return i===2?Tt(e)&&!ct(e)?Ao(e)?cn(n,null,[e]):cn(n,e):cn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ao(t)&&(t=[t]),cn(n,e,t))}finally{wo(1)}}const ug="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const uh=typeof window<"u"&&window.trustedTypes;if(uh)try{ac=uh.createPolicy("vue",{createHTML:n=>n})}catch{}const cp=ac?n=>ac.createHTML(n):n=>n,hg="http://www.w3.org/2000/svg",fg="http://www.w3.org/1998/Math/MathML",Pi=typeof document<"u"?document:null,hh=Pi&&Pi.createElement("template"),dg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Pi.createElementNS(hg,n):e==="mathml"?Pi.createElementNS(fg,n):t?Pi.createElement(n,{is:t}):Pi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Pi.createTextNode(n),createComment:n=>Pi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Pi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{hh.innerHTML=cp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=hh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},pg=Symbol("_vtc");function mg(n,e,t){const i=n[pg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fh=Symbol("_vod"),gg=Symbol("_vsh"),xg=Symbol(""),_g=/(?:^|;)\s*display\s*:/;function vg(n,e,t){const i=n.style,s=Ht(t);let r=!1;if(t&&!s){if(e)if(Ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&po(i,o,"")}else for(const a in e)t[a]==null&&po(i,a,"");for(const a in t)a==="display"&&(r=!0),po(i,a,t[a])}else if(s){if(e!==t){const a=i[xg];a&&(t+=";"+a),i.cssText=t,r=_g.test(t)}}else e&&n.removeAttribute("style");fh in n&&(n[fh]=r?i.display:"",n[gg]&&(i.display="none"))}const dh=/\s*!important$/;function po(n,e,t){if(ct(t))t.forEach(i=>po(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Sg(n,e);dh.test(t)?n.setProperty(Is(i),t.replace(dh,""),"important"):n[i]=t}}const ph=["Webkit","Moz","ms"],ll={};function Sg(n,e){const t=ll[e];if(t)return t;let i=jn(e);if(i!=="filter"&&i in n)return ll[e]=i;i=nd(i);for(let s=0;s<ph.length;s++){const r=ph[s]+i;if(r in n)return ll[e]=r}return e}const mh="http://www.w3.org/1999/xlink";function gh(n,e,t,i,s,r=Rm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(mh,e.slice(6,e.length)):n.setAttributeNS(mh,e,t):t==null||r&&!sd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":hi(t)?String(t):t)}function xh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?cp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=sd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function bg(n,e,t,i){n.addEventListener(e,t,i)}function Mg(n,e,t,i){n.removeEventListener(e,t,i)}const _h=Symbol("_vei");function yg(n,e,t,i,s=null){const r=n[_h]||(n[_h]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Eg(e);if(i){const c=r[e]=Ag(i,s);bg(n,o,c,l)}else a&&(Mg(n,o,a,l),r[e]=void 0)}}const vh=/(?:Once|Passive|Capture)$/;function Eg(n){let e;if(vh.test(n)){e={};let i;for(;i=n.match(vh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Is(n.slice(2)),e]}let cl=0;const Tg=Promise.resolve(),wg=()=>cl||(Tg.then(()=>cl=0),cl=Date.now());function Ag(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;fi(Cg(i,t.value),e,5,[i])};return t.value=n,t.attached=wg(),t}function Cg(n,e){if(ct(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Sh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Rg=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?mg(n,i,a):e==="style"?vg(n,t,i):No(e)?lu(e)||yg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pg(n,e,i,a))?(xh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gh(n,e,i,a,r,e!=="value")):n._isVueCE&&(Dg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ht(i)))?xh(n,jn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),gh(n,e,i,a))};function Pg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Sh(e)&&ht(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sh(e)&&Ht(t)?!1:e in n}function Dg(n,e){const t=n._def.props;if(!t)return!1;const i=jn(e);return Array.isArray(t)?t.some(s=>jn(s)===i):Object.keys(t).some(s=>jn(s)===i)}const Lg=["ctrl","shift","alt","meta"],Ig={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Lg.some(t=>n[`${t}Key`]&&!e.includes(t))},Ug=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=Ig[e[a]];if(o&&o(s,e))return}return n(s,...r)})},Ng=sn({patchProp:Rg},dg);let bh;function Fg(){return bh||(bh=Y0(Ng))}const Og=(...n)=>{const e=Fg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=kg(i);if(!s)return;const r=e._component;!ht(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Bg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Bg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function kg(n){return Ht(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const rr=typeof document<"u";function up(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function zg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&up(n.default)}const vt=Object.assign;function ul(n,e){const t={};for(const i in e){const s=e[i];t[i]=Kn(s)?s.map(n):n(s)}return t}const ta=()=>{},Kn=Array.isArray;function Mh(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const hp=/#/g,Vg=/&/g,Hg=/\//g,Gg=/=/g,Wg=/\?/g,fp=/\+/g,Xg=/%5B/g,Yg=/%5D/g,dp=/%5E/g,jg=/%60/g,pp=/%7B/g,qg=/%7C/g,mp=/%7D/g,Zg=/%20/g;function wu(n){return n==null?"":encodeURI(""+n).replace(qg,"|").replace(Xg,"[").replace(Yg,"]")}function Kg(n){return wu(n).replace(pp,"{").replace(mp,"}").replace(dp,"^")}function oc(n){return wu(n).replace(fp,"%2B").replace(Zg,"+").replace(hp,"%23").replace(Vg,"%26").replace(jg,"`").replace(pp,"{").replace(mp,"}").replace(dp,"^")}function $g(n){return oc(n).replace(Gg,"%3D")}function Jg(n){return wu(n).replace(hp,"%23").replace(Wg,"%3F")}function Qg(n){return Jg(n).replace(Hg,"%2F")}function pa(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const ex=/\/$/,tx=n=>n.replace(ex,"");function hl(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,o>0?o:e.length),s=n(r.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=rx(i??e,t),{fullPath:i+r+a,path:i,query:s,hash:pa(a)}}function nx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function yh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function ix(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&gr(e.matched[i],t.matched[s])&&gp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function gp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!sx(n[t],e[t]))return!1;return!0}function sx(n,e){return Kn(n)?Eh(n,e):Kn(e)?Eh(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Eh(n,e){return Kn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function rx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const Hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let lc=function(n){return n.pop="pop",n.push="push",n}({}),fl=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function ax(n){if(!n)if(rr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),tx(n)}const ox=/^[^#]+#/;function lx(n,e){return n.replace(ox,"#")+e}function cx(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Go=()=>({left:window.scrollX,top:window.scrollY});function ux(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=cx(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Th(n,e){return(history.state?history.state.position-e:-1)+n}const cc=new Map;function hx(n,e){cc.set(n,e)}function fx(n){const e=cc.get(n);return cc.delete(n),e}function dx(n){return typeof n=="string"||n&&typeof n=="object"}function xp(n){return typeof n=="string"||typeof n=="symbol"}let kt=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const _p=Symbol("");kt.MATCHER_NOT_FOUND+"",kt.NAVIGATION_GUARD_REDIRECT+"",kt.NAVIGATION_ABORTED+"",kt.NAVIGATION_CANCELLED+"",kt.NAVIGATION_DUPLICATED+"";function xr(n,e){return vt(new Error,{type:n,[_p]:!0},e)}function vi(n,e){return n instanceof Error&&_p in n&&(e==null||!!(n.type&e))}const px=["params","query","hash"];function mx(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of px)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function gx(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(fp," "),r=s.indexOf("="),a=pa(r<0?s:s.slice(0,r)),o=r<0?null:pa(s.slice(r+1));if(a in e){let l=e[a];Kn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function wh(n){let e="";for(let t in n){const i=n[t];if(t=$g(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Kn(i)?i.map(s=>s&&oc(s)):[i&&oc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function xx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const _x=Symbol(""),Ah=Symbol(""),Au=Symbol(""),Cu=Symbol(""),uc=Symbol("");function Ur(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function $i(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=f=>{f===!1?l(xr(kt.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):dx(f)?l(xr(kt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(a&&i.enterCallbacks[s]===a&&typeof f=="function"&&a.push(f),o())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function dl(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(up(l)){const c=(l.__vccOpts||l)[e];c&&r.push($i(c,t,i,a,o,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const h=zg(u)?u.default:u;a.mods[o]=u,a.components[o]=h;const f=(h.__vccOpts||h)[e];return f&&$i(f,t,i,a,o,s)()}))}}return r}function vx(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>gr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>gr(c,l))||s.push(l))}return[t,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Sx=()=>location.protocol+"//"+location.host;function vp(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,o=s.slice(a);return o[0]!=="/"&&(o="/"+o),yh(o,"")}return yh(t,n)+i+s}function bx(n,e,t,i){let s=[],r=[],a=null;const o=({state:f})=>{const d=vp(n,location),_=t.value,v=e.value;let g=0;if(f){if(t.value=d,e.value=f,a&&a===_){a=null;return}g=v?f.position-v.position:0}else i(d);s.forEach(p=>{p(t.value,_,{delta:g,type:lc.pop,direction:g?g>0?fl.forward:fl.back:fl.unknown})})};function l(){a=t.value}function c(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(vt({},f.state,{scroll:Go()}),"")}}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function Ch(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Go():null}}function Mx(n){const{history:e,location:t}=window,i={value:vp(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:Sx()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function a(l,c){r(l,vt({},e.state,Ch(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function o(l,c){const u=vt({},s.value,e.state,{forward:l,scroll:Go()});r(u.current,u,!0),r(l,vt({},Ch(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function yx(n){n=ax(n);const e=Mx(n),t=bx(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=vt({location:"",base:n,go:i,createHref:lx.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ex(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),yx(n)}let Es=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Xt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Xt||{});const Tx={type:Es.Static,value:""},wx=/[a-zA-Z0-9_]/;function Ax(n){if(!n)return[[]];if(n==="/")return[[Tx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=Xt.Static,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function h(){c&&(t===Xt.Static?r.push({type:Es.Static,value:c}):t===Xt.Param||t===Xt.ParamRegExp||t===Xt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Es.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Xt.ParamRegExp){i=t,t=Xt.EscapeNext;continue}switch(t){case Xt.Static:l==="/"?(c&&h(),a()):l===":"?(h(),t=Xt.Param):f();break;case Xt.EscapeNext:f(),t=i;break;case Xt.Param:l==="("?t=Xt.ParamRegExp:wx.test(l)?f():(h(),t=Xt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Xt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Xt.ParamRegExpEnd:u+=l;break;case Xt.ParamRegExpEnd:h(),t=Xt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Xt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),a(),s}const Rh="[^/]+?",Cx={sensitive:!1,strict:!1,start:!0,end:!0};var mn=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(mn||{});const Rx=/[.+*?^${}()[\]/\\]/g;function Px(n,e){const t=vt({},Cx,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[mn.Root];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=mn.Segment+(t.sensitive?mn.BonusCaseSensitive:0);if(f.type===Es.Static)h||(s+="/"),s+=f.value.replace(Rx,"\\$&"),d+=mn.Static;else if(f.type===Es.Param){const{value:_,repeatable:v,optional:g,regexp:p}=f;r.push({name:_,repeatable:v,optional:g});const M=p||Rh;if(M!==Rh){d+=mn.BonusCustomRegExp;try{`${M}`}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+w.message)}}let b=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(b=g&&c.length<2?`(?:/${b})`:"/"+b),g&&(b+="?"),s+=b,d+=mn.Dynamic,g&&(d+=mn.BonusOptional),v&&(d+=mn.BonusRepeatable),M===".*"&&(d+=mn.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=mn.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=r[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===Es.Static)u+=d.value;else if(d.type===Es.Param){const{value:_,repeatable:v,optional:g}=d,p=_ in c?c[_]:"";if(Kn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Kn(p)?p.join("/"):p;if(!M)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function Dx(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===mn.Static+mn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===mn.Static+mn.Segment?1:-1:0}function Sp(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Dx(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Ph(i))return 1;if(Ph(s))return-1}return s.length-i.length}function Ph(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Lx={strict:!1,end:!0,sensitive:!1};function Ix(n,e,t){const i=Px(Ax(n.path),t),s=vt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ux(n,e){const t=[],i=new Map;e=Mh(Lx,e);function s(h){return i.get(h)}function r(h,f,d){const _=!d,v=Lh(h);v.aliasOf=d&&d.record;const g=Mh(e,h),p=[v];if("alias"in h){const w=typeof h.alias=="string"?[h.alias]:h.alias;for(const F of w)p.push(Lh(vt({},v,{components:d?d.record.components:v.components,path:F,aliasOf:d?d.record:v})))}let M,b;for(const w of p){const{path:F}=w;if(f&&F[0]!=="/"){const D=f.record.path,L=D[D.length-1]==="/"?"":"/";w.path=f.record.path+(F&&L+F)}if(M=Ix(w,f,g),d?d.alias.push(M):(b=b||M,b!==M&&b.alias.push(M),_&&h.name&&!Ih(M)&&a(h.name)),bp(M)&&l(M),v.children){const D=v.children;for(let L=0;L<D.length;L++)r(D[L],M,d&&d.children[L])}d=d||M}return b?()=>{a(b)}:ta}function a(h){if(xp(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(a),h.alias.forEach(a))}}function o(){return t}function l(h){const f=Ox(h,t);t.splice(f,0,h),h.record.name&&!Ih(h)&&i.set(h.record.name,h)}function c(h,f){let d,_={},v,g;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw xr(kt.MATCHER_NOT_FOUND,{location:h});g=d.record.name,_=vt(Dh(f.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),h.params&&Dh(h.params,d.keys.map(b=>b.name))),v=d.stringify(_)}else if(h.path!=null)v=h.path,d=t.find(b=>b.re.test(v)),d&&(_=d.parse(v),g=d.record.name);else{if(d=f.name?i.get(f.name):t.find(b=>b.re.test(f.path)),!d)throw xr(kt.MATCHER_NOT_FOUND,{location:h,currentLocation:f});g=d.record.name,_=vt({},f.params,h.params),v=d.stringify(_)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:g,path:v,params:_,matched:p,meta:Fx(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function Dh(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Lh(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Nx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Nx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ih(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Fx(n){return n.reduce((e,t)=>vt(e,t.meta),{})}function Ox(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;Sp(n,e[r])<0?i=r:t=r+1}const s=Bx(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Bx(n){let e=n;for(;e=e.parent;)if(bp(e)&&Sp(n,e)===0)return e}function bp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Uh(n){const e=ci(Au),t=ci(Cu),i=_n(()=>{const l=li(n.to);return e.resolve(l)}),s=_n(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(gr.bind(null,u));if(f>-1)return f;const d=Nh(l[c-2]);return c>1&&Nh(u)===d&&h[h.length-1].path!==d?h.findIndex(gr.bind(null,l[c-2])):f}),r=_n(()=>s.value>-1&&Hx(t.params,i.value.params)),a=_n(()=>s.value>-1&&s.value===t.matched.length-1&&gp(t.params,i.value.params));function o(l={}){if(Vx(l)){const c=e[li(n.replace)?"replace":"push"](li(n.to)).catch(ta);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:_n(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function kx(n){return n.length===1?n[0]:n}const zx=Id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Uh,setup(n,{slots:e}){const t=Cs(Uh(n)),{options:i}=ci(Au),s=_n(()=>({[Fh(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Fh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&kx(e.default(t));return n.custom?r:lp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Ru=zx;function Vx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Hx(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Kn(s)||s.length!==i.length||i.some((r,a)=>r.valueOf()!==s[a].valueOf()))return!1}return!0}function Nh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Fh=(n,e,t)=>n??e??t,Gx=Id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ci(uc),s=_n(()=>n.route||i.value),r=ci(Ah,0),a=_n(()=>{let c=li(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),o=_n(()=>s.value.matched[a.value]);ho(Ah,_n(()=>a.value+1)),ho(_x,o),ho(uc,s);const l=Ci();return Kr(()=>[l.value,o.value,n.name],([c,u,h],[f,d,_])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!gr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=o.value,f=h&&h.components[u];if(!f)return Oh(t.default,{Component:f,route:c});const d=h.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=lp(f,vt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Oh(t.default,{Component:g,route:c})||g}}});function Oh(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Mp=Gx;function Wx(n){const e=Ux(n.routes,n),t=n.parseQuery||gx,i=n.stringifyQuery||wh,s=n.history,r=Ur(),a=Ur(),o=Ur(),l=Md(Hi);let c=Hi;rr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ul.bind(null,k=>""+k),h=ul.bind(null,Qg),f=ul.bind(null,pa);function d(k,le){let ve,be;return xp(k)?(ve=e.getRecordMatcher(k),be=le):be=k,e.addRoute(be,ve)}function _(k){const le=e.getRecordMatcher(k);le&&e.removeRoute(le)}function v(){return e.getRoutes().map(k=>k.record)}function g(k){return!!e.getRecordMatcher(k)}function p(k,le){if(le=vt({},le||l.value),typeof k=="string"){const G=hl(t,k,le.path),E=e.resolve({path:G.path},le),ce=s.createHref(G.fullPath);return vt(G,E,{params:f(E.params),hash:pa(G.hash),redirectedFrom:void 0,href:ce})}let ve;if(k.path!=null)ve=vt({},k,{path:hl(t,k.path,le.path).path});else{const G=vt({},k.params);for(const E in G)G[E]==null&&delete G[E];ve=vt({},k,{params:h(G)}),le.params=h(le.params)}const be=e.resolve(ve,le),ke=k.hash||"";be.params=u(f(be.params));const I=nx(i,vt({},k,{hash:Kg(ke),path:be.path})),U=s.createHref(I);return vt({fullPath:I,hash:ke,query:i===wh?xx(k.query):k.query||{}},be,{redirectedFrom:void 0,href:U})}function M(k){return typeof k=="string"?hl(t,k,l.value.path):vt({},k)}function b(k,le){if(c!==k)return xr(kt.NAVIGATION_CANCELLED,{from:le,to:k})}function w(k){return L(k)}function F(k){return w(vt(M(k),{replace:!0}))}function D(k,le){const ve=k.matched[k.matched.length-1];if(ve&&ve.redirect){const{redirect:be}=ve;let ke=typeof be=="function"?be(k,le):be;return typeof ke=="string"&&(ke=ke.includes("?")||ke.includes("#")?ke=M(ke):{path:ke},ke.params={}),vt({query:k.query,hash:k.hash,params:ke.path!=null?{}:k.params},ke)}}function L(k,le){const ve=c=p(k),be=l.value,ke=k.state,I=k.force,U=k.replace===!0,G=D(ve,be);if(G)return L(vt(M(G),{state:typeof G=="object"?vt({},ke,G.state):ke,force:I,replace:U}),le||ve);const E=ve;E.redirectedFrom=le;let ce;return!I&&ix(i,be,ve)&&(ce=xr(kt.NAVIGATION_DUPLICATED,{to:E,from:be}),Oe(be,be,!0,!1)),(ce?Promise.resolve(ce):y(E,be)).catch(se=>vi(se)?vi(se,kt.NAVIGATION_GUARD_REDIRECT)?se:Se(se):$(se,E,be)).then(se=>{if(se){if(vi(se,kt.NAVIGATION_GUARD_REDIRECT))return L(vt({replace:U},M(se.to),{state:typeof se.to=="object"?vt({},ke,se.to.state):ke,force:I}),le||E)}else se=Y(E,be,!0,U,ke);return O(E,be,se),se})}function X(k,le){const ve=b(k,le);return ve?Promise.reject(ve):Promise.resolve()}function C(k){const le=Ie.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(k):k()}function y(k,le){let ve;const[be,ke,I]=vx(k,le);ve=dl(be.reverse(),"beforeRouteLeave",k,le);for(const G of be)G.leaveGuards.forEach(E=>{ve.push($i(E,k,le))});const U=X.bind(null,k,le);return ve.push(U),K(ve).then(()=>{ve=[];for(const G of r.list())ve.push($i(G,k,le));return ve.push(U),K(ve)}).then(()=>{ve=dl(ke,"beforeRouteUpdate",k,le);for(const G of ke)G.updateGuards.forEach(E=>{ve.push($i(E,k,le))});return ve.push(U),K(ve)}).then(()=>{ve=[];for(const G of I)if(G.beforeEnter)if(Kn(G.beforeEnter))for(const E of G.beforeEnter)ve.push($i(E,k,le));else ve.push($i(G.beforeEnter,k,le));return ve.push(U),K(ve)}).then(()=>(k.matched.forEach(G=>G.enterCallbacks={}),ve=dl(I,"beforeRouteEnter",k,le,C),ve.push(U),K(ve))).then(()=>{ve=[];for(const G of a.list())ve.push($i(G,k,le));return ve.push(U),K(ve)}).catch(G=>vi(G,kt.NAVIGATION_CANCELLED)?G:Promise.reject(G))}function O(k,le,ve){o.list().forEach(be=>C(()=>be(k,le,ve)))}function Y(k,le,ve,be,ke){const I=b(k,le);if(I)return I;const U=le===Hi,G=rr?history.state:{};ve&&(be||U?s.replace(k.fullPath,vt({scroll:U&&G&&G.scroll},ke)):s.push(k.fullPath,ke)),l.value=k,Oe(k,le,ve,U),Se()}let Z;function he(){Z||(Z=s.listen((k,le,ve)=>{if(!$e.listening)return;const be=p(k),ke=D(be,$e.currentRoute.value);if(ke){L(vt(ke,{replace:!0,force:!0}),be).catch(ta);return}c=be;const I=l.value;rr&&hx(Th(I.fullPath,ve.delta),Go()),y(be,I).catch(U=>vi(U,kt.NAVIGATION_ABORTED|kt.NAVIGATION_CANCELLED)?U:vi(U,kt.NAVIGATION_GUARD_REDIRECT)?(L(vt(M(U.to),{force:!0}),be).then(G=>{vi(G,kt.NAVIGATION_ABORTED|kt.NAVIGATION_DUPLICATED)&&!ve.delta&&ve.type===lc.pop&&s.go(-1,!1)}).catch(ta),Promise.reject()):(ve.delta&&s.go(-ve.delta,!1),$(U,be,I))).then(U=>{U=U||Y(be,I,!1),U&&(ve.delta&&!vi(U,kt.NAVIGATION_CANCELLED)?s.go(-ve.delta,!1):ve.type===lc.pop&&vi(U,kt.NAVIGATION_ABORTED|kt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),O(be,I,U)}).catch(ta)}))}let ee=Ur(),J=Ur(),ne;function $(k,le,ve){Se(k);const be=J.list();return be.length?be.forEach(ke=>ke(k,le,ve)):console.error(k),Promise.reject(k)}function xe(){return ne&&l.value!==Hi?Promise.resolve():new Promise((k,le)=>{ee.add([k,le])})}function Se(k){return ne||(ne=!k,he(),ee.list().forEach(([le,ve])=>k?ve(k):le()),ee.reset()),k}function Oe(k,le,ve,be){const{scrollBehavior:ke}=n;if(!rr||!ke)return Promise.resolve();const I=!ve&&fx(Th(k.fullPath,0))||(be||!ve)&&history.state&&history.state.scroll||null;return wd().then(()=>ke(k,le,I)).then(U=>U&&ux(U)).catch(U=>$(U,k,le))}const pe=k=>s.go(k);let _e;const Ie=new Set,$e={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:v,resolve:p,options:n,push:w,replace:F,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:J.add,isReady:xe,install(k){k.component("RouterLink",Ru),k.component("RouterView",Mp),k.config.globalProperties.$router=$e,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>li(l)}),rr&&!_e&&l.value===Hi&&(_e=!0,w(s.location).catch(be=>{}));const le={};for(const be in Hi)Object.defineProperty(le,be,{get:()=>l.value[be],enumerable:!0});k.provide(Au,$e),k.provide(Cu,bd(le)),k.provide(uc,l);const ve=k.unmount;Ie.add(k),k.unmount=function(){Ie.delete(k),Ie.size<1&&(c=Hi,Z&&Z(),Z=null,l.value=Hi,_e=!1,ne=!1),ve()}}};function K(k){return k.reduce((le,ve)=>le.then(()=>C(ve)),Promise.resolve())}return $e}function Xx(n){return ci(Cu)}const Yx={class:"app-frame"},jx={class:"app-header"},qx={class:"app-nav"},Zx={__name:"App",setup(n){const e=Xx(),t=[{name:"Home",to:"/"},{name:"Solar Scape",to:"/projects/solar-scape"}];return(i,s)=>(Qt(),on("div",Yx,[ze("header",jx,[s[0]||(s[0]=ze("h1",{class:"app-header__title"},"MVRDV NEXT",-1)),ze("nav",qx,[(Qt(),on(In,null,Eo(t,r=>cn(li(Ru),{key:r.to,to:r.to,class:ws(["app-nav__link",{"app-nav__link--active":li(e).path===r.to}])},{default:Su(()=>[Co(pn(r.name),1)]),_:2},1032,["to","class"])),64))])]),cn(li(Mp))]))}},Kx={class:"home-view"},$x={class:"project-grid"},Jx={__name:"HomeView",setup(n){const e=[{title:"Solar Scape",path:"/projects/solar-scape",description:"Interactive Rhino plot viewer with Plot-linked voxel metadata and a coordinated analysis sidebar."}];return(t,i)=>(Qt(),on("main",Kx,[i[1]||(i[1]=ze("section",{class:"hero-card"},[ze("p",{class:"hero-card__eyebrow"},"MVRDV NEXT technologies"),ze("h2",null,"Solar Scape"),ze("p",null,[Co(" The app is structured around a single Three.js experience under "),ze("strong",null,"src/projects/solar-scape"),Co(" with dedicated viewer, loader, config, and metadata modules. ")])],-1)),ze("section",$x,[(Qt(),on(In,null,Eo(e,s=>cn(li(Ru),{key:s.path,to:s.path,class:"project-card"},{default:Su(()=>[i[0]||(i[0]=ze("p",{class:"project-card__eyebrow"},"Project",-1)),ze("h3",null,pn(s.title),1),ze("p",null,pn(s.description),1)]),_:2},1032,["to"])),64))])]))}},Qx="/Solar_Scape/icons/transparency.svg",e_="/Solar_Scape/icons/view.svg",t_="/Solar_Scape/icons/reset.svg",n_="/Solar_Scape/icons/sun.svg",Bh="/Solar_Scape/",Si={title:"Solar Scape",staticContextModelPath:`${Bh}context/260311 context.3dm`,sunVoxelModelPath:`${Bh}sun_voxel/Voxel_v3.3dm`,rhinoLibraryPath:"https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/",clickSelectionMaxDurationMs:180,clickSelectionMaxMovementPx:6,selectionMetadata:["Plot"],requiredMetadata:["Plot","Max_height","Occupied_voxels","Max_voxels","Potential"],filterableFields:["Max_height","Occupied_voxels","Max_voxels","Potential"],fieldLabels:{Plot:"Plot",Max_height:"Max height",Occupied_voxels:"Current volume",Max_voxels:"Max volume",Potential:"Buildable potential"},filterBounds:{Max_height:{min:200,max:200,step:1},Occupied_voxels:{min:0,max:3500,step:1},Max_voxels:{min:0,max:3e4,step:1},Potential:{min:0,max:150,step:1}},valuePrefixes:{Potential:"x"}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="181",ri={ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i_=0,kh=1,s_=2,r_=0,yp=1,a_=2,Ri=3,us=0,Cn=1,Un=2,$t=0,fr=1,hc=2,zh=3,Vh=4,Ep=5,Ii=100,o_=101,l_=102,c_=103,u_=104,fc=200,h_=201,f_=202,d_=203,dc=204,pc=205,Tp=206,p_=207,wp=208,m_=209,g_=210,x_=211,__=212,v_=213,S_=214,mc=0,gc=1,xc=2,_r=3,_c=4,vc=5,Sc=6,bc=7,Ap=0,b_=1,M_=2,ls=0,Cp=1,Rp=2,Pp=3,Dp=4,Lp=5,Ip=6,Up=7,Np=300,vr=301,Sr=302,Mc=303,yc=304,Wo=306,Ps=1e3,vn=1001,Ec=1002,Sn=1003,y_=1004,Pa=1005,Jt=1006,pl=1007,ss=1008,di=1009,Fp=1010,Op=1011,ma=1012,Du=1013,Ds=1014,Fn=1015,Yt=1016,Lu=1017,Iu=1018,br=1020,Bp=35902,kp=35899,zp=1021,Vp=1022,tn=1023,ga=1026,Mr=1027,Ts=1028,Uu=1029,ts=1030,Nu=1031,Fu=1033,mo=33776,go=33777,xo=33778,_o=33779,Tc=35840,wc=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Dc=37496,Lc=37808,Ic=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Vc=37817,Hc=37818,Gc=37819,Wc=37820,Xc=37821,Yc=36492,jc=36494,qc=36495,Zc=36283,Kc=36284,$c=36285,Jc=36286,E_=3200,Hp=3201,Ou=0,T_=1,ns="",wn="srgb",Ln="srgb-linear",Po="linear",yt="srgb",ks=7680,Hh=519,w_=512,A_=513,C_=514,Gp=515,R_=516,P_=517,D_=518,L_=519,Qc=35044,Gh="300 es",ai=2e3,Do=2001;function Wp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const I_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Da(n,e){return new I_[n](e)}function xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U_(){const n=xa("canvas");return n.style.display="block",n}const Wh={};function Lo(...n){const e="THREE."+n.shift();console.log(e,...n)}function lt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Bt(...n){const e="THREE."+n.shift();console.error(e,...n)}function _a(...n){const e=n.join(" ");e in Wh||(Wh[e]=!0,lt(...n))}function N_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xh=1234567;const na=Math.PI/180,yr=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function Bu(n,e){return(n%e+e)%e}function F_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function O_(n,e,t){return n!==e?(t-n)/(e-n):0}function ia(n,e,t){return(1-t)*n+t*e}function B_(n,e,t,i){return ia(n,e,1-Math.exp(-t*i))}function k_(n,e=1){return e-Math.abs(Bu(n,e*2)-e)}function z_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function V_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function H_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function G_(n,e){return n+Math.random()*(e-n)}function W_(n){return n*(.5-Math.random())}function X_(n){n!==void 0&&(Xh=n);let e=Xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(n){return n*na}function j_(n){return n*yr}function q_(n){return(n&n-1)===0&&n!==0}function Z_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function K_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $_(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*d,o*u,o*c);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ji={DEG2RAD:na,RAD2DEG:yr,generateUUID:Ni,clamp:mt,euclideanModulo:Bu,mapLinear:F_,inverseLerp:O_,lerp:ia,damp:B_,pingpong:k_,smoothstep:z_,smootherstep:V_,randInt:H_,randFloat:G_,randFloatSpread:W_,seededRandom:X_,degToRad:Y_,radToDeg:j_,isPowerOfTwo:q_,ceilPowerOfTwo:Z_,floorPowerOfTwo:K_,setQuaternionFromProperEuler:$_,normalize:Et,denormalize:Yn};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ls{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],_=r[a+2],v=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==_){let g=l*f+c*d+u*_+h*v;g<0&&(f=-f,d=-d,_=-_,v=-v,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+v*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+v*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new Q,Yh=new Ls;class ut{constructor(e,t,i,s,r,a,o,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],v=s[0],g=s[3],p=s[6],M=s[1],b=s[4],w=s[7],F=s[2],D=s[5],L=s[8];return r[0]=a*v+o*M+l*F,r[3]=a*g+o*b+l*D,r[6]=a*p+o*w+l*L,r[1]=c*v+u*M+h*F,r[4]=c*g+u*b+h*D,r[7]=c*p+u*w+h*L,r[2]=f*v+d*M+_*F,r[5]=f*g+d*b+_*D,r[8]=f*p+d*w+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,_=t*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new ut,jh=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){const n={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ns?Po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ln]:{primaries:e,whitePoint:i,transfer:Po,toXYZ:jh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:jh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}const _t=J_();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zs;class Q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zs===void 0&&(zs=xa("canvas")),zs.width=e.width,zs.height=e.height;const s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=zs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ev=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xl(s[a].image)):r.push(xl(s[a]))}else r=xl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Q_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let tv=0;const _l=new Q;class nn extends Us{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=vn,s=vn,r=Jt,a=ss,o=tn,l=di,c=nn.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Ni(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Np;nn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,w=(d+1)/2,F=(p+1)/2,D=(u+f)/4,L=(h+v)/4,X=(_+g)/4;return b>w&&b>F?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=D/i,r=L/i):w>F?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=D/s,r=X/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=L/r,s=X/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nv extends Us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new nn(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ku(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends nv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xp extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iv extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Ia.subVectors(this.max,Nr),Vs.subVectors(e.a,Nr),Hs.subVectors(e.b,Nr),Gs.subVectors(e.c,Nr),Gi.subVectors(Hs,Vs),Wi.subVectors(Gs,Hs),gs.subVectors(Vs,Gs);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-gs.z,gs.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,gs.z,0,-gs.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-gs.y,gs.x,0];return!vl(t,Vs,Hs,Gs,Ia)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Vs,Hs,Gs,Ia))?!1:(Ua.crossVectors(Gi,Wi),t=[Ua.x,Ua.y,Ua.z],vl(t,Vs,Hs,Gs,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Vn=new Q,La=new wr,Vs=new Q,Hs=new Q,Gs=new Q,Gi=new Q,Wi=new Q,gs=new Q,Nr=new Q,Ia=new Q,Ua=new Q,xs=new Q;function vl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){xs.fromArray(n,r);const o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),u=i.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const sv=new wr,Fr=new Q,Sl=new Q;class Ar{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Sl)),this.expandByPoint(Fr.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mi=new Q,bl=new Q,Na=new Q,Xi=new Q,Ml=new Q,Fa=new Q,yl=new Q;class Ma{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bl.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(bl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Na),o=Xi.dot(this.direction),l=-Xi.dot(Na),c=Xi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bl).addScaledVector(Na,f),d}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),s=Mi.dot(Mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,s,r){Ml.subVectors(t,e),Fa.subVectors(i,e),yl.crossVectors(Ml,Fa);let a=this.direction.dot(yl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(Fa.crossVectors(Xi,Fa));if(l<0)return null;const c=o*this.direction.dot(Ml.cross(Xi));if(c<0||l+c>a)return null;const u=-o*Xi.dot(yl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,r,a,o,l,c,u,h,f,d,_,v,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,d,_,v,g)}set(e,t,i,s,r,a,o,l,c,u,h,f,d,_,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,v=c*h;t[0]=f+v*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,av)}lookAt(e,t,i){const s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(i,Pn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(i,Pn)),Yi.normalize(),Oa.crossVectors(Pn,Yi),s[0]=Yi.x,s[4]=Oa.x,s[8]=Pn.x,s[1]=Yi.y,s[5]=Oa.y,s[9]=Pn.y,s[2]=Yi.z,s[6]=Oa.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],v=i[6],g=i[10],p=i[14],M=i[3],b=i[7],w=i[11],F=i[15],D=s[0],L=s[4],X=s[8],C=s[12],y=s[1],O=s[5],Y=s[9],Z=s[13],he=s[2],ee=s[6],J=s[10],ne=s[14],$=s[3],xe=s[7],Se=s[11],Oe=s[15];return r[0]=a*D+o*y+l*he+c*$,r[4]=a*L+o*O+l*ee+c*xe,r[8]=a*X+o*Y+l*J+c*Se,r[12]=a*C+o*Z+l*ne+c*Oe,r[1]=u*D+h*y+f*he+d*$,r[5]=u*L+h*O+f*ee+d*xe,r[9]=u*X+h*Y+f*J+d*Se,r[13]=u*C+h*Z+f*ne+d*Oe,r[2]=_*D+v*y+g*he+p*$,r[6]=_*L+v*O+g*ee+p*xe,r[10]=_*X+v*Y+g*J+p*Se,r[14]=_*C+v*Z+g*ne+p*Oe,r[3]=M*D+b*y+w*he+F*$,r[7]=M*L+b*O+w*ee+F*xe,r[11]=M*X+b*Y+w*J+F*Se,r[15]=M*C+b*Z+w*ne+F*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+g*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+p*(-s*o*u-t*l*h+t*o*f+s*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],v=e[13],g=e[14],p=e[15],M=h*g*c-v*f*c+v*l*d-o*g*d-h*l*p+o*f*p,b=_*f*c-u*g*c-_*l*d+a*g*d+u*l*p-a*f*p,w=u*v*c-_*h*c+_*o*d-a*v*d-u*o*p+a*h*p,F=_*h*l-u*v*l-_*o*f+a*v*f+u*o*g-a*h*g,D=t*M+i*b+s*w+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=M*L,e[1]=(v*f*r-h*g*r-v*s*d+i*g*d+h*s*p-i*f*p)*L,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*p+i*l*p)*L,e[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*d-i*l*d)*L,e[4]=b*L,e[5]=(u*g*r-_*f*r+_*s*d-t*g*d-u*s*p+t*f*p)*L,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*d+t*l*d)*L,e[8]=w*L,e[9]=(_*h*r-u*v*r-_*i*d+t*v*d+u*i*p-t*h*p)*L,e[10]=(a*v*r-_*o*r+_*i*c-t*v*c-a*i*p+t*o*p)*L,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*L,e[12]=F*L,e[13]=(u*v*s-_*h*s+_*i*f-t*v*f-u*i*g+t*h*g)*L,e[14]=(_*o*s-a*v*s-_*i*l+t*v*l+a*i*g-t*o*g)*L,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,_=r*h,v=a*u,g=a*h,p=o*h,M=l*c,b=l*u,w=l*h,F=i.x,D=i.y,L=i.z;return s[0]=(1-(v+p))*F,s[1]=(d+w)*F,s[2]=(_-b)*F,s[3]=0,s[4]=(d-w)*D,s[5]=(1-(f+p))*D,s[6]=(g+M)*D,s[7]=0,s[8]=(_+b)*L,s[9]=(g-M)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ws.set(s[0],s[1],s[2]).length();const a=Ws.set(s[4],s[5],s[6]).length(),o=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);const c=1/r,u=1/a,h=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ai,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let _,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===ai)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Do)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ai,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let _,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===ai)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===Do)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ws=new Q,Hn=new Mt,rv=new Q(0,0,0),av=new Q(1,1,1),Yi=new Q,Oa=new Q,Pn=new Q,Zh=new Mt,Kh=new Ls;class pi{constructor(e=0,t=0,i=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const $h=new Q,Xs=new Ls,yi=new Mt,Ba=new Q,Or=new Q,lv=new Q,cv=new Ls,Jh=new Q(1,0,0),Qh=new Q(0,1,0),ef=new Q(0,0,1),tf={type:"added"},uv={type:"removed"},Ys={type:"childadded",child:null},El={type:"childremoved",child:null};class Dt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new Q,t=new pi,i=new Ls,s=new Q(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ut}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Or,Ba,this.up):yi.lookAt(Ba,Or,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(yi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tf),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uv),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tf),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new Q(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new Q,Ei=new Q,Tl=new Q,Ti=new Q,js=new Q,qs=new Q,nf=new Q,wl=new Q,Al=new Q,Cl=new Q,Rl=new At,Pl=new At,Dl=new At;class Bn{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),Ei.subVectors(i,t),Tl.subVectors(e,t);const a=Gn.dot(Gn),o=Gn.dot(Ei),l=Gn.dot(Tl),c=Ei.dot(Ei),u=Ei.dot(Tl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Rl.setScalar(0),Pl.setScalar(0),Dl.setScalar(0),Rl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,i),Dl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Pl,r.y),a.addScaledVector(Dl,r.z),a}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),Ei.subVectors(e,t),Gn.cross(Ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Gn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;js.subVectors(s,i),qs.subVectors(r,i),wl.subVectors(e,i);const l=js.dot(wl),c=qs.dot(wl);if(l<=0&&c<=0)return t.copy(i);Al.subVectors(e,s);const u=js.dot(Al),h=qs.dot(Al);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(js,a);Cl.subVectors(e,r);const d=js.dot(Cl),_=qs.dot(Cl);if(_>=0&&d<=_)return t.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(qs,o);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return nf.subVectors(r,s),o=(h-u)/(h-u+(d-_)),t.copy(s).addScaledVector(nf,o);const p=1/(g+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(js,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=Bu(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=wn){function i(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const i=Yp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return _t.workingToColorSpace(an.copy(this),e),Math.round(mt(an.r*255,0,255))*65536+Math.round(mt(an.g*255,0,255))*256+Math.round(mt(an.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=wn){_t.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ka);const i=ia(ji.h,ka.h,t),s=ia(ji.s,ka.s,t),r=ia(ji.l,ka.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new st;st.NAMES=Yp;let hv=0;class Vi extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=fr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jp extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ui=fv();function fv(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function dv(n){Math.abs(n)>65504&&lt("DataUtils.toHalfFloat(): Value out of range."),n=mt(n,-65504,65504),Ui.floatView[0]=n;const e=Ui.uint32View[0],t=e>>23&511;return Ui.baseTable[t]+((e&8388607)>>Ui.shiftTable[t])}function pv(n){const e=n>>10;return Ui.uint32View[0]=Ui.mantissaTable[Ui.offsetTable[e]+(n&1023)]+Ui.exponentTable[e],Ui.floatView[0]}class sf{static toHalfFloat(e){return dv(e)}static fromHalfFloat(e){return pv(e)}}const Vt=new Q,za=new Qe;let mv=0;class bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class qp extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zp extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ui extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gv=0;const On=new Mt,Il=new Dt,Zs=new Q,Dn=new wr,Br=new wr,Kt=new Q;class Rn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?Zp:qp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Dn.min,Br.min),Dn.expandByPoint(Kt),Kt.addVectors(Dn.max,Br.max),Dn.expandByPoint(Kt)):(Dn.expandByPoint(Br.min),Dn.expandByPoint(Br.max))}Dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),Kt.add(Zs)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let X=0;X<i.count;X++)o[X]=new Q,l[X]=new Q;const c=new Q,u=new Q,h=new Q,f=new Qe,d=new Qe,_=new Qe,v=new Q,g=new Q;function p(X,C,y){c.fromBufferAttribute(i,X),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),f.fromBufferAttribute(r,X),d.fromBufferAttribute(r,C),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const O=1/(d.x*_.y-_.x*d.y);isFinite(O)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(O),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(O),o[X].add(v),o[C].add(v),o[y].add(v),l[X].add(g),l[C].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let X=0,C=M.length;X<C;++X){const y=M[X],O=y.start,Y=y.count;for(let Z=O,he=O+Y;Z<he;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new Q,w=new Q,F=new Q,D=new Q;function L(X){F.fromBufferAttribute(s,X),D.copy(F);const C=o[X];b.copy(C),b.sub(F.multiplyScalar(F.dot(C))).normalize(),w.crossVectors(D,C);const O=w.dot(l[X])<0?-1:1;a.setXYZW(X,b.x,b.y,b.z,O)}for(let X=0,C=M.length;X<C;++X){const y=M[X],O=y.start,Y=y.count;for(let Z=O,he=O+Y;Z<he;Z+=3)L(e.getX(Z+0)),L(e.getX(Z+1)),L(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new Q,r=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q,h=new Q;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new bn(f,u,h)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rf=new Mt,_s=new Ma,Va=new Ar,af=new Q,Ha=new Q,Ga=new Q,Wa=new Q,Ul=new Q,Xa=new Q,of=new Q,Ya=new Q;class mi extends Dt{constructor(e=new Rn,t=new jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ul.fromBufferAttribute(h,e),a?Xa.addScaledVector(Ul,u):Xa.addScaledVector(Ul.sub(t),u))}t.add(Xa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Va.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Va,af)===null||_s.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(rf.copy(r).invert(),_s.copy(e.ray).applyMatrix4(rf),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let w=M,F=b;w<F;w+=3){const D=o.getX(w),L=o.getX(w+1),X=o.getX(w+2);s=ja(this,p,e,i,c,u,h,D,L,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=o.getX(g),b=o.getX(g+1),w=o.getX(g+2);s=ja(this,a,e,i,c,u,h,M,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let w=M,F=b;w<F;w+=3){const D=w,L=w+1,X=w+2;s=ja(this,p,e,i,c,u,h,D,L,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=g,b=g+1,w=g+2;s=ja(this,a,e,i,c,u,h,M,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function xv(n,e,t,i,s,r,a,o){let l;if(e.side===Cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===us,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function ja(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ha),n.getVertexPosition(l,Ga),n.getVertexPosition(c,Wa);const u=xv(n,e,t,i,Ha,Ga,Wa,of);if(u){const h=new Q;Bn.getBarycoord(of,Ha,Ga,Wa,h),s&&(u.uv=Bn.getInterpolatedAttribute(s,o,l,c,h,new Qe)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,o,l,c,h,new Qe)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,h,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Q,materialIndex:0};Bn.getNormal(Ha,Ga,Wa,f.normal),u.face=f,u.barycoord=h}return u}class ya extends Rn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(h,2));function _(v,g,p,M,b,w,F,D,L,X,C){const y=w/L,O=F/X,Y=w/2,Z=F/2,he=D/2,ee=L+1,J=X+1;let ne=0,$=0;const xe=new Q;for(let Se=0;Se<J;Se++){const Oe=Se*O-Z;for(let pe=0;pe<ee;pe++){const _e=pe*y-Y;xe[v]=_e*M,xe[g]=Oe*b,xe[p]=he,c.push(xe.x,xe.y,xe.z),xe[v]=0,xe[g]=0,xe[p]=D>0?1:-1,u.push(xe.x,xe.y,xe.z),h.push(pe/L),h.push(1-Se/X),ne+=1}}for(let Se=0;Se<X;Se++)for(let Oe=0;Oe<L;Oe++){const pe=f+Oe+ee*Se,_e=f+Oe+ee*(Se+1),Ie=f+(Oe+1)+ee*(Se+1),$e=f+(Oe+1)+ee*Se;l.push(pe,_e,$e),l.push(_e,Ie,$e),$+=6}o.addGroup(d,$,C),d+=$,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const s in i)e[s]=i[s]}return e}function _v(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const rs={clone:Er,merge:dn};var vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vv,this.fragmentShader=Sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $p extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new Q,lf=new Qe,cf=new Qe;class An extends $p{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,$s=1;class bv extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(Ks,$s,e,t);s.layers=this.layers,this.add(s);const r=new An(Ks,$s,e,t);r.layers=this.layers,this.add(r);const a=new An(Ks,$s,e,t);a.layers=this.layers,this.add(a);const o=new An(Ks,$s,e,t);o.layers=this.layers,this.add(o);const l=new An(Ks,$s,e,t);l.layers=this.layers,this.add(l);const c=new An(Ks,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Jp extends nn{constructor(e=[],t=vr,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mv extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ya(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:$t});r.uniforms.tEquirect.value=t;const a=new mi(s,r),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=Jt),new bv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class qa extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yv={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ev extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new Q;class Tr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class em extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Js;const kr=new Q,Qs=new Q,er=new Q,tr=new Qe,zr=new Qe,tm=new Mt,Za=new Q,Vr=new Q,Ka=new Q,uf=new Qe,Fl=new Qe,hf=new Qe;class Tv extends Dt{constructor(e=new em){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qp(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Tr(i,3,0,!1)),Js.setAttribute("uv",new Tr(i,2,3,!1))}this.geometry=Js,this.material=e,this.center=new Qe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),tm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;$a(Za.set(-.5,-.5,0),er,a,Qs,s,r),$a(Vr.set(.5,-.5,0),er,a,Qs,s,r),$a(Ka.set(.5,.5,0),er,a,Qs,s,r),uf.set(0,0),Fl.set(1,0),hf.set(1,1);let o=e.ray.intersectTriangle(Za,Vr,Ka,!1,kr);if(o===null&&($a(Vr.set(-.5,.5,0),er,a,Qs,s,r),Fl.set(0,1),o=e.ray.intersectTriangle(Za,Ka,Vr,!1,kr),o===null))return;const l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:Bn.getInterpolation(kr,Za,Vr,Ka,uf,Fl,hf,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $a(n,e,t,i,s,r){tr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(zr.x=r*tr.x-s*tr.y,zr.y=s*tr.x+r*tr.y):zr.copy(tr),n.copy(e),n.x+=zr.x,n.y+=zr.y,n.applyMatrix4(tm)}class Vu extends nn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Sn,u=Sn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wv extends bn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ol=new Q,Av=new Q,Cv=new ut;class Qi{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ol.subVectors(i,t).cross(Av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cv.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Ar,Rv=new Qe(.5,.5),Ja=new Q;class Hu{constructor(e=new Qi,t=new Qi,i=new Qi,s=new Qi,r=new Qi,a=new Qi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],v=r[9],g=r[10],p=r[11],M=r[12],b=r[13],w=r[14],F=r[15];if(s[0].setComponents(c-a,d-u,p-_,F-M).normalize(),s[1].setComponents(c+a,d+u,p+_,F+M).normalize(),s[2].setComponents(c+o,d+h,p+v,F+b).normalize(),s[3].setComponents(c-o,d-h,p-v,F-b).normalize(),i)s[4].setComponents(l,f,g,w).normalize(),s[5].setComponents(c-l,d-f,p-g,F-w).normalize();else if(s[4].setComponents(c-l,d-f,p-g,F-w).normalize(),t===ai)s[5].setComponents(c+l,d+f,p+g,F+w).normalize();else if(t===Do)s[5].setComponents(l,f,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=Rv.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ja.x=s.normal.x>0?e.max.x:e.min.x,Ja.y=s.normal.y>0?e.max.y:e.min.y,Ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nm extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new Q,Uo=new Q,ff=new Mt,Hr=new Ma,Qa=new Ar,Bl=new Q,df=new Q;class Pv extends Dt{constructor(e=new Rn,t=new nm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Io.fromBufferAttribute(t,s-1),Uo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Io.distanceTo(Uo);e.setAttribute("lineDistance",new ui(i,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;ff.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(ff);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const p=u.getX(v),M=u.getX(v+1),b=eo(this,e,Hr,l,p,M,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(d),p=eo(this,e,Hr,l,v,g,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const p=eo(this,e,Hr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=eo(this,e,Hr,l,_-1,d,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eo(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Io.fromBufferAttribute(o,s),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(Io,Uo,Bl,df)>i)return;Bl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Bl);if(!(c<e.near||c>e.far))return{distance:c,point:df.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class eu extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pf=new Mt,tu=new Ma,to=new Ar,no=new Q;class Dv extends Dt{constructor(e=new Rn,t=new eu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;pf.copy(s).invert(),tu.copy(e.ray).applyMatrix4(pf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,v=d;_<v;_++){const g=c.getX(_);no.fromBufferAttribute(h,g),mf(no,g,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,v=d;_<v;_++)no.fromBufferAttribute(h,_),mf(no,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mf(n,e,t,i,s,r,a){const o=tu.distanceSqToPoint(n);if(o<t){const l=new Q;tu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class im extends nn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gu extends nn{constructor(e,t,i=Ds,s,r,a,o=Sn,l=Sn,c,u=ga,h=1){if(u!==ga&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sm extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xo extends Rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],v=[],g=[];for(let p=0;p<u;p++){const M=p*f-a;for(let b=0;b<c;b++){const w=b*h-r;_.push(w,-M,0),v.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const b=M+c*p,w=M+c*(p+1),F=M+1+c*(p+1),D=M+1+c*p;d.push(b,w,D),d.push(w,F,D)}this.setIndex(d),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(v,3)),this.setAttribute("uv",new ui(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lv extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wu extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iv extends Wu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uv extends Vi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class rm extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nv extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Fv{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ov=new Fv;class hs{constructor(e){this.manager=e!==void 0?e:Ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class Bv extends Error{constructor(e,t){super(e),this.response=t}}class ra extends hs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=sa.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:i,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&lt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let v=0;const g=new ReadableStream({start(p){M();function M(){h.read().then(({done:b,value:w})=>{if(b)p.close();else{v+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:d});for(let D=0,L=u.length;D<L;D++){const X=u[D];X.onProgress&&X.onProgress(F)}p.enqueue(w),M()}},b=>{p.error(b)})}}});return new Response(g)}else throw new Bv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{sa.add(`file:${e}`,c);const u=wi[e];delete wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const nr=new WeakMap;class kv extends hs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=sa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=nr.get(a);h===void 0&&(h=[],nr.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=xa("img");function l(){u(),t&&t(this);const h=nr.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}nr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),sa.remove(`image:${e}`);const f=nr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}nr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),sa.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class zv extends hs{constructor(e){super(e)}load(e,t,i,s){const r=this,a=new Vu,o=new ra(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{u(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:vn,a.wrapT=c.wrapT!==void 0?c.wrapT:vn,a.magFilter=c.magFilter!==void 0?c.magFilter:Jt,a.minFilter=c.minFilter!==void 0?c.minFilter:Jt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ss),c.mipmapCount===1&&(a.minFilter=Jt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}}class Vv extends hs{constructor(e){super(e)}load(e,t,i,s){const r=new nn,a=new kv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Cr extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hv extends Cr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kl=new Mt,gf=new Q,xf=new Q;class Xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hu,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gv extends Xu{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wv extends Cr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _f=new Mt,Gr=new Q,zl=new Q;class Xv extends Xu{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gr),zl.copy(i.position),zl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zl),i.updateMatrixWorld(),s.makeTranslation(-Gr.x,-Gr.y,-Gr.z),_f.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f,i.coordinateSystem,i.reversedDepth)}}class Yv extends Cr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yo extends $p{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jv extends Xu{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nu extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new jv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qv extends Cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zv extends Cr{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Kv extends Rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $v extends hs{constructor(e){super(e)}load(e,t,i,s){const r=this,a=new ra(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Bt(l),r.manager.itemError(e)}},i,s)}parse(e){const t={},i={};function s(d,_){if(t[_]!==void 0)return t[_];const g=d.interleavedBuffers[_],p=r(d,g.buffer),M=Da(g.type,p),b=new Qp(M,g.stride);return b.uuid=g.uuid,t[_]=b,b}function r(d,_){if(i[_]!==void 0)return i[_];const g=d.arrayBuffers[_],p=new Uint32Array(g).buffer;return i[_]=p,p}const a=e.isInstancedBufferGeometry?new Kv:new Rn,o=e.data.index;if(o!==void 0){const d=Da(o.type,o.array);a.setIndex(new bn(d,1))}const l=e.data.attributes;for(const d in l){const _=l[d];let v;if(_.isInterleavedBufferAttribute){const g=s(e.data,_.data);v=new Tr(g,_.itemSize,_.offset,_.normalized)}else{const g=Da(_.type,_.array),p=_.isInstancedBufferAttribute?wv:bn;v=new p(g,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),_.usage!==void 0&&v.setUsage(_.usage),a.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const _=c[d],v=[];for(let g=0,p=_.length;g<p;g++){const M=_[g];let b;if(M.isInterleavedBufferAttribute){const w=s(e.data,M.data);b=new Tr(w,M.itemSize,M.offset,M.normalized)}else{const w=Da(M.type,M.array);b=new bn(w,M.itemSize,M.normalized)}M.name!==void 0&&(b.name=M.name),v.push(b)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,_=h.length;d!==_;++d){const v=h[d];a.addGroup(v.start,v.count,v.materialIndex)}const f=e.data.boundingSphere;return f!==void 0&&(a.boundingSphere=new Ar().fromJSON(f)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Jv extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const vf=new Mt;class eS{constructor(e,t,i=0,s=1/0){this.ray=new Ma(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(e,t=!0,i=[]){return iu(e,this,i,t),i.sort(Sf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)iu(e[s],this,i,t);return i.sort(Sf),i}}function Sf(n,e){return n.distance-e.distance}function iu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)iu(r[a],e,t,!0)}}class bf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tS extends Us{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Mf(n,e,t,i){const s=nS(i);switch(t){case zp:return n*e;case Ts:return n*e/s.components*s.byteLength;case Uu:return n*e/s.components*s.byteLength;case ts:return n*e*2/s.components*s.byteLength;case Nu:return n*e*2/s.components*s.byteLength;case Vp:return n*e*3/s.components*s.byteLength;case tn:return n*e*4/s.components*s.byteLength;case Fu:return n*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xo:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wc:case Cc:return Math.max(n,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(n,8)*Math.max(e,8)/2;case Rc:case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yc:case jc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $c:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nS(n){switch(n){case di:case Fp:return{byteLength:1,components:1};case ma:case Op:case Yt:return{byteLength:2,components:1};case Lu:case Iu:return{byteLength:2,components:4};case Ds:case Du:case Fn:return{byteLength:4,components:1};case Bp:case kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function am(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function iS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],v=h[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
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
#endif`,aS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uS=`#ifdef USE_AOMAP
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
#endif`,hS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS=`#ifdef USE_BATCHING
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
#endif`,dS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xS=`#ifdef USE_IRIDESCENCE
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
#endif`,_S=`#ifdef USE_BUMPMAP
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AS=`#define PI 3.141592653589793
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
} // validated`,CS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RS=`vec3 transformedNormal = objectNormal;
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
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,US="gl_FragColor = linearToOutputTexel( gl_FragColor );",NS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
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
#endif`,kS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XS=`#ifdef USE_GRADIENTMAP
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
}`,YS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZS=`uniform bool receiveShadow;
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
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,$S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#endif`,nb=`uniform sampler2D dfgLUT;
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
}`,ib=`
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
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
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
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
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
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
#endif`,wb=`#ifdef USE_NORMALMAP
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
#endif`,Cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pb=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hb=`float getShadowMask() {
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
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
}`,hM=`#define DISTANCE
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
}`,fM=`#define DISTANCE
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,gM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,_M=`uniform vec3 diffuse;
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
}`,vM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,MM=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,EM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,wM=`#define PHONG
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
}`,AM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,RM=`#define TOON
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
}`,PM=`#define TOON
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
}`,DM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,UM=`uniform vec3 color;
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
}`,NM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:sS,alphahash_pars_fragment:rS,alphamap_fragment:aS,alphamap_pars_fragment:oS,alphatest_fragment:lS,alphatest_pars_fragment:cS,aomap_fragment:uS,aomap_pars_fragment:hS,batching_pars_vertex:fS,batching_vertex:dS,begin_vertex:pS,beginnormal_vertex:mS,bsdfs:gS,iridescence_fragment:xS,bumpmap_pars_fragment:_S,clipping_planes_fragment:vS,clipping_planes_pars_fragment:SS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:MS,color_fragment:yS,color_pars_fragment:ES,color_pars_vertex:TS,color_vertex:wS,common:AS,cube_uv_reflection_fragment:CS,defaultnormal_vertex:RS,displacementmap_pars_vertex:PS,displacementmap_vertex:DS,emissivemap_fragment:LS,emissivemap_pars_fragment:IS,colorspace_fragment:US,colorspace_pars_fragment:NS,envmap_fragment:FS,envmap_common_pars_fragment:OS,envmap_pars_fragment:BS,envmap_pars_vertex:kS,envmap_physical_pars_fragment:KS,envmap_vertex:zS,fog_vertex:VS,fog_pars_vertex:HS,fog_fragment:GS,fog_pars_fragment:WS,gradientmap_pars_fragment:XS,lightmap_pars_fragment:YS,lights_lambert_fragment:jS,lights_lambert_pars_fragment:qS,lights_pars_begin:ZS,lights_toon_fragment:$S,lights_toon_pars_fragment:JS,lights_phong_fragment:QS,lights_phong_pars_fragment:eb,lights_physical_fragment:tb,lights_physical_pars_fragment:nb,lights_fragment_begin:ib,lights_fragment_maps:sb,lights_fragment_end:rb,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:cb,map_fragment:ub,map_pars_fragment:hb,map_particle_fragment:fb,map_particle_pars_fragment:db,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:gb,morphcolor_vertex:xb,morphnormal_vertex:_b,morphtarget_pars_vertex:vb,morphtarget_vertex:Sb,normal_fragment_begin:bb,normal_fragment_maps:Mb,normal_pars_fragment:yb,normal_pars_vertex:Eb,normal_vertex:Tb,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Cb,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Pb,opaque_fragment:Db,packing:Lb,premultiplied_alpha_fragment:Ib,project_vertex:Ub,dithering_fragment:Nb,dithering_pars_fragment:Fb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Bb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:zb,shadowmap_vertex:Vb,shadowmask_pars_fragment:Hb,skinbase_vertex:Gb,skinning_pars_vertex:Wb,skinning_vertex:Xb,skinnormal_vertex:Yb,specularmap_fragment:jb,specularmap_pars_fragment:qb,tonemapping_fragment:Zb,tonemapping_pars_fragment:Kb,transmission_fragment:$b,transmission_pars_fragment:Jb,uv_pars_fragment:Qb,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:sM,backgroundCube_vert:rM,backgroundCube_frag:aM,cube_vert:oM,cube_frag:lM,depth_vert:cM,depth_frag:uM,distanceRGBA_vert:hM,distanceRGBA_frag:fM,equirect_vert:dM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:xM,meshbasic_frag:_M,meshlambert_vert:vM,meshlambert_frag:SM,meshmatcap_vert:bM,meshmatcap_frag:MM,meshnormal_vert:yM,meshnormal_frag:EM,meshphong_vert:TM,meshphong_frag:wM,meshphysical_vert:AM,meshphysical_frag:CM,meshtoon_vert:RM,meshtoon_frag:PM,points_vert:DM,points_frag:LM,shadow_vert:IM,shadow_frag:UM,sprite_vert:NM,sprite_frag:FM},Xe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ni={basic:{uniforms:dn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:dn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new st(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:dn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:dn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:dn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new st(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:dn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:dn([Xe.points,Xe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:dn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:dn([Xe.common,Xe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:dn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:dn([Xe.sprite,Xe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:dn([Xe.common,Xe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:dn([Xe.lights,Xe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ni.physical={uniforms:dn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const io={r:0,b:0,g:0},Ss=new pi,OM=new Mt;function BM(n,e,t,i,s,r,a){const o=new st(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function v(b){let w=!1;const F=_(b);F===null?p(o,l):F&&F.isColor&&(p(F,1),w=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,w){const F=_(w);F&&(F.isCubeTexture||F.mapping===Wo)?(u===void 0&&(u=new mi(new ya(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Er(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ss.copy(w.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=F,u.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Ss)),u.material.toneMapped=_t.getTransfer(F.colorSpace)!==yt,(h!==F||f!==F.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=F,f=F.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):F&&F.isTexture&&(c===void 0&&(c=new mi(new Xo(2,2),new zt({name:"BackgroundMaterial",uniforms:Er(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=F,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=_t.getTransfer(F.colorSpace)!==yt,F.matrixAutoUpdate===!0&&F.updateMatrix(),c.material.uniforms.uvTransform.value.copy(F.matrix),(h!==F||f!==F.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=F,f=F.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(io,Kp(n)),i.buffers.color.setClear(io.r,io.g,io.b,w,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:g,dispose:M}}function kM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(y,O,Y,Z,he){let ee=!1;const J=h(Z,Y,O);r!==J&&(r=J,c(r.object)),ee=d(y,Z,Y,he),ee&&_(y,Z,Y,he),he!==null&&e.update(he,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,w(y,O,Y,Z),he!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,O,Y){const Z=Y.wireframe===!0;let he=i[y.id];he===void 0&&(he={},i[y.id]=he);let ee=he[O.id];ee===void 0&&(ee={},he[O.id]=ee);let J=ee[Z];return J===void 0&&(J=f(l()),ee[Z]=J),J}function f(y){const O=[],Y=[],Z=[];for(let he=0;he<t;he++)O[he]=0,Y[he]=0,Z[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:Z,object:y,attributes:{},index:null}}function d(y,O,Y,Z){const he=r.attributes,ee=O.attributes;let J=0;const ne=Y.getAttributes();for(const $ in ne)if(ne[$].location>=0){const Se=he[$];let Oe=ee[$];if(Oe===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Oe=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Oe=y.instanceColor)),Se===void 0||Se.attribute!==Oe||Oe&&Se.data!==Oe.data)return!0;J++}return r.attributesNum!==J||r.index!==Z}function _(y,O,Y,Z){const he={},ee=O.attributes;let J=0;const ne=Y.getAttributes();for(const $ in ne)if(ne[$].location>=0){let Se=ee[$];Se===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor));const Oe={};Oe.attribute=Se,Se&&Se.data&&(Oe.data=Se.data),he[$]=Oe,J++}r.attributes=he,r.attributesNum=J,r.index=Z}function v(){const y=r.newAttributes;for(let O=0,Y=y.length;O<Y;O++)y[O]=0}function g(y){p(y,0)}function p(y,O){const Y=r.newAttributes,Z=r.enabledAttributes,he=r.attributeDivisors;Y[y]=1,Z[y]===0&&(n.enableVertexAttribArray(y),Z[y]=1),he[y]!==O&&(n.vertexAttribDivisor(y,O),he[y]=O)}function M(){const y=r.newAttributes,O=r.enabledAttributes;for(let Y=0,Z=O.length;Y<Z;Y++)O[Y]!==y[Y]&&(n.disableVertexAttribArray(Y),O[Y]=0)}function b(y,O,Y,Z,he,ee,J){J===!0?n.vertexAttribIPointer(y,O,Y,he,ee):n.vertexAttribPointer(y,O,Y,Z,he,ee)}function w(y,O,Y,Z){v();const he=Z.attributes,ee=Y.getAttributes(),J=O.defaultAttributeValues;for(const ne in ee){const $=ee[ne];if($.location>=0){let xe=he[ne];if(xe===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),xe!==void 0){const Se=xe.normalized,Oe=xe.itemSize,pe=e.get(xe);if(pe===void 0)continue;const _e=pe.buffer,Ie=pe.type,$e=pe.bytesPerElement,K=Ie===n.INT||Ie===n.UNSIGNED_INT||xe.gpuType===Du;if(xe.isInterleavedBufferAttribute){const k=xe.data,le=k.stride,ve=xe.offset;if(k.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)p($.location+be,k.meshPerAttribute);y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let be=0;be<$.locationSize;be++)g($.location+be);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let be=0;be<$.locationSize;be++)b($.location+be,Oe/$.locationSize,Ie,Se,le*$e,(ve+Oe/$.locationSize*be)*$e,K)}else{if(xe.isInstancedBufferAttribute){for(let k=0;k<$.locationSize;k++)p($.location+k,xe.meshPerAttribute);y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let k=0;k<$.locationSize;k++)g($.location+k);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let k=0;k<$.locationSize;k++)b($.location+k,Oe/$.locationSize,Ie,Se,Oe*$e,Oe/$.locationSize*k*$e,K)}}else if(J!==void 0){const Se=J[ne];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv($.location,Se);break;case 3:n.vertexAttrib3fv($.location,Se);break;case 4:n.vertexAttrib4fv($.location,Se);break;default:n.vertexAttrib1fv($.location,Se)}}}}M()}function F(){X();for(const y in i){const O=i[y];for(const Y in O){const Z=O[Y];for(const he in Z)u(Z[he].object),delete Z[he];delete O[Y]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const O=i[y.id];for(const Y in O){const Z=O[Y];for(const he in Z)u(Z[he].object),delete Z[he];delete O[Y]}delete i[y.id]}function L(y){for(const O in i){const Y=i[O];if(Y[y.id]===void 0)continue;const Z=Y[y.id];for(const he in Z)u(Z[he].object),delete Z[he];delete Y[y.id]}}function X(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:X,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function zM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function VM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==tn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const X=L===Yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==di&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Fn&&!X)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(lt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:F,maxSamples:D}}function HM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Qi,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const M=r?0:i,b=M*4;let w=p.clippingState||null;l.value=w,w=u(_,f,b,d);for(let F=0;F!==b;++F)w[F]=t[F];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const p=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,w=d;b!==v;++b,w+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(g,w),g[w+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function GM(n){let e=new WeakMap;function t(a,o){return o===Mc?a.mapping=vr:o===yc&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mc||o===yc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mv(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const as=4,yf=[.125,.215,.35,.446,.526,.582],ys=20,WM=256,Wr=new Yo,Ef=new st;let Vl=null,Hl=0,Gl=0,Wl=!1;const XM=new Q;class Tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=XM}=r;Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Hl,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Yt,format:tn,colorSpace:Ln,depthBuffer:!1},s=wf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YM(r)),this._blurMaterial=qM(r,e,t),this._ggxMaterial=jM(r,e,t)}return s}_compileMaterial(e){const t=new mi(new Rn,e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,i,s,r){const l=new An(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ef),h.toneMapping=ls,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new ya,new jp({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(Ef),p=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):w===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const F=this._cubeSize;ir(s,w*F,b>2?F:0,F,F),h.setRenderTarget(s),p&&h.render(v,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===vr||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=.05+c*.95,d=h*f,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-as?i-_+as:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,ir(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Wr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ir(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Wr)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ys-1),v=r/_,g=isFinite(r)?1+Math.floor(u*v):ys;g>ys&&lt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);const p=[];let M=0;for(let L=0;L<ys;++L){const X=L/v,C=Math.exp(-X*X/2);p.push(C),L===0?M+=C:L<g&&(M+=2*C)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const w=this._sizeLods[s],F=3*w*(s>b-as?s-b+as:0),D=4*(this._cubeSize-w);ir(t,F,D,3*w,2*w),l.setRenderTarget(t),l.render(h,Wr)}}function YM(n){const e=[],t=[],i=[];let s=n;const r=n-as+1+yf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-as?l=yf[a-n+as-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,g=2,p=1,M=new Float32Array(v*_*d),b=new Float32Array(g*_*d),w=new Float32Array(p*_*d);for(let D=0;D<d;D++){const L=D%3*2/3-1,X=D>2?0:-1,C=[L,X,0,L+2/3,X,0,L+2/3,X+1,0,L,X,0,L+2/3,X+1,0,L,X+1,0];M.set(C,v*_*D),b.set(f,g*_*D);const y=[D,D,D,D,D,D];w.set(y,p*_*D)}const F=new Rn;F.setAttribute("position",new bn(M,v)),F.setAttribute("uv",new bn(b,g)),F.setAttribute("faceIndex",new bn(w,p)),i.push(new mi(F,null)),s>as&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function wf(n,e,t){const i=new en(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jM(n,e,t){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function qM(n,e,t){const i=new Float32Array(ys),s=new Q(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jo(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Af(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Cf(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}function ZM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mc||l===yc,u=l===vr||l===Sr;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Tf(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Tf(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function KM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_a("WebGLRenderer: "+i+" extension not supported."),s}}}function $M(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let b=0,w=M.length;b<w;b+=3){const F=M[b+0],D=M[b+1],L=M[b+2];f.push(F,D,D,L,L,F)}}else if(_!==void 0){const M=_.array;v=_.version;for(let b=0,w=M.length/3-1;b<w;b+=3){const F=b+0,D=b+1,L=b+2;f.push(F,D,D,L,L,F)}}else return;const g=new(Wp(f)?Zp:qp)(f,1);g.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function JM(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*a,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let g=0;for(let p=0;p<_;p++)g+=d[p];t.update(g,i,1)}function h(f,d,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*v[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function QM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ey(n,e,t){const i=new WeakMap,s=new At;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){X.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;_===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let F=o.attributes.position.count*w,D=1;F>e.maxTextureSize&&(D=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*D*4*h),X=new Xp(L,F,D,h);X.type=Fn,X.needsUpdate=!0;const C=w*4;for(let O=0;O<h;O++){const Y=p[O],Z=M[O],he=b[O],ee=F*D*4*O;for(let J=0;J<Y.count;J++){const ne=J*C;_===!0&&(s.fromBufferAttribute(Y,J),L[ee+ne+0]=s.x,L[ee+ne+1]=s.y,L[ee+ne+2]=s.z,L[ee+ne+3]=0),v===!0&&(s.fromBufferAttribute(Z,J),L[ee+ne+4]=s.x,L[ee+ne+5]=s.y,L[ee+ne+6]=s.z,L[ee+ne+7]=0),g===!0&&(s.fromBufferAttribute(he,J),L[ee+ne+8]=s.x,L[ee+ne+9]=s.y,L[ee+ne+10]=s.z,L[ee+ne+11]=he.itemSize===4?s.w:1)}}f={count:h,texture:X,size:new Qe(F,D)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ty(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const om=new nn,Rf=new Gu(1,1),lm=new Xp,cm=new iv,um=new Jp,Pf=[],Df=[],Lf=new Float32Array(16),If=new Float32Array(9),Uf=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=Df[e];t===void 0&&(t=new Int32Array(e),Df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function ay(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;Uf.set(i),n.uniformMatrix2fv(this.addr,!1,Uf),qt(t,i)}}function oy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),qt(t,i)}}function ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;Lf.set(i),n.uniformMatrix4fv(this.addr,!1,Lf),qt(t,i)}}function cy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function xy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rf.compareFunction=Gp,r=Rf):r=om,t.setTexture2D(e||r,s)}function _y(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cm,s)}function vy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||um,s)}function Sy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lm,s)}function by(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return ay;case 35675:return oy;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return fy;case 5125:return dy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return Sy}}function My(n,e){n.uniform1fv(this.addr,e)}function yy(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ey(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ty(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function wy(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ay(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cy(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ry(n,e){n.uniform1iv(this.addr,e)}function Py(n,e){n.uniform2iv(this.addr,e)}function Dy(n,e){n.uniform3iv(this.addr,e)}function Ly(n,e){n.uniform4iv(this.addr,e)}function Iy(n,e){n.uniform1uiv(this.addr,e)}function Uy(n,e){n.uniform2uiv(this.addr,e)}function Ny(n,e){n.uniform3uiv(this.addr,e)}function Fy(n,e){n.uniform4uiv(this.addr,e)}function Oy(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||om,r[a])}function By(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cm,r[a])}function ky(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||um,r[a])}function zy(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lm,r[a])}function Vy(n){switch(n){case 5126:return My;case 35664:return yy;case 35665:return Ey;case 35666:return Ty;case 35674:return wy;case 35675:return Ay;case 35676:return Cy;case 5124:case 35670:return Ry;case 35667:case 35671:return Py;case 35668:case 35672:return Dy;case 35669:case 35673:return Ly;case 5125:return Iy;case 36294:return Uy;case 36295:return Ny;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return zy}}class Hy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=by(t.type)}}class Gy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vy(t.type)}}class Wy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function Nf(n,e){n.seq.push(e),n.map[e.id]=e}function Xy(n,e,t){const i=n.name,s=i.length;for(Xl.lastIndex=0;;){const r=Xl.exec(i),a=Xl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nf(t,c===void 0?new Hy(o,n,e):new Gy(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Wy(o),Nf(t,h)),t=h}}}class vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Xy(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ff(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Yy=37297;let jy=0;function qy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Of=new ut;function Zy(n){_t._getMatrix(Of,_t.workingColorSpace,n);const e=`mat3( ${Of.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case Po:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qy(n.getShaderSource(e),o)}else return r}function Ky(n,e){const t=Zy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $y(n,e){let t;switch(e){case Cp:t="Linear";break;case Rp:t="Reinhard";break;case Pp:t="Cineon";break;case Dp:t="ACESFilmic";break;case Ip:t="AgX";break;case Up:t="Neutral";break;case Lp:t="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new Q;function Jy(){_t.getLuminanceCoefficients(so);const n=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function eE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Yr(n){return n!==""}function kf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nE=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(n){return n.replace(nE,sE)}const iE=new Map;function sE(n,e){let t=pt[e];if(t===void 0){const i=iE.get(e);if(i!==void 0)t=pt[i],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return su(t)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(n){return n.replace(rE,aE)}function aE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function oE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function lE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case Sr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function uE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ap:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function hE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fE(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=oE(t),c=lE(t),u=cE(t),h=uE(t),f=hE(t),d=Qy(t),_=eE(r),v=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(g=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?pt.tonemapping_pars_fragment:"",t.toneMapping!==ls?$y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Ky("linearToOutputTexel",t.outputColorSpace),Jy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=su(a),a=kf(a,t),a=zf(a,t),o=su(o),o=kf(o,t),o=zf(o,t),a=Vf(a),o=Vf(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+g+a,w=M+p+o,F=Ff(s,s.VERTEX_SHADER,b),D=Ff(s,s.FRAGMENT_SHADER,w);s.attachShader(v,F),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(O){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(v)||"",Z=s.getShaderInfoLog(F)||"",he=s.getShaderInfoLog(D)||"",ee=Y.trim(),J=Z.trim(),ne=he.trim();let $=!0,xe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,F,D);else{const Se=Bf(s,F,"vertex"),Oe=Bf(s,D,"fragment");Bt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ee+`
`+Se+`
`+Oe)}else ee!==""?lt("WebGLProgram: Program Info Log:",ee):(J===""||ne==="")&&(xe=!1);xe&&(O.diagnostics={runnable:$,programLog:ee,vertexShader:{log:J,prefix:g},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(F),s.deleteShader(D),X=new vo(s,v),C=tE(s,v)}let X;this.getUniforms=function(){return X===void 0&&L(this),X};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Yy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=D,this}let dE=0;class pE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mE(e),t.set(e,i)),i}}class mE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function gE(n,e,t,i,s,r,a){const o=new zu,l=new pE,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return c.add(C),C===0?"uv":`uv${C}`}function g(C,y,O,Y,Z){const he=Y.fog,ee=Z.geometry,J=C.isMeshStandardMaterial?Y.environment:null,ne=(C.isMeshStandardMaterial?t:e).get(C.envMap||J),$=ne&&ne.mapping===Wo?ne.image.height:null,xe=_[C.type];C.precision!==null&&(d=s.getMaxPrecision(C.precision),d!==C.precision&&lt("WebGLProgram.getParameters:",C.precision,"not supported, using",d,"instead."));const Se=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Oe=Se!==void 0?Se.length:0;let pe=0;ee.morphAttributes.position!==void 0&&(pe=1),ee.morphAttributes.normal!==void 0&&(pe=2),ee.morphAttributes.color!==void 0&&(pe=3);let _e,Ie,$e,K;if(xe){const fe=ni[xe];_e=fe.vertexShader,Ie=fe.fragmentShader}else _e=C.vertexShader,Ie=C.fragmentShader,l.update(C),$e=l.getVertexShaderID(C),K=l.getFragmentShaderID(C);const k=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),ve=Z.isInstancedMesh===!0,be=Z.isBatchedMesh===!0,ke=!!C.map,I=!!C.matcap,U=!!ne,G=!!C.aoMap,E=!!C.lightMap,ce=!!C.bumpMap,se=!!C.normalMap,Ee=!!C.displacementMap,ue=!!C.emissiveMap,ye=!!C.metalnessMap,re=!!C.roughnessMap,De=C.anisotropy>0,T=C.clearcoat>0,S=C.dispersion>0,H=C.iridescence>0,ae=C.sheen>0,me=C.transmission>0,te=De&&!!C.anisotropyMap,Ve=T&&!!C.clearcoatMap,Pe=T&&!!C.clearcoatNormalMap,qe=T&&!!C.clearcoatRoughnessMap,Ye=H&&!!C.iridescenceMap,we=H&&!!C.iridescenceThicknessMap,Re=ae&&!!C.sheenColorMap,Ge=ae&&!!C.sheenRoughnessMap,Je=!!C.specularMap,Ne=!!C.specularColorMap,Ze=!!C.specularIntensityMap,V=me&&!!C.transmissionMap,Be=me&&!!C.thicknessMap,oe=!!C.gradientMap,Fe=!!C.alphaMap,Le=C.alphaTest>0,Te=!!C.alphaHash,et=!!C.extensions;let ot=ls;C.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ot=n.toneMapping);const j={shaderID:xe,shaderType:C.type,shaderName:C.name,vertexShader:_e,fragmentShader:Ie,defines:C.defines,customVertexShaderID:$e,customFragmentShaderID:K,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:d,batching:be,batchingColor:be&&Z._colorsTexture!==null,instancing:ve,instancingColor:ve&&Z.instanceColor!==null,instancingMorph:ve&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ln,alphaToCoverage:!!C.alphaToCoverage,map:ke,matcap:I,envMap:U,envMapMode:U&&ne.mapping,envMapCubeUVHeight:$,aoMap:G,lightMap:E,bumpMap:ce,normalMap:se,displacementMap:f&&Ee,emissiveMap:ue,normalMapObjectSpace:se&&C.normalMapType===T_,normalMapTangentSpace:se&&C.normalMapType===Ou,metalnessMap:ye,roughnessMap:re,anisotropy:De,anisotropyMap:te,clearcoat:T,clearcoatMap:Ve,clearcoatNormalMap:Pe,clearcoatRoughnessMap:qe,dispersion:S,iridescence:H,iridescenceMap:Ye,iridescenceThicknessMap:we,sheen:ae,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:Je,specularColorMap:Ne,specularIntensityMap:Ze,transmission:me,transmissionMap:V,thicknessMap:Be,gradientMap:oe,opaque:C.transparent===!1&&C.blending===fr&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Le,alphaHash:Te,combine:C.combine,mapUv:ke&&v(C.map.channel),aoMapUv:G&&v(C.aoMap.channel),lightMapUv:E&&v(C.lightMap.channel),bumpMapUv:ce&&v(C.bumpMap.channel),normalMapUv:se&&v(C.normalMap.channel),displacementMapUv:Ee&&v(C.displacementMap.channel),emissiveMapUv:ue&&v(C.emissiveMap.channel),metalnessMapUv:ye&&v(C.metalnessMap.channel),roughnessMapUv:re&&v(C.roughnessMap.channel),anisotropyMapUv:te&&v(C.anisotropyMap.channel),clearcoatMapUv:Ve&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(C.sheenRoughnessMap.channel),specularMapUv:Je&&v(C.specularMap.channel),specularColorMapUv:Ne&&v(C.specularColorMap.channel),specularIntensityMapUv:Ze&&v(C.specularIntensityMap.channel),transmissionMapUv:V&&v(C.transmissionMap.channel),thicknessMapUv:Be&&v(C.thicknessMap.channel),alphaMapUv:Fe&&v(C.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(se||De),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ee.attributes.uv&&(ke||Fe),fog:!!he,useFog:C.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:Z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:ke&&C.map.isVideoTexture===!0&&_t.getTransfer(C.map.colorSpace)===yt,decodeVideoTextureEmissive:ue&&C.emissiveMap.isVideoTexture===!0&&_t.getTransfer(C.emissiveMap.colorSpace)===yt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Un,flipSided:C.side===Cn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:et&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&C.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return j.vertexUv1s=c.has(1),j.vertexUv2s=c.has(2),j.vertexUv3s=c.has(3),c.clear(),j}function p(C){const y=[];if(C.shaderID?y.push(C.shaderID):(y.push(C.customVertexShaderID),y.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)y.push(O),y.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(M(y,C),b(y,C),y.push(n.outputColorSpace)),y.push(C.customProgramCacheKey),y.join()}function M(C,y){C.push(y.precision),C.push(y.outputColorSpace),C.push(y.envMapMode),C.push(y.envMapCubeUVHeight),C.push(y.mapUv),C.push(y.alphaMapUv),C.push(y.lightMapUv),C.push(y.aoMapUv),C.push(y.bumpMapUv),C.push(y.normalMapUv),C.push(y.displacementMapUv),C.push(y.emissiveMapUv),C.push(y.metalnessMapUv),C.push(y.roughnessMapUv),C.push(y.anisotropyMapUv),C.push(y.clearcoatMapUv),C.push(y.clearcoatNormalMapUv),C.push(y.clearcoatRoughnessMapUv),C.push(y.iridescenceMapUv),C.push(y.iridescenceThicknessMapUv),C.push(y.sheenColorMapUv),C.push(y.sheenRoughnessMapUv),C.push(y.specularMapUv),C.push(y.specularColorMapUv),C.push(y.specularIntensityMapUv),C.push(y.transmissionMapUv),C.push(y.thicknessMapUv),C.push(y.combine),C.push(y.fogExp2),C.push(y.sizeAttenuation),C.push(y.morphTargetsCount),C.push(y.morphAttributeCount),C.push(y.numDirLights),C.push(y.numPointLights),C.push(y.numSpotLights),C.push(y.numSpotLightMaps),C.push(y.numHemiLights),C.push(y.numRectAreaLights),C.push(y.numDirLightShadows),C.push(y.numPointLightShadows),C.push(y.numSpotLightShadows),C.push(y.numSpotLightShadowsWithMaps),C.push(y.numLightProbes),C.push(y.shadowMapType),C.push(y.toneMapping),C.push(y.numClippingPlanes),C.push(y.numClipIntersection),C.push(y.depthPacking)}function b(C,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),C.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),C.push(o.mask)}function w(C){const y=_[C.type];let O;if(y){const Y=ni[y];O=rs.clone(Y.uniforms)}else O=C.uniforms;return O}function F(C,y){let O;for(let Y=0,Z=u.length;Y<Z;Y++){const he=u[Y];if(he.cacheKey===y){O=he,++O.usedTimes;break}}return O===void 0&&(O=new fE(n,y,C,r),u.push(O)),O}function D(C){if(--C.usedTimes===0){const y=u.indexOf(C);u[y]=u[u.length-1],u.pop(),C.destroy()}}function L(C){l.remove(C)}function X(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:F,releaseProgram:D,releaseShaderCache:L,programs:u,dispose:X}}function xE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function _E(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,f,d,_,v,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,f,d,_,v,g){const p=a(h,f,d,_,v,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,_,v,g){const p=a(h,f,d,_,v,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||_E),i.length>1&&i.sort(f||Gf),s.length>1&&s.sort(f||Gf)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function vE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Wf,n.set(i,[a])):s>=r.length?(a=new Wf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function SE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new st};break;case"SpotLight":t={position:new Q,direction:new Q,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function bE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ME=0;function yE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function EE(n){const e=new SE,t=bE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const s=new Q,r=new Mt,a=new Mt;function o(c){let u=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,_=0,v=0,g=0,p=0,M=0,b=0,w=0,F=0,D=0,L=0;c.sort(yE);for(let C=0,y=c.length;C<y;C++){const O=c[C],Y=O.color,Z=O.intensity,he=O.distance,ee=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=Y.r*Z,h+=Y.g*Z,f+=Y.b*Z;else if(O.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(O.sh.coefficients[J],Z);L++}else if(O.isDirectionalLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ne=O.shadow,$=t.get(O);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=O.shadow.matrix,M++}i.directional[d]=J,d++}else if(O.isSpotLight){const J=e.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(Y).multiplyScalar(Z),J.distance=he,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,i.spot[v]=J;const ne=O.shadow;if(O.map&&(i.spotLightMap[F]=O.map,F++,ne.updateMatrices(O),O.castShadow&&D++),i.spotLightMatrix[v]=ne.matrix,O.castShadow){const $=t.get(O);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=ee,w++}v++}else if(O.isRectAreaLight){const J=e.get(O);J.color.copy(Y).multiplyScalar(Z),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),i.rectArea[g]=J,g++}else if(O.isPointLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),J.distance=O.distance,J.decay=O.decay,O.castShadow){const ne=O.shadow,$=t.get(O);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,$.shadowCameraNear=ne.camera.near,$.shadowCameraFar=ne.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=O.shadow.matrix,b++}i.point[_]=J,_++}else if(O.isHemisphereLight){const J=e.get(O);J.skyColor.copy(O.color).multiplyScalar(Z),J.groundColor.copy(O.groundColor).multiplyScalar(Z),i.hemi[p]=J,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const X=i.hash;(X.directionalLength!==d||X.pointLength!==_||X.spotLength!==v||X.rectAreaLength!==g||X.hemiLength!==p||X.numDirectionalShadows!==M||X.numPointShadows!==b||X.numSpotShadows!==w||X.numSpotMaps!==F||X.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+F-D,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,X.directionalLength=d,X.pointLength=_,X.spotLength=v,X.rectAreaLength=g,X.hemiLength=p,X.numDirectionalShadows=M,X.numPointShadows=b,X.numSpotShadows=w,X.numSpotMaps=F,X.numLightProbes=L,i.version=ME++)}function l(c,u){let h=0,f=0,d=0,_=0,v=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(b.isSpotLight){const w=i.spot[d];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Xf(n){const e=new EE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function TE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Xf(n),e.set(s,[o])):r>=a.length?(o=new Xf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`;function CE(n,e,t){let i=new Hu;const s=new Qe,r=new Qe,a=new At,o=new rm({depthPacking:Hp}),l=new Nv,c={},u=t.maxTextureSize,h={[us]:Cn,[Cn]:us,[Un]:Un},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:wE,fragmentShader:AE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new mi(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let p=this.type;this.render=function(D,L,X){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const C=n.getRenderTarget(),y=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending($t),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=p!==Ri&&this.type===Ri,he=p===Ri&&this.type!==Ri;for(let ee=0,J=D.length;ee<J;ee++){const ne=D[ee],$=ne.shadow;if($===void 0){lt("WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const xe=$.getFrameExtents();if(s.multiply(xe),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xe.x),s.x=r.x*xe.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xe.y),s.y=r.y*xe.y,$.mapSize.y=r.y)),$.map===null||Z===!0||he===!0){const Oe=this.type!==Ri?{minFilter:Sn,magFilter:Sn}:{};$.map!==null&&$.map.dispose(),$.map=new en(s.x,s.y,Oe),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const Se=$.getViewportCount();for(let Oe=0;Oe<Se;Oe++){const pe=$.getViewport(Oe);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),Y.viewport(a),$.updateMatrices(ne,Oe),i=$.getFrustum(),w(L,X,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Ri&&M($,X),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(C,y,O)};function M(D,L){const X=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new en(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,X,f,v,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,X,d,v,null)}function b(D,L,X,C){let y=null;const O=X.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)y=O;else if(y=X.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const Y=y.uuid,Z=L.uuid;let he=c[Y];he===void 0&&(he={},c[Y]=he);let ee=he[Z];ee===void 0&&(ee=y.clone(),he[Z]=ee,L.addEventListener("dispose",F)),y=ee}if(y.visible=L.visible,y.wireframe=L.wireframe,C===Ri?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:h[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,X.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Y=n.properties.get(y);Y.light=X}return y}function w(D,L,X,C,y){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===Ri)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld);const Z=e.update(D),he=D.material;if(Array.isArray(he)){const ee=Z.groups;for(let J=0,ne=ee.length;J<ne;J++){const $=ee[J],xe=he[$.materialIndex];if(xe&&xe.visible){const Se=b(D,xe,C,y);D.onBeforeShadow(n,D,L,X,Z,Se,$),n.renderBufferDirect(X,null,Z,Se,D,$),D.onAfterShadow(n,D,L,X,Z,Se,$)}}}else if(he.visible){const ee=b(D,he,C,y);D.onBeforeShadow(n,D,L,X,Z,ee,null),n.renderBufferDirect(X,null,Z,ee,D,null),D.onAfterShadow(n,D,L,X,Z,ee,null)}}const Y=D.children;for(let Z=0,he=Y.length;Z<he;Z++)w(Y[Z],L,X,C,y)}function F(D){D.target.removeEventListener("dispose",F);for(const X in c){const C=c[X],y=D.target.uuid;y in C&&(C[y].dispose(),delete C[y])}}}const RE={[mc]:gc,[xc]:Sc,[_c]:bc,[_r]:vc,[gc]:mc,[Sc]:xc,[bc]:_c,[vc]:_r};function PE(n,e){function t(){let V=!1;const Be=new At;let oe=null;const Fe=new At(0,0,0,0);return{setMask:function(Le){oe!==Le&&!V&&(n.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Te,et,ot,j){j===!0&&(Le*=ot,Te*=ot,et*=ot),Be.set(Le,Te,et,ot),Fe.equals(Be)===!1&&(n.clearColor(Le,Te,et,ot),Fe.copy(Be))},reset:function(){V=!1,oe=null,Fe.set(-1,0,0,0)}}}function i(){let V=!1,Be=!1,oe=null,Fe=null,Le=null;return{setReversed:function(Te){if(Be!==Te){const et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Be=Te;const ot=Le;Le=null,this.setClear(ot)}},getReversed:function(){return Be},setTest:function(Te){Te?k(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Te){oe!==Te&&!V&&(n.depthMask(Te),oe=Te)},setFunc:function(Te){if(Be&&(Te=RE[Te]),Fe!==Te){switch(Te){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case xc:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case vc:n.depthFunc(n.GEQUAL);break;case Sc:n.depthFunc(n.GREATER);break;case bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=Te}},setLocked:function(Te){V=Te},setClear:function(Te){Le!==Te&&(Be&&(Te=1-Te),n.clearDepth(Te),Le=Te)},reset:function(){V=!1,oe=null,Fe=null,Le=null,Be=!1}}}function s(){let V=!1,Be=null,oe=null,Fe=null,Le=null,Te=null,et=null,ot=null,j=null;return{setTest:function(fe){V||(fe?k(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(fe){Be!==fe&&!V&&(n.stencilMask(fe),Be=fe)},setFunc:function(fe,He,tt){(oe!==fe||Fe!==He||Le!==tt)&&(n.stencilFunc(fe,He,tt),oe=fe,Fe=He,Le=tt)},setOp:function(fe,He,tt){(Te!==fe||et!==He||ot!==tt)&&(n.stencilOp(fe,He,tt),Te=fe,et=He,ot=tt)},setLocked:function(fe){V=fe},setClear:function(fe){j!==fe&&(n.clearStencil(fe),j=fe)},reset:function(){V=!1,Be=null,oe=null,Fe=null,Le=null,Te=null,et=null,ot=null,j=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,v=!1,g=null,p=null,M=null,b=null,w=null,F=null,D=null,L=new st(0,0,0),X=0,C=!1,y=null,O=null,Y=null,Z=null,he=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),J=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=ne>=2);let xe=null,Se={};const Oe=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),_e=new At().fromArray(Oe),Ie=new At().fromArray(pe);function $e(V,Be,oe,Fe){const Le=new Uint8Array(4),Te=n.createTexture();n.bindTexture(V,Te),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<oe;et++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Be,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Be+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Te}const K={};K[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(n.DEPTH_TEST),a.setFunc(_r),ce(!1),se(kh),k(n.CULL_FACE),G($t);function k(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function le(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function ve(V,Be){return h[V]!==Be?(n.bindFramebuffer(V,Be),h[V]=Be,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Be),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Be),!0):!1}function be(V,Be){let oe=d,Fe=!1;if(V){oe=f.get(Be),oe===void 0&&(oe=[],f.set(Be,oe));const Le=V.textures;if(oe.length!==Le.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,et=Le.length;Te<et;Te++)oe[Te]=n.COLOR_ATTACHMENT0+Te;oe.length=Le.length,Fe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(oe)}function ke(V){return _!==V?(n.useProgram(V),_=V,!0):!1}const I={[Ii]:n.FUNC_ADD,[o_]:n.FUNC_SUBTRACT,[l_]:n.FUNC_REVERSE_SUBTRACT};I[c_]=n.MIN,I[u_]=n.MAX;const U={[fc]:n.ZERO,[h_]:n.ONE,[f_]:n.SRC_COLOR,[dc]:n.SRC_ALPHA,[g_]:n.SRC_ALPHA_SATURATE,[wp]:n.DST_COLOR,[Tp]:n.DST_ALPHA,[d_]:n.ONE_MINUS_SRC_COLOR,[pc]:n.ONE_MINUS_SRC_ALPHA,[m_]:n.ONE_MINUS_DST_COLOR,[p_]:n.ONE_MINUS_DST_ALPHA,[x_]:n.CONSTANT_COLOR,[__]:n.ONE_MINUS_CONSTANT_COLOR,[v_]:n.CONSTANT_ALPHA,[S_]:n.ONE_MINUS_CONSTANT_ALPHA};function G(V,Be,oe,Fe,Le,Te,et,ot,j,fe){if(V===$t){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(k(n.BLEND),v=!0),V!==Ep){if(V!==g||fe!==C){if((p!==Ii||w!==Ii)&&(n.blendEquation(n.FUNC_ADD),p=Ii,w=Ii),fe)switch(V){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",V);break}else switch(V){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zh:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",V);break}M=null,b=null,F=null,D=null,L.set(0,0,0),X=0,g=V,C=fe}return}Le=Le||Be,Te=Te||oe,et=et||Fe,(Be!==p||Le!==w)&&(n.blendEquationSeparate(I[Be],I[Le]),p=Be,w=Le),(oe!==M||Fe!==b||Te!==F||et!==D)&&(n.blendFuncSeparate(U[oe],U[Fe],U[Te],U[et]),M=oe,b=Fe,F=Te,D=et),(ot.equals(L)===!1||j!==X)&&(n.blendColor(ot.r,ot.g,ot.b,j),L.copy(ot),X=j),g=V,C=!1}function E(V,Be){V.side===Un?le(n.CULL_FACE):k(n.CULL_FACE);let oe=V.side===Cn;Be&&(oe=!oe),ce(oe),V.blending===fr&&V.transparent===!1?G($t):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Fe=V.stencilWrite;o.setTest(Fe),Fe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(V){y!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),y=V)}function se(V){V!==i_?(k(n.CULL_FACE),V!==O&&(V===kh?n.cullFace(n.BACK):V===s_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),O=V}function Ee(V){V!==Y&&(J&&n.lineWidth(V),Y=V)}function ue(V,Be,oe){V?(k(n.POLYGON_OFFSET_FILL),(Z!==Be||he!==oe)&&(n.polygonOffset(Be,oe),Z=Be,he=oe)):le(n.POLYGON_OFFSET_FILL)}function ye(V){V?k(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function re(V){V===void 0&&(V=n.TEXTURE0+ee-1),xe!==V&&(n.activeTexture(V),xe=V)}function De(V,Be,oe){oe===void 0&&(xe===null?oe=n.TEXTURE0+ee-1:oe=xe);let Fe=Se[oe];Fe===void 0&&(Fe={type:void 0,texture:void 0},Se[oe]=Fe),(Fe.type!==V||Fe.texture!==Be)&&(xe!==oe&&(n.activeTexture(oe),xe=oe),n.bindTexture(V,Be||K[V]),Fe.type=V,Fe.texture=Be)}function T(){const V=Se[xe];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ae(){try{n.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function me(){try{n.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function te(){try{n.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Pe(){try{n.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function qe(){try{n.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ye(){try{n.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function we(){try{n.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Re(V){_e.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),_e.copy(V))}function Ge(V){Ie.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Ie.copy(V))}function Je(V,Be){let oe=c.get(Be);oe===void 0&&(oe=new WeakMap,c.set(Be,oe));let Fe=oe.get(V);Fe===void 0&&(Fe=n.getUniformBlockIndex(Be,V.name),oe.set(V,Fe))}function Ne(V,Be){const Fe=c.get(Be).get(V);l.get(Be)!==Fe&&(n.uniformBlockBinding(Be,Fe,V.__bindingPointIndex),l.set(Be,Fe))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},xe=null,Se={},h={},f=new WeakMap,d=[],_=null,v=!1,g=null,p=null,M=null,b=null,w=null,F=null,D=null,L=new st(0,0,0),X=0,C=!1,y=null,O=null,Y=null,Z=null,he=null,_e.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:le,bindFramebuffer:ve,drawBuffers:be,useProgram:ke,setBlending:G,setMaterial:E,setFlipSided:ce,setCullFace:se,setLineWidth:Ee,setPolygonOffset:ue,setScissorTest:ye,activeTexture:re,bindTexture:De,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:Ye,texImage3D:we,updateUBOMapping:Je,uniformBlockBinding:Ne,texStorage2D:Pe,texStorage3D:qe,texSubImage2D:ae,texSubImage3D:me,compressedTexSubImage2D:te,compressedTexSubImage3D:Ve,scissor:Re,viewport:Ge,reset:Ze}}function DE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return d?new OffscreenCanvas(T,S):xa("canvas")}function v(T,S,H){let ae=1;const me=De(T);if((me.width>H||me.height>H)&&(ae=H/Math.max(me.width,me.height)),ae<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const te=Math.floor(ae*me.width),Ve=Math.floor(ae*me.height);h===void 0&&(h=_(te,Ve));const Pe=S?_(te,Ve):h;return Pe.width=te,Pe.height=Ve,Pe.getContext("2d").drawImage(T,0,0,te,Ve),lt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+te+"x"+Ve+")."),Pe}else return"data"in T&&lt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,S,H,ae,me=!1){if(T!==null){if(n[T]!==void 0)return n[T];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let te=S;if(S===n.RED&&(H===n.FLOAT&&(te=n.R32F),H===n.HALF_FLOAT&&(te=n.R16F),H===n.UNSIGNED_BYTE&&(te=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.R8UI),H===n.UNSIGNED_SHORT&&(te=n.R16UI),H===n.UNSIGNED_INT&&(te=n.R32UI),H===n.BYTE&&(te=n.R8I),H===n.SHORT&&(te=n.R16I),H===n.INT&&(te=n.R32I)),S===n.RG&&(H===n.FLOAT&&(te=n.RG32F),H===n.HALF_FLOAT&&(te=n.RG16F),H===n.UNSIGNED_BYTE&&(te=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RG8UI),H===n.UNSIGNED_SHORT&&(te=n.RG16UI),H===n.UNSIGNED_INT&&(te=n.RG32UI),H===n.BYTE&&(te=n.RG8I),H===n.SHORT&&(te=n.RG16I),H===n.INT&&(te=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RGB8UI),H===n.UNSIGNED_SHORT&&(te=n.RGB16UI),H===n.UNSIGNED_INT&&(te=n.RGB32UI),H===n.BYTE&&(te=n.RGB8I),H===n.SHORT&&(te=n.RGB16I),H===n.INT&&(te=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),H===n.UNSIGNED_INT&&(te=n.RGBA32UI),H===n.BYTE&&(te=n.RGBA8I),H===n.SHORT&&(te=n.RGBA16I),H===n.INT&&(te=n.RGBA32I)),S===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),S===n.RGBA){const Ve=me?Po:_t.getTransfer(ae);H===n.FLOAT&&(te=n.RGBA32F),H===n.HALF_FLOAT&&(te=n.RGBA16F),H===n.UNSIGNED_BYTE&&(te=Ve===yt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(T,S){let H;return T?S===null||S===Ds||S===br?H=n.DEPTH24_STENCIL8:S===Fn?H=n.DEPTH32F_STENCIL8:S===ma&&(H=n.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ds||S===br?H=n.DEPTH_COMPONENT24:S===Fn?H=n.DEPTH_COMPONENT32F:S===ma&&(H=n.DEPTH_COMPONENT16),H}function F(T,S){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Sn&&T.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function D(T){const S=T.target;S.removeEventListener("dispose",D),X(S),S.isVideoTexture&&u.delete(S)}function L(T){const S=T.target;S.removeEventListener("dispose",L),y(S)}function X(T){const S=i.get(T);if(S.__webglInit===void 0)return;const H=T.source,ae=f.get(H);if(ae){const me=ae[S.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(T),Object.keys(ae).length===0&&f.delete(H)}i.remove(T)}function C(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const H=T.source,ae=f.get(H);delete ae[S.__cacheKey],a.memory.textures--}function y(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let me=0;me<S.__webglFramebuffer[ae].length;me++)n.deleteFramebuffer(S.__webglFramebuffer[ae][me]);else n.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)n.deleteFramebuffer(S.__webglFramebuffer[ae]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=T.textures;for(let ae=0,me=H.length;ae<me;ae++){const te=i.get(H[ae]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(H[ae])}i.remove(T)}let O=0;function Y(){O=0}function Z(){const T=O;return T>=s.maxTextures&&lt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function he(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function ee(T,S){const H=i.get(T);if(T.isVideoTexture&&ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){const ae=T.image;if(ae===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,T,S);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function J(T,S){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){K(H,T,S);return}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function ne(T,S){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){K(H,T,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function $(T,S){const H=i.get(T);if(T.version>0&&H.__version!==T.version){k(H,T,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const xe={[Ps]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},Se={[Sn]:n.NEAREST,[y_]:n.NEAREST_MIPMAP_NEAREST,[Pa]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},Oe={[w_]:n.NEVER,[L_]:n.ALWAYS,[A_]:n.LESS,[Gp]:n.LEQUAL,[C_]:n.EQUAL,[D_]:n.GEQUAL,[R_]:n.GREATER,[P_]:n.NOTEQUAL};function pe(T,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===pl||S.magFilter===Pa||S.magFilter===ss||S.minFilter===Jt||S.minFilter===pl||S.minFilter===Pa||S.minFilter===ss)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,xe[S.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,xe[S.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,xe[S.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Se[S.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Sn||S.minFilter!==Pa&&S.minFilter!==ss||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function _e(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",D));const ae=S.source;let me=f.get(ae);me===void 0&&(me={},f.set(ae,me));const te=he(S);if(te!==T.__cacheKey){me[te]===void 0&&(me[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),me[te].usedTimes++;const Ve=me[T.__cacheKey];Ve!==void 0&&(me[T.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(S)),T.__cacheKey=te,T.__webglTexture=me[te].texture}return H}function Ie(T,S,H){return Math.floor(Math.floor(T/H)/S)}function $e(T,S,H,ae){const te=T.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,H,ae,S.data);else{te.sort((we,Re)=>we.start-Re.start);let Ve=0;for(let we=1;we<te.length;we++){const Re=te[Ve],Ge=te[we],Je=Re.start+Re.count,Ne=Ie(Ge.start,S.width,4),Ze=Ie(Re.start,S.width,4);Ge.start<=Je+1&&Ne===Ze&&Ie(Ge.start+Ge.count-1,S.width,4)===Ne?Re.count=Math.max(Re.count,Ge.start+Ge.count-Re.start):(++Ve,te[Ve]=Ge)}te.length=Ve+1;const Pe=n.getParameter(n.UNPACK_ROW_LENGTH),qe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let we=0,Re=te.length;we<Re;we++){const Ge=te[we],Je=Math.floor(Ge.start/4),Ne=Math.ceil(Ge.count/4),Ze=Je%S.width,V=Math.floor(Je/S.width),Be=Ne,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ze,V,Be,oe,H,ae,S.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ye)}}function K(T,S,H){let ae=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=n.TEXTURE_3D);const me=_e(T,S),te=S.source;t.bindTexture(ae,T.__webglTexture,n.TEXTURE0+H);const Ve=i.get(te);if(te.version!==Ve.__version||me===!0){t.activeTexture(n.TEXTURE0+H);const Pe=_t.getPrimaries(_t.workingColorSpace),qe=S.colorSpace===ns?null:_t.getPrimaries(S.colorSpace),Ye=S.colorSpace===ns||Pe===qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let we=v(S.image,!1,s.maxTextureSize);we=re(S,we);const Re=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type);let Je=b(S.internalFormat,Re,Ge,S.colorSpace,S.isVideoTexture);pe(ae,S);let Ne;const Ze=S.mipmaps,V=S.isVideoTexture!==!0,Be=Ve.__version===void 0||me===!0,oe=te.dataReady,Fe=F(S,we);if(S.isDepthTexture)Je=w(S.format===Mr,S.type),Be&&(V?t.texStorage2D(n.TEXTURE_2D,1,Je,we.width,we.height):t.texImage2D(n.TEXTURE_2D,0,Je,we.width,we.height,0,Re,Ge,null));else if(S.isDataTexture)if(Ze.length>0){V&&Be&&t.texStorage2D(n.TEXTURE_2D,Fe,Je,Ze[0].width,Ze[0].height);for(let Le=0,Te=Ze.length;Le<Te;Le++)Ne=Ze[Le],V?oe&&t.texSubImage2D(n.TEXTURE_2D,Le,0,0,Ne.width,Ne.height,Re,Ge,Ne.data):t.texImage2D(n.TEXTURE_2D,Le,Je,Ne.width,Ne.height,0,Re,Ge,Ne.data);S.generateMipmaps=!1}else V?(Be&&t.texStorage2D(n.TEXTURE_2D,Fe,Je,we.width,we.height),oe&&$e(S,we,Re,Ge)):t.texImage2D(n.TEXTURE_2D,0,Je,we.width,we.height,0,Re,Ge,we.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){V&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Je,Ze[0].width,Ze[0].height,we.depth);for(let Le=0,Te=Ze.length;Le<Te;Le++)if(Ne=Ze[Le],S.format!==tn)if(Re!==null)if(V){if(oe)if(S.layerUpdates.size>0){const et=Mf(Ne.width,Ne.height,S.format,S.type);for(const ot of S.layerUpdates){const j=Ne.data.subarray(ot*et/Ne.data.BYTES_PER_ELEMENT,(ot+1)*et/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Le,0,0,ot,Ne.width,Ne.height,1,Re,j)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Le,0,0,0,Ne.width,Ne.height,we.depth,Re,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Le,Je,Ne.width,Ne.height,we.depth,0,Ne.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Le,0,0,0,Ne.width,Ne.height,we.depth,Re,Ge,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Le,Je,Ne.width,Ne.height,we.depth,0,Re,Ge,Ne.data)}else{V&&Be&&t.texStorage2D(n.TEXTURE_2D,Fe,Je,Ze[0].width,Ze[0].height);for(let Le=0,Te=Ze.length;Le<Te;Le++)Ne=Ze[Le],S.format!==tn?Re!==null?V?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Le,0,0,Ne.width,Ne.height,Re,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,Le,Je,Ne.width,Ne.height,0,Ne.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?oe&&t.texSubImage2D(n.TEXTURE_2D,Le,0,0,Ne.width,Ne.height,Re,Ge,Ne.data):t.texImage2D(n.TEXTURE_2D,Le,Je,Ne.width,Ne.height,0,Re,Ge,Ne.data)}else if(S.isDataArrayTexture)if(V){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Je,we.width,we.height,we.depth),oe)if(S.layerUpdates.size>0){const Le=Mf(we.width,we.height,S.format,S.type);for(const Te of S.layerUpdates){const et=we.data.subarray(Te*Le/we.data.BYTES_PER_ELEMENT,(Te+1)*Le/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Te,we.width,we.height,1,Re,Ge,et)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Re,Ge,we.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Je,we.width,we.height,we.depth,0,Re,Ge,we.data);else if(S.isData3DTexture)V?(Be&&t.texStorage3D(n.TEXTURE_3D,Fe,Je,we.width,we.height,we.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Re,Ge,we.data)):t.texImage3D(n.TEXTURE_3D,0,Je,we.width,we.height,we.depth,0,Re,Ge,we.data);else if(S.isFramebufferTexture){if(Be)if(V)t.texStorage2D(n.TEXTURE_2D,Fe,Je,we.width,we.height);else{let Le=we.width,Te=we.height;for(let et=0;et<Fe;et++)t.texImage2D(n.TEXTURE_2D,et,Je,Le,Te,0,Re,Ge,null),Le>>=1,Te>>=1}}else if(Ze.length>0){if(V&&Be){const Le=De(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Fe,Je,Le.width,Le.height)}for(let Le=0,Te=Ze.length;Le<Te;Le++)Ne=Ze[Le],V?oe&&t.texSubImage2D(n.TEXTURE_2D,Le,0,0,Re,Ge,Ne):t.texImage2D(n.TEXTURE_2D,Le,Je,Re,Ge,Ne);S.generateMipmaps=!1}else if(V){if(Be){const Le=De(we);t.texStorage2D(n.TEXTURE_2D,Fe,Je,Le.width,Le.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ge,we)}else t.texImage2D(n.TEXTURE_2D,0,Je,Re,Ge,we);g(S)&&p(ae),Ve.__version=te.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function k(T,S,H){if(S.image.length!==6)return;const ae=_e(T,S),me=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+H);const te=i.get(me);if(me.version!==te.__version||ae===!0){t.activeTexture(n.TEXTURE0+H);const Ve=_t.getPrimaries(_t.workingColorSpace),Pe=S.colorSpace===ns?null:_t.getPrimaries(S.colorSpace),qe=S.colorSpace===ns||Ve===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,we=S.image[0]&&S.image[0].isDataTexture,Re=[];for(let Te=0;Te<6;Te++)!Ye&&!we?Re[Te]=v(S.image[Te],!0,s.maxCubemapSize):Re[Te]=we?S.image[Te].image:S.image[Te],Re[Te]=re(S,Re[Te]);const Ge=Re[0],Je=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),Ze=b(S.internalFormat,Je,Ne,S.colorSpace),V=S.isVideoTexture!==!0,Be=te.__version===void 0||ae===!0,oe=me.dataReady;let Fe=F(S,Ge);pe(n.TEXTURE_CUBE_MAP,S);let Le;if(Ye){V&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Ze,Ge.width,Ge.height);for(let Te=0;Te<6;Te++){Le=Re[Te].mipmaps;for(let et=0;et<Le.length;et++){const ot=Le[et];S.format!==tn?Je!==null?V?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,ot.width,ot.height,Je,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,Ze,ot.width,ot.height,0,ot.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,ot.width,ot.height,Je,Ne,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,Ze,ot.width,ot.height,0,Je,Ne,ot.data)}}}else{if(Le=S.mipmaps,V&&Be){Le.length>0&&Fe++;const Te=De(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Ze,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(we){V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Re[Te].width,Re[Te].height,Je,Ne,Re[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ze,Re[Te].width,Re[Te].height,0,Je,Ne,Re[Te].data);for(let et=0;et<Le.length;et++){const j=Le[et].image[Te].image;V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,j.width,j.height,Je,Ne,j.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,Ze,j.width,j.height,0,Je,Ne,j.data)}}else{V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Je,Ne,Re[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ze,Je,Ne,Re[Te]);for(let et=0;et<Le.length;et++){const ot=Le[et];V?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,Je,Ne,ot.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,Ze,Je,Ne,ot.image[Te])}}}g(S)&&p(n.TEXTURE_CUBE_MAP),te.__version=me.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function le(T,S,H,ae,me,te){const Ve=r.convert(H.format,H.colorSpace),Pe=r.convert(H.type),qe=b(H.internalFormat,Ve,Pe,H.colorSpace),Ye=i.get(S),we=i.get(H);if(we.__renderTarget=S,!Ye.__hasExternalTextures){const Re=Math.max(1,S.width>>te),Ge=Math.max(1,S.height>>te);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,te,qe,Re,Ge,S.depth,0,Ve,Pe,null):t.texImage2D(me,te,qe,Re,Ge,0,Ve,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ue(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,me,we.__webglTexture,0,Ee(S)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,me,we.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(T,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,T),S.depthBuffer){const ae=S.depthTexture,me=ae&&ae.isDepthTexture?ae.type:null,te=w(S.stencilBuffer,me),Ve=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=Ee(S);ue(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,te,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,te,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,te,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,T)}else{const ae=S.textures;for(let me=0;me<ae.length;me++){const te=ae[me],Ve=r.convert(te.format,te.colorSpace),Pe=r.convert(te.type),qe=b(te.internalFormat,Ve,Pe,te.colorSpace),Ye=Ee(S);H&&ue(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,qe,S.width,S.height):ue(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,qe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,qe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(S.depthTexture);ae.__renderTarget=S,(!ae.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const me=ae.__webglTexture,te=Ee(S);if(S.depthTexture.format===ga)ue(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(S.depthTexture.format===Mr)ue(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ke(T){const S=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const ae=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){const me=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",me)};ae.addEventListener("dispose",me),S.__depthDisposeCallback=me}S.__boundDepthTexture=ae}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const ae=T.texture.mipmaps;ae&&ae.length>0?be(S.__webglFramebuffer[0],T):be(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[ae],T,!1);else{const me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,te)}}else{const ae=T.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,T,!1);else{const me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(T,S,H){const ae=i.get(T);S!==void 0&&le(ae.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ke(T)}function U(T){const S=T.texture,H=i.get(T),ae=i.get(S);T.addEventListener("dispose",L);const me=T.textures,te=T.isWebGLCubeRenderTarget===!0,Ve=me.length>1;if(Ve||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=S.version,a.memory.textures++),te){H.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[Pe]=[];for(let qe=0;qe<S.mipmaps.length;qe++)H.__webglFramebuffer[Pe][qe]=n.createFramebuffer()}else H.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)H.__webglFramebuffer[Pe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let Pe=0,qe=me.length;Pe<qe;Pe++){const Ye=i.get(me[Pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ue(T)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Pe=0;Pe<me.length;Pe++){const qe=me[Pe];H.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Pe]);const Ye=r.convert(qe.format,qe.colorSpace),we=r.convert(qe.type),Re=b(qe.internalFormat,Ye,we,qe.colorSpace,T.isXRRenderTarget===!0),Ge=Ee(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Re,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,H.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),pe(n.TEXTURE_CUBE_MAP,S);for(let Pe=0;Pe<6;Pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let qe=0;qe<S.mipmaps.length;qe++)le(H.__webglFramebuffer[Pe][qe],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,qe);else le(H.__webglFramebuffer[Pe],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);g(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Pe=0,qe=me.length;Pe<qe;Pe++){const Ye=me[Pe],we=i.get(Ye);let Re=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,we.__webglTexture),pe(Re,Ye),le(H.__webglFramebuffer,T,Ye,n.COLOR_ATTACHMENT0+Pe,Re,0),g(Ye)&&p(Re)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ae.__webglTexture),pe(Pe,S),S.mipmaps&&S.mipmaps.length>0)for(let qe=0;qe<S.mipmaps.length;qe++)le(H.__webglFramebuffer[qe],T,S,n.COLOR_ATTACHMENT0,Pe,qe);else le(H.__webglFramebuffer,T,S,n.COLOR_ATTACHMENT0,Pe,0);g(S)&&p(Pe),t.unbindTexture()}T.depthBuffer&&ke(T)}function G(T){const S=T.textures;for(let H=0,ae=S.length;H<ae;H++){const me=S[H];if(g(me)){const te=M(T),Ve=i.get(me).__webglTexture;t.bindTexture(te,Ve),p(te),t.unbindTexture()}}}const E=[],ce=[];function se(T){if(T.samples>0){if(ue(T)===!1){const S=T.textures,H=T.width,ae=T.height;let me=n.COLOR_BUFFER_BIT;const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(T),Pe=S.length>1;if(Pe)for(let Ye=0;Ye<S.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const qe=T.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ye=0;Ye<S.length;Ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ye]);const we=i.get(S[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,H,ae,0,0,H,ae,me,n.NEAREST),l===!0&&(E.length=0,ce.length=0,E.push(n.COLOR_ATTACHMENT0+Ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(E.push(te),ce.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,E))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let Ye=0;Ye<S.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ye]);const we=i.get(S[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ee(T){return Math.min(s.maxSamples,T.samples)}function ue(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(T){const S=a.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function re(T,S){const H=T.colorSpace,ae=T.format,me=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Ln&&H!==ns&&(_t.getTransfer(H)===yt?(ae!==tn||me!==di)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",H)),S}function De(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=$,this.rebindTextures=I,this.setupRenderTarget=U,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ue}function LE(n,e){function t(i,s=ns){let r;const a=_t.getTransfer(s);if(i===di)return n.UNSIGNED_BYTE;if(i===Lu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fp)return n.BYTE;if(i===Op)return n.SHORT;if(i===ma)return n.UNSIGNED_SHORT;if(i===Du)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Yt)return n.HALF_FLOAT;if(i===zp)return n.ALPHA;if(i===Vp)return n.RGB;if(i===tn)return n.RGBA;if(i===ga)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===Ts)return n.RED;if(i===Uu)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===Nu)return n.RG_INTEGER;if(i===Fu)return n.RGBA_INTEGER;if(i===mo||i===go||i===xo||i===_o)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===wc||i===Ac||i===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Pc||i===Dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rc||i===Pc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Ic||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Vc||i===Hc||i===Gc||i===Wc||i===Xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yc||i===jc||i===qc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yc)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zc||i===Kc||i===$c||i===Jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const IE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class NE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zt({vertexShader:IE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends Us{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const v=typeof XRWebGLBinding<"u",g=new NE,p={},M=t.getContextAttributes();let b=null,w=null;const F=[],D=[],L=new Qe;let X=null;const C=new An;C.viewport=new At;const y=new An;y.viewport=new At;const O=[C,y],Y=new Jv;let Z=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let k=F[K];return k===void 0&&(k=new Nl,F[K]=k),k.getTargetRaySpace()},this.getControllerGrip=function(K){let k=F[K];return k===void 0&&(k=new Nl,F[K]=k),k.getGripSpace()},this.getHand=function(K){let k=F[K];return k===void 0&&(k=new Nl,F[K]=k),k.getHandSpace()};function ee(K){const k=D.indexOf(K.inputSource);if(k===-1)return;const le=F[k];le!==void 0&&(le.update(K.inputSource,K.frame,c||a),le.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ne);for(let K=0;K<F.length;K++){const k=D[K];k!==null&&(D[K]=null,F[K].disconnect(k))}Z=null,he=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(b),d=null,f=null,h=null,s=null,w=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(X),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ve=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?Mr:ga,ve=M.stencil?br:Ds);const ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new en(f.textureWidth,f.textureHeight,{format:tn,type:di,depthTexture:new Gu(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new en(d.framebufferWidth,d.framebufferHeight,{format:tn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(K){for(let k=0;k<K.removed.length;k++){const le=K.removed[k],ve=D.indexOf(le);ve>=0&&(D[ve]=null,F[ve].disconnect(le))}for(let k=0;k<K.added.length;k++){const le=K.added[k];let ve=D.indexOf(le);if(ve===-1){for(let ke=0;ke<F.length;ke++)if(ke>=D.length){D.push(le),ve=ke;break}else if(D[ke]===null){D[ke]=le,ve=ke;break}if(ve===-1)break}const be=F[ve];be&&be.connect(le)}}const $=new Q,xe=new Q;function Se(K,k,le){$.setFromMatrixPosition(k.matrixWorld),xe.setFromMatrixPosition(le.matrixWorld);const ve=$.distanceTo(xe),be=k.projectionMatrix.elements,ke=le.projectionMatrix.elements,I=be[14]/(be[10]-1),U=be[14]/(be[10]+1),G=(be[9]+1)/be[5],E=(be[9]-1)/be[5],ce=(be[8]-1)/be[0],se=(ke[8]+1)/ke[0],Ee=I*ce,ue=I*se,ye=ve/(-ce+se),re=ye*-ce;if(k.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(re),K.translateZ(ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(k.projectionMatrix),K.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const De=I+ye,T=U+ye,S=Ee-re,H=ue+(ve-re),ae=G*U/T*De,me=E*U/T*De;K.projectionMatrix.makePerspective(S,H,ae,me,De,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Oe(K,k){k===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(k.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let k=K.near,le=K.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(le=g.depthFar)),Y.near=y.near=C.near=k,Y.far=y.far=C.far=le,(Z!==Y.near||he!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Z=Y.near,he=Y.far),Y.layers.mask=K.layers.mask|6,C.layers.mask=Y.layers.mask&3,y.layers.mask=Y.layers.mask&5;const ve=K.parent,be=Y.cameras;Oe(Y,ve);for(let ke=0;ke<be.length;ke++)Oe(be[ke],ve);be.length===2?Se(Y,C,y):Y.projectionMatrix.copy(C.projectionMatrix),pe(K,Y,ve)};function pe(K,k,le){le===null?K.matrix.copy(k.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(k.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(k.projectionMatrix),K.projectionMatrixInverse.copy(k.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Y)},this.getCameraTexture=function(K){return p[K]};let _e=null;function Ie(K,k){if(u=k.getViewerPose(c||a),_=k,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let ve=!1;le.length!==Y.cameras.length&&(Y.cameras.length=0,ve=!0);for(let U=0;U<le.length;U++){const G=le[U];let E=null;if(d!==null)E=d.getViewport(G);else{const se=h.getViewSubImage(f,G);E=se.viewport,U===0&&(e.setRenderTargetTextures(w,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(w))}let ce=O[U];ce===void 0&&(ce=new An,ce.layers.enable(U),ce.viewport=new At,O[U]=ce),ce.matrix.fromArray(G.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(G.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(E.x,E.y,E.width,E.height),U===0&&(Y.matrix.copy(ce.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ve===!0&&Y.cameras.push(ce)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const U=h.getDepthInformation(le[0]);U&&U.isValid&&U.texture&&g.init(U,s.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let U=0;U<le.length;U++){const G=le[U].camera;if(G){let E=p[G];E||(E=new sm,p[G]=E);const ce=h.getCameraImage(G);E.sourceTexture=ce}}}}for(let le=0;le<F.length;le++){const ve=D[le],be=F[le];ve!==null&&be!==void 0&&be.update(ve,k,c||a)}_e&&_e(K,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const $e=new am;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(K){_e=K},this.dispose=function(){}}}const bs=new pi,OE=new Mt;function BE(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Kp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,b,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,w)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,w=M.envMapRotation;b&&(g.envMap.value=b,bs.copy(w),bs.x*=-1,bs.y*=-1,bs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),g.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(bs)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const w=b.program;i.uniformBlockBinding(M,w)}function c(M,b){let w=s[M.id];w===void 0&&(_(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",g));const F=b.program;i.updateUBOMapping(M,F);const D=e.render.frame;r[M.id]!==D&&(f(M),r[M.id]=D)}function u(M){const b=h();M.__bindingPointIndex=b;const w=n.createBuffer(),F=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,F,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=s[M.id],w=M.uniforms,F=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,L=w.length;D<L;D++){const X=Array.isArray(w[D])?w[D]:[w[D]];for(let C=0,y=X.length;C<y;C++){const O=X[C];if(d(O,D,C,F)===!0){const Y=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value];let he=0;for(let ee=0;ee<Z.length;ee++){const J=Z[ee],ne=v(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,Y+he,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,he),he+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,w,F){const D=M.value,L=b+"_"+w;if(F[L]===void 0)return typeof D=="number"||typeof D=="boolean"?F[L]=D:F[L]=D.clone(),!0;{const X=F[L];if(typeof D=="number"||typeof D=="boolean"){if(X!==D)return F[L]=D,!0}else if(X.equals(D)===!1)return X.copy(D),!0}return!1}function _(M){const b=M.uniforms;let w=0;const F=16;for(let L=0,X=b.length;L<X;L++){const C=Array.isArray(b[L])?b[L]:[b[L]];for(let y=0,O=C.length;y<O;y++){const Y=C[y],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let he=0,ee=Z.length;he<ee;he++){const J=Z[he],ne=v(J),$=w%F,xe=$%ne.boundary,Se=$+xe;w+=xe,Se!==0&&F-Se<ne.storage&&(w+=F-Se),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=ne.storage}}}const D=w%F;return D>0&&(w+=F-D),M.__size=w,M.__cache={},this}function v(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){const b=M.target;b.removeEventListener("dispose",g);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const zE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ai=null;function VE(){return Ai===null&&(Ai=new Vu(zE,32,32,ts,Yt),Ai.minFilter=Jt,Ai.magFilter=Jt,Ai.wrapS=vn,Ai.wrapT=vn,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class HE{constructor(e={}){const{canvas:t=U_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const _=new Set([Fu,Nu,Uu]),v=new Set([di,Ds,ma,br,Lu,Iu]),g=new Uint32Array(4),p=new Int32Array(4);let M=null,b=null;const w=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1;this._outputColorSpace=wn;let X=0,C=0,y=null,O=-1,Y=null;const Z=new At,he=new At;let ee=null;const J=new st(0);let ne=0,$=t.width,xe=t.height,Se=1,Oe=null,pe=null;const _e=new At(0,0,$,xe),Ie=new At(0,0,$,xe);let $e=!1;const K=new Hu;let k=!1,le=!1;const ve=new Mt,be=new Q,ke=new At,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function G(){return y===null?Se:1}let E=i;function ce(x,P){return t.getContext(x,P)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pu}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",et,!1),E===null){const P="webgl2";if(E=ce(P,x),E===null)throw ce(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw x("WebGLRenderer: "+x.message),x}let se,Ee,ue,ye,re,De,T,S,H,ae,me,te,Ve,Pe,qe,Ye,we,Re,Ge,Je,Ne,Ze,V,Be;function oe(){se=new KM(E),se.init(),Ze=new LE(E,se),Ee=new VM(E,se,e,Ze),ue=new PE(E,se),Ee.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),ye=new QM(E),re=new xE,De=new DE(E,se,ue,re,Ee,Ze,ye),T=new GM(D),S=new ZM(D),H=new iS(E),V=new kM(E,H),ae=new $M(E,H,ye,V),me=new ty(E,ae,H,ye),Ge=new ey(E,Ee,De),Ye=new HM(re),te=new gE(D,T,S,se,Ee,V,Ye),Ve=new BE(D,re),Pe=new vE,qe=new TE(se),Re=new BM(D,T,S,ue,me,d,l),we=new CE(D,me,Ee),Be=new kE(E,ye,Ee,ue),Je=new zM(E,se,ye),Ne=new JM(E,se,ye),ye.programs=te.programs,D.capabilities=Ee,D.extensions=se,D.properties=re,D.renderLists=Pe,D.shadowMap=we,D.state=ue,D.info=ye}oe();const Fe=new FE(D,E);this.xr=Fe,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const x=se.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=se.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(x){x!==void 0&&(Se=x,this.setSize($,xe,!1))},this.getSize=function(x){return x.set($,xe)},this.setSize=function(x,P,z=!0){if(Fe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,xe=P,t.width=Math.floor(x*Se),t.height=Math.floor(P*Se),z===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set($*Se,xe*Se).floor()},this.setDrawingBufferSize=function(x,P,z){$=x,xe=P,Se=z,t.width=Math.floor(x*z),t.height=Math.floor(P*z),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(Z)},this.getViewport=function(x){return x.copy(_e)},this.setViewport=function(x,P,z,R){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,P,z,R),ue.viewport(Z.copy(_e).multiplyScalar(Se).round())},this.getScissor=function(x){return x.copy(Ie)},this.setScissor=function(x,P,z,R){x.isVector4?Ie.set(x.x,x.y,x.z,x.w):Ie.set(x,P,z,R),ue.scissor(he.copy(Ie).multiplyScalar(Se).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(x){ue.setScissorTest($e=x)},this.setOpaqueSort=function(x){Oe=x},this.setTransparentSort=function(x){pe=x},this.getClearColor=function(x){return x.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,z=!0){let R=0;if(x){let N=!1;if(y!==null){const W=y.texture.format;N=_.has(W)}if(N){const W=y.texture.type,q=v.has(W),ie=Re.getClearColor(),de=Re.getClearAlpha(),ge=ie.r,Me=ie.g,Ae=ie.b;q?(g[0]=ge,g[1]=Me,g[2]=Ae,g[3]=de,E.clearBufferuiv(E.COLOR,0,g)):(p[0]=ge,p[1]=Me,p[2]=Ae,p[3]=de,E.clearBufferiv(E.COLOR,0,p))}else R|=E.COLOR_BUFFER_BIT}P&&(R|=E.DEPTH_BUFFER_BIT),z&&(R|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Re.dispose(),Pe.dispose(),qe.dispose(),re.dispose(),T.dispose(),S.dispose(),me.dispose(),V.dispose(),Be.dispose(),te.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Nt),Fe.removeEventListener("sessionend",Ft),Lt.stop()};function Le(x){x.preventDefault(),Lo("WebGLRenderer: Context Lost."),L=!0}function Te(){Lo("WebGLRenderer: Context Restored."),L=!1;const x=ye.autoReset,P=we.enabled,z=we.autoUpdate,R=we.needsUpdate,N=we.type;oe(),ye.autoReset=x,we.enabled=P,we.autoUpdate=z,we.needsUpdate=R,we.type=N}function et(x){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ot(x){const P=x.target;P.removeEventListener("dispose",ot),j(P)}function j(x){fe(x),re.remove(x)}function fe(x){const P=re.get(x).programs;P!==void 0&&(P.forEach(function(z){te.releaseProgram(z)}),x.isShaderMaterial&&te.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,z,R,N,W){P===null&&(P=I);const q=N.isMesh&&N.matrixWorld.determinant()<0,ie=$o(x,P,z,R,N);ue.setMaterial(R,q);let de=z.index,ge=1;if(R.wireframe===!0){if(de=ae.getWireframeAttribute(z),de===void 0)return;ge=2}const Me=z.drawRange,Ae=z.attributes.position;let Ce=Me.start*ge,Ue=(Me.start+Me.count)*ge;W!==null&&(Ce=Math.max(Ce,W.start*ge),Ue=Math.min(Ue,(W.start+W.count)*ge)),de!==null?(Ce=Math.max(Ce,0),Ue=Math.min(Ue,de.count)):Ae!=null&&(Ce=Math.max(Ce,0),Ue=Math.min(Ue,Ae.count));const je=Ue-Ce;if(je<0||je===1/0)return;V.setup(N,R,ie,z,de);let nt,it=Je;if(de!==null&&(nt=H.get(de),it=Ne,it.setIndex(nt)),N.isMesh)R.wireframe===!0?(ue.setLineWidth(R.wireframeLinewidth*G()),it.setMode(E.LINES)):it.setMode(E.TRIANGLES);else if(N.isLine){let Ke=R.linewidth;Ke===void 0&&(Ke=1),ue.setLineWidth(Ke*G()),N.isLineSegments?it.setMode(E.LINES):N.isLineLoop?it.setMode(E.LINE_LOOP):it.setMode(E.LINE_STRIP)}else N.isPoints?it.setMode(E.POINTS):N.isSprite&&it.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)_a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ke=N._multiDrawStarts,rt=N._multiDrawCounts,We=N._multiDrawCount,xt=de?H.get(de).bytesPerElement:1,It=re.get(R).currentProgram.getUniforms();for(let gt=0;gt<We;gt++)It.setValue(E,"_gl_DrawID",gt),it.render(Ke[gt]/xt,rt[gt])}else if(N.isInstancedMesh)it.renderInstances(Ce,je,N.count);else if(z.isInstancedBufferGeometry){const Ke=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,rt=Math.min(z.instanceCount,Ke);it.renderInstances(Ce,je,rt)}else it.render(Ce,je)};function He(x,P,z){x.transparent===!0&&x.side===Un&&x.forceSinglePass===!1?(x.side=Cn,x.needsUpdate=!0,Os(x,P,z),x.side=us,x.needsUpdate=!0,Os(x,P,z),x.side=Un):Os(x,P,z)}this.compile=function(x,P,z=null){z===null&&(z=x),b=qe.get(z),b.init(P),F.push(b),z.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(b.pushLight(N),N.castShadow&&b.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(b.pushLight(N),N.castShadow&&b.pushShadow(N))}),b.setupLights();const R=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const W=N.material;if(W)if(Array.isArray(W))for(let q=0;q<W.length;q++){const ie=W[q];He(ie,z,N),R.add(ie)}else He(W,z,N),R.add(W)}),b=F.pop(),R},this.compileAsync=function(x,P,z=null){const R=this.compile(x,P,z);return new Promise(N=>{function W(){if(R.forEach(function(q){re.get(q).currentProgram.isReady()&&R.delete(q)}),R.size===0){N(x);return}setTimeout(W,10)}se.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let tt=null;function ft(x){tt&&tt(x)}function Nt(){Lt.stop()}function Ft(){Lt.start()}const Lt=new am;Lt.setAnimationLoop(ft),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(x){tt=x,Fe.setAnimationLoop(x),x===null?Lt.stop():Lt.start()},Fe.addEventListener("sessionstart",Nt),Fe.addEventListener("sessionend",Ft),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(P),P=Fe.getCamera()),x.isScene===!0&&x.onBeforeRender(D,x,P,y),b=qe.get(x,F.length),b.init(P),F.push(b),ve.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),K.setFromProjectionMatrix(ve,ai,P.reversedDepth),le=this.localClippingEnabled,k=Ye.init(this.clippingPlanes,le),M=Pe.get(x,w.length),M.init(),w.push(M),Fe.enabled===!0&&Fe.isPresenting===!0){const W=D.xr.getDepthSensingMesh();W!==null&&Mn(W,P,-1/0,D.sortObjects)}Mn(x,P,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Oe,pe),U=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,U&&Re.addToRenderList(M,x),this.info.render.frame++,k===!0&&Ye.beginShadows();const z=b.state.shadowsArray;we.render(z,x,P),k===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=M.opaque,N=M.transmissive;if(b.setupLights(),P.isArrayCamera){const W=P.cameras;if(N.length>0)for(let q=0,ie=W.length;q<ie;q++){const de=W[q];Ta(R,N,x,de)}U&&Re.render(x);for(let q=0,ie=W.length;q<ie;q++){const de=W[q];gi(M,x,de,de.viewport)}}else N.length>0&&Ta(R,N,x,P),U&&Re.render(x),gi(M,x,P);y!==null&&C===0&&(De.updateMultisampleRenderTarget(y),De.updateRenderTargetMipmap(y)),x.isScene===!0&&x.onAfterRender(D,x,P),V.resetDefaultState(),O=-1,Y=null,F.pop(),F.length>0?(b=F[F.length-1],k===!0&&Ye.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Mn(x,P,z,R){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||K.intersectsSprite(x)){R&&ke.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ve);const q=me.update(x),ie=x.material;ie.visible&&M.push(x,q,ie,z,ke.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||K.intersectsObject(x))){const q=me.update(x),ie=x.material;if(R&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ke.copy(x.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),ke.copy(q.boundingSphere.center)),ke.applyMatrix4(x.matrixWorld).applyMatrix4(ve)),Array.isArray(ie)){const de=q.groups;for(let ge=0,Me=de.length;ge<Me;ge++){const Ae=de[ge],Ce=ie[Ae.materialIndex];Ce&&Ce.visible&&M.push(x,q,Ce,z,ke.z,Ae)}}else ie.visible&&M.push(x,q,ie,z,ke.z,null)}}const W=x.children;for(let q=0,ie=W.length;q<ie;q++)Mn(W[q],P,z,R)}function gi(x,P,z,R){const{opaque:N,transmissive:W,transparent:q}=x;b.setupLightsView(z),k===!0&&Ye.setGlobalState(D.clippingPlanes,z),R&&ue.viewport(Z.copy(R)),N.length>0&&Fs(N,P,z),W.length>0&&Fs(W,P,z),q.length>0&&Fs(q,P,z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ta(x,P,z,R){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[R.id]===void 0&&(b.state.transmissionRenderTarget[R.id]=new en(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Yt:di,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const W=b.state.transmissionRenderTarget[R.id],q=R.viewport||Z;W.setSize(q.z*D.transmissionResolutionScale,q.w*D.transmissionResolutionScale);const ie=D.getRenderTarget(),de=D.getActiveCubeFace(),ge=D.getActiveMipmapLevel();D.setRenderTarget(W),D.getClearColor(J),ne=D.getClearAlpha(),ne<1&&D.setClearColor(16777215,.5),D.clear(),U&&Re.render(z);const Me=D.toneMapping;D.toneMapping=ls;const Ae=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),b.setupLightsView(R),k===!0&&Ye.setGlobalState(D.clippingPlanes,R),Fs(x,z,R),De.updateMultisampleRenderTarget(W),De.updateRenderTargetMipmap(W),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ue=0,je=P.length;Ue<je;Ue++){const nt=P[Ue],{object:it,geometry:Ke,material:rt,group:We}=nt;if(rt.side===Un&&it.layers.test(R.layers)){const xt=rt.side;rt.side=Cn,rt.needsUpdate=!0,wa(it,z,R,Ke,rt,We),rt.side=xt,rt.needsUpdate=!0,Ce=!0}}Ce===!0&&(De.updateMultisampleRenderTarget(W),De.updateRenderTargetMipmap(W))}D.setRenderTarget(ie,de,ge),D.setClearColor(J,ne),Ae!==void 0&&(R.viewport=Ae),D.toneMapping=Me}function Fs(x,P,z){const R=P.isScene===!0?P.overrideMaterial:null;for(let N=0,W=x.length;N<W;N++){const q=x[N],{object:ie,geometry:de,group:ge}=q;let Me=q.material;Me.allowOverride===!0&&R!==null&&(Me=R),ie.layers.test(z.layers)&&wa(ie,P,z,de,Me,ge)}}function wa(x,P,z,R,N,W){x.onBeforeRender(D,P,z,R,N,W),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(D,P,z,R,x,W),N.transparent===!0&&N.side===Un&&N.forceSinglePass===!1?(N.side=Cn,N.needsUpdate=!0,D.renderBufferDirect(z,P,R,N,x,W),N.side=us,N.needsUpdate=!0,D.renderBufferDirect(z,P,R,N,x,W),N.side=Un):D.renderBufferDirect(z,P,R,N,x,W),x.onAfterRender(D,P,z,R,N,W)}function Os(x,P,z){P.isScene!==!0&&(P=I);const R=re.get(x),N=b.state.lights,W=b.state.shadowsArray,q=N.state.version,ie=te.getParameters(x,N.state,W,P,z),de=te.getProgramCacheKey(ie);let ge=R.programs;R.environment=x.isMeshStandardMaterial?P.environment:null,R.fog=P.fog,R.envMap=(x.isMeshStandardMaterial?S:T).get(x.envMap||R.environment),R.envMapRotation=R.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,ge===void 0&&(x.addEventListener("dispose",ot),ge=new Map,R.programs=ge);let Me=ge.get(de);if(Me!==void 0){if(R.currentProgram===Me&&R.lightsStateVersion===q)return Dr(x,ie),Me}else ie.uniforms=te.getUniforms(x),x.onBeforeCompile(ie,D),Me=te.acquireProgram(ie,de),ge.set(de,Me),R.uniforms=ie.uniforms;const Ae=R.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=Ye.uniform),Dr(x,ie),R.needsLights=$n(x),R.lightsStateVersion=q,R.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),R.currentProgram=Me,R.uniformsList=null,Me}function Pr(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=vo.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Dr(x,P){const z=re.get(x);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function $o(x,P,z,R,N){P.isScene!==!0&&(P=I),De.resetTextureUnits();const W=P.fog,q=R.isMeshStandardMaterial?P.environment:null,ie=y===null?D.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ln,de=(R.isMeshStandardMaterial?S:T).get(R.envMap||q),ge=R.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Me=!!z.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),Ae=!!z.morphAttributes.position,Ce=!!z.morphAttributes.normal,Ue=!!z.morphAttributes.color;let je=ls;R.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(je=D.toneMapping);const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=nt!==void 0?nt.length:0,Ke=re.get(R),rt=b.state.lights;if(k===!0&&(le===!0||x!==Y)){const Rt=x===Y&&R.id===O;Ye.setState(R,x,Rt)}let We=!1;R.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==rt.state.version||Ke.outputColorSpace!==ie||N.isBatchedMesh&&Ke.batching===!1||!N.isBatchedMesh&&Ke.batching===!0||N.isBatchedMesh&&Ke.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ke.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ke.instancing===!1||!N.isInstancedMesh&&Ke.instancing===!0||N.isSkinnedMesh&&Ke.skinning===!1||!N.isSkinnedMesh&&Ke.skinning===!0||N.isInstancedMesh&&Ke.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ke.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ke.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ke.instancingMorph===!1&&N.morphTexture!==null||Ke.envMap!==de||R.fog===!0&&Ke.fog!==W||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ye.numPlanes||Ke.numIntersection!==Ye.numIntersection)||Ke.vertexAlphas!==ge||Ke.vertexTangents!==Me||Ke.morphTargets!==Ae||Ke.morphNormals!==Ce||Ke.morphColors!==Ue||Ke.toneMapping!==je||Ke.morphTargetsCount!==it)&&(We=!0):(We=!0,Ke.__version=R.version);let xt=Ke.currentProgram;We===!0&&(xt=Os(R,P,N));let It=!1,gt=!1,dt=!1;const at=xt.getUniforms(),Ot=Ke.uniforms;if(ue.useProgram(xt.program)&&(It=!0,gt=!0,dt=!0),R.id!==O&&(O=R.id,gt=!0),It||Y!==x){ue.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),at.setValue(E,"projectionMatrix",x.projectionMatrix),at.setValue(E,"viewMatrix",x.matrixWorldInverse);const Gt=at.map.cameraPosition;Gt!==void 0&&Gt.setValue(E,be.setFromMatrixPosition(x.matrixWorld)),Ee.logarithmicDepthBuffer&&at.setValue(E,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&at.setValue(E,"isOrthographic",x.isOrthographicCamera===!0),Y!==x&&(Y=x,gt=!0,dt=!0)}if(N.isSkinnedMesh){at.setOptional(E,N,"bindMatrix"),at.setOptional(E,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),at.setValue(E,"boneTexture",Rt.boneTexture,De))}N.isBatchedMesh&&(at.setOptional(E,N,"batchingTexture"),at.setValue(E,"batchingTexture",N._matricesTexture,De),at.setOptional(E,N,"batchingIdTexture"),at.setValue(E,"batchingIdTexture",N._indirectTexture,De),at.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(E,"batchingColorTexture",N._colorsTexture,De));const Zt=z.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ge.update(N,z,xt),(gt||Ke.receiveShadow!==N.receiveShadow)&&(Ke.receiveShadow=N.receiveShadow,at.setValue(E,"receiveShadow",N.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(Ot.envMap.value=de,Ot.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&P.environment!==null&&(Ot.envMapIntensity.value=P.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=VE()),gt&&(at.setValue(E,"toneMappingExposure",D.toneMappingExposure),Ke.needsLights&&xi(Ot,dt),W&&R.fog===!0&&Ve.refreshFogUniforms(Ot,W),Ve.refreshMaterialUniforms(Ot,R,Se,xe,b.state.transmissionRenderTarget[x.id]),vo.upload(E,Pr(Ke),Ot,De)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(vo.upload(E,Pr(Ke),Ot,De),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&at.setValue(E,"center",N.center),at.setValue(E,"modelViewMatrix",N.modelViewMatrix),at.setValue(E,"normalMatrix",N.normalMatrix),at.setValue(E,"modelMatrix",N.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Rt=R.uniformsGroups;for(let Gt=0,Jo=Rt.length;Gt<Jo;Gt++){const fs=Rt[Gt];Be.update(fs,xt),Be.bind(fs,xt)}}return xt}function xi(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function $n(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(x,P,z){const R=re.get(x);R.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),re.get(x.texture).__webglTexture=P,re.get(x.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:z,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){const z=re.get(x);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0};const m=E.createFramebuffer();this.setRenderTarget=function(x,P=0,z=0){y=x,X=P,C=z;let R=!0,N=null,W=!1,q=!1;if(x){const de=re.get(x);if(de.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(E.FRAMEBUFFER,null),R=!1;else if(de.__webglFramebuffer===void 0)De.setupRenderTarget(x);else if(de.__hasExternalTextures)De.rebindTextures(x,re.get(x.texture).__webglTexture,re.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ae=x.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&re.has(Ae)&&(x.width!==Ae.image.width||x.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(x)}}const ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(q=!0);const Me=re.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Me[P])?N=Me[P][z]:N=Me[P],W=!0):x.samples>0&&De.useMultisampledRTT(x)===!1?N=re.get(x).__webglMultisampledFramebuffer:Array.isArray(Me)?N=Me[z]:N=Me,Z.copy(x.viewport),he.copy(x.scissor),ee=x.scissorTest}else Z.copy(_e).multiplyScalar(Se).floor(),he.copy(Ie).multiplyScalar(Se).floor(),ee=$e;if(z!==0&&(N=m),ue.bindFramebuffer(E.FRAMEBUFFER,N)&&R&&ue.drawBuffers(x,N),ue.viewport(Z),ue.scissor(he),ue.setScissorTest(ee),W){const de=re.get(x.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+P,de.__webglTexture,z)}else if(q){const de=P;for(let ge=0;ge<x.textures.length;ge++){const Me=re.get(x.textures[ge]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+ge,Me.__webglTexture,z,de)}}else if(x!==null&&z!==0){const de=re.get(x.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,de.__webglTexture,z)}O=-1},this.readRenderTargetPixels=function(x,P,z,R,N,W,q,ie=0){if(!(x&&x.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&q!==void 0&&(de=de[q]),de){ue.bindFramebuffer(E.FRAMEBUFFER,de);try{const ge=x.textures[ie],Me=ge.format,Ae=ge.type;if(!Ee.textureFormatReadable(Me)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Ae)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-R&&z>=0&&z<=x.height-N&&(x.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ie),E.readPixels(P,z,R,N,Ze.convert(Me),Ze.convert(Ae),W))}finally{const ge=y!==null?re.get(y).__webglFramebuffer:null;ue.bindFramebuffer(E.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(x,P,z,R,N,W,q,ie=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&q!==void 0&&(de=de[q]),de)if(P>=0&&P<=x.width-R&&z>=0&&z<=x.height-N){ue.bindFramebuffer(E.FRAMEBUFFER,de);const ge=x.textures[ie],Me=ge.format,Ae=ge.type;if(!Ee.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ce),E.bufferData(E.PIXEL_PACK_BUFFER,W.byteLength,E.STREAM_READ),x.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ie),E.readPixels(P,z,R,N,Ze.convert(Me),Ze.convert(Ae),0);const Ue=y!==null?re.get(y).__webglFramebuffer:null;ue.bindFramebuffer(E.FRAMEBUFFER,Ue);const je=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await N_(E,je,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ce),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,W),E.deleteBuffer(Ce),E.deleteSync(je),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,z=0){const R=Math.pow(2,-z),N=Math.floor(x.image.width*R),W=Math.floor(x.image.height*R),q=P!==null?P.x:0,ie=P!==null?P.y:0;De.setTexture2D(x,0),E.copyTexSubImage2D(E.TEXTURE_2D,z,0,0,q,ie,N,W),ue.unbindTexture()};const A=E.createFramebuffer(),B=E.createFramebuffer();this.copyTextureToTexture=function(x,P,z=null,R=null,N=0,W=null){W===null&&(N!==0?(_a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),W=N,N=0):W=0);let q,ie,de,ge,Me,Ae,Ce,Ue,je;const nt=x.isCompressedTexture?x.mipmaps[W]:x.image;if(z!==null)q=z.max.x-z.min.x,ie=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,ge=z.min.x,Me=z.min.y,Ae=z.isBox3?z.min.z:0;else{const Zt=Math.pow(2,-N);q=Math.floor(nt.width*Zt),ie=Math.floor(nt.height*Zt),x.isDataArrayTexture?de=nt.depth:x.isData3DTexture?de=Math.floor(nt.depth*Zt):de=1,ge=0,Me=0,Ae=0}R!==null?(Ce=R.x,Ue=R.y,je=R.z):(Ce=0,Ue=0,je=0);const it=Ze.convert(P.format),Ke=Ze.convert(P.type);let rt;P.isData3DTexture?(De.setTexture3D(P,0),rt=E.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(De.setTexture2DArray(P,0),rt=E.TEXTURE_2D_ARRAY):(De.setTexture2D(P,0),rt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,P.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,P.unpackAlignment);const We=E.getParameter(E.UNPACK_ROW_LENGTH),xt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),It=E.getParameter(E.UNPACK_SKIP_PIXELS),gt=E.getParameter(E.UNPACK_SKIP_ROWS),dt=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,nt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,nt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ge),E.pixelStorei(E.UNPACK_SKIP_ROWS,Me),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ae);const at=x.isDataArrayTexture||x.isData3DTexture,Ot=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){const Zt=re.get(x),Rt=re.get(P),Gt=re.get(Zt.__renderTarget),Jo=re.get(Rt.__renderTarget);ue.bindFramebuffer(E.READ_FRAMEBUFFER,Gt.__webglFramebuffer),ue.bindFramebuffer(E.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let fs=0;fs<de;fs++)at&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,re.get(x).__webglTexture,N,Ae+fs),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,re.get(P).__webglTexture,W,je+fs)),E.blitFramebuffer(ge,Me,q,ie,Ce,Ue,q,ie,E.DEPTH_BUFFER_BIT,E.NEAREST);ue.bindFramebuffer(E.READ_FRAMEBUFFER,null),ue.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||re.has(x)){const Zt=re.get(x),Rt=re.get(P);ue.bindFramebuffer(E.READ_FRAMEBUFFER,A),ue.bindFramebuffer(E.DRAW_FRAMEBUFFER,B);for(let Gt=0;Gt<de;Gt++)at?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Zt.__webglTexture,N,Ae+Gt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Zt.__webglTexture,N),Ot?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Rt.__webglTexture,W,je+Gt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Rt.__webglTexture,W),N!==0?E.blitFramebuffer(ge,Me,q,ie,Ce,Ue,q,ie,E.COLOR_BUFFER_BIT,E.NEAREST):Ot?E.copyTexSubImage3D(rt,W,Ce,Ue,je+Gt,ge,Me,q,ie):E.copyTexSubImage2D(rt,W,Ce,Ue,ge,Me,q,ie);ue.bindFramebuffer(E.READ_FRAMEBUFFER,null),ue.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ot?x.isDataTexture||x.isData3DTexture?E.texSubImage3D(rt,W,Ce,Ue,je,q,ie,de,it,Ke,nt.data):P.isCompressedArrayTexture?E.compressedTexSubImage3D(rt,W,Ce,Ue,je,q,ie,de,it,nt.data):E.texSubImage3D(rt,W,Ce,Ue,je,q,ie,de,it,Ke,nt):x.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,W,Ce,Ue,q,ie,it,Ke,nt.data):x.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,W,Ce,Ue,nt.width,nt.height,it,nt.data):E.texSubImage2D(E.TEXTURE_2D,W,Ce,Ue,q,ie,it,Ke,nt);E.pixelStorei(E.UNPACK_ROW_LENGTH,We),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,xt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,It),E.pixelStorei(E.UNPACK_SKIP_ROWS,gt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,dt),W===0&&P.generateMipmaps&&E.generateMipmap(rt),ue.unbindTexture()},this.initRenderTarget=function(x){re.get(x).__webglFramebuffer===void 0&&De.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?De.setTextureCube(x,0):x.isData3DTexture?De.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?De.setTexture2DArray(x,0):De.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){X=0,C=0,y=null,ue.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const Yf={type:"change"},Yu={type:"start"},hm={type:"end"},ro=new Ma,jf=new Qi,GE=Math.cos(70*Ji.DEG2RAD),Wt=new Q,yn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yl=1e-6;class WE extends tS{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Ls,this._lastTargetPosition=new Q,this._quat=new Ls().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bf,this._sphericalDelta=new bf,this._scale=1,this._panOffset=new Q,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new Q,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YE.bind(this),this._onPointerDown=XE.bind(this),this._onPointerUp=jE.bind(this),this._onContextMenu=e1.bind(this),this._onMouseWheel=KE.bind(this),this._onKeyDown=$E.bind(this),this._onTouchStart=JE.bind(this),this._onTouchMove=QE.bind(this),this._onMouseDown=qE.bind(this),this._onMouseMove=ZE.bind(this),this._interceptControlDown=t1.bind(this),this._interceptControlUp=n1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yf),this.update(),this.state=wt.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new Q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ro.origin.copy(this.object.position),ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ro.direction))<GE?this.object.lookAt(this.target):(jf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ro.intersectPlane(jf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yl||this._lastTargetPosition.distanceToSquared(this.target)>Yl?(this.dispatchEvent(Yf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function XE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function YE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function jE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hm),this.state=wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=wt.DOLLY;break;case ri.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=wt.ROTATE}break;case ri.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Yu)}function ZE(n){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function KE(n){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(n.preventDefault(),this.dispatchEvent(Yu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(hm))}function $E(n){this.enabled!==!1&&this._handleKeyDown(n)}function JE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=wt.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=wt.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Yu)}function QE(n){switch(this._trackPointer(n),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=wt.NONE}}function e1(n){this.enabled!==!1&&n.preventDefault()}function t1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var kn=Uint8Array,or=Uint16Array,i1=Int32Array,fm=new kn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dm=new kn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s1=new kn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pm=function(n,e){for(var t=new or(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new i1(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},mm=pm(fm,2),gm=mm.b,r1=mm.r;gm[28]=258,r1[258]=28;var a1=pm(dm,0),o1=a1.b,ru=new or(32768);for(var Ut=0;Ut<32768;++Ut){var Zi=(Ut&43690)>>1|(Ut&21845)<<1;Zi=(Zi&52428)>>2|(Zi&13107)<<2,Zi=(Zi&61680)>>4|(Zi&3855)<<4,ru[Ut]=((Zi&65280)>>8|(Zi&255)<<8)>>1}var aa=function(n,e,t){for(var i=n.length,s=0,r=new or(e);s<i;++s)n[s]&&++r[n[s]-1];var a=new or(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new or(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],u=e-n[s],h=a[n[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[ru[h]>>l]=c}else for(o=new or(i),s=0;s<i;++s)n[s]&&(o[s]=ru[a[n[s]-1]++]>>15-n[s]);return o},Ea=new kn(288);for(var Ut=0;Ut<144;++Ut)Ea[Ut]=8;for(var Ut=144;Ut<256;++Ut)Ea[Ut]=9;for(var Ut=256;Ut<280;++Ut)Ea[Ut]=7;for(var Ut=280;Ut<288;++Ut)Ea[Ut]=8;var xm=new kn(32);for(var Ut=0;Ut<32;++Ut)xm[Ut]=5;var l1=aa(Ea,9,1),c1=aa(xm,5,1),jl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Wn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},ql=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},u1=function(n){return(n+7)/8|0},h1=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new kn(n.subarray(e,t))},f1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Xn=function(n,e,t){var i=new Error(e||f1[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Xn),!t)throw i;return i},d1=function(n,e,t,i){var s=n.length,r=0;if(!s||e.f&&!e.l)return t||new kn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new kn(s*3));var c=function(ke){var I=t.length;if(ke>I){var U=new kn(Math.max(I*2,ke));U.set(t),t=U}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,_=e.d,v=e.m,g=e.n,p=s*8;do{if(!d){u=Wn(n,h,1);var M=Wn(n,h+1,3);if(h+=3,M)if(M==1)d=l1,_=c1,v=9,g=5;else if(M==2){var D=Wn(n,h,31)+257,L=Wn(n,h+10,15)+4,X=D+Wn(n,h+5,31)+1;h+=14;for(var C=new kn(X),y=new kn(19),O=0;O<L;++O)y[s1[O]]=Wn(n,h+O*3,7);h+=L*3;for(var Y=jl(y),Z=(1<<Y)-1,he=aa(y,Y,1),O=0;O<X;){var ee=he[Wn(n,h,Z)];h+=ee&15;var b=ee>>4;if(b<16)C[O++]=b;else{var J=0,ne=0;for(b==16?(ne=3+Wn(n,h,3),h+=2,J=C[O-1]):b==17?(ne=3+Wn(n,h,7),h+=3):b==18&&(ne=11+Wn(n,h,127),h+=7);ne--;)C[O++]=J}}var $=C.subarray(0,D),xe=C.subarray(D);v=jl($),g=jl(xe),d=aa($,v,1),_=aa(xe,g,1)}else Xn(1);else{var b=u1(h)+4,w=n[b-4]|n[b-3]<<8,F=b+w;if(F>s){l&&Xn(0);break}o&&c(f+w),t.set(n.subarray(b,F),f),e.b=f+=w,e.p=h=F*8,e.f=u;continue}if(h>p){l&&Xn(0);break}}o&&c(f+131072);for(var Se=(1<<v)-1,Oe=(1<<g)-1,pe=h;;pe=h){var J=d[ql(n,h)&Se],_e=J>>4;if(h+=J&15,h>p){l&&Xn(0);break}if(J||Xn(2),_e<256)t[f++]=_e;else if(_e==256){pe=h,d=null;break}else{var Ie=_e-254;if(_e>264){var O=_e-257,$e=fm[O];Ie=Wn(n,h,(1<<$e)-1)+gm[O],h+=$e}var K=_[ql(n,h)&Oe],k=K>>4;K||Xn(3),h+=K&15;var xe=o1[k];if(k>3){var $e=dm[k];xe+=ql(n,h)&(1<<$e)-1,h+=$e}if(h>p){l&&Xn(0);break}o&&c(f+131072);var le=f+Ie;if(f<xe){var ve=r-xe,be=Math.min(xe,le);for(ve+f<0&&Xn(3);f<be;++f)t[f]=i[ve+f]}for(;f<le;++f)t[f]=t[f-xe]}}e.l=d,e.p=pe,e.b=f,e.f=u,d&&(u=1,e.m=v,e.d=_,e.n=g)}while(!u);return f!=t.length&&a?h1(t,0,f):t.subarray(0,f)},p1=new kn(0),m1=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Xn(6,"invalid zlib data"),(n[1]>>5&1)==1&&Xn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function ao(n,e){return d1(n.subarray(m1(n),-4),{i:2},e,e)}var g1=typeof TextDecoder<"u"&&new TextDecoder,x1=0;try{g1.decode(p1,{stream:!0}),x1=1}catch{}class _1 extends zv{constructor(e){super(e),this.type=Yt,this.outputFormat=tn}parse(e){const C=Math.pow(2.7182818,2.2);function y(m,A){let B=0;for(let P=0;P<65536;++P)(P==0||m[P>>3]&1<<(P&7))&&(A[B++]=P);const x=B-1;for(;B<65536;)A[B++]=0;return x}function O(m){for(let A=0;A<16384;A++)m[A]={},m[A].len=0,m[A].lit=0,m[A].p=null}const Y={l:0,c:0,lc:0};function Z(m,A,B,x,P){for(;B<m;)A=A<<8|Je(x,P),B+=8;B-=m,Y.l=A>>B&(1<<m)-1,Y.c=A,Y.lc=B}const he=new Array(59);function ee(m){for(let B=0;B<=58;++B)he[B]=0;for(let B=0;B<65537;++B)he[m[B]]+=1;let A=0;for(let B=58;B>0;--B){const x=A+he[B]>>1;he[B]=A,A=x}for(let B=0;B<65537;++B){const x=m[B];x>0&&(m[B]=x|he[x]++<<6)}}function J(m,A,B,x,P,z){const R=A;let N=0,W=0;for(;x<=P;x++){if(R.value-A.value>B)return!1;Z(6,N,W,m,R);const q=Y.l;if(N=Y.c,W=Y.lc,z[x]=q,q==63){if(R.value-A.value>B)throw new Error("Something wrong with hufUnpackEncTable");Z(8,N,W,m,R);let ie=Y.l+6;if(N=Y.c,W=Y.lc,x+ie>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)z[x++]=0;x--}else if(q>=59){let ie=q-59+2;if(x+ie>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)z[x++]=0;x--}}ee(z)}function ne(m){return m&63}function $(m){return m>>6}function xe(m,A,B,x){for(;A<=B;A++){const P=$(m[A]),z=ne(m[A]);if(P>>z)throw new Error("Invalid table entry");if(z>14){const R=x[P>>z-14];if(R.len)throw new Error("Invalid table entry");if(R.lit++,R.p){const N=R.p;R.p=new Array(R.lit);for(let W=0;W<R.lit-1;++W)R.p[W]=N[W]}else R.p=new Array(1);R.p[R.lit-1]=A}else if(z){let R=0;for(let N=1<<14-z;N>0;N--){const W=x[(P<<14-z)+R];if(W.len||W.p)throw new Error("Invalid table entry");W.len=z,W.lit=A,R++}}}return!0}const Se={c:0,lc:0};function Oe(m,A,B,x){m=m<<8|Je(B,x),A+=8,Se.c=m,Se.lc=A}const pe={c:0,lc:0};function _e(m,A,B,x,P,z,R,N,W){if(m==A){x<8&&(Oe(B,x,P,z),B=Se.c,x=Se.lc),x-=8;let q=B>>x;if(q=new Uint8Array([q])[0],N.value+q>W)return!1;const ie=R[N.value-1];for(;q-- >0;)R[N.value++]=ie}else if(N.value<W)R[N.value++]=m;else return!1;pe.c=B,pe.lc=x}function Ie(m){return m&65535}function $e(m){const A=Ie(m);return A>32767?A-65536:A}const K={a:0,b:0};function k(m,A){const B=$e(m),P=$e(A),z=B+(P&1)+(P>>1),R=z,N=z-P;K.a=R,K.b=N}function le(m,A){const B=Ie(m),x=Ie(A),P=B-(x>>1)&65535,z=x+P-32768&65535;K.a=z,K.b=P}function ve(m,A,B,x,P,z,R){const N=R<16384,W=B>P?P:B;let q=1,ie,de;for(;q<=W;)q<<=1;for(q>>=1,ie=q,q>>=1;q>=1;){de=0;const ge=de+z*(P-ie),Me=z*q,Ae=z*ie,Ce=x*q,Ue=x*ie;let je,nt,it,Ke;for(;de<=ge;de+=Ae){let rt=de;const We=de+x*(B-ie);for(;rt<=We;rt+=Ue){const xt=rt+Ce,It=rt+Me,gt=It+Ce;N?(k(m[rt+A],m[It+A]),je=K.a,it=K.b,k(m[xt+A],m[gt+A]),nt=K.a,Ke=K.b,k(je,nt),m[rt+A]=K.a,m[xt+A]=K.b,k(it,Ke),m[It+A]=K.a,m[gt+A]=K.b):(le(m[rt+A],m[It+A]),je=K.a,it=K.b,le(m[xt+A],m[gt+A]),nt=K.a,Ke=K.b,le(je,nt),m[rt+A]=K.a,m[xt+A]=K.b,le(it,Ke),m[It+A]=K.a,m[gt+A]=K.b)}if(B&q){const xt=rt+Me;N?k(m[rt+A],m[xt+A]):le(m[rt+A],m[xt+A]),je=K.a,m[xt+A]=K.b,m[rt+A]=je}}if(P&q){let rt=de;const We=de+x*(B-ie);for(;rt<=We;rt+=Ue){const xt=rt+Ce;N?k(m[rt+A],m[xt+A]):le(m[rt+A],m[xt+A]),je=K.a,m[xt+A]=K.b,m[rt+A]=je}}ie=q,q>>=1}return de}function be(m,A,B,x,P,z,R,N,W){let q=0,ie=0;const de=R,ge=Math.trunc(x.value+(P+7)/8);for(;x.value<ge;)for(Oe(q,ie,B,x),q=Se.c,ie=Se.lc;ie>=14;){const Ae=q>>ie-14&16383,Ce=A[Ae];if(Ce.len)ie-=Ce.len,_e(Ce.lit,z,q,ie,B,x,N,W,de),q=pe.c,ie=pe.lc;else{if(!Ce.p)throw new Error("hufDecode issues");let Ue;for(Ue=0;Ue<Ce.lit;Ue++){const je=ne(m[Ce.p[Ue]]);for(;ie<je&&x.value<ge;)Oe(q,ie,B,x),q=Se.c,ie=Se.lc;if(ie>=je&&$(m[Ce.p[Ue]])==(q>>ie-je&(1<<je)-1)){ie-=je,_e(Ce.p[Ue],z,q,ie,B,x,N,W,de),q=pe.c,ie=pe.lc;break}}if(Ue==Ce.lit)throw new Error("hufDecode issues")}}const Me=8-P&7;for(q>>=Me,ie-=Me;ie>0;){const Ae=A[q<<14-ie&16383];if(Ae.len)ie-=Ae.len,_e(Ae.lit,z,q,ie,B,x,N,W,de),q=pe.c,ie=pe.lc;else throw new Error("hufDecode issues")}return!0}function ke(m,A,B,x,P,z){const R={value:0},N=B.value,W=Ge(A,B),q=Ge(A,B);B.value+=4;const ie=Ge(A,B);if(B.value+=4,W<0||W>=65537||q<0||q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const de=new Array(65537),ge=new Array(16384);O(ge);const Me=x-(B.value-N);if(J(m,B,Me,W,q,de),ie>8*(x-(B.value-N)))throw new Error("Something wrong with hufUncompress");xe(de,W,q,ge),be(de,ge,m,B,ie,q,z,P,R)}function I(m,A,B){for(let x=0;x<B;++x)A[x]=m[A[x]]}function U(m){for(let A=1;A<m.length;A++){const B=m[A-1]+m[A]-128;m[A]=B}}function G(m,A){let B=0,x=Math.floor((m.length+1)/2),P=0;const z=m.length-1;for(;!(P>z||(A[P++]=m[B++],P>z));)A[P++]=m[x++]}function E(m){let A=m.byteLength;const B=new Array;let x=0;const P=new DataView(m);for(;A>0;){const z=P.getInt8(x++);if(z<0){const R=-z;A-=R+1;for(let N=0;N<R;N++)B.push(P.getUint8(x++))}else{const R=z;A-=2;const N=P.getUint8(x++);for(let W=0;W<R+1;W++)B.push(N)}}return B}function ce(m,A,B,x,P,z){let R=new DataView(z.buffer);const N=B[m.idx[0]].width,W=B[m.idx[0]].height,q=3,ie=Math.floor(N/8),de=Math.ceil(N/8),ge=Math.ceil(W/8),Me=N-(de-1)*8,Ae=W-(ge-1)*8,Ce={value:0},Ue=new Array(q),je=new Array(q),nt=new Array(q),it=new Array(q),Ke=new Array(q);for(let We=0;We<q;++We)Ke[We]=A[m.idx[We]],Ue[We]=We<1?0:Ue[We-1]+de*ge,je[We]=new Float32Array(64),nt[We]=new Uint16Array(64),it[We]=new Uint16Array(de*64);for(let We=0;We<ge;++We){let xt=8;We==ge-1&&(xt=Ae);let It=8;for(let dt=0;dt<de;++dt){dt==de-1&&(It=Me);for(let at=0;at<q;++at)nt[at].fill(0),nt[at][0]=P[Ue[at]++],Ee(Ce,x,nt[at]),ue(nt[at],je[at]),ye(je[at]);re(je);for(let at=0;at<q;++at)De(je[at],it[at],dt*64)}let gt=0;for(let dt=0;dt<q;++dt){const at=B[m.idx[dt]].type;for(let Ot=8*We;Ot<8*We+xt;++Ot){gt=Ke[dt][Ot];for(let Zt=0;Zt<ie;++Zt){const Rt=Zt*64+(Ot&7)*8;R.setUint16(gt+0*2*at,it[dt][Rt+0],!0),R.setUint16(gt+1*2*at,it[dt][Rt+1],!0),R.setUint16(gt+2*2*at,it[dt][Rt+2],!0),R.setUint16(gt+3*2*at,it[dt][Rt+3],!0),R.setUint16(gt+4*2*at,it[dt][Rt+4],!0),R.setUint16(gt+5*2*at,it[dt][Rt+5],!0),R.setUint16(gt+6*2*at,it[dt][Rt+6],!0),R.setUint16(gt+7*2*at,it[dt][Rt+7],!0),gt+=8*2*at}}if(ie!=de)for(let Ot=8*We;Ot<8*We+xt;++Ot){const Zt=Ke[dt][Ot]+8*ie*2*at,Rt=ie*64+(Ot&7)*8;for(let Gt=0;Gt<It;++Gt)R.setUint16(Zt+Gt*2*at,it[dt][Rt+Gt],!0)}}}const rt=new Uint16Array(N);R=new DataView(z.buffer);for(let We=0;We<q;++We){B[m.idx[We]].decoded=!0;const xt=B[m.idx[We]].type;if(B[We].type==2)for(let It=0;It<W;++It){const gt=Ke[We][It];for(let dt=0;dt<N;++dt)rt[dt]=R.getUint16(gt+dt*2*xt,!0);for(let dt=0;dt<N;++dt)R.setFloat32(gt+dt*2*xt,oe(rt[dt]),!0)}}}function se(m,A,B,x,P,z){const R=new DataView(z.buffer),N=B[m],W=N.width,q=N.height,ie=Math.ceil(W/8),de=Math.ceil(q/8),ge=Math.floor(W/8),Me=W-(ie-1)*8,Ae=q-(de-1)*8,Ce={value:0};let Ue=0;const je=new Float32Array(64),nt=new Uint16Array(64),it=new Uint16Array(ie*64);for(let Ke=0;Ke<de;++Ke){let rt=8;Ke==de-1&&(rt=Ae);for(let We=0;We<ie;++We)nt.fill(0),nt[0]=P[Ue++],Ee(Ce,x,nt),ue(nt,je),ye(je),De(je,it,We*64);for(let We=8*Ke;We<8*Ke+rt;++We){let xt=A[m][We];for(let It=0;It<ge;++It){const gt=It*64+(We&7)*8;for(let dt=0;dt<8;++dt)R.setUint16(xt+dt*2*N.type,it[gt+dt],!0);xt+=8*2*N.type}if(ie!=ge){const It=ge*64+(We&7)*8;for(let gt=0;gt<Me;++gt)R.setUint16(xt+gt*2*N.type,it[It+gt],!0)}}}N.decoded=!0}function Ee(m,A,B){let x,P=1;for(;P<64;)x=A[m.value],x==65280?P=64:x>>8==255?P+=x&255:(B[P]=x,P++),m.value++}function ue(m,A){A[0]=oe(m[0]),A[1]=oe(m[1]),A[2]=oe(m[5]),A[3]=oe(m[6]),A[4]=oe(m[14]),A[5]=oe(m[15]),A[6]=oe(m[27]),A[7]=oe(m[28]),A[8]=oe(m[2]),A[9]=oe(m[4]),A[10]=oe(m[7]),A[11]=oe(m[13]),A[12]=oe(m[16]),A[13]=oe(m[26]),A[14]=oe(m[29]),A[15]=oe(m[42]),A[16]=oe(m[3]),A[17]=oe(m[8]),A[18]=oe(m[12]),A[19]=oe(m[17]),A[20]=oe(m[25]),A[21]=oe(m[30]),A[22]=oe(m[41]),A[23]=oe(m[43]),A[24]=oe(m[9]),A[25]=oe(m[11]),A[26]=oe(m[18]),A[27]=oe(m[24]),A[28]=oe(m[31]),A[29]=oe(m[40]),A[30]=oe(m[44]),A[31]=oe(m[53]),A[32]=oe(m[10]),A[33]=oe(m[19]),A[34]=oe(m[23]),A[35]=oe(m[32]),A[36]=oe(m[39]),A[37]=oe(m[45]),A[38]=oe(m[52]),A[39]=oe(m[54]),A[40]=oe(m[20]),A[41]=oe(m[22]),A[42]=oe(m[33]),A[43]=oe(m[38]),A[44]=oe(m[46]),A[45]=oe(m[51]),A[46]=oe(m[55]),A[47]=oe(m[60]),A[48]=oe(m[21]),A[49]=oe(m[34]),A[50]=oe(m[37]),A[51]=oe(m[47]),A[52]=oe(m[50]),A[53]=oe(m[56]),A[54]=oe(m[59]),A[55]=oe(m[61]),A[56]=oe(m[35]),A[57]=oe(m[36]),A[58]=oe(m[48]),A[59]=oe(m[49]),A[60]=oe(m[57]),A[61]=oe(m[58]),A[62]=oe(m[62]),A[63]=oe(m[63])}function ye(m){const A=.5*Math.cos(.7853975),B=.5*Math.cos(3.14159/16),x=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),z=.5*Math.cos(5*3.14159/16),R=.5*Math.cos(3*3.14159/8),N=.5*Math.cos(7*3.14159/16),W=new Array(4),q=new Array(4),ie=new Array(4),de=new Array(4);for(let ge=0;ge<8;++ge){const Me=ge*8;W[0]=x*m[Me+2],W[1]=R*m[Me+2],W[2]=x*m[Me+6],W[3]=R*m[Me+6],q[0]=B*m[Me+1]+P*m[Me+3]+z*m[Me+5]+N*m[Me+7],q[1]=P*m[Me+1]-N*m[Me+3]-B*m[Me+5]-z*m[Me+7],q[2]=z*m[Me+1]-B*m[Me+3]+N*m[Me+5]+P*m[Me+7],q[3]=N*m[Me+1]-z*m[Me+3]+P*m[Me+5]-B*m[Me+7],ie[0]=A*(m[Me+0]+m[Me+4]),ie[3]=A*(m[Me+0]-m[Me+4]),ie[1]=W[0]+W[3],ie[2]=W[1]-W[2],de[0]=ie[0]+ie[1],de[1]=ie[3]+ie[2],de[2]=ie[3]-ie[2],de[3]=ie[0]-ie[1],m[Me+0]=de[0]+q[0],m[Me+1]=de[1]+q[1],m[Me+2]=de[2]+q[2],m[Me+3]=de[3]+q[3],m[Me+4]=de[3]-q[3],m[Me+5]=de[2]-q[2],m[Me+6]=de[1]-q[1],m[Me+7]=de[0]-q[0]}for(let ge=0;ge<8;++ge)W[0]=x*m[16+ge],W[1]=R*m[16+ge],W[2]=x*m[48+ge],W[3]=R*m[48+ge],q[0]=B*m[8+ge]+P*m[24+ge]+z*m[40+ge]+N*m[56+ge],q[1]=P*m[8+ge]-N*m[24+ge]-B*m[40+ge]-z*m[56+ge],q[2]=z*m[8+ge]-B*m[24+ge]+N*m[40+ge]+P*m[56+ge],q[3]=N*m[8+ge]-z*m[24+ge]+P*m[40+ge]-B*m[56+ge],ie[0]=A*(m[ge]+m[32+ge]),ie[3]=A*(m[ge]-m[32+ge]),ie[1]=W[0]+W[3],ie[2]=W[1]-W[2],de[0]=ie[0]+ie[1],de[1]=ie[3]+ie[2],de[2]=ie[3]-ie[2],de[3]=ie[0]-ie[1],m[0+ge]=de[0]+q[0],m[8+ge]=de[1]+q[1],m[16+ge]=de[2]+q[2],m[24+ge]=de[3]+q[3],m[32+ge]=de[3]-q[3],m[40+ge]=de[2]-q[2],m[48+ge]=de[1]-q[1],m[56+ge]=de[0]-q[0]}function re(m){for(let A=0;A<64;++A){const B=m[0][A],x=m[1][A],P=m[2][A];m[0][A]=B+1.5747*P,m[1][A]=B-.1873*x-.4682*P,m[2][A]=B+1.8556*x}}function De(m,A,B){for(let x=0;x<64;++x)A[B+x]=sf.toHalfFloat(T(m[x]))}function T(m){return m<=1?Math.sign(m)*Math.pow(Math.abs(m),2.2):Math.sign(m)*Math.pow(C,Math.abs(m)-1)}function S(m){return new DataView(m.array.buffer,m.offset.value,m.size)}function H(m){const A=m.viewer.buffer.slice(m.offset.value,m.offset.value+m.size),B=new Uint8Array(E(A)),x=new Uint8Array(B.length);return U(B),G(B,x),new DataView(x.buffer)}function ae(m){const A=m.array.slice(m.offset.value,m.offset.value+m.size),B=ao(A),x=new Uint8Array(B.length);return U(B),G(B,x),new DataView(x.buffer)}function me(m){const A=m.viewer,B={value:m.offset.value},x=new Uint16Array(m.columns*m.lines*(m.inputChannels.length*m.type)),P=new Uint8Array(8192);let z=0;const R=new Array(m.inputChannels.length);for(let Ae=0,Ce=m.inputChannels.length;Ae<Ce;Ae++)R[Ae]={},R[Ae].start=z,R[Ae].end=R[Ae].start,R[Ae].nx=m.columns,R[Ae].ny=m.lines,R[Ae].size=m.type,z+=R[Ae].nx*R[Ae].ny*R[Ae].size;const N=Fe(A,B),W=Fe(A,B);if(W>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(N<=W)for(let Ae=0;Ae<W-N+1;Ae++)P[Ae+N]=Ne(A,B);const q=new Uint16Array(65536),ie=y(P,q),de=Ge(A,B);ke(m.array,A,B,de,x,z);for(let Ae=0;Ae<m.inputChannels.length;++Ae){const Ce=R[Ae];for(let Ue=0;Ue<R[Ae].size;++Ue)ve(x,Ce.start+Ue,Ce.nx,Ce.size,Ce.ny,Ce.nx*Ce.size,ie)}I(q,x,z);let ge=0;const Me=new Uint8Array(x.buffer.byteLength);for(let Ae=0;Ae<m.lines;Ae++)for(let Ce=0;Ce<m.inputChannels.length;Ce++){const Ue=R[Ce],je=Ue.nx*Ue.size,nt=new Uint8Array(x.buffer,Ue.end*2,je*2);Me.set(nt,ge),ge+=je*2,Ue.end+=je}return new DataView(Me.buffer)}function te(m){const A=m.array.slice(m.offset.value,m.offset.value+m.size),B=ao(A),x=m.inputChannels.length*m.lines*m.columns*m.totalBytes,P=new ArrayBuffer(x),z=new DataView(P);let R=0,N=0;const W=new Array(4);for(let q=0;q<m.lines;q++)for(let ie=0;ie<m.inputChannels.length;ie++){let de=0;switch(m.inputChannels[ie].pixelType){case 1:W[0]=R,W[1]=W[0]+m.columns,R=W[1]+m.columns;for(let Me=0;Me<m.columns;++Me){const Ae=B[W[0]++]<<8|B[W[1]++];de+=Ae,z.setUint16(N,de,!0),N+=2}break;case 2:W[0]=R,W[1]=W[0]+m.columns,W[2]=W[1]+m.columns,R=W[2]+m.columns;for(let Me=0;Me<m.columns;++Me){const Ae=B[W[0]++]<<24|B[W[1]++]<<16|B[W[2]++]<<8;de+=Ae,z.setUint32(N,de,!0),N+=4}break}}return z}function Ve(m){const A=m.viewer,B={value:m.offset.value},x=new Uint8Array(m.columns*m.lines*(m.inputChannels.length*m.type*2)),P={version:Ze(A,B),unknownUncompressedSize:Ze(A,B),unknownCompressedSize:Ze(A,B),acCompressedSize:Ze(A,B),dcCompressedSize:Ze(A,B),rleCompressedSize:Ze(A,B),rleUncompressedSize:Ze(A,B),rleRawSize:Ze(A,B),totalAcUncompressedCount:Ze(A,B),totalDcUncompressedCount:Ze(A,B),acCompression:Ze(A,B)};if(P.version<2)throw new Error("EXRLoader.parse: "+xi.compression+" version "+P.version+" is unsupported");const z=new Array;let R=Fe(A,B)-2;for(;R>0;){const Ce=Pe(A.buffer,B),Ue=Ne(A,B),je=Ue>>2&3,nt=(Ue>>4)-1,it=new Int8Array([nt])[0],Ke=Ne(A,B);z.push({name:Ce,index:it,type:Ke,compression:je}),R-=Ce.length+3}const N=xi.channels,W=new Array(m.inputChannels.length);for(let Ce=0;Ce<m.inputChannels.length;++Ce){const Ue=W[Ce]={},je=N[Ce];Ue.name=je.name,Ue.compression=0,Ue.decoded=!1,Ue.type=je.pixelType,Ue.pLinear=je.pLinear,Ue.width=m.columns,Ue.height=m.lines}const q={idx:new Array(3)};for(let Ce=0;Ce<m.inputChannels.length;++Ce){const Ue=W[Ce];for(let je=0;je<z.length;++je){const nt=z[je];Ue.name==nt.name&&(Ue.compression=nt.compression,nt.index>=0&&(q.idx[nt.index]=Ce),Ue.offset=Ce)}}let ie,de,ge;if(P.acCompressedSize>0)switch(P.acCompression){case 0:ie=new Uint16Array(P.totalAcUncompressedCount),ke(m.array,A,B,P.acCompressedSize,ie,P.totalAcUncompressedCount);break;case 1:const Ce=m.array.slice(B.value,B.value+P.totalAcUncompressedCount),Ue=ao(Ce);ie=new Uint16Array(Ue.buffer),B.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){const Ce={array:m.array,offset:B,size:P.dcCompressedSize};de=new Uint16Array(ae(Ce).buffer),B.value+=P.dcCompressedSize}if(P.rleRawSize>0){const Ce=m.array.slice(B.value,B.value+P.rleCompressedSize),Ue=ao(Ce);ge=E(Ue.buffer),B.value+=P.rleCompressedSize}let Me=0;const Ae=new Array(W.length);for(let Ce=0;Ce<Ae.length;++Ce)Ae[Ce]=new Array;for(let Ce=0;Ce<m.lines;++Ce)for(let Ue=0;Ue<W.length;++Ue)Ae[Ue].push(Me),Me+=W[Ue].width*m.type*2;q.idx[0]!==void 0&&W[q.idx[0]]&&ce(q,Ae,W,ie,de,x);for(let Ce=0;Ce<W.length;++Ce){const Ue=W[Ce];if(!Ue.decoded)switch(Ue.compression){case 2:let je=0,nt=0;for(let it=0;it<m.lines;++it){let Ke=Ae[Ce][je];for(let rt=0;rt<Ue.width;++rt){for(let We=0;We<2*Ue.type;++We)x[Ke++]=ge[nt+We*Ue.width*Ue.height];nt++}je++}break;case 1:se(Ce,Ae,W,ie,de,x);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(x.buffer)}function Pe(m,A){const B=new Uint8Array(m);let x=0;for(;B[A.value+x]!=0;)x+=1;const P=new TextDecoder().decode(B.slice(A.value,A.value+x));return A.value=A.value+x+1,P}function qe(m,A,B){const x=new TextDecoder().decode(new Uint8Array(m).slice(A.value,A.value+B));return A.value=A.value+B,x}function Ye(m,A){const B=Re(m,A),x=Ge(m,A);return[B,x]}function we(m,A){const B=Ge(m,A),x=Ge(m,A);return[B,x]}function Re(m,A){const B=m.getInt32(A.value,!0);return A.value=A.value+4,B}function Ge(m,A){const B=m.getUint32(A.value,!0);return A.value=A.value+4,B}function Je(m,A){const B=m[A.value];return A.value=A.value+1,B}function Ne(m,A){const B=m.getUint8(A.value);return A.value=A.value+1,B}const Ze=function(m,A){let B;return"getBigInt64"in DataView.prototype?B=Number(m.getBigInt64(A.value,!0)):B=m.getUint32(A.value+4,!0)+Number(m.getUint32(A.value,!0)<<32),A.value+=8,B};function V(m,A){const B=m.getFloat32(A.value,!0);return A.value+=4,B}function Be(m,A){return sf.toHalfFloat(V(m,A))}function oe(m){const A=(m&31744)>>10,B=m&1023;return(m>>15?-1:1)*(A?A===31?B?NaN:1/0:Math.pow(2,A-15)*(1+B/1024):6103515625e-14*(B/1024))}function Fe(m,A){const B=m.getUint16(A.value,!0);return A.value+=2,B}function Le(m,A){return oe(Fe(m,A))}function Te(m,A,B,x){const P=B.value,z=[];for(;B.value<P+x-1;){const R=Pe(A,B),N=Re(m,B),W=Ne(m,B);B.value+=3;const q=Re(m,B),ie=Re(m,B);z.push({name:R,pixelType:N,pLinear:W,xSampling:q,ySampling:ie})}return B.value+=1,z}function et(m,A){const B=V(m,A),x=V(m,A),P=V(m,A),z=V(m,A),R=V(m,A),N=V(m,A),W=V(m,A),q=V(m,A);return{redX:B,redY:x,greenX:P,greenY:z,blueX:R,blueY:N,whiteX:W,whiteY:q}}function ot(m,A){const B=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],x=Ne(m,A);return B[x]}function j(m,A){const B=Re(m,A),x=Re(m,A),P=Re(m,A),z=Re(m,A);return{xMin:B,yMin:x,xMax:P,yMax:z}}function fe(m,A){const B=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],x=Ne(m,A);return B[x]}function He(m,A){const B=["ENVMAP_LATLONG","ENVMAP_CUBE"],x=Ne(m,A);return B[x]}function tt(m,A){const B=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],x=["ROUND_DOWN","ROUND_UP"],P=Ge(m,A),z=Ge(m,A),R=Ne(m,A);return{xSize:P,ySize:z,levelMode:B[R&15],roundingMode:x[R>>4]}}function ft(m,A){const B=V(m,A),x=V(m,A);return[B,x]}function Nt(m,A){const B=V(m,A),x=V(m,A),P=V(m,A);return[B,x,P]}function Ft(m,A,B,x,P){if(x==="string"||x==="stringvector"||x==="iccProfile")return qe(A,B,P);if(x==="chlist")return Te(m,A,B,P);if(x==="chromaticities")return et(m,B);if(x==="compression")return ot(m,B);if(x==="box2i")return j(m,B);if(x==="envmap")return He(m,B);if(x==="tiledesc")return tt(m,B);if(x==="lineOrder")return fe(m,B);if(x==="float")return V(m,B);if(x==="v2f")return ft(m,B);if(x==="v3f")return Nt(m,B);if(x==="int")return Re(m,B);if(x==="rational")return Ye(m,B);if(x==="timecode")return we(m,B);if(x==="preview")return B.value+=P,"skipped";B.value+=P}function Lt(m,A){const B=Math.log2(m);return A=="ROUND_DOWN"?Math.floor(B):Math.ceil(B)}function Mn(m,A,B){let x=0;switch(m.levelMode){case"ONE_LEVEL":x=1;break;case"MIPMAP_LEVELS":x=Lt(Math.max(A,B),m.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return x}function gi(m,A,B,x){const P=new Array(m);for(let z=0;z<m;z++){const R=1<<z;let N=A/R|0;x=="ROUND_UP"&&N*R<A&&(N+=1);const W=Math.max(N,1);P[z]=(W+B-1)/B|0}return P}function Ta(){const m=this,A=m.offset,B={value:0};for(let x=0;x<m.tileCount;x++){const P=Re(m.viewer,A),z=Re(m.viewer,A);A.value+=8,m.size=Ge(m.viewer,A);const R=P*m.blockWidth,N=z*m.blockHeight;m.columns=R+m.blockWidth>m.width?m.width-R:m.blockWidth,m.lines=N+m.blockHeight>m.height?m.height-N:m.blockHeight;const W=m.columns*m.totalBytes,ie=m.size<m.lines*W?m.uncompress(m):S(m);A.value+=m.size;for(let de=0;de<m.lines;de++){const ge=de*m.columns*m.totalBytes;for(let Me=0;Me<m.inputChannels.length;Me++){const Ae=xi.channels[Me].name,Ce=m.channelByteOffsets[Ae]*m.columns,Ue=m.decodeChannels[Ae];if(Ue===void 0)continue;B.value=ge+Ce;const je=(m.height-(1+N+de))*m.outLineWidth;for(let nt=0;nt<m.columns;nt++){const it=je+(nt+R)*m.outputChannels+Ue;m.byteArray[it]=m.getter(ie,B)}}}}}function Fs(){const m=this,A=m.offset,B={value:0};for(let x=0;x<m.height/m.blockHeight;x++){const P=Re(m.viewer,A)-xi.dataWindow.yMin;m.size=Ge(m.viewer,A),m.lines=P+m.blockHeight>m.height?m.height-P:m.blockHeight;const z=m.columns*m.totalBytes,N=m.size<m.lines*z?m.uncompress(m):S(m);A.value+=m.size;for(let W=0;W<m.blockHeight;W++){const q=x*m.blockHeight,ie=W+m.scanOrder(q);if(ie>=m.height)continue;const de=W*z,ge=(m.height-1-ie)*m.outLineWidth;for(let Me=0;Me<m.inputChannels.length;Me++){const Ae=xi.channels[Me].name,Ce=m.channelByteOffsets[Ae]*m.columns,Ue=m.decodeChannels[Ae];if(Ue!==void 0){B.value=de+Ce;for(let je=0;je<m.columns;je++){const nt=ge+je*m.outputChannels+Ue;m.byteArray[nt]=m.getter(N,B)}}}}}}function wa(m,A,B){const x={};if(m.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");x.version=m.getUint8(4);const P=m.getUint8(5);x.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},B.value=8;let z=!0;for(;z;){const R=Pe(A,B);if(R==="")z=!1;else{const N=Pe(A,B),W=Ge(m,B),q=Ft(m,A,B,N,W);q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${N}'.`):x[R]=q}}if(P&-7)throw console.error("THREE.EXRHeader:",x),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return x}function Os(m,A,B,x,P,z){const R={size:0,viewer:A,array:B,offset:x,width:m.dataWindow.xMax-m.dataWindow.xMin+1,height:m.dataWindow.yMax-m.dataWindow.yMin+1,inputChannels:m.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ln};switch(m.compression){case"NO_COMPRESSION":R.blockHeight=1,R.uncompress=S;break;case"RLE_COMPRESSION":R.blockHeight=1,R.uncompress=H;break;case"ZIPS_COMPRESSION":R.blockHeight=1,R.uncompress=ae;break;case"ZIP_COMPRESSION":R.blockHeight=16,R.uncompress=ae;break;case"PIZ_COMPRESSION":R.blockHeight=32,R.uncompress=me;break;case"PXR24_COMPRESSION":R.blockHeight=16,R.uncompress=te;break;case"DWAA_COMPRESSION":R.blockHeight=32,R.uncompress=Ve;break;case"DWAB_COMPRESSION":R.blockHeight=256,R.uncompress=Ve;break;default:throw new Error("EXRLoader.parse: "+m.compression+" is unsupported")}const N={};for(const ge of m.channels)switch(ge.name){case"Y":case"R":case"G":case"B":case"A":N[ge.name]=!0,R.type=ge.pixelType}let W=!1,q=!1;if(N.R&&N.G&&N.B)R.outputChannels=4;else if(N.Y)R.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(R.outputChannels){case 4:z==tn?(W=!N.A,R.format=tn,R.colorSpace=Ln,R.outputChannels=4,R.decodeChannels={R:0,G:1,B:2,A:3}):z==ts?(R.format=ts,R.colorSpace=Ln,R.outputChannels=2,R.decodeChannels={R:0,G:1}):z==Ts?(R.format=Ts,R.colorSpace=Ln,R.outputChannels=1,R.decodeChannels={R:0}):q=!0;break;case 1:z==tn?(W=!0,R.format=tn,R.colorSpace=Ln,R.outputChannels=4,R.shouldExpand=!0,R.decodeChannels={Y:0}):z==ts?(R.format=ts,R.colorSpace=Ln,R.outputChannels=2,R.shouldExpand=!0,R.decodeChannels={Y:0}):z==Ts?(R.format=Ts,R.colorSpace=Ln,R.outputChannels=1,R.decodeChannels={Y:0}):q=!0;break;default:q=!0}if(q)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(R.type==1)switch(P){case Fn:R.getter=Le;break;case Yt:R.getter=Fe;break}else if(R.type==2)switch(P){case Fn:R.getter=V;break;case Yt:R.getter=Be}else throw new Error("EXRLoader.parse: unsupported pixelType "+R.type+" for "+m.compression+".");R.columns=R.width;const ie=R.width*R.height*R.outputChannels;switch(P){case Fn:R.byteArray=new Float32Array(ie),W&&R.byteArray.fill(1,0,ie);break;case Yt:R.byteArray=new Uint16Array(ie),W&&R.byteArray.fill(15360,0,ie);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}let de=0;for(const ge of m.channels)R.decodeChannels[ge.name]!==void 0&&(R.channelByteOffsets[ge.name]=de),de+=ge.pixelType*2;if(R.totalBytes=de,R.outLineWidth=R.width*R.outputChannels,m.lineOrder==="INCREASING_Y"?R.scanOrder=ge=>ge:R.scanOrder=ge=>R.height-1-ge,m.spec.singleTile){R.blockHeight=m.tiles.ySize,R.blockWidth=m.tiles.xSize;const ge=Mn(m.tiles,R.width,R.height),Me=gi(ge,R.width,m.tiles.xSize,m.tiles.roundingMode),Ae=gi(ge,R.height,m.tiles.ySize,m.tiles.roundingMode);R.tileCount=Me[0]*Ae[0];for(let Ce=0;Ce<ge;Ce++)for(let Ue=0;Ue<Ae[Ce];Ue++)for(let je=0;je<Me[Ce];je++)Ze(A,x);R.decode=Ta.bind(R)}else{R.blockWidth=R.width;const ge=Math.ceil(R.height/R.blockHeight);for(let Me=0;Me<ge;Me++)Ze(A,x);R.decode=Fs.bind(R)}return R}const Pr={value:0},Dr=new DataView(e),$o=new Uint8Array(e),xi=wa(Dr,e,Pr),$n=Os(xi,Dr,$o,Pr,this.type,this.outputFormat);if($n.decode(),$n.shouldExpand){const m=$n.byteArray;if(this.outputFormat==tn)for(let A=0;A<m.length;A+=4)m[A+2]=m[A+1]=m[A];else if(this.outputFormat==ts)for(let A=0;A<m.length;A+=2)m[A+1]=m[A]}return{header:xi,width:$n.width,height:$n.height,data:$n.byteArray,format:$n.format,colorSpace:$n.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,i,s){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=Jt,a.magFilter=Jt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,i,s)}}const Zl=new WeakMap;class v1 extends hs{constructor(e){super(e),this.libraryPath="",this.libraryPending=null,this.libraryBinary=null,this.libraryConfig={},this.url="",this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.workerConfig={},this.materials=[],this.warnings=[]}setLibraryPath(e){return this.libraryPath=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const r=new ra(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),this.url=e,r.load(e,a=>{if(Zl.has(a))return Zl.get(a).promise.then(t).catch(s);this.decodeObjects(a,e).then(o=>{o.userData.warnings=this.warnings,t(o)}).catch(o=>s(o))},i,s)}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}decodeObjects(e,t){let i,s;const r=e.byteLength,a=this._getWorker(r).then(o=>(i=o,s=this.workerNextTaskID++,new Promise((l,c)=>{i._callbacks[s]={resolve:l,reject:c},i.postMessage({type:"decode",id:s,buffer:e},[e])}))).then(o=>this._createGeometry(o.data)).catch(o=>{throw o});return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Zl.set(e,{url:t,promise:a}),a}parse(e,t,i){this.decodeObjects(e,"").then(s=>{s.userData.warnings=this.warnings,t(s)}).catch(s=>i(s))}_compareMaterials(e){const t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type,t.vertexColors=e.vertexColors;const i=JSON.stringify(t);for(let s=0;s<this.materials.length;s++){const r=this.materials[s],a={};if(a.name=r.name,a.color={},a.color.r=r.color.r,a.color.g=r.color.g,a.color.b=r.color.b,a.type=r.type,a.vertexColors=r.vertexColors,JSON.stringify(a)===i)return r}return this.materials.push(e),e}_createMaterial(e,t){if(e===void 0)return new Wu({color:new st(1,1,1),metalness:.8,name:hs.DEFAULT_MATERIAL_NAME,side:Un});const i=new Iv({color:new st(e.diffuseColor.r/255,e.diffuseColor.g/255,e.diffuseColor.b/255),emissive:new st(e.emissionColor.r,e.emissionColor.g,e.emissionColor.b),flatShading:e.disableLighting,ior:e.indexOfRefraction,name:e.name,reflectivity:e.reflectivity,opacity:1-e.transparency,side:Un,specularColor:e.specularColor,transparent:e.transparency>0});if(i.userData.id=e.id,e.pbrSupported){const r=e.pbr;i.anisotropy=r.anisotropic,i.anisotropyRotation=r.anisotropicRotation,i.color=new st(r.baseColor.r,r.baseColor.g,r.baseColor.b),i.clearcoat=r.clearcoat,i.clearcoatRoughness=r.clearcoatRoughness,i.metalness=r.metallic,i.transmission=1-r.opacity,i.roughness=r.roughness,i.sheen=r.sheen,i.specularIntensity=r.specular,i.thickness=r.subsurface}e.pbrSupported&&e.pbr.opacity===0&&e.transparency===1&&(i.opacity=.2,i.transmission=1);const s=new Vv;for(let r=0;r<e.textures.length;r++){const a=e.textures[r];if(a.image!==null){const o=s.load(a.image);switch(a.type){case"Bump":i.bumpMap=o;break;case"Diffuse":i.map=o;break;case"Emap":i.envMap=o;break;case"Opacity":i.transmissionMap=o;break;case"Transparency":i.alphaMap=o,i.transparent=!0;break;case"PBR_Alpha":i.alphaMap=o,i.transparent=!0;break;case"PBR_AmbientOcclusion":i.aoMap=o;break;case"PBR_Anisotropic":i.anisotropyMap=o;break;case"PBR_BaseColor":i.map=o;break;case"PBR_Clearcoat":i.clearcoatMap=o;break;case"PBR_ClearcoatBump":i.clearcoatNormalMap=o;break;case"PBR_ClearcoatRoughness":i.clearcoatRoughnessMap=o;break;case"PBR_Displacement":i.displacementMap=o;break;case"PBR_Emission":i.emissiveMap=o;break;case"PBR_Metallic":i.metalnessMap=o;break;case"PBR_Roughness":i.roughnessMap=o;break;case"PBR_Sheen":i.sheenColorMap=o;break;case"PBR_Specular":i.specularColorMap=o;break;case"PBR_Subsurface":i.thicknessMap=o;break;default:this.warnings.push({message:`THREE.3DMLoader: No conversion exists for 3dm ${a.type}.`,type:"no conversion"});break}o.wrapS=a.wrapU===0?Ps:vn,o.wrapT=a.wrapV===0?Ps:vn,a.repeat&&o.repeat.set(a.repeat[0],a.repeat[1])}}return t&&new _1().load(t.image,function(r){r.mapping=THREE.EquirectangularReflectionMapping,i.envMap=r}),i}_createGeometry(e){const t=new Dt,i=[],s=[],r=[];t.userData.layers=e.layers,t.userData.groups=e.groups,t.userData.settings=e.settings,t.userData.settings.renderSettings=e.renderSettings,t.userData.objectType="File3dm",t.userData.materials=null,t.name=this.url;let a=e.objects;const o=e.materials;for(let l=0;l<a.length;l++){const c=a[l],u=c.attributes;switch(c.objectType){case"InstanceDefinition":s.push(c);break;case"InstanceReference":r.push(c);break;default:let h=null;switch(u.materialSource.name){case"ObjectMaterialSource_MaterialFromLayer":u.layerIndex>=0&&(h=e.layers[u.layerIndex].renderMaterialIndex);break;case"ObjectMaterialSource_MaterialFromObject":u.materialIndex>=0&&(h=u.materialIndex);break}let f=null;if(h>=0){const v=o[h];f=this._createMaterial(v,e.renderEnvironment)}const d=this._createObject(c,f);if(d===void 0)continue;const _=e.layers[u.layerIndex];d.visible=_?e.layers[u.layerIndex].visible:!0,u.isInstanceDefinitionObject?i.push(d):t.add(d);break}}for(let l=0;l<s.length;l++){const c=s[l];a=[];for(let u=0;u<c.attributes.objectIds.length;u++){const h=c.attributes.objectIds[u];for(let f=0;f<i.length;f++){const d=i[f].userData.attributes.id;h===d&&a.push(i[f])}}for(let u=0;u<r.length;u++){const h=r[u];if(h.geometry.parentIdefId===c.attributes.id){const f=new Dt,d=h.geometry.xform.array,_=new Mt;_.set(...d),f.applyMatrix4(_);for(let v=0;v<a.length;v++)f.add(a[v].clone(!0));t.add(f)}}}return t.userData.materials=this.materials,t.name="",t}_createObject(e,t){const i=new $v,s=e.attributes;let r,a,o,l;switch(e.objectType){case"Point":case"PointSet":r=i.parse(e.geometry),r.attributes.hasOwnProperty("color")?a=new eu({vertexColors:!0,sizeAttenuation:!1,size:2}):(o=s.drawColor,l=new st(o.r/255,o.g/255,o.b/255),a=new eu({color:l,sizeAttenuation:!1,size:2})),a=this._compareMaterials(a);const c=new Dv(r,a);return c.userData.attributes=s,c.userData.objectType=e.objectType,s.name&&(c.name=s.name),c;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(e.geometry===null)return;r=i.parse(e.geometry),t===null&&(t=this._createMaterial()),r.attributes.hasOwnProperty("color")&&(t.vertexColors=!0),t=this._compareMaterials(t);const u=new mi(r,t);return u.castShadow=s.castsShadows,u.receiveShadow=s.receivesShadows,u.userData.attributes=s,u.userData.objectType=e.objectType,s.name&&(u.name=s.name),u;case"Curve":r=i.parse(e.geometry),o=s.drawColor,l=new st(o.r/255,o.g/255,o.b/255),a=new nm({color:l}),a=this._compareMaterials(a);const h=new Pv(r,a);return h.userData.attributes=s,h.userData.objectType=e.objectType,s.name&&(h.name=s.name),h;case"TextDot":r=e.geometry;const f=document.createElement("canvas").getContext("2d"),d=`${r.fontHeight}px ${r.fontFace}`;f.font=d;const _=f.measureText(r.text).width+10,v=r.fontHeight+10,g=window.devicePixelRatio;f.canvas.width=_*g,f.canvas.height=v*g,f.canvas.style.width=_+"px",f.canvas.style.height=v+"px",f.setTransform(g,0,0,g,0,0),f.font=d,f.textBaseline="middle",f.textAlign="center",l=s.drawColor,f.fillStyle=`rgba(${l.r},${l.g},${l.b},${l.a})`,f.fillRect(0,0,_,v),f.fillStyle="white",f.fillText(r.text,_/2,v/2);const p=new im(f.canvas);p.minFilter=Jt,p.generateMipmaps=!1,p.wrapS=vn,p.wrapT=vn,a=new em({map:p,depthTest:!1});const M=new Tv(a);return M.position.set(r.point[0],r.point[1],r.point[2]),M.scale.set(_/10,v/10,1),M.userData.attributes=s,M.userData.objectType=e.objectType,s.name&&(M.name=s.name),M;case"Light":r=e.geometry;let b;switch(r.lightStyle.name){case"LightStyle_WorldPoint":b=new Yv,b.castShadow=s.castsShadows,b.position.set(r.location[0],r.location[1],r.location[2]),b.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":b=new Wv,b.castShadow=s.castsShadows,b.position.set(r.location[0],r.location[1],r.location[2]),b.target.position.set(r.direction[0],r.direction[1],r.direction[2]),b.angle=r.spotAngleRadians,b.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":b=new Zv;const w=Math.abs(r.width[2]),F=Math.abs(r.length[0]);b.position.set(r.location[0]-F/2,r.location[1],r.location[2]-w/2),b.height=F,b.width=w,b.lookAt(r.direction[0],r.direction[1],r.direction[2]);break;case"LightStyle_WorldDirectional":b=new nu,b.castShadow=s.castsShadows,b.position.set(r.location[0],r.location[1],r.location[2]),b.target.position.set(r.direction[0],r.direction[1],r.direction[2]),b.shadow.normalBias=.1;break}return b&&(b.intensity=r.intensity,o=r.diffuse,l=new st(o.r/255,o.g/255,o.b/255),b.color=l,b.userData.attributes=s,b.userData.objectType=e.objectType),b}}_initLibrary(){if(!this.libraryPending){const e=new ra(this.manager);e.setPath(this.libraryPath);const t=new Promise((r,a)=>{e.load("rhino3dm.js",r,void 0,a)}),i=new ra(this.manager);i.setPath(this.libraryPath),i.setResponseType("arraybuffer");const s=new Promise((r,a)=>{i.load("rhino3dm.wasm",r,void 0,a)});this.libraryPending=Promise.all([t,s]).then(([r,a])=>{this.libraryConfig.wasmBinary=a;const o=S1.toString(),l=["/* rhino3dm.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l]))})}return this.libraryPending}_getWorker(e){return this._initLibrary().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",libraryConfig:this.libraryConfig}),i.onmessage=s=>{const r=s.data;switch(r.type){case"warning":this.warnings.push(r.data),console.warn(r.data);break;case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskLoad+=e,t})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();this.workerPool.length=0}}function S1(){let n,e,t,i;onmessage=function(u){const h=u.data;switch(h.type){case"init":e=h.libraryConfig;const f=e.wasmBinary;let d;n=new Promise(function(v){d={wasmBinary:f,onRuntimeInitialized:v},rhino3dm(d)}).then(()=>{t=d});break;case"decode":i=h.id;const _=h.buffer;n.then(()=>{try{const v=s(t,_);self.postMessage({type:"decode",id:h.id,data:v})}catch(v){self.postMessage({type:"error",id:h.id,error:v})}});break}};function s(u,h){const f=new Uint8Array(h),d=u.File3dm.fromByteArray(f),_=[],v=[],g=[],p=[],M=[],b=[],w=[],F=d.objects(),D=F.count;for(let ee=0;ee<D;ee++){const J=F.get(ee),ne=o(J,d);J.delete(),ne&&_.push(ne)}for(let ee=0;ee<d.instanceDefinitions().count;ee++){const J=d.instanceDefinitions().get(ee),ne=l(J);ne.objectIds=J.getObjectIds(),_.push({geometry:null,attributes:ne,objectType:"InstanceDefinition"})}const L=[u.TextureType.Diffuse,u.TextureType.Bump,u.TextureType.Transparency,u.TextureType.Opacity,u.TextureType.Emap],X=[u.TextureType.PBR_BaseColor,u.TextureType.PBR_Subsurface,u.TextureType.PBR_SubsurfaceScattering,u.TextureType.PBR_SubsurfaceScatteringRadius,u.TextureType.PBR_Metallic,u.TextureType.PBR_Specular,u.TextureType.PBR_SpecularTint,u.TextureType.PBR_Roughness,u.TextureType.PBR_Anisotropic,u.TextureType.PBR_Anisotropic_Rotation,u.TextureType.PBR_Sheen,u.TextureType.PBR_SheenTint,u.TextureType.PBR_Clearcoat,u.TextureType.PBR_ClearcoatBump,u.TextureType.PBR_ClearcoatRoughness,u.TextureType.PBR_OpacityIor,u.TextureType.PBR_OpacityRoughness,u.TextureType.PBR_Emission,u.TextureType.PBR_AmbientOcclusion,u.TextureType.PBR_Displacement];for(let ee=0;ee<d.materials().count;ee++){const J=d.materials().get(ee),ne=l(J),$=[];$.push(...r(J,L,d)),ne.pbrSupported=J.physicallyBased().supported,ne.pbrSupported&&($.push(...r(J,X,d)),ne.pbr=l(J.physicallyBased())),ne.textures=$,v.push(ne),J.delete()}for(let ee=0;ee<d.layers().count;ee++){const J=d.layers().get(ee),ne=l(J);g.push(ne),J.delete()}for(let ee=0;ee<d.views().count;ee++){const J=d.views().get(ee),ne=l(J);p.push(ne),J.delete()}for(let ee=0;ee<d.namedViews().count;ee++){const J=d.namedViews().get(ee),ne=l(J);M.push(ne),J.delete()}for(let ee=0;ee<d.groups().count;ee++){const J=d.groups().get(ee),ne=l(J);b.push(ne),J.delete()}const C=l(d.settings()),y=d.strings().count;for(let ee=0;ee<y;ee++)w.push(d.strings().get(ee));const O=d.settings().renderSettings().renderEnvironments.reflectionId,Y=d.renderContent();let Z=null;for(let ee=0;ee<Y.count;ee++){const J=Y.get(ee);switch(J.kind){case"environment":if(J.id!==O)break;const xe=J.findChild("texture").fileName;for(let Se=0;Se<d.embeddedFiles().count;Se++){const Oe=d.embeddedFiles().get(Se).fileName;xe===Oe&&(Z={type:"renderEnvironment",image:"data:image/png;base64,"+d.getEmbeddedFileAsBase64(xe),name:xe})}break}}const he={ambientLight:d.settings().renderSettings().ambientLight,backgroundColorTop:d.settings().renderSettings().backgroundColorTop,backgroundColorBottom:d.settings().renderSettings().backgroundColorBottom,useHiddenLights:d.settings().renderSettings().useHiddenLights,depthCue:d.settings().renderSettings().depthCue,flatShade:d.settings().renderSettings().flatShade,renderBackFaces:d.settings().renderSettings().renderBackFaces,renderPoints:d.settings().renderSettings().renderPoints,renderCurves:d.settings().renderSettings().renderCurves,renderIsoParams:d.settings().renderSettings().renderIsoParams,renderMeshEdges:d.settings().renderSettings().renderMeshEdges,renderAnnotations:d.settings().renderSettings().renderAnnotations,useViewportSize:d.settings().renderSettings().useViewportSize,scaleBackgroundToFit:d.settings().renderSettings().scaleBackgroundToFit,transparentBackground:d.settings().renderSettings().transparentBackground,imageDpi:d.settings().renderSettings().imageDpi,shadowMapLevel:d.settings().renderSettings().shadowMapLevel,namedView:d.settings().renderSettings().namedView,snapShot:d.settings().renderSettings().snapShot,specificViewport:d.settings().renderSettings().specificViewport,groundPlane:l(d.settings().renderSettings().groundPlane),safeFrame:l(d.settings().renderSettings().safeFrame),dithering:l(d.settings().renderSettings().dithering),skylight:l(d.settings().renderSettings().skylight),linearWorkflow:l(d.settings().renderSettings().linearWorkflow),renderChannels:l(d.settings().renderSettings().renderChannels),sun:l(d.settings().renderSettings().sun),renderEnvironments:l(d.settings().renderSettings().renderEnvironments),postEffects:l(d.settings().renderSettings().postEffects)};return d.delete(),{objects:_,materials:v,layers:g,views:p,namedViews:M,groups:b,strings:w,settings:C,renderSettings:he,renderEnvironment:Z}}function r(u,h,f){const d=[];for(let _=0;_<h.length;_++){const v=u.getTexture(h[_]);if(v){let g=h[_].constructor.name;g=g.substring(12,g.length);const p=a(v,g,f);d.push(p),v.delete()}}return d}function a(u,h,f){const d={type:h},_=f.getEmbeddedFileAsBase64(u.fileName);d.wrapU=u.wrapU,d.wrapV=u.wrapV,d.wrapW=u.wrapW;const v=u.uvwTransform.toFloatArray(!0);return d.repeat=[v[0],v[5]],_?d.image="data:image/png;base64,"+_:(self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Image for ${h} texture not embedded in file.`,type:"missing resource"}}),d.image=null),d}function o(u,h){const f=u.geometry(),d=u.attributes();let _=f.objectType,v,g,p,M,b;switch(_){case t.ObjectType.Curve:const w=c(f,100);p={},g={},M={},p.itemSize=3,p.type="Float32Array",p.array=[];for(let C=0;C<w.length;C++)p.array.push(w[C][0]),p.array.push(w[C][1]),p.array.push(w[C][2]);g.position=p,M.attributes=g,v={data:M};break;case t.ObjectType.Point:const F=f.location;p={};const D={};g={},M={},p.itemSize=3,p.type="Float32Array",p.array=[F[0],F[1],F[2]];const L=d.drawColor(h);D.itemSize=3,D.type="Float32Array",D.array=[L.r/255,L.g/255,L.b/255],g.position=p,g.color=D,M.attributes=g,v={data:M};break;case t.ObjectType.PointSet:case t.ObjectType.Mesh:v=f.toThreejsJSON();break;case t.ObjectType.Brep:const X=f.faces();b=new t.Mesh;for(let C=0;C<X.count;C++){const y=X.get(C),O=y.getMesh(t.MeshType.Any);O&&(b.append(O),O.delete()),y.delete()}b.faces().count>0&&(b.compact(),v=b.toThreejsJSON(),X.delete()),b.delete();break;case t.ObjectType.Extrusion:b=f.getMesh(t.MeshType.Any),b&&(v=b.toThreejsJSON(),b.delete());break;case t.ObjectType.TextDot:v=l(f);break;case t.ObjectType.Light:v=l(f),v.lightStyle.name==="LightStyle_WorldLinear"&&self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: No conversion exists for ${_.constructor.name} ${v.lightStyle.name}`,type:"no conversion",guid:d.id}});break;case t.ObjectType.InstanceReference:v=l(f),v.xform=l(f.xform),v.xform.array=f.xform.toFloatArray(!0);break;case t.ObjectType.SubD:f.subdivide(3),b=t.Mesh.createFromSubDControlNet(f,!1),b&&(v=b.toThreejsJSON(),b.delete());break;default:self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: Conversion not implemented for ${_.constructor.name}`,type:"not implemented",guid:d.id}});break}if(v)return g=l(d),g.geometry=l(f),d.groupCount>0&&(g.groupIds=d.getGroupList()),d.userStringCount>0&&(g.userStrings=d.getUserStrings()),f.userStringCount>0&&(g.geometry.userStrings=f.getUserStrings()),d.decals().count>0&&self.postMessage({type:"warning",id:i,data:{message:"THREE.3DMLoader: No conversion exists for the decals associated with this object.",type:"no conversion",guid:d.id}}),g.drawColor=d.drawColor(h),_=_.constructor.name,_=_.substring(11,_.length),{geometry:v,attributes:g,objectType:_};self.postMessage({type:"warning",id:i,data:{message:`THREE.3DMLoader: ${_.constructor.name} has no associated mesh geometry.`,type:"missing mesh",guid:d.id}})}function l(u){const h={};for(const f in u){const d=u[f];typeof d!="function"&&(typeof d=="object"&&d!==null&&d.hasOwnProperty("constructor")?h[f]={name:d.constructor.name,value:d.value}:typeof d=="object"&&d!==null?h[f]=l(d):h[f]=d)}return h}function c(u,h){let f=h,d=[];const _=[];if(u instanceof t.LineCurve)return[u.pointAtStart,u.pointAtEnd];if(u instanceof t.PolylineCurve){f=u.pointCount;for(let p=0;p<f;p++)d.push(u.point(p));return d}if(u instanceof t.PolyCurve){const p=u.segmentCount;for(let M=0;M<p;M++){const b=u.segmentCurve(M),w=c(b,f);d=d.concat(w),b.delete()}return d}if(u instanceof t.ArcCurve&&(f=Math.floor(u.angleDegrees/5),f=f<2?2:f),u instanceof t.NurbsCurve&&u.degree===1){const p=u.tryGetPolyline();for(let M=0;M<p.count;M++)d.push(p.get(M));return p.delete(),d}const v=u.domain,g=f-1;for(let p=0;p<f;p++){const M=v[0]+p/g*(v[1]-v[0]);if(M===v[0]||M===v[1]){_.push(M);continue}const b=u.tangentAt(M),w=u.tangentAt(_.slice(-1)[0]),F=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],D=w[0]*w[0]+w[1]*w[1]+w[2]*w[2],L=Math.sqrt(F*D);let X;if(L===0)X=Math.PI/2;else{const C=(b.x*w.x+b.y*w.y+b.z*w.z)/L;X=Math.acos(Math.max(-1,Math.min(1,C)))}X<.1||_.push(M)}return d=_.map(p=>u.pointAt(p)),d}}const oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b1=new Yo(-1,1,1,-1,0,1);class M1 extends Rn{constructor(){super(),this.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ui([0,2,0,0,2,0],2))}}const y1=new M1;class Zo{constructor(e){this._mesh=new mi(y1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _m extends Ns{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rs.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zo(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qf extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class E1 extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class T1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Qe);this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _m(oa),this.copyPass.material.blending=$t,this.clock=new Qv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qf!==void 0&&(a instanceof qf?i=!0:a instanceof E1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w1 extends Ns{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}class A1{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,_=e-f,v=t-d;let g,p;_>v?(g=1,p=0):(g=0,p=1);const M=_-g+u,b=v-p+u,w=_-1+2*u,F=v-1+2*u,D=l&255,L=c&255,X=this.perm[D+this.perm[L]]%12,C=this.perm[D+g+this.perm[L+p]]%12,y=this.perm[D+1+this.perm[L+1]]%12;let O=.5-_*_-v*v;O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[X],_,v));let Y=.5-M*M-b*b;Y<0?s=0:(Y*=Y,s=Y*Y*this._dot(this.grad3[C],M,b));let Z=.5-w*w-F*F;return Z<0?r=0:(Z*=Z,r=Z*Z*this._dot(this.grad3[y],w,F)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o;const c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),d=1/6,_=(u+h+f)*d,v=u-_,g=h-_,p=f-_,M=e-v,b=t-g,w=i-p;let F,D,L,X,C,y;M>=b?b>=w?(F=1,D=0,L=0,X=1,C=1,y=0):M>=w?(F=1,D=0,L=0,X=1,C=0,y=1):(F=0,D=0,L=1,X=1,C=0,y=1):b<w?(F=0,D=0,L=1,X=0,C=1,y=1):M<w?(F=0,D=1,L=0,X=0,C=1,y=1):(F=0,D=1,L=0,X=1,C=1,y=0);const O=M-F+d,Y=b-D+d,Z=w-L+d,he=M-X+2*d,ee=b-C+2*d,J=w-y+2*d,ne=M-1+3*d,$=b-1+3*d,xe=w-1+3*d,Se=u&255,Oe=h&255,pe=f&255,_e=this.perm[Se+this.perm[Oe+this.perm[pe]]]%12,Ie=this.perm[Se+F+this.perm[Oe+D+this.perm[pe+L]]]%12,$e=this.perm[Se+X+this.perm[Oe+C+this.perm[pe+y]]]%12,K=this.perm[Se+1+this.perm[Oe+1+this.perm[pe+1]]]%12;let k=.6-M*M-b*b-w*w;k<0?s=0:(k*=k,s=k*k*this._dot3(this.grad3[_e],M,b,w));let le=.6-O*O-Y*Y-Z*Z;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[Ie],O,Y,Z));let ve=.6-he*he-ee*ee-J*J;ve<0?a=0:(ve*=ve,a=ve*ve*this._dot3(this.grad3[$e],he,ee,J));let be=.6-ne*ne-$*$-xe*xe;return be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[K],ne,$,xe)),32*(s+r+a+o)}noise4d(e,t,i,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,d,_;const v=(e+t+i+s)*l,g=Math.floor(e+v),p=Math.floor(t+v),M=Math.floor(i+v),b=Math.floor(s+v),w=(g+p+M+b)*c,F=g-w,D=p-w,L=M-w,X=b-w,C=e-F,y=t-D,O=i-L,Y=s-X,Z=C>y?32:0,he=C>O?16:0,ee=y>O?8:0,J=C>Y?4:0,ne=y>Y?2:0,$=O>Y?1:0,xe=Z+he+ee+J+ne+$,Se=a[xe][0]>=3?1:0,Oe=a[xe][1]>=3?1:0,pe=a[xe][2]>=3?1:0,_e=a[xe][3]>=3?1:0,Ie=a[xe][0]>=2?1:0,$e=a[xe][1]>=2?1:0,K=a[xe][2]>=2?1:0,k=a[xe][3]>=2?1:0,le=a[xe][0]>=1?1:0,ve=a[xe][1]>=1?1:0,be=a[xe][2]>=1?1:0,ke=a[xe][3]>=1?1:0,I=C-Se+c,U=y-Oe+c,G=O-pe+c,E=Y-_e+c,ce=C-Ie+2*c,se=y-$e+2*c,Ee=O-K+2*c,ue=Y-k+2*c,ye=C-le+3*c,re=y-ve+3*c,De=O-be+3*c,T=Y-ke+3*c,S=C-1+4*c,H=y-1+4*c,ae=O-1+4*c,me=Y-1+4*c,te=g&255,Ve=p&255,Pe=M&255,qe=b&255,Ye=o[te+o[Ve+o[Pe+o[qe]]]]%32,we=o[te+Se+o[Ve+Oe+o[Pe+pe+o[qe+_e]]]]%32,Re=o[te+Ie+o[Ve+$e+o[Pe+K+o[qe+k]]]]%32,Ge=o[te+le+o[Ve+ve+o[Pe+be+o[qe+ke]]]]%32,Je=o[te+1+o[Ve+1+o[Pe+1+o[qe+1]]]]%32;let Ne=.6-C*C-y*y-O*O-Y*Y;Ne<0?u=0:(Ne*=Ne,u=Ne*Ne*this._dot4(r[Ye],C,y,O,Y));let Ze=.6-I*I-U*U-G*G-E*E;Ze<0?h=0:(Ze*=Ze,h=Ze*Ze*this._dot4(r[we],I,U,G,E));let V=.6-ce*ce-se*se-Ee*Ee-ue*ue;V<0?f=0:(V*=V,f=V*V*this._dot4(r[Re],ce,se,Ee,ue));let Be=.6-ye*ye-re*re-De*De-T*T;Be<0?d=0:(Be*=Be,d=Be*Be*this._dot4(r[Ge],ye,re,De,T));let oe=.6-S*S-H*H-ae*ae-me*me;return oe<0?_=0:(oe*=oe,_=oe*oe*this._dot4(r[Je],S,H,ae,me)),27*(u+h+f+d+_)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}}const oo={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Qe},cameraProjectionMatrix:{value:new Mt},cameraInverseProjectionMatrix:{value:new Mt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},lo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},co={uniforms:{tDiffuse:{value:null},resolution:{value:new Qe}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class is extends Ns{constructor(e,t,i=512,s=512,r=32){super(),this.width=i,this.height=s,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const a=new Gu;a.format=Mr,a.type=br,this.normalRenderTarget=new en(this.width,this.height,{minFilter:Sn,magFilter:Sn,type:Yt,depthTexture:a}),this.ssaoRenderTarget=new en(this.width,this.height,{type:Yt}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new zt({defines:Object.assign({},oo.defines),uniforms:rs.clone(oo.uniforms),vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,blending:$t}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Uv,this.normalMaterial.blending=$t,this.blurMaterial=new zt({defines:Object.assign({},co.defines),uniforms:rs.clone(co.uniforms),vertexShader:co.vertexShader,fragmentShader:co.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new zt({defines:Object.assign({},lo.defines),uniforms:rs.clone(lo.uniforms),vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,blending:$t}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new zt({uniforms:rs.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:wp,blendDst:fc,blendEquation:Ii,blendSrcAlpha:Tp,blendDstAlpha:fc,blendEquationAlpha:Ii}),this._fsQuad=new Zo(null),this._originalClearColor=new st}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,i){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case is.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case is.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case is.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:i);break;case is.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case is.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ep,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){const t=this.kernel;for(let i=0;i<e;i++){const s=new Q;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=i/e;r=Ji.lerp(.1,1,r*r),s.multiplyScalar(r),t.push(s)}}_generateRandomKernelRotations(){const i=new A1,s=4*4,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=i.noise3d(o,l,c)}this.noiseTexture=new Vu(r,4,4,Ts,Fn),this.noiseTexture.wrapS=Ps,this.noiseTexture.wrapT=Ps,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}is.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};class os extends Ns{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new st(1,1,1),this.hiddenEdgeColor=new st(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Qe(e.x,e.y):new Qe(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new en(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new rm,this.depthMaterial.side=Un,this.depthMaterial.depthPacking=Hp,this.depthMaterial.blending=$t,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Un,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new en(this.resolution.x,this.resolution.y,{type:Yt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new en(r,a,{type:Yt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new en(r,a,{type:Yt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new en(Math.round(r/2),Math.round(a/2),{type:Yt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new en(r,a,{type:Yt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new en(Math.round(r/2),Math.round(a/2),{type:Yt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=oa;this.copyUniforms=rs.clone(c.uniforms),this.materialCopy=new zt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this._fsQuad=new Zo(null),this.tempPulseColor1=new st,this.tempPulseColor2=new st,this.textureMatrix=new Mt;function u(h,f){const d=f.isPerspectiveCamera?"perspective":"orthographic";return h.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=os.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=os.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=os.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=os.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!i.has(r)){const a=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,a)}}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new zt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Qe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
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

				}`})}_getEdgeDetectionMaterial(){return new zt({uniforms:{maskTexture:{value:null},texSize:{value:new Qe(.5,.5)},visibleEdgeColor:{value:new Q(1,1,1)},hiddenEdgeColor:{value:new Q(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}_getSeparableBlurMaterial(e){return new zt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Qe(.5,.5)},direction:{value:new Qe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}_getOverlayMaterial(){return new zt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:hc,depthTest:!1,depthWrite:!1,transparent:!0})}}os.BlurDirectionX=new Qe(1,0);os.BlurDirectionY=new Qe(0,1);const uo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class C1 extends Ns{constructor(){super(),this.uniforms=rs.clone(uo.uniforms),this.material=new Lv({name:uo.name,uniforms:this.uniforms,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader}),this._fsQuad=new Zo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ip?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Up?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const R1={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Qe(1/1024,1/512)}},vertexShader:`

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

		}`},P1=new Set(["Max_height","Occupied_voxels","Max_voxels","Potential"]);function au(n){if(n==null)return"";const e=String(n).trim();if(!e)return"";const t=Number(e);return Number.isFinite(t)?String(t):e}function Zf(n){if(!n)return{};if(Array.isArray(n)){if(n.length>0&&Array.isArray(n[0]))return Object.fromEntries(n);const e={};for(let t=0;t<n.length-1;t+=2){const i=n[t],s=n[t+1];typeof i=="string"&&(e[i]=s)}return e}return typeof n=="object"?{...n}:{}}function D1(n,e){if(e==null)return"";const t=String(e).trim();if(!P1.has(n))return t;const i=Number(t);return Number.isFinite(i)?i:t}function Ko(n,e){var r,a,o,l,c;const t=Zf((a=(r=n==null?void 0:n.userData)==null?void 0:r.attributes)==null?void 0:a.userStrings),s={...Zf((c=(l=(o=n==null?void 0:n.userData)==null?void 0:o.attributes)==null?void 0:l.geometry)==null?void 0:c.userStrings),...t};return e.reduce((u,h)=>(u[h]=D1(h,s[h]),u),{})}function L1(n,e,t){let i=n;for(;i;){if(i.isMesh){const s=Ko(i,t);if(au(s.Plot))return{mesh:i,metadata:s}}if(i===e)break;i=i.parent}return null}function I1(n,e){const t=au(e);if(!n||!t)return[];const i=[];return n.traverse(s=>{if(!s.isMesh)return;const r=Ko(s,["Plot"]);au(r.Plot)===t&&i.push(s)}),i}function U1(n,e){return e.reduce((t,i)=>{const s=n.map(r=>Ko(r,[i])[i]).find(r=>r!==""&&r!==void 0&&r!==null);return t[i]=s??"",t},{})}function N1(n){const{containerRef:e,config:t,onSelectionChange:i,onFilterBoundsChange:s=()=>{},onViewerError:r}=n,a=new v1;a.setLibraryPath(t.rhinoLibraryPath);const o=new eS,l=new Qe,c=new Q,u=new Q,h=new wr,f=new Q(0,0,1),d=new Map,_=Object.fromEntries((t.filterableFields??[]).map(j=>[j,{min:null,max:null}])),v={opacity:.35,transparent:!0},g={timePercent:50};let p=0,M,b,w,F,D,L,X,C,y,O,Y,Z,he,ee,J,ne,$,xe=null,Se=null,Oe=0,pe=null,_e=[],Ie=100,$e="perspective";function K(j){i(j)}function k(){const j=document.createElement("canvas");j.width=32,j.height=512;const fe=j.getContext("2d");if(!fe)return new st("#dfeaf4");const He=fe.createLinearGradient(0,0,0,j.height);He.addColorStop(0,"#a9d6ff"),He.addColorStop(.45,"#d7ecff"),He.addColorStop(1,"#f4f5f2"),fe.fillStyle=He,fe.fillRect(0,0,j.width,j.height);const tt=new im(j);return tt.colorSpace=wn,tt}function le(j){const fe=Ji.degToRad(51.9244),tt=Ji.degToRad(23.44*Math.sin(2*Math.PI*(80-81)/365)),ft=6+j/100*12,Nt=Ji.degToRad((ft-12)*15),Ft=-Math.cos(tt)*Math.sin(Nt),Lt=Math.sin(tt)*Math.cos(fe)-Math.cos(tt)*Math.sin(fe)*Math.cos(Nt),Mn=Math.sin(tt)*Math.sin(fe)+Math.cos(tt)*Math.cos(fe)*Math.cos(Nt);return{direction:new Q(Ft,Lt,Math.max(Mn,.05)).normalize(),altitude:Mn}}function ve(){if(!he||!ee||!_e.length||(h.makeEmpty(),_e.forEach(Lt=>h.expandByObject(Lt)),h.isEmpty()))return;h.getSize(c),h.getCenter(u);const{direction:j,altitude:fe}=le(g.timePercent),He=Math.max(c.x,c.y,1),tt=Math.max(He*2.6,c.z*4,220),ft=Math.max(He*1.25,140),Nt=Math.max(tt+c.z*8,900),Ft=Ji.clamp((fe+.05)/.85,.18,1);he.position.copy(u).addScaledVector(j,tt),ee.position.copy(u),he.intensity=2.6*Ft,he.castShadow=!0,he.shadow.camera.left=-ft,he.shadow.camera.right=ft,he.shadow.camera.top=ft,he.shadow.camera.bottom=-ft,he.shadow.camera.near=.1,he.shadow.camera.far=Nt,he.shadow.bias=-2e-5,he.shadow.normalBias=.01,he.shadow.camera.updateProjectionMatrix(),he.shadow.needsUpdate=!0,J&&(J.intensity=.5+.7*Ft),ne&&(ne.intensity=.35+.35*Ft),$&&($.intensity=.08+.14*Ft)}function be({allowRotate:j}){const fe=new WE(w,L.domElement);return fe.enableDamping=!0,fe.dampingFactor=.08,fe.enablePan=!0,fe.screenSpacePanning=!0,fe.enableRotate=j,fe.mouseButtons.LEFT=j?ri.ROTATE:ri.PAN,fe.mouseButtons.RIGHT=ri.PAN,fe.mouseButtons.MIDDLE=ri.DOLLY,fe}function ke(){const j=e.value,fe=(j==null?void 0:j.clientWidth)??1,He=(j==null?void 0:j.clientHeight)??1;return fe/He}function I(j,fe){const He=j/fe;D.left=-Ie*He,D.right=Ie*He,D.top=Ie,D.bottom=-Ie,D.updateProjectionMatrix()}function U(j,fe){var tt;const He=((tt=Z==null?void 0:Z.target)==null?void 0:tt.clone())??u.clone();w=j,$e=fe,C.camera=w,y&&(y.camera=w),O.renderCamera=w,Z==null||Z.dispose(),Z=be({allowRotate:fe!=="top-orthographic"}),Z.target.copy(He),Z.update(),E()}function G(){Dt.DEFAULT_UP.set(0,0,1),b=new Ev,b.background=k(),F=new An(40,1,.1,3e3),F.position.set(-220,-190,150),F.up.copy(f),D=new Yo(-1,1,1,-1,.1,3e3),D.up.set(0,1,0),w=F,L=new HE({antialias:!0}),L.setPixelRatio(window.devicePixelRatio),L.outputColorSpace=wn,L.shadowMap.enabled=!0,L.shadowMap.type=r_,X=new T1(L),C=new w1(b,w),X.addPass(C),y=new is(b,w,1,1),y.kernelRadius=16,y.minDistance=.005,y.maxDistance=.1,X.addPass(y),O=new os(new Qe(1,1),b,w),O.visibleEdgeColor.set("#ffe36e"),O.hiddenEdgeColor.set("#c59d16"),O.edgeStrength=4,O.edgeGlow=.15,O.edgeThickness=1.2,O.pulsePeriod=0,X.addPass(O),Y=new _m(R1),X.addPass(Y),X.addPass(new C1),Z=be({allowRotate:!0}),he=new nu("#ffffff",2.4),he.castShadow=!0,he.shadow.mapSize.set(4096,4096),ee=new Dt,he.target=ee,J=new nu("#ffffff",1.2),J.position.set(130,80,110),ne=new Hv("#ffffff","#f2f2f2",.6),$=new qv("#ffffff",.14),b.add(he,ee,J,ne,$)}function E(){const j=e.value;if(!j)return!1;const fe=j.clientWidth,He=j.clientHeight;if(!fe||!He)return!1;F.aspect=fe/He,F.updateProjectionMatrix(),I(fe,He),L.setSize(fe,He,!1),X.setSize(fe,He);const tt=L.getPixelRatio();return y==null||y.setSize(fe*tt,He*tt),O.setSize(fe*tt,He*tt),Y.material.uniforms.resolution.value.set(1/(fe*tt),1/(He*tt)),!0}function ce(j=10){E()||j<=0||(Oe=window.requestAnimationFrame(()=>{ce(j-1)}))}function se(){Z.update(),X.render(),p=window.requestAnimationFrame(se)}function Ee(j,fe=1.2){if(h.makeEmpty(),j.forEach(Lt=>h.expandByObject(Lt)),h.isEmpty())return;if(h.getSize(c),h.getCenter(u),$e==="top-orthographic"){const Lt=ke(),Mn=Math.max(c.y,c.x/Lt,1),gi=Math.max(c.z*4,Mn*3,120);Ie=Mn*fe/2,I(Lt,1),D.up.set(0,1,0),D.position.set(u.x,u.y,u.z+gi),D.near=Math.max(gi/200,.1),D.far=gi*20,D.updateProjectionMatrix(),Z.target.copy(u),Z.update();return}const tt=Math.max(c.x,c.y,c.z)/(2*Math.atan(Math.PI*w.fov/360)),ft=tt/w.aspect,Nt=fe*Math.max(tt,ft),Ft=Z.target.clone().sub(w.position).normalize().multiplyScalar(Nt);w.up.copy(f),Z.target.copy(u),w.near=Math.max(Nt/100,.1),w.far=Nt*100,w.updateProjectionMatrix(),w.position.copy(Z.target).sub(Ft),Z.update()}function ue(j){var fe,He,tt;(fe=j==null?void 0:j.color)!=null&&fe.isColor&&((He=j.userData).originalVoxelColor??(He.originalVoxelColor=j.color.clone()),j.color.copy(j.userData.originalVoxelColor)),(tt=j==null?void 0:j.emissive)!=null&&tt.isColor&&j.userData.originalVoxelColor&&(j.emissive.copy(j.userData.originalVoxelColor).multiplyScalar(.12),j.emissiveIntensity=.35),"metalness"in j&&(j.metalness=0),"roughness"in j&&(j.roughness=Math.min(j.roughness??1,.7)),j.transparent=v.transparent,j.opacity=v.opacity,j.depthWrite=!0,j.depthTest=!0,j.needsUpdate=!0}function ye(j=Se){j&&j.traverse(fe=>{if(fe.isMesh){if(Array.isArray(fe.material)){fe.material.forEach(ue);return}ue(fe.material)}})}function re(j){if(j.isMesh){if(j.castShadow=!0,j.receiveShadow=!1,Array.isArray(j.material)){j.material=j.material.map(fe=>fe.clone()),j.material.forEach(ue);return}j.material=j.material.clone(),ue(j.material)}}function De(j){if(j===""||j===null||j===void 0)return null;const fe=Number(j);return Number.isFinite(fe)?fe:null}function T(){return Object.fromEntries((t.filterableFields??[]).map(j=>{var Ft;const fe=(Ft=t.filterBounds)==null?void 0:Ft[j];if(fe)return[j,{min:fe.min,max:fe.max,step:fe.step??1}];const He=[];if(d.forEach(Lt=>{const Mn=Number(Lt[j]);Number.isFinite(Mn)&&He.push(Mn)}),!He.length)return[j,{min:0,max:1,step:1}];const tt=Math.min(...He),ft=Math.max(...He),Nt=He.some(Lt=>!Number.isInteger(Lt))?.1:1;return[j,{min:tt,max:ft,step:Nt}]}))}function S(j){const fe=d.get(j);return fe?Object.entries(_).every(([He,tt])=>{if(tt.min===null&&tt.max===null)return!0;const ft=Number(fe[He]);return!(!Number.isFinite(ft)||tt.min!==null&&ft<tt.min||tt.max!==null&&ft>tt.max)}):!0}function H(){Se&&Se.traverse(j=>{j.isMesh&&(j.visible=S(j))})}function ae(j,fe){var ft,Nt,Ft;const He=(ft=j==null?void 0:j.userData)==null?void 0:ft.layers;if(!j||!Array.isArray(He)||!(fe!=null&&fe.isMesh))return null;const tt=(Ft=(Nt=fe.userData)==null?void 0:Nt.attributes)==null?void 0:Ft.layerIndex;return typeof tt!="number"?null:He[tt]??null}function me(j,fe,He){if(!j||!fe)return;const tt=new st(He);j.traverse(ft=>{if(!ft.isMesh)return;const Nt=ae(j,ft);if(!(!Nt||Nt.name!==fe)){if(Array.isArray(ft.material)){ft.material=ft.material.map(Ft=>{const Lt=Ft.clone();return Lt.color.copy(tt),Lt});return}ft.material=ft.material.clone(),ft.material.color.copy(tt)}})}function te(j,fe){!j||!fe||j.traverse(He=>{if(!He.isMesh)return;const tt=ae(j,He);if(!tt||tt.name!==fe)return;const ft=()=>new Wu({color:16777215,roughness:.9,metalness:0});if(Array.isArray(He.material)){He.material=He.material.map(()=>ft());return}He.material=ft()})}function Ve(j){j&&j.traverse(fe=>{if(fe.isMesh){if(fe.castShadow=!1,fe.receiveShadow=!0,Array.isArray(fe.material)){fe.material=fe.material.map(He=>He.clone());return}fe.material=fe.material.clone()}})}function Pe(){O.selectedObjects=[]}function qe(j){Pe(),O.selectedObjects=j}function Ye(){Pe(),K({status:"idle",metadata:null,voxelPath:null,message:""})}function we(j){return new Promise((fe,He)=>{a.load(j,fe,void 0,He)})}function Re(){pe=null}function Ge(){_e.length&&(U(D,"top-orthographic"),Ee(_e,1.1))}function Je(){_e.length&&(U(F,"perspective"),Ee(_e,.5))}function Ne(j){const fe=Ji.clamp(Number(j)||0,0,100),He=1-fe/100*.95;v.transparent=fe>0,v.opacity=He,ye()}function Ze(j){g.timePercent=Ji.clamp(Number(j)||0,0,100),ve()}function V(j){if(!pe)return 0;const fe=j.clientX-pe.startX,He=j.clientY-pe.startY;return Math.hypot(fe,He)}function Be(j){j.button===0&&(pe={startTime:performance.now(),startX:j.clientX,startY:j.clientY,moved:!1})}function oe(j){pe&&V(j)>(t.clickSelectionMaxMovementPx??6)&&(pe.moved=!0)}function Fe(j){if(!pe||j.button!==0){Re();return}const fe=performance.now()-pe.startTime,He=pe.moved||V(j)>(t.clickSelectionMaxMovementPx??6);Re(),!(He||fe>(t.clickSelectionMaxDurationMs??180))&&Te(j)}function Le(j){if(!Se)throw new Error("The voxel metadata model is not loaded.");if(!String(j??"").trim())throw new Error("The selected block is missing a Plot value.");const fe=I1(Se,j).filter(He=>He.visible&&S(He));if(!fe.length)throw new Error(`No voxel metadata was found for Plot ${j}.`);return{voxelPath:t.sunVoxelModelPath,metadata:U1(fe,t.requiredMetadata),matchingMeshes:fe}}async function Te(j){if(!Se)return;const fe=L.domElement.getBoundingClientRect();l.x=(j.clientX-fe.left)/fe.width*2-1,l.y=-((j.clientY-fe.top)/fe.height)*2+1,o.setFromCamera(l,w);const He=o.intersectObject(Se,!0).filter(ft=>ft.object.visible);if(!He.length){Ye();return}const tt=L1(He[0].object,Se,t.selectionMetadata);if(!tt){K({status:"error",metadata:null,voxelPath:null,message:"The clicked object does not expose Plot metadata."});return}K({status:"loading",metadata:null,voxelPath:null,message:"Loading matching voxel metadata."});try{const{voxelPath:ft,metadata:Nt,matchingMeshes:Ft}=Le(tt.metadata.Plot);qe(Ft),Ee(Ft,1.35),K({status:"ready",metadata:Nt,voxelPath:ft,message:""})}catch(ft){K({status:"error",metadata:tt.metadata,voxelPath:null,message:ft instanceof Error?ft.message:"Unable to load the matching voxel metadata."})}}async function et(){K({status:"loading",metadata:null,voxelPath:null,message:"Loading context and voxel models."});try{[xe,Se]=await Promise.all([t.staticContextModelPath?we(t.staticContextModelPath):Promise.resolve(null),we(t.sunVoxelModelPath)]),Ve(xe),te(xe,"Context"),me(xe,"Sunspots","#ffd84d"),Se.traverse(fe=>{re(fe),fe.isMesh&&d.set(fe,Ko(fe,t.requiredMetadata))}),s(T()),Se.visible=!0,H(),xe&&b.add(xe),b.add(Se),_e=xe?[xe,Se]:[Se],ve(),Ee(_e,.5),K({status:"idle",metadata:null,voxelPath:null,message:""})}catch(j){const fe=j instanceof Error?j.message:"Unable to load the Rhino models.";K({status:"error",metadata:null,voxelPath:null,message:`Failed to load ${t.staticContextModelPath} or ${t.sunVoxelModelPath}. ${fe}`}),r(fe)}}function ot(j){(t.filterableFields??[]).forEach(fe=>{const He=(j==null?void 0:j[fe])??{};_[fe]={min:De(He.min),max:De(He.max)}}),Pe(),H()}return Od(async()=>{try{G();const j=e.value;if(!j)throw new Error("The viewer container did not mount.");j.appendChild(L.domElement),L.domElement.addEventListener("pointerdown",Be),L.domElement.addEventListener("pointermove",oe),L.domElement.addEventListener("pointerup",Fe),L.domElement.addEventListener("pointercancel",Re),L.domElement.addEventListener("pointerleave",Re),M=new ResizeObserver(()=>E()),M.observe(j),ce(),se(),await et()}catch(j){const fe=j instanceof Error?j.message:"Unable to initialize the viewer.";K({status:"error",metadata:null,voxelPath:null,message:fe}),r(fe)}}),Bd(()=>{window.cancelAnimationFrame(p),window.cancelAnimationFrame(Oe),L==null||L.domElement.removeEventListener("pointerdown",Be),L==null||L.domElement.removeEventListener("pointermove",oe),L==null||L.domElement.removeEventListener("pointerup",Fe),L==null||L.domElement.removeEventListener("pointercancel",Re),L==null||L.domElement.removeEventListener("pointerleave",Re),M==null||M.disconnect(),Pe(),Re(),Z==null||Z.dispose(),X==null||X.dispose(),a.dispose(),L==null||L.dispose()}),{resetView:Je,setSunTime:Ze,setTopView:Ge,setVoxelFilters:ot,setVoxelTransparency:Ne}}const F1={class:"project-layout project-layout--viewer-only"},O1={ref:"container",class:"project-layout__viewer"},B1={key:0,class:"viewer-loading",role:"status","aria-live":"polite"},k1={class:"viewer-loading__label"},z1={class:"scene-controls","aria-label":"Scene controls"},V1=["aria-expanded"],H1=["aria-label"],G1=["aria-expanded"],W1={key:0,id:"scene-transparency-panel",class:"scene-controls__panel"},X1={class:"scene-controls__header"},Y1={class:"scene-controls__value"},j1=["value"],q1={key:1,id:"scene-sun-panel",class:"scene-controls__panel scene-controls__panel--sun"},Z1={class:"scene-controls__header"},K1={class:"scene-controls__value"},$1=["value"],J1={key:1,class:"viewer-note"},Q1={class:"viewer-note__section"},eT={class:"metadata-list metadata-list--compact"},tT={key:2,class:"viewer-bottom-filter"},nT=["aria-label"],iT={class:"viewer-bottom-filter__header"},sT={class:"viewer-bottom-filter__label-row"},rT={class:"viewer-bottom-filter__label"},aT={class:"viewer-bottom-filter__info"},oT=["aria-expanded"],lT={key:0,id:"potential-filter-info",class:"viewer-bottom-filter__info-popover",role:"note"},cT={class:"range-slider__values"},uT={class:"range-slider range-slider--floating"},hT=["min","max","step","value"],fT=["min","max","step","value"],dT={class:"filter-drawer","aria-label":"Filters"},pT={class:"filter-list"},mT={class:"filter-group__header"},gT={class:"filter-group__label"},xT={class:"range-slider__values"},_T={class:"range-slider"},vT=["min","max","step","value","onInput"],ST=["min","max","step","value","onInput"],Kf="Potential",bT={__name:"SolarScapeView",setup(n){const e=d0("container"),t=Ci(!1),i=Ci(!1),s=Ci(!1),r=Ci(65),a=Ci(!1),o=Ci("perspective"),l=Ci(!1),c=Ci(50),u=Si.filterBounds??{},h=Cs(Object.fromEntries(Si.filterableFields.map(pe=>{const _e=u[pe]??{min:0,max:100,step:1};return[pe,{min:_e.min,max:_e.max,step:_e.step??1}]}))),f=Cs(Object.fromEntries(Si.filterableFields.map(pe=>{const _e=u[pe]??{min:0,max:100};return[pe,{min:_e.min,max:_e.max}]}))),d=_n(()=>Si.requiredMetadata.map(pe=>({key:pe,label:Si.fieldLabels[pe]??pe}))),_=_n(()=>Si.filterableFields.map(pe=>({key:pe,label:Si.fieldLabels[pe]??pe}))),v=_n(()=>_.value.find(pe=>pe.key===Kf)??null),g=_n(()=>_.value.filter(pe=>pe.key!==Kf)),p=Cs({status:"idle",metadata:null,voxelPath:null,message:""});function M(pe){p.status=pe.status,p.metadata=pe.metadata,p.voxelPath=pe.voxelPath,p.message=pe.message}function b(pe){p.status="error",p.metadata=null,p.voxelPath=null,p.message=pe}function w(pe){_.value.forEach(({key:_e})=>{pe[_e]&&(h[_e].min=pe[_e].min,h[_e].max=pe[_e].max,h[_e].step=pe[_e].step)}),J(),i.value=!0}const F=N1({containerRef:e,config:Si,onSelectionChange:M,onFilterBoundsChange:w,onViewerError:b});Kr(f,pe=>{i.value&&F.setVoxelFilters(pe)},{deep:!0});function D(){t.value=!t.value}function L(){t.value=!1}function X(){a.value=!a.value}function C(){l.value=!l.value}function y(){s.value=!s.value}function O(){F.resetView(),o.value="perspective"}function Y(){if(o.value==="top"){F.resetView(),o.value="perspective";return}F.setTopView(),o.value="top"}function Z(pe){const _e=Number(pe.target.value);r.value=_e,F.setVoxelTransparency(_e)}function he(pe){const _e=Number(pe.target.value);c.value=_e,F.setSunTime(_e)}function ee(pe){const Ie=6+pe/100*12,$e=Math.floor(Ie),K=Math.round((Ie-$e)*60),k=K===60?$e+1:$e,le=K===60?0:K;return`${String(k).padStart(2,"0")}:${String(le).padStart(2,"0")}`}function J(){_.value.forEach(({key:pe})=>{f[pe].min=h[pe].min,f[pe].max=h[pe].max})}function ne(pe,_e){const Ie=Number(_e.target.value);f[pe].min=Math.min(Ie,f[pe].max)}function $(pe,_e){const Ie=Number(_e.target.value);f[pe].max=Math.max(Ie,f[pe].min)}function xe(pe){const _e=h[pe],Ie=Math.max(_e.max-_e.min,1),$e=(f[pe].min-_e.min)/Ie*100,K=100-(f[pe].max-_e.min)/Ie*100;return{left:`${$e}%`,right:`${K}%`}}function Se(pe,_e,Ie=1){var le;if(_e==null||_e==="")return"Missing";const $e=Number(_e),K=((le=Si.valuePrefixes)==null?void 0:le[pe])??"";if(!Number.isFinite($e))return`${K}${String(_e)}`;const k=Ie<1?$e.toFixed(1):String(Math.round($e));return`${K}${k}`}function Oe(pe,_e,Ie){return Number.isFinite(_e)?Se(pe,_e,Ie):""}return(pe,_e)=>(Qt(),on("main",F1,[ze("section",O1,[p.status==="loading"?(Qt(),on("div",B1,[_e[2]||(_e[2]=ze("div",{class:"viewer-loading__sun","aria-hidden":"true"},[ze("span",{class:"viewer-loading__core"}),ze("span",{class:"viewer-loading__rays"})],-1)),ze("p",k1,pn(p.message||"Loading scene..."),1)])):ms("",!0),ze("button",{type:"button",class:"filter-trigger",onClick:D,"aria-label":"Open filters"},[..._e[3]||(_e[3]=[ze("span",{class:"filter-trigger__icon","aria-hidden":"true"},[ze("span"),ze("span"),ze("span")],-1),ze("span",{class:"filter-trigger__label"},"Filters",-1)])]),ze("section",z1,[ze("button",{type:"button",class:ws(["scene-controls__button scene-controls__button--icon",{"scene-controls__button--active":a.value}]),"aria-label":"Transparency","aria-expanded":a.value?"true":"false","aria-controls":"scene-transparency-panel",onClick:X},[..._e[4]||(_e[4]=[ze("img",{class:"scene-controls__icon-image",src:Qx,alt:"",width:"24",height:"24"},null,-1)])],10,V1),ze("button",{type:"button",class:ws(["scene-controls__button scene-controls__button--icon",{"scene-controls__button--active":o.value==="top"}]),"aria-label":o.value==="top"?"Switch to perspective view":"Switch to top view",onClick:Y},[..._e[5]||(_e[5]=[ze("img",{class:"scene-controls__icon-image",src:e_,alt:"",width:"24",height:"24"},null,-1)])],10,H1),ze("button",{type:"button",class:"scene-controls__button scene-controls__button--icon","aria-label":"Reset 3D view",onClick:O},[..._e[6]||(_e[6]=[ze("img",{class:"scene-controls__icon-image",src:t_,alt:"",width:"24",height:"24"},null,-1)])]),ze("button",{type:"button",class:ws(["scene-controls__button scene-controls__button--icon",{"scene-controls__button--active":l.value}]),"aria-label":"Sun settings","aria-expanded":l.value?"true":"false","aria-controls":"scene-sun-panel",onClick:C},[..._e[7]||(_e[7]=[ze("img",{class:"scene-controls__icon-image",src:n_,alt:"",width:"24",height:"24"},null,-1)])],10,G1),a.value?(Qt(),on("div",W1,[ze("div",X1,[_e[8]||(_e[8]=ze("label",{class:"scene-controls__label",for:"voxel-transparency"},"Voxel transparency",-1)),ze("span",Y1,pn(r.value)+"%",1)]),ze("input",{id:"voxel-transparency",class:"scene-controls__slider",type:"range",min:"0",max:"100",step:"1",value:r.value,onInput:Z},null,40,j1)])):ms("",!0),l.value?(Qt(),on("div",q1,[ze("div",Z1,[_e[9]||(_e[9]=ze("label",{class:"scene-controls__label",for:"scene-sun-time"},"Sun time",-1)),ze("span",K1,pn(ee(c.value)),1)]),ze("input",{id:"scene-sun-time",class:"scene-controls__slider",type:"range",min:"0",max:"100",step:"1",value:c.value,onInput:he},null,40,$1),_e[10]||(_e[10]=ze("p",{class:"scene-controls__caption"},"21 March, Rotterdam",-1))])):ms("",!0)]),p.status==="ready"?(Qt(),on("div",J1,[ze("section",Q1,[_e[11]||(_e[11]=ze("h2",{class:"viewer-note__title"},"Solar envelope info",-1)),ze("dl",eT,[(Qt(!0),on(In,null,Eo(d.value,Ie=>{var $e;return Qt(),on("div",{key:Ie.key,class:"metadata-list__row"},[ze("dt",null,pn(Ie.label),1),ze("dd",null,pn(Se(Ie.key,($e=p.metadata)==null?void 0:$e[Ie.key])),1)])}),128))])])])):ms("",!0),v.value?(Qt(),on("div",tT,[ze("section",{class:"viewer-bottom-filter__card","aria-label":`${v.value.label} filter`},[ze("div",iT,[ze("div",sT,[ze("label",rT,pn(v.value.label),1),ze("div",aT,[ze("button",{type:"button",class:"viewer-bottom-filter__info-button","aria-expanded":s.value?"true":"false","aria-controls":"potential-filter-info","aria-label":"Explain potential",onClick:y}," i ",8,oT),s.value?(Qt(),on("div",lT," Ratio between the maximum buildable volume allowed by sun regulations and the existing built volume ")):ms("",!0)])]),ze("div",cT,[ze("span",null,pn(Oe(v.value.key,f[v.value.key].min,h[v.value.key].step)),1),ze("span",null,pn(Oe(v.value.key,f[v.value.key].max,h[v.value.key].step)),1)])]),ze("div",uT,[_e[12]||(_e[12]=ze("div",{class:"range-slider__track"},null,-1)),ze("div",{class:"range-slider__active",style:la(xe(v.value.key))},null,4),ze("input",{class:"range-slider__input",type:"range",min:h[v.value.key].min,max:h[v.value.key].max,step:h[v.value.key].step,value:f[v.value.key].min,onInput:_e[0]||(_e[0]=Ie=>ne(v.value.key,Ie))},null,40,hT),ze("input",{class:"range-slider__input",type:"range",min:h[v.value.key].min,max:h[v.value.key].max,step:h[v.value.key].step,value:f[v.value.key].max,onInput:_e[1]||(_e[1]=Ie=>$(v.value.key,Ie))},null,40,fT)])],8,nT)])):ms("",!0),t.value?(Qt(),on("div",{key:3,class:"filter-overlay",onClick:Ug(L,["self"])},[ze("aside",dT,[ze("div",{class:"filter-drawer__header"},[_e[13]||(_e[13]=ze("div",{class:"filter-drawer__heading"},[ze("p",{class:"filter-drawer__eyebrow"},"Voxel filters"),ze("h2",{class:"filter-drawer__title"},"Refine the visible range")],-1)),ze("button",{type:"button",class:"filter-close",onClick:L,"aria-label":"Close filters"}," Close ")]),_e[15]||(_e[15]=ze("p",{class:"filter-drawer__copy"},"Adjust both handles to keep only the values you want visible in the scene.",-1)),ze("div",pT,[(Qt(!0),on(In,null,Eo(g.value,Ie=>(Qt(),on("section",{key:Ie.key,class:"filter-group"},[ze("div",mT,[ze("label",gT,pn(Ie.label),1),ze("div",xT,[ze("span",null,pn(Oe(Ie.key,f[Ie.key].min,h[Ie.key].step)),1),ze("span",null,pn(Oe(Ie.key,f[Ie.key].max,h[Ie.key].step)),1)])]),ze("div",_T,[_e[14]||(_e[14]=ze("div",{class:"range-slider__track"},null,-1)),ze("div",{class:"range-slider__active",style:la(xe(Ie.key))},null,4),ze("input",{class:"range-slider__input",type:"range",min:h[Ie.key].min,max:h[Ie.key].max,step:h[Ie.key].step,value:f[Ie.key].min,onInput:$e=>ne(Ie.key,$e)},null,40,vT),ze("input",{class:"range-slider__input",type:"range",min:h[Ie.key].min,max:h[Ie.key].max,step:h[Ie.key].step,value:f[Ie.key].max,onInput:$e=>$(Ie.key,$e)},null,40,ST)])]))),128))]),ze("div",{class:"filter-drawer__actions"},[ze("button",{type:"button",class:"filter-reset",onClick:J},"Reset")])])])):ms("",!0)],512)]))}},MT=Wx({history:Ex("/Solar_Scape/"),routes:[{path:"/",name:"home",component:Jx},{path:"/projects/solar-scape",name:"solar-scape",component:bT}]});Og(Zx).use(MT).mount("#app");
