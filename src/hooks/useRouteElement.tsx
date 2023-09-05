import { useRoutes } from "react-router-dom";
import { path } from "../constants/path";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/Admin/User";
import Admin from "../pages/Admin/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import Company from "../pages/Admin/Company";
import Job from "../pages/Admin/Job";
import Resume from "../pages/Admin/Resume";
import Role from "../pages/Admin/Role";
import Permission from "../pages/Admin/Permission";
import Post from "../pages/Admin/Post";
import Category from "../pages/Admin/Category";

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: path.login,
      element: <Login />,
    },
    {
      path: path.register,
      element: <Register />,
    },

    {
      path: path.admin,
      element: <Admin />,
      children: [
        {
          path: path.dashboard,
          element: <Dashboard />,
        },
        {
          path: path.user,
          element: <User />,
        },
        {
          path: path.company,
          element: <Company />,
        },
        {
          path: path.post,
          element: <Post />,
        },
        {
          path: path.job,
          element: <Job />,
        },
        {
          path: path.cv,
          element: <Resume />,
        },
        {
          path: path.category,
          element: <Category />,
        },
        // {
        //   path: path.role,
        //   element: <Role />,
        // },
        // {
        //   path: path.permission,
        //   element: <Permission />,
        // },
      ],
    },
  ]);
  return routeElement;
}
