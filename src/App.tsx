import { useState } from 'react';
import './App.css';
import { solve } from './solver';
import WordleGrid from './components/WordleGrid';

function App() {
  const [guesses, setGuesses] = useState<string[]>(['adieu', 'polys', 'fight', 'wreck']);
  const [colors, setColors] = useState<string[]>(['wwggw', 'wwwwy', 'wywww', 'wyywy']);
  const [currentGuess, setCurrentGuess] = useState('');

  return (
    <WordleGrid guesses={guesses} colors={colors} colorChange={setColors} rowRemove={setGuesses} />
  )

  // testing
  // const [res, setRes] = useState([]);
  // let guesses: string[] = []
  // let colors: string[] = []
  // useEffect(() => {
  //   const fetchSolutions = async() => {
  //     await solve(guesses, colors)
  //     .then(data => {
  //       return JSON.parse(data);
  //     })
  //     .then(json => {
  //       setRes(json);
  //       console.log(json);
  //     })
  //   }
  //   fetchSolutions();
  // }, [])
  // return (
  //   <h1>{res ? res.join(', ') : 'none'}</h1>
  // );
  // end test

}

export default App;
