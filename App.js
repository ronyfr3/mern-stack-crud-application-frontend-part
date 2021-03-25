import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";

import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import { getPosts } from "./redux/actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
