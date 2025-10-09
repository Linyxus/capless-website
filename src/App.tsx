import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Publications from './components/Publications'
import PaperDetail from './components/PaperDetail'
import { publications } from './data/publications'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Hero />
            <Publications />
          </div>
        } />
        <Route path="/paper/:id" element={<PaperDetail publications={publications} />} />
      </Routes>
    </Router>
  )
}

export default App
