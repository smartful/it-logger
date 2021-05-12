import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

export const getTechs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch('/techs');
      const data = await res.json();
      dispatch({ type: GET_TECHS, payload: data });
    } catch (error) {
      dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
    }
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};