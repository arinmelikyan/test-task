import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Albums from '../components/Albums';
import fetchAlbums from '../store/albums/actions';

const AlbumsPage = ({ albums, getAlbums }) => {
    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <div>
            <ListGroup>
                {albums.length !== 0 && albums.map(album => (
                    <Albums id={album.id} title={album.title} albumId={album.id} />
                ))}
            </ListGroup>
        </div>
    )
};

const mapStateToProps = ({ albums }) => {
    return { 
        ...albums,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAlbums: () => dispatch(fetchAlbums()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);