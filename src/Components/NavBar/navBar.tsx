import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {
    // Criamos uma constante que recebe o hook useNavigate, para podermos redirecionar o usuário
    const navigate = useNavigate()

    // Pega as informações que queremos do nosso Contexto através do hook useContexo
    // const { handleLogout } = useContext(AuthContext)

    // Função que vai ser chamada ao clique da opção SAIR, que por sua vez, chama a função handleLogout do Contexto
    function logout() {
        // handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    return (
        <>
            <div className='w-full bg-green-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/' className='text-2xl font-bold uppercase'>ECOMUNIDADE</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
            
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>

                        <div className='hover:underline'>Perfil</div>
                        <Link to='/' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar