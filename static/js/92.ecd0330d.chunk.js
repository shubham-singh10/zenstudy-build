"use strict";(self.webpackChunkzenstudy_frontend=self.webpackChunkzenstudy_frontend||[]).push([[92],{8692:(e,t,s)=>{s.d(t,{A:()=>r});s(5043);var a=s(5200),n=s(579);const r=e=>{let{currentPage:t,setCurrentPage:s,data:r,itemsPerPage:l}=e;const c=Math.ceil(r.length/l);return(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-4 mt-10",children:[(0,n.jsxs)("button",{className:"px-6 flex items-center justify-center py-2 rounded-full ".concat(1===t?"bg-gray-300":"bg-blue-100 hover:bg-blue-200"," text-blue-700 font-bold"),onClick:()=>s((e=>Math.max(e-1,1))),disabled:1===t,children:[(0,n.jsx)(a.irw,{className:"h-5 w-5"})," Previous"]}),(0,n.jsx)("span",{children:"Page ".concat(t," of ").concat(c)}),(0,n.jsxs)("button",{className:"px-8 flex items-center justify-center py-2 rounded-full ".concat(t===c?"bg-gray-300":"bg-blue-100 hover:bg-blue-200"," text-blue-700 font-bold"),onClick:()=>s((e=>Math.min(e+1,c))),disabled:t===c,children:["Next ",(0,n.jsx)(a.fOo,{className:"h-5 w-5"})]})]})}},92:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(5043),n=s(3216),r=s(8692),l=s(184),c=s(1880),i=s(579);const o=e=>{let{course:t}=e;const s=(0,n.Zp)(),[r,l]=(0,a.useState)("/assets/upcoming.webp"),[c,o]=(0,a.useState)(!0);return(0,i.jsxs)("div",{className:"max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white",children:[(0,i.jsxs)("div",{className:"relative",children:[c&&(0,i.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-2xl",children:(0,i.jsx)("div",{className:"w-24 h-24 bg-gray-400 rounded-full"})}),(0,i.jsx)("img",{src:r,crossOrigin:"anonymous",alt:t.course_id.title,className:"w-full h-52 rounded-2xl transition-opacity duration-500 ".concat(c?"opacity-0":"opacity-100"),onLoad:()=>{o(!1),l(t.imageUrl)}})]}),(0,i.jsxs)("div",{className:"px-4 py-2",children:[(0,i.jsx)("div",{className:"font-bold text-lg h-20 mb-1",children:t.course_id.title}),(0,i.jsxs)("p",{className:"text-gray-600 text-xs",children:["Created at: ",(e=>{const t=new Date(e),s=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return"".concat(n,"-").concat(a,"-").concat(s)})(t.course_id.createdAt)]}),(0,i.jsx)("p",{className:"text-gray-600 text-xs",children:t.course_id.day})]}),(0,i.jsxs)("div",{className:"px-4 pt-2 pb-2",children:[(0,i.jsxs)("div",{className:"relative pt-1",children:[(0,i.jsx)("div",{className:"flex mb-2 items-center justify-between",children:(0,i.jsx)("div",{className:"text-xs text-gray-500",children:"progress % Completed"})}),(0,i.jsx)("div",{className:"overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200",children:(0,i.jsx)("div",{style:{width:"progress %"},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"})})]}),(0,i.jsx)("button",{className:"bg-blue-600 hover:bg-blue-700 mt-2 text-white font-bold py-1 px-3 rounded-full",onClick:()=>s("/watch-course",{state:{id:t._id}}),children:"Continue Learning"})]})]})},d=()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(!0),[d,u]=(0,a.useState)(1),[x,h]=(0,a.useState)(""),m=c.A.get("access_tokennew");let g=null;if(m)try{g=m}catch(b){console.error("Error decoding token:",b)}(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat("https://api.zenstudy.in/","zenstudy/api/payment/purchaseCourse"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user_id:g})});if(204===e.status)return t([]),void n(!1);if(!e.ok)throw new Error("Network response was not ok");const s=(await e.json()).purchaseCourses.filter((e=>null!==e.course_id));if(0===s.length)t([]);else{const e=s.map((e=>({...e,imageUrl:"".concat("https://api.zenstudy.in/","zenstudy/api/image/getimage/").concat(e.course_id.thumbnail)})));t(e)}n(!1)}catch(b){n(!1)}})()}),[g]);const p=e.filter((e=>{var t;return null===(t=e.course_id)||void 0===t?void 0:t.title.toLowerCase().includes(x.toLowerCase())}));if(s)return(0,i.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,i.jsx)("div",{className:"text-4xl font-bold animate-pulse",children:"ZenStudy."})});const f=p.slice(6*(d-1),6*d);return(0,i.jsx)("div",{className:"container mx-auto p-4 flex flex-col items-center gap-4",children:0===e.length?(0,i.jsx)("div",{className:"flex text-center justify-center items-center text-2xl md:text-3xl lg:text-4xl  text-gray-500",children:"No courses found..."}):(0,i.jsxs)(a.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center  justify-center bg-blue-100 rounded-full px-4 py-2 mb-4 w-full md:w-1/2 lg:w-1/2 ",children:[(0,i.jsx)("input",{type:"text",placeholder:"Search Our course by title",onChange:e=>h(e.target.value),className:"bg-blue-100 rounded-l-full focus:outline-none  py-2 w-full text-gray-700"}),(0,i.jsx)("button",{className:"text-blue-500",children:(0,i.jsx)(l.KSO,{})})]}),(0,i.jsx)("div",{className:"flex flex-wrap justify-center gap-10",children:f.map(((e,t)=>(0,i.jsx)(o,{course:e},t)))}),(0,i.jsx)(r.A,{setCurrentPage:u,currentPage:d,data:p,itemsPerPage:6})]})})}}}]);
//# sourceMappingURL=92.ecd0330d.chunk.js.map