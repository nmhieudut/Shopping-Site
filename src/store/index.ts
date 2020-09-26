import { combineReducers, createStore } from "redux";
import counterReducers from "../features/CountersApp/reducers";

export const rootReducer = combineReducers({
  counterReducers,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;
