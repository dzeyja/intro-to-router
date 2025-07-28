import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Header from './components/Header'

function App() {

  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<>
            <h1>Бұндай бе жоқ</h1>
            <Link to={'/'}>Басты бетке сілтеме</Link>
          </>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
