import React, { lazy, Suspense } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useFetchProjectDetails } from "~/hooks/usefetchProjectDetails";
import Customer from "~/components/Customer";
import Spiner from "~/components/Skeletons/spin";

// Lazy-loaded components
const ProjectSummary = lazy(() => import("../components/ProjectSummary"));
const Invoiced = lazy(() => import("../components/Invoiced"));
const ActionItems = lazy(() => import("../components/ActionItems"));
const SummaryPercentages = lazy(
  () => import("../components/SummaryPercentages")
);
const WorkInprogress = lazy(() => import("../components/WorkInprogress"));
const RecentPhotos = lazy(() => import("../components/RecentPhtotos"));
const SummaryScheduler = lazy(() => import("../components/SummaryScheduler"));
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
  loadGanttCalendarSummary?: (response: any, projectId: any) => string;
};

export default function Index() {
  // export default function Index({
  //   projectId,
  //   userId,
  //   compId,
  //   directoryId,
  //   loadGanttCalendarSummary,
  // }: IndexProps) {

  const projectId = "146869";
  const compId = "422"; // You might want to make this dynamic too
  const userId = "51602"; // You might want to make this dynamic too
  const directoryId = "53740"; // You might want to make this dynamic too

  function loadGanttCalendarSummary(response: any, projectId: any) {
    // fetch data from API
    return "hello";
  }

  const { data, isLoading, error } = useFetchProjectDetails(
    projectId,
    userId,
    compId
  );

  console.log("projectID =======>>>>>>>>", projectId);
  console.log("userId =======>>>>>>>>", userId);
  console.log("COMPiD =======>>>>>>>>", compId);
  console.log("Loading =======>>>>>>>>", isLoading);

  if (!data && !isLoading) return;

  const { project_summary, wip_widget, customer_additional_contacts } =
    data || {};

  const commonStyle = `common-card`;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <Spiner />
        </div>
      ) : (
        <div
          className="space-y-4 w-full p-4 overflow-y-auto sidebar"
          key={Math.random()}
        >
          <div className="w-full">
            <Suspense>
              <Top data={data} isLoading={isLoading} />
            </Suspense>
          </div>
          <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2.5 mt-2.5">
            <div className={`${commonStyle} py-3 px-[15px] min-h-[300px]`}>
              <Suspense>
                <ProjectSummary data={project_summary} isLoading={isLoading} />
              </Suspense>
            </div>

            <div className={`${commonStyle} py-3 px-[15px] min-h-[300px]`}>
              <Suspense>
                <SummaryPercentages data={data} isLoading={isLoading} />
              </Suspense>
            </div>

            <div className={`${commonStyle} py-3 px-[15px] min-h-[300px]`}>
              <Suspense>
                <ActionItems
                  projectId={projectId}
                  userId={userId}
                  compId={compId}
                  isLoading={isLoading}
                />
              </Suspense>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="common-card py-3 px-[15px] h-fit min-h-[85px] 2xl:min-h-[65px] flex items-center">
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
              <div className="common-card py-3 px-[15px] h-full min-h-[177px]">
                <Suspense>
                  <Invoiced
                    data={data}
                    customer_additional_contacts={customer_additional_contacts}
                    isLoading={isLoading}
                  />
                </Suspense>
              </div>
            </div>

            <div className={`${commonStyle}  py-3 px-[15px] min-h-[260px]`}>
              <Suspense>
                <WorkInprogress data={wip_widget} isLoading={isLoading} />
              </Suspense>
            </div>
            <div className={`${commonStyle}  py-3 px-[15px] min-h-[260px]`}>
              <Suspense>
                <RecentPhotos data={data} isLoading={isLoading} />
              </Suspense>
            </div>
          </div>

          <div className={`${commonStyle}  py-3 px-[15px] min-h-[268px]`}>
            <Suspense>
              <SummaryScheduler
                projectId={projectId}
                userId={userId}
                compId={compId}
                isLoading={isLoading}
                loadGanttCalendarSummary={loadGanttCalendarSummary}
              />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}
