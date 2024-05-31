import { Backspace } from "../Backspace/backspace";

const KEYBOARD = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', "BACKSPACE"],
];


export default function Keyboard({guesses, setGuesses, colors, setColors, setSolution}) {

  function Key({ letter }) {
    function handlePress() {
      let count = 0;
      for (let i = 0; i < guesses.length; i++) {
        count += guesses[i].length;
      }
      
      if (letter === 'BACKSPACE') {
        if (count > 0) {
          let updatedGuesses = [...guesses];
          let updatedColors = [...colors];
          updatedGuesses[updatedGuesses.length - 1] = updatedGuesses[updatedGuesses.length - 1].substring(0, updatedGuesses[updatedGuesses.length - 1].length - 1);
          updatedColors[updatedColors.length - 1] = updatedColors[updatedColors.length - 1].substring(0, updatedColors[updatedColors.length - 1].length - 1);
          if (updatedGuesses[updatedGuesses.length - 1].length === 0) {
            updatedGuesses.pop();
            updatedColors.pop();
          }
          setGuesses(updatedGuesses);
          setColors(updatedColors);
          setSolution([]);
        }
      } else if (/^[A-Za-z]$/.test(letter)) {
        if (count < 25) {
          letter = letter.toLowerCase();
          let updatedColors = [...colors];
          let updatedGuesses = [...guesses];
          if (count % 5 === 0) {  // add new guess
            updatedColors.push('w');
            updatedGuesses.push(letter);
          } else {  // add letter to existing last guess
            updatedColors[updatedColors.length - 1] += 'w';
            updatedGuesses[updatedGuesses.length - 1] += letter;
          }
          setGuesses(updatedGuesses);
          setColors(updatedColors);
          setSolution([]);
        }
      }
    }

    return(
      <button className={letter === 'BACKSPACE' ? 'backspace' : 'key'} onClick={handlePress}>
        {letter === 'BACKSPACE' ? <Backspace height={20} width={20} /> : letter}
      </button>
    )
  }

  return (
    <div className="keyboard">
      {KEYBOARD.map((row, rowIndex) => (
        <div className={rowIndex === 0 ? "keyRowFirst" : rowIndex === 1 ? "keyRowSecond" : "keyRowThird"} key={rowIndex}>
          {row.map(letter => (
            <Key key={letter} letter={letter} />
          ))}
        </div>
      ))
      }
    </div>
  )
}