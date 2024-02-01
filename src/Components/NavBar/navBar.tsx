import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }
  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
        <div className='w-full bg-green-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <Link to='/' className='text-2xl font-bold uppercase'>Ecomunidade</Link>

<<<<<<< HEAD
                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
            
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>

                        <div className='hover:underline'>Perfil</div>
                        <Link to='/' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
=======
                <div className='flex gap-4'>
                    <Link to='/tipos'>Tipos</Link>
                    <Link to='/cadastroTipo'>Cadastrar tipo</Link>
                    <Link to='/sobre' className='hover:underline'>Sobre</Link>
                    <Link to='/' onClick={logout}>Sair</Link>
>>>>>>> 2877a3f8584a161ad0840f53be105cb551229727
                </div>
            </div>
        </div>
    )
}

return (
    <>
        {navbarComponent}
    </>
)
}

export default Navbar;
