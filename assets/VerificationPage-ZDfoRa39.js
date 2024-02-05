import{u as a,d as t,E as p,F as l,c as x,r as m,G as u,j as e,H as g,J as b,K as f,I as h,P as k,C as v}from"./index-GEO-4IQm.js";import{B as y,a as j,b as $,c as w,d as B,e as I,P as s}from"./BottleHomeDesk-UndE142u.js";const C=a.section`
    background-image: url("${y}");
    display: flex;
    background-position-x: 70px;
    flex-direction: column;
    justify-content: space-between;

@media ${t.tablet} {
    background-image: url("${j}"); 
}
@media ${t.desktop} {
    background-image: url("${$}"); 
  }
`,P=a.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center; 
    padding-top: 130px;
    @media ${t.tablet}{
        padding-top: 50px;
    }
    @media ${t.desktop}{
     
        padding-top: 0px;       
    }
  `,z=a.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: var(--btn-box-shadow);
@media ${t.tablet} {
  width: 400px;  
}
@media ${t.desktop} {
  width: 500px;
   
}
`,E=a.div`
    position: relative;
    display: flex;
    flex-direction: column;   
    
    justify-content: end;
    align-items: center;
    height: 450px;
    margin-bottom: 20px;
  
    .icon-mail{
      position: absolute;
      width: 40px;
      height: 40px;
      top:110px;
      left:220px;
      border-radius: 5px;
      box-shadow: var(--btn-box-shadow);
      @media ${t.tablet} {
        top:100px;
        left:45px;
      }
      @media ${t.desktop} {
        top:120px;
        left:70px;
      }
        
    }

`;a.h2`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);
    margin-bottom: 10px;
    text-align: center;

@media ${t.tablet} {
    font-size: 18px;
}
`;const N=a.button`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);  
   
    &:hover,
    &:focus{
    text-decoration: underline;
    text-decoration-color:var(--secondary-orange);
    text-decoration-thickness:2px;
    font-size: 18px;    
}
@media ${t.tablet} {
    position:absolute;
    top:280px;
    left:40px;
    font-size: 18px;
    &:hover,
    &:focus{
        font-size: 20px;
    }
  }
  @media ${t.desktop}{
    top: 370px;
    left:50px;
    font-size: 20px;
    &:hover,
    &:focus{
        font-size: 22px;
    }
  }
`,D=a.div`
   
    background-image: url("${w}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 90px;
    background-position-x: 20px;

@media ${t.tablet} {
    flex-direction: column;
    background-image: url("${B}"); 
    height:400px;
 
    background-position-y: 10px;
    background-position-x: 270px;
}
@media ${t.desktop} {
    display: flex;
    flex-direction: row;
    background-repeat:no-repeat;
    
    background-image: url("${I}");
    height:600px;
    margin-bottom: 0px;
    background-position-y: 10px;
    background-position-x: 220px;
}

`,V="/agua_vivo_app/assets/garage-Tlp1eJi3.jpg",T=()=>{const{token:o}=p(),[r]=l(),n=r.get("email"),i=x();m.useEffect(()=>{o&&i(u(o))},[o,i]);const c=d=>{d.preventDefault(),n&&i(k({email:n})).unwrap().then(()=>v.success("Email was resended successfully"))};return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx("div",{className:"container header-container",children:e.jsx(b,{children:e.jsx(f,{})})})}),e.jsx(C,{className:"section",children:e.jsxs(D,{children:[e.jsxs(E,{className:"container",children:[e.jsx(s,{message:"Check your email to verify your account"}),e.jsx(s,{message:"If you didn't receive an email, click this link to resend",verify:!0}),e.jsx(h,{className:"icon-mail",id:"mail"}),e.jsx(N,{onClick:c,children:"Resend"})]}),e.jsxs(P,{className:"container",children:[e.jsx(s,{message:"Here you could be your advertisment!",advert:!0}),e.jsx(z,{src:V,alt:"advertisment"})]})]})})]})};export{T as default};
