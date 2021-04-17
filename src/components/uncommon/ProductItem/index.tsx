import React from "react";
import { List, Card, Button, Rate } from "antd";
import { Product } from "types/cart.action";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./product.css";

interface Props {
  item: Product;
  message?: string;
  onChoose?: (item: Product) => void | undefined;
}

export const ProductItem = (props: Props) => {
  const { item, onChoose, message } = props;

  const onChooseItem = item => {
    if (onChoose) {
      onChoose(item);
    }
  };

  return (
    <div>
      <List.Item style={{ margin: "10px 0" }}>
        <Card hoverable cover={<img alt="example" src={item.image} />}>
          <div className="item__info-wrapper">
            <p className="name__detail">{item.name}</p>
            <p className="price__detail">{item.price}</p>
          </div>

          <div className="rating__wrapper">
            <div className="rating__container">
              <Rate className="rating__amount" disabled allowHalf defaultValue={item.star} />
            </div>

            <Button
              onClick={() => onChooseItem(item)}
              type="primary"
              icon={<ShoppingCartOutlined />}
              size="small"
            >
              {message}
            </Button>
          </div>
        </Card>
      </List.Item>
    </div>
  );
};
