// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#182c6e';
      showAlert('Dark Mode has been Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }
  const blueMode = () => {
    if (mode === 'light') {
      setMode('primary');
      document.body.style.backgroundColor = '#5973cc';
      showAlert('Blue Mode has been Enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }

  const greenMode = () => {
    if (mode === 'light') {
      setMode('Success');
      document.body.style.backgroundColor = '#5973cc';
      showAlert('green Mode has been Enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }
  return (
    <>
      {/* importing navbar from components */}
      <Navbar title="TextUtils" about='About' mode={mode} toggleMode={toggleMode} blueMode={blueMode} greenMode={greenMode} />
      {/* importing alert components */}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* importing form from components */}
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>

    </>
  );
}

export default App;
