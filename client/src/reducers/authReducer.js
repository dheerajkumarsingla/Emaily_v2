import { FETCH_USER } from "../actions/types";

export default function authReducer(state = null, action) {
    switch(action.type) {
        case FETCH_USER:
            // TODO: This should be in BE
            return action.payload || false;
        default:
            return state;
    }
}