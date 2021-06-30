/*
 * 1. Now we got our fetchPosts action creator put pogether in our actions file
 */

// make the API request
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=somethingunique001';

// Fetch list of posts and returned htem to the reducer
export function fetchPosts() {
  // generate new request
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

// Create post
export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return {
    type: CREATE_POST,
    payload: request,
  };
}
