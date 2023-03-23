import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShowCommentsComponent from "../ShowCommentsComponent/ShowCommentsComponent";
const CurrentFullPostComponent = ({ image, post }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{cursor:'pointer'}} className="lead shadow h-50" onClick={handleShow}>
        {" "}
        Click to read full post
      </div>
      
      <hr />
      <div className="w-75 bg-dark">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{post.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <p className="fw-lighter" style={{ whiteSpace: "pre-wrap" }}>
                  {post.text}
                </p>
                <Card.Text>
                  <ShowCommentsComponent postId={post._id} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CurrentFullPostComponent;
