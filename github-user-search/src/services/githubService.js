import axios from "axios";

export async function fetchAdvancedUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&per_page=10`
  );

  const users = response.data.items;

  // Fetch more details for each user (location, repo count, etc.)
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const details = await axios.get(user.url);
      return { ...user, ...details.data };
    })
  );

  return detailedUsers;
}
