import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LikeIconComponent from "../../Icons/LikeComponent/LikeComponent";
import {
  createNewComment,
  getTodayDate,
  successToast,
  errorToast,
} from "./../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowCommentsComponent from "../ShowCommentsComponent/ShowCommentsComponent";

const CommentsComponent = ({ prod ,path}) => {
  const user = useSelector((state) => state.user);
  const [isLike, setIsLike] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleNewComment = async () => {
    const obj = {
      userId: user.userId,
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userImage: user.image,
      comment: newComment,
      postId: prod._id,
      date: getTodayDate(),
    };
    await createNewComment(obj)
      .then(() => successToast(toast, "Your Comment has been added"))
      .then(() => setNewComment(""))
      .catch(() => errorToast(toast, "Pleast try again"));
  };

  return (
    <div>
      <hr />
      <Row>
        <Col sm={3}>
          <LikeIconComponent
            post={prod}
            postId={prod._id}
            path={path}
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
        className="fw-bolder text-primary animated flash m-4"
      >
        Show All Comments
      </div>
      {showComments ? <ShowCommentsComponent postId={prod._id} /> : null}
    </div>
  );
};

export default CommentsComponent;
