import React from "react";
import { Link } from "react-router-dom";
import { Button, List, Avatar, Typography, Divider } from "antd";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { HorizontalLine } from "components/common/HorizontalLine";
import { AddedProducts } from "types/cart.action";
import "./cart.css";
const { Title } = Typography;

interface Props {
  addedProducts: AddedProducts[];
  removeItem: (id: string) => void;
  addOrSubItem: (id: string, quantity: number) => void;
  getTotal: () => Number;
}

export const Cart = (props: Props) => {
  const { addedProducts, removeItem, addOrSubItem, getTotal } = props;
  return (
    <div
      style={{ minWidth: "500px", backgroundColor: "white", padding: "10px" }}
    >
      <Title level={5}>Your Carts</Title>
      <List
        itemLayout="horizontal"
        dataSource={addedProducts}
        renderItem={item => (
          <List.Item className="cart__item">
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={
                <p style={{ color: "rgb(71, 115, 197)", fontWeight: 600 }}>
                  {item.price}
                </p>
              }
            />
            <Button
              shape="circle"
              danger
              icon={<MinusOutlined />}
              size="small"
              onClick={() => addOrSubItem(item.id, -1)}
            ></Button>
            <Divider type="vertical" />
            {item.quantity}
            <Divider type="vertical" />
            <Button
              shape="circle"
              type="primary"
              icon={<PlusOutlined />}
              size="small"
              onClick={() => addOrSubItem(item.id, 1)}
            ></Button>
            <Divider type="vertical" />
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              size="large"
              onClick={() => removeItem(item.id)}
            ></Button>
          </List.Item>
        )}
      />
      <HorizontalLine color="#e0e0e0" />
      <div className="inline__total">
        <Title level={4}>Total: </Title>
        <div
          style={{
            color: "rgb(71, 115, 197)",
            fontWeight: 600,
            fontSize: "1.5rem"
          }}
        >
          {getTotal().toFixed(2)} $
        </div>
      </div>
      <div>
        <Link to="/carts">Go to your cart</Link>
      </div>
    </div>
  );
};
