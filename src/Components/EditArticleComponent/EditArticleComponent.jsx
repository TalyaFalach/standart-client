import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { editPost, successToast, errorToast } from "./../../utils";

const EditArticleComponent = ({ article }) => {
  const [show, setShow] = useState(true);
  const handleCancel = () => {
    setShow(!show);
  };
  const [editArticle, setEditArticle] = useState({ ...article });
  useEffect(() => {
    console.log(article);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =await editPost("articles", article._id,editArticle)
    .then(() =>successToast(toast, "Updated!")
    .catch(() => errorToast(toast, "try again!"))
    );
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <Alert show={show} variant="">
        <span
          onClick={handleCancel}
          className="d-flex justify-content-end fw-bold"
          style={{ cursor: "pointer" }}
        >
          X
        </span>
        <h5>Edit Your Post Here</h5>

        <input
          type="text"
          defaultValue={article.title}
          onChange={(e) =>
            setEditArticle({ ...editArticle, title: e.target.value })
          }
        />
        <br />
        <textarea
          style={{ resize: "none", height: "250px" }}
          defaultValue={article.text}
          onChange={(e) =>
            setEditArticle({ ...editArticle, text: e.target.value })
          }
        />
        <Button className="btn success" type="submit">
          Edit
        </Button>
      </Alert>
    </form>
  );
};

export default EditArticleComponent;
