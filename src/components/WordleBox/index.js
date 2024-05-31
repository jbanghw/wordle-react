export default function WordleBox({ idx, guesses, colors, setColors, setSolution }) {
  const row = Math.floor(idx / 6);
  const col = idx % 6;
  const guessIdx = row * 5 + col;

  let count = 0;
  for (let i = 0; i < guesses.length; i++) {
    count += guesses[i].length;
  }

  let letter = '';
  let backgroundColor = guessIdx < count ? "#787c7f" : "#121212";
  if (guessIdx < count) {
    letter = guesses[row][col];
    if (colors[row][col] === "y") {
      backgroundColor = "#c8b653";
    } else if (colors[row][col] === "g") {
      backgroundColor = "#6ca965";
    }
  }

  const handleClick = (e) => {
    let updatedColors = [...colors];
    if (colors[row][col] === 'g') {
      updatedColors[row] = colors[row].substring(0, col) + 'w' + colors[row].substring(col + 1);
    } else if (colors[row][col] === 'y') {
      updatedColors[row] = colors[row].substring(0, col) + 'g' + colors[row].substring(col + 1);
    } else if (colors[row][col] === 'w') {
      updatedColors[row] = colors[row].substring(0, col) + 'y' + colors[row].substring(col + 1);
    }
    setColors(updatedColors);
    setSolution([]);
  }

  if (guessIdx < count) {
    return (
      <button className="wordleBox" onClick={handleClick} style={{backgroundColor: backgroundColor}}>
        {letter}
      </button>
    )
  } else {
    return (
      <button className="emptyWordleBox" />
    )
  }
}