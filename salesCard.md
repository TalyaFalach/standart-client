      {/* <Card bg="light" className="shadow ">
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
          <div className="p-1 bd-highlight h5">
            {prod.firstName + " " + prod.lastName}
          </div>

          <div className="p-1 ">
            <img
              src={userProdData.image}
              className="rounded float-end rounded-circle"
              alt="user"
              style={{ maxHeight: "50px" }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center ">{prod.date}</div>
        <hr />

        <Card.Body>
          <h3>{prod.productName}</h3>
          <Card.Text>{prod.description}</Card.Text>
          <h6> {" " + prod.city}</h6>
        </Card.Body>
        <div>
          <Card.Img
            style={{
              maxHeight: "300px",

              borderRadius: "9px",
              padding: "1px",
            }}
            variant="bottom"
            src={prod.photo}
          />
        </div>
        <CommentsComponent path={"sales"} prod={prod} />
      </Card> */}