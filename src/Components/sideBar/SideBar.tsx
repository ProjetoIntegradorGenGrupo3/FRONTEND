import logo from "../../assets/logo.png"
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import './SideBar.css';


function Sidebar() {
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert("Usuário deslogado com sucesso");
        navigate("/login");
    }

    let sidebarComponent;

    if (usuario.token !== "") {
        sidebarComponent = (
            <div className="sidebar fixed top-0 left-0 h-screen w-62 bg-green-800 text-white">
                <div className="flex flex-col h-full">
                    <Link to='/'>
                        < img src={logo} alt="Ecomunidade" className="flex items-center justify-center h-16 w-full object-cover  border-white" />
                </Link>
                <div className="flex-1 flex flex-col gap-4 overflow-y-auto p-4 border-t border-white">
                    <Link to="/postagens" className="hover:bg-green-700 rounded-md p-2">
                        Postagens
                    </Link>
                    <Link to="/tipos" className="hover:bg-green-700 rounded-md p-2">
                        Tipos
                    </Link>
                    <Link
                        to="/cadastroTipo"
                        className="hover:bg-green-700 rounded-md p-2"
                    >
                        Cadastrar tipo
                    </Link>
                    <Link to="/sobre" className="hover:bg-green-700 rounded-md p-2">
                        Sobre
                    </Link>
                </div>
                <Link
                    to="/"
                    onClick={logout}
                    className="mt-auto flex items-center justify-center h-16 text-lg hover:bg-green-700 rounded-md"
                >
                    Sair
                </Link>
            </div>
      </div >
    );
    }

    return (
        <>
            {sidebarComponent}
        </>
    );
}

export default Sidebar;
