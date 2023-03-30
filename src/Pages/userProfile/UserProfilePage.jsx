import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUserPosts } from "./../../utils";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import PostsComponent from "../../Components/PostsComponent/PostsComponent";
import ArticlesCardComponent from "./../../Components/ArticlesCardComponent/ArticlesCardComponent";
import { Button, Col, Row } from "react-bootstrap";
import EditProfileComponent from "../../Components/EditProfileComponent/EditProfileComponent";
import SalesCardComponent from "./../../Components/SalesCardComponent/SalesCardComponent";

const UserProfilePage = () => {
  const [userSales, setUserSales] = useState([]);
  const [userArticles, setUserArticles] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("user", user);
    const fetchData = async () => {
      const data = await getAllUserPosts(user.userId);
      setUserSales([...data.userSales]);
      setUserArticles([...data.userArticles]);
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: "100vh" }} className="bg-light">
      <NavBarLoginComponent />

      <div className="border p-1 bg-light ">
        <div className="lead">
          Hello, {user.firstName + " " + user.lastName}
        </div>{" "}
        <br />
        <p className="fw-lighter">
          
          This is your private page, from here you can see the posts you have
          uploaded so far, and edit or delete them, enjoy.
        </p>
      </div>
      <Row className="mt-2 bg-light ">
        <Col></Col>
        <Col>
          <EditProfileComponent />
        </Col>
      </Row>

      <Row className="bg-light ">
        {userArticles.map((a, index) => {
          return (
            <Col sm={4} key={index}>
              {" "}
              <ArticlesCardComponent article={a} />{" "}
            </Col>
          );
        })}

        {userSales.map((prod, index) => {
          return (
            <Col key={index} sm={12}>
              <SalesCardComponent prod={prod} />{" "}
            </Col>
          );
        })}
      </Row>

      <Row className="mx-auto">
        {userArticles.length === 0 && userSales.length === 0 ? (
          <div className=" display-4 mb-5 mt-5">
            You have not uploaded any post Yet...
          </div>
        ) : null}
      </Row>
    </div>
  );
};

export default UserProfilePage;
