import{a as k}from"./chunk-FCCZAUGN.js";import"./chunk-AN4MNJC4.js";import{a as u}from"./chunk-DS3YQMFN.js";import{b as _,c as b,d as g}from"./chunk-KBQX56BB.js";import{a as N}from"./chunk-VY7KPVWX.js";import{c as m,d as O,i as h,j as d}from"./chunk-3YV6BSGC.js";var o=m(O(),1);var t=m(h(),1),y=k().default,z=({projectId:i,userId:a,compId:n})=>{let[r,x]=(0,o.useState)([]),[v,s]=(0,o.useState)(!0);(0,o.useEffect)(()=>{let C=async()=>{s(!0),console.log("Data fetching from Action Items =====>>>>>.........");try{let e=new FormData;e.append("op","get_project_reference_detail"),e.append("project_id",i.toString()??"0"),e.append("need_more_data","0"),e.append("for_module_key",""),e.append("version","web"),e.append("from","panel"),e.append("iframe_call","0"),e.append("tz",b),e.append("tzid","Asia/Calcutta"),e.append("curr_time",_),e.append("force_login","0"),e.append("global_project",""),e.append("user_id",a.toString()??"0"),e.append("company_id",n.toString()??"0");let f=await u.post(`${g}/service.php?opp=get_project_reference_detail&c=${n?Number(n):0}&u=${a?Number(a):0}&p=manage_projects`,e);console.log("Data fetching Successfull from Action Items  =====>>>>>",f?.data),x(f?.data?.data?.modules||[]),s(!1)}catch(e){console.log("Error fetching data from Action Items =====>>>>>",e),console.error("Error fetching data:",e)}finally{s(!1)}},D=setTimeout(()=>{i&&C()},300);return()=>clearTimeout(D)},[i,a,n]);let A={chart:{id:"chart1",type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,dataLabels:{total:{enabled:!0,offsetX:0,style:{fontSize:"13px",fontWeight:900}}}}},xaxis:{categories:["OPEN","DUE","CLOSED"],tickPlacement:"on"},colors:["#684CC7","#e01f35","#282691"],legend:{show:!0,position:"top"}},c=r?.open_incomplete_item?.opnIncoInvoice[0]||{},p=r?.open_incomplete_item?.opnIncoBills[0]||{},l=r?.open_incomplete_item?.opnIncoPurchaseOrder[0]||{},S=[{name:"Invoices",data:[Number(c?.total_open)||0,Number(c?.total_due)||0,Number(c?.total_close)||0]},{name:"Bills",data:[Number(p?.total_open)||0,Number(p?.bill_count)||0,Number(p?.total_close)||0]},{name:"Purchase Orders",data:[Number(l?.total_open)||0,Number(l?.bill_count)||0,Number(l?.total_close)||0]}];return r?.length<=0?(console.log("<<<<<==== Data not Available ====>>>>>"),(0,t.jsx)("div",{children:"Loading Charts"})):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{icon:"fa-solid fa-box-circle-check",label:"Action Items"}),(0,t.jsx)("div",{className:"summary_details_block_body",children:y?(0,t.jsx)(t.Fragment,{children:v?(0,t.jsx)(d,{}):(0,t.jsx)(o.Suspense,{children:(0,t.jsx)(y,{type:"bar",height:250,options:A,series:S})})}):(0,t.jsx)(d,{})})]})},$=z;export{$ as default};
