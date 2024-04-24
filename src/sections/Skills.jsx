import React from 'react';
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaConfluence } from "react-icons/fa";
function Skills() {
    return (
        <>
            <div className="text-gray-800">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                            <p className="text-gray-800 mt-2">Here are the technologies I'm proficient in.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <BiLogoSpringBoot className="h-12 w-12" />
                                <h3 className="text-lg font-bold">Spring boot</h3>
                                <p className="text-gray-700 text-sm">Java-based framework used for building web applications and microservices</p>
                            </div>
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <FaNodeJs className="h-12 w-12" />
                                <h3 className="text-lg font-bold">Node.js</h3>
                                <p className="text-gray-700 text-sm">JavaScript runtime for server-side applications.</p>
                            </div>
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <FaAngular className="h-12 w-12" />
                                <h3 className="text-lg font-bold">Angular.ts</h3>
                                <p className="text-gray-700 text-sm">Front-end web application framework using TypeScript</p>
                            </div>
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <FaReact className="h-12 w-12" />
                                <h3 className="text-lg font-bold">React.js</h3>
                                <p className="text-gray-700 text-sm">JavaScript UI library</p>
                            </div>
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <SiPostgresql className="h-12 w-12" />
                                <h3 className="text-lg font-bold">Postgres.sql and Oracle</h3>
                                <p className="text-gray-700 text-sm">Relational database management systems</p>
                            </div>
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <SiMicrosoftazure className="h-12 w-12" />
                                <h3 className="text-lg font-bold">Azure</h3>
                                <p className="text-gray-700 text-sm">Microsoft's cloud computing platform</p>
                            </div>
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <IoLogoCss3 className="h-12 w-12" />
                                <h3 className="text-lg font-bold">Tailwind and Material</h3>
                                <p className="text-gray-700 text-sm">Frameworks css for building user interfaces</p>
                            </div>
                            <div className="bg-gray-300 rounded-lg p-6 flex flex-col items-center gap-4">
                                <FaConfluence className="h-12 w-12" />
                                <h3 className="text-lg font-bold">Agile</h3>
                                <p className="text-gray-700 text-sm">Project management is a methodology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
