import React from "react";

const Ceremony = (props) => {
  const { customClass } = props;
  return (
    <div className={customClass}>
      <div className="left">
        <img
          src="http://lavelo-react.wpocean.com/static/media/1.9f62dba6.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h4 className="title">Wedding Ceremony</h4>
        <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
        <span>256 Apay Road,Califonia Bong, London</span>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal
        </p>
        <a href="/">See Location</a>
      </div>
    </div>
  );
};

export default Ceremony;
