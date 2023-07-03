import * as types from "../../actions/templateAction";

const initialState = {
  loading: false,
  error: { status: false, text: null },
  result: null,
};

export const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case types.SUBMIT_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };

    case types.SUBMIT_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          status: action.payload[0],
          text: action.payload[1],
        },
      };

    default:
      return state;
  }
};
