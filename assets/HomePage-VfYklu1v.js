import{u as f,d as T,j as t,a as G,s as Ee,b as Me,c as ee,e as _e,r as F,f as Ce,M as Q,g as te,I as q,h as Te,i as Ie,k as $e,L as Be,l as Fe,m as V,n as Pe}from"./index-TJZge2T2.js";const Ae=f.div``,ze=f.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,Le=f.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ve=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${T.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,We=f.div`
  display: flex;
  gap: 24px;
`,se=f.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,Ue=f.span`
  width: 190px;
  @media ${T.tablet} {
    width: auto;
  }
`,He=f.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Ye=f.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,ye=f.h3`
  font-size: 18px;
  font-weight: bold;
`,ce=f.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ke=f.label`
  display: flex;
  gap: 5px;
`,we=f.input`
  margin-right: 5px;
`,le=f.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,qe=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ze=f.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${T.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,Xe=f.h2`
  font-size: 18px;
  line-height: 1.33;
`,Ge=f.button`
  color: #8baeff;
`,Je=f.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  @media ${T.tablet} {
    margin-bottom: 326px;
  }
  @media ${T.desktop} {
    margin-bottom: 350px;
  }
`,Qe=f.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,et=f.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${T.tablet} {
    font-size: 24px;
  }
`,tt=f.span`
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
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 20px;
    top: 100%;
    border-bottom: 35px solid transparent;
    border-right: 30px solid var(--secondary-light-blue);
    border-top: transparent;
  }

  @media ${T.tablet} {
    top: -70px;
    left: 25px;

    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      right: 100%;
      top: 76%;
      border-top: 20px solid transparent;
      border-right: 30px solid var(--secondary-light-blue);
      border-bottom: transparent;
    }
    &::after {
      display: none;
    }
  }
`,nt=f.span`
  color: var(--primary-blue);
  font-size: 18px;
`,rt=({message:r})=>t.jsx(t.Fragment,{children:t.jsx(tt,{children:t.jsx(nt,{children:r})})}),at=({onClose:r})=>{const s=G(Ee),{register:i,handleSubmit:e,watch:n,formState:{errors:a}}=Me({defaultValues:{weight:"",time:"",sex:s.gender||"woman",dailyNorma:""},mode:"onChange"}),l=ee(),u=h=>{const{dailyNorma:S}=h;l(_e({dailyNorma:+S})),r()};let d;const k=Number(n("weight")),g=Number(n("time")),m=String(n("sex")),x=(h,S,R)=>R==="man"?String((h*.04+S*.6).toFixed(1))+"L":String((h*.03+S*.4).toFixed(1))+"L",N=(h,S)=>{if(h<20&&h!==0)return d=!0,"You couldn't be less than 20kg";if(S>24)return d=!0,"Day contains only 24H";if(S<0)return d=!0,"Time should be only positive integer"},y=x(k,g,m),_=N(k,g);return t.jsx(Ae,{children:t.jsxs(ze,{onSubmit:e(u),children:[t.jsxs(Le,{children:[t.jsxs(Ve,{children:[t.jsxs("p",{children:["For girl:",t.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(He,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Ye,{children:[t.jsx(ye,{children:"Calculate your rate:"}),t.jsxs(We,{children:[t.jsxs("label",{children:[t.jsx(we,{...i("sex"),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(we,{...i("sex"),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(le,{...i("weight"),type:"number",placeholder:"0"})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(le,{...i("time"),type:"number",placeholder:"0"})]}),t.jsxs(Ke,{children:[t.jsx(Ue,{children:"The required amount of water in liters per day:"}),t.jsx(se,{children:d?t.jsx(rt,{message:_}):y})]})]}),t.jsx(qe,{children:t.jsxs(ce,{children:[t.jsx(ye,{children:"Write down how much water you will drink:"}),t.jsx(le,{...i("dailyNorma",{required:!0}),type:"number",step:"any",max:15,placeholder:"0"}),a.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(Ze,{className:"btn",type:"submit",children:"Save"})]})})},it=()=>{const[r,s]=F.useState(!1),i=()=>{s(!r)},e=G(Ce);return t.jsx(t.Fragment,{children:t.jsxs(Je,{children:[t.jsx(Xe,{children:"My daily norma"}),t.jsxs(Qe,{children:[t.jsxs(et,{children:[e," L"]}),r&&t.jsx(Q,{setVisible:i,title:"My Daily Norma",daily:!0,children:t.jsx(at,{onClose:i})}),t.jsx(Ge,{type:"button",onClick:i,children:"Edit"})]})]})})},ot=f.div`
  max-height: 260px;

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
    margin-bottom: 12px;

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

  @media ${T.tablet} {
    .water-title {
      margin-bottom: 16px;
    }
  }
`,st=f.li`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  padding: 12px 10px 12px 0;

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

  @media ${T.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
  }
`,ct=f.div`
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

  @media ${T.tablet} {
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

  @media ${T.desktop} {
  }
`,lt=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  .delete-title {
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    /* width: 207px; */
  }

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

  @media ${T.tablet} {
    .delete-btn-box {
      display: flex;
      flex-direction: row;
      gap: 24px;
      justify-content: end;
    }
  }
`,ne=r=>r.water,De=te(ne,r=>r.amountDaily),dt=te(ne,r=>r.amountDaily.percentage);te(ne,r=>r.amountMonthly);const ut=te(ne,r=>r.isLoading),pt=te(ne,r=>r.error),ue=({title:r,show:s,closeModal:i,id:e})=>{const{register:n,handleSubmit:a,formState:{errors:l}}=Me(),u=ee(),[d,k]=F.useState({count:0,inputValue:"0"}),{entries:g}=G(De),m=g.find(b=>b._id===e),[x,N]=F.useState([]);F.useEffect(()=>{const b=new Date,$=b.getMinutes(),z=b.getHours()>=12?"PM":"AM",P=(b.getHours()%12||12).toString().padStart(2,"0"),E=$.toString().padStart(2,"0"),U=`${P}:${E} ${z}`,Z=b.getHours(),W=b.getMinutes();let o=Z,c=Math.ceil(W/5)*5;c>=60&&(o++,c-=60);const p=[];for(let v=o*60+c;v<24*60;v+=5){const j=(v%60).toString().padStart(2,"0"),w=Math.floor(v/60)<12?"AM":"PM",O=(Math.floor(v/60)%12||12).toString().padStart(2,"0");p.push(`${O}:${j} ${w}`)}N([U,...p])},[]);const y=b=>{d.count+b>=0&&k({inputValue:String(b),count:b})},_=b=>{const{value:$}=b.target;k(z=>({...z,inputValue:$}))},h=()=>{y(Number(d.inputValue))},S=b=>{b.key==="-"&&b.preventDefault()},R=b=>{const $={time:b.time,waterVolume:Number(d.inputValue)};$.waterVolume===0?alert("Кількість води не може бути 0!"):u(s&&e?Te({...$,id:e}):Ie($)),i()};return t.jsxs(ct,{children:[s&&t.jsxs("div",{className:"water-card",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[m==null?void 0:m.waterVolume," ml"]}),t.jsx("p",{className:"time",children:m==null?void 0:m.time})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>y(d.count-50),type:"button",children:t.jsx(q,{className:"icon-minus",id:"minus"})}),t.jsx("span",{className:"water-amount-span",children:s?g.length>0?g[g.length-1].waterVolume+"ml":"0ml":`${d.count}ml`}),t.jsx("button",{className:"counter-btn",onClick:()=>y(d.count+50),type:"button",children:t.jsx(q,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:a(R),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:x.map(b=>t.jsx("option",{value:b,children:b},b))}),l.time&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:d.inputValue,onChange:_,onBlur:h,onKeyPress:S,className:"water-input"}),l.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[d.count,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},ht=({closeModal:r,_id:s})=>{const i=ee(),e=()=>{r()},n=a=>{i($e(a)),r()};return t.jsxs(lt,{children:[t.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:()=>n(s),children:"Delete"})]})]})},mt=({_id:r,waterVolume:s,time:i})=>{const[e,n]=F.useState(!1),[a,l]=F.useState(!1),u=ee(),d=k=>{u(Te(k))};return t.jsxs(st,{children:[t.jsxs("div",{className:"water-info",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[s," ml"]}),t.jsx("p",{className:"time",children:i})]}),t.jsxs("div",{className:"edit-delete-btn-box",children:[t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>n(!0),children:t.jsx(q,{className:"edit-water-icon",id:"pencil"})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{l(!0)},children:t.jsx(q,{className:"delete-water-icon",id:"delete"})})]}),e&&t.jsx(Q,{setVisible:n,title:"Edit the entered amount of water",children:t.jsx(ue,{title:"Correct entered data:",show:!0,handleUpdateWater:d,closeModal:()=>{n(!1)},id:r})}),a&&t.jsx(Q,{setVisible:l,title:"Delete water",children:t.jsx(ht,{title:"Delete entry?",show:!1,closeModal:()=>{l(!1)},_id:r})})]})},ft=()=>{const[r,s]=F.useState(!1),{entries:i}=G(De),e=G(ut),n=G(pt),a=()=>{s(!1)};return t.jsxs(ot,{children:[t.jsx("h3",{className:"water-title",children:"Today"}),e&&!n&&t.jsx(Be,{}),i.length===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx("ul",{className:"water-list",children:i.length>0&&i.map(({_id:l,waterVolume:u,time:d})=>t.jsx(mt,{_id:l,waterVolume:u,time:d},l))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(Q,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:a})})]})},gt=f.div`
            /* position: absolute;
            bottom: 0;
            right: 0; */

  width: 264;
  height: 500px;
  background-color: #ecf2ff;

  @media ${T.tablet} {
    width: 646px;
    height: 315px;
  }
  @media ${T.desktop} {

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
`,xt=f.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  gap: 16px 26px;

  @media ${T.tablet} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }
  @media ${T.desktop} {
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
`,Se=f.span`
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
`,bt=f.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,vt=f.div`
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
`,yt=f(Se)`
  border: #ff9d43 1px solid;
`,wt=()=>{const r=()=>new Date,[s,i]=F.useState(r()),[e,n]=F.useState(null),[a,l]=F.useState(!1),[u,d]=F.useState(null),k=F.useRef(null);Fe(k,()=>{a&&l(!1)});const g=h=>{const S=h.getFullYear(),R=h.getMonth(),b=new Date(S,R+1,0).getDate(),$=[];for(let z=1;z<=b;z++)$.push({day:z,month:h.toLocaleString("en-US",{month:"long"})});return $},m=()=>{i(h=>new Date(h.getFullYear(),h.getMonth()-1)),n(null)},x=()=>{const h=new Date(s.getFullYear(),s.getMonth()+1);h<=r()&&(i(h),n(null))},N=h=>{if(e===h.day){y(),n(null);return}const S=document.getElementById(`day-${h.day}`);if(!S){console.error(`Елемент з id 'day-${h.day}' не знайдено.`);return}const R=S.getBoundingClientRect(),b=292,$=188,z=window.innerWidth,P=window.innerHeight;let E=R.top-$-10,U=window.innerWidth<=768?window.innerWidth/2-b/2:R.left+R.width/2-b/2;E<0&&(E=0),E+$>P&&(E=P-$),U<0&&(U=0),U+b>z&&(U=z-b),n(h.day),d(h),document.documentElement.style.setProperty("--modal-top",`${E}px`),document.documentElement.style.setProperty("--modal-left",`${U}px`),l(!0)},y=()=>{l(!1)};F.useEffect(()=>{const h=S=>{S instanceof KeyboardEvent&&S.key==="Escape"&&y()};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[]);const _=()=>0;return t.jsxs(gt,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:m,children:"<"}),t.jsxs("div",{className:"month-title",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),s.getMonth()===new Date().getMonth()&&s.getFullYear()===new Date().getFullYear()?t.jsx("button",{className:"button disabled",disabled:!0,children:">"}):t.jsx("button",{className:"button",onClick:x,children:">"})]})]}),t.jsx(xt,{children:g(s).map(h=>t.jsxs("li",{id:`day-${h.day}`,className:"hover active",children:[_()<100?t.jsx(yt,{className:`day ${e===h.day?"selected":""}`,onClick:()=>N(h),children:h.day}):t.jsx(Se,{className:`day ${e===h.day?"selected":""}`,onClick:()=>N(h),children:h.day}),t.jsx("p",{className:`procent ${_()<100?"lowPercentage":""}`,children:`${_()}%`})]},h.day))}),t.jsx(bt,{ref:k,className:a?"open":"",children:t.jsxs(vt,{children:[t.jsx("button",{className:"close hover active",onClick:y,children:"×"}),t.jsx("h3",{className:"title-modal",children:`${u==null?void 0:u.day}, ${u==null?void 0:u.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:"1.5L"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"span-modal",children:"100%"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:"6"})]})]})})]})};var de={},pe={},he={},oe={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(oe);(function(r){var s=V&&V.__spreadArray||function(o,c,p){if(p||arguments.length===2)for(var v=0,j=c.length,w;v<j;v++)(w||!(v in c))&&(w||(w=Array.prototype.slice.call(c,0,v)),w[v]=c[v]);return o.concat(w||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var i=F,e=oe,n=function(o){var c=o.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=n;function a(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}r.isTouchEvent=a;function l(o,c,p){var v=(c-o)/p,j=8,w=Number(v.toFixed(j));return parseInt(w.toString(),10)===w}r.isStepDivisible=l;function u(o,c,p,v,j,w,O){var D=1e11;if(o=Math.round(o*D)/D,!w){var A=O[c-1],C=O[c+1];if(A&&A>o)return A;if(C&&C<o)return C}if(o>v)return v;if(o<p)return p;var H=Math.floor(o*D-p*D)%Math.floor(j*D),L=Math.floor(o*D-Math.abs(H)),Y=H===0?o:L/D,B=Math.abs(H/D)<j/2?Y:Y+j,K=(0,r.getStepDecimals)(j);return parseFloat(B.toFixed(K))}r.normalizeValue=u;function d(o,c,p){return(o-c)/(p-c)}r.relativeValue=d;function k(o){return o===e.Direction.Up||o===e.Direction.Down}r.isVertical=k;function g(o,c,p){if(c>=p)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(p,")"));if(o<c)throw new RangeError("value (".concat(o,") is smaller than min (").concat(c,")"));if(o>p)throw new RangeError("value (".concat(o,") is bigger than max (").concat(p,")"))}r.checkBoundaries=g;function m(o,c,p){return o<c?c:o>p?p:o}r.checkValuesAgainstBoundaries=m;function x(o){if(!(o.length<2)&&!o.slice(1).every(function(c,p){return o[p]<=c}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=x;function N(o){var c=window.getComputedStyle(o);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=N;function y(o){var c=window.getComputedStyle(o);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=y;function _(o,c,p){var v=p?-1:1;o.forEach(function(j,w){return S(j,v*c[w].x,c[w].y)})}r.translateThumbs=_;function h(o,c,p,v){for(var j=0,w=W(o[0],c,p,v),O=1;O<o.length;O++){var D=W(o[O],c,p,v);D<w&&(w=D,j=O)}return j}r.getClosestThumbIndex=h;function S(o,c,p){o.style.transform="translate(".concat(c,"px, ").concat(p,"px)")}r.translate=S;var R=function(o){var c=[],p=null,v=function(){for(var j=[],w=0;w<arguments.length;w++)j[w]=arguments[w];c=j,!p&&(p=requestAnimationFrame(function(){p=null,o.apply(void 0,c)}))};return v};r.schd=R;function b(o,c,p){var v=o.slice(0);return v[c]=p,v}r.replaceAt=b;function $(o){var c=o.values,p=o.colors,v=o.min,j=o.max,w=o.direction,O=w===void 0?e.Direction.Right:w,D=o.rtl,A=D===void 0?!1:D;A&&O===e.Direction.Right?O=e.Direction.Left:A&&e.Direction.Left&&(O=e.Direction.Right);var C=c.slice(0).sort(function(L,Y){return L-Y}).map(function(L){return(L-v)/(j-v)*100}),H=C.reduce(function(L,Y,B){return"".concat(L,", ").concat(p[B]," ").concat(Y,"%, ").concat(p[B+1]," ").concat(Y,"%")},"");return"linear-gradient(".concat(O,", ").concat(p[0]," 0%").concat(H,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=$;function z(){}r.voidFn=z;function P(o){throw new Error("Didn't expect to get here")}r.assertUnreachable=P;var E=function(o,c,p,v,j){j===void 0&&(j=function(O){return O});var w=Math.ceil(s([o],Array.from(o.children),!0).reduce(function(O,D){var A=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(p)&&D.childElementCount===0){var C=D.cloneNode(!0);C.innerHTML=j(c.toFixed(v)),C.style.visibility="hidden",document.body.appendChild(C),A=Math.ceil(C.getBoundingClientRect().width),document.body.removeChild(C)}return A>O?A:O},o.getBoundingClientRect().width));return w},U=function(o,c,p,v,j,w,O){O===void 0&&(O=function(C){return C});var D=[],A=function(C){var H=E(p[C],v[C],j,w,O),L=c[C].x;c.forEach(function(Y,B){var K=Y.x,X=E(p[B],v[B],j,w,O);C!==B&&(L>=K&&L<=K+X||L+H>=K&&L+H<=K+X)&&(D.includes(B)||(D.push(C),D.push(B),D=s(s([],D,!0),[C,B],!1),A(B)))})};return A(o),Array.from(new Set(D.sort()))},Z=function(o,c,p,v,j,w){v===void 0&&(v=.1),j===void 0&&(j=" - "),w===void 0&&(w=function(B){return B});var O=(0,r.getStepDecimals)(v),D=(0,i.useState)({}),A=D[0],C=D[1],H=(0,i.useState)(w(c[p].toFixed(O))),L=H[0],Y=H[1];return(0,i.useEffect)(function(){if(o){var B=o.getThumbs();if(B.length<1)return;var K={},X=o.getOffsets(),re=U(p,X,B,c,j,O,w),me=w(c[p].toFixed(O));if(re.length){var ae=re.reduce(function(J,xe,be,ve){return J.length?s(s([],J,!0),[X[ve[be]].x],!1):[X[ve[be]].x]},[]);if(Math.min.apply(Math,ae)===X[p].x){var fe=[];re.forEach(function(J){fe.push(c[J].toFixed(O))}),me=Array.from(new Set(fe.sort(function(J,xe){return parseFloat(J)-parseFloat(xe)}))).map(w).join(j);var Re=Math.min.apply(Math,ae),ge=Math.max.apply(Math,ae),Ne=B[re[ae.indexOf(ge)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Re-(ge+Ne))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Y(me),C(K)}},[o,c]),[L,A]};r.useThumbOverlap=Z;function W(o,c,p,v){var j=o.getBoundingClientRect(),w=j.left,O=j.top,D=j.width,A=j.height;return k(v)?Math.abs(p-(O+A/2)):Math.abs(c-(w+D/2))}})(he);var kt=V&&V.__extends||function(){var r=function(s,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},r(s,i)};return function(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");r(s,i);function e(){this.constructor=s}s.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}(),jt=V&&V.__createBinding||(Object.create?function(r,s,i,e){e===void 0&&(e=i);var n=Object.getOwnPropertyDescriptor(s,i);(!n||("get"in n?!s.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,e,n)}:function(r,s,i,e){e===void 0&&(e=i),r[e]=s[i]}),Mt=V&&V.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),Tt=V&&V.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var i in r)i!=="default"&&Object.prototype.hasOwnProperty.call(r,i)&&jt(s,r,i);return Mt(s,r),s},ke=V&&V.__spreadArray||function(r,s,i){if(i||arguments.length===2)for(var e=0,n=s.length,a;e<n;e++)(a||!(e in s))&&(a||(a=Array.prototype.slice.call(s,0,e)),a[e]=s[e]);return r.concat(a||Array.prototype.slice.call(s))};Object.defineProperty(pe,"__esModule",{value:!0});var ie=Tt(F),M=he,I=oe,Dt=["ArrowRight","ArrowUp","k","PageUp"],St=["ArrowLeft","ArrowDown","j","PageDown"],Ot=function(r){kt(s,r);function s(i){var e=r.call(this,i)||this;if(e.trackRef=ie.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,a){return a}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,a=n.direction,l=n.values,u=n.min,d=n.max,k=e.trackRef.current,g=k.getBoundingClientRect(),m=(0,M.getPaddingAndBorder)(k);return e.getThumbs().map(function(x,N){var y={x:0,y:0},_=x.getBoundingClientRect(),h=(0,M.getMargin)(x);switch(a){case I.Direction.Right:return y.x=(h.left+m.left)*-1,y.y=((_.height-g.height)/2+m.top)*-1,y.x+=g.width*(0,M.relativeValue)(l[N],u,d)-_.width/2,y;case I.Direction.Left:return y.x=(h.right+m.right)*-1,y.y=((_.height-g.height)/2+m.top)*-1,y.x+=g.width-g.width*(0,M.relativeValue)(l[N],u,d)-_.width/2,y;case I.Direction.Up:return y.x=((_.width-g.width)/2+h.left+m.left)*-1,y.y=-m.left,y.y+=g.height-g.height*(0,M.relativeValue)(l[N],u,d)-_.height/2,y;case I.Direction.Down:return y.x=((_.width-g.width)/2+h.left+m.left)*-1,y.y=-m.left,y.y+=g.height*(0,M.relativeValue)(l[N],u,d)-_.height/2,y;default:return(0,M.assertUnreachable)(a)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(a){return a===n.target||a.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var a;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(u){var d;return(d=u.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var l=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(u){return u.current}),n.clientX,n.clientY,e.props.direction);(a=e.thumbRefs[l].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,M.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var a;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(u){var d;return(d=u.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var l=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(u){return u.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(a=e.thumbRefs[l].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var a=(0,M.isTouchEvent)(n);if(!(!a&&n.button!==0)){var l=e.getTargetIndex(n);l!==-1&&(a?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:l,thumbZIndexes:e.state.thumbZIndexes.map(function(u,d){return d===l?Math.max.apply(Math,e.state.thumbZIndexes):u<=e.state.thumbZIndexes[l]?u:u-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var a=e.props,l=a.values,u=a.onChange,d=a.step,k=a.rtl,g=a.direction,m=e.state.isChanged,x=e.getTargetIndex(n.nativeEvent),N=k||g===I.Direction.Left||g===I.Direction.Down?-1:1;x!==-1&&(Dt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:x,isChanged:!0}),u((0,M.replaceAt)(l,x,e.normalizeValue(l[x]+N*(n.key==="PageUp"?d*10:d),x)))):St.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:x,isChanged:!0}),u((0,M.replaceAt)(l,x,e.normalizeValue(l[x]-N*(n.key==="PageDown"?d*10:d),x)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){m&&e.fireOnFinalChange()}):m&&e.fireOnFinalChange())},e.onKeyUp=function(n){var a=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){a&&e.fireOnFinalChange()})},e.onMove=function(n,a){var l=e.state,u=l.draggedThumbIndex,d=l.draggedTrackPos,k=e.props,g=k.direction,m=k.min,x=k.max,N=k.onChange,y=k.values,_=k.step,h=k.rtl;if(u===-1&&d[0]===-1&&d[1]===-1)return null;var S=e.trackRef.current;if(!S)return null;var R=S.getBoundingClientRect(),b=(0,M.isVertical)(g)?R.height:R.width;if(d[0]!==-1&&d[1]!==-1){var $=n-d[0],z=a-d[1],P=0;switch(g){case I.Direction.Right:case I.Direction.Left:P=$/b*(x-m);break;case I.Direction.Down:case I.Direction.Up:P=z/b*(x-m);break;default:(0,M.assertUnreachable)(g)}if(h&&(P*=-1),Math.abs(P)>=_/2){for(var E=0;E<e.thumbRefs.length;E++){if(y[E]===x&&Math.sign(P)===1||y[E]===m&&Math.sign(P)===-1)return;var U=y[E]+P;U>x?P=x-y[E]:U<m&&(P=m-y[E])}for(var Z=y.slice(0),E=0;E<e.thumbRefs.length;E++)Z=(0,M.replaceAt)(Z,E,e.normalizeValue(y[E]+P,E));e.setState({draggedTrackPos:[n,a]}),N(Z)}}else{var W=0;switch(g){case I.Direction.Right:W=(n-R.left)/b*(x-m)+m;break;case I.Direction.Left:W=(b-(n-R.left))/b*(x-m)+m;break;case I.Direction.Down:W=(a-R.top)/b*(x-m)+m;break;case I.Direction.Up:W=(b-(a-R.top))/b*(x-m)+m;break;default:(0,M.assertUnreachable)(g)}h&&(W=x+m-W),Math.abs(y[u]-W)>=_/2&&N((0,M.replaceAt)(y,u,e.normalizeValue(W,u)))}},e.normalizeValue=function(n,a){var l=e.props,u=l.min,d=l.max,k=l.step,g=l.allowOverlap,m=l.values;return(0,M.normalizeValue)(n,a,u,d,k,g,m)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,a=n.onFinalChange,l=n.values;a&&a(l)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var a=0;a<e.numOfMarks+1;a++)e.markRefs[a]=ie.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),a=parseInt(n.width,10),l=parseInt(n.height,10),u=parseInt(n.paddingLeft,10),d=parseInt(n.paddingTop,10),k=[],g=0;g<e.numOfMarks+1;g++){var m=9999,x=9999;if(e.markRefs[g].current){var N=e.markRefs[g].current.getBoundingClientRect();m=N.height,x=N.width}e.props.direction===I.Direction.Left||e.props.direction===I.Direction.Right?k.push([Math.round(a/e.numOfMarks*g+u-x/2),-Math.round((m-l)/2)]):k.push([Math.round(l/e.numOfMarks*g+d-m/2),-Math.round((x-a)/2)])}e.setState({markOffsets:k})}},i.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,M.schd)(e.onMouseMove),e.schdOnTouchMove=(0,M.schd)(e.onTouchMove),e.schdOnEnd=(0,M.schd)(e.onEnd),e.thumbRefs=i.values.map(function(){return ie.createRef()}),e.updateMarkRefs(i),e}return s.prototype.componentDidMount=function(){var i=this,e=this.props,n=e.values,a=e.min,l=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",i.onResize)},unobserve:function(){return window.removeEventListener("resize",i.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,M.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(u){return(0,M.checkBoundaries)(u,i.props.min,i.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(u){(0,M.isStepDivisible)(a,u,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(i,e){var n=this.props,a=n.max,l=n.min,u=n.step,d=n.values,k=n.rtl;(i.max!==a||i.min!==l||i.step!==u)&&this.updateMarkRefs(this.props),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),k),(i.max!==a||i.min!==l||i.step!==u||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),d.forEach(function(g){(0,M.isStepDivisible)(l,g,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var i={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,i),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var i=this,e=this.props,n=e.renderTrack,a=e.renderThumb,l=e.renderMark,u=l===void 0?function(){return null}:l,d=e.values,k=e.min,g=e.max,m=e.allowOverlap,x=e.disabled,N=this.state,y=N.draggedThumbIndex,_=N.thumbZIndexes,h=N.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:y>-1?"grabbing":this.props.draggableTrack?(0,M.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!x?"pointer":"inherit"},onMouseDown:x?M.voidFn:this.onMouseDownTrack,onTouchStart:x?M.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:x,children:ke(ke([],h.map(function(S,R,b){return u({props:{style:i.props.direction===I.Direction.Left||i.props.direction===I.Direction.Right?{position:"absolute",left:"".concat(S[0],"px"),marginTop:"".concat(S[1],"px")}:{position:"absolute",top:"".concat(S[0],"px"),marginLeft:"".concat(S[1],"px")},key:"mark".concat(R),ref:i.markRefs[R]},index:R})}),!0),d.map(function(S,R){var b=i.state.draggedThumbIndex===R;return a({index:R,value:S,isDragged:b,props:{style:{position:"absolute",zIndex:_[R],cursor:x?"inherit":b?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:R,tabIndex:x?void 0:0,"aria-valuemax":m?g:d[R+1]||g,"aria-valuemin":m?k:d[R-1]||k,"aria-valuenow":S,draggable:!1,ref:i.thumbRefs[R],role:"slider",onKeyDown:x?M.voidFn:i.onKeyDown,onKeyUp:x?M.voidFn:i.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:I.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ie.Component);pe.default=Ot;(function(r){var s=V&&V.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var i=s(pe);r.Range=i.default;var e=he;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=oe;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(de);const Rt=f.div`
  width: 280px;
  @media ${T.tablet} {
    width: 704px;
  }
  @media ${T.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,Nt=f.div`
  @media ${T.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${T.desktop} {
    display: flex;
    gap: 24px;
  }
`,Et=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,_t=f.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${T.tablet} {
    padding-bottom: 16px;
  }
`,Ct=f.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${T.tablet} {
    width: 325px;
  }
  @media ${T.desktop} {
    width: 360px;
  }
`,It=f.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,$t=f.div`
  position: relative;
  top: 24px;
`,Bt=f.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,Ft=f.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,je=f.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Pt=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${T.tablet} {
    width: 400px;
  }
  @media ${T.desktop} {
    width: 592px;
  }
`,At=f.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${T.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${T.desktop} {
    width: 178px;
  }
`,zt=()=>{const[r,s]=F.useState(!1),i=G(dt),e=i>100?100:i,n=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Rt,{children:t.jsxs(Nt,{children:[t.jsxs("div",{children:[t.jsx(_t,{children:"Today"}),t.jsx(Et,{children:t.jsx(de.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:a,children:l})=>t.jsx(Ct,{...a,style:{...a.style,background:de.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:l}),renderThumb:({props:a})=>F.createElement(It,{...a,key:a.key},t.jsx($t,{children:t.jsxs(Bt,{children:[e,"%"]})}))})}),t.jsxs(Ft,{children:[e<=7?t.jsx("span",{children:" "}):t.jsx(je,{children:"0%"}),e>=85?t.jsx("span",{children:" "}):t.jsx(je,{children:"100%"})]})]}),t.jsx(Pt,{className:"hover",children:t.jsxs(At,{className:"btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),r&&t.jsx(Q,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:n})})]})},Lt="/agua_vivo_app/assets/BackgroundHomeMobile--bJS4c7V.png",Vt="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",Oe="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",Wt="/agua_vivo_app/assets/BottleHomeMobile-YibEMZyu.png",Ut="/agua_vivo_app/assets/BottleHomeDesk-obPHwKf-.png",Ht="/agua_vivo_app/assets/BottleHomeDesk-obPHwKf-.png",Yt=f.section`
  background-image: url("${Lt}");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 50px;
  background-position-y: 100px;
  @media ${T.tablet} {
    background-image: url("${Vt}");
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${T.desktop} {
    background-image: url("${Oe}");
  }
`,Kt=f.div`
  background-image: url("${Wt}");
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 30px;
  background-position-y: 90px;

  @media ${T.tablet} {
    background-image: url("${Ut}");
    background-position-y: 10px;
    background-position-x: 90px;
  }
  @media ${T.desktop} {
    background-image: url("${Ht}");
    background-position-y: 0px;
    background-position-x: 0px;
  }
`,qt=f.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 40px;

  height: auto;

  background-color: var(--secondary-white);
  background-image: url("${Oe}");
  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${T.tablet} {
    padding: 32px 24px;
  }

  @media ${T.desktop} {
    width: 592px;
    max-height: 688px;
  }
`,Xt=()=>{const r=ee();return F.useEffect(()=>{r(Pe())},[r]),t.jsxs(Yt,{className:"homePage-section container",children:[t.jsxs(Kt,{children:[t.jsx(it,{}),t.jsx(zt,{})]}),t.jsxs(qt,{children:[t.jsx(ft,{}),t.jsx(wt,{})]})]})};export{Xt as default};
