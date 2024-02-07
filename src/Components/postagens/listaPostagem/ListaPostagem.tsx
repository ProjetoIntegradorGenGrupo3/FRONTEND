import { useContext, useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Post';
import { buscar } from '../../../service/Service';
import CardPostagem from '../cardPostagem/CardPostagem';
import './ListaPostagem.css';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaPostagens() {

  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [carregando, setCarregando] = useState(true);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagens() {

    setCarregando(true);

    try {
      await buscar('/postagens', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    } finally {
      setCarregando(false);
    }
  }

 useEffect(() => {
    buscarPostagens();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {carregando ? (
        <div className="text-center">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#7CA081"
          secondaryColor="#5D796F"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
        </div>
      ) : (
        <div className="container mx-auto my-4 grid grid-cols-1 lg:grid-cols-1 gap-20">
          {postagens.map((postagem) => (
            <CardPostagem key={postagem.id} post={postagem} />
          ))}
        </div>
      )}
    </div>
  );
  
}

export default ListaPostagens;