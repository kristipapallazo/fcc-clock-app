import AuthorLabel from './components/UI/AuthorLabel/AuthorLabel';
import MainContainer from './components/MainContainer /MainContainer';
import AppTitle from './components/UI/AppTitle/AppTitle';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppTitle label="25 + 5 Clock" />
      <MainContainer />
      <AuthorLabel />
    </div>
  );
}

export default App;
