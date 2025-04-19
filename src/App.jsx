import Start from './components/start'
import './App.css'
import { useEffect, useState } from 'react'
import Portfolio from './app/Portfolio';
import img1 from '../src/assets/images/myImage2.png'
import img from '../src/assets/images/myImage.png'
import img2 from '../src/assets/images/profile.jpg'
import useImagePreloader from './components/useImagePreloader';
function App() {

  const images =[img,img2,img1]
  const [showPortfolio, setShowPortfolio] = useState(false);
  const { isLoading, error } = useImagePreloader(images);

  useEffect(() => {
    if (!isLoading && !error) {
    
      setShowPortfolio(true);
    }
  }, [isLoading, error]);

  return (
    <>
      {showPortfolio ? <Portfolio images={images}/> : <Start />}
    </>
  )
}

export default App
