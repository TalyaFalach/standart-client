import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  getTodayDate,
  errorToast,
  successToast,
  create,
  getAll,
} from "./../../utils";
import { useSelector } from "react-redux";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import PageTitle from "./../../Components/PageTitle/PageTitle";
import { toast } from "react-toastify";
import RecommendationCardCompnent from "../../Components/RecommendationCardComponent/RecommendationCardCompnent";
const RecommendationsPage = () => {
  const user = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      await getAll("recommendations").then((data) =>
        setRecommendations([...data.data.data])
      );
    };
    fetchData();
  }, [isClicked]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create("recommendations", newPost)
      .then(() => successToast(toast, "Created your post!"))
      .then(() => setIsClicked(!isClicked))
      .catch(() => errorToast(toast, "Please try again later"));
  };
  return (
    <div>
      <NavBarLoginComponent />
      <PageTitle
        title="Recommendations"
        subTitle="Good shopping experience, nice professionals and only good people"
      />

      <form className="container" onSubmit={handleSubmit}>
        <Form.Control
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="w-50 mx-auto"
          required
          placeholder="Title"
        ></Form.Control>
        <textarea
          className="w-50 mx-auto"
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          required
          style={{
            whiteSpace: "pre-wrap",

            height: "100px",
            resize: "none",
          }}
          placeholder="Your Post..."
        />
        <br />
        <Button type="submit">Share</Button>
      </form>
      <Container>
        {recommendations.map((post, index) => {
          return <RecommendationCardCompnent key={index} post={post} />;
        })}
      </Container>
    </div>
  );
};

export default RecommendationsPage;
