/*
 * 2. we got reducer hooked up to watch for the fetch post action
 */

import _ from 'lodash';
// fetch post from the actions
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
