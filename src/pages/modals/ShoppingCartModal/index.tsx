import React from "react";
import { Button, Badge, Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { Cart } from "components/uncommon/Cart";
import { removeItem, addOrSubItem } from "store/ShoppingCart/action";
interface ShoppingCartProps {}

function ShoppingCartModal(props: ShoppingCartProps) {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state: RootState) => state.shoppingCartReducers.addedProducts);
  
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

  const handleAddOrSubItem = (id, quantity) => {
    dispatch(addOrSubItem(id, quantity));
  };

  return (
    <div style={{ float: "right" }}>
      <Dropdown
        overlay={
          <Cart
            addedProducts={addedProducts}
            removeItem={handleRemoveItem}
            addOrSubItem={handleAddOrSubItem}
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
