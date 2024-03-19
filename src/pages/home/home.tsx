import { Link } from 'react-router-dom';
import homeLogo from '../../assets/Login.svg'
import './home.css';
import ListaPostagens from '../../Components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../Components/postagens/modalPostagem/ModalPostagem';
import homeContent from '../../assets/homeContent.svg';
import wave from '../../assets/wave.svg';
import wave2 from '../../assets/wave 2.svg';
import Plantar from '../../assets/plantLogo.svg';





function Home() {
  return (
    <>
      {/* Bem Vindo! */}
      <div className="h-full bg-medio flex justify-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='container grid grid-cols-2 text-escuro mt-48'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className='text-5xl font-semibold items-center' style={{ fontFamily: "Poppins, sans-serif" }}>Seja bem vindo(a)! </h1>
            <h1 className='text-5xl font-semibold items-center' style={{ fontFamily: "Poppins, sans-serif" }}>Ecomunidade</h1>
            <h3 className='text-2xl font-semibold items-center' style={{ fontFamily: "Poppins, sans-serif" }}>Amigos do Planeta e Sustentabilidade!</h3>

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
      
     

      {/* Sobre o Projeto */}
      <div>
        <div className="h-full bg-medio flex justify-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
          <div className='container grid grid-cols-2 text-escuro mt-48'>
            <div className="flex justify-center m ">
              <img src={Plantar} alt="" className='w-3/3 mb-10' />
            </div>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-semibold' style={{ fontFamily: "Poppins, sans-serif" }}>Sobre o Projeto</h2>
              <p className='text-xl'>A solução que propomos é a Ecomunidade, uma rede social que conecta doadores ou fornecedores de materiais recicláveis com transformadores. Esta plataforma permite a criação de perfis para doadores, fornecedores, transformadores e colhedores de materiais recicláveis. Acreditamos que a Ecomunidade pode funcionar como um facilitador nesse processo, além de servir como uma vitrine para as causas individuais dos projetos. A Ecomunidade representa nossa contribuição para a luta contra a mudança climática.</p>

              <div className="flex justify-around gap-4 font-none">
                <button className='rounded font-none bg-escuro text-claro hover:bg-azmedio hover:text-escuro py-2 px-4 mb-50'>
                  <Link to="/sobre">Equipe</Link>
                </button>
                <button className='rounded font-none bg-claro text-escuro hover:bg-azmedio hover:text-claro py-2 px-4'>
                <Link to="/referencias">Ver Referencias</Link></button>
              </div>
            </div>
          </div>
        </div>
        <img src={wave} alt="" className='w-full bg-medio' />
      </div>

      

       {/* Entre em Contato*/}
      <div className="text-gray-700 body-font relative mt-16 "style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Entre em Contato
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Nos envie um uma mensagem de feedback
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-black">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Digite seu Nome'
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Informe seu Email'
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-black"
                  >
                    Menssagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder='Digite sua menssagem'
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-escuro border-0 py-2 px-8 focus:outline-none hover:bg-azmedio rounded text-lg">
                  Enviar
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">ecomunidade@ong.com.br</a>
                <p className="leading-normal my-5">
                  Brasil
                  <br />
                  São Paulo, São Paulo
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={wave2} alt="" className='w-full bg-azmedio h-full' />
    </div>
      


    </>
  );
}

export default Home;
