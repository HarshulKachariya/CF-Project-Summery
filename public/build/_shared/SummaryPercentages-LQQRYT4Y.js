import{a as T}from"/build/_shared/chunk-SBLSOK2P.js";import"/build/_shared/chunk-US3DNLVM.js";import{a as x}from"/build/_shared/chunk-QSK3XF4Y.js";import{d as g}from"/build/_shared/chunk-6FAWCOM4.js";import{a as S,c as y}from"/build/_shared/chunk-GG4UNW5U.js";import{d as u}from"/build/_shared/chunk-T36URGAI.js";var _=u(S(),1);var t=u(y(),1),h=T().default,D=({data:r,isLoading:C})=>{if(!r)return;let p=r?.billing_vs_actual||{},m=r?.all_item_total||{},N=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(e),b=Number(m?.total?.commited_total)||0,c=Number(m?.total?.actual_total)||0,n=Number(m?.labor?.actual_total)||0,f=(Number(p?.amount_invoiced)||0)/100,d=Number(m?.total?.estimated_total)||0,v=(Number(p?.original_contract_amount)||0)/100,A={chart:{id:"chart1",toolbar:{show:!1}},grid:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",dataLabels:{position:"top"}}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"]},yaxis:{labels:{formatter:function(e){return`${e.toFixed(0)}%`}},min:0,max:1e3},dataLabels:{enabled:!1},stroke:{colors:["transparent"],width:5},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return N(Number(e))}},custom:function({series:e,seriesIndex:E,dataPointIndex:o,w}){let F=w.globals.labels[o],a=e[0][o],l=e[1][o],s="",i="";return o===0?(s="Committed Cost",i="Estimated Cost",a=b,l=d):o===1?(s="Actual Cost",i="Estimated Cost",a=c,l=d):o===2?(s="Actual Labor Cost",i="Budgeted Labor",a=n,l=n):o===3&&(s="Contract Billings",i="Contract Amount",a=f,l=v),"                            <div class='tooltip-box-block'>                                <div class='tooltip_inner_block'>                                    <div class='bg-[#ECEFF1] border-b border-solid border-[#ddd] text-13 font-medium leading-4 p-1.5 mb-1'>"+F+"</div>                                    <div class='tooltip-box-body'>                                        <div class='tooltip-group-div !py-1 gap-1'>                                            <div class='flex items-center text-xs text-primary-900'>                                                <small class='w-2.5 h-2.5 bg-[#63759A] rounded-full mr-0.5 inline-block'></small>                                                "+s+": </div>                                                <CFTypography title='small' class='text-xs text-primary-900'> "+a+"</CFTypography >                                        </div >                                        <div class='tooltip-group-div !py-1 gap-1'>                                            <div class='flex items-center text-xs text-primary-900'>                                            <small class='w-2.5 h-2.5 bg-[#F9BE3F] rounded-full mr-0.5 inline-block'></small>                                            "+i+": </div >                                            <CFTypography title='small' class='text-xs text-primary-900'> "+l+"</CFTypography>                                        </div>                                    </div>                                </div>                            </div>"}},colors:["#7d89a9","#f5c85e"],legend:{show:!1,position:"top"}},k=[{name:"Invoiced to Date",data:[b,c,n,f]},{name:"Total Project Amount",data:[d,c,n,v]}];return r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{icon:"fa-solid fa-sack-dollar",label:"Summary Percentages"}),(0,t.jsx)("div",{className:"summary_details_block_body",children:!h||!C?(0,t.jsx)(g,{}):(0,t.jsx)(_.Suspense,{children:(0,t.jsx)(h,{type:"bar",options:A,series:k,height:250})})})]}):(console.log("<<<<<==== Data not Available ====>>>>>"),(0,t.jsx)("div",{children:"Loading Charts"}))},U=D;export{U as default};
