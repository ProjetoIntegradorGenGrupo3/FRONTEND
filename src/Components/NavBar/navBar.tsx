import { Link, useNavigate } from 'react-router-dom'


function Navbar() {



    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Ecomunidade

                    <div className='flex gap-4'>
                        <Link to='/login' className='hover:underline'>/Login</Link>
                        <Link to='/home' className='hover:underline'>/Home</Link>
                        <Link to='/sobre' className='hover:underline'>/Sobre</Link>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar