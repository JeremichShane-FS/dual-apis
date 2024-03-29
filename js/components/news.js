import { displayNoDataMessage, getStoredData } from "../api/index.js";
import { createEl, getId } from "../utils/index.js";

// Purpose: To format the date
const formatDate = date => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

// Function to build the news page
const buildNewsPage = () => {
  const storedData = getStoredData();

  // If there is stored data, build the news page
  if (storedData) {
    // Remove the Loading News li element
    const toggle = getId("toggle");
    if (toggle) {
      toggle.remove();
    }
    // Get the articles from the news data from the stored data
    const news = storedData[0].articles;
    const newsContainer = getId("news");
    news.forEach(article => {
      const { image, title, url, publishedAt, content } = article;
      const newsLi = createEl("li", "news__item scroll-cards__item");
      const articleContainer = createEl("article", "article");
      const h2 = createEl("h2", "article__title", title);
      const figureImg = createEl("figure", "article__img");
      const figDate = createEl(
        "figcaption",
        "article__date",
        `Published on: ${formatDate(publishedAt)}`
      );
      const img = createEl("img", "article__img");
      img.src = image;
      img.alt = title;
      const contentP = createEl("p", "article__content", content);
      const a = createEl("a", "article__link", "Read more");
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      articleContainer.appendChild(h2);
      articleContainer.appendChild(figureImg);
      figureImg.appendChild(img);
      figureImg.appendChild(figDate);
      articleContainer.appendChild(contentP);
      articleContainer.appendChild(a);
      newsLi.appendChild(articleContainer);
      newsContainer.appendChild(newsLi);
    });
  } else {
    displayNoDataMessage("news", "Currently, there is no news data available.");
  }
};

// This function is called when the news page is loaded
const news = () => {
  const storedData = getStoredData();

  // If there is stored data, build the news page
  if (storedData) {
    buildNewsPage();
  } else {
    displayNoDataMessage("news", "Currently, there is no news data available.");
  }
};

export { news };
