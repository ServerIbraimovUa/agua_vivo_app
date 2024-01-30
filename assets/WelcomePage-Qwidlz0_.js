import{u as t,j as e,d as i,I as s,w as r}from"./index-QpxYziNW.js";const l=t.ul`
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
`,o=t.div`
  padding: 24px 16px;
  background-color: var(--Secondary-color-2);
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  width: 494px;
  height: 332px;
  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: var(--bold-font-weight);
    line-height: 1.11;
  }
`;t.section`
  background-image: url(src/img/Background_Main_Page.svg);
  position: fixed;
  bottom: 0;
`;const c=()=>e.jsxs(o,{children:[e.jsx("h3",{children:"Why Drink Water"}),e.jsxs(l,{children:[e.jsx("li",{children:e.jsx("p",{children:"Supply of nutrients to all organs"})}),e.jsx("li",{children:e.jsx("p",{children:"Providing oxygen to the lungs"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining the work of the heart"})}),e.jsx("li",{children:e.jsx("p",{children:"Release of processed substances"})}),e.jsx("li",{children:e.jsx("p",{children:"Ensuring the stability of the internal environment"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining within the normal temperature"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining an immune system capable of resisting disease"})})]})]}),d=t.div`
  h1 {
    font-weight: var(--bold-font-weight);
    font-size: 28px;
    line-height: 1.14;
    @media ${i.tablet} {
      font-size: 36px;
      line-height: 1.16;
    }
  }
  h2 {
    font-size: 24px;
    line-height: 1.25;
    @media ${i.tablet} {
      font-size: 26px;
      line-height: 1.23;
    }
  }

  .headers {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: var(--bold-font-weight);
    line-height: 1.11;
  }
  .tracker {
    padding-bottom: 24px;
    padding-top: 24px;
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
`,x=t.ul`
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
`,h=({handleClick:n})=>e.jsxs(d,{children:[e.jsxs("div",{className:"headers",children:[e.jsx("h1",{className:"title",children:"Water consumption tracker"}),e.jsx("h2",{children:"Record daily water intake and track"})]}),e.jsxs("div",{className:"tracker",children:[e.jsx("h3",{children:"Tracker Benefits"}),e.jsxs(x,{children:[e.jsxs("li",{children:[e.jsx(s,{className:"welcome-icon",id:"calendar"}),e.jsx("p",{children:"Habit drive"})]}),e.jsxs("li",{children:[e.jsx(s,{className:"welcome-icon",id:"bar"}),e.jsx("p",{children:"View statistics"})]}),e.jsxs("li",{children:[e.jsx(s,{className:"welcome-icon",id:"tools"}),e.jsx("p",{children:"Personal rate setting"})]})]})]}),e.jsx("button",{className:"btn",onClick:n,type:"button",children:"Try tracker"})]}),p=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-image: url(src/assets/images/Back_Main_Mob1.png);
  background-size: cover;
  @media ${i.tablet} {
    background-image: url(src/assets/images/Back_Main_Tab1.png);
  }
  @media ${i.desktop} {
    flex-direction: row;
    justify-content: center;
    background-image: url(src/assets/images/Back_Main_Desc2.png),
      url(src/assets/images/Back_Main_Desc1.png);
    background-position: center, center 228px;
  }
`,m=()=>{const n=r(),a=()=>n("/signup");return e.jsx("section",{children:e.jsxs(p,{className:"container",children:[e.jsx(h,{handleClick:a}),e.jsx(c,{})]})})};export{m as default};
