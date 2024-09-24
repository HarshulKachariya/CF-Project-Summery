import dayjs from "dayjs";

import ReactDOMServer from "react-dom/server";

export const formatCurrency = (
  value: number | string,
  code: string = "USD"
) => {
  // Convert string to number, divide by 100 to get the correct decimal place
  const number = parseFloat(value as string) / 100;

  // Format the number as currency
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Format the absolute value
  let formattedNumber = formatter.format(Math.abs(number));

  // For negative values, add the minus sign at the beginning
  if (number < 0) {
    // Extract the currency symbol
    const parts = formatter.formatToParts(1);
    const currencySymbol =
      parts.find((part) => part.type === "currency")?.value || "";

    // Remove the currency symbol, add the minus sign, then add the currency symbol back
    formattedNumber = formattedNumber.replace(currencySymbol, "");
    formattedNumber = currencySymbol + "-" + formattedNumber.trim();
  }

  return formattedNumber;
};

export const chartFormatCurrency = (
  value: number | string,
  code: string = "USD"
) => {
  // Convert string to number
  const number = parseFloat(value as string);

  // Format the number as currency
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Format the absolute value
  let formattedNumber = formatter.format(Math.abs(number));

  // For negative values, add the minus sign at the beginning
  if (number < 0) {
    // Extract the currency symbol
    const parts = formatter.formatToParts(1);
    const currencySymbol =
      parts.find((part) => part.type === "currency")?.value || "";

    // Remove the currency symbol, add the minus sign, then add the currency symbol back
    formattedNumber = formattedNumber.replace(currencySymbol, "");
    formattedNumber = currencySymbol + "-" + formattedNumber.trim();
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

export function generateHtml(component: any) {
  let html = ReactDOMServer.renderToString(component);

  return html;
}
