import{u as s,j as e,r as j}from"./index-gNnooVsu.js";import{M as F}from"./Modal-RBY7Aegc.js";import{u as S}from"./index.esm-XdVv-THf.js";const V=s.div`
    width: 544px;

`,q=s.form`
    display: flex;
    gap:24px;
    flex-direction: column;
`,C=s.div`
    display: flex;
    flex-direction: column;
    gap:12px;
`,y=s.div`
    display: flex;    
    gap:24px;
`,x=s.span`
        color: var(--primary-blue);
        font-size:18px;
`,N=s.p`
    color:#8F8F8F;
    font-size: 12px;
`,T=s.div`
    display: flex;
    gap:16px;
    flex-direction: column;
`,b=s.h3`
    font-size: 18px;
    font-weight:bold;
`,p=s.label`
    display: flex;
    flex-direction:column;
    gap:8px;
`,v=s.input`
    margin-right: 5px;
`,m=s.input`
    color: var(--primary-blue);
    height: 44px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
`,M=s.div`
display: flex;
flex-direction: column;
gap:16px;
`,k=s.button`
    width: 160px;
    border-radius: 10px;
    margin-left:auto;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--primary-blue);
`,D=({onClose:n})=>{const{register:r,handleSubmit:i,getValues:o,formState:{errors:l}}=S({defaultValues:{weight:"0",time:"0",gender:"female"},mode:"onChange"}),d=a=>{console.log(a),n()},c=Number(o("weight")),u=Number(o("time")),t=String(o("gender")),h=((a,f,w)=>String(w==="male"?(a*.04+f*.6).toFixed(1):(a*.03+f*.4).toFixed(1)))(c,u,t);return e.jsx(V,{children:e.jsxs(q,{onSubmit:i(d),children:[e.jsxs(C,{children:[e.jsxs(y,{children:[e.jsxs("p",{children:["For girl:",e.jsx(x,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man:",e.jsx(x,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(N,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),e.jsxs(T,{children:[e.jsx(b,{children:"Calculate your rate:"}),e.jsxs(y,{children:[e.jsxs("label",{children:[e.jsx(v,{...r("gender",{required:"Please select a gender"}),value:"female",type:"radio"}),"For woman"]}),e.jsxs("label",{children:[e.jsx(v,{...r("gender",{required:"Please select a gender"}),value:"male",type:"radio"}),"For man",l.gender&&e.jsx("span",{children:"This field is required"})]})]}),e.jsxs(p,{children:[e.jsx("span",{children:"Your weight in kilograms:"}),e.jsx(m,{...r("weight",{required:!0})}),l.weight&&e.jsx("span",{children:"This field is required"})]}),e.jsxs(p,{children:[e.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),e.jsx(m,{...r("time",{required:!0})}),l.time&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:["The required amount of water in liters per day:",e.jsxs(x,{children:["`",h," L`"]})]})]}),e.jsx(M,{children:e.jsxs(p,{children:[e.jsx(b,{children:"Write down how much water you will drink:"}),e.jsx(m,{...r("quantity",{required:!0})}),l.quantity&&e.jsx("span",{children:"This field is required"})]})}),e.jsx(k,{type:"submit",children:"Save"})]})})},I=()=>{const[n,r]=j.useState(!1),i=()=>{r(!n)};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"My daily norma"}),e.jsx("p",{children:"2L"}),n&&e.jsx(F,{setVisible:i,title:"My Daily Norma",children:e.jsx(D,{onClose:i})}),e.jsx("button",{type:"button",onClick:i,children:"Edit"})]})},P=({title:n,show:r})=>{const[i,o]=j.useState({count:0,inputValue:"0"}),l=t=>{i.count+t>=0&&o({inputValue:String(t),count:t})},d=t=>{const{value:g}=t.target;o(h=>({...h,inputValue:g}))},c=()=>{l(+i.inputValue)},u=t=>{t.key==="-"&&t.preventDefault()};return e.jsxs("div",{children:[r&&e.jsxs("div",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsx("h2",{children:n}),e.jsx("p",{children:"Amount of water:"}),e.jsxs("form",{children:[e.jsxs("div",{className:"counter",children:[e.jsx("button",{onClick:()=>l(i.count-50),type:"button",children:"-"}),e.jsxs("span",{children:[i.count,"ml"]}),e.jsx("button",{onClick:()=>l(i.count+50),type:"button",children:"+"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Recording time:"}),e.jsx("input",{type:"time"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter the value of water used:"}),e.jsx("input",{type:"number",min:0,max:5e3,step:50,value:i.inputValue,onChange:d,onBlur:c,onKeyPress:u})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[i.count,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})]})},z=()=>{const[n,r]=j.useState(!1);return e.jsxs("div",{children:[e.jsx("h1",{children:"Today"}),e.jsx("p",{children:"No notes yet"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]})]}),e.jsx("div",{children:e.jsx("button",{onClick:()=>r(!0),children:"Add water"})}),n&&e.jsx(F,{setVisible:r,title:"Add water",children:e.jsx(P,{title:"Choose a value",show:!1})})]})},L=()=>e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsx(I,{}),e.jsx(z,{})]})});export{L as default};
