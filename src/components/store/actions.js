import { SET_KEY, SET_USERS, SET_MODE } from './constan';

export const setKey = payload => ({
  type: SET_KEY,
  payload,
});

export const setUsers = payload => ({
  type: SET_USERS,
  payload,
});

export const setMode = payload => ({
  type: SET_MODE,
  payload,
});