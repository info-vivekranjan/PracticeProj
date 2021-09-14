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
      <div
        style={{
          position: "fixed",
          width: "100%",
          fontSize: "40px",
          fontWeight: "600",
          backgroundColor: "#161B22",
          color: "white",
          height: "60px",
          zIndex: "1",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Github Users
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          paddingTop: "60px",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "grid",
            justifyContent: "center",
            borderRight: "2px solid #161B22",
            marginLeft: "10%",
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
          <h5
            style={{
              border: "2px solid black",
              width: "50%",
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "tomato",
              color: "white",
            }}
          >
            Note: After searching a github user you can get all the details of
            that user on the right side by copying id from left side
          </h5>
          <div>
            {data.map((item) => {
              return (
                <div>
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "5px",
                      width: "50%",
                      marginTop: "20px",
                      padding: "10px",
                      textAlign: "center",
                      backgroundColor: "#161B22",
                      color: "white",
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

        <div style={{ width: "50%", marginLeft: "7%" }}>
          <GithubUsersData />
        </div>
      </div>
    </div>
  );
}

export { GithubUsers };
