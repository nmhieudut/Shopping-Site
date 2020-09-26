import React from "react";
import "./App.css";
import ShoppingCartApp from "./features/ShoppingCartApp";
// import Counter from "./features/CountersApp/components/Counter";
import store from "./store";
import { Provider } from "react-redux";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingCartApp />
        {/* <Counter /> */}
      </div>
    </Provider>
  );
};

export default App;
