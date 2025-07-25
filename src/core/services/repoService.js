import axios from 'axios';
import { environment } from '@env/env';


const API = axios.create({
  baseURL: `${environment.BASE_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTrendingRepos = async ({
  page = 1,
  per_page = 30,
  date,
  keyword = "",
}) => {
  const createdDate = date || new Date().toISOString().split("T")[0];
    console.log('keyword',keyword)
  // Format query
  const q = `created:>${createdDate}${keyword ? ` ${keyword}` : ""}`;

  try {
    const res = await API.get("/search/repositories", {
      params: {
        q,
        sort: "stars",
        order: "desc",
        page,
        per_page,
      },
    });

    return res.data;
  } catch (error) {
    console.error("GitHub API error:", error.response || error.message);
    throw error;
  }
};

export const getRepoById = async (repoId) => {
  const res = await API.get(`repositories/${repoId}`);
  return res.data;
};