import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LikeIconComponent from "../../Icons/LikeComponent/LikeComponent";
import { createNewComment, getTodayDate } from "./../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowCommentsComponent from "../ShowCommentsComponent/ShowCommentsComponent";

const CommentsComponent = ({ prod }) => {
  const user = useSelector((state) => state.user);
  const [isLike, setIsLike] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleNewComment = async () => {
    const obj = {
      userId: user.userId,
      comment: newComment,
      postId: prod._id,
      date: getTodayDate(),
    };
    await createNewComment(obj)
      .then(() => {
        toast.success("Your comment has been added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(() => {
        toast.error("Oops, please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <hr />
      <Row>
        <Col sm={3}>
          <LikeIconComponent
           
            onClick={() => setIsLike(!isLike)}
          />
        </Col>
        <Col sm={6}>
          <input
            style={{ border: "0.5px solid grey" }}
            type="text"
            placeholder="Write a comment..."
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Col>
        <Col sm={2}>
          <input
            className="btn btn-light border-dark"
            value="Send"
            onClick={handleNewComment}
          />
        </Col>
      </Row>
      <hr />
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowComments(!showComments)}
        className="fw-bolder text-primary animated flash"
      >
        Show All Comments
      </div>
      {showComments ? (
        <ShowCommentsComponent userId={prod.userId} postId={prod._id} />
      ) : null}
    </div>
  );
};

export default CommentsComponent;
