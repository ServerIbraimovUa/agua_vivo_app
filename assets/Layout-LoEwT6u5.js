import{u,s as m,j as e,N as p,a as w,l as v,b as a,r as l,c as y,h as x,O as $}from"./index-Zgs--3Vk.js";import{u as C}from"./index.esm-SBkG12p8.js";import{M as g}from"./Modal-JCyOXel0.js";const f="/agua_vivo_app/assets/Logo---HSfsNU.svg",k=()=>{const t=u(m);return e.jsx("div",{children:t?e.jsx(e.Fragment,{children:e.jsx(p,{to:"/home",children:e.jsx("img",{src:f,alt:"logo",width:"102px",height:"48px"})})}):e.jsx(e.Fragment,{children:e.jsx(p,{to:"/welcome",children:e.jsx("img",{src:f,alt:"logo",width:"102px",height:"48px"})})})})},L="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11201_416)'%3e%3ccircle%20cx='14'%20cy='14'%20r='13.5'%20stroke='%232F2F2F'/%3e%3cpath%20d='M17.5005%208.2564C17.5005%209.20846%2017.1317%2010.1215%2016.4752%2010.7947C15.8187%2011.4679%2014.9284%2011.8461%2014%2011.8461C13.0716%2011.8461%2012.1813%2011.4679%2011.5248%2010.7947C10.8683%2010.1215%2010.4995%209.20846%2010.4995%208.2564C10.4995%207.30434%2010.8683%206.39127%2011.5248%205.71807C12.1813%205.04486%2013.0716%204.66666%2014%204.66666C14.9284%204.66666%2015.8187%205.04486%2016.4752%205.71807C17.1317%206.39127%2017.5005%207.30434%2017.5005%208.2564ZM7%2021.7711C7.03%2019.8875%207.78069%2018.0915%209.09018%2016.7703C10.3997%2015.4492%2012.163%2014.7088%2014%2014.7088C15.837%2014.7088%2017.6003%2015.4492%2018.9098%2016.7703C20.2193%2018.0915%2020.97%2019.8875%2021%2021.7711C18.8039%2022.8037%2016.4159%2023.3367%2014%2023.3333C11.5021%2023.3333%209.13108%2022.7743%207%2021.7711Z'%20stroke='%232F2F2F'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11201_416'%3e%3crect%20width='28'%20height='28'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",N=()=>e.jsx("div",{children:e.jsxs(p,{to:"/signin",children:["Sign in ",e.jsx("img",{src:L,alt:"default_logo",width:"28",height:"28"})]})}),S="data:image/svg+xml,%3csvg%20width='12'%20height='7'%20viewBox='0%200%2012%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.35331%206.85332C6.25956%206.94696%206.13248%206.99955%205.99998%206.99955C5.86748%206.99955%205.7404%206.94696%205.64665%206.85332L0.646646%201.85332C0.558326%201.75854%200.510244%201.63318%200.512529%201.50364C0.514815%201.37411%200.567289%201.25052%200.658898%201.15891C0.750507%201.0673%200.874097%201.01483%201.00363%201.01254C1.13316%201.01025%201.25853%201.05834%201.35331%201.14666L5.99998%205.79332L10.6466%201.14666C10.6924%201.09753%2010.7476%201.05813%2010.809%201.0308C10.8703%201.00347%2010.9365%200.988781%2011.0036%200.987596C11.0708%200.986412%2011.1375%200.998761%2011.1997%201.02391C11.262%201.04906%2011.3185%201.08649%2011.366%201.13396C11.4135%201.18144%2011.4509%201.238%2011.4761%201.30026C11.5012%201.36252%2011.5136%201.4292%2011.5124%201.49634C11.5112%201.56347%2011.4965%201.62968%2011.4692%201.69102C11.4418%201.75235%2011.4024%201.80755%2011.3533%201.85332L6.35331%206.85332Z'%20fill='%23407BFF'/%3e%3c/svg%3e",M=()=>{const{register:t,handleSubmit:i,reset:n,formState:{errors:s}}=C(),d=o=>{console.log(o),n()};return e.jsx("div",{children:e.jsxs("form",{onSubmit:i(d),children:[e.jsxs("div",{children:[e.jsx("span",{children:"Your gender identity"}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{...t("gender",{required:!0}),value:"woman",type:"radio"}),e.jsx("span",{children:"Woman"})]}),e.jsxs("label",{children:[e.jsx("input",{...t("gender",{required:!0}),value:"man",type:"radio"}),e.jsx("span",{children:"Man"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Your name"}),e.jsx("input",{...t("name",{required:!0}),type:"text",placeholder:"name"}),s.name&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"E-mail"}),e.jsx("input",{...t("email",{required:!0}),type:"email",placeholder:"email"}),s.email&&e.jsx("span",{children:"This field is required"})]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Password"}),e.jsxs("label",{children:[e.jsx("span",{children:"Outdated password:"}),e.jsx("input",{...t("outdatedPassword",{required:!0,minLength:8,maxLength:64}),type:"password",placeholder:"Password"}),s.outdatedPassword&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"New Password:"}),e.jsx("input",{...t("newPassword",{required:!0,minLength:8,maxLength:64}),type:"password",placeholder:"Password"}),s.newPassword&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Repeat new password:"}),e.jsx("input",{...t("repeatNewPassword",{required:!0,minLength:8,maxLength:64}),type:"password",placeholder:"Password"}),s.repeatNewPassword&&e.jsx("span",{children:"This field is required"})]})]}),e.jsx("button",{type:"submit",children:"Save"})]})})},F=({setVisible:t})=>{const i=w();return e.jsxs("div",{children:[e.jsx("h2",{children:"Log out"}),e.jsx("p",{children:"Do you really want to leave?"}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>i(v()),children:"Log out"})]})]})},P=a.div`
  position: relative;
  min-width: 122px;
  height: 22px;
  .open-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-size: 18px;
    cursor: pointer;

    border: none;
    background-color: transparent;

    .user-photo {
      width: 28px;
      height: 28px;
    }
  }

  .btn-down {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    width: 118px;
    height: 88px;
    display: none;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

    &.open {
      display: flex;
    }
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;function q(t,i){l.useEffect(()=>{const n=s=>{t.current&&!t.current.contains(s.target)&&i()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[i,t])}const _=()=>{const[t,i]=l.useState(!1),[n,s]=l.useState(!1),[d,o]=l.useState(!1),c=l.useRef(null),{email:h,avatar:j}=u(y);q(c,()=>{t&&setTimeout(()=>i(!1),100)});const b=()=>{i(!t)};return e.jsxs(P,{children:[e.jsxs("button",{className:"open-btn",onClick:b,children:[h,e.jsx("img",{className:"user-photo",src:`${j}`,alt:"default_logo",width:"28",height:"28"}),e.jsx("img",{className:"arrow",src:S,alt:"default_logo",width:"11",height:"6"})]}),e.jsxs("div",{className:`btn-down ${t?"open":""}`,ref:c,children:[e.jsx("button",{onClick:()=>s(!0),children:"Settings"}),n&&e.jsx(g,{setVisible:s,title:"Setting",children:e.jsx(M,{})}),e.jsx("br",{}),e.jsx("button",{onClick:()=>o(!0),children:"Log out"}),d&&e.jsx(g,{setVisible:o,title:"Log out",children:e.jsx(F,{setVisible:o})})]})]})},E=()=>e.jsx("div",{children:e.jsx(_,{})}),T=a.nav`
width: 100%;
height: 48px;
display: flex;
`,A=()=>{const t=u(m);return e.jsxs(T,{children:[e.jsx(k,{}),t?e.jsx(E,{}):e.jsx(N,{})]})},U="#4fa94d",z={"aria-busy":!0,role:"progressbar"},B=a.div`
  display: ${t=>t.$visible?"flex":"none"};
`,O="http://www.w3.org/2000/svg",r=242.776657104492,R=1.6,V=x`
12.5% {
  stroke-dasharray: ${r*.14}px, ${r}px;
  stroke-dashoffset: -${r*.11}px;
}
43.75% {
  stroke-dasharray: ${r*.35}px, ${r}px;
  stroke-dashoffset: -${r*.35}px;
}
100% {
  stroke-dasharray: ${r*.01}px, ${r}px;
  stroke-dashoffset: -${r*.99}px;
}
`;a.path`
  stroke-dasharray: ${r*.01}px, ${r};
  stroke-dashoffset: 0;
  animation: ${V} ${R}s linear infinite;
`;const Z=x`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${Z} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
  stroke-width: ${t=>t.width}px;
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
`;const D=({height:t=80,width:i=80,radius:n=9,color:s=U,ariaLabel:d="three-dots-loading",wrapperStyle:o,wrapperClass:c,visible:h=!0})=>e.jsx(B,{style:o,$visible:h,className:c,"data-testid":"three-dots-loading","aria-label":d,...z,children:e.jsxs("svg",{width:i,height:t,viewBox:"0 0 120 30",xmlns:O,fill:s,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(n)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:n,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(n)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),H=x`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${H} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const I=()=>e.jsx(D,{height:"80",width:"80",radius:"11",color:"#407BFF",ariaLabel:"three-dots-loading",wrapperStyle:{position:"absolute",bottom:"47%",left:"47%"},visible:!0}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("main",{children:e.jsx(l.Suspense,{fallback:e.jsx(I,{}),children:e.jsx($,{})})})]});export{J as default};
