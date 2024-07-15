import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { JobDataContextProvider } from "./context/JobDataContext";
import { AuthProvider } from "./context/AuthContext";
import { MyJobContextProvider } from "./context/MyJobContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <JobDataContextProvider>
      <MyJobContextProvider>
        <RouterProvider router={router} />
      </MyJobContextProvider>
    </JobDataContextProvider>
  </AuthProvider>
);
