import React from 'react';

function Blog({ language }) {
    const blogData = {
        fr: {
            name: 'Yelyzaveta Piunova',
        },
        en: {
            name: 'Yelyzaveta Piunova',
        }
    };

    const selectedLanguageData = blogData[language];

    return (
        <>
            <div className="space-y-2 text-center">
                <h2 className="text-3xl dark:text-dark_5 font-bold tracking-tighter sm:text-5xl">Blog</h2>
                <p className="dark:text-light_4 text-light_6 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                    Go to discover new posts
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  ml-12">
                <div className="bg-light_1 dark:bg-dark_3 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2 dark:text-dark_5">Lorem ipsum</h2>
                        <p className="text-gray-600 dark:text-light_1 mb-4">
                            Explore the exciting advancements in AI technology and how they are transforming the web development
                            landscape.
                        </p>
                        <div className="flex items-center mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-2">AI</span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-2">
                  Lorem ipsum
                </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button className="text-light_5 dark:text-light_4 hover:text-light_6 dark:hover:text-dark_5 mr-2">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </button>
                                <button className="text-light_5 dark:text-light_4 hover:text-light_6 dark:hover:text-dark_5  mr-2">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </button>
                            </div>
                            <span className="text-gray-400 text-sm">Reactions: 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
