import "./styles.css";
import { useState } from "react";

let API = "https://api.github.com";

async function fetchResult(query) {
  try {
    const response = await fetch(`${API}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function changevalue(event) {
    var value1 = event.target.value;
    setQuery(value1);
  }

  async function search(event) {
    event.preventDefault();
    const results = await fetchResult(query);
    setResults(results);
  }

  return (
    <div>
      <div className="App">
        <h1>Project 5 : github user</h1>
        <form className="search-form" onSubmit={search}>
          <input
            type="text"
            id="search"
            onChange={changevalue}
            placeholder="enter user name"
          />
          <button type="submit">search</button>
        </form>
        <h3>Result</h3>
        <div className="item">
          {results.map((item) => (
            <div className="user">
              <img src={item.avatar_url} alt="Profile" width="50" height="50" />
              <br />
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                {item.login}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
