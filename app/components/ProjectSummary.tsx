import Skeleton from "./Skeletons/spin";
import { formatCurrency } from "~/helpers";
import CustomIcon from "./CustomIcon";

const ProjectSummary = ({ data, isLoading, currencyCode }: any) => {
  console.log("Project summery ===>>>>>>>>>", data);

  const {
    change_orders,
    contract_amount_held,
    invoice_payments,
    original_contract_amount,
    remain_invoices,
    total_project_amount,
    unpaid_invoices,
    work_orders,
    service_tickets,
  } = data || {};

  return (
    <>
      <CustomIcon icon="fa-solid fa-calculator" label="Project Summary" />

      <div className="summary_details_block_body">
        {/* top */}
        <ul className="project_summery_list mt-sm">
          <li className="d-flex justify-content-between">
            Original Contract Amount (w/Tax){" "}
            <span className="text-emerald-600 font-semibold">
              {!isLoading ? (
                formatCurrency(Number(original_contract_amount), currencyCode)
              ) : (
                <Skeleton className="w-12 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
          <li className="d-flex justify-content-between ">
            Change Orders (w/Tax)
            <span className="text-emerald-600 font-semibold">
              {!isLoading ? (
                formatCurrency(Number(change_orders), currencyCode)
              ) : (
                <Skeleton className="w-10 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
          {Number(work_orders) > 0 && (
            <li className="d-flex justify-content-between ">
              Work Orders (w/Tax)
              <span className="text-emerald-600 font-semibold">
                {!isLoading ? (
                  formatCurrency(Number(work_orders), currencyCode)
                ) : (
                  <Skeleton className="w-10 h-2.5 rounded-xl" />
                )}
              </span>
            </li>
          )}
          {Number(service_tickets) > 0 && (
            <li className="d-flex justify-content-between ">
              Service Tickets (w/Tax)
              <span className="text-emerald-600 font-semibold">
                {!isLoading ? (
                  formatCurrency(Number(service_tickets), currencyCode)
                ) : (
                  <Skeleton className="w-10 h-2.5 rounded-xl" />
                )}
              </span>
            </li>
          )}
          <i className="fa-regular fa-plus maths-symbols"></i>
        </ul>

        {/* middle */}
        <ul className="project_summery_list mt-md project-contract-total">
          <li className="d-flex justify-content-between">
            <span> Total Project Amount (w/Tax)</span>
            <span className="project_summery_amt">
              {!isLoading ? (
                formatCurrency(Number(total_project_amount), currencyCode)
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
                formatCurrency(Number(invoice_payments), currencyCode)
              ) : (
                <Skeleton className="w-10 h-2.5 rounded-xl" />
              )}
            </span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Unpaid Invoices</span>
            <span className="project_summery_amt text-danger">
              {!isLoading ? (
                formatCurrency(Number(unpaid_invoices), currencyCode)
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
                formatCurrency(Number(remain_invoices), currencyCode)
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
                  formatCurrency(Number(contract_amount_held), currencyCode)
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

//     <li class="justify-content-between hide">
//         <span><?= _t("Work Orders (w/Tax)") ?></span>
//         <span id="lblProjectSummaryWorkOrder"
//               class="project_summery_amt text-success"></span>
//     </li>
//     <li class="justify-content-between hide">
//         <span><?= _t("Service Tickets (w/Tax)") ?></span>
//         <span id="lblProjectSummaryInvoices"
//               class="project_summery_amt text-success hide"></span>
//         <span
//                 id="lblProjectSummaryServiceTicket"
//                 class="project_summery_amt text-success"></span>
//     </li>
//     <i
//             class="fa-regular fa-plus maths-symbols"></i>
// </ul>
