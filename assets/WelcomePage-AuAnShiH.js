import{u as t,d as i,j as e,I as a,z as o}from"./index-mlDtvbAh.js";const l="/agua_vivo_app/assets/welcomeMob-9xutC1rA.png",r="/agua_vivo_app/assets/WelcomeTab-KNRMQHDm.png",d="/agua_vivo_app/assets/WelcomeDesk-FJOaIO84.png",c=t.section`
  &.welcome-section {
    background-image: url(${l});
    background-position: center;
    padding-top: 68px;

    background-repeat: no-repeat;

    @media ${i.tablet} {
      background-image: url(${r});
      padding-top: 88px;
    }
    @media ${i.desktop} {
      background-image: url(${d});
      padding-top: 97px;
      background-size: 100%;
      background-position-y: 96px;
    }
  }
`,p=t.ul`
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
      content: "";
      bottom: 43%;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #407bff;
    }
  }
`,x=t.div`
  padding: 24px 16px;
  background-color: var(--secondary-white);
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media ${i.tablet} {
    width: 494px;
    padding: 32px 24px;
  }
  @media ${i.desktop} {
    height: 332px;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    line-height: 1.11;
  }
`,h=()=>e.jsxs(x,{children:[e.jsx("h3",{children:"Why Drink Water"}),e.jsxs(p,{children:[e.jsx("li",{children:e.jsx("p",{children:"Supply of nutrients to all organs"})}),e.jsx("li",{children:e.jsx("p",{children:"Providing oxygen to the lungs"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining the work of the heart"})}),e.jsx("li",{children:e.jsx("p",{children:"Release of processed substances"})}),e.jsx("li",{children:e.jsx("p",{children:"Ensuring the stability of the internal environment"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining within the normal temperature"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining an immune system capable of resisting disease"})})]})]}),g=t.div`
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
`,m=t.ul`
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
`,u=({handleClick:n})=>e.jsxs(g,{children:[e.jsx("h1",{className:"title",children:"Water consumption tracker"}),e.jsx("h2",{children:"Record daily water intake and track"}),e.jsxs("div",{className:"tracker",children:[e.jsx("h3",{children:"Tracker Benefits"}),e.jsxs(m,{children:[e.jsxs("li",{children:[e.jsx(a,{className:"welcome-icon",id:"calendar"}),e.jsx("p",{children:"Habit drive"})]}),e.jsxs("li",{children:[e.jsx(a,{className:"welcome-icon",id:"bar"}),e.jsx("p",{children:"View statistics"})]}),e.jsxs("li",{children:[e.jsx(a,{className:"welcome-icon",id:"tools"}),e.jsx("p",{children:"Personal rate setting"})]})]})]}),e.jsx("button",{className:"btn",onClick:n,type:"button",children:"Try tracker"})]}),b=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${i.tablet} {
    gap: 60px;
  }
  @media ${i.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    align-items: flex-end;
  }
`,j=()=>{const n=o(),s=()=>n("/signup");return e.jsx(c,{className:"welcome-section",children:e.jsxs(b,{className:"container",children:[e.jsx(u,{handleClick:s}),e.jsx(h,{})]})})};export{j as default};
