import { useState } from 'react';
import { ResetIcon, StartIcon, StopIcon } from '../assets/icons/icons';
import classes from './ActionContainer.module.css';

const ActionContainer = (props) => {
  const { handleStart, handleStop, handleReset } = props;
  const [isStartBtn, setIsStartBtn] = useState(true);
  const handleStartStop = () => {
    if (isStartBtn) {
      handleStart()
    } else {
      handleStop()
    }
    setIsStartBtn(prev => !prev)
  };
  return (
    <div className="container">
      <button
        className={classes.reset}
        id="start-stop"
        onClick={handleStartStop}
      >{isStartBtn ? <StartIcon/> : <StopIcon/>}</button>
      <button
        className={classes.reset}
        id="reset"
        onClick={handleReset}
      ><ResetIcon/></button>
    </div>
  );
};

export default ActionContainer;
