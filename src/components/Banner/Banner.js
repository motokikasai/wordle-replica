import React from "react";

function Banner({ result }) {
  // console.log(
  //   "HURRAYYYYY!!!🕺",
  //   result && result.every((item) => item.status === "correct")
  // );

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
  );
}

export default Banner;
