import{u as t,d as o,G as d,H as l,c as x,r as g,J as m,j as e,K as u,P as b,Q as f,I as h,S as v,E as k}from"./index-ea3u_MwZ.js";import{P as i}from"./Popover-n9Nq3cVx.js";const j="/agua_vivo_app/assets/BackgroundHomeMobile--bJS4c7V.png",y="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",$="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",w="/agua_vivo_app/assets/BottleHomeMobile-YibEMZyu.png",B="/agua_vivo_app/assets/BottleHomeTablet-obPHwKf-.png",_="/agua_vivo_app/assets/BottleHomeDesk-odvCWdoI.png",H=t.section`
    background-image: url("${j}");
    display: flex;
    background-position-x: 70px;
    flex-direction: column;
    justify-content: space-between;

@media ${o.tablet} {
    background-image: url("${y}"); 
}
@media ${o.desktop} {
    background-image: url("${$}"); 
  }
`,I=t.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center; 
    padding-top: 130px;
    @media ${o.tablet}{
        padding-top: 50px;
    }
    @media ${o.desktop}{
     
        padding-top: 0px;       
    }
  `,P=t.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: var(--btn-box-shadow);
@media ${o.tablet} {
  width: 400px;  
}
@media ${o.desktop} {
  width: 500px;
   
}
`,C=t.div`
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
      @media ${o.tablet} {
        top:100px;
        left:45px;
      }
      @media ${o.desktop} {
        top:120px;
        left:70px;
      }
        
    }

`;t.h2`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);
    margin-bottom: 10px;
    text-align: center;

@media ${o.tablet} {
    font-size: 18px;
}
`;const D=t.button`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);  
   
    &:hover,
    &:focus{
    text-decoration: underline;
    text-decoration-color:var(--secondary-orange);
    text-decoration-thickness:2px;
    font-size: 18px;    
}
@media ${o.tablet} {
    position:absolute;
    top:280px;
    left:40px;
    font-size: 18px;
    &:hover,
    &:focus{
        font-size: 20px;
    }
  }
  @media ${o.desktop}{
    top: 370px;
    left:50px;
    font-size: 20px;
    &:hover,
    &:focus{
        font-size: 22px;
    }
  }
`,E=t.div`
   
    background-image: url("${w}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 90px;
    background-position-x: 20px;

@media ${o.tablet} {
    flex-direction: column;
    background-image: url("${B}"); 
    height:400px;
 
    background-position-y: 10px;
    background-position-x: 270px;
}
@media ${o.desktop} {
    display: flex;
    flex-direction: row;
    background-repeat:no-repeat;
    
    background-image: url("${_}");
    height:600px;
    margin-bottom: 0px;
    background-position-y: 10px;
    background-position-x: 220px;
}

`,M="/agua_vivo_app/assets/garage-Tlp1eJi3.jpg",S=()=>{const{token:a}=d(),[r]=l(),n=r.get("email"),s=x();g.useEffect(()=>{a&&s(m(a))},[a,s]);const p=c=>{c.preventDefault(),n&&s(v({email:n})).unwrap().then(()=>k.success("Email was resended successfully"))};return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx("div",{className:"container header-container",children:e.jsx(b,{children:e.jsx(f,{})})})}),e.jsx(H,{className:"section",children:e.jsxs(E,{children:[e.jsxs(C,{className:"container",children:[e.jsx(i,{message:"Check your email to verify your account"}),e.jsx(i,{message:"If you didn't receive an email, click this link to resend",verify:!0}),e.jsx(h,{className:"icon-mail",id:"mail"}),e.jsx(D,{onClick:p,children:"Resend"})]}),e.jsxs(I,{className:"container",children:[e.jsx(i,{message:"Here could be your advertisment!",advert:!0}),e.jsx(P,{src:M,alt:"advertisment"})]})]})})]})};export{S as default};
