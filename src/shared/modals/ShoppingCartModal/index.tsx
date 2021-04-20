import React from "react";
import { Button, Badge, Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { Cart } from "components/uncommon";
import { removeItem, adjustItem } from "store/Cart";

interface ShoppingCartProps {}

function ShoppingCartModal(props: ShoppingCartProps) {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state: RootState) => state.cartReducers.addedProducts);
  
  const getTotal = () => {
    let result = addedProducts.reduce(
      (total, item) =>
        total +
        Number(item.price.substring(1, item.price.length - 1)) * item.quantity,
      0
    );
    return result;
  };

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
  };

  const handleAdjustItem = (id, quantity) => {
    dispatch(adjustItem(id, quantity));
  };

  return (
    <div style={{ float: "right" }}>
      <Dropdown
        overlay={
          <Cart
            addedProducts={addedProducts}
            removeItem={handleRemoveItem}
            adjustItem={handleAdjustItem}
            getTotal={getTotal}
          />
        }
        arrow
      >
        <Badge size="default" count={addedProducts.length}>
          <Button>
            <ShoppingCartOutlined />
          </Button>
        </Badge>
      </Dropdown>
    </div>
  );
}
export default ShoppingCartModal;
