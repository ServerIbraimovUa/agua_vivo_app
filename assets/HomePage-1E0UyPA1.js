import{u as s,a as z,j as e,r as p,M as D,b as I,c as U,d as F,e as H,I as N,f as G,g as J}from"./index-fgp6HdCi.js";const Q=s.div`
    width: 544px;

`,X=s.form`
    display: flex;
    gap:24px;
    flex-direction: column;
`,Z=s.div`
    display: flex;
    flex-direction: column;
    gap:12px;
`,P=s.div`
    display: flex;    
    gap:24px;
`,L=s.span`
        color: var(--primary-blue);
        font-size:18px;
`,_=s.p`
    color:#8F8F8F;
    font-size: 12px;
`,ee=s.div`
    display: flex;
    gap:16px;
    flex-direction: column;
`,W=s.h3`
    font-size: 18px;
    font-weight:bold;
`,V=s.label`
    display: flex;
    flex-direction:column;
    gap:8px;
`,$=s.input`
    margin-right: 5px;
`,q=s.input`
    color: var(--primary-blue);
    height: 44px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
`,te=s.div`
display: flex;
flex-direction: column;
gap:16px;
`,ne=s.button`
    width: 160px;
    border-radius: 10px;
    margin-left:auto;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--primary-blue);
`,se=({onClose:n})=>{const{register:i,handleSubmit:r,getValues:l,formState:{errors:a}}=z({defaultValues:{weight:"0",time:"0",gender:"female"},mode:"onChange"}),h=g=>{console.log(g),n()},u=Number(l("weight")),o=Number(l("time")),x=String(l("gender")),w=((g,y,b)=>String(b==="male"?(g*.04+y*.6).toFixed(1):(g*.03+y*.4).toFixed(1)))(u,o,x);return e.jsx(Q,{children:e.jsxs(X,{onSubmit:r(h),children:[e.jsxs(Z,{children:[e.jsxs(P,{children:[e.jsxs("p",{children:["For girl:",e.jsx(L,{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man:",e.jsx(L,{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(_,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),e.jsxs(ee,{children:[e.jsx(W,{children:"Calculate your rate:"}),e.jsxs(P,{children:[e.jsxs("label",{children:[e.jsx($,{...i("gender",{required:"Please select a gender"}),value:"female",type:"radio"}),"For woman"]}),e.jsxs("label",{children:[e.jsx($,{...i("gender",{required:"Please select a gender"}),value:"male",type:"radio"}),"For man",a.gender&&e.jsx("span",{children:"This field is required"})]})]}),e.jsxs(V,{children:[e.jsx("span",{children:"Your weight in kilograms:"}),e.jsx(q,{...i("weight",{required:!0})}),a.weight&&e.jsx("span",{children:"This field is required"})]}),e.jsxs(V,{children:[e.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),e.jsx(q,{...i("time",{required:!0})}),a.time&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:["The required amount of water in liters per day:",e.jsxs(L,{children:["`",w," L`"]})]})]}),e.jsx(te,{children:e.jsxs(V,{children:[e.jsx(W,{children:"Write down how much water you will drink:"}),e.jsx(q,{...i("quantity",{required:!0})}),a.quantity&&e.jsx("span",{children:"This field is required"})]})}),e.jsx(ne,{type:"submit",children:"Save"})]})})},ie=()=>{const[n,i]=p.useState(!1),r=()=>{i(!n)};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"My daily norma"}),e.jsx("p",{children:"2L"}),n&&e.jsx(D,{setVisible:r,title:"My Daily Norma",children:e.jsx(se,{onClose:r})}),e.jsx("button",{type:"button",onClick:r,children:"Edit"})]})},R=({title:n,show:i,closeModal:r})=>{const{register:l,handleSubmit:a,formState:{errors:h}}=z(),u=I(),[o,x]=p.useState({count:0,inputValue:"0"}),f=c=>{o.count+c>=0&&x({inputValue:String(c),count:c})},w=c=>{const{value:j}=c.target;x(S=>({...S,inputValue:j}))},g=()=>{f(Number(o.inputValue))},y=c=>{c.key==="-"&&c.preventDefault()},b=c=>{const j={date:c.date,waterVolume:Number(o.inputValue)};u(U(j)),r()};return e.jsxs("div",{children:[i&&e.jsxs("div",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsx("h2",{children:n}),e.jsx("p",{children:"Amount of water:"}),e.jsxs("form",{onSubmit:a(b),children:[e.jsxs("div",{className:"counter",children:[e.jsx("button",{onClick:()=>f(o.count-50),type:"button",children:"-"}),e.jsxs("span",{children:[o.count,"ml"]}),e.jsx("button",{onClick:()=>f(o.count+50),type:"button",children:"+"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Recording time:"}),e.jsx("input",{...l("date",{required:!0}),type:"time",name:"date",step:300}),h.date&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter the value of water used:"}),e.jsx("input",{...l("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:o.inputValue,onChange:w,onBlur:g,onKeyPress:y}),h.waterVolume&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[o.count,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})]})},C=n=>n.water,Y=F(C,n=>n.waterList);F(C,n=>n.amountDaily);F(C,n=>n.amountMonthly);F(C,n=>n.isLoading);F(C,n=>n.error);const oe=({handleDeleteWater:n,closeModal:i,waterId:r})=>{const l=()=>{i()},a=()=>{n(r),i()};return e.jsxs("div",{children:[e.jsx("p",{children:"Are you sure you want to delete the entry?"}),e.jsx("button",{type:"button",onClick:l,children:"Cancel"}),e.jsx("button",{type:"button",onClick:a,children:"Save"})]})},re=({handleDeleteWater:n,handleUpdateWater:i,closeModal:r})=>{const[l,a]=p.useState(!1),h=H(Y);return e.jsx(e.Fragment,{children:h.map(({waterVolume:u,date:o,waterId:x})=>e.jsxs("li",{children:[e.jsx("span",{children:e.jsx(N,{className:"water-glass-icon",id:"icon-water"})}),e.jsx("p",{children:u}),e.jsx("p",{children:o}),e.jsx("button",{type:"button",className:"edit-btn",children:e.jsx(N,{className:"edit-water-icon",id:"icon-pencil"})}),l&&e.jsx(D,{setVisible:a,title:"Edit the entered amount of water",children:e.jsx(R,{title:"Choose a value",show:!1,handleUpdateWater:i,closeModal:r})}),e.jsx("button",{type:"button",className:"delete-btn",onClick:()=>n(x),children:e.jsx(N,{className:"delete-water-icon",id:"icon-delete"})}),l&&e.jsx(D,{setVisible:a,title:"Delete water",children:e.jsx(oe,{waterId:x,handleDeleteWater:n,closeModal:r})})]},x))})},le=()=>{const[n,i]=p.useState(!1),r=I(),l=H(Y),a=o=>{r(G(o))},h=o=>{r(J(o))},u=()=>{i(!1)};return e.jsxs("div",{children:[e.jsx("h1",{children:"Today"}),l.length===0?e.jsx("p",{children:"No notes yet"}):e.jsx(re,{show:!1,closeModal:u,handleDeleteWater:a,handleUpdateWater:h}),e.jsx("div",{children:e.jsx("button",{onClick:()=>i(!0),children:"Add water"})}),n&&e.jsx(D,{setVisible:i,title:"Add water",children:e.jsx(R,{title:"Choose a value",show:!1,closeModal:u})})]})},ae=s.div`
  position: relative;
  width: 544px;
 height: 100%;
  background-color: #ECF2FF;
`,ce=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100%;
  margin-bottom: 16px;
`,de=s.div`
  margin-top: 6px;
  margin-left: auto;
  height: 20px;
  display: flex;
  align-items: center;
`,ue=s.h2`
  font-size: 16px;
  color: #407BFF;
`,he=s.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 4px;
`,K=s.div`
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
`,A=s.button`
  color: #407BFF;
  border: none;
  background-color: transparent;
  padding: 5px 10px;
  flex-shrink: 0;
  cursor: pointer;
`,xe=s.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  width: 100%;
  height: 100%;
`,pe=s.div`
  width: 292px;
  height: 188px;
  background-color: #fff;
  /* padding: 16px; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  
`,me=s.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #407BFF;
`,ge=s.h1`
  color: #407BFF;
  font-size: 16px;
`,T=s.p`
  font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;
`,B=s.span`
  margin-left: 6px;
  color: #407BFF;
  font-size: 18px;
`,je=s.div`
  margin-top: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
`,fe=s.p`
  color: #9EBBFF;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; /* Add this line to ensure a consistent width */
`,ye=s(K)`
  border: #FF9D43 1px solid;
`,be=()=>{const n=()=>new Date,[i,r]=p.useState(n()),[l,a]=p.useState(null),[h,u]=p.useState(!1),[o,x]=p.useState(null),f=t=>{const d=t.getFullYear(),m=t.getMonth(),M=new Date(d,m+1,0).getDate(),E=[];for(let v=1;v<=M;v++)E.push({day:v,month:t.toLocaleString("en-US",{month:"long"})});return E},w=()=>{const t=new Date(i.getFullYear(),i.getMonth(),1),d=new Date(i.getFullYear(),i.getMonth()+1,0),m=n();return m>=t&&m<=d},g=()=>{r(t=>new Date(t.getFullYear(),t.getMonth()-1)),a(null)},y=()=>{const t=new Date(i.getFullYear(),i.getMonth()+1);t<=n()&&(r(t),a(null))},b=()=>{j()},c=t=>{const d=document.getElementById(`day-${t.day}`);if(!d){console.error(`Element with id 'day-${t.day}' not found.`);return}const m=d.getBoundingClientRect(),M=292,v=m.top-188-40,O=m.left+m.width/2-M/2;l===t.day?b():(a(t.day),x(t),document.documentElement.style.setProperty("--modal-top",`${v}px`),document.documentElement.style.setProperty("--modal-left",`${O}px`),u(!0))},j=()=>{u(!1)},S=t=>{!t.target.classList.contains("day")&&l!==null&&b()};p.useEffect(()=>{const t=d=>{d instanceof KeyboardEvent&&d.key==="Escape"&&j()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[]),p.useEffect(()=>{const t=d=>{d.target.classList.contains("day")||j()};return window.addEventListener("click",t),()=>{window.removeEventListener("click",t)}},[]);const k=()=>100;return e.jsxs(ae,{children:[e.jsx(ce,{children:e.jsxs(de,{children:[e.jsx(A,{onClick:g,children:"<"}),e.jsxs(ue,{children:[i.toLocaleString("en-US",{month:"long"}),", ",i.getFullYear()]}),!w()&&e.jsx(A,{onClick:y,children:">"})]})}),e.jsx(he,{children:f(i).map(t=>e.jsxs("div",{id:`day-${t.day}`,children:[k()<100?e.jsx(ye,{className:`day ${l===t.day?"selected":""}`,onClick:()=>c(t),children:t.day}):e.jsx(K,{className:`day ${l===t.day?"selected":""}`,onClick:()=>c(t),children:t.day}),e.jsx(fe,{className:`procent ${k()<100?"lowPercentage":""}`,children:`${k()}%`})]},t.day))}),h&&e.jsx(xe,{onClick:S,children:e.jsx(pe,{children:e.jsxs(je,{children:[e.jsx(me,{onClick:j,children:"×"}),e.jsx(ge,{children:`${o==null?void 0:o.day}, ${o==null?void 0:o.month}`}),e.jsxs(T,{children:["Daily norm: ",e.jsx(B,{children:"1.5L"})]}),e.jsxs(T,{children:["Fulfillment of the daily norm:"," ",e.jsx(B,{children:"100%"})]}),e.jsxs(T,{children:["How many servings of water:"," ",e.jsx(B,{children:"6"})]})]})})})]})},ve=()=>e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsx(ie,{}),e.jsx(le,{}),e.jsx(be,{})]})});export{ve as default};
