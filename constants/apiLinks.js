import { BASE_URL, API_KEY } from "./common";

/* Home - Hero */
export const TRENDING_ALL_DAY = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;

// discover movie with genres - genre query eg. &with_genres=28
export const DISCOVER_MOVIES_GENRES = `${BASE_URL}discover/`;