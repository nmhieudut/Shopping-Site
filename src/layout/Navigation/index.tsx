import React from "react";
import ShoppingCartModal from "pages/modals/ShoppingCartModal";
import { SearchInput } from "components/common";
import { Avatar } from "antd";
import "styles/css/layout/navigation.css";

interface Props {}

export const Navigation = (props: Props) => {
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
        <div className="nav__body-item">
          <SearchInput />
        </div>
        <div className="nav__body-item">
          <ShoppingCartModal />
        </div>
      </div>
    </div>
  );
};
