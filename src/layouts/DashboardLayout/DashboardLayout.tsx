import React, { useState } from "react";
import { Layout } from "antd";
import "./index.scss";
import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";

const { Header, Sider, Content } = Layout;

interface Props {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="header"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <SiderCustom />
      </Sider>
      <Layout>
        <Header className="header">
          <HeaderCustom />
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}
