import gabriel from '../../assets/gabriel.png'

import './sobre.css';

function Sobre() {
    return (
        <>
            <div className="max-auto max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 overflow-hidden mb-10">
                    <img className="object-center h-32" src={gabriel} alt='Gabriel'/>
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold p-2">Gabriel Iwakura</h2>
                    <p className="text-escuro">Freelance Web Designer</p>
                </div>
                <div>
                    <h3 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod quam quidem ratione fugiat cumque nobis, quibusdam dolores vitae illo similique minima excepturi eveniet consectetur atque quia. Cum, molestiae impedit?</h3>
                </div>

                <div className="p-4 border-t mx-8 mt-2 p-2">
                    <button className="w-1/2 block mx-auto rounded-full bg-escuro hover:shadow-lg font-semibold text-white px-6 py-2">GitHub</button>
                </div>
            </div>

        </>
    );
}

export default Sobre