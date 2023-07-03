import { fetchResult } from "../../api/api";

export const SUBMIT_LOADING = "SUBMIT_LOADING";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_ERROR = "SUBMIT_ERROR";

/*ACTION CREATORS*/
export function setLoading(data = false) {
  return {
    type: SUBMIT_LOADING,
    payload: data,
  };
}

export function setResult(data = null) {
  return {
    type: SUBMIT_SUCCESS,
    payload: data,
  };
}

export function setError(status = false, data = null) {
  return {
    type: SUBMIT_ERROR,
    payload: [status, data],
  };
}

export const getResult = () => {
  return (dispatch) => {
    try {
      dispatch(setError());
      dispatch(setResult());
      dispatch(setLoading(true));

      return fetchResult()
        .then(
          (res) => {
            dispatch(setLoading());
            dispatch(setError());
            dispatch(setResult(res));
          },
          (rej) => {
            dispatch(setLoading());
            dispatch(setError(true, rej));
          }
        )
        .catch((e) => dispatch(setError(true, e.message)));
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
};
