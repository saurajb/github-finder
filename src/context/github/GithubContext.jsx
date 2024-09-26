import { createContext, useReducer, useState } from "react";
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

  // fetching initial users for testing purposes only
  const fetchdata = async () => {
    setloading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const result = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: result,
    });
  };

  const setloading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchdata }}>
      {children}
    </GithubContext.Provider>
  );
};
