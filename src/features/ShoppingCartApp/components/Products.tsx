import React from "react";
import { List, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;

export default function ShoppingCartApp() {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: "Cookie Dough - Oatmeal Rasin",
      price: 88,
      image: "https://robohash.org/veroassumendasint.png?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 2,
      name: "Sugar - Sweet N Low, Individual",
      price: 84,
      image: "https://robohash.org/enimearumitaque.png?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 3,
      name: "Dill - Primerba, Paste",
      price: 37,
      image:
        "https://robohash.org/similiquecupiditateatque.png?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 4,
      name: "Yogurt - Blueberry, 175 Gr",
      price: 43,
      image:
        "https://robohash.org/aperiamcommodidolorem.jpg?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 5,
      name: "Compound - Orange",
      price: 20,
      image: "https://robohash.org/doloreetnulla.png?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 6,
      name: "Avocado",
      price: 33,
      image: "https://robohash.org/etmagnamiste.bmp?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 7,
      name: "Wine - Magnotta, White",
      price: 20,
      image:
        "https://robohash.org/exercitationemerrornisi.jpg?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 8,
      name: "Bread - Petit Baguette",
      price: 28,
      image:
        "https://robohash.org/exercitationemdoloreeos.bmp?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 9,
      name: "Pepperoni Slices",
      price: 89,
      image:
        "https://robohash.org/minimainventoresimilique.jpg?size=50x50&set=set1",
      quantity: 1,
    },
    {
      id: 10,
      name: "Sardines",
      price: 94,
      image: "https://robohash.org/quiquaeratautem.jpg?size=50x50&set=set1",
      quantity: 1,
    },
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
              cover={<img alt="example" src={item.image} />}
            >
              <Meta
                style={{ margin: "30px" }}
                title={item.name}
                description={`${item.price} VND `}
              />
              <Button
                onClick={() => dispatch(addItem(item))}
                type="primary"
                icon={<ShoppingCartOutlined />}
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
