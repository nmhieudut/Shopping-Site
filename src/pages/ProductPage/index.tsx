import React, { useState, useEffect } from "react";
import { List, Pagination } from "antd";
import { Slider, CardItem } from "components/uncommon";
import { Title, Spinner } from "components/common";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "store/Products";
import { addItem } from "store/Cart";
import { fetchVouchers } from "store/Vouchers";
import { RootState } from "store";
import { useHistory } from "react-router-dom";
import { useQuery } from "hooks/useQuery";
import notfoundLogo from "assets/notfound.png";
import "styles/css/pages/productpage.css";

export default function ProductPage() {
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const [page, setPage] = useState(query.get("page") || "1");

  const products = useSelector(
    (state: RootState) => state.productsReducers.products
  );
  const isFetching = useSelector(
    (state: RootState) => state.productsReducers.isFetching
  );
  const total = useSelector((state: RootState) => state.productsReducers.total);
  const vouchers = useSelector(
    (state: RootState) => state.vouchersReducers.vouchers
  );
  const hasSearched = useSelector(
    (state: RootState) => state.productsReducers.hasSearched
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
    dispatch(fetchProducts(parseInt(page), 12, ""));
    history.push(`/daily_products?page=${page}`);
  }, [page, dispatch, history]);
  
  return (
    <div className="product__page-wrapper">
      <div className="slider__wrapper">
        {vouchers && vouchers.length > 0 ? (
          <Slider children={vouchers} />
        ) : (
          <Spinner />
        )}
      </div>

      <div style={{ margin: "10px 110px" }}>
        {products && products.length > 0 && (
          <>
            {hasSearched ? (
              <Title
                message={`${products.length} results for ${query}`}
                color="orange"
              />
            ) : (
              <Title message="For you" color="orange" />
            )}
            <List
              className="product__item-list"
              loading={isFetching}
              grid={{
                gutter: 12,
                sm: 1,
                md: 2,
                lg: 4,
                xl: 4,
                xxl: 6
              }}
              dataSource={products}
              renderItem={item => (
                <CardItem item={item} onChoose={onAddToCart} message="Add" />
              )}
            />
          </>
        )}
        {total === 0 && (
          <div className="product__notfound-list">
            <img
              src={notfoundLogo}
              alt="no results"
              width="100%"
              height="800px"
            />
          </div>
        )}
        {isFetching && <Spinner />}
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
