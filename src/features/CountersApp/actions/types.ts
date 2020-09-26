export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";

export interface CounterState {
  counter: number;
}

interface AddAction {
  type: typeof ADD_COUNT;
  counter: number;
}

interface SubAction {
  type: typeof SUB_COUNT;
  counter: number;
}

export type CounterTypes = AddAction | SubAction;
