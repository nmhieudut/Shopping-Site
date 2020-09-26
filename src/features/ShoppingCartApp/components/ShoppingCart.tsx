import React from "react";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
interface ShoppingCartProps {}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const addedProducts = useSelector(
    (state: RootState) => state.shoppingCartReducers.addedProducts
  );
  return (
    <>
      <Badge size="default" count={addedProducts.length}>
        <Button>
          <ShoppingCartOutlined />
        </Button>
      </Badge>
    </>
  );
};
export default ShoppingCart;
