import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { JobDataContextProvider } from "./context/JobDataContext";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <JobDataContextProvider>
      <RouterProvider router={router} />
    </JobDataContextProvider>
  </AuthProvider>
);
