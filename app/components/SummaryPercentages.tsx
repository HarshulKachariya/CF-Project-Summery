import React, { Suspense, useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";
import CustomIcon from "./CustomIcon";
import Skeleton from "./Skeletons/spin";
import Spiner from "./Skeletons/spin";
import { Float, Int } from "~/helpers";

const ReactApexChart = require("react-apexcharts").default;

const SummaryPercentages = ({ data, isLoading }: any) => {
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
  const amountInvoiced =
    (Number(billing_vs_actual?.amount_invoiced) || 0) / 100;
  const estimatedTotal = Number(all_item_total?.total?.estimated_total) || 0;
  const originalContractAmount =
    (Number(billing_vs_actual?.original_contract_amount) || 0) / 100;

  // Function to format currency
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  useEffect(() => {
    const totalPercentage = 100;
    let actualTotal = 0; // committed
    let estimatedTotal = 0; // estimatted
    let actualActualTotal = 0; // committed
    let actualEstimatedTotal = 0; // estimatted
    let laborTotal = 0; // committed
    let laborEstimatedTotal = 0; // estimatted

    let original_contract_amount = originalContractAmount;
    let billed_amount = Int(data?.billed_amount) / 100;

    let item_totals: any = data?.project_cost;
    Array(
      "material",
      "equipment",
      "labor",
      "sub_contractor",
      "other_item",
      "total",
      "expense",
      "unassigned"
    )?.forEach(function (ary, index) {
      if (ary == "total") {
        if (item_totals?.[ary]) {
          actualTotal = item_totals?.[ary]?.["commited_total"];
          estimatedTotal = item_totals?.[ary]?.["estimated_total"];
          actualEstimatedTotal = item_totals?.[ary]?.["estimated_total"];
          actualActualTotal = item_totals?.[ary]?.["actual_total"];
        }
      }
      if (ary == "labor") {
        if (item_totals?.[ary]) {
          laborTotal = item_totals?.[ary]?.["commited_total"];
          laborEstimatedTotal = item_totals?.[ary]?.["estimated_total"];
        }
      }
    });

    setCostsEstimate({
      budgeted: [
        Float(
          (isNaN((actualTotal * 100) / estimatedTotal)
            ? 0
            : (actualTotal * 100) / estimatedTotal
          ).toFixed(0)
        ),
        Float(
          (isNaN((actualActualTotal * 100) / actualEstimatedTotal)
            ? 0
            : (actualActualTotal * 100) / actualEstimatedTotal
          ).toFixed(0)
        ),
        Float(
          (isNaN((laborTotal * 100) / laborEstimatedTotal)
            ? 0
            : (laborTotal * 100) / laborEstimatedTotal
          ).toFixed(0)
        ),
        Float(
          (isNaN((billed_amount * 100) / original_contract_amount)
            ? 0
            : (billed_amount * 100) / original_contract_amount
          ).toFixed(0)
        ),
      ],
      actual: [
        totalPercentage,
        totalPercentage,
        totalPercentage,
        totalPercentage,
      ],
      actual_total: !isNaN(actualTotal) ? Float(actualTotal) : 0,
      estimated_total: !isNaN(estimatedTotal) ? Float(estimatedTotal) : 0,
      actual_actual_total: !isNaN(actualActualTotal)
        ? Float(actualActualTotal)
        : 0,
      actual_estimated_total: !isNaN(actualEstimatedTotal)
        ? Float(actualEstimatedTotal)
        : 0,
      labor_total: !isNaN(laborTotal) ? Float(laborTotal) : 0,
      labor_estimated_total: !isNaN(laborEstimatedTotal)
        ? Float(laborEstimatedTotal)
        : 0,
      billed_amount: !isNaN(billed_amount) ? Float(billed_amount) : 0,
      original_contract_amount: !isNaN(original_contract_amount)
        ? Float(original_contract_amount)
        : 0,
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
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        dataLabels: {
          position: "top",
        },
      },
    },
    xaxis: {
      categories: ["Committed", "Actual", "Labor", "Invoiced"],
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return `${val.toFixed(0)}%`;
        },
      },
      min: 0,
      max: 1000,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["transparent"],
      width: 5,
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
          data1 = commitedTotal.toFixed(0);
          data2 = estimatedTotal.toFixed(0);
        } else if (dataPointIndex === 1) {
          label1 = "Actual Cost";
          label2 = "Estimated Cost";
          data1 = actualTotal.toFixed(0);
          data2 = estimatedTotal.toFixed(0);
        } else if (dataPointIndex === 2) {
          label1 = "Actual Labor Cost";
          label2 = "Budgeted Labor";
          data1 = laborActualTotal.toFixed(0);
          data2 = laborActualTotal.toFixed(0);
        } else if (dataPointIndex === 3) {
          label1 = "Contract Billings";
          label2 = "Contract Amount";
          data1 = amountInvoiced.toFixed(0);
          data2 = originalContractAmount.toFixed(0);
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
    colors: ["#7d89a9", "#f5c85e"],
    legend: {
      show: false,
      position: "top",
    },
  };

  const series = [
    {
      name: "Budgeted",
      data: costsEstimate?.budgeted ?? [],
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
