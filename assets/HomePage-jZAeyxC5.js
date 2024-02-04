import{u as b,d as j,j as i,a as K,s as it,b as Me,c as ie,e as ot,r as G,f as qe,M as ce,g as pe,I as B,h as st,i as ct,k as He,l as ut,m as dt,L as lt,n as L,o as ht,p as We,O as mt}from"./index-QEHuYtHk.js";import{B as Ue,a as Xe,b as Qe,c as ft,d as pt,e as gt}from"./BottleHomeDesk-WtSqiB-E.js";const bt=b.div``,xt=b.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,vt=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,wt=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${j.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,yt=b.div`
  display: flex;
  gap: 24px;
`,xe=b.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,kt=b.span`
  width: 190px;
  @media ${j.tablet} {
    width: auto;
  }
`,Mt=b.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,jt=b.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,Re=b.h3`
  font-size: 18px;
  font-weight: bold;
`,ve=b.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ot=b.label`
  display: flex;
  gap: 5px;
`,Fe=b.input`
  margin-right: 5px;
`,we=b.input`
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
`,Dt=b.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${j.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,St=b.div`
  height: 208px;
  margin-bottom: 30px;
  @media ${j.tablet} {
    height: 386px;
    margin-bottom: 16px;
  }
  @media ${j.desktop} {
    position: relative;
    height: 548px;
  }
`,Nt=b.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${j.desktop} {
    position: absolute;
  }
  
`,Pt=b.h2`
  font-size: 18px;
  line-height: 1.33;
`,Et=b.button`
  color: #8baeff;
  &:hover{
    text-decoration: underline;
    text-decoration-color:var(--secondary-orange);
    text-decoration-thickness:2px;
    font-size: 18px;
  }
`,Ct=b.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,Wt=b.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${j.tablet} {
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

  @media ${j.tablet} {
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
`;const Rt=b.span`
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
  top: ${t=>t.$dailyNorma?"-90px":"-80px"};
  left: ${t=>t.$dailyNorma&&"-170px"};
  left: ${t=>t.$waterAmount&&"125px"};
  top: ${t=>t.$waterAmount&&"0px"};
  width: ${t=>t.$waterAmount&&"140px"};
 
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

  @media ${j.tablet} {
    top: -70px;
    left: 25px;
    top: ${t=>t.$dailyNorma?"-70px":"-75px"};
    left: ${t=>t.$dailyNorma?"25px":"150px"};
    left: ${t=>t.$waterAmount&&"220px"};
    top: ${t=>t.$waterAmount&&"-70px"};
    width: ${t=>t.$waterAmount&&"200px"};
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
`,Ft=b.span`
  color: var(--primary-blue);
  font-size: 18px;
`,je=({message:t,...r})=>i.jsx(i.Fragment,{children:i.jsx(Rt,{$dailyNorma:r.dailyNorma,$waterAmount:r.waterAmount,children:i.jsx(Ft,{children:t})})}),_t=({onClose:t})=>{const r=K(it),{register:n,handleSubmit:e,watch:a,formState:{errors:o}}=Me({defaultValues:{weight:"",time:"",sex:r.gender||"woman",dailyNorma:r.dailyNorma||void 0},mode:"onChange"}),s=ie(),l=W=>{const{dailyNorma:N}=W;s(ot({dailyNorma:+N})),t()};let u;const d=Number(a("weight")),h=Number(a("time")),f=String(a("sex")),p=(W,N,x)=>x==="man"?String((W*.04+N*.6).toFixed(1))+"L":String((W*.03+N*.4).toFixed(1))+"L",S=(W,N)=>{if(W<20&&W!==0)return u=!0,"You couldn't be less than 20kg";if(N>24)return u=!0,"Day contains only 24H";if(N<0)return u=!0,"Time should be only positive integer"},v=p(d,h,f),C=S(d,h);return i.jsx(bt,{children:i.jsxs(xt,{onSubmit:e(l),children:[i.jsxs(vt,{children:[i.jsxs(wt,{children:[i.jsxs("p",{children:["For girl:",i.jsx(xe,{children:"V=(M*0,03) + (T*0,4)"})]}),i.jsxs("p",{children:["For man:",i.jsx(xe,{children:"V=(M*0,04) + (T*0,6)"})]})]}),i.jsx(Mt,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),i.jsxs(jt,{children:[i.jsx(Re,{children:"Calculate your rate:"}),i.jsxs(yt,{children:[i.jsxs("label",{children:[i.jsx(Fe,{...n("sex"),value:"woman",type:"radio"}),"For woman"]}),i.jsxs("label",{children:[i.jsx(Fe,{...n("sex"),value:"man",type:"radio"}),"For man"]})]}),i.jsxs(ve,{children:[i.jsx("span",{children:"Your weight in kilograms:"}),i.jsx(we,{...n("weight"),type:"number",placeholder:"0"})]}),i.jsxs(ve,{children:[i.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),i.jsx(we,{...n("time"),type:"number",placeholder:"0"})]}),i.jsxs(Ot,{children:[i.jsx(kt,{children:"The required amount of water in liters per day:"}),i.jsx(xe,{children:u?i.jsx(je,{message:C,dailyNorma:!0}):v})]})]}),i.jsx(Tt,{children:i.jsxs(ve,{children:[i.jsx(Re,{children:"Write down how much water you will drink:"}),i.jsx(we,{...n("dailyNorma",{required:!0}),type:"number",step:"any",min:0,max:15,placeholder:"0"}),o.dailyNorma&&i.jsx("span",{children:"This field is required"})]})}),i.jsx(Dt,{className:"btn",type:"submit",children:"Save"})]})})},At=()=>{const[t,r]=G.useState(!1),n=()=>{r(!t)},e=K(qe);return i.jsx(i.Fragment,{children:i.jsx(St,{children:i.jsxs(Nt,{children:[i.jsx(Pt,{children:"My daily norma"}),i.jsxs(Ct,{children:[i.jsxs(Wt,{children:[e," L"]}),t&&i.jsx(ce,{setVisible:n,title:"My Daily Norma",daily:!0,children:i.jsx(_t,{onClose:n})}),i.jsx(Et,{type:"button",onClick:n,children:"Edit"})]})]})})})};function z(t){const r=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&r==="[object Date]"?new t.constructor(+t):typeof t=="number"||r==="[object Number]"||typeof t=="string"||r==="[object String]"?new Date(t):new Date(NaN)}function ee(t,r){return t instanceof Date?new t.constructor(r):new Date(r)}function It(t,r){const n=+z(t);return ee(t,n+r)}const Ge=6048e5,Vt=864e5,$t=6e4;let Yt={};function ge(){return Yt}function ue(t,r){var l,u,d,h;const n=ge(),e=(r==null?void 0:r.weekStartsOn)??((u=(l=r==null?void 0:r.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,a=z(t),o=a.getDay(),s=(o<e?7:0)+o-e;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function fe(t){return ue(t,{weekStartsOn:1})}function Ke(t){const r=z(t),n=r.getFullYear(),e=ee(t,0);e.setFullYear(n+1,0,4),e.setHours(0,0,0,0);const a=fe(e),o=ee(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=fe(o);return r.getTime()>=a.getTime()?n+1:r.getTime()>=s.getTime()?n:n-1}function _e(t){const r=z(t);return r.setHours(0,0,0,0),r}function Ae(t){const r=z(t),n=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return n.setUTCFullYear(r.getFullYear()),+t-+n}function Bt(t,r){const n=_e(t),e=_e(r),a=+n-Ae(n),o=+e-Ae(e);return Math.round((a-o)/Vt)}function Lt(t){const r=Ke(t),n=ee(t,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),fe(n)}function he(t,r){return It(t,r*$t)}function zt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function qt(t){if(!zt(t)&&typeof t!="number")return!1;const r=z(t);return!isNaN(Number(r))}function Ht(t){const r=z(t),n=ee(t,0);return n.setFullYear(r.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Ut={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xt=(t,r,n)=>{let e;const a=Ut[t];return typeof a=="string"?e=a:r===1?e=a.one:e=a.other.replace("{{count}}",r.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+e:e+" ago":e};function ye(t){return(r={})=>{const n=r.width?String(r.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Qt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Gt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Kt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Jt={date:ye({formats:Qt,defaultWidth:"full"}),time:ye({formats:Gt,defaultWidth:"full"}),dateTime:ye({formats:Kt,defaultWidth:"full"})},Zt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},en=(t,r,n,e)=>Zt[t];function oe(t){return(r,n)=>{const e=n!=null&&n.context?String(n.context):"standalone";let a;if(e==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=t.formattingValues[l]||t.formattingValues[s]}else{const s=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[l]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(r):r;return a[o]}}const tn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},nn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},rn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},an={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},on={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},sn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},cn=(t,r)=>{const n=Number(t),e=n%100;if(e>20||e<10)switch(e%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},un={ordinalNumber:cn,era:oe({values:tn,defaultWidth:"wide"}),quarter:oe({values:nn,defaultWidth:"wide",argumentCallback:t=>t-1}),month:oe({values:rn,defaultWidth:"wide"}),day:oe({values:an,defaultWidth:"wide"}),dayPeriod:oe({values:on,defaultWidth:"wide",formattingValues:sn,defaultFormattingWidth:"wide"})};function se(t){return(r,n={})=>{const e=n.width,a=e&&t.matchPatterns[e]||t.matchPatterns[t.defaultMatchWidth],o=r.match(a);if(!o)return null;const s=o[0],l=e&&t.parsePatterns[e]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?ln(l,f=>f.test(s)):dn(l,f=>f.test(s));let d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;const h=r.slice(s.length);return{value:d,rest:h}}}function dn(t,r){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&r(t[n]))return n}function ln(t,r){for(let n=0;n<t.length;n++)if(r(t[n]))return n}function hn(t){return(r,n={})=>{const e=r.match(t.matchPattern);if(!e)return null;const a=e[0],o=r.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const l=r.slice(a.length);return{value:s,rest:l}}}const mn=/^(\d+)(th|st|nd|rd)?/i,fn=/\d+/i,pn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},gn={any:[/^b/i,/^(a|c)/i]},bn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},xn={any:[/1/i,/2/i,/3/i,/4/i]},vn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Mn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},jn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},On={ordinalNumber:hn({matchPattern:mn,parsePattern:fn,valueCallback:t=>parseInt(t,10)}),era:se({matchPatterns:pn,defaultMatchWidth:"wide",parsePatterns:gn,defaultParseWidth:"any"}),quarter:se({matchPatterns:bn,defaultMatchWidth:"wide",parsePatterns:xn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:se({matchPatterns:vn,defaultMatchWidth:"wide",parsePatterns:wn,defaultParseWidth:"any"}),day:se({matchPatterns:yn,defaultMatchWidth:"wide",parsePatterns:kn,defaultParseWidth:"any"}),dayPeriod:se({matchPatterns:Mn,defaultMatchWidth:"any",parsePatterns:jn,defaultParseWidth:"any"})},Tn={code:"en-US",formatDistance:Xt,formatLong:Jt,formatRelative:en,localize:un,match:On,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Dn(t){const r=z(t);return Bt(r,Ht(r))+1}function Sn(t){const r=z(t),n=+fe(r)-+Lt(r);return Math.round(n/Ge)+1}function Je(t,r){var h,f,p,S;const n=z(t),e=n.getFullYear(),a=ge(),o=(r==null?void 0:r.firstWeekContainsDate)??((f=(h=r==null?void 0:r.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??a.firstWeekContainsDate??((S=(p=a.locale)==null?void 0:p.options)==null?void 0:S.firstWeekContainsDate)??1,s=ee(t,0);s.setFullYear(e+1,0,o),s.setHours(0,0,0,0);const l=ue(s,r),u=ee(t,0);u.setFullYear(e,0,o),u.setHours(0,0,0,0);const d=ue(u,r);return n.getTime()>=l.getTime()?e+1:n.getTime()>=d.getTime()?e:e-1}function Nn(t,r){var l,u,d,h;const n=ge(),e=(r==null?void 0:r.firstWeekContainsDate)??((u=(l=r==null?void 0:r.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,a=Je(t,r),o=ee(t,0);return o.setFullYear(a,0,e),o.setHours(0,0,0,0),ue(o,r)}function Pn(t,r){const n=z(t),e=+ue(n,r)-+Nn(n,r);return Math.round(e/Ge)+1}function E(t,r){const n=t<0?"-":"",e=Math.abs(t).toString().padStart(r,"0");return n+e}const Z={y(t,r){const n=t.getFullYear(),e=n>0?n:1-n;return E(r==="yy"?e%100:e,r.length)},M(t,r){const n=t.getMonth();return r==="M"?String(n+1):E(n+1,2)},d(t,r){return E(t.getDate(),r.length)},a(t,r){const n=t.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,r){return E(t.getHours()%12||12,r.length)},H(t,r){return E(t.getHours(),r.length)},m(t,r){return E(t.getMinutes(),r.length)},s(t,r){return E(t.getSeconds(),r.length)},S(t,r){const n=r.length,e=t.getMilliseconds(),a=Math.trunc(e*Math.pow(10,n-3));return E(a,r.length)}},ae={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ie={G:function(t,r,n){const e=t.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return n.era(e,{width:"abbreviated"});case"GGGGG":return n.era(e,{width:"narrow"});case"GGGG":default:return n.era(e,{width:"wide"})}},y:function(t,r,n){if(r==="yo"){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return Z.y(t,r)},Y:function(t,r,n,e){const a=Je(t,e),o=a>0?a:1-a;if(r==="YY"){const s=o%100;return E(s,2)}return r==="Yo"?n.ordinalNumber(o,{unit:"year"}):E(o,r.length)},R:function(t,r){const n=Ke(t);return E(n,r.length)},u:function(t,r){const n=t.getFullYear();return E(n,r.length)},Q:function(t,r,n){const e=Math.ceil((t.getMonth()+1)/3);switch(r){case"Q":return String(e);case"QQ":return E(e,2);case"Qo":return n.ordinalNumber(e,{unit:"quarter"});case"QQQ":return n.quarter(e,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(e,{width:"wide",context:"formatting"})}},q:function(t,r,n){const e=Math.ceil((t.getMonth()+1)/3);switch(r){case"q":return String(e);case"qq":return E(e,2);case"qo":return n.ordinalNumber(e,{unit:"quarter"});case"qqq":return n.quarter(e,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(e,{width:"wide",context:"standalone"})}},M:function(t,r,n){const e=t.getMonth();switch(r){case"M":case"MM":return Z.M(t,r);case"Mo":return n.ordinalNumber(e+1,{unit:"month"});case"MMM":return n.month(e,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(e,{width:"wide",context:"formatting"})}},L:function(t,r,n){const e=t.getMonth();switch(r){case"L":return String(e+1);case"LL":return E(e+1,2);case"Lo":return n.ordinalNumber(e+1,{unit:"month"});case"LLL":return n.month(e,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(e,{width:"wide",context:"standalone"})}},w:function(t,r,n,e){const a=Pn(t,e);return r==="wo"?n.ordinalNumber(a,{unit:"week"}):E(a,r.length)},I:function(t,r,n){const e=Sn(t);return r==="Io"?n.ordinalNumber(e,{unit:"week"}):E(e,r.length)},d:function(t,r,n){return r==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Z.d(t,r)},D:function(t,r,n){const e=Dn(t);return r==="Do"?n.ordinalNumber(e,{unit:"dayOfYear"}):E(e,r.length)},E:function(t,r,n){const e=t.getDay();switch(r){case"E":case"EE":case"EEE":return n.day(e,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(e,{width:"short",context:"formatting"});case"EEEE":default:return n.day(e,{width:"wide",context:"formatting"})}},e:function(t,r,n,e){const a=t.getDay(),o=(a-e.weekStartsOn+8)%7||7;switch(r){case"e":return String(o);case"ee":return E(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,r,n,e){const a=t.getDay(),o=(a-e.weekStartsOn+8)%7||7;switch(r){case"c":return String(o);case"cc":return E(o,r.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,r,n){const e=t.getDay(),a=e===0?7:e;switch(r){case"i":return String(a);case"ii":return E(a,r.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(e,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(e,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(e,{width:"short",context:"formatting"});case"iiii":default:return n.day(e,{width:"wide",context:"formatting"})}},a:function(t,r,n){const a=t.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,r,n){const e=t.getHours();let a;switch(e===12?a=ae.noon:e===0?a=ae.midnight:a=e/12>=1?"pm":"am",r){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,r,n){const e=t.getHours();let a;switch(e>=17?a=ae.evening:e>=12?a=ae.afternoon:e>=4?a=ae.morning:a=ae.night,r){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,r,n){if(r==="ho"){let e=t.getHours()%12;return e===0&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return Z.h(t,r)},H:function(t,r,n){return r==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Z.H(t,r)},K:function(t,r,n){const e=t.getHours()%12;return r==="Ko"?n.ordinalNumber(e,{unit:"hour"}):E(e,r.length)},k:function(t,r,n){let e=t.getHours();return e===0&&(e=24),r==="ko"?n.ordinalNumber(e,{unit:"hour"}):E(e,r.length)},m:function(t,r,n){return r==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Z.m(t,r)},s:function(t,r,n){return r==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Z.s(t,r)},S:function(t,r){return Z.S(t,r)},X:function(t,r,n){const e=t.getTimezoneOffset();if(e===0)return"Z";switch(r){case"X":return $e(e);case"XXXX":case"XX":return ne(e);case"XXXXX":case"XXX":default:return ne(e,":")}},x:function(t,r,n){const e=t.getTimezoneOffset();switch(r){case"x":return $e(e);case"xxxx":case"xx":return ne(e);case"xxxxx":case"xxx":default:return ne(e,":")}},O:function(t,r,n){const e=t.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Ve(e,":");case"OOOO":default:return"GMT"+ne(e,":")}},z:function(t,r,n){const e=t.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Ve(e,":");case"zzzz":default:return"GMT"+ne(e,":")}},t:function(t,r,n){const e=Math.trunc(t.getTime()/1e3);return E(e,r.length)},T:function(t,r,n){const e=t.getTime();return E(e,r.length)}};function Ve(t,r=""){const n=t>0?"-":"+",e=Math.abs(t),a=Math.trunc(e/60),o=e%60;return o===0?n+String(a):n+String(a)+r+E(o,2)}function $e(t,r){return t%60===0?(t>0?"-":"+")+E(Math.abs(t)/60,2):ne(t,r)}function ne(t,r=""){const n=t>0?"-":"+",e=Math.abs(t),a=E(Math.trunc(e/60),2),o=E(e%60,2);return n+a+r+o}const Ye=(t,r)=>{switch(t){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},Ze=(t,r)=>{switch(t){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},En=(t,r)=>{const n=t.match(/(P+)(p+)?/)||[],e=n[1],a=n[2];if(!a)return Ye(t,r);let o;switch(e){case"P":o=r.dateTime({width:"short"});break;case"PP":o=r.dateTime({width:"medium"});break;case"PPP":o=r.dateTime({width:"long"});break;case"PPPP":default:o=r.dateTime({width:"full"});break}return o.replace("{{date}}",Ye(e,r)).replace("{{time}}",Ze(a,r))},Cn={p:Ze,P:En},Wn=/^D+$/,Rn=/^Y+$/,Fn=["D","DD","YY","YYYY"];function _n(t){return Wn.test(t)}function An(t){return Rn.test(t)}function In(t,r,n){const e=Vn(t,r,n);if(console.warn(e),Fn.includes(t))throw new RangeError(e)}function Vn(t,r,n){const e=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${r}\`) for formatting ${e} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $n=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bn=/^'([^]*?)'?$/,Ln=/''/g,zn=/[a-zA-Z]/;function Be(t,r,n){var h,f,p,S,v,C,W,N;const e=ge(),a=(n==null?void 0:n.locale)??e.locale??Tn,o=(n==null?void 0:n.firstWeekContainsDate)??((f=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??e.firstWeekContainsDate??((S=(p=e.locale)==null?void 0:p.options)==null?void 0:S.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((C=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:C.weekStartsOn)??e.weekStartsOn??((N=(W=e.locale)==null?void 0:W.options)==null?void 0:N.weekStartsOn)??0,l=z(t);if(!qt(l))throw new RangeError("Invalid time value");let u=r.match(Yn).map(x=>{const O=x[0];if(O==="p"||O==="P"){const q=Cn[O];return q(x,a.formatLong)}return x}).join("").match($n).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const O=x[0];if(O==="'")return{isToken:!1,value:qn(x)};if(Ie[O])return{isToken:!0,value:x};if(O.match(zn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:x}});a.localize.preprocessor&&(u=a.localize.preprocessor(l,u));const d={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return u.map(x=>{if(!x.isToken)return x.value;const O=x.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&An(O)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&_n(O))&&In(O,r,String(t));const q=Ie[O[0]];return q(l,O,a.localize,d)}).join("")}function qn(t){const r=t.match(Bn);return r?r[1].replace(Ln,"'"):t}function Hn(t){const r=z(t);return r.setMinutes(0,0,0),r}const et=()=>{const t=new Date;let r=t;const n=[],e=t.getMinutes();let a=e+(5-e%5);a>=60?(a-=60,r=he(Hn(he(t,60)),a)):r=he(t,a-e),n.push(Be(t,"hh:mm aa"));for(let o=0;o<24*12;o++)n.push(Be(r,"hh:mm aa")),r=he(r,5);return n},Un=b.div`
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

  @media ${j.tablet} {
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
`,Xn=b.li`
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
  .water-bottle-icon {
    width: 26px;
    height: 30px;
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

  @media ${j.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
    .water-bottle-icon {
      width: 36px;
      height: 39px;
    }
  }
`,tt=b.div`
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
  @media ${j.tablet} {
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

  @media ${j.desktop} {
  }
`,Qn=b.div`
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

  @media ${j.tablet} {
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
`,nt=({title:t,closeModal:r})=>{const{register:n,handleSubmit:e,watch:a,getValues:o,formState:{errors:s}}=Me({mode:"onChange"}),l=ie(),{entries:u}=K(pe),[d,h]=G.useState({count:u.length>0?u[u.length-1].waterVolume:0,inputValue:u.length>0?u[u.length-1].waterVolume:"0"}),f=et(),p=d.inputValue,S=String(a("time")),v=o("waterVolume"),C=S.slice(3,5),W=f[0].slice(3,5).toString(),N=R=>{d.count+R>=0&&h({inputValue:String(R),count:R})},x=R=>{const{value:I}=R.target;h(c=>({...c,inputValue:I}))},O=()=>{N(Number(d.inputValue))},q=R=>{R.key==="-"&&R.preventDefault()},J=R=>{const I={time:R.time,waterVolume:Number(d.inputValue)};s.waterVolume||I.waterVolume!==0&&Number(C)%5===0&&(H=w(C,v,W),l(st(I)),r())};let _=!1;const w=(R,I,c)=>{if(I===0)return _=!0,"The amount of water cannot be 0!";if(Number(R)%5!==0&&Number(c)%5!==0)return _=!0,"Please choose a time that is divisible by 5"};let H=w(C,Number(p),W);return i.jsxs(tt,{children:[i.jsx("h2",{className:"add-water-title",children:t}),i.jsxs("div",{className:"counter-box",children:[i.jsx("p",{className:"",children:"Amount of water:"}),i.jsxs("div",{className:"counter-btn-box",children:[i.jsx("button",{className:"counter-btn",onClick:()=>N(d.count-50),type:"button",children:i.jsx(B,{className:"icon-minus",id:"minus"})}),i.jsxs("span",{className:"water-amount-span",children:[d.count,"ml"]}),i.jsx("button",{className:"counter-btn",onClick:()=>N(d.count+50),type:"button",children:i.jsx(B,{className:"icon-plus",id:"plus"})})]})]}),i.jsxs("form",{className:"add-water-form",onSubmit:e(J),children:[i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"popover",children:"Recording time:"}),_&&i.jsx(je,{message:H,waterAmount:!0}),i.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:f.map(R=>i.jsx("option",{value:R,children:R},R))})]}),i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),i.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:d.inputValue,onChange:x,onBlur:O,onKeyPress:q,className:"water-select"})]}),i.jsxs("div",{className:"btn-container",children:[i.jsx("span",{className:"water-amount",children:`${d.count}ml`}),i.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},Gn=({closeModal:t,_id:r})=>{const n=ie(),e=()=>{t()},a=o=>{n(ct(o)),t()};return i.jsxs(Qn,{children:[i.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),i.jsxs("div",{className:"delete-btn-box",children:[i.jsx("button",{className:"cancel-btn",type:"button",onClick:e,children:"Cancel"}),i.jsx("button",{className:"delete-btn",type:"button",onClick:()=>a(r),children:"Delete"})]})]})},Kn=({title:t,closeModal:r,id:n})=>{const{register:e,handleSubmit:a,getValues:o,formState:{errors:s}}=Me({mode:"onChange"}),l=ie(),{entries:u}=K(pe),d=u.find(w=>w._id===n),[h,f]=G.useState({count:d?d.waterVolume:0,inputValue:d?d.waterVolume:"0"}),p=et(),S=h.inputValue,v=o("waterVolume"),C=w=>{h.count+w>=0&&f({inputValue:String(w),count:w})},W=w=>{const{value:H}=w.target;f(R=>({...R,inputValue:H}))},N=()=>{C(Number(h.inputValue))},x=w=>{w.key==="-"&&w.preventDefault()},O=w=>{const H={time:w.time,waterVolume:Number(h.inputValue)};s.waterVolume||H.waterVolume!==0&&(_=J(v),n&&l(He({...H,id:n})),r())};let q=!1;const J=w=>{if(w===0)return q=!0,"The amount of water cannot be 0!"};let _=J(Number(S));return i.jsxs(tt,{children:[i.jsxs("div",{className:"water-card",children:[i.jsx(B,{className:"water-glass-icon",id:"water"}),i.jsxs("p",{className:"water-amount-card",children:[d==null?void 0:d.waterVolume," ml"]}),i.jsx("p",{className:"time",children:d==null?void 0:d.time})]}),i.jsx("h2",{className:"add-water-title",children:t}),i.jsxs("div",{className:"counter-box",children:[i.jsx("p",{className:"",children:"Amount of water:"}),i.jsxs("div",{className:"counter-btn-box",children:[i.jsx("button",{className:"counter-btn",onClick:()=>C(h.count-50),type:"button",children:i.jsx(B,{className:"icon-minus",id:"minus"})}),i.jsxs("span",{className:"water-amount-span",children:[h.count,"ml"]}),i.jsx("button",{className:"counter-btn",onClick:()=>C(h.count+50),type:"button",children:i.jsx(B,{className:"icon-plus",id:"plus"})})]})]}),i.jsxs("form",{className:"add-water-form",onSubmit:a(O),children:[i.jsxs("label",{className:"water-label",children:[i.jsx("span",{children:"Recording time:"}),q&&i.jsx(je,{message:_,waterAmount:!0}),i.jsx("select",{...e("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:p.map(w=>i.jsx("option",{value:w,selected:w===(d==null?void 0:d.time),children:w},w))})]}),i.jsxs("label",{className:"water-label",children:[i.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),i.jsx("input",{...e("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:h.inputValue,onChange:W,onBlur:N,onKeyPress:x,className:"water-select"})]}),i.jsxs("div",{className:"btn-container",children:[i.jsxs("span",{className:"water-amount",children:[d==null?void 0:d.waterVolume,"ml"]}),i.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},Jn=({_id:t,waterVolume:r,time:n})=>{const[e,a]=G.useState(!1),[o,s]=G.useState(!1),l=ie(),u=h=>{l(He(h))},d=h=>h>=1500?i.jsx(B,{className:"water-bottle-icon",id:"barrel"}):h>=500?i.jsx(B,{className:"water-bottle-icon",id:"bottle"}):i.jsx(B,{className:"water-glass-icon",id:"water"});return i.jsxs(Xn,{children:[i.jsxs("div",{className:"water-info",children:[d(r),i.jsxs("p",{className:"water-amount-card",children:[r," ml"]}),i.jsx("p",{className:"time",children:n})]}),i.jsxs("div",{className:"edit-delete-btn-box",children:[i.jsx("button",{type:"button",className:"edit-btn",onClick:()=>a(!0),children:i.jsx(B,{className:"edit-water-icon",id:"pencil"})}),i.jsx("button",{type:"button",className:"delete-btn",onClick:()=>{s(!0)},children:i.jsx(B,{className:"delete-water-icon",id:"delete"})})]}),e&&i.jsx(ce,{setVisible:a,title:"Edit the entered amount of water",children:i.jsx(Kn,{title:"Correct entered data:",handleUpdateWater:u,closeModal:()=>{a(!1)},id:t})}),o&&i.jsx(ce,{setVisible:s,title:"Delete water",delete:!0,children:i.jsx(Gn,{title:"Delete entry?",show:!1,closeModal:()=>{s(!1)},_id:t})})]})},Zn=()=>{const[t,r]=G.useState(!1),{entries:n}=K(pe),e=K(ut),a=K(dt),o=()=>{r(!1)};return i.jsxs(Un,{children:[i.jsx("h3",{className:"water-title",children:"Today"}),e&&!a&&i.jsx(lt,{}),n.length===0?i.jsx("p",{className:"water-empty",children:"No notes yet"}):i.jsx("ul",{className:"water-list",children:n.length>0&&n.map(({_id:s,waterVolume:l,time:u})=>i.jsx(Jn,{_id:s,waterVolume:l,time:u},s))}),i.jsxs("button",{className:"add-water-btn",onClick:()=>r(!0),children:[i.jsx(B,{className:"water-plus-icon",id:"plus"}),"Add water"]}),t&&i.jsx(ce,{setVisible:r,title:"Add water",children:i.jsx(nt,{title:"Choose a value:",show:!1,closeModal:o})})]})};var ke={},Oe={},Te={},be={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Direction=void 0,function(r){r.Right="to right",r.Left="to left",r.Down="to bottom",r.Up="to top"}(t.Direction||(t.Direction={}))})(be);(function(t){var r=L&&L.__spreadArray||function(c,m,g){if(g||arguments.length===2)for(var k=0,M=m.length,y;k<M;k++)(y||!(k in m))&&(y||(y=Array.prototype.slice.call(m,0,k)),y[k]=m[k]);return c.concat(y||Array.prototype.slice.call(m))};Object.defineProperty(t,"__esModule",{value:!0}),t.useThumbOverlap=t.assertUnreachable=t.voidFn=t.getTrackBackground=t.replaceAt=t.schd=t.translate=t.getClosestThumbIndex=t.translateThumbs=t.getPaddingAndBorder=t.getMargin=t.checkInitialOverlap=t.checkValuesAgainstBoundaries=t.checkBoundaries=t.isVertical=t.relativeValue=t.normalizeValue=t.isStepDivisible=t.isTouchEvent=t.getStepDecimals=void 0;var n=G,e=be,a=function(c){var m=c.toString().split(".")[1];return m?m.length:0};t.getStepDecimals=a;function o(c){return c.touches&&c.touches.length||c.changedTouches&&c.changedTouches.length}t.isTouchEvent=o;function s(c,m,g){var k=(m-c)/g,M=8,y=Number(k.toFixed(M));return parseInt(y.toString(),10)===y}t.isStepDivisible=s;function l(c,m,g,k,M,y,P){var D=1e11;if(c=Math.round(c*D)/D,!y){var $=P[m-1],F=P[m+1];if($&&$>c)return $;if(F&&F<c)return F}if(c>k)return k;if(c<g)return g;var U=Math.floor(c*D-g*D)%Math.floor(M*D),Y=Math.floor(c*D-Math.abs(U)),X=U===0?c:Y/D,V=Math.abs(U/D)<M/2?X:X+M,Q=(0,t.getStepDecimals)(M);return parseFloat(V.toFixed(Q))}t.normalizeValue=l;function u(c,m,g){return(c-m)/(g-m)}t.relativeValue=u;function d(c){return c===e.Direction.Up||c===e.Direction.Down}t.isVertical=d;function h(c,m,g){if(m>=g)throw new RangeError("min (".concat(m,") is equal/bigger than max (").concat(g,")"));if(c<m)throw new RangeError("value (".concat(c,") is smaller than min (").concat(m,")"));if(c>g)throw new RangeError("value (".concat(c,") is bigger than max (").concat(g,")"))}t.checkBoundaries=h;function f(c,m,g){return c<m?m:c>g?g:c}t.checkValuesAgainstBoundaries=f;function p(c){if(!(c.length<2)&&!c.slice(1).every(function(m,g){return c[g]<=m}))throw new RangeError("values={[".concat(c,"]} needs to be sorted when allowOverlap={false}"))}t.checkInitialOverlap=p;function S(c){var m=window.getComputedStyle(c);return{top:parseInt(m["margin-top"],10),bottom:parseInt(m["margin-bottom"],10),left:parseInt(m["margin-left"],10),right:parseInt(m["margin-right"],10)}}t.getMargin=S;function v(c){var m=window.getComputedStyle(c);return{top:parseInt(m["padding-top"],10)+parseInt(m["border-top-width"],10),bottom:parseInt(m["padding-bottom"],10)+parseInt(m["border-bottom-width"],10),left:parseInt(m["padding-left"],10)+parseInt(m["border-left-width"],10),right:parseInt(m["padding-right"],10)+parseInt(m["border-right-width"],10)}}t.getPaddingAndBorder=v;function C(c,m,g){var k=g?-1:1;c.forEach(function(M,y){return N(M,k*m[y].x,m[y].y)})}t.translateThumbs=C;function W(c,m,g,k){for(var M=0,y=I(c[0],m,g,k),P=1;P<c.length;P++){var D=I(c[P],m,g,k);D<y&&(y=D,M=P)}return M}t.getClosestThumbIndex=W;function N(c,m,g){c.style.transform="translate(".concat(m,"px, ").concat(g,"px)")}t.translate=N;var x=function(c){var m=[],g=null,k=function(){for(var M=[],y=0;y<arguments.length;y++)M[y]=arguments[y];m=M,!g&&(g=requestAnimationFrame(function(){g=null,c.apply(void 0,m)}))};return k};t.schd=x;function O(c,m,g){var k=c.slice(0);return k[m]=g,k}t.replaceAt=O;function q(c){var m=c.values,g=c.colors,k=c.min,M=c.max,y=c.direction,P=y===void 0?e.Direction.Right:y,D=c.rtl,$=D===void 0?!1:D;$&&P===e.Direction.Right?P=e.Direction.Left:$&&e.Direction.Left&&(P=e.Direction.Right);var F=m.slice(0).sort(function(Y,X){return Y-X}).map(function(Y){return(Y-k)/(M-k)*100}),U=F.reduce(function(Y,X,V){return"".concat(Y,", ").concat(g[V]," ").concat(X,"%, ").concat(g[V+1]," ").concat(X,"%")},"");return"linear-gradient(".concat(P,", ").concat(g[0]," 0%").concat(U,", ").concat(g[g.length-1]," 100%)")}t.getTrackBackground=q;function J(){}t.voidFn=J;function _(c){throw new Error("Didn't expect to get here")}t.assertUnreachable=_;var w=function(c,m,g,k,M){M===void 0&&(M=function(P){return P});var y=Math.ceil(r([c],Array.from(c.children),!0).reduce(function(P,D){var $=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(g)&&D.childElementCount===0){var F=D.cloneNode(!0);F.innerHTML=M(m.toFixed(k)),F.style.visibility="hidden",document.body.appendChild(F),$=Math.ceil(F.getBoundingClientRect().width),document.body.removeChild(F)}return $>P?$:P},c.getBoundingClientRect().width));return y},H=function(c,m,g,k,M,y,P){P===void 0&&(P=function(F){return F});var D=[],$=function(F){var U=w(g[F],k[F],M,y,P),Y=m[F].x;m.forEach(function(X,V){var Q=X.x,te=w(g[V],k[V],M,y,P);F!==V&&(Y>=Q&&Y<=Q+te||Y+U>=Q&&Y+U<=Q+te)&&(D.includes(V)||(D.push(F),D.push(V),D=r(r([],D,!0),[F,V],!1),$(V)))})};return $(c),Array.from(new Set(D.sort()))},R=function(c,m,g,k,M,y){k===void 0&&(k=.1),M===void 0&&(M=" - "),y===void 0&&(y=function(V){return V});var P=(0,t.getStepDecimals)(k),D=(0,n.useState)({}),$=D[0],F=D[1],U=(0,n.useState)(y(m[g].toFixed(P))),Y=U[0],X=U[1];return(0,n.useEffect)(function(){if(c){var V=c.getThumbs();if(V.length<1)return;var Q={},te=c.getOffsets(),de=H(g,te,V,m,M,P,y),De=y(m[g].toFixed(P));if(de.length){var le=de.reduce(function(re,Pe,Ee,Ce){return re.length?r(r([],re,!0),[te[Ce[Ee]].x],!1):[te[Ce[Ee]].x]},[]);if(Math.min.apply(Math,le)===te[g].x){var Se=[];de.forEach(function(re){Se.push(m[re].toFixed(P))}),De=Array.from(new Set(Se.sort(function(re,Pe){return parseFloat(re)-parseFloat(Pe)}))).map(y).join(M);var rt=Math.min.apply(Math,le),Ne=Math.max.apply(Math,le),at=V[de[le.indexOf(Ne)]].getBoundingClientRect().width;Q.left="".concat(Math.abs(rt-(Ne+at))/2,"px"),Q.transform="translate(-50%, 0)"}else Q.visibility="hidden"}X(De),F(Q)}},[c,m]),[Y,$]};t.useThumbOverlap=R;function I(c,m,g,k){var M=c.getBoundingClientRect(),y=M.left,P=M.top,D=M.width,$=M.height;return d(k)?Math.abs(g-(P+$/2)):Math.abs(m-(y+D/2))}})(Te);var er=L&&L.__extends||function(){var t=function(r,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])},t(r,n)};return function(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(r,n);function e(){this.constructor=r}r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}}(),tr=L&&L.__createBinding||(Object.create?function(t,r,n,e){e===void 0&&(e=n);var a=Object.getOwnPropertyDescriptor(r,n);(!a||("get"in a?!r.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return r[n]}}),Object.defineProperty(t,e,a)}:function(t,r,n,e){e===void 0&&(e=n),t[e]=r[n]}),nr=L&&L.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),rr=L&&L.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&tr(r,t,n);return nr(r,t),r},Le=L&&L.__spreadArray||function(t,r,n){if(n||arguments.length===2)for(var e=0,a=r.length,o;e<a;e++)(o||!(e in r))&&(o||(o=Array.prototype.slice.call(r,0,e)),o[e]=r[e]);return t.concat(o||Array.prototype.slice.call(r))};Object.defineProperty(Oe,"__esModule",{value:!0});var me=rr(G),T=Te,A=be,ar=["ArrowRight","ArrowUp","k","PageUp"],ir=["ArrowLeft","ArrowDown","j","PageDown"],or=function(t){er(r,t);function r(n){var e=t.call(this,n)||this;if(e.trackRef=me.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(a,o){return o}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var a=e.props,o=a.direction,s=a.values,l=a.min,u=a.max,d=e.trackRef.current,h=d.getBoundingClientRect(),f=(0,T.getPaddingAndBorder)(d);return e.getThumbs().map(function(p,S){var v={x:0,y:0},C=p.getBoundingClientRect(),W=(0,T.getMargin)(p);switch(o){case A.Direction.Right:return v.x=(W.left+f.left)*-1,v.y=((C.height-h.height)/2+f.top)*-1,v.x+=h.width*(0,T.relativeValue)(s[S],l,u)-C.width/2,v;case A.Direction.Left:return v.x=(W.right+f.right)*-1,v.y=((C.height-h.height)/2+f.top)*-1,v.x+=h.width-h.width*(0,T.relativeValue)(s[S],l,u)-C.width/2,v;case A.Direction.Up:return v.x=((C.width-h.width)/2+W.left+f.left)*-1,v.y=-f.left,v.y+=h.height-h.height*(0,T.relativeValue)(s[S],l,u)-C.height/2,v;case A.Direction.Down:return v.x=((C.width-h.width)/2+W.left+f.left)*-1,v.y=-f.left,v.y+=h.height*(0,T.relativeValue)(s[S],l,u)-C.height/2,v;default:return(0,T.assertUnreachable)(o)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(a){return a.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(a){return e.getThumbs().findIndex(function(o){return o===a.target||o.contains(a.target)})},e.addTouchEvents=function(a){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(a){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(a){var o;if(a.button===0)if(a.persist(),a.preventDefault(),e.addMouseEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var u;return(u=l.current)===null||u===void 0?void 0:u.contains(a.target)}))return;e.setState({draggedTrackPos:[a.clientX,a.clientY]},function(){return e.onMove(a.clientX,a.clientY)})}else{var s=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),a.clientX,a.clientY,e.props.direction);(o=e.thumbRefs[s].current)===null||o===void 0||o.focus(),e.setState({draggedThumbIndex:s},function(){return e.onMove(a.clientX,a.clientY)})}},e.onResize=function(){(0,T.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(a){var o;if(a.persist(),e.addTouchEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var u;return(u=l.current)===null||u===void 0?void 0:u.contains(a.target)}))return;e.setState({draggedTrackPos:[a.touches[0].clientX,a.touches[0].clientY]},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}else{var s=(0,T.getClosestThumbIndex)(e.thumbRefs.map(function(l){return l.current}),a.touches[0].clientX,a.touches[0].clientY,e.props.direction);(o=e.thumbRefs[s].current)===null||o===void 0||o.focus(),e.setState({draggedThumbIndex:s},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}},e.onMouseOrTouchStart=function(a){if(!e.props.disabled){var o=(0,T.isTouchEvent)(a);if(!(!o&&a.button!==0)){var s=e.getTargetIndex(a);s!==-1&&(o?e.addTouchEvents(a):e.addMouseEvents(a),e.setState({draggedThumbIndex:s,thumbZIndexes:e.state.thumbZIndexes.map(function(l,u){return u===s?Math.max.apply(Math,e.state.thumbZIndexes):l<=e.state.thumbZIndexes[s]?l:l-1})}))}}},e.onMouseMove=function(a){a.preventDefault(),e.onMove(a.clientX,a.clientY)},e.onTouchMove=function(a){a.preventDefault(),e.onMove(a.touches[0].clientX,a.touches[0].clientY)},e.onKeyDown=function(a){var o=e.props,s=o.values,l=o.onChange,u=o.step,d=o.rtl,h=o.direction,f=e.state.isChanged,p=e.getTargetIndex(a.nativeEvent),S=d||h===A.Direction.Left||h===A.Direction.Down?-1:1;p!==-1&&(ar.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:p,isChanged:!0}),l((0,T.replaceAt)(s,p,e.normalizeValue(s[p]+S*(a.key==="PageUp"?u*10:u),p)))):ir.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:p,isChanged:!0}),l((0,T.replaceAt)(s,p,e.normalizeValue(s[p]-S*(a.key==="PageDown"?u*10:u),p)))):a.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){f&&e.fireOnFinalChange()}):f&&e.fireOnFinalChange())},e.onKeyUp=function(a){var o=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){o&&e.fireOnFinalChange()})},e.onMove=function(a,o){var s=e.state,l=s.draggedThumbIndex,u=s.draggedTrackPos,d=e.props,h=d.direction,f=d.min,p=d.max,S=d.onChange,v=d.values,C=d.step,W=d.rtl;if(l===-1&&u[0]===-1&&u[1]===-1)return null;var N=e.trackRef.current;if(!N)return null;var x=N.getBoundingClientRect(),O=(0,T.isVertical)(h)?x.height:x.width;if(u[0]!==-1&&u[1]!==-1){var q=a-u[0],J=o-u[1],_=0;switch(h){case A.Direction.Right:case A.Direction.Left:_=q/O*(p-f);break;case A.Direction.Down:case A.Direction.Up:_=J/O*(p-f);break;default:(0,T.assertUnreachable)(h)}if(W&&(_*=-1),Math.abs(_)>=C/2){for(var w=0;w<e.thumbRefs.length;w++){if(v[w]===p&&Math.sign(_)===1||v[w]===f&&Math.sign(_)===-1)return;var H=v[w]+_;H>p?_=p-v[w]:H<f&&(_=f-v[w])}for(var R=v.slice(0),w=0;w<e.thumbRefs.length;w++)R=(0,T.replaceAt)(R,w,e.normalizeValue(v[w]+_,w));e.setState({draggedTrackPos:[a,o]}),S(R)}}else{var I=0;switch(h){case A.Direction.Right:I=(a-x.left)/O*(p-f)+f;break;case A.Direction.Left:I=(O-(a-x.left))/O*(p-f)+f;break;case A.Direction.Down:I=(o-x.top)/O*(p-f)+f;break;case A.Direction.Up:I=(O-(o-x.top))/O*(p-f)+f;break;default:(0,T.assertUnreachable)(h)}W&&(I=p+f-I),Math.abs(v[l]-I)>=C/2&&S((0,T.replaceAt)(v,l,e.normalizeValue(I,l)))}},e.normalizeValue=function(a,o){var s=e.props,l=s.min,u=s.max,d=s.step,h=s.allowOverlap,f=s.values;return(0,T.normalizeValue)(a,o,l,u,d,h,f)},e.onEnd=function(a){if(a.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var a=e.props,o=a.onFinalChange,s=a.values;o&&o(s)},e.updateMarkRefs=function(a){if(!a.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(a.max-a.min)/e.props.step,e.markRefs=[];for(var o=0;o<e.numOfMarks+1;o++)e.markRefs[o]=me.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var a=window.getComputedStyle(e.trackRef.current),o=parseInt(a.width,10),s=parseInt(a.height,10),l=parseInt(a.paddingLeft,10),u=parseInt(a.paddingTop,10),d=[],h=0;h<e.numOfMarks+1;h++){var f=9999,p=9999;if(e.markRefs[h].current){var S=e.markRefs[h].current.getBoundingClientRect();f=S.height,p=S.width}e.props.direction===A.Direction.Left||e.props.direction===A.Direction.Right?d.push([Math.round(o/e.numOfMarks*h+l-p/2),-Math.round((f-s)/2)]):d.push([Math.round(s/e.numOfMarks*h+u-f/2),-Math.round((p-o)/2)])}e.setState({markOffsets:d})}},n.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,T.schd)(e.onMouseMove),e.schdOnTouchMove=(0,T.schd)(e.onTouchMove),e.schdOnEnd=(0,T.schd)(e.onEnd),e.thumbRefs=n.values.map(function(){return me.createRef()}),e.updateMarkRefs(n),e}return r.prototype.componentDidMount=function(){var n=this,e=this.props,a=e.values,o=e.min,s=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,T.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,T.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),a.forEach(function(l){(0,T.isStepDivisible)(o,l,s)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},r.prototype.componentDidUpdate=function(n,e){var a=this.props,o=a.max,s=a.min,l=a.step,u=a.values,d=a.rtl;(n.max!==o||n.min!==s||n.step!==l)&&this.updateMarkRefs(this.props),(0,T.translateThumbs)(this.getThumbs(),this.getOffsets(),d),(n.max!==o||n.min!==s||n.step!==l||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),u.forEach(function(h){(0,T.isStepDivisible)(s,h,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},r.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},r.prototype.render=function(){var n=this,e=this.props,a=e.renderTrack,o=e.renderThumb,s=e.renderMark,l=s===void 0?function(){return null}:s,u=e.values,d=e.min,h=e.max,f=e.allowOverlap,p=e.disabled,S=this.state,v=S.draggedThumbIndex,C=S.thumbZIndexes,W=S.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:v>-1?"grabbing":this.props.draggableTrack?(0,T.isVertical)(this.props.direction)?"ns-resize":"ew-resize":u.length===1&&!p?"pointer":"inherit"},onMouseDown:p?T.voidFn:this.onMouseDownTrack,onTouchStart:p?T.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:p,children:Le(Le([],W.map(function(N,x,O){return l({props:{style:n.props.direction===A.Direction.Left||n.props.direction===A.Direction.Right?{position:"absolute",left:"".concat(N[0],"px"),marginTop:"".concat(N[1],"px")}:{position:"absolute",top:"".concat(N[0],"px"),marginLeft:"".concat(N[1],"px")},key:"mark".concat(x),ref:n.markRefs[x]},index:x})}),!0),u.map(function(N,x){var O=n.state.draggedThumbIndex===x;return o({index:x,value:N,isDragged:O,props:{style:{position:"absolute",zIndex:C[x],cursor:p?"inherit":O?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:x,tabIndex:p?void 0:0,"aria-valuemax":f?h:u[x+1]||h,"aria-valuemin":f?d:u[x-1]||d,"aria-valuenow":N,draggable:!1,ref:n.thumbRefs[x],role:"slider",onKeyDown:p?T.voidFn:n.onKeyDown,onKeyUp:p?T.voidFn:n.onKeyUp}})}),!0)})},r.defaultProps={step:1,direction:A.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},r}(me.Component);Oe.default=or;(function(t){var r=L&&L.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkValuesAgainstBoundaries=t.relativeValue=t.useThumbOverlap=t.Direction=t.getTrackBackground=t.Range=void 0;var n=r(Oe);t.Range=n.default;var e=Te;Object.defineProperty(t,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(t,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(t,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(t,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var a=be;Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return a.Direction}})})(ke);const sr=b.div`
  width: 280px;
  @media ${j.tablet} {
    width: 704px;
  }
  @media ${j.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,cr=b.div`
  @media ${j.tablet} {
    display: flex;
    gap: 16px;
  }
  @media ${j.desktop} {
    display: flex;
    gap: 24px;
  }
`,ur=b.div`
  width: 280px;
  @media ${j.tablet} {
    width: 356px;
  }
  @media ${j.desktop} {
    width: 391px;
  }
`,dr=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,lr=b.h3`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primary-blue);

  @media ${j.tablet} {
    padding-bottom: 16px;
  }
`,hr=b.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${j.tablet} {
    width: 325px;
  }
  @media ${j.desktop} {
    width: 360px;
  }
`,mr=b.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,fr=b.div`
  position: relative;
  top: 24px;
`,pr=b.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,gr=b.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,ze=b.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,br=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${j.tablet} {
    width: 336px;
  }
  @media ${j.desktop} {
    width: 178px;
  }
`,xr=b.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${j.tablet} {
    height: 44px;
  }
`,vr=()=>{const t=K(qe),{entries:r}=K(pe),n=r.reduce((e,{waterVolume:a})=>e+=a,0);return t?Math.floor(n/(t*1e3)*100):0},wr=()=>{const[t,r]=G.useState(!1),n=vr(),e=n>100?100:n,a=()=>{r(!1)};return i.jsxs(i.Fragment,{children:[i.jsx(sr,{children:i.jsxs(cr,{children:[i.jsxs(ur,{children:[i.jsx(lr,{children:"Today"}),i.jsx(dr,{children:i.jsx(ke.Range,{disabled:!0,min:0,max:100,values:[e],onChange:()=>{},renderTrack:({props:o,children:s})=>i.jsx(hr,{...o,style:{...o.style,background:ke.getTrackBackground({values:[e],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:s}),renderThumb:({props:o})=>G.createElement(mr,{...o,key:o.key},i.jsx(fr,{children:i.jsxs(pr,{children:[e,"%"]})}))})}),i.jsxs(gr,{children:[e<=7?i.jsx("span",{children:" "}):i.jsx(ze,{children:"0%"}),e>=85?i.jsx("span",{children:" "}):i.jsx(ze,{children:"100%"})]})]}),i.jsx(br,{className:"hover",children:i.jsxs(xr,{className:"btn",onClick:()=>r(!0),children:[i.jsx(B,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),t&&i.jsx(ce,{setVisible:r,title:"Add water",children:i.jsx(nt,{title:"Choose a value",show:!1,closeModal:a})})]})},yr=b.section`
  background-image: url("${Ue}");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 70px;
  background-position-y: 100px;
  @media ${j.tablet} {
    background-image: url("${Xe}");
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${j.desktop} {
    background-image: url("${Qe}");
  }
`,kr=b.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${j.desktop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
`,Mr=b.div`
  background-image: url("${ft}");
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 10px;
  background-position-y: 90px;
  padding: 24px 8px;

  @media ${j.tablet} {
    background-image: url("${pt}");
    background-position-y: 5px;
    background-position-x: 90px;
    padding-top: 0px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${j.desktop} {
    background-image: url("${gt}");
    background-position-y: 0px;
    background-position-x: -50px;
    height: 548px;
  }
`,jr=b.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 40px;
  height: auto;

  background-color: var(--secondary-white);
  background-image: url("${Ue}");
  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${j.tablet} {
    padding: 32px 24px;
    background-image: url("${Xe}");
  }

  @media ${j.desktop} {
    width: 592px;
    max-height: 688px;
    background-image: url("${Qe}");
    margin-bottom: 0px;
  }
  .chart-container {
    width: 246px;
    height: 500px;
    @media ${j.tablet} {
      width: 646px;
      height: 264px;
    }
    @media ${j.desktop} {
      width: 544px;
      height: 320px;
    }
  }
  .mont-box {
    display: flex;
    align-items: center;
    gap: 8px;
    a:hover {
      cursor: inherit;
      scale: 1.2;
    }
  }
  .month-icon {
    width: 32px;
    height: 32px;
    fill: var(--primary-blue);

    &:hover {
      fill: var(--secondary-orange);
    }
  }
`,Dr=()=>{const t=ie();return G.useEffect(()=>{t(ht())},[t]),i.jsx(yr,{children:i.jsx("div",{className:"container",children:i.jsxs(kr,{children:[i.jsxs(Mr,{children:[i.jsx(At,{}),i.jsx(wr,{})]}),i.jsxs(jr,{children:[i.jsx(Zn,{}),i.jsxs("div",{className:"mont-box",children:[i.jsx(We,{to:"/home",children:i.jsx(B,{className:"month-icon",id:"date"})}),i.jsx(We,{to:"/home/graf",children:i.jsx(B,{className:"month-icon",id:"chart"})})]}),i.jsx(mt,{})]})]})})})};export{Dr as default};
