import{u as x,d as N,j as t,a as Me,b as ee,c as Re,r as F,e as J,s as Ee,M as Q,f as te,I as q,g as Ne,h as Ce,i as _e,L as Ie,k as Fe,l as V,m as Ae}from"./index-A0dwmDTO.js";const ze=x.div``,Pe=x.form`

  display: flex;
  gap: 24px;
  flex-direction: column;
`,Le=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Be=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${N.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,$e=x.div`
  display: flex;
  gap: 24px;
`,se=x.span`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,Ve=x.span`
  width: 190px;
  @media ${N.tablet} {
    width: auto;
  }
`,We=x.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Ue=x.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,ye=x.h3`
  font-size: 18px;
  font-weight: bold;
`,ce=x.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,He=x.label`
  display: flex;
  gap: 5px;
`,we=x.input`
  margin-right: 5px;
`,le=x.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
`,Ye=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ke=x.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${N.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,qe=x.h2`
  font-size: 18px;
  font-weight: var(--bold-font-weight);
  line-height: 1.33;
  margin-bottom: 12px;
`,Ze=x.button`
  color: #8baeff;
`,Xe=x.div`
  display: flex;
  gap: 5px;
  margin-bottom: 16px;
`,Ge=x.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  @media ${N.tablet} {
    font-size: 24px;
  }
`,Je=x.div`
  position: absolute;
  padding: 10px; 
  top: -60px;
  left: -130px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  @media ${N.tablet} {
    top: -70px;
    left: 0px;
  }
`,Qe=x.span`
   color: red;
   font-size: 16px;
`,et=({message:r})=>t.jsx(t.Fragment,{children:t.jsx(Je,{children:t.jsx(Qe,{children:r})})}),tt=({onClose:r})=>{const{register:s,handleSubmit:o,watch:e,formState:{errors:n}}=Me({defaultValues:{weight:"",time:"",sex:"woman",dailyNorma:""},mode:"onChange"}),a=ee(),l=O=>{const{dailyNorma:p}=O;a(Re({dailyNorma:+p})),r()};let d;const u=Number(e("weight")),j=Number(e("time")),v=String(e("sex")),f=(O,p,E)=>E==="man"?String((O*.04+p*.6).toFixed(1))+"L":String((O*.03+p*.4).toFixed(1))+"L",m=(O,p)=>{if(O<20&&O!==0)return d=!0,"You couldn't be less than 20kg";if(p>24)return d=!0,"Day contains only 24H";if(p<0)return d=!0,"Time should be only positive integer"},R=f(u,j,v),y=m(u,j);return t.jsx(ze,{children:t.jsxs(Pe,{onSubmit:o(l),children:[t.jsxs(Le,{children:[t.jsxs(Be,{children:[t.jsxs("p",{children:["For girl:",t.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(We,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Ue,{children:[t.jsx(ye,{children:"Calculate your rate:"}),t.jsxs($e,{children:[t.jsxs("label",{children:[t.jsx(we,{...s("sex"),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(we,{...s("sex"),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(le,{...s("weight"),type:"number",placeholder:"0",min:10,max:300})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(le,{...s("time"),type:"number",placeholder:"0",min:0,max:24})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:"The required amount of water in liters per day:"}),t.jsx(se,{children:d?t.jsx(et,{message:y}):R})]})]}),t.jsx(Ye,{children:t.jsxs(ce,{children:[t.jsx(ye,{children:"Write down how much water you will drink:"}),t.jsx(le,{...s("dailyNorma",{required:!0}),type:"number",step:"any",max:15,placeholder:"0"}),n.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(Ke,{className:"btn",type:"submit",children:"Save"})]})})},nt=()=>{const[r,s]=F.useState(!1),o=()=>{s(!r)},e=J(Ee);return t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:"My daily norma"}),t.jsxs(Xe,{children:[t.jsxs(Ge,{children:[e,"L"]}),r&&t.jsx(Q,{setVisible:o,title:"My Daily Norma",daily:!0,children:t.jsx(tt,{onClose:o})}),t.jsx(Ze,{type:"button",onClick:o,children:"Edit"})]})]})},rt=x.section`
  margin-bottom: 24px;

  .water-section {
    min-width: 544px;
  }

  .water-title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .water-empty {
    color: var(--primary-blue);
    margin-bottom: 24px;
  }

  .water-list {
    display: flex;
    flex-direction: column;

    max-height: 194px;
    overflow-y: auto;
  }
  .water-list::-webkit-scrollbar {
    width: 4px;
    background-color: var(--secondary-light-blue);
  }
  .water-list::-webkit-scrollbar-thumb {
    width: 4px;
    background: var(--secondary-blue);
  }

  .water-plus-icon {
    width: 16px;
    height: 16px;
    fill: var(--primary-blue);
  }

  .add-water-btn {
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
  }

  @media ${N.tablet} {
    .water-title {
      margin-bottom: 24px;
    }
  }
`,at=x.li`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  padding: 12px 6.5px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--secondary-light-blue);

  .water-info {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .water-glass-icon {
    width: 26px;
    height: 26px;
  }

  .water-amount-card {
    font-size: 18px;
    color: var(--primary-blue);
  }

  .time {
    font-size: 12px;
  }

  .edit-water-icon,
  .delete-water-icon {
    width: 16px;
    height: 16px;
  }

  .edit-delete-btn-box {
    display: flex;
    gap: 18px;
  }

  @media ${N.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
  }
`,it=x.div`
  .water-card {
    width: 254px;
    padding: 8px 24px;
    margin-bottom: 24px;

    display: flex;
    align-items: center;
    gap: 12px;

    border-radius: 10px;
    background: var(--secondary-light-blue);
  }
  .add-water-title {
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    margin-bottom: 16px;
  }

  .counter-btn-box {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .water-amount-span {
    width: 92px;
    font-size: 18px;
    font-weight: var(--bold-font-weight);
    color: var(--primary-blue);

    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;

    border-radius: 40px;
    background: var(--secondary-light-blue);
  }

  .icon-minus,
  .icon-plus {
    width: 24px;
    height: 24px;
    color: var(--primary-blue);
  }

  .counter-btn {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    border: 1px solid var(--secondary-blue);
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }

  .add-water-form {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-direction: column;
  }

  .water-input {
    color: var(--primary-blue);
    height: 44px;
    width: 120px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
    padding: 12px 10px;
  }

  .water-label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .enter-water-span {
    width: 240px;
    font-size: 18px;
    font-weight: var(--medium-font-weight);
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .water-amount {
    font-size: 18px;
    font-weight: var(--bold-font-weight);
    color: var(--primary-blue);
  }

  .counter-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }

  .save-btn {
    width: 256px;
    border-radius: 10px;
    font-size: 18px;
    padding: 8px 30px;
    background-color: var(--primary-blue);
    color: var(--secondary-white);
  }

  @media ${N.tablet} {
    max-width: 744px;

    .water-input {
      width: 100%;
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      justify-content: end;
      gap: 24px;
    }

    .save-btn {
      width: 160px;
    }
  }

  @media ${N.desktop} {
  }
`,ot=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  .cancel-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-white);
    background-color: var(--primary-blue);
  }

  .delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-white);
    background-color: var(--secondary-red);
  }

  .delete-btn-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  @media ${N.tablet} {
    .delete-btn-box {
      display: flex;
      flex-direction: row;
      gap: 24px;
      align-items: center;
    }
  }
`,ne=r=>r.water,Te=te(ne,r=>r.amountDaily),st=te(ne,r=>r.amountDaily.percentage);te(ne,r=>r.amountMonthly);const ct=te(ne,r=>r.isLoading),lt=te(ne,r=>r.error),ue=({title:r,show:s,closeModal:o,_id:e})=>{const{register:n,handleSubmit:a,formState:{errors:l}}=Me(),d=ee(),[u,j]=F.useState({count:0,inputValue:"0"}),{entries:v}=J(Te),f=v.find(g=>g._id===e),[m,R]=F.useState([]);F.useEffect(()=>{const g=new Date,L=g.getMinutes(),B=g.getHours()>=12?"PM":"AM",z=(g.getHours()%12||12).toString().padStart(2,"0"),C=L.toString().padStart(2,"0"),U=`${z}:${C} ${B}`,Z=g.getHours(),W=g.getMinutes();let i=Z,c=Math.ceil(W/5)*5;c>=60&&(i++,c-=60);const h=[];for(let b=i*60+c;b<24*60;b+=5){const k=(b%60).toString().padStart(2,"0"),w=Math.floor(b/60)<12?"AM":"PM",D=(Math.floor(b/60)%12||12).toString().padStart(2,"0");h.push(`${D}:${k} ${w}`)}R([U,...h])},[]);const y=g=>{u.count+g>=0&&j({inputValue:String(g),count:g})},O=g=>{const{value:L}=g.target;j(B=>({...B,inputValue:L}))},p=()=>{y(Number(u.inputValue))},E=g=>{g.key==="-"&&g.preventDefault()},S=g=>{const L={time:g.time,waterVolume:Number(u.inputValue)};d(Ne(L)),o()};return t.jsxs(it,{children:[s&&t.jsxs("div",{className:"water-card",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[f==null?void 0:f.waterVolume," ml"]}),t.jsx("p",{className:"time",children:f==null?void 0:f.time})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>y(u.count-50),type:"button",children:t.jsx(q,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[u.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>y(u.count+50),type:"button",children:t.jsx(q,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:a(S),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:m.map(g=>t.jsx("option",{value:g,children:g},g))}),l.time&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:u.inputValue,onChange:O,onBlur:p,onKeyPress:E,className:"water-input"}),l.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[u.count,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},dt=({closeModal:r,_id:s})=>{const o=ee(),e=()=>{r()},n=a=>{o(Ce(a)),r()};return t.jsxs(ot,{children:[t.jsx("p",{children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:()=>n(s),children:"Delete"})]})]})},ut=({_id:r,waterVolume:s,time:o})=>{const[e,n]=F.useState(!1),[a,l]=F.useState(!1),d=ee(),u=j=>{d(_e(j))};return t.jsxs(at,{children:[t.jsxs("div",{className:"water-info",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[s," ml"]}),t.jsx("p",{className:"time",children:o})]}),t.jsxs("div",{className:"edit-delete-btn-box",children:[t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>n(!0),children:t.jsx(q,{className:"edit-water-icon",id:"pencil"})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{l(!0)},children:t.jsx(q,{className:"delete-water-icon",id:"delete"})})]}),e&&t.jsx(Q,{setVisible:n,title:"Edit the entered amount of water",children:t.jsx(ue,{title:"Correct entered data:",show:!0,handleUpdateWater:u,closeModal:()=>{n(!1)},_id:r})}),a&&t.jsx(Q,{setVisible:l,title:"Delete water",children:t.jsx(dt,{title:"Delete entry?",show:!1,closeModal:()=>{l(!1)},_id:r})})]})},ht=()=>{const[r,s]=F.useState(!1),{entries:o}=J(Te),e=J(ct),n=J(lt),a=()=>{s(!1)};return F.useEffect(()=>{},[o]),t.jsxs(rt,{children:[t.jsx("h3",{className:"water-title",children:"Today"}),e&&!n&&t.jsx(Ie,{}),o.length===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx("ul",{className:"water-list",children:o.length>0&&o.map(({_id:l,waterVolume:d,time:u})=>t.jsx(ut,{_id:l,waterVolume:d,time:u},l))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(Q,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:a})})]})},pt=x.div`
            /* position: absolute;
            bottom: 0;
            right: 0; */

  width: 264;
  height: 500px;
  background-color: #ecf2ff;

  @media ${N.tablet} {
    width: 646px;
    height: 315px;
  }
  @media ${N.desktop} {

width: 544px;
height: 320px;
  }

  .right-align {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 32px;
    width: 100%;
    margin-top: 6px;
    margin-left: auto;
    margin-bottom: 16px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 32px;
    width: 100%;
    margin-top: 6px;
    margin-left: auto;
  }
  .month-title {
    font-size: 16px;
    color: #407bff;
    width: 132px;
    text-align: center;
  }
  .button {
    color: #407bff;
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    flex-shrink: 0;
  }
  .button.disabled {
  color: grey;
  cursor: not-allowed;
}
  .month {
    font-size: 26px;
    color: #2f2f2f;
    margin-left: 0;
  }
`,ft=x.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  gap: 16px 26px;

  @media ${N.tablet} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }
  @media ${N.desktop} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 22px;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .procent {
    color: #9ebbff;
    text-align: center;
    font-size: 12px;
  }
