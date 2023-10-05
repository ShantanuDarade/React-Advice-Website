import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const API_URL = 'https://api.adviceslip.com/advice'

  const [advice, setAdvice] = useState()
  
  async function getData(url) {
    try {
      const response = await axios.get(url)
      const advice = response.data.slip.advice
      setAdvice(advice)
    } 
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getData(API_URL)
  }, [])

  function changeAdvice() {
    getData(API_URL)
  }

  return (
    <div className='center'>
        <h2>{advice}</h2>
        <button onClick={changeAdvice}>Change</button>
    </div>
  );
}

export default App;
