import WordleBox from "../WordleBox"

export default function WordleRow({ guesses, row, colors, colorChange, guessChange, resetSolution }) {
  const handleRemove = (e) => {
    let updatedGuesses = [...guesses];
    updatedGuesses.splice(row, 1);
    guessChange(updatedGuesses);
    resetSolution([]);
  }

  return (
    <div className="wordleRow">
      <WordleBox letter={guesses[row][0]} row={row} col={0} colors={colors} colorChange={colorChange} resetSolution={resetSolution} />
      <WordleBox letter={guesses[row][1]} row={row} col={1} colors={colors} colorChange={colorChange} resetSolution={resetSolution} />
      <WordleBox letter={guesses[row][2]} row={row} col={2} colors={colors} colorChange={colorChange} resetSolution={resetSolution} />
      <WordleBox letter={guesses[row][3]} row={row} col={3} colors={colors} colorChange={colorChange} resetSolution={resetSolution} />
      <WordleBox letter={guesses[row][4]} row={row} col={4} colors={colors} colorChange={colorChange} resetSolution={resetSolution} />
      <div className="divider" />
      <button className="removeButton" onClick={handleRemove} />
    </div>
  )
}