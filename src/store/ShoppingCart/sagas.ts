import { getLists } from "services";
import * as ActionTypes from "types";
import { put, takeLatest } from "redux-saga/effects";

function* fetchProducts(action: ActionTypes.FetchProductsAction) {
  try {
    yield put({
      type: ActionTypes.SET_PRODUCTS,
      products: [],
      isFetching: true,
      total: 0
    });
    const data = yield getLists(action.page, action.count);
    if (data.products.length > 0) {
      yield put({
        type: ActionTypes.SET_PRODUCTS,
        products: data.products.map(product => ({
          id: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          star: product.star_rating,
          quantity: 1
        })),
        isFetching: false,
        total: data.total
      });
    } else {
      yield put({
        type: ActionTypes.SET_PRODUCTS,
        products: [],
        isFetching: false,
        total: 0
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

function* watchedSagas() {
  yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchProducts);
}

export default watchedSagas;
