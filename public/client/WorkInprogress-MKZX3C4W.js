import{c as r}from"./chunk-VSYRKOWN.js";import{a as o}from"./chunk-4XSHID3A.js";import{a as _}from"./chunk-MPTY3R54.js";import{c as b,e as v}from"./chunk-AXJRDWLZ.js";var e=b(v(),1),T=({data:n,isLoading:f,currencyCode:a})=>{let{cost_completed:s,current_cost_budget:i,earned_revenue:c,forcast_completed:u,original_contract_amount:m,over_billing:d,total_actual_cost:p,under_billing:g}=n?.wip_widget||{};console.log("qwerty",s,i,c,u,m,d,p,g);let x=n?.billing_vs_actual?.amount_invoiced||0,l=t=>(console.log("format",isNaN(Number(t))||Number(t)===null?0:Number(t)),isNaN(Number(t))||Number(t)===null?0:Number(t)),N=[{id:1,label:"Total Project Amount (no/Tax)",value:`${o(l(m),a)}`,color:"text-success"},{id:2,label:"Invoiced to Date (no/Tax)",value:`${o(l(x),a)}
`,color:"text-success"},{id:3,label:"Current Cost Budget",value:`${o(l(i),a)}`,color:"text-danger"},{id:4,label:"Total Actual Costs",value:`${o(l(p),a)}`,color:"text-danger"},{id:5,label:"Cost % Complete",value:`${l(s).toFixed(2)}%`,color:"",tooltipText:"Total Actual Costs Divided by Current Cost Budget"},{id:6,label:"Forecasted % Complete",value:`${l(u)}%`,color:"",tooltipText:"Project Manager input"},{id:7,label:"Earned Revenue",value:`${o(l(c),a)}`,color:"text-success",tooltipText:"Current Contact Value Multiplied by forecasted % Complete"},{id:8,label:"Over Billings",value:`${o(l(d),a)}`,color:"text-success",tooltipText:"Earned Revenue Minus Current Billings if Earned Revenue is less than Current Billings"},{id:9,label:" Under Billings",value:`${o(l(g),a)}`,color:"text-danger",tooltipText:"Earned Revenue Minus Current Billings if Earned Revenue is greater than Current Billings"}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_,{icon:"fa-solid fa-file-lines",label:"Work In Progress (WIP)",children:(0,e.jsx)("div",{className:"information-report ml-6",children:(0,e.jsx)(r,{title:"Read: Understanding Work in Progress",placement:"top",children:(0,e.jsx)("a",{href:"https://kb.contractorforeman.com/knowledge-base/understanding-the-work-in-progress-wip-report/",target:"_blank",children:(0,e.jsx)("i",{className:"fa-regular fa-circle-info"})})})})}),(0,e.jsx)("div",{className:"summary_details_block_body",children:(0,e.jsx)("ul",{className:"mt-sm",children:N.map(t=>(0,e.jsxs)("li",{className:"d-flex justify-content-between",children:[(0,e.jsx)("span",{children:t.label}),f?(0,e.jsx)("div",{className:"custom-shimmer amt_shimmer"}):(0,e.jsx)(r,{title:t.tooltipText,placement:"right",children:(0,e.jsx)("span",{className:`${t.color} project_summery_amt`,children:t.value})})]},t.id))})})]})},k=T;export{k as default};
