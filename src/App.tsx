
import Home from "./pages/home/home"
import Login from "./pages/login/Login"

import { AuthProvider } from './contexts/AuthContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from "./pages/sobre/sobre"
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./Components/NavBar/navBar";
import FormularioTipo from "./Components/tipo/formularioTipo/FormularioTipo";
import DeletarTipo from "./Components/tipo/deletarTipo/DeletarTipo";
import ListaTipo from "./Components/tipo/listaTipo/ListaTipo";
import ListaPostagens from "./Components/postagens/listaPostagem/ListaPostagem";
import FormularioPostagem from "./Components/postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./Components/postagens/deletarPostagem/DeletarPostagem";
import Footer from "./Components/Footer/footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <AuthProvider>
      <ToastContainer />
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
