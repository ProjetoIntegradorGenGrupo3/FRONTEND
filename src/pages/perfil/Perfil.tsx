import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/Login.svg'
import { toastAlerta } from '../../util/toastAlerta'

function Perfil() {
    let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className="container mx-auto p-16"> {/* Centraliza o conteúdo principal */}
            <div className="flex flex-col items-center"> {/* Centraliza verticalmente */}
                <div className="flex items-center justify-center flex-wrap"> {/* Centraliza horizontalmente e ajusta para tela cheia */}
                    <div className="flex-shrink-0"> {/* Evita que a imagem diminua */}
                        <img
                            src={usuario.foto}
                            className="rounded-full w-40 h-40 items-center"
                            alt="Foto de perfil do usuário"
                        />
                    </div>
                    <div className="ml-4 flex-grow"> {/* Ajusta a largura do conteúdo à direita da imagem */}
                        <div className="text-2xl font-bold mb-2">{usuario.nome}</div>
                        <div className="text-gray-600 mb-4">
                            {usuario.bio}
                        </div>

                        <div className="flex flex-wrap justify-between w-full">
                            <div className="flex flex-col items-center justify-center w-1/2 mb-4">
                                <div className="text-xl font-bold mb-2">1598</div>
                                <div className="text-gray-600">Seguidores</div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-1/2 mb-4">
                                <div className="text-xl font-bold mb-2">65</div>
                                <div className="text-gray-600">Seguindo</div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-1/2 mb-4">
                                <div className="text-xl font-bold mb-2">123</div>
                                <div className="text-gray-600">Artigos</div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-1/2 mb-4">
                                <div className="text-xl font-bold mb-2">85</div>
                                <div className="text-gray-600">Trabalhos</div>
                            </div>
                        </div>

                        <div className="flex justify-center mb-4">
                            <a
                                href="https://www.facebook.com/iaMuhammedErdem"
                                className="mr-4"
                                target="_blank"
                            >
                                <svg className="w-6 h-6 fill-current text-gray-600 hover:text-blue-500">
                                    <use xlinkHref="#facebook" />
                                </svg>
                            </a>
                            <a
                                href="http://muhammederdem.com.tr/"
                                target="_blank"
                            >
                                <svg className="w-6 h-6 fill-current text-gray-600 hover:text-blue-500">
                                    <use xlinkHref="#website" />
                                </svg>
                            </a>
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                                Enviar mensagem
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                Seguir
                            </button>
                        </div>

                        <div className="mt-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil