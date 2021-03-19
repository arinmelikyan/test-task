import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import fetchComments from '../store/comments/actions';

const Posts = ({ title, body, postId, getComments }) => (
    <ListGroup.Item>
        <Link to={`/comments/${postId}`} onClick={() => getComments(postId)}>{title}</Link>
        <p>{body}</p>
    </ListGroup.Item>
);

const mapDispatchToProps = dispatch => {
    return {
        getComments: (id) => dispatch(fetchComments(id))
    }
}

export default connect(null, mapDispatchToProps)(Posts);