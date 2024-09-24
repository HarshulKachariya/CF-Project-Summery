import { faFileChartColumn } from "@fortawesome/pro-solid-svg-icons";
import { formatCurrency } from "~/helpers";

import Skeleton from "./Skeletons/spin";
import CustomIcon from "./CustomIcon";

const Invoiced = ({ data, isLoading }: any) => {
  const {
    amount_invoiced,
    original_contract_amount,
    remain_to_invoice,
    total_actual_cost,
    gross_profit,
  } = data?.billing_vs_actual || {};

  const Items = [
    {
      id: 1,
      label: "Total Project Amount (no/Tax)",
      value: `${formatCurrency(original_contract_amount)}
`,
      color: "text-success",
    },
    {
      id: 2,
      label: "Invoiced to Date (no/Tax)",
      value: `${formatCurrency(Number(amount_invoiced))}
`,
      color: "text-success",
    },
    {
      id: 3,
      label: "Remaining to Invoice (no/Tax)",
      value: `${formatCurrency(Number(remain_to_invoice))}`,
      color: "text-success",
    },
    {
      id: 4,
      label: "Total Actual Costs",
      value: `${formatCurrency(Number(total_actual_cost))}`,
      color: "text-danger",
    },
    {
      id: 5,
      label: "Gross Profit",
      value: `${formatCurrency(Number(gross_profit))}`,
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
        {isLoading ? (
          <InvoicedSkeleton />
        ) : (
          <ul className="mt-sm">
            {Items.map((i) => (
              <li className="d-flex justify-content-between" key={i.id}>
                <span>{i.label}</span>
                <span className={`${i.color} project_summery_amt`}>
                  {i.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Invoiced;

const InvoicedSkeleton = () => {
  const commonStyle = `flex justify-between items-center text-sm`;

  return (
    <div className="space-y-1 mt-3">
      <p className={commonStyle}>
        Total Project Amount (no/Tax){" "}
        <Skeleton className="w-12 h-2.5 rounded-xl"></Skeleton>
      </p>
      <p className={commonStyle}>
        Invoiced to Date (no/Tax) (77%){" "}
        <Skeleton className="w-10 h-2.5 rounded-xl"></Skeleton>
      </p>
      <p className={commonStyle}>
        Remaining to Invoice (no/Tax) (23%){" "}
        <Skeleton className="w-12 h-2.5 rounded-xl"></Skeleton>
      </p>
      <p className={commonStyle}>
        Total Actual Costs{" "}
        <Skeleton className="w-10 h-2.5 rounded-xl"></Skeleton>
      </p>
      <p className={commonStyle}>
        Gross Profit <Skeleton className="w-12 h-2.5 rounded-xl"></Skeleton>
      </p>
    </div>
  );
};
