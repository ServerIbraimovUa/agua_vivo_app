import{u as t,d as a,G as l,H as p,c as x,r as u,J as g,j as e,K as m,P as h,Q as b,R as f,E as k}from"./index-CESIaxj7.js";import{B as j,a as y,b as v,c as w,d as $,e as B}from"./BottleHomeDesk-WtSqiB-E.js";const I=t.section`
    background-image: url("${j}");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
@media ${a.tablet} {
    background-image: url("${y}"); 
}
@media ${a.desktop} {
    background-image: url("${v}"); 
  }
`,E=t.div`
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
  @media ${a.tablet} {
    width:300px;
    height: 80px; 
  }  
  `,C=t.div`
    display: flex;
    flex-direction: column;
    align-items: center; 

  `,N=t.div`
    display: flex;
    background-image: url("${w}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 70px;
    background-position-x: 20px;
    justify-content: center;
    height: 280px;
    margin-bottom: 20px;
@media ${a.tablet} {
    background-image: url("${$}"); 
    height:400px;
    justify-content: start;
    background-position-y: 10px;
    background-position-x: 150px;
}
@media ${a.desktop} {
    background-image: url("${B}");
    height:600px;
    background-position-y: 10px;
    background-position-x: 250px;
}

`,n=t.h2`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);
    margin-bottom: 10px;
    text-align: center;

@media ${a.tablet} {
    font-size: 18px;
}
`,P=t.img`
    width: 200px;
    border-radius: 10px;
    box-shadow: var(--btn-box-shadow);
@media ${a.tablet} {
    width: 400px;  
}
@media ${a.desktop} {
    width: 600px;
     
}
`,D="/agua_vivo_app/assets/garage-Tlp1eJi3.jpg",H=()=>{const{token:i}=l(),[r]=p(),o=r.get("email"),s=x();u.useEffect(()=>{i&&s(g(i))},[i,s]);const c=d=>{d.preventDefault(),o&&s(f({email:o})).unwrap().then(()=>k.success("Email was resended successfully"))};return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx("div",{className:"container header-container",children:e.jsx(h,{children:e.jsx(b,{})})})}),e.jsxs(I,{className:"section",children:[e.jsx(N,{className:"container",children:e.jsxs(E,{children:[e.jsx(n,{children:"Check your email to verify your account"}),e.jsxs("div",{children:[e.jsx("span",{children:"If you didn't receive an email"}),e.jsx("button",{onClick:c,children:"click this link to resend"})]})]})}),e.jsxs(C,{className:"container",children:[e.jsx(n,{children:"Here you could be your advertisment!"}),e.jsx(P,{src:D,alt:"advertisment"})]})]})]})};export{H as default};
