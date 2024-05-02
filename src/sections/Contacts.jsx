import React, {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import {IoMailOpenOutline} from "react-icons/io5";
import {FaPhone} from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

function Contacts({language, contactsInView}) {
    const contactsData = {
        fr: {
            title_1: 'Contactez-moi',
            subTitle_1: 'Vous avez une question ou vous voulez travailler ensemble ? Contactez-moi et discutons ensemble.',
            email: 'elizavetaice123@gmail.com',
            phone: '+33 (7) 89-03-43-02',
            sendMsgTitle: 'Envoyer un message',
            sendMsgBtnText: 'Envoyer le message',
            error_name: 'Le prenom est obligatoire!',
            error_email: 'L\'adresse email est obligatoire!',
            error_message: 'Le message est obligatoire !',
            error_format_email: 'Format incorrect de l\'email',
            error_recaptcha: 'Le recaptcha est incorrect',
            alert_success: 'L\'email a été envoyé avec succès!',
            alert_danger: 'Erreur de serveur interne ! Veuillez réessayer plus tard!',
            recaptcha: "Recaptcha vérification",
            placeholders: {
                name: 'Votre nom',
                email: 'Votre email',
                message: 'Votre message',
                recaptcha:'Entrez "portfolio" pour envoyer un message'
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
            error_name: 'Name is required!',
            error_email: 'Email is required!',
            error_message: 'Message is required!',
            error_format_email: 'Incorrect format of email',
            error_recaptcha: 'The recaptcha is incorrect',
            alert_success: 'Email was send successfully!',
            alert_danger: 'Internal server error! Please try it later',
            recaptcha: "Recaptcha verification",
            placeholders: {
                name: 'Your name',
                email: 'Your email',
                message: 'Your message',
                recaptcha:'Enter "portfolio" for send a message'
            },
            labels: {
                name: 'Name',
                email: 'Email',
                message: 'Message'
            }
        }
    };

    const selectedLanguageData = contactsData[language];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        recaptcha: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
        recaptcha: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    //verifications of forms
    const validateForm = () => {
        let valid = true;
        const newErrors = {...errors};

        if (!formData.name.trim()) {
            newErrors.name = selectedLanguageData.error_name;
            valid = false;
        } else {
            newErrors.name = '';
        }

        if (!formData.email.trim()) {
            newErrors.email = selectedLanguageData.error_email;
            valid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailRegex.test(formData.email.trim());
            if (!isValidEmail) {
                newErrors.email = selectedLanguageData.error_format_email;
                valid = false;
            } else {
                newErrors.email = '';
            }
        }

        if (!formData.message.trim()) {
            newErrors.message = selectedLanguageData.error_message;
            valid = false;
        } else {
            newErrors.message = '';
        }

        if(formData.recaptcha !== 'portfolio'){
            newErrors.recaptcha = selectedLanguageData.error_recaptcha;
            valid = false;
        } else {
            newErrors.recaptcha = '';
        }

        setErrors(newErrors);
        return valid;
    };

    /**
     * @description validation of forms
     */
    useEffect(() => {
        let successTimer;
        let errorTimer;

        if (isSuccess) {
            successTimer = setTimeout(() => {
                setIsSuccess(false);
            }, 10000);
        }

        if (isError) {
            errorTimer = setTimeout(() => {
                setIsError(false);
            }, 10000);
        }

        return () => {
            clearTimeout(successTimer);
            clearTimeout(errorTimer);
        };
    }, [isSuccess, isError]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    /**
     * @description sending email with API EmailJs
     * @param e
     */
    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs
            .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_EMAIL, formData, process.env.REACT_APP_PUBLIC_KEY)
            .then(
                () => {
                    setIsSuccess(true);
                    setIsError(false);
                    setFormData({name: '', email: '', message: '', recaptcha: ''});
                },
                (error) => {
                    setIsSuccess(false);
                    setIsError(true);
                },
            );
    };

    return (
        <>
            <div className="w-full max-w-4xl mx-auto py-12 md:py-0.5 px-4 md:px-6">
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
                                <IoMailOpenOutline className="w-6 h-6 text-light_5 dark:text-light_4 contacts-icons"/>
                                <div>
                                    <p className="font-medium dark:text-dark_4">Email</p>
                                    <h3 className=" text-light_5 dark:text-light_4 hover:underline">
                                        {selectedLanguageData.email}
                                    </h3>
                                </div>
                            </div>
                            <div className={`flex items-center gap-4 ${contactsInView ? 'contact-item' : ''}`}>
                                <FaPhone className="w-6 h-6 text-light_5 dark:text-light_4 contacts-icons"/>
                                <div>
                                    <p className="font-medium dark:text-dark_4">Phone</p>
                                    <h3 className="text-light_5 dark:text-light_4 hover:underline">
                                        {selectedLanguageData.phone}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`bg-light_3 dark:bg-dark_4 rounded-lg p-6 md:p-8 ${contactsInView ? 'contact-item' : ''}`}>
                        <div>
                            {isSuccess &&
                                <p className="text-green-600 text-xl">{selectedLanguageData.alert_success}</p>}
                        </div>
                        <div>
                            {isError && <p className="text-red-600 text-xl">{selectedLanguageData.alert_danger}</p>}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 dark:text-dark_3">{selectedLanguageData.sendMsgTitle}</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-light_7 dark:text-light_1"
                                       htmlFor="name">
                                    {selectedLanguageData.labels.name}
                                </label>
                                <input name="name" id="name" placeholder={selectedLanguageData.placeholders.name}
                                       value={formData.name}
                                       onChange={handleChange}
                                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3"/>
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-light_7 dark:text-light_1"
                                       htmlFor="email">
                                    {selectedLanguageData.labels.email}
                                </label>
                                <input name="email" id="email" placeholder={selectedLanguageData.placeholders.email}
                                       value={formData.email} onChange={handleChange} type="email"
                                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3"/>
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-light_7 dark:text-light_1"
                                       htmlFor="message">
                                    {selectedLanguageData.labels.message}
                                </label>
                                <textarea name="message"
                                          className="w-full min-h-[120px] px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3"
                                          id="message"
                                          value={formData.message} onChange={handleChange}
                                          placeholder={selectedLanguageData.placeholders.message}/>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                <label className="block text-sm font-medium text-light_7 dark:text-light_1 flex items-center" htmlFor="message">
                                    {selectedLanguageData.recaptcha} <MdVerifiedUser className="ml-1 h-4 w-4" />
                                </label>
                                <input name='recaptcha' id='recaptcha' placeholder={selectedLanguageData.placeholders.recaptcha}
                                       value={formData.recaptcha} onChange={handleChange}
                                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light_6 dark:focus:border-dark_3"/>
                                {errors.recaptcha && <p className="text-red-500 text-sm">{errors.recaptcha}</p>}
                            </div>
                            <div>
                            </div>
                            <button className="w-full bg-light_6 dark:bg-dark_3 text-white px-4
                                                py-2 rounded-md hover:bg-light_7
                                                dark:hover:bg-dark_2
                                                focus:outline-none focus:bg-light_7"
                                    onClick={(e) => sendEmail(e)}>
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
