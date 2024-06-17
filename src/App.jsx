import AuthorLabel from './components/UI/AuthorLabel/AuthorLabel';
import MainContainer from './components/MainContainer /MainContainer';
import AppTitle from './components/UI/AppTitle/AppTitle';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="app">
      <AppTitle label="25 + 5 Clock" />
      <MainContainer />
      <AuthorLabel />
      <SpeedInsights />
    </div>
  );
}

export default App;
