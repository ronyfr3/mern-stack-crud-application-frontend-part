import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../../api/index'

//action creator ...its a function which hold dispatch an action which has type and payload

export const getPosts=()=>async (dispatch)=>{
    try {
        //from api we get response and reposne hold the data ...so destructuring the data
        const {data} = await api.fetchPosts()
        dispatch({
            type:FETCH_ALL,
            payload:data
        })
        console.log('allpostdata:',data)
    } catch (error) {
        console.log(error.message)
    }
}
export const createPost=(post)=>async (dispatch)=>{
    try {
         //sending a post into backend
        const {data} = await api.createPost(post)
        dispatch({
            type:CREATE,
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };