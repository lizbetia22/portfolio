import React from 'react';
function Experience() {
    return (
        <>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700" />
                    <div className="space-y-8">
                        <div className="relative pl-8">
                            <div className="absolute top-1 left-0 w-4 h-4 bg-gray-900 dark:bg-gray-700 rounded-full" />
                            <h3 className="text-xl font-semibold mb-2">Fullstack Developer</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-2">CGI | sep 2022 - Present</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Designed and built full-stack web applications using Java Spring Boot, Angular, and Azure cloud services.
                                Collaborated cross-functionally to ensure seamless integration and deliver exceptional user experiences.
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute top-1 left-0 w-4 h-4 bg-gray-900 dark:bg-gray-700 rounded-full" />
                            <h3 className="text-xl font-semibold mb-2">Azure-900</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-2">CGI | avr 2023 </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Introductory-level certification offered by Microsoft Azure, designed for individuals with little or no previous experience in cloud computing
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute top-1 left-0 w-4 h-4 bg-gray-900 dark:bg-gray-700 rounded-full" />
                            <h3 className="text-xl font-semibold mb-2">University Internship</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-2">PrivateBank | dec 2021</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Gained hands-on experience in various banking operations, collaborated with professionals across different departments, and developed a comprehensive understanding of the industry
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Experience;
