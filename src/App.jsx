import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing';
import Offer from '../components/Offer';
import spinner from '../src/assets/spinner1.png'

function App() {
  const [loading, setloading] = useState(false)
  useEffect(() =>{
    setloading(true)
    setTimeout(()=> {
      setloading(false)
    }, 3000)
  }, [])
 
  return (
    <>
    {
      // need to change spinner image with a package from npm
      loading ? <div class="loader"></div>
    : 
    <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path='/service' element={<Offer/>}/>
    </Routes>
    }
      
    </>
  );
}

export default App
