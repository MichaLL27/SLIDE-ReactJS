import React from "react";
import product_card from "../procut_data";

const MainContent = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img className="images-item" src={item.thumb} alt="" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));
  return <div className="Main_Content">{listItems}</div>;
};

export default MainContent;
