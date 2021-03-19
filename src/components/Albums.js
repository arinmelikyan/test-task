import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import fetchPhotos from '../store/photos/actions';

const Albums = ({ title, albumId, getPhotos }) => (
    <ListGroup.Item className="albums">
        <Link to={`/photos/${albumId}`} onClick={() => getPhotos(albumId)}>{title}</Link>
    </ListGroup.Item>
)

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: (id) => dispatch(fetchPhotos(id))
    }
}

export default connect(null, mapDispatchToProps)(Albums);