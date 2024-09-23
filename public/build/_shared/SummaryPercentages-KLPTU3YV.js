import{a as S}from"/build/_shared/chunk-SBLSOK2P.js";import"/build/_shared/chunk-US3DNLVM.js";import{a as x}from"/build/_shared/chunk-QSK3XF4Y.js";import{d as g}from"/build/_shared/chunk-6FAWCOM4.js";import{a as F,c as y}from"/build/_shared/chunk-GG4UNW5U.js";import{d as u}from"/build/_shared/chunk-T36URGAI.js";var _=u(F(),1);var t=u(y(),1),h=S().default,T=({data:n,isLoading:L})=>{let p=n?.billing_vs_actual||{},r=n?.all_item_total||{},C=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(e),b=Number(r?.total?.commited_total)||0,c=Number(r?.total?.actual_total)||0,m=Number(r?.labor?.actual_total)||0,f=(Number(p?.amount_invoiced)||0)/100,d=Number(r?.total?.estimated_total)||0,v=(Number(p?.original_contract_amount)||0)/100,N={chart:{id:"chart1",toolbar:{show:!1}},grid:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",dataLabels:{position:"top"}}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"]},yaxis:{labels:{formatter:function(e){return`${e.toFixed(0)}%`}},min:0,max:1e3},dataLabels:{enabled:!1},stroke:{colors:["transparent"],width:5},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return C(Number(e))}},custom:function({series:e,seriesIndex:D,dataPointIndex:o,w:k}){let w=k.globals.labels[o],a=e[0][o],l=e[1][o],s="",i="";return o===0?(s="Committed Cost",i="Estimated Cost",a=b,l=d):o===1?(s="Actual Cost",i="Estimated Cost",a=c,l=d):o===2?(s="Actual Labor Cost",i="Budgeted Labor",a=m,l=m):o===3&&(s="Contract Billings",i="Contract Amount",a=f,l=v),"                            <div class='tooltip-box-block'>                                <div class='tooltip_inner_block'>                                    <div class='bg-[#ECEFF1] border-b border-solid border-[#ddd] text-13 font-medium leading-4 p-1.5 mb-1'>"+w+"</div>                                    <div class='tooltip-box-body'>                                        <div class='tooltip-group-div !py-1 gap-1'>                                            <div class='flex items-center text-xs text-primary-900'>                                                <small class='w-2.5 h-2.5 bg-[#63759A] rounded-full mr-0.5 inline-block'></small>                                                "+s+": </div>                                                <CFTypography title='small' class='text-xs text-primary-900'> "+a+"</CFTypography >                                        </div >                                        <div class='tooltip-group-div !py-1 gap-1'>                                            <div class='flex items-center text-xs text-primary-900'>                                            <small class='w-2.5 h-2.5 bg-[#F9BE3F] rounded-full mr-0.5 inline-block'></small>                                            "+i+": </div >                                            <CFTypography title='small' class='text-xs text-primary-900'> "+l+"</CFTypography>                                        </div>                                    </div>                                </div>                            </div>"}},colors:["#7d89a9","#f5c85e"],legend:{show:!1,position:"top"}},A=[{name:"Invoiced to Date",data:[b,c,m,f]},{name:"Total Project Amount",data:[d,c,m,v]}];return n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{icon:"fa-solid fa-sack-dollar",label:"Summary Percentages"}),(0,t.jsx)("div",{className:"summary_details_block_body",children:h?(0,t.jsx)(_.Suspense,{children:(0,t.jsx)(h,{type:"bar",options:N,series:A,height:250})}):(0,t.jsx)(g,{})})]}):(console.log("<<<<<==== Data not Available ====>>>>>"),(0,t.jsx)("div",{children:"Loading Charts"}))},U=T;export{U as default};
