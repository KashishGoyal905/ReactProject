// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#182c6e';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* importing navbar from components */}
      <Navbar title="TextUtils" about='About' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* importing form from components */}
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>

    </>
  );
}

export default App;
