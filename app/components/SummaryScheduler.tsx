import React, { useEffect, useRef, useState } from "react";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler.css";
import "../styles/dhtmlxs.css";
import { faCalendarDay } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";
import CustomIcon from "../ant-design/CustomIcon";
import { IndexProps } from "~/routes/_index";
import Skeleton from "~/components/Skeletons/skeleton";
import moment from "moment";

const scheduler = ({ projectId, userId, compId }: IndexProps) => {
  const [data, setData] = useState<any>();
  const [scheduler, setscheduler] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const schedulerContainer = useRef<HTMLDivElement>(null);

  // Function to dynamically load the DHTMLX scheduler script
  const loadSchedulerScript = () => {
    return new Promise<void>((resolve, reject) => {
      if (document.getElementById("dhtmlxSchedulerScript")) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.id = "dhtmlxSchedulerScript";
      script.src =
        "https://cdn.contractorforeman.net/lib/js/scheduler/5.3.14/dhtmlxscheduler_v5.3.14_custom.min.js";
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error("Failed to load scheduler script"));
      document.body.appendChild(script);
    });
  };

  // Fetch events data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = `https://api-beta.contractorforeman.net/service.php?op=get_schedule_calendar_events&project=${projectId}&for=dashboard_summary&start_date_range=2024-9-01+00%3A00%3A00&version=web&from=panel&iframe_call=0&tz=%2B5%3A30&tzid=Asia%2FCalcutta&curr_time=2024-09-23+15%3A22%3A24&force_login=0&global_project=&user_id=${userId}&company_id=${compId}`;

        const response = await axios.get(url);

        setData(response?.data?.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [projectId, userId, compId]);

  // Initialize the scheduler after the script is loaded
  useEffect(() => {
    if (isLoading || !schedulerContainer.current) return;

    loadSchedulerScript().then(() => {
      const scheduler = (window as any).Scheduler.getSchedulerInstance();
      scheduler.config.start_on_monday = false;
      scheduler.config.header = ["date", "today", "prev", "next"];
      scheduler.config.hour_date = "%h:%i %A";
      scheduler.config.xml_date = "%Y-%m-%d %h:%i %a";
      scheduler.config.limit_time_select = true;
      scheduler.config.details_on_create = true;
      scheduler.config.details_on_dblclick = true;
      scheduler.config.prevent_cache = true;
      scheduler.config.repeat_precise = true;
      scheduler.config.multi_day = true;
      scheduler.config.occurrence_timestamp_in_utc = true;
      scheduler.config.include_end_by = true;
      scheduler.config.event_duration = 30; // set default event duration
      scheduler.config.auto_end_date = true;
      scheduler.config.readonly = true;

      scheduler.config.time_step = 30; // time interval
      scheduler.config.first_hour = 0; //define start Time Hour
      scheduler.config.last_hour = 23.5; //define Last Time Hour
      scheduler.config.scroll_hour = 7; //sets the initial position of the vertical scroll in the scheduler (an hour in the 24-hour clock format)
      scheduler.config.full_day = true; //define whether include Full Day option
      scheduler.config.default_date = "%M %j, %Y";
      scheduler.locale.labels.section_title = "Title";
      scheduler.locale.labels.section_assigned_to = "Assigned To";
      scheduler.locale.labels.export_tab = "<i class='fa fa-print'></i>";
      scheduler.config.dblclick_create = false;
      scheduler.config.className = "dhtmlXTooltip tooltip";
      scheduler.config.timeout_to_display = 50;
      scheduler.config.timeout_to_hide = 50;
      scheduler.config.delta_x = 15;
      scheduler.config.delta_y = -20;
      scheduler.config.drag_in = false;
      scheduler.config.drag_move = false;
      scheduler.config.drag_create = false;

      scheduler.ignore_week = (date: Date) => {
        return date.getDay() === 0 || date.getDay() === 6; // Ignore Saturday and Sunday
      };

      scheduler.templates.week_date = (start: Date) => {
        const end = scheduler.date.add(start, 6, "day");
        const formatDate = (date: Date) => {
          const day = date.getDate() - 1;
          const month = date.toLocaleString("default", { month: "short" });
          return `${day} ${month}`;
        };
        return `Sun, ${formatDate(
          start
        )} ${start.getFullYear()} - Sat, ${formatDate(
          end
        )} ${end.getFullYear()}`;
      };

      scheduler.templates.event_class = (start: any, end: any, event: any) => {
        return event.assigned_to
          ? `assignee_${event.assigned_to}`
          : "assignee_none";
      };

      // Custom event rendering
      scheduler.templates.event_class = (start: any, end: any, event: any) => {
        return `custom-event ${
          event.assigned_to ? `assignee_${event.assigned_to}` : "assignee_none"
        }`;
      };

      scheduler.templates.event_bar_text = (
        start: any,
        end: any,
        event: any
      ) => {
        return `<div class="event-title">${event.text}</div>`;
      };

      // Customize multi-day events
      scheduler.templates.event_bar_date = () => "";
      scheduler.templates.event_bar_text = (
        start: any,
        end: any,
        event: any
      ) => {
        return `<div class="custom-event-content">${event.text}</div>`;
      };

      const currentDate = new Date();
      scheduler.init(schedulerContainer.current, currentDate, "week");

      if (!isLoading && data && data.length > 0) {
        scheduler.parse(data, "json");
      }

      // window.addEventListener("resize", resetConfig);

      return () => {
        scheduler.clearAll();
        scheduler.destructor();
        // window.removeEventListener("resize", resetConfig);
      };
    });
  }, [data, isLoading, projectId, userId, compId]);

  console.log(data, "scheduler");

  return (
    <div className="h-full w-full relative">
      <div
        className={`${!isLoading && "lg:absolute"} mt-4 lg:mt-0 lg:top-4 z-50`}
      >
        <CustomIcon
          icon={faCalendarDay}
          label="Schedule"
          bgColor="#ECF3FF"
          color="#78AEFE"
        />
      </div>

      {!isLoading ? (
        <div ref={schedulerContainer} className="dhx_cal_container"></div>
      ) : (
        <div className="mt-3 h-full">
          <Skeleton className="min-h-48" />
        </div>
      )}
    </div>
  );
};

const SchedulerSkeleton = ({ className }: { className?: string }) => {
  return (
    <table className={`w-full border-2 ${className}`}>
      <thead>
        <tr className="bg-black/10 h-7">
          {[...Array(6)].map((_, index) => (
            <th key={index} className="font-normal">
              <Skeleton className="h-3 w-40 mx-auto rounded-xl bg-gray-300" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(6)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(6)].map((_, colIndex) => (
              <td key={colIndex} className="py-1">
                <Skeleton
                  className="h-2.5 rounded bg-gray-300 mx-auto"
                  style={{
                    width: `${Math.floor(Math.random() * 40) + 60}%`,
                  }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default scheduler;
