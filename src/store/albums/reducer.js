import { ALBUMS_SUCCESS, ALBUMS_FAIL } from './actions';

const initialState = {
    albums: [],
};

const albumsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.payload.data
            }

        case ALBUMS_FAIL:
            return {
                ...state,
                error: action.error
            }
            
        default: 
            return state;   
    }
};

export default albumsReducer;