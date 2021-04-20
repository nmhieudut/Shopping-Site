import React from "react";
import ShoppingCartModal from "shared/modals/ShoppingCartModal";
import { SearchInput } from "components/common";
import { Avatar } from "antd";
import { fetchProducts } from "store/Products";
import { useDispatch } from "react-redux";
import "styles/css/layout/navigation.css";
import logo from "assets/logo.png"
import { Link, useHistory } from "react-router-dom";
interface Props {}

export const Navigation = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const onSearch = query => {
    dispatch(fetchProducts(1, 0, query));
    history.push(`/daily_products?search=${query}`)
  };

  return (
    <div className="nav__user-wrapper">
      <div className="nav__user-container">
        <div className="nav__user-item">Notifications</div>
        <div className="nav__user-item">
          <Avatar
            style={{ border: "1px solid white", margin: "0 10px" }}
            size={24}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          Hieu Nguyen
        </div>
      </div>
      <div className="nav__body-container">
        <Link to="/daily_products" target="_top" className="nav__body-item nav__logo-container">
          <img src={logo} alt="" width="60px" height="60px"/>
        </Link>
        <div className="nav__body-item nav__search-container">
          <SearchInput onSearch={onSearch} />
        </div>
        <div className="nav__body-item">
          <ShoppingCartModal />
        </div>
      </div>
    </div>
  );
};
