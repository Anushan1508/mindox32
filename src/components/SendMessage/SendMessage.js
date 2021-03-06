import React from "react";
import "./Style.css";

const SendMessage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="sendmshH1">Contact Us</h1>
        </div>
        <div className="row">
          <h4>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input className="cinput" type="text" required />
              <label className="lblsm">Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input className="cinput" type="text" required />
              <label className="lblsm">Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input className="cinput" type="text" required />
              <label className="lblsm">Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required></textarea>
              <label className="lblsm">Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
