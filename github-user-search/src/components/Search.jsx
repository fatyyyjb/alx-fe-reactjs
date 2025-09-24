import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchAdvancedUsers(username, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError("Looks like we can’t find any matching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-gray-100 p-4 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g. Morocco)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {users.length > 0 && (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center gap-4 p-4 border rounded-lg shadow"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-lg">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                  {user.location && <p>📍 {user.location}</p>}
                  {user.public_repos !== undefined && (
                    <p>📦 {user.public_repos} repos</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
