"use client"
import React, { useState } from 'react';

const Post = () => {
    const [postContent, setPostContent] = useState('');
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    };

    const handlePost = () => {
        // Perform post creation logic here
        console.log('Post created:', postContent);
    };

    const handleEditPost = () => {
        // Perform post editing logic here
        console.log('Post edited:', postContent);
    };

    const handleDeletePost = () => {
        // Perform post deletion logic here
        console.log('Post deleted');
    };

    const handleLikePost = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        setComments([...comments, commentInput]);
        setCommentInput('');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <textarea
                value={postContent}
                onChange={handlePostContentChange}
                style={{ marginBottom: '10px', width: '100%', height: '100px' }}
            />
            <button onClick={handlePost} style={{ marginRight: '10px' }}>
                Post
            </button>
            <button onClick={handleEditPost} style={{ marginRight: '10px' }}>
                Edit
            </button>
            <button onClick={handleDeletePost} style={{ marginRight: '10px' }}>
                Delete
            </button>
            <button onClick={handleLikePost} style={{ marginRight: '10px' }}>
                Like
            </button>
            <p>Likes: {likes}</p>
            <div>
                <h3>Comments</h3>
                {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
                <input
                    type="text"
                    placeholder="Add a comment"
                    value={commentInput}
                    onChange={(event) => setCommentInput(event.target.value)}
                    style={{ marginBottom: '10px' }}
                />
                <button onClick={handleComment}>Comment</button>
            </div>
        </div>
    );
};

export default Post;
