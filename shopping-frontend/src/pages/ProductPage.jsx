import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  ListGroup,
  Row,
  Image,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductPage() {
  let params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    (async function fetchAProduct() {
      const res = await axios.get(`/api/products/${params.id}`);
      if (res.status === 200) {
        setProduct(res.data);
      }
    })();
  });
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {product !== undefined ? (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid rounded />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name} </h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>price: ${product.price}</ListGroupItem>
              <ListGroupItem>
                <strong>Description: </strong>
                {product.description}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Button
                    variant="dark"
                    className="container-fluid rounded-0"
                    disabled={!product.countInStock}
                  >
                    Add to Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
}
