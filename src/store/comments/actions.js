import axios from 'axios';
import { comments } from '../../api';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAIL = 'COMMENTS_FAIL';

const fetchComments = (postId) => {  
    return async dispatch => {
      try {
        const data = await axios.get(`${comments}?postId=${postId}`);
        dispatch({ type: COMMENTS_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: COMMENTS_FAIL, error });
        return error;
      }
    }
}

export default fetchComments;