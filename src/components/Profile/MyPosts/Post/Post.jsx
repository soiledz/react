import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="images/avatar.jpg" alt="avatar"/>
      {props.message}
      <div>
        <span>Like </span> {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
