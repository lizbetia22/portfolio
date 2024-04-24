import React from 'react';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

function Contacts({ language }) {
    const contactsData = {
        fr: {
            title_1: 'Contactez-moi',
            subTitle_1: 'Vous avez une question ou vous voulez travailler ensemble ? Contactez-moi et discutons ensemble.',
            email: 'elizavetaice123@gmail.com',
            phone: '+33 (7) 89-03-43-02',
            sendMsgTitle: 'Envoyer un message',
            sendMsgBtnText: 'Envoyer le message',
            placeholders: {
                name: 'Votre nom',
                email: 'Votre email',
                message: 'Votre message'
            },
            labels: {
                name: 'Nom',
                email: 'Email',
                message: 'Message'
            }
        },
        en: {
            title_1: 'Get in Touch',
            subTitle_1: 'Have a question or want to work together? Reach out and let\'s chat.',
            email: 'elizavetaice123@gmail.com',
            phone: '+33 (7) 89-03-43-02',
            sendMsgTitle: 'Send a Message',
            sendMsgBtnText: 'Send Message',
            placeholders: {
                name: 'Your name',
                email: 'Your email',
                message: 'Your message'
            },
            labels: {
                name: 'Name',
                email: 'Email',
                message: 'Message'
            }
        }
    };

    const selectedLanguageData = contactsData[language];

    return (
        <>
            <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">{selectedLanguageData.title_1}</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                {selectedLanguageData.subTitle_1}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <IoMailOpenOutline className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <h3 className="text-gray-500 dark:text-gray-400 hover:underline">
                                        {selectedLanguageData.email}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhone className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <h3 className="text-gray-500 dark:text-gray-400 hover:underline">
                                        {selectedLanguageData.phone}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-4">{selectedLanguageData.sendMsgTitle}</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                                    {selectedLanguageData.labels.name}
                                </label>
                                <input id="name" placeholder={selectedLanguageData.placeholders.name} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                                    {selectedLanguageData.labels.email}
                                </label>
                                <input id="email" placeholder={selectedLanguageData.placeholders.email} type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">
                                    {selectedLanguageData.labels.message}
                                </label>
                                <textarea className="w-full min-h-[120px] px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" id="message" placeholder={selectedLanguageData.placeholders.message} />
                            </div>
                            <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-blue-600" type="submit">
                                {selectedLanguageData.sendMsgBtnText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacts;
