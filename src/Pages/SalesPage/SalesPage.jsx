import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getAllSales } from "./../../utils";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import { useDispatch, useSelector } from "react-redux";
import SalesCardComponent from "../../Components/SalesCardComponent/SalesCardComponent";
import CreateNewSaleComponent from "../../Components/CreateNewSaleComponent/CreateNewSaleComponent";

const SalesPage = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSales();
      dispatch({ type: "SET_SALES", payload: [...data.data.sales] });
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBarLoginComponent />
      <Row>
        <Col sm={7}>
          <form className="container">
            <Form.Control
              className="w-50"
              type="text"
              placeholder="Search..."
            />
          </form>
        </Col>

        <Col sm={5}>
          <CreateNewSaleComponent />
        </Col>
      </Row>
      <Row>
        {sales.map((prod, index) => {
          return (
            <Col sm={5} className='mx-auto'>
             <SalesCardComponent key={index} prod={prod} /> 
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SalesPage;
