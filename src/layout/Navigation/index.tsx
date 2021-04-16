import React from "react";
import ShoppingCartModal from "pages/modals/ShoppingCartModal";
import { SearchInput } from "components/common/SearchInput";
import { Avatar } from "antd";
import "./navigation.css";

interface Props {}

export const Navigation = (props: Props) => {
  return (
    <>
      <div className="nav_user-container">
        <div className="nav_user-item">Notifications</div>
        <div className="nav_user-item">
          <Avatar
            style={{ border: "1px solid white", margin: "0 10px" }}
            size={24}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          Hieu Nguyen
        </div>
      </div>
      <div className="nav_body-container">
        <div className="nav_body-item">Logo</div>
        <div className="nav_body-item">
          <SearchInput />
        </div>
        <div className="nav_body-item">
          <ShoppingCartModal />
        </div>
      </div>
    </>
  );
};
