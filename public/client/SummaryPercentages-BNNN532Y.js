import{a as D}from"./chunk-O7YX5DQC.js";import{c as f,d as j,e as i,f as d,k as b,n as A,o as w}from"./chunk-TFIZZQEA.js";var r=f(j(),1);var a=f(A(),1),F=D().default,P=({data:l,isLoading:B,currencyCode:s})=>{let[h,k]=(0,r.useState)({budgeted:[],actual:[]}),g=l?.billing_vs_actual||{},n=l?.all_item_total||{},y=Number(n?.total?.commited_total)||0,N=Number(n?.total?.actual_total)||0,x=Number(n?.labor?.actual_total)||0,v=Number(n?.labor?.estimated_total)||0,C=(Number(g?.amount_invoiced)||0)/100,o=Number(n?.total?.estimated_total)||0,R=(Number(g?.original_contract_amount)||0)/100,E=Number(l?.finance_summary?.invoices?.amount_invoiced)||0,_=Number(l?.project_summary?.total_project_amount)||0;(0,r.useEffect)(()=>{k({budgeted:[b(o===0?0:(y*100/o).toFixed(2)),b(o===0?0:(N*100/o).toFixed(2)),b(v===0?0:(x*100/v).toFixed(2)),b(_===0?0:(E*100/_).toFixed(2))],actual:[100,100,100,100]})},[l]);let S={chart:{id:"chart1",toolbar:{show:!1}},grid:{show:!0,borderColor:"#ebebeb",strokeDashArray:4,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}},row:{colors:void 0,opacity:1},column:{colors:void 0,opacity:1}},plotOptions:{bar:{colors:{ranges:[{from:-1e18,to:0,color:"#f65200"}]},columnWidth:"40%"}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"],axisTicks:{show:!1},labels:{rotate:0,rotateAlways:!1,hideOverlappingLabels:!1,trim:!0}},yaxis:{title:{text:""},labels:{formatter:function(t){return t.toFixed(0)+"%"}},min:0},dataLabels:{enabled:!1},stroke:{show:!0,colors:["transparent"],width:4},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return i(Number(t))}},custom:function({series:t,seriesIndex:q,dataPointIndex:e,w:T}){let O=T.globals.labels[e],m=t[0][e],c=t[1][e],u="",p="";return e===0?(u="Committed Cost",p="Estimated Cost",m=d(y,s),c=i(o,s)):e===1?(u="Actual Cost",p="Estimated Cost",m=d(N,s),c=i(o,s)):e===2?(u="Actual Labor Cost",p="Est. Labor Cost",m=d(x,s),c=i(v,s)):e===3&&(u="Invoiced to Date",p="Total Project Amount",m=d(C,s),c=i(_,s)),"                    <div class='tooltip_outer_block'>                        <div class='tooltip_inner_block'>                            <div class='apexcharts-tooltip-title'>"+O+"</div>                            <div class='budget_amount'>                                <div class='lable_text'>                                    <small class='blue_dot'></small>                                    "+u+": </div>                                <span class='lable_amount'> "+m+"</span >                            </div >                            <div class='actual_amount'>                                <div class='lable_text'>                                <small class='yellow_dot'></small>                                "+p+": </div >                                <span class='lable_amount'> "+c+"</span>                            </div>                        </div>                    </div>"}},colors:["#63759A","#F9BE3F"],legend:{show:!1,position:"top"},states:{normal:{filter:{type:"none"}},hover:{filter:{type:"none"}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:.35}}}},L=[{name:"Budgeted",data:h?.budgeted.map(t=>t===0?null:t)},{name:"Actual",data:h?.actual}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{icon:"fa-solid fa-sack-dollar",label:"Summary Percentages"}),(0,a.jsx)("div",{className:"summary_details_block_body position-relative",children:l?(0,a.jsxs)(a.Fragment,{children:[" ",F?(0,a.jsx)(r.Suspense,{children:(0,a.jsx)(F,{type:"bar",options:S,series:L,height:270})}):(0,a.jsx)(a.Fragment,{})]}):(0,a.jsxs)("div",{className:"chart-bar-loader",style:{height:238},children:[(0,a.jsxs)("ul",{className:"chart-bar-yaxis",children:[(0,a.jsx)("li",{className:"yaxis-1",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-2",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-3",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-4",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-5",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-6",children:(0,a.jsx)("span",{})})]}),(0,a.jsxs)("div",{className:"chart-bar-shimmer",children:[(0,a.jsx)("div",{className:"bar-shimmer bar-1",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-2",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-3",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-4",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-5",children:(0,a.jsx)("span",{})})]})]})})]})},H=P;export{H as default};
