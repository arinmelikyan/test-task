import { PHOTOS_SUCCESS, PHOTOS_FAIL } from './actions';

const initialState = {
    photos: [],
};

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload.data
            }

        case PHOTOS_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default photosReducer;