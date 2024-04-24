import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
    return (
        <>
            <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-300">
                <p className="text-xs text-gray-600 dark:text-gray-400">© 2024 Yelyzaveta Piunova. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <div className="text-2xl hover:underline underline-offset-4">
                        <a href="https://www.linkedin.com/in/yelyzaveta-piunova-4bb209238/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </a>
                    </div>
                    <div className="text-2xl hover:underline underline-offset-4">
                        <a href="https://github.com/lizbetia22" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
}

export default Footer;
