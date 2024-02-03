import{u as x,d as S,j as t,a as X,s as Ce,b as ue,c as Q,e as Ie,r as $,f as $e,M as ee,g as te,I as q,h as pe,i as De,k as Pe,L as Be,l as Ae,m as H,n as Fe}from"./index-ZVU4Oa8Z.js";const Ve=x.div``,ze=x.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,Le=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,We=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${S.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,He=x.div`
  display: flex;
  gap: 24px;
`,se=x.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,Ue=x.span`
  width: 190px;
  @media ${S.tablet} {
    width: auto;
  }
`,Ye=x.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Ke=x.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,je=x.h3`
  font-size: 18px;
  font-weight: bold;
`,le=x.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,qe=x.label`
  display: flex;
  gap: 5px;
`,ke=x.input`
  margin-right: 5px;
`,ce=x.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,Ze=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Xe=x.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${S.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,Ge=x.h2`
  font-size: 18px;
  line-height: 1.33;
`,Je=x.button`
  color: #8baeff;
`,Qe=x.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  @media ${S.tablet} {
    margin-bottom: 326px;
  }
  @media ${S.desktop} {
    margin-bottom: 350px;
  }
`,et=x.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,tt=x.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${S.tablet} {
    font-size: 24px;
  }
`,nt=x.span`
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

  @media ${S.tablet} {
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
`,rt=x.span`
  color: var(--primary-blue);
  font-size: 18px;
`,at=({message:r})=>t.jsx(t.Fragment,{children:t.jsx(nt,{children:t.jsx(rt,{children:r})})}),it=({onClose:r})=>{const s=X(Ce),{register:i,handleSubmit:e,watch:n,formState:{errors:a}}=ue({defaultValues:{weight:"",time:"",sex:s.gender||"woman",dailyNorma:""},mode:"onChange"}),d=Q(),p=f=>{const{dailyNorma:T}=f;d(Ie({dailyNorma:+T})),r()};let c;const b=Number(n("weight")),m=Number(n("time")),v=String(n("sex")),y=(f,T,h)=>h==="man"?String((f*.04+T*.6).toFixed(1))+"L":String((f*.03+T*.4).toFixed(1))+"L",R=(f,T)=>{if(f<20&&f!==0)return c=!0,"You couldn't be less than 20kg";if(T>24)return c=!0,"Day contains only 24H";if(T<0)return c=!0,"Time should be only positive integer"},j=y(b,m,v),_=R(b,m);return t.jsx(Ve,{children:t.jsxs(ze,{onSubmit:e(p),children:[t.jsxs(Le,{children:[t.jsxs(We,{children:[t.jsxs("p",{children:["For girl:",t.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(Ye,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Ke,{children:[t.jsx(je,{children:"Calculate your rate:"}),t.jsxs(He,{children:[t.jsxs("label",{children:[t.jsx(ke,{...i("sex"),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(ke,{...i("sex"),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(le,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(ce,{...i("weight"),type:"number",placeholder:"0"})]}),t.jsxs(le,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(ce,{...i("time"),type:"number",placeholder:"0"})]}),t.jsxs(qe,{children:[t.jsx(Ue,{children:"The required amount of water in liters per day:"}),t.jsx(se,{children:c?t.jsx(at,{message:_}):j})]})]}),t.jsx(Ze,{children:t.jsxs(le,{children:[t.jsx(je,{children:"Write down how much water you will drink:"}),t.jsx(ce,{...i("dailyNorma",{required:!0}),type:"number",step:"any",max:15,placeholder:"0"}),a.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(Xe,{className:"btn",type:"submit",children:"Save"})]})})},ot=()=>{const[r,s]=$.useState(!1),i=()=>{s(!r)},e=X($e);return t.jsx(t.Fragment,{children:t.jsxs(Qe,{children:[t.jsx(Ge,{children:"My daily norma"}),t.jsxs(et,{children:[t.jsxs(tt,{children:[e," L"]}),r&&t.jsx(ee,{setVisible:i,title:"My Daily Norma",daily:!0,children:t.jsx(it,{onClose:i})}),t.jsx(Je,{type:"button",onClick:i,children:"Edit"})]})]})})},st=x.div`
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

  @media ${S.tablet} {
    .water-title {
      margin-bottom: 16px;
    }
  }
`,lt=x.li`
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

  @media ${S.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
  }
`,Se=x.div`
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

  @media ${S.tablet} {
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

  @media ${S.desktop} {
  }
`,ct=x.div`
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

  @media ${S.tablet} {
    .delete-btn-box {
      display: flex;
      flex-direction: row;
      gap: 24px;
      justify-content: end;
    }
  }
`,ne=r=>r.water,he=te(ne,r=>r.amountDaily),dt=te(ne,r=>r.amountDaily.percentage);te(ne,r=>r.amountMonthly);const ut=te(ne,r=>r.isLoading),pt=te(ne,r=>r.error),Ne=({title:r,show:s,closeModal:i,id:e})=>{const{register:n,handleSubmit:a,formState:{errors:d}}=ue(),p=Q(),{entries:c}=X(he),b=c.find(g=>g._id===e),[m,v]=$.useState({count:c.length>0?c[c.length-1].waterVolume:0,inputValue:c.length>0?c[c.length-1].waterVolume:"0"}),[y,R]=$.useState([]);$.useEffect(()=>{const g=new Date,C=g.getMinutes(),V=g.getHours()>=12?"PM":"AM",P=(g.getHours()%12||12).toString().padStart(2,"0"),E=C.toString().padStart(2,"0"),L=`${P}:${E} ${V}`,Z=g.getHours(),z=g.getMinutes();let o=Z,l=Math.ceil(z/5)*5;l>=60&&(o++,l-=60);const u=[];for(let w=o*60+l;w<24*60;w+=5){const M=(w%60).toString().padStart(2,"0"),k=Math.floor(w/60)<12?"AM":"PM",O=(Math.floor(w/60)%12||12).toString().padStart(2,"0");u.push(`${O}:${M} ${k}`)}R([L,...u])},[]);const j=g=>{m.count+g>=0&&v({inputValue:String(g),count:g})},_=g=>{const{value:C}=g.target;v(V=>({...V,inputValue:C}))},f=()=>{j(Number(m.inputValue))},T=g=>{g.key==="-"&&g.preventDefault()},h=g=>{const C={time:g.time,waterVolume:Number(m.inputValue)};C.waterVolume===0?alert("The amount of water cannot be 0!"):d.time||(p(s&&e?pe({...C,id:e}):De(C)),i())};return t.jsxs(Se,{children:[t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>j(m.count-50),type:"button",children:t.jsx(q,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[m.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>j(m.count+50),type:"button",children:t.jsx(q,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:a(h),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:y.map(g=>t.jsx("option",{value:g,children:g},g))}),d.time&&t.jsx("span",{children:"Please choose a time that is divisible by 5"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:m.inputValue,onChange:_,onBlur:f,onKeyPress:T,className:"water-input"}),d.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsx("span",{className:"water-amount",children:s?`${b==null?void 0:b.waterVolume}ml`:`${m.count}ml`}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},ht=({closeModal:r,_id:s})=>{const i=Q(),e=()=>{r()},n=a=>{i(Pe(a)),r()};return t.jsxs(ct,{children:[t.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:()=>n(s),children:"Delete"})]})]})},mt=({title:r,closeModal:s,id:i})=>{const{register:e,handleSubmit:n,formState:{errors:a}}=ue(),d=Q(),{entries:p}=X(he),c=p.find(h=>h._id===i),[b,m]=$.useState({count:c?c.waterVolume:0,inputValue:c?c.waterVolume:"0"}),[v,y]=$.useState([]);$.useEffect(()=>{const h=new Date,g=h.getMinutes(),C=h.getHours()>=12?"PM":"AM",V=(h.getHours()%12||12).toString().padStart(2,"0"),P=g.toString().padStart(2,"0"),E=`${V}:${P} ${C}`,L=h.getHours(),Z=h.getMinutes();let z=L,o=Math.ceil(Z/5)*5;o>=60&&(z++,o-=60);const l=[];for(let u=z*60+o;u<24*60;u+=5){const w=(u%60).toString().padStart(2,"0"),M=Math.floor(u/60)<12?"AM":"PM",k=(Math.floor(u/60)%12||12).toString().padStart(2,"0");l.push(`${k}:${w} ${M}`)}y([E,...l])},[]);const R=h=>{b.count+h>=0&&m({inputValue:String(h),count:h})},j=h=>{const{value:g}=h.target;m(C=>({...C,inputValue:g}))},_=()=>{R(Number(b.inputValue))},f=h=>{h.key==="-"&&h.preventDefault()},T=h=>{const g={time:h.time,waterVolume:Number(b.inputValue)};g.waterVolume===0?alert("Кількість води не може бути 0!"):a.time||(d(i?pe({...g,id:i}):De(g)),s())};return t.jsxs(Se,{children:[t.jsxs("div",{className:"water-card",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[c==null?void 0:c.waterVolume," ml"]}),t.jsx("p",{className:"time",children:c==null?void 0:c.time})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>R(b.count-50),type:"button",children:t.jsx(q,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[b.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>R(b.count+50),type:"button",children:t.jsx(q,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:n(T),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...e("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:v.map(h=>t.jsx("option",{value:h,children:h},h))}),a.time&&t.jsx("span",{children:"Please choose a time that is divisible by 5"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:b.inputValue,onChange:j,onBlur:_,onKeyPress:f,className:"water-input"}),a.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[c==null?void 0:c.waterVolume,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},ft=({_id:r,waterVolume:s,time:i})=>{const[e,n]=$.useState(!1),[a,d]=$.useState(!1),p=Q(),c=b=>{p(pe(b))};return t.jsxs(lt,{children:[t.jsxs("div",{className:"water-info",children:[t.jsx(q,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[s," ml"]}),t.jsx("p",{className:"time",children:i})]}),t.jsxs("div",{className:"edit-delete-btn-box",children:[t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>n(!0),children:t.jsx(q,{className:"edit-water-icon",id:"pencil"})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{d(!0)},children:t.jsx(q,{className:"delete-water-icon",id:"delete"})})]}),e&&t.jsx(ee,{setVisible:n,title:"Edit the entered amount of water",children:t.jsx(mt,{title:"Correct entered data:",handleUpdateWater:c,closeModal:()=>{n(!1)},id:r})}),a&&t.jsx(ee,{setVisible:d,title:"Delete water",delete:!0,children:t.jsx(ht,{title:"Delete entry?",show:!1,closeModal:()=>{d(!1)},_id:r})})]})},gt=()=>{const[r,s]=$.useState(!1),{entries:i}=X(he),e=X(ut),n=X(pt),a=()=>{s(!1)};return t.jsxs(st,{children:[t.jsx("h3",{className:"water-title",children:"Today"}),e&&!n&&t.jsx(Be,{}),i.length===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx("ul",{className:"water-list",children:i.length>0&&i.map(({_id:d,waterVolume:p,time:c})=>t.jsx(ft,{_id:d,waterVolume:p,time:c},d))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(ee,{setVisible:s,title:"Add water",children:t.jsx(Ne,{title:"Choose a value:",show:!1,closeModal:a})})]})},xt=x.div`
            /* position: absolute;
            bottom: 0;
            right: 0; */

  width: 264;
  height: 500px;
  background-color: #ecf2ff;

  @media ${S.tablet} {
    width: 646px;
    height: 315px;
  }
  @media ${S.desktop} {

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
`,bt=x.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  gap: 16px 26px;

  @media ${S.tablet} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }
  @media ${S.desktop} {
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
`,Oe=x.span`
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
`,vt=x.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,yt=x.div`
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
`,wt=x(Oe)`
  border: #ff9d43 1px solid;
`,jt=()=>{const r=()=>new Date,[s,i]=$.useState(r()),[e,n]=$.useState(null),[a,d]=$.useState(!1),[p,c]=$.useState(null),b=$.useRef(null);Ae(b,()=>{a&&d(!1)});const m=f=>{const T=f.getFullYear(),h=f.getMonth(),g=new Date(T,h+1,0).getDate(),C=[];for(let V=1;V<=g;V++)C.push({day:V,month:f.toLocaleString("en-US",{month:"long"})});return C},v=()=>{i(f=>new Date(f.getFullYear(),f.getMonth()-1)),n(null)},y=()=>{const f=new Date(s.getFullYear(),s.getMonth()+1);f<=r()&&(i(f),n(null))},R=f=>{if(e===f.day){j(),n(null);return}const T=document.getElementById(`day-${f.day}`);if(!T){console.error(`Елемент з id 'day-${f.day}' не знайдено.`);return}const h=T.getBoundingClientRect(),g=292,C=188,V=window.innerWidth,P=window.innerHeight;let E=h.top-C-10,L=window.innerWidth<=768?window.innerWidth/2-g/2:h.left+h.width/2-g/2;E<0&&(E=0),E+C>P&&(E=P-C),L<0&&(L=0),L+g>V&&(L=V-g),n(f.day),c(f),document.documentElement.style.setProperty("--modal-top",`${E}px`),document.documentElement.style.setProperty("--modal-left",`${L}px`),d(!0)},j=()=>{d(!1)};$.useEffect(()=>{const f=T=>{T instanceof KeyboardEvent&&T.key==="Escape"&&j()};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}},[]);const _=()=>0;return t.jsxs(xt,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:v,children:"<"}),t.jsxs("div",{className:"month-title",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),s.getMonth()===new Date().getMonth()&&s.getFullYear()===new Date().getFullYear()?t.jsx("button",{className:"button disabled",disabled:!0,children:">"}):t.jsx("button",{className:"button",onClick:y,children:">"})]})]}),t.jsx(bt,{children:m(s).map(f=>t.jsxs("li",{id:`day-${f.day}`,className:"hover active",children:[_()<100?t.jsx(wt,{className:`day ${e===f.day?"selected":""}`,onClick:()=>R(f),children:f.day}):t.jsx(Oe,{className:`day ${e===f.day?"selected":""}`,onClick:()=>R(f),children:f.day}),t.jsx("p",{className:`procent ${_()<100?"lowPercentage":""}`,children:`${_()}%`})]},f.day))}),t.jsx(vt,{ref:b,className:a?"open":"",children:t.jsxs(yt,{children:[t.jsx("button",{className:"close hover active",onClick:j,children:"×"}),t.jsx("h3",{className:"title-modal",children:`${p==null?void 0:p.day}, ${p==null?void 0:p.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:"1.5L"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"span-modal",children:"100%"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:"6"})]})]})})]})};var de={},me={},fe={},oe={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(oe);(function(r){var s=H&&H.__spreadArray||function(o,l,u){if(u||arguments.length===2)for(var w=0,M=l.length,k;w<M;w++)(k||!(w in l))&&(k||(k=Array.prototype.slice.call(l,0,w)),k[w]=l[w]);return o.concat(k||Array.prototype.slice.call(l))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var i=$,e=oe,n=function(o){var l=o.toString().split(".")[1];return l?l.length:0};r.getStepDecimals=n;function a(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}r.isTouchEvent=a;function d(o,l,u){var w=(l-o)/u,M=8,k=Number(w.toFixed(M));return parseInt(k.toString(),10)===k}r.isStepDivisible=d;function p(o,l,u,w,M,k,O){var N=1e11;if(o=Math.round(o*N)/N,!k){var F=O[l-1],I=O[l+1];if(F&&F>o)return F;if(I&&I<o)return I}if(o>w)return w;if(o<u)return u;var U=Math.floor(o*N-u*N)%Math.floor(M*N),W=Math.floor(o*N-Math.abs(U)),Y=U===0?o:W/N,A=Math.abs(U/N)<M/2?Y:Y+M,K=(0,r.getStepDecimals)(M);return parseFloat(A.toFixed(K))}r.normalizeValue=p;function c(o,l,u){return(o-l)/(u-l)}r.relativeValue=c;function b(o){return o===e.Direction.Up||o===e.Direction.Down}r.isVertical=b;function m(o,l,u){if(l>=u)throw new RangeError("min (".concat(l,") is equal/bigger than max (").concat(u,")"));if(o<l)throw new RangeError("value (".concat(o,") is smaller than min (").concat(l,")"));if(o>u)throw new RangeError("value (".concat(o,") is bigger than max (").concat(u,")"))}r.checkBoundaries=m;function v(o,l,u){return o<l?l:o>u?u:o}r.checkValuesAgainstBoundaries=v;function y(o){if(!(o.length<2)&&!o.slice(1).every(function(l,u){return o[u]<=l}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=y;function R(o){var l=window.getComputedStyle(o);return{top:parseInt(l["margin-top"],10),bottom:parseInt(l["margin-bottom"],10),left:parseInt(l["margin-left"],10),right:parseInt(l["margin-right"],10)}}r.getMargin=R;function j(o){var l=window.getComputedStyle(o);return{top:parseInt(l["padding-top"],10)+parseInt(l["border-top-width"],10),bottom:parseInt(l["padding-bottom"],10)+parseInt(l["border-bottom-width"],10),left:parseInt(l["padding-left"],10)+parseInt(l["border-left-width"],10),right:parseInt(l["padding-right"],10)+parseInt(l["border-right-width"],10)}}r.getPaddingAndBorder=j;function _(o,l,u){var w=u?-1:1;o.forEach(function(M,k){return T(M,w*l[k].x,l[k].y)})}r.translateThumbs=_;function f(o,l,u,w){for(var M=0,k=z(o[0],l,u,w),O=1;O<o.length;O++){var N=z(o[O],l,u,w);N<k&&(k=N,M=O)}return M}r.getClosestThumbIndex=f;function T(o,l,u){o.style.transform="translate(".concat(l,"px, ").concat(u,"px)")}r.translate=T;var h=function(o){var l=[],u=null,w=function(){for(var M=[],k=0;k<arguments.length;k++)M[k]=arguments[k];l=M,!u&&(u=requestAnimationFrame(function(){u=null,o.apply(void 0,l)}))};return w};r.schd=h;function g(o,l,u){var w=o.slice(0);return w[l]=u,w}r.replaceAt=g;function C(o){var l=o.values,u=o.colors,w=o.min,M=o.max,k=o.direction,O=k===void 0?e.Direction.Right:k,N=o.rtl,F=N===void 0?!1:N;F&&O===e.Direction.Right?O=e.Direction.Left:F&&e.Direction.Left&&(O=e.Direction.Right);var I=l.slice(0).sort(function(W,Y){return W-Y}).map(function(W){return(W-w)/(M-w)*100}),U=I.reduce(function(W,Y,A){return"".concat(W,", ").concat(u[A]," ").concat(Y,"%, ").concat(u[A+1]," ").concat(Y,"%")},"");return"linear-gradient(".concat(O,", ").concat(u[0]," 0%").concat(U,", ").concat(u[u.length-1]," 100%)")}r.getTrackBackground=C;function V(){}r.voidFn=V;function P(o){throw new Error("Didn't expect to get here")}r.assertUnreachable=P;var E=function(o,l,u,w,M){M===void 0&&(M=function(O){return O});var k=Math.ceil(s([o],Array.from(o.children),!0).reduce(function(O,N){var F=Math.ceil(N.getBoundingClientRect().width);if(N.innerText&&N.innerText.includes(u)&&N.childElementCount===0){var I=N.cloneNode(!0);I.innerHTML=M(l.toFixed(w)),I.style.visibility="hidden",document.body.appendChild(I),F=Math.ceil(I.getBoundingClientRect().width),document.body.removeChild(I)}return F>O?F:O},o.getBoundingClientRect().width));return k},L=function(o,l,u,w,M,k,O){O===void 0&&(O=function(I){return I});var N=[],F=function(I){var U=E(u[I],w[I],M,k,O),W=l[I].x;l.forEach(function(Y,A){var K=Y.x,G=E(u[A],w[A],M,k,O);I!==A&&(W>=K&&W<=K+G||W+U>=K&&W+U<=K+G)&&(N.includes(A)||(N.push(I),N.push(A),N=s(s([],N,!0),[I,A],!1),F(A)))})};return F(o),Array.from(new Set(N.sort()))},Z=function(o,l,u,w,M,k){w===void 0&&(w=.1),M===void 0&&(M=" - "),k===void 0&&(k=function(A){return A});var O=(0,r.getStepDecimals)(w),N=(0,i.useState)({}),F=N[0],I=N[1],U=(0,i.useState)(k(l[u].toFixed(O))),W=U[0],Y=U[1];return(0,i.useEffect)(function(){if(o){var A=o.getThumbs();if(A.length<1)return;var K={},G=o.getOffsets(),re=L(u,G,A,l,M,O,k),ge=k(l[u].toFixed(O));if(re.length){var ae=re.reduce(function(J,ve,ye,we){return J.length?s(s([],J,!0),[G[we[ye]].x],!1):[G[we[ye]].x]},[]);if(Math.min.apply(Math,ae)===G[u].x){var xe=[];re.forEach(function(J){xe.push(l[J].toFixed(O))}),ge=Array.from(new Set(xe.sort(function(J,ve){return parseFloat(J)-parseFloat(ve)}))).map(k).join(M);var Ee=Math.min.apply(Math,ae),be=Math.max.apply(Math,ae),_e=A[re[ae.indexOf(be)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Ee-(be+_e))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Y(ge),I(K)}},[o,l]),[W,F]};r.useThumbOverlap=Z;function z(o,l,u,w){var M=o.getBoundingClientRect(),k=M.left,O=M.top,N=M.width,F=M.height;return b(w)?Math.abs(u-(O+F/2)):Math.abs(l-(k+N/2))}})(fe);var kt=H&&H.__extends||function(){var r=function(s,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},r(s,i)};return function(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");r(s,i);function e(){this.constructor=s}s.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}(),Mt=H&&H.__createBinding||(Object.create?function(r,s,i,e){e===void 0&&(e=i);var n=Object.getOwnPropertyDescriptor(s,i);(!n||("get"in n?!s.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,e,n)}:function(r,s,i,e){e===void 0&&(e=i),r[e]=s[i]}),Tt=H&&H.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),Dt=H&&H.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var i in r)i!=="default"&&Object.prototype.hasOwnProperty.call(r,i)&&Mt(s,r,i);return Tt(s,r),s},Me=H&&H.__spreadArray||function(r,s,i){if(i||arguments.length===2)for(var e=0,n=s.length,a;e<n;e++)(a||!(e in s))&&(a||(a=Array.prototype.slice.call(s,0,e)),a[e]=s[e]);return r.concat(a||Array.prototype.slice.call(s))};Object.defineProperty(me,"__esModule",{value:!0});var ie=Dt($),D=fe,B=oe,St=["ArrowRight","ArrowUp","k","PageUp"],Nt=["ArrowLeft","ArrowDown","j","PageDown"],Ot=function(r){kt(s,r);function s(i){var e=r.call(this,i)||this;if(e.trackRef=ie.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,a){return a}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,a=n.direction,d=n.values,p=n.min,c=n.max,b=e.trackRef.current,m=b.getBoundingClientRect(),v=(0,D.getPaddingAndBorder)(b);return e.getThumbs().map(function(y,R){var j={x:0,y:0},_=y.getBoundingClientRect(),f=(0,D.getMargin)(y);switch(a){case B.Direction.Right:return j.x=(f.left+v.left)*-1,j.y=((_.height-m.height)/2+v.top)*-1,j.x+=m.width*(0,D.relativeValue)(d[R],p,c)-_.width/2,j;case B.Direction.Left:return j.x=(f.right+v.right)*-1,j.y=((_.height-m.height)/2+v.top)*-1,j.x+=m.width-m.width*(0,D.relativeValue)(d[R],p,c)-_.width/2,j;case B.Direction.Up:return j.x=((_.width-m.width)/2+f.left+v.left)*-1,j.y=-v.left,j.y+=m.height-m.height*(0,D.relativeValue)(d[R],p,c)-_.height/2,j;case B.Direction.Down:return j.x=((_.width-m.width)/2+f.left+v.left)*-1,j.y=-v.left,j.y+=m.height*(0,D.relativeValue)(d[R],p,c)-_.height/2,j;default:return(0,D.assertUnreachable)(a)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(a){return a===n.target||a.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var a;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(p){var c;return(c=p.current)===null||c===void 0?void 0:c.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var d=(0,D.getClosestThumbIndex)(e.thumbRefs.map(function(p){return p.current}),n.clientX,n.clientY,e.props.direction);(a=e.thumbRefs[d].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:d},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,D.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var a;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(p){var c;return(c=p.current)===null||c===void 0?void 0:c.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var d=(0,D.getClosestThumbIndex)(e.thumbRefs.map(function(p){return p.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(a=e.thumbRefs[d].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:d},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var a=(0,D.isTouchEvent)(n);if(!(!a&&n.button!==0)){var d=e.getTargetIndex(n);d!==-1&&(a?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:d,thumbZIndexes:e.state.thumbZIndexes.map(function(p,c){return c===d?Math.max.apply(Math,e.state.thumbZIndexes):p<=e.state.thumbZIndexes[d]?p:p-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var a=e.props,d=a.values,p=a.onChange,c=a.step,b=a.rtl,m=a.direction,v=e.state.isChanged,y=e.getTargetIndex(n.nativeEvent),R=b||m===B.Direction.Left||m===B.Direction.Down?-1:1;y!==-1&&(St.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:y,isChanged:!0}),p((0,D.replaceAt)(d,y,e.normalizeValue(d[y]+R*(n.key==="PageUp"?c*10:c),y)))):Nt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:y,isChanged:!0}),p((0,D.replaceAt)(d,y,e.normalizeValue(d[y]-R*(n.key==="PageDown"?c*10:c),y)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){v&&e.fireOnFinalChange()}):v&&e.fireOnFinalChange())},e.onKeyUp=function(n){var a=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){a&&e.fireOnFinalChange()})},e.onMove=function(n,a){var d=e.state,p=d.draggedThumbIndex,c=d.draggedTrackPos,b=e.props,m=b.direction,v=b.min,y=b.max,R=b.onChange,j=b.values,_=b.step,f=b.rtl;if(p===-1&&c[0]===-1&&c[1]===-1)return null;var T=e.trackRef.current;if(!T)return null;var h=T.getBoundingClientRect(),g=(0,D.isVertical)(m)?h.height:h.width;if(c[0]!==-1&&c[1]!==-1){var C=n-c[0],V=a-c[1],P=0;switch(m){case B.Direction.Right:case B.Direction.Left:P=C/g*(y-v);break;case B.Direction.Down:case B.Direction.Up:P=V/g*(y-v);break;default:(0,D.assertUnreachable)(m)}if(f&&(P*=-1),Math.abs(P)>=_/2){for(var E=0;E<e.thumbRefs.length;E++){if(j[E]===y&&Math.sign(P)===1||j[E]===v&&Math.sign(P)===-1)return;var L=j[E]+P;L>y?P=y-j[E]:L<v&&(P=v-j[E])}for(var Z=j.slice(0),E=0;E<e.thumbRefs.length;E++)Z=(0,D.replaceAt)(Z,E,e.normalizeValue(j[E]+P,E));e.setState({draggedTrackPos:[n,a]}),R(Z)}}else{var z=0;switch(m){case B.Direction.Right:z=(n-h.left)/g*(y-v)+v;break;case B.Direction.Left:z=(g-(n-h.left))/g*(y-v)+v;break;case B.Direction.Down:z=(a-h.top)/g*(y-v)+v;break;case B.Direction.Up:z=(g-(a-h.top))/g*(y-v)+v;break;default:(0,D.assertUnreachable)(m)}f&&(z=y+v-z),Math.abs(j[p]-z)>=_/2&&R((0,D.replaceAt)(j,p,e.normalizeValue(z,p)))}},e.normalizeValue=function(n,a){var d=e.props,p=d.min,c=d.max,b=d.step,m=d.allowOverlap,v=d.values;return(0,D.normalizeValue)(n,a,p,c,b,m,v)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,a=n.onFinalChange,d=n.values;a&&a(d)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var a=0;a<e.numOfMarks+1;a++)e.markRefs[a]=ie.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),a=parseInt(n.width,10),d=parseInt(n.height,10),p=parseInt(n.paddingLeft,10),c=parseInt(n.paddingTop,10),b=[],m=0;m<e.numOfMarks+1;m++){var v=9999,y=9999;if(e.markRefs[m].current){var R=e.markRefs[m].current.getBoundingClientRect();v=R.height,y=R.width}e.props.direction===B.Direction.Left||e.props.direction===B.Direction.Right?b.push([Math.round(a/e.numOfMarks*m+p-y/2),-Math.round((v-d)/2)]):b.push([Math.round(d/e.numOfMarks*m+c-v/2),-Math.round((y-a)/2)])}e.setState({markOffsets:b})}},i.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,D.schd)(e.onMouseMove),e.schdOnTouchMove=(0,D.schd)(e.onTouchMove),e.schdOnEnd=(0,D.schd)(e.onEnd),e.thumbRefs=i.values.map(function(){return ie.createRef()}),e.updateMarkRefs(i),e}return s.prototype.componentDidMount=function(){var i=this,e=this.props,n=e.values,a=e.min,d=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",i.onResize)},unobserve:function(){return window.removeEventListener("resize",i.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,D.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(p){return(0,D.checkBoundaries)(p,i.props.min,i.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,D.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(p){(0,D.isStepDivisible)(a,p,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(i,e){var n=this.props,a=n.max,d=n.min,p=n.step,c=n.values,b=n.rtl;(i.max!==a||i.min!==d||i.step!==p)&&this.updateMarkRefs(this.props),(0,D.translateThumbs)(this.getThumbs(),this.getOffsets(),b),(i.max!==a||i.min!==d||i.step!==p||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),c.forEach(function(m){(0,D.isStepDivisible)(d,m,p)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var i={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,i),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var i=this,e=this.props,n=e.renderTrack,a=e.renderThumb,d=e.renderMark,p=d===void 0?function(){return null}:d,c=e.values,b=e.min,m=e.max,v=e.allowOverlap,y=e.disabled,R=this.state,j=R.draggedThumbIndex,_=R.thumbZIndexes,f=R.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:j>-1?"grabbing":this.props.draggableTrack?(0,D.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!y?"pointer":"inherit"},onMouseDown:y?D.voidFn:this.onMouseDownTrack,onTouchStart:y?D.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:y,children:Me(Me([],f.map(function(T,h,g){return p({props:{style:i.props.direction===B.Direction.Left||i.props.direction===B.Direction.Right?{position:"absolute",left:"".concat(T[0],"px"),marginTop:"".concat(T[1],"px")}:{position:"absolute",top:"".concat(T[0],"px"),marginLeft:"".concat(T[1],"px")},key:"mark".concat(h),ref:i.markRefs[h]},index:h})}),!0),c.map(function(T,h){var g=i.state.draggedThumbIndex===h;return a({index:h,value:T,isDragged:g,props:{style:{position:"absolute",zIndex:_[h],cursor:y?"inherit":g?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:h,tabIndex:y?void 0:0,"aria-valuemax":v?m:c[h+1]||m,"aria-valuemin":v?b:c[h-1]||b,"aria-valuenow":T,draggable:!1,ref:i.thumbRefs[h],role:"slider",onKeyDown:y?D.voidFn:i.onKeyDown,onKeyUp:y?D.voidFn:i.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:B.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ie.Component);me.default=Ot;(function(r){var s=H&&H.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var i=s(me);r.Range=i.default;var e=fe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=oe;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(de);const Rt=x.div`
  width: 280px;
  @media ${S.tablet} {
    width: 704px;
  }
  @media ${S.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,Et=x.div`
  @media ${S.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${S.desktop} {
    display: flex;
    gap: 24px;
  }
`,_t=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ct=x.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${S.tablet} {
    padding-bottom: 16px;
  }
`,It=x.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${S.tablet} {
    width: 325px;
  }
  @media ${S.desktop} {
    width: 360px;
  }
`,$t=x.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,Pt=x.div`
  position: relative;
  top: 24px;
`,Bt=x.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,At=x.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,Te=x.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Ft=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${S.tablet} {
    width: 400px;
  }
  @media ${S.desktop} {
    width: 592px;
  }
`,Vt=x.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${S.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${S.desktop} {
    width: 178px;
  }
`,zt=()=>{const[r,s]=$.useState(!1),i=X(dt),e=i>100?100:i,n=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Rt,{children:t.jsxs(Et,{children:[t.jsxs("div",{children:[t.jsx(Ct,{children:"Today"}),t.jsx(_t,{children:t.jsx(de.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:a,children:d})=>t.jsx(It,{...a,style:{...a.style,background:de.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:d}),renderThumb:({props:a})=>$.createElement($t,{...a,key:a.key},t.jsx(Pt,{children:t.jsxs(Bt,{children:[e,"%"]})}))})}),t.jsxs(At,{children:[e<=7?t.jsx("span",{children:" "}):t.jsx(Te,{children:"0%"}),e>=85?t.jsx("span",{children:" "}):t.jsx(Te,{children:"100%"})]})]}),t.jsx(Ft,{className:"hover",children:t.jsxs(Vt,{className:"btn",onClick:()=>s(!0),children:[t.jsx(q,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),r&&t.jsx(ee,{setVisible:s,title:"Add water",children:t.jsx(Ne,{title:"Choose a value",show:!1,closeModal:n})})]})},Lt="/agua_vivo_app/assets/BackgroundHomeMobile--bJS4c7V.png",Wt="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",Re="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",Ht="/agua_vivo_app/assets/BottleHomeMobile-YibEMZyu.png",Ut="/agua_vivo_app/assets/BottleHomeDesk-obPHwKf-.png",Yt="/agua_vivo_app/assets/BottleHomeDesk-obPHwKf-.png",Kt=x.section`
  background-image: url("${Lt}");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 50px;
  background-position-y: 100px;
  @media ${S.tablet} {
    background-image: url("${Wt}");
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${S.desktop} {
    background-image: url("${Re}");
  }
`,qt=x.div`
  background-image: url("${Ht}");
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 30px;
  background-position-y: 90px;

  @media ${S.tablet} {
    background-image: url("${Ut}");
    background-position-y: 10px;
    background-position-x: 90px;
  }
  @media ${S.desktop} {
    background-image: url("${Yt}");
    background-position-y: 0px;
    background-position-x: 0px;
  }
`,Zt=x.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 40px;

  height: auto;

  background-color: var(--secondary-white);
  background-image: url("${Re}");
  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${S.tablet} {
    padding: 32px 24px;
  }

  @media ${S.desktop} {
    width: 592px;
    max-height: 688px;
  }
`,Gt=()=>{const r=Q();return $.useEffect(()=>{r(Fe())},[r]),t.jsxs(Kt,{className:"homePage-section container",children:[t.jsxs(qt,{children:[t.jsx(ot,{}),t.jsx(zt,{})]}),t.jsxs(Zt,{children:[t.jsx(gt,{}),t.jsx(jt,{})]})]})};export{Gt as default};
