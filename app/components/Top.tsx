import {
  faCalculator,
  faCalendar,
  faCalendarDays,
  faChartMixed,
  faUserTie,
  faUserVneck,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "~/helpers";
import Skeleton from "./Skeletons/skeleton";

const Top = ({ data, isLoading }: any) => {
  if (!data) return;

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
      icon: faChartMixed,
      color: `#9ABA04`,
      bgColor: `#F1F4E6`,
    },
    {
      id: 2,
      label: "Site Manager",
      label2: `${
        data?.site_manager_name !== "" ? data?.site_manager_name : "-"
      }`,
      values: ``,
      icon: faUserVneck,
      color: `#7FB2FF`,
      bgColor: `#ECF3FE`,
    },
    {
      id: 3,
      label: "Project Manager",
      label2: `${
        data?.project_manager_name !== "" ? data?.project_manager_name : "-"
      }`,
      values: ``,
      icon: faUserTie,
      color: "#57A6EC",
      bgColor: "#EEF4FC",
    },
    {
      id: 4,
      label: "Start/End Date",
      label2: `${
        data?.start_date && data?.end_date !== ""
          ? data?.start_date + "-" + data?.end_date
          : "-"
      }`,
      values: ``,
      icon: faCalendar,
      color: "#A54BFF",
      bgColor: "#F4EAFF",
    },
    {
      id: 5,
      label: " Schedule Completed",
      label2: `${
        billing_vs_actual?.progress !== "0" ? billing_vs_actual?.progress : "0"
      }%`,
      values: ``,
      icon: faCalendarDays,
      color: `#9ABA04`,
      bgColor: `#F1F4E6`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-3">
      {Items.map(({ id, bgColor, icon, label, label2, values, color }) => (
        <div
          className="rounded-lg border bg-white hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5"
          key={id}
        >
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: bgColor }}
              className="w-10 h-10 rounded-full flex justify-center items-center flex-shrink-0"
            >
              <FontAwesomeIcon
                icon={icon}
                style={{ color: color }}
                className="text-lg"
              />
            </div>
            <div className="flex-grow min-w-0">
              <div className="text-sm truncate">{label}</div>
              {!isLoading ? (
                <p className="flex justify-between items-center text-sm ">
                  <span className="truncate font-medium">{label2}</span>
                  <span className="text-emerald-600 font-semibold ml-1 text-green-500 ">
                    {values}
                  </span>
                </p>
              ) : (
                <Skeleton className="rounded-xl h-3.5" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top;
