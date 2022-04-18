import React from "react";
import star from "../images/icon-star.svg";
import Button from "./Button";

function Rating({ setIsSubmited, setRate }) {
  return (
    <div className="card">
      <div className="rating-card">
        <div className="star">
          <img src={star} alt="star" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="ratings">
          <Button setRate={setRate} number={1} />
          <Button setRate={setRate} number={2} />
          <Button setRate={setRate} number={3} />
          <Button setRate={setRate} number={4} />
          <Button setRate={setRate} number={5} />
        </div>
        <button onClick={() => setIsSubmited(true)} className="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Rating;
