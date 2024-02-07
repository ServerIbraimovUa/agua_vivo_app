import{u as r,z as j,d as o,A as k,B as E,C as q,a as B,r as t,c as C,D as L,E as M,e as G,F as H,j as e,G as f,I as p,H as J,J as l,K}from"./index-D3UdfNnp.js";const V=r.section`
  background-repeat: no-repeat;
  padding-top: 72px;
  background-image: url(${j});
  background-position: 50% 151px;

  @media ${o.tablet} {
    padding-top: 88px;
    background-image: url(${k});
    background-position: 50% 74px;
  }
  @media ${o.desktop} {
    padding-top: 196px;
    background-image: url(${E});
    background-position: 50% 48px;
  }
`,W=r.section`
  background-image: url(${j});
  background-repeat: no-repeat;
  padding-top: 72px;
  background-position: 50% 101px;

  @media ${o.tablet} {
    padding-top: 88px;
    background-image: url(${k});
    background-position: 50% 74px;
  }
  @media ${o.desktop} {
    padding-top: 210px;
    background-image: url(${q});
    background-position: 50% 73px;
  }
`,U=r.form`
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

  @media ${o.tablet} {
    max-width: 336px;
  }
  @media ${o.desktop} {
    max-width: 384px;
  }
`,X=r.div`
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
  @media ${o.tablet} {
    max-width: 336px;
  }
  @media ${o.desktop} {
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
`,O=r.button`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
  @media ${o.tablet} {
    height: 44px;
  }
`,Y=r.a`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
  @media ${o.tablet} {
    height: 44px;
  }
`,Z=({repeat:n})=>{var m,h,b;const{t:s}=B(),[c,v]=t.useState("password"),[$,S]=t.useState(!1),[u,N]=t.useState("password"),[I,T]=t.useState(!1),{register:d,handleSubmit:P,reset:A,formState:{errors:a}}=C({resolver:L(M(n))}),g=G(),x=H(),z=async R=>{const{email:F,password:D}=R,y={email:F,password:D};n?g(J(y)).unwrap().then(i=>{console.log(i),i.user.verificationToken?x(`/verify/${i.user.verificationToken}?email=${i.user.email}`):(l.success(`${s("signup.notifySuccess")}`),x("/home"))}).catch(i=>{i.includes("409")&&l.error(`${s("signup.notifyError")}`)}):g(K(y)).unwrap().then(()=>{l.success(`${s("signin.notifySuccess")}`),A()}).catch(()=>{l.error(`${s("signin.notifyError")}`)})};return e.jsxs(U,{onSubmit:P(z),children:[e.jsxs("label",{children:[e.jsx("span",{children:s("signin.label1")}),e.jsxs("span",{className:a.email?"gap-error":"gap-normal",children:[e.jsx("input",{className:a.email?"input-red input":"input-blue input",...d("email",{required:!0}),type:"email",placeholder:s("authPlaceholders.email")}),e.jsx("span",{className:"error",children:a.email&&e.jsx("span",{children:(m=a.email)==null?void 0:m.message})})]})]}),e.jsxs("label",{className:a.password?"gap-error":"gap-label-normal",children:[e.jsx("span",{children:s("signin.label2")}),e.jsxs("span",{className:a.password?"gap-error":"gap-normal",children:[e.jsxs("div",{className:"eye-input",children:[e.jsx("input",{className:a.password?"input-red input":"input-blue input",...d("password",{required:!0}),type:c,placeholder:s("authPlaceholders.password")}),e.jsx(w,{onClick:()=>f(c,v,S),children:$?e.jsx(p,{className:"eye-icon",id:"eye"}):e.jsx(p,{className:"eye-outline-icon",id:"eye-outline"})})]}),e.jsx("span",{className:"error",children:(h=a.password)==null?void 0:h.message})]})]}),n&&e.jsx(e.Fragment,{children:e.jsxs("label",{className:a.password?"gap-error":"gap-label-normal",children:[e.jsx("span",{children:s("signin.label3")}),e.jsxs("span",{className:a.password?"gap-error":"gap-normal",children:[e.jsxs("div",{className:"eye-input",children:[e.jsx("input",{className:a.password?"input-red input":"input-blue input",...d("repeatPassword",{required:!0}),type:u,placeholder:s("signin.label3")}),e.jsx(w,{onClick:()=>f(u,N,T),children:I?e.jsx(p,{className:"eye-icon",id:"eye"}):e.jsx(p,{className:"eye-outline-icon",id:"eye-outline"})})]}),e.jsx("span",{className:"error",children:(b=a.repeatPassword)==null?void 0:b.message})]})]})}),e.jsx(O,{className:"btn",type:"submit",children:n?`${s("signin.signup")}`:`${s("signin.title")}`})]})};export{Z as A,V as S,X as a,Y as b,W as c};
