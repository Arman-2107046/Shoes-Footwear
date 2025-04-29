

import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import Card from "../components/Card";

const Products = ({result}) => {
  return (
    <>
      {/* main container for products  */}
      <section className="card-container">
{result}
      </section>

    </>
  );
};

export default Products;
