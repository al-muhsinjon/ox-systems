import {
  AppstoreOutlined,
  BarChartOutlined,
  MenuFoldOutlined,
  ShopOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  
  MailOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets";
import ProductsTable from "./ProductsTable";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("sidenav.products 3", "3", <SettingOutlined />, [
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("idenav.analitycs", "sub1", <ShoppingCartOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("sidenav.analitycs", "sub2", <PieChartOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", <PieChartOutlined />, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const Home2 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    token === null || token === "undefined"
      ? navigate("/login")
      : navigate("/");
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout hasSider>
      <Sider
       collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100%",
          position: "fixed",

          width: 5000,
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{display:"flex"}}>

        <div
          style={{
            height: 32,
            padding: 16,
            marginBottom:20,
            display:"flex"
            
          }}
        >
        <Button onClick={toggleCollapsed} >{collapsed? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} </Button>

        </div>
          <img src={logo} style={{width:70}}   alt="" />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            {<ProductsTable />}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home2;
