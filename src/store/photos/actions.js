import axios from 'axios';
import { photos } from '../../api';

export const PHOTOS_REQUEST = 'PHOTOS_REQUEST';
export const PHOTOS_SUCCESS = 'PHOTOS_SUCCESS';
export const PHOTOS_FAIL = 'PHOTOS_FAIL';

const fetchPhotos = (albumId) => {  
    return async dispatch => {
      try {
        const data = await axios.get(`${photos}?albumId=${albumId}`);
        dispatch({ type: PHOTOS_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: PHOTOS_FAIL, error });
        return error;
      }
    }
}

export default fetchPhotos;