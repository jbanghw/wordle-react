export default function WordleBox({ letter, row, col, colors, setColors, setSolution }) {

  let backgroundColor = "#787c7f";
  if (colors[row][col] === "y") {
    backgroundColor = "#c8b653";
  } else if (colors[row][col] === "g") {
    backgroundColor = "#6ca965";
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

  return (
    <button className="wordleBox" onClick={handleClick} style={{backgroundColor: backgroundColor}}>
      {letter}
    </button>
  )
}