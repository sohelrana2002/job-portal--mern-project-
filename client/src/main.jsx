import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { JobDataContextProvider } from "./context/JobDataContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <JobDataContextProvider>
    <RouterProvider router={router} />
  </JobDataContextProvider>
);
