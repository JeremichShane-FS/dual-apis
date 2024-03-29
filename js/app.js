import { urls } from "./api/index.js";
import { news, user } from "./components/index.js";
import { handleFetch, setCopyright } from "./utils/index.js";

(() => {
  // On initial load, fetch the data from the servers then build the news and user components
  handleFetch(urls, "arrayResponse")
    .then(() => {
      news();
      user();
    })
    .catch(error => {
      console.error("Error in handleFetch:", error);
      throw error;
    });
  setCopyright();
})();
