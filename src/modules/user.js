export const LOAD_DATA_SUCCESS = 'user/LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILURE = 'user/LOAD_DATA_FAILURE';

const initialState = {
  user_list: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
   case LOAD_DATA_SUCCESS:
      return {
        ...state,
        user_list: action.data.results
      };

   case LOAD_DATA_FAILURE:
      return {
        ...state,
        user_list: null
      };

    default:
      return state;
  }
};

export const loadData = (dispatch) => {
  return fetch(`https://randomuser.me/api/`)
  .then(res => res.json())
    .then(
      data => dispatch({ type: LOAD_DATA_SUCCESS, data}),
      err => dispatch({ type: LOAD_DATA_FAILURE, err })
    );
}