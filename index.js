let componentLoaded = false;
// Default project ID

// Function to run on the main thread
function loadGanttCalendarSummary(response, projectId) {
  console.log("loadGanttCalendarSummary is running on the main thread");
  console.log("response ========>>>>>>>", response);
  console.log("lprojectId =>>>>>>>>>", projectId);
  return "Hello from the main thread!";
}

async function getSummary(proId = "147534") {
  // HTML element IDs
  const rootId = "root1";
  const compId = "829"; // Can be dynamic
  const userId = "109871"; // Can be dynamic
  const directoryId = "109903"; // Can be dynamic

  // Get the root element
  const root = document.getElementById(rootId);
  if (!root) {
    console.error("Root element not found.");
    return;
  }

  try {
    // Create a Web Worker
    const worker = new Worker("./public/project/project.worker.js", {
      type: "module",
    });

    // Set up message handler for the worker
    worker.onmessage = async (event) => {
      if (event.data.type === "RENDER_COMPLETE") {
        const html = event.data.html;
        // Insert the HTML result into the root element
        root.innerHTML = html;

        // Hydrate the component if it's not already loaded
        if (!componentLoaded) {
          const { hydrateComponent, Index } = await import(
            "./public/client/client.js"
          );
          hydrateComponent(
            Index,
            rootId,
            (projectId = proId),
            userId,
            compId,
            directoryId,
            loadGanttCalendarSummary // Pass the function reference
          );
          componentLoaded = true;
        } else if (window.updateComponent) {
          window.updateComponent(
            (projectId = proId),
            compId,
            userId,
            directoryId,
            loadGanttCalendarSummary // Pass the function reference for updates
          );
        }

        // Terminate the worker after rendering
        worker.terminate();
      } else if (event.data.type === "LOAD_GANTT_CALENDAR_SUMMARY") {
        // Execute the function and send the result back to the worker
        const result = loadGanttCalendarSummary(
          event.data.response,
          event.data.projectId
        );
        worker.postMessage({
          type: "LOAD_GANTT_CALENDAR_SUMMARY_RESULT",
          result,
        });
      }
    };

    // Send render request to the worker
    worker.postMessage({
      type: "RENDER_REQUEST",
      projectId: proId,
      compId,
      userId,
      directoryId,
    });
  } catch (error) {
    console.error(`Error loading component: ${error}`);
    root.innerHTML = "Error loading component";
  }
}

// Event listeners for buttons to change project ID
const buttons = document.querySelectorAll("#pro1, #pro2, #pro3, #pro4");

function handleButtonClick(proId) {
  getSummary(proId);
}

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.innerHTML));
});

getSummary();
