import{u as m,d as N,j as t,a as G,s as Ne,b as Me,c as ee,e as Ee,r as A,f as Ce,M as Q,g as te,I as q,h as Te,i as _e,k as Ie,L as Fe,l as Ae,m as V,n as Pe}from"./index-WiiibuRw.js";const ze=m.div``,Be=m.form`

  display: flex;
  gap: 24px;
  flex-direction: column;
`,Le=m.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$e=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${N.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,Ve=m.div`
  display: flex;
  gap: 24px;
`,se=m.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,We=m.span`
  width: 190px;
  @media ${N.tablet} {
    width: auto;
  }
`,Ue=m.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,He=m.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,ye=m.h3`
  font-size: 18px;
  font-weight: bold;
`,ce=m.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ye=m.label`
  display: flex;
  gap: 5px;
`,we=m.input`
  margin-right: 5px;
`,le=m.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,Ke=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,qe=m.button`
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
`,Ze=m.h2`
  font-size: 18px;
  line-height: 1.33;
`,Xe=m.button`
  color: #8baeff;
`,Ge=m.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  margin-bottom: 232px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;    
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`,Je=m.div`
  display: flex;
  gap:12px;
  flex-direction: row;

`,Qe=m.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${N.tablet} {
    font-size: 24px;
  }
`,et=m.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px; 
  top: -90px;
  left: -170px;  
  background-color: var(--secondary-light-blue);
  border-radius: 10px;
  border-bottom-left-radius: 0;
  width: 200px;
  height: 80px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  &::after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 20px;
    top:100%;
    border-bottom: 35px solid transparent;
    border-right: 30px solid var(--secondary-light-blue);
    border-top: transparent;
  }

  @media ${N.tablet} 
  {
    top: -70px;
    left: 25px;
  
  &::before{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 100%;
    top:76%;
    border-top: 20px solid transparent;
    border-right: 30px solid var(--secondary-light-blue);
    border-bottom: transparent;
  }
  &::after{
    display: none;
  }
}
`,tt=m.span`
   color: var(--primary-blue);
   font-size: 18px;
`,nt=({message:r})=>t.jsx(t.Fragment,{children:t.jsx(et,{children:t.jsx(tt,{children:r})})}),rt=({onClose:r})=>{const s=G(Ne),{register:i,handleSubmit:e,watch:n,formState:{errors:a}}=Me({defaultValues:{weight:"",time:"",sex:s.gender||"woman",dailyNorma:""},mode:"onChange"}),l=ee(),u=h=>{const{dailyNorma:D}=h;l(Ee({dailyNorma:+D})),r()};let d;const j=Number(n("weight")),b=Number(n("time")),f=String(n("sex")),g=(h,D,O)=>O==="man"?String((h*.04+D*.6).toFixed(1))+"L":String((h*.03+D*.4).toFixed(1))+"L",R=(h,D)=>{if(h<20&&h!==0)return d=!0,"You couldn't be less than 20kg";if(D>24)return d=!0,"Day contains only 24H";if(D<0)return d=!0,"Time should be only positive integer"},y=g(j,b,f),C=R(j,b);return t.jsx(ze,{children:t.jsxs(Be,{onSubmit:e(u),children:[t.jsxs(Le,{children:[t.jsxs($e,{children:[t.jsxs("p",{children:["For girl:",t.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(Ue,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(He,{children:[t.jsx(ye,{children:"Calculate your rate:"}),t.jsxs(Ve,{children:[t.jsxs("label",{children:[t.jsx(we,{...i("sex"),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(we,{...i("sex"),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(le,{...i("weight"),type:"number",placeholder:"0"})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(le,{...i("time"),type:"number",placeholder:"0"})]}),t.jsxs(Ye,{children:[t.jsx(We,{children:"The required amount of water in liters per day:"}),t.jsx(se,{children:d?t.jsx(nt,{message:C}):y})]})]}),t.jsx(Ke,{children:t.jsxs(ce,{children:[t.jsx(ye,{children:"Write down how much water you will drink:"}),t.jsx(le,{...i("dailyNorma",{required:!0}),type:"number",step:"any",max:15,placeholder:"0"}),a.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(qe,{className:"btn",type:"submit",children:"Save"})]})})},at=()=>{const[r,s]=A.useState(!1),i=()=>{s(!r)},e=G(Ce);return t.jsx(t.Fragment,{children:t.jsxs(Ge,{children:[t.jsx(Ze,{children:"My daily norma"}),t.jsxs(Je,{children:[t.jsxs(Qe,{children:[e," L"]}),r&&t.jsx(Q,{setVisible:i,title:"My Daily Norma",daily:!0,children:t.jsx(rt,{onClose:i})}),t.jsx(Xe,{type:"button",onClick:i,children:"Edit"})]})]})})},it=m.div`
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
`,ot=m.li`
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
`,st=m.div`
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
`,ct=m.div`
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
`,ne=r=>r.water,De=te(ne,r=>r.amountDaily),lt=te(ne,r=>r.amountDaily.percentage);te(ne,r=>r.amountMonthly);const dt=te(ne,r=>r.isLoading),ut=te(ne,r=>r.error),ue=({title:r,show:s,closeModal:i,id:e})=>{const{register:n,handleSubmit:a,formState:{errors:l}}=Me(),u=ee(),[d,j]=A.useState({count:0,inputValue:"0"}),{entries:b}=G(De),f=b.find(x=>x._id===e),[g,R]=A.useState([]);A.useEffect(()=>{const x=new Date,P=x.getMinutes(),L=x.getHours()>=12?"PM":"AM",z=(x.getHours()%12||12).toString().padStart(2,"0"),E=P.toString().padStart(2,"0"),U=`${z}:${E} ${L}`,Z=x.getHours(),W=x.getMinutes();let o=Z,c=Math.ceil(W/5)*5;c>=60&&(o++,c-=60);const p=[];for(let v=o*60+c;v<24*60;v+=5){const k=(v%60).toString().padStart(2,"0"),w=Math.floor(v/60)<12?"AM":"PM",S=(Math.floor(v/60)%12||12).toString().padStart(2,"0");p.push(`${S}:${k} ${w}`)}R([U,...p])},[]);const y=x=>{d.count+x>=0&&j({inputValue:String(x),count:x})},C=x=>{const{value:P}=x.target;j(L=>({...L,inputValue:P}))},h=()=>{y(Number(d.inputValue))},D=x=>{x.key==="-"&&x.preventDefault()},O=x=>{const P={time:x.time,waterVolume:Number(d.inputValue)};u(s&&e?Te({...P,id:e}):_e(P)),i()};return t.jsxs(st,{children:[s&&t.jsxs("div",{className:"water-card",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[f==null?void 0:f.waterVolume," ml"]}),t.jsx("p",{className:"time",children:f==null?void 0:f.time})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>y(d.count-50),type:"button",children:t.jsx(q,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[d.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>y(d.count+50),type:"button",children:t.jsx(q,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:a(O),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:g.map(x=>t.jsx("option",{value:x,children:x},x))}),l.time&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:d.inputValue,onChange:C,onBlur:h,onKeyPress:D,className:"water-input"}),l.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[d.count,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},pt=({closeModal:r,_id:s})=>{const i=ee(),e=()=>{r()},n=a=>{i(Ie(a)),r()};return t.jsxs(ct,{children:[t.jsx("p",{children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:()=>n(s),children:"Delete"})]})]})},ht=({_id:r,waterVolume:s,time:i})=>{const[e,n]=A.useState(!1),[a,l]=A.useState(!1),u=ee(),d=j=>{u(Te(j))};return t.jsxs(ot,{children:[t.jsxs("div",{className:"water-info",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[s," ml"]}),t.jsx("p",{className:"time",children:i})]}),t.jsxs("div",{className:"edit-delete-btn-box",children:[t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>n(!0),children:t.jsx(q,{className:"edit-water-icon",id:"pencil"})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{l(!0)},children:t.jsx(q,{className:"delete-water-icon",id:"delete"})})]}),e&&t.jsx(Q,{setVisible:n,title:"Edit the entered amount of water",children:t.jsx(ue,{title:"Correct entered data:",show:!0,handleUpdateWater:d,closeModal:()=>{n(!1)},id:r})}),a&&t.jsx(Q,{setVisible:l,title:"Delete water",children:t.jsx(pt,{title:"Delete entry?",show:!1,closeModal:()=>{l(!1)},_id:r})})]})},ft=()=>{const[r,s]=A.useState(!1),{entries:i}=G(De),e=G(dt),n=G(ut),a=()=>{s(!1)};return t.jsxs(it,{children:[t.jsx("h3",{className:"water-title",children:"Today"}),e&&!n&&t.jsx(Fe,{}),i.length===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx("ul",{className:"water-list",children:i.length>0&&i.map(({_id:l,waterVolume:u,time:d})=>t.jsx(ht,{_id:l,waterVolume:u,time:d},l))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(Q,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:a})})]})},mt=m.div`
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
`,gt=m.ul`
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
`,Se=m.span`
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
`,xt=m.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,bt=m.div`
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
`,vt=m(Se)`
  border: #ff9d43 1px solid;
