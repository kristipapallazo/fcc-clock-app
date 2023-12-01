const Audio = () => {
  return (
    <div>
      <audio id="beep" controls>
        <source src="./assets/beep.wav" type="audio/wav"></source>
      </audio>
    </div>
  );
};

export default Audio;
