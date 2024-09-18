import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faEquals,
} from "@fortawesome/sharp-regular-svg-icons";
import { faCalculator } from "@fortawesome/pro-duotone-svg-icons";
import Skeleton from "./Skeletons/skeleton";
import { formatCurrency } from "~/helpers";
import CustomIcon from "./CustomIcon";

const ProjectSummary = ({ data, isLoading }: any) => {
  if (!data) return;

  console.log("Project summery ===>>>>>>>>>", data);

  const {
    change_orders,
    contract_amount_held,
    invoice_payments,
    original_contract_amount,
    remain_invoices,
    total_project_amount,
    unpaid_invoices,
  } = data;

  return (
    <div className="space-y-2 text-sm">
      <CustomIcon
        icon={faCalculator}
        label="Project Summary"
        color={`#78AEFE`}
        bgColor={`#ECF3FF`}
        className="text-base"
      />

      <div className="flex flex-col gap-3">
        {/* top */}
        <div className="border border-gray-300 w-full h-full rounded-md space-y-0.5 px-4 py-1.5 relative">
          <p className="flex justify-between items-center text-sm">
            Original Contract Amount (w/Tax){" "}
            <span className="text-emerald-600 font-semibold">
              {!isLoading ? (
                formatCurrency(Number(original_contract_amount))
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Change Orders (w/Tax)
            <span className="text-emerald-600 font-semibold">
              {!isLoading ? (
                formatCurrency(Number(change_orders!))
              ) : (
                <Skeleton className="w-10 h-2.5 rounded-xl" />
              )}
            </span>
          </p>
          <div className="w-6 h-6  rounded-full bg-white shadow-lg shadow-black/20 absolute -bottom-2 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faPlus} className="text-xs" />
          </div>
        </div>

        {/* middle */}
        <p className="flex justify-between items-center text-sm bg-gray-200 px-4 py-2 rounded-md ">
          Total Project Amount (w/Tax)
          <span className="text-blue-950 font-semibold">
            {!isLoading ? (
              formatCurrency(Number(total_project_amount))
            ) : (
              <Skeleton className="w-12 h-2.5 rounded-xl" />
            )}
          </span>
        </p>

        {/* bootom */}
        <div className="border border-gray-300 w-full h-full rounded-md space-y-0.5 px-4 py-1.5 relative">
          <div className="w-6 h-6 rounded-full bg-white shadow-lg shadow-black/20 absolute -top-3 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faMinus} className="text-xs" />
          </div>
          <p className="flex justify-between items-center text-sm">
            Customer Payments
            <span className="text-red-500 font-semibold">
              {!isLoading ? (
                formatCurrency(Number(invoice_payments))
              ) : (
                <Skeleton className="w-10 h-2.5 rounded-xl" />
              )}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Unpaid Invoices
            <span className="text-red-500 font-semibold">
              {!isLoading ? (
                formatCurrency(Number(unpaid_invoices))
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </p>
        </div>

        {/* Final block */}
        <div className="relative px-4 py-1.5">
          <div className="border border-dashed  w-full "></div>
          <div className="w-6 h-6 rounded-full bg-white shadow-lg shadow-black/20 absolute -top-1 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faEquals} className="text-xs" />
          </div>
          <p className="flex justify-between items-center font-bold text-sm mt-3">
            Remaining to Invoice
            <span>
              {!isLoading ? (
                formatCurrency(Number(remain_invoices))
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </p>
          {contract_amount_held && (
            <p className="flex justify-between items-center font-bold text-sm ">
              Current Retention Held
              <span>
                {!isLoading ? (
                  formatCurrency(Number(contract_amount_held))
                ) : (
                  <Skeleton className="w-10 h-2.5 rounded-xl" />
                )}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
