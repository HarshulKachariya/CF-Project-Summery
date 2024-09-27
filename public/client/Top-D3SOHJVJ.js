import{b as m}from"./chunk-HM4LMGQC.js";import{a as p,f as i,h as d}from"./chunk-6ZDPTC5G.js";import{c as _,e as f}from"./chunk-AXJRDWLZ.js";var r=_(f(),1),k=({data:e,isLoading:g,currencyCode:N})=>{let{billing_vs_actual:t}=e||{},a=s=>isNaN(Number(s))||s===null?"0":Number(s).toFixed(0),b=s=>{let o=Number(s);return isNaN(o)||s===null||o===0?"0":o.toFixed(2)},y=[{id:1,label:"Gross Profit",label2:`(${!isNaN(t?.gross_profit)&&!isNaN(t?.amount_invoiced)&&t?.amount_invoiced!==0?d(t?.gross_profit*100/t?.amount_invoiced):0}%)`,values:`${p(b(t?.gross_profit),N)}`,icon:"fa-solid fa-chart-mixed",summaryClassName:"project_summary_grossprofit",tooltipText:"Invoiced to Date Minus Total Actual Costs",tooltipLabel:"Invoiced to Date Minus Total Actual Costs"},{id:2,label:"Site Manager",label2:e?.site_manager_name||"-",values:"",icon:"fa-solid fa-user-vneck",summaryClassName:"project_summary_sitemanager",link:e?.site_manager_id?`${i}/manage-directory/${e.site_manager_id}`:null,tooltipLabel:e?.site_manager_name},{id:3,label:"Project Manager",label2:e?.project_manager_name||"-",values:"",icon:"fa-solid fa-user-tie",summaryClassName:"project_summary_projectmanager",link:e?.project_manager_id?`${i}/manage-directory/${e.project_manager_id}`:null,tooltipLabel:e?.project_manager_name},{id:4,label:"Start/End Date",label2:e?.start_date&&e?.end_date?`${e.start_date} - ${e.end_date}`:e?.start_date?e.start_date:e?.end_date?e.end_date:"-",values:"",icon:"fa-solid fa-calendar",summaryClassName:"project_summary_date",tooltipLabel:e?.start_date&&e?.end_date?`${e.start_date} - ${e.end_date}`:e?.start_date?e.start_date:e?.end_date?e.end_date:"-"},{id:5,label:"Schedule Completed",label2:`${a(e?.progress*100||0)}%`,values:"",icon:"fa-solid fa-calendar-days",summaryClassName:"project_summary_schedule",tooltipLabel:`${Number(a(e?.progress*100||0))>0?a(e?.progress*100||0)+"%":""}`}];return(0,r.jsx)("div",{className:"row g-3 summary_top_block_info",children:y.map(({id:s,bgColor:o,icon:v,label:j,label2:l,values:n,color:C,summaryClassName:$,tooltipText:x,tooltipLabel:c,link:u})=>(0,r.jsx)("div",{className:"col-xxl col-xl-4 col-lg-6 col-12",children:(0,r.jsxs)("div",{className:`common_summary_block profile_info_block d-flex ${$}`,children:[(0,r.jsx)("div",{style:{backgroundColor:o},className:"profile_info_icon",children:(0,r.jsx)("i",{className:v,style:{color:C}})}),(0,r.jsxs)("div",{className:"profile_info_content",children:[(0,r.jsx)("h6",{children:j}),g?(0,r.jsxs)("p",{className:"d-flex justify-content-between mt-8",children:[(0,r.jsx)("div",{className:"custom-shimmer amount-shimmer ms-0"}),n&&(0,r.jsx)("div",{className:"custom-shimmer amount-shimmer me-0"})]}):(0,r.jsxs)("p",{className:"d-flex justify-content-between",children:[(0,r.jsx)(m,{title:c!==""&&c,placement:"bottom",children:u&&l!=="-"?(0,r.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"truncate link_custom",children:l}):(0,r.jsx)("span",{className:"truncate font-medium",children:l})}),n&&(0,r.jsx)(m,{title:x,placement:"bottom",children:(0,r.jsx)("span",{className:"project_summery_amt text-success",children:n})})]})]})]})},s))})},I=k;export{I as default};
