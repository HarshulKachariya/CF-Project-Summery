import { faFileLines } from "@fortawesome/pro-solid-svg-icons";
import { formatCurrency } from "~/helpers";
import CustomIcon from "../ant-design/CustomIcon";
import { useEffect, useState } from "react";
import Skeleton from "./Skeletons/skeleton";
import Spiner from "./Skeletons/spin";

const WorkInprogress = ({ data, isLoading }: any) => {
  if (!data) return;

  const {
    cost_completed,
    current_cost_budget,
    earned_revenue,
    forcast_completed,
    original_contract_amount,
    over_billing,
    total_actual_cost,
    under_billing,
  } = data;

  const Items = [
    {
      id: 1,
      label: "Total Project Amount (no/Tax)",
      value: `${formatCurrency(Number(original_contract_amount))}
`,
      color: "text-emerald-600",
    },
    {
      id: 2,
      label: "Invoiced to Date (no/Tax)",
      value: `${formatCurrency(Number(original_contract_amount))}
`,
      color: "text-emerald-600",
    },
    {
      id: 3,
      label: "Current Cost Budget",
      value: `${formatCurrency(Number(current_cost_budget))}`,
      color: "text-red-600",
    },
    {
      id: 4,
      label: "Total Actual Costs",
      value: `${formatCurrency(Number(total_actual_cost))}`,
      color: "text-red-600",
    },
    {
      id: 5,
      label: "Cost % Complete",
      value: `${Number(cost_completed!).toFixed(2)}%`,
      color: "",
    },
    {
      id: 6,
      label: "Forecasted % Complete",
      value: `${Number(forcast_completed)}%`,
      color: "",
    },
    {
      id: 7,
      label: "Earned Revenue",
      value: `${formatCurrency(Number(earned_revenue))}`,
      color: "text-emerald-600",
    },
    {
      id: 8,
      label: "Over Billings",
      value: `${formatCurrency(Number(over_billing))}`,
      color: "text-emerald-600",
    },
    {
      id: 9,
      label: " Under Billings",
      value: `${formatCurrency(Number(under_billing))}`,
      color: "text-red-600",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div>
          <CustomIcon
            icon={faFileLines}
            label="Work In Progress (WIP)"
            bgColor="#F3EEFD"
            color="#8C55E9"
          />

          <div className="pt-2.5 flex flex-col gap-[1px] lg:gap-[1.7px]">
            {Items.map((i) => (
              <p
                className="flex justify-between items-center text-sm"
                key={i.id}
              >
                {i.label}{" "}
                <span className={`${i.color} font-semibold`}>{i.value}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkInprogress;
