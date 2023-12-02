const Audio = () => {
  return (
    <audio style={{ background: 'red' }} id="beep" preload="auto">
      <source
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        type="audio/wav"
      ></source>
    </audio>
  );
};

export default Audio;
