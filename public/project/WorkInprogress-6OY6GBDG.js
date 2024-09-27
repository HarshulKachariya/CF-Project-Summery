import{a as n}from"./chunk-3KC63S6F.js";import{b as o,i as r}from"./chunk-K7XNUO3B.js";import{a as d}from"./chunk-MPTY3R54.js";import{c,e as m}from"./chunk-AXJRDWLZ.js";var e=c(m(),1),$=({data:s,isLoading:p,currencyCode:a})=>{let{cost_completed:i,current_cost_budget:b,earned_revenue:g,forcast_completed:u,original_contract_amount:v,over_billing:f,total_actual_cost:_,under_billing:x}=s?.wip_widget||{},N=s?.billing_vs_actual?.amount_invoiced||0,l=t=>isNaN(Number(t))||Number(t)===null?0:Number(t).toFixed(0),T=t=>isNaN(Number(t))||Number(t)===null?0:Number(t).toFixed(2),C=[{id:1,label:"Total Project Amount (no/Tax)",value:`${o(l(v),a)}`,color:"text-success"},{id:2,label:"Invoiced to Date (no/Tax)",value:`${o(l(N),a)}
`,color:"text-success"},{id:3,label:"Current Cost Budget",value:`${o(l(b),a)}`,color:"text-danger"},{id:4,label:"Total Actual Costs",value:`${o(l(_),a)}`,color:"text-danger"},{id:5,label:"Cost % Complete",value:`${Number(i)!==0?r(T(i)):0}%`,color:"",tooltipText:"Total Actual Costs Divided by Current Cost Budget"},{id:6,label:"Forecasted % Complete",value:`${Number(u)!==0?r(l(u)):0}%`,color:"",tooltipText:"Project Manager input"},{id:7,label:"Earned Revenue",value:`${o(l(g),a)}`,color:"text-success",tooltipText:"Current Contact Value Multiplied by forecasted % Complete"},{id:8,label:"Over Billings",value:`${o(l(f),a)}`,color:"text-success",tooltipText:"Earned Revenue Minus Current Billings if Earned Revenue is less than Current Billings"},{id:9,label:" Under Billings",value:`${o(l(x),a)}`,color:"text-danger",tooltipText:"Earned Revenue Minus Current Billings if Earned Revenue is greater than Current Billings"}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d,{icon:"fa-solid fa-file-lines",label:"Work In Progress (WIP)",children:(0,e.jsx)("div",{className:"information-report ml-6",children:(0,e.jsx)(n,{title:"Read: Understanding Work in Progress",placement:"top",children:(0,e.jsx)("a",{href:"https://kb.contractorforeman.com/knowledge-base/understanding-the-work-in-progress-wip-report/",target:"_blank",children:(0,e.jsx)("i",{className:"fa-regular fa-circle-info"})})})})}),(0,e.jsx)("div",{className:"summary_details_block_body",children:(0,e.jsx)("ul",{className:"mt-sm",children:C.map(t=>(0,e.jsxs)("li",{className:"d-flex justify-content-between",children:[(0,e.jsx)("span",{children:t.label}),p?(0,e.jsx)("div",{className:"custom-shimmer amt_shimmer"}):(0,e.jsx)(n,{title:t.tooltipText,placement:"right",children:(0,e.jsx)("span",{className:`${t.color} project_summery_amt`,children:t.value})})]},t.id))})})]})},B=$;export{B as default};
