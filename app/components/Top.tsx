import { redirect_url, formatCurrency } from "~/helpers";
import Skeleton from "./Skeletons/spin";
import { Tooltip } from "antd";

interface ItemsProps {
  id: any;
  bgColor?: string;
  icon?: string;
  label: string;
  label2?: string;
  values?: any;
  color?: string;
  summaryClassName?: string;
  tooltipText?: string;
  tooltipLabel?: string;
  link?: any;
}

const Top = ({ data, isLoading, currencyCode }: any) => {
  const { billing_vs_actual } = data || {};

  const Items: ItemsProps[] = [
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
      values: `${formatCurrency(
        Number(billing_vs_actual?.gross_profit),
        currencyCode
      )}`,
      icon: "fa-solid fa-chart-mixed",
      summaryClassName: "project_summary_grossprofit",
      tooltipText: "Invoiced to Date Minus Total Actual Costs",
      tooltipLabel: "Invoiced to Date Minus Total Actual Costs",
    },
    {
      id: 2,
      label: "Site Manager",
      label2: data?.site_manager_name || "-",
      values: "",
      icon: "fa-solid fa-user-vneck",
      summaryClassName: "project_summary_sitemanager",
      link: data?.site_manager_id
        ? `${redirect_url}/manage-directory/${data.site_manager_id}`
        : null,
      tooltipLabel: data?.site_manager_name,
    },
    {
      id: 3,
      label: "Project Manager",
      label2: data?.project_manager_name || "-",
      values: "",
      icon: "fa-solid fa-user-tie",
      summaryClassName: "project_summary_projectmanager",
      link: data?.project_manager_id
        ? `${redirect_url}/manage-directory/${data.project_manager_id}`
        : null,
      tooltipLabel: data?.project_manager_name,
    },
    {
      id: 4,
      label: "Start/End Date",
      label2: (() => {
        if (data?.start_date && data?.end_date) {
          return `${data.start_date} - ${data.end_date}`;
        } else if (data?.start_date) {
          return data.start_date;
        } else if (data?.end_date) {
          return data.end_date;
        } else {
          return "-";
        }
      })(),
      values: "",
      icon: "fa-solid fa-calendar",
      summaryClassName: "project_summary_date",
      tooltipLabel: (() => {
        if (data?.start_date && data?.end_date) {
          return `${data.start_date} - ${data.end_date}`;
        } else if (data?.start_date) {
          return data.start_date;
        } else if (data?.end_date) {
          return data.end_date;
        } else {
          return "-";
        }
      })(),
    },
    {
      id: 5,
      label: "Schedule Completed",
      label2: `${Number(data?.progress || 0).toFixed(0)}%`,
      values: "",
      icon: "fa-solid fa-calendar-days",
      summaryClassName: "project_summary_schedule",
      tooltipLabel: `${
        Number(data?.progress || 0) > 0
          ? Number(data?.progress || 0).toFixed(0) + "%"
          : ""
      }`,
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
          link,
        }: ItemsProps) => (
          <div className="col-xxl col-xl-4 col-lg-6 col-12" key={id}>
            <div
              className={`common_summary_block profile_info_block d-flex ${summaryClassName}`}
            >
              <div
                style={{ backgroundColor: bgColor }}
                className="profile_info_icon"
              >
                <i className={icon} style={{ color: color }}></i>
              </div>
              <div className="profile_info_content">
                <h6>{label}</h6>
                {!isLoading ? (
                  <p className="d-flex justify-content-between">
                    <Tooltip
                      title={tooltipLabel !== "" && tooltipLabel}
                      placement="bottom"
                    >
                      {link && label2 !== "-" ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate link_custom"
                        >
                          {label2}
                        </a>
                      ) : (
                        <span className="truncate font-medium">{label2}</span>
                      )}
                    </Tooltip>
                    {values && (
                      <Tooltip title={tooltipText} placement="bottom">
                        <span className="project_summery_amt text-success">
                          {values}
                        </span>
                      </Tooltip>
                    )}
                  </p>
                ) : (
                  <p className="d-flex justify-content-between mt-8">
                    <div className="custom-shimmer amount-shimmer ms-0"></div>
                    {values && (
                      <div className="custom-shimmer amount-shimmer me-0"></div>
                    )}
                  </p>
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
