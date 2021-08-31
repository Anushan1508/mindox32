import React from "react";
import "./style.css";

const Position = () => {
  return (
    <div>
      <h1 className="positionH">Open Position</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-apple.png"
                    alt=""
                  />
                </div>
                <h4>App Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-android.png"
                    alt=""
                  />
                </div>
                <h4>Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-geography.png"
                    alt=""
                  />
                </div>
                <h4>Marketing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
