import React, { useContext } from 'react';
import './home.css';

import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div>
        <h2 className="text-slate-900 text-5xl  my-4">Logar</h2>
        <Link to="/" className="my-4 rounded bg-indigo-400
         hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
          Voltar 
        </Link>
      </div>

    </div>
  );
}

export default Home