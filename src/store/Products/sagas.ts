import { getLists } from "services";
import * as ActionTypes from "@types";
import * as ActionConst from "constant/actions";
import { put, takeLatest } from "redux-saga/effects";

function* fetchProducts(action: ActionTypes.FetchProductsAction) {
  try {
    yield put({
      type: ActionConst.SET_PRODUCTS,
      products: [],
      isFetching: true,
      total: -1
    });
    const data = yield getLists(action.page, action.count, action.q);

    if (data.products.length > 0) {
      yield put({
        type: ActionConst.SET_PRODUCTS,
        products: data.products.map(product => ({
          id: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          star: product.star_rating,
          quantity: 1
        })),
        isFetching: false,
        total: data.total,
        hasSearched: data.hasSearched
      });
    } else {
      yield put({
        type: ActionConst.SET_PRODUCTS,
        products: [],
        isFetching: false,
        total: 0,
        hasSearched: data.hasSearched
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

function* watchedSagas() {
  yield takeLatest(ActionConst.FETCH_PRODUCTS, fetchProducts);
}

export default watchedSagas;
