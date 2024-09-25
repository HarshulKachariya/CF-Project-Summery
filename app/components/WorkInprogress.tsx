import { formatCurrency } from "~/helpers";
import CustomIcon from "./CustomIcon";
import { Tooltip } from "antd";

interface ItemsProps {
  id: any;
  label?: any;
  value?: any;
  color?: string;
  tooltipText?: string;
}
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

  console.log(
    "qwerty",
    cost_completed,
    current_cost_budget,
    earned_revenue,
    forcast_completed,
    original_contract_amount,
    over_billing,
    total_actual_cost,
    under_billing
  );

  const total_project_amount = data?.billing_vs_actual?.amount_invoiced || 0;

  // Function to handle NaN or 0 values
  const formatValue = (value: any) => {
    return isNaN(Number(value)) || Number(value) === null
      ? 0
      : Number(value).toFixed(0);
  };

  const formatAsCurrency = (value: any): any => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const Items: ItemsProps[] = [
    {
      id: 1,
      label: "Total Project Amount (no/Tax)",
      value: `${formatCurrency(
        formatValue(original_contract_amount),
        currencyCode
      )}`,
      color: "text-success",
    },
    {
      id: 2,
      label: "Invoiced to Date (no/Tax)",
      value: `${formatCurrency(formatValue(total_project_amount), currencyCode)}
`,
      color: "text-success",
    },
    {
      id: 3,
      label: "Current Cost Budget",
      value: `${formatCurrency(
        formatValue(current_cost_budget),
        currencyCode
      )}`,
      color: "text-danger",
    },
    {
      id: 4,
      label: "Total Actual Costs",
      value: `${formatCurrency(formatValue(total_actual_cost), currencyCode)}`,
      color: "text-danger",
    },
    {
      id: 5,
      label: "Cost % Complete",
      value: `${
        Number(cost_completed!) !== 0
          ? formatAsCurrency(formatValue(cost_completed!))
          : 0
      }%`,
      color: "",
      tooltipText: "Total Actual Costs Divided by Current Cost Budget",
    },
    {
      id: 6,
      label: "Forecasted % Complete",
      value: `${
        Number(forcast_completed) !== 0
          ? formatAsCurrency(formatValue(forcast_completed))
          : 0
      }%`,
      color: "",
      tooltipText: "Project Manager input",
    },
    {
      id: 7,
      label: "Earned Revenue",
      value: `${formatCurrency(formatValue(earned_revenue), currencyCode)}`,
      color: "text-success",
      tooltipText: "Current Contact Value Multiplied by forecasted % Complete",
    },
    {
      id: 8,
      label: "Over Billings",
      value: `${formatCurrency(formatValue(over_billing), currencyCode)}`,
      color: "text-success",
      tooltipText:
        "Earned Revenue Minus Current Billings if Earned Revenue is less than Current Billings",
    },
    {
      id: 9,
      label: " Under Billings",
      value: `${formatCurrency(formatValue(under_billing), currencyCode)}`,
      color: "text-danger",
      tooltipText:
        "Earned Revenue Minus Current Billings if Earned Revenue is greater than Current Billings",
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
              {isLoading ? (
                <div className="custom-shimmer amt_shimmer"></div>
              ) : (
                <Tooltip title={i.tooltipText} placement="right">
                  <span className={`${i.color} project_summery_amt`}>
                    {i.value}
                  </span>
                </Tooltip>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorkInprogress;
