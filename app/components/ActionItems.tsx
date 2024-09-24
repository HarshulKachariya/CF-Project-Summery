import React, { useEffect, useState, Suspense, lazy } from "react";
import { ApexOptions } from "apexcharts";
import { faBoxCircleCheck } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";
import CustomIcon from "./CustomIcon";
import { IndexProps } from "~/routes/_index";
import Spiner from "./Skeletons/spin";
import { base_url, curr_date, Int, tz } from "~/helpers";

const ReactApexChart = require("react-apexcharts").default;

const ActionItems = ({ projectId, userId, compId }: IndexProps) => {
  const [actionItemsChart, setActionItemsChart] = useState<any>({});
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
        formData.append("project_id", projectId?.toString() ?? "0");
        formData.append("need_more_data", "0");
        formData.append("for_module_key", "");
        formData.append("version", "web");
        formData.append("from", "panel");
        formData.append("iframe_call", "0");
        formData.append("tz", tz);
        formData.append("tzid", "Asia/Calcutta");
        formData.append("curr_time", curr_date);
        formData.append("force_login", "0");
        formData.append("global_project", "");
        formData.append("user_id", userId?.toString() ?? "0");
        formData.append("company_id", compId?.toString() ?? "0");

        const response = await axios.post(
          `${base_url}/service.php?opp=get_project_reference_detail&c=${
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

  useEffect(() => {
    setActionItemsChart((prev: any) => ({
      ...(prev ?? {}),
      close: [
        Number(data?.open_incomplete_item?.opnIncoBills?.total_close),
        Number(data?.open_incomplete_item?.opnIncoInvoice?.total_close),
        Number(data?.open_incomplete_item?.opnIncoPurchaseOrder?.total_close),
        Number(data?.open_incomplete_item?.opnIncoPunchlist?.total_close),
        Number(data?.open_incomplete_item?.opnIncoRFI?.total_close),
        Number(data?.open_incomplete_item?.opnIncoToDo?.total_close),
        Number(data?.open_incomplete_item?.opnIncoCompliance?.total_close),
      ],
      open: [
        Number(data?.open_incomplete_item?.opnIncoBills?.total_open),
        Number(data?.open_incomplete_item?.opnIncoInvoice?.total_open),
        Number(data?.open_incomplete_item?.opnIncoPurchaseOrder?.total_open),
        Number(data?.open_incomplete_item?.opnIncoPunchlist?.total_open),
        Number(data?.open_incomplete_item?.opnIncoRFI?.total_open),
        Number(data?.open_incomplete_item?.opnIncoToDo?.total_open),
        Number(data?.open_incomplete_item?.opnIncoCompliance?.total_open),
      ],
      due: [
        Number(data?.open_incomplete_item?.opnIncoBills?.total_due),
        Number(data?.open_incomplete_item?.opnIncoInvoice?.total_due),
        Number(data?.open_incomplete_item?.opnIncoPurchaseOrder?.total_due),
        Number(data?.open_incomplete_item?.opnIncoPunchlist?.total_due),
        Number(data?.open_incomplete_item?.opnIncoRFI?.total_due),
        Number(data?.open_incomplete_item?.opnIncoToDo?.total_due),
        Number(data?.open_incomplete_item?.opnIncoCompliance?.total_due),
      ],
    }));
  }, [data]);

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
    colors: [
      "#D53E4F",
      "#303A52",
      "#684CC7",
      "#3836A1",
      "#F46D43",
      "#2494A4",
      "#CC9F5D",
    ],
    legend: {
      show: true,
      position: "top",
      onItemClick: {
        toggleDataSeries: false,
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0.35,
        },
      },
    },
  };

  const invoices = data?.open_incomplete_item?.opnIncoInvoice[0] || {};
  const bills = data?.open_incomplete_item?.opnIncoBills || {};
  const pos = data?.open_incomplete_item?.opnIncoPurchaseOrder[0] || {};
  const opnIncoPunchlist =
    data?.open_incomplete_item?.opnIncoPunchlist[0] || {};
  const opnIncoRFI = data?.open_incomplete_item?.opnIncoRFI[0] || {};
  const ToDos = data?.open_incomplete_item?.opnIncoToDo[0] || {};
  const Compliance =
    (data?.open_incomplete_item?.opnIncoCompliance > 0 &&
      data?.open_incomplete_item?.opnIncoCompliance[0]) ||
    {};

  const series = [
    {
      name: "Bills",
      data: [
        Number(bills?.bill_count) || 0,
        Number(bills[0]?.bill_count) || 0,
        Number(bills[1]?.bill_count) || 0,
      ],
    },
    {
      name: "Compliance",
      data: [
        Number(Compliance?.total_open) || 0,
        Number(Compliance[0]?.total_due) || 0,
        Number(Compliance[1]?.total_close) || 0,
      ],
    },
    {
      name: "Invoices",
      data: [
        Number(invoices?.total_open) || 0,
        Number(invoices?.total_due) || 0,
        Number(invoices?.total_close) || 0,
      ],
    },
    {
      name: "PO's",
      data: [
        Number(pos?.total_open) || 0,
        Number(pos?.bill_count) || 0,
        Number(pos?.total_close) || 0,
      ],
    },
    {
      name: "Punchlists",
      data: [
        Number(opnIncoPunchlist?.total_open) || 0,
        Number(opnIncoPunchlist?.total_due) || 0,
        Number(opnIncoPunchlist?.total_close) || 0,
      ],
    },
    {
      name: "RFI's",
      data: [
        Number(opnIncoRFI?.total_open) || 0,
        Number(opnIncoRFI?.bill_count) || 0,
        Number(opnIncoRFI?.total_close) || 0,
      ],
    },
    {
      name: "To Do's",
      data: [
        Number(ToDos?.total_open) || 0,
        Number(ToDos?.bill_count) || 0,
        Number(ToDos?.total_close) || 0,
      ],
    },
  ];

  const filteredSeries = series.filter((s) =>
    s.data.some((value) => value > 0)
  );

  return (
    <>
      <CustomIcon icon="fa-solid fa-box-circle-check" label="Action Items" />
      <div className="summary_details_block_body position-relative">
        {data?.length <= 0 ? (
          <div
            className="chart-bar-loader chart-horizontal"
            style={{ height: 250 }}
          >
            <ul className="chart-bar-xaxis">
              <li className="xaxis-1">
                <span></span>
              </li>
              <li className="xaxis-2">
                <span></span>
              </li>
              <li className="xaxis-3">
                <span></span>
              </li>
              <li className="xaxis-4">
                <span></span>
              </li>
              <li className="xaxis-5">
                <span></span>
              </li>
              <li className="xaxis-6">
                <span></span>
              </li>
            </ul>
            <div className="chart-bar-shimmer">
              <div className="bar-shimmer bar-1">
                <span></span>
              </div>
              <div className="bar-shimmer bar-2">
                <span></span>
              </div>
              <div className="bar-shimmer bar-3">
                <span></span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            {!ReactApexChart ? (
              <></>
            ) : (
              <Suspense>
                <ReactApexChart
                  type="bar"
                  height={250}
                  options={options}
                  series={filteredSeries}
                />
              </Suspense>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ActionItems;
