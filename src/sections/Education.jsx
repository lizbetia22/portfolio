import React from 'react';
import { SlGraduation } from "react-icons/sl";
import { LuFileBadge } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
function Education() {
    return (
        <>
            <div>
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Explore my educational journey and the knowledge I've gained along the way.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li className="flex items-start gap-4">
                                        <GoTrophy className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold">Master in software development</h3>
                                            <p className="text-gray-500 dark:text-gray-400">ESIMED: Private higher education school of computer science</p>
                                            <p className="text-gray-500 dark:text-gray-400">Actual education, since September 2023</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <SlGraduation className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold">Bachelor's degree in Web and mobile development</h3>
                                            <p className="text-gray-500 dark:text-gray-400">ESIMED: Private higher education school of computer science</p>
                                            <p className="text-gray-500 dark:text-gray-400">Completed: July 2023</p>
                                            <p className="text-gray-500 dark:text-gray-400">Average: 17.35</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <LuFileBadge className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold">Bachelor's degree in  Information and analytical technologies and management</h3>
                                            <p className="text-gray-500 dark:text-gray-400">NURE: Kharkiv National University of Radioelectronics</p>
                                            <p className="text-gray-500 dark:text-gray-400">Completed: June 2023</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                alt="Education"
                                style={{
                                    display: 'block',
                                    maxWidth: '730px',
                                    maxHeight: '325px',
                                    width: 'auto',
                                    height: 'auto',
                                    margin: 'auto'
                                }}
                               // className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                src="/educations.png"
                            />
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Education;
