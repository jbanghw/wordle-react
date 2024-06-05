import './App.css';
import { useState } from 'react';
import { solve } from './solver';
import WordleGrid from './components/WordleGrid';
import Keyboard from './components/Keyboard';
import Solution from './components/Solution';

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [solution, setSolution] = useState<string[]|string>('');

  async function handleSolve() {
    await solve(guesses, colors)
    .then(data => {
      return JSON.parse(data);
    })
    .then(json => {
      if (json.length < 1) {
        setSolution([]);
      } else {
        setSolution(json);
      }
    })
    .then(_ => {
      document.getElementById('bottomHalf')?.scrollIntoView({behavior: 'smooth'});
    })
  }

  return (
    <div className="mainApp">
      <div className='topHalf'>
        <h1 style={{color: 'white'}}>Wordle Helper</h1>
        <WordleGrid
          guesses={guesses}
          setGuesses={setGuesses}
          colors={colors}
          setColors={setColors}
          setSolution={setSolution}
        />
        <div className='buttonsKeyboard'>
          <div className='buttons'>
            <button style={{
              width: '100%',
              margin: '5px',
              fontWeight: 'bold',
              height: '30px',
              backgroundColor: '#787c7f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }} onClick={async () => {
              setGuesses([]);
              setColors([]);
              setSolution('');
            }}>
              Clear
            </button>
            {
              guesses.length > 0 && guesses[guesses.length - 1].length === 5
              ?
                <button style={{
                  width: '100%',
                  margin: '5px',
                  fontWeight: 'bold',
                  height: '30px',
                  backgroundColor: '#787c7f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px'
                }} onClick={async () => {await handleSolve();}}>
                  Solve
                </button>
              :
                <button style={{
                  width: '100%',
                  margin: '5px',
                  fontWeight: 'bold',
                  height: '30px',
                  backgroundColor: '#787c7f',
                  color: '#fff',
                  opacity: '0.3',
                  border: 'none',
                  borderRadius: '4px'
                }} disabled>Solve</button>
            }
          </div>
          <Keyboard
            guesses={guesses}
            setGuesses={setGuesses}
            colors={colors} setColors={setColors}
            setSolution={setSolution}
          />
        </div>
      </div>
      {
        typeof(solution) === 'string' ?
          <></>
        :
          <div className='bottomHalf' id='bottomHalf'>
            <Solution solution={solution} />
          </div>
      }
    </div>
  )
}

export default App;
