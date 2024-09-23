import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";

export const formatCurrency = (value: any) => {
  // Convert string to number, divide by 100 to get the correct decimal place
  const number = parseFloat(value) / 100;

  // Format the number as currency
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

export const curr_date = dayjs().format("YYYY-MM-DD HH:mm:ss");

export const tz = dayjs().format("Z");
let origin = typeof window !== "undefined" ? window.location.origin : "";

export const base_url = origin.includes("cfdev")
  ? `https://api-cfdev.contractorforeman.net`
  : origin.includes("beta")
  ? `https://api-beta.contractorforeman.net`
  : `https://api.contractorforeman.net`;
