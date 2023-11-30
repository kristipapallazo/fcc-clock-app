import { useState } from 'react';
import './App.css';
import Label from './components/LabelContainer/Label';
import Session from './components/SessionContainer/Session';
import ActionContainer from './components/ActionContainer/ActionContainer';
const DEFAULT_BREAK = 5
const DEFAULT_SESSION = 25

function App() {
  const [breakInput, setBreakInput] = useState(DEFAULT_BREAK);
  const [sessionInput, setSessionInput] = useState(DEFAULT_SESSION);
  const handleStart = () => { }
  const handleStop = () => { }
  const handleReset = () => {
    setBreakInput(DEFAULT_BREAK)
    setSessionInput(DEFAULT_SESSION)
   }
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
        <Session />
        <ActionContainer handleStart={handleStart} handleStop={handleStop} handleReset={handleReset}/>
      </div>
    </div>
  );
}

export default App;
