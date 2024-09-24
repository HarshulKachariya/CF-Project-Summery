import React, { Suspense, useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";

import CustomIcon from "./CustomIcon";

import Spiner from "./Skeletons/spin";
import { chartFormatCurrency, Float, formatCurrency, Int } from "~/helpers";

const ReactApexChart = require("react-apexcharts").default;

const SummaryPercentages = ({ data, isLoading, currencyCode }: any) => {
  const [costsEstimate, setCostsEstimate] = useState<any>({
    budgeted: [],
    actual: [],
  });

  // const [ReactApexChart, setReactApexChart] = useState<any>();
  // useEffect(() => {
  //   import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  // }, []);

  const billing_vs_actual = data?.billing_vs_actual || {};
  const all_item_total = data?.all_item_total || {};

  const commitedTotal = Number(all_item_total?.total?.commited_total) || 0;
  const actualTotal = Number(all_item_total?.total?.actual_total) || 0;
  const laborActualTotal = Number(all_item_total?.labor?.actual_total) || 0;
  const estimated_labor_total =
    Number(all_item_total?.labor?.estimated_total) || 0;
  const amountInvoiced =
    (Number(billing_vs_actual?.amount_invoiced) || 0) / 100;
  const estimatedTotal = Number(all_item_total?.total?.estimated_total) || 0;
  const originalContractAmount =
    (Number(billing_vs_actual?.original_contract_amount) || 0) / 100;

  const invoiced_to_date =
    Number(data?.finance_summary?.invoices?.amount_invoiced) || 0;
  const total_project_amount =
    Number(data?.project_summary?.total_project_amount) || 0;

  useEffect(() => {
    const totalPercentage = 100;

    setCostsEstimate({
      budgeted: [
        Float(
          estimatedTotal === 0
            ? 0
            : isNaN((commitedTotal * 100) / estimatedTotal)
            ? 0
            : ((commitedTotal * 100) / estimatedTotal).toFixed(0)
        ),
        Float(
          estimatedTotal === 0
            ? 0
            : isNaN((actualTotal * 100) / estimatedTotal)
            ? 0
            : ((actualTotal * 100) / estimatedTotal).toFixed(0)
        ),
        Float(
          estimated_labor_total === 0
            ? 0
            : isNaN((laborActualTotal * 100) / estimated_labor_total)
            ? 0
            : ((laborActualTotal * 100) / estimated_labor_total).toFixed(0)
        ),
        Float(
          total_project_amount === 0
            ? 0
            : isNaN((invoiced_to_date * 100) / total_project_amount)
            ? 0
            : ((invoiced_to_date * 100) / total_project_amount).toFixed(0)
        ),
      ],
      actual: [
        totalPercentage,
        totalPercentage,
        totalPercentage,
        totalPercentage,
      ],
    });
  }, [data]);

  // Sanitize and validate data before using in chart

  const options: ApexOptions = {
    chart: {
      id: "chart1",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "#ebebeb",
      strokeDashArray: 4,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 1,
      },
      column: {
        colors: undefined,
        opacity: 1,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        colors: {
          ranges: [
            {
              from: -999999999999999999,
              to: 0,
              color: "#f65200",
            },
          ],
        },
        columnWidth: "40%",
      },
    },
    xaxis: {
      categories: ["Committed", "Actual", "Labor", "Invoiced"],
    },
    yaxis: {
      title: {
        text: "",
      },

      labels: {
        formatter: function (value: any) {
          return value.toFixed(0) + "%";
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      colors: ["transparent"],
      width: 4,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val: number) {
          return formatCurrency(Number(val));
        },
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        let title = w.globals.labels[dataPointIndex];
        let data1 = series[0][dataPointIndex];
        let data2 = series[1][dataPointIndex];
        let label1 = "";
        let label2 = "";
        if (dataPointIndex === 0) {
          label1 = "Committed Cost";
          label2 = "Estimated Cost";
          data1 = chartFormatCurrency(commitedTotal, currencyCode);
          data2 = chartFormatCurrency(estimatedTotal, currencyCode);
        } else if (dataPointIndex === 1) {
          label1 = "Actual Cost";
          label2 = "Estimated Cost";
          data1 = chartFormatCurrency(actualTotal, currencyCode);
          data2 = chartFormatCurrency(estimatedTotal, currencyCode);
        } else if (dataPointIndex === 2) {
          label1 = "Actual Labor Cost";
          label2 = "Est. Labor Cost";
          data1 = chartFormatCurrency(laborActualTotal, currencyCode);
          data2 = chartFormatCurrency(estimated_labor_total, currencyCode);
        } else if (dataPointIndex === 3) {
          label1 = "Invoiced to Date";
          label2 = "Total Project Amount";
          data1 = chartFormatCurrency(amountInvoiced, currencyCode);
          data2 = chartFormatCurrency(originalContractAmount, currencyCode);
        }
        return (
          "\
                            <div class='tooltip-box-block'>\
                                <div class='tooltip_inner_block'>\
                                    <div class='bg-[#ECEFF1] border-b border-solid border-[#ddd] text-13 font-medium leading-4 p-1.5 mb-1'>" +
          title +
          "</div>\
                                    <div class='tooltip-box-body'>\
                                        <div class='tooltip-group-div !py-1 gap-1'>\
                                            <div class='flex items-center text-xs text-primary-900'>\
                                                <small class='w-2.5 h-2.5 bg-[#63759A] rounded-full mr-0.5 inline-block'></small>\
                                                " +
          label1 +
          ": </div>\
                                                <CFTypography title='small' class='text-xs text-primary-900'> " +
          data1 +
          "</CFTypography >\
                                        </div >\
                                        <div class='tooltip-group-div !py-1 gap-1'>\
                                            <div class='flex items-center text-xs text-primary-900'>\
                                            <small class='w-2.5 h-2.5 bg-[#F9BE3F] rounded-full mr-0.5 inline-block'></small>\
                                            " +
          label2 +
          ": </div >\
                                            <CFTypography title='small' class='text-xs text-primary-900'> " +
          data2 +
          "</CFTypography>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>"
        );
      },
    },
    colors: ["#63759A", "#F9BE3F"],
    legend: {
      show: false,
      position: "top",
    },
  };

  const series = [
    {
      name: "Budgeted",
      data: costsEstimate?.budgeted,
    },
    {
      name: "Actual",
      data: costsEstimate?.actual,
    },
  ];

  if (!data) {
    console.log("<<<<<==== Data not Available ====>>>>>");
    return <Spiner />;
  }

  return (
    <>
      <CustomIcon icon="fa-solid fa-sack-dollar" label="Summary Percentages" />
      <div className="summary_details_block_body">
        {!ReactApexChart ? (
          <Spiner />
        ) : (
          <Suspense>
            <ReactApexChart
              type="bar"
              options={options}
              series={series}
              height={250}
            />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default SummaryPercentages;
