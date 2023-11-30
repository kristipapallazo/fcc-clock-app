import classes from './Label.module.css';
const Label = (props) => {
  const { id, label, input, setInput } = props;
  const handleInputChange = (type) => {
    //type determines either is increment or decrement
    setInput((input) => {
      if (type) {
        return ++input;
      }
      return --input;
    });
  };
  const labelId = `${id}-label`;
  const decrementId = `${id}-decrement`;
  const incrementId = `${id}-increment`;
  const lengthId = `${id}-length`;
  return (
    <div className={classes.container}>
      <div id={labelId}>{label} length</div>
      <div className="btn-label">
        <button onClick={() => handleInputChange()} id={decrementId}>
          -
        </button>
        <span id={lengthId}>{input}</span>
        <button onClick={() => handleInputChange(true)} id={incrementId}>
          +
        </button>
      </div>
    </div>
  );
};
export default Label;
