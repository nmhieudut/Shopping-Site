import React from "react";
import ProductsPage from "pages/ProductPage";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Layout } from "antd";
import "styles/css/layout/layout.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const { Content } = Layout;

const ShoppingCartApp: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div className="header__container">
          <Navigation />
        </div>
        <Switch>
          <Content className="content__container">
            <Redirect from="/" to="/daily_products" />
            <Route path="/daily_products" component={ProductsPage} />
          </Content>
        </Switch>
        <Footer />
      </Layout>
    </Router>
  );
};

export default ShoppingCartApp;
