import{a as p}from"/build/_shared/chunk-5DNCLJX5.js";import{d as c}from"/build/_shared/chunk-OF7TX32X.js";import{a as l}from"/build/_shared/chunk-FZCUADOT.js";import{a as m}from"/build/_shared/chunk-GLL77XL4.js";import"/build/_shared/chunk-DGA7IYTA.js";import"/build/_shared/chunk-L4JQJ63A.js";import{b as n}from"/build/_shared/chunk-BVJBT3X3.js";import{d as i}from"/build/_shared/chunk-T36URGAI.js";var t=i(n(),1),b=({data:a})=>{let o=a?.billing_vs_actual,e=a?.all_item_total;console.log(a);let u=s=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(s),r=p().default,d={chart:{id:"chart1",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",dataLabels:{position:"top"}}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"]},dataLabels:{enabled:!1},stroke:{colors:["transparent"],width:5},tooltip:{shared:!0,intersect:!1,y:{formatter:function(s){return u(Number(s))}}},colors:["#7989A9","#F9C75C"],legend:{show:!1,position:"top"}};console.log(e,e?.total?.estimated_total);let f=[{name:"Invoiced to Date",data:[e?.total?.commited_total,e?.total?.actual_total,e?.labor?.actual_total,Number(o?.amount_invoiced/100)]},{name:"Total Project Amount",data:[e?.unassigned?.estimated_total,e?.total?.estimated_total,e?.labor?.estimated_total,Number(o?.original_contract_amount/100)]}];return(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsx)(m,{icon:c,label:"Summary Percentages",bgColor:"#FEF6E5",color:"#F8AB07",className:"text-base"}),r?(0,t.jsx)(r,{type:"bar",height:307,responsive:!0,options:d,series:f}):(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)(v,{})})]})},g=b,v=()=>(0,t.jsxs)("div",{className:"relative h-64 ",children:[(0,t.jsx)("div",{className:"absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2",children:[...Array(6)].map((a,o)=>(0,t.jsx)(l,{className:"w-10 h-2"},o))}),(0,t.jsx)("div",{className:"absolute left-14  right-0 top-0 bottom-8 flex justify-between items-end",children:[10,16,60,20,40].map((a,o)=>(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)(l,{className:`w-12 mb-1 h-${a}`}),(0,t.jsx)(l,{className:"w-16 h-2"})]},o))})]});export{g as default};
