import React from "react";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const ShoppingCartApp: React.FC = () => {
  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <ShoppingCart />
        </Header>
        <Content style={{ margin: "100px" }}>
          <Products />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default ShoppingCartApp;
