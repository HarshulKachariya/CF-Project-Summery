import React, { lazy, Suspense } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useFetchProjectDetails } from "~/hooks/usefetchProjectDetails";
import Customer from "~/components/Customer";

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
};

// export default function Index() {
export default function Index({
  projectId,
  userId,
  compId,
  directoryId,
}: IndexProps) {
  // const projectId = "137869";
  // const compId = "408"; // You might want to make this dynamic too
  // const userId = "50304"; // You might want to make this dynamic too
  // const directoryId = "53740"; // You might want to make this dynamic too
  const { data, isLoading, error } = useFetchProjectDetails(
    projectId,
    userId,
    compId
  );

  console.log("projectID =======>>>>>>>>", projectId);
  console.log("userId =======>>>>>>>>", userId);
  console.log("COMPiD =======>>>>>>>>", compId);
  console.log("Loading =======>>>>>>>>", isLoading);

  if (!data) return;

  const { project_summary, wip_widget, customer_additional_contacts } = data;

  const commonStyle = `common-card`;

  return (
    <>
      <div key={Math.random()}>
        <Suspense>
          <Top data={data} isLoading={isLoading} />
        </Suspense>

        <div className="row g-3 mt-1">
          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block summary_projectsummery_block">
              <Suspense>
                <ProjectSummary data={project_summary} isLoading={isLoading} />
              </Suspense>
            </div>
          </div>

          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block summary_costs_block">
              <Suspense>
                <SummaryPercentages data={data} isLoading={isLoading} />
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
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block wip_details_block">
              <Suspense>
                <WorkInprogress data={wip_widget} isLoading={isLoading} />
              </Suspense>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-12">
            <div className="common_summary_block summary_details_block summary_recentphotos_block">
              <Suspense>
                <RecentPhotos data={data} isLoading={isLoading} />
              </Suspense>
            </div>
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
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
