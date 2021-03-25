
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const postreducer= (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
      case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default postreducer
















// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
// //reducer function
// //this will export into reducers/index file
// const reducer = (posts = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       //action.payload is actual data from db 
//       //...first when we dispatch(getPosts) an action go to actions/posts file then get data from backend
//       //put data to payload:data and type:"FTECH_ALL" this data come here as action.payload
//       return action.payload;
//     case CREATE:
//       //form postData first come here then those data is action.payload
//       return [...posts,action.payload];
//     case LIKE:
//       return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
//     case UPDATE:
//       return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
//     case DELETE:
//       return posts.filter((post) => post._id !== action.payload);
//     default:
//       return posts;
//   }
// };
// export default reducer;
