import React, { useState } from "react";
import { Button, FloatingLabel, Form, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createNewArticle,
  successToast,
  errorToast,
  getTodayDate,
} from "./../../utils";

const CreateArticleComponent = () => {
  const user = useSelector((state) => state.user);
  const articleCategory = useSelector((state) => state.articleCategory);
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newArticle, setNewArticle] = useState({
    title: "",
    text: "",
    userId: user.userId,
    userFirstName: user.firstName,
    userLastName: user.lastName,
    userImage: user.image,
    date: getTodayDate(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.userId === "" || user.firstName === "" || user.lastName === "") {
      return errorToast(toast, "You are not authorized. please login");
    } else {
      const res = await createNewArticle(newArticle)
        .then(() => successToast(toast, "Created!"))
        .catch(() => errorToast(toast, "please check if youre login"));
      console.log(res);
    }
    console.log(newArticle);
  };
  return (
    <>
      <Button style={{ backgroundColor: "purple" }} onClick={handleShow}>
        + Write a post
      </Button>

      <Offcanvas
        className="h-100 bg-dark text-light lead"
        show={show}
        placement="top"
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Hello, {user.firstName} <br />
            Create your post
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="p-2 text-dark" onSubmit={handleSubmit}>
            <select
              className="mb-2 mt-2"
              onChange={(e) =>
                setNewArticle({ ...newArticle, category: e.target.value })
              }
            >
              <option disabled>category</option>
              {articleCategory.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
            <FloatingLabel label="Title" className="mb-3">
              <Form.Control
                required
                type="text"
                onChange={(e) =>
                  setNewArticle({ ...newArticle, title: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel label="Image (url)" className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewArticle({ ...newArticle, image: e.target.value })
                }
              />
            </FloatingLabel>
            <div style={{ whiteSpace: "pre-wrap" }}>
              <textarea
                placeholder="Write your post here..."
                style={{
                  whiteSpace: "pre-wrap",
                  height: "200px",
                  resize: "none",
                }}
                onChange={(e) =>
                  setNewArticle({ ...newArticle, text: e.target.value })
                }
              />
            </div>

            <Button type="submit">Continue</Button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CreateArticleComponent;
