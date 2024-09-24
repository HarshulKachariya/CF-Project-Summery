import { faFileLines } from "@fortawesome/pro-solid-svg-icons";
import { formatCurrency } from "~/helpers";
import CustomIcon from "./CustomIcon";
import { useEffect, useState } from "react";
import Skeleton from "./Skeletons/spin";
import { Tooltip } from "antd";

const WorkInprogress = ({ data, isLoading, currencyCode }: any) => {
  const {
    cost_completed,
    current_cost_budget,
    earned_revenue,
    forcast_completed,
    original_contract_amount,
    over_billing,
    total_actual_cost,
    under_billing,
  } = data?.wip_widget || {};

  const total_project_amount = data?.billing_vs_actual?.amount_invoiced || 0;

  const Items = [
    {
      id: 1,
      label: "Total Project Amount (no/Tax)",
      value: `${formatCurrency(Number(original_contract_amount), currencyCode)}
`,
      color: "text-success",
    },
    {
      id: 2,
      label: "Invoiced to Date (no/Tax)",
      value: `${formatCurrency(Number(total_project_amount), currencyCode)}
`,
      color: "text-success",
    },
    {
      id: 3,
      label: "Current Cost Budget",
      value: `${formatCurrency(Number(current_cost_budget), currencyCode)}`,
      color: "text-danger",
    },
    {
      id: 4,
      label: "Total Actual Costs",
      value: `${formatCurrency(Number(total_actual_cost), currencyCode)}`,
      color: "text-danger",
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
      value: `${formatCurrency(Number(earned_revenue), currencyCode)}`,
      color: "text-success",
    },
    {
      id: 8,
      label: "Over Billings",
      value: `${formatCurrency(Number(over_billing), currencyCode)}`,
      color: "text-success",
    },
    {
      id: 9,
      label: " Under Billings",
      value: `${formatCurrency(Number(under_billing), currencyCode)}`,
      color: "text-danger",
    },
  ];

  return (
    <>
      <CustomIcon
        icon="fa-solid fa-file-lines"
        label="Work In Progress (WIP)"
        children={
          <div className="information-report ml-6">
            <Tooltip
              title="Read: Understanding Work in Progress"
              placement="top"
            >
              <a
                href="https://kb.contractorforeman.com/knowledge-base/understanding-the-work-in-progress-wip-report/"
                target="_blank"
              >
                <i className="fa-regular fa-circle-info"></i>
              </a>
            </Tooltip>
          </div>
        }
      />
      <div className="summary_details_block_body">
        <ul className="mt-sm">
          {Items.map((i) => (
            <li className="d-flex justify-content-between" key={i.id}>
              <span>{i.label}</span>
              <span className="project_summery_amt">
                {isLoading ? (
                  <Skeleton className="odd:w-12 h-2.5 rounded-xl" />
                ) : (
                  <span className={`${i.color} font-semibold`}>{i.value}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorkInprogress;
