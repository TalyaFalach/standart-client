import { useState } from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getTodayDate,
  errorToast,
  successToast,
  create,
  getAll,
} from "./../../utils";
const CreateRecommendationComponent = () => {
    const user = useSelector(state => state.user)
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
  const [newPost, setNewPost] = useState({
    userId: user.userId,
    userFirstName: user.firstName,
    userLastName: user.lastName,
    userImage: user.image,
    image: "",
    text: "",
    title: "",
    date: getTodayDate(),
  });
 const handleSubmit = async (e) => {
   e.preventDefault();
   await create("recommendations", newPost)
     .then(() => successToast(toast, "Created your post!"))
     
     .catch(() => errorToast(toast, "Please try again later"));
 };
 return (
   <>
     <Button style={{ backgroundColor: "purple" }} onClick={handleShow}>
       + Add Recommendation
     </Button>

     <Offcanvas placement="end" show={show} onHide={handleClose}>
       <Offcanvas.Header closeButton>
         <Offcanvas.Title>Add New Recommendation</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body>
          <form className="container" onSubmit={handleSubmit}>
        <Form.Control
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
         
          required
          placeholder="Title"
        ></Form.Control>
        <textarea
         
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          required
          style={{
            whiteSpace: "pre-wrap",

            height: "150px",
            resize: "none",
          }}
          placeholder="Your Post..."
        />
        <br />
        <Button className="w-100 btn-success" type="submit">Share</Button>
      </form> 
       </Offcanvas.Body>
     </Offcanvas>
   </>
 );
}

export default CreateRecommendationComponent