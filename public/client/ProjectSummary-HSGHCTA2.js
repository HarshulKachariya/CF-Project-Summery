import{a as e}from"./chunk-4XSHID3A.js";import{a as u}from"./chunk-MPTY3R54.js";import{c as n,e as c}from"./chunk-AXJRDWLZ.js";var s=n(c(),1),d=({data:t,isLoading:m,currencyCode:a})=>{console.log("Project summery ===>>>>>>>>>",t);let{change_orders:o,contract_amount_held:r,invoice_payments:p,original_contract_amount:N,remain_invoices:_,total_project_amount:b,unpaid_invoices:y,work_orders:l,service_tickets:i}=t||{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{icon:"fa-solid fa-calculator",label:"Project Summary"}),(0,s.jsxs)("div",{className:"summary_details_block_body",children:[(0,s.jsxs)("ul",{className:"project_summery_list mt-sm",children:[(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:"Original Contract Amount (w/Tax) "}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(N),a)})]}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:"Change Orders (w/Tax)"}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(o),a)})]}),Number(l)>0&&(0,s.jsxs)("li",{className:"d-flex justify-content-between ",children:[(0,s.jsx)("span",{children:"Work Orders (w/Tax)"}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(l),a)})]}),Number(i)>0&&(0,s.jsxs)("li",{className:"d-flex justify-content-between ",children:[(0,s.jsx)("span",{children:"Service Tickets (w/Tax)"}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(i),a)})]}),(0,s.jsx)("i",{className:"fa-regular fa-plus maths-symbols"})]}),(0,s.jsx)("ul",{className:"project_summery_list mt-md project-contract-total",children:(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:" Total Project Amount (w/Tax)"}),(0,s.jsx)("span",{className:"project_summery_amt",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(b),a)})]})}),(0,s.jsxs)("ul",{className:"project_summery_list mt-md",children:[(0,s.jsx)("i",{className:"fa-regular fa-minus maths-symbols"}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:"Customer Payments"}),(0,s.jsx)("span",{className:"project_summery_amt text-danger",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(p),a)})]}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:"Unpaid Invoices"}),(0,s.jsx)("span",{className:"project_summery_amt text-danger",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(y),a)})]})]}),(0,s.jsxs)("ul",{className:"project_summery_list mt-md project-remaining-balance",children:[(0,s.jsx)("i",{className:"fa-regular fa-equals maths-symbols","aria-hidden":"true"}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:(0,s.jsx)("b",{children:"Remaining to Invoice"})}),(0,s.jsx)("span",{className:"project_summery_amt",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):(0,s.jsx)("b",{children:e(Number(_),a)})})]}),Number(r)!==0&&(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:(0,s.jsx)("b",{children:"Current Retention Held"})}),(0,s.jsx)("span",{className:"project_summery_amt",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):(0,s.jsx)("b",{children:e(Number(r),a)})})]})]})]})]})},v=d;export{v as default};
