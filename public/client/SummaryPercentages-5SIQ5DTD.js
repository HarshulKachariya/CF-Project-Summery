import { a as s } from "./chunk-N6IYFVZN.js";
import { d } from "./chunk-BRLBBIEX.js";
import { a as p } from "./chunk-DRECAGTU.js";
import { f as n } from "./chunk-6QHUBW6R.js";
import { b } from "./chunk-HOGY4L3A.js";
import { a as w } from "./chunk-LIQWK7XC.js";
import { c as i } from "./chunk-5TBO732O.js";
var o = i(w(), 1);
var t = i(b(), 1),
  C = ({ data: a, isLoading: l }) => {
    let [m, h] = (0, o.useState)();
    (0, o.useEffect)(() => {
      import("./react-apexcharts.min-HOW35RKL.js").then((e) =>
        h(() => e.default)
      );
    }, []);
    let c = a?.billing_vs_actual || {},
      r = a?.all_item_total || {},
      v = (e) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(e),
      y = Number(r?.total?.commited_total) || 0,
      u = Number(r?.total?.actual_total) || 0,
      f = Number(r?.labor?.actual_total) || 0,
      N = (Number(c?.amount_invoiced) || 0) / 100,
      x = Number(r?.total?.estimated_total) || 0,
      g = (Number(c?.original_contract_amount) || 0) / 100,
      _ = {
        chart: { id: "chart1", toolbar: { show: !1 } },
        grid: { show: !1 },
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: "30%",
            dataLabels: { position: "top" },
          },
        },
        xaxis: { categories: ["Committed", "Actual", "Labor", "Invoiced"] },
        yaxis: {
          labels: {
            formatter: function (e) {
              return `${e.toFixed(0)}%`;
            },
          },
          min: 0,
          max: 1e3,
        },
        dataLabels: { enabled: !1 },
        stroke: { colors: ["transparent"], width: 5 },
        tooltip: {
          shared: !0,
          intersect: !1,
          y: {
            formatter: function (e) {
              return v(Number(e));
            },
          },
        },
        colors: ["#7989A9", "#F9C75C"],
        legend: { show: !1, position: "top" },
      },
      A = [
        { name: "Invoiced to Date", data: [y, u, f, N] },
        { name: "Total Project Amount", data: [x, u, f, g] },
      ];
    return a
      ? (0, t.jsxs)(t.Fragment, {
          children: [
            l
              ? (0, t.jsx)("div", {
                  className: "flex justify-center items-center w-full h-full",
                  children: (0, t.jsx)(n, {}),
                })
              : (0, t.jsxs)("div", {
                  className: "h-full",
                  children: [
                    (0, t.jsx)(p, {
                      icon: d,
                      label: "Summary Percentages",
                      bgColor: "#FEF6E5",
                      color: "#F8AB07",
                      className: "text-base",
                    }),
                    m
                      ? (0, t.jsx)(o.Suspense, {
                          fallback: (0, t.jsx)(S, {}),
                          children: (0, t.jsx)(m, {
                            type: "bar",
                            options: _,
                            series: A,
                            height: 250,
                          }),
                        })
                      : (0, t.jsx)(n, {}),
                  ],
                }),
            " ",
          ],
        })
      : (console.log("<<<<<==== Data not Available ====>>>>>"),
        (0, t.jsx)("div", { children: "Loading Charts" }));
  },
  L = C,
  S = () =>
    (0, t.jsxs)("div", {
      className: "relative h-64 ",
      children: [
        (0, t.jsx)("div", {
          className:
            "absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2",
          children: [...Array(6)].map((a, l) =>
            (0, t.jsx)(s, { className: "w-10 h-2" }, l)
          ),
        }),
        (0, t.jsx)("div", {
          className:
            "absolute left-14  right-0 top-0 bottom-8 flex justify-between items-end",
          children: [10, 16, 60, 20, 40].map((a, l) =>
            (0, t.jsxs)(
              "div",
              {
                className: "flex flex-col items-center",
                children: [
                  (0, t.jsx)(s, { className: `w-12 mb-1 h-${a}` }),
                  (0, t.jsx)(s, { className: "w-16 h-2" }),
                ],
              },
              l
            )
          ),
        }),
      ],
    });
export { L as default };
