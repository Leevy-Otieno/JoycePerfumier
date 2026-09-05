import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"; // 1. ADD THIS IMPORT (Adjust the path if your Home file is elsewhere)
import Login from "../pages/Login";

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
      }
    ]
  }
]);

export default router;