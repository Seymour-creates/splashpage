import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar';
import AboutReactron from './components/AboutReactron';

function App() {
  return (
    <div className="App">
      
      <header className="header">
      <NavBar/>
      </header>

      <main className="main">
        <div className="Reactron-logo">
          <div className="R-back">
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
            <img src={logo} className="App-logo r-logo-back" alt="logo" />
          </div>
          <div className="R-front">
            <div className="R-top-right">
              <img src={logo} className="App-logo r-logo-top-right" alt="logo" />
            </div>
            <div className="R-bottom-right">
              <img src={logo} className="App-logo r-logo-bottom-right br-1" alt="logo" />
              <img src={logo} className="App-logo r-logo-bottom-right br-2" alt="logo" />
              <img src={logo} className="App-logo r-logo-bottom-right br-3" alt="logo" />
            </div>
          </div>
          <div className="eactron">EACTRON</div>
        </div>
        <AboutReactron />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;


/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
*/ 