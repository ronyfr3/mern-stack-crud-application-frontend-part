import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../redux/actions/posts";
import "./Form.css";

//dispatching action it will go to reducer/posts then save the data to action.payload

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tag: "",
    selectedFile: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
      handleClear();
    } else {
      dispatch(updatePost(currentId, postData));
      handleClear();
    }
  };
  const handleClear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tag: "",
      selectedFile: "",
    });
  };
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  console.log(postData)
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Creator</label>
          <input
            type="text"
            onChange={handleChange}
            name="creator"
            value={postData.creator}
          />

          <label>Title</label>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={postData.title}
          />

          <label>Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            value={postData.message}
          ></textarea>

          <label>Tag</label>
          <input
            type="text"
            onChange={handleChange}
            name="tag"
            value={postData.tag}
          />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({
                ...postData,
                selectedFile: base64,
              })
            }
          />

          <button
            disabled={
              postData.creator === "" ||
              postData.tag === "" ||
              postData.message === "" ||
              postData.selectedFile === "" ||
              postData.title === ""
            }
          >
            SUBMIT
          </button>
          <input type="button" value="clear" onClick={handleClear} />
        </form>
      </div>
    </div>
  );
};

export default Form;
