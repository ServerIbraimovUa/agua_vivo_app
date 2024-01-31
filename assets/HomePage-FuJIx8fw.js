import{u as x,d as N,a as ae,s as Se,b as ke,c as de,j as t,e as Ee,r as L,f as Ce,M as G,g as Fe,h as J,I as re,i as _e,k as Ie,l as Ae,m as z}from"./index-QHPk3hle.js";const Be=x.div``,Ne=x.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,Pe=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Le=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${N.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,ze=x.div`
  display: flex;
  gap: 24px;
`,oe=x.span`
  color: var(--primary-blue);
  font-size: 18px;
`,Ve=x.span`
  width: 190px;
  @media ${N.tablet} {
    width: auto;
  }
`,$e=x.p`
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
`,We=x.label`
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
`,He=x.button`
  color: #8baeff;
`,Ze=x.div`
  display: flex;
  gap: 5px;
  margin-bottom: 16px;
`,Xe=x.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  @media ${N.tablet} {
    font-size: 24px;
  }
`,Ge=({onClose:r})=>{const{gender:s}=ae(Se);console.log(s);const{register:a,handleSubmit:e,watch:n,formState:{errors:i}}=ke({defaultValues:{weight:"",time:"",dailyNorma:""},mode:"onChange"}),d=de(),l=D=>{const{dailyNorma:f}=D;console.log(f),d(Ee(f)),r()},h=Number(n("weight")),y=Number(n("time")),v=String(n("sex")),m=((D,f,O)=>String(O==="Man"?(D*.04+f*.6).toFixed(1):(D*.03+f*.4).toFixed(1)))(h,y,v);return t.jsx(Be,{children:t.jsxs(Ne,{onSubmit:e(l),children:[t.jsxs(Pe,{children:[t.jsxs(Le,{children:[t.jsxs("p",{children:["For girl:",t.jsx(oe,{children:"V=(M*0,03) + (T*0,4)"})]}),t.jsxs("p",{children:["For man:",t.jsx(oe,{children:"V=(M*0,04) + (T*0,6)"})]})]}),t.jsx($e,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),t.jsxs(Ue,{children:[t.jsx(ye,{children:"Calculate your rate:"}),t.jsxs(ze,{children:[t.jsxs("label",{children:[t.jsx(we,{...a("sex",{required:"Please select a gender"}),value:"Woman",type:"radio"}),"For woman"]}),t.jsxs("label",{children:[t.jsx(we,{...a("sex",{required:"Please select a gender"}),value:"Man",type:"radio"}),"For man"]})]}),t.jsxs(se,{children:[t.jsx("span",{children:"Your weight in kilograms:"}),t.jsx(ce,{...a("weight",{min:20,max:320}),type:"number",placeholder:"0"})]}),t.jsxs(se,{children:[t.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),t.jsx(ce,{...a("time",{max:24}),type:"number",placeholder:"0"})]}),t.jsxs(We,{children:[t.jsx(Ve,{children:"The required amount of water in liters per day:"}),t.jsxs(oe,{children:[m," L"]})]})]}),t.jsx(Ye,{children:t.jsxs(se,{children:[t.jsx(ye,{children:"Write down how much water you will drink:"}),t.jsx(ce,{...a("dailyNorma",{max:15}),type:"number"}),i.dailyNorma&&t.jsx("span",{children:"This field is required"})]})}),t.jsx(Ke,{className:"btn",type:"submit",children:"Save"})]})})},Je=()=>{const[r,s]=L.useState(!1),a=()=>{s(!r)},e=ae(Ce);return t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:"My daily norma"}),t.jsxs(Ze,{children:[t.jsxs(Xe,{children:[e,"L"]}),r&&t.jsx(G,{setVisible:a,title:"My Daily Norma",daily:!0,children:t.jsx(Ge,{onClose:a})}),t.jsx(He,{type:"button",onClick:a,children:"Edit"})]})]})},ue=({title:r,show:s,closeModal:a})=>{const{register:e,handleSubmit:n,formState:{errors:i}}=ke(),d=de(),[l,h]=L.useState({count:0,inputValue:"0"}),y=f=>{l.count+f>=0&&h({inputValue:String(f),count:f})},v=f=>{const{value:O}=f.target;h(_=>({..._,inputValue:O}))},g=()=>{y(Number(l.inputValue))},m=f=>{f.key==="-"&&f.preventDefault()},D=f=>{const O={date:f.date,waterVolume:Number(l.inputValue)};d(Fe(O)),a()};return t.jsxs("div",{children:[s&&t.jsxs("div",{children:[t.jsx("p",{children:"250 ml"}),t.jsx("p",{children:"7:00 am"})]}),t.jsx("h2",{children:r}),t.jsx("p",{children:"Amount of water:"}),t.jsxs("form",{onSubmit:n(D),children:[t.jsxs("div",{className:"counter",children:[t.jsx("button",{onClick:()=>y(l.count-50),type:"button",children:"-"}),t.jsxs("span",{children:[l.count,"ml"]}),t.jsx("button",{onClick:()=>y(l.count+50),type:"button",children:"+"})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Recording time:"}),t.jsx("input",{...e("date",{required:!0}),type:"time",name:"date",step:300}),i.date&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Enter the value of water used:"}),t.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:l.inputValue,onChange:v,onBlur:g,onKeyPress:m}),i.waterVolume&&t.jsx("span",{children:"This field is required"})]}),t.jsxs("div",{children:[t.jsxs("span",{children:[l.count,"ml"]}),t.jsx("button",{type:"submit",children:"Save"})]})]})]})},Q=r=>r.water,Te=J(Q,r=>r.waterList);J(Q,r=>r.amountDaily);J(Q,r=>r.amountMonthly);J(Q,r=>r.isLoading);J(Q,r=>r.error);const Qe=({handleDeleteWater:r,closeModal:s,waterId:a})=>{const e=()=>{s()},n=()=>{r(a),s()};return t.jsxs("div",{children:[t.jsx("p",{children:"Are you sure you want to delete the entry?"}),t.jsx("button",{type:"button",onClick:e,children:"Cancel"}),t.jsx("button",{type:"button",onClick:n,children:"Save"})]})},et=({handleDeleteWater:r,handleUpdateWater:s,closeModal:a})=>{const[e,n]=L.useState(!1),i=ae(Te);return t.jsx(t.Fragment,{children:i.map(({waterVolume:d,date:l,waterId:h})=>t.jsxs("li",{children:[t.jsx("span",{children:t.jsx(re,{className:"water-glass-icon",id:"icon-water"})}),t.jsx("p",{children:d}),t.jsx("p",{children:l}),t.jsx("button",{type:"button",className:"edit-btn",children:t.jsx(re,{className:"edit-water-icon",id:"icon-pencil"})}),e&&t.jsx(G,{setVisible:n,title:"Edit the entered amount of water",children:t.jsx(ue,{title:"Choose a value",show:!1,handleUpdateWater:s,closeModal:a})}),t.jsx("button",{type:"button",className:"delete-btn",onClick:()=>r(h),children:t.jsx(re,{className:"delete-water-icon",id:"icon-delete"})}),e&&t.jsx(G,{setVisible:n,title:"Delete water",children:t.jsx(Qe,{waterId:h,handleDeleteWater:r,closeModal:a})})]},h))})},tt=()=>{const[r,s]=L.useState(!1),a=de(),e=ae(Te),n=l=>{a(_e(l))},i=l=>{a(Ie(l))},d=()=>{s(!1)};return t.jsxs("div",{children:[t.jsx("h1",{children:"Today"}),e.length===0?t.jsx("p",{children:"No notes yet"}):t.jsx(et,{show:!1,closeModal:d,handleDeleteWater:n,handleUpdateWater:i}),t.jsx("div",{children:t.jsx("button",{onClick:()=>s(!0),children:"Add water"})}),r&&t.jsx(G,{setVisible:s,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:d})})]})},nt=x.div`
  position: relative;
  width: 544px;
 height: 100%;
  background-color: #ECF2FF;
  .header {
     display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100%;
  margin-bottom: 16px;
  }
  .RightAlign {
      margin-top: 6px;
  margin-left: auto;
  height: 20px;
  display: flex;
  align-items: center;
  }
  .MonthTitle {
      font-size: 16px;
  color: #407BFF;
  }
  .Button {
    color: #407BFF;
  border: none;
  background-color: transparent;
  padding: 5px 10px;
  flex-shrink: 0;
  cursor: pointer;
  }
`,rt=x.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 4px;
  .procent {
    color: #9EBBFF;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  }
`,De=x.div`
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
`,at=x.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  width: 100%;
  height: 100%;
`,it=x.div`
  width: 292px;
  height: 188px;
  background-color: #fff;
  /* padding: 16px; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  
  .close {
      position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #407BFF;
  }
  .TitleModal {
     color: #407BFF;
  font-size: 16px;
  }
  .ModalParagraf {
      font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;
  }
  .SpanModal {
      margin-left: 6px;
  color: #407BFF;
  font-size: 18px;
  }
`,ot=x.div`
  margin-top: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
`,st=x(De)`
  border: #FF9D43 1px solid;
`,ct=()=>{const r=()=>new Date,[s,a]=L.useState(r()),[e,n]=L.useState(null),[i,d]=L.useState(!1),[l,h]=L.useState(null),y=L.useRef(null);Ae(y,()=>{i&&d(!1)});const v=u=>{const R=u.getFullYear(),V=u.getMonth(),K=new Date(R,V+1,0).getDate(),B=[];for(let S=1;S<=K;S++)B.push({day:S,month:u.toLocaleString("en-US",{month:"long"})});return B},g=()=>{const u=new Date(s.getFullYear(),s.getMonth(),1),R=new Date(s.getFullYear(),s.getMonth()+1,0),V=r();return V>=u&&V<=R},m=()=>{a(u=>new Date(u.getFullYear(),u.getMonth()-1)),n(null)},D=()=>{const u=new Date(s.getFullYear(),s.getMonth()+1);u<=r()&&(a(u),n(null))},f=()=>{_()},O=u=>{const R=document.getElementById(`day-${u.day}`);if(!R){console.error(`Element with id 'day-${u.day}' not found.`);return}const V=R.getBoundingClientRect(),K=292,S=V.top-188-40,H=V.left+V.width/2-K/2;e===u.day?f():(n(u.day),h(u),document.documentElement.style.setProperty("--modal-top",`${S}px`),document.documentElement.style.setProperty("--modal-left",`${H}px`),d(!0))},_=()=>{d(!1)};L.useEffect(()=>{const u=R=>{R instanceof KeyboardEvent&&R.key==="Escape"&&_()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[]);const I=()=>100;return t.jsxs(nt,{children:[t.jsx("header",{className:"header",children:t.jsxs("div",{className:"RightAlign",children:[t.jsx("button",{className:"Button",onClick:m,children:"<"}),t.jsxs("div",{className:"MonthTitle",children:[s.toLocaleString("en-US",{month:"long"}),","," ",s.getFullYear()]}),!g()&&t.jsx("button",{className:"Button",onClick:D,children:">"})]})}),t.jsx(rt,{children:v(s).map(u=>t.jsxs("div",{id:`day-${u.day}`,className:"hover active",children:[I()<100?t.jsx(st,{className:`day ${e===u.day?"selected":""}`,onClick:()=>O(u),children:u.day}):t.jsx(De,{className:`day ${e===u.day?"selected":""}`,onClick:()=>O(u),children:u.day}),t.jsx("p",{className:`procent ${I()<100?"lowPercentage":""}`,children:`${I()}%`})]},u.day))}),i&&t.jsx(at,{ref:y,children:t.jsx(it,{children:t.jsxs(ot,{children:[t.jsx("button",{className:"close hover active",onClick:_,children:"×"}),t.jsx("h1",{className:"TitleModal",children:`${l==null?void 0:l.day}, ${l==null?void 0:l.month}`}),t.jsxs("p",{className:"ModalParagraf",children:["Daily norm: ",t.jsx("span",{className:"SpanModal",children:"1.5L"})]}),t.jsxs("p",{className:"ModalParagraf",children:["Fulfillment of the daily norm:"," ",t.jsx("span",{className:"SpanModal",children:"100%"})]}),t.jsxs("p",{className:"ModalParagraf",children:["How many servings of water:"," ",t.jsx("span",{className:"SpanModal",children:"6"})]})]})})})]})};var le={},he={},pe={},ie={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Direction=void 0,function(s){s.Right="to right",s.Left="to left",s.Down="to bottom",s.Up="to top"}(r.Direction||(r.Direction={}))})(ie);(function(r){var s=z&&z.__spreadArray||function(o,c,p){if(p||arguments.length===2)for(var w=0,j=c.length,b;w<j;w++)(b||!(w in c))&&(b||(b=Array.prototype.slice.call(c,0,w)),b[w]=c[w]);return o.concat(b||Array.prototype.slice.call(c))};Object.defineProperty(r,"__esModule",{value:!0}),r.useThumbOverlap=r.assertUnreachable=r.voidFn=r.getTrackBackground=r.replaceAt=r.schd=r.translate=r.getClosestThumbIndex=r.translateThumbs=r.getPaddingAndBorder=r.getMargin=r.checkInitialOverlap=r.checkValuesAgainstBoundaries=r.checkBoundaries=r.isVertical=r.relativeValue=r.normalizeValue=r.isStepDivisible=r.isTouchEvent=r.getStepDecimals=void 0;var a=L,e=ie,n=function(o){var c=o.toString().split(".")[1];return c?c.length:0};r.getStepDecimals=n;function i(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}r.isTouchEvent=i;function d(o,c,p){var w=(c-o)/p,j=8,b=Number(w.toFixed(j));return parseInt(b.toString(),10)===b}r.isStepDivisible=d;function l(o,c,p,w,j,b,T){var k=1e11;if(o=Math.round(o*k)/k,!b){var A=T[c-1],E=T[c+1];if(A&&A>o)return A;if(E&&E<o)return E}if(o>w)return w;if(o<p)return p;var U=Math.floor(o*k-p*k)%Math.floor(j*k),P=Math.floor(o*k-Math.abs(U)),W=U===0?o:P/k,F=Math.abs(U/k)<j/2?W:W+j,Y=(0,r.getStepDecimals)(j);return parseFloat(F.toFixed(Y))}r.normalizeValue=l;function h(o,c,p){return(o-c)/(p-c)}r.relativeValue=h;function y(o){return o===e.Direction.Up||o===e.Direction.Down}r.isVertical=y;function v(o,c,p){if(c>=p)throw new RangeError("min (".concat(c,") is equal/bigger than max (").concat(p,")"));if(o<c)throw new RangeError("value (".concat(o,") is smaller than min (").concat(c,")"));if(o>p)throw new RangeError("value (".concat(o,") is bigger than max (").concat(p,")"))}r.checkBoundaries=v;function g(o,c,p){return o<c?c:o>p?p:o}r.checkValuesAgainstBoundaries=g;function m(o){if(!(o.length<2)&&!o.slice(1).every(function(c,p){return o[p]<=c}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}r.checkInitialOverlap=m;function D(o){var c=window.getComputedStyle(o);return{top:parseInt(c["margin-top"],10),bottom:parseInt(c["margin-bottom"],10),left:parseInt(c["margin-left"],10),right:parseInt(c["margin-right"],10)}}r.getMargin=D;function f(o){var c=window.getComputedStyle(o);return{top:parseInt(c["padding-top"],10)+parseInt(c["border-top-width"],10),bottom:parseInt(c["padding-bottom"],10)+parseInt(c["border-bottom-width"],10),left:parseInt(c["padding-left"],10)+parseInt(c["border-left-width"],10),right:parseInt(c["padding-right"],10)+parseInt(c["border-right-width"],10)}}r.getPaddingAndBorder=f;function O(o,c,p){var w=p?-1:1;o.forEach(function(j,b){return I(j,w*c[b].x,c[b].y)})}r.translateThumbs=O;function _(o,c,p,w){for(var j=0,b=$(o[0],c,p,w),T=1;T<o.length;T++){var k=$(o[T],c,p,w);k<b&&(b=k,j=T)}return j}r.getClosestThumbIndex=_;function I(o,c,p){o.style.transform="translate(".concat(c,"px, ").concat(p,"px)")}r.translate=I;var u=function(o){var c=[],p=null,w=function(){for(var j=[],b=0;b<arguments.length;b++)j[b]=arguments[b];c=j,!p&&(p=requestAnimationFrame(function(){p=null,o.apply(void 0,c)}))};return w};r.schd=u;function R(o,c,p){var w=o.slice(0);return w[c]=p,w}r.replaceAt=R;function V(o){var c=o.values,p=o.colors,w=o.min,j=o.max,b=o.direction,T=b===void 0?e.Direction.Right:b,k=o.rtl,A=k===void 0?!1:k;A&&T===e.Direction.Right?T=e.Direction.Left:A&&e.Direction.Left&&(T=e.Direction.Right);var E=c.slice(0).sort(function(P,W){return P-W}).map(function(P){return(P-w)/(j-w)*100}),U=E.reduce(function(P,W,F){return"".concat(P,", ").concat(p[F]," ").concat(W,"%, ").concat(p[F+1]," ").concat(W,"%")},"");return"linear-gradient(".concat(T,", ").concat(p[0]," 0%").concat(U,", ").concat(p[p.length-1]," 100%)")}r.getTrackBackground=V;function K(){}r.voidFn=K;function B(o){throw new Error("Didn't expect to get here")}r.assertUnreachable=B;var S=function(o,c,p,w,j){j===void 0&&(j=function(T){return T});var b=Math.ceil(s([o],Array.from(o.children),!0).reduce(function(T,k){var A=Math.ceil(k.getBoundingClientRect().width);if(k.innerText&&k.innerText.includes(p)&&k.childElementCount===0){var E=k.cloneNode(!0);E.innerHTML=j(c.toFixed(w)),E.style.visibility="hidden",document.body.appendChild(E),A=Math.ceil(E.getBoundingClientRect().width),document.body.removeChild(E)}return A>T?A:T},o.getBoundingClientRect().width));return b},H=function(o,c,p,w,j,b,T){T===void 0&&(T=function(E){return E});var k=[],A=function(E){var U=S(p[E],w[E],j,b,T),P=c[E].x;c.forEach(function(W,F){var Y=W.x,q=S(p[F],w[F],j,b,T);E!==F&&(P>=Y&&P<=Y+q||P+U>=Y&&P+U<=Y+q)&&(k.includes(F)||(k.push(E),k.push(F),k=s(s([],k,!0),[E,F],!1),A(F)))})};return A(o),Array.from(new Set(k.sort()))},X=function(o,c,p,w,j,b){w===void 0&&(w=.1),j===void 0&&(j=" - "),b===void 0&&(b=function(F){return F});var T=(0,r.getStepDecimals)(w),k=(0,a.useState)({}),A=k[0],E=k[1],U=(0,a.useState)(b(c[p].toFixed(T))),P=U[0],W=U[1];return(0,a.useEffect)(function(){if(o){var F=o.getThumbs();if(F.length<1)return;var Y={},q=o.getOffsets(),ee=H(p,q,F,c,j,T,b),fe=b(c[p].toFixed(T));if(ee.length){var te=ee.reduce(function(Z,ve,xe,be){return Z.length?s(s([],Z,!0),[q[be[xe]].x],!1):[q[be[xe]].x]},[]);if(Math.min.apply(Math,te)===q[p].x){var me=[];ee.forEach(function(Z){me.push(c[Z].toFixed(T))}),fe=Array.from(new Set(me.sort(function(Z,ve){return parseFloat(Z)-parseFloat(ve)}))).map(b).join(j);var Oe=Math.min.apply(Math,te),ge=Math.max.apply(Math,te),Re=F[ee[te.indexOf(ge)]].getBoundingClientRect().width;Y.left="".concat(Math.abs(Oe-(ge+Re))/2,"px"),Y.transform="translate(-50%, 0)"}else Y.visibility="hidden"}W(fe),E(Y)}},[o,c]),[P,A]};r.useThumbOverlap=X;function $(o,c,p,w){var j=o.getBoundingClientRect(),b=j.left,T=j.top,k=j.width,A=j.height;return y(w)?Math.abs(p-(T+A/2)):Math.abs(c-(b+k/2))}})(pe);var lt=z&&z.__extends||function(){var r=function(s,a){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},r(s,a)};return function(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");r(s,a);function e(){this.constructor=s}s.prototype=a===null?Object.create(a):(e.prototype=a.prototype,new e)}}(),dt=z&&z.__createBinding||(Object.create?function(r,s,a,e){e===void 0&&(e=a);var n=Object.getOwnPropertyDescriptor(s,a);(!n||("get"in n?!s.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return s[a]}}),Object.defineProperty(r,e,n)}:function(r,s,a,e){e===void 0&&(e=a),r[e]=s[a]}),ut=z&&z.__setModuleDefault||(Object.create?function(r,s){Object.defineProperty(r,"default",{enumerable:!0,value:s})}:function(r,s){r.default=s}),ht=z&&z.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(r!=null)for(var a in r)a!=="default"&&Object.prototype.hasOwnProperty.call(r,a)&&dt(s,r,a);return ut(s,r),s},je=z&&z.__spreadArray||function(r,s,a){if(a||arguments.length===2)for(var e=0,n=s.length,i;e<n;e++)(i||!(e in s))&&(i||(i=Array.prototype.slice.call(s,0,e)),i[e]=s[e]);return r.concat(i||Array.prototype.slice.call(s))};Object.defineProperty(he,"__esModule",{value:!0});var ne=ht(L),M=pe,C=ie,pt=["ArrowRight","ArrowUp","k","PageUp"],ft=["ArrowLeft","ArrowDown","j","PageDown"],mt=function(r){lt(s,r);function s(a){var e=r.call(this,a)||this;if(e.trackRef=ne.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,i){return i}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,i=n.direction,d=n.values,l=n.min,h=n.max,y=e.trackRef.current,v=y.getBoundingClientRect(),g=(0,M.getPaddingAndBorder)(y);return e.getThumbs().map(function(m,D){var f={x:0,y:0},O=m.getBoundingClientRect(),_=(0,M.getMargin)(m);switch(i){case C.Direction.Right:return f.x=(_.left+g.left)*-1,f.y=((O.height-v.height)/2+g.top)*-1,f.x+=v.width*(0,M.relativeValue)(d[D],l,h)-O.width/2,f;case C.Direction.Left:return f.x=(_.right+g.right)*-1,f.y=((O.height-v.height)/2+g.top)*-1,f.x+=v.width-v.width*(0,M.relativeValue)(d[D],l,h)-O.width/2,f;case C.Direction.Up:return f.x=((O.width-v.width)/2+_.left+g.left)*-1,f.y=-g.left,f.y+=v.height-v.height*(0,M.relativeValue)(d[D],l,h)-O.height/2,f;case C.Direction.Down:return f.x=((O.width-v.width)/2+_.left+g.left)*-1,f.y=-g.left,f.y+=v.height*(0,M.relativeValue)(d[D],l,h)-O.height/2,f;default:return(0,M.assertUnreachable)(i)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(i){return i===n.target||i.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var i;if(n.button===0)if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var h;return(h=l.current)===null||h===void 0?void 0:h.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var d=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),n.clientX,n.clientY,e.props.direction);(i=e.thumbRefs[d].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:d},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,M.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var i;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var h;return(h=l.current)===null||h===void 0?void 0:h.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var d=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(i=e.thumbRefs[d].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:d},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var i=(0,M.isTouchEvent)(n);if(!(!i&&n.button!==0)){var d=e.getTargetIndex(n);d!==-1&&(i?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:d,thumbZIndexes:e.state.thumbZIndexes.map(function(l,h){return h===d?Math.max.apply(Math,e.state.thumbZIndexes):l<=e.state.thumbZIndexes[d]?l:l-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var i=e.props,d=i.values,l=i.onChange,h=i.step,y=i.rtl,v=i.direction,g=e.state.isChanged,m=e.getTargetIndex(n.nativeEvent),D=y||v===C.Direction.Left||v===C.Direction.Down?-1:1;m!==-1&&(pt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),l((0,M.replaceAt)(d,m,e.normalizeValue(d[m]+D*(n.key==="PageUp"?h*10:h),m)))):ft.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),l((0,M.replaceAt)(d,m,e.normalizeValue(d[m]-D*(n.key==="PageDown"?h*10:h),m)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){g&&e.fireOnFinalChange()}):g&&e.fireOnFinalChange())},e.onKeyUp=function(n){var i=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){i&&e.fireOnFinalChange()})},e.onMove=function(n,i){var d=e.state,l=d.draggedThumbIndex,h=d.draggedTrackPos,y=e.props,v=y.direction,g=y.min,m=y.max,D=y.onChange,f=y.values,O=y.step,_=y.rtl;if(l===-1&&h[0]===-1&&h[1]===-1)return null;var I=e.trackRef.current;if(!I)return null;var u=I.getBoundingClientRect(),R=(0,M.isVertical)(v)?u.height:u.width;if(h[0]!==-1&&h[1]!==-1){var V=n-h[0],K=i-h[1],B=0;switch(v){case C.Direction.Right:case C.Direction.Left:B=V/R*(m-g);break;case C.Direction.Down:case C.Direction.Up:B=K/R*(m-g);break;default:(0,M.assertUnreachable)(v)}if(_&&(B*=-1),Math.abs(B)>=O/2){for(var S=0;S<e.thumbRefs.length;S++){if(f[S]===m&&Math.sign(B)===1||f[S]===g&&Math.sign(B)===-1)return;var H=f[S]+B;H>m?B=m-f[S]:H<g&&(B=g-f[S])}for(var X=f.slice(0),S=0;S<e.thumbRefs.length;S++)X=(0,M.replaceAt)(X,S,e.normalizeValue(f[S]+B,S));e.setState({draggedTrackPos:[n,i]}),D(X)}}else{var $=0;switch(v){case C.Direction.Right:$=(n-u.left)/R*(m-g)+g;break;case C.Direction.Left:$=(R-(n-u.left))/R*(m-g)+g;break;case C.Direction.Down:$=(i-u.top)/R*(m-g)+g;break;case C.Direction.Up:$=(R-(i-u.top))/R*(m-g)+g;break;default:(0,M.assertUnreachable)(v)}_&&($=m+g-$),Math.abs(f[l]-$)>=O/2&&D((0,M.replaceAt)(f,l,e.normalizeValue($,l)))}},e.normalizeValue=function(n,i){var d=e.props,l=d.min,h=d.max,y=d.step,v=d.allowOverlap,g=d.values;return(0,M.normalizeValue)(n,i,l,h,y,v,g)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,i=n.onFinalChange,d=n.values;i&&i(d)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var i=0;i<e.numOfMarks+1;i++)e.markRefs[i]=ne.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),i=parseInt(n.width,10),d=parseInt(n.height,10),l=parseInt(n.paddingLeft,10),h=parseInt(n.paddingTop,10),y=[],v=0;v<e.numOfMarks+1;v++){var g=9999,m=9999;if(e.markRefs[v].current){var D=e.markRefs[v].current.getBoundingClientRect();g=D.height,m=D.width}e.props.direction===C.Direction.Left||e.props.direction===C.Direction.Right?y.push([Math.round(i/e.numOfMarks*v+l-m/2),-Math.round((g-d)/2)]):y.push([Math.round(d/e.numOfMarks*v+h-g/2),-Math.round((m-i)/2)])}e.setState({markOffsets:y})}},a.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,M.schd)(e.onMouseMove),e.schdOnTouchMove=(0,M.schd)(e.onTouchMove),e.schdOnEnd=(0,M.schd)(e.onEnd),e.thumbRefs=a.values.map(function(){return ne.createRef()}),e.updateMarkRefs(a),e}return s.prototype.componentDidMount=function(){var a=this,e=this.props,n=e.values,i=e.min,d=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",a.onResize)},unobserve:function(){return window.removeEventListener("resize",a.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,M.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,M.checkBoundaries)(l,a.props.min,a.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(l){(0,M.isStepDivisible)(i,l,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},s.prototype.componentDidUpdate=function(a,e){var n=this.props,i=n.max,d=n.min,l=n.step,h=n.values,y=n.rtl;(a.max!==i||a.min!==d||a.step!==l)&&this.updateMarkRefs(this.props),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),y),(a.max!==i||a.min!==d||a.step!==l||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),h.forEach(function(v){(0,M.isStepDivisible)(d,v,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},s.prototype.componentWillUnmount=function(){var a={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,a),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},s.prototype.render=function(){var a=this,e=this.props,n=e.renderTrack,i=e.renderThumb,d=e.renderMark,l=d===void 0?function(){return null}:d,h=e.values,y=e.min,v=e.max,g=e.allowOverlap,m=e.disabled,D=this.state,f=D.draggedThumbIndex,O=D.thumbZIndexes,_=D.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:f>-1?"grabbing":this.props.draggableTrack?(0,M.isVertical)(this.props.direction)?"ns-resize":"ew-resize":h.length===1&&!m?"pointer":"inherit"},onMouseDown:m?M.voidFn:this.onMouseDownTrack,onTouchStart:m?M.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:je(je([],_.map(function(I,u,R){return l({props:{style:a.props.direction===C.Direction.Left||a.props.direction===C.Direction.Right?{position:"absolute",left:"".concat(I[0],"px"),marginTop:"".concat(I[1],"px")}:{position:"absolute",top:"".concat(I[0],"px"),marginLeft:"".concat(I[1],"px")},key:"mark".concat(u),ref:a.markRefs[u]},index:u})}),!0),h.map(function(I,u){var R=a.state.draggedThumbIndex===u;return i({index:u,value:I,isDragged:R,props:{style:{position:"absolute",zIndex:O[u],cursor:m?"inherit":R?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:u,tabIndex:m?void 0:0,"aria-valuemax":g?v:h[u+1]||v,"aria-valuemin":g?y:h[u-1]||y,"aria-valuenow":I,draggable:!1,ref:a.thumbRefs[u],role:"slider",onKeyDown:m?M.voidFn:a.onKeyDown,onKeyUp:m?M.voidFn:a.onKeyUp}})}),!0)})},s.defaultProps={step:1,direction:C.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},s}(ne.Component);he.default=mt;(function(r){var s=z&&z.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(r,"__esModule",{value:!0}),r.checkValuesAgainstBoundaries=r.relativeValue=r.useThumbOverlap=r.Direction=r.getTrackBackground=r.Range=void 0;var a=s(he);r.Range=a.default;var e=pe;Object.defineProperty(r,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(r,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(r,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(r,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=ie;Object.defineProperty(r,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(le);const gt=x.div`
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
`,vt=x.div`
  @media ${N.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${N.desktop} {
    display: flex;
    gap: 24px;
  }
`,xt=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,bt=x.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${N.tablet} {
    padding-bottom: 16px;
  }
`,yt=x.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${N.tablet} {
    width: 325px;
  }
  @media ${N.desktop} {
    width: 360px;
  }
`,wt=x.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,jt=x.div`
  position: relative;
  top: 24px;
`,Mt=x.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,kt=x.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,Me=x.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Tt=x.div`
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
`,Dt=x.button`
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
`,Ot=()=>{const r=[5],[s,a]=L.useState(!1),e=()=>{a(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(gt,{children:t.jsxs(vt,{children:[t.jsxs("div",{children:[t.jsx(bt,{children:"Today"}),t.jsx(xt,{children:t.jsx(le.Range,{disabled:!0,min:0,max:100,values:r,onChange:()=>{},renderTrack:({props:n,children:i})=>t.jsx(yt,{...n,style:{...n.style,background:le.getTrackBackground({values:r,colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:i}),renderThumb:({props:n})=>L.createElement(wt,{...n,key:n.key},t.jsx(jt,{children:t.jsxs(Mt,{children:[r[0],"%"]})}))})}),t.jsxs(kt,{children:[r[0]<=6?t.jsx("span",{children:" "}):t.jsx(Me,{children:"0%"}),r[0]>=91?t.jsx("span",{children:" "}):t.jsx(Me,{children:"100%"})]})]}),t.jsx(Tt,{className:"hover",children:t.jsxs(Dt,{className:"btn",onClick:()=>a(!0),children:[t.jsx(re,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),s&&t.jsx(G,{setVisible:a,title:"Add water",children:t.jsx(ue,{title:"Choose a value",show:!1,closeModal:e})})]})},St=()=>t.jsx("section",{children:t.jsxs("div",{className:"container",children:[t.jsx(Je,{}),t.jsx(tt,{}),t.jsx(ct,{}),t.jsx(Ot,{})]})});export{St as default};
