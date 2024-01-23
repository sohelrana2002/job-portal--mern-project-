import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../pages/Home/Home'
import MyJobs from '../pages/MyJobs/MyJobs'
import SalaryEstimate from '../pages/SalaryEstimate/SalaryEstimate'
import PostJobs from "../pages/PostJobs/PostJobs";
import LogIn from '../helper/LogIn/LogIn'

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
        }
    ]
  },
]);

export default router;
