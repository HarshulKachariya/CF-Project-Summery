import"./chunk-76PKPWCB.js";import{n as l}from"./chunk-BRLBBIEX.js";import{a}from"./chunk-ILZA5XDI.js";import{c as o,d as x,g as t}from"./chunk-IQMS3RTE.js";var e=o(x(),1);var r=o(t(),1),u=({projectId:h,userId:c,compId:n,loadGanttCalendarSummary:d})=>{let[b,_]=(0,e.useState)([]),[s,p]=(0,e.useState)(!0),v=(0,e.useRef)(null);return(0,e.useEffect)(()=>{if(d){let i=d(null,h);console.log("Result from loadGanttCalendarSummary:",i)}},[d,h,n,c]),(0,r.jsx)("div",{className:"w-full relative",children:(0,r.jsxs)("div",{className:`${!s&&"lg:absolute "} mt-4 lg:mt-0 lg:top-4 z-50`,children:[(0,r.jsx)(a,{icon:l,label:"Schedule",bgColor:"#ECF3FF",color:"#78AEFE"}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:`<div id="dashboard_scheduler"
          class="dhx_cal_container"
          style='width:100%;width: calc(100% + 51px);height:370px!important;display: none;'>
        <div class="dhx_cal_navline">
            <div
                    class="dhx_cal_prev_button">
                &nbsp;</div>
            <div
                    class="dhx_cal_next_button">
                &nbsp;</div>
            <div
                    class="dhx_cal_today_button">
            </div>
            <div class="dhx_cal_date">
            </div>
        </div>
        <div class="dhx_cal_header">
        </div>
        <div class="dhx_cal_data">
        </div>
      </div>`}})]})})},E=u;export{E as default};
