import{j as e}from"./index-hZpdqlox.js";import{u as p}from"./index.esm-IGTR-YzG.js";const h=({repeat:a})=>{const{register:s,handleSubmit:d,watch:l,reset:n,formState:{errors:r}}=p(),t=i=>{console.log(i),n()},o=l("password","");return e.jsxs("form",{onSubmit:d(t),children:[e.jsxs("label",{children:[e.jsx("span",{children:"Enter your email"}),e.jsx("input",{...s("email",{required:!0}),type:"email",placeholder:"E-mail"}),r.email&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter your password"}),e.jsx("input",{...s("password",{required:!0}),type:"password",placeholder:"Password"}),r.password&&e.jsx("span",{children:"This field is required"})]}),a&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Repeat password"}),e.jsx("input",{...s("repeatPassword",{required:!0,validate:i=>i===o||"Passwords do not match"}),type:"password",placeholder:"Repeat password"}),r.repeatPassword&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Gender"}),e.jsx("input",{...s("gender",{required:"Please select a gender"}),value:"male",type:"radio"}),"Male",e.jsx("input",{...s("gender",{required:"Please select a gender"}),value:"female",type:"radio"}),"Female",r.gender&&e.jsx("span",{children:"This field is required"})]})]}),e.jsx("button",{type:"submit",children:a?"Sign Up":"Sign In"})]})};export{h as A};
