import axios from "axios";

const BASE_URL = "https://openlibrary.org";

export const fetchBooks = (query, page = 1) => {
  return axios.get(`${BASE_URL}/search.json`, {
    params: { q: query, page },
  });
};

export const fetchBookDetails = (id) => {
  return axios.get(`${BASE_URL}${id}.json`);
};
