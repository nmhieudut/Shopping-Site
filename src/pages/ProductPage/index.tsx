import React, { useState, useEffect } from "react";
import { List, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItem, fetchProducts } from "store/ShoppingCart/action";
import { RootState } from "store";
import { ProductItem } from "components/ProductItem";
import { useHistory } from "react-router-dom";
import { useQuery } from "hooks/useQuery";

interface Props {}

export default function ProductPage(props: Props) {
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const [page, setPage] = useState(query.get("page") || "1");
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
    setPage(page);
    history.push(`/daily_products?page=${page}`);
  };
  console.log(page, total, Math.floor(total / 12));
  const onAddToCart = item => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    dispatch(fetchProducts(parseInt(page), 12));
    history.push(`/daily_products?page=${page}`);
  }, [page, dispatch, history]);

  return (
    <div>
      {products.length > 0 ? (
        <List
          loading={isFetching}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 6
          }}
          dataSource={products}
          renderItem={item => (
            <ProductItem item={item} onChoose={onAddToCart} message="Add" />
          )}
        />
      ) : null}
      {total > 0 && (
        <Pagination
          responsive
          defaultCurrent={parseInt(page)}
          pageSize={12}
          total={total}
          onChange={onChangePage}
        />
      )}
    </div>
  );
}
