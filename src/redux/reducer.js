import * as actionTypes from "./actionType";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_VALUE:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT_VALUE:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionTypes.INCREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};
