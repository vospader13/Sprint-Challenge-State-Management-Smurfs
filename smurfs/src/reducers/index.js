import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,

} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                fetchingSmurfs: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                error: null,
                fetchingSmurfs: false,
                smurfs: action.payload
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }

        case ADD_SMURF_START:
            return {
                ...state,
                fetchingSmurfs: true
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                fetchingSmurfs: true
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                deletingSmurfs: true,
                fetchingSmurfs: false,
                smurfs: action.payload
            }
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }





        default:
            return state;

    }
}

export default smurfsReducer