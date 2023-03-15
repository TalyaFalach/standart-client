import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CommentsComponent from "../CommentsComponent/CommentsComponent";
import DeleteSaleComponent from "../DeleteSaleComponent/DeleteSaleComponent";
import EditSaleComponent from "../EditSaleComponent/EditSaleComponent";
const SalesCardComponent = ({ prod }) => {
  const [isUserProduct, setIsUserProduct] = useState(false);
  const [deleteSale, setDeleteSale] = useState(false);
  const [editSale, setEditSale] = useState(false);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (prod.userId === user.userId) {
      setIsUserProduct(true);
      console.log(prod);
    }
  }, []);

  return (
    <div>
      <div className="card shadow mt-3 mb-3 m-5">
        <Row>
          {prod.photo !== "" ? (
            <Col sm={6}>
              <img
                className="card-img-top m-3"
                src={prod.photo}
                alt="Card  cap"
                style={{ height: "200px" }}
              />
            </Col>
          ) : null}
          <Col>
            {" "}
            <div className="card-body">
              <h4 className="card-title">{prod.productName}</h4>
              <h6 className="card-text">Price: {prod.price}₪</h6>
              <h6 className="card-text"> {prod.city}</h6>
              <p className="card-text text-muted">
                <small className="text-muted">{prod.description}</small>
              </p>

              <Card.Footer className="text-muted">
                {prod?.firstName + " " + prod.lastName}
                <br />
                {prod.contact}
              </Card.Footer>

              {isUserProduct ? (
                <>
                  <Button
                    variant="outline-light"
                    className="text-primary"
                    onClick={() => setEditSale(!editSale)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    className="text-danger"
                    variant="outline-light"
                    onClick={() => setDeleteSale(!deleteSale)}
                  >
                    Delete
                  </Button>{" "}
                </>
              ) : null}
            </div>
          </Col>
        </Row>
        
        {deleteSale ? <DeleteSaleComponent prodId={prod._id} /> : null}
        {editSale ? <EditSaleComponent prod={prod}  /> : null}
        <Row><CommentsComponent/></Row>
      </div>
    </div>
  );
};

export default SalesCardComponent;
