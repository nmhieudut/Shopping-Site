import React from "react";
import { Button, Badge, Dropdown, List, Avatar, Typography } from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { removeItem } from "../actions";
const { Title } = Typography;
interface ShoppingCartProps {}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const dispatch = useDispatch();
  const addedProducts = useSelector(
    (state: RootState) => state.shoppingCartReducers.addedProducts
  );
  const getTotal = () => {
    let result = addedProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return result;
  };
  const cart = (
    <div
      style={{ minWidth: "500px", backgroundColor: "white", padding: "10px" }}
    >
      <Title level={5}>Your Carts</Title>
      <List
        itemLayout="horizontal"
        dataSource={addedProducts}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={`Costs: ${item.price} $ x ${item.quantity}`}
            />
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              size="large"
              onClick={() => dispatch(removeItem(item.id))}
            ></Button>
          </List.Item>
        )}
      />
      <Title level={4}>Total: {getTotal()} $</Title>
    </div>
  );
  return (
    <div style={{ float: "right" }}>
      <Dropdown overlay={cart} arrow>
        <Badge size="default" count={addedProducts.length}>
          <Button>
            <ShoppingCartOutlined />
          </Button>
        </Badge>
      </Dropdown>
    </div>
  );
};
export default ShoppingCart;
