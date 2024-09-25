import{a as v}from"./chunk-W4SJGRFV.js";import{c as g,d as f,e as y}from"./chunk-4XSHID3A.js";import{a as N}from"./chunk-MPTY3R54.js";import{c as h,d as D,e as x}from"./chunk-AXJRDWLZ.js";var r=h(D(),1);var t=h(x(),1),A=({projectId:c,userId:o,compId:m})=>{let[d,b]=(0,r.useState)(),[E,k]=(0,r.useState)(),[l,u]=(0,r.useState)(!0),_=(0,r.useRef)(null),w=()=>new Promise((e,n)=>{if(document.getElementById("dhtmlxSchedulerScript")){e();return}let a=document.createElement("script");a.id="dhtmlxSchedulerScript",a.src="https://cdn.contractorforeman.net/lib/js/scheduler/5.3.14/dhtmlxscheduler_v5.3.14_custom.min.js",a.onload=()=>e(),a.onerror=()=>n(new Error("Failed to load scheduler script")),document.body.appendChild(a)});return(0,r.useEffect)(()=>{let e=async()=>{u(!0);try{let a=`${y}/service.php?op=get_schedule_calendar_events&project=${c}&for=dashboard_summary&start_date_range=2024-9-01+00%3A00%3A00&version=web&from=panel&iframe_call=0&tz=${f}&tzid=Asia%2FCalcutta&curr_time=${g}&force_login=0&global_project=&user_id=${o}&company_id=${m}`,s=await v.get(a);b(s?.data?.data)}catch(a){console.log("Error fetching data:",a)}finally{u(!1)}},n=setTimeout(()=>{e()},100);return()=>{clearTimeout(n)}},[c,o,m]),(0,r.useEffect)(()=>{l||!_.current||w().then(()=>{let e=window.Scheduler.getSchedulerInstance();e.config.start_on_monday=!1,e.config.header=["date","today","prev","next"],e.config.hour_date="%h:%i %A",e.config.xml_date="%Y-%m-%d %h:%i %a",e.config.limit_time_select=!0,e.config.details_on_create=!0,e.config.details_on_dblclick=!0,e.config.prevent_cache=!0,e.config.repeat_precise=!0,e.config.multi_day=!0,e.config.occurrence_timestamp_in_utc=!0,e.config.include_end_by=!0,e.config.event_duration=30,e.config.auto_end_date=!0,e.config.readonly=!0,e.config.time_step=30,e.config.first_hour=0,e.config.last_hour=23.5,e.config.scroll_hour=7,e.config.full_day=!0,e.config.default_date="%M %j, %Y",e.locale.labels.section_title="Title",e.locale.labels.section_assigned_to="Assigned To",e.locale.labels.export_tab="<i className='fa fa-print'></i>",e.config.dblclick_create=!1,e.config.className="dhtmlXTooltip tooltip",e.config.timeout_to_display=50,e.config.timeout_to_hide=50,e.config.delta_x=15,e.config.delta_y=-20,e.config.drag_in=!1,e.config.drag_move=!1,e.config.drag_create=!1,e.config.lightbox.sections=[{name:"title",height:43,map_to:"title",type:"textarea",focus:!0},{name:"description",height:130,map_to:"description",type:"textarea"},{name:"time",height:72,type:"time",map_to:"auto"}],e.attachEvent("onAfterLightbox",function(){document.querySelectorAll(".dhx_cal_light input, .dhx_cal_light textarea, .dhx_cal_light select").forEach(s=>{s.setAttribute("readonly","readonly"),s.setAttribute("disabled","disabled")})}),e.ignore_week=a=>a.getDay()===0||a.getDay()===6,e.templates.week_date=a=>{let s=e.date.add(a,6,"day"),i=p=>{let $=p.getDate(),S=p.toLocaleString("default",{month:"short"});return`${$} ${S}`};return`Sun, ${i(a)} ${a.getFullYear()} - Sat, ${i(s)} ${s.getFullYear()}`},e.templates.event_class=(a,s,i)=>i.assigned_to?`assignee_${i.assigned_to}`:"assignee_none",e.templates.event_class=(a,s,i)=>`custom-event ${i.assigned_to?`assignee_${i.assigned_to}`:"assignee_none"}`,e.templates.event_bar_text=(a,s,i)=>`<div className="event-title">${i.text}</div>`,e.templates.event_bar_date=()=>"",e.templates.event_bar_text=(a,s,i)=>`<div className="custom-event-content">${i.text}</div>`;let n=new Date;return e.init(_.current,n,"week"),!l&&d&&d.length>0&&e.parse(d,"json"),()=>{e.clearAll(),e.destructor()}})},[d,l,c,o,m]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{icon:"fa-solid fa-calendar-days",label:"Schedule"}),(0,t.jsx)("div",{className:"summary_details_block_body summary_schedule",children:l?(0,t.jsx)("div",{className:"loading center h-full",children:(0,t.jsxs)("table",{className:"table border mt-md",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"shimmer_loader_table",children:[(0,t.jsx)("th",{className:"text-center",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("th",{className:"text-center",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("th",{className:"text-center",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("th",{className:"text-center",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("th",{className:"text-center",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("th",{className:"text-center",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})})]})}),(0,t.jsx)("tbody",{children:[...Array(6)].map((e,n)=>(0,t.jsxs)("tr",{className:"shimmer_loader_table",children:[(0,t.jsx)("td",{className:"text-start",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("td",{className:"text-start",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("td",{className:"text-start",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("td",{className:"text-start",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("td",{className:"text-start",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})}),(0,t.jsx)("td",{className:"text-start",children:(0,t.jsx)("div",{className:"wrapper_shimmer",children:(0,t.jsx)("div",{className:"shimmer-line"})})})]}))})]})}):(0,t.jsx)("div",{className:"summary_scheduled_dashboard",children:(0,t.jsx)("div",{ref:_,className:"dhx_cal_container remix_calender"})})})]})},j=A;export{j as default};