`,De=x.span`
  padding: 7px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,mt=x.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,gt=x.div`
  width: 292px;
  height: 188px;
  background-color: #fff;
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;

  .close {
    position: absolute;
    top: 24px;
    right: 16px;
    font-size: 20px;
    color: #407bff;
  }
  .title-modal {
    position: absolute;
    top: 24px;
    color: #407bff;
    font-size: 16px;
    margin-bottom: 16px;
  }
  .modal-paragraf {
    font-size: 16px;
    color: #2f2f2f;
    line-height: 20px;
  }
  .modal-paragraf-one {
    margin-top: 36px;
  }
  .modal-paragraf-two-three {
    margin-top: 16px;
  }
  .span-modal {
    margin-left: 6px;
    color: #407bff;
    font-size: 18px;
  }
`,xt=x(De)`
  border: #ff9d43 1px solid;
`,vt=()=>{const r=()=>new Date,[s,o]=F.useState(r()),[e,n]=F.useState(null),[a,l]=F.useState(!1),[d,u]=F.useState(null),j=F.useRef(null);Fe(j,()=>{a&&l(!1)});const v=p=>{const E=p.getFullYear(),S=p.getMonth(),g=new Date(E,S+1,0).getDate(),L=[];for(let B=1;B<=g;B++)L.push({day:B,month:p.toLocaleString("en-US",{month:"long"})});return L},f=()=>{o(p=>new Date(p.getFullYear(),p.getMonth()-1)),n(null)},m=()=>{const p=new Date(s.getFullYear(),s.getMonth()+1);p<=r()&&(o(p),n(null))},R=p=>{if(e===p.day){y(),n(null);return}const E=document.getElementById(`day-${p.day}`);if(!E){console.error(`Елемент з id 'day-${p.day}' не знайдено.`);return}const S=E.getBoundingClientRect(),g=292,L=188,B=window.innerWidth,z=window.innerHeight;let C=S.top-L-10,U=window.innerWidth<=768?window.innerWidth/2-g/2:S.left+S.width/2-g/2;C<0&&(C=0),C+L>z&&(C=z-L),U<0&&(U=0),U+g>B&&(U=B-g),n(p.day),u(p),document.documentElement.style.setProperty("--modal-top",`${C}px`),document.documentElement.style.setProperty("--modal-left",`${U}px`),l(!0)},y=()=>{l(!1)};F.useEffect(()=>{const p=E=>{E instanceof KeyboardEvent&&E.key==="Escape"&&y()};return window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[]);const O=()=>0;return t.jsxs(pt,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:f,children:"<"}),t.jsxs("div",{className:"month-title",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),s.getMonth()===new Date().getMonth()&&s.getFullYear()===new Date().getFullYear()?t.jsx("button",{className:"button disabled",disabled:!0,children:">"}):t.jsx("button",{className:"button",onClick:m,children:">"})]})]}),t.jsx(ft,{children:v(s).map(p=>t.jsxs("li",{id:`day-${p.day}`,className:"hover active",children:[O()<100?t.jsx(xt,{className:`day ${e===p.day?"selected":""}`,onClick:()=>R(p),children:p.day}):t.jsx(De,{className:`day ${e===p.day?"selected":""}`,onClick:()=>R(p),children:p.day}),t.jsx("p",{className:`procent ${O()<100?"lowPercentage":""}`,children:`${O()}%`})]},p.day))}),t.jsx(mt,{ref:j,className:a?"open":"",children:t.jsxs(gt,{children:[t.jsx("button",{className:"close hover active",onClick:y,children:"×"}),t.jsx("h3",{className:"title-modal",children:`${d==null?void 0:d.day}, ${d==null?void 0:d.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:"1.5L"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"span-modal",children:"100%"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:"6"})]})]})})]})};var de={},he={},pe={},oe={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(oe);(function(r){var s=V&&V.__spreadArray||function(i,c,h){if(h||arguments.length===2)for(var b=0,k=c.length,w;b<k;b++)(w||!(b in c))&&(w||(w=Array.prototype.slice.call(c,0,b)),w[b]=c[b]);return i.concat(w||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var o=F,e=oe,n=function(i){var c=i.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=n;function a(i){return i.touches&&i.touches.length||i.changedTouches&&i.changedTouches.length}r.isTouchEvent=a;function l(i,c,h){var b=(c-i)/h,k=8,w=Number(b.toFixed(k));return parseInt(w.toString(),10)===w}r.isStepDivisible=l;function d(i,c,h,b,k,w,D){var T=1e11;if(i=Math.round(i*T)/T,!w){var P=D[c-1],_=D[c+1];if(P&&P>i)return P;if(_&&_<i)return _}if(i>b)return b;if(i<h)return h;var H=Math.floor(i*T-h*T)%Math.floor(k*T),$=Math.floor(i*T-Math.abs(H)),Y=H===0?i:$/T,A=Math.abs(H/T)<k/2?Y:Y+k,K=(0,r.getStepDecimals)(k);return parseFloat(A.toFixed(K))}r.normalizeValue=d;function u(i,c,h){return(i-c)/(h-c)}r.relativeValue=u;function j(i){return i===e.Direction.Up||i===e.Direction.Down}r.isVertical=j;function v(i,c,h){if(c>=h)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(h,")"));if(i<c)throw new RangeError("value (".concat(i,") is smaller than min (").concat(c,")"));if(i>h)throw new RangeError("value (".concat(i,") is bigger than max (").concat(h,")"))}r.checkBoundaries=v;function f(i,c,h){return i<c?c:i>h?h:i}r.checkValuesAgainstBoundaries=f;function m(i){if(!(i.length<2)&&!i.slice(1).every(function(c,h){return i[h]<=c}))throw new RangeError("values={[".concat(i,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=m;function R(i){var c=window.getComputedStyle(i);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=R;function y(i){var c=window.getComputedStyle(i);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=y;function O(i,c,h){var b=h?-1:1;i.forEach(function(k,w){return E(k,b*c[w].x,c[w].y)})}r.translateThumbs=O;function p(i,c,h,b){for(var k=0,w=W(i[0],c,h,b),D=1;D<i.length;D++){var T=W(i[D],c,h,b);T<w&&(w=T,k=D)}return k}r.getClosestThumbIndex=p;function E(i,c,h){i.style.transform="translate(".concat(c,"px, ").concat(h,"px)")}r.translate=E;var S=function(i){var c=[],h=null,b=function(){for(var k=[],w=0;w<arguments.length;w++)k[w]=arguments[w];c=k,!h&&(h=requestAnimationFrame(function(){h=null,i.apply(void 0,c)}))};return b};r.schd=S;function g(i,c,h){var b=i.slice(0);return b[c]=h,b}r.replaceAt=g;function L(i){var c=i.values,h=i.colors,b=i.min,k=i.max,w=i.direction,D=w===void 0?e.Direction.Right:w,T=i.rtl,P=T===void 0?!1:T;P&&D===e.Direction.Right?D=e.Direction.Left:P&&e.Direction.Left&&(D=e.Direction.Right);var _=c.slice(0).sort(function($,Y){return $-Y}).map(function($){return($-b)/(k-b)*100}),H=_.reduce(function($,Y,A){return"".concat($,", ").concat(h[A]," ").concat(Y,"%, ").concat(h[A+1]," ").concat(Y,"%")},"");return"linear-gradient(".concat(D,", ").concat(h[0]," 0%").concat(H,", ").concat(h[h.length-1]," 100%)")}r.getTrackBackground=L;function B(){}r.voidFn=B;function z(i){throw new Error("Didn't expect to get here")}r.assertUnreachable=z;var C=function(i,c,h,b,k){k===void 0&&(k=function(D){return D});var w=Math.ceil(s([i],Array.from(i.children),!0).reduce(function(D,T){var P=Math.ceil(T.getBoundingClientRect().width);if(T.innerText&&T.innerText.includes(h)&&T.childElementCount===0){var _=T.cloneNode(!0);_.innerHTML=k(c.toFixed(b)),_.style.visibility="hidden",document.body.appendChild(_),P=Math.ceil(_.getBoundingClientRect().width),document.body.removeChild(_)}return P>D?P:D},i.getBoundingClientRect().width));return w},U=function(i,c,h,b,k,w,D){D===void 0&&(D=function(_){return _});var T=[],P=function(_){var H=C(h[_],b[_],k,w,D),$=c[_].x;c.forEach(function(Y,A){var K=Y.x,X=C(h[A],b[A],k,w,D);_!==A&&($>=K&&$<=K+X||$+H>=K&&$+H<=K+X)&&(T.includes(A)||(T.push(_),T.push(A),T=s(s([],T,!0),[_,A],!1),P(A)))})};return P(i),Array.from(new Set(T.sort()))},Z=function(i,c,h,b,k,w){b===void 0&&(b=.1),k===void 0&&(k=" - "),w===void 0&&(w=function(A){return A});var D=(0,r.getStepDecimals)(b),T=(0,o.useState)({}),P=T[0],_=T[1],H=(0,o.useState)(w(c[h].toFixed(D))),$=H[0],Y=H[1];return(0,o.useEffect)(function(){if(i){var A=i.getThumbs();if(A.length<1)return;var K={},X=i.getOffsets(),re=U(h,X,A,c,k,D,w),fe=w(c[h].toFixed(D));if(re.length){var ae=re.reduce(function(G,xe,ve,be){return G.length?s(s([],G,!0),[X[be[ve]].x],!1):[X[be[ve]].x]},[]);if(Math.min.apply(Math,ae)===X[h].x){var me=[];re.forEach(function(G){me.push(c[G].toFixed(D))}),fe=Array.from(new Set(me.sort(function(G,xe){return parseFloat(G)-parseFloat(xe)}))).map(w).join(k);var Oe=Math.min.apply(Math,ae),ge=Math.max.apply(Math,ae),Se=A[re[ae.indexOf(ge)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Oe-(ge+Se))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Y(fe),_(K)}},[i,c]),[$,P]};r.useThumbOverlap=Z;function W(i,c,h,b){var k=i.getBoundingClientRect(),w=k.left,D=k.top,T=k.width,P=k.height;return j(b)?Math.abs(h-(D+P/2)):Math.abs(c-(w+T/2))}})(pe);var bt=V&&V.__extends||function(){var r=function(s,o){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},r(s,o)};return function(s,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");r(s,o);function e(){this.constructor=s}s.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}}(),yt=V&&V.__createBinding||(Object.create?function(r,s,o,e){e===void 0&&(e=o);var n=Object.getOwnPropertyDescriptor(s,o);(!n||("get"in n?!s.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return s[o]}}),Object.defineProperty(r,e,n)}:function(r,s,o,e){e===void 0&&(e=o),r[e]=s[o]}),wt=V&&V.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),jt=V&&V.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var o in r)o!=="default"&&Object.prototype.hasOwnProperty.call(r,o)&&yt(s,r,o);return wt(s,r),s},je=V&&V.__spreadArray||function(r,s,o){if(o||arguments.length===2)for(var e=0,n=s.length,a;e<n;e++)(a||!(e in s))&&(a||(a=Array.prototype.slice.call(s,0,e)),a[e]=s[e]);return r.concat(a||Array.prototype.slice.call(s))};Object.defineProperty(he,"__esModule",{value:!0});var ie=jt(F),M=pe,I=oe,kt=["ArrowRight","ArrowUp","k","PageUp"],Mt=["ArrowLeft","ArrowDown","j","PageDown"],Tt=function(r){bt(s,r);function s(o){var e=r.call(this,o)||this;if(e.trackRef=ie.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,a){return a}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,a=n.direction,l=n.values,d=n.min,u=n.max,j=e.trackRef.current,v=j.getBoundingClientRect(),f=(0,M.getPaddingAndBorder)(j);return e.getThumbs().map(function(m,R){var y={x:0,y:0},O=m.getBoundingClientRect(),p=(0,M.getMargin)(m);switch(a){case I.Direction.Right:return y.x=(p.left+f.left)*-1,y.y=((O.height-v.height)/2+f.top)*-1,y.x+=v.width*(0,M.relativeValue)(l[R],d,u)-O.width/2,y;case I.Direction.Left:return y.x=(p.right+f.right)*-1,y.y=((O.height-v.height)/2+f.top)*-1,y.x+=v.width-v.width*(0,M.relativeValue)(l[R],d,u)-O.width/2,y;case I.Direction.Up:return y.x=((O.width-v.width)/2+p.left+f.left)*-1,y.y=-f.left,y.y+=v.height-v.height*(0,M.relativeValue)(l[R],d,u)-O.height/2,y;case I.Direction.Down:return y.x=((O.width-v.width)/2+p.left+f.left)*-1,y.y=-f.left,y.y+=v.height*(0,M.relativeValue)(l[R],d,u)-O.height/2,y;default:return(0,M.assertUnreachable)(a)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(a){return a===n.target||a.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var a;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var u;return(u=d.current)===null||u===void 0?void 0:u.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var l=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.clientX,n.clientY,e.props.direction);(a=e.thumbRefs[l].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,M.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var a;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var u;return(u=d.current)===null||u===void 0?void 0:u.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var l=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(a=e.thumbRefs[l].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var a=(0,M.isTouchEvent)(n);if(!(!a&&n.button!==0)){var l=e.getTargetIndex(n);l!==-1&&(a?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:l,thumbZIndexes:e.state.thumbZIndexes.map(function(d,u){return u===l?Math.max.apply(Math,e.state.thumbZIndexes):d<=e.state.thumbZIndexes[l]?d:d-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var a=e.props,l=a.values,d=a.onChange,u=a.step,j=a.rtl,v=a.direction,f=e.state.isChanged,m=e.getTargetIndex(n.nativeEvent),R=j||v===I.Direction.Left||v===I.Direction.Down?-1:1;m!==-1&&(kt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),d((0,M.replaceAt)(l,m,e.normalizeValue(l[m]+R*(n.key==="PageUp"?u*10:u),m)))):Mt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),d((0,M.replaceAt)(l,m,e.normalizeValue(l[m]-R*(n.key==="PageDown"?u*10:u),m)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){f&&e.fireOnFinalChange()}):f&&e.fireOnFinalChange())},e.onKeyUp=function(n){var a=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){a&&e.fireOnFinalChange()})},e.onMove=function(n,a){var l=e.state,d=l.draggedThumbIndex,u=l.draggedTrackPos,j=e.props,v=j.direction,f=j.min,m=j.max,R=j.onChange,y=j.values,O=j.step,p=j.rtl;if(d===-1&&u[0]===-1&&u[1]===-1)return null;var E=e.trackRef.current;if(!E)return null;var S=E.getBoundingClientRect(),g=(0,M.isVertical)(v)?S.height:S.width;if(u[0]!==-1&&u[1]!==-1){var L=n-u[0],B=a-u[1],z=0;switch(v){case I.Direction.Right:case I.Direction.Left:z=L/g*(m-f);break;case I.Direction.Down:case I.Direction.Up:z=B/g*(m-f);break;default:(0,M.assertUnreachable)(v)}if(p&&(z*=-1),Math.abs(z)>=O/2){for(var C=0;C<e.thumbRefs.length;C++){if(y[C]===m&&Math.sign(z)===1||y[C]===f&&Math.sign(z)===-1)return;var U=y[C]+z;U>m?z=m-y[C]:U<f&&(z=f-y[C])}for(var Z=y.slice(0),C=0;C<e.thumbRefs.length;C++)Z=(0,M.replaceAt)(Z,C,e.normalizeValue(y[C]+z,C));e.setState({draggedTrackPos:[n,a]}),R(Z)}}else{var W=0;switch(v){case I.Direction.Right:W=(n-S.left)/g*(m-f)+f;break;case I.Direction.Left:W=(g-(n-S.left))/g*(m-f)+f;break;case I.Direction.Down:W=(a-S.top)/g*(m-f)+f;break;case I.Direction.Up:W=(g-(a-S.top))/g*(m-f)+f;break;default:(0,M.assertUnreachable)(v)}p&&(W=m+f-W),Math.abs(y[d]-W)>=O/2&&R((0,M.replaceAt)(y,d,e.normalizeValue(W,d)))}},e.normalizeValue=function(n,a){var l=e.props,d=l.min,u=l.max,j=l.step,v=l.allowOverlap,f=l.values;return(0,M.normalizeValue)(n,a,d,u,j,v,f)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,a=n.onFinalChange,l=n.values;a&&a(l)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var a=0;a<e.numOfMarks+1;a++)e.markRefs[a]=ie.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),a=parseInt(n.width,10),l=parseInt(n.height,10),d=parseInt(n.paddingLeft,10),u=parseInt(n.paddingTop,10),j=[],v=0;v<e.numOfMarks+1;v++){var f=9999,m=9999;if(e.markRefs[v].current){var R=e.markRefs[v].current.getBoundingClientRect();f=R.height,m=R.width}e.props.direction===I.Direction.Left||e.props.direction===I.Direction.Right?j.push([Math.round(a/e.numOfMarks*v+d-m/2),-Math.round((f-l)/2)]):j.push([Math.round(l/e.numOfMarks*v+u-f/2),-Math.round((m-a)/2)])}e.setState({markOffsets:j})}},o.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,M.schd)(e.onMouseMove),e.schdOnTouchMove=(0,M.schd)(e.onTouchMove),e.schdOnEnd=(0,M.schd)(e.onEnd),e.thumbRefs=o.values.map(function(){return ie.createRef()}),e.updateMarkRefs(o),e}return s.prototype.componentDidMount=function(){var o=this,e=this.props,n=e.values,a=e.min,l=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",o.onResize)},unobserve:function(){return window.removeEventListener("resize",o.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,M.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(d){return(0,M.checkBoundaries)(d,o.props.min,o.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(d){(0,M.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(o,e){var n=this.props,a=n.max,l=n.min,d=n.step,u=n.values,j=n.rtl;(o.max!==a||o.min!==l||o.step!==d)&&this.updateMarkRefs(this.props),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),j),(o.max!==a||o.min!==l||o.step!==d||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),u.forEach(function(v){(0,M.isStepDivisible)(l,v,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var o={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,o),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var o=this,e=this.props,n=e.renderTrack,a=e.renderThumb,l=e.renderMark,d=l===void 0?function(){return null}:l,u=e.values,j=e.min,v=e.max,f=e.allowOverlap,m=e.disabled,R=this.state,y=R.draggedThumbIndex,O=R.thumbZIndexes,p=R.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:y>-1?"grabbing":this.props.draggableTrack?(0,M.isVertical)(this.props.direction)?"ns-resize":"ew-resize":u.length===1&&!m?"pointer":"inherit"},onMouseDown:m?M.voidFn:this.onMouseDownTrack,onTouchStart:m?M.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:je(je([],p.map(function(E,S,g){return d({props:{style:o.props.direction===I.Direction.Left||o.props.direction===I.Direction.Right?{position:"absolute",left:"".concat(E[0],"px"),marginTop:"".concat(E[1],"px")}:{position:"absolute",top:"".concat(E[0],"px"),marginLeft:"".concat(E[1],"px")},key:"mark".concat(S),ref:o.markRefs[S]},index:S})}),!0),u.map(function(E,S){var g=o.state.draggedThumbIndex===S;return a({index:S,value:E,isDragged:g,props:{style:{position:"absolute",zIndex:O[S],cursor:m?"inherit":g?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":f?v:u[S+1]||v,"aria-valuemin":f?j:u[S-1]||j,"aria-valuenow":E,draggable:!1,ref:o.thumbRefs[S],role:"slider",onKeyDown:m?M.voidFn:o.onKeyDown,onKeyUp:m?M.voidFn:o.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:I.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ie.Component);he.default=Tt;(function(r){var s=V&&V.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var o=s(he);r.Range=o.default;var e=pe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=oe;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(de);const Dt=x.div`
  width: 280px;
  @media ${N.tablet} {
    width: 704px;
  }
  @media ${N.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,Ot=x.div`
  @media ${N.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${N.desktop} {
    display: flex;
    gap: 24px;
  }
`,St=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Rt=x.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${N.tablet} {
    padding-bottom: 16px;
  }
`,Et=x.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${N.tablet} {
    width: 325px;
  }
  @media ${N.desktop} {
    width: 360px;
  }
`,Nt=x.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,Ct=x.div`
  position: relative;
  top: 24px;
`,_t=x.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,It=x.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,ke=x.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Ft=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${N.tablet} {
    width: 400px;
  }
  @media ${N.desktop} {
    width: 592px;
  }
`,At=x.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${N.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${N.desktop} {
    width: 178px;
  }
`,zt=()=>{const[r,s]=F.useState(!1),o=J(st),e=o>100?100:o,n=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Dt,{children:t.jsxs(Ot,{children:[t.jsxs("div",{children:[t.jsx(Rt,{children:"Today"}),t.jsx(St,{children:t.jsx(de.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:a,children:l})=>t.jsx(Et,{...a,style:{...a.style,background:de.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:l}),renderThumb:({props:a})=>F.createElement(Nt,{...a,key:a.key},t.jsx(Ct,{children:t.jsxs(_t,{children:[e,"%"]})}))})}),t.jsxs(It,{children:[e<=7?t.jsx("span",{children:" "}):t.jsx(ke,{children:"0%"}),e>=85?t.jsx("span",{children:" "}):t.jsx(ke,{children:"100%"})]})]}),t.jsx(Ft,{className:"hover",children:t.jsxs(At,{className:"btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),r&&t.jsx(Q,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:n})})]})},Lt=()=>{const r=ee();return F.useEffect(()=>{r(Ae())},[r]),t.jsx("section",{children:t.jsxs("div",{className:"container",children:[t.jsx(nt,{}),t.jsx(ht,{}),t.jsx(vt,{}),t.jsx(zt,{})]})})};export{Lt as default};
