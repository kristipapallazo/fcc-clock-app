import classes from './Session.module.css';

const Session = (props) => {
  const { timeLeft, isBreakTime } = props;
  const formatedTime = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft - min * 60;
    const formatedMin = min < 10 ? `0${min}` : min;
    const formatedSec = sec < 10 ? `0${sec}` : sec;

    const formatedTime = `${formatedMin}:${formatedSec}`;
    return formatedTime;
  };

  const label = isBreakTime ? 'Break countdown' : 'Session countdown';
  const isLastMin = timeLeft < 60;

  console.log('isLastMin', isLastMin);
  const dynamicClass = isLastMin
    ? classes.lastMin
    : isBreakTime
    ? classes.breakTime
    : '';

  return (
    <div className={`${classes.session} ${dynamicClass}`}>
      <div id="timer-label" className={`${classes.timerLabel} ${dynamicClass}`}>
        {label}
      </div>
      <div id="time-left" className={`${classes.timeLeft} ${dynamicClass}`}>
        {formatedTime()}
      </div>
    </div>
  );
};
export default Session;
