import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutMe from './pages/AboutMe'
import MyWork from './pages/MyWork'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<MyWork />} />
        </Routes>
      </main>
    </>
  )
}

export default App
