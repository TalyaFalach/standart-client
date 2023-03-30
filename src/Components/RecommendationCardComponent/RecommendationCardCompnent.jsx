import { useEffect, useState } from "react";
import { NavDropdown, Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import EditRcommendationComponent from "../EditRcommendationComponent/EditRcommendationComponent";

const RecommendationCardCompnent = ({ post }) => {
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
      style={{ width: "20rem" }}
      className="p-2 fw-lighter shadow bg-dark text-light"
    >
    {editPost ? <EditRcommendationComponent post={post}/>: null}
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
            src={post.userImage}
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
    </Card>
  );
};

export default RecommendationCardCompnent;
