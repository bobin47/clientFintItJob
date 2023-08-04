import { useRoutes } from "react-router-dom";
import { path } from "../constants/path";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";

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
      path: path.dashboard,
      element: <DashboardLayout>hihi</DashboardLayout>,
    },
  ]);
  return routeElement;
}
