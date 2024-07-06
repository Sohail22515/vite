import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-back p-4">
      Hello world!
    </h1>
    <Cards username="first" btntext="click me"/>
    <Cards username="second" btntext="choose me"/>
    <Cards username="third" />
    <Cards />
    </>
  )
}

export default App
