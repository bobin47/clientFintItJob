import { Avatar, Card, Col, Row, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => [
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
      ]),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => [
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
        { max: 10, min: 10 },
      ]),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Dashboard() {
  return (
    <div>
      <Row justify="space-between" gutter={6}>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 280, marginTop: 16 }}>
            <UserOutlined width={300} />
            <div>User</div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 280, marginTop: 16 }}>
            <UserOutlined width={300} />
            <div>User</div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 280, marginTop: 16 }}>
            <UserOutlined width={300} />
            <div>User</div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 280, marginTop: 16 }}>
            <UserOutlined width={300} />
            <div>User</div>
          </Card>
        </Col>
      </Row>
      <div>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
