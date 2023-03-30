import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { editPost, successToast, errorToast } from "./../../utils";

const EditRcommendationComponent = ({ post }) => {
  const [updatedPost, setUpdatedPost] = useState({ ...post });

 
  const [show, setShow] = useState(true);
  const handleCancel = () => {
    setShow(!show);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editPost("recommendations", post._id, updatedPost)
      .then(() => successToast(toast, "Updated!"))
      .then(() => setShow(!show))

      .catch(() => errorToast(toast, "Please try again"));
  };
  return (
    <form onSubmit={handleSubmit} className="p-1">
      <Alert show={show} variant="">
        <span
          onClick={handleCancel}
          className="d-flex justify-content-end fw-bold"
          style={{ cursor: "pointer" }}
        >
          X
        </span>
        <h5 className="fw-lighter">Edit Your Post</h5>
        <Form.Control
          onChange={(e) =>
            setUpdatedPost({ ...updatedPost, title: e.target.value })
          }
          className="w-100 mx-auto"
          required
          defaultValue={post.title}
        ></Form.Control>
        <textarea
          className="w-100 mx-auto"
          onChange={(e) =>
            setUpdatedPost({ ...updatedPost, text: e.target.value })
          }
          required
          style={{
            whiteSpace: "pre-wrap",

            height: "100px",
            resize: "none",
          }}
          defaultValue={post.text}
        />
        <br />
        <Button type="submit" className="btn btn-success w-100">
          Update
        </Button>
      </Alert>
    </form>
  );
};

export default EditRcommendationComponent;
