import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CommentsComponent from "../CommentsComponent/CommentsComponent";
import DeleteSaleComponent from "../DeleteSaleComponent/DeleteSaleComponent";
import { getById } from "./../../utils";
import EditSaleComponent from "../EditSaleComponent/EditSaleComponent";
const SalesCardComponent = ({ prod }) => {
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
    console.log("", userProdData);
  }, []);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (prod.userId === user.userId) {
      setIsUserProduct(true);
      console.log(prod);
    }
  }, []);

  return (
    <div>
      <Card bg="light" className="shadow m-2 p-1">
        {deleteSale ? <DeleteSaleComponent prodId={prod._id} /> : null}
        {editSale ? <EditSaleComponent prod={prod} /> : null}
        <div className="d-flex justify-content-around bd-highlight">
          <div className="p-1 bd-highlight">
            {isUserProduct ? (
              <>
                <Button
                  className="text-primary btn btn-light"
                  onClick={() => setEditSale(!editSale)}
                >
                  Edit
                </Button>
                <br />
                <Button
                  className="text-danger btn btn-light"
                  onClick={() => setDeleteSale(!deleteSale)}
                >
                  Delete
                </Button>{" "}
              </>
            ) : null}
          </div>
          <div className="p-1 bd-highlight display-6">
            {prod.firstName + " " + prod.lastName}
          </div>

          <div className="p-1 ">
            <img
              src={userProdData.image}
              class="rounded float-end rounded-circle"
              alt="user"
              style={{ height: "70px" }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center ">{prod.date}</div>
        <hr />

        <Card.Body>
          <Card.Text>{prod.description}</Card.Text>
          <h6> {" " + prod.city}</h6>
        </Card.Body>
        <div>
          <Card.Img
            style={{
              maxHeight: "350px",

              borderRadius: "9px",
              padding: "2px",
            }}
            variant="bottom"
            src={prod.photo}
          />
        </div>
        <CommentsComponent prod={prod} />
      </Card>
    </div>
  );
};

export default SalesCardComponent;
