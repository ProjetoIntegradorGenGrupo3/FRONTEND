import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Tipo from '../../../models/Tipo'
import { buscar, deletar } from '../../../service/Service'
import { RotatingLines } from 'react-loader-spinner'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarTipo() {


    const [isLoading, setIsLoading] = useState<boolean>(false)


    const [tipo, setTipo] = useState<Tipo>({} as Tipo)

    const navigate = useNavigate()


    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token;


    async function buscarPorId(id: string) {
        try {

            await buscar(`/tipos/${id}`, setTipo, {
                headers: {
                    'Authorization': token
                }
            })

        } catch (error: any) {

            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','info')
            navigate('/login')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/tipos")
    }


    async function deletarTipo() {
        setIsLoading(true)

        try {
            await deletar(`/tipos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tipo apagado com sucesso','info')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tipo','info')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tipo</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tipo a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-escuro text-claro font-bold text-2xl'>Material</header>
                <p className='p-8 text-3xl bg-medio h-full'>{tipo.descricao}</p>
                <div className="flex">
                    <button className='text-claro bg-escuro hover:bg-azclaro hover:text-escuro w-full py-2' onClick={retornar}>Não</button>

                    <button className='w-full text-claro bg-azmedio hover:bg-azclaro hover:text-escuro flex items-center justify-center' onClick={deletarTipo}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTipo