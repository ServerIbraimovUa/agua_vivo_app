import{u as x,d as L,a as G,s as Se,b as Me,c as de,j as t,e as Re,r as P,f as Ee,M as J,I as H,g as Ne,h as Q,i as Ce,L as _e,k as Ie,l as Fe,m as Ae,n as B}from"./index-1u4TPV9L.js";const Le=x.div``,Pe=x.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,ze=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Be=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${L.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,Ve=x.div`
  display: flex;
  gap: 24px;
`,oe=x.span`
  color: var(--primary-blue);
  font-size: 18px;
`,$e=x.span`
  width: 190px;
  @media ${L.tablet} {
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
`,se=x.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ye=x.label`
  display: flex;
  gap: 5px;
`,we=x.input`
  margin-right: 5px;
`,ce=x.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
`,Ke=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,qe=x.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${L.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,He=x.h2`
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
  @media ${L.tablet} {
    font-size: 24px;
  }
`,Je=({onClose:r})=>{const{gender:s}=G(Se);console.log(s);const{register:a,handleSubmit:e,watch:n,formState:{errors:i}}=Me({defaultValues:{weight:"",time:"",dailyNorma:""},mode:"onChange"}),l=de(),d=O=>{const{dailyNorma:u}=O;console.log(u),l(Re(u)),r()},p=Number(n("weight")),b=Number(n("time")),v=String(n("sex")),f=((O,u,S)=>String(S==="Man"?(O*.04+u*.6).toFixed(1):(O*.03+u*.4).toFixed(1)))(p,b,v);return t.jsx(Le,{children:t.jsxs(Pe,{onSubmit:e(d),children:[t.jsxs(ze,{children:[t.jsxs(Be,{children:[t.jsxs("p",{children:["For girl:",t.jsx(oe,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(oe,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx(We,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Ue,{children:[t.jsx(ye,{children:"Calculate your rate:"}),t.jsxs(Ve,{children:[t.jsxs("label",{children:[t.jsx(we,{...a("sex",{required:"Please select a gender"}),value:"Woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(we,{...a("sex",{required:"Please select a gender"}),value:"Man",type:"radio"}),"For man"]})]}),t.jsxs(se,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(ce,{...a("weight",{min:20,max:320}),type:"number",placeholder:"0"})]}),t.jsxs(se,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(ce,{...a("time",{max:24}),type:"number",placeholder:"0"})]}),t.jsxs(Ye,{children:[t.jsx($e,{children:"The required amount of water in liters per day:"}),t.jsxs(oe,{children:[f," L"]})]})]}),t.jsx(Ke,{children:t.jsxs(se,{children:[t.jsx(ye,{children:"Write down how much water you will drink:"}),t.jsx(ce,{...a("dailyNorma",{max:15}),type:"number"}),i.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(qe,{className:"btn",type:"submit",children:"Save"})]})})},Qe=()=>{const[r,s]=P.useState(!1),a=()=>{s(!r)},e=G(Ee);return t.jsxs(t.Fragment,{children:[t.jsx(He,{children:"My daily norma"}),t.jsxs(Xe,{children:[t.jsxs(Ge,{children:[e,"L"]}),r&&t.jsx(J,{setVisible:a,title:"My Daily Norma",daily:!0,children:t.jsx(Je,{onClose:a})}),t.jsx(Ze,{type:"button",onClick:a,children:"Edit"})]})]})},et=x.div`
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

  @media ${L.tablet} {
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

  @media ${L.desktop} {
  }
`,ue=({title:r,show:s,closeModal:a})=>{const{register:e,handleSubmit:n,formState:{errors:i}}=Me({defaultValues:{date:`${new Date().getHours()}:${new Date().getMinutes()}`}}),l=de(),[d,p]=P.useState({count:0,inputValue:"0"}),b=u=>{d.count+u>=0&&p({inputValue:String(u),count:u})},v=u=>{const{value:S}=u.target;p(F=>({...F,inputValue:S}))},g=()=>{b(Number(d.inputValue))},f=u=>{u.key==="-"&&u.preventDefault()},O=u=>{const S={date:u.date,waterVolume:Number(d.inputValue)};l(Ne(S)),a()};return t.jsxs(tt,{children:[s&&t.jsxs("div",{children:[t.jsx("p",{children:"250 ml"}),t.jsx("p",{children:"7:00 am"})]}),t.jsx("h2",{className:"add-water-title",children:r}),t.jsxs("div",{className:"counter-box",children:[t.jsx("p",{className:"",children:"Amount of water:"}),t.jsxs("div",{className:"counter-btn-box",children:[t.jsxs("button",{className:"counter-btn",onClick:()=>b(d.count-50),type:"button",children:[" ",t.jsx(H,{className:"icon-minus",id:"minus"})]}),t.jsxs("span",{className:"water-amount-span",children:[d.count,"ml"]}),t.jsx("button",{className:"counter-btn",onClick:()=>b(d.count+50),type:"button",children:t.jsx(H,{className:"icon-plus",id:"plus"})})]})]}),t.jsxs("form",{className:"add-water-form",onSubmit:n(O),children:[t.jsxs("label",{className:"water-label",children:[t.jsx("span",{children:"Recording time:"}),t.jsx("input",{...e("date",{required:!0}),type:"time",name:"date",step:300,className:"water-input","aria-label":"Time"}),i.date&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("label",{className:"water-label",children:[t.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),t.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:d.inputValue,onChange:v,onBlur:g,onKeyPress:f,className:"water-input"}),i.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{className:"btn-container",children:[t.jsxs("span",{className:"water-amount",children:[d.count,"ml"]}),t.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},ee=r=>r.water,nt=Q(ee,r=>r.waterList);Q(ee,r=>r.amountDaily);Q(ee,r=>r.amountMonthly);const rt=Q(ee,r=>r.isLoading),at=Q(ee,r=>r.error),it=({handleDeleteWater:r,closeModal:s,waterId:a})=>{const e=()=>{s()},n=()=>{r(a),s()};return t.jsxs("div",{children:[t.jsx("p",{children:"Are you sure you want to delete the entry?"}),t.jsx("button",{type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{type:"button",onClick:n,children:"Save"})]})},ot=({handleDeleteWater:r,handleUpdateWater:s,closeModal:a,waterList:e})=>{const[n,i]=P.useState(!1);return t.jsx(t.Fragment,{children:e.map(l=>t.jsxs("li",{children:[t.jsx("span",{children:t.jsx(H,{className:"water-glass-icon",id:"water"})}),t.jsx("p",{children:l.waterList.waterVolume}),t.jsx("button",{type:"button",className:"edit-btn",children:t.jsx(H,{className:"edit-water-icon",id:"pencil"})}),n&&t.jsx(J,{setVisible:i,title:"Edit the entered amount of water",children:t.jsx(ue,{title:"Choose a value",show:!1,handleUpdateWater:s,closeModal:a})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>r(l.waterList.waterId),children:t.jsx(H,{className:"delete-water-icon",id:"delete"})}),n&&t.jsx(J,{setVisible:i,title:"Delete water",children:t.jsx(it,{waterId:l.waterList.waterId,handleDeleteWater:r,closeModal:a,title:"Delete entry?"})})]},l.waterList.waterId))})},st=()=>{const[r,s]=P.useState(!1),a=de(),e=G(nt),n=G(rt),i=G(at);P.useEffect(()=>{a(Ce())},[a]);const l=b=>{a(Ie(b))},d=b=>{a(Fe(b))},p=()=>{s(!1)};return t.jsxs(et,{children:[t.jsx("h1",{className:"water-title",children:"Today"}),n&&!i&&t.jsx(_e,{}),e.length===0?t.jsx("p",{className:"water-empty",children:"No notes yet"}):t.jsx(ot,{show:!1,closeModal:p,handleDeleteWater:l,handleUpdateWater:d,waterList:e}),t.jsx("div",{children:t.jsxs("button",{className:"add-water-btn",onClick:()=>s(!0),children:[t.jsx(H,{className:"water-plus-icon",id:"plus"}),"Add water"]})}),r&&t.jsx(J,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:p})})]})},ct=x.div`
  position: relative;
  width: 544px;
  height: 100%;
  background-color: #ecf2ff;

  .RightAlign {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 32px;
    width: 100%;
    margin-top: 6px;
    margin-left: auto;
  }
  .MonthTitle {
    font-size: 16px;
    color: #407bff;
  }
  .Button {
    color: #407bff;
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    flex-shrink: 0;
    cursor: pointer;
  }
`,lt=x.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: center;

  gap: 4px;

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
`,Te=x.span`
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
`,dt=x.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,ut=x.div`
  width: 292px;
  height: 188px;
  background-color: #fff;
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #407bff;
  }
  .TitleModal {
    color: #407bff;
    font-size: 16px;
  }
  .ModalParagraf {
    font-size: 16px;
    color: #2f2f2f;
    line-height: 20px;
  }
  .SpanModal {
    margin-left: 6px;
    color: #407bff;
    font-size: 18px;
  }
`,ht=x(Te)`
  border: #ff9d43 1px solid;
`,pt=()=>{const r=()=>new Date,[s,a]=P.useState(r()),[e,n]=P.useState(null),[i,l]=P.useState(!1),[d,p]=P.useState(null),b=P.useRef(null);Ae(b,()=>{i&&l(!1)});const v=m=>{const T=m.getFullYear(),R=m.getMonth(),Y=new Date(T,R+1,0).getDate(),K=[];for(let C=1;C<=Y;C++)K.push({day:C,month:m.toLocaleString("en-US",{month:"long"})});return K},g=()=>{const m=new Date(s.getFullYear(),s.getMonth(),1),T=new Date(s.getFullYear(),s.getMonth()+1,0),R=r();return R>=m&&R<=T},f=()=>{a(m=>new Date(m.getFullYear(),m.getMonth()-1)),n(null)},O=()=>{const m=new Date(s.getFullYear(),s.getMonth()+1);m<=r()&&(a(m),n(null))},u=m=>{const T=document.getElementById(`day-${m.day}`);if(!T){console.error(`Element with id 'day-${m.day}' not found.`);return}const R=T.getBoundingClientRect(),Y=292,C=R.top-188-40,_=R.left+R.width/2-Y/2;n(m.day),p(m),document.documentElement.style.setProperty("--modal-top",`${C}px`),document.documentElement.style.setProperty("--modal-left",`${_}px`),l(!0)},S=()=>{l(!1)};P.useEffect(()=>{const m=T=>{T instanceof KeyboardEvent&&T.key==="Escape"&&S()};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[]);const F=()=>60;return t.jsxs(ct,{children:[t.jsxs("div",{className:"RightAlign",children:[t.jsx("button",{className:"Button",onClick:f,children:"<"}),t.jsxs("div",{className:"MonthTitle",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),!g()&&t.jsx("button",{className:"Button",onClick:O,children:">"})]}),t.jsx(lt,{children:v(s).map(m=>t.jsxs("li",{id:`day-${m.day}`,className:"hover active",children:[F()<100?t.jsx(ht,{className:`day ${e===m.day?"selected":""}`,onClick:()=>u(m),children:m.day}):t.jsx(Te,{className:`day ${e===m.day?"selected":""}`,onClick:()=>u(m),children:m.day}),t.jsx("p",{className:`procent ${F()<100?"lowPercentage":""}`,children:`${F()}%`})]},m.day))}),t.jsx(dt,{ref:b,className:i?"open":"",children:t.jsxs(ut,{children:[t.jsx("button",{className:"close hover active",onClick:S,children:"×"}),t.jsx("h3",{className:"TitleModal",children:`${d==null?void 0:d.day}, ${d==null?void 0:d.month}`}),t.jsxs("p",{className:"ModalParagraf",children:["Daily norm: ",t.jsx("span",{className:"SpanModal",children:"1.5L"})]}),t.jsxs("p",{className:"ModalParagraf",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"SpanModal",children:"100%"})]}),t.jsxs("p",{className:"ModalParagraf",children:["How many servings of water: ",t.jsx("span",{className:"SpanModal",children:"6"})]})]})})]})};var le={},he={},pe={},ie={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(ie);(function(r){var s=B&&B.__spreadArray||function(o,c,h){if(h||arguments.length===2)for(var w=0,j=c.length,y;w<j;w++)(y||!(w in c))&&(y||(y=Array.prototype.slice.call(c,0,w)),y[w]=c[w]);return o.concat(y||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var a=P,e=ie,n=function(o){var c=o.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=n;function i(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}r.isTouchEvent=i;function l(o,c,h){var w=(c-o)/h,j=8,y=Number(w.toFixed(j));return parseInt(y.toString(),10)===y}r.isStepDivisible=l;function d(o,c,h,w,j,y,D){var M=1e11;if(o=Math.round(o*M)/M,!y){var A=D[c-1],E=D[c+1];if(A&&A>o)return A;if(E&&E<o)return E}if(o>w)return w;if(o<h)return h;var $=Math.floor(o*M-h*M)%Math.floor(j*M),z=Math.floor(o*M-Math.abs($)),W=$===0?o:z/M,I=Math.abs($/M)<j/2?W:W+j,U=(0,r.getStepDecimals)(j);return parseFloat(I.toFixed(U))}r.normalizeValue=d;function p(o,c,h){return(o-c)/(h-c)}r.relativeValue=p;function b(o){return o===e.Direction.Up||o===e.Direction.Down}r.isVertical=b;function v(o,c,h){if(c>=h)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(h,")"));if(o<c)throw new RangeError("value (".concat(o,") is smaller than min (").concat(c,")"));if(o>h)throw new RangeError("value (".concat(o,") is bigger than max (").concat(h,")"))}r.checkBoundaries=v;function g(o,c,h){return o<c?c:o>h?h:o}r.checkValuesAgainstBoundaries=g;function f(o){if(!(o.length<2)&&!o.slice(1).every(function(c,h){return o[h]<=c}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=f;function O(o){var c=window.getComputedStyle(o);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=O;function u(o){var c=window.getComputedStyle(o);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=u;function S(o,c,h){var w=h?-1:1;o.forEach(function(j,y){return m(j,w*c[y].x,c[y].y)})}r.translateThumbs=S;function F(o,c,h,w){for(var j=0,y=V(o[0],c,h,w),D=1;D<o.length;D++){var M=V(o[D],c,h,w);M<y&&(y=M,j=D)}return j}r.getClosestThumbIndex=F;function m(o,c,h){o.style.transform="translate(".concat(c,"px, ").concat(h,"px)")}r.translate=m;var T=function(o){var c=[],h=null,w=function(){for(var j=[],y=0;y<arguments.length;y++)j[y]=arguments[y];c=j,!h&&(h=requestAnimationFrame(function(){h=null,o.apply(void 0,c)}))};return w};r.schd=T;function R(o,c,h){var w=o.slice(0);return w[c]=h,w}r.replaceAt=R;function Y(o){var c=o.values,h=o.colors,w=o.min,j=o.max,y=o.direction,D=y===void 0?e.Direction.Right:y,M=o.rtl,A=M===void 0?!1:M;A&&D===e.Direction.Right?D=e.Direction.Left:A&&e.Direction.Left&&(D=e.Direction.Right);var E=c.slice(0).sort(function(z,W){return z-W}).map(function(z){return(z-w)/(j-w)*100}),$=E.reduce(function(z,W,I){return"".concat(z,", ").concat(h[I]," ").concat(W,"%, ").concat(h[I+1]," ").concat(W,"%")},"");return"linear-gradient(".concat(D,", ").concat(h[0]," 0%").concat($,", ").concat(h[h.length-1]," 100%)")}r.getTrackBackground=Y;function K(){}r.voidFn=K;function C(o){throw new Error("Didn't expect to get here")}r.assertUnreachable=C;var _=function(o,c,h,w,j){j===void 0&&(j=function(D){return D});var y=Math.ceil(s([o],Array.from(o.children),!0).reduce(function(D,M){var A=Math.ceil(M.getBoundingClientRect().width);if(M.innerText&&M.innerText.includes(h)&&M.childElementCount===0){var E=M.cloneNode(!0);E.innerHTML=j(c.toFixed(w)),E.style.visibility="hidden",document.body.appendChild(E),A=Math.ceil(E.getBoundingClientRect().width),document.body.removeChild(E)}return A>D?A:D},o.getBoundingClientRect().width));return y},te=function(o,c,h,w,j,y,D){D===void 0&&(D=function(E){return E});var M=[],A=function(E){var $=_(h[E],w[E],j,y,D),z=c[E].x;c.forEach(function(W,I){var U=W.x,q=_(h[I],w[I],j,y,D);E!==I&&(z>=U&&z<=U+q||z+$>=U&&z+$<=U+q)&&(M.includes(I)||(M.push(E),M.push(I),M=s(s([],M,!0),[E,I],!1),A(I)))})};return A(o),Array.from(new Set(M.sort()))},X=function(o,c,h,w,j,y){w===void 0&&(w=.1),j===void 0&&(j=" - "),y===void 0&&(y=function(I){return I});var D=(0,r.getStepDecimals)(w),M=(0,a.useState)({}),A=M[0],E=M[1],$=(0,a.useState)(y(c[h].toFixed(D))),z=$[0],W=$[1];return(0,a.useEffect)(function(){if(o){var I=o.getThumbs();if(I.length<1)return;var U={},q=o.getOffsets(),ne=te(h,q,I,c,j,D,y),fe=y(c[h].toFixed(D));if(ne.length){var re=ne.reduce(function(Z,ve,xe,be){return Z.length?s(s([],Z,!0),[q[be[xe]].x],!1):[q[be[xe]].x]},[]);if(Math.min.apply(Math,re)===q[h].x){var me=[];ne.forEach(function(Z){me.push(c[Z].toFixed(D))}),fe=Array.from(new Set(me.sort(function(Z,ve){return parseFloat(Z)-parseFloat(ve)}))).map(y).join(j);var De=Math.min.apply(Math,re),ge=Math.max.apply(Math,re),Oe=I[ne[re.indexOf(ge)]].getBoundingClientRect().width;U.left="".concat(Math.abs(De-(ge+Oe))/2,"px"),U.transform="translate(-50%, 0)"}else U.visibility="hidden"}W(fe),E(U)}},[o,c]),[z,A]};r.useThumbOverlap=X;function V(o,c,h,w){var j=o.getBoundingClientRect(),y=j.left,D=j.top,M=j.width,A=j.height;return b(w)?Math.abs(h-(D+A/2)):Math.abs(c-(y+M/2))}})(pe);var ft=B&&B.__extends||function(){var r=function(s,a){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},r(s,a)};return function(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");r(s,a);function e(){this.constructor=s}s.prototype=a===null?Object.create(a):(e.prototype=a.prototype,new e)}}(),mt=B&&B.__createBinding||(Object.create?function(r,s,a,e){e===void 0&&(e=a);var n=Object.getOwnPropertyDescriptor(s,a);(!n||("get"in n?!s.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return s[a]}}),Object.defineProperty(r,e,n)}:function(r,s,a,e){e===void 0&&(e=a),r[e]=s[a]}),gt=B&&B.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),vt=B&&B.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var a in r)a!=="default"&&Object.prototype.hasOwnProperty.call(r,a)&&mt(s,r,a);return gt(s,r),s},je=B&&B.__spreadArray||function(r,s,a){if(a||arguments.length===2)for(var e=0,n=s.length,i;e<n;e++)(i||!(e in s))&&(i||(i=Array.prototype.slice.call(s,0,e)),i[e]=s[e]);return r.concat(i||Array.prototype.slice.call(s))};Object.defineProperty(he,"__esModule",{value:!0});var ae=vt(P),k=pe,N=ie,xt=["ArrowRight","ArrowUp","k","PageUp"],bt=["ArrowLeft","ArrowDown","j","PageDown"],yt=function(r){ft(s,r);function s(a){var e=r.call(this,a)||this;if(e.trackRef=ae.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,i){return i}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,i=n.direction,l=n.values,d=n.min,p=n.max,b=e.trackRef.current,v=b.getBoundingClientRect(),g=(0,k.getPaddingAndBorder)(b);return e.getThumbs().map(function(f,O){var u={x:0,y:0},S=f.getBoundingClientRect(),F=(0,k.getMargin)(f);switch(i){case N.Direction.Right:return u.x=(F.left+g.left)*-1,u.y=((S.height-v.height)/2+g.top)*-1,u.x+=v.width*(0,k.relativeValue)(l[O],d,p)-S.width/2,u;case N.Direction.Left:return u.x=(F.right+g.right)*-1,u.y=((S.height-v.height)/2+g.top)*-1,u.x+=v.width-v.width*(0,k.relativeValue)(l[O],d,p)-S.width/2,u;case N.Direction.Up:return u.x=((S.width-v.width)/2+F.left+g.left)*-1,u.y=-g.left,u.y+=v.height-v.height*(0,k.relativeValue)(l[O],d,p)-S.height/2,u;case N.Direction.Down:return u.x=((S.width-v.width)/2+F.left+g.left)*-1,u.y=-g.left,u.y+=v.height*(0,k.relativeValue)(l[O],d,p)-S.height/2,u;default:return(0,k.assertUnreachable)(i)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(i){return i===n.target||i.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var i;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var p;return(p=d.current)===null||p===void 0?void 0:p.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var l=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.clientX,n.clientY,e.props.direction);(i=e.thumbRefs[l].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,k.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var i;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var p;return(p=d.current)===null||p===void 0?void 0:p.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var l=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(i=e.thumbRefs[l].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var i=(0,k.isTouchEvent)(n);if(!(!i&&n.button!==0)){var l=e.getTargetIndex(n);l!==-1&&(i?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:l,thumbZIndexes:e.state.thumbZIndexes.map(function(d,p){return p===l?Math.max.apply(Math,e.state.thumbZIndexes):d<=e.state.thumbZIndexes[l]?d:d-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var i=e.props,l=i.values,d=i.onChange,p=i.step,b=i.rtl,v=i.direction,g=e.state.isChanged,f=e.getTargetIndex(n.nativeEvent),O=b||v===N.Direction.Left||v===N.Direction.Down?-1:1;f!==-1&&(xt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:f,isChanged:!0}),d((0,k.replaceAt)(l,f,e.normalizeValue(l[f]+O*(n.key==="PageUp"?p*10:p),f)))):bt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:f,isChanged:!0}),d((0,k.replaceAt)(l,f,e.normalizeValue(l[f]-O*(n.key==="PageDown"?p*10:p),f)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){g&&e.fireOnFinalChange()}):g&&e.fireOnFinalChange())},e.onKeyUp=function(n){var i=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){i&&e.fireOnFinalChange()})},e.onMove=function(n,i){var l=e.state,d=l.draggedThumbIndex,p=l.draggedTrackPos,b=e.props,v=b.direction,g=b.min,f=b.max,O=b.onChange,u=b.values,S=b.step,F=b.rtl;if(d===-1&&p[0]===-1&&p[1]===-1)return null;var m=e.trackRef.current;if(!m)return null;var T=m.getBoundingClientRect(),R=(0,k.isVertical)(v)?T.height:T.width;if(p[0]!==-1&&p[1]!==-1){var Y=n-p[0],K=i-p[1],C=0;switch(v){case N.Direction.Right:case N.Direction.Left:C=Y/R*(f-g);break;case N.Direction.Down:case N.Direction.Up:C=K/R*(f-g);break;default:(0,k.assertUnreachable)(v)}if(F&&(C*=-1),Math.abs(C)>=S/2){for(var _=0;_<e.thumbRefs.length;_++){if(u[_]===f&&Math.sign(C)===1||u[_]===g&&Math.sign(C)===-1)return;var te=u[_]+C;te>f?C=f-u[_]:te<g&&(C=g-u[_])}for(var X=u.slice(0),_=0;_<e.thumbRefs.length;_++)X=(0,k.replaceAt)(X,_,e.normalizeValue(u[_]+C,_));e.setState({draggedTrackPos:[n,i]}),O(X)}}else{var V=0;switch(v){case N.Direction.Right:V=(n-T.left)/R*(f-g)+g;break;case N.Direction.Left:V=(R-(n-T.left))/R*(f-g)+g;break;case N.Direction.Down:V=(i-T.top)/R*(f-g)+g;break;case N.Direction.Up:V=(R-(i-T.top))/R*(f-g)+g;break;default:(0,k.assertUnreachable)(v)}F&&(V=f+g-V),Math.abs(u[d]-V)>=S/2&&O((0,k.replaceAt)(u,d,e.normalizeValue(V,d)))}},e.normalizeValue=function(n,i){var l=e.props,d=l.min,p=l.max,b=l.step,v=l.allowOverlap,g=l.values;return(0,k.normalizeValue)(n,i,d,p,b,v,g)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,i=n.onFinalChange,l=n.values;i&&i(l)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var i=0;i<e.numOfMarks+1;i++)e.markRefs[i]=ae.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),i=parseInt(n.width,10),l=parseInt(n.height,10),d=parseInt(n.paddingLeft,10),p=parseInt(n.paddingTop,10),b=[],v=0;v<e.numOfMarks+1;v++){var g=9999,f=9999;if(e.markRefs[v].current){var O=e.markRefs[v].current.getBoundingClientRect();g=O.height,f=O.width}e.props.direction===N.Direction.Left||e.props.direction===N.Direction.Right?b.push([Math.round(i/e.numOfMarks*v+d-f/2),-Math.round((g-l)/2)]):b.push([Math.round(l/e.numOfMarks*v+p-g/2),-Math.round((f-i)/2)])}e.setState({markOffsets:b})}},a.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,k.schd)(e.onMouseMove),e.schdOnTouchMove=(0,k.schd)(e.onTouchMove),e.schdOnEnd=(0,k.schd)(e.onEnd),e.thumbRefs=a.values.map(function(){return ae.createRef()}),e.updateMarkRefs(a),e}return s.prototype.componentDidMount=function(){var a=this,e=this.props,n=e.values,i=e.min,l=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",a.onResize)},unobserve:function(){return window.removeEventListener("resize",a.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,k.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(d){return(0,k.checkBoundaries)(d,a.props.min,a.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(d){(0,k.isStepDivisible)(i,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(a,e){var n=this.props,i=n.max,l=n.min,d=n.step,p=n.values,b=n.rtl;(a.max!==i||a.min!==l||a.step!==d)&&this.updateMarkRefs(this.props),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),b),(a.max!==i||a.min!==l||a.step!==d||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),p.forEach(function(v){(0,k.isStepDivisible)(l,v,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var a={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,a),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var a=this,e=this.props,n=e.renderTrack,i=e.renderThumb,l=e.renderMark,d=l===void 0?function(){return null}:l,p=e.values,b=e.min,v=e.max,g=e.allowOverlap,f=e.disabled,O=this.state,u=O.draggedThumbIndex,S=O.thumbZIndexes,F=O.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:u>-1?"grabbing":this.props.draggableTrack?(0,k.isVertical)(this.props.direction)?"ns-resize":"ew-resize":p.length===1&&!f?"pointer":"inherit"},onMouseDown:f?k.voidFn:this.onMouseDownTrack,onTouchStart:f?k.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:f,children:je(je([],F.map(function(m,T,R){return d({props:{style:a.props.direction===N.Direction.Left||a.props.direction===N.Direction.Right?{position:"absolute",left:"".concat(m[0],"px"),marginTop:"".concat(m[1],"px")}:{position:"absolute",top:"".concat(m[0],"px"),marginLeft:"".concat(m[1],"px")},key:"mark".concat(T),ref:a.markRefs[T]},index:T})}),!0),p.map(function(m,T){var R=a.state.draggedThumbIndex===T;return i({index:T,value:m,isDragged:R,props:{style:{position:"absolute",zIndex:S[T],cursor:f?"inherit":R?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:T,tabIndex:f?void 0:0,"aria-valuemax":g?v:p[T+1]||v,"aria-valuemin":g?b:p[T-1]||b,"aria-valuenow":m,draggable:!1,ref:a.thumbRefs[T],role:"slider",onKeyDown:f?k.voidFn:a.onKeyDown,onKeyUp:f?k.voidFn:a.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:N.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ae.Component);he.default=yt;(function(r){var s=B&&B.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var a=s(he);r.Range=a.default;var e=pe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=ie;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(le);const wt=x.div`
  width: 280px;
  @media ${L.tablet} {
    width: 704px;
  }
  @media ${L.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,jt=x.div`
  @media ${L.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${L.desktop} {
    display: flex;
    gap: 24px;
  }
`,kt=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Mt=x.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${L.tablet} {
    padding-bottom: 16px;
  }
`,Tt=x.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${L.tablet} {
    width: 325px;
  }
  @media ${L.desktop} {
    width: 360px;
  }
`,Dt=x.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,Ot=x.div`
  position: relative;
  top: 24px;
`,St=x.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,Rt=x.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,ke=x.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Et=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${L.tablet} {
    width: 400px;
  }
  @media ${L.desktop} {
    width: 592px;
  }
`,Nt=x.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${L.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${L.desktop} {
    width: 178px;
  }
`,Ct=()=>{const r=[5],[s,a]=P.useState(!1),e=()=>{a(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(wt,{children:t.jsxs(jt,{children:[t.jsxs("div",{children:[t.jsx(Mt,{children:"Today"}),t.jsx(kt,{children:t.jsx(le.Range,{disabled:!0,min:0,max:100,values:r,onChange:()=>{},renderTrack:({props:n,children:i})=>t.jsx(Tt,{...n,style:{...n.style,background:le.getTrackBackground({values:r,colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:i}),renderThumb:({props:n})=>P.createElement(Dt,{...n,key:n.key},t.jsx(Ot,{children:t.jsxs(St,{children:[r[0],"%"]})}))})}),t.jsxs(Rt,{children:[r[0]<=6?t.jsx("span",{children:" "}):t.jsx(ke,{children:"0%"}),r[0]>=91?t.jsx("span",{children:" "}):t.jsx(ke,{children:"100%"})]})]}),t.jsx(Et,{className:"hover",children:t.jsxs(Nt,{className:"btn",onClick:()=>a(!0),children:[t.jsx(H,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),s&&t.jsx(J,{setVisible:a,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!0,closeModal:e})})]})},It=()=>t.jsx("section",{children:t.jsxs("div",{className:"container",children:[t.jsx(Qe,{}),t.jsx(st,{}),t.jsx(pt,{}),t.jsx(Ct,{})]})});export{It as default};
