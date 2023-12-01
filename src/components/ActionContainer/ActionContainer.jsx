import { ResetIcon, StartIcon, StopIcon } from '../assets/icons/icons';
import classes from './ActionContainer.module.css';

const ActionContainer = (props) => {
  const { handleStart, handleStop, handleReset, isRunning } = props;
  const handleStartStop = () => {
    if (!isRunning) {
      handleStart()
    } else {
      handleStop()
    }
  };
  return (
    <div className={classes.container}>
      <button
        className={classes.reset}
        id="start_stop"
        onClick={handleStartStop}
      >{!isRunning ? <StartIcon/> : <StopIcon/>}</button>
      <button
        className={classes.reset}
        id="reset"
        onClick={handleReset}
      ><ResetIcon/></button>
    </div>
  );
};

export default ActionContainer;
