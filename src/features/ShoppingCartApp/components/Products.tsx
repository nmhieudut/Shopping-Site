import React from "react";
import { List, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import { PlusOutlined } from "@ant-design/icons";
const { Meta } = Card;

export default function ShoppingCartApp() {
  const dispatch = useDispatch();
  const products = [
    { id: "1", name: "iPhone 6", price: 600 },
    { id: "2", name: "iPhone 7", price: 800 },
    { id: "3", name: "iPhone 8", price: 1000 },
    { id: "4", name: "iPhone X", price: 1200 },
    { id: "5", name: "iPhone 5", price: 600 },
    { id: "6", name: "iPhone 9", price: 800 },
    { id: "7", name: "iPhone 11", price: 1000 },
    { id: "8", name: "iPhone X", price: 1200 },
  ];
  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 3,
        }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                style={{ margin: "30px" }}
                title={item.name}
                description={`${item.price} VND `}
              />
              <Button
                onClick={() => dispatch(addItem(item))}
                type="primary"
                icon={<PlusOutlined />}
                size="large"
              >
                Add To Cart
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
