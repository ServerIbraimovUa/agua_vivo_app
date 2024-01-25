import{j as e,r as f,O as p}from"./index-6RNMhQkc.js";import{u as a,h as s}from"./styled-components.browser.esm-0eaTkcn2.js";const x=()=>e.jsx("div",{children:"LOGO TEMP"}),b=()=>e.jsx("div",{children:"Sing in + Avatar"}),u=()=>e.jsx("div",{children:e.jsx("button",{children:"User name + avatar"})}),$=a.nav`
width: 100%;
height: 48px;
display: flex;
`,m=()=>e.jsxs($,{children:[e.jsx(x,{}),e.jsx("p",{children:"if isSignedIn then"}),e.jsx(u,{}),e.jsx("p",{children:"else"}),e.jsx(b,{})]}),y="#4fa94d",j={"aria-busy":!0,role:"progressbar"},g=a.div`
  display: ${i=>i.$visible?"flex":"none"};
`,v="http://www.w3.org/2000/svg",t=242.776657104492,k=1.6,w=s`
12.5% {
  stroke-dasharray: ${t*.14}px, ${t}px;
  stroke-dashoffset: -${t*.11}px;
}
43.75% {
  stroke-dasharray: ${t*.35}px, ${t}px;
  stroke-dashoffset: -${t*.35}px;
}
100% {
  stroke-dasharray: ${t*.01}px, ${t}px;
  stroke-dashoffset: -${t*.99}px;
}
`;a.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${w} ${k}s linear infinite;
`;const N=s`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${N} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
  stroke-width: ${i=>i.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const C=({height:i=80,width:n=80,radius:r=9,color:o=y,ariaLabel:d="three-dots-loading",wrapperStyle:c,wrapperClass:l,visible:h=!0})=>e.jsx(g,{style:c,$visible:h,className:l,"data-testid":"three-dots-loading","aria-label":d,...j,children:e.jsxs("svg",{width:n,height:i,viewBox:"0 0 120 30",xmlns:v,fill:o,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(r)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(r)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),L=s`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${L} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const M=()=>e.jsx(C,{height:"80",width:"80",radius:"11",color:"#407BFF",ariaLabel:"three-dots-loading",wrapperStyle:{position:"absolute",bottom:"47%",left:"47%"},visible:!0}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx("main",{children:e.jsx(f.Suspense,{fallback:e.jsx(M,{}),children:e.jsx(p,{})})})]});export{E as default};
