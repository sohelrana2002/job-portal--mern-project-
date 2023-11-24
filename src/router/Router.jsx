import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../pages/Home/Home'
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
        }
    ]
  },
]);

export default router;
