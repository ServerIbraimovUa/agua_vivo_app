import{u as r,q as f,d as a,t as j,v as F,w as D,r as t,b as q,x as B,y as C,c as L,z as M,j as e,A as y,I as n,B as U,C as p,D as W}from"./index-uRYpQ9l7.js";const K=r.section`
  background-repeat: no-repeat;
  padding-top: 72px;
  background-image: url(${f});
  background-position: 50% 151px;

  @media ${a.tablet} {
    padding-top: 88px;
    background-image: url(${j});
    background-position: 50% 74px;
  }
  @media ${a.desktop} {
    padding-top: 196px;
    background-image: url(${F});
    background-position: 50% 48px;
  }
`,O=r.section`
  background-image: url(${f});
  background-repeat: no-repeat;
  padding-top: 72px;
  background-position: 50% 101px;

  @media ${a.tablet} {
    padding-top: 88px;
    background-image: url(${j});
    background-position: 50% 74px;
  }
  @media ${a.desktop} {
    padding-top: 210px;
    background-image: url(${D});
    background-position: 50% 73px;
  }
`,G=r.form`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  gap: 16px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-style: "Roboto-Regular", sans-serif;
    font-size: 18px;
    line-height: 1.33;
    .eye-input {
      position: relative;
    }
  }
  .gap-error {
    gap: 4px;
  }
  .gap-normal {
    gap: 8px;
  }

  .error {
    color: var(--secondary-red);
    font-size: 14px;
  }
  .input {
    width: 100%;
    height: 44px;
    border: 1px solid var(--secondary-light-blue);
    border-radius: 6px;
    padding: 12px 36px 12px 10px;
    color: var(--primary-blue);
    background-color: var(--primary-white);
    /* &:hover,
    &:focus {
      outline: none;
    } */

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: var(--secondary-blue);
    }
  }

  .input-red {
    border: 1px solid var(--secondary-red);
    color: var(--secondary-red);
    gap: 4px;
  }
  .input-blue {
    border: 1px solid var(--secondary-light-blue);
    color: var(--primary-blue);
    gap: 8px;
  }

  @media ${a.tablet} {
    max-width: 336px;
  }
  @media ${a.desktop} {
    max-width: 384px;
  }
`,Q=r.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  min-height: 396px;
  gap: 16px;
  .title {
    font-family: "Roboto-Medium", sans-serif;
    font-size: 26px;
    line-height: 1.23;
  }
  .auth-link {
    font-style: "Roboto-Regular", sans-serif;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primary-blue);
    &:hover {
      color: var(--secondary-orange);
    }
  }
  @media ${a.tablet} {
    max-width: 336px;
  }
  @media ${a.desktop} {
    max-width: 384px;
    margin-left: 728px;
  }

  .btn-google {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,w=r.span`
  .eye-icon,
  .eye-outline-icon {
    top: 50%;
    right: 2px;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 10;
    width: 16px;
    height: 16px;
    fill: var(--primary-blue);
  }
`,H=r.button`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
  @media ${a.tablet} {
    height: 44px;
  }
`,V=r.a`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
  @media ${a.tablet} {
    height: 44px;
  }
`,X=({repeat:i})=>{var x,m,h;const[d,k]=t.useState("password"),[v,S]=t.useState(!1),[c,N]=t.useState("password"),[$,I]=t.useState(!1),{register:l,handleSubmit:T,reset:P,formState:{errors:s}}=q({resolver:B(C(i))}),u=L(),g=M(),R=async A=>{const{email:z,password:E}=A,b={email:z,password:E};i?u(U(b)).unwrap().then(o=>{console.log(o),o.user.verificationToken?g(`/verify/${o.user.verificationToken}?email=${o.user.email}`):(p.success("Registration successful!"),g("/home"))}).catch(o=>{o.includes("409")&&p.error("Email in use.")}):u(W(b)).unwrap().then(()=>{p.success("Welcome to your account!"),P()}).catch(()=>{p.error("Please write the correct Email or Password")})};return e.jsxs(G,{onSubmit:T(R),children:[e.jsxs("label",{children:[e.jsx("span",{children:"Enter your email"}),e.jsxs("span",{className:s.email?"gap-error":"gap-normal",children:[e.jsx("input",{className:s.email?"input-red input":"input-blue input",...l("email",{required:!0}),type:"email",placeholder:"E-mail"}),e.jsx("span",{className:"error",children:s.email&&e.jsx("span",{children:(x=s.email)==null?void 0:x.message})})]})]}),e.jsxs("label",{className:s.password?"gap-error":"gap-label-normal",children:[e.jsx("span",{children:"Enter your password"}),e.jsxs("span",{className:s.password?"gap-error":"gap-normal",children:[e.jsxs("div",{className:"eye-input",children:[e.jsx("input",{className:s.password?"input-red input":"input-blue input",...l("password",{required:!0}),type:d,placeholder:"Password"}),e.jsx(w,{onClick:()=>y(d,k,S),children:v?e.jsx(n,{className:"eye-icon",id:"eye"}):e.jsx(n,{className:"eye-outline-icon",id:"eye-outline"})})]}),e.jsx("span",{className:"error",children:(m=s.password)==null?void 0:m.message})]})]}),i&&e.jsx(e.Fragment,{children:e.jsxs("label",{className:s.password?"gap-error":"gap-label-normal",children:[e.jsx("span",{children:"Repeat password"}),e.jsxs("span",{className:s.password?"gap-error":"gap-normal",children:[e.jsxs("div",{className:"eye-input",children:[e.jsx("input",{className:s.password?"input-red input":"input-blue input",...l("repeatPassword",{required:!0}),type:c,placeholder:"Repeat password"}),e.jsx(w,{onClick:()=>y(c,N,I),children:$?e.jsx(n,{className:"eye-icon",id:"eye"}):e.jsx(n,{className:"eye-outline-icon",id:"eye-outline"})})]}),e.jsx("span",{className:"error",children:(h=s.repeatPassword)==null?void 0:h.message})]})]})}),e.jsx(H,{className:"btn",type:"submit",children:i?"Sign Up":"Sign In"})]})};export{X as A,K as S,Q as a,V as b,O as c};
