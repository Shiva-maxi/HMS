import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const context = createContext({ isauthenticated: false });

const AppWrapper = () => {
  const [isauthenticated, setIsauthenticated] = useState(false);
  const [admin,setAdmin] = useState({});

  return (
    <context.Provider
      value={{ isauthenticated, setIsauthenticated, admin, setAdmin }}
    >
      <App/>
    </context.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
