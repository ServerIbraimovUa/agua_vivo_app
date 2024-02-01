import{u as x,d as E,a as J,s as Re,b as Me,c as ie,j as t,e as Ee,r as _,f as Te,M as Q,I as X,g as Ne,h as ee,i as Ce,k as _e,l as Fe,L as Ie,m as Ae,n as $}from"./index-xv1WYK3e.js";const Pe=x.div``,ze=x.form`
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

  @media ${E.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,$e=x.div`
  display: flex;
  gap: 24px;
`,se=x.span`
  color: var(--primary-blue);
  font-size: 18px;
`,Ve=x.span`
  width: 190px;
  @media ${E.tablet} {
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
`,Ye=x.label`
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
`,He=x.div`
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

  @media ${E.tablet} {
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
  @media ${E.tablet} {
    font-size: 24px;
  }
`,Je=({onClose:r})=>{const{gender:s}=J(Re);console.log(s);const{register:i,handleSubmit:e,watch:n,formState:{errors:a}}=Me({defaultValues:{weight:"",time:"",dailyNorma:0},mode:"onChange"}),u=ie(),l=D=>{const{dailyNorma:v}=D;console.log(v),u(Ee({dailyNorma:+v})),r()},h=Number(n("weight")),w=Number(n("time")),g=String(n("sex")),m=((D,v,R)=>String(R==="man"?(D*.04+v*.6).toFixed(1):(D*.03+v*.4).toFixed(1)))(h,w,g);return t.jsx(Pe,{children:t.jsxs(ze,{onSubmit:e(l),children:[t.jsxs(Le,{children:[t.jsxs(Be,{children:[t.jsxs("p",{children:["For girl:",t.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(We,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Ue,{children:[t.jsx(ye,{children:"Calculate your rate:"}),t.jsxs($e,{children:[t.jsxs("label",{children:[t.jsx(we,{...i("sex",{required:"Please select a gender"}),value:"woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(we,{...i("sex",{required:"Please select a gender"}),value:"man",type:"radio"}),"For man"]})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(le,{...i("weight",{min:20,max:320}),type:"number",placeholder:"0"})]}),t.jsxs(ce,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(le,{...i("time",{max:24}),type:"number",placeholder:"0"})]}),t.jsxs(Ye,{children:[t.jsx(Ve,{children:"The required amount of water in liters per day:"}),t.jsxs(se,{children:[m," L"]})]})]}),t.jsx(He,{children:t.jsxs(ce,{children:[t.jsx(ye,{children:"Write down how much water you will drink:"}),t.jsx(le,{...i("dailyNorma",{max:15}),type:"number"}),a.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(Ke,{className:"btn",type:"submit",children:"Save"})]})})},Qe=()=>{const[r,s]=_.useState(!1),i=()=>{s(!r)},e=J(Te);return t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:"My daily norma"}),t.jsxs(Xe,{children:[t.jsxs(Ge,{children:[e,"L"]}),r&&t.jsx(Q,{setVisible:i,title:"My Daily Norma",daily:!0,children:t.jsx(Je,{onClose:i})}),t.jsx(Ze,{type:"button",onClick:i,children:"Edit"})]})]})},et=x.div`
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
`,tt=x.div`
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
`,nt=x.div`
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
`,rt=x.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,at=x.div`
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
`,ue=({title:r,show:s,closeModal:i})=>{const{register:e,handleSubmit:n,formState:{errors:a}}=Me(),u=ie(),[l,h]=_.useState({count:0,inputValue:"0"}),[w,g]=_.useState([]);_.useEffect(()=>{const d=new Date,O=d.getMinutes(),T=d.getHours()>=12?"PM":"AM",C=(d.getHours()%12||12).toString().padStart(2,"0"),H=O.toString().padStart(2,"0"),V=`${C}:${H} ${T}`,z=d.getHours(),I=d.getMinutes();let q=z,K=Math.ceil(I/5)*5;K>=60&&(q++,K-=60);const L=[];for(let o=q*60+K;o<24*60;o+=5){const c=(o%60).toString().padStart(2,"0"),p=Math.floor(o/60)<12?"AM":"PM",y=(Math.floor(o/60)%12||12).toString().padStart(2,"0");L.push(`${y}:${c} ${p}`)}g([V,...L])},[]);const f=d=>{l.count+d>=0&&h({inputValue:String(d),count:d})},m=d=>{const{value:O}=d.target;h(T=>({...T,inputValue:O}))},D=()=>{f(Number(l.inputValue))},v=d=>{d.key==="-"&&d.preventDefault()},R=d=>{const O={time:d.time,waterVolume:Number(l.inputValue)};u(Ne(O)),i()};return t.jsxs(tt,{children:[s&&t.jsxs("div",{children:[t.jsx("p",{children:"250 ml"}),t.jsx("p",{children:"7:00 am"})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsxs("button",{className:"counter-btn",onClick:()=>f(l.count-50),type:"button",children:[" ",t.jsx(X,{className:"icon-minus",id:"minus"})]}),t.jsxs("span",{className:"water-amount-span",children:[l.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>f(l.count+50),type:"button",children:t.jsx(X,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:n(R),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("select",{...e("time",{required:!0}),name:"time",className:"water-input","aria-label":"Time",children:w.map(d=>t.jsx("option",{value:d,children:d},d))}),a.time&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:l.inputValue,onChange:m,onBlur:D,onKeyPress:v,className:"water-input"}),a.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[l.count,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},te=r=>r.water,it=ee(te,r=>r.waterList);ee(te,r=>r.amountDaily);ee(te,r=>r.amountMonthly);const ot=ee(te,r=>r.isLoading),st=ee(te,r=>r.error),ct=({handleDeleteWater:r,closeModal:s,id:i})=>{console.log(i);const e=()=>{s()},n=()=>{r(i),s()};return t.jsxs(at,{children:[t.jsx("p",{children:"Are you sure you want to delete the entry?"}),t.jsxs("div",{className:"delete-btn-box",children:[t.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{className:"delete-btn",type:"button",onClick:n,children:"Delete"})]})]})},lt=({closeModal:r,waterItem:s})=>{const[i,e]=_.useState(!1),[n,a]=_.useState(!1),[u,l]=_.useState(!1),h=ie(),w=f=>{h(Ce(f))},g=f=>{h(_e(f))};return t.jsx(nt,{children:t.jsxs(rt,{id:s.id,children:[t.jsx("span",{children:t.jsx(X,{className:"water-glass-icon",id:"water"})}),t.jsx("p",{children:s.waterVolume}),t.jsx("button",{type:"button",className:"edit-btn",onClick:()=>{e(!0),a(!0)},children:t.jsx(X,{className:"edit-water-icon",id:"pencil"})}),n&&t.jsx(Q,{setVisible:a,title:"Edit the entered amount of water",children:t.jsx(ue,{title:"Choose a value",show:!1,handleUpdateWater:w,closeModal:()=>{a(!1),e(!1),r()}})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{e(!0),l(!0)},children:t.jsx(X,{className:"delete-water-icon",id:"delete"})}),i&&u&&t.jsx(Q,{setVisible:e,title:"Delete water",children:t.jsx(ct,{title:"Delete entry?",show:!1,closeModal:()=>{l(!1),e(!1),r()},handleDeleteWater:g,id:s.id})})]},s.id)})},dt=()=>{const[r,s]=_.useState(!1),i=ie(),e=J(Te),n=J(it),a=J(ot),u=J(st);_.useEffect(()=>{i(Fe())},[i]);const l=()=>{s(!1)};return t.jsxs(et,{children:[t.jsx("h1",{className:"water-title",children:"Today"}),a&&!u&&t.jsx(Ie,{}),e===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx(t.Fragment,{children:n.length>0&&n.map(h=>t.jsx(lt,{show:!1,closeModal:l,waterItem:h},h.id))}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>s(!0),children:[t.jsx(X,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(Q,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:l})})]})},ut=x.div`
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
`,ht=x.ul`
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
`,pt=x.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,ft=x.div`
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
`,mt=x(De)`
  border: #ff9d43 1px solid;
`,gt=()=>{const r=()=>new Date,[s,i]=_.useState(r()),[e,n]=_.useState(null),[a,u]=_.useState(!1),[l,h]=_.useState(null),w=_.useRef(null);Ae(w,()=>{a&&u(!1)});const g=d=>{const O=d.getFullYear(),T=d.getMonth(),C=new Date(O,T+1,0).getDate(),H=[];for(let V=1;V<=C;V++)H.push({day:V,month:d.toLocaleString("en-US",{month:"long"})});return H},f=()=>{i(d=>new Date(d.getFullYear(),d.getMonth()-1)),n(null)},m=()=>{const d=new Date(s.getFullYear(),s.getMonth()+1);d<=r()&&(i(d),n(null))},D=d=>{if(e===d.day){v(),n(null);return}const O=document.getElementById(`day-${d.day}`);if(!O){console.error(`Елемент з id 'day-${d.day}' не знайдено.`);return}const T=O.getBoundingClientRect(),C=292,V=T.top-188-10,z=T.left+T.width/2-C/2;n(d.day),h(d),document.documentElement.style.setProperty("--modal-top",`${V}px`),document.documentElement.style.setProperty("--modal-left",`${z}px`),u(!0)},v=()=>{u(!1)};_.useEffect(()=>{const d=O=>{O instanceof KeyboardEvent&&O.key==="Escape"&&v()};return window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}},[]);const R=()=>0;return t.jsxs(ut,{children:[t.jsxs("div",{className:"right-align",children:[t.jsx("h1",{className:"month",children:"Month"}),t.jsxs("div",{className:"header",children:[t.jsx("button",{className:"button",onClick:f,children:"<"}),t.jsxs("div",{className:"month-title",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),s.getMonth()===new Date().getMonth()&&s.getFullYear()===new Date().getFullYear()?null:t.jsx("button",{className:"button",onClick:m,children:">"})]})]}),t.jsx(ht,{children:g(s).map(d=>t.jsxs("li",{id:`day-${d.day}`,className:"hover active",children:[R()<100?t.jsx(mt,{className:`day ${e===d.day?"selected":""}`,onClick:()=>D(d),children:d.day}):t.jsx(De,{className:`day ${e===d.day?"selected":""}`,onClick:()=>D(d),children:d.day}),t.jsx("p",{className:`procent ${R()<100?"lowPercentage":""}`,children:`${R()}%`})]},d.day))}),t.jsx(pt,{ref:w,className:a?"open":"",children:t.jsxs(ft,{children:[t.jsx("button",{className:"close hover active",onClick:v,children:"×"}),t.jsx("h3",{className:"title-modal",children:`${l==null?void 0:l.day}, ${l==null?void 0:l.month}`}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",t.jsx("span",{className:"span-modal",children:"1.5L"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"span-modal",children:"100%"})]}),t.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",t.jsx("span",{className:"span-modal",children:"6"})]})]})})]})};var de={},he={},pe={},oe={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(oe);(function(r){var s=$&&$.__spreadArray||function(o,c,p){if(p||arguments.length===2)for(var y=0,j=c.length,b;y<j;y++)(b||!(y in c))&&(b||(b=Array.prototype.slice.call(c,0,y)),b[y]=c[y]);return o.concat(b||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var i=_,e=oe,n=function(o){var c=o.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=n;function a(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}r.isTouchEvent=a;function u(o,c,p){var y=(c-o)/p,j=8,b=Number(y.toFixed(j));return parseInt(b.toString(),10)===b}r.isStepDivisible=u;function l(o,c,p,y,j,b,S){var M=1e11;if(o=Math.round(o*M)/M,!b){var P=S[c-1],N=S[c+1];if(P&&P>o)return P;if(N&&N<o)return N}if(o>y)return y;if(o<p)return p;var W=Math.floor(o*M-p*M)%Math.floor(j*M),B=Math.floor(o*M-Math.abs(W)),U=W===0?o:B/M,A=Math.abs(W/M)<j/2?U:U+j,Y=(0,r.getStepDecimals)(j);return parseFloat(A.toFixed(Y))}r.normalizeValue=l;function h(o,c,p){return(o-c)/(p-c)}r.relativeValue=h;function w(o){return o===e.Direction.Up||o===e.Direction.Down}r.isVertical=w;function g(o,c,p){if(c>=p)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(p,")"));if(o<c)throw new RangeError("value (".concat(o,") is smaller than min (").concat(c,")"));if(o>p)throw new RangeError("value (".concat(o,") is bigger than max (").concat(p,")"))}r.checkBoundaries=g;function f(o,c,p){return o<c?c:o>p?p:o}r.checkValuesAgainstBoundaries=f;function m(o){if(!(o.length<2)&&!o.slice(1).every(function(c,p){return o[p]<=c}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=m;function D(o){var c=window.getComputedStyle(o);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=D;function v(o){var c=window.getComputedStyle(o);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=v;function R(o,c,p){var y=p?-1:1;o.forEach(function(j,b){return O(j,y*c[b].x,c[b].y)})}r.translateThumbs=R;function d(o,c,p,y){for(var j=0,b=L(o[0],c,p,y),S=1;S<o.length;S++){var M=L(o[S],c,p,y);M<b&&(b=M,j=S)}return j}r.getClosestThumbIndex=d;function O(o,c,p){o.style.transform="translate(".concat(c,"px, ").concat(p,"px)")}r.translate=O;var T=function(o){var c=[],p=null,y=function(){for(var j=[],b=0;b<arguments.length;b++)j[b]=arguments[b];c=j,!p&&(p=requestAnimationFrame(function(){p=null,o.apply(void 0,c)}))};return y};r.schd=T;function C(o,c,p){var y=o.slice(0);return y[c]=p,y}r.replaceAt=C;function H(o){var c=o.values,p=o.colors,y=o.min,j=o.max,b=o.direction,S=b===void 0?e.Direction.Right:b,M=o.rtl,P=M===void 0?!1:M;P&&S===e.Direction.Right?S=e.Direction.Left:P&&e.Direction.Left&&(S=e.Direction.Right);var N=c.slice(0).sort(function(B,U){return B-U}).map(function(B){return(B-y)/(j-y)*100}),W=N.reduce(function(B,U,A){return"".concat(B,", ").concat(p[A]," ").concat(U,"%, ").concat(p[A+1]," ").concat(U,"%")},"");return"linear-gradient(".concat(S,", ").concat(p[0]," 0%").concat(W,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=H;function V(){}r.voidFn=V;function z(o){throw new Error("Didn't expect to get here")}r.assertUnreachable=z;var I=function(o,c,p,y,j){j===void 0&&(j=function(S){return S});var b=Math.ceil(s([o],Array.from(o.children),!0).reduce(function(S,M){var P=Math.ceil(M.getBoundingClientRect().width);if(M.innerText&&M.innerText.includes(p)&&M.childElementCount===0){var N=M.cloneNode(!0);N.innerHTML=j(c.toFixed(y)),N.style.visibility="hidden",document.body.appendChild(N),P=Math.ceil(N.getBoundingClientRect().width),document.body.removeChild(N)}return P>S?P:S},o.getBoundingClientRect().width));return b},q=function(o,c,p,y,j,b,S){S===void 0&&(S=function(N){return N});var M=[],P=function(N){var W=I(p[N],y[N],j,b,S),B=c[N].x;c.forEach(function(U,A){var Y=U.x,Z=I(p[A],y[A],j,b,S);N!==A&&(B>=Y&&B<=Y+Z||B+W>=Y&&B+W<=Y+Z)&&(M.includes(A)||(M.push(N),M.push(A),M=s(s([],M,!0),[N,A],!1),P(A)))})};return P(o),Array.from(new Set(M.sort()))},K=function(o,c,p,y,j,b){y===void 0&&(y=.1),j===void 0&&(j=" - "),b===void 0&&(b=function(A){return A});var S=(0,r.getStepDecimals)(y),M=(0,i.useState)({}),P=M[0],N=M[1],W=(0,i.useState)(b(c[p].toFixed(S))),B=W[0],U=W[1];return(0,i.useEffect)(function(){if(o){var A=o.getThumbs();if(A.length<1)return;var Y={},Z=o.getOffsets(),ne=q(p,Z,A,c,j,S,b),fe=b(c[p].toFixed(S));if(ne.length){var re=ne.reduce(function(G,xe,ve,be){return G.length?s(s([],G,!0),[Z[be[ve]].x],!1):[Z[be[ve]].x]},[]);if(Math.min.apply(Math,re)===Z[p].x){var me=[];ne.forEach(function(G){me.push(c[G].toFixed(S))}),fe=Array.from(new Set(me.sort(function(G,xe){return parseFloat(G)-parseFloat(xe)}))).map(b).join(j);var Se=Math.min.apply(Math,re),ge=Math.max.apply(Math,re),Oe=A[ne[re.indexOf(ge)]].getBoundingClientRect().width;Y.left="".concat(Math.abs(Se-(ge+Oe))/2,"px"),Y.transform="translate(-50%, 0)"}else Y.visibility="hidden"}U(fe),N(Y)}},[o,c]),[B,P]};r.useThumbOverlap=K;function L(o,c,p,y){var j=o.getBoundingClientRect(),b=j.left,S=j.top,M=j.width,P=j.height;return w(y)?Math.abs(p-(S+P/2)):Math.abs(c-(b+M/2))}})(pe);var xt=$&&$.__extends||function(){var r=function(s,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},r(s,i)};return function(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");r(s,i);function e(){this.constructor=s}s.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}(),vt=$&&$.__createBinding||(Object.create?function(r,s,i,e){e===void 0&&(e=i);var n=Object.getOwnPropertyDescriptor(s,i);(!n||("get"in n?!s.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,e,n)}:function(r,s,i,e){e===void 0&&(e=i),r[e]=s[i]}),bt=$&&$.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),yt=$&&$.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var i in r)i!=="default"&&Object.prototype.hasOwnProperty.call(r,i)&&vt(s,r,i);return bt(s,r),s},je=$&&$.__spreadArray||function(r,s,i){if(i||arguments.length===2)for(var e=0,n=s.length,a;e<n;e++)(a||!(e in s))&&(a||(a=Array.prototype.slice.call(s,0,e)),a[e]=s[e]);return r.concat(a||Array.prototype.slice.call(s))};Object.defineProperty(he,"__esModule",{value:!0});var ae=yt(_),k=pe,F=oe,wt=["ArrowRight","ArrowUp","k","PageUp"],jt=["ArrowLeft","ArrowDown","j","PageDown"],kt=function(r){xt(s,r);function s(i){var e=r.call(this,i)||this;if(e.trackRef=ae.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,a){return a}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,a=n.direction,u=n.values,l=n.min,h=n.max,w=e.trackRef.current,g=w.getBoundingClientRect(),f=(0,k.getPaddingAndBorder)(w);return e.getThumbs().map(function(m,D){var v={x:0,y:0},R=m.getBoundingClientRect(),d=(0,k.getMargin)(m);switch(a){case F.Direction.Right:return v.x=(d.left+f.left)*-1,v.y=((R.height-g.height)/2+f.top)*-1,v.x+=g.width*(0,k.relativeValue)(u[D],l,h)-R.width/2,v;case F.Direction.Left:return v.x=(d.right+f.right)*-1,v.y=((R.height-g.height)/2+f.top)*-1,v.x+=g.width-g.width*(0,k.relativeValue)(u[D],l,h)-R.width/2,v;case F.Direction.Up:return v.x=((R.width-g.width)/2+d.left+f.left)*-1,v.y=-f.left,v.y+=g.height-g.height*(0,k.relativeValue)(u[D],l,h)-R.height/2,v;case F.Direction.Down:return v.x=((R.width-g.width)/2+d.left+f.left)*-1,v.y=-f.left,v.y+=g.height*(0,k.relativeValue)(u[D],l,h)-R.height/2,v;default:return(0,k.assertUnreachable)(a)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(a){return a===n.target||a.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var a;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var h;return(h=l.current)===null||h===void 0?void 0:h.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var u=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),n.clientX,n.clientY,e.props.direction);(a=e.thumbRefs[u].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,k.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var a;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var h;return(h=l.current)===null||h===void 0?void 0:h.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var u=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(a=e.thumbRefs[u].current)===null||a===void 0||a.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var a=(0,k.isTouchEvent)(n);if(!(!a&&n.button!==0)){var u=e.getTargetIndex(n);u!==-1&&(a?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:u,thumbZIndexes:e.state.thumbZIndexes.map(function(l,h){return h===u?Math.max.apply(Math,e.state.thumbZIndexes):l<=e.state.thumbZIndexes[u]?l:l-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var a=e.props,u=a.values,l=a.onChange,h=a.step,w=a.rtl,g=a.direction,f=e.state.isChanged,m=e.getTargetIndex(n.nativeEvent),D=w||g===F.Direction.Left||g===F.Direction.Down?-1:1;m!==-1&&(wt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),l((0,k.replaceAt)(u,m,e.normalizeValue(u[m]+D*(n.key==="PageUp"?h*10:h),m)))):jt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),l((0,k.replaceAt)(u,m,e.normalizeValue(u[m]-D*(n.key==="PageDown"?h*10:h),m)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){f&&e.fireOnFinalChange()}):f&&e.fireOnFinalChange())},e.onKeyUp=function(n){var a=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){a&&e.fireOnFinalChange()})},e.onMove=function(n,a){var u=e.state,l=u.draggedThumbIndex,h=u.draggedTrackPos,w=e.props,g=w.direction,f=w.min,m=w.max,D=w.onChange,v=w.values,R=w.step,d=w.rtl;if(l===-1&&h[0]===-1&&h[1]===-1)return null;var O=e.trackRef.current;if(!O)return null;var T=O.getBoundingClientRect(),C=(0,k.isVertical)(g)?T.height:T.width;if(h[0]!==-1&&h[1]!==-1){var H=n-h[0],V=a-h[1],z=0;switch(g){case F.Direction.Right:case F.Direction.Left:z=H/C*(m-f);break;case F.Direction.Down:case F.Direction.Up:z=V/C*(m-f);break;default:(0,k.assertUnreachable)(g)}if(d&&(z*=-1),Math.abs(z)>=R/2){for(var I=0;I<e.thumbRefs.length;I++){if(v[I]===m&&Math.sign(z)===1||v[I]===f&&Math.sign(z)===-1)return;var q=v[I]+z;q>m?z=m-v[I]:q<f&&(z=f-v[I])}for(var K=v.slice(0),I=0;I<e.thumbRefs.length;I++)K=(0,k.replaceAt)(K,I,e.normalizeValue(v[I]+z,I));e.setState({draggedTrackPos:[n,a]}),D(K)}}else{var L=0;switch(g){case F.Direction.Right:L=(n-T.left)/C*(m-f)+f;break;case F.Direction.Left:L=(C-(n-T.left))/C*(m-f)+f;break;case F.Direction.Down:L=(a-T.top)/C*(m-f)+f;break;case F.Direction.Up:L=(C-(a-T.top))/C*(m-f)+f;break;default:(0,k.assertUnreachable)(g)}d&&(L=m+f-L),Math.abs(v[l]-L)>=R/2&&D((0,k.replaceAt)(v,l,e.normalizeValue(L,l)))}},e.normalizeValue=function(n,a){var u=e.props,l=u.min,h=u.max,w=u.step,g=u.allowOverlap,f=u.values;return(0,k.normalizeValue)(n,a,l,h,w,g,f)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,a=n.onFinalChange,u=n.values;a&&a(u)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var a=0;a<e.numOfMarks+1;a++)e.markRefs[a]=ae.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),a=parseInt(n.width,10),u=parseInt(n.height,10),l=parseInt(n.paddingLeft,10),h=parseInt(n.paddingTop,10),w=[],g=0;g<e.numOfMarks+1;g++){var f=9999,m=9999;if(e.markRefs[g].current){var D=e.markRefs[g].current.getBoundingClientRect();f=D.height,m=D.width}e.props.direction===F.Direction.Left||e.props.direction===F.Direction.Right?w.push([Math.round(a/e.numOfMarks*g+l-m/2),-Math.round((f-u)/2)]):w.push([Math.round(u/e.numOfMarks*g+h-f/2),-Math.round((m-a)/2)])}e.setState({markOffsets:w})}},i.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,k.schd)(e.onMouseMove),e.schdOnTouchMove=(0,k.schd)(e.onTouchMove),e.schdOnEnd=(0,k.schd)(e.onEnd),e.thumbRefs=i.values.map(function(){return ae.createRef()}),e.updateMarkRefs(i),e}return s.prototype.componentDidMount=function(){var i=this,e=this.props,n=e.values,a=e.min,u=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",i.onResize)},unobserve:function(){return window.removeEventListener("resize",i.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,k.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,k.checkBoundaries)(l,i.props.min,i.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(l){(0,k.isStepDivisible)(a,l,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(i,e){var n=this.props,a=n.max,u=n.min,l=n.step,h=n.values,w=n.rtl;(i.max!==a||i.min!==u||i.step!==l)&&this.updateMarkRefs(this.props),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),w),(i.max!==a||i.min!==u||i.step!==l||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),h.forEach(function(g){(0,k.isStepDivisible)(u,g,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var i={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,i),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var i=this,e=this.props,n=e.renderTrack,a=e.renderThumb,u=e.renderMark,l=u===void 0?function(){return null}:u,h=e.values,w=e.min,g=e.max,f=e.allowOverlap,m=e.disabled,D=this.state,v=D.draggedThumbIndex,R=D.thumbZIndexes,d=D.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:v>-1?"grabbing":this.props.draggableTrack?(0,k.isVertical)(this.props.direction)?"ns-resize":"ew-resize":h.length===1&&!m?"pointer":"inherit"},onMouseDown:m?k.voidFn:this.onMouseDownTrack,onTouchStart:m?k.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:je(je([],d.map(function(O,T,C){return l({props:{style:i.props.direction===F.Direction.Left||i.props.direction===F.Direction.Right?{position:"absolute",left:"".concat(O[0],"px"),marginTop:"".concat(O[1],"px")}:{position:"absolute",top:"".concat(O[0],"px"),marginLeft:"".concat(O[1],"px")},key:"mark".concat(T),ref:i.markRefs[T]},index:T})}),!0),h.map(function(O,T){var C=i.state.draggedThumbIndex===T;return a({index:T,value:O,isDragged:C,props:{style:{position:"absolute",zIndex:R[T],cursor:m?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:T,tabIndex:m?void 0:0,"aria-valuemax":f?g:h[T+1]||g,"aria-valuemin":f?w:h[T-1]||w,"aria-valuenow":O,draggable:!1,ref:i.thumbRefs[T],role:"slider",onKeyDown:m?k.voidFn:i.onKeyDown,onKeyUp:m?k.voidFn:i.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:F.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ae.Component);he.default=kt;(function(r){var s=$&&$.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var i=s(he);r.Range=i.default;var e=pe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=oe;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(de);const Mt=x.div`
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
`,Tt=x.div`
  @media ${E.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${E.desktop} {
    display: flex;
    gap: 24px;
  }
`,Dt=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,St=x.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${E.tablet} {
    padding-bottom: 16px;
  }
`,Ot=x.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${E.tablet} {
    width: 325px;
  }
  @media ${E.desktop} {
    width: 360px;
  }
`,Rt=x.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,Et=x.div`
  position: relative;
  top: 24px;
`,Nt=x.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,Ct=x.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,ke=x.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,_t=x.div`
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
`,Ft=x.button`
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
`,It=({value:r})=>{const[s,i]=_.useState(!1),e=()=>{i(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Mt,{children:t.jsxs(Tt,{children:[t.jsxs("div",{children:[t.jsx(St,{children:"Today"}),t.jsx(Dt,{children:t.jsx(de.Range,{disabled:!0,min:0,max:100,values:r,onChange:()=>{},renderTrack:({props:n,children:a})=>t.jsx(Ot,{...n,style:{...n.style,background:de.getTrackBackground({values:r,colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:a}),renderThumb:({props:n})=>_.createElement(Rt,{...n,key:n.key},t.jsx(Et,{children:t.jsxs(Nt,{children:[r[0],"%"]})}))})}),t.jsxs(Ct,{children:[r[0]<=6?t.jsx("span",{children:" "}):t.jsx(ke,{children:"0%"}),r[0]>=91?t.jsx("span",{children:" "}):t.jsx(ke,{children:"100%"})]})]}),t.jsx(_t,{className:"hover",children:t.jsxs(Ft,{className:"btn",onClick:()=>i(!0),children:[t.jsx(X,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),s&&t.jsx(Q,{setVisible:i,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:e})})]})},Pt=()=>{const[r]=_.useState([50]);return t.jsx("section",{children:t.jsxs("div",{className:"container",children:[t.jsx(Qe,{}),t.jsx(dt,{}),t.jsx(gt,{}),t.jsx(It,{value:r})]})})};export{Pt as default};
