import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/Login.svg'
import { toastAlerta } from '../../util/toastAlerta'
import { CgProfile } from 'react-icons/cg'
import { FaRegEdit, FaRegNewspaper } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { CiEdit } from 'react-icons/ci'

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
        // miniatura perfil
        <><div className='mt-16 ml-16 mb-5 flex bg-medio w-96 p-3 rounded-lg ' style={{ fontFamily: "Poppins, sans-serif" }}>
            <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full size-16' />
            <header className='ml-5'>
                Olá,<br></br><b>{usuario.nome}</b>
            </header>
        </div>

            {/* miniatura links externos */}
            <div className='bg-medio w-96 p-3 ml-16 rounded-lg' style={{ fontFamily: "Poppins, sans-serif" }}>

                <Link to='' className='ml-4 flex text-[#2A3326]'><CgProfile className='text-[#CAEECF] size-6 mr-2' />Minha conta</Link>

                <hr className='my-4'></hr>

                <Link to='' className='ml-4 flex text-[#2A3326]'><FaRegNewspaper className='text-[#CAEECF] size-6 mr-2' />Minhas Postagens</Link>

                <hr className='my-4'></hr>

                <Link to='' className='ml-4 flex text-[#2A3326]'><IoMdSend className='text-[#CAEECF] size-6 mr-2' />Mensagens</Link>

                <hr className='my-4'></hr>

                <Link to='' className='ml-4 flex text-[#2A3326] '><CiEdit className='text-[#CAEECF] size-6 mr-2' />Editar Perfil</Link>

                <hr className='my-4'></hr>


            </div>

            {/* Card de informações */}
            <div className='bg-medio w-[65%] p-3 mt-[-344px] ml-[31%] rounded-lg'>
                <header className='text-center text-xl mb-4'>
                    <b>Infomações Pessoais</b>
                </header>
                <hr></hr>

                <section className='p-10' style={{ fontFamily: "Poppins, sans-serif" }}>
                    <div className='my-4 '>
                        <img src={usuario.foto} alt='Foto de Perfil' className='rounded-full size-32' />
                    </div>

                    <div className='my-4'>
                        <p className='mb-2 text-lg '>Nome: </p>
                        <p className='bg-[#2A3326] ml-1 w-96 h-8 rounded-full text-xl text-claro text-center ' >{usuario.nome}</p>
                    </div>

                    <div className='w-[100%]'>
                        <p className='mb-2 text-lg'>Email: </p>
                        <p className='bg-[#2A3326] ml-1 w-96 h-8 rounded-full text-xl text-claro text-center'>{usuario.email}</p>
                    </div>

                    <div className='my-4'>
                        <p className='mb-2 text-lg'>Data de Nascimento: </p>
                        <p className='bg-[#2A3326] ml-1 w-96 h-8 rounded-full text-xl text-claro text-center'>{usuario.data_nascimento}</p>
                    </div>

                </section>

            </div>

        </>

    )
}

export default Perfil