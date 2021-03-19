import axios from 'axios';
import { posts } from '../../api';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAIL = 'POSTS_FAIL';

const fetchPosts = (albumId) => {  
    return async dispatch => {
      try {
        const data = await axios.get(posts);
        dispatch({ type: POSTS_SUCCESS, payload: data });
        return data;
      } catch (error) {
        dispatch({ type: POSTS_FAIL, error });
        return error;
      }
    }
}

export default fetchPosts;