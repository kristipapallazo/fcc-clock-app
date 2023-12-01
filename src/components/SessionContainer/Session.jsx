import classes from './Session.module.css';
import dayjs from 'dayjs';
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

const Session = (props) => {
  const {timeLeft, isBreakTime} = props;
  const formatedTime = dayjs.duration(timeLeft, 'seconds').format('mm:ss')
  const label = isBreakTime ?  'Break countdown' : 'Session countdown'
  return (
    <div className={classes.session}>
      <div id="timer-label" className={classes.timerLabel} style={isBreakTime ? {color: 'red' } : {}}>{label}</div>
      <div id="time-left">{formatedTime}</div>
    </div>
  );
};
export default Session;
