import React from "react";
import Banner from "../Banner/Banner.js";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
    // <div className="happy banner">
    //   <Banner status={status} numOfGuesses={numOfGuesses} />
    // </div>
  );
}

export default WonBanner;
