// Normally I would store this key in a .env file, but since this is a private repo, I'm storing it here for simplicity, but if I were using this in a production environment, I would store it in a .env file. And I would name the key process.env.GNEWS_API_KEY. I would also add a .env.example file to the repo to show the structure of the .env file.
const GNEWS_API_KEY = `9ef0cee08f0ddcb30990ad5906f2454e`;
const gnewsURL = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&apikey=${GNEWS_API_KEY}`;

export { gnewsURL };
