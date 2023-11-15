import{_ as V,b as _,d as G,i as B,e as A,t as H,f as J,g as M,h as q,k as X,l as Y,m as Q,S as Z,R as x,o as ee,p as te,s as v,r as E,j as c,L as re,c as se,q as ne,T as ie,B as ae}from"./index-8595983c.js";var oe=function(e){V(i,e);function i(a,r){var t;return t=e.call(this)||this,t.client=a,t.options=r,t.trackedProps=[],t.selectError=null,t.bindMethods(),t.setOptions(r),t}var s=i.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),N(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return I(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return I(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(r,t){var o=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(r),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var l=this.hasListeners();l&&D(this.currentQuery,n,this.options,o)&&this.executeFetch(),this.updateResult(t),l&&(this.currentQuery!==n||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==n||this.options.enabled!==o.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},s.getOptimisticResult=function(r){var t=this.client.defaultQueryObserverOptions(r),o=this.client.getQueryCache().build(this.client,t);return this.createResult(o,t)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(r,t){var o=this,n={},l=function(d){o.trackedProps.includes(d)||o.trackedProps.push(d)};return Object.keys(r).forEach(function(u){Object.defineProperty(n,u,{configurable:!1,enumerable:!0,get:function(){return l(u),r[u]}})}),(t.useErrorBoundary||t.suspense)&&l("error"),n},s.getNextResult=function(r){var t=this;return new Promise(function(o,n){var l=t.subscribe(function(u){u.isFetching||(l(),u.isError&&(r!=null&&r.throwOnError)?n(u.error):o(u))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(r){return this.fetch(_({},r,{meta:{refetchPage:r==null?void 0:r.refetchPage}}))},s.fetchOptimistic=function(r){var t=this,o=this.client.defaultQueryObserverOptions(r),n=this.client.getQueryCache().build(this.client,o);return n.fetch().then(function(){return t.createResult(n,o)})},s.fetch=function(r){var t=this;return this.executeFetch(r).then(function(){return t.updateResult(),t.currentResult})},s.executeFetch=function(r){this.updateQuery();var t=this.currentQuery.fetch(this.options,r);return r!=null&&r.throwOnError||(t=t.catch(G)),t},s.updateStaleTimeout=function(){var r=this;if(this.clearStaleTimeout(),!(B||this.currentResult.isStale||!A(this.options.staleTime))){var t=H(this.currentResult.dataUpdatedAt,this.options.staleTime),o=t+1;this.staleTimeoutId=setTimeout(function(){r.currentResult.isStale||r.updateResult()},o)}},s.computeRefetchInterval=function(){var r;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(r=this.options.refetchInterval)!=null?r:!1},s.updateRefetchInterval=function(r){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=r,!(B||this.options.enabled===!1||!A(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(t.options.refetchIntervalInBackground||J.isFocused())&&t.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(r,t){var o=this.currentQuery,n=this.options,l=this.currentResult,u=this.currentResultState,d=this.currentResultOptions,p=r!==o,y=p?r.state:this.currentQueryInitialState,b=p?this.currentResult:this.previousQueryResult,h=r.state,R=h.dataUpdatedAt,j=h.error,F=h.errorUpdatedAt,C=h.isFetching,f=h.status,P=!1,U=!1,m;if(t.optimisticResults){var L=this.hasListeners(),W=!L&&N(r,t),K=L&&D(r,o,t,n);(W||K)&&(C=!0,R||(f="loading"))}if(t.keepPreviousData&&!h.dataUpdateCount&&(b!=null&&b.isSuccess)&&f!=="error")m=b.data,R=b.dataUpdatedAt,f=b.status,P=!0;else if(t.select&&typeof h.data<"u")if(l&&h.data===(u==null?void 0:u.data)&&t.select===this.selectFn)m=this.selectResult;else try{this.selectFn=t.select,m=t.select(h.data),t.structuralSharing!==!1&&(m=M(l==null?void 0:l.data,m)),this.selectResult=m,this.selectError=null}catch($){q().error($),this.selectError=$}else m=h.data;if(typeof t.placeholderData<"u"&&typeof m>"u"&&(f==="loading"||f==="idle")){var g;if(l!=null&&l.isPlaceholderData&&t.placeholderData===(d==null?void 0:d.placeholderData))g=l.data;else if(g=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof g<"u")try{g=t.select(g),t.structuralSharing!==!1&&(g=M(l==null?void 0:l.data,g)),this.selectError=null}catch($){q().error($),this.selectError=$}typeof g<"u"&&(f="success",m=g,U=!0)}this.selectError&&(j=this.selectError,m=this.selectResult,F=Date.now(),f="error");var z={status:f,isLoading:f==="loading",isSuccess:f==="success",isError:f==="error",isIdle:f==="idle",data:m,dataUpdatedAt:R,error:j,errorUpdatedAt:F,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>y.dataUpdateCount||h.errorUpdateCount>y.errorUpdateCount,isFetching:C,isRefetching:C&&f!=="loading",isLoadingError:f==="error"&&h.dataUpdatedAt===0,isPlaceholderData:U,isPreviousData:P,isRefetchError:f==="error"&&h.dataUpdatedAt!==0,isStale:w(r,t),refetch:this.refetch,remove:this.remove};return z},s.shouldNotifyListeners=function(r,t){if(!t)return!0;var o=this.options,n=o.notifyOnChangeProps,l=o.notifyOnChangePropsExclusions;if(!n&&!l||n==="tracked"&&!this.trackedProps.length)return!0;var u=n==="tracked"?this.trackedProps:n;return Object.keys(r).some(function(d){var p=d,y=r[p]!==t[p],b=u==null?void 0:u.some(function(R){return R===d}),h=l==null?void 0:l.some(function(R){return R===d});return y&&!h&&(!u||b)})},s.updateResult=function(r){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!X(this.currentResult,t)){var o={cache:!0};(r==null?void 0:r.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,t)&&(o.listeners=!0),this.notify(_({},o,r))}},s.updateQuery=function(){var r=this.client.getQueryCache().build(this.client,this.options);if(r!==this.currentQuery){var t=this.currentQuery;this.currentQuery=r,this.currentQueryInitialState=r.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),r.addObserver(this))}},s.onQueryUpdate=function(r){var t={};r.type==="success"?t.onSuccess=!0:r.type==="error"&&!Y(r.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},s.notify=function(r){var t=this;Q.batch(function(){r.onSuccess?(t.options.onSuccess==null||t.options.onSuccess(t.currentResult.data),t.options.onSettled==null||t.options.onSettled(t.currentResult.data,null)):r.onError&&(t.options.onError==null||t.options.onError(t.currentResult.error),t.options.onSettled==null||t.options.onSettled(void 0,t.currentResult.error)),r.listeners&&t.listeners.forEach(function(o){o(t.currentResult)}),r.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})})},i}(Z);function ue(e,i){return i.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&i.retryOnMount===!1)}function N(e,i){return ue(e,i)||e.state.dataUpdatedAt>0&&I(e,i,i.refetchOnMount)}function I(e,i,s){if(i.enabled!==!1){var a=typeof s=="function"?s(e):s;return a==="always"||a!==!1&&w(e,i)}return!1}function D(e,i,s,a){return s.enabled!==!1&&(e!==i||a.enabled===!1)&&(!s.suspense||e.state.status!=="error")&&w(e,s)}function w(e,i){return e.isStaleByTime(i.staleTime)}function ce(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var le=x.createContext(ce()),he=function(){return x.useContext(le)};function de(e,i,s){return typeof i=="function"?i.apply(void 0,s):typeof i=="boolean"?i:!!e}function fe(e,i){var s=x.useRef(!1),a=x.useState(0),r=a[1],t=ee(),o=he(),n=t.defaultQueryObserverOptions(e);n.optimisticResults=!0,n.onError&&(n.onError=Q.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=Q.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=Q.batchCalls(n.onSettled)),n.suspense&&(typeof n.staleTime!="number"&&(n.staleTime=1e3),n.cacheTime===0&&(n.cacheTime=1)),(n.suspense||n.useErrorBoundary)&&(o.isReset()||(n.retryOnMount=!1));var l=x.useState(function(){return new i(t,n)}),u=l[0],d=u.getOptimisticResult(n);if(x.useEffect(function(){s.current=!0,o.clearReset();var p=u.subscribe(Q.batchCalls(function(){s.current&&r(function(y){return y+1})}));return u.updateResult(),function(){s.current=!1,p()}},[o,u]),x.useEffect(function(){u.setOptions(n,{listeners:!1})},[n,u]),n.suspense&&d.isLoading)throw u.fetchOptimistic(n).then(function(p){var y=p.data;n.onSuccess==null||n.onSuccess(y),n.onSettled==null||n.onSettled(y,null)}).catch(function(p){o.clearReset(),n.onError==null||n.onError(p),n.onSettled==null||n.onSettled(void 0,p)});if(d.isError&&!o.isReset()&&!d.isFetching&&de(n.suspense,n.useErrorBoundary,[d.error,u.getCurrentQuery()]))throw d.error;return n.notifyOnChangeProps==="tracked"&&(d=u.trackResult(d,n)),d}function ke(e,i,s){var a=te(e,i,s);return fe(a,oe)}const pe=v.button`
  font-family: ${e=>e.theme.fontFamily};
  padding: ${e=>e.theme.spacing[2]};
  border-radius: ${e=>e.theme.radius.sm};

  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  ${e=>e.$variant==="secondary"?`
        border: 1px solid ${e.theme.colors.secondary};
        color: ${e.theme.colors.secondary};
        background: transparent;
      `:`
        border: none;
        background: ${e.theme.colors.main};
        color: ${e.theme.colors.text[50]};
      `}
`,O=v.div`
  display: flex;
  flex-direction: ${e=>{var i;return((i=e.$orientation)==null?void 0:i.initial)||"column"}};
  gap: ${e=>e.theme.spacing[e.$gap||0]};
  height: 100%;
  width: 100%;

  ${e=>{var i;return(i=e.$orientation)!=null&&i.md?`
        @media (min-width: ${e.theme.breakpoints.md}px) {
          flex-direction: ${e.$orientation.md};
        }`:""}}
`,je=v.p`
  color: ${e=>e.theme.colors.text[e.$color||700]};
  line-height: 1.6;
  font-size: ${e=>e.theme.fs[e.$fs||"md"]};
  font-weight: ${e=>e.$weight?e.theme.weight[e.$weight]:"initial"};
  font-family: ${e=>e.theme.fontFamily};
`,Fe=e=>{const i=document.getElementById("status");i&&(i.innerText=e)},ve=v.a`
  text-decoration: none;
  color: ${e=>e.theme.colors.text[700]};
  font-family: ${e=>e.theme.fontFamily};
`,me=E.forwardRef((e,i)=>c.jsx(ve,{as:re,ref:i,...e}));me.displayName="Link";const T="https://api.punkapi.com/v2",ye=15,k=e=>({id:e.id,name:e.name,tagline:e.tagline,firstBrewed:e.first_brewed,description:e.description,img:e.image_url}),Pe=async e=>{const i=`${T}/beers?page=${e}&per_page=${ye}`;return(await(await fetch(i)).json()).map(k)},Ue=async e=>{const i=`${T}/beers/${e}`,s=await fetch(i);if(!s.ok)throw new Error("Entity not found");return(await s.json()).map(k)[0]},Le=async()=>{const e=`${T}/beers/random`;return(await(await fetch(e)).json()).map(k)[0]},ge=se`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`,S=v.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  background: ${e=>e.theme.colors.text[200]};
  border-radius: ${e=>e.theme.radius.md};
  animation: ${ge} 0.5s linear infinite alternate;
`,be=v.div`
  position: relative;
`,Re=v.div`
  position: absolute;
  inset: 0;
`,_e=({placeholderWidth:e,src:i,...s})=>{const[a,r]=E.useState();return E.useEffect(()=>{if(!i)return;const t=new Image;t.src=i;const o=()=>r(i);return t.addEventListener("load",o),()=>{t.removeEventListener("load",o)}},[i]),a?c.jsxs(be,{children:[!a&&c.jsx(Re,{children:c.jsx(S,{width:e,height:s.height})}),c.jsx("img",{...s,src:a})]}):c.jsx(S,{width:e,height:s.height})},xe=v.div`
  border: 2px solid ${e=>e.theme.colors.text[200]};
  border-radius: ${e=>e.theme.radius.md};
  padding: ${e=>e.theme.spacing[4]};
  width: 100%;
  height: 100%;

  &:hover {
    cursor: ${e=>e.onClick?"pointer":"initial"};
    background: ${e=>e.onClick?e.theme.colors.text[100]:"initial"};
  }

  &:active {
    background: ${e=>e.onClick?e.theme.colors.text[200]:"initial"};
  }
`,Se=v.div`
  height: 200px;
`,$e=v.div`
  text-align: center;
  width: 50px;
  flex-shrink: 0;
`,Qe=v.div`
  margin-top: auto;
`,Ee=({imageSlot:e,titleSlot:i,children:s,ctaSlot:a,onClick:r,...t})=>c.jsx(xe,{onClick:r,children:c.jsx(Se,{...t,children:c.jsxs(O,{children:[c.jsxs(O,{$orientation:{initial:"row"},$gap:4,children:[c.jsx($e,{children:e}),c.jsxs(O,{$gap:1,children:[i,s]})]}),a&&c.jsx(Qe,{children:a})]})})}),Be=()=>c.jsx(Ee,{"aria-busy":!0,imageSlot:c.jsx(S,{height:100,width:50}),titleSlot:c.jsx(S,{height:50,width:100}),ctaSlot:c.jsx(S,{height:32,width:100}),"data-testid":"beer-card-placeholder",children:c.jsx(S,{height:20,width:160})}),Ce=v.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${e=>e.theme.spacing[2]};
`,Oe=ne`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}

* {
	box-sizing: border-box;
}

html {
	height: 100%;
}
  
body {
	height: 100%;
	display: flex;
}

#root {
	flex: 1;
}
`,Ie=()=>E.useContext(ie),we=()=>{const e=Ie();return c.jsx(pe,{onClick:e,$variant:"secondary",children:"Toggle theme"})},Ae=({children:e})=>c.jsxs(c.Fragment,{children:[c.jsx(Ce,{as:"nav","aria-label":"Main navigation",children:c.jsx(ae,{$pt:2,$pb:2,children:c.jsx(we,{})})}),e,c.jsx(Oe,{})]});export{pe as B,Ce as C,O as F,_e as I,me as L,je as T,Ee as a,Le as b,Be as c,Ae as d,Ue as e,Pe as g,Fe as n,ke as u};
