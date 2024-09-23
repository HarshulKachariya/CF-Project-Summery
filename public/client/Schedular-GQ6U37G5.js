import{a as y}from"./chunk-HWUCTPP4.js";import{a as v}from"./chunk-WBVLUQF5.js";import{c as f,d as $,e as b,f as h}from"./chunk-VBSOK5UO.js";var r=f($(),1);var a=f(b(),1),k=({projectId:l,userId:c,compId:s})=>{let[i,u]=(0,r.useState)(),[D,N]=(0,r.useState)(),[d,g]=(0,r.useState)(!0),m=(0,r.useRef)(null),x=()=>new Promise((e,_)=>{if(document.getElementById("dhtmlxSchedulerScript")){e();return}let t=document.createElement("script");t.id="dhtmlxSchedulerScript",t.src="https://cdn.contractorforeman.net/lib/js/scheduler/5.3.14/dhtmlxscheduler_v5.3.14_custom.min.js",t.onload=()=>e(),t.onerror=()=>_(new Error("Failed to load scheduler script")),document.body.appendChild(t)});return(0,r.useEffect)(()=>{let e=async()=>{g(!0);try{let t=`https://api-beta.contractorforeman.net/service.php?op=get_schedule_calendar_events&project=${l}&for=dashboard_summary&start_date_range=2024-9-01+00%3A00%3A00&version=web&from=panel&iframe_call=0&tz=%2B5%3A30&tzid=Asia%2FCalcutta&curr_time=2024-09-23+15%3A22%3A24&force_login=0&global_project=&user_id=${c}&company_id=${s}`,o=await y.get(t);u(o?.data?.data)}catch(t){console.log("Error fetching data:",t)}finally{g(!1)}},_=setTimeout(()=>{e()},100);return()=>{clearTimeout(_)}},[l,c,s]),(0,r.useEffect)(()=>{d||!m.current||x().then(()=>{let e=window.Scheduler.getSchedulerInstance();e.config.start_on_monday=!1,e.config.header=["date","today","prev","next"],e.config.hour_date="%h:%i %A",e.config.xml_date="%Y-%m-%d %h:%i %a",e.config.limit_time_select=!0,e.config.details_on_create=!0,e.config.details_on_dblclick=!0,e.config.prevent_cache=!0,e.config.repeat_precise=!0,e.config.multi_day=!0,e.config.occurrence_timestamp_in_utc=!0,e.config.include_end_by=!0,e.config.event_duration=30,e.config.auto_end_date=!0,e.config.readonly=!0,e.config.time_step=30,e.config.first_hour=0,e.config.last_hour=23.5,e.config.scroll_hour=7,e.config.full_day=!0,e.config.default_date="%M %j, %Y",e.locale.labels.section_title="Title",e.locale.labels.section_assigned_to="Assigned To",e.locale.labels.export_tab="<i class='fa fa-print'></i>",e.config.dblclick_create=!1,e.config.className="dhtmlXTooltip tooltip",e.config.timeout_to_display=50,e.config.timeout_to_hide=50,e.config.delta_x=15,e.config.delta_y=-20,e.config.drag_in=!1,e.config.drag_move=!1,e.config.drag_create=!1,e.ignore_week=t=>t.getDay()===0||t.getDay()===6,e.templates.week_date=t=>{let o=e.date.add(t,6,"day"),n=p=>{let w=p.getDate()-1,S=p.toLocaleString("default",{month:"short"});return`${w} ${S}`};return`Sun, ${n(t)} ${t.getFullYear()} - Sat, ${n(o)} ${o.getFullYear()}`},e.templates.event_class=(t,o,n)=>n.assigned_to?`assignee_${n.assigned_to}`:"assignee_none",e.templates.event_class=(t,o,n)=>`custom-event ${n.assigned_to?`assignee_${n.assigned_to}`:"assignee_none"}`,e.templates.event_bar_text=(t,o,n)=>`<div class="event-title">${n.text}</div>`,e.templates.event_bar_date=()=>"",e.templates.event_bar_text=(t,o,n)=>`<div class="custom-event-content">${n.text}</div>`;let _=new Date;return e.init(m.current,_,"week"),!d&&i&&i.length>0&&e.parse(i,"json"),()=>{e.clearAll(),e.destructor()}})},[i,d,l,c,s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{icon:"fa-solid fa-calendar-days",label:"Schedule"}),(0,a.jsx)("div",{className:"summary_details_block_body summary_schedule",children:d?(0,a.jsx)("div",{className:"mt-3 h-full",children:(0,a.jsx)(A,{className:`${!d&&"min-h-48"}`})}):(0,a.jsx)("div",{className:"summary_scheduled_dashboard",children:(0,a.jsx)("div",{ref:m,style:{width:"100%",height:"100%"}})})})]})},j=k,A=({className:l})=>(0,a.jsxs)("table",{className:`w-full border-2 ${l}`,children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{className:"bg-black/10 h-7",children:[...Array(6)].map((c,s)=>(0,a.jsx)("th",{className:"font-normal",children:(0,a.jsx)(h,{className:"h-3 w-40 mx-auto rounded-xl bg-gray-300"})},s))})}),(0,a.jsx)("tbody",{children:[...Array(6)].map((c,s)=>(0,a.jsx)("tr",{children:[...Array(6)].map((i,u)=>(0,a.jsx)("td",{className:"py-1",children:(0,a.jsx)(h,{className:"h-2.5 rounded bg-gray-300 mx-auto",style:{width:`${Math.floor(Math.random()*40)+60}%`}})},u))},s))})]});export{j as default};
