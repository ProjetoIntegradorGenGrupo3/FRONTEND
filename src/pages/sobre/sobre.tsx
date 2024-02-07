import React from 'react';
import { Link } from 'react-router-dom';
import Carol from '../../assets/carol-avatar.webp';
import Gabriel from '../../assets/gabriel.png';
import Matheus from '../../assets/matheus-avatar.webp';
import Pedro from '../../assets/pedro-avatar.webp';
import Talia from '../../assets/talia-avatar.webp';
import Vini from '../../assets/vini-avatar.png';
import wave from '../../assets/wave-haikei.svg';


function Sobre() {
  return (
    <>
    <div>
    <img className="  h-full w-full mx-auto" src={wave} alt='Avatar da criadora Caroline' />
    </div>
      <div className='text-escuro mt-10' style={{ fontFamily: "Montserrat, sans-serif" }}>
        <h1 className='flex justify-center text-4xl'style={{ fontFamily: "Poppins, sans-serif" }}>Equipe de Desenvolvimento</h1>
        <p className='flex justify-center text-2xl py-2'>
          Conheça o time por trás do projeto!
        </p>
      </div>
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-medio shadow-xl rounded-lg text-escuro ">
          <div className="rounded-t-lg h-32 overflow-hidden">
          </div>z
          <div className="mx-auto relative -mt-16  overflow-hidden">
            <img className="object-cover object-center h-64 mx-auto" src={Carol} alt='Avatar da criadora Caroline' />
          </div>
          <div className="text-center mt-2 border-t  border-escuro py-2">
            <h2 className="font-semibold text-escuro"style={{ fontFamily: "Poppins, sans-serif" }}>Caroline Lima</h2>
            <p className="text-escuro">Desenvolvedora Fullstack</p>
          </div>
          <div className="flex py-2 px-14 justify-evenly space-x-4">
            <Link to="https://github.com/Carolimaa" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro shadow-lg items-center font-semibold text-claro hover:shadow-none  px-6 py-2">GitHub</button>
            </Link>
            <Link to="https://www.linkedin.com/in/carolinelimaa/" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro shadow-lg items-center font-semibold text-claro hover:shadow-none  px-6 py-2">Linkedin</button>
            </Link>
          </div>
        </div>

        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-medio shadow-xl rounded-lg text-escuro">
          <div className="rounded-t-lg h-32 overflow-hidden">
          </div>
          <div className="mx-auto relative -mt-16 overflow-hidden">
            <img className="object-cover object-center h-64 mx-auto" src={Gabriel} alt='Avatar do criador Gabriel' />
          </div>
          <div className="text-center mt-2 border-t  border-escuro py-2">
            <h2 className="font-semibold text-escuro"style={{ fontFamily: "Poppins, sans-serif" }}>Gabriel Iwakura</h2>
            <p className="text-escuro">Desenvolvedor Fullstack</p>
          </div>
          <div className="flex py-2 px-14 justify-evenly space-x-4">
            <Link to="https://github.com/Gakuraa" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro shadow-lg items-center font-semibold text-claro hover:shadow-none  px-6 py-2">GitHub</button>
            </Link>
            <Link to="https://www.linkedin.com/in/gabrieliwakura/" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro shadow-lg items-center font-semibold text-claro hover:shadow-none  px-6 py-2">Linkedin</button>
            </Link>
          </div>
        </div >

        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-medio shadow-xl rounded-lg text-escuro">
          <div className="rounded-t-lg h-32 overflow-hidden">
          </div>
          <div className="mx-auto relative -mt-16 overflow-hidden">
            <img className="object-cover object-center h-64 mx-auto" src={Matheus} alt='Avatar do criador Vini' />
          </div>
          <div className="text-center mt-2 border-t  border-escuro py-2">
            <h2 className="font-semibold text-escuro semibold"style={{ fontFamily: "Poppins, sans-serif" }}>Matheus Julio</h2>
            <p className="text-escuro">Desenvolvedor Fullstack</p>
          </div>
          <div className="flex py-2 px-14 justify-evenly space-x-4">
            <Link to="https://github.com/MatheusJulioSantana" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro shadow-lg items-center font-semibold text-claro hover:shadow-none  px-6 py-2">GitHub</button>
            </Link>
            <Link to="https://www.linkedin.com/in/matheusjuliosantana/" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro shadow-lg items-center font-semibold text-claro hover:shadow-none  px-6 py-2">Linkedin</button>
            </Link>
          </div>
        </div >

        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-medio shadow-xl rounded-lg text-escuro">
          <div className="rounded-t-lg h-32 overflow-hidden">
          </div>
          <div className="mx-auto relative -mt-16 overflow-hidden">
            <img className="object-cover object-center h-64 mx-auto" src={Pedro} alt='Avatar do criador Vini' />
          </div>
          <div className="text-center mt-2 border-t  border-escuro py-2">
            <h2 className="font-semibold text-escuro semibold"style={{ fontFamily: "Poppins, sans-serif" }}>Pedro Viana</h2>
            <p className="text-escuro">Desenvolvedor Fullstack</p>
          </div>
          <div className="flex py-2 px-14 justify-evenly space-x-4">
            <Link to="https://github.com/Pedro-Vhiana" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro hover:shadow-lg items-center font-semibold text-claro px-6 py-2">GitHub</button>
            </Link>
            <Link to="https://www.linkedin.com/in/vhiana-pedro/" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro hover:shadow-lg font-semibold text-claro px-6 py-2">Linkedin</button>
            </Link>
          </div>
        </div >

        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-medio shadow-xl rounded-lg text-escuro">
          <div className="rounded-t-lg h-32 overflow-hidden">
          </div>
          <div className="mx-auto relative -mt-16 overflow-hidden">
            <img className="object-cover object-center h-64 mx-auto" src={Talia} alt='Avatar da desenvolvedora Talia' />
          </div>
          <div className="text-center mt-2 border-t  border-escuro py-2">
            <h2 className="font-semibold text-escuro semibold"style={{ fontFamily: "Poppins, sans-serif" }}>Talia Moura</h2>
            <p className="text-escuro">Desenvolvedora Fullstack</p>
          </div>
          <div className="flex py-2 px-14 justify-evenly space-x-4">
            <Link to="https://github.com/TahMoura" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro hover:shadow-lg items-center font-semibold text-claro px-6 py-2">GitHub</button>
            </Link>
            <Link to="https://www.linkedin.com/in/talia-moura/" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro hover:shadow-lg items-center font-semibold text-claro px-6 py-2">Linkedin</button>
            </Link>
          </div>
        </div >

        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-medio shadow-xl rounded-lg text-escuro">
          <div className="rounded-t-lg h-32 overflow-hidden">
          </div>
          <div className="mx-auto relative -mt-16 overflow-hidden">
            <img className="object-cover object-center h-64 mx-auto" src={Vini} alt='Avatar do criador Vini' />
          </div>
          <div className="text-center mt-2 border-t  border-escuro py-2">
            <h2 className="font-semibold"style={{ fontFamily: "Poppins, sans-serif" }}>Vinicius Lima</h2>
            <p className="text-escuro">Desenvolvedor Fullstack</p>
          </div>
          <div className="flex py-2 px-14 justify-evenly space-x-4">
            <Link to="https://github.com/vinysl" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro hover:shadow-lg items-center font-semibold text-claro px-6 py-2">GitHub</button>
            </Link>
            <Link to="https://www.linkedin.com/in/vinicius-lima-7b3b23235/" target="_blank" className="link-github">
              <button className="w-full block mx-auto rounded-full bg-escuro hover:shadow-lg items-center font-semibold text-claro px-6 py-2">Linkedin</button>
            </Link>
          </div>
        </div >
      </div>
    </>
  );
}

export default Sobre;