import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Comments = ({ name, email, body }) =>(
    <ListGroup.Item className="comments">
        <h4>{name} | {email}</h4>
        <p>{body}</p>
    </ListGroup.Item>
);

export default Comments;