import { formatCurrency, formatValue2 } from "~/helpers";
import CustomIcon from "./CustomIcon";

const Invoiced = ({ data, isLoading, currencyCode }: any) => {
  const {
    amount_invoiced,
    original_contract_amount,
    remain_to_invoice,
    total_actual_cost,
    gross_profit,
  } = data?.billing_vs_actual || {};

  // $("#lbl_ba_current_billings_percantage").html("(" + Math.round((unformatNumber(data.amount_invoiced)*100) / unformatNumber(data.original_contract_amount)) + "%)");

  // $("#lbl_ba_remain_to_be_billed_percantage").html("(" + Math.round((unformatNumber(data.remain_to_invoice)*100) / unformatNumber(data.original_contract_amount)) + "%)");

  const formatValue2 = (value: any): string => {
    const numValue = Number(value);
    if (isNaN(numValue) || value === null || value === "") return "0";
    return numValue === 0 ? "0" : numValue.toFixed(2);
  };

  const Items = [
    {
      id: 1,
      label: "Total Project Amount (no/Tax)",
      value: `${formatCurrency(
        formatValue2(original_contract_amount),
        currencyCode
      )}
`,
      color: "text-success",
    },
    {
      id: 2,
      label: `Invoiced to Date (no/Tax) (${
        formatValue2(amount_invoiced) !== "0" &&
        formatValue2(original_contract_amount) !== "0"
          ? (
              (Number(formatValue2(amount_invoiced)) * 100) /
              Number(formatValue2(original_contract_amount))
            ).toFixed(0)
          : 0
      }%)`,
      value: `${formatCurrency(formatValue2(amount_invoiced), currencyCode)}
`,
      color: "text-success",
    },
    {
      id: 3,
      label: `Remaining to Invoice (no/Tax) (${
        formatValue2(remain_to_invoice) !== "0" &&
        formatValue2(original_contract_amount) !== "0"
          ? (
              (Number(remain_to_invoice) * 100) /
              Number(original_contract_amount)
            ).toFixed(0)
          : 0
      }%)`,
      value: `${formatCurrency(formatValue2(remain_to_invoice), currencyCode)}`,
      color: "text-success",
    },
    {
      id: 4,
      label: "Total Actual Costs",
      value: `${formatCurrency(formatValue2(total_actual_cost), currencyCode)}`,
      color: "text-danger",
    },
    {
      id: 5,
      label: "Gross Profit",
      value: `${formatCurrency(formatValue2(gross_profit), currencyCode)}`,
      color: "text-success",
    },
  ];

  return (
    <>
      <CustomIcon
        icon="fa-solid fa-file-chart-column"
        label="Invoiced vs Actual"
      />
      <div className="summary_details_block_body">
        {/* {isLoading ? (
          <InvoicedSkeleton />
        ) : ( */}
        <ul className="mt-sm">
          {Items.map((i) => (
            <li className="d-flex justify-content-between" key={i.id}>
              <span>{i.label}</span>
              {isLoading ? (
                <div className="custom-shimmer amt_shimmer"></div>
              ) : (
                <span className={`${i.color} project_summery_amt`}>
                  {i.value}
                </span>
              )}
            </li>
          ))}
        </ul>
        {/* )} */}
      </div>
    </>
  );
};

export default Invoiced;
