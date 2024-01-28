import{b as i,j as e,r as F,d as m,a as q,u as T,e as k,f as D,g as M}from"./index-JRD-Rx__.js";import{M as w,I as f}from"./Modal-GgeYU9GV.js";import{u as W}from"./index.esm-zgKHS2Co.js";const L=i.div`
    width: 544px;

`,P=i.form`
    display: flex;
    gap:24px;
    flex-direction: column;
`,A=i.div`
    display: flex;
    flex-direction: column;
    gap:12px;
`,S=i.div`
    display: flex;    
    gap:24px;
`,b=i.span`
        color: var(--primary-blue);
        font-size:18px;
`,I=i.p`
    color:#8F8F8F;
    font-size: 12px;
`,E=i.div`
    display: flex;
    gap:16px;
    flex-direction: column;
`,V=i.h3`
    font-size: 18px;
    font-weight:bold;
`,y=i.label`
    display: flex;
    flex-direction:column;
    gap:8px;
`,N=i.input`
    margin-right: 5px;
`,v=i.input`
    color: var(--primary-blue);
    height: 44px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
`,z=i.div`
display: flex;
flex-direction: column;
gap:16px;
`,B=i.button`
    width: 160px;
    border-radius: 10px;
    margin-left:auto;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--primary-blue);
`,H=({onClose:t})=>{const{register:n,handleSubmit:l,getValues:a,formState:{errors:r}}=W({defaultValues:{weight:"0",time:"0",gender:"female"},mode:"onChange"}),h=s=>{console.log(s),t()},c=Number(a("weight")),x=Number(a("time")),o=String(a("gender")),u=((s,p,g)=>String(g==="male"?(s*.04+p*.6).toFixed(1):(s*.03+p*.4).toFixed(1)))(c,x,o);return e.jsx(L,{children:e.jsxs(P,{onSubmit:l(h),children:[e.jsxs(A,{children:[e.jsxs(S,{children:[e.jsxs("p",{children:["For girl:",e.jsx(b,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man:",e.jsx(b,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(I,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),e.jsxs(E,{children:[e.jsx(V,{children:"Calculate your rate:"}),e.jsxs(S,{children:[e.jsxs("label",{children:[e.jsx(N,{...n("gender",{required:"Please select a gender"}),value:"female",type:"radio"}),"For woman"]}),e.jsxs("label",{children:[e.jsx(N,{...n("gender",{required:"Please select a gender"}),value:"male",type:"radio"}),"For man",r.gender&&e.jsx("span",{children:"This field is required"})]})]}),e.jsxs(y,{children:[e.jsx("span",{children:"Your weight in kilograms:"}),e.jsx(v,{...n("weight",{required:!0})}),r.weight&&e.jsx("span",{children:"This field is required"})]}),e.jsxs(y,{children:[e.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),e.jsx(v,{...n("time",{required:!0})}),r.time&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:["The required amount of water in liters per day:",e.jsxs(b,{children:["`",u," L`"]})]})]}),e.jsx(z,{children:e.jsxs(y,{children:[e.jsx(V,{children:"Write down how much water you will drink:"}),e.jsx(v,{...n("quantity",{required:!0})}),r.quantity&&e.jsx("span",{children:"This field is required"})]})}),e.jsx(B,{type:"submit",children:"Save"})]})})},R=()=>{const[t,n]=F.useState(!1),l=()=>{n(!t)};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"My daily norma"}),e.jsx("p",{children:"2L"}),t&&e.jsx(w,{setVisible:l,title:"My Daily Norma",children:e.jsx(H,{onClose:l})}),e.jsx("button",{type:"button",onClick:l,children:"Edit"})]})},C=({title:t,show:n,handleAddWater:l,closeModal:a})=>{const[r,h]=F.useState({count:0,inputValue:"0"}),c=s=>{r.count+s>=0&&h({inputValue:String(s),count:s})},x=s=>{const{value:p}=s.target;h(g=>({...g,inputValue:p}))},o=()=>{c(+r.inputValue)},d=s=>{s.key==="-"&&s.preventDefault()},u=s=>{s.preventDefault(),l&&l(s),a()};return e.jsxs("div",{children:[n&&e.jsxs("div",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsx("h2",{children:t}),e.jsx("p",{children:"Amount of water:"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"counter",children:[e.jsx("button",{onClick:()=>c(r.count-50),type:"button",children:"-"}),e.jsxs("span",{children:[r.count,"ml"]}),e.jsx("button",{onClick:()=>c(r.count+50),type:"button",children:"+"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Recording time:"}),e.jsx("input",{type:"time",name:"waterVolume"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter the value of water used:"}),e.jsx("input",{type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:r.inputValue,onChange:x,onBlur:o,onKeyPress:d})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[r.count,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})]})},j=t=>t.water,K=m(j,t=>t.waterList);m(j,t=>t);m(j,t=>t.monthlyNorma);m(j,t=>t.isLoading);m(j,t=>t.error);const U=()=>{const[t,n]=F.useState(!1),l=q(),a=T(K),r=o=>{o.preventDefault();const d=o.currentTarget.elements;console.dir(d);const u=d.waterVolume.value,s=d.date.value;l(k({waterVolume:u,date:s}))},h=o=>{l(D(o))},c=o=>{l(M(o))},x=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx("h1",{children:"Today"}),a?a.map(({waterVolume:o,date:d,waterId:u,waterData:s})=>e.jsxs("li",{children:[e.jsx("span",{children:e.jsx(f,{className:"water-glass-icon",id:"icon-water"})}),e.jsx("p",{children:o}),e.jsx("p",{children:d}),e.jsxs("button",{type:"button",className:"edit-btn",onClick:()=>c(s),children:[e.jsx(w,{setVisible:n,title:"Edit the entered amount of water",children:e.jsx(C,{title:"Choose a value",show:!1,handleUpdateWater:c,closeModal:x})}),e.jsx(f,{className:"edit-water-icon",id:"icon-pencil"})]}),e.jsx("button",{type:"button",className:"delete-btn",onClick:()=>h(u),children:e.jsx(f,{className:"delete-water-icon",id:"icon-delete"})})]},u)):e.jsx("p",{children:"No notes yet"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]})}),e.jsx("div",{children:e.jsx("button",{onClick:()=>n(!0),children:"Add water"})}),t&&e.jsx(w,{setVisible:n,title:"Add water",children:e.jsx(C,{title:"Choose a value",show:!1,handleAddWater:r,closeModal:x})})]})},O=()=>e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsx(R,{}),e.jsx(U,{})]})});export{O as default};
