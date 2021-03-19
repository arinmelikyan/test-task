import { combineReducers } from 'redux';
import albums from './albums/reducer';
import posts from './posts/reducer';
import photos from './photos/reducer';
import comments from './comments/reducer';

export default combineReducers({
    albums,
    posts,
    photos,
    comments,
});