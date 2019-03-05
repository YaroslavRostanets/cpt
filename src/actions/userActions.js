import { API } from '../constants';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_IS_LOGGED = 'USER_IS_LOGGED';

export function handleLogin(user, getCurrentUser, redirect) {

  return dispatch => {
    
    dispatch({
      type: LOGIN_REQUEST
    });
    fetch(API.LOGIN, {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((data) => {
      if(data.status === 'OK') {
        dispatch({
          type: LOGIN_SUCCESS
        });
        getCurrentUser(redirect);
      } else {
         dispatch({
          type: LOGIN_FAIL,
          payload: data.result
        });
      }
    })

  }
}

export function getCurrentUser(redirect) {

  return dispatch => {

  fetch(API.GET_CURRENT_USER,{
    method: 'post',
    credentials: 'include'
  })
  .then(res => res.json())
  .then((result) => {
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: result.data
      })
      redirect();
    },
      (error) => {
          
      }
    )

  }

}

export function checkUser(getCurrentUser, redirect) {

  return dispatch => {

  fetch(API.CHECK_USER,{
    method: 'get',
    credentials: 'include'
  })
  .then(res => res.json())
  .then((result) => {    
      if(result.result === true) {
        dispatch({
          type: USER_IS_LOGGED
        })
        getCurrentUser(redirect);
      }
    }
    )

  }

}

export function handleLogout(redirect) {
  return dispatch => {

  fetch(API.LOGOUT,{
    method: 'post',
    credentials: 'include'
  })
  .then(res => res.json())
  .then((result) => {

    dispatch({
      type: USER_LOGOUT
    })
      redirect();
    })

  }

}