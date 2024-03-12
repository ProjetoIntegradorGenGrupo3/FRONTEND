import logo from "../../assets/logo.png";
import rightArrowIcon from "../../assets/arrowright.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./SideBar.css";
import { toastAlerta } from "../../util/toastAlerta";

function Sidebar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  const [isSidebarExtended, setIsSidebarExtended] = useState(false);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso",'sucesso');
    navigate("/login");
  }

  return (
    <>
      {usuario.token !== "" && (
        <div
          className={` shadow-2xl sidebar fixed top-0 left-0 h-screen border rounded-lg border-azmedio ${
            isSidebarExtended ? "w-61 show" : "w-10"
          } bg-azmedio text-claro`}
        >
          <div className="flex flex-col h-full">
            <button
              className="navbar-toggle-button text-left  "
              onClick={() => setIsSidebarExtended(!isSidebarExtended)}
            >
              {isSidebarExtended ? (
                <span className="text-lg mx-6 my-5  hover:underline"> Voltar</span>
              ) : (
                <img
                  src={rightArrowIcon}
                  alt="Expandir Menu"
                  className="h-6 w-6 my-2 mx-2"
                />
              )}
            </button>

            <div
              className={`flex-1 flex flex-col gap-4 overflow-y-auto p-4 border-t border-claro ${isSidebarExtended ? "" : "hidden"
                }`}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="Ecomunidade"
                  className="rounded-lg flex items-center justify-center h-10 w-full object-cover border-escuro"
                />
              </Link>
              <Link to="/postagens" className="hover:bg-medio rounded-md p-2">
                Postagens
              </Link>
              <Link to="/tipos" className="hover:bg-medio rounded-md p-2">
                Materiais
              </Link>
              <Link to="/cadastroTipo" className="hover:bg-medio rounded-md p-2">
                Cadastrar Material
              </Link>
              <Link to="/perfil" className="hover:bg-medio rounded-md p-2">
                Perfil
              </Link>
              <Link to="/sobre" className="hover:bg-medio rounded-md p-2">
                Equipe
              </Link>
              <Link
                to="/"
                onClick={logout}
                className="mt-auto flex items-center justify-start h-16 hover:bg-medio rounded-md">
                Sair
              </Link>
            </div>


          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
