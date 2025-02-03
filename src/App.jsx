import Start from './components/start'
import './App.css'
import { useState } from 'react'
import Portfolio from './app/Portfolio';

function App() {

  const [start,setStart] = useState(true);
    
  setTimeout(()=>{
    setStart(false)
  },4000);



  return (
    <>
    {start ? <Start/> :<Portfolio/>}
    
    </>
  )
}

export default App
