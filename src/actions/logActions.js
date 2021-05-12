import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  SEARCH_LOGS,
  CLEAR_CURRENT,
  SET_LOADING,
  LOGS_ERROR
} from './types';

export const getLogs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch('/logs');
      const data = await res.json();
      dispatch({ type: GET_LOGS, payload: data });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
    }
  }
};

export const addLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      dispatch({ type: ADD_LOG, payload: data });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
    }
  }
};

export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      setLoading();
      await fetch(`/logs/${id}`, {
        method: 'DELETE'
      });
      dispatch({ type: DELETE_LOG, payload: id });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
    }
  }
};

export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`/logs/${log.id}`, {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      dispatch({ type: UPDATE_LOG, payload: data });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
    }
  }
};

export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();
      dispatch({ type: SEARCH_LOGS, payload: data });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
    }
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};