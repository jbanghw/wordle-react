import { useEffect } from "react";
import WordleBox from "../WordleBox";
import RemoveRow from "../RemoveRow";

const WordleGrid = ({ guesses, setGuesses, colors, setColors, setSolution }) => {

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  })

  const handleKeyup = ({ key }) => {
    let count = 0;
    for (let i = 0; i < guesses.length; i++) {
      count += guesses[i].length;
    }
    
    if (key === 'Backspace') {
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
    } else if (/^[A-Za-z]$/.test(key)) {
      if (count < 25) {
        let letter = key.toLowerCase();
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

  return (
    <div className="wordleGrid">
      {Array.from({length: 30}, (_, idx) => 
        idx % 6 === 5 ?
          <RemoveRow 
            key={idx}
            idx={idx}
            guesses={guesses}
            setGuesses={setGuesses}
            colors={colors}
            setColors={setColors}
            setSolution={setSolution}
          />
        :
          <WordleBox
            key={idx}
            idx={idx}
            guesses={guesses}
            colors={colors}
            setColors={setColors}
            setSolution={setSolution}
          />
      )}
    </div>
  )
}

export default WordleGrid;