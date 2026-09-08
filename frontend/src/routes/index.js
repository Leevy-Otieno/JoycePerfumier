import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"; // 1. ADD THIS IMPORT (Adjust the path if your Home file is elsewhere)
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword"; // 2. ADD THIS IMPORT (Adjust the path if your ForgotPassword file is elsewhere)
import SignUp from "../pages/SignUp"; // 3. ADD THIS IMPORT (Adjust the path if your SignUp file is elsewhere)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {   
        path: "",  
        element: <Home />
      },
      {   
        path: "login",  
        element: <Login />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "sign-up",
        element: <SignUp />
      }
    ]
  }
]);

export default router;