import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Nav from './Components/Navbar/Nav'
import Banner from './Components/Banner/Banner'
import Feutures from './Components/Feutures/Feutures'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Testimonal from './Components/Testmonial/Testimonal'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import LastFooter from './Components/Footer/LastFooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-auto bg-stone-800 text-white tracking-wider'>
      <Nav/>
      <Banner/>
      <Feutures/>
      <Projects/>
      <Resume/>
      <Testimonal/>
      <Contact/>
      <Footer/>
      <LastFooter/>
    </div>
  )
}

export default App
