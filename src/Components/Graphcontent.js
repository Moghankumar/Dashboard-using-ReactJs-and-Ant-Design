import React from "react";
import { Button, Card, Col, Row } from "antd";
import { Icon } from "antd";
import {
  CalendarFilled,
  PushpinFilled,
  TagFilled,
  DownloadOutlined,
} from "@ant-design/icons";
import "./Cards.css";

import Title from "antd/lib/typography/Title";

function Graphcontent() {
  return (
    <div id="contentheader">
      <div id="dashboardtitle">
        <Row>
          <Col span={20}>
            <div>
              <Title
                style={{
                  color: "black",
                }}
                level={3}
              >
                Dashboard
              </Title>
            </div>
          </Col>
          <Col span={4}>
            <div id="generatebutton">
              <Button
                style={{
                  color: "white",
                  background: "#4e73df",
                  float: "right",
                }}
              >
                <DownloadOutlined />
                Generate Report
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <div className="graphtopcontent">
        <div className="graphcard card1">
          <Row gutter={[{ xs: 8, sm: 12, md: 18, lg: 20 }, 20]}>
            <Col>
              <Card
                id="card"
                style={{
                  borderLeftColor: "#4e73df",
                  borderWidth: "3px",
                }}
              >
                <Row className="card">
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "#4e73df", float: "left" }}>
                          Holidays(Annual)
                        </h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          72
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <TagFilled
                        style={{
                          fontSize: "35px",
                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card
                id="card"
                style={{ borderLeftColor: "#1cc88a", borderWidth: "3px" }}
              >
                <Row className="card">
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "#1cc88a", float: "left" }}>
                          Working(Annual)
                        </h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          293
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <PushpinFilled
                        style={{
                          fontSize: "35px",
                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card
                id="card"
                style={{ borderLeftColor: "#36b9cc", borderWidth: "3px" }}
              >
                <Row className="card">
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "#36b9cc", float: "left" }}>
                          Days(Year)
                        </h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          365
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <CalendarFilled
                        style={{
                          fontSize: "35px",
                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card
                id="card"
                style={{ borderLeftColor: "orange", borderWidth: "3px" }}
              >
                <Row className="card">
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "orange", float: "left" }}>Year</h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          2021
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <CalendarFilled
                        style={{
                          fontSize: "35px",

                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="card2">
          <Row gutter={[{ xs: 8, sm: 12, md: 18, lg: 20 }, 20]}>
            <Col span={6}>
              <Card
                id="card"
                style={{
                  borderLeftColor: "#4e73df",
                  borderWidth: "3px",
                }}
              >
                <Row>
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "#4e73df", float: "left" }}>
                          Holidays(Annual)
                        </h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          72
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <TagFilled
                        style={{
                          fontSize: "35px",
                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                id="card"
                style={{ borderLeftColor: "#1cc88a", borderWidth: "3px" }}
              >
                <Row>
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "#1cc88a", float: "left" }}>
                          Working(Annual)
                        </h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          293
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <PushpinFilled
                        style={{
                          fontSize: "35px",
                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                id="card"
                style={{ borderLeftColor: "#36b9cc", borderWidth: "3px" }}
              >
                <Row>
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "#36b9cc", float: "left" }}>
                          Days(Year)
                        </h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          365
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <CalendarFilled
                        style={{
                          fontSize: "35px",
                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                id="card"
                style={{ borderLeftColor: "orange", borderWidth: "3px" }}
              >
                <Row>
                  <Col span={20}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h3 style={{ color: "orange", float: "left" }}>Year</h3>
                      </div>
                      <div>
                        <h3
                          style={{
                            color: "black",
                            float: "left",
                            marginTop: "-10px",
                          }}
                        >
                          2021
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col span={4} style={{ float: "right" }}>
                    <div>
                      <CalendarFilled
                        style={{
                          fontSize: "35px",
                          float: "right",
                          marginTop: "10px",
                          color: "#d7dedb",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Graphcontent;
