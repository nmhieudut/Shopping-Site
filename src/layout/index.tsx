import React from "react";
import ProductsPage from "pages/ProductPage";
import { Navigation } from "./Navigation";
import { Layout } from "antd";
import "./layout.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const { Footer, Content } = Layout;

const ShoppingCartApp: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div className="header__container">
          <Navigation />
        </div>
        <Content className="content__container">
          <Redirect from="/" to={"/daily_products"} />
          <Route path={`/daily_products`} component={ProductsPage} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
};

export default ShoppingCartApp;
