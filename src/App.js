// libraries
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// style
import './App.css';

// pages
import Home from './Home';
import FormBasic from './Components/FormBasic';
import FormValidation from './Components/FormValidation';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      <Router>
        <div className='navigation'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/formBasic' element={<FormBasic/>}/>
          <Route path='/formValidation' element={<FormValidation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
