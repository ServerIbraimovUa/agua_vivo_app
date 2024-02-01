import{u as m,d as E,j as t,a as Me,b as ne,c as Ee,r as _,e as J,s as Te,M as te,I as X,f as Ne,g as Q,h as Ce,i as _e,k as De,L as Fe,l as Ie,m as $}from"./index-o6ybWq9h.js";const Ae=m.div``,Pe=m.form`

  display: flex;
  gap: 24px;
  flex-direction: column;
`,ze=m.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Le=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${E.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,Be=m.div`
  display: flex;
  gap: 24px;
`,se=m.span`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,$e=m.span`
  width: 190px;
  @media ${E.tablet} {
    width: auto;
  }
`,Ve=m.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,We=m.div`
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
`,Ue=m.label`
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
`,Ye=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,He=m.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${E.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,Ke=m.h2`
  font-size: 18px;
  font-weight: var(--bold-font-weight);
  line-height: 1.33;
  margin-bottom: 12px;
`,qe=m.button`
  color: #8baeff;
`,Ze=m.div`
  display: flex;
  gap: 5px;
  margin-bottom: 16px;
`,Xe=m.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  @media ${E.tablet} {
    font-size: 24px;
  }
`,Ge=m.div`
  position: absolute;
  padding: 10px; 
  top: -60px;
  left: -130px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  @media ${E.tablet} {
    top: -70px;
    left: 0px;
  }
`,Je=m.span`
   color: red;
   font-size: 16px;
`,Qe=({message:r})=>t.jsx(t.Fragment,{children:t.jsx(Ge,{children:t.jsx(Je,{children:r})})}),et=({onClose:r})=>{const{register:o,handleSubmit:s,watch:e,formState:{errors:n}}=Me({defaultValues:{weight:"",time:"",sex:"woman",dailyNorma:""},mode:"onChange"}),a=ne(),u=D=>{const{dailyNorma:l}=D;a(Ee({dailyNorma:+l})),r()};let d;const h=Number(e("weight")),w=Number(e("time")),x=String(e("sex")),f=(D,l,S)=>S==="man"?String((D*.04+l*.6).toFixed(1))+"L":String((D*.03+l*.4).toFixed(1))+"L",g=(D,l)=>{if(D<20&&D!==0)return d=!0,"You couldn't be less than 20kg";if(l>24)return d=!0,"Day contains only 24H";if(l<0)return d=!0,"Time should be only positive integer"},R=f(h,w,x),v=g(h,w);return t.jsx(Ae,{children:t.jsxs(Pe,{onSubmit:s(u),children:[t.jsxs(ze,{children:[t.jsxs(Le,{children:[t.jsxs("p",{children:["For girl:",t.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(Ve,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(We,{children:[t.jsx(ye,{children:"Calculate your rate:"}),t.jsxs(Be,{children:[t.jsxs("label",{children:[t.jsx(we,{...o("sex"),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(we,{...o("sex"),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(le,{...o("weight"),type:"number",placeholder:"0",min:10,max:300})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(le,{...o("time"),type:"number",placeholder:"0",min:0,max:24})]}),t.jsxs(Ue,{children:[t.jsx($e,{children:"The required amount of water in liters per day:"}),t.jsx(se,{children:d?t.jsx(Qe,{message:v}):R})]})]}),t.jsx(Ye,{children:t.jsxs(ce,{children:[t.jsx(ye,{children:"Write down how much water you will drink:"}),t.jsx(le,{...o("dailyNorma",{required:!0}),type:"number",step:"any",max:15,placeholder:"0"}),n.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(He,{className:"btn",type:"submit",children:"Save"})]})})},tt=()=>{const[r,o]=_.useState(!1),s=()=>{o(!r)},e=J(Te);return t.jsxs(t.Fragment,{children:[t.jsx(Ke,{children:"My daily norma"}),t.jsxs(Ze,{children:[t.jsxs(Xe,{children:[e,"L"]}),r&&t.jsx(te,{setVisible:s,title:"My Daily Norma",daily:!0,children:t.jsx(et,{onClose:s})}),t.jsx(qe,{type:"button",onClick:s,children:"Edit"})]})]})},nt=m.div`
  width: 264px;
  height: 258px;
  overflow-y: auto;

  .water-title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .water-empty {
    color: var(--primary-blue);
    margin-bottom: 24px;
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
`,rt=m.div`
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

  @media ${E.tablet} {
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

  @media ${E.desktop} {
  }
`,at=m.div`
  .water-glass-icon {
    width: 26px;
    height: 26px;
  }

  .edit-water-icon,
  .delete-water-icon {
    width: 16px;
    height: 16px;
  }

  @media ${E.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
  }
`,it=m.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,ot=m.div`
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
    justify-content: center;
    gap: 24px;
  }

  @media ${E.tablet} {
    .delete-btn-box {
      display: flex;
      flex-direction: row;
      gap: 24px;
      align-items: center;
    }
  }
`,ue=({title:r,show:o,closeModal:s})=>{const{register:e,handleSubmit:n,formState:{errors:a}}=Me(),u=ne(),[d,h]=_.useState({count:0,inputValue:"0"}),[w,x]=_.useState([]);_.useEffect(()=>{const l=new Date,S=l.getMinutes(),T=l.getHours()>=12?"PM":"AM",C=(l.getHours()%12||12).toString().padStart(2,"0"),H=S.toString().padStart(2,"0"),V=`${C}:${H} ${T}`,z=l.getHours(),I=l.getMinutes();let q=z,K=Math.ceil(I/5)*5;K>=60&&(q++,K-=60);const L=[];for(let i=q*60+K;i<24*60;i+=5){const c=(i%60).toString().padStart(2,"0"),p=Math.floor(i/60)<12?"AM":"PM",y=(Math.floor(i/60)%12||12).toString().padStart(2,"0");L.push(`${y}:${c} ${p}`)}x([V,...L])},[]);const f=l=>{d.count+l>=0&&h({inputValue:String(l),count:l})},g=l=>{const{value:S}=l.target;h(T=>({...T,inputValue:S}))},R=()=>{f(Number(d.inputValue))},v=l=>{l.key==="-"&&l.preventDefault()},D=l=>{const S={time:l.time,waterVolume:Number(d.inputValue)};u(Ne(S)),s()};return t.jsxs(rt,{children:[o&&t.jsxs("div",{children:[t.jsx("p",{children:"250 ml"}),t.jsx("p",{children:"7:00 am"})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsxs("button",{className:"counter-btn",onClick:()=>f(d.count-50),type:"button",children:[" ",t.jsx(X,{className:"icon-minus",id:"minus"})]}),t.jsxs("span",{className:"water-amount-span",children:[d.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>f(d.count+50),type:"button",children:t.jsx(X,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:n(D),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...e("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:w.map(l=>t.jsx("option",{value:l,children:l},l))}),a.time&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:d.inputValue,onChange:g,onBlur:R,onKeyPress:v,className:"water-input"}),a.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[d.count,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},ee=r=>r.water,st=Q(ee,r=>r.waterList);Q(ee,r=>r.amountDaily);const ct=Q(ee,r=>r.amountDaily.percentage);Q(ee,r=>r.amountMonthly);const lt=Q(ee,r=>r.isLoading),dt=Q(ee,r=>r.error),ut=({handleDeleteWater:r,closeModal:o,id:s})=>{console.log(s);const e=()=>{o()},n=()=>{r(s),o()};return t.jsxs(ot,{children:[t.jsx("p",{children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:n,children:"Delete"})]})]})},ht=({closeModal:r,waterItem:o})=>{const[s,e]=_.useState(!1),[n,a]=_.useState(!1),[u,d]=_.useState(!1),h=ne(),w=f=>{h(Ce(f))},x=f=>{h(_e(f))};return t.jsx(at,{children:t.jsxs(it,{id:o.id,children:[t.jsx("span",{children:t.jsx(X,{className:"water-glass-icon",id:"water"})}),t.jsx("p",{children:o.waterVolume}),t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>{e(!0),a(!0)},children:t.jsx(X,{className:"edit-water-icon",id:"pencil"})}),n&&t.jsx(te,{setVisible:a,title:"Edit the entered amount of water",children:t.jsx(ue,{title:"Choose a value",show:!1,handleUpdateWater:w,closeModal:()=>{a(!1),e(!1),r()}})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{e(!0),d(!0)},children:t.jsx(X,{className:"delete-water-icon",id:"delete"})}),s&&u&&t.jsx(te,{setVisible:e,title:"Delete water",children:t.jsx(ut,{title:"Delete entry?",show:!1,closeModal:()=>{d(!1),e(!1),r()},handleDeleteWater:x,id:o.id})})]},o.id)})},pt=()=>{const[r,o]=_.useState(!1),s=ne(),e=J(Te),n=J(st),a=J(lt),u=J(dt);_.useEffect(()=>{s(De())},[s]);const d=()=>{o(!1)};return t.jsxs(nt,{children:[t.jsx("h1",{className:"water-title",children:"Today"}),a&&!u&&t.jsx(Fe,{}),e===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx(t.Fragment,{children:n.length>0&&n.map(h=>t.jsx(ht,{show:!1,closeModal:d,waterItem:h},h.id))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>o(!0),children:[t.jsx(X,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(te,{setVisible:o,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:d})})]})},ft=m.div`
  position: relative;

  width: 264;
  height: 500px;
  background-color: #ecf2ff;
  @media ${E.tablet} {
    width: 646px;
    height: 315px;
  }
  @media ${E.desktop} {

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
  .month {
    font-size: 26px;
    color: #2f2f2f;
    margin-left: 0;
  }
`,mt=m.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  gap: 16px 26px;

  @media ${E.tablet} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }
  @media ${E.desktop} {
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
`,gt=m.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,xt=m.div`
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
`,bt=()=>{const r=()=>new Date,[o,s]=_.useState(r()),[e,n]=_.useState(null),[a,u]=_.useState(!1),[d,h]=_.useState(null),w=_.useRef(null);Ie(w,()=>{a&&u(!1)});const x=l=>{const S=l.getFullYear(),T=l.getMonth(),C=new Date(S,T+1,0).getDate(),H=[];for(let V=1;V<=C;V++)H.push({day:V,month:l.toLocaleString("en-US",{month:"long"})});return H},f=()=>{s(l=>new Date(l.getFullYear(),l.getMonth()-1)),n(null)},g=()=>{const l=new Date(o.getFullYear(),o.getMonth()+1);l<=r()&&(s(l),n(null))},R=l=>{if(e===l.day){v(),n(null);return}const S=document.getElementById(`day-${l.day}`);if(!S){console.error(`Елемент з id 'day-${l.day}' не знайдено.`);return}const T=S.getBoundingClientRect(),C=292,V=T.top-188-10,z=T.left+T.width/2-C/2;n(l.day),h(l),document.documentElement.style.setProperty("--modal-top",`${V}px`),document.documentElement.style.setProperty("--modal-left",`${z}px`),u(!0)},v=()=>{u(!1)};_.useEffect(()=>{const l=S=>{S instanceof KeyboardEvent&&S.key==="Escape"&&v()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[]);const D=()=>0;return t.jsxs(ft,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:f,children:"<"}),t.jsxs("div",{className:"month-title",children:[o.toLocaleString("en-US",{month:"long"}),","," ",o.getFullYear()]}),o.getMonth()===new Date().getMonth()&&o.getFullYear()===new Date().getFullYear()?null:t.jsx("button",{className:"button",onClick:g,children:">"})]})]}),t.jsx(mt,{children:x(o).map(l=>t.jsxs("li",{id:`day-${l.day}`,className:"hover active",children:[D()<100?t.jsx(vt,{className:`day ${e===l.day?"selected":""}`,onClick:()=>R(l),children:l.day}):t.jsx(Se,{className:`day ${e===l.day?"selected":""}`,onClick:()=>R(l),children:l.day}),t.jsx("p",{className:`procent ${D()<100?"lowPercentage":""}`,children:`${D()}%`})]},l.day))}),t.jsx(gt,{ref:w,className:a?"open":"",children:t.jsxs(xt,{children:[t.jsx("button",{className:"close hover active",onClick:v,children:"×"}),t.jsx("h3",{className:"title-modal",children:`${d==null?void 0:d.day}, ${d==null?void 0:d.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:"1.5L"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"span-modal",children:"100%"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:"6"})]})]})})]})};var de={},he={},pe={},oe={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(o){o.Right="to right",o.Left="to left",o.Down="to bottom",o.Up="to top"}(r.Direction||(r.Direction={}))})(oe);(function(r){var o=$&&$.__spreadArray||function(i,c,p){if(p||arguments.length===2)for(var y=0,j=c.length,b;y<j;y++)(b||!(y in c))&&(b||(b=Array.prototype.slice.call(c,0,y)),b[y]=c[y]);return i.concat(b||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var s=_,e=oe,n=function(i){var c=i.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=n;function a(i){return i.touches&&i.touches.length||i.changedTouches&&i.changedTouches.length}r.isTouchEvent=a;function u(i,c,p){var y=(c-i)/p,j=8,b=Number(y.toFixed(j));return parseInt(b.toString(),10)===b}r.isStepDivisible=u;function d(i,c,p,y,j,b,O){var M=1e11;if(i=Math.round(i*M)/M,!b){var P=O[c-1],N=O[c+1];if(P&&P>i)return P;if(N&&N<i)return N}if(i>y)return y;if(i<p)return p;var W=Math.floor(i*M-p*M)%Math.floor(j*M),B=Math.floor(i*M-Math.abs(W)),U=W===0?i:B/M,A=Math.abs(W/M)<j/2?U:U+j,Y=(0,r.getStepDecimals)(j);return parseFloat(A.toFixed(Y))}r.normalizeValue=d;function h(i,c,p){return(i-c)/(p-c)}r.relativeValue=h;function w(i){return i===e.Direction.Up||i===e.Direction.Down}r.isVertical=w;function x(i,c,p){if(c>=p)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(p,")"));if(i<c)throw new RangeError("value (".concat(i,") is smaller than min (").concat(c,")"));if(i>p)throw new RangeError("value (".concat(i,") is bigger than max (").concat(p,")"))}r.checkBoundaries=x;function f(i,c,p){return i<c?c:i>p?p:i}r.checkValuesAgainstBoundaries=f;function g(i){if(!(i.length<2)&&!i.slice(1).every(function(c,p){return i[p]<=c}))throw new RangeError("values={[".concat(i,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=g;function R(i){var c=window.getComputedStyle(i);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=R;function v(i){var c=window.getComputedStyle(i);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=v;function D(i,c,p){var y=p?-1:1;i.forEach(function(j,b){return S(j,y*c[b].x,c[b].y)})}r.translateThumbs=D;function l(i,c,p,y){for(var j=0,b=L(i[0],c,p,y),O=1;O<i.length;O++){var M=L(i[O],c,p,y);M<b&&(b=M,j=O)}return j}r.getClosestThumbIndex=l;function S(i,c,p){i.style.transform="translate(".concat(c,"px, ").concat(p,"px)")}r.translate=S;var T=function(i){var c=[],p=null,y=function(){for(var j=[],b=0;b<arguments.length;b++)j[b]=arguments[b];c=j,!p&&(p=requestAnimationFrame(function(){p=null,i.apply(void 0,c)}))};return y};r.schd=T;function C(i,c,p){var y=i.slice(0);return y[c]=p,y}r.replaceAt=C;function H(i){var c=i.values,p=i.colors,y=i.min,j=i.max,b=i.direction,O=b===void 0?e.Direction.Right:b,M=i.rtl,P=M===void 0?!1:M;P&&O===e.Direction.Right?O=e.Direction.Left:P&&e.Direction.Left&&(O=e.Direction.Right);var N=c.slice(0).sort(function(B,U){return B-U}).map(function(B){return(B-y)/(j-y)*100}),W=N.reduce(function(B,U,A){return"".concat(B,", ").concat(p[A]," ").concat(U,"%, ").concat(p[A+1]," ").concat(U,"%")},"");return"linear-gradient(".concat(O,", ").concat(p[0]," 0%").concat(W,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=H;function V(){}r.voidFn=V;function z(i){throw new Error("Didn't expect to get here")}r.assertUnreachable=z;var I=function(i,c,p,y,j){j===void 0&&(j=function(O){return O});var b=Math.ceil(o([i],Array.from(i.children),!0).reduce(function(O,M){var P=Math.ceil(M.getBoundingClientRect().width);if(M.innerText&&M.innerText.includes(p)&&M.childElementCount===0){var N=M.cloneNode(!0);N.innerHTML=j(c.toFixed(y)),N.style.visibility="hidden",document.body.appendChild(N),P=Math.ceil(N.getBoundingClientRect().width),document.body.removeChild(N)}return P>O?P:O},i.getBoundingClientRect().width));return b},q=function(i,c,p,y,j,b,O){O===void 0&&(O=function(N){return N});var M=[],P=function(N){var W=I(p[N],y[N],j,b,O),B=c[N].x;c.forEach(function(U,A){var Y=U.x,Z=I(p[A],y[A],j,b,O);N!==A&&(B>=Y&&B<=Y+Z||B+W>=Y&&B+W<=Y+Z)&&(M.includes(A)||(M.push(N),M.push(A),M=o(o([],M,!0),[N,A],!1),P(A)))})};return P(i),Array.from(new Set(M.sort()))},K=function(i,c,p,y,j,b){y===void 0&&(y=.1),j===void 0&&(j=" - "),b===void 0&&(b=function(A){return A});var O=(0,r.getStepDecimals)(y),M=(0,s.useState)({}),P=M[0],N=M[1],W=(0,s.useState)(b(c[p].toFixed(O))),B=W[0],U=W[1];return(0,s.useEffect)(function(){if(i){var A=i.getThumbs();if(A.length<1)return;var Y={},Z=i.getOffsets(),re=q(p,Z,A,c,j,O,b),fe=b(c[p].toFixed(O));if(re.length){var ae=re.reduce(function(G,xe,ve,be){return G.length?o(o([],G,!0),[Z[be[ve]].x],!1):[Z[be[ve]].x]},[]);if(Math.min.apply(Math,ae)===Z[p].x){var me=[];re.forEach(function(G){me.push(c[G].toFixed(O))}),fe=Array.from(new Set(me.sort(function(G,xe){return parseFloat(G)-parseFloat(xe)}))).map(b).join(j);var Oe=Math.min.apply(Math,ae),ge=Math.max.apply(Math,ae),Re=A[re[ae.indexOf(ge)]].getBoundingClientRect().width;Y.left="".concat(Math.abs(Oe-(ge+Re))/2,"px"),Y.transform="translate(-50%, 0)"}else Y.visibility="hidden"}U(fe),N(Y)}},[i,c]),[B,P]};r.useThumbOverlap=K;function L(i,c,p,y){var j=i.getBoundingClientRect(),b=j.left,O=j.top,M=j.width,P=j.height;return w(y)?Math.abs(p-(O+P/2)):Math.abs(c-(b+M/2))}})(pe);var yt=$&&$.__extends||function(){var r=function(o,s){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},r(o,s)};return function(o,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");r(o,s);function e(){this.constructor=o}o.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}}(),wt=$&&$.__createBinding||(Object.create?function(r,o,s,e){e===void 0&&(e=s);var n=Object.getOwnPropertyDescriptor(o,s);(!n||("get"in n?!o.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return o[s]}}),Object.defineProperty(r,e,n)}:function(r,o,s,e){e===void 0&&(e=s),r[e]=o[s]}),jt=$&&$.__setModuleDefault||(Object.create?function(r,o){Object.defineProperty(r,"default",{enumerable:!0,value:o})}:function(r,o){r.default=o}),kt=$&&$.__importStar||function(r){if(r&&r.__esModule)return r;var o={};if(r!=null)for(var s in r)s!=="default"&&Object.prototype.hasOwnProperty.call(r,s)&&wt(o,r,s);return jt(o,r),o},je=$&&$.__spreadArray||function(r,o,s){if(s||arguments.length===2)for(var e=0,n=o.length,a;e<n;e++)(a||!(e in o))&&(a||(a=Array.prototype.slice.call(o,0,e)),a[e]=o[e]);return r.concat(a||Array.prototype.slice.call(o))};Object.defineProperty(he,"__esModule",{value:!0});var ie=kt(_),k=pe,F=oe,Mt=["ArrowRight","ArrowUp","k","PageUp"],Tt=["ArrowLeft","ArrowDown","j","PageDown"],Dt=function(r){yt(o,r);function o(s){var e=r.call(this,s)||this;if(e.trackRef=ie.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,a){return a}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,a=n.direction,u=n.values,d=n.min,h=n.max,w=e.trackRef.current,x=w.getBoundingClientRect(),f=(0,k.getPaddingAndBorder)(w);return e.getThumbs().map(function(g,R){var v={x:0,y:0},D=g.getBoundingClientRect(),l=(0,k.getMargin)(g);switch(a){case F.Direction.Right:return v.x=(l.left+f.left)*-1,v.y=((D.height-x.height)/2+f.top)*-1,v.x+=x.width*(0,k.relativeValue)(u[R],d,h)-D.width/2,v;case F.Direction.Left:return v.x=(l.right+f.right)*-1,v.y=((D.height-x.height)/2+f.top)*-1,v.x+=x.width-x.width*(0,k.relativeValue)(u[R],d,h)-D.width/2,v;case F.Direction.Up:return v.x=((D.width-x.width)/2+l.left+f.left)*-1,v.y=-f.left,v.y+=x.height-x.height*(0,k.relativeValue)(u[R],d,h)-D.height/2,v;case F.Direction.Down:return v.x=((D.width-x.width)/2+l.left+f.left)*-1,v.y=-f.left,v.y+=x.height*(0,k.relativeValue)(u[R],d,h)-D.height/2,v;default:return(0,k.assertUnreachable)(a)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(a){return a===n.target||a.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var a;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var h;return(h=d.current)===null||h===void 0?void 0:h.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var u=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.clientX,n.clientY,e.props.direction);(a=e.thumbRefs[u].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,k.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var a;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var h;return(h=d.current)===null||h===void 0?void 0:h.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var u=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(a=e.thumbRefs[u].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var a=(0,k.isTouchEvent)(n);if(!(!a&&n.button!==0)){var u=e.getTargetIndex(n);u!==-1&&(a?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:u,thumbZIndexes:e.state.thumbZIndexes.map(function(d,h){return h===u?Math.max.apply(Math,e.state.thumbZIndexes):d<=e.state.thumbZIndexes[u]?d:d-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var a=e.props,u=a.values,d=a.onChange,h=a.step,w=a.rtl,x=a.direction,f=e.state.isChanged,g=e.getTargetIndex(n.nativeEvent),R=w||x===F.Direction.Left||x===F.Direction.Down?-1:1;g!==-1&&(Mt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),d((0,k.replaceAt)(u,g,e.normalizeValue(u[g]+R*(n.key==="PageUp"?h*10:h),g)))):Tt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),d((0,k.replaceAt)(u,g,e.normalizeValue(u[g]-R*(n.key==="PageDown"?h*10:h),g)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){f&&e.fireOnFinalChange()}):f&&e.fireOnFinalChange())},e.onKeyUp=function(n){var a=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){a&&e.fireOnFinalChange()})},e.onMove=function(n,a){var u=e.state,d=u.draggedThumbIndex,h=u.draggedTrackPos,w=e.props,x=w.direction,f=w.min,g=w.max,R=w.onChange,v=w.values,D=w.step,l=w.rtl;if(d===-1&&h[0]===-1&&h[1]===-1)return null;var S=e.trackRef.current;if(!S)return null;var T=S.getBoundingClientRect(),C=(0,k.isVertical)(x)?T.height:T.width;if(h[0]!==-1&&h[1]!==-1){var H=n-h[0],V=a-h[1],z=0;switch(x){case F.Direction.Right:case F.Direction.Left:z=H/C*(g-f);break;case F.Direction.Down:case F.Direction.Up:z=V/C*(g-f);break;default:(0,k.assertUnreachable)(x)}if(l&&(z*=-1),Math.abs(z)>=D/2){for(var I=0;I<e.thumbRefs.length;I++){if(v[I]===g&&Math.sign(z)===1||v[I]===f&&Math.sign(z)===-1)return;var q=v[I]+z;q>g?z=g-v[I]:q<f&&(z=f-v[I])}for(var K=v.slice(0),I=0;I<e.thumbRefs.length;I++)K=(0,k.replaceAt)(K,I,e.normalizeValue(v[I]+z,I));e.setState({draggedTrackPos:[n,a]}),R(K)}}else{var L=0;switch(x){case F.Direction.Right:L=(n-T.left)/C*(g-f)+f;break;case F.Direction.Left:L=(C-(n-T.left))/C*(g-f)+f;break;case F.Direction.Down:L=(a-T.top)/C*(g-f)+f;break;case F.Direction.Up:L=(C-(a-T.top))/C*(g-f)+f;break;default:(0,k.assertUnreachable)(x)}l&&(L=g+f-L),Math.abs(v[d]-L)>=D/2&&R((0,k.replaceAt)(v,d,e.normalizeValue(L,d)))}},e.normalizeValue=function(n,a){var u=e.props,d=u.min,h=u.max,w=u.step,x=u.allowOverlap,f=u.values;return(0,k.normalizeValue)(n,a,d,h,w,x,f)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,a=n.onFinalChange,u=n.values;a&&a(u)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var a=0;a<e.numOfMarks+1;a++)e.markRefs[a]=ie.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),a=parseInt(n.width,10),u=parseInt(n.height,10),d=parseInt(n.paddingLeft,10),h=parseInt(n.paddingTop,10),w=[],x=0;x<e.numOfMarks+1;x++){var f=9999,g=9999;if(e.markRefs[x].current){var R=e.markRefs[x].current.getBoundingClientRect();f=R.height,g=R.width}e.props.direction===F.Direction.Left||e.props.direction===F.Direction.Right?w.push([Math.round(a/e.numOfMarks*x+d-g/2),-Math.round((f-u)/2)]):w.push([Math.round(u/e.numOfMarks*x+h-f/2),-Math.round((g-a)/2)])}e.setState({markOffsets:w})}},s.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,k.schd)(e.onMouseMove),e.schdOnTouchMove=(0,k.schd)(e.onTouchMove),e.schdOnEnd=(0,k.schd)(e.onEnd),e.thumbRefs=s.values.map(function(){return ie.createRef()}),e.updateMarkRefs(s),e}return o.prototype.componentDidMount=function(){var s=this,e=this.props,n=e.values,a=e.min,u=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",s.onResize)},unobserve:function(){return window.removeEventListener("resize",s.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,k.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(d){return(0,k.checkBoundaries)(d,s.props.min,s.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(d){(0,k.isStepDivisible)(a,d,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},o.prototype.componentDidUpdate=function(s,e){var n=this.props,a=n.max,u=n.min,d=n.step,h=n.values,w=n.rtl;(s.max!==a||s.min!==u||s.step!==d)&&this.updateMarkRefs(this.props),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),w),(s.max!==a||s.min!==u||s.step!==d||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),h.forEach(function(x){(0,k.isStepDivisible)(u,x,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},o.prototype.componentWillUnmount=function(){var s={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,s),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},o.prototype.render=function(){var s=this,e=this.props,n=e.renderTrack,a=e.renderThumb,u=e.renderMark,d=u===void 0?function(){return null}:u,h=e.values,w=e.min,x=e.max,f=e.allowOverlap,g=e.disabled,R=this.state,v=R.draggedThumbIndex,D=R.thumbZIndexes,l=R.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:v>-1?"grabbing":this.props.draggableTrack?(0,k.isVertical)(this.props.direction)?"ns-resize":"ew-resize":h.length===1&&!g?"pointer":"inherit"},onMouseDown:g?k.voidFn:this.onMouseDownTrack,onTouchStart:g?k.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:je(je([],l.map(function(S,T,C){return d({props:{style:s.props.direction===F.Direction.Left||s.props.direction===F.Direction.Right?{position:"absolute",left:"".concat(S[0],"px"),marginTop:"".concat(S[1],"px")}:{position:"absolute",top:"".concat(S[0],"px"),marginLeft:"".concat(S[1],"px")},key:"mark".concat(T),ref:s.markRefs[T]},index:T})}),!0),h.map(function(S,T){var C=s.state.draggedThumbIndex===T;return a({index:T,value:S,isDragged:C,props:{style:{position:"absolute",zIndex:D[T],cursor:g?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:T,tabIndex:g?void 0:0,"aria-valuemax":f?x:h[T+1]||x,"aria-valuemin":f?w:h[T-1]||w,"aria-valuenow":S,draggable:!1,ref:s.thumbRefs[T],role:"slider",onKeyDown:g?k.voidFn:s.onKeyDown,onKeyUp:g?k.voidFn:s.onKeyUp}})}),!0)})},o.defaultProps={step:1,direction:F.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},o}(ie.Component);he.default=Dt;(function(r){var o=$&&$.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var s=o(he);r.Range=s.default;var e=pe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=oe;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(de);const St=m.div`
  width: 280px;
  @media ${E.tablet} {
    width: 704px;
  }
  @media ${E.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,Ot=m.div`
  @media ${E.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${E.desktop} {
    display: flex;
    gap: 24px;
  }
`,Rt=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Et=m.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${E.tablet} {
    padding-bottom: 16px;
  }
`,Nt=m.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${E.tablet} {
    width: 325px;
  }
  @media ${E.desktop} {
    width: 360px;
  }
`,Ct=m.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,_t=m.div`
  position: relative;
  top: 24px;
`,Ft=m.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,It=m.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,ke=m.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,At=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${E.tablet} {
    width: 400px;
  }
  @media ${E.desktop} {
    width: 592px;
  }
`,Pt=m.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${E.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${E.desktop} {
    width: 178px;
  }
`,zt=()=>{const[r,o]=_.useState(!1),s=J(ct),e=s>100?100:s,n=()=>{o(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(St,{children:t.jsxs(Ot,{children:[t.jsxs("div",{children:[t.jsx(Et,{children:"Today"}),t.jsx(Rt,{children:t.jsx(de.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:a,children:u})=>t.jsx(Nt,{...a,style:{...a.style,background:de.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:u}),renderThumb:({props:a})=>_.createElement(Ct,{...a,key:a.key},t.jsx(_t,{children:t.jsxs(Ft,{children:[e,"%"]})}))})}),t.jsxs(It,{children:[e<=7?t.jsx("span",{children:" "}):t.jsx(ke,{children:"0%"}),e>=85?t.jsx("span",{children:" "}):t.jsx(ke,{children:"100%"})]})]}),t.jsx(At,{className:"hover",children:t.jsxs(Pt,{className:"btn",onClick:()=>o(!0),children:[t.jsx(X,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),r&&t.jsx(te,{setVisible:o,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:n})})]})},Bt=()=>{const r=ne();return _.useEffect(()=>{r(De())},[r]),t.jsx("section",{children:t.jsxs("div",{className:"container",children:[t.jsx(tt,{}),t.jsx(pt,{}),t.jsx(bt,{}),t.jsx(zt,{})]})})};export{Bt as default};