`,yt=()=>{const r=()=>new Date,[s,i]=A.useState(r()),[e,n]=A.useState(null),[a,l]=A.useState(!1),[u,d]=A.useState(null),j=A.useRef(null);Ae(j,()=>{a&&l(!1)});const b=h=>{const D=h.getFullYear(),O=h.getMonth(),x=new Date(D,O+1,0).getDate(),P=[];for(let L=1;L<=x;L++)P.push({day:L,month:h.toLocaleString("en-US",{month:"long"})});return P},f=()=>{i(h=>new Date(h.getFullYear(),h.getMonth()-1)),n(null)},g=()=>{const h=new Date(s.getFullYear(),s.getMonth()+1);h<=r()&&(i(h),n(null))},R=h=>{if(e===h.day){y(),n(null);return}const D=document.getElementById(`day-${h.day}`);if(!D){console.error(`Елемент з id 'day-${h.day}' не знайдено.`);return}const O=D.getBoundingClientRect(),x=292,P=188,L=window.innerWidth,z=window.innerHeight;let E=O.top-P-10,U=window.innerWidth<=768?window.innerWidth/2-x/2:O.left+O.width/2-x/2;E<0&&(E=0),E+P>z&&(E=z-P),U<0&&(U=0),U+x>L&&(U=L-x),n(h.day),d(h),document.documentElement.style.setProperty("--modal-top",`${E}px`),document.documentElement.style.setProperty("--modal-left",`${U}px`),l(!0)},y=()=>{l(!1)};A.useEffect(()=>{const h=D=>{D instanceof KeyboardEvent&&D.key==="Escape"&&y()};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[]);const C=()=>0;return t.jsxs(mt,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:f,children:"<"}),t.jsxs("div",{className:"month-title",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),s.getMonth()===new Date().getMonth()&&s.getFullYear()===new Date().getFullYear()?t.jsx("button",{className:"button disabled",disabled:!0,children:">"}):t.jsx("button",{className:"button",onClick:g,children:">"})]})]}),t.jsx(gt,{children:b(s).map(h=>t.jsxs("li",{id:`day-${h.day}`,className:"hover active",children:[C()<100?t.jsx(vt,{className:`day ${e===h.day?"selected":""}`,onClick:()=>R(h),children:h.day}):t.jsx(Se,{className:`day ${e===h.day?"selected":""}`,onClick:()=>R(h),children:h.day}),t.jsx("p",{className:`procent ${C()<100?"lowPercentage":""}`,children:`${C()}%`})]},h.day))}),t.jsx(xt,{ref:j,className:a?"open":"",children:t.jsxs(bt,{children:[t.jsx("button",{className:"close hover active",onClick:y,children:"×"}),t.jsx("h3",{className:"title-modal",children:`${u==null?void 0:u.day}, ${u==null?void 0:u.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:"1.5L"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"span-modal",children:"100%"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:"6"})]})]})})]})};var de={},pe={},he={},oe={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(oe);(function(r){var s=V&&V.__spreadArray||function(o,c,p){if(p||arguments.length===2)for(var v=0,k=c.length,w;v<k;v++)(w||!(v in c))&&(w||(w=Array.prototype.slice.call(c,0,v)),w[v]=c[v]);return o.concat(w||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var i=A,e=oe,n=function(o){var c=o.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=n;function a(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}r.isTouchEvent=a;function l(o,c,p){var v=(c-o)/p,k=8,w=Number(v.toFixed(k));return parseInt(w.toString(),10)===w}r.isStepDivisible=l;function u(o,c,p,v,k,w,S){var T=1e11;if(o=Math.round(o*T)/T,!w){var B=S[c-1],_=S[c+1];if(B&&B>o)return B;if(_&&_<o)return _}if(o>v)return v;if(o<p)return p;var H=Math.floor(o*T-p*T)%Math.floor(k*T),$=Math.floor(o*T-Math.abs(H)),Y=H===0?o:$/T,F=Math.abs(H/T)<k/2?Y:Y+k,K=(0,r.getStepDecimals)(k);return parseFloat(F.toFixed(K))}r.normalizeValue=u;function d(o,c,p){return(o-c)/(p-c)}r.relativeValue=d;function j(o){return o===e.Direction.Up||o===e.Direction.Down}r.isVertical=j;function b(o,c,p){if(c>=p)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(p,")"));if(o<c)throw new RangeError("value (".concat(o,") is smaller than min (").concat(c,")"));if(o>p)throw new RangeError("value (".concat(o,") is bigger than max (").concat(p,")"))}r.checkBoundaries=b;function f(o,c,p){return o<c?c:o>p?p:o}r.checkValuesAgainstBoundaries=f;function g(o){if(!(o.length<2)&&!o.slice(1).every(function(c,p){return o[p]<=c}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=g;function R(o){var c=window.getComputedStyle(o);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=R;function y(o){var c=window.getComputedStyle(o);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=y;function C(o,c,p){var v=p?-1:1;o.forEach(function(k,w){return D(k,v*c[w].x,c[w].y)})}r.translateThumbs=C;function h(o,c,p,v){for(var k=0,w=W(o[0],c,p,v),S=1;S<o.length;S++){var T=W(o[S],c,p,v);T<w&&(w=T,k=S)}return k}r.getClosestThumbIndex=h;function D(o,c,p){o.style.transform="translate(".concat(c,"px, ").concat(p,"px)")}r.translate=D;var O=function(o){var c=[],p=null,v=function(){for(var k=[],w=0;w<arguments.length;w++)k[w]=arguments[w];c=k,!p&&(p=requestAnimationFrame(function(){p=null,o.apply(void 0,c)}))};return v};r.schd=O;function x(o,c,p){var v=o.slice(0);return v[c]=p,v}r.replaceAt=x;function P(o){var c=o.values,p=o.colors,v=o.min,k=o.max,w=o.direction,S=w===void 0?e.Direction.Right:w,T=o.rtl,B=T===void 0?!1:T;B&&S===e.Direction.Right?S=e.Direction.Left:B&&e.Direction.Left&&(S=e.Direction.Right);var _=c.slice(0).sort(function($,Y){return $-Y}).map(function($){return($-v)/(k-v)*100}),H=_.reduce(function($,Y,F){return"".concat($,", ").concat(p[F]," ").concat(Y,"%, ").concat(p[F+1]," ").concat(Y,"%")},"");return"linear-gradient(".concat(S,", ").concat(p[0]," 0%").concat(H,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=P;function L(){}r.voidFn=L;function z(o){throw new Error("Didn't expect to get here")}r.assertUnreachable=z;var E=function(o,c,p,v,k){k===void 0&&(k=function(S){return S});var w=Math.ceil(s([o],Array.from(o.children),!0).reduce(function(S,T){var B=Math.ceil(T.getBoundingClientRect().width);if(T.innerText&&T.innerText.includes(p)&&T.childElementCount===0){var _=T.cloneNode(!0);_.innerHTML=k(c.toFixed(v)),_.style.visibility="hidden",document.body.appendChild(_),B=Math.ceil(_.getBoundingClientRect().width),document.body.removeChild(_)}return B>S?B:S},o.getBoundingClientRect().width));return w},U=function(o,c,p,v,k,w,S){S===void 0&&(S=function(_){return _});var T=[],B=function(_){var H=E(p[_],v[_],k,w,S),$=c[_].x;c.forEach(function(Y,F){var K=Y.x,X=E(p[F],v[F],k,w,S);_!==F&&($>=K&&$<=K+X||$+H>=K&&$+H<=K+X)&&(T.includes(F)||(T.push(_),T.push(F),T=s(s([],T,!0),[_,F],!1),B(F)))})};return B(o),Array.from(new Set(T.sort()))},Z=function(o,c,p,v,k,w){v===void 0&&(v=.1),k===void 0&&(k=" - "),w===void 0&&(w=function(F){return F});var S=(0,r.getStepDecimals)(v),T=(0,i.useState)({}),B=T[0],_=T[1],H=(0,i.useState)(w(c[p].toFixed(S))),$=H[0],Y=H[1];return(0,i.useEffect)(function(){if(o){var F=o.getThumbs();if(F.length<1)return;var K={},X=o.getOffsets(),re=U(p,X,F,c,k,S,w),fe=w(c[p].toFixed(S));if(re.length){var ae=re.reduce(function(J,xe,be,ve){return J.length?s(s([],J,!0),[X[ve[be]].x],!1):[X[ve[be]].x]},[]);if(Math.min.apply(Math,ae)===X[p].x){var me=[];re.forEach(function(J){me.push(c[J].toFixed(S))}),fe=Array.from(new Set(me.sort(function(J,xe){return parseFloat(J)-parseFloat(xe)}))).map(w).join(k);var Oe=Math.min.apply(Math,ae),ge=Math.max.apply(Math,ae),Re=F[re[ae.indexOf(ge)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Oe-(ge+Re))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Y(fe),_(K)}},[o,c]),[$,B]};r.useThumbOverlap=Z;function W(o,c,p,v){var k=o.getBoundingClientRect(),w=k.left,S=k.top,T=k.width,B=k.height;return j(v)?Math.abs(p-(S+B/2)):Math.abs(c-(w+T/2))}})(he);var wt=V&&V.__extends||function(){var r=function(s,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},r(s,i)};return function(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");r(s,i);function e(){this.constructor=s}s.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}(),jt=V&&V.__createBinding||(Object.create?function(r,s,i,e){e===void 0&&(e=i);var n=Object.getOwnPropertyDescriptor(s,i);(!n||("get"in n?!s.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,e,n)}:function(r,s,i,e){e===void 0&&(e=i),r[e]=s[i]}),kt=V&&V.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),Mt=V&&V.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var i in r)i!=="default"&&Object.prototype.hasOwnProperty.call(r,i)&&jt(s,r,i);return kt(s,r),s},je=V&&V.__spreadArray||function(r,s,i){if(i||arguments.length===2)for(var e=0,n=s.length,a;e<n;e++)(a||!(e in s))&&(a||(a=Array.prototype.slice.call(s,0,e)),a[e]=s[e]);return r.concat(a||Array.prototype.slice.call(s))};Object.defineProperty(pe,"__esModule",{value:!0});var ie=Mt(A),M=he,I=oe,Tt=["ArrowRight","ArrowUp","k","PageUp"],Dt=["ArrowLeft","ArrowDown","j","PageDown"],St=function(r){wt(s,r);function s(i){var e=r.call(this,i)||this;if(e.trackRef=ie.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,a){return a}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,a=n.direction,l=n.values,u=n.min,d=n.max,j=e.trackRef.current,b=j.getBoundingClientRect(),f=(0,M.getPaddingAndBorder)(j);return e.getThumbs().map(function(g,R){var y={x:0,y:0},C=g.getBoundingClientRect(),h=(0,M.getMargin)(g);switch(a){case I.Direction.Right:return y.x=(h.left+f.left)*-1,y.y=((C.height-b.height)/2+f.top)*-1,y.x+=b.width*(0,M.relativeValue)(l[R],u,d)-C.width/2,y;case I.Direction.Left:return y.x=(h.right+f.right)*-1,y.y=((C.height-b.height)/2+f.top)*-1,y.x+=b.width-b.width*(0,M.relativeValue)(l[R],u,d)-C.width/2,y;case I.Direction.Up:return y.x=((C.width-b.width)/2+h.left+f.left)*-1,y.y=-f.left,y.y+=b.height-b.height*(0,M.relativeValue)(l[R],u,d)-C.height/2,y;case I.Direction.Down:return y.x=((C.width-b.width)/2+h.left+f.left)*-1,y.y=-f.left,y.y+=b.height*(0,M.relativeValue)(l[R],u,d)-C.height/2,y;default:return(0,M.assertUnreachable)(a)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(a){return a===n.target||a.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var a;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(u){var d;return(d=u.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var l=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(u){return u.current}),n.clientX,n.clientY,e.props.direction);(a=e.thumbRefs[l].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,M.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var a;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(u){var d;return(d=u.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var l=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(u){return u.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(a=e.thumbRefs[l].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var a=(0,M.isTouchEvent)(n);if(!(!a&&n.button!==0)){var l=e.getTargetIndex(n);l!==-1&&(a?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:l,thumbZIndexes:e.state.thumbZIndexes.map(function(u,d){return d===l?Math.max.apply(Math,e.state.thumbZIndexes):u<=e.state.thumbZIndexes[l]?u:u-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var a=e.props,l=a.values,u=a.onChange,d=a.step,j=a.rtl,b=a.direction,f=e.state.isChanged,g=e.getTargetIndex(n.nativeEvent),R=j||b===I.Direction.Left||b===I.Direction.Down?-1:1;g!==-1&&(Tt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),u((0,M.replaceAt)(l,g,e.normalizeValue(l[g]+R*(n.key==="PageUp"?d*10:d),g)))):Dt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),u((0,M.replaceAt)(l,g,e.normalizeValue(l[g]-R*(n.key==="PageDown"?d*10:d),g)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){f&&e.fireOnFinalChange()}):f&&e.fireOnFinalChange())},e.onKeyUp=function(n){var a=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){a&&e.fireOnFinalChange()})},e.onMove=function(n,a){var l=e.state,u=l.draggedThumbIndex,d=l.draggedTrackPos,j=e.props,b=j.direction,f=j.min,g=j.max,R=j.onChange,y=j.values,C=j.step,h=j.rtl;if(u===-1&&d[0]===-1&&d[1]===-1)return null;var D=e.trackRef.current;if(!D)return null;var O=D.getBoundingClientRect(),x=(0,M.isVertical)(b)?O.height:O.width;if(d[0]!==-1&&d[1]!==-1){var P=n-d[0],L=a-d[1],z=0;switch(b){case I.Direction.Right:case I.Direction.Left:z=P/x*(g-f);break;case I.Direction.Down:case I.Direction.Up:z=L/x*(g-f);break;default:(0,M.assertUnreachable)(b)}if(h&&(z*=-1),Math.abs(z)>=C/2){for(var E=0;E<e.thumbRefs.length;E++){if(y[E]===g&&Math.sign(z)===1||y[E]===f&&Math.sign(z)===-1)return;var U=y[E]+z;U>g?z=g-y[E]:U<f&&(z=f-y[E])}for(var Z=y.slice(0),E=0;E<e.thumbRefs.length;E++)Z=(0,M.replaceAt)(Z,E,e.normalizeValue(y[E]+z,E));e.setState({draggedTrackPos:[n,a]}),R(Z)}}else{var W=0;switch(b){case I.Direction.Right:W=(n-O.left)/x*(g-f)+f;break;case I.Direction.Left:W=(x-(n-O.left))/x*(g-f)+f;break;case I.Direction.Down:W=(a-O.top)/x*(g-f)+f;break;case I.Direction.Up:W=(x-(a-O.top))/x*(g-f)+f;break;default:(0,M.assertUnreachable)(b)}h&&(W=g+f-W),Math.abs(y[u]-W)>=C/2&&R((0,M.replaceAt)(y,u,e.normalizeValue(W,u)))}},e.normalizeValue=function(n,a){var l=e.props,u=l.min,d=l.max,j=l.step,b=l.allowOverlap,f=l.values;return(0,M.normalizeValue)(n,a,u,d,j,b,f)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,a=n.onFinalChange,l=n.values;a&&a(l)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var a=0;a<e.numOfMarks+1;a++)e.markRefs[a]=ie.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),a=parseInt(n.width,10),l=parseInt(n.height,10),u=parseInt(n.paddingLeft,10),d=parseInt(n.paddingTop,10),j=[],b=0;b<e.numOfMarks+1;b++){var f=9999,g=9999;if(e.markRefs[b].current){var R=e.markRefs[b].current.getBoundingClientRect();f=R.height,g=R.width}e.props.direction===I.Direction.Left||e.props.direction===I.Direction.Right?j.push([Math.round(a/e.numOfMarks*b+u-g/2),-Math.round((f-l)/2)]):j.push([Math.round(l/e.numOfMarks*b+d-f/2),-Math.round((g-a)/2)])}e.setState({markOffsets:j})}},i.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,M.schd)(e.onMouseMove),e.schdOnTouchMove=(0,M.schd)(e.onTouchMove),e.schdOnEnd=(0,M.schd)(e.onEnd),e.thumbRefs=i.values.map(function(){return ie.createRef()}),e.updateMarkRefs(i),e}return s.prototype.componentDidMount=function(){var i=this,e=this.props,n=e.values,a=e.min,l=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",i.onResize)},unobserve:function(){return window.removeEventListener("resize",i.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,M.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(u){return(0,M.checkBoundaries)(u,i.props.min,i.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(u){(0,M.isStepDivisible)(a,u,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(i,e){var n=this.props,a=n.max,l=n.min,u=n.step,d=n.values,j=n.rtl;(i.max!==a||i.min!==l||i.step!==u)&&this.updateMarkRefs(this.props),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),j),(i.max!==a||i.min!==l||i.step!==u||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),d.forEach(function(b){(0,M.isStepDivisible)(l,b,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var i={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,i),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var i=this,e=this.props,n=e.renderTrack,a=e.renderThumb,l=e.renderMark,u=l===void 0?function(){return null}:l,d=e.values,j=e.min,b=e.max,f=e.allowOverlap,g=e.disabled,R=this.state,y=R.draggedThumbIndex,C=R.thumbZIndexes,h=R.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:y>-1?"grabbing":this.props.draggableTrack?(0,M.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!g?"pointer":"inherit"},onMouseDown:g?M.voidFn:this.onMouseDownTrack,onTouchStart:g?M.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:je(je([],h.map(function(D,O,x){return u({props:{style:i.props.direction===I.Direction.Left||i.props.direction===I.Direction.Right?{position:"absolute",left:"".concat(D[0],"px"),marginTop:"".concat(D[1],"px")}:{position:"absolute",top:"".concat(D[0],"px"),marginLeft:"".concat(D[1],"px")},key:"mark".concat(O),ref:i.markRefs[O]},index:O})}),!0),d.map(function(D,O){var x=i.state.draggedThumbIndex===O;return a({index:O,value:D,isDragged:x,props:{style:{position:"absolute",zIndex:C[O],cursor:g?"inherit":x?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:O,tabIndex:g?void 0:0,"aria-valuemax":f?b:d[O+1]||b,"aria-valuemin":f?j:d[O-1]||j,"aria-valuenow":D,draggable:!1,ref:i.thumbRefs[O],role:"slider",onKeyDown:g?M.voidFn:i.onKeyDown,onKeyUp:g?M.voidFn:i.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:I.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ie.Component);pe.default=St;(function(r){var s=V&&V.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var i=s(pe);r.Range=i.default;var e=he;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=oe;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(de);const Ot=m.div`
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
`,Rt=m.div`
  @media ${N.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${N.desktop} {
    display: flex;
    gap: 24px;
  }
`,Nt=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Et=m.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${N.tablet} {
    padding-bottom: 16px;
  }
`,Ct=m.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${N.tablet} {
    width: 325px;
  }
  @media ${N.desktop} {
    width: 360px;
  }
`,_t=m.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,It=m.div`
  position: relative;
  top: 24px;
`,Ft=m.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,At=m.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,ke=m.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Pt=m.div`
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
`,zt=m.button`
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
`,Bt=()=>{const[r,s]=A.useState(!1),i=G(lt),e=i>100?100:i,n=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Ot,{children:t.jsxs(Rt,{children:[t.jsxs("div",{children:[t.jsx(Et,{children:"Today"}),t.jsx(Nt,{children:t.jsx(de.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:a,children:l})=>t.jsx(Ct,{...a,style:{...a.style,background:de.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:l}),renderThumb:({props:a})=>A.createElement(_t,{...a,key:a.key},t.jsx(It,{children:t.jsxs(Ft,{children:[e,"%"]})}))})}),t.jsxs(At,{children:[e<=7?t.jsx("span",{children:" "}):t.jsx(ke,{children:"0%"}),e>=85?t.jsx("span",{children:" "}):t.jsx(ke,{children:"100%"})]})]}),t.jsx(Pt,{className:"hover",children:t.jsxs(zt,{className:"btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),r&&t.jsx(Q,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:n})})]})},Lt="/agua_vivo_app/assets/BackgroundHomeMobile--bJS4c7V.png",$t="/agua_vivo_app/assets/BottleHomeMobile-YibEMZyu.png",Vt=m.section`
    background-image: url("${Lt}");    
    background-repeat: no-repeat;  
    object-fit: cover;
    background-position-x: 50px;
    background-position-y: 100px;

`,Wt=m.div`
    background-image: url("${$t}");
    background-repeat: no-repeat;  
    object-fit: contain;
    background-position-y: 90px;
 
`,Ht=()=>{const r=ee();return A.useEffect(()=>{r(Pe())},[r]),t.jsx(Vt,{children:t.jsxs("div",{className:"container",children:[t.jsxs(Wt,{children:[t.jsx(at,{}),t.jsx(Bt,{})]}),t.jsxs("div",{className:"container-calendar",children:[t.jsx(ft,{}),t.jsx(yt,{})]})]})})};export{Ht as default};
