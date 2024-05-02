import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate} from "react-router";

function About({ language }) {
    const aboutData = {
        fr: {
            name: 'Yelyzaveta Piunova',
            title_1: 'Développeur Web Fullstack | Expert en développement logiciel en Master 1',
            title_2: 'Je suis étudiante en Master et développeuse Fullstack avec une expertise avancée dans la création d\'applications robustes et évolutives. Mon expertise réside dans le développement de services web RESTful, de microservices et d\'applications à page unique avec une architecture modulaire et des interfaces utilisateur réactives.'
        },
        en: {
            name: 'Yelyzaveta Piunova',
            title_1: 'Fullstack Web Developer | Software Development Expert in Master 1',
            title_2: 'I am a Master\'s student and Fullstack Developer with advanced proficiency in building robust and scalable applications. My expertise lies in developing RESTful web services, microservices, and Single Page Application with modular architecture and reactive user interfaces.'
        }
    };

    const selectedLanguageData = aboutData[language];

    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    // if (currentPath === "/portfolio"){
    //     navigate("/portfolio/")
    // }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className={`flex flex-col justify-center space-y-4 ${isVisible ? 'fade-in' : ''}`}>
                        <div className={`space-y-2 ${isVisible ? 'fade-in' : ''}`}>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-dark_5 xl:text-6xl/none">{selectedLanguageData.name}</h1>
                            <h2 className="text-xl font-medium text-light_6 dark:text-dark_4">{selectedLanguageData.title_1}</h2>
                            <p className="max-w-[600px] text-light_6 dark:text-light_1 md:text-xl">
                                {selectedLanguageData.title_2}
                            </p>
                        </div>
                    </div>
                    <img
                        style={{ width: '497px', height: '544px' }}
                        alt="me"
                        className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square ${isVisible ? 'fade-in' : ''}`}
                        src="/portfolio/me.png"
                    />
                </div>
            </div>
        </>
    );
}

export default About;
