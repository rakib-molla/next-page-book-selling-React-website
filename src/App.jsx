import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <div className='min-h-[calc(100vh-13px)]'>
      <Outlet/>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

export default App
