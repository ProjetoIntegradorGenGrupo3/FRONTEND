import { Link } from 'react-router-dom';
import homeLogo from '../../assets/Login.svg'
import './Home.css';
import ListaPostagens from '../../Components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../Components/postagens/modalPostagem/ModalPostagem';



function Home() {
  return (
    <>
      <div className="bg-medio flex justify-center"style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='container grid grid-cols-2 text-escuro'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-semibold'style={{ fontFamily: "Poppins, sans-serif" }}>Seja bem vindo(a)!</h2>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eos vero ad temporibus consequuntur quae veniam, aperiam provident accusantium sit tempore eum id tenetur aspernatur ducimus? Natus fugiat repellendus dolor!</p>

            <div className="flex justify-around gap-4 font-none">
              <ModalPostagem /> 
              <button className='rounded font-none bg-escuro text-claro hover:bg-azmedio hover:text-escuro py-2 px-4'>
                <Link to="/postagens">Ver Postagens</Link>
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />

          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;