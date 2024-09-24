import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";

export const formatCurrency = (value: any) => {
  // Convert string to number, divide by 100 to get the correct decimal place
  const number = parseFloat(value) / 100;

  // Format the number as currency
  let formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(number));

  // For negative values, insert the minus sign after the dollar sign
  if (number < 0) {
    formattedNumber = formattedNumber.replace("$", "$-");
  }

  return formattedNumber;
};

export const curr_date = dayjs().format("YYYY-MM-DD HH:mm:ss");

export const tz = dayjs().format("Z");
let origin = typeof window !== "undefined" ? window.location.origin : "";

export const base_url = origin.includes("cfdev")
  ? `https://api-cfdev.contractorforeman.net`
  : origin.includes("beta")
  ? `https://api-beta.contractorforeman.net`
  : origin.includes("app")
  ? `https://api.contractorforeman.net`
  : `https://api-beta.contractorforeman.net`;

export const redirect_url = origin.includes("cfdev")
  ? `https://app-cfdev.contractorforeman.net`
  : origin.includes("beta")
  ? `https://app-beta.contractorforeman.net`
  : origin.includes("app")
  ? `https://app.contractorforeman.net`
  : `https://app-cfdev.contractorforeman.net`;

export const Int = (value: string | number | boolean | undefined) => {
  return Number(value);
};

export const Float = (value: string | number | boolean | undefined) => {
  return Number(value);
};
