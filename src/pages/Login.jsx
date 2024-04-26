import React from 'react';
import {useNavigate} from "react-router";

function Login({ language }) {

    const navigate = useNavigate();

    return (
        <>
           <div className="mt-36 mb-28">
            <div className="space-y-2 text-center">
                <h2 className="text-xl dark:text-dark_5 font-bold tracking-tighter sm:text-5xl">Connection</h2>
                <p className="dark:text-light_4 text-light_6 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                    Login to see posts of blog
                </p>
            </div>
            <div className="max-w-md mx-auto bg-light_3 dark:bg-dark_4 rounded-lg p-6 md:p-8 mt-10">
                <h3 className="text-2xl font-bold mb-4 dark:text-dark_3">Login</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-light_7 dark:text-light_1" htmlFor="email">
                            Email
                        </label>
                        <input id="email_login" type="email" placeholder="example@gmail.com" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-light_7 dark:text-light_1" htmlFor="password">
                            Password
                        </label>
                        <input id="password" type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3" />
                    </div>
                    <button onClick={()=>{navigate('/blog')}}  className="w-full bg-light_6 dark:bg-dark_3 text-white px-4 py-2 rounded-md hover:bg-light_7 dark:hover:bg-dark_2 focus:outline-none focus:bg-light_7">
                        Connection
                    </button>
                </form>
            </div>
           </div>
        </>
    );
}

export default Login;
