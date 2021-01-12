import React, { Component } from "react";
import "./Dashboard.css";
import Datatable from "./Datatable";
import Graph from "./Graph";
import DashboardHeader from "./DashboardHeader";

import "antd/dist/antd.css";
import { Button, Col, Row, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";

import { SmileFilled } from "@ant-design/icons";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Card } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

//c642882050764db8a356b0169c75b2fc--Newsapi
//f5625f243362a4777674ef0edbc10d8841fffb7c--Calendarificapi
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <div className="App">
        <Layout>
          <Layout>
            <Sider
              // collapsible
              // collapsed={collapsed}
              // onCollapse={this.onCollapse}
              style={{ backgroundColor: "#4e73df" }}
              width="225"
              breakpoint="lg"
              collapsedWidth="0"
              marginTop="10px"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div className="logo" style={{ background: "#4e73df" }}>
                <Avatar
                  size="large"
                  style={{
                    float: "left",
                    marginLeft: "10px",
                    marginTop: "12px",
                    marginBottom: "10px",
                    background: "none",
                    fontSize: "30px",
                  }}
                  icon={<SmileFilled rotate={-30} />}
                />

                <Title
                  style={{
                    color: "white",
                    float: "left",
                    marginTop: "15px",
                    marginLeft: "10px",
                  }}
                  level={4}
                >
                  ADMIN
                </Title>
              </div>
              <Menu
                // theme="dark"
                // defaultSelectedKeys={["dashboard"]}
                mode="inline"
                inlineCollapsed={this.state.collapsed}
                style={{ backgroundColor: "#4e73df", color: "white" }}
              >
                <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
                  Dashboard
                </Menu.Item>
                <hr />
                <SubMenu
                  key="sub1"
                  icon={<SettingOutlined />}
                  title="Components"
                  style={{ backgroundColor: "#4e73df", color: "white" }}
                >
                  <Menu.Item key="key1">
                    <a href="https://startbootstrap.com/previews/sb-admin-2">
                      Buttons
                    </a>
                  </Menu.Item>
                  <Menu.Item key="key2">
                    <a href="https://startbootstrap.com/previews/sb-admin-2">
                      Cards
                    </a>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<AppstoreOutlined />}
                  title="Utilities"
                >
                  <Menu.Item key="key3">
                    <a href="https://startbootstrap.com/previews/sb-admin-2">
                      Colors
                    </a>
                  </Menu.Item>
                  <Menu.Item key="key4">
                    <a href="https://startbootstrap.com/previews/sb-admin-2">
                      Borders
                    </a>
                  </Menu.Item>
                  <Menu.Item key="key5">
                    <a href="https://startbootstrap.com/previews/sb-admin-2">
                      Animations
                    </a>
                  </Menu.Item>
                  <Menu.Item key="key6">
                    <a href="https://startbootstrap.com/previews/sb-admin-2">
                      Others
                    </a>
                  </Menu.Item>
                </SubMenu>
                <hr />
                <SubMenu key="sub3" icon={<MailOutlined />} title="Pages">
                  <Menu.Item key="key7">
                    <Link to="/">Login</Link>
                  </Menu.Item>
                  <Menu.Item key="key8">
                    <Link to="/register">Register</Link>
                  </Menu.Item>
                  <Menu.Item key="key9">Forgot Password</Menu.Item>
                  <hr />
                  <Menu.Item key="key10">404 Page</Menu.Item>
                  <Menu.Item key="key11">Blank Page</Menu.Item>
                </SubMenu>
                <Menu.Item
                  key="charts"
                  icon={<PieChartOutlined />}
                  onClick={() => {
                    this.setState({
                      charts: true,
                    });
                  }}
                >
                  <Link to="/dashboard/charts" style={{ color: "white" }}>
                    Charts
                  </Link>
                </Menu.Item>
                <Menu.Item key="tables" icon={<AppstoreOutlined />}>
                  <Link to="/dashboard/tables" style={{ color: "white" }}>
                    Tables
                  </Link>
                </Menu.Item>
              </Menu>
              <div style={{ margin: "15px" }}>
                <Card
                  style={{
                    backgroundColor: "#4261bd",
                    color: "white",
                    border: "none",
                  }}
                >
                  <p style={{ fontSize: "12px", color: "#83b2fc" }}>
                    Admin Pro is packed with premium features, components, and
                    more!
                  </p>
                  <Button
                    href="https://startbootstrap.com/previews/sb-admin-2"
                    style={{ background: "#1cc88a", color: "white" }}
                  >
                    Upgrade to Pro!
                  </Button>
                </Card>
              </div>
            </Sider>

            <Layout>
              <Header style={{ paddingBottom: 20, background: "white" }}>
                <DashboardHeader />
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Graph />
              </Content>

              <Footer className="tablecontent">
                <Row>
                  <Col span={24}>
                    <Datatable />
                  </Col>
                </Row>
              </Footer>
              <Footer style={{ textAlign: "center" }}>
                Copyright © Dashboard 2020
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
