import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const outlet = useOutlet();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />

        {/* header navbar */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={location.pathname}
          onClick={handleMenuClick}
          items={[
            {
              key: "/",
              label: "Products",
            },
            {
              key: "/ViewOrderPage",
              label: "View Order",
            },
            {
              key: "/AddOrderPage",
              label: "Add Order",
            },
          ]}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className=" h-full site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <p>{outlet}</p>
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
  );
};

export default MainLayout;
