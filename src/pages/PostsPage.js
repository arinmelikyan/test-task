import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Posts from '../components/Posts';
import fetchPosts from '../store/posts/actions';

const PostsPage = ({ posts, getPosts }) => {
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <ListGroup>
                {posts.length !== 0 && posts.map(post => (
                    <Posts key={post.id} title={post.title} body={post.body} postId={post.id} />
                ))}
            </ListGroup>
        </div>
    )
};

const mapStateToProps = ({ posts }) => {
    return {
        ...posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(fetchPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);