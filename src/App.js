import React, { useEffect, useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Rounds from './pages/rounds';
import Admin from './pages/admin';

function App() {
//  const [data, setData] = useState([]);
//
//  useEffect(() => {
//    fetch('/api/data')
//      .then(res => res.json())
//      .then(data => setData(data));
//  }, []);

  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/rounds' element={<Rounds/>} />
        <Route path='/admin' element={<Admin/>} />
    </Routes>
    </Router>
);
}

export default App;
