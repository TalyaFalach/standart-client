import { useEffect, useState } from "react";
import {  Col, Container, Form, Row } from "react-bootstrap";
import { getAllSales } from "./../../utils";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import { useDispatch, useSelector } from "react-redux";
import SalesCardComponent from "../../Components/SalesCardComponent/SalesCardComponent";
import CreateNewSaleComponent from "../../Components/CreateNewSaleComponent/CreateNewSaleComponent";

const SalesPage = () => {
  const [searchValue, setSearchValue] = useState("All");
  const [filteredSales, setFilteredSales] = useState([]);
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  const category = useSelector((state) => state.category);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const copySales = [...sales];

    const filteredArray = copySales.filter(
      (el) => el.category === e.target.value
    );
    setFilteredSales([...filteredArray]);
  };
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
      <div>
        <h1 className="display-5">Sales</h1>
        <p className="w-75 mx-auto p-3 fw-lighter lead">
          Try to enter all your product information, and correct contact
          information Do not upload fake musical instruments, whoever does this,
          we will not allow him to upload posts - Prices must be fair - On this
          page you should only upload musical instruments that you want to sell,
          and only in the matter of buying and selling.
        </p>
      </div>

      <hr />

      <Row>
        <Col sm={6}>
          <Form.Select size="l" onChange={handleSearch}>
            <option defaultValue="All">All</option>
            {category.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        

        <Col sm={5}>
          <CreateNewSaleComponent />
        </Col>
      </Row>
      <Row>
        {searchValue !== "All" ? (
          <div>
            {filteredSales.map((prod, index) => {
              return (
                <Col sm={10} className="mx-auto">
                  <SalesCardComponent key={index} prod={prod} />
                </Col>
              );
            })}
          </div>
        ) : (
          <div>
            {sales.map((prod, index) => {
              return (
                <Col sm={10} className="mx-auto">
                  <SalesCardComponent key={index} prod={prod} />
                </Col>
              );
            })}
          </div>
        )}
      </Row>
    </Container>
  );
};

export default SalesPage;
