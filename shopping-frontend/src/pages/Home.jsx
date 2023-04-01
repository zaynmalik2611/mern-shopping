import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function fetchProducts() {
      const res = await axios.get("/api/products");
      if (res.status === 200) {
        setProducts(res.data);
      }
    })();
  });
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
