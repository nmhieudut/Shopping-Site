import React from "react";
import ShoppingCartModal from "shared/modals/ShoppingCartModal";
import { SearchInput } from "components/common";
import { Avatar } from "antd";
import { fetchProducts } from "store/ShoppingCart";
import { useDispatch } from "react-redux";
import "styles/css/layout/navigation.css";

interface Props {}

export const Navigation = (props: Props) => {
  const dispatch = useDispatch();
  const onSearch = query => {
    dispatch(fetchProducts(1, 0, query));
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
        <div className="nav__body-item">Logo</div>
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
