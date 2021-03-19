import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Photos from '../components/Photos';

const PhotosPage = ({ photos }) => (
    <div>
        <Row>
            {photos.length !== 0 && photos.map(photo => (
                <Photos key={photo.id} url={photo.url} title={photo.title} />
            ))}
        </Row>
    </div>
);

const mapStateToProps = ({ photos }) => {
    return {
        ...photos,
    }
};

export default connect(mapStateToProps)(PhotosPage);