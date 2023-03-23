import { useEffect, useState } from "react";
import { Card, Col, NavDropdown, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getById } from "./../../utils";
import EditSaleComponent from "../EditSaleComponent/EditSaleComponent";
import CurrentPostComponent from "../CurrentPostCommentsComponent/CurrentPostCommentsComponent";
import AddNewCommentComponent from "../AddNewCommentComponent/AddNewCommentComponent";
import DeletePostComponent from "../DeletePostComponent/DeletePostComponent";

const SalesCardComponent = ({ prod, isOpen }) => {
  const user = useSelector((state) => state.user);
  const [userProdData, setUserProdData] = useState({});
  const [isUserProduct, setIsUserProduct] = useState(false);
  const [deleteSale, setDeleteSale] = useState(false);
  const [editSale, setEditSale] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getById(prod.userId)
        .then((data) => setUserProdData({ ...data.data.user }))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (prod.userId === user.userId) {
      setIsUserProduct(true);
      console.log(prod);
    }
  }, []);

  return (
    <Card className="text-center container mt-5 bg-dark text-light fw-lighter  shadow-lg">
      <Row>
        <Card.Header>
          <Stack direction="horizontal" gap={4}>
            <div className="">{prod.date}</div>
            <div className="fw-bold ms-auto">
              {isUserProduct ? (
                <NavDropdown
                  className="d-flex justify-content-start p-1 h6"
                  title="Options"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={() => setEditSale(!editSale)}
                  >
                    Edit
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    onClick={() => setDeleteSale(!deleteSale)}
                  >
                    Delete
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null}
            </div>
            <div className="fw-bold ms-auto">
              {prod.firstName + " " + prod.lastName}
            </div>
            <div>
              <img
                src={userProdData.image}
                className="rounded float-end rounded-circle"
                alt="user"
                style={{ maxHeight: "30px" }}
              />
            </div>
          </Stack>
        </Card.Header>
        <Col>
          <img
            src={prod.photo}
            className="h-100"
            alt={prod.productName}
            class="img-thumbnail"
          />
        </Col>
        <Col>
          {deleteSale ? <DeletePostComponent postId={prod._id} /> : null}
          <Card.Body>
            {editSale ? <EditSaleComponent prod={prod} /> : null}
            <Card.Title>
              <div className="display-5">{prod.productName}</div>
            </Card.Title>
            <hr />
            <Card.Text>
              <div className="h6  d-flex justify-content-start">INFO:</div>
              {prod.description}
              <hr />
              <div className="h6  d-flex justify-content-start">PRICE:</div>
              {prod.price}
              <hr />

              <div className="h6  d-flex justify-content-start">CONTACT:</div>

              <div>{prod.contact}</div>
              <hr />
              <div className="h6  d-flex justify-content-start">FROM:</div>
              <div>{prod.city}</div>
            </Card.Text>
            <hr />
            <Row>
              <Col sm={7}>
                <AddNewCommentComponent postId={prod._id} />
              </Col>
              <Col>
                <CurrentPostComponent postId={prod._id} image={prod.photo} />
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SalesCardComponent;

//<CurrentPostComponent />

// <Card
//       onClick={handleOpenPost}
//       style={{ width: "20rem", minHeight: "35rem", maxHeight: "50rem" }}
//       className="shadow m-3 my-card"
//     >
//       {deleteSale ? <DeleteSaleComponent prodId={prod._id} /> : null}
//       {editSale ? <EditSaleComponent prod={prod} /> : null}
//       {isUserProduct ? (
//         <NavDropdown
//           className="d-flex justify-content-start p-1 h6"
//           title="Options"
//         >
//           <NavDropdown.Item
//             href="#action/3.1"
//             onClick={() => setEditSale(!editSale)}
//           >
//             Edit
//           </NavDropdown.Item>
//           <NavDropdown.Item
//             href="#action/3.2"
//             onClick={() => setDeleteSale(!deleteSale)}
//           >
//             Delete
//           </NavDropdown.Item>
//         </NavDropdown>
//       ) : null}
//       <Card.Img variant="top" src={prod.photo} style={{ height: "17rem" }} />
//       <Card.Body>
//         <Card.Title>{prod.productName}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           {prod.price}$
//         </Card.Subtitle>
//         <Card.Text>{prod.description}</Card.Text>
//       </Card.Body>
// <ListGroup variant="flush">
//   <ListGroup.Item>{prod.contact}</ListGroup.Item>
//   <ListGroup.Item>{prod.city}</ListGroup.Item>
// </ListGroup>
// <Card.Footer className="text-muted">
//   <Stack direction="horizontal" gap={4}>
//     <div className="">{prod.date}</div>
//     <div className="fw-bold ms-auto">
//       {prod.firstName + " " + prod.lastName}
//     </div>
//     <div className="">
//       <img
//         src={userProdData.image}
//         className="rounded float-end rounded-circle"
//         alt="user"
//         style={{ maxHeight: "30px" }}
//       />
//     </div>
//   </Stack>

// </Card.Footer>
//     </Card>
//     {showComments ? <CommentsComponent prod={prod} path="sales" /> : null}
