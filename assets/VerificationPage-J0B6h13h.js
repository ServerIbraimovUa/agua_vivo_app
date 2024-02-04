import{u as a,d as t,F as s,c as n,r as c,G as d,j as e,H as l,J as p,K as g}from"./index-hkRo1LUC.js";import{B as x,a as u,b as m,c as b,d as h,e as f}from"./BottleHomeDesk-WtSqiB-E.js";const k=a.section`
    background-image: url("${x}");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
@media ${t.tablet} {
    background-image: url("${u}"); 
}
@media ${t.desktop} {
    background-image: url("${m}"); 
  }
`,y=a.div`
   display: flex;
  justify-content:center;
  align-items: center;
  padding: 10px; 
  background-color: var(--secondary-light-blue);
  border-radius: 10px;
  border-bottom-left-radius: 0;
  width: 200px;
  height: 60px;
  box-shadow: var(--btn-box-shadow);
  @media ${t.tablet} {
    width:300px;
    height: 80px; 
  }  
  `,j=a.div`
    display: flex;
    flex-direction: column;
    align-items: center; 

  `,v=a.div`
    display: flex;
    background-image: url("${b}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 70px;
    background-position-x: 20px;
    justify-content: center;
    height: 280px;
    margin-bottom: 20px;
@media ${t.tablet} {
    background-image: url("${h}"); 
    height:400px;
    justify-content: start;
    background-position-y: 10px;
    background-position-x: 150px;
}
@media ${t.desktop} {
    background-image: url("${f}");
    height:600px;
    background-position-y: 10px;
    background-position-x: 250px;
}

`,r=a.h2`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);
    margin-bottom: 10px;
    text-align: center;

@media ${t.tablet} {
    font-size: 18px;
}
`,$=a.img`
    width: 200px;
    border-radius: 10px;
    box-shadow: var(--btn-box-shadow);
@media ${t.tablet} {
    width: 400px;  
}
@media ${t.desktop} {
    width: 600px;
     
}
`,w="/agua_vivo_app/assets/garage-yjIzQLog.png",N=()=>{const{token:i}=s(),o=n();return c.useEffect(()=>{i&&o(d(i))},[i,o]),e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx("div",{className:"container header-container",children:e.jsx(p,{children:e.jsx(g,{})})})}),e.jsxs(k,{className:"section",children:[e.jsx(v,{className:"container",children:e.jsx(y,{children:e.jsx(r,{children:"Check your email to verify your account"})})}),e.jsxs(j,{className:"container",children:[e.jsx(r,{children:"Here you could be your advertisment!"}),e.jsx($,{src:w,alt:"advertisment"})]})]})]})};export{N as default};
