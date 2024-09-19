import './App.css'
import { Navigation } from './Components/Navigation'
import { Body } from './Components/Body'
import { useState } from 'react'
import { TwitterContext } from './utils/context'

function App() {

  return (
    <div className='app'>
      <Navigation />
      <Body />
    </div>
  )
}

export default App
