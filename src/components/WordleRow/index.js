import WordleBox from "../WordleBox"

export default function WordleRow({ row, guesses, setGuesses, colors, setColors, setSolution }) {
  const handleRemove = (e) => {
    let updatedGuesses = [...guesses];
    let updatedColors = [...colors];
    updatedGuesses.splice(row, 1);
    updatedColors.splice(row, 1);
    setGuesses(updatedGuesses);
    setColors(updatedColors);
    setSolution([]);
  }

  if (row < guesses.length) {
    return (
      <div className="wordleRow">
        {
          Array.from({length: guesses[row].length}, (_, idx) => 
            <WordleBox
              key={idx}
              letter={guesses[row][idx]}
              row={row}
              col={idx}
              colors={colors}
              setColors={setColors}
              setSolution={setSolution}
            />
          )
        }
        {
          Array.from({length: 5 - guesses[row].length}, (_, idx) =>
            <button key={idx} className="emptyButton" />
          )
        }
        <button className="removeButton" onClick={handleRemove} />
      </div>
    )
  } else {
    return (
      <div className="wordleRow">
        {
          Array.from({length: 5}, (_, idx) =>
            <button key={idx} className="emptyButton" />
          )
        }
        <button className="emptyRemoveButton" />
      </div>
    )
  }
}