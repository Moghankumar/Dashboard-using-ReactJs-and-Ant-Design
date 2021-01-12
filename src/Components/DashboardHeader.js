import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  ProfileOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
  BellFilled,
  MailOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import { Button, Dropdown, Menu, Typography, Input, Badge } from "antd";
import Avatar from "antd/lib/avatar/avatar";
const { Title } = Typography;
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/dashboard">
        <ProfileOutlined />
        Profile
      </Link>
    </Menu.Item>
    <Menu.Item>
      <SettingOutlined />
      Setting
    </Menu.Item>
    <Menu.Item>
      <UnorderedListOutlined />
      Activity Log
    </Menu.Item>
    <Menu.Item>
      <Link to="/">
        <LogoutOutlined />
        Logout
      </Link>
    </Menu.Item>
  </Menu>
);
export class DashboardHeader extends Component {
  render() {
    return (
      <div>
        {/* <Row id="fullheader">
          <Col span={12}>
            <div id="searchbar">
              <Search enterButton />
            </div>
          </Col>
          <Col span={12}>
            <div className="usericon">
              <div id="icons">
                <Badge count={3} style={{ borderRadius: "3px" }} size="small">
                  <BellFilled
                    style={{
                      color: "#808080",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
                <Badge count={7} style={{ borderRadius: "3px" }} size="small">
                  <MailOutlined
                    style={{
                      color: "#808080",
                      fontSize: "18px",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </div>

              <div id="profile">
                <div>
                  <Title id="username" style={{ color: "	#808080" }} level={5}>
                    {sessionStorage.getItem("name")}
                  </Title>
                </div>
                &nbsp;
                <div id="profilecard">
                  <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </Dropdown>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
        <Row gutter={[{ xs: 8, sm: 12, md: 18, lg: 20 }, 20]} id="fullheader">
          <Col span={14}>
            <div id="searchbar">
              <Search enterButton />
            </div>
          </Col>
          <Col span={10}>
            <div className="usericon">
              <div id="icons">
                <Badge count={3} style={{ borderRadius: "3px" }} size="small">
                  <BellFilled
                    style={{
                      color: "#d7dedb",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
                <Badge count={7} style={{ borderRadius: "3px" }} size="small">
                  <MailOutlined
                    style={{
                      color: "#d7dedb",
                      fontSize: "18px",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </div>
              <div class="verticalline" style={{ height: "40px" }}></div>
              <div id="profile">
                <div>
                  <Title id="username" style={{ color: "	#808080" }} level={5}>
                    {sessionStorage.getItem("name")}
                  </Title>
                </div>

                <div id="profilecard">
                  <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </Dropdown>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardHeader;
