import{a as g}from"./chunk-KGURQTUR.js";import{a as z}from"./chunk-MJI3CMFL.js";import{c as N,d as B,h as x,i as v,j as I,o as y,p as D}from"./chunk-JLT4YN3A.js";var a=N(B(),1);var e=N(y(),1),C=z().default,E=({projectId:c,userId:l,compId:i})=>{let[o,S]=(0,a.useState)([]),[F,p]=(0,a.useState)(!0);(0,a.useEffect)(()=>{let s=async()=>{p(!0),console.log("Data fetching from Action Items =====>>>>>.........");try{let t=new FormData;t.append("op","get_project_reference_detail"),t.append("project_id",c?.toString()??"0"),t.append("need_more_data","0"),t.append("for_module_key",""),t.append("version","web"),t.append("from","panel"),t.append("iframe_call","0"),t.append("tz",v),t.append("tzid","Asia/Calcutta"),t.append("curr_time",x),t.append("force_login","0"),t.append("global_project",""),t.append("user_id",l?.toString()??"0"),t.append("company_id",i?.toString()??"0");let r=await g.post(`${I}/service.php?opp=get_project_reference_detail&c=${i?Number(i):0}&u=${l?Number(l):0}&p=manage_projects`,t);console.log("Data fetching Successfull from Action Items  =====>>>>>",r?.data),S(r?.data?.data?.modules||[]),p(!1)}catch(t){console.log("Error fetching data from Action Items =====>>>>>",t),console.error("Error fetching data:",t)}finally{p(!1)}},n=setTimeout(()=>{c&&s()},300);return()=>clearTimeout(n)},[c,l,i]);let A={chart:{id:"chart1",type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,dataLabels:{total:{enabled:!0,offsetX:7,style:{fontSize:"13px",fontWeight:900}}}}},xaxis:{categories:["OPEN","DUE","CLOSED"],tickPlacement:"on"},fill:{opacity:1},legend:{show:!0,position:"top",horizontalAlign:"center",offsetX:40,onItemClick:{toggleDataSeries:!1}},states:{normal:{filter:{type:"none"}},hover:{filter:{type:"none"}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:.35}}}},m=o?.open_incomplete_item?.opnIncoInvoice[0]||{},O=o?.open_incomplete_item?.opnIncoBills||{},u=o?.open_incomplete_item?.opnIncoPurchaseOrder[0]||{},d=o?.open_incomplete_item?.opnIncoPunchlist[0]||{},_=o?.open_incomplete_item?.opnIncoRFI[0]||{},b=o?.open_incomplete_item?.opnIncoToDo[0]||{},f=o?.open_incomplete_item?.opnIncoCompliance[0]||{},[P,k]=(0,a.useState)([0,0,0]);(0,a.useEffect)(()=>{let s=o?.open_incomplete_item?.opnIncoBills||[],n=[0,0,0];s.forEach(({bill_status:t,bill_count:r})=>{let h=parseInt(r,10);switch(t.toLowerCase()){case"open":n[0]+=h;break;case"due":n[1]+=h;break;case"closed":n[2]+=h;break}}),k(n)},[o]);let w=[{name:"Bills",data:P,color:"#D53E4F"},{name:"Compliance",data:[Number(f?.total_open)||0,Number(f?.total_due)||0,Number(f?.total_close)||0],color:"#303A52"},{name:"Invoices",data:[Number(m?.total_open)||0,Number(m?.total_due)||0,Number(m?.total_close)||0],color:"#684CC7"},{name:"PO's",data:[Number(u?.total_open)||0,Number(u?.bill_count)||0,Number(u?.total_close)||0],color:"#3836A1"},{name:"Punchlists",data:[Number(d?.total_open)||0,Number(d?.total_due)||0,Number(d?.total_close)||0],color:"#F46D43"},{name:"RFI's",data:[Number(_?.total_open)||0,Number(_?.bill_count)||0,Number(_?.total_close)||0],color:"#2494A4"},{name:"To Do's",data:[Number(b?.total_open)||0,Number(b?.total_due)||0,Number(b?.total_close)||0],color:"#CC9F5D"}].filter(s=>s.data.some(n=>n>0));return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D,{icon:"fa-solid fa-box-circle-check",label:"Action Items"}),(0,e.jsx)("div",{className:"summary_details_block_body position-relative",children:o?.length<=0?(0,e.jsxs)("div",{className:"chart-bar-loader chart-horizontal",style:{height:238},children:[(0,e.jsxs)("ul",{className:"chart-bar-xaxis",children:[(0,e.jsx)("li",{className:"xaxis-1",children:(0,e.jsx)("span",{})}),(0,e.jsx)("li",{className:"xaxis-2",children:(0,e.jsx)("span",{})}),(0,e.jsx)("li",{className:"xaxis-3",children:(0,e.jsx)("span",{})}),(0,e.jsx)("li",{className:"xaxis-4",children:(0,e.jsx)("span",{})}),(0,e.jsx)("li",{className:"xaxis-5",children:(0,e.jsx)("span",{})}),(0,e.jsx)("li",{className:"xaxis-6",children:(0,e.jsx)("span",{})})]}),(0,e.jsxs)("div",{className:"chart-bar-shimmer",children:[(0,e.jsx)("div",{className:"bar-shimmer bar-1",children:(0,e.jsx)("span",{})}),(0,e.jsx)("div",{className:"bar-shimmer bar-2",children:(0,e.jsx)("span",{})}),(0,e.jsx)("div",{className:"bar-shimmer bar-3",children:(0,e.jsx)("span",{})})]})]}):(0,e.jsxs)(e.Fragment,{children:[" ",C?(0,e.jsx)(a.Suspense,{children:(0,e.jsx)(C,{type:"bar",height:238,options:A,series:w})}):(0,e.jsx)(e.Fragment,{})]})})]})},M=E;export{M as default};
