import Axios from 'axios';
import { API_URL } from '../config';
/* selectors */
export const getAll = ({posts}) => posts.data;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const LOAD_POSTS = createActionName('LOAD_POSTS');
const ADD_POST = createActionName('ADD_POST');
const UPDATE_POST = createActionName('UPDATE_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const addPost = payload => ({ payload, type: ADD_POST });
export const updatePost = payload => ({ payload, type: UPDATE_POST });

/* thunk creators */
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(fetchStarted);

    try {
      let res = await Axios.get(`${API_URL}/posts`);
      dispatch(fetchSuccess(res.data));
    }
    catch(err) {
      dispatch(fetchError(err.message || true));
    }
  };
};
/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.posts.data, {...action.data} ],
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case UPDATE_POST: {
      return {
        ...statePart,
        data: statePart.posts.map(post => post.id === action.payload.id ? {...post} : post ),
        loading: {
          active: false,
          error: false,
        },
      };
    }
    default:
      return statePart;
  }
};
