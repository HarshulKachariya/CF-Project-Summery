import React from "react";
import { hydrateRoot } from "react-dom/client";
import Index from "../routes/_index";

function hydrateComponent(
  Component: React.ComponentType<any>,
  containerId: string,
  projectId: string,
  userId: string,
  compId: string,
  directoryId: string,
  loadGanttCalendarSummary: () => string
) {
  const container = document.getElementById(containerId);
  if (container) {
    const root = hydrateRoot(
      container,
      <Component
        projectId={projectId}
        userId={userId}
        compId={compId}
        directoryId={directoryId}
        loadGanttCalendarSummary={loadGanttCalendarSummary}
      />
    );
    console.log("from client", loadGanttCalendarSummary());
    (window as any).updateComponent = (
      newProId: string,
      newCompId: string,
      newUserId: string,
      directoryId: string,
      loadGanttCalendarSummary: () => string
    ) => {
      root.render(
        <Component
          projectId={newProId}
          userId={newUserId}
          compId={newCompId}
          directoryId={directoryId}
          loadGanttCalendarSummary={loadGanttCalendarSummary}
        />
      );
    };
  }
}

// Export both the function and the component
export { hydrateComponent, Index };
// Also export hydrateComponent as default for compatibility
export default hydrateComponent;
