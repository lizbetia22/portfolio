import React from 'react';
import {IoIosSave} from "react-icons/io";

const ModalCreate = ({language, editingPost, editedTitle, setEditedTitle, editedBody, setEditedBody, editedTags, setEditedTags, setEditingPost, saveEditedPost}) => {

    const editModalData = {
        fr: {
            title_1: 'Titre',
            title_2: 'Description',
            title_3: 'Tags',
            title_4: 'Sauvegarder',
            title_5: 'Annuler'
        },
        en: {
            title_1: 'Title',
            title_2: 'Description',
            title_3: 'Tags',
            title_4: 'Save',
            title_5: 'Cancel'

        }
    };

    const translations = editModalData[language];

    return (
        <>
            {/* Modal for creating of post */}
            {editingPost && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-dark_3 p-8 rounded-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4 dark:text-light_3">{translations.title_1}</h2>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="dark:bg-dark_5 block w-full border border-gray-400 rounded-md mb-4 px-4 py-2"
                            placeholder="Title"
                        />
                        <h2 className="font-bold mb-4 dark:text-light_3">{translations.title_2}</h2>
                        <textarea
                            value={editedBody}
                            onChange={(e) => setEditedBody(e.target.value)}
                            className="dark:bg-dark_5 block w-full border border-gray-400 rounded-md mb-4 px-4 py-2"
                            placeholder="Body"
                        />
                        <h2 className="font-bold mb-4 dark:text-light_3">{translations.title_3}</h2>
                        <input
                            type="text"
                            value={editedTags}
                            onChange={(e) => setEditedTags(e.target.value)}
                            className="dark:bg-dark_5 block w-full border border-gray-400 rounded-md mb-4 px-4 py-2"
                            placeholder="Tags (comma-separated)"
                        />
                        <div className="flex justify-end">
                            <button className="mr-2 ml-2 flex items-center text-light_7 border border-light_3 px-4 py-2 rounded-md hover:bg-green-300 dark:text-light_3 dark:border-dark_5 dark:hover:bg-dark_4" onClick={saveEditedPost}><IoIosSave/>{translations.title_4}</button>
                            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md" onClick={() => setEditingPost(null)}>{translations.title_5}</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalCreate;