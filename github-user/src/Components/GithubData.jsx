import React, { useEffect, useState } from "react";
import axios from "axios";

function GithubUsersData() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const getUsersData = (query) => {
    return axios.get(`https://api.github.com/users/${query}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUsersData(query);
  };

  //   console.log(data);

  return (
    <div>
      <div>
        <h3>Search only by id for Details:</h3>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "30%",
            padding: "10px",
          }}
        >
          <input
            placeholder="Github Users Name..."
            value={query}
            onChange={handleChange}
          />
          <input type="submit" value="Search" />
        </form>

        <div>
          <div
            style={{
              border: "2px solid black",
              width: "50%",
              marginTop: "20px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <div>
              <img
                src={data.avatar_url}
                style={{
                  width: "50%",
                  border: "3px solid black",
                  borderRadius: "50%",
                }}
              />
            </div>
            <h3>{data.name}</h3>
            <h3>{data.location}</h3>
            <h3>
              <a
                href={data.blog}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Go to users website {"-->"}
              </a>
            </h3>
            <h5>{data.bio}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GithubUsersData };
