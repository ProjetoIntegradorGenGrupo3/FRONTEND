import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-azmedio text-claro">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Ecomunidade | Copyright: 2024 </p>
                    <p className='text-lg'>Acesse nossa organização no Github:</p>
                    <div className='flex gap-2'>
                      <a href='https://github.com/ProjetoIntegradorGenGrupo3' target='_blank'>
                      <GithubLogo size={48} weight='bold' className='hover:text-escuro hover:scale-110 transform transition-all duration-200' />
                      </a>
                    </div>
                </div>
            </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer