import{a as p}from"./chunk-NRZSAAGU.js";import{b as h,c as y,d as v}from"./chunk-AHPVY7UH.js";import{a as $}from"./chunk-RSEZZJUU.js";import{c as m,d as A,h as x,i as b}from"./chunk-LWBPE4RQ.js";var r=m(A(),1);var n=m(x(),1),E=({projectId:l,userId:d,compId:_})=>{let[s,S]=(0,r.useState)(),[N,T]=(0,r.useState)(),[i,f]=(0,r.useState)(!0),u=(0,r.useRef)(null),w=()=>new Promise((e,c)=>{if(document.getElementById("dhtmlxSchedulerScript")){e();return}let t=document.createElement("script");t.id="dhtmlxSchedulerScript",t.src="https://cdn.contractorforeman.net/lib/js/scheduler/5.3.14/dhtmlxscheduler_v5.3.14_custom.min.js",t.onload=()=>e(),t.onerror=()=>c(new Error("Failed to load scheduler script")),document.body.appendChild(t)});return(0,r.useEffect)(()=>{let e=async()=>{f(!0);try{let t=`${v}/service.php?op=get_schedule_calendar_events&project=${l}&for=dashboard_summary&start_date_range=2024-9-01+00%3A00%3A00&version=web&from=panel&iframe_call=0&tz=${y}&tzid=Asia%2FCalcutta&curr_time=${h}&force_login=0&global_project=&user_id=${d}&company_id=${_}`,o=await p.get(t);S(o?.data?.data)}catch(t){console.log("Error fetching data:",t)}finally{f(!1)}},c=setTimeout(()=>{e()},100);return()=>{clearTimeout(c)}},[l,d,_]),(0,r.useEffect)(()=>{i||!u.current||w().then(()=>{let e=window.Scheduler.getSchedulerInstance();e.config.start_on_monday=!1,e.config.header=["date","today","prev","next"],e.config.hour_date="%h:%i %A",e.config.xml_date="%Y-%m-%d %h:%i %a",e.config.limit_time_select=!0,e.config.details_on_create=!0,e.config.details_on_dblclick=!0,e.config.prevent_cache=!0,e.config.repeat_precise=!0,e.config.multi_day=!0,e.config.occurrence_timestamp_in_utc=!0,e.config.include_end_by=!0,e.config.event_duration=30,e.config.auto_end_date=!0,e.config.readonly=!0,e.config.time_step=30,e.config.first_hour=0,e.config.last_hour=23.5,e.config.scroll_hour=7,e.config.full_day=!0,e.config.default_date="%M %j, %Y",e.locale.labels.section_title="Title",e.locale.labels.section_assigned_to="Assigned To",e.locale.labels.export_tab="<i class='fa fa-print'></i>",e.config.dblclick_create=!1,e.config.className="dhtmlXTooltip tooltip",e.config.timeout_to_display=50,e.config.timeout_to_hide=50,e.config.delta_x=15,e.config.delta_y=-20,e.config.drag_in=!1,e.config.drag_move=!1,e.config.drag_create=!1,e.ignore_week=t=>t.getDay()===0||t.getDay()===6,e.templates.week_date=t=>{let o=e.date.add(t,6,"day"),a=g=>{let D=g.getDate()-1,k=g.toLocaleString("default",{month:"short"});return`${D} ${k}`};return`Sun, ${a(t)} ${t.getFullYear()} - Sat, ${a(o)} ${o.getFullYear()}`},e.templates.event_class=(t,o,a)=>a.assigned_to?`assignee_${a.assigned_to}`:"assignee_none",e.templates.event_class=(t,o,a)=>`custom-event ${a.assigned_to?`assignee_${a.assigned_to}`:"assignee_none"}`,e.templates.event_bar_text=(t,o,a)=>`<div class="event-title">${a.text}</div>`,e.templates.event_bar_date=()=>"",e.templates.event_bar_text=(t,o,a)=>`<div class="custom-event-content">${a.text}</div>`;let c=new Date;return e.init(u.current,c,"week"),!i&&s&&s.length>0&&e.parse(s,"json"),()=>{e.clearAll(),e.destructor()}})},[s,i,l,d,_]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($,{icon:"fa-solid fa-calendar-days",label:"Schedule"}),(0,n.jsx)("div",{className:"summary_details_block_body summary_schedule",children:i?(0,n.jsx)("div",{className:"mt-3 h-full",children:(0,n.jsx)(b,{className:`${!i&&"min-h-48"}`})}):(0,n.jsx)("div",{className:"summary_scheduled_dashboard",children:(0,n.jsx)("div",{ref:u,className:"dhx_cal_container"})})})]})},R=E;export{R as default};
