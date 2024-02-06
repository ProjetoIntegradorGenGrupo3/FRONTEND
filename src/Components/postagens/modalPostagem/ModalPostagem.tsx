import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup  
                trigger={   
                    
                    <button className='rounded px-4 bg-claro text-escuro hover:bg-azmedio hover:text-claro text-bold'>
                        Nova postagem
                    </button>
                } modal>
                <div>
                    <FormularioPostagem />
                </div>
            </Popup>
        </>
    );
}

export default ModalPostagem;