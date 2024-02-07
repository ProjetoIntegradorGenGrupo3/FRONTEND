import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../service/Service'
import { toastAlerta } from '../../../util/toastAlerta';
import Tipo from '../../../models/Tipo';
import { RotatingLines } from 'react-loader-spinner';

function FormularioTipo() {


    const [isLoading, setIsLoading] = useState<boolean>(false)


    const [tipo, setTipo] = useState<Tipo>({} as Tipo)

    const navigate = useNavigate();


    const { id } = useParams<{ id: string }>()


    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token;


    async function buscarPorId(id: string) {

        await buscar(`/tipos/${id}`, setTipo, {
            headers: {
                Authorization: token,
            },
        });
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

        setTipo({
            ...tipo,
            [e.target.name]: e.target.value
        })
    }


    async function gerarNovoTipo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/tipos`, tipo, setTipo, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlerta('Material atualizado com sucesso','sucesso')
                retornar()

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente','info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar o Material', 'erro')
                }
            }

        } else {

            try {
                await cadastrar(`/tipos`, tipo, setTipo, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlerta('Material cadastrado com sucesso','sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente','info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar Material','erro')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/tipos")
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','info');
            navigate('/login')
        }
    }, [token])

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">


                {id === undefined ? 'Cadastrar Material' : 'Editar tipo'}
            </h1>


            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTipo}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Material</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tipo.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descrição do Material</label>
                        <input
                            type="text"
                            placeholder="Descrição"
                            name='descricao'
                            className="border-2 border-slate-700 rounded p-2"
                            value={tipo.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                </div>
                <button
                    className="rounded text-slate-100 bg-green-400 hover:bg-green-800 w-1/2 py-2 mx-auto flex justify-center "
                    type="submit"
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Confirmar</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormularioTipo;