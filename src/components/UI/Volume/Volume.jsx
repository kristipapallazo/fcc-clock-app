import { useContext, useEffect, useState } from 'react';
import classes from './Volume.module.css';
import { MainCtx } from '../../../context/MainCtx';

const VolumeControl = () => {
  const { setFeatures, features } = useContext(MainCtx);
  const [volume, setVolume] = useState(features.volume);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };
  useEffect(() => {
    setFeatures((prev) => ({ ...prev, volume }));
  }, [volume, setFeatures]);

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <span className={classes.vol}>
        Volume: <span className={classes.value}>{volume}</span>
      </span>
    </div>
  );
};

/* not used for the moment */

// export default VolumeControl;
