import * as actions from "../constans";

export const inputValue = (val) => ({
  type: actions.SET_VALUE,
  payload: val,
});

export const incrementVal = (num) => ({
  type: actions.INC,
  payload: num,
});

export const decrementVal = (num2) => ({
  type: actions.DEC,
  payload: num2,
});
