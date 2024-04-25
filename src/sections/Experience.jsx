import React from 'react';
import { BsFillCircleFill } from "react-icons/bs";

function Experience({ language }) {
    const experienceData = {
        fr: {
            title: 'Expérience professionnelle',
            jobs: [
                {
                    position: "Développeur Fullstack",
                    company: "CGI",
                    date: "sep 2022 - Présent",
                    description: "Conception et construction d'applications Web full-stack en utilisant Java Spring Boot, Angular et les services cloud Azure. Collaboration interfonctionnelle pour assurer une intégration transparente et offrir des expériences utilisateur exceptionnelles."
                },
                {
                    position: "Azure-900",
                    company: "CGI",
                    date: "avr 2023",
                    description: "Certification de niveau débutant offerte par Microsoft Azure, conçue pour les individus ayant peu ou pas d'expérience préalable en informatique en nuage."
                },
                {
                    position: "Stage universitaire",
                    company: "PrivateBank",
                    date: "déc 2021",
                    description: "Acquisition d'une expérience pratique dans diverses opérations bancaires, collaboration avec des professionnels de différents services et développement d'une compréhension globale de l'industrie."
                }
            ]
        },
        en: {
            title: 'Work Experience',
            jobs: [
                {
                    position: "Fullstack Developer",
                    company: "CGI",
                    date: "Sep 2022 - Present",
                    description: "Designed and built full-stack web applications using Java Spring Boot, Angular, and Azure cloud services. Collaborated cross-functionally to ensure seamless integration and deliver exceptional user experiences."
                },
                {
                    position: "Azure-900",
                    company: "CGI",
                    date: "Apr 2023",
                    description: "Introductory-level certification offered by Microsoft Azure, designed for individuals with little or no previous experience in cloud computing."
                },
                {
                    position: "University Internship",
                    company: "PrivateBank",
                    date: "Dec 2021",
                    description: "Gained hands-on experience in various banking operations, collaborated with professionals across different departments, and developed a comprehensive understanding of the industry."
                }
            ]
        }
    };

    const selectedLanguageData = experienceData[language];

    return (
        <>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 dark:text-dark_5">{selectedLanguageData.title}</h2>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700" />
                    <div className="space-y-8">
                        {selectedLanguageData.jobs.map((job, index) => (
                            <div key={index} className="relative pl-8">
                                <div className="absolute top-1 left-0 w-4 h-4 rounded-full">
                                    <BsFillCircleFill className="dark:text-dark_4 text-light_7"  />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-dark_5">{job.position}</h3>
                                <p className="text-light_5 dark:text-light_5 mb-2">{job.company} | {job.date}</p>
                                <p className="text-light_6 dark:text-light_2">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
