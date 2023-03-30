import { useEffect, useState } from "react";
import { Col, NavDropdown, Row, Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
// import CurrentPostComponent from "../CurrentPostCommentsComponent/CurrentPostCommentsComponent";
import DeletePostComponent from "../DeletePostComponent/DeletePostComponent";
import EditRcommendationComponent from "../EditRcommendationComponent/EditRcommendationComponent";
import AddNewCommentComponent from "./../AddNewCommentComponent/AddNewCommentComponent";
import ShowCommentsComponent from "./../ShowCommentsComponent/ShowCommentsComponent";
import CurrentPostComments from "../CurrentPostComponent/CurrentPostComponent";
const imgUrl = "http://localhost:8000";
const RecommendationCardCompnent = ({ post, callback }) => {
  const user = useSelector((state) => state.user);
  const [isUserPost, setIsUserPost] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [deletePost, setDeletePost] = useState(false);

  useEffect(() => {
    if (post.userId === user.userId) {
      setIsUserPost(true);
    }
  }, []);

  return (
    <Card
      style={{ width: "22rem", minHeight: "22rem" }}
      className="p-2 fw-lighter shadow bg-dark text-light"
    >
      {editPost ? <EditRcommendationComponent post={post} /> : null}
      {deletePost ? (
        <DeletePostComponent postId={post._id} path="recommendations" />
      ) : null}
      <Stack direction="horizontal" gap={4}>
        <div className="">{post.date}</div>

        <div className="fw-bold ms-auto">
          {isUserPost ? (
            <NavDropdown
              className="d-flex justify-content-start p-1 h6"
              title="Options"
            >
              <NavDropdown.Item onClick={() => setEditPost(!editPost)}>
                Edit
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setDeletePost(!deletePost)}>
                Delete
              </NavDropdown.Item>
            </NavDropdown>
          ) : null}
        </div>

        <div className=" ms-auto">
          {post.userFirstName + " " + post.userLastName}
        </div>
        <div>
          <img
            src={`${imgUrl}/api/images/${post.userImage}`}
            className="rounded float-end rounded-circle"
            alt="user"
            style={{ maxHeight: "30px" }}
          />
        </div>
        <hr />
      </Stack>
      {post.image !== "" ? <Card.Img variant="top" src={post.image} /> : null}
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>

        <Card.Text>{post.text}</Card.Text>
      </Card.Body>
      <Row>
        <Col>
          <AddNewCommentComponent postId={post._id} />
        </Col>
        <Col>
          <CurrentPostComments postId={post._id} image={post.image} />
        </Col>
      </Row>
    </Card>
  );
};

export default RecommendationCardCompnent;
