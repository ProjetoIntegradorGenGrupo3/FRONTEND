import Footer from "./Components/Footer/footer"
import Navbar from "./Components/NavBar/navBar"
import Home from "./pages/home/home"
import Login from "./pages/login/Login"
import { BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <div className='min-h-[80vh]'>
      <Navbar />
       <Routes>
          <Route path='/' element={<Login />}  /> 
          <Route path='/login' element={<Login />}  /> 
          { <Route path='/home' element={<Home />}  />  }
          {/* <Route path='/sobre' element={<Sobre />}  />  */}
       </Routes>
       </div>
       <Footer />
       
      </BrowserRouter>
      
    </>
  )
}

export default App
