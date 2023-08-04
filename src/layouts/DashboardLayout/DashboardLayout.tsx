import React from "react";
import { Layout, Menu, Breadcrumb, Space, Row, Col, Avatar } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const url =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
  return (
    <Layout>
      <Sider className="header">
        <Menu
          className="sider"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["3"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <Row>
            <Col span={8}>
              <Breadcrumb style={{ marginTop: "20px" }}>
                <Breadcrumb.Item>Pages</Breadcrumb.Item>
                <Breadcrumb.Item>home</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col span={2} offset={14}>
              <Space>
                <Avatar src={url} />
                <h3>name</h3>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}
