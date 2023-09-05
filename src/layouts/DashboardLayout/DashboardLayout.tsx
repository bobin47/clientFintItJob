import React from "react";
import { Layout } from "antd";
import "./index.scss";
import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";

const { Header, Sider, Content } = Layout;

interface Props {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <Layout style={{ minHeight: "150vh" }}>
      <Sider className="header">
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
