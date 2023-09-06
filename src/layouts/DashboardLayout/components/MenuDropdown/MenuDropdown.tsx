import { Avatar, Space, Dropdown, MenuProps } from "antd";
import { clearLC } from "../../../../utils/auth.utils";

export default function MenuDropdown() {
  const isAuth = JSON.parse(localStorage.getItem("user") || "{}");

  const items: MenuProps["items"] = [
    {
      label: <a>1st menu item</a>,
      key: "0",
    },
    {
      label: <a>2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
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
        <Avatar src={`http://localhost:3000/${isAuth.avatar}`} />
        <h3>{isAuth.first_name}</h3>
      </Space>
    </Dropdown>
  );
}
