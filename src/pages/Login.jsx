import React, { useState } from 'react';
import { useNavigate } from "react-router";

function Login({ language }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginData = {
        fr: {
            title_1: 'Connexion',
            title_2: 'Se connecter pour voir les articles du blog',
            login: 'Connexion',
            email: 'Email',
            password: 'Mot de passe',
            error: 'Courriel ou mot de passe invalide'

        },
        en: {
            title_1: 'Connection',
            title_2: 'Login to see posts of blog',
            login: 'Login',
            email: 'Email',
            password: 'Password',
            error: 'Invalid email or password'

        }
    };


    /**
     * @description login with JWT token
     * @param e
     * @returns {Promise<void>}
     */
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: email,
                    password: password,
                    expiresInMins: 30
                })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/blog');
            } else {
                setError(translations.error);
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again later.');
        }
    };
    const translations = loginData[language];
    return (
        <>
            <div className="mt-16 mb-28">
                <div className="space-y-2 text-center">
                    <h2 className="text-xl dark:text-dark_5 font-bold tracking-tighter sm:text-5xl">{translations.title_1}</h2>
                    <p className="dark:text-light_4 text-light_6 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                        {translations.title_2}
                    </p>
                </div>
                <div className="max-w-md mx-auto bg-light_3 dark:bg-dark_4 rounded-lg p-6 md:p-8 mt-10">
                    <h3 className="text-2xl font-bold mb-4 dark:text-dark_3">{translations.login}</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-light_7 dark:text-light_1" htmlFor="email">
                                {translations.email}
                            </label>
                            <input id="email_login" type="email" placeholder="example@gmail.com" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-light_7 dark:text-light_1" htmlFor="password">
                                {translations.password}
                            </label>
                            <input id="password" type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button onClick={handleLogin} className="w-full bg-light_6 dark:bg-dark_3 text-white px-4 py-2 rounded-md hover:bg-light_7 dark:hover:bg-dark_2 focus:outline-none focus:bg-light_7">
                            {translations.title_1}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

// Username: kminchelle
// Password: 0lelplR

export default Login;
