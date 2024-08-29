import React from "react";

function FormInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function changeHandler(e) {
    e.preventDefault();

    console.log({ guess });

    handleSubmitGuess(guess);

    setGuess("");
  }

  return (
    <form
      onSubmit={changeHandler}
      className="guess-input-wrapper"
      style={{ marginBottom: "100px" }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        maxLength={5}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default FormInput;
