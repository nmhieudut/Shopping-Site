import { all, fork } from "redux-saga/effects";
import productSagas from "features/ShoppingCartApp/sagas";

export default function* rootSagas() {
  yield all([fork(productSagas)]);
}
