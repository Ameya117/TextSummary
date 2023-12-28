
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TestForm from './components/Textform'

function App() {
  return ( 
    <>
    <Navbar title="TextUtils"/>
    <div className="container">
    <About/>
      <TestForm heading="Enter text"/>
    </div>
    </>
  );
}

export default App;
