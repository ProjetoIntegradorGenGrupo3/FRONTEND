import React, { useContext, useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Post';
import { buscar } from '../../../service/Service';
import CardPostagem from '../cardPostagem/CardPostagem';
import './ListaPostagem.css';
import { toastAlerta } from '../../../util/toastAlerta';

interface ListaPostagemProps {
  searchTerm: string; // Defina o tipo de searchTerm
}

function ListaPostagem({ searchTerm }: ListaPostagemProps) {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [termoPesquisa, setTermoPesquisa] = useState('');

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

  // Função para atualizar o estado de termoPesquisa
  const handlePesquisaChange = (event) => {
    setTermoPesquisa(event.target.value);
  };

  // Filtrar postagens com base no termo de pesquisa
  const postagensFiltradas = postagens.filter((postagem) =>
    postagem.conteudo.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md mb-4 ">
        <input
          type="text"
          placeholder="Pesquisar postagens..."
          value={termoPesquisa}
          onChange={handlePesquisaChange}
          className="w-full border border-medio rounded px-4 py-2"
        />
      </div>
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
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-20">
          {postagensFiltradas.map((postagem) => (
            <CardPostagem key={postagem.id} post={postagem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaPostagem;
