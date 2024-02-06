import logo from "../../assets/logo.png";
import rightArrowIcon from "../../assets/arrowright.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./SideBar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  const [isSidebarExtended, setIsSidebarExtended] = useState(false);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  return (
    <>
      {usuario.token !== "" && (
        <div
          className={`sidebar fixed top-0 left-0 h-screen ${
            isSidebarExtended ? "w-62 show" : "w-10"
          } bg-azmedio text-escuro`}
        >
          <div className="flex flex-col h-full">
            {/* Botão de Toggle */}
            <button
              className="navbar-toggle-button"
              onClick={() => setIsSidebarExtended(!isSidebarExtended)}
            >
              {isSidebarExtended ? (
                <span className="text-lg font-semibold">Reduzir Menu</span>
              ) : (
                <img
                  src={rightArrowIcon}
                  alt="Expandir Menu"
                  className="h-6 w-6 my-2 mx-2"
                />
              )}
            </button>

            {/* Conteúdo da Sidebar (oculto quando fechado) */}
            <div
              className={`flex-1 flex flex-col gap-4 overflow-y-auto p-4 border-t border-escuro ${
                isSidebarExtended ? "" : "hidden"
              }`}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="Ecomunidade"
                  className="rounded-lg flex items-center justify-center h-16 w-full object-cover border-escuro"
                />
              </Link>
              <Link to="/postagens" className="hover:bg-medio rounded-md p-2">
                Postagens
              </Link>
              <Link to="/tipos" className="hover:bg-medio rounded-md p-2">
                Tipos
              </Link>
              <Link to="/cadastroTipo" className="hover:bg-medio rounded-md p-2">
                Cadastrar tipo
              </Link>
              <Link to="/sobre" className="hover:bg-medio rounded-md p-2">
                Sobre
              </Link>
            </div>

            {/* Link de Sair (sempre visível) */}
            <Link
              to="/"
              onClick={logout}
              className="mt-auto flex items-center justify-center h-16 text-lg hover:bg-medio rounded-md"
            >
              Sair
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
