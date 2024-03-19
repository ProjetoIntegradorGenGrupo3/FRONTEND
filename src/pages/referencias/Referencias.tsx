import { Link } from 'react-router-dom';
import friendly from '../../assets/ecofriendly.png'
import wave from '../../assets/wave.svg';
import Plantar from '../../assets/plantLogo.svg';
import madc from '../../assets/madc.png'
import make from '../../assets/howtomake.png'
import solartech from '../../assets/solartech.png'





function Referencias() {
  return (
    <>
      {/* Bem Vindo! */}
      <div className="h-full bg-azescuro flex justify-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='container grid grid-cols-2 text-white mt-48 ml-48'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-semibold' style={{ fontFamily: "Poppins, sans-serif" }}>Website Carbon Rating</h2>
            <p className='text-xl'>O Website Carbon Rating System foi projetado para medir e simplificar a compreensão do impacto ambiental das páginas da web. Ele classifica os sites em uma escala de A+ a F, tornando mais fácil ver o quanto um site consome muita energia.

              <br></br>
              <br></br>

              Podemos ver os efeitos das alterações climáticas em todo o mundo e, se o consumo de energia do setor digital continuar a aumentar ao ritmo atual, não seremos capazes de cumprir as metas de emissões líquidas zero definidas para evitar os piores efeitos. das alterações climáticas.
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <img src={friendly} alt="" className='w-[9000px]' />
          </div>
        </div>
      </div>
      <div>
        <img src={wave} alt="" className='w-full bg-azescuro' />
      </div>

      <div className="h-full bg-medio flex justify-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='container grid grid-cols-2 text-white mt-48 ml-48'>
          <div className="flex justify-center items-center ">
            <img src={madc} alt="" className='w-[9000px]' />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center py-4 ml-10">
            <h2 className='text-5xl font-semibold' style={{ fontFamily: "Poppins, sans-serif" }}>MADC</h2>
            <p className='text-xl'>Design sem sustentabilidade não é mais design.

              <br></br>
              <br></br>


              A MADC destaca-se como uma empresa inovadora e internacional estabelecida em Madrid, Espanha. Com mais de vinte anos de experiência nos setores público e privado, a MADC ganhou inúmeros prémios nacionais e internacionais em arquitetura e design urbano.
              A MADC está atualmente a desenvolver projetos sustentáveis ​​em Espanha e na Noruega, sendo o seu cliente mais recente a Câmara Municipal de Madrid para a próxima construção de uma biblioteca pública chamada “Mil Sóis”.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full bg-medio flex justify-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='container grid grid-cols-2 text-white mt-48 ml-48'>
          <div className="flex flex-col gap-4 items-center justify-center py-4 mr-48">
            <h2 className='text-5xl font-semibold' style={{ fontFamily: "Poppins, sans-serif" }}>Why And How To Create a Sustainable Website?</h2>
            <p className='text-xl'>Web design sustentável é uma abordagem que se concentra na redução do impacto negativo da tecnologia web. O objetivo é criar produtos ou serviços digitais que coloquem as pessoas e o planeta em primeiro lugar no processo de design.

              <br></br>
              <br></br>
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <img src={make} alt="" className='w-[9000px] ' />
          </div>
        </div>
      </div>

      <div className="h-full bg-medio flex justify-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='container grid grid-cols-2 text-white mt-48 ml-48'>
          <div className="flex justify-center items-center ">
            <img src={solartech} alt="" className='w-[9000px]' />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center py-4 ml-10">
            <h2 className='text-5xl font-semibold' style={{ fontFamily: "Poppins, sans-serif" }}>LOW TECH MAGAZINE</h2>
            <p className='text-xl'>A Low-tech Magazine destaca o potencial das tecnologias passadas e muitas vezes esquecidas e como elas podem informar práticas energéticas sustentáveis.

              <br></br>
              <br></br>

              Este site é movido a energia solar e auto-hospedado. Foi concebido para reduzir radicalmente o consumo de energia associado ao acesso ao conteúdo.

              <br></br>
              <br></br>

              Para reduzir o consumo de energia, optamos por um web design de volta ao básico, usando um site estático em vez de um sistema de gerenciamento de conteúdo baseado em banco de dados. Aplicamos ainda fontes padrão, imagens pontilhadas, opções de leitura off-line e outros truques para reduzir o consumo de energia muito abaixo do consumo médio de um site. Além disso, os baixos requisitos de recursos e o design aberto ajudam a manter o blog acessível para visitantes com computadores mais antigos e/ou conexões de Internet menos confiáveis.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={wave} alt="" className='w-full bg-medio' />
      </div>

    </>
  );
}

export default Referencias;
