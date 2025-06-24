import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokelist')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>We are testing Backend</h1>
      <p>jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id || index}>
            <h4>{joke.id}. {joke.title}</h4>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
