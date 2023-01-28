import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const postDetails = useLoaderData();
    return (
        <div className='post-details'>
            <h1>Post Details For ID: {postDetails.id}</h1>
            <h3>post title: {postDetails.title}</h3>
            <p>post body: {postDetails.body}</p>
        </div>
    );
};

export default PostDetails;