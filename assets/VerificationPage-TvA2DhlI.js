import{u as a,d as t,a as d,Q as x,S as g,e as m,r as u,T as b,j as e,U as f,V as v,W as h,I as k,X as j,K as y}from"./index-XVPM-GeZ.js";import{P as n}from"./Popover-1qUR3dKT.js";const $="/agua_vivo_app/assets/BackgroundHomeMobile--bJS4c7V.png",w="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",B="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",_="/agua_vivo_app/assets/BottleHomeMobile-YibEMZyu.png",E="/agua_vivo_app/assets/BottleHomeTablet-obPHwKf-.png",I="/agua_vivo_app/assets/BottleHomeDesk-odvCWdoI.png",P=a.section`
    background-image: url("${$}");
    display: flex;
    background-position-x: 70px;
    flex-direction: column;
    justify-content: space-between;

@media ${t.tablet} {
    background-image: url("${w}"); 
}
@media ${t.desktop} {
    background-image: url("${B}"); 
  }
`,H=a.div`
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
  `,D=a.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: var(--btn-box-shadow);
@media ${t.tablet} {
  width: 400px;  
}
@media ${t.desktop} {
  width: 500px;
   
}
`,M=a.div`
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
`;const z=a.button`
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
`,C=a.div`
   
    background-image: url("${_}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 90px;
    background-position-x: 20px;

@media ${t.tablet} {
    flex-direction: column;
    background-image: url("${E}"); 
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

`,N="/agua_vivo_app/assets/garage-Tlp1eJi3.jpg",S=()=>{const{t:o}=d(),{token:i}=x(),[p]=g(),r=p.get("email"),s=m();u.useEffect(()=>{i&&s(b(i))},[i,s]);const c=l=>{l.preventDefault(),r&&s(j({email:r})).unwrap().then(()=>y.success(`${o("verifyEmail.notify")}`))};return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("div",{className:"container header-container",children:e.jsx(v,{children:e.jsx(h,{})})})}),e.jsx(P,{className:"section",children:e.jsxs(C,{children:[e.jsxs(M,{className:"container",children:[e.jsx(n,{message:o("verifyEmail.title1")}),e.jsx(n,{message:o("verifyEmail.link"),verify:!0}),e.jsx(k,{className:"icon-mail",id:"mail"}),e.jsx(z,{onClick:c,children:o("verifyEmail.resend")})]}),e.jsxs(H,{className:"container",children:[e.jsx(n,{message:o("verifyEmail.title2"),advert:!0}),e.jsx(D,{src:N,alt:"advertisment"})]})]})})]})};export{S as default};
