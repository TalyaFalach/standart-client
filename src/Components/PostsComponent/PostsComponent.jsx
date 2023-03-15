import { useEffect, useState } from "react";
//talyafalach@gmail.com

import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
const PostsComponent = ({ post }) => {
  const user = useSelector((state) => state.user);
  const [userPost, setUserPost] = useState(false);
  useEffect(() => {
    if (user.userId === post.userId) {
      setUserPost(true);
    }
  }, []);

  return (
    <div className="card shadow mt-3 mb-3 m-5">
      {console.log("----", post)}
      <Row>
        {post.image !== "" ? (
          <Col sm={6}>
            <img
              className="card-img-top m-3"
              src={post.image}
              alt="Card  cap"
              style={{ height: "200px" }}
            />
          </Col>
        ) : null}
        <Col>
          {" "}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{post.post}</p>
            <p className="card-text">
              <div>
                {userPost ? (
                  <>
                    <Button variant="outline-primary">Edit Post</Button>{" "}
                    <Button variant="outline-danger">Delete</Button>
                  </>
                ) : null}
              </div>
              <small className="text-muted">{post.date}</small>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostsComponent;
