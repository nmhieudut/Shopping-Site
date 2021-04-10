import React from "react";
import "./App.css";
import Layout from "layout";
import store from "store";
import { Provider } from "react-redux";
require("dotenv").config();


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
};

export default App;
