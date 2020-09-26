import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { addCounter, subCounter } from "../actions";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(
    (state: RootState) => state.counterReducers.counter
  );

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(subCounter(1))}>-</button>
      <button onClick={() => dispatch(addCounter(2))}>+</button>
    </div>
  );
};
export default Counter;
