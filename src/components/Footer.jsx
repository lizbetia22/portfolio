import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({language}) {

    const footerData = {
        fr: {
            copyright: "© 2024 Yelyzaveta Piunova. Tous droits réservés.",
            socialLinks: [
                { icon: <FaLinkedin className="dark:text-light_1" />, url: "https://www.linkedin.com/in/yelyzaveta-piunova-4bb209238/" },
                { icon: <FaGithub  className="dark:text-light_1" />, url: "https://github.com/lizbetia22" }
            ]
        },
        en: {
            copyright: "© 2024 Yelyzaveta Piunova. All rights reserved.",
            socialLinks: [
                { icon: <FaLinkedin  className="dark:text-light_1" />, url: "https://www.linkedin.com/in/yelyzaveta-piunova-4bb209238/" },
                { icon: <FaGithub  className="dark:text-light_1" />, url: "https://github.com/lizbetia22" }
            ]
        }
    };

    const selectedLanguageData = footerData[language];

    return (
        <>
            <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 border-t bg-light_3 dark:bg-dark_3">
                <p className="text-xs text-light_6 dark:text-dark_5">{selectedLanguageData.copyright}</p>
                <nav className="sm:ml-5 flex gap-4 sm:gap-6">
                    {selectedLanguageData.socialLinks.map((link, index) => (
                        <div key={index} className="text-2xl hover:underline underline-offset-4">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </div>
                    ))}
                </nav>
            </footer>
        </>
    );
}

export default Footer;
