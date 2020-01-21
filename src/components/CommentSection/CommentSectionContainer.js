// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComment] = useState(props.comments);
  return (
    <div>
      {props.comments.map(com => (
        <Comment comment={com} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
