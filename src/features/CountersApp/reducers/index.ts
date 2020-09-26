import {
  CounterState,
  CounterTypes,
  ADD_COUNT,
  SUB_COUNT,
} from "../actions/types";

const initialState: CounterState = { counter: 0 };

export default function (
  state = initialState,
  action: CounterTypes
): CounterState {
  switch (action.type) {
    case ADD_COUNT:
      return {
        counter: state.counter + action.counter,
      };
    case SUB_COUNT:
      return {
        counter: state.counter - action.counter,
      };
    default:
      return state;
  }
}
