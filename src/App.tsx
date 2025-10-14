import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Publications from './components/Publications'
import PaperDetail from './components/PaperDetail'
import ProjectDetail from './components/ProjectDetail'
import ScrollToTop from './components/ScrollToTop'
import { publications } from './data/publications'
import { projects } from './data/projects'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Hero />
            <Projects />
            <Publications />
          </div>
        } />
        <Route path="/paper/:id" element={<PaperDetail publications={publications} />} />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </Router>
  )
}

export default App
