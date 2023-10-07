import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing';
import Offer from '../components/Offer';

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path='/service' element={<Offer/>}/>
      </Routes>
    </>
  );
}

export default App
