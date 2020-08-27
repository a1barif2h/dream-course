import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGlobe,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import rating from "../../images/rating.png";
import "./Product.css";
import { Button, Row, Col } from "react-bootstrap";

const Product = (props) => {
  const {
    category,
    features,
    img,
    language,
    name,
    price,
    seller,
    star,
    starCount,
    time,
    url,
  } = props.product;
  return (
    <div className="product-container">
      <Row>
        <Col lg={4}>
          <div className="product-img">
            <img src={img} alt="" />
          </div>
        </Col>
        <Col lg={8}>
          <div className="product-detail">
            <h4>{"For " + category} </h4>
            <h2>{name} </h2>
            <h5> {features} </h5>
            <p>
              <small>Created by {seller}</small>
            </p>
            <p>
              <small className="rating">
                {star} <img src={rating} alt="" />{" "}
                {"( " + starCount + " Ratings )"}
              </small>
            </p>
            <p>
              <small>
                <FontAwesomeIcon icon={faGlobe} /> {language}
              </small>
              <small> {time} total hours </small>
            </p>
            <h4> ${price} </h4>
            <Button
              variant="outline-success"
              onClick={() => props.addProduct(props.product)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              Enroll Now
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
