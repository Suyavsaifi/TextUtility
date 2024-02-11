import { useState } from 'react';
import Navbar from './components/Navbar'
import Textforms from './components/Textforms'
// import About from './components/about';
import Alert from './components/alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState({"msg":"We are continously working on the development of this website",type:"Info"})

  const showAlert=(message, type)=>{
    
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#103060'
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      console.log(mode)
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","Success")
    }

  }
  return (
    
    <>
    {/* <Router>
    <Navbar title = "Utils"  mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
      <Route exact path='/' element={<Textforms heading="Enter text here" mode = {mode} showAlert={showAlert}/>} />
      <Route exact path='/about' element={<About/>} />
      </Routes>
      </div>
      </Router> */}
        <Navbar title = "Utils"  mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
            <Textforms heading="Enter text here" mode = {mode} showAlert={showAlert}/>
        </div>
    </>
  );
}

export default App;
