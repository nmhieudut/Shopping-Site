import React from "react";
import ProductsPage from "pages/ProductPage";
import ShoppingCart from "pages/modals/ShoppingCartModal/ShoppingCart";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  Redirect
} from "react-router-dom";

const { Header, Footer, Content } = Layout;

const ShoppingCartApp: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <ShoppingCart />
        </Header>
        <Content style={{ margin: "200px" }}>
          <Redirect from="/" to={"/daily_products"} />
          <Route path={`/daily_products`} component={ProductsPage} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
};

export default ShoppingCartApp;
