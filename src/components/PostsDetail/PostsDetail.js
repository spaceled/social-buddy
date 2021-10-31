import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostsDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h3>This is Posts Detail: {id}</h3>
            <p>User posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostsDetail;