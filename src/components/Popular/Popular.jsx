import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

function Popular() {
  return (
    <div className="popular">
      <p>Popular Product</p>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
