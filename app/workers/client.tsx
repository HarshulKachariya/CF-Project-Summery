import React from "react";
import { hydrateRoot } from "react-dom/client";
import Index from "../routes/_index";

function hydrateComponent(
  Component: React.ComponentType<any>,
  containerId: string,
  projectId: string,
  userId: string,
  compId: string,
  directoryId: string
) {
  const container = document.getElementById(containerId);
  const currencyCode = (window as any).currencyCode;

  // window.inv_module_name = CF.modules.invoice_merge.plural_name;
  // window.wo_module_name = CF.modules.work_orders.plural_name;

  const moduleName: any = (window as any).inv_module_name;
  const woName: any = (window as any).wo_module_name;
  if (container) {
    const root = hydrateRoot(
      container,
      <Component
        projectId={projectId}
        userId={userId}
        compId={compId}
        directoryId={directoryId}
        currencyCode={currencyCode}
        moduleName={moduleName}
        woName={woName}
      />
    );

    (window as any).updateComponent = (
      newProId: string,
      newCompId: string,
      newUserId: string,
      directoryId: string,
      currencyCode: string,
      moduleName: any,
      woName: any
    ) => {
      root.unmount();

      root.render(
        <Component
          projectId={newProId}
          userId={newUserId}
          compId={newCompId}
          directoryId={directoryId}
          currencyCode={currencyCode}
          moduleName={moduleName}
          woName={woName}
        />
      );
    };
  }
}

// Export both the function and the component
export { hydrateComponent, Index };

// Also export hydrateComponent as default for compatibility
export default hydrateComponent;
