function loadGanttCalendarSummary(response, RECORD_ID) {
  if (response && response != null && response.success == true) {
    hideLoading();
    summaryGanttCalendarDataObj = response.data;
    EXCLUDE_WEEKEND_DAYS = parseInt(MODULE_SETTING.weekend_schedule.toString());
    $(".summary_schedule .loading").hide();
    $("#dashboard_scheduler").show();
    initGanttCalendarSummary();
    return false;
  } else if (response && response != null && response.success == false) {
    showError(response.message);
    hideLoading();
  } else if (!response) {
    $(".summary_schedule .loading").show();
    $("#dashboard_scheduler").hide();

    var __project =
      currentRow["id"] != undefined ? currentRow["id"] : PRIMARY_ID;
    if (RECORD_ID > 0) {
      var __project = RECORD_ID;
    }
    var data = {
      op: "get_schedule_calendar_events",
      project: __project,
      for: "dashboard_summary",
      start_date_range:
        currentYear + "-" + moment().tz(timezone).format("M") + "-01 00:00:00",
    };
    doServiceCall(data, loadGanttCalendarSummary);
  }
  return false;
}

function initGanttCalendarSummary() {
  if (HAS_SUMMARY_CALENDAR_LOADED) {
    summaryScheduler.clearAll();
  } else {
    HAS_SUMMARY_CALENDAR_LOADED = true;
    summaryScheduler.config.start_on_monday = false;
    summaryScheduler.config.hour_date = "%h:%i %A";
    summaryScheduler.config.xml_date = "%Y-%m-%d %h:%i %a";
    summaryScheduler.config.limit_time_select = true;
    summaryScheduler.config.details_on_create = true;
    summaryScheduler.config.details_on_dblclick = true;
    summaryScheduler.config.prevent_cache = true;
    summaryScheduler.config.repeat_precise = true;
    summaryScheduler.config.multi_day = true;
    summaryScheduler.config.occurrence_timestamp_in_utc = true;
    summaryScheduler.config.include_end_by = true;
    summaryScheduler.config.event_duration = 30; // set default event duration
    summaryScheduler.config.auto_end_date = true;
    summaryScheduler.config.readonly = true;

    summaryScheduler.config.time_step = 30; // time interval
    summaryScheduler.config.first_hour = 0; //define start Time Hour
    summaryScheduler.config.last_hour = 23.5; //define Last Time Hour
    summaryScheduler.config.scroll_hour = 7; //sets the initial position of the vertical scroll in the summaryScheduler (an hour in the 24-hour clock format)
    summaryScheduler.config.full_day = true; //define whether include Full Day option
    summaryScheduler.config.default_date = "%M %j, %Y";
    summaryScheduler.locale.labels.section_title = "Title";
    summaryScheduler.locale.labels.section_assigned_to = "Assigned To";
    summaryScheduler.locale.labels.export_tab = "<i class='fa fa-print'></i>";
    summaryScheduler.config.dblclick_create = false;
    summaryScheduler.config.className = "dhtmlXTooltip tooltip";
    summaryScheduler.config.timeout_to_display = 50;
    summaryScheduler.config.timeout_to_hide = 50;
    summaryScheduler.config.delta_x = 15;
    summaryScheduler.config.delta_y = -20;
    summaryScheduler.config.drag_in = false;
    summaryScheduler.config.drag_move = false;
    summaryScheduler.config.drag_create = false;

    summaryScheduler.config.lightbox.sections = [
      {
        name: "title",
        height: 43,
        map_to: "title",
        type: "textarea",
        focus: true,
      },
      {
        name: "description",
        height: 130,
        map_to: "description",
        type: "textarea",
      },
      {
        name: "time",
        height: 72,
        type: "time",
        map_to: "auto",
      },
    ];

    summaryScheduler.config.buttons_left = ["dhx_save_btn", "dhx_cancel_btn"];
    summaryScheduler.config.buttons_right = ["dhx_delete_btn"];

    summaryScheduler.templates.event_class = function (start, end, event) {
      var css = "";

      if (parseInt(event.assigned_to) > 0) {
        // if event has subject property then special class should be assigned
        css += "assignee_" + event.assigned_to;
      } else {
        css += "assignee_none";
      }

      return css; // default return
    };
    //Date formats https://docs.dhtmlx.com/scheduler/settings_format.html
    summaryScheduler.templates.day_date = function (date) {
      var formatFunc = summaryScheduler.date.date_to_str("%D, %j %M %Y");
      return formatFunc(date);
    };

    summaryScheduler.attachEvent("onViewChange", function (new_mode, new_date) {
      new_date = moment(new_date).endOf("week").format("YYYY-MM-DD HH:mm:ss");
      new_date = new Date(new_date);
      formatted_date = $.format.date(new_date, "yyyy-MM-dd HH:mm:ss");

      if (change_view_date == formatted_date) {
        return;
      }

      change_view_date = formatted_date;
      if (
        loadedYears.indexOf(
          new_date.getFullYear() + "-" + new_date.getMonth()
        ) <= 0
      ) {
        loadedYears.push(new_date.getFullYear() + "-" + new_date.getMonth());
        showLoading();
        var schedule_project_id =
          currentRow["id"] != undefined ? currentRow["id"] : PRIMARY_ID;
        summaryScheduler.load(
          WEB_API_URL +
            "?op=get_schedule_calendar_events&version=web&from=panel" +
            "&user_id=" +
            CURRENT_USER_ID +
            "&company_id=" +
            CURRENT_COMPANY_ID +
            "&year=" +
            currentYear +
            "&tz=" +
            getTzOffset() +
            "&project=" +
            schedule_project_id +
            "&tzid=" +
            user_active_timezone +
            "&view=" +
            new_mode +
            "&for=dashboard_summary&start_date_range=" +
            formatted_date,
          "json",
          function () {
            // $("#scheduler_here .dhx_cal_tab[role='button']").css('pointer-events','all');
            hideLoading();
          }
        );
      }
    });

    summaryScheduler.attachEvent("onAfterLightbox", function () {
      $(".dhx_cal_light input, .dhx_cal_light textarea, .dhx_cal_light select")
        .attr("readonly", "readonly")
        .attr("disabled", "disabled");
    });

    summaryScheduler.ignore_week = function (date) {
      if (EXCLUDE_WEEKEND_DAYS == 1) {
        //Ignore Sunday
        if (date.getDay() == 0) {
          return true;
        }
      } else if (EXCLUDE_WEEKEND_DAYS == 2) {
        if (date.getDay() == 6 || date.getDay() == 0) {
          //hides Saturdays and Sundays
          return true;
        }
      } else if (EXCLUDE_WEEKEND_DAYS == 3) {
        if (date.getDay() == 6 || date.getDay() == 5 || date.getDay() == 0) {
          return true;
        }
      }
    };

    summaryScheduler.ignore_month = function (date) {
      if (EXCLUDE_WEEKEND_DAYS == 1) {
        //Ignore Sunday
        if (date.getDay() == 0) {
          return true;
        }
      } else if (EXCLUDE_WEEKEND_DAYS == 2) {
        if (date.getDay() == 6 || date.getDay() == 0) {
          //hides Saturdays and Sundays
          return true;
        }
      } else if (EXCLUDE_WEEKEND_DAYS == 3) {
        if (date.getDay() == 6 || date.getDay() == 5 || date.getDay() == 0) {
          return true;
        }
      }
    };

    summaryScheduler.xy.margin_top = 40;
    summaryScheduler.init(
      "dashboard_scheduler",
      new Date(CALENDAR_YEAR, CALENDAR_MONTH, CALENDAR_DAY),
      "week"
    );

    summaryScheduler.templates.tooltip_text = function (start, end, event) {
      return (
        "<b>Task: </b> " +
        event.text +
        "<br/><b>Project: </b>" +
        event.project_name +
        "</br><b>Start Date:</b> " +
        event.start_date_only +
        " " +
        event.start_time_only +
        "<br/><b>End Date:</b> " +
        event.end_date_only +
        " " +
        event.end_time_only
      );
    };
  }
  summaryScheduler.parse(summaryGanttCalendarDataObj, "json");
  summaryScheduler.render();
  IS_SUMMARY_SCHEDULE_RENDER = 1;
}
