export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

export function handleLogin(user, getCurrentUser, redirect) {

  return dispatch => {
    
    dispatch({
      type: LOGIN_REQUEST
    });
    fetch('http://94.45.133.173:8000/login/', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((data) => {
      if(data.status === 'OK') {
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

  fetch("http://94.45.133.173:8000/get-current-user",{
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

export function handleLogout(redirect) {
  console.log(redirect);
  return dispatch => {

  fetch("http://94.45.133.173:8000/logout/",{
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