import { Avatar, Space, Dropdown, MenuProps } from "antd";
import { clearLC } from "../../../../utils/auth.utils";
import { UserOutlined } from "@ant-design/icons";
export default function MenuDropdown() {
  const isAuth = JSON.parse(localStorage.getItem("user") || "{}");

  const items: MenuProps["items"] = [
    {
      label: "Logout",
      key: "3",
      onClick: () => {
        clearLC();
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Space>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <h3 className="">{isAuth.userName}</h3>
      </Space>
    </Dropdown>
  );
}
