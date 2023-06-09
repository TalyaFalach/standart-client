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
    if (user.userId === "" || user.firstName === "" || user.lastName === "" ) {
      return errorToast(toast, "You are not logged in");
    }else if(newComment===""){
      return errorToast(toast, "Can not send an empty comment");
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
        className="mb-3"
      />{" "}
      {user.userId !== "" ? (
        <button className="btn-success btn" onClick={handleNewComment}>
          Send
        </button>
      ) : (
        <div>
          <span className="text-danger">
            You will not be able to comment if you are not logged in{" "}
          </span> <br/>
          <button
            disabled
            className="btn-success btn"
            onClick={handleNewComment}
          >
            Send
          </button>
        </div>
      )}
    </>
  );
};

export default AddNewCommentComponent;
