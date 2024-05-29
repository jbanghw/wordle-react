export default function WordleBox({ letter, row, col, colors, colorChange, resetSolution }) {
  let backgroundColor = "gray";
  if (colors[row][col] === "y") {
    backgroundColor = "yellow";
  } else if (colors[row][col] === "g") {
    backgroundColor = "green";
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
    colorChange(updatedColors);
    resetSolution([]);
  }

  return (
    <button className="wordleBox" onClick={handleClick} style={{background: backgroundColor}}>
      {letter}
    </button>
  )
}