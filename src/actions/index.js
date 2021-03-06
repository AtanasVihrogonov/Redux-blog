/*
 * 1. Now we got our fetchPosts action creator put pogether in our actions file
 */

// make the API request
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

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
export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request,
  };
}

// Fetch specific post
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts${id}${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

// Delete Post
export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id,
  };
}
