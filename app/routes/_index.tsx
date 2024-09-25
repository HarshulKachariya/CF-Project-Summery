import React, { lazy, Suspense, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useFetchProjectDetails } from "~/hooks/usefetchProjectDetails";
import Customer from "~/components/Customer";
import Spiner from "~/components/Skeletons/spin";
import { generateHtml } from "~/helpers";

// Lazy-loaded components
const ProjectSummary = lazy(() => import("../components/ProjectSummary"));
const Invoiced = lazy(() => import("../components/Invoiced"));
const ActionItems = lazy(() => import("../components/ActionItems"));
const SummaryPercentages = lazy(
  () => import("../components/SummaryPercentages")
);
const WorkInprogress = lazy(() => import("../components/WorkInprogress"));
const RecentPhotos = lazy(() => import("../components/RecentPhtotos"));
const Scheduler = lazy(() => import("../components/Schedular"));
const Top = lazy(() => import("../components/Top"));

export const meta: MetaFunction = () => {
  return [
    { title: "Project Dashboard" },
    { name: "description", content: "Project management dashboard" },
  ];
};

export type IndexProps = {
  projectId: string;
  userId: string;
  compId: string;
  isLoading?: boolean;
  directoryId?: string;
  currencyCode?: string;
  cf?: any;
};

// export default function Index() {
export default function Index({
  projectId,
  userId,
  compId,
  directoryId,
  currencyCode,
  cf,
}: IndexProps) {
  // const projectId = "140584";
  // // const projectId = "140583";
  // // const compId = "408"; // You might want to make this dynamic too
  // // const userId = "50304"; // You might want to make this dynamic too
  // // const directoryId = "54584"; // You might want to make this dynamic too
  // const compId = "1"; // You might want to make this dynamic too
  // const userId = "2513"; // You might want to make this dynamic too
  // const directoryId = "53740"; // You might want to make this dynamic too
  // const currencyCode = "INR";

  const { data, isLoading, error } = useFetchProjectDetails(
    projectId,
    userId,
    compId
  );

  console.log("projectID =======>>>>>>>>", projectId);
  console.log("userId =======>>>>>>>>", userId);
  console.log("COMPiD =======>>>>>>>>", compId);
  console.log("Loading =======>>>>>>>>", isLoading);
  console.log("currencyCode =======>>>>>>>>", currencyCode);
  console.log("CF =======>>>>>>>>>>>>>>>>>", cf);

  const { project_summary, wip_widget, customer_additional_contacts } =
    data || {};

  return (
    <>
      <div key={projectId}>
        <Suspense>
          <Top data={data} isLoading={isLoading} currencyCode={currencyCode} />
        </Suspense>

        <div className="row g-3 mt-1">
          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block summary_projectsummery_block">
              <Suspense>
                <ProjectSummary
                  data={project_summary}
                  isLoading={isLoading}
                  currencyCode={currencyCode}
                  cf={cf}
                />
              </Suspense>
            </div>
          </div>

          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block summary_costs_block">
              <Suspense>
                <SummaryPercentages
                  data={data}
                  isLoading={isLoading}
                  currencyCode={currencyCode}
                />
              </Suspense>
            </div>
          </div>

          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block summary_actionitems_block ">
              <Suspense>
                <ActionItems
                  projectId={projectId}
                  userId={userId}
                  compId={compId}
                  isLoading={isLoading}
                  currencyCode={currencyCode}
                />
              </Suspense>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="row h-100">
              <div className="col-12 pb-sm">
                <div className="common_summary_block profile_info_block d-flex project_summary_customer align-items-center">
                  <Suspense>
                    <Customer
                      data={data}
                      isLoading={isLoading}
                      projectId={projectId}
                      userId={userId}
                      compId={compId}
                      directoryId={directoryId}
                      currencyCode={currencyCode}
                    />
                  </Suspense>
                </div>
              </div>
              <div className="col-12 summary_billingactual_height">
                <div className="common_summary_block summary_details_block summary_billingactual_block">
                  <Suspense>
                    <Invoiced
                      data={data}
                      customer_additional_contacts={
                        customer_additional_contacts
                      }
                      isLoading={isLoading}
                      currencyCode={currencyCode}
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block wip_details_block">
              <Suspense>
                <WorkInprogress
                  data={data}
                  isLoading={isLoading}
                  currencyCode={currencyCode}
                />
              </Suspense>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block summary_recentphotos_block">
              <Suspense>
                <RecentPhotos
                  data={data}
                  isLoading={isLoading}
                  currencyCode={currencyCode}
                />
              </Suspense>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="common_summary_block summary_details_block summary_schedule_block">
              <Suspense>
                <Scheduler
                  projectId={projectId}
                  userId={userId}
                  compId={compId}
                  isLoading={isLoading}
                  currencyCode={currencyCode}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
