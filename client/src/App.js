import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, there</h1>
        <a href="/auth/google">Sign in with google</a>
      </header>
    </div>
  );
}

export default App;
