import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/users')
  },[])

  return (
    <>
     <h1 className='text-center'>hellow worls</h1>
    </>
  )
}

export default App
