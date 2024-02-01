
import Home from "./pages/home/home"
import Login from "./pages/login/Login"

import { AuthProvider } from './contexts/AuthContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from "./pages/sobre/sobre"
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";
import DeletarTipo from "./components/tipo/deletarTipo/DeletarTipo";
import FormularioTipo from "./components/tipo/formularioTipo/FormularioTipo";
import ListaTipo from "./components/tipo/listaTipo/ListaTipo";
import FormularioPostagem from "./components/postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import ListaPostagens from "./components/postagens/listaPostagem/ListaPostagem";


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
            <Route path="/cadastroTipo" element={<FormularioTipo />} />
            <Route path="/editarTipo/:id" element={<FormularioTipo />} />
            <Route path="/deletarTipo/:id" element={<DeletarTipo />} />
            <Route path="/tipos" element={<ListaTipo />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />


          </Routes>
        </div>
        <Footer />

      </BrowserRouter>

    </AuthProvider>
  )
}

export default App
