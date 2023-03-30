import { height } from "@mui/system";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrentFullPostComponent from "../CurrentFullPostComponent/CurrentFullPostComponent";

const PostsComponent = ({ date, category, title, page,post }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [showFullPost, setShowFullPost] = useState(false)



  return (
    <div>
      <Card
        text="light"
        style={{ width: "18rem" }}
        className=" shadow p-3  bg-dark  fw-lighter mb-3"
      >
        <Card.Body>
          <Card.Title className="h6">
            {" "}
            {category} - {date}{" "}
          </Card.Title>
          <Card.Text>
            You posted your "{title}" in {page} page
          </Card.Text>
        </Card.Body>
        {/* <Button onClick={() => setShowFullPost(!showFullPost)} className="btn btn-light">
          Click to see full post
        </Button> */}
<CurrentFullPostComponent post={post} image={post.image}/>
        
      </Card>
    </div>
  );
};

export default PostsComponent;
