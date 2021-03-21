import React from "react";

const CoupleComponent = (props) => {
  const { type, img, name, detail } = props;
  return (
    <div className={type}>
      <img className="tile-image" src={img} alt={name} />
      <h3 className="name">{name}</h3>
      <p className="detail">{detail}</p>
    </div>
  );
};

export default CoupleComponent;
