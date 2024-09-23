import React, { Suspense, useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";
import { CFTypography } from "~/ant-design/CFTypography";
import CustomIcon from "../ant-design/CustomIcon";
import Skeleton from "./Skeletons/skeleton";
import Spiner from "./Skeletons/spin";

// const ReactApexChart = require("react-apexcharts").default;

const SummaryPercentages = ({ data, isLoading }: any) => {
  if (!data) return;

  const [ReactApexChart, setReactApexChart] = useState<any>();

  useEffect(() => {
    import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  }, []);

  const billing_vs_actual = data?.billing_vs_actual || {};
  const all_item_total = data?.all_item_total || {};

  // Function to format currency
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Sanitize and validate data before using in chart
  const commitedTotal = Number(all_item_total?.total?.commited_total) || 0;
  const actualTotal = Number(all_item_total?.total?.actual_total) || 0;
  const laborActualTotal = Number(all_item_total?.labor?.actual_total) || 0;
  const amountInvoiced =
    (Number(billing_vs_actual?.amount_invoiced) || 0) / 100;
  const estimatedTotal = Number(all_item_total?.total?.estimated_total) || 0;
  const originalContractAmount =
    (Number(billing_vs_actual?.original_contract_amount) || 0) / 100;

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
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        let title = w.globals.labels[dataPointIndex];
        let data1 = series[0][dataPointIndex];
        let data2 = series[1][dataPointIndex];

        let label1 = "";
        let label2 = "";
        if (dataPointIndex === 0) {
          label1 = "Committed Cost";
          label2 = "Estimated Cost";
          data1 = commitedTotal;
          data2 = estimatedTotal;
        } else if (dataPointIndex === 1) {
          label1 = "Actual Cost";
          label2 = "Estimated Cost";
          data1 = actualTotal;
          data2 = estimatedTotal;
        } else if (dataPointIndex === 2) {
          label1 = "Actual Labor Cost";
          label2 = "Budgeted Labor";
          data1 = laborActualTotal;
          data2 = laborActualTotal;
        } else if (dataPointIndex === 3) {
          label1 = "Contract Billings";
          label2 = "Contract Amount";
          data1 = amountInvoiced;
          data2 = originalContractAmount;
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
      y: {
        formatter: function (val: number) {
          return formatCurrency(Number(val));
        },
      },
    },
    colors: ["#7d89a9", "#f5c85e"],
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Invoiced to Date",
      data: [commitedTotal, actualTotal, laborActualTotal, amountInvoiced],
    },
    {
      name: "Total Project Amount",
      data: [
        estimatedTotal,
        actualTotal,
        laborActualTotal,
        originalContractAmount,
      ],
    },
  ];

  if (!data) {
    console.log("<<<<<==== Data not Available ====>>>>>");
    return <div>Loading Charts</div>;
  }

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="h-full">
          <CustomIcon
            icon={faSackDollar}
            label="Summary Percentages"
            bgColor="#FEF6E5"
            color="#F8AB07"
            className="text-base"
          />

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
      )}
    </>
  );
};

export default SummaryPercentages;

const ChartSkeleton = () => {
  return (
    <div className="relative h-64 ">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="w-10 h-2" />
        ))}
      </div>

      {/* Chart bars */}
      <div className="absolute left-14  right-0 top-0 bottom-8 flex justify-between items-end">
        {[10, 16, 60, 20, 40].map((height, index) => (
          <div key={index} className="flex flex-col items-center">
            <Skeleton className={`w-12 mb-1 h-${height}`} />
            <Skeleton className="w-16 h-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
