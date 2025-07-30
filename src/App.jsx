import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Header from './components/Header'
import PostsPage from './pages/PostsPage'
import PostDetail from './pages/PostDetail'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/posts' element={<PostsPage />} />
        
        {/* Динамикалық бет */}
        <Route path='/posts/:id' element={<PostDetail />} />
        
        {/* Егер қате URL болса онда осы бет ашылады */}
        <Route path='*' element={
          <>
            <h1>Бұндай бет жоқ</h1>
            <Link to={'/'}>Басты бетке сілтеме</Link>
          </>
          } 
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App
