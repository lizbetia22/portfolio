import React from 'react';
import { IoIosSave } from "react-icons/io";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";

const ModalCreate = ({ language, showCreateModal, setShowCreateModal, newPostTitle, setNewPostTitle, newPostBody, setNewPostBody, newPostTags, setNewPostTags, saveNewPost }) => {

    const createModalData = {
        fr: {
            title_1: 'Créer un nouveau post',
            title_2: 'Titre',
            title_3: 'Description',
            title_4: 'Tags',
            title_5: 'Sauvegarder',
            title_6: 'Annuler'
        },
        en: {
            title_1: 'Create a new post',
            title_2: 'Title',
            title_3: 'Description',
            title_4: 'Tags',
            title_5: 'Save',
            title_6: 'Cancel'

        }
    };

    const translations = createModalData[language];

    return (
        <>
            {/* Modal for creating new post */}
            {showCreateModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-dark_3 p-8 rounded-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4 dark:text-light_3 flex items-center">
                            <BsFillFileEarmarkPostFill className="mr-2"/>
                            {translations.title_1}
                        </h2>

                        <input
                            type="text"
                            value={newPostTitle}
                            onChange={(e) => setNewPostTitle(e.target.value)}
                            className="dark:bg-dark_3 block w-full border border-gray-400 rounded-md mb-4 px-4 py-2"
                            placeholder={translations.title_2}
                        />
                        <textarea
                            value={newPostBody}
                            onChange={(e) => setNewPostBody(e.target.value)}
                            className="dark:bg-dark_3 block w-full border border-gray-400 rounded-md mb-4 px-4 py-2"
                            placeholder={translations.title_3}
                        />
                        <input
                            type="text"
                            value={newPostTags}
                            onChange={(e) => setNewPostTags(e.target.value)}
                            className="dark:bg-dark_3 block w-full border border-gray-400 rounded-md mb-4 px-4 py-2"
                            placeholder={translations.title_4}
                        />
                        <div className="flex justify-end">
                            <button
                                className="mr-2 ml-2 flex items-center text-light_7 border border-light_3 px-4 py-2 rounded-md hover:bg-green-300 dark:text-light_3 dark:border-dark_5 dark:hover:bg-dark_4"
                                onClick={saveNewPost}
                            >
                                <IoIosSave />
                                {translations.title_5}
                            </button>
                            <button
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
                                onClick={() => setShowCreateModal(false)}
                            >
                                {translations.title_6}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalCreate;
