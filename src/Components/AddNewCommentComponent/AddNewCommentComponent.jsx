import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createNewComment,
  successToast,
  getTodayDate,
  errorToast,
} from "./../../utils";

const AddNewCommentComponent = ({ postId }) => {
  const user = useSelector((state) => state.user);
  const [newComment, setNewComment] = useState("");

  const handleNewComment = async () => {
    if (user.userId === "" || user.firstName === "" || user.lastName === "" ||newComment==="") {
      return errorToast(toast, "You are not logged in");
    }
    const obj = {
      userId: user.userId,
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userImage: user.image,
      comment: newComment,
      postId: postId,
      date: getTodayDate(),
    };
    await createNewComment(obj)
      .then(() => successToast(toast, "Comment Created"))
      .catch(() => errorToast(toast, "please try again"));
  };
  return (
    <>
      <input
        placeholder="Add Comment"
        onChange={(e) => setNewComment(e.target.value)}
      />{" "}
      <button className="btn-light btn" onClick={handleNewComment}>
        Send
      </button>
    </>
  );
};

export default AddNewCommentComponent;
