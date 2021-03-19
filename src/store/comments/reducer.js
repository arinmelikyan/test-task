import { COMMENTS_SUCCESS, COMMENTS_FAIL } from './actions';

const initialState = {
    comments: [],
};

const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload.data
            }

        case COMMENTS_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default commentsReducer;