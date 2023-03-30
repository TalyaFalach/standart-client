import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ArticlesCardComponent from "../../Components/ArticlesCardComponent/ArticlesCardComponent";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import CreateArticleComponent from "./../../Components/CreateArticleComponent/CreateArticleComponent";
import { getAll } from "./../../utils";
import PageTitle from "./../../Components/PageTitle/PageTitle";


const ArticleTipsPage = () => {
  const articleCategory = useSelector((state) => state.articleCategory);
  const [searchValue, setSearchValue] = useState("All");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll("articles");
      setArticles([...data.data]);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const copyaArticles = [...articles];

    const filteredArray = copyaArticles.filter(
      (el) => el.category === e.target.value
    );
    setFilteredArticles([...filteredArray]);
  };

  return (
    <Container>
      <NavBarLoginComponent />
      
       
        <PageTitle
          title="Article And Tips"
          subTitle=" Here you can share new and exciting information you have discovered on
          any topic you choose, from the cultivation of your musical
          instruments, to new techniques you have discovered in playing.
          Anything you feel is necessary information for any player"
        />
      
    

  
      <Row>
        <Col>
          <Form.Select size="l" onChange={handleSearch}>
            <option defaultValue="All">All</option>
            {articleCategory.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col>
          {" "}
          <CreateArticleComponent />
        </Col>
      </Row>

      {/* <Row>
        {searchValue !== "All" ? (
          <Col sm={4}>
            {filteredArticles.map((article, index) => {
              return <ArticlesCardComponent article={article} key={index} />;
            })}
          </Col>
        ) : (
          <Col sm={4}>
            {articles.map((article, index) => {
              return <ArticlesCardComponent article={article} key={index} />;
            })}
          </Col>
        )}
      </Row> */}
      {/* <Row>
        {searchValue !== "All" ? (
          <div>
            {filteredArticles.map((article, index) => {
              return (
                <Col key={index} className="mx-auto">
                  <ArticlesCardComponent article={article} />
                </Col>
              );
            })}
          </div>
        ) : (
          <div>
            {articles.map((article, index) => {
              return (
                <Col className="mx-auto" key={index}>
                  <ArticlesCardComponent article={article} />
                </Col>
              );
            })}
          </div>
        )}
      </Row> */}

      <Row>
        {searchValue !== "All"
          ? filteredArticles.map((article, index) => {
              return (
                <Col sm={4} key={index}>
                  {" "}
                  <ArticlesCardComponent article={article} />{" "}
                </Col>
              );
            })
          : articles.map((article, index) => {
              return (
                <Col sm={4} key={index}>
                  {" "}
                  <ArticlesCardComponent article={article} />{" "}
                </Col>
              );
            })}
      </Row>
    </Container>
  );
};

export default ArticleTipsPage;
