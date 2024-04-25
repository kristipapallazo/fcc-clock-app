import classes from './AppTitle.module.css';

const AppTitle = ({ label }) => {
  return <p className={classes.title}>{label}</p>;
};

export default AppTitle;
