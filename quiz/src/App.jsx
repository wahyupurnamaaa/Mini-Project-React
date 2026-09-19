import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Recipe from './components/Recipe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Hero />
      <Recipe />
      <Footer />
    </div>
  )
}

export default App
