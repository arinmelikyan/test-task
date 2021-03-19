import axios from 'axios';
import { albums } from '../../api';

export const ALBUMS_REQUEST = 'ALBUMS_REQUEST';
export const ALBUMS_SUCCESS = 'ALBUMS_SUCCESS';
export const ALBUMS_FAIL = 'ALBUMS_FAIL';

const fetchAlbums = () => {  
    return async dispatch => {
      try {
        const data = await axios.get(albums);
        dispatch({ type: ALBUMS_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: ALBUMS_FAIL, error });
        return error;
      }
    }
}

export default fetchAlbums;