
import './App.css'
import MasterLayout from './layouts/MasterLayouts'
import Home from './pages/home/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Blogs from './pages/Blogs'
import MyContain from './pages/MyContain'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import NotFound from './pages/NotFound'
import ProtectedRoute from './routes/ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes with MasterLayout */}
          <Route path="/" element={<MasterLayout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="category" element={<Category />} />
            <Route path="blog" element={<Blogs />} />
          </Route>

          {/* Auth Routes (without MasterLayout if needed) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MasterLayout />} >
              <Route path="mycontain" element={<MyContain />} />
            </Route>
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
