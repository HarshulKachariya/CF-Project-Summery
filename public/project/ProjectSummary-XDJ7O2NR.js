import{b as e}from"./chunk-K7XNUO3B.js";import{a as p}from"./chunk-MPTY3R54.js";import{c as u,e as o}from"./chunk-AXJRDWLZ.js";var s=u(o(),1),j=({data:t,isLoading:m,currencyCode:a,moduleName:r,woName:l})=>{console.log("Project summery ===>>>>>>>>>",t);let{change_orders:N,contract_amount_held:i,invoice_payments:_,original_contract_amount:b,remain_invoices:y,total_project_amount:d,unpaid_invoices:f,work_orders:n,service_tickets:c}=t||{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{icon:"fa-solid fa-calculator",label:"Project Summary"}),(0,s.jsxs)("div",{className:"summary_details_block_body",children:[(0,s.jsxs)("ul",{className:"project_summery_list mt-sm",children:[(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:"Original Contract Amount (w/Tax) "}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(b),a)})]}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:"Change Orders (w/Tax)"}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(N),a)})]}),Number(n)>0&&(0,s.jsxs)("li",{className:"d-flex justify-content-between ",children:[(0,s.jsxs)("span",{children:[l!==""?l:"Work Orders"," (w/Tax)"]}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(n),a)})]}),Number(c)>0&&(0,s.jsxs)("li",{className:"d-flex justify-content-between ",children:[(0,s.jsx)("span",{children:"Service Tickets (w/Tax)"}),(0,s.jsx)("span",{className:"project_summery_amt text-success",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(c),a)})]}),(0,s.jsx)("i",{className:"fa-regular fa-plus maths-symbols"})]}),(0,s.jsx)("ul",{className:"project_summery_list mt-md project-contract-total",children:(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:" Total Project Amount (w/Tax)"}),(0,s.jsx)("span",{className:"project_summery_amt",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(d),a)})]})}),(0,s.jsxs)("ul",{className:"project_summery_list mt-md",children:[(0,s.jsx)("i",{className:"fa-regular fa-minus maths-symbols"}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:"Customer Payments"}),(0,s.jsx)("span",{className:"project_summery_amt text-danger",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(_),a)})]}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsxs)("span",{children:["Unpaid ",r!==""?r:"Invoices"]}),(0,s.jsx)("span",{className:"project_summery_amt text-danger",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):e(Number(f),a)})]})]}),(0,s.jsxs)("ul",{className:"project_summery_list mt-md project-remaining-balance",children:[(0,s.jsx)("i",{className:"fa-regular fa-equals maths-symbols","aria-hidden":"true"}),(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:(0,s.jsx)("b",{children:"Remaining to Invoice"})}),(0,s.jsx)("span",{className:"project_summery_amt",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):(0,s.jsx)("b",{children:e(Number(y),a)})})]}),Number(i)!==0&&(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsx)("span",{children:(0,s.jsx)("b",{children:"Current Retention Held"})}),(0,s.jsx)("span",{className:"project_summery_amt",children:m?(0,s.jsx)("div",{className:"custom-shimmer summary-shimmer me-0"}):(0,s.jsx)("b",{children:e(Number(i),a)})})]})]})]})]})},x=j;export{x as default};
