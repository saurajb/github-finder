import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialstate = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialstate);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  );
};
