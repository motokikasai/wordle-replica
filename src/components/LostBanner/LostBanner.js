import React from "react";
import Banner from "../Banner/Banner.js";

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
    // <div className="sad banner">
    //   <Banner status={status} answer={answer} />
    // </div>
  );
}

export default LostBanner;
