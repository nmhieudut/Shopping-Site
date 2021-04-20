import cartReducers from "store/Cart/reducer";
import vouchersReducers from "store/Vouchers/reducer";
import productsReducers from "store/Products/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// Saga (root)
import rootSagas from "store/rootSagas";
// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // SAGA
  sagaMiddleware
];
export const rootReducer = combineReducers({
  cartReducers,
  vouchersReducers,
  productsReducers
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// Saga (run)
sagaMiddleware.run(rootSagas);
export default store;
