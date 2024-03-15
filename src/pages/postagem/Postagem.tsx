import React, { useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ListaPostagem from '../../Components/postagens/listaPostagem/ListaPostagem';
import { toastAlerta } from '../../util/toastAlerta';
import { Link } from 'react-router-dom';

function Postagem() {
    const { usuario, handleLogout } = useContext(AuthContext);
    const [carregando, setCarregando] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      // Verificar se o usuário está autenticado
      if (!usuario.token) {
        toastAlerta('Você precisa estar logado para acessar esta página.', 'error');
        handleLogout();
      } else {
        setCarregando(false);
      }
    }, [usuario.token, handleLogout]);
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div className="container mx-auto my-4">
        {carregando ? (
          <div className="text-center">
            {/* Spinner de carregamento */}
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        ) : (
          <div>
            <ListaPostagem searchTerm={searchTerm} />
          </div>
        )}
      </div>
    );
  }
  
  export default Postagem;