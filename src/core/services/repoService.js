import axios from 'axios';
import { environment } from '@env/env';
import moment from "moment";


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
    const createdDate = date && moment(date, "YYYY-MM-DD", true).isValid()
    ? moment(date, "YYYY-MM-DD").format("YYYY-MM-DD")
    : moment().format("YYYY-MM-DD");

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