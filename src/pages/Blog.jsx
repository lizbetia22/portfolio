import React, { useEffect, useState } from 'react';
import { FaComment, FaTrash } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import ModalDelete from "../components/ModalDelete";
import ModalEdit from "../components/ModalEdit";
import { IoCreate } from "react-icons/io5";
import ModalCreate from "../components/ModalCreate";

function Blog({language}) {
    const [posts, setPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [comments, setComments] = useState({});
    const [showComments, setShowComments] = useState({});
    const [editingPost, setEditingPost] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedBody, setEditedBody] = useState('');
    const [editedTags, setEditedTags] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');
    const [newPostTags, setNewPostTags] = useState('');

    const blogData = {
        fr: {
            button_edit: 'Modifier l\'article',
            button_delete: 'Supprimer l\'article',
            button_comments: 'Commentaires',
            button_create: 'Créer un poste',
            title_comments: 'Commentaires: ',
            reactions: 'Réactions',
            title_1: 'Articles',
            title_2: 'Vous pouvez y découvrir de nouveaux articles'
        },
        en: {
            button_edit: 'Modify post',
            button_delete: 'Delete post',
            button_comments: 'Comments',
            button_create: 'Create post',
            title_comments: 'Comments: ',
            reactions: 'Reactions',
            title_1: 'Blog',
            title_2: 'Here you can discover new posts'
        }
    };


    useEffect(() => {
        setIsVisible(true);
    }, []);

    /**
     * @description get  primary data from api
     */
    useEffect(() => {
        fetch("https://dummyjson.com/posts", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.posts.slice(0, 10));
            })
            .catch((error) => console.log(error));
    }, []);

    /**
     *
     * @param id
     * @returns {Promise<void>}
     * @description getting comments for posts
     */
    async function showCommentsForPost(id) {
        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then(res => res.json())
            .then((data) => {
                setComments((prevComments) => ({
                    ...prevComments,
                    [id]: data.comments,
                }));
            });
    }

    const toggleComments = (postId) => {
        setShowComments(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
        showCommentsForPost(postId);
    };

    const openEditModal = (post) => {
        setEditingPost(post);
        setEditedTitle(post.title);
        setEditedBody(post.body);
        setEditedTags(post.tags.join(', '));
    };

    const incrementReactions = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, reactions: post.reactions + 1 };
            } else {
                return post;
            }
        });
        setPosts(updatedPosts);
    };

    const decrementReactions = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId && post.reactions > 0) {
                return { ...post, reactions: post.reactions - 1 };
            } else {
                return post;
            }
        });
        setPosts(updatedPosts);
    };

    /**
     * @description creating of new post
     */
    const saveNewPost = () => {
        const newPost = {
            id: Math.random().toString(36).substr(2, 9),
            title: newPostTitle,
            body: newPostBody,
            tags: newPostTags.split(',').map(tag => tag.trim()),
            reactions: 0
        };
        setPosts([...posts, newPost]);
        setShowCreateModal(false);
        setNewPostTitle('');
        setNewPostBody('');
        setNewPostTags('');
    };

    /**
     * @description deleting of post
     */
    const deletePost = () => {
        const updatedPosts = posts.filter(post => post.id !== postToDelete.id);
        setPosts(updatedPosts);
        setPostToDelete(null);
        setShowDeleteModal(false);
    };

    /**
     * @description editing of post
     */
    const saveEditedPost = () => {
        const updatedPosts = posts.map(post => {
            if (post.id === editingPost.id) {
                return { ...post, title: editedTitle, body: editedBody, tags: editedTags.split(',').map(tag => tag.trim()) }; // Convert string back to array
            } else {
                return post;
            }
        });
        setPosts(updatedPosts);
        setEditingPost(null);
    };
    const translations = blogData[language];
    return (
        <>
            <div className={`mt-5 mb-10 ${isVisible ? 'fade-in' : ''}`}>
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl dark:text-dark_5 font-bold tracking-tighter sm:text-5xl">{translations.title_1}</h2>
                    <p className="dark:text-light_4 text-light_6 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                        {translations.title_2}
                    </p>
                    <button
                        className="float-end mr-3 ml-2 flex items-center text-light_7 border border-light_3 px-4 py-2 rounded-md hover:bg-light_2 dark:text-light_3 dark:border-dark_5 dark:hover:bg-dark_4"
                        onClick={() => setShowCreateModal(true)}>
                        <IoCreate className="w-6 h-6 mr-2" />
                        {translations.button_create}
                    </button>
                </div>
                <div className="mr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16  ml-12">
                    {posts.length === 0 ?
                        <>
                            <div className="h-screen w-screen flex items-center justify-center"></div>
                        </>
                        :
                        <>
                            {posts.map(post => (
                                <div key={post.id} className="bg-light_1 dark:bg-dark_3 rounded-lg shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold mb-2 dark:text-dark_5">{post.title}</h2>
                                        <p className="text-gray-600 dark:text-light_1 mb-4">{post.body}</p>
                                        <div className="flex items-center mb-4">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-2">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">  {translations.reactions}: {post.reactions}</span>
                                        </div>
                                    </div>
                                    {/* Show comments */}
                                    {showComments[post.id] && comments[post.id] && (
                                        <div className="p-4  dark:bg-dark_3 mt-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-2 dark:text-light_3">{translations.title_comments}</h3>
                                            {comments[post.id].map(comment => (
                                                <div key={comment.id} className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-gray-300 dark:bg-dark_4 rounded-full flex items-center justify-center mr-2">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{comment.user.username.charAt(0)}</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium dark:text-light_3">{comment.user.username}</p>
                                                        <p className="text-sm dark:text-light_3">{comment.body}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="p-4  dark:bg-dark_3 mt-4 rounded-lg">
                                        <div className="flex items-center">
                                            <button className="text-light_5 dark:text-light_4 hover:text-light_6 dark:hover:text-dark_5 mr-2" onClick={() => incrementReactions(post.id)}>
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
                                            <button className="text-light_5 dark:text-light_4 hover:text-light_6 dark:hover:text-dark_5  mr-2" onClick={() => decrementReactions(post.id)}>
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
                                            <button
                                                className="flex items-center text-light_7 border border-light_3 px-4 py-2 rounded-md hover:bg-light_2 dark:text-light_3 dark:border-dark_5 dark:hover:bg-dark_4"
                                                onClick={() => toggleComments(post.id)}>
                                                <FaComment className="w-4 h-4 mr-2"/>
                                                {translations.button_comments}
                                            </button>
                                            <button
                                                className="ml-2 flex items-center text-light_7 border border-light_3 px-4 py-2 rounded-md hover:bg-light_2 dark:text-light_3 dark:border-dark_5 dark:hover:bg-dark_4"
                                                onClick={() => openEditModal(post)}>
                                                <IoSettings className="w-4 h-4 mr-2"/>
                                                {translations.button_edit}
                                            </button>
                                            <button
                                                className="ml-2 flex items-center text-red-700 border border-red-700 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white"
                                                onClick={() => {
                                                    setPostToDelete(post);
                                                    setShowDeleteModal(true);
                                                }}
                                            >
                                                <FaTrash className="w-4 h-4 mr-2"/>
                                                {translations.button_delete}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>
            {/*Modal for create post*/}
            <ModalCreate
                language={language}
                showCreateModal={showCreateModal}
                setShowCreateModal={setShowCreateModal}
                newPostTitle={newPostTitle}
                setNewPostTitle={setNewPostTitle}
                newPostBody={newPostBody}
                setNewPostBody={setNewPostBody}
                newPostTags={newPostTags}
                setNewPostTags={setNewPostTags}
                saveNewPost={saveNewPost}
            />
            {/* Modal for edit post */}
            <ModalEdit language={language}
                       editingPost={editingPost}
                       editedTitle={editedTitle}
                       setEditedTitle={setEditedTitle}
                       editedBody={editedBody}
                       setEditedBody={setEditedBody}
                       editedTags={editedTags}
                       setEditedTags={setEditedTags}
                       setEditingPost={setEditingPost}
                       saveEditedPost={saveEditedPost}/>
            {/* Modal for delete post */}
            <ModalDelete language={language}
                         showDeleteModal={showDeleteModal}
                         setShowDeleteModal={setShowDeleteModal}
                         deletePost={deletePost}/>
        </>
    );
}

export default Blog;
