import{u as s,d as i,a as l,j as e,I as n,r,F as d,M as p}from"./index-_zWkHgDS.js";import{c as x,d as h,e as m}from"./TeamModal-1s5H0w7l.js";const g="/agua_vivo_app/assets/welcomeMob-9xutC1rA.png",b="/agua_vivo_app/assets/WelcomeTab-KNRMQHDm.png",u="/agua_vivo_app/assets/WelcomeDesk-FJOaIO84.png",j=s.section`
  &.welcome-section {
    background-image: url(${g});
    background-position: center;
    padding-top: 68px;

    background-repeat: no-repeat;

    @media ${i.tablet} {
      background-image: url(${b});
      padding-top: 88px;
    }
    @media ${i.desktop} {
      background-image: url(${u});
      padding-top: 97px;
      background-size: 100%;
      background-position-y: 96px;
    }
  }
`,w=s.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    padding-left: 16px;
    display: flex;
    position: relative;
    &::before {
      left: 0;
      content: '';
      bottom: 43%;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #407bff;
    }
  }
`,f=s.div`
  padding: 24px 16px 50px 16px;
  background-color: var(--secondary-white);
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media ${i.tablet} {
    width: 494px;
    padding: 32px 24px 50px 24px;
  }
  @media ${i.desktop} {
    min-height: 332px;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    line-height: 1.11;
  }
`,k=()=>{const{t}=l();return e.jsxs(f,{children:[e.jsx("h3",{children:t("welcome.subtitle3Why")}),e.jsxs(w,{children:[e.jsx("li",{children:e.jsx("p",{children:t("welcome.subtitle3WhyLI1")})}),e.jsx("li",{children:e.jsx("p",{children:t("welcome.subtitle3WhyLI2")})}),e.jsx("li",{children:e.jsx("p",{children:t("welcome.subtitle3WhyLI3")})}),e.jsx("li",{children:e.jsx("p",{children:t("welcome.subtitle3WhyLI4")})}),e.jsx("li",{children:e.jsx("p",{children:t("welcome.subtitle3WhyLI5")})}),e.jsx("li",{children:e.jsx("p",{children:t("welcome.subtitle3WhyLI6")})}),e.jsx("li",{children:e.jsx("p",{children:t("welcome.subtitle3WhyLI7")})})]})]})},y=s.div`
  h1 {
    font-weight: var(--bold-font-weight);
    font-size: 28px;
    line-height: 1.14;
    margin-bottom: 16px;
    width: 280px;

    @media ${i.tablet} {
      width: auto;
      font-size: 36px;
      line-height: 1.16;
    }
  }
  h2 {
    font-size: 24px;
    line-height: 1.25;
    width: 199px;
    margin-bottom: 24px;

    @media ${i.tablet} {
      width: auto;
      font-size: 26px;
      line-height: 1.23;
    }
  }

  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    line-height: 1.11;
  }
  .tracker {
    margin-bottom: 24px;    
  }
  .welcome-icon {
    width: 32px;
    height: 32px;
    @media ${i.tablet} {
      width: 40px;
      height: 40px;
    }
  }
  .btn {
    display: inline-flex;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    width: 280px;
    height: 36px;
    @media ${i.tablet} {
      width: 336px;
      height: 44px;
    }
    @media ${i.desktop} {
      width: 384px;
      height: 44px;
    }

    line-height: 1.25;
    @media ${i.tablet} {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`,v=s.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${i.tablet} {
    flex-direction: row;
  }
  @media ${i.desktop} {
    flex-direction: column;
  }
  gap: 16px;

  li {
    display: flex;
    gap: 8px;
    align-items: center;
    p {
      line-height: 1.25;
    }
  }
`,$=({handleClick:t})=>{const{t:o}=l();return e.jsxs(y,{children:[e.jsx("h1",{className:"title",children:o("welcome.title")}),e.jsx("h2",{children:o("welcome.subtitle")}),e.jsxs("div",{className:"tracker",children:[e.jsx("h3",{children:o("welcome.subtitle3")}),e.jsxs(v,{children:[e.jsxs("li",{children:[e.jsx(n,{className:"welcome-icon",id:"calendar"}),e.jsx("p",{children:o("welcome.trackerLi1")})]}),e.jsxs("li",{children:[e.jsx(n,{className:"welcome-icon",id:"bar"}),e.jsx("p",{children:o("welcome.trackerLi2")})]}),e.jsxs("li",{children:[e.jsx(n,{className:"welcome-icon",id:"tools"}),e.jsx("p",{children:o("welcome.trackerLi3")})]})]})]}),e.jsx("button",{className:"btn",onClick:t,type:"button",children:o("welcome.button")})]})},W=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;

  @media ${i.tablet} {
    gap: 60px;
  }
  @media ${i.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    align-items: flex-end;
  }
`,I=s.div`
  position: absolute;
  bottom: 50px;
  right: 35px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 7px;

  @media ${i.tablet} {
    position: absolute;
    bottom: 50px;
    right: 425px;
  }

  @media ${i.desktop} {
    position: absolute;
    bottom: 50px;
    right: 230px;
  }
`,T=()=>{const[t,o]=r.useState(!1),a=d(),c=()=>a("/signup");return e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"welcome-section",children:e.jsxs(W,{className:"container",children:[e.jsx($,{handleClick:c}),e.jsx(k,{}),e.jsxs(I,{children:[e.jsx(x,{children:"copyright © 2024 | "}),e.jsx(h,{onClick:()=>o(!0),children:"by TeamForce"})]})]})}),t&&e.jsx(p,{setVisible:o,isTeamModal:!0,title:"Force in a team",children:e.jsx(m,{})})]})};export{T as default};
