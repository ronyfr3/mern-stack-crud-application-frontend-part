import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "../post/post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((posts) => posts);
  console.log("allpostsfromreducers", posts);
  console.log("allpostsfromreducers", posts.posts.length);

  return !posts.posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className="" container alignItems="stretch" spacing={3}>
      {posts.posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
