import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Label from './components/LabelContainer/Label';
import Session from './components/SessionContainer/Session';
import ActionContainer from './components/ActionContainer/ActionContainer';
import Audio from './components/Audio';

const DEFAULT_BREAK = 5
const DEFAULT_SESSION = 25
function App() {
  const [breakInput, setBreakInput] = useState(DEFAULT_BREAK);
  const [sessionInput, setSessionInput] = useState(DEFAULT_SESSION);
  const [timeLeft, setTimeLeft] = useState(25*60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [countdownFinished, setcountdownFinished] = useState(false);
  const audioRef = useRef(null)

  const handlePlaySound = useCallback(() => { 
    audioRef.current?.pause()
    // audioRef.current?.currentTime = 3
    audioRef.current?.play()
    // const audio = document.getElementById('beep')
    // audio.currentTime = 3
    // audio.play()
   }, [])
  const handleStopSound = useCallback(() => { 
    audioRef.current?.pause()    
    // const audio = document.getElementById('beep')
    // audio.pause()
   }, [])

  const handleStart = () => { 
    setIsRunning(true)
  }
  const handleStop = () => { 
    setIsRunning(false)
  }
  const handleReset = () => {
    setBreakInput(DEFAULT_BREAK)
    setSessionInput(DEFAULT_SESSION)
    setTimeLeft(DEFAULT_SESSION*60)
    setIsRunning(false)
    setIsBreakTime(false)
    handleStopSound()
  }
  const handleTimeLeft = useCallback((time) => { setTimeLeft(time*60) }, [])
   useEffect(() => {
    handleTimeLeft(isBreakTime ? breakInput : sessionInput)
   }, [isBreakTime, sessionInput, breakInput,  handleTimeLeft]);
   useEffect(() => {
    if(countdownFinished) {
      if(isBreakTime) {
        //break countdown finished
        handleTimeLeft(sessionInput)
      }else {
        //session countdown finished
        handleTimeLeft(breakInput)
      }
      handlePlaySound()
      setIsBreakTime(prev=> !prev)
      setcountdownFinished(false)
      setIsRunning(true)
    }
   }, [countdownFinished, isBreakTime, sessionInput, breakInput, handleTimeLeft, handlePlaySound]);
   useEffect(() => {
    let intervalId
    if(isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft(prev => {
          if(prev === 0) {
            clearInterval(intervalId)
            setIsRunning(false)  
            setcountdownFinished(true)
            return prev
          }
          return prev -1
        })
      }, 1000);
    } 
    return () =>  clearInterval(intervalId)
   }, [isRunning]);
  return (
    <div className="app">
      <div className="container">
        <h2 className="title">25 + 5 Clock</h2>
        <div className="labels">
          <Label
            id="break"
            label="Break"
            input={breakInput}
            setInput={setBreakInput}
          />
          <Label
            id="session"
            label="Session"
            input={sessionInput}
            setInput={setSessionInput}
          />
        </div>
        <Session timeLeft={timeLeft} isBreakTime={isBreakTime}/>
        <ActionContainer handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning}/>
        {/* <Audio /> */}
        <div>
        <audio id="beep" preload='auto' ref={audioRef}>
          <source src="./assets/beep.wav" type="audio/wav"></source>
        </audio>
    </div>
      </div>
      <div>author</div>
    </div>
  );
}

export default App;
