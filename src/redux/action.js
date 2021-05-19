import * as actionTypes from "./actionType";

export const incrementValue = () => ({
  type: actionTypes.INCREMENT_VALUE,
});

export const decrementValue = () => ({
  type: actionTypes.DECREMENT_VALUE,
});

export const incrementByAmount = (amount) => ({
  type: actionTypes.INCREMENT_BY_AMOUNT,
  payload: amount,
});
