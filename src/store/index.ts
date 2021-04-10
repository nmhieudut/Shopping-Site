import shoppingCartReducers from "features/ShoppingCartApp/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// Saga (root)
import rootSagas from "store/rootSagas";
// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // Custom Middleware
  // logger

  // SAGA
  sagaMiddleware
];
export const rootReducer = combineReducers({
  shoppingCartReducers
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// Saga (run)
sagaMiddleware.run(rootSagas);
export default store;
