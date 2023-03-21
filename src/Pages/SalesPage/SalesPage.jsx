import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
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
    <Container>
      <NavBarLoginComponent />

      <p className="w-75  border mx-auto p-4">
        <span style={{ fontSize: "1.2rem" }} className="fw-bold ">
          {" "}
          This is a sales page,{" "}
        </span>
        Try to enter all your product information, and correct contact
        information Do not upload fake musical instruments, whoever does this,
        we will not allow him to upload posts - Prices must be fair - On this
        page you should only upload musical instruments that you want to sell,
        and only in the matter of buying and selling.
      </p>

      <Row>
        <Col sm={6}>
        {/* //! Handle search */}
          <Form.Select size="sm">
            <option
              defaultValue="All"
             
            >
              Category
            </option>
            <option value="All">All</option>
            <option value="Guitar">Guitar</option>
            <option value="Bass">Bass</option>
            <option value="Drums">Drums</option>
            <option value="Wind">Wind</option>
            <option value="Drums / Percussions">Drums / Percussions</option>
          </Form.Select>
        </Col>
        <Col sm={1}>
          <Button className="btn btn-light">Search</Button>
        </Col>

        <Col sm={5}>
          <CreateNewSaleComponent />
        </Col>
      </Row>
      <Row>
        {sales.map((prod, index) => {
          return (
            <Col sm={10} className="mx-auto">
              <SalesCardComponent key={index} prod={prod} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SalesPage;
