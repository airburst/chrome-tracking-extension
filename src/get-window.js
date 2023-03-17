(() => {
  const trackedEvents = window.EventTracker?.trackedEvents;

  if (trackedEvents) {
    // Create a hidden input and set value
    const i = document.createElement("input");
    i.setAttribute("id", "parent-window-tracked");
    i.setAttribute("type", "hidden");
    i.value = JSON.stringify(trackedEvents);
    // Attach to DOM
    document.body.appendChild(i);
  }
})();
