import{a as P}from"./chunk-BA5PWRZT.js";import{c as f,d as D,f as h,g as e,l as p,o as A,p as w}from"./chunk-JLT4YN3A.js";var r=f(D(),1);var a=f(A(),1),k=P().default,B=({data:o,isLoading:R,currencyCode:s})=>{let[b,F]=(0,r.useState)({budgeted:[],actual:[]}),g=o?.billing_vs_actual||{},n=o?.all_item_total||{},x=Number(n?.total?.commited_total)||0,y=Number(n?.total?.actual_total)||0,N=Number(n?.labor?.actual_total)||0,v=Number(n?.labor?.estimated_total)||0,C=(Number(g?.amount_invoiced)||0)/100,i=Number(n?.total?.estimated_total)||0,q=(Number(g?.original_contract_amount)||0)/100,E=Number(o?.finance_summary?.invoices?.amount_invoiced)||0,_=Number(o?.project_summary?.total_project_amount)||0;(0,r.useEffect)(()=>{F({budgeted:[p(i===0?0:(x*100/i).toFixed(2)),p(i===0?0:(y*100/i).toFixed(2)),p(v===0?0:(N*100/v).toFixed(2)),p(_===0?0:(E*100/_).toFixed(2))],actual:[100,100,100,100]})},[o]);let S=Math.max(...b.budgeted,...b.actual),L=Math.ceil(S/5e4)*5e4,T={chart:{id:"chart1",toolbar:{show:!1}},grid:{show:!0,borderColor:"#ebebeb",strokeDashArray:4,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}},row:{colors:void 0,opacity:1},column:{colors:void 0,opacity:1}},plotOptions:{bar:{horizontal:!1,colors:{ranges:[{from:-1e18,to:0,color:"#f65200"}]},columnWidth:"40%"}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"],axisTicks:{show:!1},labels:{rotate:0,rotateAlways:!1,hideOverlappingLabels:!1,trim:!0}},yaxis:{title:{text:""},labels:{formatter:function(t){return t.toFixed(0)+"%"}},min:0,max:L,tickAmount:10},dataLabels:{enabled:!1},stroke:{show:!0,colors:["transparent"],width:4},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return h(Number(t))}},custom:function({series:t,seriesIndex:z,dataPointIndex:l,w:O}){let j=O.globals.labels[l],m=t[0][l],c=t[1][l],u="",d="";return l===0?(u="Committed Cost",d="Estimated Cost",m=e(x,s),c=e(i,s)):l===1?(u="Actual Cost",d="Estimated Cost",m=e(y,s),c=e(i,s)):l===2?(u="Actual Labor Cost",d="Est. Labor Cost",m=e(N,s),c=e(v,s)):l===3&&(u="Invoiced to Date",d="Total Project Amount",m=e(C,s),c=h(_,s)),"                    <div class='tooltip_outer_block'>                        <div class='tooltip_inner_block'>                            <div class='apexcharts-tooltip-title'>"+j+"</div>                            <div class='budget_amount'>                                <div class='lable_text'>                                    <small class='blue_dot'></small>                                    "+u+": </div>                                <span class='lable_amount'> "+m+"</span >                            </div >                            <div class='actual_amount'>                                <div class='lable_text'>                                <small class='yellow_dot'></small>                                "+d+": </div >                                <span class='lable_amount'> "+c+"</span>                            </div>                        </div>                    </div>"}},colors:["#63759A","#F9BE3F"],legend:{show:!1,position:"top"},states:{normal:{filter:{type:"none"}},hover:{filter:{type:"none"}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:.35}}}},M=[{name:"Budgeted",data:b?.budgeted.map(t=>t===0?null:t)},{name:"Actual",data:b?.actual}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{icon:"fa-solid fa-sack-dollar",label:"Summary Percentages"}),(0,a.jsx)("div",{className:"summary_details_block_body position-relative",children:o?(0,a.jsxs)(a.Fragment,{children:[" ",k?(0,a.jsx)(r.Suspense,{children:(0,a.jsx)(k,{type:"bar",options:T,series:M,height:270})}):(0,a.jsx)(a.Fragment,{})]}):(0,a.jsxs)("div",{className:"chart-bar-loader",style:{height:238},children:[(0,a.jsxs)("ul",{className:"chart-bar-yaxis",children:[(0,a.jsx)("li",{className:"yaxis-1",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-2",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-3",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-4",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-5",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-6",children:(0,a.jsx)("span",{})})]}),(0,a.jsxs)("div",{className:"chart-bar-shimmer",children:[(0,a.jsx)("div",{className:"bar-shimmer bar-1",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-2",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-3",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-4",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-5",children:(0,a.jsx)("span",{})})]})]})})]})},I=B;export{I as default};
