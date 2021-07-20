import { isAuth } from '../Utils/userAuth';

const SET_USERS = 'SET_USERS';
const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';


let initialState = {
  users: [],
  user: {
    id: null,
    login: null,
    email: null,
    permission: null
  },
  isAuth: false
}

const authreducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: { ...action.users }
      }
    }
    case SET_USER_DATA: {
      let response = isAuth(state.users, action.user);

      if (response.resultCode === 0) {
        return {
          ...state,
          user: response.user,
          isAuth: true
        }
      }
      return {
        ...state
      }
    }
    case LOGOUT: {
      return {
        ...state,
        user: {
          id: null,
          login: null,
          email: null,
          permission: null
        },
        isAuth: false
      }
    }
    default: 
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  users
});

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  user
});

export const logout = () => ({
  type: LOGOUT
})

export default authreducer;