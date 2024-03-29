// Purpose: To get the stored data from local storage
const getStoredData = () => JSON.parse(localStorage.getItem("arrayResponse"));

export { getStoredData };
