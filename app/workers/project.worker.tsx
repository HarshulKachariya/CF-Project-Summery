import React from "react";
import ReactDOMServer from "react-dom/server";
import Index from "../routes/_index";

let loadGanttCalendarSummaryResult: string | null = null;

const renderComponent = ({
  projectId,
  userId,
  compId,
  directoryId,
}: {
  projectId: string;
  userId: string;
  compId: string;
  directoryId: string;
}) => {
  const loadGanttCalendarSummary = (response: any, projectId: any) => {
    // Post a message to the main thread to execute the function
    self.postMessage({
      type: "LOAD_GANTT_CALENDAR_SUMMARY",
      response,
      projectId,
    });
    // Return a placeholder value
    return "Loading...";
  };

  const html = ReactDOMServer.renderToString(
    <Index
      projectId={projectId}
      userId={userId}
      compId={compId}
      directoryId={directoryId}
      loadGanttCalendarSummary={loadGanttCalendarSummary}
    />
  );
  return html;
};

self.onmessage = async (event) => {
  if (event.data.type === "RENDER_REQUEST") {
    const { projectId, userId, compId, directoryId } = event.data;
    const html = renderComponent({ projectId, userId, compId, directoryId });
    self.postMessage({ type: "RENDER_COMPLETE", html });
  } else if (event.data.type === "LOAD_GANTT_CALENDAR_SUMMARY_RESULT") {
    loadGanttCalendarSummaryResult = event.data.result;
  }
};
