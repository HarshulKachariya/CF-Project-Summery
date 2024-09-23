// import {
//   faCalculator,
//   faCalendar,
//   faCalendarDays,
//   faChartMixed,
//   faUserTie,
//   faUserVneck,
// } from "@fortawesome/pro-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "~/helpers";
import Skeleton from "./Skeletons/spin";
import { Tooltip } from "antd";

interface ItemsProps {
  id: any;
  bgColor?: string;
  icon?: any;
  label: string;
  label2?: string;
  values?: any;
  color?: string;
  summaryClassName?: string;
  tooltipText?: string;
  tooltipLabel?: string;
}

const Top = ({ data, isLoading }: any) => {
  console.log("data from top", data);
  const { billing_vs_actual } = data;

  const Items = [
    {
      id: 1,
      label: "Gross Profit",
      label2: `(${
        Number(billing_vs_actual?.gross_profit) > 0
          ? (
              (billing_vs_actual?.gross_profit * 100) /
              billing_vs_actual?.amount_invoiced
            ).toFixed(2)
          : "0"
      }%)`,
      values: `${formatCurrency(Number(billing_vs_actual?.gross_profit))}`,
      icon: "fa-solid fa-chart-mixed",
      summaryClassName: "project_summary_grossprofit",
      tooltipText: "Invoiced to Date Minus Total Actual Costs",
      tooltipLabel: "Invoiced to Date Minus Total Actual Costs",
    },
    {
      id: 2,
      label: "Site Manager",
      label2: `${
        data?.site_manager_name !== "" ? data?.site_manager_name : "-"
      }`,
      values: ``,
      icon: "fa-solid fa-user-vneck",
      summaryClassName: "project_summary_sitemanager",
    },
    {
      id: 3,
      label: "Project Manager",
      label2: `${
        data?.project_manager_name !== "" ? data?.project_manager_name : "-"
      }`,
      values: ``,
      icon: "fa-solid fa-user-tie",
      summaryClassName: "project_summary_projectmanager",
      // color: "#57A6EC",
      // bgColor: "#EEF4FC",
    },
    {
      id: 4,
      label: "Start/End Date",
      label2: `${
        data?.start_date || data?.end_date !== ""
          ? data?.start_date !== ""
            ? data.start_date
            : data?.start_date + "-" + data?.end_date
          : "-"
      }`,
      values: ``,
      icon: "fa-solid fa-calendar",
      summaryClassName: "project_summary_date",
      // color: "#A54BFF",
      // bgColor: "#F4EAFF",
    },
    {
      id: 5,
      label: "Schedule Completed",
      label2: `${
        data?.progress.toFixed(0) !== "0" ? data?.progress.toFixed(0) : "0"
      }%`,
      values: ``,
      icon: "fa-solid fa-calendar-days",
      summaryClassName: "project_summary_schedule",
      // color: `#9ABA04`,
      // bgColor: `#F1F4E6`,
    },
  ];

  return (
    <div className="row g-3 summary_top_block_info">
      {Items.map(
        ({
          id,
          bgColor,
          icon,
          label,
          label2,
          values,
          color,
          summaryClassName,
          tooltipText,
          tooltipLabel,
        }: ItemsProps) => (
          <div className="col-xxl col-xl-4 col-lg-6 col-12" key={id}>
            <div
              className={`common_summary_block profile_info_block d-flex ${summaryClassName}`}
            >
              <div
                style={{ backgroundColor: bgColor }}
                className="profile_info_icon"
              >
                {/* <FontAwesomeIcon
                icon={icon}
                style={{ color: color }}
                className="text-lg"
              /> */}
                <i
                  className={`${icon}`} // Using the icon prop directly in className
                  style={{ color: color }}
                ></i>
              </div>
              <div className="profile_info_content">
                <h6>{label}</h6>
                {!isLoading ? (
                  <p className="d-flex justify-content-between">
                    <Tooltip title={tooltipLabel} placement="top">
                      <span className="truncate font-medium">{label2}</span>
                    </Tooltip>
                    {values ? (
                      <Tooltip title={tooltipText} placement="top">
                        <span className="project_summery_amt text-success">
                          {values}
                        </span>
                      </Tooltip>
                    ) : (
                      <></>
                    )}
                  </p>
                ) : (
                  <Skeleton className="rounded-xl h-3.5" />
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Top;
