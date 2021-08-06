/*
 * 2. we got reducer hooked up to watch for the fetch post action
 */

import _ from 'lodash';
// fetch post from the actions
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data; // ES5
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data }; // ES6
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
