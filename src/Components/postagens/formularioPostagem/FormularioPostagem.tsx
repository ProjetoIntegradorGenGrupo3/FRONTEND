import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Post from '../../../models/Post';
import Tipo from '../../../models/Tipo';
import { buscar, atualizar, cadastrar } from '../../../service/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import { RotatingLines } from 'react-loader-spinner';


function FormularioPostagem() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [tipos, setTipos] = useState<Tipo[]>([]);

  const [tipo, setTipo] = useState<Tipo>({
    id: 0,
    nome: '',
    descricao: '',
    data: '',
  });

  const [post, setPost] = useState<Post>({
    id: 0,
    data: '',
    conteudo: '',
    localidade: '',
    foto: '',
    tipo: null,
    usuario: null,
  });

  async function buscarPostagemPorId(id: string) {
    await buscar(`/postagens/${id}`, setPost, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTipoPorId(id: string) {
    await buscar(`/tipos/${id}`, setTipo, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTipos() {
    await buscar('/tipos', setTipos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarTipos();
    if (id !== undefined) {
      buscarPostagemPorId(id);
      console.log(tipo);

    }
  }, [id]);

  useEffect(() => {
    setPost({
      ...post,
      tipo: tipo,
    });
  }, [tipo]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      tipo: tipo,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/postagens');
  }

  async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true)

    console.log({ post });

    if (id != undefined) {
      try {
        await atualizar(`/postagens`, post, setPost, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Postagem atualizada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Postagem', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/postagens`, post, setPost, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Postagem cadastrada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a Postagem', 'erro');
        }
      }
    }
    setIsLoading(false)
  }


  const carregandoTema = tipo.descricao === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>

      <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="conteudo">Conteúdo da postagem</label>
          <input
            value={post.conteudo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Conteúdo"
            name="conteudo"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="localidade">Localidade da postagem</label>
          <input
            value={post.localidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Localidade"
            name="localidade"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto da postagem</label>
          <input
            value={post.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da postagem</p>
          <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTipoPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione um tema</option>
            {tipos.map((tipo) => (
              <>
                <option value={tipo.id} >{tipo.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandoTema} type='submit' className='rounded disabled:bg-slate-200 bg-green-400 hover:bg-green-800 text-white font-bold w-1/2 mx-auto block py-2 flex justify-center'>
          {carregandoTema || isLoading ?

            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioPostagem;