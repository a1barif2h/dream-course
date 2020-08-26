import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import Product from "../Product/Product";
import { Row, Col } from "react-bootstrap";

const Shop = () => {
  const first15 = fakeData.slice(0, 15);
  const [products, setProducts] = useState(first15);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    console.log("product added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <Row>
      <Col md={10}>
        <div>
          {products.map((product) => (
            <Product addProduct={addProduct} product={product}></Product>
          ))}
        </div>
      </Col>
      <Col md={2}>
        <h1>this is cart</h1>
        <h5>items add: {cart.length}</h5>
      </Col>
    </Row>
  );
};

export default Shop;
