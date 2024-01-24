import Footer from "./Components/Footer/footer"
import Navbar from "./Components/NavBar/navBar"
import Home from "./pages/home/home"
import Login from "./pages/login/Login"
import UserProvider from './contexts/UserContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from "./pages/sobre/sobre"


const App = () => {
  return (
    <UserProvider>

      <BrowserRouter>
        <div className='min-h-[80vh]'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>

    </UserProvider>
  )
}

export default App
