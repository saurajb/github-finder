import { createContext, useEffect, useState } from "react";

export const GithubContext = createContext();

// env variables
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchdata().then((result) => {
      console.log("Data fetched", result);
    });
  }, []);

  const fetchdata = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const result = await response.json();
    console.log(result);
    setusers(result);
    setloading(false);
    return result;
  };

  return (
    <GithubContext.Provider value={{ users, loading }}>
      {children}
    </GithubContext.Provider>
  );
};
