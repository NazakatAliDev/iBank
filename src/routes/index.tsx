import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "../Pages/Admin_Manage_User/index.js";
import Login from "../Pages/auth/login/index.tsx";
import Form_2 from "../Pages/auth/registeer/index.tsx";
import Forget_Password from "../Pages/auth/Forget_Password/index.tsx";
import Transfer from "../Pages/Transfer/index.js";
import History from "../Pages/History/index.js";
import Aside from "../Pages/Transfer/Components/aside.js";
import PrivateRoute from "./privateRoutes.tsx";
import Index from "../Pages/home/index.tsx";

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: (
        <PrivateRoute>
          <Form_2 />
        </PrivateRoute>
      ),
    },
    {
      path: "/forget",
      element: (
        <PrivateRoute>
          <Forget_Password />
        </PrivateRoute>
      ),
    },
    {
      path: "/manage_user",
      element: (
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
      ),
    },
    {
      path: "/Transfer_to_Users",
      element: (
        <PrivateRoute>
          <Transfer />
        </PrivateRoute>
      ),
    },
    {
      path: "/History",
      element: (
        <PrivateRoute>
          <History />
        </PrivateRoute>
      ),
    },
    {
      path: "/aside",
      element: (
        <PrivateRoute>
          <Aside />
        </PrivateRoute>
      ),
    },
    {
      path: "home",
      element: <Index />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
