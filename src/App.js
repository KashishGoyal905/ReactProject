// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

function App() {
  return (
    <>
      {/* importing navbar from components */}
      <Navbar title="TextUtils" about='About' />
      <div className="container my-3">
        {/* importing form from components */}
        <TextForm heading="Enter the text to analyze" />
      </div>

    </>
  );
}

export default App;
