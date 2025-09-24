import axios from "axios";

// Simple user fetch by username (Task 1)
export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

// Advanced user search (Task 2)
export async function advancedUserSearch(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query.trim()}`
  );

  return response.data; // { total_count, items }
}
