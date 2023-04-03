import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  SettingOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Tabs, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "./assets";
import { ProductsTable } from "./components";

const { Header, Sider, Content } = Layout;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    token === null || token === "undefined"
      ? navigate("/login")
      : navigate("/");
  }, []);
  const items = [
    getItem("sidenav.products", "sub1", <ShoppingCartOutlined />, [
      getItem("sidenav.products_managment", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("sidenav.analitycs", "sub2", <PieChartOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
    getItem("settings", "sub2", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
    
  ];
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return ;
};
export default Home;
