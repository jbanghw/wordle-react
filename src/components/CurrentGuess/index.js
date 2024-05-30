import { useEffect } from "react"

export default function CurrentGuess({currentGuess, setCurrentGuess, guesses, setGuesses, colors, setColors, resetSolution}) {
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup);
  })

  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
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
    } else if (key === 'Backspace') {
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
    } else if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
        resetSolution([]);
      }
    }
  }

  return (
    <div className="wordleRow">
      <button className="emptyButton">{currentGuess.length >= 0 && currentGuess[0]}</button>
      <button className="emptyButton">{currentGuess.length >= 1 && currentGuess[1]}</button>
      <button className="emptyButton">{currentGuess.length >= 2 && currentGuess[2]}</button>
      <button className="emptyButton">{currentGuess.length >= 3 && currentGuess[3]}</button>
      <button className="emptyButton">{currentGuess.length >= 4 && currentGuess[4]}</button>
      <div className="divider" />
      <button className="emptyRemoveButton" />
    </div>
  )
}