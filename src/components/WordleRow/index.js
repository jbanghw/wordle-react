import { useEffect } from "react";
import WordleBox from "../WordleBox"

export default function WordleRow({ guess, row, colors, colorChange, rowRemove }) {
  return (
    <div className="wordleRow">
      <WordleBox letter={guess[0]} row={row} col={0} colors={colors} colorChange={colorChange} />
      <WordleBox letter={guess[1]} row={row} col={1} colors={colors} colorChange={colorChange} />
      <WordleBox letter={guess[2]} row={row} col={2} colors={colors} colorChange={colorChange} />
      <WordleBox letter={guess[3]} row={row} col={3} colors={colors} colorChange={colorChange} />
      <WordleBox letter={guess[4]} row={row} col={4} colors={colors} colorChange={colorChange} />
    </div>
  )
}