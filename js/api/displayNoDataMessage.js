// Reusable function to display a message when no data is available
function displayNoDataMessage(containerId, message) {
  const container = getId(containerId);
  const noDataMessage = createEl("p", "no-data-message", message);
  container.appendChild(noDataMessage);
}

export { displayNoDataMessage };
