import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import FormInput from "../FormInput/FormInput";
import DisplayResults from "../DisplayResults/DisplayResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
// import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatue] = React.useState("running");

  const handleSubmitGuess = (guess) => {
    // update 'guesses' due to React setter going out of sync
    const nextGuess = [...guesses, guess];
    setGuesses(nextGuess);

    guess === answer ? setGameStatue("won") : setGameStatue("lost");

    if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatue("lost");
    } else if (guess === answer) {
      setGameStatue("won");
    } else {
      setGameStatue("running");
    }
  };

  return (
    <>
      <DisplayResults guesses={guesses} answer={answer} />
      <FormInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={guesses.length === NUM_OF_GUESSES_ALLOWED}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
