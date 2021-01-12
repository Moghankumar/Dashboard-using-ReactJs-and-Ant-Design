import React from "react";
// import Doughnutchart from "./Doughnut";
import Linechart from "./Linechart";
import "./Graph.css";
import Graphcontent from "./Graphcontent";
import { Card, Col, Row } from "antd";
import Piechart from "./Pie";
import { MoreOutlined } from "@ant-design/icons";
function Graph() {
  return (
    <div id="maingraph">
      <div>
        <Graphcontent />
      </div>

      <div id="graph">
        <div id="graphrow">
          <Row gutter={[{ xs: 8, sm: 12, md: 18, lg: 20 }, 20]}>
            <Col>
              <Card
                className="chart"
                type="inner"
                title="No of Holidays per year"
                extra={
                  <MoreOutlined
                    style={{
                      cursor: "pointer",
                    }}
                  />
                }
                headStyle={{
                  color: "#4e73df",
                  backgroundColor: "#f8f9fc",
                }}
              >
                <Linechart />
              </Card>
            </Col>
            <Col>
              <Card
                className="chart"
                type="inner"
                title="No of Holidays in 2020"
                extra={
                  <MoreOutlined
                    style={{
                      cursor: "pointer",
                    }}
                  />
                }
                headStyle={{
                  color: "#4e73df",
                  backgroundColor: "#f8f9fc",
                }}
              >
                <Piechart />
                {/* <Doughnutchart /> */}
              </Card>
            </Col>
          </Row>
        </div>
        <div className="secondchart">
          <Row gutter={[{ xs: 8, sm: 12, md: 18, lg: 20 }, 20]}>
            <Col span={15}>
              <Card
                className="chart"
                type="inner"
                title="No of Holidays per year"
                extra={<MoreOutlined />}
                headStyle={{
                  color: "#4e73df",
                  backgroundColor: "#f8f9fc",
                }}
              >
                <Linechart />
              </Card>
            </Col>
            <Col span={9}>
              <Card
                className="chart"
                type="inner"
                title="No of Holidays in 2020"
                extra={<MoreOutlined />}
                headStyle={{
                  color: "#4e73df",
                  backgroundColor: "#f8f9fc",
                }}
              >
                <Piechart />
                {/* <Doughnutchart /> */}
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Graph;
