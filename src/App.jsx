import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar/navBar'
import Image from './components/firstImage/image'
import CurveBackground from './components/curvedContainer/CurveBackground'
import TrendingNow from './components/trending/trendingNow'
import MoreReasonsCard from './components/moreReason/MoreReasonsCard'
import FAQ from './components/faq/FAQ'
import EmailSignup from './components/email/EmailSignup'
import FooterSection from './components/footer/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        < NavBar/>
        < Image/>
        < CurveBackground />
        < TrendingNow />
        < MoreReasonsCard/>
        < FAQ/>
        < EmailSignup/>
        < FooterSection/>
        {/* <h1>hi</h1> */}
    </>
  )
}

export default App
