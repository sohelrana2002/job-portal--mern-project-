import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../pages/Home/Home'
import MyJobs from '../pages/MyJobs/MyJobs'
import SalaryEstimate from '../pages/SalaryEstimate/SalaryEstimate'
import PostJobs from "../pages/PostJobs/PostJobs";
import LogIn from "../auth/LogIn/LogIn";
import SignUp from "../auth/SignUp/SignUp";
import Logout from "../auth/Logout/Logout";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/log-in",
          element: <LogIn />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        },
        {
          path: "/my-job",
          element: <MyJobs />
        },
        {
          path: "/salary",
          element: <SalaryEstimate />
        },
        {
          path: "/post-job",
          element: <PostJobs />
        },
        {
          path: "/logout",
          element: <Logout />
        },
        {
          path: "/job-details/:id",
          element: <JobDetails />
        },
    ]
  },
]);

export default router;
