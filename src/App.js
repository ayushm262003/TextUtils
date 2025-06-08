import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

let name= "Ayush"
function App() {
  const [DarkMode, setDarkMode] = useState(second)
  return (
    <>
   <Navbar title="TextUtils" aboutText="AboutTextUtils" />
   
   <div className="container my-3">
   <TextForm heading="Enter text to analyse below" />
   <About/>
   </div>
  </>
    
  );
}

export default App;
