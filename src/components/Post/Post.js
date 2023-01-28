import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleToPostDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h2>post title: {title}</h2>
            <p>body: {body}</p>

            <button onClick={handleToPostDetails}>post details2</button>
            <Link to={`/post/${id}`}>
                <button>post detials</button>
            </Link>
            <Link to={`/post/${id}`}>visit id NO: {`${id}`}</Link>

        </div>
    );
};

export default Post;