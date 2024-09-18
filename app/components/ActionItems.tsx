import React, { useEffect, useState, Suspense, lazy } from "react";
import { ApexOptions } from "apexcharts";
import { faBoxCircleCheck } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";
import CustomIcon from "./CustomIcon";
import { IndexProps } from "~/routes/_index";
import Skeleton from "./Skeletons/skeleton";

const ReactApexChart = require("react-apexcharts").default;

const ActionItems = ({ projectId, userId, compId }: IndexProps) => {
  const [data, setData] = useState<any>([]);

  const [isLoading, setisLoading] = useState(true);
  // const [ReactApexChart, setReactApexChart] = useState<any>();
  // useEffect(() => {
  //   import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      console.log("Data fetching from Action Items =====>>>>>.........");

      try {
        const formData = new FormData();
        formData.append("op", "get_project_reference_detail");
        formData.append("project_id", projectId.toString() ?? "0");
        formData.append("need_more_data", "0");
        formData.append("for_module_key", "");
        formData.append("version", "web");
        formData.append("from", "panel");
        formData.append("iframe_call", "0");
        formData.append("tz", "+5:30");
        formData.append("tzid", "Asia/Calcutta");
        formData.append("curr_time", new Date().toISOString());
        formData.append("force_login", "0");
        formData.append("global_project", "");
        formData.append("user_id", userId.toString() ?? "0");
        formData.append("company_id", compId.toString() ?? "0");

        const response = await axios.post(
          `https://api-cfdev.contractorforeman.net/service.php?opp=get_project_reference_detail&c=${
            compId ? Number(compId) : 0
          }&u=${userId ? Number(userId) : 0}&p=manage_projects`,
          formData
        );

        console.log(
          "Data fetching Successfull from Action Items  =====>>>>>",
          response?.data
        );
        setData(response?.data?.data?.modules || []);
        setisLoading(false);
      } catch (error) {
        console.log("Error fetching data from Action Items =====>>>>>", error);
        console.error("Error fetching data:", error);
      } finally {
        setisLoading(false);
      }
    };

    const timer = setTimeout(() => {
      if (projectId) {
        fetchData();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [projectId, userId, compId]);

  const options: ApexOptions = {
    chart: {
      id: "chart1",
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: { categories: ["OPEN", "DUE", "CLOSED"], tickPlacement: "on" },
    colors: ["#684CC7", "#e01f35", "#282691"],
    legend: {
      show: true,
      position: "top",
    },
  };

  const invoices = data?.open_incomplete_item?.opnIncoInvoice[0] || {};
  const bills = data?.open_incomplete_item?.opnIncoBills[0] || {};
  const pos = data?.open_incomplete_item?.opnIncoPurchaseOrder[0] || {};

  const series = [
    {
      name: "Invoices",
      data: [
        Number(invoices?.total_open) || 0,
        Number(invoices?.total_due) || 0,
        Number(invoices?.total_close) || 0,
      ],
    },
    {
      name: "Bills",
      data: [
        Number(bills?.total_open) || 0,
        Number(bills?.bill_count) || 0,
        Number(bills?.total_close) || 0,
      ],
    },
    {
      name: "Purchase Orders",
      data: [
        Number(pos?.total_open) || 0,
        Number(pos?.bill_count) || 0,
        Number(pos?.total_close) || 0,
      ],
    },
  ];

  if (data?.length <= 0) {
    console.log("<<<<<==== Data not Available ====>>>>>");
    return <div>Loading Charts</div>;
  }

  return (
    <div className="h-full">
      <CustomIcon
        icon={faBoxCircleCheck}
        label="Action Items"
        bgColor="#F0E5FF"
        color="#684CC7"
        className="text-base"
      />
      {!ReactApexChart ? (
        <ActionItemsSkeleton />
      ) : (
        <>
          {!isLoading ? (
            <Suspense>
              <ReactApexChart
                type="bar"
                height={250}
                options={options}
                series={series}
              />
            </Suspense>
          ) : (
            <ActionItemsSkeleton />
          )}
        </>
      )}
    </div>
  );
};

export default ActionItems;

const ActionItemsSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Skeleton className="w-8 h-4" />
          <Skeleton
            className={`h-14 ${
              index === 1 ? "w-3/4" : index === 2 ? "w-full" : "w-1/2"
            }`}
          />
        </div>
      ))}
    </div>
  );
};
