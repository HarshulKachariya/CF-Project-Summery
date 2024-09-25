import{c as l}from"./chunk-VSYRKOWN.js";import{a as c,f as a}from"./chunk-4XSHID3A.js";import{c as n,e as _}from"./chunk-AXJRDWLZ.js";var s=n(_(),1),x=({data:e,isLoading:u,currencyCode:p})=>{let{billing_vs_actual:r}=e||{},d=[{id:1,label:"Gross Profit",label2:`(${Number(r?.gross_profit)>0?(r?.gross_profit*100/r?.amount_invoiced).toFixed(2):"0"}%)`,values:`${c(Number(r?.gross_profit),p)}`,icon:"fa-solid fa-chart-mixed",summaryClassName:"project_summary_grossprofit",tooltipText:"Invoiced to Date Minus Total Actual Costs",tooltipLabel:"Invoiced to Date Minus Total Actual Costs"},{id:2,label:"Site Manager",label2:e?.site_manager_name||"-",values:"",icon:"fa-solid fa-user-vneck",summaryClassName:"project_summary_sitemanager",link:e?.site_manager_id?`${a}/manage-directory/${e.site_manager_id}`:null,tooltipLabel:e?.site_manager_name},{id:3,label:"Project Manager",label2:e?.project_manager_name||"-",values:"",icon:"fa-solid fa-user-tie",summaryClassName:"project_summary_projectmanager",link:e?.project_manager_id?`${a}/manage-directory/${e.project_manager_id}`:null,tooltipLabel:e?.project_manager_name},{id:4,label:"Start/End Date",label2:e?.start_date&&e?.end_date?`${e.start_date} - ${e.end_date}`:e?.start_date?e.start_date:e?.end_date?e.end_date:"-",values:"",icon:"fa-solid fa-calendar",summaryClassName:"project_summary_date",tooltipLabel:e?.start_date&&e?.end_date?`${e.start_date} - ${e.end_date}`:e?.start_date?e.start_date:e?.end_date?e.end_date:"-"},{id:5,label:"Schedule Completed",label2:`${Number(e?.progress*100||0).toFixed(0)}%`,values:"",icon:"fa-solid fa-calendar-days",summaryClassName:"project_summary_schedule",tooltipLabel:`${Number(e?.progress*100||0)>0?Number(e?.progress*100||0).toFixed(0)+"%":""}`}];return(0,s.jsx)("div",{className:"row g-3 summary_top_block_info",children:d.map(({id:f,bgColor:g,icon:b,label:y,label2:t,values:o,color:N,summaryClassName:v,tooltipText:j,tooltipLabel:i,link:m})=>(0,s.jsx)("div",{className:"col-xxl col-xl-4 col-lg-6 col-12",children:(0,s.jsxs)("div",{className:`common_summary_block profile_info_block d-flex ${v}`,children:[(0,s.jsx)("div",{style:{backgroundColor:g},className:"profile_info_icon",children:(0,s.jsx)("i",{className:b,style:{color:N}})}),(0,s.jsxs)("div",{className:"profile_info_content",children:[(0,s.jsx)("h6",{children:y}),u?(0,s.jsxs)("p",{className:"d-flex justify-content-between mt-8",children:[(0,s.jsx)("div",{className:"custom-shimmer amount-shimmer ms-0"}),o&&(0,s.jsx)("div",{className:"custom-shimmer amount-shimmer me-0"})]}):(0,s.jsxs)("p",{className:"d-flex justify-content-between",children:[(0,s.jsx)(l,{title:i!==""&&i,placement:"bottom",children:m&&t!=="-"?(0,s.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"truncate link_custom",children:t}):(0,s.jsx)("span",{className:"truncate font-medium",children:t})}),o&&(0,s.jsx)(l,{title:j,placement:"bottom",children:(0,s.jsx)("span",{className:"project_summery_amt text-success",children:o})})]})]})]})},f))})},k=x;export{k as default};
