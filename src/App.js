import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import TextForm from './components/Textform';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeText("Enable Dark Mode");
      showAlert("Light mode enabled", "success");
      document.body.style.backgroundColor = '#D3D3D3';
      document.body.style.color = '#1d2a35';
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    } else {
      setMode("dark");
      setModeText("Enable Light Mode");
      showAlert("Dark mode enabled", "success");
      document.body.style.backgroundColor = '#1d2a35';
      document.body.style.color = 'white';
      setMyStyle({
        color: 'white',
        backgroundColor: '#1d2a35'
      })
    }
  };

  const lightMode = () => {
    setMode("light");
    //setModeText("Enable Dark Mode");
    showAlert("Light mode enabled", "success");
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    setMyStyle({
      color: 'black',
      backgroundColor: 'white'
    })

  };

  const redMode = () => {
    setMode("dark");
    showAlert("Red mode enabled", "success");
    document.body.style.backgroundColor = '#400000 ';
    document.body.style.color = 'white';
    setMyStyle({
      color: 'white',
      backgroundColor: '#733635 '
    })
  };

  const blueMode = () => {
    setMode("dark");
    showAlert("Blue mode enabled", "success");
    document.body.style.backgroundColor = '#0B2447';
    document.body.style.color = 'white';
    setMyStyle({
      color: 'white',
      backgroundColor: '#004170'
    })
  };


  const darkMode = () => {
    setMode("dark");
    showAlert("Dark mode enabled", "success");
    document.body.style.backgroundColor = '#282828';
    document.body.style.color = 'white';
    setMyStyle({
      color: 'white',
      backgroundColor: '#282828'
    })

  };


  return (
    <>
      <Router>

        <Navbar title="TextUtils" mode={mode} modeText={modeText} toggleMode={toggleMode} lightMode={lightMode} redMode={redMode} blueMode={blueMode} darkMode={darkMode} />
        <Alert alert={alert} />
        <div className="container" >
          <Routes>
            <Route exact path="/about" element={<About myStyle={myStyle} />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text" mode={mode} />}></Route>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
