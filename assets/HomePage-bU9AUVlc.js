import{u as g,d as M,j as t,a as Z,s as Pe,b as pe,c as J,e as Fe,r as F,f as Se,M as ee,g as te,I as X,h as he,i as De,k as Ve,L as Be,l as Ce,m as ze,n as U,B as Ne,o as Oe,p as Re,q as Le,t as We,v as Ue,w as He}from"./index-rxVgOhuI.js";const Ye=g.div``,Ke=g.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,qe=g.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ze=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${M.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,Xe=g.div`
  display: flex;
  gap: 24px;
`,ce=g.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,Ge=g.span`
  width: 190px;
  @media ${M.tablet} {
    width: auto;
  }
`,Je=g.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Qe=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,je=g.h3`
  font-size: 18px;
  font-weight: bold;
`,le=g.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,et=g.label`
  display: flex;
  gap: 5px;
`,ke=g.input`
  margin-right: 5px;
`,de=g.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,tt=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,nt=g.button`
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
`,rt=g.div`
  height: 208px;
  margin-bottom: 30px;
  @media ${M.tablet} {
    height: 386px;
    margin-bottom: 16px;
  }
  @media ${M.desktop} {
    position: relative;
    height: 548px;
  }
`,at=g.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${M.desktop} {
    position: absolute;
  }
  
`,it=g.h2`
  font-size: 18px;
  line-height: 1.33;
`,ot=g.button`
  color: #8baeff;
`,st=g.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,ct=g.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${M.tablet} {
    font-size: 24px;
  }
`,lt=g.span`
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
`,dt=g.span`
  color: var(--primary-blue);
  font-size: 18px;
`,ut=({message:r})=>t.jsx(t.Fragment,{children:t.jsx(lt,{children:t.jsx(dt,{children:r})})}),pt=({onClose:r})=>{const c=Z(Pe),{register:a,handleSubmit:e,watch:n,formState:{errors:i}}=pe({defaultValues:{weight:"",time:"",sex:c.gender||"woman",dailyNorma:""},mode:"onChange"}),u=J(),h=E=>{const{dailyNorma:R}=E;u(Fe({dailyNorma:+R})),r()};let d;const x=Number(n("weight")),m=Number(n("time")),b=String(n("sex")),v=(E,R,o)=>o==="man"?String((E*.04+R*.6).toFixed(1))+"L":String((E*.03+R*.4).toFixed(1))+"L",N=(E,R)=>{if(E<20&&E!==0)return d=!0,"You couldn't be less than 20kg";if(R>24)return d=!0,"Day contains only 24H";if(R<0)return d=!0,"Time should be only positive integer"},j=v(x,m,b),_=N(x,m);return t.jsx(Ye,{children:t.jsxs(Ke,{onSubmit:e(h),children:[t.jsxs(qe,{children:[t.jsxs(Ze,{children:[t.jsxs("p",{children:["For girl:",t.jsx(ce,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(ce,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(Je,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Qe,{children:[t.jsx(je,{children:"Calculate your rate:"}),t.jsxs(Xe,{children:[t.jsxs("label",{children:[t.jsx(ke,{...a("sex"),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(ke,{...a("sex"),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(le,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(de,{...a("weight"),type:"number",placeholder:"0"})]}),t.jsxs(le,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(de,{...a("time"),type:"number",placeholder:"0"})]}),t.jsxs(et,{children:[t.jsx(Ge,{children:"The required amount of water in liters per day:"}),t.jsx(ce,{children:d?t.jsx(ut,{message:_}):j})]})]}),t.jsx(tt,{children:t.jsxs(le,{children:[t.jsx(je,{children:"Write down how much water you will drink:"}),t.jsx(de,{...a("dailyNorma",{required:!0}),type:"number",step:"any",min:0,max:15,placeholder:"0"}),i.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(nt,{className:"btn",type:"submit",children:"Save"})]})})},ht=()=>{const[r,c]=F.useState(!1),a=()=>{c(!r)},e=Z(Se);return t.jsx(t.Fragment,{children:t.jsx(rt,{children:t.jsxs(at,{children:[t.jsx(it,{children:"My daily norma"}),t.jsxs(st,{children:[t.jsxs(ct,{children:[e," L"]}),r&&t.jsx(ee,{setVisible:a,title:"My Daily Norma",daily:!0,children:t.jsx(pt,{onClose:a})}),t.jsx(ot,{type:"button",onClick:a,children:"Edit"})]})]})})})},mt=g.div`
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
`,ft=g.li`
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
`,Ee=g.div`
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
`,gt=g.div`
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
`,ne=r=>r.water,oe=te(ne,r=>r.amountDaily);te(ne,r=>r.amountDaily.percentage);const xt=te(ne,r=>r.amountMonthly),bt=te(ne,r=>r.isLoading),vt=te(ne,r=>r.error),$e=({title:r,show:c,closeModal:a,id:e})=>{const{register:n,handleSubmit:i,formState:{errors:u}}=pe(),h=J(),{entries:d}=Z(oe),x=d.find(f=>f._id===e),[m,b]=F.useState({count:d.length>0?d[d.length-1].waterVolume:0,inputValue:d.length>0?d[d.length-1].waterVolume:"0"}),[v,N]=F.useState([]);F.useEffect(()=>{const f=new Date,$=f.getMinutes(),V=f.getHours()>=12?"PM":"AM",I=(f.getHours()%12||12).toString().padStart(2,"0"),O=$.toString().padStart(2,"0"),H=`${I}:${O} ${V}`,L=f.getHours(),A=f.getMinutes();let s=L,l=Math.ceil(A/5)*5;l>=60&&(s++,l-=60);const p=[];for(let w=s*60+l;w<24*60;w+=5){const k=(w%60).toString().padStart(2,"0"),y=Math.floor(w/60)<12?"AM":"PM",D=(Math.floor(w/60)%12||12).toString().padStart(2,"0");p.push(`${D}:${k} ${y}`)}N([H,...p])},[]);const j=f=>{m.count+f>=0&&b({inputValue:String(f),count:f})},_=f=>{const{value:$}=f.target;b(V=>({...V,inputValue:$}))},E=()=>{j(Number(m.inputValue))},R=f=>{f.key==="-"&&f.preventDefault()},o=f=>{const $={time:f.time,waterVolume:Number(m.inputValue)};$.waterVolume===0?alert("The amount of water cannot be 0!"):u.time||(h(c&&e?he({...$,id:e}):De($)),a())};return t.jsxs(Ee,{children:[t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>j(m.count-50),type:"button",children:t.jsx(X,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[m.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>j(m.count+50),type:"button",children:t.jsx(X,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:i(o),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:v.map(f=>t.jsx("option",{value:f,children:f},f))}),u.time&&t.jsx("span",{children:"Please choose a time that is divisible by 5"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:m.inputValue,onChange:_,onBlur:E,onKeyPress:R,className:"water-input"}),u.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsx("span",{className:"water-amount",children:c?`${x==null?void 0:x.waterVolume}ml`:`${m.count}ml`}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},wt=({closeModal:r,_id:c})=>{const a=J(),e=()=>{r()},n=i=>{a(Ve(i)),r()};return t.jsxs(gt,{children:[t.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:()=>n(c),children:"Delete"})]})]})},yt=({title:r,closeModal:c,id:a})=>{const{register:e,handleSubmit:n,formState:{errors:i}}=pe(),u=J(),{entries:h}=Z(oe),d=h.find(o=>o._id===a),[x,m]=F.useState({count:d?d.waterVolume:0,inputValue:d?d.waterVolume:"0"}),[b,v]=F.useState([]);F.useEffect(()=>{const o=new Date,f=o.getMinutes(),$=o.getHours()>=12?"PM":"AM",V=(o.getHours()%12||12).toString().padStart(2,"0"),I=f.toString().padStart(2,"0"),O=`${V}:${I} ${$}`,H=o.getHours(),L=o.getMinutes();let A=H,s=Math.ceil(L/5)*5;s>=60&&(A++,s-=60);const l=[];for(let p=A*60+s;p<24*60;p+=5){const w=(p%60).toString().padStart(2,"0"),k=Math.floor(p/60)<12?"AM":"PM",y=(Math.floor(p/60)%12||12).toString().padStart(2,"0");l.push(`${y}:${w} ${k}`)}v([O,...l])},[]);const N=o=>{x.count+o>=0&&m({inputValue:String(o),count:o})},j=o=>{const{value:f}=o.target;m($=>({...$,inputValue:f}))},_=()=>{N(Number(x.inputValue))},E=o=>{o.key==="-"&&o.preventDefault()},R=o=>{const f={time:o.time,waterVolume:Number(x.inputValue)};f.waterVolume===0?alert("Кількість води не може бути 0!"):i.time||(u(a?he({...f,id:a}):De(f)),c())};return t.jsxs(Ee,{children:[t.jsxs("div",{className:"water-card",children:[t.jsx(X,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[d==null?void 0:d.waterVolume," ml"]}),t.jsx("p",{className:"time",children:d==null?void 0:d.time})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsx("button",{className:"counter-btn",onClick:()=>N(x.count-50),type:"button",children:t.jsx(X,{className:"icon-minus",id:"minus"})}),t.jsxs("span",{className:"water-amount-span",children:[x.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>N(x.count+50),type:"button",children:t.jsx(X,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:n(R),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...e("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:b.map(o=>t.jsx("option",{value:o,children:o},o))}),i.time&&t.jsx("span",{children:"Please choose a time that is divisible by 5"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:x.inputValue,onChange:j,onBlur:_,onKeyPress:E,className:"water-input"}),i.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[d==null?void 0:d.waterVolume,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},jt=({_id:r,waterVolume:c,time:a})=>{const[e,n]=F.useState(!1),[i,u]=F.useState(!1),h=J(),d=x=>{h(he(x))};return t.jsxs(ft,{children:[t.jsxs("div",{className:"water-info",children:[t.jsx(X,{className:"water-glass-icon",id:"water"}),t.jsxs("p",{className:"water-amount-card",children:[c," ml"]}),t.jsx("p",{className:"time",children:a})]}),t.jsxs("div",{className:"edit-delete-btn-box",children:[t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>n(!0),children:t.jsx(X,{className:"edit-water-icon",id:"pencil"})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{u(!0)},children:t.jsx(X,{className:"delete-water-icon",id:"delete"})})]}),e&&t.jsx(ee,{setVisible:n,title:"Edit the entered amount of water",children:t.jsx(yt,{title:"Correct entered data:",handleUpdateWater:d,closeModal:()=>{n(!1)},id:r})}),i&&t.jsx(ee,{setVisible:u,title:"Delete water",delete:!0,children:t.jsx(wt,{title:"Delete entry?",show:!1,closeModal:()=>{u(!1)},_id:r})})]})},kt=()=>{const[r,c]=F.useState(!1),{entries:a}=Z(oe),e=Z(bt),n=Z(vt),i=()=>{c(!1)};return t.jsxs(mt,{children:[t.jsx("h3",{className:"water-title",children:"Today"}),e&&!n&&t.jsx(Be,{}),a.length===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx("ul",{className:"water-list",children:a.length>0&&a.map(({_id:u,waterVolume:h,time:d})=>t.jsx(jt,{_id:u,waterVolume:h,time:d},u))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>c(!0),children:[t.jsx(X,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(ee,{setVisible:c,title:"Add water",children:t.jsx($e,{title:"Choose a value:",show:!1,closeModal:i})})]})},Mt=g.div`
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
`,Tt=g.ul`
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
`,Ie=g.span`
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
`,St=g.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,Dt=g.div`
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
`,Nt=g(Ie)`
  border: #ff9d43 1px solid;
`,Ot=({setIsModalOpen:r,isModalOpen:c,modalContent:a,closeModal:e})=>{const n=F.useRef(null);return F.useEffect(()=>{const i=u=>{u instanceof KeyboardEvent&&u.key==="Escape"&&e()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e]),Ce(n,()=>{c&&r(!1)}),t.jsx(St,{ref:n,className:c?"open":"",children:t.jsxs(Dt,{children:[t.jsx("button",{className:"close hover active",onClick:()=>e(),children:"×"}),t.jsx("h3",{className:"title-modal",children:`${a==null?void 0:a.day}, ${a==null?void 0:a.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:a==null?void 0:a.dailyNorma})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsxs("span",{className:"span-modal",children:[(a==null?void 0:a.percent)!==void 0&&(a==null?void 0:a.percent)>=100?100:a==null?void 0:a.percent,"%"]})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:a==null?void 0:a.amountOfWater})]})]})})},Rt=()=>{const r=()=>new Date,[c,a]=F.useState(r()),[e,n]=F.useState(null),[i,u]=F.useState(!1),[h,d]=F.useState(null),x=Z(xt),m=`${c.getFullYear()}-${(c.getMonth()+1).toString().padStart(2,"0")}`,b=J();F.useEffect(()=>{b(ze(m))},[b,m]);const v=o=>{const f=o.getFullYear(),$=o.getMonth(),V=new Date(f,$+1,0).getDate(),I=[];for(let O=1;O<=V;O++)I.push({day:O,month:o.toLocaleString("en-US",{month:"long"})});return I},N=()=>{a(o=>new Date(o.getFullYear(),o.getMonth()-1)),n(null)},j=()=>{const o=new Date(c.getFullYear(),c.getMonth()+1);o<=r()&&(a(o),n(null))},_=o=>{if(e===o.day){E(),n(null);return}const f=document.getElementById(`day-${o.day}`);if(!f)return;const $=f.getBoundingClientRect(),V=292,I=188,O=window.innerWidth,H=window.innerHeight;let L=$.top-I-10,A=window.innerWidth<=768?window.innerWidth/2-V/2:$.left+$.width/2-V/2;L<0&&(L=0),L+I>H&&(L=H-I),A<0&&(A=0),A+V>O&&(A=O-V),n(o.day),d(o),document.documentElement.style.setProperty("--modal-top",`${L}px`),document.documentElement.style.setProperty("--modal-left",`${A}px`),u(!0)},E=()=>{u(!1)},R=o=>{if(!(x!=null&&x.month)){o.percent=0,o.amountOfWater=0,o.dailyNorma=2;return}const f=o.day.toString(),$=x.month.map(V=>V.date.slice(-2).trim()).indexOf(f);if($===-1&&(o.percent=0,o.amountOfWater=0,o.dailyNorma=2),$!==-1){const{amountOfWater:V,dailyNorma:I,percentage:O}=x.month[$];o.percent=O,o.amountOfWater=V,o.dailyNorma=I}};return t.jsxs(Mt,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:N,children:"<"}),t.jsxs("div",{className:"month-title",children:[c.toLocaleString("en-US",{month:"long"}),","," ",c.getFullYear()]}),c.getMonth()===new Date().getMonth()&&c.getFullYear()===new Date().getFullYear()?t.jsx("button",{className:"button disabled",disabled:!0,children:">"}):t.jsx("button",{className:"button",onClick:j,children:">"})]})]}),t.jsx(Tt,{children:v(c).map(o=>(R(o),t.jsxs("li",{id:`day-${o.day}`,className:"hover active",children:[o.percent!==void 0&&o.percent<100?t.jsx(Nt,{className:`day ${e===o.day?"selected":""}`,onClick:()=>_(o),children:o.day}):t.jsx(Ie,{className:`day ${e===o.day?"selected":""}`,onClick:()=>_(o),children:o.day}),t.jsx("p",{className:`procent ${o.percent!==void 0&&o.percent<100?"lowPercentage":""}`,children:`${o.percent!==void 0&&o.percent>=100?100:o.percent}%`})]},o.day)))}),t.jsx(Ot,{setIsModalOpen:u,isModalOpen:i,modalContent:h,closeModal:E})]})};var ue={},me={},fe={},se={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(c){c.Right="to right",c.Left="to left",c.Down="to bottom",c.Up="to top"}(r.Direction||(r.Direction={}))})(se);(function(r){var c=U&&U.__spreadArray||function(s,l,p){if(p||arguments.length===2)for(var w=0,k=l.length,y;w<k;w++)(y||!(w in l))&&(y||(y=Array.prototype.slice.call(l,0,w)),y[w]=l[w]);return s.concat(y||Array.prototype.slice.call(l))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var a=F,e=se,n=function(s){var l=s.toString().split(".")[1];return l?l.length:0};r.getStepDecimals=n;function i(s){return s.touches&&s.touches.length||s.changedTouches&&s.changedTouches.length}r.isTouchEvent=i;function u(s,l,p){var w=(l-s)/p,k=8,y=Number(w.toFixed(k));return parseInt(y.toString(),10)===y}r.isStepDivisible=u;function h(s,l,p,w,k,y,D){var S=1e11;if(s=Math.round(s*S)/S,!y){var z=D[l-1],P=D[l+1];if(z&&z>s)return z;if(P&&P<s)return P}if(s>w)return w;if(s<p)return p;var Y=Math.floor(s*S-p*S)%Math.floor(k*S),W=Math.floor(s*S-Math.abs(Y)),K=Y===0?s:W/S,C=Math.abs(Y/S)<k/2?K:K+k,q=(0,r.getStepDecimals)(k);return parseFloat(C.toFixed(q))}r.normalizeValue=h;function d(s,l,p){return(s-l)/(p-l)}r.relativeValue=d;function x(s){return s===e.Direction.Up||s===e.Direction.Down}r.isVertical=x;function m(s,l,p){if(l>=p)throw new RangeError("min (".concat(l,") is equal/bigger than max (").concat(p,")"));if(s<l)throw new RangeError("value (".concat(s,") is smaller than min (").concat(l,")"));if(s>p)throw new RangeError("value (".concat(s,") is bigger than max (").concat(p,")"))}r.checkBoundaries=m;function b(s,l,p){return s<l?l:s>p?p:s}r.checkValuesAgainstBoundaries=b;function v(s){if(!(s.length<2)&&!s.slice(1).every(function(l,p){return s[p]<=l}))throw new RangeError("values={[".concat(s,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=v;function N(s){var l=window.getComputedStyle(s);return{top:parseInt(l["margin-top"],10),bottom:parseInt(l["margin-bottom"],10),left:parseInt(l["margin-left"],10),right:parseInt(l["margin-right"],10)}}r.getMargin=N;function j(s){var l=window.getComputedStyle(s);return{top:parseInt(l["padding-top"],10)+parseInt(l["border-top-width"],10),bottom:parseInt(l["padding-bottom"],10)+parseInt(l["border-bottom-width"],10),left:parseInt(l["padding-left"],10)+parseInt(l["border-left-width"],10),right:parseInt(l["padding-right"],10)+parseInt(l["border-right-width"],10)}}r.getPaddingAndBorder=j;function _(s,l,p){var w=p?-1:1;s.forEach(function(k,y){return R(k,w*l[y].x,l[y].y)})}r.translateThumbs=_;function E(s,l,p,w){for(var k=0,y=A(s[0],l,p,w),D=1;D<s.length;D++){var S=A(s[D],l,p,w);S<y&&(y=S,k=D)}return k}r.getClosestThumbIndex=E;function R(s,l,p){s.style.transform="translate(".concat(l,"px, ").concat(p,"px)")}r.translate=R;var o=function(s){var l=[],p=null,w=function(){for(var k=[],y=0;y<arguments.length;y++)k[y]=arguments[y];l=k,!p&&(p=requestAnimationFrame(function(){p=null,s.apply(void 0,l)}))};return w};r.schd=o;function f(s,l,p){var w=s.slice(0);return w[l]=p,w}r.replaceAt=f;function $(s){var l=s.values,p=s.colors,w=s.min,k=s.max,y=s.direction,D=y===void 0?e.Direction.Right:y,S=s.rtl,z=S===void 0?!1:S;z&&D===e.Direction.Right?D=e.Direction.Left:z&&e.Direction.Left&&(D=e.Direction.Right);var P=l.slice(0).sort(function(W,K){return W-K}).map(function(W){return(W-w)/(k-w)*100}),Y=P.reduce(function(W,K,C){return"".concat(W,", ").concat(p[C]," ").concat(K,"%, ").concat(p[C+1]," ").concat(K,"%")},"");return"linear-gradient(".concat(D,", ").concat(p[0]," 0%").concat(Y,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=$;function V(){}r.voidFn=V;function I(s){throw new Error("Didn't expect to get here")}r.assertUnreachable=I;var O=function(s,l,p,w,k){k===void 0&&(k=function(D){return D});var y=Math.ceil(c([s],Array.from(s.children),!0).reduce(function(D,S){var z=Math.ceil(S.getBoundingClientRect().width);if(S.innerText&&S.innerText.includes(p)&&S.childElementCount===0){var P=S.cloneNode(!0);P.innerHTML=k(l.toFixed(w)),P.style.visibility="hidden",document.body.appendChild(P),z=Math.ceil(P.getBoundingClientRect().width),document.body.removeChild(P)}return z>D?z:D},s.getBoundingClientRect().width));return y},H=function(s,l,p,w,k,y,D){D===void 0&&(D=function(P){return P});var S=[],z=function(P){var Y=O(p[P],w[P],k,y,D),W=l[P].x;l.forEach(function(K,C){var q=K.x,G=O(p[C],w[C],k,y,D);P!==C&&(W>=q&&W<=q+G||W+Y>=q&&W+Y<=q+G)&&(S.includes(C)||(S.push(P),S.push(C),S=c(c([],S,!0),[P,C],!1),z(C)))})};return z(s),Array.from(new Set(S.sort()))},L=function(s,l,p,w,k,y){w===void 0&&(w=.1),k===void 0&&(k=" - "),y===void 0&&(y=function(C){return C});var D=(0,r.getStepDecimals)(w),S=(0,a.useState)({}),z=S[0],P=S[1],Y=(0,a.useState)(y(l[p].toFixed(D))),W=Y[0],K=Y[1];return(0,a.useEffect)(function(){if(s){var C=s.getThumbs();if(C.length<1)return;var q={},G=s.getOffsets(),re=H(p,G,C,l,k,D,y),ge=y(l[p].toFixed(D));if(re.length){var ae=re.reduce(function(Q,ve,we,ye){return Q.length?c(c([],Q,!0),[G[ye[we]].x],!1):[G[ye[we]].x]},[]);if(Math.min.apply(Math,ae)===G[p].x){var xe=[];re.forEach(function(Q){xe.push(l[Q].toFixed(D))}),ge=Array.from(new Set(xe.sort(function(Q,ve){return parseFloat(Q)-parseFloat(ve)}))).map(y).join(k);var _e=Math.min.apply(Math,ae),be=Math.max.apply(Math,ae),Ae=C[re[ae.indexOf(be)]].getBoundingClientRect().width;q.left="".concat(Math.abs(_e-(be+Ae))/2,"px"),q.transform="translate(-50%, 0)"}else q.visibility="hidden"}K(ge),P(q)}},[s,l]),[W,z]};r.useThumbOverlap=L;function A(s,l,p,w){var k=s.getBoundingClientRect(),y=k.left,D=k.top,S=k.width,z=k.height;return x(w)?Math.abs(p-(D+z/2)):Math.abs(l-(y+S/2))}})(fe);var Et=U&&U.__extends||function(){var r=function(c,a){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},r(c,a)};return function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");r(c,a);function e(){this.constructor=c}c.prototype=a===null?Object.create(a):(e.prototype=a.prototype,new e)}}(),$t=U&&U.__createBinding||(Object.create?function(r,c,a,e){e===void 0&&(e=a);var n=Object.getOwnPropertyDescriptor(c,a);(!n||("get"in n?!c.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return c[a]}}),Object.defineProperty(r,e,n)}:function(r,c,a,e){e===void 0&&(e=a),r[e]=c[a]}),It=U&&U.__setModuleDefault||(Object.create?function(r,c){Object.defineProperty(r,"default",{enumerable:!0,value:c})}:function(r,c){r.default=c}),_t=U&&U.__importStar||function(r){if(r&&r.__esModule)return r;var c={};if(r!=null)for(var a in r)a!=="default"&&Object.prototype.hasOwnProperty.call(r,a)&&$t(c,r,a);return It(c,r),c},Me=U&&U.__spreadArray||function(r,c,a){if(a||arguments.length===2)for(var e=0,n=c.length,i;e<n;e++)(i||!(e in c))&&(i||(i=Array.prototype.slice.call(c,0,e)),i[e]=c[e]);return r.concat(i||Array.prototype.slice.call(c))};Object.defineProperty(me,"__esModule",{value:!0});var ie=_t(F),T=fe,B=se,At=["ArrowRight","ArrowUp","k","PageUp"],Pt=["ArrowLeft","ArrowDown","j","PageDown"],Ft=function(r){Et(c,r);function c(a){var e=r.call(this,a)||this;if(e.trackRef=ie.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,i){return i}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,i=n.direction,u=n.values,h=n.min,d=n.max,x=e.trackRef.current,m=x.getBoundingClientRect(),b=(0,T.getPaddingAndBorder)(x);return e.getThumbs().map(function(v,N){var j={x:0,y:0},_=v.getBoundingClientRect(),E=(0,T.getMargin)(v);switch(i){case B.Direction.Right:return j.x=(E.left+b.left)*-1,j.y=((_.height-m.height)/2+b.top)*-1,j.x+=m.width*(0,T.relativeValue)(u[N],h,d)-_.width/2,j;case B.Direction.Left:return j.x=(E.right+b.right)*-1,j.y=((_.height-m.height)/2+b.top)*-1,j.x+=m.width-m.width*(0,T.relativeValue)(u[N],h,d)-_.width/2,j;case B.Direction.Up:return j.x=((_.width-m.width)/2+E.left+b.left)*-1,j.y=-b.left,j.y+=m.height-m.height*(0,T.relativeValue)(u[N],h,d)-_.height/2,j;case B.Direction.Down:return j.x=((_.width-m.width)/2+E.left+b.left)*-1,j.y=-b.left,j.y+=m.height*(0,T.relativeValue)(u[N],h,d)-_.height/2,j;default:return(0,T.assertUnreachable)(i)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(i){return i===n.target||i.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var i;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var u=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(h){return h.current}),n.clientX,n.clientY,e.props.direction);(i=e.thumbRefs[u].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,T.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var i;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var u=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(h){return h.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(i=e.thumbRefs[u].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var i=(0,T.isTouchEvent)(n);if(!(!i&&n.button!==0)){var u=e.getTargetIndex(n);u!==-1&&(i?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:u,thumbZIndexes:e.state.thumbZIndexes.map(function(h,d){return d===u?Math.max.apply(Math,e.state.thumbZIndexes):h<=e.state.thumbZIndexes[u]?h:h-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var i=e.props,u=i.values,h=i.onChange,d=i.step,x=i.rtl,m=i.direction,b=e.state.isChanged,v=e.getTargetIndex(n.nativeEvent),N=x||m===B.Direction.Left||m===B.Direction.Down?-1:1;v!==-1&&(At.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:v,isChanged:!0}),h((0,T.replaceAt)(u,v,e.normalizeValue(u[v]+N*(n.key==="PageUp"?d*10:d),v)))):Pt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:v,isChanged:!0}),h((0,T.replaceAt)(u,v,e.normalizeValue(u[v]-N*(n.key==="PageDown"?d*10:d),v)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){b&&e.fireOnFinalChange()}):b&&e.fireOnFinalChange())},e.onKeyUp=function(n){var i=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){i&&e.fireOnFinalChange()})},e.onMove=function(n,i){var u=e.state,h=u.draggedThumbIndex,d=u.draggedTrackPos,x=e.props,m=x.direction,b=x.min,v=x.max,N=x.onChange,j=x.values,_=x.step,E=x.rtl;if(h===-1&&d[0]===-1&&d[1]===-1)return null;var R=e.trackRef.current;if(!R)return null;var o=R.getBoundingClientRect(),f=(0,T.isVertical)(m)?o.height:o.width;if(d[0]!==-1&&d[1]!==-1){var $=n-d[0],V=i-d[1],I=0;switch(m){case B.Direction.Right:case B.Direction.Left:I=$/f*(v-b);break;case B.Direction.Down:case B.Direction.Up:I=V/f*(v-b);break;default:(0,T.assertUnreachable)(m)}if(E&&(I*=-1),Math.abs(I)>=_/2){for(var O=0;O<e.thumbRefs.length;O++){if(j[O]===v&&Math.sign(I)===1||j[O]===b&&Math.sign(I)===-1)return;var H=j[O]+I;H>v?I=v-j[O]:H<b&&(I=b-j[O])}for(var L=j.slice(0),O=0;O<e.thumbRefs.length;O++)L=(0,T.replaceAt)(L,O,e.normalizeValue(j[O]+I,O));e.setState({draggedTrackPos:[n,i]}),N(L)}}else{var A=0;switch(m){case B.Direction.Right:A=(n-o.left)/f*(v-b)+b;break;case B.Direction.Left:A=(f-(n-o.left))/f*(v-b)+b;break;case B.Direction.Down:A=(i-o.top)/f*(v-b)+b;break;case B.Direction.Up:A=(f-(i-o.top))/f*(v-b)+b;break;default:(0,T.assertUnreachable)(m)}E&&(A=v+b-A),Math.abs(j[h]-A)>=_/2&&N((0,T.replaceAt)(j,h,e.normalizeValue(A,h)))}},e.normalizeValue=function(n,i){var u=e.props,h=u.min,d=u.max,x=u.step,m=u.allowOverlap,b=u.values;return(0,T.normalizeValue)(n,i,h,d,x,m,b)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,i=n.onFinalChange,u=n.values;i&&i(u)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var i=0;i<e.numOfMarks+1;i++)e.markRefs[i]=ie.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),i=parseInt(n.width,10),u=parseInt(n.height,10),h=parseInt(n.paddingLeft,10),d=parseInt(n.paddingTop,10),x=[],m=0;m<e.numOfMarks+1;m++){var b=9999,v=9999;if(e.markRefs[m].current){var N=e.markRefs[m].current.getBoundingClientRect();b=N.height,v=N.width}e.props.direction===B.Direction.Left||e.props.direction===B.Direction.Right?x.push([Math.round(i/e.numOfMarks*m+h-v/2),-Math.round((b-u)/2)]):x.push([Math.round(u/e.numOfMarks*m+d-b/2),-Math.round((v-i)/2)])}e.setState({markOffsets:x})}},a.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,T.schd)(e.onMouseMove),e.schdOnTouchMove=(0,T.schd)(e.onTouchMove),e.schdOnEnd=(0,T.schd)(e.onEnd),e.thumbRefs=a.values.map(function(){return ie.createRef()}),e.updateMarkRefs(a),e}return c.prototype.componentDidMount=function(){var a=this,e=this.props,n=e.values,i=e.min,u=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",a.onResize)},unobserve:function(){return window.removeEventListener("resize",a.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,T.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(h){return(0,T.checkBoundaries)(h,a.props.min,a.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(h){(0,T.isStepDivisible)(i,h,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},c.prototype.componentDidUpdate=function(a,e){var n=this.props,i=n.max,u=n.min,h=n.step,d=n.values,x=n.rtl;(a.max!==i||a.min!==u||a.step!==h)&&this.updateMarkRefs(this.props),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),x),(a.max!==i||a.min!==u||a.step!==h||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),d.forEach(function(m){(0,T.isStepDivisible)(u,m,h)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},c.prototype.componentWillUnmount=function(){var a={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,a),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},c.prototype.render=function(){var a=this,e=this.props,n=e.renderTrack,i=e.renderThumb,u=e.renderMark,h=u===void 0?function(){return null}:u,d=e.values,x=e.min,m=e.max,b=e.allowOverlap,v=e.disabled,N=this.state,j=N.draggedThumbIndex,_=N.thumbZIndexes,E=N.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:j>-1?"grabbing":this.props.draggableTrack?(0,T.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!v?"pointer":"inherit"},onMouseDown:v?T.voidFn:this.onMouseDownTrack,onTouchStart:v?T.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:v,children:Me(Me([],E.map(function(R,o,f){return h({props:{style:a.props.direction===B.Direction.Left||a.props.direction===B.Direction.Right?{position:"absolute",left:"".concat(R[0],"px"),marginTop:"".concat(R[1],"px")}:{position:"absolute",top:"".concat(R[0],"px"),marginLeft:"".concat(R[1],"px")},key:"mark".concat(o),ref:a.markRefs[o]},index:o})}),!0),d.map(function(R,o){var f=a.state.draggedThumbIndex===o;return i({index:o,value:R,isDragged:f,props:{style:{position:"absolute",zIndex:_[o],cursor:v?"inherit":f?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:o,tabIndex:v?void 0:0,"aria-valuemax":b?m:d[o+1]||m,"aria-valuemin":b?x:d[o-1]||x,"aria-valuenow":R,draggable:!1,ref:a.thumbRefs[o],role:"slider",onKeyDown:v?T.voidFn:a.onKeyDown,onKeyUp:v?T.voidFn:a.onKeyUp}})}),!0)})},c.defaultProps={step:1,direction:B.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},c}(ie.Component);me.default=Ft;(function(r){var c=U&&U.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var a=c(me);r.Range=a.default;var e=fe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=se;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(ue);const Vt=g.div`
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
`,Ct=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,zt=g.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${M.tablet} {
    padding-bottom: 16px;
  }
`,Lt=g.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${M.tablet} {
    width: 325px;
  }
  @media ${M.desktop} {
    width: 360px;
  }
`,Wt=g.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,Ut=g.div`
  position: relative;
  top: 24px;
`,Ht=g.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,Yt=g.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,Te=g.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Kt=g.div`
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
`,qt=g.button`
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
`,Zt=()=>{const r=Z(Se),{entries:c}=Z(oe),a=c.reduce((e,{waterVolume:n})=>e+=n,0);return r?Math.floor(a/(r*1e3)*100):0},Xt=()=>{const[r,c]=F.useState(!1),a=Zt(),e=a>100?100:a,n=()=>{c(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Vt,{children:t.jsxs(Bt,{children:[t.jsxs("div",{children:[t.jsx(zt,{children:"Today"}),t.jsx(Ct,{children:t.jsx(ue.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:i,children:u})=>t.jsx(Lt,{...i,style:{...i.style,background:ue.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:u}),renderThumb:({props:i})=>F.createElement(Wt,{...i,key:i.key},t.jsx(Ut,{children:t.jsxs(Ht,{children:[e,"%"]})}))})}),t.jsxs(Yt,{children:[e<=7?t.jsx("span",{children:" "}):t.jsx(Te,{children:"0%"}),e>=85?t.jsx("span",{children:" "}):t.jsx(Te,{children:"100%"})]})]}),t.jsx(Kt,{className:"hover",children:t.jsxs(qt,{className:"btn",onClick:()=>c(!0),children:[t.jsx(X,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),r&&t.jsx(ee,{setVisible:c,title:"Add water",children:t.jsx($e,{title:"Choose a value",show:!1,closeModal:n})})]})},Gt=g.section`
  background-image: url("${Ne}");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 70px;
  background-position-y: 100px;
  @media ${M.tablet} {
    background-image: url("${Oe}");
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${M.desktop} {
    background-image: url("${Re}");
   
  }
`,Jt=g.div`
display: flex;
flex-direction: column;
gap:40px;
@media ${M.desktop} {
    
    flex-direction: row;
      justify-content:space-between;
      gap:0px;
  }
`,Qt=g.div`
  background-image: url("${Le}");
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 10px;
  background-position-y: 90px;
  padding: 24px 8px;

  @media ${M.tablet} {
    background-image: url("${We}");
    background-position-y: 5px;
    background-position-x: 90px;   
    padding-top: 0px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${M.desktop} {
    background-image: url("${Ue}");
    background-position-y: 0px;
    background-position-x: -50px;
    height: 548px;
   
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
  background-image: url("${Ne}");
  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${M.tablet} {
    padding: 32px 24px;
    background-image: url("${Oe}");
    
  }

  @media ${M.desktop} {
    width: 592px;
    max-height: 688px;
    background-image: url("${Re}");
    margin-bottom: 0px;
    padding-top: 0px;
  }
`,nn=()=>{const r=J();return F.useEffect(()=>{r(He())},[r]),t.jsx(Gt,{children:t.jsx("div",{className:"container",children:t.jsxs(Jt,{children:[t.jsxs(Qt,{children:[t.jsx(ht,{}),t.jsx(Xt,{})]}),t.jsxs(en,{children:[t.jsx(kt,{}),t.jsx(Rt,{})]})]})})})};export{nn as default};
