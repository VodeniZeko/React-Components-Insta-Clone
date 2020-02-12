import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = props => {
  return (
    <div className="posts-container-wrapper">
      {props.data.map(x => (
        <div>
          <Post className="box" key={x.imageUrl} data={x} />
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
