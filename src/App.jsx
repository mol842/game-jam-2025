import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import flinders from './assets/flinders.png'
import './App.css'
import { Card, Image } from '@mantine/core'
import VisualNovel from './novel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {/* <img src={flinders} /> */}
      </div>
      <Card shadow='xl'>
      {/* <img src={flinders} />  */}
      {/* // style="position: absolute; z-index: 3" /> */}
        <h1>Card title</h1>
        <p>Card content</p>
      </Card>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <div id="background">
      {/* <h1 style={{position: 'absolute', zIndex: 3}}>Hello ! </h1> */}
{/* 
        <h1>over?</h1>
        <p>over</p> */}

      </div>
      <VisualNovel/>

    </>
  )
}

export default App
