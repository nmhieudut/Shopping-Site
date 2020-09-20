import React from "react";
import "./App.css";
import Counter from "./components/Counter";


const App: React.FC = () => {
  return (
    <div className="App">
      <Counter counter={10}/>
    </div>
  );
};

export default App;
