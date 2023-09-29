import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { path } from "../constants/path";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/Admin/User";
import Admin from "../pages/Admin/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import Company from "../pages/Admin/Company";
import Job from "../pages/Admin/Job";
import Resume from "../pages/Admin/Resume";
import Post from "../pages/Admin/Post";
import Category from "../pages/Admin/Category";
import Home from "../pages/Client/Home/Home";
import Tour from "../pages/Admin/Tour";


function ProtectedRoute() {
  const isAuthenticated = window.localStorage.getItem("user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectRoute() {
  const isAuthenticated = window.localStorage.getItem("user");
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
}

function IsAdmin() {
  const data = JSON.parse(localStorage.getItem("user") || "{}");
  return data ? <Outlet /> : <Navigate to="/" />;
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <RejectRoute />,
      children: [
        {
          path: path.login,
          element: <Login />,
        },
        {
          path: path.register,
          element: <Register />,
        },
      ],
    },
    {
      path: path.home,
      element: <Home />,
    },

    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <IsAdmin />,
          children: [
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
                  path: path.tour,
                  element: <Tour />,
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
          ],
        },
      ],
    },
  ]);
  return routeElement;
}
