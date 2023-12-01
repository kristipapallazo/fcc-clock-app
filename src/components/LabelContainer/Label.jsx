import classes from './Label.module.css';
const Label = (props) => {
  const { id, label, input, setInput } = props;
  const handleInputChange = (type) => {
    //type determines either is increment or decrement
    setInput((input) => {
      let newInput = input;
      if (type) {
        newInput += 1;
      } else {
        newInput -= 1;
      }
      return (newInput > 60) | (newInput <= 0) ? input : newInput;
    });
  };
  const labelId = `${id}-label`;
  const decrementId = `${id}-decrement`;
  const incrementId = `${id}-increment`;
  const lengthId = `${id}-length`;
  return (
    <div className={classes.container}>
      <div id={labelId} className={classes.label}>
        {label} length
      </div>
      <div className={classes.btnContainer}>
        <button
          onClick={() => handleInputChange()}
          id={decrementId}
          className={classes.btn}
        >
          -
        </button>
        <span id={lengthId}>{input}</span>
        <button
          onClick={() => handleInputChange(true)}
          id={incrementId}
          className={classes.btn}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Label;
