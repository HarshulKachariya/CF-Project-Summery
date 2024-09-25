import React, { useEffect, useState, Suspense, lazy } from "react";
import { ApexOptions } from "apexcharts";
import axios from "axios";
import CustomIcon from "./CustomIcon";
import { IndexProps } from "~/routes/_index";
import { base_url, curr_date, Int, tz } from "~/helpers";

interface BillStatus {
  bill_status: string;
  bill_count: string;
}

interface Data {
  open_incomplete_item?: {
    opnIncoBills?: BillStatus[];
  };
}

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
            offsetX: 7,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },

    xaxis: { categories: ["OPEN", "DUE", "CLOSED"], tickPlacement: "on" },
    fill: {
      opacity: 1,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      offsetX: 40,
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
  const Compliance = data?.open_incomplete_item?.opnIncoCompliance[0] || {};

  const [billCounts, setBillCounts] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const bills = data?.open_incomplete_item?.opnIncoBills || [];
    const newBillCounts = [0, 0, 0]; // [open, due, closed]

    bills.forEach(({ bill_status, bill_count }: BillStatus) => {
      const count = parseInt(bill_count, 10);
      switch (bill_status.toLowerCase()) {
        case "open":
          newBillCounts[0] += count;
          break;
        case "due":
          newBillCounts[1] += count;
          break;
        case "closed":
          newBillCounts[2] += count;
          break;
      }
    });

    setBillCounts(newBillCounts);
  }, [data]);

  const series = [
    {
      name: "Bills",
      data: billCounts,
      color: "#D53E4F",
    },
    {
      name: "Compliance",
      data: [
        Number(Compliance?.total_open) || 0,
        Number(Compliance?.total_due) || 0,
        Number(Compliance?.total_close) || 0,
      ],
      color: "#303A52",
    },
    {
      name: "Invoices",
      data: [
        Number(invoices?.total_open) || 0,
        Number(invoices?.total_due) || 0,
        Number(invoices?.total_close) || 0,
      ],
      color: "#684CC7",
    },
    {
      name: "PO's",
      data: [
        Number(pos?.total_open) || 0,
        Number(pos?.bill_count) || 0,
        Number(pos?.total_close) || 0,
      ],
      color: "#3836A1",
    },
    {
      name: "Punchlists",
      data: [
        Number(opnIncoPunchlist?.total_open) || 0,
        Number(opnIncoPunchlist?.total_due) || 0,
        Number(opnIncoPunchlist?.total_close) || 0,
      ],
      color: "#F46D43",
    },
    {
      name: "RFI's",
      data: [
        Number(opnIncoRFI?.total_open) || 0,
        Number(opnIncoRFI?.bill_count) || 0,
        Number(opnIncoRFI?.total_close) || 0,
      ],
      color: "#2494A4",
    },
    {
      name: "To Do's",
      data: [
        Number(ToDos?.total_open) || 0,
        Number(ToDos?.total_due) || 0,
        Number(ToDos?.total_close) || 0,
      ],
      color: "#CC9F5D",
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
            style={{ height: 238 }}
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
                  height={238}
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
