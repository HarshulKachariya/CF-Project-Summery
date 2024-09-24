import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faEquals,
} from "@fortawesome/sharp-regular-svg-icons";
import { faCalculator } from "@fortawesome/pro-duotone-svg-icons";
import Skeleton from "./Skeletons/spin";
import { formatCurrency } from "~/helpers";
import CustomIcon from "./CustomIcon";

const ProjectSummary = ({ data, isLoading }: any) => {
  console.log("Project summery ===>>>>>>>>>", data);

  const {
    change_orders,
    contract_amount_held,
    invoice_payments,
    original_contract_amount,
    remain_invoices,
    total_project_amount,
    unpaid_invoices,
  } = data || {};

  return (
    <>
      <CustomIcon icon="fa-solid fa-calculator" label="Project Summary" />

      <div className="summary_details_block_body">
        {/* top */}
        <ul className="project_summery_list mt-sm">
          <li className="d-flex justify-content-between">
            <span>Original Contract Amount (w/Tax) </span>
            <span className="project_summery_amt text-success">
              {!isLoading ? (
                formatCurrency(Number(original_contract_amount))
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Change Orders (w/Tax)</span>
            <span className="project_summery_amt text-success">
              {!isLoading ? (
                formatCurrency(Number(change_orders))
              ) : (
                <Skeleton className="w-10 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
          <i className="fa-regular fa-plus maths-symbols"></i>
        </ul>

        {/* middle */}
        <ul className="project_summery_list mt-md project-contract-total">
          <li className="d-flex justify-content-between">
            <span> Total Project Amount (w/Tax)</span>
            <span className="project_summery_amt">
              {!isLoading ? (
                formatCurrency(Number(total_project_amount))
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
        </ul>

        {/* bootom */}
        <ul className="project_summery_list mt-md">
          <i className="fa-regular fa-minus maths-symbols"></i>
          <li className="d-flex justify-content-between">
            <span>Customer Payments</span>
            <span className="project_summery_amt text-danger">
              {!isLoading ? (
                formatCurrency(Number(invoice_payments))
              ) : (
                <Skeleton className="w-10 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Unpaid Invoices</span>
            <span className="project_summery_amt text-danger">
              {!isLoading ? (
                formatCurrency(Number(unpaid_invoices))
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
        </ul>

        {/* Final block */}
        <ul className="project_summery_list mt-md project-remaining-balance">
          <i
            className="fa-regular fa-equals maths-symbols"
            aria-hidden="true"
          ></i>
          <li className="d-flex justify-content-between">
            <span>
              <b>Remaining to Invoice</b>
            </span>
            <span className="project_summery_amt">
              {!isLoading ? (
                <b>{formatCurrency(Number(remain_invoices))}</b>
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
          {Number(contract_amount_held) !== 0 && (
            <li className="d-flex justify-content-between">
              <span>
                <b>Current Retention Held</b>
              </span>
              <span className="project_summery_amt">
                {!isLoading ? (
                  <b>{formatCurrency(Number(contract_amount_held))}</b>
                ) : (
                  <Skeleton className="w-10 h-2.5 rounded-xl" />
                )}
              </span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ProjectSummary;
