import React from 'react';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

function Contacts({ language, contactsInView }) {
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
                            <h2 className={`text-3xl md:text-4xl font-bold dark:text-dark_5 ${contactsInView ? 'contact-title' : ''}`}>{selectedLanguageData.title_1}</h2>
                            <p className={`text-gray-500 dark:text-light_4 mt-2 ${contactsInView ? 'contact-subtitle' : ''}`}>
                                {selectedLanguageData.subTitle_1}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className={`flex items-center gap-4 ${contactsInView ? 'contact-item' : ''}`}>
                                <IoMailOpenOutline className="w-6 h-6 text-light_5 dark:text-light_4" />
                                <div>
                                    <p className="font-medium dark:text-dark_4">Email</p>
                                    <h3 className=" text-light_5 dark:text-light_4 hover:underline">
                                        {selectedLanguageData.email}
                                    </h3>
                                </div>
                            </div>
                            <div className={`flex items-center gap-4 ${contactsInView ? 'contact-item' : ''}`}>
                                <FaPhone className="w-6 h-6 text-light_5 dark:text-light_4" />
                                <div>
                                    <p className="font-medium dark:text-dark_4">Phone</p>
                                    <h3 className="text-light_5 dark:text-light_4 hover:underline">
                                        {selectedLanguageData.phone}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-light_3 dark:bg-dark_4 rounded-lg p-6 md:p-8 ${contactsInView ? 'contact-item' : ''}`}>
                        <h3 className="text-2xl font-bold mb-4 dark:text-dark_3">{selectedLanguageData.sendMsgTitle}</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-light_7 dark:text-light_1" htmlFor="name">
                                    {selectedLanguageData.labels.name}
                                </label>
                                <input id="name" placeholder={selectedLanguageData.placeholders.name} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-light_7 dark:text-light_1" htmlFor="email">
                                    {selectedLanguageData.labels.email}
                                </label>
                                <input id="email" placeholder={selectedLanguageData.placeholders.email} type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-light_7 dark:text-light_1" htmlFor="message">
                                    {selectedLanguageData.labels.message}
                                </label>
                                <textarea className="w-full min-h-[120px] px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3" id="message" placeholder={selectedLanguageData.placeholders.message} />
                            </div>
                            <button className="w-full bg-light_6 dark:bg-dark_3 text-white px-4 py-2 rounded-md hover:bg-light_7 dark:hover:bg-dark_2 focus:outline-none focus:bg-light_7">
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
