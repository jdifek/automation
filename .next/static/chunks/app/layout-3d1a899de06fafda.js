(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6318:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,347,23)),Promise.resolve().then(n.bind(n,4722)),Promise.resolve().then(n.bind(n,6185))},2423:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(7401).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},4722:(e,t,n)=>{"use strict";n.d(t,{default:()=>ex});var r,a=n(5155),i=n(4403),s=n(7702),o=n(5586),u=n(9323),l=class extends u.Q{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,a=t.queryHash??(0,i.F$)(r,t),o=this.get(a);return o||(o=new s.X({cache:this,queryKey:r,queryHash:a,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){o.j.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i.MK)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,i.MK)(e,t)):t}notify(e){o.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){o.j.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){o.j.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},c=n(1049),h=class extends u.Q{constructor(e={}){super(),this.config=e,this.#t=new Map,this.#n=Date.now()}#t;#n;build(e,t,n){let r=new c.s({mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){let t=d(e),n=this.#t.get(t)??[];n.push(e),this.#t.set(t,n),this.notify({type:"added",mutation:e})}remove(e){let t=d(e);if(this.#t.has(t)){let n=this.#t.get(t)?.filter(t=>t!==e);n&&(0===n.length?this.#t.delete(t):this.#t.set(t,n))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#t.get(d(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#t.get(d(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){o.j.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#t.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i.nJ)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,i.nJ)(e,t))}notify(e){o.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return o.j.batch(()=>Promise.all(e.map(e=>e.continue().catch(i.lQ))))}};function d(e){return e.options.scope?.id??String(e.mutationId)}var f=n(4017),p=n(8248);function y(e){return{onFetch:(t,n)=>{let r=t.options,a=t.fetchOptions?.meta?.fetchMore?.direction,s=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u={pages:[],pageParams:[]},l=0,c=async()=>{let n=!1,c=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?n=!0:t.signal.addEventListener("abort",()=>{n=!0}),t.signal)})},h=(0,i.ZM)(t.options,t.fetchOptions),d=async(e,r,a)=>{if(n)return Promise.reject();if(null==r&&e.pages.length)return Promise.resolve(e);let s={queryKey:t.queryKey,pageParam:r,direction:a?"backward":"forward",meta:t.options.meta};c(s);let o=await h(s),{maxPages:u}=t.options,l=a?i.ZZ:i.y9;return{pages:l(e.pages,o,u),pageParams:l(e.pageParams,r,u)}};if(a&&s.length){let e="backward"===a,t={pages:s,pageParams:o},n=(e?function(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}:m)(r,t);u=await d(t,n,e)}else{let t=e??s.length;do{let e=0===l?o[0]??r.initialPageParam:m(r,u);if(l>0&&null==e)break;u=await d(u,e),l++}while(l<t)}return u};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=c}}}function m(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}var g=class{#r;#a;#i;#s;#o;#u;#l;#c;constructor(e={}){this.#r=e.queryCache||new l,this.#a=e.mutationCache||new h,this.#i=e.defaultOptions||{},this.#s=new Map,this.#o=new Map,this.#u=0}mount(){this.#u++,1===this.#u&&(this.#l=f.m.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#r.onFocus())}),this.#c=p.t.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#r.onOnline())}))}unmount(){this.#u--,0===this.#u&&(this.#l?.(),this.#l=void 0,this.#c?.(),this.#c=void 0)}isFetching(e){return this.#r.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#a.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#r.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#r.build(this,t),r=n.state.data;return void 0===r?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime((0,i.d2)(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#r.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),a=this.#r.get(r.queryHash),s=a?.state.data,o=(0,i.Zw)(t,s);if(void 0!==o)return this.#r.build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return o.j.batch(()=>this.#r.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#r.get(t.queryHash)?.state}removeQueries(e){let t=this.#r;o.j.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#r,r={type:"active",...e};return o.j.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(r,t)))}cancelQueries(e,t={}){let n={revert:!0,...t};return Promise.all(o.j.batch(()=>this.#r.findAll(e).map(e=>e.cancel(n)))).then(i.lQ).catch(i.lQ)}invalidateQueries(e,t={}){return o.j.batch(()=>{if(this.#r.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")return Promise.resolve();let n={...e,type:e?.refetchType??e?.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(o.j.batch(()=>this.#r.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(i.lQ)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(i.lQ)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let n=this.#r.build(this,t);return n.isStaleByTime((0,i.d2)(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(i.lQ).catch(i.lQ)}fetchInfiniteQuery(e){return e.behavior=y(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(i.lQ).catch(i.lQ)}ensureInfiniteQueryData(e){return e.behavior=y(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return p.t.isOnline()?this.#a.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#r}getMutationCache(){return this.#a}getDefaultOptions(){return this.#i}setDefaultOptions(e){this.#i=e}setQueryDefaults(e,t){this.#s.set((0,i.EN)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#s.values()],n={};return t.forEach(t=>{(0,i.Cp)(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#o.set((0,i.EN)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#o.values()],n={};return t.forEach(t=>{(0,i.Cp)(e,t.mutationKey)&&(n={...n,...t.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#i.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,i.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===i.hT&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#i.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#r.clear(),this.#a.clear()}},b=n(5906);function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x=n(2115);let w={data:""},q=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||w,O=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,C=/\/\*[^]*?\*\/|  +/g,Q=/\n+/g,A=(e,t)=>{let n="",r="",a="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+s+";":r+="f"==i[1]?A(s,i):i+"{"+A(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=A(s,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=A.p?A.p(i,s):i+":"+s+";")}return n+(t&&a?t+"{"+a+"}":a)+r},j={},P=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+P(e[n]);return t}return e},k=(e,t,n,r,a)=>{let i=P(e),s=j[i]||(j[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!j[s]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=O.exec(e.replace(C,""));)t[4]?r.shift():t[3]?(n=t[3].replace(Q," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(Q," ").trim();return r[0]})(e);j[s]=A(a?{["@keyframes "+s]:t}:t,n?"":"."+s)}let o=n&&j.g?j.g:null;return n&&(j.g=j[s]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(j[s],t,r,o),s},D=(e,t,n)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":A(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function M(e){let t=this||{},n=e.call?e(t.p):e;return k(n.unshift?n.raw?D(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,q(t.target),t.g,t.o,t.k)}M.bind({g:1});let E,F,N,I=M.bind({k:1});function S(e,t){let n=this||{};return function(){let r=arguments;function a(i,s){let o=Object.assign({},i),u=o.className||a.className;n.p=Object.assign({theme:F&&F()},o),n.o=/ *go\d+/.test(u),o.className=M.apply(n,r)+(u?" "+u:""),t&&(o.ref=s);let l=e;return e[0]&&(l=o.as||e,delete o.as),N&&l[0]&&N(o),E(l,o)}return t?t(a):a}}function H(){let e=v(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return H=function(){return e},e}function K(){let e=v(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return K=function(){return e},e}function _(){let e=v(["\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"]);return _=function(){return e},e}function z(){let e=v(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return z=function(){return e},e}function T(){let e=v(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return T=function(){return e},e}function R(){let e=v(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return R=function(){return e},e}function Z(){let e=v(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"]);return Z=function(){return e},e}function L(){let e=v(["\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return L=function(){return e},e}function V(){let e=v(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return V=function(){return e},e}function $(){let e=v(["\n  position: absolute;\n"]);return $=function(){return e},e}function B(){let e=v(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return B=function(){return e},e}function J(){let e=v(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return J=function(){return e},e}function X(){let e=v(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return X=function(){return e},e}function G(){let e=v(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return G=function(){return e},e}function U(){let e=v(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return U=function(){return e},e}function W(){let e=v(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return W=function(){return e},e}var Y=e=>"function"==typeof e,ee=(e,t)=>Y(e)?e(t):e,et=(()=>{let e=0;return()=>(++e).toString()})(),en=((()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),new Map),er=e=>{if(en.has(e))return;let t=setTimeout(()=>{en.delete(e),eu({type:4,toastId:e})},1e3);en.set(e,t)},ea=e=>{let t=en.get(e);t&&clearTimeout(t)},ei=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&ea(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?ei(e,{type:1,toast:n}):ei(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?er(r):e.toasts.forEach(e=>{er(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},es=[],eo={toasts:[],pausedAt:void 0},eu=e=>{eo=ei(eo,e),es.forEach(e=>{e(eo)})},el={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ec=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||et()}},eh=e=>(t,n)=>{let r=ec(t,e,n);return eu({type:2,toast:r}),r.id},ed=(e,t)=>eh("blank")(e,t);ed.error=eh("error"),ed.success=eh("success"),ed.loading=eh("loading"),ed.custom=eh("custom"),ed.dismiss=e=>{eu({type:3,toastId:e})},ed.remove=e=>eu({type:4,toastId:e}),ed.promise=(e,t,n)=>{let r=ed.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(ed.success(ee(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e)).catch(e=>{ed.error(ee(t.error,e),{id:r,...n,...null==n?void 0:n.error})}),e};var ef=I(H()),ep=I(K()),ey=I(_()),em=(S("div")(z(),e=>e.primary||"#ff4b4b",ef,ep,e=>e.secondary||"#fff",ey),I(T())),eg=(S("div")(R(),e=>e.secondary||"#e0e0e0",e=>e.primary||"#616161",em),I(Z())),eb=I(L()),ev=(S("div")(V(),e=>e.primary||"#61d345",eg,eb,e=>e.secondary||"#fff"),S("div")($()),S("div")(B()),I(J()));S("div")(X(),ev),S("div")(G()),S("div")(U()),r=x.createElement,A.p=void 0,E=r,F=void 0,N=void 0,M(W());let ex=e=>{let{children:t}=e,n=new g({defaultOptions:{mutations:{onError:e=>ed.error(e.message)}}});return(0,a.jsx)(b.Ht,{client:n,children:t})}},6185:(e,t,n)=>{"use strict";n.d(t,{default:()=>f});var r=n(5155),a=n(7401);let i=(0,a.A)("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);var s=n(2423);let o=(0,a.A)("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),u=(0,a.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),l=(0,a.A)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var c=n(8173),h=n.n(c),d=n(6658);let f=()=>{let e=(0,d.usePathname)(),t=[{icon:i,label:"Dashboard",path:"/dashboard"},{icon:s.A,label:"Schedule",path:"/schedule"},{icon:o,label:"Analytics",path:"/analytics"},{icon:u,label:"Auto-responses",path:"/responses"},{icon:l,label:"Settings",path:"/settings"}];return(0,r.jsxs)("div",{className:"w-64 bg-white h-screen border-r border-gray-200 fixed left-0 top-0",children:[(0,r.jsx)("div",{className:"p-6",children:(0,r.jsx)("h1",{className:"text-2xl font-bold text-indigo-600",children:"SocialHub"})}),(0,r.jsx)("nav",{className:"mt-6",children:t.map(t=>{let n=t.icon,a=e===t.path;return(0,r.jsxs)(h(),{href:t.path,className:"flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 ".concat(a?"bg-indigo-50 text-indigo-600":""),children:[(0,r.jsx)(n,{className:"w-5 h-5 mr-3"}),(0,r.jsx)("span",{className:"font-medium",children:t.label})]},t.path)})})]})}},347:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[690,173,551,441,517,358],()=>t(6318)),_N_E=e.O()}]);