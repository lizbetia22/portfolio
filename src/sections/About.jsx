import React from 'react';

function About() {
    return (
        <>
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Yelyzaveta Piunova</h1>
                            <h2 className="text-xl font-medium text-gray-700">Fullstack Web Developer | Software Development Expert in Master 1</h2>
                            <p className="max-w-[600px] text-gray-600 md:text-xl">
                                I am a Master's student and Fullstack Developer with advanced proficiency in building robust and scalable applications. My expertise lies in developing RESTful web services, microservices, and Single Page Application with modular architecture and reactive user interfaces.
                            </p>
                        </div>
                    </div>
                    <img
                        style={{ width: '497px', height: '544px' }}
                        alt="me"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        src="/me.png"
                    />
                </div>
            </div>
        </>
    );
}

export default About;
