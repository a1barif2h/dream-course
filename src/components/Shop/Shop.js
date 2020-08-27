import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import Product from "../Product/Product";
import { Row, Col } from "react-bootstrap";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const first15 = fakeData.slice(0, 15);
  const [products, setProducts] = useState(first15);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <Row>
      <Col md={10}>
        <div>
          {products.map((product) => (
            <Product
              key={product.id}
              addProduct={addProduct}
              product={product}
            ></Product>
          ))}
        </div>
      </Col>
      <Col className="aside" md={2}>
        <Cart cart={cart}></Cart>
      </Col>
    </Row>
  );
};

export default Shop;
