import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-verdeEscuro text-ocre">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Ecomunidade </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4'>
                        <LinkedinLogo size={24} weight='bold' />
                        <InstagramLogo size={24} weight='bold' />
                        <FacebookLogo size={24} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer