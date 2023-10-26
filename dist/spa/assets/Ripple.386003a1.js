import{c,J as K,B as N,h as v,g as T,K as U,d as H,L as Q,M as J,N as X,O as Y}from"./index.92e145f7.js";const G={xs:18,sm:24,md:32,lg:38,xl:46},W={size:String};function Z(e,t=G){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const ee=e=>K(N(e)),te=e=>K(e);function ne(e,t){return e!==void 0&&e()||t}function he(e,t){if(e!==void 0){const r=e();if(r!=null)return r.slice()}return t}function w(e,t){return e!==void 0?t.concat(e()):t}function ye(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}const A="0 0 24 24",j=e=>e,C=e=>`ionicons ${e}`,D={"mdi-":e=>`mdi ${e}`,"icon-":j,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":C,"ion-ios":C,"ion-logo":C,"iconfont ":j,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},F={o_:"-outlined",r_:"-round",s_:"-sharp"},V={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},re=new RegExp("^("+Object.keys(D).join("|")+")"),ie=new RegExp("^("+Object.keys(F).join("|")+")"),L=new RegExp("^("+Object.keys(V).join("|")+")"),ae=/^[Mm]\s?[-+]?\.?\d/,se=/^img:/,oe=/^svguse:/,ue=/^ion-/,le=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ke=ee({name:"QIcon",props:{...W,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=T(),n=Z(e),a=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let s,i=e.name;if(i==="none"||!i)return{none:!0};if(r.iconMapFn!==null){const o=r.iconMapFn(i);if(o!==void 0)if(o.icon!==void 0){if(i=o.icon,i==="none"||!i)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(ae.test(i)===!0){const[o,d=A]=i.split("|");return{svg:!0,viewBox:d,nodes:o.split("&&").map(y=>{const[m,k,h]=y.split("@@");return v("path",{style:k,d:m,transform:h})})}}if(se.test(i)===!0)return{img:!0,src:i.substring(4)};if(oe.test(i)===!0){const[o,d=A]=i.split("|");return{svguse:!0,src:o.substring(7),viewBox:d}}let g=" ";const f=i.match(re);if(f!==null)s=D[f[1]](i);else if(le.test(i)===!0)s=i;else if(ue.test(i)===!0)s=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(L.test(i)===!0){s="notranslate material-symbols";const o=i.match(L);o!==null&&(i=i.substring(6),s+=V[o[1]]),g=i}else{s="notranslate material-icons";const o=i.match(ie);o!==null&&(i=i.substring(2),s+=F[o[1]]),g=i}return{cls:s,content:g}});return()=>{const s={class:a.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,s,ne(t.default)):u.value.img===!0?v("span",s,w(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",s,w(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",s,w(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(s.class+=" "+u.value.cls),v(e.tag,s,w(t.default,[u.value.content])))}}});function xe(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function ce(e){return e.appContext.config.globalProperties.$router!==void 0}function $e(e){return e.isUnmounted===!0||e.isDeactivated===!0}function P(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function B(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function fe(e,t){for(const r in t){const n=t[r],a=e[r];if(typeof n=="string"){if(n!==a)return!1}else if(Array.isArray(a)===!1||a.length!==n.length||n.some((u,s)=>u!==a[s]))return!1}return!0}function M(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function de(e,t){return Array.isArray(e)===!0?M(e,t):Array.isArray(t)===!0?M(t,e):e===t}function pe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(de(e[r],t[r])===!1)return!1;return!0}const be={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Re({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=T(),{props:n,proxy:a,emit:u}=r,s=ce(r),i=c(()=>n.disable!==!0&&n.href!==void 0),g=t===!0?c(()=>s===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>s===!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),f=c(()=>g.value===!0?E(n.to):null),o=c(()=>f.value!==null),d=c(()=>i.value===!0||o.value===!0),y=c(()=>n.type==="a"||d.value===!0?"a":n.tag||e||"div"),m=c(()=>i.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:f.value.href,target:n.target}:{}),k=c(()=>{if(o.value===!1)return-1;const{matched:l}=f.value,{length:p}=l,x=l[p-1];if(x===void 0)return-1;const $=a.$route.matched;if($.length===0)return-1;const b=$.findIndex(B.bind(null,x));if(b>-1)return b;const O=P(l[p-2]);return p>1&&P(x)===O&&$[$.length-1].path!==O?$.findIndex(B.bind(null,l[p-2])):b}),h=c(()=>o.value===!0&&k.value!==-1&&fe(a.$route.params,f.value.params)),_=c(()=>h.value===!0&&k.value===a.$route.matched.length-1&&pe(a.$route.params,f.value.params)),q=c(()=>o.value===!0?_.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":h.value===!0?` ${n.activeClass}`:"":"");function E(l){try{return a.$router.resolve(l)}catch{}return null}function R(l,{returnRouterError:p,to:x=n.to,replace:$=n.replace}={}){if(n.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||n.target==="_blank")return Promise.resolve(!1);l.preventDefault();const b=a.$router[$===!0?"replace":"push"](x);return p===!0?b:b.then(()=>{}).catch(()=>{})}function S(l){if(o.value===!0){const p=x=>R(l,x);u("click",l,p),l.defaultPrevented!==!0&&p()}else u("click",l)}return{hasRouterLink:o,hasHrefLink:i,hasLink:d,linkTag:y,resolvedLink:f,linkIsActive:h,linkIsExactActive:_,linkClass:q,linkAttrs:m,getLink:E,navigateToRouterLink:R,navigateOnClick:S}}function ve(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function Se(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=U(e);if(t)return t.$el||t}function _e(e,t){if(e==null||e.contains(t)===!0)return!0;for(let r=e.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(t))return!0;return!1}function me(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function z(e,t,r,n){r.modifiers.stop===!0&&X(e);const a=r.modifiers.color;let u=r.modifiers.center;u=u===!0||n===!0;const s=document.createElement("span"),i=document.createElement("span"),g=Y(e),{left:f,top:o,width:d,height:y}=t.getBoundingClientRect(),m=Math.sqrt(d*d+y*y),k=m/2,h=`${(d-m)/2}px`,_=u?h:`${g.left-f-k}px`,q=`${(y-m)/2}px`,E=u?q:`${g.top-o-k}px`;i.className="q-ripple__inner",ve(i,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${_},${E},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${a?" text-"+a:""}`,s.setAttribute("dir","ltr"),s.appendChild(i),t.appendChild(s);const R=()=>{s.remove(),clearTimeout(S)};r.abort.push(R);let S=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${h},${q},0) scale3d(1,1,1)`,i.style.opacity=.2,S=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,S=setTimeout(()=>{s.remove(),r.abort.splice(r.abort.indexOf(R),1)},275)},250)},50)}function I(e,{modifiers:t,value:r,arg:n}){const a=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:a.early===!0,stop:a.stop===!0,center:a.center===!0,color:a.color||n,keyCodes:[].concat(a.keyCodes||13)}}var qe=te({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(a){n.enabled===!0&&a.qSkipRipple!==!0&&a.type===(n.modifiers.early===!0?"pointerdown":"click")&&z(a,e,n,a.qKeyEvent===!0)},keystart:me(a=>{n.enabled===!0&&a.qSkipRipple!==!0&&H(a,n.modifiers.keyCodes)===!0&&a.type===`key${n.modifiers.early===!0?"down":"up"}`&&z(a,e,n,!0)},300)};I(n,t),e.__qripple=n,Q(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&I(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),J(t,"main"),delete e._qripple)}});export{ke as Q,qe as R,Z as a,ne as b,ee as c,w as d,be as e,Re as f,he as g,ye as h,ve as i,Se as j,ce as k,xe as l,_e as m,te as n,G as o,W as u,$e as v};