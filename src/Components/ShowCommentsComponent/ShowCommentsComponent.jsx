import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { getById, getPostComments } from "./../../utils";
import "./ShowCommentsComponent.css";

const ShowCommentsComponent = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [userComments, setUserComments] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPostComments(postId);
      setComments([...res.data.data]);
console.log(postId);
      console.log("comments", res.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
    <hr/>
      {comments.length > 0 ? (
        <ListGroup variant="flush" className="wrapper border-danger bg-light">
          {" "}
          {comments.map((comment, index) => {
            return (
              <ListGroup.Item key={index}>
                <div className="d-flex justify-content-start">
                  {" "}
                  <img
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "90px",
                    }}
                    src={comment.userImage}
                    alt="user"
                  />
                  <span className="fw-bolder p-2">
                    {comment.userFirstName + " " + comment.userLastName}
                  </span>
                </div>
                <hr />

                <div className="d-flex justify-content-center">
                  {comment.comment}
                </div>
                
                <hr />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <h6 className="bg-light p-4"> No Comments Yet</h6>
      )}
    </>
  );
};

export default ShowCommentsComponent;
