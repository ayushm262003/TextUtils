import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (messgae,type)=>{
    setalert({
      msg: messgae,
      type: type
    }
    )
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggleMode= ()=>{
    if(mode == 'light'){
    setmode('dark');
    document.body.style.backgroundColor= '#090c50';
    showalert("Dark Mode has been enabled", "success");
    document.title='TextUtils-Dark Mode';
    }
  else{
  setmode('light');
  document.body.style.backgroundColor= 'white';
  showalert("Light Mode has been enabled", "success");
  document.title='TextUtils-Light Mode';
  }
  }

  return (
    <>
   <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert  alert={alert} />
   <div className="container my-3">
   <TextForm showalert={showalert} heading="Enter text to analyse below" mode={mode}  />
   {/* <About/> */}
   </div>
  </>
    
  );
}

export default App;
