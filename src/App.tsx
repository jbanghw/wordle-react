import { useEffect, useState } from 'react';
import './App.css';
import { solve } from './solver';

function App() {
  const [res, setRes] = useState([]);

  // testing
  let guesses = [
    'adieu',
    'polys',
    'fight',
    'wreck'
  ]
  let colors = [
    'wwwgw',
    'wwyww',
    'wwwww',
    'wwyww'
  ]
  // end test

  useEffect(() => {
    const fetchSolutions = async() => {
      await solve(guesses, colors)
      .then(data => {
        return JSON.parse(data);
      })
      .then(json => {
        setRes(json);
        console.log(json);
      })
    }
    fetchSolutions();
  }, [])
  return (
    <h1>{res ? res.join(', ') : 'none'}</h1>
  );
}

export default App;
