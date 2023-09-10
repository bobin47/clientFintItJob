import { Card, Col, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Bar } from "@ant-design/plots";
import { Pie } from "@ant-design/plots";
import { DualAxes } from "@ant-design/plots";

export default function Dashboard() {
  const data = [
    {
      year: "1951 年",
      value: 38,
    },
    {
      year: "1952 年",
      value: 52,
    },
    {
      year: "1956 年",
      value: 61,
    },
    {
      year: "1957 年",
      value: 145,
    },
    {
      year: "1958 年",
      value: 48,
    },
  ];
  const dataDualAxes = [
    {
      year: "1991",
      value: 3,
      count: 10,
    },
    {
      year: "1992",
      value: 4,
      count: 4,
    },
    {
      year: "1993",
      value: 3.5,
      count: 5,
    },
    {
      year: "1994",
      value: 5,
      count: 5,
    },
    {
      year: "1995",
      value: 4.9,
      count: 4.9,
    },
    {
      year: "1996",
      value: 6,
      count: 35,
    },
    {
      year: "1997",
      value: 7,
      count: 7,
    },
    {
      year: "1998",
      value: 9,
      count: 1,
    },
    {
      year: "1999",
      value: 13,
      count: 20,
    },
  ];
  const dataPipe = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];

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
      <div style={{ marginTop: "20px" }}>
        <Bar
          data={data}
          xField={"value"}
          yField={"year"}
          seriesField={"year"}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Row gutter={6}>
          <Col className="gutter-row" span={12}>
            <Pie
              data={dataPipe}
              angleField={"value"}
              colorField={"type"}
              appendPadding={10}
              radius={0.9}
              label={{
                type: "inner",
                offset: "-30%",
                content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                style: {
                  fontSize: 14,
                  textAlign: "center",
                },
              }}
              interactions={[
                {
                  type: "element-active",
                },
              ]}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <DualAxes
              data={[dataDualAxes, dataDualAxes]}
              xField={"year"}
              yField={["value", "count"]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
