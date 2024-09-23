import{c as n}from"./chunk-XVLYXDCD.js";import{a as o}from"./chunk-RNJ664U5.js";import{a as c}from"./chunk-WBVLUQF5.js";import{c as a,e as r,f as s}from"./chunk-VBSOK5UO.js";var e=a(r(),1),_=({data:i,isLoading:m})=>{let{cost_completed:u,current_cost_budget:d,earned_revenue:b,forcast_completed:p,original_contract_amount:t,over_billing:f,total_actual_cost:g,under_billing:v}=i,N=[{id:1,label:"Total Project Amount (no/Tax)",value:`${o(Number(t))}
`,color:"text-success"},{id:2,label:"Invoiced to Date (no/Tax)",value:`${o(Number(t))}
`,color:"text-success"},{id:3,label:"Current Cost Budget",value:`${o(Number(d))}`,color:"text-danger"},{id:4,label:"Total Actual Costs",value:`${o(Number(g))}`,color:"text-danger"},{id:5,label:"Cost % Complete",value:`${Number(u).toFixed(2)}%`,color:""},{id:6,label:"Forecasted % Complete",value:`${Number(p)}%`,color:""},{id:7,label:"Earned Revenue",value:`${o(Number(b))}`,color:"text-success"},{id:8,label:"Over Billings",value:`${o(Number(f))}`,color:"text-success"},{id:9,label:" Under Billings",value:`${o(Number(v))}`,color:"text-danger"}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c,{icon:"fa-solid fa-file-lines",label:"Work In Progress (WIP)",children:(0,e.jsx)("div",{className:"information-report ml-6",children:(0,e.jsx)(n,{title:"Read: Understanding Work in Progress",placement:"top",children:(0,e.jsx)("a",{href:"https://kb.contractorforeman.com/knowledge-base/understanding-the-work-in-progress-wip-report/",target:"_blank",children:(0,e.jsx)("i",{className:"fa-regular fa-circle-info"})})})})}),(0,e.jsx)("div",{className:"summary_details_block_body",children:(0,e.jsx)("ul",{className:"mt-sm",children:N.map(l=>(0,e.jsxs)("li",{className:"d-flex justify-content-between",children:[(0,e.jsx)("span",{children:l.label}),(0,e.jsx)("span",{className:"project_summery_amt",children:m?(0,e.jsx)(s,{className:"odd:w-12 h-2.5 rounded-xl"}):(0,e.jsx)("span",{className:`${l.color} font-semibold`,children:l.value})})]},l.id))})})]})},y=_;export{y as default};
