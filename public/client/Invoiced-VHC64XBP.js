import{a as l}from"./chunk-N6IYFVZN.js";import{a as t}from"./chunk-RNJ664U5.js";import{e as c}from"./chunk-BRLBBIEX.js";import{a as i}from"./chunk-DRECAGTU.js";import{f as r}from"./chunk-6QHUBW6R.js";import{b as m}from"./chunk-HOGY4L3A.js";import"./chunk-LIQWK7XC.js";import{c as n}from"./chunk-5TBO732O.js";var e=n(m(),1),b=({data:o,isLoading:s})=>{let{amount_invoiced:d,original_contract_amount:u,remain_to_invoice:v,total_actual_cost:p,gross_profit:x}=o?.billing_vs_actual,f=[{id:1,label:"Total Project Amount (no/Tax)",value:`${t(u)}
`,color:"text-emerald-600"},{id:2,label:"Invoiced to Date (no/Tax)",value:`${t(Number(d))}
`,color:"text-emerald-600"},{id:3,label:"Remaining to Invoice (no/Tax)",value:`${t(Number(v))}`,color:"text-emerald-600"},{id:4,label:"Total Actual Costs",value:`${t(Number(p))}`,color:"text-red-600"},{id:5,label:"Gross Profit",value:`${t(Number(x))}`,color:"text-emerald-600"}],N="flex justify-between items-center text-sm";return(0,e.jsx)(e.Fragment,{children:s?(0,e.jsx)("div",{className:"flex flex-col gap-3",children:(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{icon:c,label:"Invoiced vs Actual",bgColor:"#F3ECF5",color:"#CE6698"}),s?(0,e.jsx)(y,{}):(0,e.jsx)("div",{className:"space-y-1 mt-3",children:f.map(a=>(0,e.jsxs)("p",{className:N,children:[a.label," ",(0,e.jsx)("span",{className:`${a.color} font-semibold`,children:a.value})]},a.id))})]})}):(0,e.jsx)("div",{className:"flex justify-center items-center w-full h-full",children:(0,e.jsx)(r,{})})})},k=b,y=()=>{let o="flex justify-between items-center text-sm";return(0,e.jsxs)("div",{className:"space-y-1 mt-3",children:[(0,e.jsxs)("p",{className:o,children:["Total Project Amount (no/Tax)"," ",(0,e.jsx)(l,{className:"w-12 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Invoiced to Date (no/Tax) (77%)"," ",(0,e.jsx)(l,{className:"w-10 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Remaining to Invoice (no/Tax) (23%)"," ",(0,e.jsx)(l,{className:"w-12 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Total Actual Costs"," ",(0,e.jsx)(l,{className:"w-10 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Gross Profit ",(0,e.jsx)(l,{className:"w-12 h-2.5 rounded-xl"})]})]})};export{k as default};
