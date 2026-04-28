import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Principles from './components/Principles'
import Projects from './components/Projects'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Principles />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App