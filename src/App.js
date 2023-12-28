
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import { useState } from 'react';


function App() {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor ='white';
      document.body.style.color ='#1d2a35';
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'

    })
    } else {
      setMode("dark");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor ='#1d2a35';
      document.body.style.color ='white';
      setMyStyle({
        color:'white',
        backgroundColor:'#1d2a35'
    })
    }
  }




  return (
    <>
      <Navbar title="TextUtils" mode={mode} modeText={modeText} toggleMode={toggleMode} />
      <div className="container " >
        <About myStyle={myStyle}/>
        <TextForm heading="Enter text" mode={mode} />
      </div>
    </>
  );
}

export default App;
