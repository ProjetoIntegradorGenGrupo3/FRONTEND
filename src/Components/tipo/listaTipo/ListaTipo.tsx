import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tipo from '../../../models/Tipo';
import { buscar } from '../../../service/Service';
import CardTipo from '../cardTipo/CardTipo';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaTipo() {

    const [tipos, setTipos] = useState<Tipo[]>([]); 

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;    

    async function buscarTipos() {

        try {   

            await buscar('/tipos', setTipos, {  
                headers: { Authorization: token },
            })

        } catch (error: any) {

            if (error.toString().includes('403')) {                 
                toastAlerta('O token expirou, favor logar novamente', 'erro')     
                handleLogout()                                      
            }

        }
    }


    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        buscarTipos()
    }, [tipos.length])

    return (
        <>
            {}
            {tipos.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {}
                        {
                            tipos.map((tipo) => (  

                                <>
                                    <CardTipo key={tipo.id} tipo={tipo} />
                                </>
                            ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaTipo;