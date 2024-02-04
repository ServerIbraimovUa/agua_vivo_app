import{u as x,d as O,j as i,a as K,s as st,b as Oe,c as re,e as ct,r as $,f as He,M as ce,g as le,I as J,h as ut,i as lt,k as Ue,L as dt,l as ht,m as mt,n as H,o as ft}from"./index-66uNUdNN.js";import{B as Xe,a as Qe,b as Ge,c as pt,d as gt,e as bt}from"./BottleHomeDesk-WtSqiB-E.js";const xt=x.div``,vt=x.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,wt=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,yt=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${O.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,kt=x.div`
  display: flex;
  gap: 24px;
`,we=x.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,Mt=x.span`
  width: 190px;
  @media ${O.tablet} {
    width: auto;
  }
`,jt=x.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Ot=x.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,Ce=x.h3`
  font-size: 18px;
  font-weight: bold;
`,ye=x.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Dt=x.label`
  display: flex;
  gap: 5px;
`,_e=x.input`
  margin-right: 5px;
`,ke=x.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,Tt=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,St=x.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${O.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,Nt=x.div`
  height: 208px;
  margin-bottom: 30px;
  @media ${O.tablet} {
    height: 386px;
    margin-bottom: 16px;
  }
  @media ${O.desktop} {
    position: relative;
    height: 548px;
  }
`,Pt=x.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${O.desktop} {
    position: absolute;
  }
  
`,Et=x.h2`
  font-size: 18px;
  line-height: 1.33;
`,Wt=x.button`
  color: #8baeff;
`,Rt=x.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,Ft=x.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${O.tablet} {
    font-size: 24px;
  }
`,Ct=x.span`
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

  @media ${O.tablet} {
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
`,_t=x.span`
  color: var(--primary-blue);
  font-size: 18px;
`,De=({message:t})=>i.jsx(i.Fragment,{children:i.jsx(Ct,{children:i.jsx(_t,{children:t})})}),It=({onClose:t})=>{const r=K(st),{register:n,handleSubmit:e,watch:a,formState:{errors:o}}=Oe({defaultValues:{weight:"",time:"",sex:r.gender||"woman",dailyNorma:""},mode:"onChange"}),s=re(),h=E=>{const{dailyNorma:S}=E;s(ct({dailyNorma:+S})),t()};let d;const u=Number(a("weight")),f=Number(a("time")),p=String(a("sex")),g=(E,S,c)=>c==="man"?String((E*.04+S*.6).toFixed(1))+"L":String((E*.03+S*.4).toFixed(1))+"L",D=(E,S)=>{if(E<20&&E!==0)return d=!0,"You couldn't be less than 20kg";if(S>24)return d=!0,"Day contains only 24H";if(S<0)return d=!0,"Time should be only positive integer"},w=g(u,f,p),P=D(u,f);return i.jsx(xt,{children:i.jsxs(vt,{onSubmit:e(h),children:[i.jsxs(wt,{children:[i.jsxs(yt,{children:[i.jsxs("p",{children:["For girl:",i.jsx(we,{children:"V=(M*0,03) + (T*0,4)"})]}),i.jsxs("p",{children:["For man:",i.jsx(we,{children:"V=(M*0,04) + (T*0,6)"})]})]}),i.jsx(jt,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),i.jsxs(Ot,{children:[i.jsx(Ce,{children:"Calculate your rate:"}),i.jsxs(kt,{children:[i.jsxs("label",{children:[i.jsx(_e,{...n("sex"),value:"woman",type:"radio"}),"For woman"]}),i.jsxs("label",{children:[i.jsx(_e,{...n("sex"),value:"man",type:"radio"}),"For man"]})]}),i.jsxs(ye,{children:[i.jsx("span",{children:"Your weight in kilograms:"}),i.jsx(ke,{...n("weight"),type:"number",placeholder:"0"})]}),i.jsxs(ye,{children:[i.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),i.jsx(ke,{...n("time"),type:"number",placeholder:"0"})]}),i.jsxs(Dt,{children:[i.jsx(Mt,{children:"The required amount of water in liters per day:"}),i.jsx(we,{children:d?i.jsx(De,{message:P}):w})]})]}),i.jsx(Tt,{children:i.jsxs(ye,{children:[i.jsx(Ce,{children:"Write down how much water you will drink:"}),i.jsx(ke,{...n("dailyNorma",{required:!0}),type:"number",step:"any",min:0,max:15,placeholder:"0"}),o.dailyNorma&&i.jsx("span",{children:"This field is required"})]})}),i.jsx(St,{className:"btn",type:"submit",children:"Save"})]})})},Yt=()=>{const[t,r]=$.useState(!1),n=()=>{r(!t)},e=K(He);return i.jsx(i.Fragment,{children:i.jsx(Nt,{children:i.jsxs(Pt,{children:[i.jsx(Et,{children:"My daily norma"}),i.jsxs(Rt,{children:[i.jsxs(Ft,{children:[e," L"]}),t&&i.jsx(ce,{setVisible:n,title:"My Daily Norma",daily:!0,children:i.jsx(It,{onClose:n})}),i.jsx(Wt,{type:"button",onClick:n,children:"Edit"})]})]})})})};function U(t){const r=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&r==="[object Date]"?new t.constructor(+t):typeof t=="number"||r==="[object Number]"||typeof t=="string"||r==="[object String]"?new Date(t):new Date(NaN)}function ee(t,r){return t instanceof Date?new t.constructor(r):new Date(r)}function Vt(t,r){const n=+U(t);return ee(t,n+r)}const Ke=6048e5,At=864e5,Bt=6e4;let $t={};function be(){return $t}function ue(t,r){var h,d,u,f;const n=be(),e=(r==null?void 0:r.weekStartsOn)??((d=(h=r==null?void 0:r.locale)==null?void 0:h.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,a=U(t),o=a.getDay(),s=(o<e?7:0)+o-e;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function ge(t){return ue(t,{weekStartsOn:1})}function Je(t){const r=U(t),n=r.getFullYear(),e=ee(t,0);e.setFullYear(n+1,0,4),e.setHours(0,0,0,0);const a=ge(e),o=ee(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=ge(o);return r.getTime()>=a.getTime()?n+1:r.getTime()>=s.getTime()?n:n-1}function Ie(t){const r=U(t);return r.setHours(0,0,0,0),r}function Ye(t){const r=U(t),n=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return n.setUTCFullYear(r.getFullYear()),+t-+n}function Lt(t,r){const n=Ie(t),e=Ie(r),a=+n-Ye(n),o=+e-Ye(e);return Math.round((a-o)/At)}function zt(t){const r=Je(t),n=ee(t,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),ge(n)}function fe(t,r){return Vt(t,r*Bt)}function qt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ht(t){if(!qt(t)&&typeof t!="number")return!1;const r=U(t);return!isNaN(Number(r))}function Ut(t){const r=U(t),n=ee(t,0);return n.setFullYear(r.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qt=(t,r,n)=>{let e;const a=Xt[t];return typeof a=="string"?e=a:r===1?e=a.one:e=a.other.replace("{{count}}",r.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+e:e+" ago":e};function Me(t){return(r={})=>{const n=r.width?String(r.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Gt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Kt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Jt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Zt={date:Me({formats:Gt,defaultWidth:"full"}),time:Me({formats:Kt,defaultWidth:"full"}),dateTime:Me({formats:Jt,defaultWidth:"full"})},en={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},tn=(t,r,n,e)=>en[t];function oe(t){return(r,n)=>{const e=n!=null&&n.context?String(n.context):"standalone";let a;if(e==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,h=n!=null&&n.width?String(n.width):s;a=t.formattingValues[h]||t.formattingValues[s]}else{const s=t.defaultWidth,h=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[h]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(r):r;return a[o]}}const nn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},an={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},on={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},sn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},cn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},un=(t,r)=>{const n=Number(t),e=n%100;if(e>20||e<10)switch(e%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ln={ordinalNumber:un,era:oe({values:nn,defaultWidth:"wide"}),quarter:oe({values:rn,defaultWidth:"wide",argumentCallback:t=>t-1}),month:oe({values:an,defaultWidth:"wide"}),day:oe({values:on,defaultWidth:"wide"}),dayPeriod:oe({values:sn,defaultWidth:"wide",formattingValues:cn,defaultFormattingWidth:"wide"})};function se(t){return(r,n={})=>{const e=n.width,a=e&&t.matchPatterns[e]||t.matchPatterns[t.defaultMatchWidth],o=r.match(a);if(!o)return null;const s=o[0],h=e&&t.parsePatterns[e]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(h)?hn(h,p=>p.test(s)):dn(h,p=>p.test(s));let u;u=t.valueCallback?t.valueCallback(d):d,u=n.valueCallback?n.valueCallback(u):u;const f=r.slice(s.length);return{value:u,rest:f}}}function dn(t,r){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&r(t[n]))return n}function hn(t,r){for(let n=0;n<t.length;n++)if(r(t[n]))return n}function mn(t){return(r,n={})=>{const e=r.match(t.matchPattern);if(!e)return null;const a=e[0],o=r.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const h=r.slice(a.length);return{value:s,rest:h}}}const fn=/^(\d+)(th|st|nd|rd)?/i,pn=/\d+/i,gn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bn={any:[/^b/i,/^(a|c)/i]},xn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vn={any:[/1/i,/2/i,/3/i,/4/i]},wn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},jn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},On={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dn={ordinalNumber:mn({matchPattern:fn,parsePattern:pn,valueCallback:t=>parseInt(t,10)}),era:se({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:bn,defaultParseWidth:"any"}),quarter:se({matchPatterns:xn,defaultMatchWidth:"wide",parsePatterns:vn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:se({matchPatterns:wn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any"}),day:se({matchPatterns:kn,defaultMatchWidth:"wide",parsePatterns:Mn,defaultParseWidth:"any"}),dayPeriod:se({matchPatterns:jn,defaultMatchWidth:"any",parsePatterns:On,defaultParseWidth:"any"})},Tn={code:"en-US",formatDistance:Qt,formatLong:Zt,formatRelative:tn,localize:ln,match:Dn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Sn(t){const r=U(t);return Lt(r,Ut(r))+1}function Nn(t){const r=U(t),n=+ge(r)-+zt(r);return Math.round(n/Ke)+1}function Ze(t,r){var f,p,g,D;const n=U(t),e=n.getFullYear(),a=be(),o=(r==null?void 0:r.firstWeekContainsDate)??((p=(f=r==null?void 0:r.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??a.firstWeekContainsDate??((D=(g=a.locale)==null?void 0:g.options)==null?void 0:D.firstWeekContainsDate)??1,s=ee(t,0);s.setFullYear(e+1,0,o),s.setHours(0,0,0,0);const h=ue(s,r),d=ee(t,0);d.setFullYear(e,0,o),d.setHours(0,0,0,0);const u=ue(d,r);return n.getTime()>=h.getTime()?e+1:n.getTime()>=u.getTime()?e:e-1}function Pn(t,r){var h,d,u,f;const n=be(),e=(r==null?void 0:r.firstWeekContainsDate)??((d=(h=r==null?void 0:r.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,a=Ze(t,r),o=ee(t,0);return o.setFullYear(a,0,e),o.setHours(0,0,0,0),ue(o,r)}function En(t,r){const n=U(t),e=+ue(n,r)-+Pn(n,r);return Math.round(e/Ke)+1}function F(t,r){const n=t<0?"-":"",e=Math.abs(t).toString().padStart(r,"0");return n+e}const Z={y(t,r){const n=t.getFullYear(),e=n>0?n:1-n;return F(r==="yy"?e%100:e,r.length)},M(t,r){const n=t.getMonth();return r==="M"?String(n+1):F(n+1,2)},d(t,r){return F(t.getDate(),r.length)},a(t,r){const n=t.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,r){return F(t.getHours()%12||12,r.length)},H(t,r){return F(t.getHours(),r.length)},m(t,r){return F(t.getMinutes(),r.length)},s(t,r){return F(t.getSeconds(),r.length)},S(t,r){const n=r.length,e=t.getMilliseconds(),a=Math.trunc(e*Math.pow(10,n-3));return F(a,r.length)}},ie={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ve={G:function(t,r,n){const e=t.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return n.era(e,{width:"abbreviated"});case"GGGGG":return n.era(e,{width:"narrow"});case"GGGG":default:return n.era(e,{width:"wide"})}},y:function(t,r,n){if(r==="yo"){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return Z.y(t,r)},Y:function(t,r,n,e){const a=Ze(t,e),o=a>0?a:1-a;if(r==="YY"){const s=o%100;return F(s,2)}return r==="Yo"?n.ordinalNumber(o,{unit:"year"}):F(o,r.length)},R:function(t,r){const n=Je(t);return F(n,r.length)},u:function(t,r){const n=t.getFullYear();return F(n,r.length)},Q:function(t,r,n){const e=Math.ceil((t.getMonth()+1)/3);switch(r){case"Q":return String(e);case"QQ":return F(e,2);case"Qo":return n.ordinalNumber(e,{unit:"quarter"});case"QQQ":return n.quarter(e,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(e,{width:"wide",context:"formatting"})}},q:function(t,r,n){const e=Math.ceil((t.getMonth()+1)/3);switch(r){case"q":return String(e);case"qq":return F(e,2);case"qo":return n.ordinalNumber(e,{unit:"quarter"});case"qqq":return n.quarter(e,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(e,{width:"wide",context:"standalone"})}},M:function(t,r,n){const e=t.getMonth();switch(r){case"M":case"MM":return Z.M(t,r);case"Mo":return n.ordinalNumber(e+1,{unit:"month"});case"MMM":return n.month(e,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(e,{width:"wide",context:"formatting"})}},L:function(t,r,n){const e=t.getMonth();switch(r){case"L":return String(e+1);case"LL":return F(e+1,2);case"Lo":return n.ordinalNumber(e+1,{unit:"month"});case"LLL":return n.month(e,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(e,{width:"wide",context:"standalone"})}},w:function(t,r,n,e){const a=En(t,e);return r==="wo"?n.ordinalNumber(a,{unit:"week"}):F(a,r.length)},I:function(t,r,n){const e=Nn(t);return r==="Io"?n.ordinalNumber(e,{unit:"week"}):F(e,r.length)},d:function(t,r,n){return r==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Z.d(t,r)},D:function(t,r,n){const e=Sn(t);return r==="Do"?n.ordinalNumber(e,{unit:"dayOfYear"}):F(e,r.length)},E:function(t,r,n){const e=t.getDay();switch(r){case"E":case"EE":case"EEE":return n.day(e,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(e,{width:"short",context:"formatting"});case"EEEE":default:return n.day(e,{width:"wide",context:"formatting"})}},e:function(t,r,n,e){const a=t.getDay(),o=(a-e.weekStartsOn+8)%7||7;switch(r){case"e":return String(o);case"ee":return F(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,r,n,e){const a=t.getDay(),o=(a-e.weekStartsOn+8)%7||7;switch(r){case"c":return String(o);case"cc":return F(o,r.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,r,n){const e=t.getDay(),a=e===0?7:e;switch(r){case"i":return String(a);case"ii":return F(a,r.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(e,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(e,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(e,{width:"short",context:"formatting"});case"iiii":default:return n.day(e,{width:"wide",context:"formatting"})}},a:function(t,r,n){const a=t.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,r,n){const e=t.getHours();let a;switch(e===12?a=ie.noon:e===0?a=ie.midnight:a=e/12>=1?"pm":"am",r){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,r,n){const e=t.getHours();let a;switch(e>=17?a=ie.evening:e>=12?a=ie.afternoon:e>=4?a=ie.morning:a=ie.night,r){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,r,n){if(r==="ho"){let e=t.getHours()%12;return e===0&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return Z.h(t,r)},H:function(t,r,n){return r==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Z.H(t,r)},K:function(t,r,n){const e=t.getHours()%12;return r==="Ko"?n.ordinalNumber(e,{unit:"hour"}):F(e,r.length)},k:function(t,r,n){let e=t.getHours();return e===0&&(e=24),r==="ko"?n.ordinalNumber(e,{unit:"hour"}):F(e,r.length)},m:function(t,r,n){return r==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Z.m(t,r)},s:function(t,r,n){return r==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Z.s(t,r)},S:function(t,r){return Z.S(t,r)},X:function(t,r,n){const e=t.getTimezoneOffset();if(e===0)return"Z";switch(r){case"X":return Be(e);case"XXXX":case"XX":return ne(e);case"XXXXX":case"XXX":default:return ne(e,":")}},x:function(t,r,n){const e=t.getTimezoneOffset();switch(r){case"x":return Be(e);case"xxxx":case"xx":return ne(e);case"xxxxx":case"xxx":default:return ne(e,":")}},O:function(t,r,n){const e=t.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Ae(e,":");case"OOOO":default:return"GMT"+ne(e,":")}},z:function(t,r,n){const e=t.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Ae(e,":");case"zzzz":default:return"GMT"+ne(e,":")}},t:function(t,r,n){const e=Math.trunc(t.getTime()/1e3);return F(e,r.length)},T:function(t,r,n){const e=t.getTime();return F(e,r.length)}};function Ae(t,r=""){const n=t>0?"-":"+",e=Math.abs(t),a=Math.trunc(e/60),o=e%60;return o===0?n+String(a):n+String(a)+r+F(o,2)}function Be(t,r){return t%60===0?(t>0?"-":"+")+F(Math.abs(t)/60,2):ne(t,r)}function ne(t,r=""){const n=t>0?"-":"+",e=Math.abs(t),a=F(Math.trunc(e/60),2),o=F(e%60,2);return n+a+r+o}const $e=(t,r)=>{switch(t){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},et=(t,r)=>{switch(t){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},Wn=(t,r)=>{const n=t.match(/(P+)(p+)?/)||[],e=n[1],a=n[2];if(!a)return $e(t,r);let o;switch(e){case"P":o=r.dateTime({width:"short"});break;case"PP":o=r.dateTime({width:"medium"});break;case"PPP":o=r.dateTime({width:"long"});break;case"PPPP":default:o=r.dateTime({width:"full"});break}return o.replace("{{date}}",$e(e,r)).replace("{{time}}",et(a,r))},Rn={p:et,P:Wn},Fn=/^D+$/,Cn=/^Y+$/,_n=["D","DD","YY","YYYY"];function In(t){return Fn.test(t)}function Yn(t){return Cn.test(t)}function Vn(t,r,n){const e=An(t,r,n);if(console.warn(e),_n.includes(t))throw new RangeError(e)}function An(t,r,n){const e=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${r}\`) for formatting ${e} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Bn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$n=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ln=/^'([^]*?)'?$/,zn=/''/g,qn=/[a-zA-Z]/;function Le(t,r,n){var f,p,g,D,w,P,E,S;const e=be(),a=(n==null?void 0:n.locale)??e.locale??Tn,o=(n==null?void 0:n.firstWeekContainsDate)??((p=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??e.firstWeekContainsDate??((D=(g=e.locale)==null?void 0:g.options)==null?void 0:D.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((P=(w=n==null?void 0:n.locale)==null?void 0:w.options)==null?void 0:P.weekStartsOn)??e.weekStartsOn??((S=(E=e.locale)==null?void 0:E.options)==null?void 0:S.weekStartsOn)??0,h=U(t);if(!Ht(h))throw new RangeError("Invalid time value");let d=r.match($n).map(c=>{const y=c[0];if(y==="p"||y==="P"){const I=Rn[y];return I(c,a.formatLong)}return c}).join("").match(Bn).map(c=>{if(c==="''")return{isToken:!1,value:"'"};const y=c[0];if(y==="'")return{isToken:!1,value:Hn(c)};if(Ve[y])return{isToken:!0,value:c};if(y.match(qn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:c}});a.localize.preprocessor&&(d=a.localize.preprocessor(h,d));const u={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return d.map(c=>{if(!c.isToken)return c.value;const y=c.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Yn(y)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&In(y))&&Vn(y,r,String(t));const I=Ve[y[0]];return I(h,y,a.localize,u)}).join("")}function Hn(t){const r=t.match(Ln);return r?r[1].replace(zn,"'"):t}function Un(t){const r=U(t);return r.setMinutes(0,0,0),r}const tt=()=>{const t=new Date;let r=t;const n=[],e=t.getMinutes();let a=e+(5-e%5);a>=60?(a-=60,r=fe(Un(fe(t,60)),a)):r=fe(t,a-e),n.push(Le(t,"hh:mm aa"));for(let o=0;o<24*12;o++)n.push(Le(r,"hh:mm aa")),r=fe(r,5);return n},Xn=x.div`
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

  @media ${O.tablet} {
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
`,Qn=x.li`
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

  @media ${O.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
  }
`,nt=x.div`
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
  @media ${O.tablet} {
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

  @media ${O.desktop} {
  }
`,Gn=x.div`
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

  @media ${O.tablet} {
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
`,de=t=>t.water,xe=le(de,t=>t.amountDaily);le(de,t=>t.amountDaily.percentage);const Kn=le(de,t=>t.amountMonthly),Jn=le(de,t=>t.isLoading),Zn=le(de,t=>t.error),rt=({title:t,closeModal:r})=>{const{register:n,handleSubmit:e,watch:a,getValues:o,formState:{errors:s}}=Oe({mode:"onChange"}),h=re(),{entries:d}=K(xe),[u,f]=$.useState({count:d.length>0?d[d.length-1].waterVolume:0,inputValue:d.length>0?d[d.length-1].waterVolume:"0"}),p=tt(),g=u.inputValue,D=String(a("time")),w=o("waterVolume"),P=D.slice(3,5),E=p[0].slice(3,5).toString(),S=W=>{u.count+W>=0&&f({inputValue:String(W),count:W})},c=W=>{const{value:_}=W.target;f(l=>({...l,inputValue:_}))},y=()=>{S(Number(u.inputValue))},I=W=>{W.key==="-"&&W.preventDefault()},V=W=>{const _={time:W.time,waterVolume:Number(u.inputValue)};s.waterVolume||_.waterVolume!==0&&Number(P)%5===0&&(z=v(P,w,E),h(ut(_)),r())};let C=!1;const v=(W,_,l)=>{if(_===0)return C=!0,"The amount of water cannot be 0!";if(Number(W)%5!==0&&Number(l)%5!==0)return C=!0,"Please choose a time that is divisible by 5"};let z=v(P,Number(g),E);return i.jsxs(nt,{children:[i.jsx("h2",{className:"add-water-title",children:t}),i.jsxs("div",{className:"counter-box",children:[i.jsx("p",{className:"",children:"Amount of water:"}),i.jsxs("div",{className:"counter-btn-box",children:[i.jsx("button",{className:"counter-btn",onClick:()=>S(u.count-50),type:"button",children:i.jsx(J,{className:"icon-minus",id:"minus"})}),i.jsxs("span",{className:"water-amount-span",children:[u.count,"ml"]}),i.jsx("button",{className:"counter-btn",onClick:()=>S(u.count+50),type:"button",children:i.jsx(J,{className:"icon-plus",id:"plus"})})]})]}),i.jsxs("form",{className:"add-water-form",onSubmit:e(V),children:[i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"popover",children:"Recording time:"}),C&&i.jsx(De,{message:z}),i.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:p.map(W=>i.jsx("option",{value:W,children:W},W))})]}),i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),i.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:u.inputValue,onChange:c,onBlur:y,onKeyPress:I,className:"water-select"})]}),i.jsxs("div",{className:"btn-container",children:[i.jsx("span",{className:"water-amount",children:`${u.count}ml`}),i.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},er=({closeModal:t,_id:r})=>{const n=re(),e=()=>{t()},a=o=>{n(lt(o)),t()};return i.jsxs(Gn,{children:[i.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),i.jsxs("div",{className:"delete-btn-box",children:[i.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),i.jsx("button",{className:"delete-btn",type:"button",onClick:()=>a(r),children:"Delete"})]})]})},tr=({title:t,closeModal:r,id:n})=>{const{register:e,handleSubmit:a,getValues:o,formState:{errors:s}}=Oe({mode:"onChange"}),h=re(),{entries:d}=K(xe),u=d.find(v=>v._id===n),[f,p]=$.useState({count:u?u.waterVolume:0,inputValue:u?u.waterVolume:"0"}),g=tt(),D=f.inputValue,w=o("waterVolume"),P=v=>{f.count+v>=0&&p({inputValue:String(v),count:v})},E=v=>{const{value:z}=v.target;p(W=>({...W,inputValue:z}))},S=()=>{P(Number(f.inputValue))},c=v=>{v.key==="-"&&v.preventDefault()},y=v=>{const z={time:v.time,waterVolume:Number(f.inputValue)};s.waterVolume||z.waterVolume!==0&&(C=V(w),n&&h(Ue({...z,id:n})),r())};let I=!1;const V=v=>{if(v===0)return I=!0,"The amount of water cannot be 0!"};let C=V(Number(D));return i.jsxs(nt,{children:[i.jsxs("div",{className:"water-card",children:[i.jsx(J,{className:"water-glass-icon",id:"water"}),i.jsxs("p",{className:"water-amount-card",children:[u==null?void 0:u.waterVolume," ml"]}),i.jsx("p",{className:"time",children:u==null?void 0:u.time})]}),i.jsx("h2",{className:"add-water-title",children:t}),i.jsxs("div",{className:"counter-box",children:[i.jsx("p",{className:"",children:"Amount of water:"}),i.jsxs("div",{className:"counter-btn-box",children:[i.jsx("button",{className:"counter-btn",onClick:()=>P(f.count-50),type:"button",children:i.jsx(J,{className:"icon-minus",id:"minus"})}),i.jsxs("span",{className:"water-amount-span",children:[f.count,"ml"]}),i.jsx("button",{className:"counter-btn",onClick:()=>P(f.count+50),type:"button",children:i.jsx(J,{className:"icon-plus",id:"plus"})})]})]}),i.jsxs("form",{className:"add-water-form",onSubmit:a(y),children:[i.jsxs("label",{className:"water-label",children:[i.jsx("span",{children:"Recording time:"}),I&&i.jsx(De,{message:C}),i.jsx("select",{...e("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:g.map(v=>i.jsx("option",{value:v,selected:v===(u==null?void 0:u.time),children:v},v))})]}),i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),i.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:f.inputValue,onChange:E,onBlur:S,onKeyPress:c,className:"water-select"})]}),i.jsxs("div",{className:"btn-container",children:[i.jsxs("span",{className:"water-amount",children:[u==null?void 0:u.waterVolume,"ml"]}),i.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},nr=({_id:t,waterVolume:r,time:n})=>{const[e,a]=$.useState(!1),[o,s]=$.useState(!1),h=re(),d=u=>{h(Ue(u))};return i.jsxs(Qn,{children:[i.jsxs("div",{className:"water-info",children:[i.jsx(J,{className:"water-glass-icon",id:"water"}),i.jsxs("p",{className:"water-amount-card",children:[r," ml"]}),i.jsx("p",{className:"time",children:n})]}),i.jsxs("div",{className:"edit-delete-btn-box",children:[i.jsx("button",{type:"button",className:"edit-btn",onClick:()=>a(!0),children:i.jsx(J,{className:"edit-water-icon",id:"pencil"})}),i.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{s(!0)},children:i.jsx(J,{className:"delete-water-icon",id:"delete"})})]}),e&&i.jsx(ce,{setVisible:a,title:"Edit the entered amount of water",children:i.jsx(tr,{title:"Correct entered data:",handleUpdateWater:d,closeModal:()=>{a(!1)},id:t})}),o&&i.jsx(ce,{setVisible:s,title:"Delete water",delete:!0,children:i.jsx(er,{title:"Delete entry?",show:!1,closeModal:()=>{s(!1)},_id:t})})]})},rr=()=>{const[t,r]=$.useState(!1),{entries:n}=K(xe),e=K(Jn),a=K(Zn),o=()=>{r(!1)};return i.jsxs(Xn,{children:[i.jsx("h3",{className:"water-title",children:"Today"}),e&&!a&&i.jsx(dt,{}),n.length===0?i.jsx("p",{className:"water-empty",children:"No notes yet"}):i.jsx("ul",{className:"water-list",children:n.length>0&&n.map(({_id:s,waterVolume:h,time:d})=>i.jsx(nr,{_id:s,waterVolume:h,time:d},s))}),i.jsxs("button",{className:"add-water-btn",onClick:()=>r(!0),children:[i.jsx(J,{className:"water-plus-icon",id:"plus"}),"Add water"]}),t&&i.jsx(ce,{setVisible:r,title:"Add water",children:i.jsx(rt,{title:"Choose a value:",show:!1,closeModal:o})})]})},ar=x.div`
  width: 264px;
  height: 500px;
  background-color: transparent;

  @media ${O.tablet} {
    width: 646px;
    height: 315px;
  }
  @media ${O.desktop} {

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
`,ir=x.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  justify-content: center;
  gap: 16px 26px;

  @media ${O.tablet} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }
  @media ${O.desktop} {
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
`,at=x.span`
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
`,or=x.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`,sr=x.div`
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
`,cr=x(at)`
  border: #ff9d43 1px solid;
`,ur=({setIsModalOpen:t,isModalOpen:r,modalContent:n,closeModal:e})=>{const a=$.useRef(null);return $.useEffect(()=>{const o=s=>{s instanceof KeyboardEvent&&s.key==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]),ht(a,()=>{r&&t(!1)}),i.jsx(or,{ref:a,className:r?"open":"",children:i.jsxs(sr,{children:[i.jsx("button",{className:"close hover active",onClick:()=>e(),children:"×"}),i.jsx("h3",{className:"title-modal",children:`${n==null?void 0:n.day}, ${n==null?void 0:n.month}`}),i.jsxs("p",{className:"modal-paragraf modal-paragraf-one",children:["Daily norm: ",i.jsx("span",{className:"span-modal",children:n==null?void 0:n.dailyNorma})]}),i.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["Fulfillment of the daily norm:"," ",i.jsxs("span",{className:"span-modal",children:[(n==null?void 0:n.percent)!==void 0&&(n==null?void 0:n.percent)>=100?100:n==null?void 0:n.percent,"%"]})]}),i.jsxs("p",{className:"modal-paragraf modal-paragraf-two-three",children:["How many servings of water: ",i.jsx("span",{className:"span-modal",children:n==null?void 0:n.amountOfWater})]})]})})},lr=()=>{const t=()=>new Date,[r,n]=$.useState(t()),[e,a]=$.useState(null),[o,s]=$.useState(!1),[h,d]=$.useState(null),u=K(Kn),f=`${r.getFullYear()}-${(r.getMonth()+1).toString().padStart(2,"0")}`,p=re();$.useEffect(()=>{p(mt(f))},[p,f]);const g=c=>{const y=c.getFullYear(),I=c.getMonth(),V=new Date(y,I+1,0).getDate(),C=[];for(let v=1;v<=V;v++)C.push({day:v,month:c.toLocaleString("en-US",{month:"long"})});return C},D=()=>{n(c=>new Date(c.getFullYear(),c.getMonth()-1)),a(null)},w=()=>{const c=new Date(r.getFullYear(),r.getMonth()+1);c<=t()&&(n(c),a(null))},P=c=>{if(e===c.day){E(),a(null);return}const y=document.getElementById(`day-${c.day}`);if(!y)return;const I=y.getBoundingClientRect(),V=292,C=188,v=window.innerWidth,z=window.innerHeight;let W=I.top-C-10,_=window.innerWidth<=768?window.innerWidth/2-V/2:I.left+I.width/2-V/2;W<0&&(W=0),W+C>z&&(W=z-C),_<0&&(_=0),_+V>v&&(_=v-V),a(c.day),d(c),document.documentElement.style.setProperty("--modal-top",`${W}px`),document.documentElement.style.setProperty("--modal-left",`${_}px`),s(!0)},E=()=>{s(!1)},S=c=>{if(!(u!=null&&u.month)){c.percent=0,c.amountOfWater=0,c.dailyNorma=2;return}const y=c.day.toString(),I=u.month.map(V=>V.date.slice(-2).trim()).indexOf(y);if(I===-1&&(c.percent=0,c.amountOfWater=0,c.dailyNorma=2),I!==-1){const{amountOfWater:V,dailyNorma:C,percentage:v}=u.month[I];c.percent=v,c.amountOfWater=V,c.dailyNorma=C}};return i.jsxs(ar,{children:[i.jsxs("div",{className:"right-align",children:[i.jsx("h1",{className:"month",children:"Month"}),i.jsxs("div",{className:"header",children:[i.jsx("button",{className:"button",onClick:D,children:"<"}),i.jsxs("div",{className:"month-title",children:[r.toLocaleString("en-US",{month:"long"}),","," ",r.getFullYear()]}),r.getMonth()===new Date().getMonth()&&r.getFullYear()===new Date().getFullYear()?i.jsx("button",{className:"button disabled",disabled:!0,children:">"}):i.jsx("button",{className:"button",onClick:w,children:">"})]})]}),i.jsx(ir,{children:g(r).map(c=>(S(c),i.jsxs("li",{id:`day-${c.day}`,className:"hover active",children:[c.percent!==void 0&&c.percent<100?i.jsx(cr,{className:`day ${e===c.day?"selected":""}`,onClick:()=>P(c),children:c.day}):i.jsx(at,{className:`day ${e===c.day?"selected":""}`,onClick:()=>P(c),children:c.day}),i.jsx("p",{className:`procent ${c.percent!==void 0&&c.percent<100?"lowPercentage":""}`,children:`${c.percent!==void 0&&c.percent>=100?100:c.percent}%`})]},c.day)))}),i.jsx(ur,{setIsModalOpen:s,isModalOpen:o,modalContent:h,closeModal:E})]})};var je={},Te={},Se={},ve={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Direction=void 0,function(r){r.Right="to right",r.Left="to left",r.Down="to bottom",r.Up="to top"}(t.Direction||(t.Direction={}))})(ve);(function(t){var r=H&&H.__spreadArray||function(l,m,b){if(b||arguments.length===2)for(var M=0,j=m.length,k;M<j;M++)(k||!(M in m))&&(k||(k=Array.prototype.slice.call(m,0,M)),k[M]=m[M]);return l.concat(k||Array.prototype.slice.call(m))};Object.defineProperty(t,"__esModule",{value:!0}),t.useThumbOverlap=t.assertUnreachable=t.voidFn=t.getTrackBackground=t.replaceAt=t.schd=t.translate=t.getClosestThumbIndex=t.translateThumbs=t.getPaddingAndBorder=t.getMargin=t.checkInitialOverlap=t.checkValuesAgainstBoundaries=t.checkBoundaries=t.isVertical=t.relativeValue=t.normalizeValue=t.isStepDivisible=t.isTouchEvent=t.getStepDecimals=void 0;var n=$,e=ve,a=function(l){var m=l.toString().split(".")[1];return m?m.length:0};t.getStepDecimals=a;function o(l){return l.touches&&l.touches.length||l.changedTouches&&l.changedTouches.length}t.isTouchEvent=o;function s(l,m,b){var M=(m-l)/b,j=8,k=Number(M.toFixed(j));return parseInt(k.toString(),10)===k}t.isStepDivisible=s;function h(l,m,b,M,j,k,R){var N=1e11;if(l=Math.round(l*N)/N,!k){var L=R[m-1],Y=R[m+1];if(L&&L>l)return L;if(Y&&Y<l)return Y}if(l>M)return M;if(l<b)return b;var X=Math.floor(l*N-b*N)%Math.floor(j*N),q=Math.floor(l*N-Math.abs(X)),Q=X===0?l:q/N,B=Math.abs(X/N)<j/2?Q:Q+j,G=(0,t.getStepDecimals)(j);return parseFloat(B.toFixed(G))}t.normalizeValue=h;function d(l,m,b){return(l-m)/(b-m)}t.relativeValue=d;function u(l){return l===e.Direction.Up||l===e.Direction.Down}t.isVertical=u;function f(l,m,b){if(m>=b)throw new RangeError("min (".concat(m,") is equal/bigger than max (").concat(b,")"));if(l<m)throw new RangeError("value (".concat(l,") is smaller than min (").concat(m,")"));if(l>b)throw new RangeError("value (".concat(l,") is bigger than max (").concat(b,")"))}t.checkBoundaries=f;function p(l,m,b){return l<m?m:l>b?b:l}t.checkValuesAgainstBoundaries=p;function g(l){if(!(l.length<2)&&!l.slice(1).every(function(m,b){return l[b]<=m}))throw new RangeError("values={[".concat(l,"]} needs to be sorted when allowOverlap={false}"))}t.checkInitialOverlap=g;function D(l){var m=window.getComputedStyle(l);return{top:parseInt(m["margin-top"],10),bottom:parseInt(m["margin-bottom"],10),left:parseInt(m["margin-left"],10),right:parseInt(m["margin-right"],10)}}t.getMargin=D;function w(l){var m=window.getComputedStyle(l);return{top:parseInt(m["padding-top"],10)+parseInt(m["border-top-width"],10),bottom:parseInt(m["padding-bottom"],10)+parseInt(m["border-bottom-width"],10),left:parseInt(m["padding-left"],10)+parseInt(m["border-left-width"],10),right:parseInt(m["padding-right"],10)+parseInt(m["border-right-width"],10)}}t.getPaddingAndBorder=w;function P(l,m,b){var M=b?-1:1;l.forEach(function(j,k){return S(j,M*m[k].x,m[k].y)})}t.translateThumbs=P;function E(l,m,b,M){for(var j=0,k=_(l[0],m,b,M),R=1;R<l.length;R++){var N=_(l[R],m,b,M);N<k&&(k=N,j=R)}return j}t.getClosestThumbIndex=E;function S(l,m,b){l.style.transform="translate(".concat(m,"px, ").concat(b,"px)")}t.translate=S;var c=function(l){var m=[],b=null,M=function(){for(var j=[],k=0;k<arguments.length;k++)j[k]=arguments[k];m=j,!b&&(b=requestAnimationFrame(function(){b=null,l.apply(void 0,m)}))};return M};t.schd=c;function y(l,m,b){var M=l.slice(0);return M[m]=b,M}t.replaceAt=y;function I(l){var m=l.values,b=l.colors,M=l.min,j=l.max,k=l.direction,R=k===void 0?e.Direction.Right:k,N=l.rtl,L=N===void 0?!1:N;L&&R===e.Direction.Right?R=e.Direction.Left:L&&e.Direction.Left&&(R=e.Direction.Right);var Y=m.slice(0).sort(function(q,Q){return q-Q}).map(function(q){return(q-M)/(j-M)*100}),X=Y.reduce(function(q,Q,B){return"".concat(q,", ").concat(b[B]," ").concat(Q,"%, ").concat(b[B+1]," ").concat(Q,"%")},"");return"linear-gradient(".concat(R,", ").concat(b[0]," 0%").concat(X,", ").concat(b[b.length-1]," 100%)")}t.getTrackBackground=I;function V(){}t.voidFn=V;function C(l){throw new Error("Didn't expect to get here")}t.assertUnreachable=C;var v=function(l,m,b,M,j){j===void 0&&(j=function(R){return R});var k=Math.ceil(r([l],Array.from(l.children),!0).reduce(function(R,N){var L=Math.ceil(N.getBoundingClientRect().width);if(N.innerText&&N.innerText.includes(b)&&N.childElementCount===0){var Y=N.cloneNode(!0);Y.innerHTML=j(m.toFixed(M)),Y.style.visibility="hidden",document.body.appendChild(Y),L=Math.ceil(Y.getBoundingClientRect().width),document.body.removeChild(Y)}return L>R?L:R},l.getBoundingClientRect().width));return k},z=function(l,m,b,M,j,k,R){R===void 0&&(R=function(Y){return Y});var N=[],L=function(Y){var X=v(b[Y],M[Y],j,k,R),q=m[Y].x;m.forEach(function(Q,B){var G=Q.x,te=v(b[B],M[B],j,k,R);Y!==B&&(q>=G&&q<=G+te||q+X>=G&&q+X<=G+te)&&(N.includes(B)||(N.push(Y),N.push(B),N=r(r([],N,!0),[Y,B],!1),L(B)))})};return L(l),Array.from(new Set(N.sort()))},W=function(l,m,b,M,j,k){M===void 0&&(M=.1),j===void 0&&(j=" - "),k===void 0&&(k=function(B){return B});var R=(0,t.getStepDecimals)(M),N=(0,n.useState)({}),L=N[0],Y=N[1],X=(0,n.useState)(k(m[b].toFixed(R))),q=X[0],Q=X[1];return(0,n.useEffect)(function(){if(l){var B=l.getThumbs();if(B.length<1)return;var G={},te=l.getOffsets(),he=z(b,te,B,m,j,R,k),Ne=k(m[b].toFixed(R));if(he.length){var me=he.reduce(function(ae,We,Re,Fe){return ae.length?r(r([],ae,!0),[te[Fe[Re]].x],!1):[te[Fe[Re]].x]},[]);if(Math.min.apply(Math,me)===te[b].x){var Pe=[];he.forEach(function(ae){Pe.push(m[ae].toFixed(R))}),Ne=Array.from(new Set(Pe.sort(function(ae,We){return parseFloat(ae)-parseFloat(We)}))).map(k).join(j);var it=Math.min.apply(Math,me),Ee=Math.max.apply(Math,me),ot=B[he[me.indexOf(Ee)]].getBoundingClientRect().width;G.left="".concat(Math.abs(it-(Ee+ot))/2,"px"),G.transform="translate(-50%, 0)"}else G.visibility="hidden"}Q(Ne),Y(G)}},[l,m]),[q,L]};t.useThumbOverlap=W;function _(l,m,b,M){var j=l.getBoundingClientRect(),k=j.left,R=j.top,N=j.width,L=j.height;return u(M)?Math.abs(b-(R+L/2)):Math.abs(m-(k+N/2))}})(Se);var dr=H&&H.__extends||function(){var t=function(r,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])},t(r,n)};return function(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(r,n);function e(){this.constructor=r}r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}}(),hr=H&&H.__createBinding||(Object.create?function(t,r,n,e){e===void 0&&(e=n);var a=Object.getOwnPropertyDescriptor(r,n);(!a||("get"in a?!r.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return r[n]}}),Object.defineProperty(t,e,a)}:function(t,r,n,e){e===void 0&&(e=n),t[e]=r[n]}),mr=H&&H.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),fr=H&&H.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&hr(r,t,n);return mr(r,t),r},ze=H&&H.__spreadArray||function(t,r,n){if(n||arguments.length===2)for(var e=0,a=r.length,o;e<a;e++)(o||!(e in r))&&(o||(o=Array.prototype.slice.call(r,0,e)),o[e]=r[e]);return t.concat(o||Array.prototype.slice.call(r))};Object.defineProperty(Te,"__esModule",{value:!0});var pe=fr($),T=Se,A=ve,pr=["ArrowRight","ArrowUp","k","PageUp"],gr=["ArrowLeft","ArrowDown","j","PageDown"],br=function(t){dr(r,t);function r(n){var e=t.call(this,n)||this;if(e.trackRef=pe.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(a,o){return o}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var a=e.props,o=a.direction,s=a.values,h=a.min,d=a.max,u=e.trackRef.current,f=u.getBoundingClientRect(),p=(0,T.getPaddingAndBorder)(u);return e.getThumbs().map(function(g,D){var w={x:0,y:0},P=g.getBoundingClientRect(),E=(0,T.getMargin)(g);switch(o){case A.Direction.Right:return w.x=(E.left+p.left)*-1,w.y=((P.height-f.height)/2+p.top)*-1,w.x+=f.width*(0,T.relativeValue)(s[D],h,d)-P.width/2,w;case A.Direction.Left:return w.x=(E.right+p.right)*-1,w.y=((P.height-f.height)/2+p.top)*-1,w.x+=f.width-f.width*(0,T.relativeValue)(s[D],h,d)-P.width/2,w;case A.Direction.Up:return w.x=((P.width-f.width)/2+E.left+p.left)*-1,w.y=-p.left,w.y+=f.height-f.height*(0,T.relativeValue)(s[D],h,d)-P.height/2,w;case A.Direction.Down:return w.x=((P.width-f.width)/2+E.left+p.left)*-1,w.y=-p.left,w.y+=f.height*(0,T.relativeValue)(s[D],h,d)-P.height/2,w;default:return(0,T.assertUnreachable)(o)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(a){return a.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(a){return e.getThumbs().findIndex(function(o){return o===a.target||o.contains(a.target)})},e.addTouchEvents=function(a){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(a){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(a){var o;if(a.button===0)if(a.persist(),a.preventDefault(),e.addMouseEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(a.target)}))return;e.setState({draggedTrackPos:[a.clientX,a.clientY]},function(){return e.onMove(a.clientX,a.clientY)})}else{var s=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(h){return h.current}),a.clientX,a.clientY,e.props.direction);(o=e.thumbRefs[s].current)===null||o===void 0||o.focus(),e.setState({draggedThumbIndex:s},function(){return e.onMove(a.clientX,a.clientY)})}},e.onResize=function(){(0,T.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(a){var o;if(a.persist(),e.addTouchEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(h){var d;return(d=h.current)===null||d===void 0?void 0:d.contains(a.target)}))return;e.setState({draggedTrackPos:[a.touches[0].clientX,a.touches[0].clientY]},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}else{var s=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(h){return h.current}),a.touches[0].clientX,a.touches[0].clientY,e.props.direction);(o=e.thumbRefs[s].current)===null||o===void 0||o.focus(),e.setState({draggedThumbIndex:s},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}},e.onMouseOrTouchStart=function(a){if(!e.props.disabled){var o=(0,T.isTouchEvent)(a);if(!(!o&&a.button!==0)){var s=e.getTargetIndex(a);s!==-1&&(o?e.addTouchEvents(a):e.addMouseEvents(a),e.setState({draggedThumbIndex:s,thumbZIndexes:e.state.thumbZIndexes.map(function(h,d){return d===s?Math.max.apply(Math,e.state.thumbZIndexes):h<=e.state.thumbZIndexes[s]?h:h-1})}))}}},e.onMouseMove=function(a){a.preventDefault(),e.onMove(a.clientX,a.clientY)},e.onTouchMove=function(a){a.preventDefault(),e.onMove(a.touches[0].clientX,a.touches[0].clientY)},e.onKeyDown=function(a){var o=e.props,s=o.values,h=o.onChange,d=o.step,u=o.rtl,f=o.direction,p=e.state.isChanged,g=e.getTargetIndex(a.nativeEvent),D=u||f===A.Direction.Left||f===A.Direction.Down?-1:1;g!==-1&&(pr.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),h((0,T.replaceAt)(s,g,e.normalizeValue(s[g]+D*(a.key==="PageUp"?d*10:d),g)))):gr.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),h((0,T.replaceAt)(s,g,e.normalizeValue(s[g]-D*(a.key==="PageDown"?d*10:d),g)))):a.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){p&&e.fireOnFinalChange()}):p&&e.fireOnFinalChange())},e.onKeyUp=function(a){var o=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){o&&e.fireOnFinalChange()})},e.onMove=function(a,o){var s=e.state,h=s.draggedThumbIndex,d=s.draggedTrackPos,u=e.props,f=u.direction,p=u.min,g=u.max,D=u.onChange,w=u.values,P=u.step,E=u.rtl;if(h===-1&&d[0]===-1&&d[1]===-1)return null;var S=e.trackRef.current;if(!S)return null;var c=S.getBoundingClientRect(),y=(0,T.isVertical)(f)?c.height:c.width;if(d[0]!==-1&&d[1]!==-1){var I=a-d[0],V=o-d[1],C=0;switch(f){case A.Direction.Right:case A.Direction.Left:C=I/y*(g-p);break;case A.Direction.Down:case A.Direction.Up:C=V/y*(g-p);break;default:(0,T.assertUnreachable)(f)}if(E&&(C*=-1),Math.abs(C)>=P/2){for(var v=0;v<e.thumbRefs.length;v++){if(w[v]===g&&Math.sign(C)===1||w[v]===p&&Math.sign(C)===-1)return;var z=w[v]+C;z>g?C=g-w[v]:z<p&&(C=p-w[v])}for(var W=w.slice(0),v=0;v<e.thumbRefs.length;v++)W=(0,T.replaceAt)(W,v,e.normalizeValue(w[v]+C,v));e.setState({draggedTrackPos:[a,o]}),D(W)}}else{var _=0;switch(f){case A.Direction.Right:_=(a-c.left)/y*(g-p)+p;break;case A.Direction.Left:_=(y-(a-c.left))/y*(g-p)+p;break;case A.Direction.Down:_=(o-c.top)/y*(g-p)+p;break;case A.Direction.Up:_=(y-(o-c.top))/y*(g-p)+p;break;default:(0,T.assertUnreachable)(f)}E&&(_=g+p-_),Math.abs(w[h]-_)>=P/2&&D((0,T.replaceAt)(w,h,e.normalizeValue(_,h)))}},e.normalizeValue=function(a,o){var s=e.props,h=s.min,d=s.max,u=s.step,f=s.allowOverlap,p=s.values;return(0,T.normalizeValue)(a,o,h,d,u,f,p)},e.onEnd=function(a){if(a.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var a=e.props,o=a.onFinalChange,s=a.values;o&&o(s)},e.updateMarkRefs=function(a){if(!a.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(a.max-a.min)/e.props.step,e.markRefs=[];for(var o=0;o<e.numOfMarks+1;o++)e.markRefs[o]=pe.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var a=window.getComputedStyle(e.trackRef.current),o=parseInt(a.width,10),s=parseInt(a.height,10),h=parseInt(a.paddingLeft,10),d=parseInt(a.paddingTop,10),u=[],f=0;f<e.numOfMarks+1;f++){var p=9999,g=9999;if(e.markRefs[f].current){var D=e.markRefs[f].current.getBoundingClientRect();p=D.height,g=D.width}e.props.direction===A.Direction.Left||e.props.direction===A.Direction.Right?u.push([Math.round(o/e.numOfMarks*f+h-g/2),-Math.round((p-s)/2)]):u.push([Math.round(s/e.numOfMarks*f+d-p/2),-Math.round((g-o)/2)])}e.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,T.schd)(e.onMouseMove),e.schdOnTouchMove=(0,T.schd)(e.onTouchMove),e.schdOnEnd=(0,T.schd)(e.onEnd),e.thumbRefs=n.values.map(function(){return pe.createRef()}),e.updateMarkRefs(n),e}return r.prototype.componentDidMount=function(){var n=this,e=this.props,a=e.values,o=e.min,s=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,T.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(h){return(0,T.checkBoundaries)(h,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),a.forEach(function(h){(0,T.isStepDivisible)(o,h,s)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},r.prototype.componentDidUpdate=function(n,e){var a=this.props,o=a.max,s=a.min,h=a.step,d=a.values,u=a.rtl;(n.max!==o||n.min!==s||n.step!==h)&&this.updateMarkRefs(this.props),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==s||n.step!==h||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),d.forEach(function(f){(0,T.isStepDivisible)(s,f,h)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},r.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},r.prototype.render=function(){var n=this,e=this.props,a=e.renderTrack,o=e.renderThumb,s=e.renderMark,h=s===void 0?function(){return null}:s,d=e.values,u=e.min,f=e.max,p=e.allowOverlap,g=e.disabled,D=this.state,w=D.draggedThumbIndex,P=D.thumbZIndexes,E=D.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,T.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!g?"pointer":"inherit"},onMouseDown:g?T.voidFn:this.onMouseDownTrack,onTouchStart:g?T.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:ze(ze([],E.map(function(S,c,y){return h({props:{style:n.props.direction===A.Direction.Left||n.props.direction===A.Direction.Right?{position:"absolute",left:"".concat(S[0],"px"),marginTop:"".concat(S[1],"px")}:{position:"absolute",top:"".concat(S[0],"px"),marginLeft:"".concat(S[1],"px")},key:"mark".concat(c),ref:n.markRefs[c]},index:c})}),!0),d.map(function(S,c){var y=n.state.draggedThumbIndex===c;return o({index:c,value:S,isDragged:y,props:{style:{position:"absolute",zIndex:P[c],cursor:g?"inherit":y?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:c,tabIndex:g?void 0:0,"aria-valuemax":p?f:d[c+1]||f,"aria-valuemin":p?u:d[c-1]||u,"aria-valuenow":S,draggable:!1,ref:n.thumbRefs[c],role:"slider",onKeyDown:g?T.voidFn:n.onKeyDown,onKeyUp:g?T.voidFn:n.onKeyUp}})}),!0)})},r.defaultProps={step:1,direction:A.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},r}(pe.Component);Te.default=br;(function(t){var r=H&&H.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkValuesAgainstBoundaries=t.relativeValue=t.useThumbOverlap=t.Direction=t.getTrackBackground=t.Range=void 0;var n=r(Te);t.Range=n.default;var e=Se;Object.defineProperty(t,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(t,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(t,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(t,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var a=ve;Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return a.Direction}})})(je);const xr=x.div`
  width: 280px;
  @media ${O.tablet} {
    width: 704px;
  }
  @media ${O.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,vr=x.div`
  @media ${O.tablet} {
    display: flex;
    gap: 30px;
  }
  @media ${O.desktop} {
    display: flex;
    gap: 24px;
  }
`,wr=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,yr=x.h2`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--proimary-blue);

  @media ${O.tablet} {
    padding-bottom: 16px;
  }
`,kr=x.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${O.tablet} {
    width: 325px;
  }
  @media ${O.desktop} {
    width: 360px;
  }
`,Mr=x.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,jr=x.div`
  position: relative;
  top: 24px;
`,Or=x.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,Dr=x.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,qe=x.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,Tr=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${O.tablet} {
    width: 400px;
  }
  @media ${O.desktop} {
    width: 592px;
  }
`,Sr=x.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${O.tablet} {
    width: 336px;
    height: 44px;
  }
  @media ${O.desktop} {
    width: 178px;
  }
`,Nr=()=>{const t=K(He),{entries:r}=K(xe),n=r.reduce((e,{waterVolume:a})=>e+=a,0);return t?Math.floor(n/(t*1e3)*100):0},Pr=()=>{const[t,r]=$.useState(!1),n=Nr(),e=n>100?100:n,a=()=>{r(!1)};return i.jsxs(i.Fragment,{children:[i.jsx(xr,{children:i.jsxs(vr,{children:[i.jsxs("div",{children:[i.jsx(yr,{children:"Today"}),i.jsx(wr,{children:i.jsx(je.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:o,children:s})=>i.jsx(kr,{...o,style:{...o.style,background:je.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:s}),renderThumb:({props:o})=>$.createElement(Mr,{...o,key:o.key},i.jsx(jr,{children:i.jsxs(Or,{children:[e,"%"]})}))})}),i.jsxs(Dr,{children:[e<=7?i.jsx("span",{children:" "}):i.jsx(qe,{children:"0%"}),e>=85?i.jsx("span",{children:" "}):i.jsx(qe,{children:"100%"})]})]}),i.jsx(Tr,{className:"hover",children:i.jsxs(Sr,{className:"btn",onClick:()=>r(!0),children:[i.jsx(J,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),t&&i.jsx(ce,{setVisible:r,title:"Add water",children:i.jsx(rt,{title:"Choose a value",show:!1,closeModal:a})})]})},Er=x.section`
  background-image: url("${Xe}");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 70px;
  background-position-y: 100px;
  @media ${O.tablet} {
    background-image: url("${Qe}");
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${O.desktop} {
    background-image: url("${Ge}");
   
  }
`,Wr=x.div`
display: flex;
flex-direction: column;
gap:40px;
@media ${O.desktop} {
    
    flex-direction: row;
      justify-content:space-between;
      gap:0px;
  }
`,Rr=x.div`
  background-image: url("${pt}");
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 10px;
  background-position-y: 90px;
  padding: 24px 8px;

  @media ${O.tablet} {
    background-image: url("${gt}");
    background-position-y: 5px;
    background-position-x: 90px;   
    padding-top: 0px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${O.desktop} {
    background-image: url("${bt}");
    background-position-y: 0px;
    background-position-x: -50px;
    height: 548px;
   
  }
`,Fr=x.div`
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

  @media ${O.tablet} {
    padding: 32px 24px;
    background-image: url("${Qe}");
    
  }

  @media ${O.desktop} {
    width: 592px;
    max-height: 688px;
    background-image: url("${Ge}");
    margin-bottom: 0px;
    padding-top: 0px;
  }
`,Ir=()=>{const t=re();return $.useEffect(()=>{t(ft())},[t]),i.jsx(Er,{children:i.jsx("div",{className:"container",children:i.jsxs(Wr,{children:[i.jsxs(Rr,{children:[i.jsx(Yt,{}),i.jsx(Pr,{})]}),i.jsxs(Fr,{children:[i.jsx(rr,{}),i.jsx(lr,{})]})]})})})};export{Ir as default};
