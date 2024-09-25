import{a as P}from"./chunk-D2GM7PQO.js";import"./chunk-Q2GHOYEY.js";import{b as x,c as s,h as b}from"./chunk-A3CERAUJ.js";import{a as w}from"./chunk-MPTY3R54.js";import{c as _,d as D,e as A}from"./chunk-AXJRDWLZ.js";var r=_(D(),1);var a=_(A(),1),E=P().default,B=({data:o,isLoading:R,currencyCode:e})=>{let[p,F]=(0,r.useState)({budgeted:[],actual:[]}),f=o?.billing_vs_actual||{},n=o?.all_item_total||{},h=Number(n?.total?.commited_total)||0,g=Number(n?.total?.actual_total)||0,y=Number(n?.labor?.actual_total)||0,v=Number(n?.labor?.estimated_total)||0,k=(Number(f?.amount_invoiced)||0)/100,i=Number(n?.total?.estimated_total)||0,C=(Number(f?.original_contract_amount)||0)/100,S=Number(o?.finance_summary?.invoices?.amount_invoiced)||0,N=Number(o?.project_summary?.total_project_amount)||0;(0,r.useEffect)(()=>{F({budgeted:[b(i===0?0:(h*100/i).toFixed(2)),b(i===0?0:(g*100/i).toFixed(2)),b(v===0?0:(y*100/v).toFixed(2)),b(N===0?0:(S*100/N).toFixed(2))],actual:[100,100,100,100]})},[o]);let L={chart:{id:"chart1",toolbar:{show:!1}},grid:{show:!0,borderColor:"#ebebeb",strokeDashArray:4,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}},row:{colors:void 0,opacity:1},column:{colors:void 0,opacity:1}},plotOptions:{bar:{horizontal:!1,columnWidth:"40%",colors:{ranges:[{from:0,to:1,color:"#f65200"}]}}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"],axisTicks:{show:!1},labels:{rotate:0,rotateAlways:!1,hideOverlappingLabels:!1,trim:!0}},yaxis:{title:{text:""},labels:{formatter:function(t){return t.toFixed(0)+"%"}},min:0},dataLabels:{enabled:!1},stroke:{show:!0,colors:["transparent"],width:4},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return x(Number(t))}},custom:function({series:t,seriesIndex:q,dataPointIndex:l,w:O}){let j=O.globals.labels[l],c=t[0][l],m=t[1][l],u="",d="";return l===0?(u="Committed Cost",d="Estimated Cost",c=s(h,e),m=s(i,e)):l===1?(u="Actual Cost",d="Estimated Cost",c=s(g,e),m=s(i,e)):l===2?(u="Actual Labor Cost",d="Est. Labor Cost",c=s(y,e),m=s(v,e)):l===3&&(u="Invoiced to Date",d="Total Project Amount",c=s(k,e),m=s(C,e)),"                    <div class='tooltip_outer_block'>                        <div class='tooltip_inner_block'>                            <div class='apexcharts-tooltip-title'>"+j+"</div>                            <div class='budget_amount'>                                <div class='lable_text'>                                    <small class='blue_dot'></small>                                    "+u+": </div>                                <span class='lable_amount'> "+c+"</span >                            </div >                            <div class='actual_amount'>                                <div class='lable_text'>                                <small class='yellow_dot'></small>                                "+d+": </div >                                <span class='lable_amount'> "+m+"</span>                            </div>                        </div>                    </div>"}},colors:["#63759A","#F9BE3F"],legend:{show:!1,position:"top"},states:{normal:{filter:{type:"none"}},hover:{filter:{type:"none"}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:.35}}}},T=[{name:"Budgeted",data:p?.budgeted.map(t=>t===0?null:t)},{name:"Actual",data:p?.actual}];return console.log("costsEstimate?.budgeted",p?.budgeted),console.log("costsEstimate?.actual",p?.actual),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{icon:"fa-solid fa-sack-dollar",label:"Summary Percentages"}),(0,a.jsx)("div",{className:"summary_details_block_body position-relative",children:o?(0,a.jsxs)(a.Fragment,{children:[" ",E?(0,a.jsx)(r.Suspense,{children:(0,a.jsx)(E,{type:"bar",options:L,series:T,height:238})}):(0,a.jsx)(a.Fragment,{})]}):(0,a.jsxs)("div",{className:"chart-bar-loader",style:{height:238},children:[(0,a.jsxs)("ul",{className:"chart-bar-yaxis",children:[(0,a.jsx)("li",{className:"yaxis-1",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-2",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-3",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-4",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-5",children:(0,a.jsx)("span",{})}),(0,a.jsx)("li",{className:"yaxis-6",children:(0,a.jsx)("span",{})})]}),(0,a.jsxs)("div",{className:"chart-bar-shimmer",children:[(0,a.jsx)("div",{className:"bar-shimmer bar-1",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-2",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-3",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-4",children:(0,a.jsx)("span",{})}),(0,a.jsx)("div",{className:"bar-shimmer bar-5",children:(0,a.jsx)("span",{})})]})]})})]})},H=B;export{H as default};
