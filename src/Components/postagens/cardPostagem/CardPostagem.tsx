import { Link } from 'react-router-dom'
import Postagem from '../../../models/Post'


interface CardPostagemProps {
    post: Postagem  
}

function CardPostagem({ post }: CardPostagemProps) {    

    
    let dataDoBanco = new Date(post.data);

   
    dataDoBanco.setHours(dataDoBanco.getHours() - 3);

    
    let dataLocal = new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: 'medium',
    }).format(dataDoBanco)

    return (
   
            <div className='border-claro shadow-xl border rounded-xl overflow-hidden mx-auto my-10 text-claro 'style={{ fontFamily: "Montserrat, sans-serif", maxWidth: "420px", maxHeight:"900px" }}>
                <div className='bg-medio'>
                    <div className="flex w-full bg-escuro py-1 px-4 items-center gap-4">
                        <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />   
                        <h3 className='text-lg font-semibold text-center uppercase'style={{ fontFamily: "Poppins, sans-serif" }}>{post.usuario?.nome}</h3>
                    </div>
                    <div className='p-4 text-escuro'>
                        <h4 className='text-lg font-semibold uppercase'>{post.localidade}</h4> 
                        <p>{post.conteudo}</p>
                        <p>Material: {post.tipo?.descricao}</p>
                        <img src={post.foto} className='h-64 w-64 object-cover mx-auto mt-2 mb-2' alt="foto do post" /> 
                        <p>Data: {dataLocal}</p>
                    </div>
                </div>
                <div className="flex">
                    
                    <Link to={`/editarPostagem/${post.id}`} className='w-full text-claro bg-escuro hover:bg-azclaro hover:text-escuro flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>

                
                    <Link to={`/deletarPostagem/${post.id}`} className='text-claro bg-azmedio hover:bg-azclaro hover:text-escuro w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
    )
}

export default CardPostagem