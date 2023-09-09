import {
  UserOutlined,
  BankOutlined,
  ProjectOutlined,
  FileProtectOutlined,
  IdcardOutlined,
  FundProjectionScreenOutlined,
  UsergroupAddOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";
import { path } from "../../../../constants/path";

export default function SiderCustom() {
  const location = useLocation();
  const linkString = location.pathname.split("/admin/")[1];

  const items: MenuProps["items"] = [
    {
      key: "dashboard",
      icon: (
        <Link to={path.dashboard}>
          <FundProjectionScreenOutlined />
        </Link>
      ),
      label: "Dashboard",
    },
    {
      key: "user",
      icon: (
        <NavLink to={path.user}>
          <UserOutlined />
        </NavLink>
      ),
      label: "User",
    },
    {
      key: "company",

      icon: (
        <NavLink to={path.company}>
          <BankOutlined />
        </NavLink>
      ),
      label: "Company",
    },

    {
      key: "job",
      icon: (
        <NavLink to={path.job}>
          <ProjectOutlined />
        </NavLink>
      ),
      label: "Job",
    },

    {
      key: "post",
      icon: (
        <NavLink to={path.post}>
          <IdcardOutlined />
        </NavLink>
      ),
      label: "Post",
    },
    {
      key: "category",
      icon: (
        <NavLink to={path.category}>
          <PartitionOutlined />
        </NavLink>
      ),
      label: "Category",
    },
    // {
    //   key: "permission",
    //   icon: (
    //     <NavLink to={path.permission}>
    //       <PartitionOutlined />
    //     </NavLink>
    //   ),
    //   label: "Permission",
    // },
  ];

  return (
    <Menu
      className="sider"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[linkString]}
      items={items}
    />
  );
}
