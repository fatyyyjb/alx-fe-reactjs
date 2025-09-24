import axios from "axios";

const BASE_URL = "https://api.github.com";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN ? `token ${TOKEN}` : undefined,
  },
});
