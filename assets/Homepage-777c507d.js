import{s as u,c as y,n as L,u as f,j as r,r as c,B as p,L as B}from"./index-f3cfa50e.js";import{F as l,B as m,u as b,g as k,n as S,T as i,L as w,a as C,I,b as v,c as R,d as D,C as E}from"./Layout-21c9ad48.js";const F=u.ul`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,P=y`
  from {
    opacity: 0.5;
    transform: translateX(12px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`,T=e=>e.$animationIndex===void 0?"":L`
    @media (prefers-reduced-motion: no-preference) {
      animation: ${P} 0.3s forwards;
      animation-delay: ${e.$animationIndex*100}ms;
      opacity: 0;
    }
  `,q=u.li`
  padding: ${e=>e.theme.spacing[4]} ${e=>e.theme.spacing[4]};
  border-radius: ${e=>e.theme.radius.sm};
  background: ${e=>e.theme.colors.text[100]};

  &:hover {
    cursor: ${e=>e.onClick?"pointer":"initial"};
    background: ${e=>e.onClick?e.theme.colors.text[200]:"initial"};
  }

  &:active {
    background: ${e=>e.onClick?e.theme.colors.text[300]:"initial"};
  }

  ${T}
`,H=u.input`
  border: 1px solid ${e=>e.theme.colors.text[300]};
  background: ${e=>e.theme.colors.text[50]};
  color: ${e=>e.theme.colors.text[900]};
  border-radius: ${e=>e.theme.radius.sm};
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[4]};
  width: 100%;
`,N=({label:e,placeholder:s,clearLabel:t,submitLabel:n})=>{const[,a]=f(),o=h=>{var x;h.preventDefault();const j=((x=new FormData(h.target).get("search"))==null?void 0:x.toString())||"";a({beer:j})},d=()=>{a({})};return r.jsx("form",{role:"search",onSubmit:o,children:r.jsxs(l,{$orientation:{initial:"column",md:"row"},$gap:2,children:[r.jsx(H,{type:"search",name:"search","aria-label":e,placeholder:s}),r.jsx(m,{type:"submit",children:n}),r.jsx(m,{type:"button",onClick:d,$variant:"secondary",children:t})]})})},g=1,Q=()=>{const e=b(["beers",g],()=>k(g));return{isLoading:e.isLoading,error:e.error,beers:e.data||[]}},X=({beer:e,animationIndex:s})=>{const t=c.useRef(null);return r.jsx(q,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.click()},$animationIndex:s,children:r.jsx(w,{to:`/beers/${e.id}`,ref:t,children:e.name})})},A=()=>{const[e]=f(),s=e.get("beer"),{beers:t,isLoading:n}=Q(),a=s?t.filter(o=>o.name.toLowerCase().includes(s.toLowerCase())):t;return c.useEffect(()=>{s!==null&&S(`${a.length} found for the research`)},[s,a.length]),r.jsxs(p,{as:"section","aria-labelledby":"our-selection",$pb:8,"aria-busy":n,"data-testid":"beer-list-section",children:[r.jsx(i,{id:"our-selection",as:"h2",$fs:"xl",$weight:"bold",children:"Our selection for you"}),r.jsxs(l,{$gap:2,children:[r.jsx(N,{label:"Beer name",placeholder:"e.g: Fake Lager",submitLabel:"Search",clearLabel:"Clear"}),r.jsxs(i,{$fs:"sm",children:["Result count: ",a.length]}),r.jsx(F,{children:a.map((o,d)=>r.jsx(X,{beer:o,animationIndex:d},o.id))})]})]})},O=({beer:e})=>{const s=c.useRef(null);return r.jsx(C,{imageSlot:r.jsx(I,{src:e.img,alt:e.name,height:100,placeholderWidth:50}),titleSlot:r.jsx(i,{as:"h2",$fs:"lg",children:e.name}),ctaSlot:r.jsxs(m,{as:B,to:`/beers/${e.id}`,ref:s,$variant:"secondary",children:["View details",r.jsxs("span",{className:"sr-only",children:[" of ",e.name]})]}),onClick:()=>{var t;return(t=s==null?void 0:s.current)==null?void 0:t.click()},children:r.jsx(i,{as:"time",dateTime:e.firstBrewed,children:e.firstBrewed})})},V=()=>{const e=c.useId(),s=b(["random-beer",e],v,{refetchInterval:1e4});return{isLoading:s.isLoading,error:s.error,beer:s.data}},$=()=>{const{beer:e,isLoading:s}=V();return s?r.jsx(R,{}):e?r.jsx(O,{beer:e}):null},W=()=>r.jsxs(p,{as:"section","aria-labelledby":"discover-beers",$pt:8,$pb:8,children:[r.jsx(i,{id:"discover-beers",as:"h2",$fs:"xl",$weight:"bold",children:"Discover our new beers"}),r.jsxs(l,{$orientation:{initial:"column",md:"row"},$gap:4,"data-testid":"random-beer-section",children:[r.jsx($,{}),r.jsx($,{})]})]}),z=({children:e,titleSlot:s})=>r.jsx(D,{children:r.jsxs(E,{as:"main",children:[s,r.jsx(l,{$gap:8,children:e})]})}),M=()=>r.jsxs(z,{titleSlot:r.jsx(i,{as:"h1",$fs:"xxl",$weight:"bold",$color:900,children:"The beers"}),children:[r.jsx(W,{}),r.jsx(A,{})]});export{M as default};
