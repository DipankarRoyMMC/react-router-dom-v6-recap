import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    return (
        <div className='post-details'>
            <h1>Post Details For ID: {id}</h1>
            <h3>post title: {title}</h3>
            <p>post body: {body}</p>
        </div>
    );
};

export default PostDetails;