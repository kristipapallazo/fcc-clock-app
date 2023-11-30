import classes from './Session.module.css';

const Session = (props) => {
  const {} = props;
  return (
    <div className={classes.session}>
      <div id="timer-label"></div>
      <div id="time-left"></div>
    </div>
  );
};
export default Session;
