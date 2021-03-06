import axios from 'axios'
import { FETCH_USER } from './types';

const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/currentUser")
    dispatch({type: FETCH_USER, payload: res.data});
}


export {
    fetchUser
}