import React from "react";

function Banner({ status, children }) {
  return (
    <div className={`${status} banner`}>{children}</div>
    // <>
    //   {status === "won" && (
    //     <p>
    //       <strong>Congratulations!</strong> Got it in{" "}
    //       <strong>
    //         {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
    //       </strong>
    //       .
    //     </p>
    //   )}

    //   {status === "lost" && (
    //     <p>
    //       Sorry, the correct answer is <strong>{answer}</strong>.
    //     </p>
    //   )}
    // </>
  );
}

export default Banner;
