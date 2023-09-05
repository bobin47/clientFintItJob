import React from "react";
import { Avatar, Space, Dropdown, MenuProps } from "antd";

export default function MenuDropdown() {
  const url =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

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
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Space>
        <Avatar src={url} />
        <h3>name</h3>
      </Space>
    </Dropdown>
  );
}
