import{a as f}from"/build/_shared/chunk-K3LLJEF6.js";import{a as C}from"/build/_shared/chunk-5DNCLJX5.js";import{j as _}from"/build/_shared/chunk-OF7TX32X.js";import{a as u}from"/build/_shared/chunk-55XEO44C.js";import"/build/_shared/chunk-DGA7IYTA.js";import"/build/_shared/chunk-L4JQJ63A.js";import{a as v,b as d}from"/build/_shared/chunk-BVJBT3X3.js";import{d as l}from"/build/_shared/chunk-T36URGAI.js";var o=l(v(),1);var t=l(d(),1),b=C().default,x=({projectId:i,userId:a,compId:n})=>{let[r,g]=(0,o.useState)([]);(0,o.useEffect)(()=>{i&&(async()=>{console.log("Data fetching from Action Items =====>>>>>.........");try{let e=new FormData;e.append("op","get_project_reference_detail"),e.append("project_id",i.toString()??"0"),e.append("need_more_data","0"),e.append("for_module_key",""),e.append("version","web"),e.append("from","panel"),e.append("iframe_call","0"),e.append("tz","+5:30"),e.append("tzid","Asia/Calcutta"),e.append("curr_time",new Date().toISOString()),e.append("force_login","0"),e.append("global_project",""),e.append("user_id",a.toString()??"0"),e.append("company_id",n.toString()??"0");let m=await f.post(`https://api-cfdev.contractorforeman.net/service.php?opp=get_project_reference_detail&c=${n?Number(n):0}&u=${a?Number(a):0}&p=manage_projects`,e);console.log("Data fetching Successfull from Action Items  =====>>>>>",m?.data),g(m?.data?.data?.modules||[])}catch(e){console.error("Error fetching data:",e)}})()},[i,a,n]);let h={chart:{id:"chart1",type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,dataLabels:{total:{enabled:!0,offsetX:0,style:{fontSize:"13px",fontWeight:900}}}}},xaxis:{categories:["OPEN","DUE","CLOSED"],tickPlacement:"on"},colors:["#684CC7","#e01f35","#282691"],legend:{show:!0,position:"top"}},p=r?.open_incomplete_item?.opnIncoInvoice[0]||{},s=r?.open_incomplete_item?.opnIncoBills[0]||{},c=r?.open_incomplete_item?.opnIncoPurchaseOrder[0]||{},N=[{name:"Invoices",data:[Number(p?.total_open)||0,Number(p?.total_due)||0,Number(p?.total_close)||0]},{name:"Bills",data:[Number(s?.total_open)||0,Number(s?.bill_count)||0,Number(s?.total_close)||0]},{name:"Purchase Orders",data:[Number(c?.total_open)||0,Number(c?.bill_count)||0,Number(c?.total_close)||0]}];return r?.length<=0?(console.log("<<<<<==== Data not Available ====>>>>>"),(0,t.jsx)("div",{children:"Loading Charts"})):(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsx)(u,{icon:_,label:"Action Items",bgColor:"#F0E5FF",color:"#684CC7",className:"text-base"}),b?(0,t.jsx)(o.Suspense,{fallback:(0,t.jsx)("div",{children:"Loading Chart..."}),children:(0,t.jsx)(b,{type:"bar",height:307,options:h,series:N})}):(0,t.jsx)(t.Fragment,{children:"Loading..."})]})},E=x;export{E as default};
