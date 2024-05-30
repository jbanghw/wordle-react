import { Backspace } from "../Backspace/backspace";

const KEYBOARD = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', "BACKSPACE"],
];


export default function Keyboard({currentGuess, setCurrentGuess, guesses, setGuesses, colors, setColors, resetSolution}) {

  function Key({ letter }) {
    function handlePress() {
      if (letter === 'ENTER') {
        if (currentGuess.length < 5) {
          console.log('enter a full word')
          return
        }
        const formatted = currentGuess.toLowerCase();
        let updatedGuesses = [...guesses];
        updatedGuesses.push(formatted);
        setGuesses(updatedGuesses);
        let updatedColors = [...colors];
        updatedColors.push('wwwww');
        setColors(updatedColors);
        resetSolution([]);
        setCurrentGuess('');
      } else if (letter === 'BACKSPACE') {
        if (currentGuess.length === 0 && guesses.length > 0) {
          let updatedGuesses = [...guesses];
          let updatedColors = [...colors];
          updatedColors.pop();
          setColors(updatedColors);
          const newGuess = updatedGuesses.pop();
          setGuesses(updatedGuesses);
          setCurrentGuess(newGuess.slice(0, 4));
        } else {
          setCurrentGuess(prev => prev.slice(0, -1))
          resetSolution([]);
        }
      } else if (/^[A-Za-z]$/.test(letter)) {
        if (currentGuess.length < 5) {
          setCurrentGuess(prev => prev + letter)
          resetSolution([]);
        }
      }
    }

    return(
      <button onClick={handlePress}>
        {letter === 'BACKSPACE' ? <Backspace height={24} width={24} /> : letter}
      </button>
    )
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2px',
      padding: '2px',
    }}>
      {KEYBOARD.map((row, rowIndex) => (
        <div key={rowIndex} style={{
          display: 'flex',
          gap: '2px'
        }}>
          {row.map(letter => (
            <Key key={letter} letter={letter} />
          ))}
        </div>
      ))
      }
    </div>
  )
}