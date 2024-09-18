import{a as Y,c as ut}from"./chunk-5TBO732O.js";var _e=Y(d=>{"use strict";var nt=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),er=Symbol.for("react.strict_mode"),nr=Symbol.for("react.profiler"),rr=Symbol.for("react.provider"),ar=Symbol.for("react.context"),or=Symbol.for("react.forward_ref"),ir=Symbol.for("react.suspense"),sr=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),he=Symbol.iterator;function fr(t){return t===null||typeof t!="object"?null:(t=he&&t[he]||t["@@iterator"],typeof t=="function"?t:null)}var ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xe=Object.assign,ke={};function B(t,e,n){this.props=t,this.context=e,this.refs=ke,this.updater=n||ve}B.prototype.isReactComponent={};B.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};B.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ae(){}Ae.prototype=B.prototype;function It(t,e,n){this.props=t,this.context=e,this.refs=ke,this.updater=n||ve}var Ct=It.prototype=new Ae;Ct.constructor=It;xe(Ct,B.prototype);Ct.isPureReactComponent=!0;var ye=Array.isArray,Oe=Object.prototype.hasOwnProperty,Nt={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function Ee(t,e,n){var r,a={},o=null,i=null;if(e!=null)for(r in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(o=""+e.key),e)Oe.call(e,r)&&!we.hasOwnProperty(r)&&(a[r]=e[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];a.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:nt,type:t,key:o,ref:i,props:a,_owner:Nt.current}}function cr(t,e){return{$$typeof:nt,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tt(t){return typeof t=="object"&&t!==null&&t.$$typeof===nt}function ur(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var be=/\/+/g;function Pt(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ur(""+t.key):e.toString(36)}function dt(t,e,n,r,a){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case nt:case Zn:i=!0}}if(i)return i=t,a=a(i),t=r===""?"."+Pt(i,0):r,ye(a)?(n="",t!=null&&(n=t.replace(be,"$&/")+"/"),dt(a,e,n,"",function(f){return f})):a!=null&&(Tt(a)&&(a=cr(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(be,"$&/")+"/")+t)),e.push(a)),1;if(i=0,r=r===""?".":r+":",ye(t))for(var s=0;s<t.length;s++){o=t[s];var l=r+Pt(o,s);i+=dt(o,e,n,l,a)}else if(l=fr(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=r+Pt(o,s++),i+=dt(o,e,n,l,a);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function mt(t,e,n){if(t==null)return t;var r=[],a=0;return dt(t,r,"","",function(o){return e.call(n,o,a++)}),r}function mr(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var O={current:null},pt={transition:null},dr={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:pt,ReactCurrentOwner:Nt};function Se(){throw Error("act(...) is not supported in production builds of React.")}d.Children={map:mt,forEach:function(t,e,n){mt(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mt(t,function(){e++}),e},toArray:function(t){return mt(t,function(e){return e})||[]},only:function(t){if(!Tt(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};d.Component=B;d.Fragment=tr;d.Profiler=nr;d.PureComponent=It;d.StrictMode=er;d.Suspense=ir;d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dr;d.act=Se;d.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xe({},t.props),a=t.key,o=t.ref,i=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,i=Nt.current),e.key!==void 0&&(a=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Oe.call(e,l)&&!we.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:nt,type:t.type,key:a,ref:o,props:r,_owner:i}};d.createContext=function(t){return t={$$typeof:ar,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rr,_context:t},t.Consumer=t};d.createElement=Ee;d.createFactory=function(t){var e=Ee.bind(null,t);return e.type=t,e};d.createRef=function(){return{current:null}};d.forwardRef=function(t){return{$$typeof:or,render:t}};d.isValidElement=Tt;d.lazy=function(t){return{$$typeof:lr,_payload:{_status:-1,_result:t},_init:mr}};d.memo=function(t,e){return{$$typeof:sr,type:t,compare:e===void 0?null:e}};d.startTransition=function(t){var e=pt.transition;pt.transition={};try{t()}finally{pt.transition=e}};d.unstable_act=Se;d.useCallback=function(t,e){return O.current.useCallback(t,e)};d.useContext=function(t){return O.current.useContext(t)};d.useDebugValue=function(){};d.useDeferredValue=function(t){return O.current.useDeferredValue(t)};d.useEffect=function(t,e){return O.current.useEffect(t,e)};d.useId=function(){return O.current.useId()};d.useImperativeHandle=function(t,e,n){return O.current.useImperativeHandle(t,e,n)};d.useInsertionEffect=function(t,e){return O.current.useInsertionEffect(t,e)};d.useLayoutEffect=function(t,e){return O.current.useLayoutEffect(t,e)};d.useMemo=function(t,e){return O.current.useMemo(t,e)};d.useReducer=function(t,e,n){return O.current.useReducer(t,e,n)};d.useRef=function(t){return O.current.useRef(t)};d.useState=function(t){return O.current.useState(t)};d.useSyncExternalStore=function(t,e,n){return O.current.useSyncExternalStore(t,e,n)};d.useTransition=function(){return O.current.useTransition()};d.version="18.3.1"});var Ft=Y((Oo,Pe)=>{"use strict";Pe.exports=_e()});var Fn=Y((Lo,Tn)=>{"use strict";var Za="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Tn.exports=Za});var jn=Y((jo,Ln)=>{"use strict";var to=Fn();function Rn(){}function Mn(){}Mn.resetWarningCache=Rn;Ln.exports=function(){function t(r,a,o,i,s,l){if(l!==to){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Mn,resetWarningCache:Rn};return n.PropTypes=n,n}});var zn=Y((Uo,Dn)=>{Dn.exports=jn()();var Do,zo});var qn=Y(St=>{"use strict";var go=Ft(),ho=Symbol.for("react.element"),yo=Symbol.for("react.fragment"),bo=Object.prototype.hasOwnProperty,vo=go.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xo={key:!0,ref:!0,__self:!0,__source:!0};function Gn(t,e,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)bo.call(e,r)&&!xo.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:ho,type:t,key:o,ref:i,props:a,_owner:vo.current}}St.Fragment=yo;St.jsx=Gn;St.jsxs=Gn});var ge=Y((Ho,Bn)=>{"use strict";Bn.exports=qn()});var Ie=()=>{},te={},Ze={},tn=null,en={mark:Ie,measure:Ie};try{typeof window<"u"&&(te=window),typeof document<"u"&&(Ze=document),typeof MutationObserver<"u"&&(tn=MutationObserver),typeof performance<"u"&&(en=performance)}catch{}var{userAgent:Ce=""}=te.navigator||{},U=te,h=Ze,Ne=tn,gt=en,wo=!!U.document,j=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",nn=~Ce.indexOf("MSIE")||~Ce.indexOf("Trident/"),y="classic",rn="duotone",E="sharp",S="sharp-duotone",pr=[y,rn,E,S],gr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Te={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hr=["kit"],yr=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,br=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,vr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},xr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},kr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Ar={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Or={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},wr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},an={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Er=["solid","regular","light","thin","duotone","brands"],on=[1,2,3,4,5,6,7,8,9,10],Sr=on.concat([11,12,13,14,15,16,17,18,19,20]),rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_r=[...Object.keys(Ar),...Er,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY].concat(on.map(t=>"".concat(t,"x"))).concat(Sr.map(t=>"w-".concat(t))),Pr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ir={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Cr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Fe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},M="___FONT_AWESOME___",zt=16,sn="fa",ln="svg-inline--fa",G="data-fa-i2svg",Ut="data-fa-pseudo-element",Nr="data-fa-pseudo-element-pending",ee="data-prefix",ne="data-icon",Re="fontawesome-i2svg",Tr="async",Fr=["HTML","HEAD","STYLE","SCRIPT"],fn=(()=>{try{return!0}catch{return!1}})(),cn=[y,E,S];function ft(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[y]}})}var un={...an};un[y]={...an[y],...Te.kit,...Te["kit-duotone"]};var V=ft(un),$t={...wr};$t[y]={...$t[y],...Fe.kit,...Fe["kit-duotone"]};var st=ft($t),Wt={...Or};Wt[y]={...Wt[y],...Cr.kit};var X=ft(Wt),Yt={...kr};Yt[y]={...Yt[y],...Ir.kit};var Rr=ft(Yt),Mr=yr,mn="fa-layers-text",Lr=br,jr={...gr},Eo=ft(jr),Dr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rt=rt,J=new Set;Object.keys(st[y]).map(J.add.bind(J));Object.keys(st[E]).map(J.add.bind(J));Object.keys(st[S]).map(J.add.bind(J));var zr=[...hr,..._r],ot=U.FontAwesomeConfig||{};function Ur(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $r(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e,a=$r(Ur(n));a!=null&&(ot[r]=a)});var dn={styleDefault:"solid",familyDefault:"classic",cssPrefix:sn,replacementClass:ln,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);var Z={...dn,...ot};Z.autoReplaceSvg||(Z.observeMutations=!1);var c={};Object.keys(dn).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){Z[t]=e,it.forEach(n=>n(c))},get:function(){return Z[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,it.forEach(e=>e(c))},get:function(){return Z.cssPrefix}});U.FontAwesomeConfig=c;var it=[];function Wr(t){return it.push(t),()=>{it.splice(it.indexOf(t),1)}}var D=zt,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yr(t){if(!t||!j)return;let e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=h.head.childNodes,r=null;for(let a=n.length-1;a>-1;a--){let o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return h.head.insertBefore(e,r),t}var Hr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){let t=12,e="";for(;t-- >0;)e+=Hr[Math.random()*62|0];return e}function tt(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function re(t){return t.classList?tt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function pn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(pn(t[n]),'" '),"").trim()}function xt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ae(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function Xr(t){let{transform:e,containerWidth:n,iconWidth:r}=t,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Gr(t){let{transform:e,width:n=zt,height:r=zt,startCentered:a=!1}=t,o="";return a&&nn?o+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):o+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),o+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var qr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function gn(){let t=sn,e=ln,n=c.cssPrefix,r=c.replacementClass,a=qr;if(n!==t||r!==e){let o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Me=!1;function Mt(){c.autoAddCss&&!Me&&(Yr(gn()),Me=!0)}var Br={mixout(){return{dom:{css:gn,insertCss:Mt}}},hooks(){return{beforeDOMElementCreation(){Mt()},beforeI2svg(){Mt()}}}},L=U||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var N=L[M],hn=[],yn=function(){h.removeEventListener("DOMContentLoaded",yn),bt=1,hn.map(t=>t())},bt=!1;j&&(bt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),bt||h.addEventListener("DOMContentLoaded",yn));function Kr(t){j&&(bt?setTimeout(t,0):hn.push(t))}function ct(t){let{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?pn(t):"<".concat(e," ").concat(Vr(n),">").concat(r.map(ct).join(""),"</").concat(e,">")}function Le(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Qr=function(e,n){return function(r,a,o,i){return e.call(n,r,a,o,i)}},Lt=function(e,n,r,a){var o=Object.keys(e),i=o.length,s=a!==void 0?Qr(n,a):n,l,f,u;for(r===void 0?(l=1,u=e[o[0]]):(l=0,u=r);l<i;l++)f=o[l],u=s(u,e[f],f,e);return u};function Jr(t){let e=[],n=0,r=t.length;for(;n<r;){let a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){let o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Ht(t){let e=Jr(t);return e.length===1?e[0].toString(16):null}function Zr(t,e){let n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function je(t){return Object.keys(t).reduce((e,n)=>{let r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Vt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:r=!1}=n,a=je(e);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,je(e)):N.styles[t]={...N.styles[t]||{},...a},t==="fas"&&Vt("fa",e)}var{styles:H,shims:ta}=N,ea={[y]:Object.values(X[y]),[E]:Object.values(X[E]),[S]:Object.values(X[S])},oe=null,bn={},vn={},xn={},kn={},An={},na={[y]:Object.keys(V[y]),[E]:Object.keys(V[E]),[S]:Object.keys(V[S])};function ra(t){return~zr.indexOf(t)}function aa(t,e){let n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!ra(a)?a:null}var On=()=>{let t=r=>Lt(H,(a,o,i)=>(a[i]=Lt(o,r,{}),a),{});bn=t((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),vn=t((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),An=t((r,a,o)=>{let i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});let e="far"in H||c.autoFetchSvg,n=Lt(ta,(r,a)=>{let o=a[0],i=a[1],s=a[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});xn=n.names,kn=n.unicodes,oe=kt(c.styleDefault,{family:c.familyDefault})};Wr(t=>{oe=kt(t.styleDefault,{family:c.familyDefault})});On();function ie(t,e){return(bn[t]||{})[e]}function oa(t,e){return(vn[t]||{})[e]}function z(t,e){return(An[t]||{})[e]}function wn(t){return xn[t]||{prefix:null,iconName:null}}function ia(t){let e=kn[t],n=ie("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return oe}var se=()=>({prefix:null,iconName:null,rest:[]});function kt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=y}=e,r=V[n][t],a=st[n][t]||st[n][r],o=t in N.styles?t:null;return a||o||null}var sa={[y]:Object.keys(X[y]),[E]:Object.keys(X[E]),[S]:Object.keys(X[S])};function At(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,r={[y]:"".concat(c.cssPrefix,"-").concat(y),[E]:"".concat(c.cssPrefix,"-").concat(E),[S]:"".concat(c.cssPrefix,"-").concat(S)},a=null,o=y,i=pr.filter(l=>l!==rn);i.forEach(l=>{(t.includes(r[l])||t.some(f=>sa[l].includes(f)))&&(o=l)});let s=t.reduce((l,f)=>{let u=aa(c.cssPrefix,f);if(H[f]?(f=ea[o].includes(f)?Rr[o][f]:f,a=f,l.prefix=f):na[o].indexOf(f)>-1?(a=f,l.prefix=kt(f,{family:o})):u?l.iconName=u:f!==c.replacementClass&&!i.some(g=>f===r[g])&&l.rest.push(f),!n&&l.prefix&&l.iconName){let g=a==="fa"?wn(l.iconName):{},p=z(l.prefix,l.iconName);g.prefix&&(a=null),l.iconName=g.iconName||p||l.iconName,l.prefix=g.prefix||l.prefix,l.prefix==="far"&&!H.far&&H.fas&&!c.autoFetchSvg&&(l.prefix="fas")}return l},se());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===E&&(H.fass||c.autoFetchSvg)&&(s.prefix="fass",s.iconName=z(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===S&&(H.fasds||c.autoFetchSvg)&&(s.prefix="fasds",s.iconName=z(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=$()||"fas"),s}var Xt=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];let a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},Vt(o,a[o]);let i=X[y][o];i&&Vt(i,a[o]),On()})}reset(){this.definitions={}}_pullDefinitions(e,n){let r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{let{prefix:o,iconName:i,icon:s}=r[a],l=s[2];e[o]||(e[o]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[o][f]=s)}),e[o][i]=s}),e}},De=[],K={},Q={},la=Object.keys(Q);function fa(t,e){let{mixoutsTo:n}=e;return De=t,K={},Object.keys(Q).forEach(r=>{la.indexOf(r)===-1&&delete Q[r]}),De.forEach(r=>{let a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){let o=r.hooks();Object.keys(o).forEach(i=>{K[i]||(K[i]=[]),K[i].push(o[i])})}r.provides&&r.provides(Q)}),n}function Gt(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(K[t]||[]).forEach(i=>{e=i.apply(null,[e,...r])}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(K[t]||[]).forEach(o=>{o.apply(null,n)})}function W(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Q[t]?Q[t].apply(null,e):void 0}function qt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||$();if(e)return e=z(n,e)||e,Le(En.definitions,n,e)||Le(N.styles,n,e)}var En=new Xt,ca=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,q("noAuto")},ua={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(q("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Kr(()=>{da({autoReplaceSvgRoot:e}),q("watch",t)})}},ma={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=kt(t[0]);return{prefix:n,iconName:z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(Mr))){let e=At(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||$(),iconName:z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=$();return{prefix:e,iconName:z(e,t)||t}}}},_={noAuto:ca,config:c,dom:ua,parse:ma,library:En,findIconDefinition:qt,toHtml:ct},da=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=h}=t;(Object.keys(N.styles).length>0||c.autoFetchSvg)&&j&&c.autoReplaceSvg&&_.dom.i2svg({node:e})};function Ot(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ct(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;let n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function pa(t){let{children:e,main:n,mask:r,attributes:a,styles:o,transform:i}=t;if(ae(i)&&n.found&&!r.found){let{width:s,height:l}=n,f={x:s/l/2,y:.5};a.style=xt({...o,"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function ga(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:o}=t,i=o===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function le(t){let{icons:{main:e,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:l,titleId:f,extra:u,watchable:g=!1}=t,{width:p,height:v}=n.found?n:e,w=r==="fak",P=[c.replacementClass,a?"".concat(c.cssPrefix,"-").concat(a):""].filter(I=>u.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(u.classes).join(" "),b={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":a,class:P,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)}},k=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};g&&(b.attributes[G]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||lt())},children:[s]}),delete b.attributes.title);let x={...b,prefix:r,iconName:a,main:e,mask:n,maskId:l,transform:o,symbol:i,styles:{...k,...u.styles}},{children:A,attributes:R}=n.found&&e.found?W("generateAbstractMask",x)||{children:[],attributes:{}}:W("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=A,x.attributes=R,i?ga(x):pa(x)}function ze(t){let{content:e,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=t,l={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};s&&(l[G]="");let f={...i.styles};ae(a)&&(f.transform=Gr({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);let u=xt(f);u.length>0&&(l.style=u);let g=[];return g.push({tag:"span",attributes:l,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function ha(t){let{content:e,title:n,extra:r}=t,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=xt(r.styles);o.length>0&&(a.style=o);let i=[];return i.push({tag:"span",attributes:a,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var{styles:jt}=N;function Bt(t){let e=t[0],n=t[1],[r]=t.slice(4),a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(Rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(Rt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(Rt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}var ya={found:!1,width:512,height:512};function ba(t,e){!fn&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Kt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=$()),new Promise((r,a)=>{if(n==="fa"){let o=wn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&jt[e]&&jt[e][t]){let o=jt[e][t];return r(Bt(o))}ba(t,e),r({...ya,icon:c.showMissingIcons&&t?W("missingIconAbstract")||{}:{}})})}var Ue=()=>{},Qt=c.measurePerformance&&gt&&gt.mark&&gt.measure?gt:{mark:Ue,measure:Ue},at='FA "6.6.0"',va=t=>(Qt.mark("".concat(at," ").concat(t," begins")),()=>Sn(t)),Sn=t=>{Qt.mark("".concat(at," ").concat(t," ends")),Qt.measure("".concat(at," ").concat(t),"".concat(at," ").concat(t," begins"),"".concat(at," ").concat(t," ends"))},fe={begin:va,end:Sn},ht=()=>{};function $e(t){return typeof(t.getAttribute?t.getAttribute(G):null)=="string"}function xa(t){let e=t.getAttribute?t.getAttribute(ee):null,n=t.getAttribute?t.getAttribute(ne):null;return e&&n}function ka(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Aa(){return c.autoReplaceSvg===!0?yt.replace:yt[c.autoReplaceSvg]||yt.replace}function Oa(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function wa(t){return h.createElement(t)}function _n(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?Oa:wa}=e;if(typeof t=="string")return h.createTextNode(t);let r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(_n(o,{ceFn:n}))}),r}function Ea(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var yt={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(_n(n),e)}),e.getAttribute(G)===null&&c.keepOriginalSource){let n=h.createComment(Ea(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~re(e).indexOf(c.replacementClass))return yt.replace(t);let r=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===c.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}let a=n.map(o=>ct(o)).join(`
`);e.setAttribute(G,""),e.innerHTML=a}};function We(t){t()}function Pn(t,e){let n=typeof e=="function"?e:ht;if(t.length===0)n();else{let r=We;c.mutateApproach===Tr&&(r=U.requestAnimationFrame||We),r(()=>{let a=Aa(),o=fe.begin("mutate");t.map(a),o(),n()})}}var ce=!1;function In(){ce=!0}function Jt(){ce=!1}var vt=null;function Ye(t){if(!Ne||!c.observeMutations)return;let{treeCallback:e=ht,nodeCallback:n=ht,pseudoElementsCallback:r=ht,observeMutationsRoot:a=h}=t;vt=new Ne(o=>{if(ce)return;let i=$();tt(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!$e(s.addedNodes[0])&&(c.searchPseudoElements&&r(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&$e(s.target)&&~Dr.indexOf(s.attributeName))if(s.attributeName==="class"&&xa(s.target)){let{prefix:l,iconName:f}=At(re(s.target));s.target.setAttribute(ee,l||i),f&&s.target.setAttribute(ne,f)}else ka(s.target)&&n(s.target)})}),j&&vt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Sa(){vt&&vt.disconnect()}function _a(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((r,a)=>{let o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function Pa(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=At(re(t));return a.prefix||(a.prefix=$()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=oa(a.prefix,t.innerText)||ie(a.prefix,Ht(t.innerText))),!a.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Ia(t){let e=tt(t.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(r||lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ca(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function He(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:a}=Pa(t),o=Ia(t),i=Gt("parseNodeAttributes",{},t),s=e.styleParser?_a(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o},...i}}var{styles:Na}=N;function Cn(t){let e=c.autoReplaceSvg==="nest"?He(t,{styleParser:!1}):He(t);return~e.extra.classes.indexOf(mn)?W("generateLayersText",t,e):W("generateSvgReplacementMutation",t,e)}var T=new Set;cn.map(t=>{T.add("fa-".concat(t))});Object.keys(V[y]).map(T.add.bind(T));Object.keys(V[E]).map(T.add.bind(T));Object.keys(V[S]).map(T.add.bind(T));T=[...T];function Ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();let n=h.documentElement.classList,r=u=>n.add("".concat(Re,"-").concat(u)),a=u=>n.remove("".concat(Re,"-").concat(u)),o=c.autoFetchSvg?T:cn.map(u=>"fa-".concat(u)).concat(Object.keys(Na));o.includes("fa")||o.push("fa");let i=[".".concat(mn,":not([").concat(G,"])")].concat(o.map(u=>".".concat(u,":not([").concat(G,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=tt(t.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();let l=fe.begin("onTree"),f=s.reduce((u,g)=>{try{let p=Cn(g);p&&u.push(p)}catch(p){fn||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,g)=>{Promise.all(f).then(p=>{Pn(p,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(p=>{l(),g(p)})})}function Ta(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cn(t).then(n=>{n&&Pn([n],e)})}function Fa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qt(e||{}),{mask:a}=n;return a&&(a=(a||{}).icon?a:qt(a||{})),t(r,{...n,mask:a})}}var Ra=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=C,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:l=[],attributes:f={},styles:u={}}=e;if(!t)return;let{prefix:g,iconName:p,icon:v}=t;return Ot({type:"icon",...t},()=>(q("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(i?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||lt()):(f["aria-hidden"]="true",f.focusable="false")),le({icons:{main:Bt(v),mask:a?Bt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:{...C,...n},symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:f,styles:u,classes:l}})))},Ma={mixout(){return{icon:Fa(Ra)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ve,t.nodeCallback=Ta,t}}},provides(t){t.i2svg=function(e){let{node:n=h,callback:r=()=>{}}=e;return Ve(n,r)},t.generateSvgReplacementMutation=function(e,n){let{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:l,mask:f,maskId:u,extra:g}=n;return new Promise((p,v)=>{Promise.all([Kt(r,i),f.iconName?Kt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[P,b]=w;p([e,le({icons:{main:P,mask:b},prefix:i,iconName:r,transform:s,symbol:l,maskId:u,title:a,titleId:o,extra:g,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:o,styles:i}=e,s=xt(i);s.length>0&&(r.style=s);let l;return ae(o)&&(l=W("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},La={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return Ot({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},ja={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:a={},styles:o={}}=e;return Ot({type:"counter",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),ha({content:t.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(c.cssPrefix,"-layers-counter"),...r]}})))}}}},Da={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=C,title:r=null,classes:a=[],attributes:o={},styles:i={}}=e;return Ot({type:"text",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),ze({content:t,transform:{...C,...n},title:r,extra:{attributes:o,styles:i,classes:["".concat(c.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:r,transform:a,extra:o}=n,i=null,s=null;if(nn){let l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/l,s=f.height/l}return c.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,ze({content:e.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}},za=new RegExp('"',"ug"),Xe=[1105920,1112319],Ge={FontAwesome:{normal:"fas",400:"fas"},...xr,...vr,...Pr},Zt=Object.keys(Ge).reduce((t,e)=>(t[e.toLowerCase()]=Ge[e],t),{}),Ua=Object.keys(Zt).reduce((t,e)=>{let n=Zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function $a(t){let e=t.replace(za,""),n=Zr(e,0),r=n>=Xe[0]&&n<=Xe[1],a=e.length===2?e[0]===e[1]:!1;return{value:Ht(a?e[0]:e),isSecondary:r||a}}function Wa(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Zt[n]||{})[a]||Ua[n]}function qe(t,e){let n="".concat(Nr).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();let i=tt(t.children).filter(p=>p.getAttribute(Ut)===e)[0],s=U.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),f=l.match(Lr),u=s.getPropertyValue("font-weight"),g=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),r();if(f&&g!=="none"&&g!==""){let p=s.getPropertyValue("content"),v=Wa(l,u),{value:w,isSecondary:P}=$a(p),b=f[0].startsWith("FontAwesome"),k=ie(v,w),x=k;if(b){let A=ia(w);A.iconName&&A.prefix&&(k=A.iconName,v=A.prefix)}if(k&&!P&&(!i||i.getAttribute(ee)!==v||i.getAttribute(ne)!==x)){t.setAttribute(n,x),i&&t.removeChild(i);let A=Ca(),{extra:R}=A;R.attributes[Ut]=e,Kt(k,v).then(I=>{let Qn=le({...A,icons:{main:I,mask:se()},prefix:v,iconName:x,extra:R,watchable:!0}),_t=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_t,t.firstChild):t.appendChild(_t),_t.outerHTML=Qn.map(Jn=>ct(Jn)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ya(t){return Promise.all([qe(t,"::before"),qe(t,"::after")])}function Ha(t){return t.parentNode!==document.head&&!~Fr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ut)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Be(t){if(j)return new Promise((e,n)=>{let r=tt(t.querySelectorAll("*")).filter(Ha).map(Ya),a=fe.begin("searchPseudoElements");In(),Promise.all(r).then(()=>{a(),Jt(),e()}).catch(()=>{a(),Jt(),n()})})}var Va={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Be,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=h}=e;c.searchPseudoElements&&Be(n)}}},Ke=!1,Xa={mixout(){return{dom:{unwatch(){In(),Ke=!0}}}},hooks(){return{bootstrap(){Ye(Gt("mutationObserverCallbacks",{}))},noAuto(){Sa()},watch(t){let{observeMutationsRoot:e}=t;Ke?Jt():Ye(Gt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Qe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{let a=r.toLowerCase().split("-"),o=a[0],i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)},Ga={mixout(){return{parse:{transform:t=>Qe(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=Qe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:o}=e,i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},p={outer:i,inner:u,path:g};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}},Dt={x:0,y:0,width:"100%",height:"100%"};function Je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qa(t){return t.tag==="g"?t.children:[t]}var Ba={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),r=n?At(n.split(" ").map(a=>a.trim())):se();return r.prefix||(r.prefix=$()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=e,{width:l,icon:f}=a,{width:u,icon:g}=o,p=Xr({transform:s,containerWidth:u,iconWidth:l}),v={tag:"rect",attributes:{...Dt,fill:"white"}},w=f.children?{children:f.children.map(Je)}:{},P={tag:"g",attributes:{...p.inner},children:[Je({tag:f.tag,attributes:{...f.attributes,...p.path},...w})]},b={tag:"g",attributes:{...p.outer},children:[P]},k="mask-".concat(i||lt()),x="clip-".concat(i||lt()),A={tag:"mask",attributes:{...Dt,id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,b]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:qa(g)},A]};return n.push(R,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")"),...Dt}}),{children:n,attributes:r}}}},Ka={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});let o={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Qa={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Ja=[Br,Ma,La,ja,Da,Va,Xa,Ga,Ba,Ka,Qa];fa(Ja,{mixoutsTo:_});var So=_.noAuto,_o=_.config,Po=_.library,Io=_.dom,wt=_.parse,Co=_.findIconDefinition,No=_.toHtml,Nn=_.icon,To=_.layer,Fo=_.text,Ro=_.counter;var m=ut(zn()),pe=ut(Ft());function Un(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Un(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Un(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(t)}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eo(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function no(t,e){if(t==null)return{};var n=eo(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function me(t){return ro(t)||ao(t)||oo(t)||io()}function ro(t){if(Array.isArray(t))return de(t)}function ao(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function oo(t,e){if(t){if(typeof t=="string")return de(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(t,e)}}function de(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function io(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function so(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,l=t.spin,f=t.spinPulse,u=t.spinReverse,g=t.pulse,p=t.fixedWidth,v=t.inverse,w=t.border,P=t.listItem,b=t.flip,k=t.size,x=t.rotation,A=t.pull,R=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":g,"fa-fw":p,"fa-inverse":v,"fa-border":w,"fa-li":P,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},et(e,"fa-".concat(k),typeof k<"u"&&k!==null),et(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),et(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),et(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(R).map(function(I){return R[I]?I:null}).filter(function(I){return I})}function lo(t){return t=t-0,t===t}function Yn(t){return lo(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fo=["style"];function co(t){return t.charAt(0).toUpperCase()+t.slice(1)}function uo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Yn(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[co(a)]=o:e[a]=o,e},{})}function Hn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Hn(t,l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=uo(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[Yn(f)]=u}return l},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=no(n,fo);return a.attrs.style=F(F({},a.attrs.style),i),t.apply(void 0,[e.tag,F(F({},a.attrs),s)].concat(me(r)))}var Vn=!1;try{Vn=!0}catch{}function mo(){if(!Vn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $n(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(wt.icon)return wt.icon(t);if(t===null)return null;if(t&&Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ue(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?et({},t,e):{}}var Wn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Xn=pe.default.forwardRef(function(t,e){var n=F(F({},Wn),t),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,l=n.titleId,f=n.maskId,u=$n(r),g=ue("classes",[].concat(me(so(n)),me((i||"").split(" ")))),p=ue("transform",typeof n.transform=="string"?wt.transform(n.transform):n.transform),v=ue("mask",$n(a)),w=Nn(u,F(F(F(F({},g),p),v),{},{symbol:o,title:s,titleId:l,maskId:f}));if(!w)return mo("Could not find icon",u),null;var P=w.abstract,b={ref:e};return Object.keys(n).forEach(function(k){Wn.hasOwnProperty(k)||(b[k]=n[k])}),po(P[0],b)});Xn.displayName="FontAwesomeIcon";Xn.propTypes={beat:m.default.bool,border:m.default.bool,beatFade:m.default.bool,bounce:m.default.bool,className:m.default.string,fade:m.default.bool,flash:m.default.bool,mask:m.default.oneOfType([m.default.object,m.default.array,m.default.string]),maskId:m.default.string,fixedWidth:m.default.bool,inverse:m.default.bool,flip:m.default.oneOf([!0,!1,"horizontal","vertical","both"]),icon:m.default.oneOfType([m.default.object,m.default.array,m.default.string]),listItem:m.default.bool,pull:m.default.oneOf(["right","left"]),pulse:m.default.bool,rotation:m.default.oneOf([0,90,180,270]),shake:m.default.bool,size:m.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.default.bool,spinPulse:m.default.bool,spinReverse:m.default.bool,symbol:m.default.oneOfType([m.default.bool,m.default.string]),title:m.default.string,titleId:m.default.string,transform:m.default.oneOfType([m.default.string,m.default.object]),swapOpacity:m.default.bool};var po=Hn.bind(null,pe.default.createElement);var Kn=ut(ge(),1),ko=({className:t})=>(0,Kn.jsx)("div",{className:`animate-pulse transition-all bg-gray-200 ${t}`}),Vo=ko;export{Ft as a,zn as b,Xn as c,ge as d,Vo as e};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
