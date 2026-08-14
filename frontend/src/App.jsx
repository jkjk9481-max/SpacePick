import './App.css'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import RecommendedSpaces from './components/RecommendedSpaces'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <RecommendedSpaces />
      </main>
      <Footer />
    </div>
  )
}

export default App
