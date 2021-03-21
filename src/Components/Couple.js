import React from "react";

const Couple = () => {
  return (
    <section className="couple">
      <div>
        <h2>Happy Couple</h2>
        <div className="couple-tile">
          <div className="bride">
            <img
              src="http://lavelo-react.wpocean.com/static/media/img-2.8fa42fa6.jpg"
              alt=""
              className="tile-image"
            />
            <h3 className="name">Alphonsa Kurian</h3>
            <p className="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod rerum fugiat nam cumque itaque aperiam est sunt
              iste nisi facilis animi, perspiciatis, voluptate dolorum sequi
              modi! Ullam, quae nesciunt?
            </p>
          </div>
          <div className="tile-seperator">
            <img
              src="http://lavelo-react.wpocean.com/static/media/2.3b18046c.png"
              alt=""
            />
          </div>
          <div className="groom">
            <img
              src="http://lavelo-react.wpocean.com/static/media/img-2.8fa42fa6.jpg"
              alt=""
              className="tile-image"
            />
            <h3 className="name">Asish K Antony</h3>
            <p className="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod rerum fugiat nam cumque itaque aperiam est sunt
              iste nisi facilis animi, perspiciatis, voluptate dolorum sequi
              modi! Ullam, quae nesciunt?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
