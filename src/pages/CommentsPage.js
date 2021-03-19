import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Comments from '../components/Comments';

const CommentsPage = ({ comments }) => (
    <div>
        <h1>Comments</h1>
        <ListGroup>
            {comments.length !== 0 && comments.map(comment => (
                <Comments key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
            ))}
        </ListGroup>
    </div>
);

const mapStateToProps = ({ comments }) => {
    return {
        ...comments,
    }
};

export default connect(mapStateToProps)(CommentsPage);