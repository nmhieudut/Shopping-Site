import { all, fork } from "redux-saga/effects";
import productSagas from "store/ShoppingCart/sagas";

export default function* rootSagas() {
  yield all([fork(productSagas)]);
}
