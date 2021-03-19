import { POSTS_SUCCESS, POSTS_FAIL } from './actions';

const initialState = {
    posts: [],
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload.data
            }

        case POSTS_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default postsReducer;