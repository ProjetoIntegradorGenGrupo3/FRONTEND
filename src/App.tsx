
import Home from "./pages/home/home"
import Login from "./pages/login/Login"
import {AuthProvider} from './contexts/AuthContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from "./pages/sobre/sobre"
import Cadastro from "./pages/cadastro/Cadastro";
import ListaPostagens from "./components/postagens/listaPostagem/ListaPostagem";
import Navbar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";


const App = () => {
  return (
    <AuthProvider>

      <BrowserRouter>
        <div className='min-h-[80vh]'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path="/postagens" element={<ListaPostagens />} />
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>

    </AuthProvider>
  )
}

export default App
