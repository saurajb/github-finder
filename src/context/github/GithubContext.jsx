import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

export const GithubContext = createContext();

// env variables
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialstate = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialstate);

  // search users from github
  const searchusers = async (text) => {
    setloading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const setloading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, searchusers }}>
      {children}
    </GithubContext.Provider>
  );
};
