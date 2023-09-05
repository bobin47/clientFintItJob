import "./App.scss";
import useRouteElement from "./hooks/useRouteElement";
// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import User from "./pages/Admin/User";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  const routeElement = useRouteElement();
  return routeElement;
  // return (
  //   <Routes>
  //     <Route path="/admin" element={<Admin />}>
  //       <Route path="/admin/user" element={<User />} />
  //       <Route path="/admin/dashboard" element={<Dashboard />} />
  //     </Route>
  //     {/* <Route path="/profile" component={Profile} />
  //     <Route path="/settings" component={Settings} />
  //     <Route path="/" component={Home} /> */}
  //   </Routes>
  // );
}

export default App;
