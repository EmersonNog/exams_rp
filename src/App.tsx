import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Acadepol from './pages/exams/Acadepol'
import Agente3 from './pages/exams/Agente3'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam/acadepol" element={<Acadepol />} />
        <Route path="/exam/agente-3" element={<Agente3 />} />
      </Routes>
    </Router>
  )
}
