import{u as L,d as _,a as fe,s as di,b as ot,c as Te,j as o,e as ci,r as F,f as At,M as Se,g as We,I as z,h as ui,i as fi,k as zt,l as pi,m as hi,L as mi,n as K,R as Y,o as gi,p as wt,O as vi}from"./index-0GFhhXdJ.js";import{P as lt}from"./Popover-OBMg91Jl.js";const xi=L.div``,wi=L.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`,bi=L.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,yi=L.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${_.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`,Si=L.div`
  display: flex;
  gap: 24px;
`,Ye=L.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`,Ti=L.span`
  width: 190px;
  @media ${_.tablet} {
    width: auto;
  }
`,Ei=L.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`,Mi=L.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,bt=L.h3`
  font-size: 18px;
  font-weight: bold;
`,qe=L.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ji=L.label`
  display: flex;
  gap: 5px;
`,yt=L.input`
  margin-right: 5px;
`,Xe=L.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`,Ci=L.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Pi=L.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${_.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,ki=L.div`
  margin-bottom: 232px;
  @media ${_.tablet} {
    height: 386px;
    margin-bottom: 16px;
  }
  @media ${_.desktop} {
    position: relative;
    height: 591px;
  }
`,Oi=L.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${_.desktop} {
    position: absolute;
  }
`,Di=L.h3`
  font-size: 18px;
  line-height: 1.33;
`,Ii=L.button`
  color: #8baeff;
  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--secondary-orange);
    text-decoration-thickness: 2px;
    font-size: 18px;
    color: var(--secondary-orange);
  }
`,Li=L.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`,Ni=L.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${_.tablet} {
    font-size: 24px;
  }
`;L.span`
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

  @media ${_.tablet} {
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
`;L.span`
  color: var(--primary-blue);
  font-size: 18px;
`;const _i=({onClose:t})=>{const e=fe(di),{register:i,handleSubmit:n,watch:r,formState:{errors:s}}=ot({defaultValues:{weight:"",time:"",sex:e.gender||"woman",dailyNorma:e.dailyNorma||void 0},mode:"onChange"}),l=Te(),d=T=>{const{dailyNorma:u}=T;l(ci({dailyNorma:+u})),t()};let a;const f=Number(r("weight")),c=Number(r("time")),p=String(r("sex")),m=(T,u,h)=>h==="man"?String((T*.04+u*.6).toFixed(1))+"L":String((T*.03+u*.4).toFixed(1))+"L",v=(T,u)=>{if(T<20&&T!==0)return a=!0,"You couldn't be less than 20kg";if(u>24)return a=!0,"Day contains only 24H";if(u<0)return a=!0,"Time should be only positive integer"},g=m(f,c,p),b=v(f,c);return o.jsx(xi,{children:o.jsxs(wi,{onSubmit:n(d),children:[o.jsxs(bi,{children:[o.jsxs(yi,{children:[o.jsxs("p",{children:["For girl:",o.jsx(Ye,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs("p",{children:["For man:",o.jsx(Ye,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(Ei,{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),o.jsxs(Mi,{children:[o.jsx(bt,{children:"Calculate your rate:"}),o.jsxs(Si,{children:[o.jsxs("label",{children:[o.jsx(yt,{...i("sex"),value:"woman",type:"radio"}),"For woman"]}),o.jsxs("label",{children:[o.jsx(yt,{...i("sex"),value:"man",type:"radio"}),"For man"]})]}),o.jsxs(qe,{children:[o.jsx("span",{children:"Your weight in kilograms:"}),o.jsx(Xe,{...i("weight"),type:"number",placeholder:"0"})]}),o.jsxs(qe,{children:[o.jsx("span",{children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),o.jsx(Xe,{...i("time"),type:"number",placeholder:"0"})]}),o.jsxs(ji,{children:[o.jsx(Ti,{children:"The required amount of water in liters per day:"}),o.jsx(Ye,{children:a?o.jsx(lt,{message:b,dailyNorma:!0}):g})]})]}),o.jsx(Ci,{children:o.jsxs(qe,{children:[o.jsx(bt,{children:"Write down how much water you will drink:"}),o.jsx(Xe,{...i("dailyNorma",{required:!0}),type:"number",step:"any",min:0,max:15,placeholder:"0"}),s.dailyNorma&&o.jsx("span",{children:"This field is required"})]})}),o.jsx(Pi,{className:"btn",type:"submit",children:"Save"})]})})},Ai=()=>{const[t,e]=F.useState(!1),i=()=>{e(!t)},n=fe(At);return o.jsx(o.Fragment,{children:o.jsx(ki,{children:o.jsxs(Oi,{className:"first-step",children:[o.jsx(Di,{children:"My daily norma"}),o.jsxs(Li,{children:[o.jsxs(Ni,{children:[n," L"]}),t&&o.jsx(Se,{setVisible:i,title:"My Daily Norma",daily:!0,children:o.jsx(_i,{onClose:i})}),o.jsx(Ii,{type:"button",onClick:i,children:"Edit"})]})]})})})};function Z(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function me(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function zi(t,e){const i=+Z(t);return me(t,i+e)}const Rt=6048e5,Ri=864e5,Fi=6e4;let Bi={};function Ge(){return Bi}function ke(t,e){var d,a,f,c;const i=Ge(),n=(e==null?void 0:e.weekStartsOn)??((a=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:a.weekStartsOn)??i.weekStartsOn??((c=(f=i.locale)==null?void 0:f.options)==null?void 0:c.weekStartsOn)??0,r=Z(t),s=r.getDay(),l=(s<n?7:0)+s-n;return r.setDate(r.getDate()-l),r.setHours(0,0,0,0),r}function ze(t){return ke(t,{weekStartsOn:1})}function Ft(t){const e=Z(t),i=e.getFullYear(),n=me(t,0);n.setFullYear(i+1,0,4),n.setHours(0,0,0,0);const r=ze(n),s=me(t,0);s.setFullYear(i,0,4),s.setHours(0,0,0,0);const l=ze(s);return e.getTime()>=r.getTime()?i+1:e.getTime()>=l.getTime()?i:i-1}function St(t){const e=Z(t);return e.setHours(0,0,0,0),e}function Tt(t){const e=Z(t),i=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return i.setUTCFullYear(e.getFullYear()),+t-+i}function Vi(t,e){const i=St(t),n=St(e),r=+i-Tt(i),s=+n-Tt(n);return Math.round((r-s)/Ri)}function $i(t){const e=Ft(t),i=me(t,0);return i.setFullYear(e,0,4),i.setHours(0,0,0,0),ze(i)}function Ie(t,e){return zi(t,e*Fi)}function Wi(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Gi(t){if(!Wi(t)&&typeof t!="number")return!1;const e=Z(t);return!isNaN(Number(e))}function Hi(t){const e=Z(t),i=me(t,0);return i.setFullYear(e.getFullYear(),0,1),i.setHours(0,0,0,0),i}const Yi={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qi=(t,e,i)=>{let n;const r=Yi[t];return typeof r=="string"?n=r:e===1?n=r.one:n=r.other.replace("{{count}}",e.toString()),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+n:n+" ago":n};function Ue(t){return(e={})=>{const i=e.width?String(e.width):t.defaultWidth;return t.formats[i]||t.formats[t.defaultWidth]}}const Xi={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ui={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ki={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qi={date:Ue({formats:Xi,defaultWidth:"full"}),time:Ue({formats:Ui,defaultWidth:"full"}),dateTime:Ue({formats:Ki,defaultWidth:"full"})},Ji={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zi=(t,e,i,n)=>Ji[t];function Me(t){return(e,i)=>{const n=i!=null&&i.context?String(i.context):"standalone";let r;if(n==="formatting"&&t.formattingValues){const l=t.defaultFormattingWidth||t.defaultWidth,d=i!=null&&i.width?String(i.width):l;r=t.formattingValues[d]||t.formattingValues[l]}else{const l=t.defaultWidth,d=i!=null&&i.width?String(i.width):t.defaultWidth;r=t.values[d]||t.values[l]}const s=t.argumentCallback?t.argumentCallback(e):e;return r[s]}}const en={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},sn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},an={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},on=(t,e)=>{const i=Number(t),n=i%100;if(n>20||n<10)switch(n%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},ln={ordinalNumber:on,era:Me({values:en,defaultWidth:"wide"}),quarter:Me({values:tn,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Me({values:nn,defaultWidth:"wide"}),day:Me({values:rn,defaultWidth:"wide"}),dayPeriod:Me({values:sn,defaultWidth:"wide",formattingValues:an,defaultFormattingWidth:"wide"})};function je(t){return(e,i={})=>{const n=i.width,r=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;const l=s[0],d=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],a=Array.isArray(d)?cn(d,p=>p.test(l)):dn(d,p=>p.test(l));let f;f=t.valueCallback?t.valueCallback(a):a,f=i.valueCallback?i.valueCallback(f):f;const c=e.slice(l.length);return{value:f,rest:c}}}function dn(t,e){for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&e(t[i]))return i}function cn(t,e){for(let i=0;i<t.length;i++)if(e(t[i]))return i}function un(t){return(e,i={})=>{const n=e.match(t.matchPattern);if(!n)return null;const r=n[0],s=e.match(t.parsePattern);if(!s)return null;let l=t.valueCallback?t.valueCallback(s[0]):s[0];l=i.valueCallback?i.valueCallback(l):l;const d=e.slice(r.length);return{value:l,rest:d}}}const fn=/^(\d+)(th|st|nd|rd)?/i,pn=/\d+/i,hn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mn={any:[/^b/i,/^(a|c)/i]},gn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vn={any:[/1/i,/2/i,/3/i,/4/i]},xn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Sn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Tn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},En={ordinalNumber:un({matchPattern:fn,parsePattern:pn,valueCallback:t=>parseInt(t,10)}),era:je({matchPatterns:hn,defaultMatchWidth:"wide",parsePatterns:mn,defaultParseWidth:"any"}),quarter:je({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:vn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:je({matchPatterns:xn,defaultMatchWidth:"wide",parsePatterns:wn,defaultParseWidth:"any"}),day:je({matchPatterns:bn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any"}),dayPeriod:je({matchPatterns:Sn,defaultMatchWidth:"any",parsePatterns:Tn,defaultParseWidth:"any"})},Mn={code:"en-US",formatDistance:qi,formatLong:Qi,formatRelative:Zi,localize:ln,match:En,options:{weekStartsOn:0,firstWeekContainsDate:1}};function jn(t){const e=Z(t);return Vi(e,Hi(e))+1}function Cn(t){const e=Z(t),i=+ze(e)-+$i(e);return Math.round(i/Rt)+1}function Bt(t,e){var c,p,m,v;const i=Z(t),n=i.getFullYear(),r=Ge(),s=(e==null?void 0:e.firstWeekContainsDate)??((p=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((v=(m=r.locale)==null?void 0:m.options)==null?void 0:v.firstWeekContainsDate)??1,l=me(t,0);l.setFullYear(n+1,0,s),l.setHours(0,0,0,0);const d=ke(l,e),a=me(t,0);a.setFullYear(n,0,s),a.setHours(0,0,0,0);const f=ke(a,e);return i.getTime()>=d.getTime()?n+1:i.getTime()>=f.getTime()?n:n-1}function Pn(t,e){var d,a,f,c;const i=Ge(),n=(e==null?void 0:e.firstWeekContainsDate)??((a=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:a.firstWeekContainsDate)??i.firstWeekContainsDate??((c=(f=i.locale)==null?void 0:f.options)==null?void 0:c.firstWeekContainsDate)??1,r=Bt(t,e),s=me(t,0);return s.setFullYear(r,0,n),s.setHours(0,0,0,0),ke(s,e)}function kn(t,e){const i=Z(t),n=+ke(i,e)-+Pn(i,e);return Math.round(n/Rt)+1}function W(t,e){const i=t<0?"-":"",n=Math.abs(t).toString().padStart(e,"0");return i+n}const pe={y(t,e){const i=t.getFullYear(),n=i>0?i:1-i;return W(e==="yy"?n%100:n,e.length)},M(t,e){const i=t.getMonth();return e==="M"?String(i+1):W(i+1,2)},d(t,e){return W(t.getDate(),e.length)},a(t,e){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];case"aaaa":default:return i==="am"?"a.m.":"p.m."}},h(t,e){return W(t.getHours()%12||12,e.length)},H(t,e){return W(t.getHours(),e.length)},m(t,e){return W(t.getMinutes(),e.length)},s(t,e){return W(t.getSeconds(),e.length)},S(t,e){const i=e.length,n=t.getMilliseconds(),r=Math.trunc(n*Math.pow(10,i-3));return W(r,e.length)}},be={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Et={G:function(t,e,i){const n=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return i.era(n,{width:"abbreviated"});case"GGGGG":return i.era(n,{width:"narrow"});case"GGGG":default:return i.era(n,{width:"wide"})}},y:function(t,e,i){if(e==="yo"){const n=t.getFullYear(),r=n>0?n:1-n;return i.ordinalNumber(r,{unit:"year"})}return pe.y(t,e)},Y:function(t,e,i,n){const r=Bt(t,n),s=r>0?r:1-r;if(e==="YY"){const l=s%100;return W(l,2)}return e==="Yo"?i.ordinalNumber(s,{unit:"year"}):W(s,e.length)},R:function(t,e){const i=Ft(t);return W(i,e.length)},u:function(t,e){const i=t.getFullYear();return W(i,e.length)},Q:function(t,e,i){const n=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return W(n,2);case"Qo":return i.ordinalNumber(n,{unit:"quarter"});case"QQQ":return i.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,i){const n=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return W(n,2);case"qo":return i.ordinalNumber(n,{unit:"quarter"});case"qqq":return i.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,i){const n=t.getMonth();switch(e){case"M":case"MM":return pe.M(t,e);case"Mo":return i.ordinalNumber(n+1,{unit:"month"});case"MMM":return i.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,i){const n=t.getMonth();switch(e){case"L":return String(n+1);case"LL":return W(n+1,2);case"Lo":return i.ordinalNumber(n+1,{unit:"month"});case"LLL":return i.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,i,n){const r=kn(t,n);return e==="wo"?i.ordinalNumber(r,{unit:"week"}):W(r,e.length)},I:function(t,e,i){const n=Cn(t);return e==="Io"?i.ordinalNumber(n,{unit:"week"}):W(n,e.length)},d:function(t,e,i){return e==="do"?i.ordinalNumber(t.getDate(),{unit:"date"}):pe.d(t,e)},D:function(t,e,i){const n=jn(t);return e==="Do"?i.ordinalNumber(n,{unit:"dayOfYear"}):W(n,e.length)},E:function(t,e,i){const n=t.getDay();switch(e){case"E":case"EE":case"EEE":return i.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(n,{width:"short",context:"formatting"});case"EEEE":default:return i.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,i,n){const r=t.getDay(),s=(r-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return W(s,2);case"eo":return i.ordinalNumber(s,{unit:"day"});case"eee":return i.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(r,{width:"short",context:"formatting"});case"eeee":default:return i.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,i,n){const r=t.getDay(),s=(r-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return W(s,e.length);case"co":return i.ordinalNumber(s,{unit:"day"});case"ccc":return i.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(r,{width:"narrow",context:"standalone"});case"cccccc":return i.day(r,{width:"short",context:"standalone"});case"cccc":default:return i.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,i){const n=t.getDay(),r=n===0?7:n;switch(e){case"i":return String(r);case"ii":return W(r,e.length);case"io":return i.ordinalNumber(r,{unit:"day"});case"iii":return i.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(n,{width:"short",context:"formatting"});case"iiii":default:return i.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,i){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,i){const n=t.getHours();let r;switch(n===12?r=be.noon:n===0?r=be.midnight:r=n/12>=1?"pm":"am",e){case"b":case"bb":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,i){const n=t.getHours();let r;switch(n>=17?r=be.evening:n>=12?r=be.afternoon:n>=4?r=be.morning:r=be.night,e){case"B":case"BB":case"BBB":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,i){if(e==="ho"){let n=t.getHours()%12;return n===0&&(n=12),i.ordinalNumber(n,{unit:"hour"})}return pe.h(t,e)},H:function(t,e,i){return e==="Ho"?i.ordinalNumber(t.getHours(),{unit:"hour"}):pe.H(t,e)},K:function(t,e,i){const n=t.getHours()%12;return e==="Ko"?i.ordinalNumber(n,{unit:"hour"}):W(n,e.length)},k:function(t,e,i){let n=t.getHours();return n===0&&(n=24),e==="ko"?i.ordinalNumber(n,{unit:"hour"}):W(n,e.length)},m:function(t,e,i){return e==="mo"?i.ordinalNumber(t.getMinutes(),{unit:"minute"}):pe.m(t,e)},s:function(t,e,i){return e==="so"?i.ordinalNumber(t.getSeconds(),{unit:"second"}):pe.s(t,e)},S:function(t,e){return pe.S(t,e)},X:function(t,e,i){const n=t.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return jt(n);case"XXXX":case"XX":return ve(n);case"XXXXX":case"XXX":default:return ve(n,":")}},x:function(t,e,i){const n=t.getTimezoneOffset();switch(e){case"x":return jt(n);case"xxxx":case"xx":return ve(n);case"xxxxx":case"xxx":default:return ve(n,":")}},O:function(t,e,i){const n=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Mt(n,":");case"OOOO":default:return"GMT"+ve(n,":")}},z:function(t,e,i){const n=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Mt(n,":");case"zzzz":default:return"GMT"+ve(n,":")}},t:function(t,e,i){const n=Math.trunc(t.getTime()/1e3);return W(n,e.length)},T:function(t,e,i){const n=t.getTime();return W(n,e.length)}};function Mt(t,e=""){const i=t>0?"-":"+",n=Math.abs(t),r=Math.trunc(n/60),s=n%60;return s===0?i+String(r):i+String(r)+e+W(s,2)}function jt(t,e){return t%60===0?(t>0?"-":"+")+W(Math.abs(t)/60,2):ve(t,e)}function ve(t,e=""){const i=t>0?"-":"+",n=Math.abs(t),r=W(Math.trunc(n/60),2),s=W(n%60,2);return i+r+e+s}const Ct=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Vt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},On=(t,e)=>{const i=t.match(/(P+)(p+)?/)||[],n=i[1],r=i[2];if(!r)return Ct(t,e);let s;switch(n){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Ct(n,e)).replace("{{time}}",Vt(r,e))},Dn={p:Vt,P:On},In=/^D+$/,Ln=/^Y+$/,Nn=["D","DD","YY","YYYY"];function _n(t){return In.test(t)}function An(t){return Ln.test(t)}function zn(t,e,i){const n=Rn(t,e,i);if(console.warn(n),Nn.includes(t))throw new RangeError(n)}function Rn(t,e,i){const n=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${n} to the input \`${i}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Fn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Bn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Vn=/^'([^]*?)'?$/,$n=/''/g,Wn=/[a-zA-Z]/;function Pt(t,e,i){var c,p,m,v,g,b,T,u;const n=Ge(),r=(i==null?void 0:i.locale)??n.locale??Mn,s=(i==null?void 0:i.firstWeekContainsDate)??((p=(c=i==null?void 0:i.locale)==null?void 0:c.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(m=n.locale)==null?void 0:m.options)==null?void 0:v.firstWeekContainsDate)??1,l=(i==null?void 0:i.weekStartsOn)??((b=(g=i==null?void 0:i.locale)==null?void 0:g.options)==null?void 0:b.weekStartsOn)??n.weekStartsOn??((u=(T=n.locale)==null?void 0:T.options)==null?void 0:u.weekStartsOn)??0,d=Z(t);if(!Gi(d))throw new RangeError("Invalid time value");let a=e.match(Bn).map(h=>{const x=h[0];if(x==="p"||x==="P"){const E=Dn[x];return E(h,r.formatLong)}return h}).join("").match(Fn).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const x=h[0];if(x==="'")return{isToken:!1,value:Gn(h)};if(Et[x])return{isToken:!0,value:h};if(x.match(Wn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:h}});r.localize.preprocessor&&(a=r.localize.preprocessor(d,a));const f={firstWeekContainsDate:s,weekStartsOn:l,locale:r};return a.map(h=>{if(!h.isToken)return h.value;const x=h.value;(!(i!=null&&i.useAdditionalWeekYearTokens)&&An(x)||!(i!=null&&i.useAdditionalDayOfYearTokens)&&_n(x))&&zn(x,e,String(t));const E=Et[x[0]];return E(d,x,r.localize,f)}).join("")}function Gn(t){const e=t.match(Vn);return e?e[1].replace($n,"'"):t}function Hn(t){const e=Z(t);return e.setMinutes(0,0,0),e}const $t=()=>{const t=new Date;let e=t;const i=[],n=t.getMinutes();let r=n+(5-n%5);r>=60?(r-=60,e=Ie(Hn(Ie(t,60)),r)):e=Ie(t,r-n),i.push(Pt(t,"hh:mm aa"));for(let s=0;s<24*12;s++)i.push(Pt(e,"hh:mm aa")),e=Ie(e,5);return i},Yn=L.div`
  .water-section {
    min-width: 544px;
  }

  .water-title {
    font-size: 26px;
    font-weight: var(--medium-font-weight);
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
    stroke: var(--primary-blue);
  }

  .add-water-btn {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
  }
  .add-water-btn:hover,
  .add-water-btn:focus {
    .water-plus-icon {
      stroke: var(--secondary-orange);
    }
    color: var(--secondary-orange);

    transform: scale(1.1);
    text-decoration-thickness: 2px;

    text-decoration: underline;
    text-decoration-color: var(--secondary-orange);
    text-decoration-thickness: 2px;
  }

  @media ${_.tablet} {
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
`,qn=L.li`
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
    width: 65px;
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
  .delete-btn-card {
    position: relative;
  }

  .edit-btn:hover::after,
  .edit-btn:focus::after,
  .delete-btn-card:hover::after,
  .delete-btn-card:focus::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 16px;
    height: 1px;
    background-color: var(--secondary-red);
    /* transition: width 1s ease-in; */
  }

  .edit-btn:hover::after,
  .edit-btn:focus::after {
    background-color: var(--secondary-blue);
    /* width: 100%; */
  }
  .edit-delete-btn-box {
    display: flex;
    gap: 18px;
  }

  @media ${_.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
    .water-bottle-icon {
      width: 36px;
      height: 39px;
    }
  }
`,Wt=L.div`
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
    stroke: var(--primary-blue);
  }

  .counter-btn {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    border: 1px solid var(--secondary-blue);
  }
  .counter-btn:hover,
  .counter-btn:focus {
    box-shadow: var(--btn-box-shadow);
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
    &:hover,
    &:focus {
      box-shadow: var(--btn-box-shadow);
    }
    &:active {
      cursor: inherit;
    }
  }

  @media ${_.tablet} {
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

  @media ${_.desktop} {
  }
`,Xn=L.div`
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

    font-size: 18px;
    font-weight: var(--medium-font-weight);

    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-blue);
    background-color: var(--secondary-light-blue);
    &:hover,
    &:focus {
      box-shadow: var(--btn-box-shadow);
    }
    &:active {
      cursor: inherit;
    }
  }

  .delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: var(--medium-font-weight);

    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-white);
    background-color: var(--secondary-red);

    &:hover,
    &:focus {
      box-shadow: var(--btn-box-shadow);
    }
    &:active {
      cursor: inherit;
    }
  }

  .delete-btn-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  @media ${_.tablet} {
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
`,Gt=({title:t,closeModal:e})=>{const{register:i,handleSubmit:n,watch:r,getValues:s,formState:{errors:l}}=ot({mode:"onChange"}),d=Te(),{entries:a}=fe(We),[f,c]=F.useState({count:a.length>0?a[a.length-1].waterVolume:0,inputValue:a.length>0?a[a.length-1].waterVolume:"0"}),p=$t(),m=f.inputValue,v=String(r("time")),g=s("waterVolume"),b=v.slice(3,5),T=p[0].slice(3,5).toString(),u=j=>{f.count+j>=0&&c({inputValue:String(j),count:j})},h=j=>{const{value:M}=j.target;c(w=>({...w,inputValue:M}))},x=()=>{u(Number(f.inputValue))},E=j=>{j.key==="-"&&j.preventDefault()},C=j=>{const M={time:j.time,waterVolume:Number(f.inputValue)};l.waterVolume||M.waterVolume!==0&&Number(b)%5===0&&(k=D(b,g,T),d(ui(M)),e())};let O=!1;const D=(j,M,w)=>{if(M===0)return O=!0,"The amount of water cannot be 0!";if(Number(j)%5!==0&&Number(w)%5!==0)return O=!0,"Please choose a time that is divisible by 5"};let k=D(b,Number(m),T);return o.jsxs(Wt,{children:[o.jsx("h2",{className:"add-water-title",children:t}),o.jsxs("div",{className:"counter-box",children:[o.jsx("p",{className:"",children:"Amount of water:"}),o.jsxs("div",{className:"counter-btn-box",children:[o.jsx("button",{className:"counter-btn",onClick:()=>u(f.count-50),type:"button",children:o.jsx(z,{className:"icon-minus",id:"minus"})}),o.jsxs("span",{className:"water-amount-span",children:[f.count,"ml"]}),o.jsx("button",{className:"counter-btn",onClick:()=>u(f.count+50),type:"button",children:o.jsx(z,{className:"icon-plus",id:"plus"})})]})]}),o.jsxs("form",{className:"add-water-form",onSubmit:n(C),children:[o.jsxs("label",{className:"water-label",children:[o.jsx("span",{className:"popover",children:"Recording time:"}),O&&o.jsx(lt,{message:k,waterAmount:!0}),o.jsx("select",{...i("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:p.map(j=>o.jsx("option",{value:j,children:j},j))})]}),o.jsxs("label",{className:"water-label",children:[o.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),o.jsx("input",{...i("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:f.inputValue,onChange:h,onBlur:x,onKeyPress:E,placeholder:"0",className:"water-select"})]}),o.jsxs("div",{className:"btn-container",children:[o.jsx("span",{className:"water-amount",children:`${f.count}ml`}),o.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},Un=({closeModal:t,_id:e})=>{const i=Te(),n=()=>{t()},r=s=>{i(fi(s)),t()};return o.jsxs(Xn,{children:[o.jsx("p",{className:"delete-title",children:"Are you sure you want to delete the entry?"}),o.jsxs("div",{className:"delete-btn-box",children:[o.jsx("button",{className:"cancel-btn",type:"button",onClick:n,children:"Cancel"}),o.jsx("button",{className:"delete-btn",type:"button",onClick:()=>r(e),children:"Delete"})]})]})},Kn=({title:t,closeModal:e,id:i})=>{const{register:n,handleSubmit:r,getValues:s,formState:{errors:l}}=ot({mode:"onChange"}),d=Te(),{entries:a}=fe(We),f=a.find(D=>D._id===i),[c,p]=F.useState({count:f?f.waterVolume:0,inputValue:f?f.waterVolume:"0"}),m=$t(),v=c.inputValue,g=s("waterVolume"),b=D=>{c.count+D>=0&&p({inputValue:String(D),count:D})},T=D=>{const{value:k}=D.target;p(j=>({...j,inputValue:k}))},u=()=>{b(Number(c.inputValue))},h=D=>{D.key==="-"&&D.preventDefault()},x=D=>{const k={time:D.time,waterVolume:Number(c.inputValue)};l.waterVolume||k.waterVolume!==0&&(O=C(g),i&&d(zt({...k,id:i})),e())};let E=!1;const C=D=>{if(D===0)return E=!0,"The amount of water cannot be 0!"};let O=C(Number(v));return o.jsxs(Wt,{children:[o.jsxs("div",{className:"water-card",children:[o.jsx(z,{className:"water-glass-icon",id:"water"}),o.jsxs("p",{className:"water-amount-card",children:[f==null?void 0:f.waterVolume," ml"]}),o.jsx("p",{className:"time",children:f==null?void 0:f.time})]}),o.jsx("h2",{className:"add-water-title",children:t}),o.jsxs("div",{className:"counter-box",children:[o.jsx("p",{className:"",children:"Amount of water:"}),o.jsxs("div",{className:"counter-btn-box",children:[o.jsx("button",{className:"counter-btn",onClick:()=>b(c.count-50),type:"button",children:o.jsx(z,{className:"icon-minus",id:"minus"})}),o.jsxs("span",{className:"water-amount-span",children:[c.count,"ml"]}),o.jsx("button",{className:"counter-btn",onClick:()=>b(c.count+50),type:"button",children:o.jsx(z,{className:"icon-plus",id:"plus"})})]})]}),o.jsxs("form",{className:"add-water-form",onSubmit:r(x),children:[o.jsxs("label",{className:"water-label",children:[o.jsx("span",{children:"Recording time:"}),E&&o.jsx(lt,{message:O,waterAmount:!0}),o.jsx("select",{...n("time",{required:!0}),name:"time",className:"water-select","aria-label":"Time",children:m.map(D=>o.jsx("option",{value:D,selected:D===(f==null?void 0:f.time),children:D},D))})]}),o.jsxs("label",{className:"water-label",children:[o.jsx("span",{className:"enter-water-span",children:"Enter the value of water used:"}),o.jsx("input",{...n("waterVolume",{required:!0}),type:"number",min:0,max:5e3,step:50,name:"waterVolume",value:c.inputValue,onChange:T,onBlur:u,onKeyPress:h,className:"water-select"})]}),o.jsxs("div",{className:"btn-container",children:[o.jsxs("span",{className:"water-amount",children:[f==null?void 0:f.waterVolume,"ml"]}),o.jsx("button",{type:"submit",className:"save-btn",children:"Save"})]})]})]})},Qn=({_id:t,waterVolume:e,time:i})=>{const[n,r]=F.useState(!1),[s,l]=F.useState(!1),d=Te(),a=c=>{d(zt(c))},f=c=>c>=1500?o.jsx(z,{className:"water-bottle-icon",id:"barrel"}):c>=500?o.jsx(z,{className:"water-bottle-icon",id:"bottle"}):o.jsx(z,{className:"water-glass-icon",id:"water"});return o.jsxs(qn,{children:[o.jsxs("div",{className:"water-info",children:[f(e),o.jsxs("p",{className:"water-amount-card",children:[e," ml"]}),o.jsx("p",{className:"time",children:i})]}),o.jsxs("div",{className:"edit-delete-btn-box",children:[o.jsx("button",{type:"button",className:"edit-btn",onClick:()=>r(!0),children:o.jsx(z,{className:"edit-water-icon",id:"pencil"})}),o.jsx("button",{type:"button",className:"delete-btn-card",onClick:()=>{l(!0)},children:o.jsx(z,{className:"delete-water-icon",id:"delete"})})]}),n&&o.jsx(Se,{setVisible:r,title:"Edit the entered amount of water",children:o.jsx(Kn,{title:"Correct entered data:",handleUpdateWater:a,closeModal:()=>{r(!1)},id:t})}),s&&o.jsx(Se,{setVisible:l,title:"Delete water",delete:!0,children:o.jsx(Un,{title:"Delete entry?",show:!1,closeModal:()=>{l(!1)},_id:t})})]})},Jn=()=>{const[t,e]=F.useState(!1),{entries:i}=fe(We),n=fe(pi),r=fe(hi),s=()=>{e(!1)};return o.jsxs(Yn,{children:[o.jsx("h2",{className:"water-title",children:"Today"}),n&&!r&&o.jsx(mi,{}),i.length===0?o.jsx("p",{className:"water-empty",children:"No notes yet"}):o.jsx("ul",{className:"water-list",children:i.length>0&&i.map(({_id:l,waterVolume:d,time:a})=>o.jsx(Qn,{_id:l,waterVolume:d,time:a},l))}),o.jsxs("button",{className:"add-water-btn",onClick:()=>e(!0),children:[o.jsx(z,{className:"water-plus-icon",id:"plus"}),"Add water"]}),t&&o.jsx(Se,{setVisible:e,title:"Add water",children:o.jsx(Gt,{title:"Choose a value:",show:!1,closeModal:s})})]})};var it={},dt={},ct={},He={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Direction=void 0,function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"}(t.Direction||(t.Direction={}))})(He);(function(t){var e=K&&K.__spreadArray||function(w,y,S){if(S||arguments.length===2)for(var P=0,I=y.length,N;P<I;P++)(N||!(P in y))&&(N||(N=Array.prototype.slice.call(y,0,P)),N[P]=y[P]);return w.concat(N||Array.prototype.slice.call(y))};Object.defineProperty(t,"__esModule",{value:!0}),t.useThumbOverlap=t.assertUnreachable=t.voidFn=t.getTrackBackground=t.replaceAt=t.schd=t.translate=t.getClosestThumbIndex=t.translateThumbs=t.getPaddingAndBorder=t.getMargin=t.checkInitialOverlap=t.checkValuesAgainstBoundaries=t.checkBoundaries=t.isVertical=t.relativeValue=t.normalizeValue=t.isStepDivisible=t.isTouchEvent=t.getStepDecimals=void 0;var i=F,n=He,r=function(w){var y=w.toString().split(".")[1];return y?y.length:0};t.getStepDecimals=r;function s(w){return w.touches&&w.touches.length||w.changedTouches&&w.changedTouches.length}t.isTouchEvent=s;function l(w,y,S){var P=(y-w)/S,I=8,N=Number(P.toFixed(I));return parseInt(N.toString(),10)===N}t.isStepDivisible=l;function d(w,y,S,P,I,N,V){var A=1e11;if(w=Math.round(w*A)/A,!N){var R=V[y-1],B=V[y+1];if(R&&R>w)return R;if(B&&B<w)return B}if(w>P)return P;if(w<S)return S;var Q=Math.floor(w*A-S*A)%Math.floor(I*A),U=Math.floor(w*A-Math.abs(Q)),ie=Q===0?w:U/A,q=Math.abs(Q/A)<I/2?ie:ie+I,ne=(0,t.getStepDecimals)(I);return parseFloat(q.toFixed(ne))}t.normalizeValue=d;function a(w,y,S){return(w-y)/(S-y)}t.relativeValue=a;function f(w){return w===n.Direction.Up||w===n.Direction.Down}t.isVertical=f;function c(w,y,S){if(y>=S)throw new RangeError("min (".concat(y,") is equal/bigger than max (").concat(S,")"));if(w<y)throw new RangeError("value (".concat(w,") is smaller than min (").concat(y,")"));if(w>S)throw new RangeError("value (".concat(w,") is bigger than max (").concat(S,")"))}t.checkBoundaries=c;function p(w,y,S){return w<y?y:w>S?S:w}t.checkValuesAgainstBoundaries=p;function m(w){if(!(w.length<2)&&!w.slice(1).every(function(y,S){return w[S]<=y}))throw new RangeError("values={[".concat(w,"]} needs to be sorted when allowOverlap={false}"))}t.checkInitialOverlap=m;function v(w){var y=window.getComputedStyle(w);return{top:parseInt(y["margin-top"],10),bottom:parseInt(y["margin-bottom"],10),left:parseInt(y["margin-left"],10),right:parseInt(y["margin-right"],10)}}t.getMargin=v;function g(w){var y=window.getComputedStyle(w);return{top:parseInt(y["padding-top"],10)+parseInt(y["border-top-width"],10),bottom:parseInt(y["padding-bottom"],10)+parseInt(y["border-bottom-width"],10),left:parseInt(y["padding-left"],10)+parseInt(y["border-left-width"],10),right:parseInt(y["padding-right"],10)+parseInt(y["border-right-width"],10)}}t.getPaddingAndBorder=g;function b(w,y,S){var P=S?-1:1;w.forEach(function(I,N){return u(I,P*y[N].x,y[N].y)})}t.translateThumbs=b;function T(w,y,S,P){for(var I=0,N=M(w[0],y,S,P),V=1;V<w.length;V++){var A=M(w[V],y,S,P);A<N&&(N=A,I=V)}return I}t.getClosestThumbIndex=T;function u(w,y,S){w.style.transform="translate(".concat(y,"px, ").concat(S,"px)")}t.translate=u;var h=function(w){var y=[],S=null,P=function(){for(var I=[],N=0;N<arguments.length;N++)I[N]=arguments[N];y=I,!S&&(S=requestAnimationFrame(function(){S=null,w.apply(void 0,y)}))};return P};t.schd=h;function x(w,y,S){var P=w.slice(0);return P[y]=S,P}t.replaceAt=x;function E(w){var y=w.values,S=w.colors,P=w.min,I=w.max,N=w.direction,V=N===void 0?n.Direction.Right:N,A=w.rtl,R=A===void 0?!1:A;R&&V===n.Direction.Right?V=n.Direction.Left:R&&n.Direction.Left&&(V=n.Direction.Right);var B=y.slice(0).sort(function(U,ie){return U-ie}).map(function(U){return(U-P)/(I-P)*100}),Q=B.reduce(function(U,ie,q){return"".concat(U,", ").concat(S[q]," ").concat(ie,"%, ").concat(S[q+1]," ").concat(ie,"%")},"");return"linear-gradient(".concat(V,", ").concat(S[0]," 0%").concat(Q,", ").concat(S[S.length-1]," 100%)")}t.getTrackBackground=E;function C(){}t.voidFn=C;function O(w){throw new Error("Didn't expect to get here")}t.assertUnreachable=O;var D=function(w,y,S,P,I){I===void 0&&(I=function(V){return V});var N=Math.ceil(e([w],Array.from(w.children),!0).reduce(function(V,A){var R=Math.ceil(A.getBoundingClientRect().width);if(A.innerText&&A.innerText.includes(S)&&A.childElementCount===0){var B=A.cloneNode(!0);B.innerHTML=I(y.toFixed(P)),B.style.visibility="hidden",document.body.appendChild(B),R=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return R>V?R:V},w.getBoundingClientRect().width));return N},k=function(w,y,S,P,I,N,V){V===void 0&&(V=function(B){return B});var A=[],R=function(B){var Q=D(S[B],P[B],I,N,V),U=y[B].x;y.forEach(function(ie,q){var ne=ie.x,ge=D(S[q],P[q],I,N,V);B!==q&&(U>=ne&&U<=ne+ge||U+Q>=ne&&U+Q<=ne+ge)&&(A.includes(q)||(A.push(B),A.push(q),A=e(e([],A,!0),[B,q],!1),R(q)))})};return R(w),Array.from(new Set(A.sort()))},j=function(w,y,S,P,I,N){P===void 0&&(P=.1),I===void 0&&(I=" - "),N===void 0&&(N=function(q){return q});var V=(0,t.getStepDecimals)(P),A=(0,i.useState)({}),R=A[0],B=A[1],Q=(0,i.useState)(N(y[S].toFixed(V))),U=Q[0],ie=Q[1];return(0,i.useEffect)(function(){if(w){var q=w.getThumbs();if(q.length<1)return;var ne={},ge=w.getOffsets(),Oe=k(S,ge,q,y,I,V,N),pt=N(y[S].toFixed(V));if(Oe.length){var De=Oe.reduce(function(we,gt,vt,xt){return we.length?e(e([],we,!0),[ge[xt[vt]].x],!1):[ge[xt[vt]].x]},[]);if(Math.min.apply(Math,De)===ge[S].x){var ht=[];Oe.forEach(function(we){ht.push(y[we].toFixed(V))}),pt=Array.from(new Set(ht.sort(function(we,gt){return parseFloat(we)-parseFloat(gt)}))).map(N).join(I);var oi=Math.min.apply(Math,De),mt=Math.max.apply(Math,De),li=q[Oe[De.indexOf(mt)]].getBoundingClientRect().width;ne.left="".concat(Math.abs(oi-(mt+li))/2,"px"),ne.transform="translate(-50%, 0)"}else ne.visibility="hidden"}ie(pt),B(ne)}},[w,y]),[U,R]};t.useThumbOverlap=j;function M(w,y,S,P){var I=w.getBoundingClientRect(),N=I.left,V=I.top,A=I.width,R=I.height;return f(P)?Math.abs(S-(V+R/2)):Math.abs(y-(N+A/2))}})(ct);var Zn=K&&K.__extends||function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},t(e,i)};return function(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(e,i);function n(){this.constructor=e}e.prototype=i===null?Object.create(i):(n.prototype=i.prototype,new n)}}(),er=K&&K.__createBinding||(Object.create?function(t,e,i,n){n===void 0&&(n=i);var r=Object.getOwnPropertyDescriptor(e,i);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,n,r)}:function(t,e,i,n){n===void 0&&(n=i),t[n]=e[i]}),tr=K&&K.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),ir=K&&K.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var i in t)i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)&&er(e,t,i);return tr(e,t),e},kt=K&&K.__spreadArray||function(t,e,i){if(i||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return t.concat(s||Array.prototype.slice.call(e))};Object.defineProperty(dt,"__esModule",{value:!0});var Le=ir(F),$=ct,H=He,nr=["ArrowRight","ArrowUp","k","PageUp"],rr=["ArrowLeft","ArrowDown","j","PageDown"],sr=function(t){Zn(e,t);function e(i){var n=t.call(this,i)||this;if(n.trackRef=Le.createRef(),n.thumbRefs=[],n.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(n.props.values.length).fill(0).map(function(r,s){return s}),isChanged:!1,markOffsets:[]},n.getOffsets=function(){var r=n.props,s=r.direction,l=r.values,d=r.min,a=r.max,f=n.trackRef.current,c=f.getBoundingClientRect(),p=(0,$.getPaddingAndBorder)(f);return n.getThumbs().map(function(m,v){var g={x:0,y:0},b=m.getBoundingClientRect(),T=(0,$.getMargin)(m);switch(s){case H.Direction.Right:return g.x=(T.left+p.left)*-1,g.y=((b.height-c.height)/2+p.top)*-1,g.x+=c.width*(0,$.relativeValue)(l[v],d,a)-b.width/2,g;case H.Direction.Left:return g.x=(T.right+p.right)*-1,g.y=((b.height-c.height)/2+p.top)*-1,g.x+=c.width-c.width*(0,$.relativeValue)(l[v],d,a)-b.width/2,g;case H.Direction.Up:return g.x=((b.width-c.width)/2+T.left+p.left)*-1,g.y=-p.left,g.y+=c.height-c.height*(0,$.relativeValue)(l[v],d,a)-b.height/2,g;case H.Direction.Down:return g.x=((b.width-c.width)/2+T.left+p.left)*-1,g.y=-p.left,g.y+=c.height*(0,$.relativeValue)(l[v],d,a)-b.height/2,g;default:return(0,$.assertUnreachable)(s)}})},n.getThumbs=function(){return n.trackRef&&n.trackRef.current?Array.from(n.trackRef.current.children).filter(function(r){return r.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},n.getTargetIndex=function(r){return n.getThumbs().findIndex(function(s){return s===r.target||s.contains(r.target)})},n.addTouchEvents=function(r){document.addEventListener("touchmove",n.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",n.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",n.schdOnEnd,{passive:!1})},n.addMouseEvents=function(r){document.addEventListener("mousemove",n.schdOnMouseMove),document.addEventListener("mouseup",n.schdOnEnd)},n.onMouseDownTrack=function(r){var s;if(r.button===0)if(r.persist(),r.preventDefault(),n.addMouseEvents(r.nativeEvent),n.props.values.length>1&&n.props.draggableTrack){if(n.thumbRefs.some(function(d){var a;return(a=d.current)===null||a===void 0?void 0:a.contains(r.target)}))return;n.setState({draggedTrackPos:[r.clientX,r.clientY]},function(){return n.onMove(r.clientX,r.clientY)})}else{var l=(0,$.getClosestThumbIndex)(n.thumbRefs.map(function(d){return d.current}),r.clientX,r.clientY,n.props.direction);(s=n.thumbRefs[l].current)===null||s===void 0||s.focus(),n.setState({draggedThumbIndex:l},function(){return n.onMove(r.clientX,r.clientY)})}},n.onResize=function(){(0,$.translateThumbs)(n.getThumbs(),n.getOffsets(),n.props.rtl),n.calculateMarkOffsets()},n.onTouchStartTrack=function(r){var s;if(r.persist(),n.addTouchEvents(r.nativeEvent),n.props.values.length>1&&n.props.draggableTrack){if(n.thumbRefs.some(function(d){var a;return(a=d.current)===null||a===void 0?void 0:a.contains(r.target)}))return;n.setState({draggedTrackPos:[r.touches[0].clientX,r.touches[0].clientY]},function(){return n.onMove(r.touches[0].clientX,r.touches[0].clientY)})}else{var l=(0,$.getClosestThumbIndex)(n.thumbRefs.map(function(d){return d.current}),r.touches[0].clientX,r.touches[0].clientY,n.props.direction);(s=n.thumbRefs[l].current)===null||s===void 0||s.focus(),n.setState({draggedThumbIndex:l},function(){return n.onMove(r.touches[0].clientX,r.touches[0].clientY)})}},n.onMouseOrTouchStart=function(r){if(!n.props.disabled){var s=(0,$.isTouchEvent)(r);if(!(!s&&r.button!==0)){var l=n.getTargetIndex(r);l!==-1&&(s?n.addTouchEvents(r):n.addMouseEvents(r),n.setState({draggedThumbIndex:l,thumbZIndexes:n.state.thumbZIndexes.map(function(d,a){return a===l?Math.max.apply(Math,n.state.thumbZIndexes):d<=n.state.thumbZIndexes[l]?d:d-1})}))}}},n.onMouseMove=function(r){r.preventDefault(),n.onMove(r.clientX,r.clientY)},n.onTouchMove=function(r){r.preventDefault(),n.onMove(r.touches[0].clientX,r.touches[0].clientY)},n.onKeyDown=function(r){var s=n.props,l=s.values,d=s.onChange,a=s.step,f=s.rtl,c=s.direction,p=n.state.isChanged,m=n.getTargetIndex(r.nativeEvent),v=f||c===H.Direction.Left||c===H.Direction.Down?-1:1;m!==-1&&(nr.includes(r.key)?(r.preventDefault(),n.setState({draggedThumbIndex:m,isChanged:!0}),d((0,$.replaceAt)(l,m,n.normalizeValue(l[m]+v*(r.key==="PageUp"?a*10:a),m)))):rr.includes(r.key)?(r.preventDefault(),n.setState({draggedThumbIndex:m,isChanged:!0}),d((0,$.replaceAt)(l,m,n.normalizeValue(l[m]-v*(r.key==="PageDown"?a*10:a),m)))):r.key==="Tab"?n.setState({draggedThumbIndex:-1},function(){p&&n.fireOnFinalChange()}):p&&n.fireOnFinalChange())},n.onKeyUp=function(r){var s=n.state.isChanged;n.setState({draggedThumbIndex:-1},function(){s&&n.fireOnFinalChange()})},n.onMove=function(r,s){var l=n.state,d=l.draggedThumbIndex,a=l.draggedTrackPos,f=n.props,c=f.direction,p=f.min,m=f.max,v=f.onChange,g=f.values,b=f.step,T=f.rtl;if(d===-1&&a[0]===-1&&a[1]===-1)return null;var u=n.trackRef.current;if(!u)return null;var h=u.getBoundingClientRect(),x=(0,$.isVertical)(c)?h.height:h.width;if(a[0]!==-1&&a[1]!==-1){var E=r-a[0],C=s-a[1],O=0;switch(c){case H.Direction.Right:case H.Direction.Left:O=E/x*(m-p);break;case H.Direction.Down:case H.Direction.Up:O=C/x*(m-p);break;default:(0,$.assertUnreachable)(c)}if(T&&(O*=-1),Math.abs(O)>=b/2){for(var D=0;D<n.thumbRefs.length;D++){if(g[D]===m&&Math.sign(O)===1||g[D]===p&&Math.sign(O)===-1)return;var k=g[D]+O;k>m?O=m-g[D]:k<p&&(O=p-g[D])}for(var j=g.slice(0),D=0;D<n.thumbRefs.length;D++)j=(0,$.replaceAt)(j,D,n.normalizeValue(g[D]+O,D));n.setState({draggedTrackPos:[r,s]}),v(j)}}else{var M=0;switch(c){case H.Direction.Right:M=(r-h.left)/x*(m-p)+p;break;case H.Direction.Left:M=(x-(r-h.left))/x*(m-p)+p;break;case H.Direction.Down:M=(s-h.top)/x*(m-p)+p;break;case H.Direction.Up:M=(x-(s-h.top))/x*(m-p)+p;break;default:(0,$.assertUnreachable)(c)}T&&(M=m+p-M),Math.abs(g[d]-M)>=b/2&&v((0,$.replaceAt)(g,d,n.normalizeValue(M,d)))}},n.normalizeValue=function(r,s){var l=n.props,d=l.min,a=l.max,f=l.step,c=l.allowOverlap,p=l.values;return(0,$.normalizeValue)(r,s,d,a,f,c,p)},n.onEnd=function(r){if(r.preventDefault(),document.removeEventListener("mousemove",n.schdOnMouseMove),document.removeEventListener("touchmove",n.schdOnTouchMove),document.removeEventListener("mouseup",n.schdOnEnd),document.removeEventListener("touchend",n.schdOnEnd),document.removeEventListener("touchcancel",n.schdOnEnd),n.state.draggedThumbIndex===-1&&n.state.draggedTrackPos[0]===-1&&n.state.draggedTrackPos[1]===-1)return null;n.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){n.fireOnFinalChange()})},n.fireOnFinalChange=function(){n.setState({isChanged:!1});var r=n.props,s=r.onFinalChange,l=r.values;s&&s(l)},n.updateMarkRefs=function(r){if(!r.renderMark){n.numOfMarks=void 0,n.markRefs=void 0;return}n.numOfMarks=(r.max-r.min)/n.props.step,n.markRefs=[];for(var s=0;s<n.numOfMarks+1;s++)n.markRefs[s]=Le.createRef()},n.calculateMarkOffsets=function(){if(!(!n.props.renderMark||!n.trackRef||!n.numOfMarks||!n.markRefs||n.trackRef.current===null)){for(var r=window.getComputedStyle(n.trackRef.current),s=parseInt(r.width,10),l=parseInt(r.height,10),d=parseInt(r.paddingLeft,10),a=parseInt(r.paddingTop,10),f=[],c=0;c<n.numOfMarks+1;c++){var p=9999,m=9999;if(n.markRefs[c].current){var v=n.markRefs[c].current.getBoundingClientRect();p=v.height,m=v.width}n.props.direction===H.Direction.Left||n.props.direction===H.Direction.Right?f.push([Math.round(s/n.numOfMarks*c+d-m/2),-Math.round((p-l)/2)]):f.push([Math.round(l/n.numOfMarks*c+a-p/2),-Math.round((m-s)/2)])}n.setState({markOffsets:f})}},i.step===0)throw new Error('"step" property should be a positive number');return n.schdOnMouseMove=(0,$.schd)(n.onMouseMove),n.schdOnTouchMove=(0,$.schd)(n.onTouchMove),n.schdOnEnd=(0,$.schd)(n.onEnd),n.thumbRefs=i.values.map(function(){return Le.createRef()}),n.updateMarkRefs(i),n}return e.prototype.componentDidMount=function(){var i=this,n=this.props,r=n.values,s=n.min,l=n.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",i.onResize)},unobserve:function(){return window.removeEventListener("resize",i.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,$.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(d){return(0,$.checkBoundaries)(d,i.props.min,i.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,$.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),r.forEach(function(d){(0,$.isStepDivisible)(s,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},e.prototype.componentDidUpdate=function(i,n){var r=this.props,s=r.max,l=r.min,d=r.step,a=r.values,f=r.rtl;(i.max!==s||i.min!==l||i.step!==d)&&this.updateMarkRefs(this.props),(0,$.translateThumbs)(this.getThumbs(),this.getOffsets(),f),(i.max!==s||i.min!==l||i.step!==d||n.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),a.forEach(function(c){(0,$.isStepDivisible)(l,c,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},e.prototype.componentWillUnmount=function(){var i={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,i),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},e.prototype.render=function(){var i=this,n=this.props,r=n.renderTrack,s=n.renderThumb,l=n.renderMark,d=l===void 0?function(){return null}:l,a=n.values,f=n.min,c=n.max,p=n.allowOverlap,m=n.disabled,v=this.state,g=v.draggedThumbIndex,b=v.thumbZIndexes,T=v.markOffsets;return r({props:{style:{transform:"scale(1)",cursor:g>-1?"grabbing":this.props.draggableTrack?(0,$.isVertical)(this.props.direction)?"ns-resize":"ew-resize":a.length===1&&!m?"pointer":"inherit"},onMouseDown:m?$.voidFn:this.onMouseDownTrack,onTouchStart:m?$.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:kt(kt([],T.map(function(u,h,x){return d({props:{style:i.props.direction===H.Direction.Left||i.props.direction===H.Direction.Right?{position:"absolute",left:"".concat(u[0],"px"),marginTop:"".concat(u[1],"px")}:{position:"absolute",top:"".concat(u[0],"px"),marginLeft:"".concat(u[1],"px")},key:"mark".concat(h),ref:i.markRefs[h]},index:h})}),!0),a.map(function(u,h){var x=i.state.draggedThumbIndex===h;return s({index:h,value:u,isDragged:x,props:{style:{position:"absolute",zIndex:b[h],cursor:m?"inherit":x?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:h,tabIndex:m?void 0:0,"aria-valuemax":p?c:a[h+1]||c,"aria-valuemin":p?f:a[h-1]||f,"aria-valuenow":u,draggable:!1,ref:i.thumbRefs[h],role:"slider",onKeyDown:m?$.voidFn:i.onKeyDown,onKeyUp:m?$.voidFn:i.onKeyUp}})}),!0)})},e.defaultProps={step:1,direction:H.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},e}(Le.Component);dt.default=sr;(function(t){var e=K&&K.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkValuesAgainstBoundaries=t.relativeValue=t.useThumbOverlap=t.Direction=t.getTrackBackground=t.Range=void 0;var i=e(dt);t.Range=i.default;var n=ct;Object.defineProperty(t,"getTrackBackground",{enumerable:!0,get:function(){return n.getTrackBackground}}),Object.defineProperty(t,"useThumbOverlap",{enumerable:!0,get:function(){return n.useThumbOverlap}}),Object.defineProperty(t,"relativeValue",{enumerable:!0,get:function(){return n.relativeValue}}),Object.defineProperty(t,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return n.checkValuesAgainstBoundaries}});var r=He;Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return r.Direction}})})(it);const ar=L.div`
  /* width: 280px;
  @media ${_.tablet} {
    width: 704px;
  } */
  @media ${_.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`,or=L.div`
  @media ${_.tablet} {
    display: flex;
    gap: 16px;
  }
  @media ${_.desktop} {
    display: flex;
    gap: 24px;
  }
`,lr=L.div`
  width: 280px;
  @media ${_.tablet} {
    width: 356px;
  }
  @media ${_.desktop} {
    width: 391px;
  }
`,dr=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,cr=L.h3`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primary-blue);

  @media ${_.tablet} {
    padding-bottom: 16px;
  }
`,ur=L.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${_.tablet} {
    width: 325px;
  }
  @media ${_.desktop} {
    width: 360px;
  }
`,fr=L.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`,pr=L.div`
  position: relative;
  top: 24px;
`,hr=L.output`
  position: absolute;
  left: -10px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`,mr=L.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`,Ot=L.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`,gr=L.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media ${_.tablet} {
    width: 336px;
  }
  @media ${_.desktop} {
    width: 178px;
  }
`,vr=L.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 336px;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${_.tablet} {
    height: 44px;
  }
`,xr=()=>{const t=fe(At),{entries:e}=fe(We),i=e.reduce((n,{waterVolume:r})=>n+=r,0);return t?Math.floor(i/(t*1e3)*100):0},wr=()=>{const[t,e]=F.useState(!1),i=xr(),n=i>100?100:i,r=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(ar,{children:o.jsxs(or,{children:[o.jsxs(lr,{className:"third-step",children:[o.jsx(cr,{children:"Today"}),o.jsx(dr,{children:o.jsx(it.Range,{disabled:!0,min:0,max:100,values:[n],onChange:()=>{},renderTrack:({props:s,children:l})=>o.jsx(ur,{...s,style:{...s.style,background:it.getTrackBackground({values:[n],colors:["#9EBBFF","#D7E3FF"],min:0,max:100})},children:l}),renderThumb:({props:s})=>F.createElement(fr,{...s,key:s.key},o.jsx(pr,{children:o.jsxs(hr,{children:[n,"%"]})}))})}),o.jsxs(mr,{children:[n<=7?o.jsx("span",{children:" "}):o.jsx(Ot,{children:"0%"}),n>=85?o.jsx("span",{children:" "}):o.jsx(Ot,{children:"100%"})]})]}),o.jsx(gr,{className:"hover",children:o.jsxs(vr,{className:"btn second-step",onClick:()=>e(!0),children:[o.jsx(z,{className:"water-ratio-plus",id:"plus-circle"}),"Add Water"]})})]})}),t&&o.jsx(Se,{setVisible:e,title:"Add water",children:o.jsx(Gt,{title:"Choose a value",closeModal:r})})]})},br="/agua_vivo_app/assets/BgHomeMob-gTMr7R_3.png",yr="/agua_vivo_app/assets/BgHomeTabl-zTY3vu-k.png",Sr="/agua_vivo_app/assets/BgHomeDesk-KfymPvKf.png",Tr=L.section`
  background-image: url("${br}");

  background-repeat: no-repeat;
  background-position: 50% 115px;

  @media ${_.tablet} {
    background-image: url("${yr}");
    background-position: 50% 60px;
  }
  @media ${_.desktop} {
    background-image: url("${Sr}");
    background-position: 50% 65px;
  }
`,Er=L.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${_.desktop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
`,Mr=L.div`
  background-repeat: no-repeat;
  object-fit: contain;

  padding: 24px 8px;

  @media ${_.tablet} {
    padding-top: 0px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${_.desktop} {
    height: 548px;
  }
`,jr=L.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 40px;
  height: auto;

  background-color: var(--secondary-white);

  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${_.tablet} {
    padding: 32px 24px;
  }

  @media ${_.desktop} {
    width: 592px;
    max-height: 688px;

    margin-bottom: 0px;
  }
  .chart-container {
    width: 246px;
    height: 500px;
    @media ${_.tablet} {
      width: 646px;
      height: 264px;
    }
    @media ${_.desktop} {
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
`,Cr=L.div`
  position: absolute;
  bottom: 47px;
  right: 20px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 7px;

  @media ${_.tablet} {
    position: absolute;
    bottom: 60px;
    right: 220px;
  }

  @media ${_.desktop} {
    position: absolute;
    bottom: 25px;
    right: 163px;
  }
`,Pr=L.p`
  text-transform: uppercase;
  font-size: 14px;
  color: var(--primary-blue);
  font-weight: var(--bold-font-weight);
  @media ${_.tablet} {
    font-size: 16px;
  }
`,kr=L.button`
  font-size: 14px;
  font-weight: var(--bold-font-weight);
  padding-bottom: 2px;
  border-bottom: 3px solid;
  color: var(--primary-blue);
  @media ${_.tablet} {
    font-size: 16px;
  }
`;function Dt(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function ut(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(i=>{typeof t[i]>"u"?t[i]=e[i]:Dt(e[i])&&Dt(t[i])&&Object.keys(e[i]).length>0&&ut(t[i],e[i])})}const Ht={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ee(){const t=typeof document<"u"?document:{};return ut(t,Ht),t}const Or={document:Ht,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function ee(){const t=typeof window<"u"?window:{};return ut(t,Or),t}function Dr(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function Ir(t){const e=t;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function nt(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Re(){return Date.now()}function Lr(t){const e=ee();let i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function Nr(t,e){e===void 0&&(e="x");const i=ee();let n,r,s;const l=Lr(t);return i.WebKitCSSMatrix?(r=l.transform||l.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(d=>d.replace(",",".")).join(", ")),s=new i.WebKitCSSMatrix(r==="none"?"":r)):(s=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?r=s.m41:n.length===16?r=parseFloat(n[12]):r=parseFloat(n[4])),e==="y"&&(i.WebKitCSSMatrix?r=s.m42:n.length===16?r=parseFloat(n[13]):r=parseFloat(n[5])),r||0}function Ne(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function _r(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function J(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const n=i<0||arguments.length<=i?void 0:arguments[i];if(n!=null&&!_r(n)){const r=Object.keys(Object(n)).filter(s=>e.indexOf(s)<0);for(let s=0,l=r.length;s<l;s+=1){const d=r[s],a=Object.getOwnPropertyDescriptor(n,d);a!==void 0&&a.enumerable&&(Ne(t[d])&&Ne(n[d])?n[d].__swiper__?t[d]=n[d]:J(t[d],n[d]):!Ne(t[d])&&Ne(n[d])?(t[d]={},n[d].__swiper__?t[d]=n[d]:J(t[d],n[d])):t[d]=n[d])}}}return t}function _e(t,e,i){t.style.setProperty(e,i)}function Yt(t){let{swiper:e,targetPosition:i,side:n}=t;const r=ee(),s=-e.translate;let l=null,d;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const f=i>s?"next":"prev",c=(m,v)=>f==="next"&&m>=v||f==="prev"&&m<=v,p=()=>{d=new Date().getTime(),l===null&&(l=d);const m=Math.max(Math.min((d-l)/a,1),0),v=.5-Math.cos(m*Math.PI)/2;let g=s+v*(i-s);if(c(g,i)&&(g=i),e.wrapperEl.scrollTo({[n]:g}),c(g,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(p)};p()}function ce(t,e){return e===void 0&&(e=""),[...t.children].filter(i=>i.matches(e))}function Fe(t){try{console.warn(t);return}catch{}}function Be(t,e){e===void 0&&(e=[]);const i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:Dr(e)),i}function Ar(t,e){const i=[];for(;t.previousElementSibling;){const n=t.previousElementSibling;e?n.matches(e)&&i.push(n):i.push(n),t=n}return i}function zr(t,e){const i=[];for(;t.nextElementSibling;){const n=t.nextElementSibling;e?n.matches(e)&&i.push(n):i.push(n),t=n}return i}function he(t,e){return ee().getComputedStyle(t,null).getPropertyValue(e)}function Ve(t){let e=t,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function qt(t,e){const i=[];let n=t.parentElement;for(;n;)e?n.matches(e)&&i.push(n):i.push(n),n=n.parentElement;return i}function rt(t,e,i){const n=ee();return i?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function X(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}let Ke;function Rr(){const t=ee(),e=Ee();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function Xt(){return Ke||(Ke=Rr()),Ke}let Qe;function Fr(t){let{userAgent:e}=t===void 0?{}:t;const i=Xt(),n=ee(),r=n.navigator.platform,s=e||n.navigator.userAgent,l={ios:!1,android:!1},d=n.screen.width,a=n.screen.height,f=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const p=s.match(/(iPod)(.*OS\s([\d_]+))?/),m=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let g=r==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&g&&i.touch&&b.indexOf(`${d}x${a}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),g=!1),f&&!v&&(l.os="android",l.android=!0),(c||m||p)&&(l.os="ios",l.ios=!0),l}function Ut(t){return t===void 0&&(t={}),Qe||(Qe=Fr(t)),Qe}let Je;function Br(){const t=ee(),e=Ut();let i=!1;function n(){const d=t.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(n()){const d=String(t.navigator.userAgent);if(d.includes("Version/")){const[a,f]=d.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));i=a<16||a===16&&f<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),s=n(),l=s||r&&e.ios;return{isSafari:i||s,needPerspectiveFix:i,need3dFix:l,isWebView:r}}function Vr(){return Je||(Je=Br()),Je}function $r(t){let{swiper:e,on:i,emit:n}=t;const r=ee();let s=null,l=null;const d=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(p=>{l=r.requestAnimationFrame(()=>{const{width:m,height:v}=e;let g=m,b=v;p.forEach(T=>{let{contentBoxSize:u,contentRect:h,target:x}=T;x&&x!==e.el||(g=h?h.width:(u[0]||u).inlineSize,b=h?h.height:(u[0]||u).blockSize)}),(g!==m||b!==v)&&d()})}),s.observe(e.el))},f=()=>{l&&r.cancelAnimationFrame(l),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",d),r.addEventListener("orientationchange",c)}),i("destroy",()=>{f(),r.removeEventListener("resize",d),r.removeEventListener("orientationchange",c)})}function Wr(t){let{swiper:e,extendParams:i,on:n,emit:r}=t;const s=[],l=ee(),d=function(c,p){p===void 0&&(p={});const m=l.MutationObserver||l.WebkitMutationObserver,v=new m(g=>{if(e.__preventObserver__)return;if(g.length===1){r("observerUpdate",g[0]);return}const b=function(){r("observerUpdate",g[0])};l.requestAnimationFrame?l.requestAnimationFrame(b):l.setTimeout(b,0)});v.observe(c,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),s.push(v)},a=()=>{if(e.params.observer){if(e.params.observeParents){const c=qt(e.hostEl);for(let p=0;p<c.length;p+=1)d(c[p])}d(e.hostEl,{childList:e.params.observeSlideChildren}),d(e.wrapperEl,{attributes:!1})}},f=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",a),n("destroy",f)}var Gr={on(t,e,i){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=i?"unshift":"push";return t.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][r](e)}),n},once(t,e,i){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function r(){n.off(t,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,l=new Array(s),d=0;d<s;d++)l[d]=arguments[d];e.apply(n,l)}return r.__emitterProxy=e,n.on(t,r,i)},onAny(t,e){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const n=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[n](t),i},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||t.split(" ").forEach(n=>{typeof e>"u"?i.eventsListeners[n]=[]:i.eventsListeners[n]&&i.eventsListeners[n].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&i.eventsListeners[n].splice(s,1)})}),i},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,i,n;for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],i=s.slice(1,s.length),n=t):(e=s[0].events,i=s[0].data,n=s[0].context||t),i.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(f=>{f.apply(n,[a,...i])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(f=>{f.apply(n,i)})}),t}};function Hr(){const t=this;let e,i;const n=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=n.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?i=t.params.height:i=n.clientHeight,!(e===0&&t.isHorizontal()||i===0&&t.isVertical())&&(e=e-parseInt(he(n,"padding-left")||0,10)-parseInt(he(n,"padding-right")||0,10),i=i-parseInt(he(n,"padding-top")||0,10)-parseInt(he(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function Yr(){const t=this;function e(M,w){return parseFloat(M.getPropertyValue(t.getDirectionLabel(w))||0)}const i=t.params,{wrapperEl:n,slidesEl:r,size:s,rtlTranslate:l,wrongRTL:d}=t,a=t.virtual&&i.virtual.enabled,f=a?t.virtual.slides.length:t.slides.length,c=ce(r,`.${t.params.slideClass}, swiper-slide`),p=a?t.virtual.slides.length:c.length;let m=[];const v=[],g=[];let b=i.slidesOffsetBefore;typeof b=="function"&&(b=i.slidesOffsetBefore.call(t));let T=i.slidesOffsetAfter;typeof T=="function"&&(T=i.slidesOffsetAfter.call(t));const u=t.snapGrid.length,h=t.slidesGrid.length;let x=i.spaceBetween,E=-b,C=0,O=0;if(typeof s>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*s:typeof x=="string"&&(x=parseFloat(x)),t.virtualSize=-x,c.forEach(M=>{l?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(_e(n,"--swiper-centered-offset-before",""),_e(n,"--swiper-centered-offset-after",""));const D=i.grid&&i.grid.rows>1&&t.grid;D?t.grid.initSlides(c):t.grid&&t.grid.unsetSlides();let k;const j=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(M=>typeof i.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<p;M+=1){k=0;let w;if(c[M]&&(w=c[M]),D&&t.grid.updateSlide(M,w,c),!(c[M]&&he(w,"display")==="none")){if(i.slidesPerView==="auto"){j&&(c[M].style[t.getDirectionLabel("width")]="");const y=getComputedStyle(w),S=w.style.transform,P=w.style.webkitTransform;if(S&&(w.style.transform="none"),P&&(w.style.webkitTransform="none"),i.roundLengths)k=t.isHorizontal()?rt(w,"width",!0):rt(w,"height",!0);else{const I=e(y,"width"),N=e(y,"padding-left"),V=e(y,"padding-right"),A=e(y,"margin-left"),R=e(y,"margin-right"),B=y.getPropertyValue("box-sizing");if(B&&B==="border-box")k=I+A+R;else{const{clientWidth:Q,offsetWidth:U}=w;k=I+N+V+A+R+(U-Q)}}S&&(w.style.transform=S),P&&(w.style.webkitTransform=P),i.roundLengths&&(k=Math.floor(k))}else k=(s-(i.slidesPerView-1)*x)/i.slidesPerView,i.roundLengths&&(k=Math.floor(k)),c[M]&&(c[M].style[t.getDirectionLabel("width")]=`${k}px`);c[M]&&(c[M].swiperSlideSize=k),g.push(k),i.centeredSlides?(E=E+k/2+C/2+x,C===0&&M!==0&&(E=E-s/2-x),M===0&&(E=E-s/2-x),Math.abs(E)<1/1e3&&(E=0),i.roundLengths&&(E=Math.floor(E)),O%i.slidesPerGroup===0&&m.push(E),v.push(E)):(i.roundLengths&&(E=Math.floor(E)),(O-Math.min(t.params.slidesPerGroupSkip,O))%t.params.slidesPerGroup===0&&m.push(E),v.push(E),E=E+k+x),t.virtualSize+=k+x,C=k,O+=1}}if(t.virtualSize=Math.max(t.virtualSize,s)+T,l&&d&&(i.effect==="slide"||i.effect==="coverflow")&&(n.style.width=`${t.virtualSize+x}px`),i.setWrapperSize&&(n.style[t.getDirectionLabel("width")]=`${t.virtualSize+x}px`),D&&t.grid.updateWrapperSize(k,m),!i.centeredSlides){const M=[];for(let w=0;w<m.length;w+=1){let y=m[w];i.roundLengths&&(y=Math.floor(y)),m[w]<=t.virtualSize-s&&M.push(y)}m=M,Math.floor(t.virtualSize-s)-Math.floor(m[m.length-1])>1&&m.push(t.virtualSize-s)}if(a&&i.loop){const M=g[0]+x;if(i.slidesPerGroup>1){const w=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),y=M*i.slidesPerGroup;for(let S=0;S<w;S+=1)m.push(m[m.length-1]+y)}for(let w=0;w<t.virtual.slidesBefore+t.virtual.slidesAfter;w+=1)i.slidesPerGroup===1&&m.push(m[m.length-1]+M),v.push(v[v.length-1]+M),t.virtualSize+=M}if(m.length===0&&(m=[0]),x!==0){const M=t.isHorizontal()&&l?"marginLeft":t.getDirectionLabel("marginRight");c.filter((w,y)=>!i.cssMode||i.loop?!0:y!==c.length-1).forEach(w=>{w.style[M]=`${x}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let M=0;g.forEach(y=>{M+=y+(x||0)}),M-=x;const w=M-s;m=m.map(y=>y<=0?-b:y>w?w+T:y)}if(i.centerInsufficientSlides){let M=0;if(g.forEach(w=>{M+=w+(x||0)}),M-=x,M<s){const w=(s-M)/2;m.forEach((y,S)=>{m[S]=y-w}),v.forEach((y,S)=>{v[S]=y+w})}}if(Object.assign(t,{slides:c,snapGrid:m,slidesGrid:v,slidesSizesGrid:g}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){_e(n,"--swiper-centered-offset-before",`${-m[0]}px`),_e(n,"--swiper-centered-offset-after",`${t.size/2-g[g.length-1]/2}px`);const M=-t.snapGrid[0],w=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(y=>y+M),t.slidesGrid=t.slidesGrid.map(y=>y+w)}if(p!==f&&t.emit("slidesLengthChange"),m.length!==u&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),v.length!==h&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!a&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const M=`${i.containerModifierClass}backface-hidden`,w=t.el.classList.contains(M);p<=i.maxBackfaceHiddenSlides?w||t.el.classList.add(M):w&&t.el.classList.remove(M)}}function qr(t){const e=this,i=[],n=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const l=d=>n?e.slides[e.getSlideIndexByData(d)]:e.slides[d];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(d=>{i.push(d)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const d=e.activeIndex+s;if(d>e.slides.length&&!n)break;i.push(l(d))}else i.push(l(e.activeIndex));for(s=0;s<i.length;s+=1)if(typeof i[s]<"u"){const d=i[s].offsetHeight;r=d>r?d:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function Xr(){const t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(t.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-i-t.cssOverflowAdjustment()}function Ur(t){t===void 0&&(t=this&&this.translate||0);const e=this,i=e.params,{slides:n,rtlTranslate:r,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let l=-t;r&&(l=t),n.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let d=i.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*e.size:typeof d=="string"&&(d=parseFloat(d));for(let a=0;a<n.length;a+=1){const f=n[a];let c=f.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(c-=n[0].swiperSlideOffset);const p=(l+(i.centeredSlides?e.minTranslate():0)-c)/(f.swiperSlideSize+d),m=(l-s[0]+(i.centeredSlides?e.minTranslate():0)-c)/(f.swiperSlideSize+d),v=-(l-c),g=v+e.slidesSizesGrid[a],b=v>=0&&v<=e.size-e.slidesSizesGrid[a];(v>=0&&v<e.size-1||g>1&&g<=e.size||v<=0&&g>=e.size)&&(e.visibleSlides.push(f),e.visibleSlidesIndexes.push(a),n[a].classList.add(i.slideVisibleClass)),b&&n[a].classList.add(i.slideFullyVisibleClass),f.progress=r?-p:p,f.originalProgress=r?-m:m}}function Kr(t){const e=this;if(typeof t>"u"){const c=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*c||0}const i=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:l,progressLoop:d}=e;const a=s,f=l;if(n===0)r=0,s=!0,l=!0;else{r=(t-e.minTranslate())/n;const c=Math.abs(t-e.minTranslate())<1,p=Math.abs(t-e.maxTranslate())<1;s=c||r<=0,l=p||r>=1,c&&(r=0),p&&(r=1)}if(i.loop){const c=e.getSlideIndexByData(0),p=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[c],v=e.slidesGrid[p],g=e.slidesGrid[e.slidesGrid.length-1],b=Math.abs(t);b>=m?d=(b-m)/g:d=(b+g-v)/g,d>1&&(d-=1)}Object.assign(e,{progress:r,progressLoop:d,isBeginning:s,isEnd:l}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),s&&!a&&e.emit("reachBeginning toEdge"),l&&!f&&e.emit("reachEnd toEdge"),(a&&!s||f&&!l)&&e.emit("fromEdge"),e.emit("progress",r)}function Qr(){const t=this,{slides:e,params:i,slidesEl:n,activeIndex:r}=t,s=t.virtual&&i.virtual.enabled,l=t.grid&&i.grid&&i.grid.rows>1,d=p=>ce(n,`.${i.slideClass}${p}, swiper-slide${p}`)[0];e.forEach(p=>{p.classList.remove(i.slideActiveClass,i.slideNextClass,i.slidePrevClass)});let a,f,c;if(s)if(i.loop){let p=r-t.virtual.slidesBefore;p<0&&(p=t.virtual.slides.length+p),p>=t.virtual.slides.length&&(p-=t.virtual.slides.length),a=d(`[data-swiper-slide-index="${p}"]`)}else a=d(`[data-swiper-slide-index="${r}"]`);else l?(a=e.filter(p=>p.column===r)[0],c=e.filter(p=>p.column===r+1)[0],f=e.filter(p=>p.column===r-1)[0]):a=e[r];a&&(a.classList.add(i.slideActiveClass),l?(c&&c.classList.add(i.slideNextClass),f&&f.classList.add(i.slidePrevClass)):(c=zr(a,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!c&&(c=e[0]),c&&c.classList.add(i.slideNextClass),f=Ar(a,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!f===0&&(f=e[e.length-1]),f&&f.classList.add(i.slidePrevClass))),t.emitSlidesClasses()}const Ae=(t,e)=>{if(!t||t.destroyed||!t.params)return;const i=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,n=e.closest(i());if(n){let r=n.querySelector(`.${t.params.lazyPreloaderClass}`);!r&&t.isElement&&(n.shadowRoot?r=n.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(r=n.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Ze=(t,e)=>{if(!t.slides[e])return;const i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},st=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const n=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),r=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const l=r,d=[l-e];d.push(...Array.from({length:e}).map((a,f)=>l+n+f)),t.slides.forEach((a,f)=>{d.includes(a.column)&&Ze(t,f)});return}const s=r+n-1;if(t.params.rewind||t.params.loop)for(let l=r-e;l<=s+e;l+=1){const d=(l%i+i)%i;(d<r||d>s)&&Ze(t,d)}else for(let l=Math.max(r-e,0);l<=Math.min(s+e,i-1);l+=1)l!==r&&(l>s||l<r)&&Ze(t,l)};function Jr(t){const{slidesGrid:e,params:i}=t,n=t.rtlTranslate?t.translate:-t.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?r=s:n>=e[s]&&n<e[s+1]&&(r=s+1):n>=e[s]&&(r=s);return i.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Zr(t){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:r,activeIndex:s,realIndex:l,snapIndex:d}=e;let a=t,f;const c=v=>{let g=v-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof a>"u"&&(a=Jr(e)),n.indexOf(i)>=0)f=n.indexOf(i);else{const v=Math.min(r.slidesPerGroupSkip,a);f=v+Math.floor((a-v)/r.slidesPerGroup)}if(f>=n.length&&(f=n.length-1),a===s&&!e.params.loop){f!==d&&(e.snapIndex=f,e.emit("snapIndexChange"));return}if(a===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=c(a);return}const p=e.grid&&r.grid&&r.grid.rows>1;let m;if(e.virtual&&r.virtual.enabled&&r.loop)m=c(a);else if(p){const v=e.slides.filter(b=>b.column===a)[0];let g=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(v),0)),m=Math.floor(g/r.grid.rows)}else if(e.slides[a]){const v=e.slides[a].getAttribute("data-swiper-slide-index");v?m=parseInt(v,10):m=a}else m=a;Object.assign(e,{previousSnapIndex:d,snapIndex:f,previousRealIndex:l,realIndex:m,previousIndex:s,activeIndex:a}),e.initialized&&st(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(l!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function es(t,e){const i=this,n=i.params;let r=t.closest(`.${n.slideClass}, swiper-slide`);!r&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(d=>{!r&&d.matches&&d.matches(`.${n.slideClass}, swiper-slide`)&&(r=d)});let s=!1,l;if(r){for(let d=0;d<i.slides.length;d+=1)if(i.slides[d]===r){s=!0,l=d;break}}if(r&&s)i.clickedSlide=r,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=l;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}n.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var ts={updateSize:Hr,updateSlides:Yr,updateAutoHeight:qr,updateSlidesOffset:Xr,updateSlidesProgress:Ur,updateProgress:Kr,updateSlidesClasses:Qr,updateActiveIndex:Zr,updateClickedSlide:es};function is(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:i,rtlTranslate:n,translate:r,wrapperEl:s}=e;if(i.virtualTranslate)return n?-r:r;if(i.cssMode)return r;let l=Nr(s,t);return l+=e.cssOverflowAdjustment(),n&&(l=-l),l||0}function ns(t,e){const i=this,{rtlTranslate:n,params:r,wrapperEl:s,progress:l}=i;let d=0,a=0;const f=0;i.isHorizontal()?d=n?-t:t:a=t,r.roundLengths&&(d=Math.floor(d),a=Math.floor(a)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?d:a,r.cssMode?s[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-d:-a:r.virtualTranslate||(i.isHorizontal()?d-=i.cssOverflowAdjustment():a-=i.cssOverflowAdjustment(),s.style.transform=`translate3d(${d}px, ${a}px, ${f}px)`);let c;const p=i.maxTranslate()-i.minTranslate();p===0?c=0:c=(t-i.minTranslate())/p,c!==l&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function rs(){return-this.snapGrid[0]}function ss(){return-this.snapGrid[this.snapGrid.length-1]}function as(t,e,i,n,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),n===void 0&&(n=!0);const s=this,{params:l,wrapperEl:d}=s;if(s.animating&&l.preventInteractionOnTransition)return!1;const a=s.minTranslate(),f=s.maxTranslate();let c;if(n&&t>a?c=a:n&&t<f?c=f:c=t,s.updateProgress(c),l.cssMode){const p=s.isHorizontal();if(e===0)d[p?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return Yt({swiper:s,targetPosition:-c,side:p?"left":"top"}),!0;d.scrollTo({[p?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(c),i&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(c),i&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(m){!s||s.destroyed||m.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,i&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var os={getTranslate:is,setTranslate:ns,minTranslate:rs,maxTranslate:ss,translateTo:as};function ls(t,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=t===0?"0ms":""),i.emit("setTransition",t,e)}function Kt(t){let{swiper:e,runCallbacks:i,direction:n,step:r}=t;const{activeIndex:s,previousIndex:l}=e;let d=n;if(d||(s>l?d="next":s<l?d="prev":d="reset"),e.emit(`transition${r}`),i&&s!==l){if(d==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),d==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function ds(t,e){t===void 0&&(t=!0);const i=this,{params:n}=i;n.cssMode||(n.autoHeight&&i.updateAutoHeight(),Kt({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function cs(t,e){t===void 0&&(t=!0);const i=this,{params:n}=i;i.animating=!1,!n.cssMode&&(i.setTransition(0),Kt({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var us={setTransition:ls,transitionStart:ds,transitionEnd:cs};function fs(t,e,i,n,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;let l=t;l<0&&(l=0);const{params:d,snapGrid:a,slidesGrid:f,previousIndex:c,activeIndex:p,rtlTranslate:m,wrapperEl:v,enabled:g}=s;if(s.animating&&d.preventInteractionOnTransition||!g&&!n&&!r||s.destroyed)return!1;const b=Math.min(s.params.slidesPerGroupSkip,l);let T=b+Math.floor((l-b)/s.params.slidesPerGroup);T>=a.length&&(T=a.length-1);const u=-a[T];if(d.normalizeSlideIndex)for(let x=0;x<f.length;x+=1){const E=-Math.floor(u*100),C=Math.floor(f[x]*100),O=Math.floor(f[x+1]*100);typeof f[x+1]<"u"?E>=C&&E<O-(O-C)/2?l=x:E>=C&&E<O&&(l=x+1):E>=C&&(l=x)}if(s.initialized&&l!==p&&(!s.allowSlideNext&&(m?u>s.translate&&u>s.minTranslate():u<s.translate&&u<s.minTranslate())||!s.allowSlidePrev&&u>s.translate&&u>s.maxTranslate()&&(p||0)!==l))return!1;l!==(c||0)&&i&&s.emit("beforeSlideChangeStart"),s.updateProgress(u);let h;if(l>p?h="next":l<p?h="prev":h="reset",m&&-u===s.translate||!m&&u===s.translate)return s.updateActiveIndex(l),d.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),d.effect!=="slide"&&s.setTranslate(u),h!=="reset"&&(s.transitionStart(i,h),s.transitionEnd(i,h)),!1;if(d.cssMode){const x=s.isHorizontal(),E=m?u:-u;if(e===0){const C=s.virtual&&s.params.virtual.enabled;C&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),C&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[x?"scrollLeft":"scrollTop"]=E})):v[x?"scrollLeft":"scrollTop"]=E,C&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Yt({swiper:s,targetPosition:E,side:x?"left":"top"}),!0;v.scrollTo({[x?"left":"top"]:E,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(u),s.updateActiveIndex(l),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(i,h),e===0?s.transitionEnd(i,h):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(i,h))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function ps(t,e,i,n){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));const r=this;if(r.destroyed)return;const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let l=t;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)l=l+r.virtual.slidesBefore;else{let d;if(s){const m=l*r.params.grid.rows;d=r.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else d=r.getSlideIndexByData(l);const a=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:f}=r.params;let c=r.params.slidesPerView;c==="auto"?c=r.slidesPerViewDynamic():(c=Math.ceil(parseFloat(r.params.slidesPerView,10)),f&&c%2===0&&(c=c+1));let p=a-d<c;if(f&&(p=p||d<Math.ceil(c/2)),p){const m=f?d<r.activeIndex?"prev":"next":d-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?d+1:d-a+1,slideRealIndex:m==="next"?r.realIndex:void 0})}if(s){const m=l*r.params.grid.rows;l=r.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else l=r.getSlideIndexByData(l)}return requestAnimationFrame(()=>{r.slideTo(l,e,i,n)}),r}function hs(t,e,i){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const n=this,{enabled:r,params:s,animating:l}=n;if(!r||n.destroyed)return n;let d=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(d=Math.max(n.slidesPerViewDynamic("current",!0),1));const a=n.activeIndex<s.slidesPerGroupSkip?1:d,f=n.virtual&&s.virtual.enabled;if(s.loop){if(l&&!f&&s.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+a,t,e,i)}),!0}return s.rewind&&n.isEnd?n.slideTo(0,t,e,i):n.slideTo(n.activeIndex+a,t,e,i)}function ms(t,e,i){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const n=this,{params:r,snapGrid:s,slidesGrid:l,rtlTranslate:d,enabled:a,animating:f}=n;if(!a||n.destroyed)return n;const c=n.virtual&&r.virtual.enabled;if(r.loop){if(f&&!c&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const p=d?n.translate:-n.translate;function m(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const v=m(p),g=s.map(u=>m(u));let b=s[g.indexOf(v)-1];if(typeof b>"u"&&r.cssMode){let u;s.forEach((h,x)=>{v>=h&&(u=x)}),typeof u<"u"&&(b=s[u>0?u-1:u])}let T=0;if(typeof b<"u"&&(T=l.indexOf(b),T<0&&(T=n.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(T=T-n.slidesPerViewDynamic("previous",!0)+1,T=Math.max(T,0))),r.rewind&&n.isBeginning){const u=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(u,t,e,i)}else if(r.loop&&n.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(T,t,e,i)}),!0;return n.slideTo(T,t,e,i)}function gs(t,e,i){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const n=this;if(!n.destroyed)return n.slideTo(n.activeIndex,t,e,i)}function vs(t,e,i,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),n===void 0&&(n=.5);const r=this;if(r.destroyed)return;let s=r.activeIndex;const l=Math.min(r.params.slidesPerGroupSkip,s),d=l+Math.floor((s-l)/r.params.slidesPerGroup),a=r.rtlTranslate?r.translate:-r.translate;if(a>=r.snapGrid[d]){const f=r.snapGrid[d],c=r.snapGrid[d+1];a-f>(c-f)*n&&(s+=r.params.slidesPerGroup)}else{const f=r.snapGrid[d-1],c=r.snapGrid[d];a-f<=(c-f)*n&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,t,e,i)}function xs(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:i}=t,n=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let r=t.clickedIndex,s;const l=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;s=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<t.loopedSlides-n/2||r>t.slides.length-t.loopedSlides+n/2?(t.loopFix(),r=t.getSlideIndex(ce(i,`${l}[data-swiper-slide-index="${s}"]`)[0]),nt(()=>{t.slideTo(r)})):t.slideTo(r):r>t.slides.length-n?(t.loopFix(),r=t.getSlideIndex(ce(i,`${l}[data-swiper-slide-index="${s}"]`)[0]),nt(()=>{t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}var ws={slideTo:fs,slideToLoop:ps,slideNext:hs,slidePrev:ms,slideReset:gs,slideToClosest:vs,slideToClickedSlide:xs};function bs(t){const e=this,{params:i,slidesEl:n}=e;if(!i.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{ce(n,`.${i.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},s=e.grid&&i.grid&&i.grid.rows>1,l=i.slidesPerGroup*(s?i.grid.rows:1),d=e.slides.length%l!==0,a=s&&e.slides.length%i.grid.rows!==0,f=c=>{for(let p=0;p<c;p+=1){const m=e.isElement?Be("swiper-slide",[i.slideBlankClass]):Be("div",[i.slideClass,i.slideBlankClass]);e.slidesEl.append(m)}};if(d){if(i.loopAddBlankSlides){const c=l-e.slides.length%l;f(c),e.recalcSlides(),e.updateSlides()}else Fe("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(a){if(i.loopAddBlankSlides){const c=i.grid.rows-e.slides.length%i.grid.rows;f(c),e.recalcSlides(),e.updateSlides()}else Fe("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:t,direction:i.centeredSlides?void 0:"next"})}function ys(t){let{slideRealIndex:e,slideTo:i=!0,direction:n,setTranslate:r,activeSlideIndex:s,byController:l,byMousewheel:d}=t===void 0?{}:t;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:f,allowSlidePrev:c,allowSlideNext:p,slidesEl:m,params:v}=a,{centeredSlides:g}=v;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&v.virtual.enabled){i&&(!v.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):v.centeredSlides&&a.snapIndex<v.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=p,a.emit("loopFix");return}let b=v.slidesPerView;b==="auto"?b=a.slidesPerViewDynamic():(b=Math.ceil(parseFloat(v.slidesPerView,10)),g&&b%2===0&&(b=b+1));const T=v.slidesPerGroupAuto?b:v.slidesPerGroup;let u=T;u%T!==0&&(u+=T-u%T),u+=v.loopAdditionalSlides,a.loopedSlides=u;const h=a.grid&&v.grid&&v.grid.rows>1;f.length<b+u?Fe("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&Fe("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],E=[];let C=a.activeIndex;typeof s>"u"?s=a.getSlideIndex(f.filter(S=>S.classList.contains(v.slideActiveClass))[0]):C=s;const O=n==="next"||!n,D=n==="prev"||!n;let k=0,j=0;const M=h?Math.ceil(f.length/v.grid.rows):f.length,y=(h?f[s].column:s)+(g&&typeof r>"u"?-b/2+.5:0);if(y<u){k=Math.max(u-y,T);for(let S=0;S<u-y;S+=1){const P=S-Math.floor(S/M)*M;if(h){const I=M-P-1;for(let N=f.length-1;N>=0;N-=1)f[N].column===I&&x.push(N)}else x.push(M-P-1)}}else if(y+b>M-u){j=Math.max(y-(M-u*2),T);for(let S=0;S<j;S+=1){const P=S-Math.floor(S/M)*M;h?f.forEach((I,N)=>{I.column===P&&E.push(N)}):E.push(P)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),D&&x.forEach(S=>{f[S].swiperLoopMoveDOM=!0,m.prepend(f[S]),f[S].swiperLoopMoveDOM=!1}),O&&E.forEach(S=>{f[S].swiperLoopMoveDOM=!0,m.append(f[S]),f[S].swiperLoopMoveDOM=!1}),a.recalcSlides(),v.slidesPerView==="auto"?a.updateSlides():h&&(x.length>0&&D||E.length>0&&O)&&a.slides.forEach((S,P)=>{a.grid.updateSlide(P,S,a.slides)}),v.watchSlidesProgress&&a.updateSlidesOffset(),i){if(x.length>0&&D){if(typeof e>"u"){const S=a.slidesGrid[C],I=a.slidesGrid[C+k]-S;d?a.setTranslate(a.translate-I):(a.slideTo(C+k,0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-I,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-I))}else if(r){const S=h?x.length/v.grid.rows:x.length;a.slideTo(a.activeIndex+S,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(E.length>0&&O)if(typeof e>"u"){const S=a.slidesGrid[C],I=a.slidesGrid[C-j]-S;d?a.setTranslate(a.translate-I):(a.slideTo(C-j,0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-I,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-I))}else{const S=h?E.length/v.grid.rows:E.length;a.slideTo(a.activeIndex-S,0,!1,!0)}}if(a.allowSlidePrev=c,a.allowSlideNext=p,a.controller&&a.controller.control&&!l){const S={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(P=>{!P.destroyed&&P.params.loop&&P.loopFix({...S,slideTo:P.params.slidesPerView===v.slidesPerView?i:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...S,slideTo:a.controller.control.params.slidesPerView===v.slidesPerView?i:!1})}a.emit("loopFix")}function Ss(){const t=this,{params:e,slidesEl:i}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const n=[];t.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;n[s]=r}),t.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),n.forEach(r=>{i.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var Ts={loopCreate:bs,loopFix:ys,loopDestroy:Ss};function Es(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Ms(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var js={setGrabCursor:Es,unsetGrabCursor:Ms};function Cs(t,e){e===void 0&&(e=this);function i(n){if(!n||n===Ee()||n===ee())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(t);return!r&&!n.getRootNode?null:r||i(n.getRootNode().host)}return i(e)}function It(t,e,i){const n=ee(),{params:r}=t,s=r.edgeSwipeDetection,l=r.edgeSwipeThreshold;return s&&(i<=l||i>=n.innerWidth-l)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Ps(t){const e=this,i=Ee();let n=t;n.originalEvent&&(n=n.originalEvent);const r=e.touchEventsData;if(n.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==n.pointerId)return;r.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){It(e,n,n.targetTouches[0].pageX);return}const{params:s,touches:l,enabled:d}=e;if(!d||!s.simulateTouch&&n.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let a=n.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(a)||"which"in n&&n.which===3||"button"in n&&n.button>0||r.isTouched&&r.isMoved)return;const f=!!s.noSwipingClass&&s.noSwipingClass!=="",c=n.composedPath?n.composedPath():n.path;f&&n.target&&n.target.shadowRoot&&c&&(a=c[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,m=!!(n.target&&n.target.shadowRoot);if(s.noSwiping&&(m?Cs(p,a):a.closest(p))){e.allowClick=!0;return}if(s.swipeHandler&&!a.closest(s.swipeHandler))return;l.currentX=n.pageX,l.currentY=n.pageY;const v=l.currentX,g=l.currentY;if(!It(e,n,v))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=v,l.startY=g,r.touchStartTime=Re(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let b=!0;a.matches(r.focusableElements)&&(b=!1,a.nodeName==="SELECT"&&(r.isTouched=!1)),i.activeElement&&i.activeElement.matches(r.focusableElements)&&i.activeElement!==a&&i.activeElement.blur();const T=b&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||T)&&!a.isContentEditable&&n.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function ks(t){const e=Ee(),i=this,n=i.touchEventsData,{params:r,touches:s,rtlTranslate:l,enabled:d}=i;if(!d||!r.simulateTouch&&t.pointerType==="mouse")return;let a=t;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(n.touchId!==null||a.pointerId!==n.pointerId))return;let f;if(a.type==="touchmove"){if(f=[...a.changedTouches].filter(O=>O.identifier===n.touchId)[0],!f||f.identifier!==n.touchId)return}else f=a;if(!n.isTouched){n.startMoving&&n.isScrolling&&i.emit("touchMoveOpposite",a);return}const c=f.pageX,p=f.pageY;if(a.preventedByNestedSwiper){s.startX=c,s.startY=p;return}if(!i.allowTouchMove){a.target.matches(n.focusableElements)||(i.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p}),n.touchStartTime=Re());return}if(r.touchReleaseOnEdges&&!r.loop){if(i.isVertical()){if(p<s.startY&&i.translate<=i.maxTranslate()||p>s.startY&&i.translate>=i.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(c<s.startX&&i.translate<=i.maxTranslate()||c>s.startX&&i.translate>=i.minTranslate())return}if(e.activeElement&&a.target===e.activeElement&&a.target.matches(n.focusableElements)){n.isMoved=!0,i.allowClick=!1;return}n.allowTouchCallbacks&&i.emit("touchMove",a),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=c,s.currentY=p;const m=s.currentX-s.startX,v=s.currentY-s.startY;if(i.params.threshold&&Math.sqrt(m**2+v**2)<i.params.threshold)return;if(typeof n.isScrolling>"u"){let O;i.isHorizontal()&&s.currentY===s.startY||i.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:m*m+v*v>=25&&(O=Math.atan2(Math.abs(v),Math.abs(m))*180/Math.PI,n.isScrolling=i.isHorizontal()?O>r.touchAngle:90-O>r.touchAngle)}if(n.isScrolling&&i.emit("touchMoveOpposite",a),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling){n.isTouched=!1;return}if(!n.startMoving)return;i.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation();let g=i.isHorizontal()?m:v,b=i.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(g=Math.abs(g)*(l?1:-1),b=Math.abs(b)*(l?1:-1)),s.diff=g,g*=r.touchRatio,l&&(g=-g,b=-b);const T=i.touchesDirection;i.swipeDirection=g>0?"prev":"next",i.touchesDirection=b>0?"prev":"next";const u=i.params.loop&&!r.cssMode,h=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!n.isMoved){if(u&&h&&i.loopFix({direction:i.swipeDirection}),n.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const O=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});i.wrapperEl.dispatchEvent(O)}n.allowMomentumBounce=!1,r.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",a)}let x;if(new Date().getTime(),n.isMoved&&n.allowThresholdMove&&T!==i.touchesDirection&&u&&h&&Math.abs(g)>=1){Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}i.emit("sliderMove",a),n.isMoved=!0,n.currentTranslate=g+n.startTranslate;let E=!0,C=r.resistanceRatio;if(r.touchReleaseOnEdges&&(C=0),g>0?(u&&h&&!x&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>i.minTranslate()&&(E=!1,r.resistance&&(n.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+n.startTranslate+g)**C))):g<0&&(u&&h&&!x&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]:i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(r.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),n.currentTranslate<i.maxTranslate()&&(E=!1,r.resistance&&(n.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-n.startTranslate-g)**C))),E&&(a.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(g)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=i.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&i.freeMode||r.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(n.currentTranslate),i.setTranslate(n.currentTranslate))}function Os(t){const e=this,i=e.touchEventsData;let n=t;n.originalEvent&&(n=n.originalEvent);let r;if(n.type==="touchend"||n.type==="touchcancel"){if(r=[...n.changedTouches].filter(C=>C.identifier===i.touchId)[0],!r||r.identifier!==i.touchId)return}else{if(i.touchId!==null||n.pointerId!==i.pointerId)return;r=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:l,touches:d,rtlTranslate:a,slidesGrid:f,enabled:c}=e;if(!c||!l.simulateTouch&&n.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",n),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&l.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}l.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const p=Re(),m=p-i.touchStartTime;if(e.allowClick){const C=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(C&&C[0]||n.target,C),e.emit("tap click",n),m<300&&p-i.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(i.lastClickTime=Re(),nt(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||d.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let v;if(l.followFinger?v=a?e.translate:-e.translate:v=-i.currentTranslate,l.cssMode)return;if(l.freeMode&&l.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:v});return}const g=v>=-e.maxTranslate()&&!e.params.loop;let b=0,T=e.slidesSizesGrid[0];for(let C=0;C<f.length;C+=C<l.slidesPerGroupSkip?1:l.slidesPerGroup){const O=C<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;typeof f[C+O]<"u"?(g||v>=f[C]&&v<f[C+O])&&(b=C,T=f[C+O]-f[C]):(g||v>=f[C])&&(b=C,T=f[f.length-1]-f[f.length-2])}let u=null,h=null;l.rewind&&(e.isBeginning?h=l.virtual&&l.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(u=0));const x=(v-f[b])/T,E=b<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;if(m>l.longSwipesMs){if(!l.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(x>=l.longSwipesRatio?e.slideTo(l.rewind&&e.isEnd?u:b+E):e.slideTo(b)),e.swipeDirection==="prev"&&(x>1-l.longSwipesRatio?e.slideTo(b+E):h!==null&&x<0&&Math.abs(x)>l.longSwipesRatio?e.slideTo(h):e.slideTo(b))}else{if(!l.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(b+E):e.slideTo(b):(e.swipeDirection==="next"&&e.slideTo(u!==null?u:b+E),e.swipeDirection==="prev"&&e.slideTo(h!==null?h:b))}}function Lt(){const t=this,{params:e,el:i}=t;if(i&&i.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:s}=t,l=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const d=l&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!d?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!l?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=r,t.allowSlideNext=n,t.params.watchOverflow&&s!==t.snapGrid&&t.checkOverflow()}function Ds(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function Is(){const t=this,{wrapperEl:e,rtlTranslate:i,enabled:n}=t;if(!n)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let r;const s=t.maxTranslate()-t.minTranslate();s===0?r=0:r=(t.translate-t.minTranslate())/s,r!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Ls(t){const e=this;Ae(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Ns(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Qt=(t,e)=>{const i=Ee(),{params:n,el:r,wrapperEl:s,device:l}=t,d=!!n.nested,a=e==="on"?"addEventListener":"removeEventListener",f=e;i[a]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:d}),r[a]("touchstart",t.onTouchStart,{passive:!1}),r[a]("pointerdown",t.onTouchStart,{passive:!1}),i[a]("touchmove",t.onTouchMove,{passive:!1,capture:d}),i[a]("pointermove",t.onTouchMove,{passive:!1,capture:d}),i[a]("touchend",t.onTouchEnd,{passive:!0}),i[a]("pointerup",t.onTouchEnd,{passive:!0}),i[a]("pointercancel",t.onTouchEnd,{passive:!0}),i[a]("touchcancel",t.onTouchEnd,{passive:!0}),i[a]("pointerout",t.onTouchEnd,{passive:!0}),i[a]("pointerleave",t.onTouchEnd,{passive:!0}),i[a]("contextmenu",t.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[a]("click",t.onClick,!0),n.cssMode&&s[a]("scroll",t.onScroll),n.updateOnWindowResize?t[f](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Lt,!0):t[f]("observerUpdate",Lt,!0),r[a]("load",t.onLoad,{capture:!0})};function _s(){const t=this,{params:e}=t;t.onTouchStart=Ps.bind(t),t.onTouchMove=ks.bind(t),t.onTouchEnd=Os.bind(t),t.onDocumentTouchStart=Ns.bind(t),e.cssMode&&(t.onScroll=Is.bind(t)),t.onClick=Ds.bind(t),t.onLoad=Ls.bind(t),Qt(t,"on")}function As(){Qt(this,"off")}var zs={attachEvents:_s,detachEvents:As};const Nt=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Rs(){const t=this,{realIndex:e,initialized:i,params:n,el:r}=t,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const l=t.getBreakpoint(s,t.params.breakpointsBase,t.el);if(!l||t.currentBreakpoint===l)return;const a=(l in s?s[l]:void 0)||t.originalParams,f=Nt(t,n),c=Nt(t,a),p=n.enabled;f&&!c?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),t.emitContainerClasses()):!f&&c&&(r.classList.add(`${n.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&n.grid.fill==="column")&&r.classList.add(`${n.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(u=>{if(typeof a[u]>"u")return;const h=n[u]&&n[u].enabled,x=a[u]&&a[u].enabled;h&&!x&&t[u].disable(),!h&&x&&t[u].enable()});const m=a.direction&&a.direction!==n.direction,v=n.loop&&(a.slidesPerView!==n.slidesPerView||m),g=n.loop;m&&i&&t.changeDirection(),J(t.params,a);const b=t.params.enabled,T=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),p&&!b?t.disable():!p&&b&&t.enable(),t.currentBreakpoint=l,t.emit("_beforeBreakpoint",a),i&&(v?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!g&&T?(t.loopCreate(e),t.updateSlides()):g&&!T&&t.loopDestroy()),t.emit("breakpoint",a)}function Fs(t,e,i){if(e===void 0&&(e="window"),!t||e==="container"&&!i)return;let n=!1;const r=ee(),s=e==="window"?r.innerHeight:i.clientHeight,l=Object.keys(t).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const a=parseFloat(d.substr(1));return{value:s*a,point:d}}return{value:d,point:d}});l.sort((d,a)=>parseInt(d.value,10)-parseInt(a.value,10));for(let d=0;d<l.length;d+=1){const{point:a,value:f}=l[d];e==="window"?r.matchMedia(`(min-width: ${f}px)`).matches&&(n=a):f<=i.clientWidth&&(n=a)}return n||"max"}var Bs={setBreakpoint:Rs,getBreakpoint:Fs};function Vs(t,e){const i=[];return t.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(r=>{n[r]&&i.push(e+r)}):typeof n=="string"&&i.push(e+n)}),i}function $s(){const t=this,{classNames:e,params:i,rtl:n,el:r,device:s}=t,l=Vs(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:n},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...l),r.classList.add(...e),t.emitContainerClasses()}function Ws(){const t=this,{el:e,classNames:i}=t;e.classList.remove(...i),t.emitContainerClasses()}var Gs={addClasses:$s,removeClasses:Ws};function Hs(){const t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:n}=i;if(n){const r=t.slides.length-1,s=t.slidesGrid[r]+t.slidesSizesGrid[r]+n*2;t.isLocked=t.size>s}else t.isLocked=t.snapGrid.length===1;i.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),i.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Ys={checkOverflow:Hs},at={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function qs(t,e){return function(n){n===void 0&&(n={});const r=Object.keys(n)[0],s=n[r];if(typeof s!="object"||s===null){J(e,n);return}if(t[r]===!0&&(t[r]={enabled:!0}),r==="navigation"&&t[r]&&t[r].enabled&&!t[r].prevEl&&!t[r].nextEl&&(t[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&t[r]&&t[r].enabled&&!t[r].el&&(t[r].auto=!0),!(r in t&&"enabled"in s)){J(e,n);return}typeof t[r]=="object"&&!("enabled"in t[r])&&(t[r].enabled=!0),t[r]||(t[r]={enabled:!1}),J(e,n)}}const et={eventsEmitter:Gr,update:ts,translate:os,transition:us,slide:ws,loop:Ts,grabCursor:js,events:zs,breakpoints:Bs,checkOverflow:Ys,classes:Gs},tt={};let ft=class ue{constructor(){let e,i;for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?i=r[0]:[e,i]=r,i||(i={}),i=J({},i),e&&!i.el&&(i.el=e);const l=Ee();if(i.el&&typeof i.el=="string"&&l.querySelectorAll(i.el).length>1){const c=[];return l.querySelectorAll(i.el).forEach(p=>{const m=J({},i,{el:p});c.push(new ue(m))}),c}const d=this;d.__swiper__=!0,d.support=Xt(),d.device=Ut({userAgent:i.userAgent}),d.browser=Vr(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],i.modules&&Array.isArray(i.modules)&&d.modules.push(...i.modules);const a={};d.modules.forEach(c=>{c({params:i,swiper:d,extendParams:qs(i,a),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const f=J({},at,a);return d.params=J({},f,tt,i),d.originalParams=J({},d.params),d.passedParams=J({},i),d.params&&d.params.on&&Object.keys(d.params.on).forEach(c=>{d.on(c,d.params.on[c])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:n}=this,r=ce(i,`.${n.slideClass}, swiper-slide`),s=Ve(r[0]);return Ve(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(i=>i.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:i,params:n}=e;e.slides=ce(i,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),l=(n.maxTranslate()-r)*e+r;n.translateTo(l,typeof i>"u"?0:i),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach(n=>{const r=e.getSlideClasses(n);i.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);const n=this,{params:r,slides:s,slidesGrid:l,slidesSizesGrid:d,size:a,activeIndex:f}=n;let c=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let p=s[f]?Math.ceil(s[f].swiperSlideSize):0,m;for(let v=f+1;v<s.length;v+=1)s[v]&&!m&&(p+=Math.ceil(s[v].swiperSlideSize),c+=1,p>a&&(m=!0));for(let v=f-1;v>=0;v-=1)s[v]&&!m&&(p+=s[v].swiperSlideSize,c+=1,p>a&&(m=!0))}else if(e==="current")for(let p=f+1;p<s.length;p+=1)(i?l[p]+d[p]-l[f]<a:l[p]-l[f]<a)&&(c+=1);else for(let p=f-1;p>=0;p-=1)l[f]-l[p]<a&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&Ae(e,l)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const l=e.rtlTranslate?e.translate*-1:e.translate,d=Math.min(Math.max(l,e.maxTranslate()),e.minTranslate());e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const l=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(l.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}n.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);const n=this,r=n.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),i&&n.update()),n}changeLanguageDirection(e){const i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let n=e||i.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=i,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const r=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):ce(n,r())[0];return!l&&i.params.createElements&&(l=Be("div",i.params.wrapperClass),n.append(l),ce(n,`.${i.params.slideClass}`).forEach(d=>{l.append(d)})),Object.assign(i,{el:n,wrapperEl:l,slidesEl:i.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:l,hostEl:i.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||he(n,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||he(n,"direction")==="rtl"),wrongRTL:he(l,"display")==="-webkit-box"}),!0}init(e){const i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(),i.attachEvents();const r=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&r.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?Ae(i,s):s.addEventListener("load",l=>{Ae(i,l.target)})}),st(i),i.initialized=!0,st(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);const n=this,{params:r,el:s,wrapperEl:l,slides:d}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),i&&(n.removeClasses(),s.removeAttribute("style"),l.removeAttribute("style"),d&&d.length&&d.forEach(a=>{a.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(a=>{n.off(a)}),e!==!1&&(n.el.swiper=null,Ir(n)),n.destroyed=!0),null}static extendDefaults(e){J(tt,e)}static get extendedDefaults(){return tt}static get defaults(){return at}static installModule(e){ue.prototype.__modules__||(ue.prototype.__modules__=[]);const i=ue.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>ue.installModule(i)),ue):(ue.installModule(e),ue)}};Object.keys(et).forEach(t=>{Object.keys(et[t]).forEach(e=>{ft.prototype[e]=et[t][e]})});ft.use([$r,Wr]);const Jt=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function xe(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function ye(t,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>i.indexOf(n)<0).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:xe(e[n])&&xe(t[n])&&Object.keys(e[n]).length>0?e[n].__swiper__?t[n]=e[n]:ye(t[n],e[n]):t[n]=e[n]})}function Zt(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function ei(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function ti(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function ii(t){t===void 0&&(t="");const e=t.split(" ").map(n=>n.trim()).filter(n=>!!n),i=[];return e.forEach(n=>{i.indexOf(n)<0&&i.push(n)}),i.join(" ")}function Xs(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function Us(t){let{swiper:e,slides:i,passedParams:n,changedParams:r,nextEl:s,prevEl:l,scrollbarEl:d,paginationEl:a}=t;const f=r.filter(j=>j!=="children"&&j!=="direction"&&j!=="wrapperClass"),{params:c,pagination:p,navigation:m,scrollbar:v,virtual:g,thumbs:b}=e;let T,u,h,x,E,C,O,D;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(T=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(u=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||a)&&(c.pagination||c.pagination===!1)&&p&&!p.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||d)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(x=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||l)&&(n.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(E=!0);const k=j=>{e[j]&&(e[j].destroy(),j==="navigation"?(e.isElement&&(e[j].prevEl.remove(),e[j].nextEl.remove()),c[j].prevEl=void 0,c[j].nextEl=void 0,e[j].prevEl=void 0,e[j].nextEl=void 0):(e.isElement&&e[j].el.remove(),c[j].el=void 0,e[j].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?C=!0:!c.loop&&n.loop?O=!0:D=!0),f.forEach(j=>{if(xe(c[j])&&xe(n[j]))Object.assign(c[j],n[j]),(j==="navigation"||j==="pagination"||j==="scrollbar")&&"enabled"in n[j]&&!n[j].enabled&&k(j);else{const M=n[j];(M===!0||M===!1)&&(j==="navigation"||j==="pagination"||j==="scrollbar")?M===!1&&k(j):c[j]=n[j]}}),f.includes("controller")&&!u&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&i&&g&&c.virtual.enabled?(g.slides=i,g.update(!0)):r.includes("virtual")&&g&&c.virtual.enabled&&(i&&(g.slides=i),g.update(!0)),r.includes("children")&&i&&c.loop&&(D=!0),T&&b.init()&&b.update(!0),u&&(e.controller.control=c.controller.control),h&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),e.el.appendChild(a)),a&&(c.pagination.el=a),p.init(),p.render(),p.update()),x&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),e.el.appendChild(d)),d&&(c.scrollbar.el=d),v.init(),v.updateSize(),v.setTranslate()),E&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=e.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),e.el.appendChild(s)),(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-prev"),l.innerHTML=e.hostEl.constructor.prevButtonSvg,l.part.add("button-prev"),e.el.appendChild(l))),s&&(c.navigation.nextEl=s),l&&(c.navigation.prevEl=l),m.init(),m.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(C||D)&&e.loopDestroy(),(O||D)&&e.loopCreate(),e.update()}function Ks(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const i={on:{}},n={},r={};ye(i,at),i._emitClasses=!0,i.init=!1;const s={},l=Jt.map(a=>a.replace(/_/,"")),d=Object.assign({},t);return Object.keys(d).forEach(a=>{typeof t[a]>"u"||(l.indexOf(a)>=0?xe(t[a])?(i[a]={},r[a]={},ye(i[a],t[a]),ye(r[a],t[a])):(i[a]=t[a],r[a]=t[a]):a.search(/on[A-Z]/)===0&&typeof t[a]=="function"?e?n[`${a[2].toLowerCase()}${a.substr(3)}`]=t[a]:i.on[`${a[2].toLowerCase()}${a.substr(3)}`]=t[a]:s[a]=t[a])}),["navigation","pagination","scrollbar"].forEach(a=>{i[a]===!0&&(i[a]={}),i[a]===!1&&delete i[a]}),{params:i,passedParams:r,rest:s,events:n}}function Qs(t,e){let{el:i,nextEl:n,prevEl:r,paginationEl:s,scrollbarEl:l,swiper:d}=t;Zt(e)&&n&&r&&(d.params.navigation.nextEl=n,d.originalParams.navigation.nextEl=n,d.params.navigation.prevEl=r,d.originalParams.navigation.prevEl=r),ei(e)&&s&&(d.params.pagination.el=s,d.originalParams.pagination.el=s),ti(e)&&l&&(d.params.scrollbar.el=l,d.originalParams.scrollbar.el=l),d.init(i)}function Js(t,e,i,n,r){const s=[];if(!e)return s;const l=a=>{s.indexOf(a)<0&&s.push(a)};if(i&&n){const a=n.map(r),f=i.map(r);a.join("")!==f.join("")&&l("children"),n.length!==i.length&&l("children")}return Jt.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in t&&a in e)if(xe(t[a])&&xe(e[a])){const f=Object.keys(t[a]),c=Object.keys(e[a]);f.length!==c.length?l(a):(f.forEach(p=>{t[a][p]!==e[a][p]&&l(a)}),c.forEach(p=>{t[a][p]!==e[a][p]&&l(a)}))}else t[a]!==e[a]&&l(a)}),s}const Zs=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function $e(){return $e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},$e.apply(this,arguments)}function ni(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function ri(t){const e=[];return Y.Children.toArray(t).forEach(i=>{ni(i)?e.push(i):i.props&&i.props.children&&ri(i.props.children).forEach(n=>e.push(n))}),e}function ea(t){const e=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Y.Children.toArray(t).forEach(n=>{if(ni(n))e.push(n);else if(n.props&&n.props.slot&&i[n.props.slot])i[n.props.slot].push(n);else if(n.props&&n.props.children){const r=ri(n.props.children);r.length>0?r.forEach(s=>e.push(s)):i["container-end"].push(n)}else i["container-end"].push(n)}),{slides:e,slots:i}}function ta(t,e,i){if(!i)return null;const n=c=>{let p=c;return c<0?p=e.length+c:p>=e.length&&(p=p-e.length),p},r=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:s,to:l}=i,d=t.params.loop?-e.length:0,a=t.params.loop?e.length*2:e.length,f=[];for(let c=d;c<a;c+=1)c>=s&&c<=l&&f.push(e[n(c)]);return f.map((c,p)=>Y.cloneElement(c,{swiper:t,style:r,key:`slide-${p}`}))}function Pe(t,e){return typeof window>"u"?F.useEffect(t,e):F.useLayoutEffect(t,e)}const _t=F.createContext(null),ia=F.createContext(null),si=F.forwardRef(function(t,e){let{className:i,tag:n="div",wrapperTag:r="div",children:s,onSwiper:l,...d}=t===void 0?{}:t,a=!1;const[f,c]=F.useState("swiper"),[p,m]=F.useState(null),[v,g]=F.useState(!1),b=F.useRef(!1),T=F.useRef(null),u=F.useRef(null),h=F.useRef(null),x=F.useRef(null),E=F.useRef(null),C=F.useRef(null),O=F.useRef(null),D=F.useRef(null),{params:k,passedParams:j,rest:M,events:w}=Ks(d),{slides:y,slots:S}=ea(s),P=()=>{g(!v)};Object.assign(k.on,{_containerClasses(R,B){c(B)}});const I=()=>{Object.assign(k.on,w),a=!0;const R={...k};if(delete R.wrapperClass,u.current=new ft(R),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=y;const B={cache:!1,slides:y,renderExternal:m,renderExternalUpdate:!1};ye(u.current.params.virtual,B),ye(u.current.originalParams.virtual,B)}};T.current||I(),u.current&&u.current.on("_beforeBreakpoint",P);const N=()=>{a||!w||!u.current||Object.keys(w).forEach(R=>{u.current.on(R,w[R])})},V=()=>{!w||!u.current||Object.keys(w).forEach(R=>{u.current.off(R,w[R])})};F.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",P)}),F.useEffect(()=>{!b.current&&u.current&&(u.current.emitSlidesClasses(),b.current=!0)}),Pe(()=>{if(e&&(e.current=T.current),!!T.current)return u.current.destroyed&&I(),Qs({el:T.current,nextEl:E.current,prevEl:C.current,paginationEl:O.current,scrollbarEl:D.current,swiper:u.current},k),l&&!u.current.destroyed&&l(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),Pe(()=>{N();const R=Js(j,h.current,y,x.current,B=>B.key);return h.current=j,x.current=y,R.length&&u.current&&!u.current.destroyed&&Us({swiper:u.current,slides:y,passedParams:j,changedParams:R,nextEl:E.current,prevEl:C.current,scrollbarEl:D.current,paginationEl:O.current}),()=>{V()}}),Pe(()=>{Zs(u.current)},[p]);function A(){return k.virtual?ta(u.current,y,p):y.map((R,B)=>Y.cloneElement(R,{swiper:u.current,swiperSlideIndex:B}))}return Y.createElement(n,$e({ref:T,className:ii(`${f}${i?` ${i}`:""}`)},M),Y.createElement(ia.Provider,{value:u.current},S["container-start"],Y.createElement(r,{className:Xs(k.wrapperClass)},S["wrapper-start"],A(),S["wrapper-end"]),Zt(k)&&Y.createElement(Y.Fragment,null,Y.createElement("div",{ref:C,className:"swiper-button-prev"}),Y.createElement("div",{ref:E,className:"swiper-button-next"})),ti(k)&&Y.createElement("div",{ref:D,className:"swiper-scrollbar"}),ei(k)&&Y.createElement("div",{ref:O,className:"swiper-pagination"}),S["container-end"]))});si.displayName="Swiper";const te=F.forwardRef(function(t,e){let{tag:i="div",children:n,className:r="",swiper:s,zoom:l,lazy:d,virtualIndex:a,swiperSlideIndex:f,...c}=t===void 0?{}:t;const p=F.useRef(null),[m,v]=F.useState("swiper-slide"),[g,b]=F.useState(!1);function T(E,C,O){C===p.current&&v(O)}Pe(()=>{if(typeof f<"u"&&(p.current.swiperSlideIndex=f),e&&(e.current=p.current),!(!p.current||!s)){if(s.destroyed){m!=="swiper-slide"&&v("swiper-slide");return}return s.on("_slideClass",T),()=>{s&&s.off("_slideClass",T)}}}),Pe(()=>{s&&p.current&&!s.destroyed&&v(s.getSlideClasses(p.current))},[s]);const u={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},h=()=>typeof n=="function"?n(u):n,x=()=>{b(!0)};return Y.createElement(i,$e({ref:p,className:ii(`${m}${r?` ${r}`:""}`),"data-swiper-slide-index":a,onLoad:x},c),l&&Y.createElement(_t.Provider,{value:u},Y.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof l=="number"?l:void 0},h(),d&&!g&&Y.createElement("div",{className:"swiper-lazy-preloader"}))),!l&&Y.createElement(_t.Provider,{value:u},h(),d&&!g&&Y.createElement("div",{className:"swiper-lazy-preloader"})))});te.displayName="SwiperSlide";function ai(t,e,i,n){return t.params.createElements&&Object.keys(n).forEach(r=>{if(!i[r]&&i.auto===!0){let s=ce(t.el,`.${n[r]}`)[0];s||(s=Be("div",n[r]),s.className=n[r],t.el.append(s)),i[r]=s,e[r]=s}}),i}function na(t){let{swiper:e,extendParams:i,on:n,emit:r}=t;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(g){let b;return g&&typeof g=="string"&&e.isElement&&(b=e.el.querySelector(g),b)?b:(g&&(typeof g=="string"&&(b=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&b.length>1&&e.el.querySelectorAll(g).length===1&&(b=e.el.querySelector(g))),g&&!b?g:b)}function l(g,b){const T=e.params.navigation;g=X(g),g.forEach(u=>{u&&(u.classList[b?"add":"remove"](...T.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=b),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](T.lockClass))})}function d(){const{nextEl:g,prevEl:b}=e.navigation;if(e.params.loop){l(b,!1),l(g,!1);return}l(b,e.isBeginning&&!e.params.rewind),l(g,e.isEnd&&!e.params.rewind)}function a(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function f(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const g=e.params.navigation;if(e.params.navigation=ai(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let b=s(g.nextEl),T=s(g.prevEl);Object.assign(e.navigation,{nextEl:b,prevEl:T}),b=X(b),T=X(T);const u=(h,x)=>{h&&h.addEventListener("click",x==="next"?f:a),!e.enabled&&h&&h.classList.add(...g.lockClass.split(" "))};b.forEach(h=>u(h,"next")),T.forEach(h=>u(h,"prev"))}function p(){let{nextEl:g,prevEl:b}=e.navigation;g=X(g),b=X(b);const T=(u,h)=>{u.removeEventListener("click",h==="next"?f:a),u.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(u=>T(u,"next")),b.forEach(u=>T(u,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?v():(c(),d())}),n("toEdge fromEdge lock unlock",()=>{d()}),n("destroy",()=>{p()}),n("enable disable",()=>{let{nextEl:g,prevEl:b}=e.navigation;if(g=X(g),b=X(b),e.enabled){d();return}[...g,...b].filter(T=>!!T).forEach(T=>T.classList.add(e.params.navigation.lockClass))}),n("click",(g,b)=>{let{nextEl:T,prevEl:u}=e.navigation;T=X(T),u=X(u);const h=b.target;if(e.params.navigation.hideOnClick&&!u.includes(h)&&!T.includes(h)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let x;T.length?x=T[0].classList.contains(e.params.navigation.hiddenClass):u.length&&(x=u[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...T,...u].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});const m=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),d()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:m,disable:v,update:d,init:c,destroy:p})}function Ce(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ra(t){let{swiper:e,extendParams:i,on:n,emit:r}=t;const s="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let l,d=0;function a(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function f(u,h){const{bulletActiveClass:x}=e.params.pagination;u&&(u=u[`${h==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${x}-${h}`),u=u[`${h==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${x}-${h}-${h}`)))}function c(u){const h=u.target.closest(Ce(e.params.pagination.bulletClass));if(!h)return;u.preventDefault();const x=Ve(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;e.slideToLoop(x)}else e.slideTo(x)}function p(){const u=e.rtl,h=e.params.pagination;if(a())return;let x=e.pagination.el;x=X(x);let E,C;const O=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,D=e.params.loop?Math.ceil(O/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,E=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(E=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,E=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const k=e.pagination.bullets;let j,M,w;if(h.dynamicBullets&&(l=rt(k[0],e.isHorizontal()?"width":"height",!0),x.forEach(y=>{y.style[e.isHorizontal()?"width":"height"]=`${l*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&C!==void 0&&(d+=E-(C||0),d>h.dynamicMainBullets-1?d=h.dynamicMainBullets-1:d<0&&(d=0)),j=Math.max(E-d,0),M=j+(Math.min(k.length,h.dynamicMainBullets)-1),w=(M+j)/2),k.forEach(y=>{const S=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(P=>`${h.bulletActiveClass}${P}`)].map(P=>typeof P=="string"&&P.includes(" ")?P.split(" "):P).flat();y.classList.remove(...S)}),x.length>1)k.forEach(y=>{const S=Ve(y);S===E?y.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&y.setAttribute("part","bullet"),h.dynamicBullets&&(S>=j&&S<=M&&y.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),S===j&&f(y,"prev"),S===M&&f(y,"next"))});else{const y=k[E];if(y&&y.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&k.forEach((S,P)=>{S.setAttribute("part",P===E?"bullet-active":"bullet")}),h.dynamicBullets){const S=k[j],P=k[M];for(let I=j;I<=M;I+=1)k[I]&&k[I].classList.add(...`${h.bulletActiveClass}-main`.split(" "));f(S,"prev"),f(P,"next")}}if(h.dynamicBullets){const y=Math.min(k.length,h.dynamicMainBullets+4),S=(l*y-l)/2-w*l,P=u?"right":"left";k.forEach(I=>{I.style[e.isHorizontal()?P:"top"]=`${S}px`})}}x.forEach((k,j)=>{if(h.type==="fraction"&&(k.querySelectorAll(Ce(h.currentClass)).forEach(M=>{M.textContent=h.formatFractionCurrent(E+1)}),k.querySelectorAll(Ce(h.totalClass)).forEach(M=>{M.textContent=h.formatFractionTotal(D)})),h.type==="progressbar"){let M;h.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const w=(E+1)/D;let y=1,S=1;M==="horizontal"?y=w:S=w,k.querySelectorAll(Ce(h.progressbarFillClass)).forEach(P=>{P.style.transform=`translate3d(0,0,0) scaleX(${y}) scaleY(${S})`,P.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(k.innerHTML=h.renderCustom(e,E+1,D),j===0&&r("paginationRender",k)):(j===0&&r("paginationRender",k),r("paginationUpdate",k)),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](h.lockClass)})}function m(){const u=e.params.pagination;if(a())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=X(x);let E="";if(u.type==="bullets"){let C=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>h&&(C=h);for(let O=0;O<C;O+=1)u.renderBullet?E+=u.renderBullet.call(e,O,u.bulletClass):E+=`<${u.bulletElement} ${e.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?E=u.renderFraction.call(e,u.currentClass,u.totalClass):E=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?E=u.renderProgressbar.call(e,u.progressbarFillClass):E=`<span class="${u.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{u.type!=="custom"&&(C.innerHTML=E||""),u.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Ce(u.bulletClass)))}),u.type!=="custom"&&r("paginationRender",x[0])}function v(){e.params.pagination=ai(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const u=e.params.pagination;if(!u.el)return;let h;typeof u.el=="string"&&e.isElement&&(h=e.el.querySelector(u.el)),!h&&typeof u.el=="string"&&(h=[...document.querySelectorAll(u.el)]),h||(h=u.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(u.el)],h.length>1&&(h=h.filter(x=>qt(x,".swiper")[0]===e.el)[0])),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=X(h),h.forEach(x=>{u.type==="bullets"&&u.clickable&&x.classList.add(...(u.clickableClass||"").split(" ")),x.classList.add(u.modifierClass+u.type),x.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(x.classList.add(`${u.modifierClass}${u.type}-dynamic`),d=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&x.classList.add(u.progressbarOppositeClass),u.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(u.lockClass)}))}function g(){const u=e.params.pagination;if(a())return;let h=e.pagination.el;h&&(h=X(h),h.forEach(x=>{x.classList.remove(u.hiddenClass),x.classList.remove(u.modifierClass+u.type),x.classList.remove(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(x.classList.remove(...(u.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...u.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const u=e.params.pagination;let{el:h}=e.pagination;h=X(h),h.forEach(x=>{x.classList.remove(u.horizontalClass,u.verticalClass),x.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?T():(v(),m(),p())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),n("snapIndexChange",()=>{p()}),n("snapGridLengthChange",()=>{m(),p()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:u}=e.pagination;u&&(u=X(u),u.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{p()}),n("click",(u,h)=>{const x=h.target,E=X(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&E&&E.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=E[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),E.forEach(O=>O.classList.toggle(e.params.pagination.hiddenClass))}});const b=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:u}=e.pagination;u&&(u=X(u),u.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),v(),m(),p()},T=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:u}=e.pagination;u&&(u=X(u),u.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:b,disable:T,render:m,update:p,init:v,destroy:g})}const re=L.img`
  display: block;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 170px;
  height: 170px;
  object-fit: cover;
  overflow: hidden;
  border: 6px dotted var(--secondary-blue);
  border-radius: 50%;
  @media ${_.tablet} {
    width: 240px;
    height: 240px;
    margin: 0;
  }
`,se=L.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${_.tablet} {
    gap: 15px;
  }
`,ae=L.h2`
  font-size: 20px;
  line-height: 1.33;
  font-weight: var(--bold-font-weight);

  @media ${_.tablet} {
    font-size: 24px;
  }
`,oe=L.p`
  font-size: 18px;
  font-style: italic;
  font-weight: var(--medium-font-weight);
  @media ${_.tablet} {
    font-size: 22px;
  }
`,le=L.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 180px;
  text-align: center;
  @media ${_.tablet} {
    font-size: 18px;
    width: 200px;
    text-align: center;
  }
`,de=L.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,G=L.a`
  .swipe-icon {
    width: 24px;
    height: 24px;
    fill: var(--primary-blue);

    @media ${_.tablet} {
      width: 28px;
      height: 28px;
    }
  }
`,sa="/agua_vivo_app/assets/vika@1x-0c-smYjw.png",aa="/agua_vivo_app/assets/server@1x-gAj-XURD.png",oa="/agua_vivo_app/assets/vitalii@1x-XPMIwMGL.png",la="/agua_vivo_app/assets/anastasiia@1x-4swrbo0V.png",da="/agua_vivo_app/assets/tatiana@1x-daAoCDGs.png",ca="/agua_vivo_app/assets/ludmila@1x-HqUuTSTz.png",ua="/agua_vivo_app/assets/oksana@1x-6PovTHh6.png",fa="/agua_vivo_app/assets/marina@1x-6ZUQNFc3.png",pa="/agua_vivo_app/assets/sofiia@1x-YtBMvpgt.png",ha="/agua_vivo_app/assets/natasha@1x-CrGtt3Db.png",ma="/agua_vivo_app/assets/ostap@1x-yEAmomNq.png",ga=()=>o.jsx(si,{navigation:!0,modules:[na,ra],pagination:!0,effect:"flip",children:o.jsxs("div",{className:"swiper",children:[o.jsxs("div",{className:"swiper-wrapper",children:[o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:aa,alt:"Server Ibraimov"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Server Ibraimov"}),o.jsx(oe,{children:"Team Lead Frontend"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"Routing"})}),o.jsx("li",{children:o.jsx("p",{children:"Redux"})}),o.jsx("li",{children:o.jsx("p",{children:"Technical guiding"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/ServerIbraimovUa",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/serveribraimov/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:oa,alt:"Vitalii Beiar"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Vitalii Beiar"}),o.jsx(oe,{children:"Team Lead Backend"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"Backend Water + Swagger"})}),o.jsx("li",{children:o.jsx("p",{children:"ForgotPasswordPage"})}),o.jsx("li",{children:o.jsx("p",{children:"UpdatePasswordPage"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/nightven",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/vitaliybeyar/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:sa,alt:"Viktoriia Cherkashyna"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Viktoriia Cherkashyna"}),o.jsx(oe,{children:"Scrum master"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"Redux + CSS styles"})}),o.jsx("li",{children:o.jsx("p",{children:"WaterRatio panel"})}),o.jsx("li",{children:o.jsx("p",{children:"Team Modal"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/Viktoriia-Ch08",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/viktoriia-cherkashyna/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:da,alt:"Tetiana Dub"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Tetiana Dub"}),o.jsx(oe,{children:"Frontend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"SignUpPage"})}),o.jsx("li",{children:o.jsx("p",{children:"SignInPage"})}),o.jsx("li",{children:o.jsx("p",{children:"Styles for Reset & ForgotPassword Pages"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/Tasha852209",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/tetiana-dub/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:la,alt:"Anastasiia Diatchuk"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Anastasiia Diatchuk"}),o.jsx(oe,{children:"Frontend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"WaterConsumptionTracker"})}),o.jsx("li",{children:o.jsx("p",{children:"WhyDrinkWater"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/AnastasiiaDia",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/anastasiia-diatchuk/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:ca,alt:"Liudmyla Horobets"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Liudmyla Horobets"}),o.jsx(oe,{children:"Frontend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"Setting Modal"})}),o.jsx("li",{children:o.jsx("p",{children:"LogOut Modal"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/LiudmylaHorobets",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/liudmyla-horobets/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:ua,alt:"Oksana Tantsiura"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Oksana Tantsiura"}),o.jsx(oe,{children:"Frontend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"DailyNorma "})}),o.jsx("li",{children:o.jsx("p",{children:"DailyNorma Modal"})}),o.jsx("li",{children:o.jsx("p",{children:"CSS styles"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/Oksana-Tnt",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/oksana-tantsiura/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:fa,alt:"Marina Aleksandrova"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Marina Aleksandrova"}),o.jsx(oe,{children:"Frontend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"Header"})}),o.jsx("li",{children:o.jsx("p",{children:"UserLogo"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/hotgorod",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/maryna-aleksandrova-91591324/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:pa,alt:"Sofiia Karpova"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Sofiia Karpova"}),o.jsx(oe,{children:"Backend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"Backend User"})}),o.jsx("li",{children:o.jsx("p",{children:"ForgotPassword & UpdatePassword Page"})}),o.jsx("li",{children:o.jsx("p",{children:"Tour by page & translation"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/sofiialives",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/sofiiakarpova/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:ha,alt:`Natalia Kulibaba
 `}),o.jsxs(se,{children:[o.jsx(ae,{children:"Natalia Kulibaba"}),o.jsx(oe,{children:"Frontend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"TodayList"})}),o.jsx("li",{children:o.jsx("p",{children:"Add & Edit Modal"})}),o.jsx("li",{children:o.jsx("p",{children:"Delete Modal"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/NatashaKul7",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/natalia-kulibaba/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]}),o.jsxs(te,{className:"swiper-slide",children:[o.jsx(re,{src:ma,alt:"Ostap Kryven"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Ostap Kryven"}),o.jsx(oe,{children:"Frontend Developer"}),o.jsxs(le,{children:[o.jsx("li",{children:o.jsx("p",{children:"Calendar"})}),o.jsx("li",{children:o.jsx("p",{children:"Calendar Modal"})})]}),o.jsxs(de,{children:[o.jsx("li",{children:o.jsx(G,{href:"https://github.com/Ostap2",children:o.jsx(z,{id:"github",className:"swipe-icon"})})}),o.jsx("li",{children:o.jsx(G,{href:"https://www.linkedin.com/in/ostap-kryven/",children:o.jsx(z,{id:"linkedin",className:"swipe-icon"})})})]})]})]})]}),o.jsx("div",{className:"swiper-pagination"}),o.jsx("div",{className:"swiper-button-prev"}),o.jsx("div",{className:"swiper-button-next"}),o.jsx("div",{className:"swiper-scrollbar"})]})}),wa=()=>{const[t,e]=F.useState(!1),i=Te();return F.useEffect(()=>{i(gi())},[i]),o.jsxs(o.Fragment,{children:[o.jsx(Tr,{children:o.jsx("div",{className:"container",children:o.jsxs(Er,{children:[o.jsxs(Mr,{children:[o.jsx(Ai,{}),o.jsx(wr,{})]}),o.jsxs(jr,{className:"fourth-step",children:[o.jsx(Jn,{}),o.jsxs("div",{className:"mont-box fifth-step",children:[o.jsx(wt,{to:"/home",children:o.jsx(z,{className:"month-icon",id:"date"})}),o.jsx(wt,{to:"/home/graf",children:o.jsx(z,{className:"month-icon",id:"chart"})})]}),o.jsx(vi,{}),o.jsxs(Cr,{children:[o.jsx(Pr,{children:"copyright © 2024 | "}),o.jsx(kr,{onClick:()=>e(!0),children:"by TeamForce"})]})]})]})})}),t&&o.jsx(Se,{setVisible:e,isTeamModal:!0,title:"Force in a team",children:o.jsx(ga,{})})]})};export{wa as default};
