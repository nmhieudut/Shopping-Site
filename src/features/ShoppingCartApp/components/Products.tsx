import React, { useState, useEffect } from "react";
import { List, Card, Button, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItem, fetchProducts } from "../actions";
import { RootState } from "store";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;

export default function ShoppingCartApp() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.shoppingCartReducers.products
  );
  const isFetching = useSelector(
    (state: RootState) => state.shoppingCartReducers.isFetching
  );
  const total = useSelector(
    (state: RootState) => state.shoppingCartReducers.total
  );

  const onChangePage = page => {
    setPage(page - 1);
  };
  useEffect(() => {
    dispatch(fetchProducts(page, 12));
  }, [page]);

  return (
    <div>
      {products ? (
        <>
          <List
            loading={isFetching}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4
            }}
            dataSource={products}
            renderItem={item => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: 300, margin: "10px" }}
                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta
                    style={{ margin: "30px" }}
                    title={item.name}
                    description={`${item.price}`}
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
          <Pagination
            defaultCurrent={page}
            pageSize={12}
            total={total}
            onChange={onChangePage}
          />
        </>
      ) : null}
    </div>
  );
}
