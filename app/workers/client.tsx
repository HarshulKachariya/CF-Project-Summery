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
  currencyCode: string
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
        currencyCode={currencyCode}
      />
    );

    (window as any).updateComponent = (
      newProId: string,
      newCompId: string,
      newUserId: string,
      directoryId: string,
      currencyCode: string
    ) => {
      root.unmount();

      root.render(
        <Component
          projectId={newProId}
          userId={newUserId}
          compId={newCompId}
          directoryId={directoryId}
          currencyCode={currencyCode}
        />
      );
    };
  }
}

// Export both the function and the component
export { hydrateComponent, Index };

// Also export hydrateComponent as default for compatibility
export default hydrateComponent;
