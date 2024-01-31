import{u as b,d as P,a as ae,s as Se,b as Me,c as de,j as n,e as Ee,r as L,f as Ce,M as X,g as _e,h as G,I as re,i as Fe,k as Ie,l as Ne,m as z}from"./index-j7TDzxhi.js";const Ae=b.div``,Pe=b.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,Be=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Le=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${P.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,ze=b.div`
  display: flex;
  gap: 24px;
`,oe=b.span`
  color: var(--primary-blue);
  font-size: 18px;
`,Ve=b.span`
  width: 190px;
  @media ${P.tablet} {
    width: auto;
  }
`,$e=b.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Ue=b.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,ye=b.h3`
  font-size: 18px;
  font-weight: bold;
`,se=b.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,We=b.label`
  display: flex;
  gap: 5px;
`,we=b.input`
  margin-right: 5px;
`,ce=b.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
`,Ye=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ke=b.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${P.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,qe=b.h2`
  font-size: 18px;
  font-weight: var(--bold-font-weight);
  line-height: 1.33;
  margin-bottom: 12px;
`,He=b.button`
  color: #8baeff;
`,Ze=b.div`
  display: flex;
  gap: 5px;
  margin-bottom: 16px;
`,Xe=b.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  @media ${P.tablet} {
    font-size: 24px;
  }
`,Ge=({onClose:r})=>{const{gender:s}=ae(Se);console.log(s);const{register:a,handleSubmit:e,watch:t,formState:{errors:i}}=Me({defaultValues:{weight:"",time:"",dailyNorma:""},mode:"onChange"}),d=de(),l=O=>{const{dailyNorma:h}=O;console.log(h),d(Ee(h)),r()},u=Number(t("weight")),y=Number(t("time")),v=String(t("sex")),f=((O,h,R)=>String(R==="Man"?(O*.04+h*.6).toFixed(1):(O*.03+h*.4).toFixed(1)))(u,y,v);return n.jsx(Ae,{children:n.jsxs(Pe,{onSubmit:e(l),children:[n.jsxs(Be,{children:[n.jsxs(Le,{children:[n.jsxs("p",{children:["For girl:",n.jsx(oe,{children:"V=(M*0,03) + (T*0,4)"})]}),n.jsxs("p",{children:["For man:",n.jsx(oe,{children:"V=(M*0,04) + (T*0,6)"})]})]}),n.jsx($e,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),n.jsxs(Ue,{children:[n.jsx(ye,{children:"Calculate your rate:"}),n.jsxs(ze,{children:[n.jsxs("label",{children:[n.jsx(we,{...a("sex",{required:"Please select a gender"}),value:"Woman",type:"radio"}),"For woman"]}),n.jsxs("label",{children:[n.jsx(we,{...a("sex",{required:"Please select a gender"}),value:"Man",type:"radio"}),"For man"]})]}),n.jsxs(se,{children:[n.jsx("span",{children:"Your weight in kilograms:"}),n.jsx(ce,{...a("weight",{min:20,max:320}),type:"number",placeholder:"0"})]}),n.jsxs(se,{children:[n.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),n.jsx(ce,{...a("time",{max:24}),type:"number",placeholder:"0"})]}),n.jsxs(We,{children:[n.jsx(Ve,{children:"The required amount of water in liters per day:"}),n.jsxs(oe,{children:[f," L"]})]})]}),n.jsx(Ye,{children:n.jsxs(se,{children:[n.jsx(ye,{children:"Write down how much water you will drink:"}),n.jsx(ce,{...a("dailyNorma",{max:15}),type:"number"}),i.dailyNorma&&n.jsx("span",{children:"This field is required"})]})}),n.jsx(Ke,{className:"btn",type:"submit",children:"Save"})]})})},Je=()=>{const[r,s]=L.useState(!1),a=()=>{s(!r)},e=ae(Ce);return n.jsxs(n.Fragment,{children:[n.jsx(qe,{children:"My daily norma"}),n.jsxs(Ze,{children:[n.jsxs(Xe,{children:[e,"L"]}),r&&n.jsx(X,{setVisible:a,title:"My Daily Norma",daily:!0,children:n.jsx(Ge,{onClose:a})}),n.jsx(He,{type:"button",onClick:a,children:"Edit"})]})]})},ue=({title:r,show:s,closeModal:a})=>{const{register:e,handleSubmit:t,formState:{errors:i}}=Me(),d=de(),[l,u]=L.useState({count:0,inputValue:"0"}),y=h=>{l.count+h>=0&&u({inputValue:String(h),count:h})},v=h=>{const{value:R}=h.target;u(N=>({...N,inputValue:R}))},g=()=>{y(Number(l.inputValue))},f=h=>{h.key==="-"&&h.preventDefault()},O=h=>{const R={date:h.date,waterVolume:Number(l.inputValue)};d(_e(R)),a()};return n.jsxs("div",{children:[s&&n.jsxs("div",{children:[n.jsx("p",{children:"250 ml"}),n.jsx("p",{children:"7:00 am"})]}),n.jsx("h2",{children:r}),n.jsx("p",{children:"Amount of water:"}),n.jsxs("form",{onSubmit:t(O),children:[n.jsxs("div",{className:"counter",children:[n.jsx("button",{onClick:()=>y(l.count-50),type:"button",children:"-"}),n.jsxs("span",{children:[l.count,"ml"]}),n.jsx("button",{onClick:()=>y(l.count+50),type:"button",children:"+"})]}),n.jsxs("label",{children:[n.jsx("span",{children:"Recording time:"}),n.jsx("input",{...e("date",{required:!0}),type:"time",name:"date",step:300}),i.date&&n.jsx("span",{children:"This field is required"})]}),n.jsxs("label",{children:[n.jsx("span",{children:"Enter the value of water used:"}),n.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:l.inputValue,onChange:v,onBlur:g,onKeyPress:f}),i.waterVolume&&n.jsx("span",{children:"This field is required"})]}),n.jsxs("div",{children:[n.jsxs("span",{children:[l.count,"ml"]}),n.jsx("button",{type:"submit",children:"Save"})]})]})]})},J=r=>r.water,Te=G(J,r=>r.waterList);G(J,r=>r.amountDaily);G(J,r=>r.amountMonthly);G(J,r=>r.isLoading);G(J,r=>r.error);const Qe=({handleDeleteWater:r,closeModal:s,waterId:a})=>{const e=()=>{s()},t=()=>{r(a),s()};return n.jsxs("div",{children:[n.jsx("p",{children:"Are you sure you want to delete the entry?"}),n.jsx("button",{type:"button",onClick:e,children:"Cancel"}),n.jsx("button",{type:"button",onClick:t,children:"Save"})]})},et=({handleDeleteWater:r,handleUpdateWater:s,closeModal:a})=>{const[e,t]=L.useState(!1),i=ae(Te);return n.jsx(n.Fragment,{children:i.map(({waterVolume:d,date:l,waterId:u})=>n.jsxs("li",{children:[n.jsx("span",{children:n.jsx(re,{className:"water-glass-icon",id:"icon-water"})}),n.jsx("p",{children:d}),n.jsx("p",{children:l}),n.jsx("button",{type:"button",className:"edit-btn",children:n.jsx(re,{className:"edit-water-icon",id:"icon-pencil"})}),e&&n.jsx(X,{setVisible:t,title:"Edit the entered amount of water",children:n.jsx(ue,{title:"Choose a value",show:!1,handleUpdateWater:s,closeModal:a})}),n.jsx("button",{type:"button",className:"delete-btn",onClick:()=>r(u),children:n.jsx(re,{className:"delete-water-icon",id:"icon-delete"})}),e&&n.jsx(X,{setVisible:t,title:"Delete water",children:n.jsx(Qe,{waterId:u,handleDeleteWater:r,closeModal:a})})]},u))})},tt=()=>{const[r,s]=L.useState(!1),a=de(),e=ae(Te),t=l=>{a(Fe(l))},i=l=>{a(Ie(l))},d=()=>{s(!1)};return n.jsxs("div",{children:[n.jsx("h1",{children:"Today"}),e.length===0?n.jsx("p",{children:"No notes yet"}):n.jsx(et,{show:!1,closeModal:d,handleDeleteWater:t,handleUpdateWater:i}),n.jsx("div",{children:n.jsx("button",{onClick:()=>s(!0),children:"Add water"})}),r&&n.jsx(X,{setVisible:s,title:"Add water",children:n.jsx(ue,{title:"Choose a value",show:!1,closeModal:d})})]})},nt=b.div`
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
`,rt=b.ul`
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
`,De=b.span`
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
`,at=b.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,it=b.div`
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
`,ot=b(De)`
  border: #ff9d43 1px solid;
`,st=()=>{const r=()=>new Date,[s,a]=L.useState(r()),[e,t]=L.useState(null),[i,d]=L.useState(!1),[l,u]=L.useState(null),y=L.useRef(null);Ne(y,()=>{i&&d(!1)});const v=m=>{const T=m.getFullYear(),S=m.getMonth(),Y=new Date(T,S+1,0).getDate(),K=[];for(let _=1;_<=Y;_++)K.push({day:_,month:m.toLocaleString("en-US",{month:"long"})});return K},g=()=>{const m=new Date(s.getFullYear(),s.getMonth(),1),T=new Date(s.getFullYear(),s.getMonth()+1,0),S=r();return S>=m&&S<=T},f=()=>{a(m=>new Date(m.getFullYear(),m.getMonth()-1)),t(null)},O=()=>{const m=new Date(s.getFullYear(),s.getMonth()+1);m<=r()&&(a(m),t(null))},h=m=>{const T=document.getElementById(`day-${m.day}`);if(!T){console.error(`Element with id 'day-${m.day}' not found.`);return}const S=T.getBoundingClientRect(),Y=292,_=S.top-188-40,F=S.left+S.width/2-Y/2;t(m.day),u(m),document.documentElement.style.setProperty("--modal-top",`${_}px`),document.documentElement.style.setProperty("--modal-left",`${F}px`),d(!0)},R=()=>{d(!1)};L.useEffect(()=>{const m=T=>{T instanceof KeyboardEvent&&T.key==="Escape"&&R()};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[]);const N=()=>60;return n.jsxs(nt,{children:[n.jsxs("div",{className:"RightAlign",children:[n.jsx("button",{className:"Button",onClick:f,children:"<"}),n.jsxs("div",{className:"MonthTitle",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),!g()&&n.jsx("button",{className:"Button",onClick:O,children:">"})]}),n.jsx(rt,{children:v(s).map(m=>n.jsxs("li",{id:`day-${m.day}`,className:"hover active",children:[N()<100?n.jsx(ot,{className:`day ${e===m.day?"selected":""}`,onClick:()=>h(m),children:m.day}):n.jsx(De,{className:`day ${e===m.day?"selected":""}`,onClick:()=>h(m),children:m.day}),n.jsx("p",{className:`procent ${N()<100?"lowPercentage":""}`,children:`${N()}%`})]},m.day))}),n.jsx(at,{ref:y,className:i?"open":"",children:n.jsxs(it,{children:[n.jsx("button",{className:"close hover active",onClick:R,children:"×"}),n.jsx("h3",{className:"TitleModal",children:`${l==null?void 0:l.day}, ${l==null?void 0:l.month}`}),n.jsxs("p",{className:"ModalParagraf",children:["Daily norm: ",n.jsx("span",{className:"SpanModal",children:"1.5L"})]}),n.jsxs("p",{className:"ModalParagraf",children:["Fulfillment of the daily norm:"," ",n.jsx("span",{className:"SpanModal",children:"100%"})]}),n.jsxs("p",{className:"ModalParagraf",children:["How many servings of water: ",n.jsx("span",{className:"SpanModal",children:"6"})]})]})})]})};var le={},he={},pe={},ie={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(ie);(function(r){var s=z&&z.__spreadArray||function(o,c,p){if(p||arguments.length===2)for(var w=0,j=c.length,x;w<j;w++)(x||!(w in c))&&(x||(x=Array.prototype.slice.call(c,0,w)),x[w]=c[w]);return o.concat(x||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var a=L,e=ie,t=function(o){var c=o.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=t;function i(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}r.isTouchEvent=i;function d(o,c,p){var w=(c-o)/p,j=8,x=Number(w.toFixed(j));return parseInt(x.toString(),10)===x}r.isStepDivisible=d;function l(o,c,p,w,j,x,D){var M=1e11;if(o=Math.round(o*M)/M,!x){var A=D[c-1],E=D[c+1];if(A&&A>o)return A;if(E&&E<o)return E}if(o>w)return w;if(o<p)return p;var $=Math.floor(o*M-p*M)%Math.floor(j*M),B=Math.floor(o*M-Math.abs($)),U=$===0?o:B/M,I=Math.abs($/M)<j/2?U:U+j,W=(0,r.getStepDecimals)(j);return parseFloat(I.toFixed(W))}r.normalizeValue=l;function u(o,c,p){return(o-c)/(p-c)}r.relativeValue=u;function y(o){return o===e.Direction.Up||o===e.Direction.Down}r.isVertical=y;function v(o,c,p){if(c>=p)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(p,")"));if(o<c)throw new RangeError("value (".concat(o,") is smaller than min (").concat(c,")"));if(o>p)throw new RangeError("value (".concat(o,") is bigger than max (").concat(p,")"))}r.checkBoundaries=v;function g(o,c,p){return o<c?c:o>p?p:o}r.checkValuesAgainstBoundaries=g;function f(o){if(!(o.length<2)&&!o.slice(1).every(function(c,p){return o[p]<=c}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=f;function O(o){var c=window.getComputedStyle(o);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=O;function h(o){var c=window.getComputedStyle(o);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=h;function R(o,c,p){var w=p?-1:1;o.forEach(function(j,x){return m(j,w*c[x].x,c[x].y)})}r.translateThumbs=R;function N(o,c,p,w){for(var j=0,x=V(o[0],c,p,w),D=1;D<o.length;D++){var M=V(o[D],c,p,w);M<x&&(x=M,j=D)}return j}r.getClosestThumbIndex=N;function m(o,c,p){o.style.transform="translate(".concat(c,"px, ").concat(p,"px)")}r.translate=m;var T=function(o){var c=[],p=null,w=function(){for(var j=[],x=0;x<arguments.length;x++)j[x]=arguments[x];c=j,!p&&(p=requestAnimationFrame(function(){p=null,o.apply(void 0,c)}))};return w};r.schd=T;function S(o,c,p){var w=o.slice(0);return w[c]=p,w}r.replaceAt=S;function Y(o){var c=o.values,p=o.colors,w=o.min,j=o.max,x=o.direction,D=x===void 0?e.Direction.Right:x,M=o.rtl,A=M===void 0?!1:M;A&&D===e.Direction.Right?D=e.Direction.Left:A&&e.Direction.Left&&(D=e.Direction.Right);var E=c.slice(0).sort(function(B,U){return B-U}).map(function(B){return(B-w)/(j-w)*100}),$=E.reduce(function(B,U,I){return"".concat(B,", ").concat(p[I]," ").concat(U,"%, ").concat(p[I+1]," ").concat(U,"%")},"");return"linear-gradient(".concat(D,", ").concat(p[0]," 0%").concat($,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=Y;function K(){}r.voidFn=K;function _(o){throw new Error("Didn't expect to get here")}r.assertUnreachable=_;var F=function(o,c,p,w,j){j===void 0&&(j=function(D){return D});var x=Math.ceil(s([o],Array.from(o.children),!0).reduce(function(D,M){var A=Math.ceil(M.getBoundingClientRect().width);if(M.innerText&&M.innerText.includes(p)&&M.childElementCount===0){var E=M.cloneNode(!0);E.innerHTML=j(c.toFixed(w)),E.style.visibility="hidden",document.body.appendChild(E),A=Math.ceil(E.getBoundingClientRect().width),document.body.removeChild(E)}return A>D?A:D},o.getBoundingClientRect().width));return x},Q=function(o,c,p,w,j,x,D){D===void 0&&(D=function(E){return E});var M=[],A=function(E){var $=F(p[E],w[E],j,x,D),B=c[E].x;c.forEach(function(U,I){var W=U.x,q=F(p[I],w[I],j,x,D);E!==I&&(B>=W&&B<=W+q||B+$>=W&&B+$<=W+q)&&(M.includes(I)||(M.push(E),M.push(I),M=s(s([],M,!0),[E,I],!1),A(I)))})};return A(o),Array.from(new Set(M.sort()))},Z=function(o,c,p,w,j,x){w===void 0&&(w=.1),j===void 0&&(j=" - "),x===void 0&&(x=function(I){return I});var D=(0,r.getStepDecimals)(w),M=(0,a.useState)({}),A=M[0],E=M[1],$=(0,a.useState)(x(c[p].toFixed(D))),B=$[0],U=$[1];return(0,a.useEffect)(function(){if(o){var I=o.getThumbs();if(I.length<1)return;var W={},q=o.getOffsets(),ee=Q(p,q,I,c,j,D,x),fe=x(c[p].toFixed(D));if(ee.length){var te=ee.reduce(function(H,ve,xe,be){return H.length?s(s([],H,!0),[q[be[xe]].x],!1):[q[be[xe]].x]},[]);if(Math.min.apply(Math,te)===q[p].x){var me=[];ee.forEach(function(H){me.push(c[H].toFixed(D))}),fe=Array.from(new Set(me.sort(function(H,ve){return parseFloat(H)-parseFloat(ve)}))).map(x).join(j);var Oe=Math.min.apply(Math,te),ge=Math.max.apply(Math,te),Re=I[ee[te.indexOf(ge)]].getBoundingClientRect().width;W.left="".concat(Math.abs(Oe-(ge+Re))/2,"px"),W.transform="translate(-50%, 0)"}else W.visibility="hidden"}U(fe),E(W)}},[o,c]),[B,A]};r.useThumbOverlap=Z;function V(o,c,p,w){var j=o.getBoundingClientRect(),x=j.left,D=j.top,M=j.width,A=j.height;return y(w)?Math.abs(p-(D+A/2)):Math.abs(c-(x+M/2))}})(pe);var ct=z&&z.__extends||function(){var r=function(s,a){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},r(s,a)};return function(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");r(s,a);function e(){this.constructor=s}s.prototype=a===null?Object.create(a):(e.prototype=a.prototype,new e)}}(),lt=z&&z.__createBinding||(Object.create?function(r,s,a,e){e===void 0&&(e=a);var t=Object.getOwnPropertyDescriptor(s,a);(!t||("get"in t?!s.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return s[a]}}),Object.defineProperty(r,e,t)}:function(r,s,a,e){e===void 0&&(e=a),r[e]=s[a]}),dt=z&&z.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),ut=z&&z.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var a in r)a!=="default"&&Object.prototype.hasOwnProperty.call(r,a)&&lt(s,r,a);return dt(s,r),s},je=z&&z.__spreadArray||function(r,s,a){if(a||arguments.length===2)for(var e=0,t=s.length,i;e<t;e++)(i||!(e in s))&&(i||(i=Array.prototype.slice.call(s,0,e)),i[e]=s[e]);return r.concat(i||Array.prototype.slice.call(s))};Object.defineProperty(he,"__esModule",{value:!0});var ne=ut(L),k=pe,C=ie,ht=["ArrowRight","ArrowUp","k","PageUp"],pt=["ArrowLeft","ArrowDown","j","PageDown"],ft=function(r){ct(s,r);function s(a){var e=r.call(this,a)||this;if(e.trackRef=ne.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(t,i){return i}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var t=e.props,i=t.direction,d=t.values,l=t.min,u=t.max,y=e.trackRef.current,v=y.getBoundingClientRect(),g=(0,k.getPaddingAndBorder)(y);return e.getThumbs().map(function(f,O){var h={x:0,y:0},R=f.getBoundingClientRect(),N=(0,k.getMargin)(f);switch(i){case C.Direction.Right:return h.x=(N.left+g.left)*-1,h.y=((R.height-v.height)/2+g.top)*-1,h.x+=v.width*(0,k.relativeValue)(d[O],l,u)-R.width/2,h;case C.Direction.Left:return h.x=(N.right+g.right)*-1,h.y=((R.height-v.height)/2+g.top)*-1,h.x+=v.width-v.width*(0,k.relativeValue)(d[O],l,u)-R.width/2,h;case C.Direction.Up:return h.x=((R.width-v.width)/2+N.left+g.left)*-1,h.y=-g.left,h.y+=v.height-v.height*(0,k.relativeValue)(d[O],l,u)-R.height/2,h;case C.Direction.Down:return h.x=((R.width-v.width)/2+N.left+g.left)*-1,h.y=-g.left,h.y+=v.height*(0,k.relativeValue)(d[O],l,u)-R.height/2,h;default:return(0,k.assertUnreachable)(i)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(t){return t.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(t){return e.getThumbs().findIndex(function(i){return i===t.target||i.contains(t.target)})},e.addTouchEvents=function(t){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(t){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(t){var i;if(t.button===0)if(t.persist(),t.preventDefault(),e.addMouseEvents(t.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var u;return(u=l.current)===null||u===void 0?void 0:u.contains(t.target)}))return;e.setState({draggedTrackPos:[t.clientX,t.clientY]},function(){return e.onMove(t.clientX,t.clientY)})}else{var d=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),t.clientX,t.clientY,e.props.direction);(i=e.thumbRefs[d].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:d},function(){return e.onMove(t.clientX,t.clientY)})}},e.onResize=function(){(0,k.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(t){var i;if(t.persist(),e.addTouchEvents(t.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var u;return(u=l.current)===null||u===void 0?void 0:u.contains(t.target)}))return;e.setState({draggedTrackPos:[t.touches[0].clientX,t.touches[0].clientY]},function(){return e.onMove(t.touches[0].clientX,t.touches[0].clientY)})}else{var d=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),t.touches[0].clientX,t.touches[0].clientY,e.props.direction);(i=e.thumbRefs[d].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:d},function(){return e.onMove(t.touches[0].clientX,t.touches[0].clientY)})}},e.onMouseOrTouchStart=function(t){if(!e.props.disabled){var i=(0,k.isTouchEvent)(t);if(!(!i&&t.button!==0)){var d=e.getTargetIndex(t);d!==-1&&(i?e.addTouchEvents(t):e.addMouseEvents(t),e.setState({draggedThumbIndex:d,thumbZIndexes:e.state.thumbZIndexes.map(function(l,u){return u===d?Math.max.apply(Math,e.state.thumbZIndexes):l<=e.state.thumbZIndexes[d]?l:l-1})}))}}},e.onMouseMove=function(t){t.preventDefault(),e.onMove(t.clientX,t.clientY)},e.onTouchMove=function(t){t.preventDefault(),e.onMove(t.touches[0].clientX,t.touches[0].clientY)},e.onKeyDown=function(t){var i=e.props,d=i.values,l=i.onChange,u=i.step,y=i.rtl,v=i.direction,g=e.state.isChanged,f=e.getTargetIndex(t.nativeEvent),O=y||v===C.Direction.Left||v===C.Direction.Down?-1:1;f!==-1&&(ht.includes(t.key)?(t.preventDefault(),e.setState({draggedThumbIndex:f,isChanged:!0}),l((0,k.replaceAt)(d,f,e.normalizeValue(d[f]+O*(t.key==="PageUp"?u*10:u),f)))):pt.includes(t.key)?(t.preventDefault(),e.setState({draggedThumbIndex:f,isChanged:!0}),l((0,k.replaceAt)(d,f,e.normalizeValue(d[f]-O*(t.key==="PageDown"?u*10:u),f)))):t.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){g&&e.fireOnFinalChange()}):g&&e.fireOnFinalChange())},e.onKeyUp=function(t){var i=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){i&&e.fireOnFinalChange()})},e.onMove=function(t,i){var d=e.state,l=d.draggedThumbIndex,u=d.draggedTrackPos,y=e.props,v=y.direction,g=y.min,f=y.max,O=y.onChange,h=y.values,R=y.step,N=y.rtl;if(l===-1&&u[0]===-1&&u[1]===-1)return null;var m=e.trackRef.current;if(!m)return null;var T=m.getBoundingClientRect(),S=(0,k.isVertical)(v)?T.height:T.width;if(u[0]!==-1&&u[1]!==-1){var Y=t-u[0],K=i-u[1],_=0;switch(v){case C.Direction.Right:case C.Direction.Left:_=Y/S*(f-g);break;case C.Direction.Down:case C.Direction.Up:_=K/S*(f-g);break;default:(0,k.assertUnreachable)(v)}if(N&&(_*=-1),Math.abs(_)>=R/2){for(var F=0;F<e.thumbRefs.length;F++){if(h[F]===f&&Math.sign(_)===1||h[F]===g&&Math.sign(_)===-1)return;var Q=h[F]+_;Q>f?_=f-h[F]:Q<g&&(_=g-h[F])}for(var Z=h.slice(0),F=0;F<e.thumbRefs.length;F++)Z=(0,k.replaceAt)(Z,F,e.normalizeValue(h[F]+_,F));e.setState({draggedTrackPos:[t,i]}),O(Z)}}else{var V=0;switch(v){case C.Direction.Right:V=(t-T.left)/S*(f-g)+g;break;case C.Direction.Left:V=(S-(t-T.left))/S*(f-g)+g;break;case C.Direction.Down:V=(i-T.top)/S*(f-g)+g;break;case C.Direction.Up:V=(S-(i-T.top))/S*(f-g)+g;break;default:(0,k.assertUnreachable)(v)}N&&(V=f+g-V),Math.abs(h[l]-V)>=R/2&&O((0,k.replaceAt)(h,l,e.normalizeValue(V,l)))}},e.normalizeValue=function(t,i){var d=e.props,l=d.min,u=d.max,y=d.step,v=d.allowOverlap,g=d.values;return(0,k.normalizeValue)(t,i,l,u,y,v,g)},e.onEnd=function(t){if(t.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var t=e.props,i=t.onFinalChange,d=t.values;i&&i(d)},e.updateMarkRefs=function(t){if(!t.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(t.max-t.min)/e.props.step,e.markRefs=[];for(var i=0;i<e.numOfMarks+1;i++)e.markRefs[i]=ne.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var t=window.getComputedStyle(e.trackRef.current),i=parseInt(t.width,10),d=parseInt(t.height,10),l=parseInt(t.paddingLeft,10),u=parseInt(t.paddingTop,10),y=[],v=0;v<e.numOfMarks+1;v++){var g=9999,f=9999;if(e.markRefs[v].current){var O=e.markRefs[v].current.getBoundingClientRect();g=O.height,f=O.width}e.props.direction===C.Direction.Left||e.props.direction===C.Direction.Right?y.push([Math.round(i/e.numOfMarks*v+l-f/2),-Math.round((g-d)/2)]):y.push([Math.round(d/e.numOfMarks*v+u-g/2),-Math.round((f-i)/2)])}e.setState({markOffsets:y})}},a.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,k.schd)(e.onMouseMove),e.schdOnTouchMove=(0,k.schd)(e.onTouchMove),e.schdOnEnd=(0,k.schd)(e.onEnd),e.thumbRefs=a.values.map(function(){return ne.createRef()}),e.updateMarkRefs(a),e}return s.prototype.componentDidMount=function(){var a=this,e=this.props,t=e.values,i=e.min,d=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",a.onResize)},unobserve:function(){return window.removeEventListener("resize",a.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,k.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,k.checkBoundaries)(l,a.props.min,a.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),t.forEach(function(l){(0,k.isStepDivisible)(i,l,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(a,e){var t=this.props,i=t.max,d=t.min,l=t.step,u=t.values,y=t.rtl;(a.max!==i||a.min!==d||a.step!==l)&&this.updateMarkRefs(this.props),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),y),(a.max!==i||a.min!==d||a.step!==l||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),u.forEach(function(v){(0,k.isStepDivisible)(d,v,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var a={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,a),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var a=this,e=this.props,t=e.renderTrack,i=e.renderThumb,d=e.renderMark,l=d===void 0?function(){return null}:d,u=e.values,y=e.min,v=e.max,g=e.allowOverlap,f=e.disabled,O=this.state,h=O.draggedThumbIndex,R=O.thumbZIndexes,N=O.markOffsets;return t({props:{style:{transform:"scale(1)",cursor:h>-1?"grabbing":this.props.draggableTrack?(0,k.isVertical)(this.props.direction)?"ns-resize":"ew-resize":u.length===1&&!f?"pointer":"inherit"},onMouseDown:f?k.voidFn:this.onMouseDownTrack,onTouchStart:f?k.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:f,children:je(je([],N.map(function(m,T,S){return l({props:{style:a.props.direction===C.Direction.Left||a.props.direction===C.Direction.Right?{position:"absolute",left:"".concat(m[0],"px"),marginTop:"".concat(m[1],"px")}:{position:"absolute",top:"".concat(m[0],"px"),marginLeft:"".concat(m[1],"px")},key:"mark".concat(T),ref:a.markRefs[T]},index:T})}),!0),u.map(function(m,T){var S=a.state.draggedThumbIndex===T;return i({index:T,value:m,isDragged:S,props:{style:{position:"absolute",zIndex:R[T],cursor:f?"inherit":S?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:T,tabIndex:f?void 0:0,"aria-valuemax":g?v:u[T+1]||v,"aria-valuemin":g?y:u[T-1]||y,"aria-valuenow":m,draggable:!1,ref:a.thumbRefs[T],role:"slider",onKeyDown:f?k.voidFn:a.onKeyDown,onKeyUp:f?k.voidFn:a.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:C.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ne.Component);he.default=ft;(function(r){var s=z&&z.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var a=s(he);r.Range=a.default;var e=pe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var t=ie;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return t.Direction}})})(le);const mt=b.div`
  width: 280px;
  @media ${P.tablet} {
    width: 704px;
  }
  @media ${P.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,gt=b.div`
  @media ${P.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${P.desktop} {
    display: flex;
    gap: 24px;
  }
`,vt=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,xt=b.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${P.tablet} {
    padding-bottom: 16px;
  }
`,bt=b.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${P.tablet} {
    width: 325px;
  }
  @media ${P.desktop} {
    width: 360px;
  }
`,yt=b.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,wt=b.div`
  position: relative;
  top: 24px;
`,jt=b.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,kt=b.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,ke=b.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Mt=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${P.tablet} {
    width: 400px;
  }
  @media ${P.desktop} {
    width: 592px;
  }
`,Tt=b.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${P.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${P.desktop} {
    width: 178px;
  }
`,Dt=()=>{const r=[5],[s,a]=L.useState(!1),e=()=>{a(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(mt,{children:n.jsxs(gt,{children:[n.jsxs("div",{children:[n.jsx(xt,{children:"Today"}),n.jsx(vt,{children:n.jsx(le.Range,{disabled:!0,min:0,max:100,values:r,onChange:()=>{},renderTrack:({props:t,children:i})=>n.jsx(bt,{...t,style:{...t.style,background:le.getTrackBackground({values:r,colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:i}),renderThumb:({props:t})=>L.createElement(yt,{...t,key:t.key},n.jsx(wt,{children:n.jsxs(jt,{children:[r[0],"%"]})}))})}),n.jsxs(kt,{children:[r[0]<=6?n.jsx("span",{children:" "}):n.jsx(ke,{children:"0%"}),r[0]>=91?n.jsx("span",{children:" "}):n.jsx(ke,{children:"100%"})]})]}),n.jsx(Mt,{className:"hover",children:n.jsxs(Tt,{className:"btn",onClick:()=>a(!0),children:[n.jsx(re,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),s&&n.jsx(X,{setVisible:a,title:"Add water",children:n.jsx(ue,{title:"Choose a value",show:!0,closeModal:e})})]})},Rt=()=>n.jsx("section",{children:n.jsxs("div",{className:"container",children:[n.jsx(Je,{}),n.jsx(tt,{}),n.jsx(st,{}),n.jsx(Dt,{})]})});export{Rt as default};
