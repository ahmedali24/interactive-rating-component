import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [isSubmitted, setIsSubmited] = useState(false);
  const [rate, setRate] = useState("");

  return (
    <div className="app">
      {!isSubmitted && (
        <Rating setIsSubmited={setIsSubmited} setRate={setRate} />
      )}
      {isSubmitted && <ThankYou rate={rate} setIsSubmitted={setIsSubmited} />}
    </div>
  );
}

export default App;
