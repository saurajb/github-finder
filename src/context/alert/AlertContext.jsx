import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialstate = null;
  const [state, dispatch] = useReducer(AlertReducer, initialstate);

  const setalert = (type, msg) => {
    dispatch({
      type: "SET_ALERT",
      payload: { type, msg },
    });
    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setalert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
