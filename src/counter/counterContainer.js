import { connect } from "react-redux";
import Counter from "./Counter";
import * as actions from "../redux/action";

const increment = (dispatch) => () => {
  dispatch(actions.incrementValue());
};

const decrement = (dispatch) => () => {
  dispatch(actions.decrementValue());
};

const incrementByAmount = (dispatch) => (incrementValue) => {
  dispatch(actions.incrementByAmount(incrementValue));
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: increment(dispatch),
  decrement: decrement(dispatch),
  incrementByAmount: incrementByAmount(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
