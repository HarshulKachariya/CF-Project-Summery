import"./chunk-N6IYFVZN.js";import{a as o}from"./chunk-RNJ664U5.js";import{e as a}from"./chunk-BRLBBIEX.js";import{a as c}from"./chunk-DRECAGTU.js";import{f as n}from"./chunk-6QHUBW6R.js";import{b as s}from"./chunk-HOGY4L3A.js";import"./chunk-LIQWK7XC.js";import{c as t}from"./chunk-5TBO732O.js";var e=t(s(),1),N=({data:m,isLoading:r})=>{let{amount_invoiced:i,original_contract_amount:d,remain_to_invoice:u,total_actual_cost:v,gross_profit:p}=m?.billing_vs_actual,x=[{id:1,label:"Total Project Amount (no/Tax)",value:`${o(d)}
`,color:"text-emerald-600"},{id:2,label:"Invoiced to Date (no/Tax)",value:`${o(Number(i))}
`,color:"text-emerald-600"},{id:3,label:"Remaining to Invoice (no/Tax)",value:`${o(Number(u))}`,color:"text-emerald-600"},{id:4,label:"Total Actual Costs",value:`${o(Number(v))}`,color:"text-red-600"},{id:5,label:"Gross Profit",value:`${o(Number(p))}`,color:"text-emerald-600"}],f="flex justify-between items-center text-sm";return(0,e.jsx)(e.Fragment,{children:r?(0,e.jsx)("div",{className:"flex justify-center items-center w-full h-full",children:(0,e.jsx)(n,{})}):(0,e.jsx)("div",{className:"flex flex-col gap-3",children:(0,e.jsxs)("div",{children:[(0,e.jsx)(c,{icon:a,label:"Invoiced vs Actual",bgColor:"#F3ECF5",color:"#CE6698"}),(0,e.jsx)("div",{className:"space-y-1 mt-3",children:x.map(l=>(0,e.jsxs)("p",{className:f,children:[l.label," ",(0,e.jsx)("span",{className:`${l.color} font-semibold`,children:l.value})]},l.id))})]})})})},_=N;export{_ as default};
