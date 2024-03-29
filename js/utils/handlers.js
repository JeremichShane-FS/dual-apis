const handleFetch = (urls, responseKey) => {
  // Check if the response is already in the local storage
  if (localStorage.getItem(responseKey)) {
    return Promise.resolve(JSON.parse(localStorage.getItem(responseKey)));
  }

  // Fetch the data from the servers using the array of URLs with Promise.all and store the response in the local storage
  return Promise.all(
    urls.map(url =>
      fetch(url).then(res => {
        if (res.ok) {
          const contentType = res.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return res.json();
          } else {
            throw new Error("Response is not JSON.");
          }
        } else {
          throw new Error("Network response was not ok.");
        }
      })
    )
  )
    .then(dataArray => {
      try {
        localStorage.setItem(responseKey, JSON.stringify(dataArray));
      } catch (error) {
        // if the local storage is full, handle the error
        if (error instanceof DOMException && error.code === 22) {
          console.error("Quota exceeded error: ", error);
        } else {
          throw error;
        }
      }
    })
    .catch(error => {
      throw error;
    });
};

export { handleFetch };
