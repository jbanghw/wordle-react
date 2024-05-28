import { useEffect } from "react";
import WordleRow from "../WordleRow";

const WordleGrid = ({ guesses, colors, colorChange, rowRemove }) => {
  return (
    <div>
      {guesses.map((guess, idx) => {
        return <WordleRow key={idx} row={idx} guess={guess} colors={colors} colorChange={colorChange} rowRemove={rowRemove} />
      })}
    </div>
  )
}

export default WordleGrid;