import React from "react";
import { Button, Rate } from "antd";
import { Product } from "store/Products";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "styles/css/components/uncommon/product.css";

interface Props {
  item: Product;
  message?: string;
  onChoose?: (item: Product) => void | undefined;
}

export const CardItem = (props: Props) => {
  const { item, onChoose, message } = props;

  const onChooseItem = item => {
    if (onChoose) {
      onChoose(item);
    }
  };

  return (
    <div className="product__item-wrapper">
      <div className="product__item-container">
        <div className="product__image-container">
          <img alt="example" src={item.image} width="100%" height="100%" />
        </div>
        <div className="item__info-wrapper">
          <p className="name__detail">{item.name}</p>
          <p className="price__detail">{item.price}</p>
        </div>

        <div className="rating__wrapper">
          <div className="rating__container">
            <Rate
              className="rating__amount"
              disabled
              allowHalf
              defaultValue={item.star}
            />
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
      </div>
    </div>
  );
};
