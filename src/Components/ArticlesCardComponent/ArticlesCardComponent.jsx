import { useEffect, useState } from "react";
import { Button, Card, NavDropdown, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deletePost } from "../../utils";
import CurrentFullPostComponent from "../CurrentFullPostComponent/CurrentFullPostComponent";
import DeletePostComponent from "../DeletePostComponent/DeletePostComponent";
import EditArticleComponent from "../EditArticleComponent/EditArticleComponent";
import AddNewCommentComponent from "./../AddNewCommentComponent/AddNewCommentComponent";

const ArticlesCardComponent = ({ article }) => {
  const user = useSelector((state) => state.user);
  const [isUserPost, setIsUserPost] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [editPost, setEditPost] = useState(false);

  useEffect(() => {
    if (article.userId === user.userId) {
      setIsUserPost(true);
      //   console.log(prod);
    }
  }, []);
  return (
    <div className="p-5  fw-lighter">
      <Card className="p-3 bg-dark text-light" style={{ width: "20rem" }}>
      {editPost ? <EditArticleComponent article={article}/>:null}
        <Stack direction="horizontal" gap={4}>
          <div className="">{article.date}</div>
         
          <div className="fw-bold ms-auto">
            {isUserPost ? (
              <NavDropdown
                className="d-flex justify-content-start p-1 h6"
                title="Options"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => setEditPost(!editPost)}
                >
                  Edit
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => setDeletePost(!deletePost)}
                >
                  Delete
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </div>

          <div className=" ms-auto">
            {article.userFirstName + " " + article.userLastName}
          </div>
          <div>
            <img
              src={article.userImage}
              className="rounded float-end rounded-circle"
              alt="user"
              style={{ maxHeight: "30px" }}
            />
          </div>
          <hr />
        </Stack>
      
        {deletePost ? <DeletePostComponent postId={article._id} path="articles" /> : null}

        <Card.Body className="fw-lighter">
          <Card.Title>{article.title}</Card.Title>
          <Card.Text style={{ whiteSpace: "pre-wrap" }}>
            {article.text.split(/\s+/).slice(0, 10).join(" ")}....
          </Card.Text>

          <CurrentFullPostComponent image={article.image} post={article} postId={article._id} />
        </Card.Body>
        <AddNewCommentComponent postId={article._id} />
      </Card>
    </div>
  );
};

export default ArticlesCardComponent;
