import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Post';
import Tipo from '../../../models/Tipo';
import { buscar, atualizar, cadastrar } from '../../../service/Service';
import { RotatingLines } from 'react-loader-spinner';



function FormularioPostagem() {

    
    const [isLoading, setIsLoading] = useState<boolean>(false)

   
    const navigate = useNavigate();

   
    const { id } = useParams<{ id: string }>();

   
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;


    const [tipos, setTipos] = useState<Tipo[]>([]);


    const [tipo, setTipo] = useState<Tipo>({
        id: 0,
        nome: '',
        descricao: '',
        data: '',
    });

    
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        data: '',
        conteudo: '',
        localidade: '',
        foto: '',
        tipo: null,
        usuario: null
    });

   
    async function buscarPostagemPorId(id: string) {
        await buscar(`/postagens/${id}`, setPostagem, {
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

    
    async function buscarTipo() {
        await buscar('/tipos', setTipos, {
            headers: {
                Authorization: token,
            },
        });
    }

    
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    
    useEffect(() => {

        buscarTipo()

        if (id !== undefined) {
            buscarPostagemPorId(id) 
        }

    }, [id])

    
    useEffect(() => {
        setPostagem({
            ...postagem,
            tipo: tipo,
        })
    }, [tipo])

    
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tipo: tipo,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    
    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()  

        setIsLoading(true)  
        if (id != undefined) {  
            try {

                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                alert('Postagem atualizada com sucesso');
                retornar()

            } catch (error: any) {

                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()

                } else {

                    alert('Erro ao atualizar a Postagem');
                }
            }
        } else {   

            try {

                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Postagem cadastrada com sucesso');
                retornar();

            } catch (error: any) {

                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()

                } else {

                    alert('Erro ao cadastrar a Postagem');
                }

            }
        }

        setIsLoading(false) 
    }

    const carregandoTipo = tipo.descricao === '';   

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>


            <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2 gap-4">
                {/* <div className="flex flex-col gap-2">
                    <label htmlFor="data">Data da Postagem</label>
                    <input
                        value={postagem.data}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="date"
                        placeholder="Data"
                        name="data"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div> */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="conteudo">Conteudo da postagem</label>
                    <input
                        value={postagem.conteudo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Conteudo"
                        name="conteudo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="localidade">Localidade da postagem</label>
                    <input
                        value={postagem.localidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Localidade"
                        name="localidade"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Escolha uma foto</label>
                    <input
                        value={postagem.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="foto"
                        name="foto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Tipo da postagem</p>

                    
                    <select name="tipo" id="tipo" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTipoPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione um Tipo</option>

                       
                        {tipos.map((tipo) => (
                            <>
                                <option value={tipo.id} >{tipo.nome}</option>
                            </>
                        ))}

                    </select>

                </div>

                <button
                    disabled={carregandoTipo}   
                    type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center'>

                   
                    {carregandoTipo || isLoading ?

                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />

                     
                        : id !== undefined ? 'Editar' : 'Cadastrar'}

                </button>
            </form>
        </div>
    );
}

export default FormularioPostagem;