import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";

function Navbar() {
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        toastAlerta("Usuário deslogado com sucesso", "sucesso");
        navigate("/login");
    }
    let navbarComponent

    if (usuario.token !== "") {
        navbarComponent = (
            <div className='w-full bg-green-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/' className='text-2xl font-bold uppercase'>Ecomunidade</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens'>Postagens</Link>
                        <Link to='/tipos'>Tipos</Link>
                        <Link to='/cadastroTipo'>Cadastrar tipo</Link>
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>
                        <Link to='/' onClick={logout}>Sair</Link>
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
