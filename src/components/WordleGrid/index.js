import WordleRow from "../WordleRow";

const WordleGrid = ({ guesses, guessChange, colors, colorChange, resetSolution }) => {
  return (
    <div>
      {guesses.map((guess, idx) => {
        return <WordleRow key={idx} row={idx} guesses={guesses} colors={colors} colorChange={colorChange} guessChange={guessChange} resetSolution={resetSolution} />
      })}
    </div>
  )
}

export default WordleGrid;