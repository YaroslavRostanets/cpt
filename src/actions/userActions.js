import { API } from '../API';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function handleLogin(user, redirect) {

  return dispatch => {
    
    dispatch({
      type: LOGIN_REQUEST
    });

    API.signIn(user);

    API.signIn(user)
    .then((response)=>{
      if( response.status === 'success' ){
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.user
        });
        redirect();
      } else {
        console.error(response.error.description);
        dispatch({
          type: LOGIN_FAIL
        });
      }
      
    });
    

  }
}