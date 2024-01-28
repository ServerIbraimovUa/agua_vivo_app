import{b as n,j as e,r as g,d as w,a as R,u as Y,e as K,f as O,g as U}from"./index-Zgs--3Vk.js";import{M as B,I as M}from"./Modal-JCyOXel0.js";import{u as G}from"./index.esm-SBkG12p8.js";const J=n.div`
    width: 544px;

`,Q=n.form`
    display: flex;
    gap:24px;
    flex-direction: column;
`,X=n.div`
    display: flex;
    flex-direction: column;
    gap:12px;
`,T=n.div`
    display: flex;    
    gap:24px;
`,S=n.span`
        color: var(--primary-blue);
        font-size:18px;
`,Z=n.p`
    color:#8F8F8F;
    font-size: 12px;
`,_=n.div`
    display: flex;
    gap:16px;
    flex-direction: column;
`,q=n.h3`
    font-size: 18px;
    font-weight:bold;
`,E=n.label`
    display: flex;
    flex-direction:column;
    gap:8px;
`,$=n.input`
    margin-right: 5px;
`,N=n.input`
    color: var(--primary-blue);
    height: 44px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
`,ee=n.div`
display: flex;
flex-direction: column;
gap:16px;
`,te=n.button`
    width: 160px;
    border-radius: 10px;
    margin-left:auto;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--primary-blue);
`,ne=({onClose:s})=>{const{register:o,handleSubmit:l,getValues:c,formState:{errors:r}}=G({defaultValues:{weight:"0",time:"0",gender:"female"},mode:"onChange"}),j=i=>{console.log(i),s()},u=Number(c("weight")),d=Number(c("time")),a=String(c("gender")),x=((i,f,y)=>String(y==="male"?(i*.04+f*.6).toFixed(1):(i*.03+f*.4).toFixed(1)))(u,d,a);return e.jsx(J,{children:e.jsxs(Q,{onSubmit:l(j),children:[e.jsxs(X,{children:[e.jsxs(T,{children:[e.jsxs("p",{children:["For girl:",e.jsx(S,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man:",e.jsx(S,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(Z,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),e.jsxs(_,{children:[e.jsx(q,{children:"Calculate your rate:"}),e.jsxs(T,{children:[e.jsxs("label",{children:[e.jsx($,{...o("gender",{required:"Please select a gender"}),value:"female",type:"radio"}),"For woman"]}),e.jsxs("label",{children:[e.jsx($,{...o("gender",{required:"Please select a gender"}),value:"male",type:"radio"}),"For man",r.gender&&e.jsx("span",{children:"This field is required"})]})]}),e.jsxs(E,{children:[e.jsx("span",{children:"Your weight in kilograms:"}),e.jsx(N,{...o("weight",{required:!0})}),r.weight&&e.jsx("span",{children:"This field is required"})]}),e.jsxs(E,{children:[e.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),e.jsx(N,{...o("time",{required:!0})}),r.time&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:["The required amount of water in liters per day:",e.jsxs(S,{children:["`",x," L`"]})]})]}),e.jsx(ee,{children:e.jsxs(E,{children:[e.jsx(q,{children:"Write down how much water you will drink:"}),e.jsx(N,{...o("quantity",{required:!0})}),r.quantity&&e.jsx("span",{children:"This field is required"})]})}),e.jsx(te,{type:"submit",children:"Save"})]})})},se=()=>{const[s,o]=g.useState(!1),l=()=>{o(!s)};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"My daily norma"}),e.jsx("p",{children:"2L"}),s&&e.jsx(B,{setVisible:l,title:"My Daily Norma",children:e.jsx(ne,{onClose:l})}),e.jsx("button",{type:"button",onClick:l,children:"Edit"})]})},W=({title:s,show:o,handleAddWater:l,closeModal:c})=>{const[r,j]=g.useState({count:0,inputValue:"0"}),u=i=>{r.count+i>=0&&j({inputValue:String(i),count:i})},d=i=>{const{value:f}=i.target;j(y=>({...y,inputValue:f}))},a=()=>{u(+r.inputValue)},p=i=>{i.key==="-"&&i.preventDefault()},x=i=>{i.preventDefault(),l&&l(i),c()};return e.jsxs("div",{children:[o&&e.jsxs("div",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsx("h2",{children:s}),e.jsx("p",{children:"Amount of water:"}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"counter",children:[e.jsx("button",{onClick:()=>u(r.count-50),type:"button",children:"-"}),e.jsxs("span",{children:[r.count,"ml"]}),e.jsx("button",{onClick:()=>u(r.count+50),type:"button",children:"+"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Recording time:"}),e.jsx("input",{type:"time",name:"waterVolume"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter the value of water used:"}),e.jsx("input",{type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:r.inputValue,onChange:d,onBlur:a,onKeyPress:p})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[r.count,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})]})},v=s=>s.water,oe=w(v,s=>s.waterList);w(v,s=>s);w(v,s=>s.monthlyNorma);w(v,s=>s.isLoading);w(v,s=>s.error);const ie=()=>{const[s,o]=g.useState(!1),l=R(),c=Y(oe),r=a=>{a.preventDefault();const p=a.currentTarget.elements;console.dir(p);const x=p.waterVolume.value,i=p.date.value;l(K({waterVolume:x,date:i}))},j=a=>{l(O(a))},u=a=>{l(U(a))},d=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx("h1",{children:"Today"}),c?c.map(({waterVolume:a,date:p,waterId:x,waterData:i})=>e.jsxs("li",{children:[e.jsx("span",{children:e.jsx(M,{className:"water-glass-icon",id:"icon-water"})}),e.jsx("p",{children:a}),e.jsx("p",{children:p}),e.jsxs("button",{type:"button",className:"edit-btn",onClick:()=>u(i),children:[e.jsx(B,{setVisible:o,title:"Edit the entered amount of water",children:e.jsx(W,{title:"Choose a value",show:!1,handleUpdateWater:u,closeModal:d})}),e.jsx(M,{className:"edit-water-icon",id:"icon-pencil"})]}),e.jsx("button",{type:"button",className:"delete-btn",onClick:()=>j(x),children:e.jsx(M,{className:"delete-water-icon",id:"icon-delete"})})]},x)):e.jsx("p",{children:"No notes yet"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]})}),e.jsx("div",{children:e.jsx("button",{onClick:()=>o(!0),children:"Add water"})}),s&&e.jsx(B,{setVisible:o,title:"Add water",children:e.jsx(W,{title:"Choose a value",show:!1,handleAddWater:r,closeModal:d})})]})},re=n.div`
  position: relative;
  width: 544px;
 height: 100%;
  background-color: #ECF2FF;
`,le=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100%;
  margin-bottom: 16px;
`,ae=n.div`
  margin-top: 6px;
  margin-left: auto;
  height: 20px;
  display: flex;
  align-items: center;
`,ce=n.h2`
  font-size: 16px;
  color: #407BFF;
`,de=n.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 4px;
`,A=n.div`
  padding: 7px;
  background-color: #FFF;
  border-radius: 50%;
  text-align: center;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,z=n.button`
  color: #407BFF;
  border: none;
  background-color: transparent;
  padding: 5px 10px;
  flex-shrink: 0;
  cursor: pointer;
`,he=n.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  width: 100%;
  height: 100%;
`,ue=n.div`
  width: 292px;
  height: 188px;
  background-color: #fff;
  /* padding: 16px; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  
`,pe=n.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #407BFF;
`,xe=n.h1`
  color: #407BFF;
  font-size: 16px;
`,L=n.p`
  font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;
`,V=n.span`
  margin-left: 6px;
  color: #407BFF;
  font-size: 18px;
`,me=n.div`
  margin-top: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
`,ge=n.p`
  color: #9EBBFF;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; /* Add this line to ensure a consistent width */
`,je=n(A)`
  border: #FF9D43 1px solid;
`,fe=()=>{const s=()=>new Date,[o,l]=g.useState(s()),[c,r]=g.useState(null),[j,u]=g.useState(!1),[d,a]=g.useState(null),p=t=>{const h=t.getFullYear(),m=t.getMonth(),C=new Date(h,m+1,0).getDate(),k=[];for(let b=1;b<=C;b++)k.push({day:b,month:t.toLocaleString("en-US",{month:"long"})});return k},x=()=>{const t=new Date(o.getFullYear(),o.getMonth(),1),h=new Date(o.getFullYear(),o.getMonth()+1,0),m=s();return m>=t&&m<=h},i=()=>{l(t=>new Date(t.getFullYear(),t.getMonth()-1)),r(null)},f=()=>{const t=new Date(o.getFullYear(),o.getMonth()+1);t<=s()&&(l(t),r(null))},y=()=>{F()},P=t=>{const h=document.getElementById(`day-${t.day}`);if(!h){console.error(`Element with id 'day-${t.day}' not found.`);return}const m=h.getBoundingClientRect(),C=292,b=m.top-188-40,H=m.left+m.width/2-C/2;c===t.day?y():(r(t.day),a(t),document.documentElement.style.setProperty("--modal-top",`${b}px`),document.documentElement.style.setProperty("--modal-left",`${H}px`),u(!0))},F=()=>{u(!1)},I=t=>{!t.target.classList.contains("day")&&c!==null&&y()};g.useEffect(()=>{const t=h=>{h instanceof KeyboardEvent&&h.key==="Escape"&&F()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[]),g.useEffect(()=>{const t=h=>{h.target.classList.contains("day")||F()};return window.addEventListener("click",t),()=>{window.removeEventListener("click",t)}},[]);const D=()=>100;return e.jsxs(re,{children:[e.jsx(le,{children:e.jsxs(ae,{children:[e.jsx(z,{onClick:i,children:"<"}),e.jsxs(ce,{children:[o.toLocaleString("en-US",{month:"long"}),", ",o.getFullYear()]}),!x()&&e.jsx(z,{onClick:f,children:">"})]})}),e.jsx(de,{children:p(o).map(t=>e.jsxs("div",{id:`day-${t.day}`,children:[D()<100?e.jsx(je,{className:`day ${c===t.day?"selected":""}`,onClick:()=>P(t),children:t.day}):e.jsx(A,{className:`day ${c===t.day?"selected":""}`,onClick:()=>P(t),children:t.day}),e.jsx(ge,{className:`procent ${D()<100?"lowPercentage":""}`,children:`${D()}%`})]},t.day))}),j&&e.jsx(he,{onClick:I,children:e.jsx(ue,{children:e.jsxs(me,{children:[e.jsx(pe,{onClick:F,children:"×"}),e.jsx(xe,{children:`${d==null?void 0:d.day}, ${d==null?void 0:d.month}`}),e.jsxs(L,{children:["Daily norm: ",e.jsx(V,{children:"1.5L"})]}),e.jsxs(L,{children:["Fulfillment of the daily norm:"," ",e.jsx(V,{children:"100%"})]}),e.jsxs(L,{children:["How many servings of water:"," ",e.jsx(V,{children:"6"})]})]})})})]})},ve=()=>e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsx(se,{}),e.jsx(ie,{}),e.jsx(fe,{})]})});export{ve as default};
