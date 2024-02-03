import{u as g,d as M,j as t,a as X,s as Pe,b as ue,c as J,e as Ae,r as B,f as Be,M as ee,g as te,I as Z,h as pe,i as De,k as Fe,L as Ve,l as Ce,m as ze,n as H,o as Le}from"./index-RTE0HbiN.js";const We=g.div``,He=g.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,Ue=g.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ye=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${M.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,Ke=g.div`
  display: flex;
  gap: 24px;
`,se=g.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,qe=g.span`
  width: 190px;
  @media ${M.tablet} {
    width: auto;
  }
`,Ze=g.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Xe=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,je=g.h3`
  font-size: 18px;
  font-weight: bold;
`,ce=g.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ge=g.label`
  display: flex;
  gap: 5px;
`,ke=g.input`
  margin-right: 5px;
`,le=g.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,Je=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Qe=g.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${M.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,et=g.div`
  height: 208px;
  margin-bottom: 30px;
  @media ${M.tablet} {
    height: 386px;
    margin-bottom: 16px;
  }
  @media ${M.desktop} {
    height: 548px;
  }
`,tt=g.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  
`,nt=g.h2`
  font-size: 18px;
  line-height: 1.33;
`,rt=g.button`
  color: #8baeff;
`,at=g.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,it=g.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${M.tablet} {
    font-size: 24px;
  }
`,ot=g.span`
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

  @media ${M.tablet} {
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
`,st=g.span`
  color: var(--primary-blue);
  font-size: 18px;
`,ct=({message:r})=>t.jsx(t.Fragment,{children:t.jsx(ot,{children:t.jsx(st,{children:r})})}),lt=({onClose:r})=>{const c=X(Pe),{register:a,handleSubmit:e,watch:n,formState:{errors:i}}=ue({defaultValues:{weight:"",time:"",sex:c.gender||"woman",dailyNorma:""},mode:"onChange"}),u=J(),h=E=>{const{dailyNorma:R}=E;u(Ae({dailyNorma:+R})),r()};let d;const x=Number(n("weight")),m=Number(n("time")),b=String(n("sex")),v=(E,R,o)=>o==="man"?String((E*.04+R*.6).toFixed(1))+"L":String((E*.03+R*.4).toFixed(1))+"L",N=(E,R)=>{if(E<20&&E!==0)return d=!0,"You couldn't be less than 20kg";if(R>24)return d=!0,"Day contains only 24H";if(R<0)return d=!0,"Time should be only positive integer"},j=v(x,m,b),$=N(x,m);return t.jsx(We,{children:t.jsxs(He,{onSubmit:e(h),children:[t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsxs("p",{children:["For girl:",t.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(Ze,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Xe,{children:[t.jsx(je,{children:"Calculate your rate:"}),t.jsxs(Ke,{children:[t.jsxs("label",{children:[t.jsx(ke,{...a("sex"),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(ke,{...a("sex"),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(le,{...a("weight"),type:"number",placeholder:"0"})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(le,{...a("time"),type:"number",placeholder:"0"})]}),t.jsxs(Ge,{children:[t.jsx(qe,{children:"The required amount of water in liters per day:"}),t.jsx(se,{children:d?t.jsx(ct,{message:$}):j})]})]}),t.jsx(Je,{children:t.jsxs(ce,{children:[t.jsx(je,{children:"Write down how much water you will drink:"}),t.jsx(le,{...a("dailyNorma",{required:!0}),type:"number",step:"any",max:15,placeholder:"0"}),i.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(Qe,{className:"btn",type:"submit",children:"Save"})]})})},dt=()=>{const[r,c]=B.useState(!1),a=()=>{c(!r)},e=X(Be);return t.jsxs(t.Fragment,{children:[t.jsxs(tt,{children:[t.jsx(nt,{children:"My daily norma"}),t.jsxs(at,{children:[t.jsxs(it,{children:[e," L"]}),r&&t.jsx(ee,{setVisible:a,title:"My Daily Norma",daily:!0,children:t.jsx(lt,{onClose:a})}),t.jsx(rt,{type:"button",onClick:a,children:"Edit"})]})]}),t.jsx(et,{})]})},ut=g.div`
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

  @media ${M.tablet} {
    .water-title {
      margin-bottom: 16px;
    }
  }
`,pt=g.li`
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

  @media ${M.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
  }
`,Se=g.div`
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

  @media ${M.tablet} {
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

  @media ${M.desktop} {
  }
`,ht=g.div`
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

  @media ${M.tablet} {
    .delete-btn-box {
      display: flex;
      flex-direction: row;
      gap: 24px;
      justify-content: end;
    }
  }
`,ne=r=>r.water,he=te(ne,r=>r.amountDaily),mt=te(ne,r=>r.amountDaily.percentage),ft=te(ne,r=>r.amountMonthly),gt=te(ne,r=>r.isLoading),xt=te(ne,r=>r.error),Ne=({title:r,show:c,closeModal:a,id:e})=>{const{register:n,handleSubmit:i,formState:{errors:u}}=ue(),h=J(),{entries:d}=X(he),x=d.find(f=>f._id===e),[m,b]=B.useState({count:d.length>0?d[d.length-1].waterVolume:0,inputValue:d.length>0?d[d.length-1].waterVolume:"0"}),[v,N]=B.useState([]);B.useEffect(()=>{const f=new Date,_=f.getMinutes(),F=f.getHours()>=12?"PM":"AM",I=(f.getHours()%12||12).toString().padStart(2,"0"),O=_.toString().padStart(2,"0"),U=`${I}:${O} ${F}`,L=f.getHours(),P=f.getMinutes();let s=L,l=Math.ceil(P/5)*5;l>=60&&(s++,l-=60);const p=[];for(let w=s*60+l;w<24*60;w+=5){const k=(w%60).toString().padStart(2,"0"),y=Math.floor(w/60)<12?"AM":"PM",S=(Math.floor(w/60)%12||12).toString().padStart(2,"0");p.push(`${S}:${k} ${y}`)}N([U,...p])},[]);const j=f=>{m.count+f>=0&&b({inputValue:String(f),count:f})},$=f=>{const{value:_}=f.target;b(F=>({...F,inputValue:_}))},E=()=>{j(Number(m.inputValue))},R=f=>{f.key==="-"&&f.preventDefault()},o=f=>{const _={time:f.time,waterVolume:Number(m.inputValue)};_.waterVolume===0?alert("The amount of water cannot be 0!"):u.time||(h(c&&e?pe({..._,id:e}):De(_)),a())};return t.jsxs(Se,{children:[t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>j(m.count-50),type:"button",children:t.jsx(Z,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[m.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>j(m.count+50),type:"button",children:t.jsx(Z,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:i(o),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:v.map(f=>t.jsx("option",{value:f,children:f},f))}),u.time&&t.jsx("span",{children:"Please choose a time that is divisible by 5"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:m.inputValue,onChange:$,onBlur:E,onKeyPress:R,className:"water-input"}),u.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsx("span",{className:"water-amount",children:c?`${x==null?void 0:x.waterVolume}ml`:`${m.count}ml`}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},bt=({closeModal:r,_id:c})=>{const a=J(),e=()=>{r()},n=i=>{a(Fe(i)),r()};return t.jsxs(ht,{children:[t.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:()=>n(c),children:"Delete"})]})]})},vt=({title:r,closeModal:c,id:a})=>{const{register:e,handleSubmit:n,formState:{errors:i}}=ue(),u=J(),{entries:h}=X(he),d=h.find(o=>o._id===a),[x,m]=B.useState({count:d?d.waterVolume:0,inputValue:d?d.waterVolume:"0"}),[b,v]=B.useState([]);B.useEffect(()=>{const o=new Date,f=o.getMinutes(),_=o.getHours()>=12?"PM":"AM",F=(o.getHours()%12||12).toString().padStart(2,"0"),I=f.toString().padStart(2,"0"),O=`${F}:${I} ${_}`,U=o.getHours(),L=o.getMinutes();let P=U,s=Math.ceil(L/5)*5;s>=60&&(P++,s-=60);const l=[];for(let p=P*60+s;p<24*60;p+=5){const w=(p%60).toString().padStart(2,"0"),k=Math.floor(p/60)<12?"AM":"PM",y=(Math.floor(p/60)%12||12).toString().padStart(2,"0");l.push(`${y}:${w} ${k}`)}v([O,...l])},[]);const N=o=>{x.count+o>=0&&m({inputValue:String(o),count:o})},j=o=>{const{value:f}=o.target;m(_=>({..._,inputValue:f}))},$=()=>{N(Number(x.inputValue))},E=o=>{o.key==="-"&&o.preventDefault()},R=o=>{const f={time:o.time,waterVolume:Number(x.inputValue)};f.waterVolume===0?alert("Кількість води не може бути 0!"):i.time||(u(a?pe({...f,id:a}):De(f)),c())};return t.jsxs(Se,{children:[t.jsxs("div",{className:"water-card",children:[t.jsx(Z,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[d==null?void 0:d.waterVolume," ml"]}),t.jsx("p",{className:"time",children:d==null?void 0:d.time})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>N(x.count-50),type:"button",children:t.jsx(Z,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[x.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>N(x.count+50),type:"button",children:t.jsx(Z,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:n(R),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...e("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:b.map(o=>t.jsx("option",{value:o,children:o},o))}),i.time&&t.jsx("span",{children:"Please choose a time that is divisible by 5"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:x.inputValue,onChange:j,onBlur:$,onKeyPress:E,className:"water-input"}),i.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[d==null?void 0:d.waterVolume,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},wt=({_id:r,waterVolume:c,time:a})=>{const[e,n]=B.useState(!1),[i,u]=B.useState(!1),h=J(),d=x=>{h(pe(x))};return t.jsxs(pt,{children:[t.jsxs("div",{className:"water-info",children:[t.jsx(Z,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[c," ml"]}),t.jsx("p",{className:"time",children:a})]}),t.jsxs("div",{className:"edit-delete-btn-box",children:[t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>n(!0),children:t.jsx(Z,{className:"edit-water-icon",id:"pencil"})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{u(!0)},children:t.jsx(Z,{className:"delete-water-icon",id:"delete"})})]}),e&&t.jsx(ee,{setVisible:n,title:"Edit the entered amount of water",children:t.jsx(vt,{title:"Correct entered data:",handleUpdateWater:d,closeModal:()=>{n(!1)},id:r})}),i&&t.jsx(ee,{setVisible:u,title:"Delete water",delete:!0,children:t.jsx(bt,{title:"Delete entry?",show:!1,closeModal:()=>{u(!1)},_id:r})})]})},yt=()=>{const[r,c]=B.useState(!1),{entries:a}=X(he),e=X(gt),n=X(xt),i=()=>{c(!1)};return t.jsxs(ut,{children:[t.jsx("h3",{className:"water-title",children:"Today"}),e&&!n&&t.jsx(Ve,{}),a.length===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx("ul",{className:"water-list",children:a.length>0&&a.map(({_id:u,waterVolume:h,time:d})=>t.jsx(wt,{_id:u,waterVolume:h,time:d},u))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>c(!0),children:[t.jsx(Z,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(ee,{setVisible:c,title:"Add water",children:t.jsx(Ne,{title:"Choose a value:",show:!1,closeModal:i})})]})},jt=g.div`
  width: 264px;
  height: 500px;
  background-color: transparent;

  @media ${M.tablet} {
    width: 646px;
    height: 315px;
  }
  @media ${M.desktop} {

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
`,kt=g.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  justify-content: center;
  gap: 16px 26px;

  @media ${M.tablet} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }
  @media ${M.desktop} {
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
`,Oe=g.span`
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
`,Mt=g.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,Tt=g.div`
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
`,Dt=g(Oe)`
  border: #ff9d43 1px solid;
`,St=({setIsModalOpen:r,isModalOpen:c,modalContent:a,closeModal:e})=>{const n=B.useRef(null);return B.useEffect(()=>{const i=u=>{u instanceof KeyboardEvent&&u.key==="Escape"&&e()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e]),Ce(n,()=>{c&&r(!1)}),t.jsx(Mt,{ref:n,className:c?"open":"",children:t.jsxs(Tt,{children:[t.jsx("button",{className:"close hover active",onClick:()=>e(),children:"×"}),t.jsx("h3",{className:"title-modal",children:`${a==null?void 0:a.day}, ${a==null?void 0:a.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:a==null?void 0:a.dailyNorma})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsxs("span",{className:"span-modal",children:[(a==null?void 0:a.percent)!==void 0&&(a==null?void 0:a.percent)>=100?100:a==null?void 0:a.percent,"%"]})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:a==null?void 0:a.amountOfWater})]})]})})},Nt=()=>{const r=()=>new Date,[c,a]=B.useState(r()),[e,n]=B.useState(null),[i,u]=B.useState(!1),[h,d]=B.useState(null),x=X(ft),m=`${c.getFullYear()}-${(c.getMonth()+1).toString().padStart(2,"0")}`,b=J();B.useEffect(()=>{b(ze(m))},[b,m]);const v=o=>{const f=o.getFullYear(),_=o.getMonth(),F=new Date(f,_+1,0).getDate(),I=[];for(let O=1;O<=F;O++)I.push({day:O,month:o.toLocaleString("en-US",{month:"long"})});return I},N=()=>{a(o=>new Date(o.getFullYear(),o.getMonth()-1)),n(null)},j=()=>{const o=new Date(c.getFullYear(),c.getMonth()+1);o<=r()&&(a(o),n(null))},$=o=>{if(e===o.day){E(),n(null);return}const f=document.getElementById(`day-${o.day}`);if(!f)return;const _=f.getBoundingClientRect(),F=292,I=188,O=window.innerWidth,U=window.innerHeight;let L=_.top-I-10,P=window.innerWidth<=768?window.innerWidth/2-F/2:_.left+_.width/2-F/2;L<0&&(L=0),L+I>U&&(L=U-I),P<0&&(P=0),P+F>O&&(P=O-F),n(o.day),d(o),document.documentElement.style.setProperty("--modal-top",`${L}px`),document.documentElement.style.setProperty("--modal-left",`${P}px`),u(!0)},E=()=>{u(!1)},R=o=>{if(!(x!=null&&x.month)){o.percent=0,o.amountOfWater=0,o.dailyNorma=2;return}const f=o.day.toString(),_=x.month.map(F=>F.date.slice(-2).trim()).indexOf(f);if(_===-1&&(o.percent=0,o.amountOfWater=0,o.dailyNorma=2),_!==-1){const{amountOfWater:F,dailyNorma:I,percentage:O}=x.month[_];o.percent=O,o.amountOfWater=F,o.dailyNorma=I}};return t.jsxs(jt,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:N,children:"<"}),t.jsxs("div",{className:"month-title",children:[c.toLocaleString("en-US",{month:"long"}),","," ",c.getFullYear()]}),c.getMonth()===new Date().getMonth()&&c.getFullYear()===new Date().getFullYear()?t.jsx("button",{className:"button disabled",disabled:!0,children:">"}):t.jsx("button",{className:"button",onClick:j,children:">"})]})]}),t.jsx(kt,{children:v(c).map(o=>(R(o),t.jsxs("li",{id:`day-${o.day}`,className:"hover active",children:[o.percent!==void 0&&o.percent<100?t.jsx(Dt,{className:`day ${e===o.day?"selected":""}`,onClick:()=>$(o),children:o.day}):t.jsx(Oe,{className:`day ${e===o.day?"selected":""}`,onClick:()=>$(o),children:o.day}),t.jsx("p",{className:`procent ${o.percent!==void 0&&o.percent<100?"lowPercentage":""}`,children:`${o.percent!==void 0&&o.percent>=100?100:o.percent}%`})]},o.day)))}),t.jsx(St,{setIsModalOpen:u,isModalOpen:i,modalContent:h,closeModal:E})]})};var de={},me={},fe={},oe={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(c){c.Right="to right",c.Left="to left",c.Down="to bottom",c.Up="to top"}(r.Direction||(r.Direction={}))})(oe);(function(r){var c=H&&H.__spreadArray||function(s,l,p){if(p||arguments.length===2)for(var w=0,k=l.length,y;w<k;w++)(y||!(w in l))&&(y||(y=Array.prototype.slice.call(l,0,w)),y[w]=l[w]);return s.concat(y||Array.prototype.slice.call(l))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var a=B,e=oe,n=function(s){var l=s.toString().split(".")[1];return l?l.length:0};r.getStepDecimals=n;function i(s){return s.touches&&s.touches.length||s.changedTouches&&s.changedTouches.length}r.isTouchEvent=i;function u(s,l,p){var w=(l-s)/p,k=8,y=Number(w.toFixed(k));return parseInt(y.toString(),10)===y}r.isStepDivisible=u;function h(s,l,p,w,k,y,S){var D=1e11;if(s=Math.round(s*D)/D,!y){var z=S[l-1],A=S[l+1];if(z&&z>s)return z;if(A&&A<s)return A}if(s>w)return w;if(s<p)return p;var Y=Math.floor(s*D-p*D)%Math.floor(k*D),W=Math.floor(s*D-Math.abs(Y)),K=Y===0?s:W/D,C=Math.abs(Y/D)<k/2?K:K+k,q=(0,r.getStepDecimals)(k);return parseFloat(C.toFixed(q))}r.normalizeValue=h;function d(s,l,p){return(s-l)/(p-l)}r.relativeValue=d;function x(s){return s===e.Direction.Up||s===e.Direction.Down}r.isVertical=x;function m(s,l,p){if(l>=p)throw new RangeError("min (".concat(l,") is equal/bigger than max (").concat(p,")"));if(s<l)throw new RangeError("value (".concat(s,") is smaller than min (").concat(l,")"));if(s>p)throw new RangeError("value (".concat(s,") is bigger than max (").concat(p,")"))}r.checkBoundaries=m;function b(s,l,p){return s<l?l:s>p?p:s}r.checkValuesAgainstBoundaries=b;function v(s){if(!(s.length<2)&&!s.slice(1).every(function(l,p){return s[p]<=l}))throw new RangeError("values={[".concat(s,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=v;function N(s){var l=window.getComputedStyle(s);return{top:parseInt(l["margin-top"],10),bottom:parseInt(l["margin-bottom"],10),left:parseInt(l["margin-left"],10),right:parseInt(l["margin-right"],10)}}r.getMargin=N;function j(s){var l=window.getComputedStyle(s);return{top:parseInt(l["padding-top"],10)+parseInt(l["border-top-width"],10),bottom:parseInt(l["padding-bottom"],10)+parseInt(l["border-bottom-width"],10),left:parseInt(l["padding-left"],10)+parseInt(l["border-left-width"],10),right:parseInt(l["padding-right"],10)+parseInt(l["border-right-width"],10)}}r.getPaddingAndBorder=j;function $(s,l,p){var w=p?-1:1;s.forEach(function(k,y){return R(k,w*l[y].x,l[y].y)})}r.translateThumbs=$;function E(s,l,p,w){for(var k=0,y=P(s[0],l,p,w),S=1;S<s.length;S++){var D=P(s[S],l,p,w);D<y&&(y=D,k=S)}return k}r.getClosestThumbIndex=E;function R(s,l,p){s.style.transform="translate(".concat(l,"px, ").concat(p,"px)")}r.translate=R;var o=function(s){var l=[],p=null,w=function(){for(var k=[],y=0;y<arguments.length;y++)k[y]=arguments[y];l=k,!p&&(p=requestAnimationFrame(function(){p=null,s.apply(void 0,l)}))};return w};r.schd=o;function f(s,l,p){var w=s.slice(0);return w[l]=p,w}r.replaceAt=f;function _(s){var l=s.values,p=s.colors,w=s.min,k=s.max,y=s.direction,S=y===void 0?e.Direction.Right:y,D=s.rtl,z=D===void 0?!1:D;z&&S===e.Direction.Right?S=e.Direction.Left:z&&e.Direction.Left&&(S=e.Direction.Right);var A=l.slice(0).sort(function(W,K){return W-K}).map(function(W){return(W-w)/(k-w)*100}),Y=A.reduce(function(W,K,C){return"".concat(W,", ").concat(p[C]," ").concat(K,"%, ").concat(p[C+1]," ").concat(K,"%")},"");return"linear-gradient(".concat(S,", ").concat(p[0]," 0%").concat(Y,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=_;function F(){}r.voidFn=F;function I(s){throw new Error("Didn't expect to get here")}r.assertUnreachable=I;var O=function(s,l,p,w,k){k===void 0&&(k=function(S){return S});var y=Math.ceil(c([s],Array.from(s.children),!0).reduce(function(S,D){var z=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(p)&&D.childElementCount===0){var A=D.cloneNode(!0);A.innerHTML=k(l.toFixed(w)),A.style.visibility="hidden",document.body.appendChild(A),z=Math.ceil(A.getBoundingClientRect().width),document.body.removeChild(A)}return z>S?z:S},s.getBoundingClientRect().width));return y},U=function(s,l,p,w,k,y,S){S===void 0&&(S=function(A){return A});var D=[],z=function(A){var Y=O(p[A],w[A],k,y,S),W=l[A].x;l.forEach(function(K,C){var q=K.x,G=O(p[C],w[C],k,y,S);A!==C&&(W>=q&&W<=q+G||W+Y>=q&&W+Y<=q+G)&&(D.includes(C)||(D.push(A),D.push(C),D=c(c([],D,!0),[A,C],!1),z(C)))})};return z(s),Array.from(new Set(D.sort()))},L=function(s,l,p,w,k,y){w===void 0&&(w=.1),k===void 0&&(k=" - "),y===void 0&&(y=function(C){return C});var S=(0,r.getStepDecimals)(w),D=(0,a.useState)({}),z=D[0],A=D[1],Y=(0,a.useState)(y(l[p].toFixed(S))),W=Y[0],K=Y[1];return(0,a.useEffect)(function(){if(s){var C=s.getThumbs();if(C.length<1)return;var q={},G=s.getOffsets(),re=U(p,G,C,l,k,S,y),ge=y(l[p].toFixed(S));if(re.length){var ae=re.reduce(function(Q,ve,we,ye){return Q.length?c(c([],Q,!0),[G[ye[we]].x],!1):[G[ye[we]].x]},[]);if(Math.min.apply(Math,ae)===G[p].x){var xe=[];re.forEach(function(Q){xe.push(l[Q].toFixed(S))}),ge=Array.from(new Set(xe.sort(function(Q,ve){return parseFloat(Q)-parseFloat(ve)}))).map(y).join(k);var Ie=Math.min.apply(Math,ae),be=Math.max.apply(Math,ae),$e=C[re[ae.indexOf(be)]].getBoundingClientRect().width;q.left="".concat(Math.abs(Ie-(be+$e))/2,"px"),q.transform="translate(-50%, 0)"}else q.visibility="hidden"}K(ge),A(q)}},[s,l]),[W,z]};r.useThumbOverlap=L;function P(s,l,p,w){var k=s.getBoundingClientRect(),y=k.left,S=k.top,D=k.width,z=k.height;return x(w)?Math.abs(p-(S+z/2)):Math.abs(l-(y+D/2))}})(fe);var Ot=H&&H.__extends||function(){var r=function(c,a){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},r(c,a)};return function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");r(c,a);function e(){this.constructor=c}c.prototype=a===null?Object.create(a):(e.prototype=a.prototype,new e)}}(),Rt=H&&H.__createBinding||(Object.create?function(r,c,a,e){e===void 0&&(e=a);var n=Object.getOwnPropertyDescriptor(c,a);(!n||("get"in n?!c.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return c[a]}}),Object.defineProperty(r,e,n)}:function(r,c,a,e){e===void 0&&(e=a),r[e]=c[a]}),Et=H&&H.__setModuleDefault||(Object.create?function(r,c){Object.defineProperty(r,"default",{enumerable:!0,value:c})}:function(r,c){r.default=c}),_t=H&&H.__importStar||function(r){if(r&&r.__esModule)return r;var c={};if(r!=null)for(var a in r)a!=="default"&&Object.prototype.hasOwnProperty.call(r,a)&&Rt(c,r,a);return Et(c,r),c},Me=H&&H.__spreadArray||function(r,c,a){if(a||arguments.length===2)for(var e=0,n=c.length,i;e<n;e++)(i||!(e in c))&&(i||(i=Array.prototype.slice.call(c,0,e)),i[e]=c[e]);return r.concat(i||Array.prototype.slice.call(c))};Object.defineProperty(me,"__esModule",{value:!0});var ie=_t(B),T=fe,V=oe,It=["ArrowRight","ArrowUp","k","PageUp"],$t=["ArrowLeft","ArrowDown","j","PageDown"],Pt=function(r){Ot(c,r);function c(a){var e=r.call(this,a)||this;if(e.trackRef=ie.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,i){return i}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,i=n.direction,u=n.values,h=n.min,d=n.max,x=e.trackRef.current,m=x.getBoundingClientRect(),b=(0,T.getPaddingAndBorder)(x);return e.getThumbs().map(function(v,N){var j={x:0,y:0},$=v.getBoundingClientRect(),E=(0,T.getMargin)(v);switch(i){case V.Direction.Right:return j.x=(E.left+b.left)*-1,j.y=(($.height-m.height)/2+b.top)*-1,j.x+=m.width*(0,T.relativeValue)(u[N],h,d)-$.width/2,j;case V.Direction.Left:return j.x=(E.right+b.right)*-1,j.y=(($.height-m.height)/2+b.top)*-1,j.x+=m.width-m.width*(0,T.relativeValue)(u[N],h,d)-$.width/2,j;case V.Direction.Up:return j.x=(($.width-m.width)/2+E.left+b.left)*-1,j.y=-b.left,j.y+=m.height-m.height*(0,T.relativeValue)(u[N],h,d)-$.height/2,j;case V.Direction.Down:return j.x=(($.width-m.width)/2+E.left+b.left)*-1,j.y=-b.left,j.y+=m.height*(0,T.relativeValue)(u[N],h,d)-$.height/2,j;default:return(0,T.assertUnreachable)(i)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(i){return i===n.target||i.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var i;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var u=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(h){return h.current}),n.clientX,n.clientY,e.props.direction);(i=e.thumbRefs[u].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,T.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var i;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var u=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(h){return h.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(i=e.thumbRefs[u].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var i=(0,T.isTouchEvent)(n);if(!(!i&&n.button!==0)){var u=e.getTargetIndex(n);u!==-1&&(i?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:u,thumbZIndexes:e.state.thumbZIndexes.map(function(h,d){return d===u?Math.max.apply(Math,e.state.thumbZIndexes):h<=e.state.thumbZIndexes[u]?h:h-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var i=e.props,u=i.values,h=i.onChange,d=i.step,x=i.rtl,m=i.direction,b=e.state.isChanged,v=e.getTargetIndex(n.nativeEvent),N=x||m===V.Direction.Left||m===V.Direction.Down?-1:1;v!==-1&&(It.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:v,isChanged:!0}),h((0,T.replaceAt)(u,v,e.normalizeValue(u[v]+N*(n.key==="PageUp"?d*10:d),v)))):$t.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:v,isChanged:!0}),h((0,T.replaceAt)(u,v,e.normalizeValue(u[v]-N*(n.key==="PageDown"?d*10:d),v)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){b&&e.fireOnFinalChange()}):b&&e.fireOnFinalChange())},e.onKeyUp=function(n){var i=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){i&&e.fireOnFinalChange()})},e.onMove=function(n,i){var u=e.state,h=u.draggedThumbIndex,d=u.draggedTrackPos,x=e.props,m=x.direction,b=x.min,v=x.max,N=x.onChange,j=x.values,$=x.step,E=x.rtl;if(h===-1&&d[0]===-1&&d[1]===-1)return null;var R=e.trackRef.current;if(!R)return null;var o=R.getBoundingClientRect(),f=(0,T.isVertical)(m)?o.height:o.width;if(d[0]!==-1&&d[1]!==-1){var _=n-d[0],F=i-d[1],I=0;switch(m){case V.Direction.Right:case V.Direction.Left:I=_/f*(v-b);break;case V.Direction.Down:case V.Direction.Up:I=F/f*(v-b);break;default:(0,T.assertUnreachable)(m)}if(E&&(I*=-1),Math.abs(I)>=$/2){for(var O=0;O<e.thumbRefs.length;O++){if(j[O]===v&&Math.sign(I)===1||j[O]===b&&Math.sign(I)===-1)return;var U=j[O]+I;U>v?I=v-j[O]:U<b&&(I=b-j[O])}for(var L=j.slice(0),O=0;O<e.thumbRefs.length;O++)L=(0,T.replaceAt)(L,O,e.normalizeValue(j[O]+I,O));e.setState({draggedTrackPos:[n,i]}),N(L)}}else{var P=0;switch(m){case V.Direction.Right:P=(n-o.left)/f*(v-b)+b;break;case V.Direction.Left:P=(f-(n-o.left))/f*(v-b)+b;break;case V.Direction.Down:P=(i-o.top)/f*(v-b)+b;break;case V.Direction.Up:P=(f-(i-o.top))/f*(v-b)+b;break;default:(0,T.assertUnreachable)(m)}E&&(P=v+b-P),Math.abs(j[h]-P)>=$/2&&N((0,T.replaceAt)(j,h,e.normalizeValue(P,h)))}},e.normalizeValue=function(n,i){var u=e.props,h=u.min,d=u.max,x=u.step,m=u.allowOverlap,b=u.values;return(0,T.normalizeValue)(n,i,h,d,x,m,b)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,i=n.onFinalChange,u=n.values;i&&i(u)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var i=0;i<e.numOfMarks+1;i++)e.markRefs[i]=ie.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),i=parseInt(n.width,10),u=parseInt(n.height,10),h=parseInt(n.paddingLeft,10),d=parseInt(n.paddingTop,10),x=[],m=0;m<e.numOfMarks+1;m++){var b=9999,v=9999;if(e.markRefs[m].current){var N=e.markRefs[m].current.getBoundingClientRect();b=N.height,v=N.width}e.props.direction===V.Direction.Left||e.props.direction===V.Direction.Right?x.push([Math.round(i/e.numOfMarks*m+h-v/2),-Math.round((b-u)/2)]):x.push([Math.round(u/e.numOfMarks*m+d-b/2),-Math.round((v-i)/2)])}e.setState({markOffsets:x})}},a.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,T.schd)(e.onMouseMove),e.schdOnTouchMove=(0,T.schd)(e.onTouchMove),e.schdOnEnd=(0,T.schd)(e.onEnd),e.thumbRefs=a.values.map(function(){return ie.createRef()}),e.updateMarkRefs(a),e}return c.prototype.componentDidMount=function(){var a=this,e=this.props,n=e.values,i=e.min,u=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",a.onResize)},unobserve:function(){return window.removeEventListener("resize",a.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,T.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(h){return(0,T.checkBoundaries)(h,a.props.min,a.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(h){(0,T.isStepDivisible)(i,h,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},c.prototype.componentDidUpdate=function(a,e){var n=this.props,i=n.max,u=n.min,h=n.step,d=n.values,x=n.rtl;(a.max!==i||a.min!==u||a.step!==h)&&this.updateMarkRefs(this.props),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),x),(a.max!==i||a.min!==u||a.step!==h||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),d.forEach(function(m){(0,T.isStepDivisible)(u,m,h)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},c.prototype.componentWillUnmount=function(){var a={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,a),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},c.prototype.render=function(){var a=this,e=this.props,n=e.renderTrack,i=e.renderThumb,u=e.renderMark,h=u===void 0?function(){return null}:u,d=e.values,x=e.min,m=e.max,b=e.allowOverlap,v=e.disabled,N=this.state,j=N.draggedThumbIndex,$=N.thumbZIndexes,E=N.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:j>-1?"grabbing":this.props.draggableTrack?(0,T.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!v?"pointer":"inherit"},onMouseDown:v?T.voidFn:this.onMouseDownTrack,onTouchStart:v?T.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:v,children:Me(Me([],E.map(function(R,o,f){return h({props:{style:a.props.direction===V.Direction.Left||a.props.direction===V.Direction.Right?{position:"absolute",left:"".concat(R[0],"px"),marginTop:"".concat(R[1],"px")}:{position:"absolute",top:"".concat(R[0],"px"),marginLeft:"".concat(R[1],"px")},key:"mark".concat(o),ref:a.markRefs[o]},index:o})}),!0),d.map(function(R,o){var f=a.state.draggedThumbIndex===o;return i({index:o,value:R,isDragged:f,props:{style:{position:"absolute",zIndex:$[o],cursor:v?"inherit":f?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:o,tabIndex:v?void 0:0,"aria-valuemax":b?m:d[o+1]||m,"aria-valuemin":b?x:d[o-1]||x,"aria-valuenow":R,draggable:!1,ref:a.thumbRefs[o],role:"slider",onKeyDown:v?T.voidFn:a.onKeyDown,onKeyUp:v?T.voidFn:a.onKeyUp}})}),!0)})},c.defaultProps={step:1,direction:V.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},c}(ie.Component);me.default=Pt;(function(r){var c=H&&H.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var a=c(me);r.Range=a.default;var e=fe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=oe;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(de);const At=g.div`
  width: 280px;
  @media ${M.tablet} {
    width: 704px;
  }
  @media ${M.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,Bt=g.div`
  @media ${M.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${M.desktop} {
    display: flex;
    gap: 24px;
  }
`,Ft=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Vt=g.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${M.tablet} {
    padding-bottom: 16px;
  }
`,Ct=g.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${M.tablet} {
    width: 325px;
  }
  @media ${M.desktop} {
    width: 360px;
  }
`,zt=g.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,Lt=g.div`
  position: relative;
  top: 24px;
`,Wt=g.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,Ht=g.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,Te=g.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Ut=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${M.tablet} {
    width: 400px;
  }
  @media ${M.desktop} {
    width: 592px;
  }
`,Yt=g.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${M.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${M.desktop} {
    width: 178px;
  }
`,Kt=()=>{const[r,c]=B.useState(!1),a=X(mt),e=a>100?100:a,n=()=>{c(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(At,{children:t.jsxs(Bt,{children:[t.jsxs("div",{children:[t.jsx(Vt,{children:"Today"}),t.jsx(Ft,{children:t.jsx(de.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:i,children:u})=>t.jsx(Ct,{...i,style:{...i.style,background:de.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:u}),renderThumb:({props:i})=>B.createElement(zt,{...i,key:i.key},t.jsx(Lt,{children:t.jsxs(Wt,{children:[e,"%"]})}))})}),t.jsxs(Ht,{children:[e<=7?t.jsx("span",{children:" "}):t.jsx(Te,{children:"0%"}),e>=85?t.jsx("span",{children:" "}):t.jsx(Te,{children:"100%"})]})]}),t.jsx(Ut,{className:"hover",children:t.jsxs(Yt,{className:"btn",onClick:()=>c(!0),children:[t.jsx(Z,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),r&&t.jsx(ee,{setVisible:c,title:"Add water",children:t.jsx(Ne,{title:"Choose a value",show:!1,closeModal:n})})]})},Re="/agua_vivo_app/assets/BackgroundHomeMobile--bJS4c7V.png",Ee="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",_e="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",qt="/agua_vivo_app/assets/BottleHomeMobile-YibEMZyu.png",Zt="/agua_vivo_app/assets/BottleHomeTablet-obPHwKf-.png",Xt="/agua_vivo_app/assets/BottleHomeDesk-odvCWdoI.png",Gt=g.section`
  background-image: url("${Re}");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 70px;
  background-position-y: 100px;
  @media ${M.tablet} {
    background-image: url("${Ee}");
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${M.desktop} {
    background-image: url("${_e}");
   
  }
`,Jt=g.div`
display: flex;
flex-direction: column;
gap:40px;
@media ${M.desktop} {
    
    flex-direction: row;
      justify-content:space-between;
  }
`,Qt=g.div`
  background-image: url("${qt}");
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 10px;
  background-position-y: 90px;

  @media ${M.tablet} {
    background-image: url("${Zt}");
    background-position-y: 50px;
    background-position-x: 90px;
  }
  @media ${M.desktop} {
    background-image: url("${Xt}");
    background-position-y: 0px;
    background-position-x: -50px;
  }
`,en=g.div`
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

  @media ${M.tablet} {
    padding: 32px 24px;
    background-image: url("${Ee}");
    
  }

  @media ${M.desktop} {
    width: 592px;
    max-height: 688px;
    background-image: url("${_e}");
  }
`,nn=()=>{const r=J();return B.useEffect(()=>{r(Le())},[r]),t.jsx(Gt,{children:t.jsx("div",{className:"container",children:t.jsxs(Jt,{children:[t.jsxs(Qt,{children:[t.jsx(dt,{}),t.jsx(Kt,{})]}),t.jsxs(en,{children:[t.jsx(yt,{}),t.jsx(Nt,{})]})]})})})};export{nn as default};
