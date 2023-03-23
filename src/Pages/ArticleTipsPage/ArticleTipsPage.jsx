import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ArticlesCardComponent from "../../Components/ArticlesCardComponent/ArticlesCardComponent";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import CreateArticleComponent from "./../../Components/CreateArticleComponent/CreateArticleComponent";
import { getAll } from "./../../utils";

const ArticleTipsPage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll("articles");
      setArticles([...data.data]);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <NavBarLoginComponent />
      <div className=" p-1">
        <h1 className="display-6">Article And Tips</h1>
        <p className="w-75 mx-auto p-3 fw-lighter lead">
          Here you can share new and exciting information you have discovered on
          any topic you choose, from the cultivation of your musical
          instruments, to new techniques you have discovered in playing.
          Anything you feel is necessary information for any player
        </p>
      </div>

      <hr />
      <CreateArticleComponent />
      <Row>
        {articles.map((article, index) => {
          return (
            <Col sm={5}>
              <ArticlesCardComponent article={article} key={index} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ArticleTipsPage;
