import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Foot from './Components/Foot'
import Header from './Components/Header'
import Body from './Components/Body.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10'>
     
     
     <Header></Header>
     <Body></Body>
     <Foot></Foot>
     </div>

    </>
  )
}

export default App
