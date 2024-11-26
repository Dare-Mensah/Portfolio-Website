import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import WorkExperience from './components/Screens/WorkExperience'
import Projects from './components/Screens/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/WorkExperience" element={<WorkExperience />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App