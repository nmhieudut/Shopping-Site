import React, { useState } from "react";

interface Props {
  counter: number;
}

const Counter = (props: Props) => {

  const [counter, setCounter] = useState<number>(props.counter);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};
export default Counter;


