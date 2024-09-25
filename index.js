let componentLoaded = false;

async function getSummary(proId = 140769) {
  const rootId = "root1";
  const compId = "1"; // You might want to make this dynamic too
  const userId = "2513"; // You might want to make this dynamic too
  const directoryId = "53740"; // You might want to make this dynamic too
  const currencyCode = "USD"; // You might want to make this dynamic too
  // const compId = "408"; // You might want to make this dynamic too
  // const userId = "50304"; // You might want to make this dynamic too
  // const directoryId = "54584"; // You might want to make this dynamic too

  const root = document.getElementById(rootId);
  if (!root) {
    console.error("Root element not found.");
    return;
  }

  try {
    const worker = new Worker("./public/project/project.worker.js", {
      type: "module",
    });
    const { renderComponent } = Comlink.wrap(worker);
    const html = await renderComponent({
      projectId: proId,
      compId,
      userId,
      directoryId,
      currencyCode,
    });
    root.innerHTML = html;

    worker.terminate();

    window.projectId = proId;
    window.userId = userId;
    window.compId = compId;
    window.directoryId = directoryId;
    window.currencyCode = currencyCode;

    if (!componentLoaded) {
      const { hydrateComponent, Index } = await import(
        "./public/client/client.js"
      );
      hydrateComponent(
        Index,
        rootId,
        proId,
        userId,
        compId,
        directoryId,
        currencyCode
      );
      componentLoaded = true;
    } else if (window.updateComponent) {
      window.updateComponent(proId, compId, userId, directoryId, currencyCode);
    }
  } catch (error) {
    console.error(`Error loading component: ${error}`);
    root.innerHTML = "Error loading component";
  }
}

// Initial load

let refreshTimeout;
const buttons = document.querySelectorAll("#pro1, #pro2, #pro3, #pro4");

function handleButtonClick(proId) {
  getSummary(proId);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.innerHTML));
});

getSummary();
