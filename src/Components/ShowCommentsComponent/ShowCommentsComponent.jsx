import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { getById, getPostComments } from "./../../utils";
import "./ShowCommentsComponent.css";

const ShowCommentsComponent = ({ postId, userId }) => {
  const [comments, setComments] = useState([]);
  const [userComments, setUserComments] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPostComments(postId);
      setComments([...res.data.data]);

      await getById(userId).then((data) =>
        setUserComments({ ...data.data.user })
      );
    };
    fetchData();
  }, []);

  return (
    <>
      {comments.length > 0 ? (
        <ListGroup variant="flush" className="wrapper border">
          {" "}
          {comments.map((comment, index) => {
            return (
              <ListGroup.Item key={index}>
                <div className="d-flex justify-content-start border-2 p-1">
                  {" "}
                  <img
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "90px",
                    }}
                    src={userComments.image}
                    alt="user"
                  />
                  <span className="fw-bolder p-2">{userComments.firstName + " " + userComments.lastName}</span>
                </div>

                <div className="d-flex justify-content-center">
                  {comment.comment}
                </div>
                <div className="d-flex justify-content-center">
                  {comment.date}
                </div>
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
