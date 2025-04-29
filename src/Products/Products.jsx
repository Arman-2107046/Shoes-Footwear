import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Products = () => {
  return (
    <>
      {/* main container for products  */}
      <section className="card-container">
        {/* indivudual product  */}

        <section className="card">
          {/* image for the product  */}
          <img
          className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt=""
          />
          {/* details of the card  */}
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar className="ratings-start" />
              <FaStar className="ratings-start" />
              <FaStar className="ratings-start" />
              <FaStar className="ratings-start" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>$300</del> 200
              </div>
            
            <div className="bag"><FaShoppingBag className="bag-icon"/> </div>
            </section>
          </div>
        </section>
      </section>

    </>
  );
};

export default Products;
