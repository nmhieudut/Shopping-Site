import { CounterTypes, ADD_COUNT, SUB_COUNT } from "./types";
export const addCounter = (counter: number): CounterTypes => ({
  type: ADD_COUNT,
  counter,
});
export const subCounter = (counter: number): CounterTypes => ({
  type: SUB_COUNT,
  counter,
});
