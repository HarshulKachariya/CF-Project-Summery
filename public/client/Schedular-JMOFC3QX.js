import{a as g}from"./chunk-XWTN2QSH.js";import"./chunk-A6SUGU7W.js";import{n as f}from"./chunk-BRLBBIEX.js";import{a as y}from"./chunk-KS3PNNKW.js";import{f as k}from"./chunk-K2XONBOI.js";import{a as F,d as m}from"./chunk-MYGIRSMY.js";import{c as x}from"./chunk-5TBO732O.js";var t=x(F(),1);var o=x(m(),1),j=({projectId:u,userId:h,compId:l})=>{let[b,w]=(0,t.useState)([]),[_,a]=(0,t.useState)(!0),c=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let p=async()=>{a(!0),console.log("Data fetching from Scheduler =====>>>>>.........");try{let r=new FormData;r.append("op","get_schedule_calendar_events"),r.append("project_id",u.toString()??"0"),r.append("for","dashboard_summary"),r.append("start_date_range","2024-9-01 00:00:00"),r.append("version","web"),r.append("from","panel"),r.append("iframe_call","0"),r.append("tz","+5:30"),r.append("tzid","Asia/Calcutta"),r.append("curr_time","2024-08-31 15:50:38"),r.append("force_login","0"),r.append("global_project",""),r.append("user_id",h.toString()??"0"),r.append("company_id",l.toString()??"0");let n=await g.post(`https://api-cfdev.contractorforeman.net/service.php?opp=get_schedule_calendar_events&c=${l?Number(l):0}&u=${h?Number(h):0}&p=manage_projects`,r);console.log("Data fetching Successfull from Scheduler  =====>>>>>",n?.data),w(n?.data?.data?.modules),a(!1)}catch(r){a(!1),console.log("Error fetching data:",r)}finally{a(!1)}},e=setTimeout(()=>{p()},300);return()=>{clearTimeout(e)}},[u,h,l]),(0,t.useEffect)(()=>((async()=>{let e=(await import("./dhtmlxscheduler.es-LUEABIOB.js")).default;if(c.current){e.config.header=["date","prev","today","next"],e.config.multi_day=!1,e.config.first_hour=0,e.config.last_hour=24,e.config.scale_width=0,e.config.readonly=!0,e.config.drag_resize=!1,e.config.drag_move=!1,e.xy.scale_width=0,e.config.left_border=!1;let r=()=>(typeof window<"u"&&window.innerWidth<768?(e.config.header=["prev","date","next"],e.xy.scale_width=40,e.templates.week_scale_date=function(d){return e.date.date_to_str("%D")(d)}):(e.config.header=["date","today","prev","next"],e.xy.scale_width=50,e.templates.week_scale_date=function(d){return e.date.date_to_str("%D, %F %j")(d)}),c.current&&e.updateView(),!0),n=new Date;e.init(c.current,n,"week"),e.parse(b),r(),e.attachEvent("onBeforeViewChange",r),e.attachEvent("onSchedulerResize",r),e.templates.event_class=function(d,i,s){return s.classname||""},e.ignore_week=function(d){if(d.getDay()===0||d.getDay()===6)return!0},e.templates.week_date=function(d){let i=e.date.add(d,6,"day"),s=v=>{let A=v.getDate()-1,z=v.toLocaleString("default",{month:"short"});return`${A} ${z}`};return`Sun, ${s(d)} ${d.getFullYear()} - Sat, ${s(i)} ${i.getFullYear()}`},window.addEventListener("resize",r)}})(),()=>{import("./dhtmlxscheduler.es-LUEABIOB.js").then(e=>e.default.clearAll())}),[b]),(0,o.jsx)(o.Fragment,{children:_?(0,o.jsx)("div",{className:"flex justify-center items-center w-full h-[268px]",children:(0,o.jsx)(k,{})}):(0,o.jsxs)("div",{className:"w-full relative",children:[(0,o.jsx)("div",{className:`${!_&&"lg:absolute "} mt-4 lg:mt-0 lg:top-4 z-50`,children:(0,o.jsx)(y,{icon:f,label:"Schedule",bgColor:"#ECF3FF",color:"#78AEFE"})}),(0,o.jsx)("div",{ref:c,style:{width:"100%",height:"100%"}})]})})},N=j;export{N as default};
