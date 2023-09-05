import React from "react";
import { Breadcrumb, Col, Row } from "antd";
import MenuDropdown from "../MenuDropdown";
import { useLocation } from "react-router-dom";

export default function HeaderCustom() {
  const location = useLocation();
  const linkString = location.pathname.split("/admin/")[1];
  return (
    <Row>
      <Col span={8}>
        <Breadcrumb style={{ marginTop: "20px" }}>
          <Breadcrumb.Item>admin</Breadcrumb.Item>
          <Breadcrumb.Item>{linkString}</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col span={2} offset={14}>
        <div style={{ cursor: "pointer" }}>
          <MenuDropdown />
        </div>
      </Col>
    </Row>
  );
}
