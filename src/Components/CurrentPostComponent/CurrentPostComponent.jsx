import React, { useState, useEffect } from "react";
import { Badge, ListGroup, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShowCommentsComponent from "../ShowCommentsComponent/ShowCommentsComponent";
import { getPostComments } from "../../utils";
const imgUrl = "http://localhost:8000/api/images";
const CurrentPostComments = ({ postId, image }) => {
  const [show, setShow] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      await getPostComments(postId).then((data) =>
        setAllComments([...data.data.data])
      );
    };
    fetchData();
    console.log("image", allComments);
  }, []);

  return (
    <>
      <Button className="btn-light lead h-50" onClick={handleShow}>
        Show Comments
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {image !== "" ? (
            <img
              className="w-100 h-75"
              src={`http://localhost:8000/api/images/${image}`}
              alt="post"
            />
          ) : null}
        </Modal.Body>
        <ShowCommentsComponent postId={postId} />
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default CurrentPostComments;
