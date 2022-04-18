import React from "react";
import "../App.css";
import thankYou from "../images/illustration-thank-you.svg";

const ThankYou = ({ rate, setIsSubmitted }) => {
  return (
    <div className="card">
      <div className="thankyou">
        <img src={thankYou} alt="" />
        <div className="rating">
          <p>You selected {rate} out of 5</p>
        </div>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
        <button className="back" onClick={() => setIsSubmitted(false)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
