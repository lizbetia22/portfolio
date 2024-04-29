import React from 'react';

const ModalDelete = ({showDeleteModal, deletePost, setShowDeleteModal, language}) => {

    const deleteModalData = {
        fr: {
            title_1: 'Supprimer l\'article',
            title_2: 'Êtes-vous sûr de vouloir supprimer cet article ?',
            title_3: 'Oui, supprimer',
            title_4: 'Annuler'
        },
        en: {
            title_1: 'Delete post',
            title_2: 'Are you sure you want to delete this post?',
            title_3: 'Yes, delete',
            title_4: 'Cancel'

        }
    };
    const translations = deleteModalData[language];

    return (
       <>
           {/* Modal for deleting post */}
           {showDeleteModal && (
               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                   <div className="dark:bg-dark_3 bg-white p-8 rounded-lg w-1/4">
                       <h2 className="text-xl font-bold mb-4 dark:text-light_3">{translations.title_1}</h2>
                       <p className="mb-4 dark:text-light_3">{translations.title_2}</p>
                       <div className="flex justify-end">
                           <button className="bg-red-700 text-white px-4 py-2 rounded-md mr-2" onClick={deletePost}>{translations.title_3}</button>
                           <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md" onClick={() => setShowDeleteModal(false)}>{translations.title_4}</button>
                       </div>
                   </div>
               </div>
           )}
       </>
    );
};

export default ModalDelete;