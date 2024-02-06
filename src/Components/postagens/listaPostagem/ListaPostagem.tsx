import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Post';
import { buscar } from '../../../service/Service';
import CardPostagem from '../cardPostagem/CardPostagem';
import './ListaPostagem.css';

function ListaPostagens() {

  // Variavel de Estado de Postagens - Registra um Array que possuí Objetos da Model Postagem. Usada para armazena os dados que foram trazidos pela Service
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [carregando, setCarregando] = useState(true);

  // Criamos uma constante que recebe o hook useNavigate, para podermos redirecionar o usuário
  const navigate = useNavigate();

  // Pega as informações que queremos do nosso Contexto através do hook useContexo
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // Função que vai chamada a service de Buscar para buscarmos as Postagens
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
        alert('O token expirou, favor logar novamente');
        handleLogout();
      }
    } finally {
      setCarregando(false);
    }
  }

  // Função de Efeito Colateral - Sempre que o array de Temas for carregado em tela, e o seu tamanho for acessado pelo React,
  // uma função é disparada, chamando a função que irá fazer uma requisição ao back para carregar as Postagens em tela
  useEffect(() => {
    buscarPostagens();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {carregando ? (
        <div className="text-center">
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
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