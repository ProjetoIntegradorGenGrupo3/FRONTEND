import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import UsuarioLogin from '../../models/UsuarioLogin';

import './Login.css';

function Login() {
    const { handleLogin, usuario, isLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home');
        }
    }, [usuario]);

    return (
        <div className="fundoLogin">
            <div className="formContainer">
                <form onSubmit={login}>
                    <h2 className="text-5xl mb-4">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={usuarioLogin.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`rounded mb-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'bg-green-800 hover:bg-green-900'} text-white w-1/4 py-2 flex justify-center`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>
                    <hr className="border-slate-800 w-full mb-4" />
                    <p className="mb-4">
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-green-800 hover:text-black underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
