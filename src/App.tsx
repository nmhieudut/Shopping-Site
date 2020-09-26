import React from "react";
import "./App.css";
// import ShoppingCart from "./features/ShoppingCart";
import Counter from "./features/CountersApp/components/Counter";
import store from "./store";
import { Provider } from "react-redux";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ShoppingCart/> */}
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
