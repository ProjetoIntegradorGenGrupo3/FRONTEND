import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../service/Service'
import './Cadastro.css'
import { AuthContext } from '../../contexts/AuthContext'
import { RotatingLines } from 'react-loader-spinner'
import { toastAlerta } from '../../util/toastAlerta'
import recicla from '../../assets/Cadastro.svg'
function Cadastro() {

  
  let navigate = useNavigate()
  
 
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  
  const { isLoading } = useContext(AuthContext)

 
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    foto: '',
    bio: '',
    contato: '',
    data_nascimento: '',
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    foto: '',
    bio: '',
    contato: '',
    data_nascimento: '',
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }
  function atualizarEstadoBio(e: ChangeEvent<HTMLTextAreaElement> ) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso','sucesso')

      } catch (error) {
        toastAlerta('Erro ao cadastrar o Usuário','info')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.','info')
      setUsuario({ ...usuario, senha: "" }) 
      setConfirmaSenha("")                  
    }
  }

  return (
    <>
    
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-semibold "style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className="fundoCadastro hidden lg:block">
        <div className="flex justify-center ">
        <img src={recicla} alt="" className='w-4/5' />
        </div>
        </div>
        
        <form className='flex justify-center items-center flex-col w-2/3 gap-3'onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-escuro  text-5xl'style={{ fontFamily: "Poppins, sans-serif" }}>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Insira seu nome"
              className="border border-escuro bg-claro rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder=" Insira seu Email"
              className="border border-escuro bg-claro rounded p-2"
              value={usuario.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">URL da Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Recicle sua foto"
              className="border border-escuro bg-claro rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Insira sua Senha"
              className="border border-escuro bg-claro rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirme sua Senha"
              className="border border-escuro bg-claro rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
        
          <div className="flex flex-col w-full">
            <label htmlFor="contato">Redes Sociais</label>
            <input
              type="text"
              id="contato"
              name="contato"
              placeholder="Link de Outras redes Sociais"
              className="border border-escuro bg-claro rounded p-2"
              value={usuario.contato}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="data_nascimento">Data de Nascimento</label>
            <input
              type="date"
              id="data_nascimento"
              name="data_nascimento"
              placeholder="data_nascimento"
              className="border border-escuro bg-claro rounded p-2"
              value={usuario.data_nascimento}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              placeholder="  Insira uma breve Biografia"
              className="border rounded border-escuro bg-claro roundedh-32"
              value={usuario.bio}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoBio(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8"style={{ fontFamily: "Poppins, sans-serif" }}>
            <button className='rounded text-escuro bg-azmedio hover:bg-medio hover:text-claro w-1/2 py-2' onClick={back}>
              Cancelar
            </button>
            <button type='submit' className="rounded bg-medio  text-escuro   hover:bg-escuro  hover:text-claro w-1/2 py-2 flex justify-center">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Cadastrar</span>}
                    </button>
                    
          </div>
        </form>
        
      </div>
    </>
  )
}

export default Cadastro