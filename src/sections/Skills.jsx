import React from 'react';
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs, FaAngular, FaReact, FaConfluence } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiPostgresql, SiMicrosoftazure } from "react-icons/si";

function Skills({ language, skillsInView }) {
    const skillsData = {
        fr: {
            title: 'Mes Compétences',
            description: 'Voici les technologies dans lesquelles je suis compétent.',
            skills: [
                {
                    name: "Spring Boot",
                    description: "Cadre Java utilisé pour la construction d'applications Web et de microservices",
                    icon: <BiLogoSpringBoot className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Node.js",
                    description: "Runtime JavaScript pour les applications côté serveur.",
                    icon: <FaNodeJs className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Angular.ts",
                    description: "Cadre d'application Web frontale utilisant TypeScript",
                    icon: <FaAngular className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "React.js",
                    description: "Bibliothèque d'interface utilisateur JavaScript",
                    icon: <FaReact className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Postgres.sql et Oracle",
                    description: "Systèmes de gestion de base de données relationnelle",
                    icon: <SiPostgresql className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Azure",
                    description: "Plateforme de cloud computing de Microsoft",
                    icon: <SiMicrosoftazure className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Tailwind et Material",
                    description: "Cadres CSS pour la construction d'interfaces utilisateur",
                    icon: <IoLogoCss3 className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Agile",
                    description: "Méthodologie de la gestion de projet",
                    icon: <FaConfluence className="h-12 w-12 dark:text-light_1" />
                }
            ]
        },
        en: {
            title: 'My Skills',
            description: 'Here are the technologies I\'m proficient in.',
            skills: [
                {
                    name: "Spring Boot",
                    description: "Java-based framework used for building web applications and microservices",
                    icon: <BiLogoSpringBoot className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Node.js",
                    description: "JavaScript runtime for server-side applications.",
                    icon: <FaNodeJs className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Angular.ts",
                    description: "Front-end web application framework using TypeScript",
                    icon: <FaAngular className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "React.js",
                    description: "JavaScript UI library",
                    icon: <FaReact className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Postgres.sql and Oracle",
                    description: "Relational database management systems",
                    icon: <SiPostgresql className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Azure",
                    description: "Microsoft's cloud computing platform",
                    icon: <SiMicrosoftazure className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Tailwind and Material",
                    description: "Frameworks css for building user interfaces",
                    icon: <IoLogoCss3 className="h-12 w-12 dark:text-light_1" />
                },
                {
                    name: "Agile",
                    description: "Methodology of project management",
                    icon: <FaConfluence className="h-12 w-12 dark:text-light_1" />
                }
            ]
        }
    };

    const selectedLanguageData = skillsData[language];

    return (
        <>
                <div className="container mx-auto px-4 md:px-8 mb-28">
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl dark:text-dark_5 font-bold tracking-tighter sm:text-5xl">{selectedLanguageData.title}</h2>
                            <p className="text-light_7 dark:text-light_3 mt-2">{selectedLanguageData.description}</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {selectedLanguageData.skills.map((skill, index) => (
                                <div key={index} className={`skill-card bg-light_3 dark:bg-dark_3 rounded-lg p-6 flex flex-col items-center gap-4 ${skillsInView ? 'animate' : ''}`}>
                                    <div className="icon-container">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-bold dark:text-dark_5">{skill.name}</h3>
                                    <p className="text-gray-700 dark:text-light_2 text-sm">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <div className="skills-section"></div>
        </>
    );
}

export default Skills;
