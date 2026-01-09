import React from 'react'
import  './App.css'
import  './index.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Components/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/Skills.jsx';


const App = () => {
  return (
    <> 
    <Routes> 
      <Route path='/' element={<MainLayout />}> 
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Route>
    </Routes>
    </>
  )
}
export default App;
