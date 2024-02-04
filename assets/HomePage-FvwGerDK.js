import{u as b,d as M,j as i,a as K,s as st,b as Oe,c as re,e as ct,r as B,f as He,M as ce,g as le,I as J,h as ut,i as lt,k as Ue,L as dt,l as ht,m as mt,n as H,o as ft}from"./index-aoDgH8A8.js";import{B as Xe,a as Qe,b as Ge,c as pt,d as gt,e as bt}from"./BottleHomeDesk-WtSqiB-E.js";const xt=b.div``,vt=b.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,wt=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,yt=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${M.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,kt=b.div`
  display: flex;
  gap: 24px;
`,we=b.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,Mt=b.span`
  width: 190px;
  @media ${M.tablet} {
    width: auto;
  }
`,jt=b.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Ot=b.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,Ce=b.h3`
  font-size: 18px;
  font-weight: bold;
`,ye=b.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Dt=b.label`
  display: flex;
  gap: 5px;
`,_e=b.input`
  margin-right: 5px;
`,ke=b.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,Tt=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,St=b.button`
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
`,Nt=b.div`
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
`,Pt=b.div`
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
  
`,Et=b.h2`
  font-size: 18px;
  line-height: 1.33;
`,Wt=b.button`
  color: #8baeff;
  &:hover{
    text-decoration: underline;
    text-decoration-color:var(--secondary-orange);
    text-decoration-thickness:2px;
    font-size: 18px;
  }
`,Rt=b.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,Ft=b.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${M.tablet} {
    font-size: 24px;
  }
`;b.span`
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
      top: 75%;
      border-top: 20px solid transparent;
      border-right: 30px solid var(--secondary-light-blue);
      border-bottom: transparent;
    }
    &::after {
      display: none;
    }
  }
`;b.span`
  color: var(--primary-blue);
  font-size: 18px;
`;const Ct=b.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;

  background-color: var(--secondary-light-blue);
  border-radius: 10px;
  border-bottom-left-radius: 0;
  width: 200px;
  height: 80px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  top: ${e=>e.$dailyNorma?"-90px":"-80px"};
  left: ${e=>e.$dailyNorma&&"-170px"};
  left: ${e=>e.$waterAmount&&"125px"};
  top: ${e=>e.$waterAmount&&"0px"};
  width: ${e=>e.$waterAmount&&"140px"};
 
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
    top: ${e=>e.$dailyNorma?"-70px":"-75px"};
    left: ${e=>e.$dailyNorma?"25px":"150px"};
    left: ${e=>e.$waterAmount&&"220px"};
    top: ${e=>e.$waterAmount&&"-70px"};
    width: ${e=>e.$waterAmount&&"200px"};
    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      right: 100%;
      top: 75%;
      border-top: 20px solid transparent;
      border-right: 30px solid var(--secondary-light-blue);
      border-bottom: transparent;
    }
    &::after {
      display: none;
    }
  }
`,_t=b.span`
  color: var(--primary-blue);
  font-size: 18px;
`,De=({message:e,...r})=>i.jsx(i.Fragment,{children:i.jsx(Ct,{$dailyNorma:r.dailyNorma,$waterAmount:r.waterAmount,children:i.jsx(_t,{children:e})})}),$t=({onClose:e})=>{const r=K(st),{register:n,handleSubmit:t,watch:a,formState:{errors:o}}=Oe({defaultValues:{weight:"",time:"",sex:r.gender||"woman",dailyNorma:r.dailyNorma||void 0},mode:"onChange"}),s=re(),h=E=>{const{dailyNorma:S}=E;s(ct({dailyNorma:+S})),e()};let d;const u=Number(a("weight")),f=Number(a("time")),p=String(a("sex")),g=(E,S,c)=>c==="man"?String((E*.04+S*.6).toFixed(1))+"L":String((E*.03+S*.4).toFixed(1))+"L",D=(E,S)=>{if(E<20&&E!==0)return d=!0,"You couldn't be less than 20kg";if(S>24)return d=!0,"Day contains only 24H";if(S<0)return d=!0,"Time should be only positive integer"},w=g(u,f,p),P=D(u,f);return i.jsx(xt,{children:i.jsxs(vt,{onSubmit:t(h),children:[i.jsxs(wt,{children:[i.jsxs(yt,{children:[i.jsxs("p",{children:["For girl:",i.jsx(we,{children:"V=(M*0,03) + (T*0,4)"})]}),i.jsxs("p",{children:["For man:",i.jsx(we,{children:"V=(M*0,04) + (T*0,6)"})]})]}),i.jsx(jt,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),i.jsxs(Ot,{children:[i.jsx(Ce,{children:"Calculate your rate:"}),i.jsxs(kt,{children:[i.jsxs("label",{children:[i.jsx(_e,{...n("sex"),value:"woman",type:"radio"}),"For woman"]}),i.jsxs("label",{children:[i.jsx(_e,{...n("sex"),value:"man",type:"radio"}),"For man"]})]}),i.jsxs(ye,{children:[i.jsx("span",{children:"Your weight in kilograms:"}),i.jsx(ke,{...n("weight"),type:"number",placeholder:"0"})]}),i.jsxs(ye,{children:[i.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),i.jsx(ke,{...n("time"),type:"number",placeholder:"0"})]}),i.jsxs(Dt,{children:[i.jsx(Mt,{children:"The required amount of water in liters per day:"}),i.jsx(we,{children:d?i.jsx(De,{message:P,dailyNorma:!0}):w})]})]}),i.jsx(Tt,{children:i.jsxs(ye,{children:[i.jsx(Ce,{children:"Write down how much water you will drink:"}),i.jsx(ke,{...n("dailyNorma",{required:!0}),type:"number",step:"any",min:0,max:15,placeholder:"0"}),o.dailyNorma&&i.jsx("span",{children:"This field is required"})]})}),i.jsx(St,{className:"btn",type:"submit",children:"Save"})]})})},At=()=>{const[e,r]=B.useState(!1),n=()=>{r(!e)},t=K(He);return i.jsx(i.Fragment,{children:i.jsx(Nt,{children:i.jsxs(Pt,{children:[i.jsx(Et,{children:"My daily norma"}),i.jsxs(Rt,{children:[i.jsxs(Ft,{children:[t," L"]}),e&&i.jsx(ce,{setVisible:n,title:"My Daily Norma",daily:!0,children:i.jsx($t,{onClose:n})}),i.jsx(Wt,{type:"button",onClick:n,children:"Edit"})]})]})})})};function U(e){const r=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&r==="[object Date]"?new e.constructor(+e):typeof e=="number"||r==="[object Number]"||typeof e=="string"||r==="[object String]"?new Date(e):new Date(NaN)}function ee(e,r){return e instanceof Date?new e.constructor(r):new Date(r)}function It(e,r){const n=+U(e);return ee(e,n+r)}const Ke=6048e5,Yt=864e5,Vt=6e4;let Bt={};function be(){return Bt}function ue(e,r){var h,d,u,f;const n=be(),t=(r==null?void 0:r.weekStartsOn)??((d=(h=r==null?void 0:r.locale)==null?void 0:h.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,a=U(e),o=a.getDay(),s=(o<t?7:0)+o-t;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function ge(e){return ue(e,{weekStartsOn:1})}function Je(e){const r=U(e),n=r.getFullYear(),t=ee(e,0);t.setFullYear(n+1,0,4),t.setHours(0,0,0,0);const a=ge(t),o=ee(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=ge(o);return r.getTime()>=a.getTime()?n+1:r.getTime()>=s.getTime()?n:n-1}function $e(e){const r=U(e);return r.setHours(0,0,0,0),r}function Ae(e){const r=U(e),n=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return n.setUTCFullYear(r.getFullYear()),+e-+n}function Lt(e,r){const n=$e(e),t=$e(r),a=+n-Ae(n),o=+t-Ae(t);return Math.round((a-o)/Yt)}function zt(e){const r=Je(e),n=ee(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),ge(n)}function fe(e,r){return It(e,r*Vt)}function qt(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ht(e){if(!qt(e)&&typeof e!="number")return!1;const r=U(e);return!isNaN(Number(r))}function Ut(e){const r=U(e),n=ee(e,0);return n.setFullYear(r.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qt=(e,r,n)=>{let t;const a=Xt[e];return typeof a=="string"?t=a:r===1?t=a.one:t=a.other.replace("{{count}}",r.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+t:t+" ago":t};function Me(e){return(r={})=>{const n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Gt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Kt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Jt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Zt={date:Me({formats:Gt,defaultWidth:"full"}),time:Me({formats:Kt,defaultWidth:"full"}),dateTime:Me({formats:Jt,defaultWidth:"full"})},en={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},tn=(e,r,n,t)=>en[e];function oe(e){return(r,n)=>{const t=n!=null&&n.context?String(n.context):"standalone";let a;if(t==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,h=n!=null&&n.width?String(n.width):s;a=e.formattingValues[h]||e.formattingValues[s]}else{const s=e.defaultWidth,h=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[h]||e.values[s]}const o=e.argumentCallback?e.argumentCallback(r):r;return a[o]}}const nn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},an={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},on={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},sn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},cn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},un=(e,r)=>{const n=Number(e),t=n%100;if(t>20||t<10)switch(t%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ln={ordinalNumber:un,era:oe({values:nn,defaultWidth:"wide"}),quarter:oe({values:rn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:oe({values:an,defaultWidth:"wide"}),day:oe({values:on,defaultWidth:"wide"}),dayPeriod:oe({values:sn,defaultWidth:"wide",formattingValues:cn,defaultFormattingWidth:"wide"})};function se(e){return(r,n={})=>{const t=n.width,a=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],o=r.match(a);if(!o)return null;const s=o[0],h=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(h)?hn(h,p=>p.test(s)):dn(h,p=>p.test(s));let u;u=e.valueCallback?e.valueCallback(d):d,u=n.valueCallback?n.valueCallback(u):u;const f=r.slice(s.length);return{value:u,rest:f}}}function dn(e,r){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&r(e[n]))return n}function hn(e,r){for(let n=0;n<e.length;n++)if(r(e[n]))return n}function mn(e){return(r,n={})=>{const t=r.match(e.matchPattern);if(!t)return null;const a=t[0],o=r.match(e.parsePattern);if(!o)return null;let s=e.valueCallback?e.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const h=r.slice(a.length);return{value:s,rest:h}}}const fn=/^(\d+)(th|st|nd|rd)?/i,pn=/\d+/i,gn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bn={any:[/^b/i,/^(a|c)/i]},xn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vn={any:[/1/i,/2/i,/3/i,/4/i]},wn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},jn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},On={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dn={ordinalNumber:mn({matchPattern:fn,parsePattern:pn,valueCallback:e=>parseInt(e,10)}),era:se({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:bn,defaultParseWidth:"any"}),quarter:se({matchPatterns:xn,defaultMatchWidth:"wide",parsePatterns:vn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:se({matchPatterns:wn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any"}),day:se({matchPatterns:kn,defaultMatchWidth:"wide",parsePatterns:Mn,defaultParseWidth:"any"}),dayPeriod:se({matchPatterns:jn,defaultMatchWidth:"any",parsePatterns:On,defaultParseWidth:"any"})},Tn={code:"en-US",formatDistance:Qt,formatLong:Zt,formatRelative:tn,localize:ln,match:Dn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Sn(e){const r=U(e);return Lt(r,Ut(r))+1}function Nn(e){const r=U(e),n=+ge(r)-+zt(r);return Math.round(n/Ke)+1}function Ze(e,r){var f,p,g,D;const n=U(e),t=n.getFullYear(),a=be(),o=(r==null?void 0:r.firstWeekContainsDate)??((p=(f=r==null?void 0:r.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??a.firstWeekContainsDate??((D=(g=a.locale)==null?void 0:g.options)==null?void 0:D.firstWeekContainsDate)??1,s=ee(e,0);s.setFullYear(t+1,0,o),s.setHours(0,0,0,0);const h=ue(s,r),d=ee(e,0);d.setFullYear(t,0,o),d.setHours(0,0,0,0);const u=ue(d,r);return n.getTime()>=h.getTime()?t+1:n.getTime()>=u.getTime()?t:t-1}function Pn(e,r){var h,d,u,f;const n=be(),t=(r==null?void 0:r.firstWeekContainsDate)??((d=(h=r==null?void 0:r.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,a=Ze(e,r),o=ee(e,0);return o.setFullYear(a,0,t),o.setHours(0,0,0,0),ue(o,r)}function En(e,r){const n=U(e),t=+ue(n,r)-+Pn(n,r);return Math.round(t/Ke)+1}function F(e,r){const n=e<0?"-":"",t=Math.abs(e).toString().padStart(r,"0");return n+t}const Z={y(e,r){const n=e.getFullYear(),t=n>0?n:1-n;return F(r==="yy"?t%100:t,r.length)},M(e,r){const n=e.getMonth();return r==="M"?String(n+1):F(n+1,2)},d(e,r){return F(e.getDate(),r.length)},a(e,r){const n=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,r){return F(e.getHours()%12||12,r.length)},H(e,r){return F(e.getHours(),r.length)},m(e,r){return F(e.getMinutes(),r.length)},s(e,r){return F(e.getSeconds(),r.length)},S(e,r){const n=r.length,t=e.getMilliseconds(),a=Math.trunc(t*Math.pow(10,n-3));return F(a,r.length)}},ie={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ie={G:function(e,r,n){const t=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})}},y:function(e,r,n){if(r==="yo"){const t=e.getFullYear(),a=t>0?t:1-t;return n.ordinalNumber(a,{unit:"year"})}return Z.y(e,r)},Y:function(e,r,n,t){const a=Ze(e,t),o=a>0?a:1-a;if(r==="YY"){const s=o%100;return F(s,2)}return r==="Yo"?n.ordinalNumber(o,{unit:"year"}):F(o,r.length)},R:function(e,r){const n=Je(e);return F(n,r.length)},u:function(e,r){const n=e.getFullYear();return F(n,r.length)},Q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(t);case"QQ":return F(t,2);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})}},q:function(e,r,n){const t=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(t);case"qq":return F(t,2);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})}},M:function(e,r,n){const t=e.getMonth();switch(r){case"M":case"MM":return Z.M(e,r);case"Mo":return n.ordinalNumber(t+1,{unit:"month"});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})}},L:function(e,r,n){const t=e.getMonth();switch(r){case"L":return String(t+1);case"LL":return F(t+1,2);case"Lo":return n.ordinalNumber(t+1,{unit:"month"});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})}},w:function(e,r,n,t){const a=En(e,t);return r==="wo"?n.ordinalNumber(a,{unit:"week"}):F(a,r.length)},I:function(e,r,n){const t=Nn(e);return r==="Io"?n.ordinalNumber(t,{unit:"week"}):F(t,r.length)},d:function(e,r,n){return r==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Z.d(e,r)},D:function(e,r,n){const t=Sn(e);return r==="Do"?n.ordinalNumber(t,{unit:"dayOfYear"}):F(t,r.length)},E:function(e,r,n){const t=e.getDay();switch(r){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})}},e:function(e,r,n,t){const a=e.getDay(),o=(a-t.weekStartsOn+8)%7||7;switch(r){case"e":return String(o);case"ee":return F(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,r,n,t){const a=e.getDay(),o=(a-t.weekStartsOn+8)%7||7;switch(r){case"c":return String(o);case"cc":return F(o,r.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,r,n){const t=e.getDay(),a=t===0?7:t;switch(r){case"i":return String(a);case"ii":return F(a,r.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(t,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(t,{width:"short",context:"formatting"});case"iiii":default:return n.day(t,{width:"wide",context:"formatting"})}},a:function(e,r,n){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,r,n){const t=e.getHours();let a;switch(t===12?a=ie.noon:t===0?a=ie.midnight:a=t/12>=1?"pm":"am",r){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,r,n){const t=e.getHours();let a;switch(t>=17?a=ie.evening:t>=12?a=ie.afternoon:t>=4?a=ie.morning:a=ie.night,r){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,r,n){if(r==="ho"){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return Z.h(e,r)},H:function(e,r,n){return r==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Z.H(e,r)},K:function(e,r,n){const t=e.getHours()%12;return r==="Ko"?n.ordinalNumber(t,{unit:"hour"}):F(t,r.length)},k:function(e,r,n){let t=e.getHours();return t===0&&(t=24),r==="ko"?n.ordinalNumber(t,{unit:"hour"}):F(t,r.length)},m:function(e,r,n){return r==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Z.m(e,r)},s:function(e,r,n){return r==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Z.s(e,r)},S:function(e,r){return Z.S(e,r)},X:function(e,r,n){const t=e.getTimezoneOffset();if(t===0)return"Z";switch(r){case"X":return Ve(t);case"XXXX":case"XX":return ne(t);case"XXXXX":case"XXX":default:return ne(t,":")}},x:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"x":return Ve(t);case"xxxx":case"xx":return ne(t);case"xxxxx":case"xxx":default:return ne(t,":")}},O:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Ye(t,":");case"OOOO":default:return"GMT"+ne(t,":")}},z:function(e,r,n){const t=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Ye(t,":");case"zzzz":default:return"GMT"+ne(t,":")}},t:function(e,r,n){const t=Math.trunc(e.getTime()/1e3);return F(t,r.length)},T:function(e,r,n){const t=e.getTime();return F(t,r.length)}};function Ye(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=Math.trunc(t/60),o=t%60;return o===0?n+String(a):n+String(a)+r+F(o,2)}function Ve(e,r){return e%60===0?(e>0?"-":"+")+F(Math.abs(e)/60,2):ne(e,r)}function ne(e,r=""){const n=e>0?"-":"+",t=Math.abs(e),a=F(Math.trunc(t/60),2),o=F(t%60,2);return n+a+r+o}const Be=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},et=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},Wn=(e,r)=>{const n=e.match(/(P+)(p+)?/)||[],t=n[1],a=n[2];if(!a)return Be(e,r);let o;switch(t){case"P":o=r.dateTime({width:"short"});break;case"PP":o=r.dateTime({width:"medium"});break;case"PPP":o=r.dateTime({width:"long"});break;case"PPPP":default:o=r.dateTime({width:"full"});break}return o.replace("{{date}}",Be(t,r)).replace("{{time}}",et(a,r))},Rn={p:et,P:Wn},Fn=/^D+$/,Cn=/^Y+$/,_n=["D","DD","YY","YYYY"];function $n(e){return Fn.test(e)}function An(e){return Cn.test(e)}function In(e,r,n){const t=Yn(e,r,n);if(console.warn(t),_n.includes(e))throw new RangeError(t)}function Yn(e,r,n){const t=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${t} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Vn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Bn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ln=/^'([^]*?)'?$/,zn=/''/g,qn=/[a-zA-Z]/;function Le(e,r,n){var f,p,g,D,w,P,E,S;const t=be(),a=(n==null?void 0:n.locale)??t.locale??Tn,o=(n==null?void 0:n.firstWeekContainsDate)??((p=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??t.firstWeekContainsDate??((D=(g=t.locale)==null?void 0:g.options)==null?void 0:D.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((P=(w=n==null?void 0:n.locale)==null?void 0:w.options)==null?void 0:P.weekStartsOn)??t.weekStartsOn??((S=(E=t.locale)==null?void 0:E.options)==null?void 0:S.weekStartsOn)??0,h=U(e);if(!Ht(h))throw new RangeError("Invalid time value");let d=r.match(Bn).map(c=>{const y=c[0];if(y==="p"||y==="P"){const $=Rn[y];return $(c,a.formatLong)}return c}).join("").match(Vn).map(c=>{if(c==="''")return{isToken:!1,value:"'"};const y=c[0];if(y==="'")return{isToken:!1,value:Hn(c)};if(Ie[y])return{isToken:!0,value:c};if(y.match(qn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:c}});a.localize.preprocessor&&(d=a.localize.preprocessor(h,d));const u={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return d.map(c=>{if(!c.isToken)return c.value;const y=c.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&An(y)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&$n(y))&&In(y,r,String(e));const $=Ie[y[0]];return $(h,y,a.localize,u)}).join("")}function Hn(e){const r=e.match(Ln);return r?r[1].replace(zn,"'"):e}function Un(e){const r=U(e);return r.setMinutes(0,0,0),r}const tt=()=>{const e=new Date;let r=e;const n=[],t=e.getMinutes();let a=t+(5-t%5);a>=60?(a-=60,r=fe(Un(fe(e,60)),a)):r=fe(e,a-t),n.push(Le(e,"hh:mm aa"));for(let o=0;o<24*12;o++)n.push(Le(r,"hh:mm aa")),r=fe(r,5);return n},Xn=b.div`
  .water-section {
    min-width: 544px;
  }

  .water-title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .water-empty {
    color: var(--primary-blue);
    height: 162px;
  }

  .water-list {
    display: flex;
    flex-direction: column;

    height: 150px;
    margin-bottom: 12px;
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

  .water-plus-icon:hover {
    fill: var(--secondary-orange);
  }

  .add-water-btn {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
  }
  .add-water-btn:hover {
    color: var(--secondary-orange);
  }

  @media ${M.tablet} {
    .water-title {
      margin-bottom: 16px;
    }

    .water-plus-icon {
      width: 24px;
      height: 24px;
    }

    .add-water-btn {
      font-size: 18px;
    }
  }
`,Qn=b.li`
  height: 50px;
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
  .edit-btn,
  .delete-btn {
    position: relative;
  }

  .edit-btn:hover::after,
  .delete-btn:hover::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 16px;
    height: 1px;
    background-color: var(--secondary-red);
  }

  .edit-btn:hover::after {
    background-color: var(--secondary-blue);
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
`,nt=b.div`
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

  .water-select {
    color: var(--primary-blue);
    height: 44px;
    width: 120px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
    padding: 12px 10px;
  }

  .water-label {
    position: relative;
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
    height: 36px;
    border-radius: 10px;
    font-size: 18px;
    padding: 8px 30px;
    background-color: var(--primary-blue);
    color: var(--secondary-white);
  }
  //

  /* select {
    width: 120px;
    border: 1px solid var(--select-border);
    border-radius: 10px;
    background-color: var(--primary-blue);
  } */

  /* select option {
    background-color: red;
    color: black;
  } */

  //
  @media ${M.tablet} {
    max-width: 744px;

    .water-select {
      width: 100%;
    }

    .save-btn {
      height: 44px;
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
`,Gn=b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  .delete-title {
    font-size: 18px;
    font-weight: var(--medium-font-weight);
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
    gap: 12px;
  }

  @media ${M.tablet} {
    .delete-btn-box {
      display: flex;
      flex-direction: row;
      gap: 24px;
      justify-content: end;
    }

    .cancel-btn,
    .delete-btn {
      height: 44px;
    }
  }
`,de=e=>e.water,xe=le(de,e=>e.amountDaily);le(de,e=>e.amountDaily.percentage);const Kn=le(de,e=>e.amountMonthly),Jn=le(de,e=>e.isLoading),Zn=le(de,e=>e.error),rt=({title:e,closeModal:r})=>{const{register:n,handleSubmit:t,watch:a,getValues:o,formState:{errors:s}}=Oe({mode:"onChange"}),h=re(),{entries:d}=K(xe),[u,f]=B.useState({count:d.length>0?d[d.length-1].waterVolume:0,inputValue:d.length>0?d[d.length-1].waterVolume:"0"}),p=tt(),g=u.inputValue,D=String(a("time")),w=o("waterVolume"),P=D.slice(3,5),E=p[0].slice(3,5).toString(),S=W=>{u.count+W>=0&&f({inputValue:String(W),count:W})},c=W=>{const{value:_}=W.target;f(l=>({...l,inputValue:_}))},y=()=>{S(Number(u.inputValue))},$=W=>{W.key==="-"&&W.preventDefault()},I=W=>{const _={time:W.time,waterVolume:Number(u.inputValue)};s.waterVolume||_.waterVolume!==0&&Number(P)%5===0&&(z=v(P,w,E),h(ut(_)),r())};let C=!1;const v=(W,_,l)=>{if(_===0)return C=!0,"The amount of water cannot be 0!";if(Number(W)%5!==0&&Number(l)%5!==0)return C=!0,"Please choose a time that is divisible by 5"};let z=v(P,Number(g),E);return i.jsxs(nt,{children:[i.jsx("h2",{className:"add-water-title",children:e}),i.jsxs("div",{className:"counter-box",children:[i.jsx("p",{className:"",children:"Amount of water:"}),i.jsxs("div",{className:"counter-btn-box",children:[i.jsx("button",{className:"counter-btn",onClick:()=>S(u.count-50),type:"button",children:i.jsx(J,{className:"icon-minus",id:"minus"})}),i.jsxs("span",{className:"water-amount-span",children:[u.count,"ml"]}),i.jsx("button",{className:"counter-btn",onClick:()=>S(u.count+50),type:"button",children:i.jsx(J,{className:"icon-plus",id:"plus"})})]})]}),i.jsxs("form",{className:"add-water-form",onSubmit:t(I),children:[i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"popover",children:"Recording time:"}),C&&i.jsx(De,{message:z,waterAmount:!0}),i.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:p.map(W=>i.jsx("option",{value:W,children:W},W))})]}),i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),i.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:u.inputValue,onChange:c,onBlur:y,onKeyPress:$,className:"water-select"})]}),i.jsxs("div",{className:"btn-container",children:[i.jsx("span",{className:"water-amount",children:`${u.count}ml`}),i.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},er=({closeModal:e,_id:r})=>{const n=re(),t=()=>{e()},a=o=>{n(lt(o)),e()};return i.jsxs(Gn,{children:[i.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),i.jsxs("div",{className:"delete-btn-box",children:[i.jsx("button",{className:"cancel-btn",type:"button",onClick:t,children:"Cancel"}),i.jsx("button",{className:"delete-btn",type:"button",onClick:()=>a(r),children:"Delete"})]})]})},tr=({title:e,closeModal:r,id:n})=>{const{register:t,handleSubmit:a,getValues:o,formState:{errors:s}}=Oe({mode:"onChange"}),h=re(),{entries:d}=K(xe),u=d.find(v=>v._id===n),[f,p]=B.useState({count:u?u.waterVolume:0,inputValue:u?u.waterVolume:"0"}),g=tt(),D=f.inputValue,w=o("waterVolume"),P=v=>{f.count+v>=0&&p({inputValue:String(v),count:v})},E=v=>{const{value:z}=v.target;p(W=>({...W,inputValue:z}))},S=()=>{P(Number(f.inputValue))},c=v=>{v.key==="-"&&v.preventDefault()},y=v=>{const z={time:v.time,waterVolume:Number(f.inputValue)};s.waterVolume||z.waterVolume!==0&&(C=I(w),n&&h(Ue({...z,id:n})),r())};let $=!1;const I=v=>{if(v===0)return $=!0,"The amount of water cannot be 0!"};let C=I(Number(D));return i.jsxs(nt,{children:[i.jsxs("div",{className:"water-card",children:[i.jsx(J,{className:"water-glass-icon",id:"water"}),i.jsxs("p",{className:"water-amount-card",children:[u==null?void 0:u.waterVolume," ml"]}),i.jsx("p",{className:"time",children:u==null?void 0:u.time})]}),i.jsx("h2",{className:"add-water-title",children:e}),i.jsxs("div",{className:"counter-box",children:[i.jsx("p",{className:"",children:"Amount of water:"}),i.jsxs("div",{className:"counter-btn-box",children:[i.jsx("button",{className:"counter-btn",onClick:()=>P(f.count-50),type:"button",children:i.jsx(J,{className:"icon-minus",id:"minus"})}),i.jsxs("span",{className:"water-amount-span",children:[f.count,"ml"]}),i.jsx("button",{className:"counter-btn",onClick:()=>P(f.count+50),type:"button",children:i.jsx(J,{className:"icon-plus",id:"plus"})})]})]}),i.jsxs("form",{className:"add-water-form",onSubmit:a(y),children:[i.jsxs("label",{className:"water-label",children:[i.jsx("span",{children:"Recording time:"}),$&&i.jsx(De,{message:C,waterAmount:!0}),i.jsx("select",{...t("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:g.map(v=>i.jsx("option",{value:v,selected:v===(u==null?void 0:u.time),children:v},v))})]}),i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),i.jsx("input",{...t("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:f.inputValue,onChange:E,onBlur:S,onKeyPress:c,className:"water-select"})]}),i.jsxs("div",{className:"btn-container",children:[i.jsxs("span",{className:"water-amount",children:[u==null?void 0:u.waterVolume,"ml"]}),i.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},nr=({_id:e,waterVolume:r,time:n})=>{const[t,a]=B.useState(!1),[o,s]=B.useState(!1),h=re(),d=u=>{h(Ue(u))};return i.jsxs(Qn,{children:[i.jsxs("div",{className:"water-info",children:[i.jsx(J,{className:"water-glass-icon",id:"water"}),i.jsxs("p",{className:"water-amount-card",children:[r," ml"]}),i.jsx("p",{className:"time",children:n})]}),i.jsxs("div",{className:"edit-delete-btn-box",children:[i.jsx("button",{type:"button",className:"edit-btn",onClick:()=>a(!0),children:i.jsx(J,{className:"edit-water-icon",id:"pencil"})}),i.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{s(!0)},children:i.jsx(J,{className:"delete-water-icon",id:"delete"})})]}),t&&i.jsx(ce,{setVisible:a,title:"Edit the entered amount of water",children:i.jsx(tr,{title:"Correct entered data:",handleUpdateWater:d,closeModal:()=>{a(!1)},id:e})}),o&&i.jsx(ce,{setVisible:s,title:"Delete water",delete:!0,children:i.jsx(er,{title:"Delete entry?",show:!1,closeModal:()=>{s(!1)},_id:e})})]})},rr=()=>{const[e,r]=B.useState(!1),{entries:n}=K(xe),t=K(Jn),a=K(Zn),o=()=>{r(!1)};return i.jsxs(Xn,{children:[i.jsx("h3",{className:"water-title",children:"Today"}),t&&!a&&i.jsx(dt,{}),n.length===0?i.jsx("p",{className:"water-empty",children:"No notes yet"}):i.jsx("ul",{className:"water-list",children:n.length>0&&n.map(({_id:s,waterVolume:h,time:d})=>i.jsx(nr,{_id:s,waterVolume:h,time:d},s))}),i.jsxs("button",{className:"add-water-btn",onClick:()=>r(!0),children:[i.jsx(J,{className:"water-plus-icon",id:"plus"}),"Add water"]}),e&&i.jsx(ce,{setVisible:r,title:"Add water",children:i.jsx(rt,{title:"Choose a value:",show:!1,closeModal:o})})]})},ar=b.div`
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
`,ir=b.ul`
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
`,at=b.span`
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
`,or=b.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,sr=b.div`
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
`,cr=b(at)`
  border: #ff9d43 1px solid;
`,ur=({setIsModalOpen:e,isModalOpen:r,modalContent:n,closeModal:t})=>{const a=B.useRef(null);return B.useEffect(()=>{const o=s=>{s instanceof KeyboardEvent&&s.key==="Escape"&&t()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t]),ht(a,()=>{r&&e(!1)}),i.jsx(or,{ref:a,className:r?"open":"",children:i.jsxs(sr,{children:[i.jsx("button",{className:"close hover active",onClick:()=>t(),children:"×"}),i.jsx("h3",{className:"title-modal",children:`${n==null?void 0:n.day}, ${n==null?void 0:n.month}`}),i.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",i.jsx("span",{className:"span-modal",children:n==null?void 0:n.dailyNorma})]}),i.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",i.jsxs("span",{className:"span-modal",children:[(n==null?void 0:n.percent)!==void 0&&(n==null?void 0:n.percent)>=100?100:n==null?void 0:n.percent,"%"]})]}),i.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",i.jsx("span",{className:"span-modal",children:n==null?void 0:n.amountOfWater})]})]})})},lr=()=>{const e=()=>new Date,[r,n]=B.useState(e()),[t,a]=B.useState(null),[o,s]=B.useState(!1),[h,d]=B.useState(null),u=K(Kn),f=`${r.getFullYear()}-${(r.getMonth()+1).toString().padStart(2,"0")}`,p=re();B.useEffect(()=>{p(mt(f))},[p,f]);const g=c=>{const y=c.getFullYear(),$=c.getMonth(),I=new Date(y,$+1,0).getDate(),C=[];for(let v=1;v<=I;v++)C.push({day:v,month:c.toLocaleString("en-US",{month:"long"})});return C},D=()=>{n(c=>new Date(c.getFullYear(),c.getMonth()-1)),a(null)},w=()=>{const c=new Date(r.getFullYear(),r.getMonth()+1);c<=e()&&(n(c),a(null))},P=c=>{if(t===c.day){E(),a(null);return}const y=document.getElementById(`day-${c.day}`);if(!y)return;const $=y.getBoundingClientRect(),I=292,C=188,v=window.innerWidth,z=window.innerHeight;let W=$.top-C-10,_=window.innerWidth<=768?window.innerWidth/2-I/2:$.left+$.width/2-I/2;W<0&&(W=0),W+C>z&&(W=z-C),_<0&&(_=0),_+I>v&&(_=v-I),a(c.day),d(c),document.documentElement.style.setProperty("--modal-top",`${W}px`),document.documentElement.style.setProperty("--modal-left",`${_}px`),s(!0)},E=()=>{s(!1)},S=c=>{if(!(u!=null&&u.month)){c.percent=0,c.amountOfWater=0,c.dailyNorma=2;return}const y=c.day.toString(),$=u.month.map(I=>I.date.slice(-2).trim()).indexOf(y);if($===-1&&(c.percent=0,c.amountOfWater=0,c.dailyNorma=2),$!==-1){const{amountOfWater:I,dailyNorma:C,percentage:v}=u.month[$];c.percent=v,c.amountOfWater=I,c.dailyNorma=C}};return i.jsxs(ar,{children:[i.jsxs("div",{className:"right-align",children:[i.jsx("h1",{className:"month",children:"Month"}),i.jsxs("div",{className:"header",children:[i.jsx("button",{className:"button",onClick:D,children:"<"}),i.jsxs("div",{className:"month-title",children:[r.toLocaleString("en-US",{month:"long"}),","," ",r.getFullYear()]}),r.getMonth()===new Date().getMonth()&&r.getFullYear()===new Date().getFullYear()?i.jsx("button",{className:"button disabled",disabled:!0,children:">"}):i.jsx("button",{className:"button",onClick:w,children:">"})]})]}),i.jsx(ir,{children:g(r).map(c=>(S(c),i.jsxs("li",{id:`day-${c.day}`,className:"hover active",children:[c.percent!==void 0&&c.percent<100?i.jsx(cr,{className:`day ${t===c.day?"selected":""}`,onClick:()=>P(c),children:c.day}):i.jsx(at,{className:`day ${t===c.day?"selected":""}`,onClick:()=>P(c),children:c.day}),i.jsx("p",{className:`procent ${c.percent!==void 0&&c.percent<100?"lowPercentage":""}`,children:`${c.percent!==void 0&&c.percent>=100?100:c.percent}%`})]},c.day)))}),i.jsx(ur,{setIsModalOpen:s,isModalOpen:o,modalContent:h,closeModal:E})]})};var je={},Te={},Se={},ve={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Direction=void 0,function(r){r.Right="to right",r.Left="to left",r.Down="to bottom",r.Up="to top"}(e.Direction||(e.Direction={}))})(ve);(function(e){var r=H&&H.__spreadArray||function(l,m,x){if(x||arguments.length===2)for(var j=0,O=m.length,k;j<O;j++)(k||!(j in m))&&(k||(k=Array.prototype.slice.call(m,0,j)),k[j]=m[j]);return l.concat(k||Array.prototype.slice.call(m))};Object.defineProperty(e,"__esModule",{value:!0}),e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=B,t=ve,a=function(l){var m=l.toString().split(".")[1];return m?m.length:0};e.getStepDecimals=a;function o(l){return l.touches&&l.touches.length||l.changedTouches&&l.changedTouches.length}e.isTouchEvent=o;function s(l,m,x){var j=(m-l)/x,O=8,k=Number(j.toFixed(O));return parseInt(k.toString(),10)===k}e.isStepDivisible=s;function h(l,m,x,j,O,k,R){var N=1e11;if(l=Math.round(l*N)/N,!k){var L=R[m-1],A=R[m+1];if(L&&L>l)return L;if(A&&A<l)return A}if(l>j)return j;if(l<x)return x;var X=Math.floor(l*N-x*N)%Math.floor(O*N),q=Math.floor(l*N-Math.abs(X)),Q=X===0?l:q/N,V=Math.abs(X/N)<O/2?Q:Q+O,G=(0,e.getStepDecimals)(O);return parseFloat(V.toFixed(G))}e.normalizeValue=h;function d(l,m,x){return(l-m)/(x-m)}e.relativeValue=d;function u(l){return l===t.Direction.Up||l===t.Direction.Down}e.isVertical=u;function f(l,m,x){if(m>=x)throw new RangeError("min (".concat(m,") is equal/bigger than max (").concat(x,")"));if(l<m)throw new RangeError("value (".concat(l,") is smaller than min (").concat(m,")"));if(l>x)throw new RangeError("value (".concat(l,") is bigger than max (").concat(x,")"))}e.checkBoundaries=f;function p(l,m,x){return l<m?m:l>x?x:l}e.checkValuesAgainstBoundaries=p;function g(l){if(!(l.length<2)&&!l.slice(1).every(function(m,x){return l[x]<=m}))throw new RangeError("values={[".concat(l,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=g;function D(l){var m=window.getComputedStyle(l);return{top:parseInt(m["margin-top"],10),bottom:parseInt(m["margin-bottom"],10),left:parseInt(m["margin-left"],10),right:parseInt(m["margin-right"],10)}}e.getMargin=D;function w(l){var m=window.getComputedStyle(l);return{top:parseInt(m["padding-top"],10)+parseInt(m["border-top-width"],10),bottom:parseInt(m["padding-bottom"],10)+parseInt(m["border-bottom-width"],10),left:parseInt(m["padding-left"],10)+parseInt(m["border-left-width"],10),right:parseInt(m["padding-right"],10)+parseInt(m["border-right-width"],10)}}e.getPaddingAndBorder=w;function P(l,m,x){var j=x?-1:1;l.forEach(function(O,k){return S(O,j*m[k].x,m[k].y)})}e.translateThumbs=P;function E(l,m,x,j){for(var O=0,k=_(l[0],m,x,j),R=1;R<l.length;R++){var N=_(l[R],m,x,j);N<k&&(k=N,O=R)}return O}e.getClosestThumbIndex=E;function S(l,m,x){l.style.transform="translate(".concat(m,"px, ").concat(x,"px)")}e.translate=S;var c=function(l){var m=[],x=null,j=function(){for(var O=[],k=0;k<arguments.length;k++)O[k]=arguments[k];m=O,!x&&(x=requestAnimationFrame(function(){x=null,l.apply(void 0,m)}))};return j};e.schd=c;function y(l,m,x){var j=l.slice(0);return j[m]=x,j}e.replaceAt=y;function $(l){var m=l.values,x=l.colors,j=l.min,O=l.max,k=l.direction,R=k===void 0?t.Direction.Right:k,N=l.rtl,L=N===void 0?!1:N;L&&R===t.Direction.Right?R=t.Direction.Left:L&&t.Direction.Left&&(R=t.Direction.Right);var A=m.slice(0).sort(function(q,Q){return q-Q}).map(function(q){return(q-j)/(O-j)*100}),X=A.reduce(function(q,Q,V){return"".concat(q,", ").concat(x[V]," ").concat(Q,"%, ").concat(x[V+1]," ").concat(Q,"%")},"");return"linear-gradient(".concat(R,", ").concat(x[0]," 0%").concat(X,", ").concat(x[x.length-1]," 100%)")}e.getTrackBackground=$;function I(){}e.voidFn=I;function C(l){throw new Error("Didn't expect to get here")}e.assertUnreachable=C;var v=function(l,m,x,j,O){O===void 0&&(O=function(R){return R});var k=Math.ceil(r([l],Array.from(l.children),!0).reduce(function(R,N){var L=Math.ceil(N.getBoundingClientRect().width);if(N.innerText&&N.innerText.includes(x)&&N.childElementCount===0){var A=N.cloneNode(!0);A.innerHTML=O(m.toFixed(j)),A.style.visibility="hidden",document.body.appendChild(A),L=Math.ceil(A.getBoundingClientRect().width),document.body.removeChild(A)}return L>R?L:R},l.getBoundingClientRect().width));return k},z=function(l,m,x,j,O,k,R){R===void 0&&(R=function(A){return A});var N=[],L=function(A){var X=v(x[A],j[A],O,k,R),q=m[A].x;m.forEach(function(Q,V){var G=Q.x,te=v(x[V],j[V],O,k,R);A!==V&&(q>=G&&q<=G+te||q+X>=G&&q+X<=G+te)&&(N.includes(V)||(N.push(A),N.push(V),N=r(r([],N,!0),[A,V],!1),L(V)))})};return L(l),Array.from(new Set(N.sort()))},W=function(l,m,x,j,O,k){j===void 0&&(j=.1),O===void 0&&(O=" - "),k===void 0&&(k=function(V){return V});var R=(0,e.getStepDecimals)(j),N=(0,n.useState)({}),L=N[0],A=N[1],X=(0,n.useState)(k(m[x].toFixed(R))),q=X[0],Q=X[1];return(0,n.useEffect)(function(){if(l){var V=l.getThumbs();if(V.length<1)return;var G={},te=l.getOffsets(),he=z(x,te,V,m,O,R,k),Ne=k(m[x].toFixed(R));if(he.length){var me=he.reduce(function(ae,We,Re,Fe){return ae.length?r(r([],ae,!0),[te[Fe[Re]].x],!1):[te[Fe[Re]].x]},[]);if(Math.min.apply(Math,me)===te[x].x){var Pe=[];he.forEach(function(ae){Pe.push(m[ae].toFixed(R))}),Ne=Array.from(new Set(Pe.sort(function(ae,We){return parseFloat(ae)-parseFloat(We)}))).map(k).join(O);var it=Math.min.apply(Math,me),Ee=Math.max.apply(Math,me),ot=V[he[me.indexOf(Ee)]].getBoundingClientRect().width;G.left="".concat(Math.abs(it-(Ee+ot))/2,"px"),G.transform="translate(-50%, 0)"}else G.visibility="hidden"}Q(Ne),A(G)}},[l,m]),[q,L]};e.useThumbOverlap=W;function _(l,m,x,j){var O=l.getBoundingClientRect(),k=O.left,R=O.top,N=O.width,L=O.height;return u(j)?Math.abs(x-(R+L/2)):Math.abs(m-(k+N/2))}})(Se);var dr=H&&H.__extends||function(){var e=function(r,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])},e(r,n)};return function(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}(),hr=H&&H.__createBinding||(Object.create?function(e,r,n,t){t===void 0&&(t=n);var a=Object.getOwnPropertyDescriptor(r,n);(!a||("get"in a?!r.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return r[n]}}),Object.defineProperty(e,t,a)}:function(e,r,n,t){t===void 0&&(t=n),e[t]=r[n]}),mr=H&&H.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),fr=H&&H.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&hr(r,e,n);return mr(r,e),r},ze=H&&H.__spreadArray||function(e,r,n){if(n||arguments.length===2)for(var t=0,a=r.length,o;t<a;t++)(o||!(t in r))&&(o||(o=Array.prototype.slice.call(r,0,t)),o[t]=r[t]);return e.concat(o||Array.prototype.slice.call(r))};Object.defineProperty(Te,"__esModule",{value:!0});var pe=fr(B),T=Se,Y=ve,pr=["ArrowRight","ArrowUp","k","PageUp"],gr=["ArrowLeft","ArrowDown","j","PageDown"],br=function(e){dr(r,e);function r(n){var t=e.call(this,n)||this;if(t.trackRef=pe.createRef(),t.thumbRefs=[],t.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(t.props.values.length).fill(0).map(function(a,o){return o}),isChanged:!1,markOffsets:[]},t.getOffsets=function(){var a=t.props,o=a.direction,s=a.values,h=a.min,d=a.max,u=t.trackRef.current,f=u.getBoundingClientRect(),p=(0,T.getPaddingAndBorder)(u);return t.getThumbs().map(function(g,D){var w={x:0,y:0},P=g.getBoundingClientRect(),E=(0,T.getMargin)(g);switch(o){case Y.Direction.Right:return w.x=(E.left+p.left)*-1,w.y=((P.height-f.height)/2+p.top)*-1,w.x+=f.width*(0,T.relativeValue)(s[D],h,d)-P.width/2,w;case Y.Direction.Left:return w.x=(E.right+p.right)*-1,w.y=((P.height-f.height)/2+p.top)*-1,w.x+=f.width-f.width*(0,T.relativeValue)(s[D],h,d)-P.width/2,w;case Y.Direction.Up:return w.x=((P.width-f.width)/2+E.left+p.left)*-1,w.y=-p.left,w.y+=f.height-f.height*(0,T.relativeValue)(s[D],h,d)-P.height/2,w;case Y.Direction.Down:return w.x=((P.width-f.width)/2+E.left+p.left)*-1,w.y=-p.left,w.y+=f.height*(0,T.relativeValue)(s[D],h,d)-P.height/2,w;default:return(0,T.assertUnreachable)(o)}})},t.getThumbs=function(){return t.trackRef&&t.trackRef.current?Array.from(t.trackRef.current.children).filter(function(a){return a.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},t.getTargetIndex=function(a){return t.getThumbs().findIndex(function(o){return o===a.target||o.contains(a.target)})},t.addTouchEvents=function(a){document.addEventListener("touchmove",t.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",t.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",t.schdOnEnd,{passive:!1})},t.addMouseEvents=function(a){document.addEventListener("mousemove",t.schdOnMouseMove),document.addEventListener("mouseup",t.schdOnEnd)},t.onMouseDownTrack=function(a){var o;if(a.button===0)if(a.persist(),a.preventDefault(),t.addMouseEvents(a.nativeEvent),t.props.values.length>1&&t.props.draggableTrack){if(t.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(a.target)}))return;t.setState({draggedTrackPos:[a.clientX,a.clientY]},function(){return t.onMove(a.clientX,a.clientY)})}else{var s=(0,T.getClosestThumbIndex)(t.thumbRefs.map(function(h){return h.current}),a.clientX,a.clientY,t.props.direction);(o=t.thumbRefs[s].current)===null||o===void 0||o.focus(),t.setState({draggedThumbIndex:s},function(){return t.onMove(a.clientX,a.clientY)})}},t.onResize=function(){(0,T.translateThumbs)(t.getThumbs(),t.getOffsets(),t.props.rtl),t.calculateMarkOffsets()},t.onTouchStartTrack=function(a){var o;if(a.persist(),t.addTouchEvents(a.nativeEvent),t.props.values.length>1&&t.props.draggableTrack){if(t.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(a.target)}))return;t.setState({draggedTrackPos:[a.touches[0].clientX,a.touches[0].clientY]},function(){return t.onMove(a.touches[0].clientX,a.touches[0].clientY)})}else{var s=(0,T.getClosestThumbIndex)(t.thumbRefs.map(function(h){return h.current}),a.touches[0].clientX,a.touches[0].clientY,t.props.direction);(o=t.thumbRefs[s].current)===null||o===void 0||o.focus(),t.setState({draggedThumbIndex:s},function(){return t.onMove(a.touches[0].clientX,a.touches[0].clientY)})}},t.onMouseOrTouchStart=function(a){if(!t.props.disabled){var o=(0,T.isTouchEvent)(a);if(!(!o&&a.button!==0)){var s=t.getTargetIndex(a);s!==-1&&(o?t.addTouchEvents(a):t.addMouseEvents(a),t.setState({draggedThumbIndex:s,thumbZIndexes:t.state.thumbZIndexes.map(function(h,d){return d===s?Math.max.apply(Math,t.state.thumbZIndexes):h<=t.state.thumbZIndexes[s]?h:h-1})}))}}},t.onMouseMove=function(a){a.preventDefault(),t.onMove(a.clientX,a.clientY)},t.onTouchMove=function(a){a.preventDefault(),t.onMove(a.touches[0].clientX,a.touches[0].clientY)},t.onKeyDown=function(a){var o=t.props,s=o.values,h=o.onChange,d=o.step,u=o.rtl,f=o.direction,p=t.state.isChanged,g=t.getTargetIndex(a.nativeEvent),D=u||f===Y.Direction.Left||f===Y.Direction.Down?-1:1;g!==-1&&(pr.includes(a.key)?(a.preventDefault(),t.setState({draggedThumbIndex:g,isChanged:!0}),h((0,T.replaceAt)(s,g,t.normalizeValue(s[g]+D*(a.key==="PageUp"?d*10:d),g)))):gr.includes(a.key)?(a.preventDefault(),t.setState({draggedThumbIndex:g,isChanged:!0}),h((0,T.replaceAt)(s,g,t.normalizeValue(s[g]-D*(a.key==="PageDown"?d*10:d),g)))):a.key==="Tab"?t.setState({draggedThumbIndex:-1},function(){p&&t.fireOnFinalChange()}):p&&t.fireOnFinalChange())},t.onKeyUp=function(a){var o=t.state.isChanged;t.setState({draggedThumbIndex:-1},function(){o&&t.fireOnFinalChange()})},t.onMove=function(a,o){var s=t.state,h=s.draggedThumbIndex,d=s.draggedTrackPos,u=t.props,f=u.direction,p=u.min,g=u.max,D=u.onChange,w=u.values,P=u.step,E=u.rtl;if(h===-1&&d[0]===-1&&d[1]===-1)return null;var S=t.trackRef.current;if(!S)return null;var c=S.getBoundingClientRect(),y=(0,T.isVertical)(f)?c.height:c.width;if(d[0]!==-1&&d[1]!==-1){var $=a-d[0],I=o-d[1],C=0;switch(f){case Y.Direction.Right:case Y.Direction.Left:C=$/y*(g-p);break;case Y.Direction.Down:case Y.Direction.Up:C=I/y*(g-p);break;default:(0,T.assertUnreachable)(f)}if(E&&(C*=-1),Math.abs(C)>=P/2){for(var v=0;v<t.thumbRefs.length;v++){if(w[v]===g&&Math.sign(C)===1||w[v]===p&&Math.sign(C)===-1)return;var z=w[v]+C;z>g?C=g-w[v]:z<p&&(C=p-w[v])}for(var W=w.slice(0),v=0;v<t.thumbRefs.length;v++)W=(0,T.replaceAt)(W,v,t.normalizeValue(w[v]+C,v));t.setState({draggedTrackPos:[a,o]}),D(W)}}else{var _=0;switch(f){case Y.Direction.Right:_=(a-c.left)/y*(g-p)+p;break;case Y.Direction.Left:_=(y-(a-c.left))/y*(g-p)+p;break;case Y.Direction.Down:_=(o-c.top)/y*(g-p)+p;break;case Y.Direction.Up:_=(y-(o-c.top))/y*(g-p)+p;break;default:(0,T.assertUnreachable)(f)}E&&(_=g+p-_),Math.abs(w[h]-_)>=P/2&&D((0,T.replaceAt)(w,h,t.normalizeValue(_,h)))}},t.normalizeValue=function(a,o){var s=t.props,h=s.min,d=s.max,u=s.step,f=s.allowOverlap,p=s.values;return(0,T.normalizeValue)(a,o,h,d,u,f,p)},t.onEnd=function(a){if(a.preventDefault(),document.removeEventListener("mousemove",t.schdOnMouseMove),document.removeEventListener("touchmove",t.schdOnTouchMove),document.removeEventListener("mouseup",t.schdOnEnd),document.removeEventListener("touchend",t.schdOnEnd),document.removeEventListener("touchcancel",t.schdOnEnd),t.state.draggedThumbIndex===-1&&t.state.draggedTrackPos[0]===-1&&t.state.draggedTrackPos[1]===-1)return null;t.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){t.fireOnFinalChange()})},t.fireOnFinalChange=function(){t.setState({isChanged:!1});var a=t.props,o=a.onFinalChange,s=a.values;o&&o(s)},t.updateMarkRefs=function(a){if(!a.renderMark){t.numOfMarks=void 0,t.markRefs=void 0;return}t.numOfMarks=(a.max-a.min)/t.props.step,t.markRefs=[];for(var o=0;o<t.numOfMarks+1;o++)t.markRefs[o]=pe.createRef()},t.calculateMarkOffsets=function(){if(!(!t.props.renderMark||!t.trackRef||!t.numOfMarks||!t.markRefs||t.trackRef.current===null)){for(var a=window.getComputedStyle(t.trackRef.current),o=parseInt(a.width,10),s=parseInt(a.height,10),h=parseInt(a.paddingLeft,10),d=parseInt(a.paddingTop,10),u=[],f=0;f<t.numOfMarks+1;f++){var p=9999,g=9999;if(t.markRefs[f].current){var D=t.markRefs[f].current.getBoundingClientRect();p=D.height,g=D.width}t.props.direction===Y.Direction.Left||t.props.direction===Y.Direction.Right?u.push([Math.round(o/t.numOfMarks*f+h-g/2),-Math.round((p-s)/2)]):u.push([Math.round(s/t.numOfMarks*f+d-p/2),-Math.round((g-o)/2)])}t.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return t.schdOnMouseMove=(0,T.schd)(t.onMouseMove),t.schdOnTouchMove=(0,T.schd)(t.onTouchMove),t.schdOnEnd=(0,T.schd)(t.onEnd),t.thumbRefs=n.values.map(function(){return pe.createRef()}),t.updateMarkRefs(n),t}return r.prototype.componentDidMount=function(){var n=this,t=this.props,a=t.values,o=t.min,s=t.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,T.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(h){return(0,T.checkBoundaries)(h,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),a.forEach(function(h){(0,T.isStepDivisible)(o,h,s)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},r.prototype.componentDidUpdate=function(n,t){var a=this.props,o=a.max,s=a.min,h=a.step,d=a.values,u=a.rtl;(n.max!==o||n.min!==s||n.step!==h)&&this.updateMarkRefs(this.props),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==s||n.step!==h||t.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),d.forEach(function(f){(0,T.isStepDivisible)(s,f,h)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},r.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},r.prototype.render=function(){var n=this,t=this.props,a=t.renderTrack,o=t.renderThumb,s=t.renderMark,h=s===void 0?function(){return null}:s,d=t.values,u=t.min,f=t.max,p=t.allowOverlap,g=t.disabled,D=this.state,w=D.draggedThumbIndex,P=D.thumbZIndexes,E=D.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,T.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!g?"pointer":"inherit"},onMouseDown:g?T.voidFn:this.onMouseDownTrack,onTouchStart:g?T.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:ze(ze([],E.map(function(S,c,y){return h({props:{style:n.props.direction===Y.Direction.Left||n.props.direction===Y.Direction.Right?{position:"absolute",left:"".concat(S[0],"px"),marginTop:"".concat(S[1],"px")}:{position:"absolute",top:"".concat(S[0],"px"),marginLeft:"".concat(S[1],"px")},key:"mark".concat(c),ref:n.markRefs[c]},index:c})}),!0),d.map(function(S,c){var y=n.state.draggedThumbIndex===c;return o({index:c,value:S,isDragged:y,props:{style:{position:"absolute",zIndex:P[c],cursor:g?"inherit":y?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:c,tabIndex:g?void 0:0,"aria-valuemax":p?f:d[c+1]||f,"aria-valuemin":p?u:d[c-1]||u,"aria-valuenow":S,draggable:!1,ref:n.thumbRefs[c],role:"slider",onKeyDown:g?T.voidFn:n.onKeyDown,onKeyUp:g?T.voidFn:n.onKeyUp}})}),!0)})},r.defaultProps={step:1,direction:Y.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},r}(pe.Component);Te.default=br;(function(e){var r=H&&H.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=r(Te);e.Range=n.default;var t=Se;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return t.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return t.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return t.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return t.checkValuesAgainstBoundaries}});var a=ve;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return a.Direction}})})(je);const xr=b.div`
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
`,vr=b.div`
  @media ${M.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${M.desktop} {
    display: flex;
    gap: 24px;
  }
`,wr=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,yr=b.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${M.tablet} {
    padding-bottom: 16px;
  }
`,kr=b.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${M.tablet} {
    width: 325px;
  }
  @media ${M.desktop} {
    width: 360px;
  }
`,Mr=b.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,jr=b.div`
  position: relative;
  top: 24px;
`,Or=b.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,Dr=b.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,qe=b.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Tr=b.div`
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
`,Sr=b.button`
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
`,Nr=()=>{const e=K(He),{entries:r}=K(xe),n=r.reduce((t,{waterVolume:a})=>t+=a,0);return e?Math.floor(n/(e*1e3)*100):0},Pr=()=>{const[e,r]=B.useState(!1),n=Nr(),t=n>100?100:n,a=()=>{r(!1)};return i.jsxs(i.Fragment,{children:[i.jsx(xr,{children:i.jsxs(vr,{children:[i.jsxs("div",{children:[i.jsx(yr,{children:"Today"}),i.jsx(wr,{children:i.jsx(je.Range,{disabled:!0,min:0,max:100,values:[t],onChange:()=>{},renderTrack:({props:o,children:s})=>i.jsx(kr,{...o,style:{...o.style,background:je.getTrackBackground({values:[t],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:s}),renderThumb:({props:o})=>B.createElement(Mr,{...o,key:o.key},i.jsx(jr,{children:i.jsxs(Or,{children:[t,"%"]})}))})}),i.jsxs(Dr,{children:[t<=7?i.jsx("span",{children:" "}):i.jsx(qe,{children:"0%"}),t>=85?i.jsx("span",{children:" "}):i.jsx(qe,{children:"100%"})]})]}),i.jsx(Tr,{className:"hover",children:i.jsxs(Sr,{className:"btn",onClick:()=>r(!0),children:[i.jsx(J,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),e&&i.jsx(ce,{setVisible:r,title:"Add water",children:i.jsx(rt,{title:"Choose a value",show:!1,closeModal:a})})]})},Er=b.section`
  background-image: url("${Xe}");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 70px;
  background-position-y: 100px;
  @media ${M.tablet} {
    background-image: url("${Qe}");
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${M.desktop} {
    background-image: url("${Ge}");
   
  }
`,Wr=b.div`
display: flex;
flex-direction: column;
gap:40px;
@media ${M.desktop} {
    
    flex-direction: row;
      justify-content:space-between;
      gap:0px;
  }
`,Rr=b.div`
  background-image: url("${pt}");
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 10px;
  background-position-y: 90px;
  padding: 24px 8px;

  @media ${M.tablet} {
    background-image: url("${gt}");
    background-position-y: 5px;
    background-position-x: 90px;   
    padding-top: 0px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${M.desktop} {
    background-image: url("${bt}");
    background-position-y: 0px;
    background-position-x: -50px;
    height: 548px;
   
  }
`,Fr=b.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 40px;
  height: auto;

  background-color: var(--secondary-white);
  background-image: url("${Xe}");
  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${M.tablet} {
    padding: 32px 24px;
    background-image: url("${Qe}");
    
  }

  @media ${M.desktop} {
    width: 592px;
    max-height: 688px;
    background-image: url("${Ge}");
    margin-bottom: 0px;
  }
`,$r=()=>{const e=re();return B.useEffect(()=>{e(ft())},[e]),i.jsx(Er,{children:i.jsx("div",{className:"container",children:i.jsxs(Wr,{children:[i.jsxs(Rr,{children:[i.jsx(At,{}),i.jsx(Pr,{})]}),i.jsxs(Fr,{children:[i.jsx(rr,{}),i.jsx(lr,{})]})]})})})};export{$r as default};
