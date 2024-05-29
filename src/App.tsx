import './App.css';
import { useState } from 'react';
import { solve } from './solver';
import WordleGrid from './components/WordleGrid';
import EmptyRow from './components/EmptyRow';
import CurrentGuess from './components/CurrentGuess';
import Keyboard from './components/Keyboard';

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [solution, setSolution] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');

  async function handleSolve() {
    await solve(guesses, colors)
    .then(data => {
      return JSON.parse(data);
    })
    .then(json => {
      if (json.length < 1) {
        setSolution(['No Solution']);
      } else {
        setSolution(json);
      }
    })
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <div style={{display: 'block'}}>
        <WordleGrid guesses={guesses} colors={colors} colorChange={setColors} guessChange={setGuesses} resetSolution={setSolution} />
        {
          guesses.length < 5 && 
            <CurrentGuess 
              currentGuess={currentGuess}
              setCurrentGuess={setCurrentGuess}
              guesses={guesses}
              setGuesses={setGuesses}
              colors={colors}
              setColors={setColors}
              resetSolution={setSolution} />
        }
        {
          Array.from({length: 4 - guesses.length}, (_, idx) => <EmptyRow key={idx}/>)
        }
        <button onClick={async () => {setGuesses([]); setColors([]);}}>
          Clear
        </button>
        <button onClick={async () => {await handleSolve();}}>
          Solve
        </button>
        <Keyboard
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          guesses={guesses}
          setGuesses={setGuesses}
          colors={colors} setColors={setColors}
          resetSolution={setSolution}
        />
        <h1>
          {solution.join(', ')}
        </h1>
      </div>
    </div>
  )
}

export default App;
