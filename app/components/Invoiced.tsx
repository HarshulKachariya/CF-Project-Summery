import { faFileChartColumn } from "@fortawesome/pro-solid-svg-icons";
import { formatCurrency } from "~/helpers";
import Skeleton from "./Skeletons/skeleton";
import CustomIcon from "./CustomIcon";

const Invoiced = ({ data, isLoading }: any) => {
  const {
    amount_invoiced,
    original_contract_amount,
    remain_to_invoice,
    total_actual_cost,
    gross_profit,
  } = data?.billing_vs_actual;

  const invoicedPercentage = (
    (parseFloat(amount_invoiced!) / parseFloat(original_contract_amount!)) *
    100
  ).toFixed(0);
  const remainingPercentage = (
    (parseFloat(remain_to_invoice) / parseFloat(original_contract_amount)) *
    100
  ).toFixed(0);

  const Items = [
    {
      id: 1,
      label: "Total Project Amount (no/Tax)",
      value: `${formatCurrency(original_contract_amount)}
`,
      color: "text-emerald-600",
    },
    {
      id: 2,
      label: "Invoiced to Date (no/Tax)",
      value: `${formatCurrency(Number(amount_invoiced))}
`,
      color: "text-emerald-600",
    },
    {
      id: 3,
      label: "Remaining to Invoice (no/Tax)",
      value: `${formatCurrency(Number(remain_to_invoice))}`,
      color: "text-emerald-600",
    },
    {
      id: 4,
      label: "Total Actual Costs",
      value: `${formatCurrency(Number(total_actual_cost))}`,
      color: "text-red-600",
    },
    {
      id: 5,
      label: "Gross Profit",
      value: `${formatCurrency(Number(gross_profit))}`,
      color: "text-emerald-600",
    },
  ];

  const commonStyle = `flex justify-between items-center text-sm`;

  return (
    <div className="flex flex-col gap-3">
      <div>
        <CustomIcon
          icon={faFileChartColumn}
          label="Invoiced vs Actual"
          bgColor="#F3ECF5"
          color="#CE6698"
        />
        {isLoading ? (
          <InvoicedSkeleton />
        ) : (
          <div className="space-y-1 mt-3">
            {Items.map((i) => (
              <p className={commonStyle} key={i.id}>
                {i.label}{" "}
                <span className={`${i.color} font-semibold`}>{i.value}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
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
