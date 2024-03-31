import React from 'react'
import "./scss/index.scss"
import Header from './components/Header/Header'
import Hero from './Modules/Hero/Hero'
import About from './Modules/About/About'
const App = () => {
  return (
    <div>
      <div className='app'>
        <Header />
        <Hero />
      </div>
      <About/>
    </div>
  )
}

export default App