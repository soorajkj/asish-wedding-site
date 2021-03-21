import React from "react";
import CoupleComponent from "./CoupleComponent";
const Couple = () => {
  return (
    <section className="couple">
      <div>
        <h2>Happy Couple</h2>
        <div className="couple-tile">
          <CoupleComponent
            type="bride"
            img="http://lavelo-react.wpocean.com/static/media/img-2.8fa42fa6.jpg"
            name="Alphonsa Kurian"
            detail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod
            rerum fugiat nam cumque itaque aperiam est sunt iste nisi facilis animi,
            perspiciatis, voluptate dolorum sequi modi! Ullam, quae nesciunt?"
          />

          <div className="tile-seperator">
            <img
              src="http://lavelo-react.wpocean.com/static/media/2.3b18046c.png"
              alt=""
            />
          </div>
          <CoupleComponent
            type="groom"
            img="http://lavelo-react.wpocean.com/static/media/img-2.8fa42fa6.jpg"
            name="Asish K Antony"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod
            rerum fugiat nam cumque itaque aperiam est sunt iste nisi facilis animi,
            perspiciatis, voluptate dolorum sequi modi! Ullam, quae nesciunt?"
          />
        </div>
      </div>
    </section>
  );
};

export default Couple;
