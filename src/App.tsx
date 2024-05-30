import './App.css';
import { useState } from 'react';
import { solve } from './solver';
import WordleGrid from './components/WordleGrid';
import EmptyRow from './components/EmptyRow';
import Keyboard from './components/Keyboard';

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [solution, setSolution] = useState<string[]>([]);

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
    <div className="mainApp">
      <div>
        <h1 style={{color: 'white'}}>Wordle Helper</h1>
        <div className='board'>
          <WordleGrid
            guesses={guesses}
            setGuesses={setGuesses}
            colors={colors}
            setColors={setColors}
            setSolution={setSolution}
          />
          {Array.from({length: 5 - guesses.length}, (_, idx) => <EmptyRow key={idx}/>)}
        </div>
        <div style={{ paddingBottom: '15px'}}>
          <button onClick={async () => {
            setGuesses([]);
            setColors([]);
            setSolution([]);
          }}>
            Clear
          </button>
          {
            guesses.length > 0 && guesses[guesses.length - 1].length === 5
            ?
              <button onClick={async () => {await handleSolve();}}>
                Solve
              </button>
            :
              "NOPE"
          }
          <Keyboard
            guesses={guesses}
            setGuesses={setGuesses}
            colors={colors} setColors={setColors}
            setSolution={setSolution}
          />
        </div>
      </div>
      <div>
        <h1 style={{ color: 'white' }}>
          {solution.join('\n')}
        </h1>
      </div>
    </div>
  )
}

export default App;
