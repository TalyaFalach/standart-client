import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShowCommentsComponent from "../ShowCommentsComponent/ShowCommentsComponent";
import { getPostComments } from "../../utils";

const CurrentPostComponent = ({ postId, image }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-light fw-bold h-50" onClick={handleShow}>
        Show Comments
      </Button>
      <hr />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ShowCommentsComponent postId={postId} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CurrentPostComponent;
