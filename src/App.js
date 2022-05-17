import React from "react"
import Header from "./components/Head/Header"
import Features from "./components/Features/Features"
import Home from "./components/Hero/Home"
import Portfolio from "./components/Portfolio/Portfolio"
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact"
import FooterPro from "./components/FooterPro/footerPro"
import ProgressBar from "./components/ProgressBar/progress"
import {Helmet} from "react-helmet";

import "./App.css"

const App = () => {
  return (

    
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title> Dkong Studio</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
      <Header />
      <Home />
      <ProgressBar/>
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
      <FooterPro />

    </>
  )
}

export default App
