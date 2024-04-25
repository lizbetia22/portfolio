import React from 'react';
import { SlGraduation } from "react-icons/sl";
import { LuFileBadge } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { LiaUniversitySolid } from "react-icons/lia";

function Education({ language }) {
    const educationData = {
        fr: {
            title: 'Éducation',
            description: 'Explorez mon parcours éducatif et les connaissances que j\'ai acquises en cours de route.',
            courses: [
                {
                    title: "Master en développement logiciel",
                    institution: "ESIMED : École supérieure privée d'informatique",
                    status: "Éducation en cours, depuis septembre 2023",
                    average: "",
                    icon: <SlGraduation className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                },
                {
                    title: "Licence en développement Web et mobile",
                    institution: "ESIMED : École supérieure privée d'informatique",
                    status: "Terminé : juillet 2023",
                    average: "17.35",
                    icon: <GoTrophy className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                },
                {
                    title: "Licence en technologies de l'information et de l'analyse et gestion",
                    institution: "NURE : Université nationale de Radioélectronique de Kharkiv",
                    status: "Terminé : juin 2023",
                    average: "",
                    icon: <LuFileBadge className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                }
            ]
        },
        en: {
            title: 'Education',
            description: 'Explore my educational journey and the knowledge I\'ve gained along the way.',
            courses: [
                {
                    title: "Master in software development",
                    institution: "ESIMED: Private higher education school of computer science",
                    status: "Actual education, since September 2023",
                    average: "",
                    icon: <SlGraduation className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                },
                {
                    title: "Bachelor's degree in Web and mobile development",
                    institution: "ESIMED: Private higher education school of computer science",
                    status: "Completed: July 2023",
                    average: "17.35",
                    icon: <GoTrophy className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                },
                {
                    title: "Bachelor's degree in Information and analytical technologies and management",
                    institution: "NURE: Kharkiv National University of Radioelectronics",
                    status: "Completed: June 2023",
                    average: "",
                    icon: <LuFileBadge className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                }
            ]
        }
    };

    const selectedLanguageData = educationData[language];

    return (
        <>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl dark:text-dark_5 font-bold tracking-tighter sm:text-5xl">{selectedLanguageData.title}</h2>
                        <p className="max-w-[900px] dark:text-light_4 text-light_6 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                            {selectedLanguageData.description}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            {selectedLanguageData.courses.map((course, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    {course.icon}
                                    <div className="space-y-1">
                                        <h3 className="text-xl dark:text-light_1 font-bold">{course.title}</h3>
                                        <p className="text-light_6 dark:text-dark_5">{course.institution}</p>
                                        <p className="text-light_6 dark:text-dark_5">{course.status}</p>
                                        {course.average && <p className="text-light_6 dark:text-dark_5">Average: {course.average}</p>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <LiaUniversitySolid className="lg:aspect-square h-72 w-72 dark:text-light_1" />
                    {/*<img*/}
                    {/*    alt="Education"*/}
                    {/*    className="aspect-video overflow-hidden rounded-xl object-cover lg:aspect-square h-2/2 w-2/3 dark:text-light_1"*/}
                    {/*    src="/university_logo.png"*/}
                    {/*/>*/}
                </div>
            </div>
        </>
    );
}

export default Education;
