import React, { useEffect, useState } from "react";
import axios from "axios";
import { GithubUsersData } from "./GithubData";

function GithubUsers() {
  const [query, setQuery] = useState("vivek ranjan");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const getUsers = (query) => {
    return axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then((res) => {
        setData(res.data.items);
        console.log(res.data.items);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUsers(query);
  };

  //   console.log(data);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Github Users</h1>

      <hr />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "50%",
            display: "grid",
            justifyContent: "center",
            borderRight: "2px solid gray",
          }}
        >
          <h3>Search by name or id:</h3>

          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              padding: "10px",
            }}
          >
            <input
              placeholder="Github Users Name..."
              value={query}
              onChange={handleChange}
              style={{
                padding: "7px 10px",
                fontSize: "18px",
                border: "2px solid black",
                borderRadius: "4px",
              }}
            />
            <input
              type="submit"
              value="Search"
              style={{
                padding: "7px 10px",
                fontSize: "18px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "black",
                color: "white",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </form>
          <h6
            style={{
              border: "2px solid black",
              width: "30%",
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "tomato",
              color: "white",
            }}
          >
            Note: After searching a github user you can get all the details of
            that user on the right side
          </h6>
          <div>
            {data.map((item) => {
              return (
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
                        src={item.avatar_url}
                        style={{
                          width: "50%",
                          border: "3px solid black",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <h3>{item.login}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ width: "50%", marginLeft: "20px" }}>
          <GithubUsersData />
        </div>
      </div>
    </div>
  );
}

export { GithubUsers };
