import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Admin() {
  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
}
