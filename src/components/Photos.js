import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Photos = ({ title, url }) => (
    <div style={{margin: '20px'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
             </Card.Body>   
        </Card>
    </div>
);

export default Photos;