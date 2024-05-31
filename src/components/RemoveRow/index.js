export default function RemoveRow({ idx, guesses, setGuesses, colors, setColors, setSolution }) {
  const row = Math.floor(idx / 6);

  const handleRemove = (e) => {
    let updatedGuesses = [...guesses];
    let updatedColors = [...colors];
    updatedGuesses.splice(row, 1);
    updatedColors.splice(row, 1);
    setGuesses(updatedGuesses);
    setColors(updatedColors);
    setSolution('');
  };

  if (row < guesses.length) {
    return (
      <button className="removeButton" onClick={handleRemove} />
    )
  } else {
    return (
      <button className="emptyRemoveButton" />
    )
  }

}