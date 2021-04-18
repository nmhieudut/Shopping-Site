import React, { useState, useEffect } from "react";
import { List, Pagination } from "antd";
import { Slider } from "components/uncommon";
import { Title,Spinner } from "components/common";
import { useDispatch, useSelector } from "react-redux";
import { addItem, fetchProducts } from "store/ShoppingCart/action";
import { fetchVouchers } from "store/Vouchers/action";
import { RootState } from "store";
import { ProductItem } from "components/uncommon";
import { useHistory } from "react-router-dom";
import { useQuery } from "hooks/useQuery";
import "styles/css/pages/productpage.css";

export default function ProductPage() {
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
  const vouchers = useSelector(
    (state: RootState) => state.VouchersReducers.vouchers
  );

  const onChangePage = page => {
    setPage(page);
    history.push(`/daily_products?page=${page}`);
  };

  const onAddToCart = item => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    dispatch(fetchVouchers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(parseInt(page), 12));
    history.push(`/daily_products?page=${page}`);
  }, [page, dispatch, history]);

  return (
    <div className="product__page-wrapper">
      <div className="slider__wrapper">
        <Slider children={vouchers} />
      </div>

      <div style={{ margin: "10px 110px" }}>
        <Title message="For you" color="orange" />
        {products && products.length > 0 ? (
          <List
            className="product__item-list"
            loading={isFetching}
            grid={{
              gutter: 16,
              sm: 1,
              md: 2,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            dataSource={products}
            renderItem={item => (
              <ProductItem item={item} onChoose={onAddToCart} message="Add" />
            )}
          />
        ) : (
          <Spinner />
        )}
        {total > 0 && (
          <div style={{ margin: 20 }}>
            <Pagination
              responsive
              defaultCurrent={parseInt(page)}
              pageSize={12}
              total={total}
              onChange={onChangePage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
