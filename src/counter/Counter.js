import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";

function Counter(props) {
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const { count, increment, decrement, incrementByAmount } = props;

  const incrementIfOdd = (amount) => {
    console.log("incrementIfOdd");
    const currentValue = incrementValue;
    if (currentValue % 2 === 1) {
      incrementByAmount(amount);
    }
  };

  const incrementAsync = (amount) => {
    console.log("incrementAsync");
    setTimeout(() => {
      incrementByAmount(amount);
    }, 1000);

  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  incrementByAmount: PropTypes.func,
};

Counter.defaultProps = {
  count: 0,
  increment: () => {},
  decrement: () => {},
  incrementByAmount: () => {},
};

export default Counter;
