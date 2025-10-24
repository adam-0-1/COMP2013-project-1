const QuantityCounter = ({
  quantity,
  onIncrease,
  onDecrease,
  min_value = 1,
}) => {
  return (
    <div className="ProductQuantityDiv">
      <button
        onClick={onDecrease}
        disabled={quantity <= min_value}
        className="QuantityButton"
      >
        -
      </button>
      {quantity}
      <button onClick={onIncrease} className="QuantityButton">
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
