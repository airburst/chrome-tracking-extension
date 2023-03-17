// TODO: Page views, Hyperlinks and elements without track attribute
const getTrackedElements = () => {
  const trackedElements = document.querySelectorAll(
    "[data-tracked-event], [data-track]"
  );
  const tracking = [];

  for (let i = 0; i < trackedElements.length; i++) {
    const item = trackedElements[i];
    const id = item.id || null;
    const eventName =
      item.getAttribute("data-track") ||
      item.getAttribute("data-tracked-event");
    const sectionName = item.getAttribute("data-section-name");

    tracking.push({ eventName, id, sectionName });
  }
  // console.table(tracking);
  return tracking;
};

const getTrackedEvents = () => {
  const eventsData = document.getElementById("parent-window-tracked").value;

  if (!eventsData) return [{ eventName: "No events" }];

  try {
    const trackedEvents = JSON.parse(eventsData);

    return Object.entries(trackedEvents).map(([key, value]) => ({
      eventName: key,
      trigger: value?.trigger,
    }));
  } catch (err) {
    return [{ eventName: "Error" }];
  }
};

const addCell = (id, text) => {
  const div = window.document.createElement("div");
  const content = document.createTextNode(text || "");
  div.appendChild(content);
  window.document.getElementById(id).appendChild(div);
};

window.onload = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let result;

  try {
    [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: getTrackedElements,
    });

    result.forEach(({ eventName, id, sectionName }) => {
      addCell("tracked", eventName);
      addCell("tracked", id);
      addCell("tracked", sectionName);
    });

    [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: getTrackedEvents,
    });

    result.forEach(({ eventName, trigger }) => {
      addCell("events", eventName);
      addCell("events", trigger);
    });

    // chrome.storage.sync.get("options", (data) => {});
  } catch (e) {
    console.error(e);
    return; // ignoring an unsupported page like chrome://extensions
  }
};
