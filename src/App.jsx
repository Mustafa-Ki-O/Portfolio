import Start from './components/start'
import './App.css'
import { useEffect, useState } from 'react'
import Portfolio from './app/Portfolio';
import img from '../src/assets/images/myImage.png'
import img2 from '../src/assets/images/profile.jpg'
import useImagePreloader from './components/useImagePreloader';
function App() {

  const images =[img,img2]
  const [showPortfolio, setShowPortfolio] = useState(false);
  const { isLoading, error } = useImagePreloader(images);

  useEffect(() => {
    if (!isLoading && !error) {
      // Only show portfolio when images are loaded and no errors
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
