import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { editPost, successToast, errorToast } from "./../../utils";

const EditRcommendationComponent = ({ post }) => {
  const [updatedPost, setUpdatedPost] = useState({ ...post });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default EditRcommendationComponent;
