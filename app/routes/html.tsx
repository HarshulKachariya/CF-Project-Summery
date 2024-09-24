import React from "react";

const Html = () => {
  const html = `&lt;div key={projectId}&gt;
        &lt;Suspense&gt;
          &lt;Top data={data} isLoading={isLoading} /&gt;
        &lt;/Suspense&gt;

        &lt;div className=&quot;row g-3 mt-1&quot;&gt;
          &lt;div className=&quot;col-xxl-4 col-xl-6 col-12&quot;&gt;
            &lt;div className=&quot;common_summary_block summary_details_block summary_projectsummery_block&quot;&gt;
              &lt;Suspense&gt;
                &lt;ProjectSummary data={project_summary} isLoading={isLoading} /&gt;
              &lt;/Suspense&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className=&quot;col-xxl-4 col-xl-6 col-12&quot;&gt;
            &lt;div className=&quot;common_summary_block summary_details_block summary_costs_block&quot;&gt;
              &lt;Suspense&gt;
                &lt;SummaryPercentages data={data} isLoading={isLoading} /&gt;
              &lt;/Suspense&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className=&quot;col-xxl-4 col-xl-6 col-12&quot;&gt;
            &lt;div className=&quot;common_summary_block summary_details_block summary_actionitems_block &quot;&gt;
              &lt;Suspense&gt;
                &lt;ActionItems
                  projectId={projectId}
                  userId={userId}
                  compId={compId}
                  isLoading={isLoading}
                /&gt;
              &lt;/Suspense&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className=&quot;col-xxl-4 col-xl-6 col-12&quot;&gt;
            &lt;div className=&quot;row h-100&quot;&gt;
              &lt;div className=&quot;col-12 pb-sm&quot;&gt;
                &lt;div className=&quot;common_summary_block profile_info_block d-flex project_summary_customer align-items-center&quot;&gt;
                  &lt;Suspense&gt;
                    &lt;Customer
                      data={data}
                      isLoading={isLoading}
                      projectId={projectId}
                      userId={userId}
                      compId={compId}
                      directoryId={directoryId}
                    /&gt;
                  &lt;/Suspense&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div className=&quot;col-12 summary_billingactual_height&quot;&gt;
                &lt;div className=&quot;common_summary_block summary_details_block summary_billingactual_block&quot;&gt;
                  &lt;Suspense&gt;
                    &lt;Invoiced
                      data={data}
                      customer_additional_contacts={
                        customer_additional_contacts
                      }
                      isLoading={isLoading}
                    /&gt;
                  &lt;/Suspense&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className=&quot;col-xxl-4 col-xl-6 col-12&quot;&gt;
            &lt;div className=&quot;common_summary_block summary_details_block wip_details_block&quot;&gt;
              &lt;Suspense&gt;
                &lt;WorkInprogress data={wip_widget} isLoading={isLoading} /&gt;
              &lt;/Suspense&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className=&quot;col-xxl-4 col-xl-6 col-12&quot;&gt;
            &lt;div className=&quot;common_summary_block summary_details_block summary_recentphotos_block&quot;&gt;
              &lt;Suspense&gt;
                &lt;RecentPhotos data={data} isLoading={isLoading} /&gt;
              &lt;/Suspense&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className=&quot;col-lg-12 col-md-12 col-12&quot;&gt;
            &lt;div className=&quot;common_summary_block summary_details_block summary_schedule_block&quot;&gt;
              &lt;Suspense&gt;
                &lt;Scheduler
                  projectId={projectId}
                  userId={userId}
                  compId={compId}
                  isLoading={isLoading}
                /&gt;
              &lt;/Suspense&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Html;
